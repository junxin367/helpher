import Door from "./Door"
import ccUtil from "../../framework/utils/ccUtil";
import { PlayerInfo } from "./Common/Base/PlayerInfo";

let { ccclass, property } = cc._decorator
@ccclass
export default class ItemKey extends cc.Component {

    @property(Door)
    door: Door = null;

    light: cc.Node = null;

    once = true;

    onLoad() {
        this.light = this.node.getChildByName("light");
    }

    start() {

    }

    go() {
        if (!this.once) {
            return;
        }
        //先放大，再飞到门里去
        // let winsize = cc.director.getWinSize();
        this.light.destroy();
        // let pos = cc.visibleRect.center;
        let pos2 = this.door.node.position
        cc.tween(this.node).to(0.5, { position: pos2 }, { easing: "sineInOut" }).call(this.onReachTarget.bind(this)).start()
        // cc.tween(this.node).to(1.0, { scale: 2 }).delay(1.2).to(1.0, { scale: 1 }).start();
    }

    onReachTarget() {
        this.door.unlock();
        this.node.destroy();
    }

}
