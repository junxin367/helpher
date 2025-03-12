import mvcView from "../../../framework/ui/mvcView";
import { SkinType } from "./UIPersonSkin";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import { evt } from "../../../framework/core/event";
import { PlayerInfo } from "../Common/Base/PlayerInfo";


const { ccclass, property } = cc._decorator;

@ccclass
export default class UIUnlockSkin extends mvcView {

    @property(cc.Sprite)
    icon: cc.Sprite = null;

    @property(cc.Animation)
    shouzhi: cc.Animation = null;

    data: csv.Skin_Row = null;

    onLoad() {
        this.register(this.icon, _ => "Img/skin/thumbnail/" + this.data.type + "/" + this.data.thumbnail);
    }
    onShow(id) {
        this.data = csv.Skin.get(id);
        this.render();

        // 第一次引导解锁 穿戴皮肤
        // if (UserInfo.skin_guide === 0 && id === 20) {
        //     this.shouzhi.node.active = true;
        //     this.shouzhi.play();
        // }
    }

    click_tomain() {
        // if (!(this.data.subType === 5 || this.data.subType === 6)) {
        //     PlayerInfo.unlockSkin(this.data.id);
        // }
        if (this.data.subType === SkinType.Theme || this.data.subType === SkinType.Key) {
            vm.hide(this);
            vm.show("Prefabs/UI/UISkin");
        } else {
            evt.emit("Main.skin");
        }
    }

    click_close() {
        this.data && this.data.id && PlayerInfo.unlockSkin(this.data.id);
        vm.hide(this);
    }



}
