import { PasrTimer } from "../../../framework/misc/PasrTimer"
import FSM from "../../../framework/core/FSM"
import Device from "../../../framework/misc/Device";

let { ccclass, property } = cc._decorator

enum State {
    Hide,
    Show,
}

@ccclass
export default class Spike extends cc.Component {

    fsm: FSM = null;


    collider: cc.PhysicsCollider = null

    spikeNode: cc.Node = null

    onLoad() {
        // this.pasr = new PasrTimer(5, 0.1, 2, 0.1)

        this.spikeNode = this.node.getChildByName("spike")

        this.collider = this.getComponentInChildren(cc.PhysicsCollider);

        this.fsm = this.addComponent(FSM)
        this.fsm.init(this, State);
        this.fsm.enterState(State.Hide);

    }

    start() {
        // if (this.node.width > this.node.height) {
        //     this.node.height = 30;
        // }
        this.node.height = 40;
    }

    onEnter_Show() {
        this.spikeNode.group = "spike";
        this.collider.enabled = true;
        this.spikeNode.scaleY = 0;
        Device.playSfx("spike")
        cc.tween(this.spikeNode).to(0.2, { scaleY: 1 }).start();

    }

    onUpdate_Show() {
        if (this.fsm.timeElapsed > 2) {
            this.fsm.changeState(State.Hide);
        }
    }

    onEnter_Hide() {
        this.spikeNode.group = "default";
        this.spikeNode.scaleY = 1;
        cc.tween(this.spikeNode).to(0.2, { scaleY: 0 }).start()
        this.collider.enabled = false;
    }

    onUpdate_Hide() {
        if (this.fsm.timeElapsed > 5) {
            this.fsm.changeState(State.Show);
        }
    }

    onExit_Show() {

    }



    update(dt) {

    }

}