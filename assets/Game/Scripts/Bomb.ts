import { Shake } from "../../framework/misc/BoostsAction";
import { evt } from "../../framework/core/event";
import SkeletonBase from "./SkeletonBase";
import ccUtil from "../../framework/utils/ccUtil";
import Device from "../../framework/misc/Device";
import RemoveOutOfView from "./RemoveOutOfView";
import Signal from "../../framework/core/Signal";
import Game from "./Game";
import Role from "./Role";

let { ccclass, property, executeInEditMode } = cc._decorator
@ccclass
@executeInEditMode
export default class Bomb extends SkeletonBase {

    @property(cc.Label)
    label: cc.Label = null;

    @property({ displayName: "剩余时间" })
    _timeLeft: number = 0;

    onTimeLeftChanged: Signal = new Signal();

    @property
    get timeLeft() {
        return this._timeLeft
    }

    @property(cc.Animation)
    bombExplosion: cc.Animation = null;

    @property(cc.Animation)
    preExplosion: cc.Animation = null;


    @property(cc.Node)
    node_tooltip: cc.Node = null;

    @property(cc.Node)
    node_light: cc.Node = null;

    holder: cc.Node = null;

    set timeLeft(v) {
        this._timeLeft = v;
        this.onTimeLeftChanged.fire(v);
        this.label.string = v.toString()
    }
    onece = true;

    collider: cc.PhysicsCollider;

    onDestroy() {
        evt.emit('Game.bombDes');
        evt.off(this);
    }

    start() {
        evt.on("Game.onStarted", this.onGameStarted, this)
        evt.on("Game.win", this.onWin, this)
        evt.on("Game.lose", this.onGameLose, this);
        evt.on("Game.pause", this.onGameLose, this);
        evt.on("Game.resume", this.onGameStarted, this);
        this.label.string = this._timeLeft.toString()
        this.preExplosion.on("finished", this.playSecondExplode, this)
        this.collider = this.getComponent(cc.PhysicsCollider);
        if (!Game.instance.isOver) {
            this.schedule(this.countdown, 1)
        }
        let roov = this.getOrAddComponent(RemoveOutOfView);
        roov.onOffScreen.on(this.onOffScreen, this);
    }

    onWin() {
        this.unschedule(this.countdown);
    }

    onGameLose() {
        this.unschedule(this.countdown);
    }

    onGameStarted() {
        this.schedule(this.countdown, 1)

    }

    onOffScreen() {
    }

    countdown() {
        this.timeLeft--
        if (this.timeLeft <= 3) {
            this.label.node.color = cc.Color.RED
            this.startShake()
        } else {
            this.label.node.color = cc.Color.WHITE;
            this.stopShake()
        }
        if (this.timeLeft <= 0) {
            this.unschedule(this.countdown);
            this.explode();
        }
    }

    get isHiding() {
        return this.node_tooltip.active == false;
    }

    hide() {
        this.node.stopAllActions();
        this.node_tooltip.active = false
        let display = this.getComponent(cc.Sprite)
        display && (display.enabled = false);
        this.node_light.active = false;

    }

    show() {
        this.node_tooltip.active = true;
        let display = this.getComponent(cc.Sprite)
        display && (display.enabled = true);
        this.node_light.active = true;
    }

    goAway(dir) {
        this.collider.enabled = false;
        this.unschedule(this.countdown);
        this.stopShake();
        this.body.linearDamping = 0;
        this.body.linearVelocity = cc.v2(dir * 1000, 1000)
    }


    shakeAction: cc.Action;

    startShake() {
        if (this.shakeAction) {
            return;
        }
        this.shakeAction = this.node.runAction(Shake.create(3.0, 2, 0))
        // this.shakeAction = this.node.runAction(cc.blink(3,3))
    }

    stopShake() {
        this.node.stopAction(this.shakeAction)
        this.shakeAction = null
    }

    drop(pos) {
        this.show();
        this.scheduleOnce(this.doDrop.bind(this, pos))

        // this.body.angularVelocity = 1500;
    }

    doDrop(pos) {
        this.node.setPosition(pos)
        this.body.gravityScale = 10;
        this.body.linearDamping = 0;
        this.body.linearVelocity = cc.v2(0, 1000);
    }

    isExploded = false;

    explode() {
        //爆炸 
        this.isExploded = true;
        if (this.bombExplosion) {
            this.getComponent(cc.Sprite).enabled = false;
            this.node_tooltip.active = false;
            this.node_light.active = false;
            if (cc.isValid(this.holder)) {
                this.node.position = this.holder.position;
            }
            this.preExplosion.play("pre_explode")
            // this.bombExplosion.addEventListener(dragonBones.EventObject.COMPLETE, () => {
            //     this.node.destroy();
            // })
        }
    }

    playSecondExplode() {
        if (!this.onece) return;
        this.onece = false;
        this.bombExplosion.play("explode");
        this.preExplosion.play("pre_explode2")
        Device.playSfx("bomb_explode");
        cc.Camera.main.node.runAction(cc.sequence(Shake.create(0.5, 5, 5), cc.callFunc(this.loseGame, this)));
        evt.emit("Game.bomb");
    }

    loseGame() {
        this.node && this.node.destroy();
        evt.emit("Game.lose")
    }

    update() {

        if (this.body.linearVelocity.y == 0) return;
        this.node.stopAllActions();
    }
}