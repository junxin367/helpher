import Device from "../../framework/misc/Device";
import { PlayerInfo } from "./Common/Base/PlayerInfo";
import ccUtil from "../../framework/utils/ccUtil";
import { UserInfo } from "../../framework/extension/weak_net_game/UserInfo";

let { ccclass, property } = cc._decorator
@ccclass
export default class Door extends cc.Component {

    anim: cc.Animation = null

    collider: cc.PhysicsCollider = null;

    onLoad() {
        this.anim = this.getComponent(cc.Animation);
        this.collider = this.getComponent(cc.PhysicsCollider);
        let door1 = this.node.getChildByName("door");
        let door2 = this.node.getChildByName("door2");
        ccUtil.setDisplay(door1.getComponent(cc.Sprite), "Img/level/theme/men_" + UserInfo.theme);
        ccUtil.setDisplay(door2.getComponent(cc.Sprite), "Img/level/theme/men_" + UserInfo.theme);
    }

    start() {

    }


    unlock() {
        Device.playSfx("openthedoor")
        this.anim.play('unlock')
        if (this.collider) {
            this.collider.enabled = false;
        }
    }
}