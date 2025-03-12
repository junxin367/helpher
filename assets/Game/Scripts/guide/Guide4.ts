import SkeletonBase from "../SkeletonBase";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import { evt } from "../../../framework/core/event";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Guide4 extends cc.Component {

    @property(cc.Node)
    guideNode: cc.Node = null;

    onLoad() {
        this.getComponent(cc.RigidBody).enabledContactListener = true;
        evt.on("Game.win", this.hideGuide, this);
        evt.on("Game.lose", this.hideGuide, this);

    }

    onDisable() {
        evt.off(this)
    }


    start() {
        this.hideGuide();
    }

    onBeginContact(contact: cc.PhysicsContact, self, other: cc.PhysicsCollider) {
        let group = other.node.group;
        if (group == 'role' && !PlayerInfo.is_guide_4) {
            PlayerInfo.is_guide_4 = true;
            PlayerInfo.isInGuide = true;
            this.guideNode.active = true
        }
    }

    onkeyClick() {
        if (PlayerInfo.isInGuide) {
            this.hideGuide();
        }
    }

    hideGuide() {
        this.guideNode.active = false;
        PlayerInfo.isInGuide = false;

    }

    // update (dt) {}
}
