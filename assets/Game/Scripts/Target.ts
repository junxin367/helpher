import { evt } from "../../framework/core/event";
import SkeletonBase from "./SkeletonBase";
import FSM from "../../framework/core/FSM";
import ccUtil from "../../framework/utils/ccUtil";
import Device from "../../framework/misc/Device";
import AIEnemy from "./AIEnemy";
import Role from "./Role";
import Unity from "./Common/Unity";
enum Emotion {
    Normal,
    Happy,
    Frightened
}
let { ccclass, property } = cc._decorator
@ccclass
export default class Target extends SkeletonBase {

    //老头
    // fsm:FSM ;   
    @property
    dir: number = -1;

    cd: number = 0;
    emotionState: FSM;
    _statusWin: boolean = false;
    _statusLose: boolean = false;

    baseScale: number = 0;

    start() {
        evt.on("Game.beDected", this.onDetected, this);
        evt.on("Game.win", this.onWin, this)
        evt.on("Game.lose", this.onGameLose, this);
        evt.on("Game.bomb", this.goDead, this);
        evt.on("Game.catch", this.onCatched, this)
        evt.on("Game.loseTarget", this.onLoseTarget, this)
        evt.on("Game.enemyDead", this.onEnemyDead, this);
        // evt.on("Game.seeTarget", this.onSeeTarget, this)
        this.playAnim("idle")
        this.schedule(this.checkSight, 2)

        this.baseScale = Math.abs(this.node.scale);

        this.emotionState = this.addComponent(FSM);
        this.emotionState.init(this, Emotion)
        this.emotionState.enterState(Emotion.Normal)
        this.schedule(this.checkFace, 1);

        Unity.loadSkins(this.skeleton, 2);
    }

    onEnable() {
    }

    shockedAnim: dragonBones.AnimationState = null;

    onDetected() {
        //被察觉
        this.shockedAnim = this.playAnim("shocked")
        this.scheduleOnce(this.checkEmotion, 4);
    }

    checkEmotion() {
        if (AIEnemy.allEnemies.length <= 0) {
            this.stopAnim();
            this.playAnim("idle")
        }
    }

    onCatched(t) {
        if (t == 'target') {
            // this.emotionState.changeState(Emotion.Frightened);
            this.playAnim("shocked")
        }

    }

    onLoseTarget() {
        this.playAnim("idle")
    }

    onEnemyDead() {
        this.stopAnim();
        this.playAnim("idle")
    }


    onDestroy() {
        evt.off(this);
    }

    onWin() {
        this.fadeIn('happy', 0)
        this._statusWin = true;
    }

    onGameLose() {
        this._statusLose = true;
    }

    timer: number = 0;
    checkSight() {
        if (this._statusWin || this._statusLose) return;
        this.timer += 2;
        if (this.timer < this.cd) {
            return
        }
        this.timer = 0;
        //能否看到
        let pos = g.v2(ccUtil.getWorldPosition(this.node))
        pos.y += 60;
        let pos2 = pos.clone()
        pos2.x = this.dir * 250;
        let res = this._world.rayCast(pos, pos2, cc.RayCastType.Any)
        for (var k in res) {
            let r = res[k];
            let group = r.collider.node.group;
            if (group == 'role') {
                //看到主角
                this.sayHello()
                // 10s 后不在打招呼
                this.cd = 10;
                break;
            }
        }
    }

    sayHello() {
        this.fadeIn("hello", 1)
        evt.emit("Game.hello", this)
    }

    onEnter_Happy(state, param) {
        if (param) {

            this.fadeIn(param, 1)
        } else {
            this.fadeIn("happy", 1)
        }
    }

    onEnter_Normal() {
        this.fadeIn("normal", 1)
    }

    onEnter_Frightened() {
        this.fadeIn("frightened", 1);
    }

    onUpdate_Frightened() {
        if (this.emotionState.timeElapsed > 2.0) {
            this.emotionState.changeState(Emotion.Normal)
        }
    }

    onUpdate_Happy() {
        if (this.emotionState.timeElapsed > 4.0) {
            this.emotionState.changeState(Emotion.Normal)
        }
    }

    isDead: boolean = false;
    goDead() {
        if (this.isDead) return;
        this.isDead = true;
        this.playAnim("shocked")
        Device.playSfx("ohoh")
        this.scheduleOnce(this.loseGame, 0.5);
    }

    loseGame() {
        evt.emit("Game.lose");
    }

    checkFace() {
        let role = Role.self
        if (!role) return;
        if (Math.abs(role.node.y - this.node.y) > 200) {
            return;
        }
        if (role.node.x > this.node.x) {
            // 在右边
            this.node.scaleX = -1 * this.baseScale;
        } else {
            //左边
            this.node.scaleX = 1 * this.baseScale;
        }
    }

}