import { evt } from "../../../framework/core/event"

let { ccclass, property } = cc._decorator
@ccclass
export default class Guide0 extends cc.Component {

    highlight: cc.Node = null;
    msg: cc.Node = null;
    continue: cc.Node = null;

    msgLabel: cc.Label = null

    onLoad() {
        // evt.on("Game.keyMoved", this.onKeyMoved);
        this.highlight = this.node.getChildByName("highlight")
        this.msg = this.node.getChildByName("msg")
        this.msgLabel = this.msg.getComponentInChildren(cc.Label);
        this.continue = this.node.getChildByName("continue")
    }

    start() {
        this.routine();
    }

    goon() {
        evt.emit("Guide.next")
    }

    tip(msg: string, x?, y?) {
        this.msgLabel.string = msg;
        this.msg.x = x || this.msg.x;
        this.msg.y = y || this.msg.y;
    }

    hide(...nodes) {
        for (var k in nodes) {
            let v = nodes[k];
            v.active = false;
        }
    }
    show(...nodes) {
        for (var k in nodes) {
            let v = nodes[k];
            v.active = true;
        }
    }

    async routine() {
        this.hide(this.continue)
        this.tip('点击此处拔起机关!');
        await evt.wait("Game.keyMoved")
        evt.emit("Game.keyMoved")
        this.hide(this.continue, this.highlight);
        this.tip("拔起所有的机关，让女孩到达终点!");
        await evt.wait("Game.keyMoved")
        evt.emit("Game.keyMoved")
        this.highlight.x = -1000;
        this.show(this.highlight)
        this.tip("点击任意位置，可以改变行走方向哦!");
        //pause role 
        // evt.emit("Game.pauseRole")
        await evt.wait("Game.changeRoleDir")
        // await evt.wait("Guide.next")
        if (!cc.isValid(this)) {
            return;
        }
        this.hide(this.msg, this.continue, this.highlight);
    }
}