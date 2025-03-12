import { PlayerInfo } from "../Common/Base/PlayerInfo";

let { ccclass, property } = cc._decorator
@ccclass
export default class GuideProp extends cc.Component {

    @property(cc.Node)
    content: cc.Node = null;

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this)
    }

    start() {
        if (PlayerInfo.playinglevel == PlayerInfo.level) {
            this.node.zIndex = 10000
            this.node.opacity = 0;
            this.content.width = 100;
            cc.tween(this.node).to(0.5, { opacity: 255 }).start()
            cc.tween(this.content).to(0.5, { width: 1000 }).start();
        } else {
            this.node.active = false;
        }
    }

    onClick() {
        this.node.active = false;
    }
}   