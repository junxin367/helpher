import FSM from "../../framework/core/FSM";
import Role from "./Role";
import { evt } from "../../framework/core/event";
import SkeletonBase from "./SkeletonBase";
import Device from "../../framework/misc/Device";
import RemoveOutOfView from "./RemoveOutOfView";
import Bomb from "./Bomb";
import BombTooltip from "./BombTooltip";
import Game from "./Game";

const { ccclass, property } = cc._decorator;


enum State {
    //巡逻
    Idle,
    Seek,
    //选择方向 
    Judge,
    //发现主角
    Detected,
    //追逐
    Chase,
    //抓到
    Catch,
    // 
    Freezed,
    LoseTarget,
    Dead,
}

enum FaceDir {
    Left = 0,
    Right = 1
}


@ccclass
export default class AIEnemy extends SkeletonBase {
    @property({ type: cc.Enum(FaceDir) })
    faceDir: FaceDir = FaceDir.Right;
    //面向 
    @property
    private _dir = 1;
    public get dir() {
        return this._dir;
    }
    public set dir(value) {
        this._dir = value;
        let c = 1;
        if (this.faceDir == FaceDir.Left) {
            c = -1
        }
        if (this.bombTooltip)
            this.bombTooltip.dir = value;
        this.node.scaleX = this.baseScale * value * c;
    }

    static allEnemies: AIEnemy[] = []

    baseScale: number = 0;
    speed = 1;
    fsm: FSM;

    collider: cc.PhysicsCollider;

    @property(cc.AudioClip)
    detected_audio: cc.AudioClip = null;

    @property(cc.AudioClip)
    audio_bite: cc.AudioClip = null;

    @property(cc.AudioClip)
    audio_catched: cc.AudioClip = null;


    /**进入休息时发出的声音 */
    @property(cc.AudioClip)
    audio_seek: cc.AudioClip = null;

    anim: cc.Animation = null;

    @property(cc.AudioClip)
    audio_dead: cc.AudioClip = null;

    @property(cc.AudioClip)
    audio_walk: cc.AudioClip = null;

    @property(cc.AudioClip)
    audio_question: cc.AudioClip = null;

    @property
    dead_with_fall: boolean = false;

    bomb: Bomb;

    @property(BombTooltip)
    bombTooltip: BombTooltip = null

    start() {
        AIEnemy.allEnemies.push(this);
        this.fsm = this.addComponent(FSM);
        this.fsm.init(this, State);
        // this.fsm._log = true;
        evt.on("Game.keyMoved", this.onKeyMove, this);
        evt.on("Game.bomb", this.goDead, this);
        this.fsm.enterState(State.Seek)
        this.baseScale = this.node.scale;
        this.collider = this.getComponent(cc.PhysicsCollider);
        if (this.faceDir == FaceDir.Left) {
            this._dir = -1
        }
        // this._dir = this.faceDir;
        this.addComponent(RemoveOutOfView);
        this.anim = this.getComponent(cc.Animation);

        this.loseBomb();
    }


    onDestroy() {
        if (this.bombTooltip && this.bombTooltip.node) {
            this.bombTooltip.node.destroy();
        }
        evt.off(this);
        let idx = AIEnemy.allEnemies.indexOf(this);
        AIEnemy.allEnemies.splice(idx, 1)
        this.removeBomb();


    }

    _world: cc.PhysicsManager;

    set enableCollide(b) {
        // if (b) {
        this.collider.enabled = b;
        this.collider.sensor = !b;
        this.fsm.enabled = b;
        this.fsm.pause()
    }

    removeBomb() {
        if (this.bombTooltip && this.bombTooltip.node)
            this.bombTooltip.node.active = false;
        if (cc.isValid(this.bomb))
            this.bomb.node.destroy();
    }

    onEnter_Seek(state) {
        this.speed = 1
        //射线检测  主角
        state.setInterval(0.5, this.seek_l_r, this);
        state.setInterval(2, this.needHavaRest, this)
        this.playAnim("walk")
        if (this.audio_walk)
            state.audio = Device.playEffect(this.audio_walk, true)
    }

    onExit_Seek(state) {
        Device.stopEffect(state.audio);
    }

    onKeyMove() {
        if (this.fsm.isInState(State.Seek) || this.fsm.isInState(State.Idle)) {
            this.fsm.changeState(State.Judge);
        }
    }


    seek_l_r() {
        if (Game.instance.isOver) return;
        if (!this.raycast(this.dir)) {
            this.raycast(-this.dir);
        }
    }


    onEnter_Judge() {
        this.playAnim("idle")
        if (!this.raycast()) {
            this.dir = -this.dir;
            this.raycast();
        }

    }

    onUpdate_Judge() {
        if (this.fsm.timeElapsed > 0.5) {
            this.fsm.changeState(State.Seek);
        }
    }


    onExit_Judge() {
        console.log("选择方向")
        this.dir = - this.dir;
    }


    //判断前方是墙
    checkIsWall(dist = 100, dir = this.dir) {
        let p1 = this.worldCenter();
        let p2 = cc.v2(p1.x + dir * dist, p1.y)
        let res = this._world.rayCast(p1, p2, cc.RayCastType.Closest)
        let r = res[0];
        if (r) {
            let group = r.collider.node.group
            if (group == 'wall' || group == 'pin') {
                return true
            }
        }
        return false;
    }

    _dectedRole: Role;

    raycast(dir?) {
        dir = dir || this.dir
        let p1 = this.worldCenter();
        let p2 = cc.v2(p1.x + this.dir * 800, p1.y)
        let res = this._world.rayCast(p1, p2, cc.RayCastType.Closest)
        // console.log(res[0].collider.node.group);
        for (let k in res) {
            let r = res[k];
            let role = r.collider.getComponent(Role);
            if (role) {
                this.fsm.changeState(State.Detected)
                role.beDetected(this);
                this._dectedRole = role;
                return true;
            }
        }
        return false;
    }

    needHavaRest() {
        let r = Math.random();
        if (r < 0.5) {
            this.fsm.changeState(State.Idle);
            if (this.audio_seek) {
                Device.playEffect(this.audio_seek);
            }
        }

    }

    onEnter_Idle() {
        // console.log('休息一会')
        this.speed = 0;
        this.playAnim("idle")
    }

    onUpdate_Idle() {
        if (this.fsm.timeElapsed > 1.0) {
            this.fsm.revertState();
        }
    }

    go_frozen() {
        this.fsm.changeState(State.Freezed);
    }
    exit_frozen() {
        this.fsm.changeState(State.Judge);
    }

    onEnter_Freezed() {
        this.skeleton.timeScale = 0;
    }

    onExit_Freezed() {
        this.skeleton.timeScale = 1;
    }

    onUpdate_Seek() {
        // p1 主角的眼
        this.move();
    }

    onEnter_Detected(state) {
        //显示 感叹号 
        this.anim.play("inform");
        if (this.detected_audio)
            Device.playEffect(this.detected_audio, false);
    }

    onUpdate_Detected() {
        ///chase   
        if (this.fsm.timeElapsed > 0.3) {
            // 后开始 chase 
            this.fsm.changeState(State.Chase)
        }
    }

    onExit_Detected(state) {
        Device.stopSfx(state.sfx)
    }

    onEnter_Chase() {
        this.playAnim("pursue")
        if (this.audio_walk)
            Device.playEffect(this.audio_walk);
        if (this._dectedRole)
            this.dir = this._dectedRole.node.x < this.node.x ? -1 : 1;
        this.speed = 2;
        this.armature.animation.timeScale = 2;
    }

    onUpdate_Chase() {
        this.move();
        //3s 后恢复正常状态 
        if (this.fsm.timeElapsed > 2.5) {
            this.fsm.changeState(State.LoseTarget)
        }
    }

    onEnter_LoseTarget() {
        //显示问号 
        console.log('目标丢失!')
        this.anim.play("question")
        if (this.audio_question) {
            Device.playEffect(this.audio_question)
        }
        evt.emit("Game.loseTarget", this);
    }
    onUpdate_LoseTarget() {
        if (this.fsm.timeElapsed > 0) {
            this.fsm.changeState(State.Seek);
        }
    }

    onExit_LoseTarget() {
        this.dir *= -1
        this.armature.animation.timeScale = 1;
    }

    onEnter_Catch(state, param) {
        evt.emit("Game.catch", param)
        this.playAnim("idle")
        if (this.audio_catched) {
            Device.playEffect(this.audio_catched, false);
        }
        if (this._catchedRole)
            this.dir = this._catchedRole.node.x < this.node.x ? -1 : 1;
        // state.setInterval(1.5, this.bite, this)  
    }

    bite() {
        this.fadeIn('bite', 2)
        if (this.audio_bite) {
            Device.playEffect(this.audio_bite, false);
        }
    }

    onUpdate_Catch(state) {
    }

    _catchedRole: Role = null;

    onBeginContact(contact: cc.PhysicsContact, selfCollider, other: cc.PhysicsCollider) {
        if (this.collider && this.collider.enabled == false) return;
        if (this.fsm.isInState(State.Freezed)) return;
        if (Game.instance.isOver) return;
        let group = other.node.group;
        if (group == 'role') {
            if (this.isDead()) return
            this._catchedRole = other.getComponent(Role);
            this.fsm.changeState(State.Catch, 'role')
            return;
        } else if (group == 'target') {
            if (this.isDead()) return
            this.fsm.changeState(State.Catch, 'target')
            return;
        } else if (group == 'bomb') {
            contact.disabled = true;
            if (this.isDead()) {
                return;
            }
            if (this.node.name == 'badman') {
                let bomb = other.getComponent(Bomb);
                this.getBomb(bomb);
                return;
            }
        } else if (group == 'spike') {
            Device.playSfx("arrow_hit_body")
            if (this.isDead()) return;
            this.goDead();
            return
        }
        let m = contact.getWorldManifold()
        // console.log(m.normal.x)
        if (m.normal.x >= 0.98) {
            this.dir = -1;
        } else if (m.normal.x <= -0.98) {
            this.dir = 1
        }
    }

    getBomb(bomb: Bomb) {
        if (this.bomb || bomb.holder) return;
        this.bomb = bomb;
        bomb.holder = this.node;
        bomb.hide();
        this.handSlot.displayIndex = 0;
        if (this.bombTooltip)
            this.bombTooltip.bomb = bomb;


    }

    loseBomb() {
        if (this.handSlot) this.handSlot.displayIndex = -1;
        if (this.bombTooltip)
            this.bombTooltip.bomb = null;
        if (cc.isValid(this.bomb)) {
            if (this.bomb.isExploded) return;
            let pos = this.node.position
            pos.y += 100;
            this.bomb.drop(pos);
            this.bomb.holder = null;
            this.bomb = null;
        }
    }

    move() {
        // this.node.x += this.dir * this.speed;
        // this.body.linearVelocity.x = this.dir * this.speed * 1000;
        let v = this.body.linearVelocity;
        this.body.linearVelocity = cc.v2(this.dir * this.speed * 150, v.y)
    }

    onEnter_Dead(state, dur) {
    }

    onUpdate_Dead(state) {

    }


    removeSelf() {
        this.node.destroy();
    }


    goDead(dead_anim = 'dead') {
        if (dead_anim != 'dead') {
            if (!this.armature.animation.hasAnimation(dead_anim)) {
                dead_anim = 'dead'
            }
        }
        this.playAnim(dead_anim, 1)
        if (this.audio_dead)
            Device.playEffect(this.audio_dead);

        if (this.dead_with_fall) {
            this.fsm.changeState(State.Dead);
            this.body.gravityScale = 10;
            this.body.linearDamping = 0;
            this.body.linearVelocity = cc.v2(0, 1000);
            this.body.angularVelocity = 1500;
            this.collider.enabled = false;
        } else {
            this.fsm.changeState(State.Dead);
            this.scheduleOnce(this.removeSelf, 1.5)
        }
        this.loseBomb();
        evt.emit("Game.enemyDead", this)
    }

    isDead() {
        return this.fsm.isInState(State.Dead)
    }

}
