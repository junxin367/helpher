import ShootManager from "./ShootManager";
import SBullet from "./SBullet";
import GameEntity from "./SGameEntity";
import PsFxPlayer from "../../misc/PsFxPlayer";
import Signal from "../../core/Signal";


const { ccclass, property, menu } = cc._decorator;

enum DirType {
    FixDir,
    SelfRotation,
    ParentRotation,
    Target
}

export interface BulletInterface {
    damage: number,
    fire(vel: cc.Vec2),
}

@ccclass
@menu("shooter/FireAgent")
export default class SFireAgent extends cc.Component {

    @property(cc.Prefab)
    bulletPrefab: cc.Prefab

    @property({ type: cc.Enum(DirType) })
    dirType: DirType = DirType.SelfRotation;

    /**跟据哪个节点决定rotation */
    @property({ type: cc.Node, visible: function () { return this.dirType == DirType.Target } })
    aimTarget: cc.Node = null;

    @property({ visible: function () { return this.dirType == DirType.FixDir } })
    rotation: number = -90;

    @property
    auto_fire: boolean = true;

    paused: boolean = false;

    @property({ visible: function () { return this.auto_fire } })
    fireInterval: number = 0.1;

    @property(PsFxPlayer)
    fireFx: PsFxPlayer = null;

    @property
    initSpeed: number = 5;

    host: GameEntity = null;

    private fireTimestamp = 0;

    @property
    bulletDamage: number = 10;

    /** 一次发射多少颗子弹 */
    numOfFire: number = 1
    /**每发子弹亲倾斜角度 */
    @property
    anglePadding: number = 4;

    private reloadTimestamp = 0
    /**容量 0/-1 : 代表无穷 */
    bullet_capcity: number = -1;

    bullets_left: number = 1;

    /**自动换弹 */
    auto_reload: boolean = true;

    /** reload dur */
    dur_reload: number = 0;

    //子弹声音
    ran: number = 1

    fireSignal: Signal = new Signal();
    reloadStartSignal: Signal = new Signal();
    reloadEndSignal: Signal = new Signal();

    bulletCompTypeName: string = null;

    onLoad() {
        if (!this.fireFx) {
            this.fireFx = this.getComponent(PsFxPlayer);
            if (this.fireFx)
                this.fireFx.preload();
        }
        if (this.host == null) {
            this.host = this.getComponentInParent(GameEntity)
        }
        this.ran = Math.ceil(Math.random()*4)
    }

    setMuzzleFlash(prefab: cc.Prefab | string, scale = 1) {
        this.fireFx.clear()
        if (typeof (prefab) == "string")
            this.fireFx.prefabPath = prefab;
        else
            this.fireFx.prefab = prefab;
        this.fireFx.scale = scale
    }

    createBullet() {
        if (this.bulletPrefab == null) return null;
        let worldpos = this.node.getParent().convertToWorldSpaceAR(this.node.getPosition());
        let bulletNode = ShootManager.instance.createBullet(this.bulletPrefab, worldpos)
        if (this.bulletCompTypeName == null) {
            let bullet = bulletNode.getComponents(cc.Component).find(v => v['fire'] != null)
            if (bullet) {
                this.bulletCompTypeName = bullet['__proto__']['__classname__'];
            }
        }
        return bulletNode;
    }

    onDoFire() {
        // 3/2 = 1.5 = 1
        // 0 - 1 = -0.5
        // 1 - 1 = 0.5
        // 2 - 1 =  1.5
        let ci = 0
        this.numOfFire > 1 && (ci = Math.floor(this.numOfFire / 2))
        let bullets = [];
        for (var i = 0; i < this.numOfFire; i++) {
            let node = this.createBullet();
            if (node) {
                let bullet = node.getComponent(this.bulletCompTypeName) as BulletInterface;
                if (bullet) {
                    bullet.damage = this.bulletDamage;
                    let rot = this.rotation + this.anglePadding * (i - ci)
                    let v = cc.Vec2.RIGHT;
                    v.rotateSelf(cc.macro.RAD * rot);
                    v.mulSelf(this.initSpeed);
                    bullet.fire(v);
                    node.angle = rot;
                    bullets.push(bullet);
                    if (this.bullet_capcity > 0)
                        this.bullets_left--;
                }
            }
            else
                console.warn("[SFireAgent ] create bullet failed, check prefab nil and prefab if has[SBullet] !");
        }
        this.fireSignal.fire(bullets);
        return bullets
    }

    fire(rotation?): SBullet[] {
        if (this.paused) return []
        if (this.bullets_left <= 0) return []
        if (this.host && !this.host.isActive) {
            return []
        }
        if (rotation != null) {
            this.rotation = rotation;
        } else {
            if (this.dirType == DirType.SelfRotation) {
                this.rotation = this.node.rotation;
            } else if (this.dirType == DirType.Target) {
                let toTarget = ccUtil.getWorldPosition(this.aimTarget).sub(ccUtil.getWorldPosition(this.node))
                this.rotation = Math.atan2(-toTarget.y, toTarget.x) * cc.macro.DEG;
                this.node.rotation = this.rotation;
            } else if (this.dirType == DirType.ParentRotation) {
                this.rotation = this.node.parent.rotation - this.node.rotation;
                if (this.node.parent.scaleX < 0) {
                    this.rotation += 180;
                }
            }
        }
        if (this.fireFx) {
            this.fireFx.play();
        }
        return this.onDoFire();
    }

    start() {

    }

    fillBullets() {
        this.bullets_left = this.bullet_capcity
    }

    set autoFire(b) {
        this.auto_fire = b;
    }

    reload_succ() {
        if (this.bullet_capcity <= 0) return;
        this.reloadTimestamp = 0;
        this.bullets_left = this.bullet_capcity;
        this.reloadEndSignal.fire(this)
    }

    /** 正在reload  */
    isReloading() {
        return this.reloadTimestamp > 0
    }

    //手动reload 
    reloadManually() {
        if (this.bullet_capcity <= 0) return;
        this.onReloadStart();
        this.reloadTimestamp = 1;
        this.scheduleOnce(this.reload_succ, this.dur_reload);
    }

    onReloadStart() {
        this.reloadStartSignal.fire(this)
    }

    update(dt) {
        if (this.paused) return;
        if (this.auto_fire) {
            this.fireTimestamp += dt;
            if (this.fireTimestamp > this.fireInterval) {
                this.fireTimestamp = 0;
                this.fire();
            }
        }
        if (this.bullets_left <= 0) {
            if (this.auto_reload) {
                if (this.reloadTimestamp == 0) {
                    this.onReloadStart();
                }
                this.reloadTimestamp += dt;
                if (this.reloadTimestamp > this.dur_reload) {
                    this.reloadTimestamp = 0;
                    this.reload_succ();
                }
            }
        }
    }


    onDisable() {
    }
    // update (dt) {}
}
