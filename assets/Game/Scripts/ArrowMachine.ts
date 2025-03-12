import KeyToggle from "./KeyToggle";
import Arrow from "./Arrow";
import Device from "../../framework/misc/Device";
import { evt } from "../../framework/core/event";

let { ccclass, property } = cc._decorator
@ccclass
export default class ArrowMachine extends cc.Component {

    @property({ type: KeyToggle, displayName: "触发的钥匙" })
    keyActivator: KeyToggle = null;


    wood: cc.Node = null;


    arrows: Arrow[] = []

    onLoad() {
        this.arrows = this.getComponentsInChildren(Arrow);
        this.wood = this.node.getChildByName("wood")
    }

    start() {
        this.keyActivator.onToggleSwitched.add(this.onToggleSwitched, this)
    }

    onDestroy() {
        if (this.keyActivator.onToggleSwitched)
            this.keyActivator.onToggleSwitched.off(this.onToggleSwitched, this)
    }


    onToggleSwitched() {
        let b = this.keyActivator.isOpen
        if (b) {
            this.activate()
        }
    }
    _activated = false;


    activate() {
        if (this._activated) return;
        this._activated = true;
        this.arrows.forEach(v => v.go())
        Device.playSfx("arrow_launch")
        cc.tween(this.wood).to(1.0, { opacity: 0 }).start()
    }

}