import AIEnemy from "./AIEnemy";
import FSM from "../../framework/core/FSM";
import { evt } from "../../framework/core/event";
import ItemBall from "./ItemBall";
import ItemKey from "./ItemKey";
import Door from "./Door";
import ccUtil from "../../framework/utils/ccUtil";
import SkeletonBase from "./SkeletonBase";
import KeyToggle, { KeyDir } from "./KeyToggle";
import Device from "../../framework/misc/Device";
import Target from "./Target";
import RemoveOutOfView from "./RemoveOutOfView";
import Thunder from "./Levels/Thunder";
import { UserInfo } from "../../framework/extension/weak_net_game/UserInfo";
import Ballon from "./Ballon";
import Bomb from "./Bomb";
import ItemPortal from "./Portal";
import { Toast } from "../../framework/ui/ToastManager";
import Unity from "./Common/Unity";
import Game from "./Game";
import Effect from "./Levels/Effect";
const { ccclass, property } = cc._decorator;

enum State {
    Breath,
    Idle,
    Move,
    Shocked,
    Cliff,
    Flee,
    Lose,
    Win,
    Dead,
    PrepareGun,
    Fly,
    Trigger,
    Kick
}

enum Emotion {
    Normal,
    Happy,
    Frightened
}

const Role_sounds = ['enheng', 'laugh']
const Dead_sounds = ['dead', 'dead2']


@ccclass
export default class Role extends SkeletonBase {
    fsm: FSM;
    private _dir: number = 1;

    speed: number = 1;

    baseScale: number = 0;

    emotionState: FSM;

    isLose = false;

    @property(cc.AudioClip)
    audio_cry: cc.AudioClip = null;

    @property(cc.AudioClip)
    audio_laugh: cc.AudioClip = null;

    static self: Role = null

    hasGun: boolean = false;

    colliders: cc.PhysicsCollider[];

    inHandObject: dragonBones.Armature = null;

    ballon: Ballon = null;

    public get dir(): number {
        return this._dir;
    }
    public set dir(value: number) {
        this._dir = value;
        this.node.scaleX = this.baseScale * value;
    }

    start() {
        Role.self = this;
        evt.on("Game.keyMoved", this.checkMove, this);
        evt.on('Game.hello', this.sayHelloBack, this);
        evt.on("Game.loseTarget", this.onLoseTarget, this)
        evt.on("Game.catch", this.beCatched, this)
        evt.on("Game.bomb", this.goDead, this);
        evt.on("Game.changeRoleDir", this.changeDirManually, this);
        evt.on("Game.enemyDead", this.onEnemyDead, this);
        //this.beCatched(enemy)
        this.colliders = this.getComponents(cc.PhysicsCollider);


        this.baseScale = this.node.scale;

        this.fsm = this.addComponent(FSM);
        this.fsm.init(this, State);
        this.fsm.enterState(State.Idle)

        this.emotionState = this.addComponent(FSM);
        this.emotionState.init(this, Emotion)
        this.emotionState.enterState(Emotion.Normal)


        let check = this.addComponent(RemoveOutOfView);
        check.onOffScreen.on(this.onOutOfScreen, this)
        this.equipGun();
        Unity.loadSkins(this.skeleton, 1);
    }

    onOutOfScreen() {
        evt.emit("Game.lose")
    }

    changeDirManually() {
        if (this.fsm.isInState(State.Idle)) {
            this.checkMove();
        } else {
            //changeDir
            if (this.fsm.isInState(State.Move))
                this.dir *= -1;
        }
    }

    onLoseTarget() {
        //back to nomrmal
        this.armature.animation.timeScale = 1;
        // this.fsm.changeState(State.Breath);
    }

    onDestroy() {
        evt.off(this);
        Role.self = null;

    }

    /** 给主角装武器 ,后面给抵挡一次伤害*/

    _thunderPrefab: cc.Prefab = null;

    equipGun() {
        this.hasGun = true;
        ccUtil.getRes("Prefabs/effect/thunder", cc.Prefab).then(v => {
            this._thunderPrefab = v;
        })
    }

    onBeginContact(contact: cc.PhysicsContact, self, other: cc.PhysicsCollider) {
        let group = other.node.group;
        if (group == 'enemy') {
            let enemy = other.getComponent(AIEnemy)
            if (enemy) {
                contact.disabled = true;
            }
        } else if (group == 'target') {
            //win 
            contact.disabled = true;
            this.fsm.changeState(State.Win);
        } else if (group == 'pin') {
            // if (other.node.y > this.node.y + 30) {
            //     contact.disabledOnce = true;
            // }

            if (this.fsm.isInState(State.Fly)) {
                contact.disabled = true;
            }
            let pin = other.getComponent(KeyToggle);
            if (pin) {
                if (pin.curDir.y < 0) {
                    let wpos = ccUtil.getWorldPosition(other.node)
                    if (wpos.y >= this.worldCenter().y) {
                        contact.disabled = true;
                    }
                } else if (pin.curDir.y > 0) {
                    this.fsm.changeState(State.Idle);
                }
            }
        } else if (group == 'item') {
            //吃道具  ball, key 
            let name = other.node.name;
            if (name == 'ball') {
                let ball = other.node.getOrAddComponent(ItemBall);
                ball.go();
                Device.playSfx("pickup")
            } else if (name == 'key') {
                let key = other.node.getOrAddComponent(ItemKey);
                key.go();
            } else if (name == 'xuehua') {
                Effect.throw_snowballs();
                other.node.destroy();
            } else if (name == 'gun') {
                UserInfo.gun_num += 1;
                this.fsm.changeState(State.Idle);
                this.fastFadeIn("gun_out", 1)
                this.scheduleOnce(this.open_fire, 0.5);
                other.node.destroy();
            } else if (name == 'magnet') {
                Effect.do_magnet();
                other.node.destroy();
            }
        } else if (group == 'wall') {
            if (this.fsm.isInState(State.Fly)) {
                contact.disabled = true;
            }
            Device.playSfx('fall')
            // let name = other.node.name;
            // if (name == 'door') {
            //     let door = other.node.addComponent(Door)
            // }
        } else if (group == 'stop') {
            this.fsm.changeState(State.Idle, 0.5);
        } else if (group == 'ballon') {
            //ballon

            let ballon = other.getComponent(Ballon);
            if (cc.isValid(ballon)) {
                if (ballon.isDead()) return;
                let handSlot = this.handSlot;
                // handSlot.childArmature = ballon.armature;
                // let hand = cc.find("ATTACHED_NODE_TREE/ATTACHED_NODE:youshou/ATTACHED_NODE:youshou1", this.node)
                // ballon.node.parent = hand;
                if (this.inHandObject == null) {
                    let factory = dragonBones.CCFactory.getInstance();
                    handSlot.childArmature = factory.buildArmature("Armature", ballon.skeleton.getArmatureKey())
                    handSlot.childArmature.animation.play("up", 0)
                    this.inHandObject = handSlot.childArmature;
                } else {
                    handSlot.childArmature = this.inHandObject;
                }
                // factory.replaceSlotDisplay(ballon.skeleton.getArmatureKey(), "Armature", "ballon", "ballon", handSlot);
                if (cc.isValid(this.ballon)) {
                    try {
                        let p = cc.v2(this.node.x + 25 * this.dir, this.node.y + 100);
                        this.ballon.flyAway(p);
                    } catch (e) {
                        console.error(e)
                    }
                }
                this.ballon = ballon;
                this.fsm.changeState(State.Fly)
                // this.scheduleOnce(() => , 0.3)
                // this.fsm.changeState(State.Fly);
                let state = this.fsm.getState(State.Fly) as any;
                state.fly_startY = this.ballon.node.y;
                ballon.node.active = false;
                Device.playSfx("pickup")
                // ballon.node.destroy();
            }
        } else if (group == 'spike') {
            Device.playSfx("arrow_hit_body")
            this.goDead();
        } else if (group == 'bomb') {
            let bomb = other.getComponent(Bomb);
            if (bomb.isHiding) return;
            this.fsm.changeState(State.Kick, bomb);
        }
    }

    onEnter_Kick(state, bomb) {

        this.playAnim("kick", 1)
        this.body.linearVelocity = cc.v2(0, 0)
        this.skeleton.addEventListener(dragonBones.EventObject.COMPLETE, () => {

        })
        state.bomb = bomb
    }

    onUpdate_Kick() {
        if (this.fsm.timeElapsed > 0.5) {
            this.fsm.changeState(State.Idle)
        }
    }

    onExit_Kick(state) {
        Device.playSfx("kick_bomb")
        let bomb = state.bomb as Bomb;
        bomb.goAway(this.dir);
    }


    //被抓住
    beCatched() {
        console.log("lose game!!!!")
        // cc.audioEngine.playEffect(this.audio_cry, false);
        Device.playSfx("ough");
        this.fsm.changeState(State.Lose)
    }

    _dectedDir: number = 0;
    _dectedEnemy: AIEnemy = null;
    //被 发现s
    beDetected(enemy: AIEnemy) {
        console.log("be detected ")
        //惊吓 s
        evt.emit("Game.beDected")
        this._dectedDir = this.node.x > enemy.node.x ? 1 : -1;
        this._dectedEnemy = enemy;
        this.dir = -this._dectedDir;
        // if (this.hasGun) {
        //     this.fsm.changeState(State.PrepareGun)
        // } else {
        this.fsm.changeState(State.Shocked);
        // }
    }

    onEnter_Shocked() {
        if (!this.hasGun) {
            cc.audioEngine.playEffect(this.audio_cry, false);
        }
        this.playAnim("shocked", 1)
    }



    /**开火 */
    open_fire() {
        this.playAnim("idle")
        // this.fastFadeIn("gun_out", 1)
        this.fsm.changeState(State.Trigger);
    }

    onEnter_Trigger() {
        let enemies = this.checkEnemy()
        if (enemies.length == 0) {
            enemies = this.checkEnemy(null, -this.dir)
            if (enemies.length > 0) {
                this.dir = -this.dir
            }
        }
        if (enemies.length == 0) {
            Toast.make("前方没有敌人，无法使用！")
            return;
        }
        this.stopAnim();
        this.playAnim("gun", 1)

        this.lightEnemies(enemies);

        evt.emit("Game.UseGun");
        UserInfo.gun_num -= 1;
    }

    async lightEnemies(enemies) {
        let first = this.node;
        for (var i = 0; i < enemies.length; i++) {
            let enemy = enemies[i]
            enemy.goDead("dead_smoke");
            await this.getThunder().play(first, enemy.node, cc.v3(0, 60, 0));
            first = enemy.node;
        }
    }


    onUpdate_Trigger() {
        if (this.fsm.timeElapsed > 1.5) {
            this.fsm.changeState(State.Idle);
        }
    }

    _thunder: Thunder = null;

    getThunder() {
        if (this._thunder == null) {
            let node = cc.instantiate(this._thunderPrefab)
            // this.node.addChild(node);
            node.parent = this.node.parent;
            this._thunder = node.getComponent(Thunder);
        }
        return this._thunder;
    }



    onUpdate_Shocked() {
        if (this.fsm.timeElapsed > 0.5) {
            //run
            if (!this.isLose) {
                this.fsm.changeState(State.Flee);
            }
        }
    }


    onEnter_Flee() {
        this.dir = this._dectedDir
        this.playAnim("walk")
        this.armature.animation.timeScale = 2;
        this.changeEmotionState(Emotion.Frightened);
    }

    onUpdate_Flee() {
        //walk away 
        let b = this.checkIsCliff(0);
        if (b) {
            this.fsm.changeState(State.Cliff);
        }
        if (this.fsm.timeElapsed > 2.5) {
            this.fsm.changeState(State.Breath)
        }
        this.move();
    }

    onExit_Flee() {
        this.armature.animation.timeScale = 1;
    }

    onEnter_Move() {
        this.playAnim("walk")
        this.fadeIn("normal", 1)
    }

    onUpdate_Move() {
        this.move()
        let b = this.checkIsCliff(0)
        if (b) {
            // this.fsm.changeState(State.Cliff)
            this.fsm.changeState(State.Idle)
            // this.dir *= -1;
        } else if (this.checkIsWall()) {
            this.fsm.changeState(State.Idle)
            //change dir
            this.dir *= -1;
        }
    }
    onExit_Move() {
        this.stopAnim();
    }

    onEnter_Breath(state) {
        this.playAnim("breath")
        Device.playSfx("breath")
        state.setTimeout(1.0, () => this.fsm.changeState(State.Idle))
    }

    onEnter_Cliff() {
        // this.playAnim('cliff', 1)
        // Device.playSfx("cliff")
    }

    onUpdate_Cliff() {
        if (this.fsm.timeElapsed > 1) {
            this.fsm.changeState(State.Idle)
            // this.dir *= -1
        }
    }

    onEnter_Idle(state, timeout) {
        this.playAnim("idle")
        state.timeout = timeout;
        state.setInterval(0.75, this.checkTarget, this);
    }

    onExit_Idle() {
        this.stopAnim();
    }

    onUpdate_Idle(state) {
        if (state.timeout) {
            if (this.fsm.timeElapsed > state.timeout) {
                this.fsm.revertState();
            }
        }
    }

    onEnter_Fly(state) {
        // this.colliders.forEach(v => v.enabled = false)
        if (this.fsm.getPreviousState().id != State.Fly) {
            this.playAnim("fly_idle")
            this.fastFadeIn("fly_enter", 1)
        }

        state.gravityScale = this.body.gravityScale;
        this.body.gravityScale = 0;
        state.fly_startY = this.ballon.node.y;
    }

    onUpdate_Fly(state) {
        if (this.fsm.timeElapsed < 0.5) {
            this.body.linearVelocity = cc.v2(this.dir * 75, 100);
        } else {
            this.body.linearVelocity = cc.v2(0, 100);
        }
        let dist = this.node.y - state.fly_startY;
        if (dist > 222) {
            this.fsm.changeState(State.Idle);
        }
    }


    onExit_Fly(state) {
        //recovery 
        // this.colliders.forEach(v => v.enabled = true)
        this.body.gravityScale = state.gravityScale
        this.handSlot.childArmature = null;

        let p = cc.v2(this.node.x + 25 * this.dir, this.node.y + 100);
        this.ballon.flyAway(p);
    }

    checkTarget() {
        this.raycast();
    }

    /**判断 前方是否是老头 */
    raycast() {
        let cliff = this.checkIsCliff(0)
        if (cliff) {
            return false;
        }
        let p1 = this.worldCenter();
        let p2 = cc.v2(p1.x + this.dir * 800, p1.y)
        let res = this._world.rayCast(p1, p2, cc.RayCastType.Closest)
        // console.log(res[0].collider.node.group);
        let r = res[0]
        if (r) {
            let group = r.collider.node.group;
            if (group == 'target') {
                this.fsm.changeState(State.Move)
                evt.emit("Game.seeTarget", this);
                return true;
            }
        }
        return false;
    }

    onEnter_Lose() {
        //游戏失败
        this.isLose = true;
        // this.playAnim("idle")
        this.changeEmotionState(Emotion.Frightened)
    }

    onEnter_Win() {
        //游戏胜利
        this.playAnim2('idle', "happy")
        evt.emit("Game.win")
    }

    move() {
        // this.node.x += this.dir * this.speed;
        let v = this.body.linearVelocity;
        this.body.linearVelocity = cc.v2(this.dir * this.speed * 180, v.y)
    }


    playEmmmCD: number = 0;

    playEmmm() {
        if (this.playEmmmCD <= 0) {
            Device.playSfx("eh")
            this.playEmmmCD = 5;
        }
    }

    //判断能否 移动
    checkMove() {
        if (this.fsm.isInState(State.Shocked) ||
            this.fsm.isInState(State.PrepareGun) ||
            this.fsm.isInState(State.Flee) ||
            this.fsm.isInState(State.Trigger) ||
            this.fsm.isInState(State.Fly) ||
            this.fsm.isInState(State.Dead)) return;
        if (this.isLose) return;

        let wall = this.checkIsWall(60, this.dir);
        if (wall) {
            //不处理
            let wall2 = this.checkIsWall(60, -this.dir);
            if (!wall2) {
                this.dir *= -1;
                this.changeToMove()
            } else {
                this.playEmmm()
            }
        } else {
            let cliff = this.checkIsCliff(0)
            if (!cliff) {
                //canmove 
                this.changeToMove()
            } else {
                // this.fadeIn("cliff", 1)
                let cliff = this.checkIsCliff(0, -this.dir)
                if (!cliff) {
                    this.dir *= -1;
                    this.changeToMove();
                }
            }
        }
        this.playEmmmCD -= 1;
    }

    changeToMove() {
        if (!this.isLose) {
            if (Math.random() < 0.5) {
                Device.playSfx(g.getRandomInArray(Role_sounds))
            }
            this.fsm.changeState(State.Move);
        }
    }

    //判断前方是墙
    checkIsWall(dist = 60, dir = this.dir) {
        // let p1 = this.node.getBoundingBoxToWorld().center;
        let p1 = this.worldCenter();
        let p2 = cc.v2(p1.x + dir * dist, p1.y)
        let res = this._world.rayCast(p1, p2, cc.RayCastType.Closest)
        let r = res[0];
        if (r) {
            let group = r.collider.node.group
            if (group == 'wall' || group == 'pin' || group == 'obstacle' || group == 'weapon') {
                return true
            }
        }
        return false;
    }

    //判断前方是悬崖
    //height从100 的高处观察是否有悬崖
    checkIsCliff(height, dir = this.dir) {
        height = height || 100;
        //100:为高度，安全区域 射线 最大长度为c
        let c = height / Math.sin(cc.misc.degreesToRadians(45))
        // let csq = c * c;
        // c += 5;//5个像素误差
        let rect = this.node.getBoundingBoxToWorld();
        let p1 = cc.v2(rect.center.x, rect.origin.y + height);
        let p2 = cc.v2(p1.x + dir * c, p1.y - c)
        let res = this._world.rayCast(p1, p2, cc.RayCastType.Closest)
        let r = res[0];
        return r == null;
        // if (r) {
        //     let lensq = cc.Vec2.squaredDistance(p1, r.point);
        //     if (lensq > csq) {
        //         //看到悬崖
        //         return true
        //     }
        // }
        return false;
    }

    tmp_enemies = []

    /**看前方是否有敌人 */
    checkEnemy(height = null, dir = this.dir): AIEnemy[] {
        height = height || 90;
        let rect = this.node.getBoundingBoxToWorld();
        let p1 = cc.v2(rect.center.x, rect.origin.y + height);
        let p2 = cc.v2(p1.x + dir * 800, p1.y)
        let res = this._world.rayCast(p1, p2, cc.RayCastType.All)
        this.tmp_enemies.splice(0);
        for (let i = 0; i < res.length; i++) {
            let r = res[i]
            if (r && r.collider) {
                let enemy = r.collider.getComponent(AIEnemy);
                if (enemy) this.tmp_enemies.push(enemy);
            }
        }
        return this.tmp_enemies;
    }

    onEnemyDead() {
        // this.emotionState.changeState(Emotion.Happy);
        this.scheduleOnce(v => {
            this.changeEmotionState(Emotion.Happy);
        }, 1)
        Device.playEffect(this.audio_laugh);
    }


    onEnter_Happy(state, param) {
        if (this.isDead()) return
        if (param) {
            this.fadeIn(param, 1)
        } else {
            this.fadeIn("happy", 1)
        }
    }

    onEnter_Normal() {
        if (this.isDead()) return
        this.fadeIn("normal", 1)
    }

    onEnter_Frightened() {
        if (this.isDead()) return
        this.fadeIn("frightened", 1)
    }

    onUpdate_Frightened() {
        if (this.emotionState.timeElapsed > 3.0) {
            this.changeEmotionState(Emotion.Normal)
        }
    }

    onUpdate_Happy() {
        if (this.emotionState.timeElapsed > 3.0) {
            this.changeEmotionState(Emotion.Normal)
        }
    }

    changeEmotionState(state, param?) {
        if (this.isDead()) return;
        this.emotionState.changeState(state, param);
    }

    sayHelloBack(target: Target) {
        if (this.fsm.isInState(State.Idle)) {
            let targetDir = target.dir;
            this.dir = -targetDir;
            this.changeEmotionState(Emotion.Happy, 'hello')
            Device.playSfx("hi")
        } else {
            this.changeEmotionState(Emotion.Happy)
        }
    }

    goDead() {
        this.fsm.changeState(State.Dead);

    }

    onUpdate_Dead() {

    }

    onEnter_Dead(state) {
        Device.playSfx(g.getRandomInArray(Dead_sounds))
        this.playAnim("dead", 1)
        state.setTimeout(0.5, () => {
            evt.emit("Game.lose")
            this.fadeIn("eye_close", 1)
        })
    }

    isDead() {
        return this.fsm.isInState(State.Dead);
    }

}