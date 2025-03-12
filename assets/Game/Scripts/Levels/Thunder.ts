import ccUtil from "../../../framework/utils/ccUtil";
import { evt } from "../../../framework/core/event";
import Device from "../../../framework/misc/Device";

let { ccclass, property, menu } = cc._decorator
@ccclass("Thunder")
@menu("Game/Effect/Thunder")
export default class extends cc.Component {
    animation: cc.Animation = null
    explode: cc.Node = null
    @property
    light_width: number = 50;

    onLoad() {
        this.animation = this.getComponent(cc.Animation);
        this.explode = this.node.getChildByName("0")
    }

    play(fromNode: cc.Node, toNode: cc.Node, offset) {
        this.animation.play();
        Device.playSfx("lightling")
        // let from = ccUtil.getWorldPosition(fromNode);
        // let to = ccUtil.getWorldPosition(toNode)
        let from = fromNode.position.add(offset);
        let to = toNode.position.add(offset);
        this.node.setPosition(from)
        let toTarget = to.sub(from);
        let mag = toTarget.mag() * 4 / 5;
        // let s = this.node.getContentSize()
        this.node.setContentSize(mag, this.light_width)
        this.explode.setPosition(mag, 0);
        this.node.angle = Math.atan2(toTarget.y, toTarget.x) * cc.macro.DEG;
        return evt.sleep(0.2);
    }

    update() {

    }

}