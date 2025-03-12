import mvcView from "../../../framework/ui/mvcView";
import { evt } from "../../../framework/core/event";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import actionUtil from "../../../framework/utils/actionUtil";
import ccUtil from "../../../framework/utils/ccUtil";
import { CollectionInfo } from "../Common/CollectionInfo";
import { Toast } from "../../../framework/ui/ToastManager";

let { ccclass, property } = cc._decorator


@ccclass
export default class UIBoxAward extends mvcView {

    @property(cc.Sprite)
    icon: cc.Sprite = null;

    @property(cc.Label)
    num_label: cc.Label = null;

    onLoad() {

    }

    onShown() {
        actionUtil.jellyJump2(this.node);
        this.num_label.string = "x  3";

        let level;
        if (PlayerInfo.isPlayingDaily) {
            level = csv.daily_level.get(PlayerInfo.playingDailyLevel);
        } else {
            level = csv.level.get(PlayerInfo.playinglevel);
        }
        let coll = ccUtil.get(CollectionInfo, level.treasure);
        
        Toast.make(`获得${coll.name}`);
        ccUtil.setDisplay(this.icon, coll.thumbnail);

        PlayerInfo.unlockDecorate(coll.id);
    }


    click_close() {
        evt.emit("Game.win");
        vm.hide(this);
    }

}