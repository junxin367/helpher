import RemoveOutOfView from "./RemoveOutOfView";
import AIEnemy from "./AIEnemy";
import Role from "./Role";
import Device from "../../framework/misc/Device";
import Target from "./Target";
import Ballon from "./Ballon";

let { ccclass, property } = cc._decorator
@ccclass
export default class Arrow extends cc.Component {
    body: cc.RigidBody;
    speed: number = 1500;

    onLoad() {
        this.body = this.getComponent(cc.RigidBody);
        let check = this.addComponent(RemoveOutOfView);
        check.usingWorldSpace = true;
    }

    start() {

    }

    _isMoving = false;
    _vel: cc.Vec2 = cc.v2();

    go() {
        this._isMoving = true
        let rad = this.node.angle * cc.macro.RAD;
        this._vel = cc.v2(Math.cos(rad), Math.sin(rad));
        this._vel.mulSelf(this.speed);
    }

    stop() {
        this._isMoving = false;
        this.body.linearVelocity = cc.v2(0, 0);
    }

    stopWithInetia(scalar = 0.9) {
        this._vel.mulSelf(scalar)
    }

    update() {
        // velocity
        if (this._isMoving) {
            this.body.linearVelocity = this._vel
        }
    }

    fadeAfter(delay = 0.5, dur = 0.6) {
        cc.tween(this.node).delay(delay).to(dur, { opacity: 0 }).call(() => this.node.destroy()).start();
    }

    onBeginContact(contact: cc.PhysicsContact, self, other: cc.PhysicsCollider) {
        console.log(other.name);
        let group = other.node.group;
        if (group == "wall" || group == "pin") {
            // arrow_hit
            Device.playSfx("arrow_hit")
            this.stop();
            this.fadeAfter()
        } else if (group == 'enemy') {
            //射中敌人
            let enemy = other.getComponent(AIEnemy);
            if (!enemy.isDead()) {
                Device.playSfx("arrow_hit_body")
                enemy.goDead();
            }
        } else if (group == 'role') {
            //射中主角
            let role = other.getComponent(Role);
            Device.playSfx("arrow_hit_body")
            role.goDead();
        } else if (group == 'target') {
            //射中老头
            let target = other.getComponent(Target)
            Device.playSfx("arrow_hit_body")
            this.stopWithInetia(0.1);
            this.schedule(this.stop, 0.3)
            target.goDead();
        } else if (group == 'ballon') {
            let ballon = other.getComponent(Ballon);
            // ballon.flyAway();
            ballon.goDead();
        }
    }

}