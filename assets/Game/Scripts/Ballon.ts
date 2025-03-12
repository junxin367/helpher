import SkeletonBase from "./SkeletonBase";
import RemoveOutOfView from "./RemoveOutOfView";
import Device from "../../framework/misc/Device";
import { evt } from "../../framework/core/event";
let { ccclass, property } = cc._decorator
@ccclass
export default class Ballon extends SkeletonBase {

    collider: cc.PhysicsCollider;
    _fly: boolean = false;

    start() {
        this.armature.animation.timeScale = 0.5;
        this.collider = this.getComponent(cc.PhysicsCollider);
        this.addComponent(RemoveOutOfView);
    }

    flyAway(frompos?) {
        Device.playSfx("ballon_flyaway")
        this.node.active = true;
        this.collider.enabled = false;
        if (frompos) {
            this.scheduleOnce(_ => {
                this.node.position = frompos;
            }, 0)
        }

        this.skeleton.playAnimation("up", 0);
        this._fly = true;
    }

    update() {
        if (this._fly) {
            this.body.linearVelocity = cc.v2(0, 180);
        }
    }

    onDestroy() {
        evt.emit("Game.boollonDes")
    }

    _dead = false;

    isDead() {
        return this._dead;
    }

    goDead() {
        if (this._dead) return;
        this._dead = true;
        Device.playSfx("ballon_bomb")
        this.skeleton.timeScale = 1;
        this.stopAnim();
        this.playAnim("dead", 1)
        this.scheduleOnce(this.dispose, 1)
        // evt.emit("Game.boollonDes")
    }

    dispose() {
        this.node.destroy();

    }

}