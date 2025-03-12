import PoolManager from "../../../framework/core/PoolManager";
import Device from "../../../framework/misc/Device";
import { evt } from "../../../framework/core/event";

let { ccclass, property } = cc._decorator
@ccclass
export default class ItemStar extends cc.Component {


    isOffTime: boolean = false;
    onLoad() {

    }

    start() {

    }

    playFx(node: cc.Node) {
        Device.playSfx("star")
        let star = PoolManager.get("Pool").get("get-star")
        star.position = node.position;
    }

    onBeginContact(contact: cc.PhysicsContact) {
        //add a star 
        //or fly to top 
        this.playFx(this.node);
        this.node.destroy();
        this.scheduleOnce(_ => {
            this.isOffTime = false;
        }, 0.6)
        if (!this.isOffTime) {
            evt.emit("Game.getstar", this.node);
        }
        this.isOffTime = true;
    }


}