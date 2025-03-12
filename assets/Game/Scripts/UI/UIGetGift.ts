import { PlayerInfo } from "../Common/Base/PlayerInfo";
import { Toast } from "../../../framework/ui/ToastManager";
import mvcView from "../../../framework/ui/mvcView";
import actionUtil from "../../../framework/utils/actionUtil";

let { ccclass, property } = cc._decorator
@ccclass
export default class UIGetGift extends mvcView {

    @property(cc.Label)
    num_label: cc.Label = null;

    _num: number = 0;
    _reward: number = 0;


    onLoad() {

    }

    onShown(num) {
        actionUtil.jellyJump2(this.node);
        let data = csv.star.get(num + 12);
        this.num_label.string = "恭喜你获得" + data.reward + "颗星星";
        if (PlayerInfo.challenge_gift.indexOf(num) != -1) {
            Toast.make("已领取过该礼包");
            vm.hide(this);
            return;
        }
        this._num = num;
        this._reward = data.reward;
    }


    click_close() {
        PlayerInfo.challenge_gift.push(this._num);
        PlayerInfo.star += this._reward;
        PlayerInfo.save();
        vm.hide(this);
    }

}