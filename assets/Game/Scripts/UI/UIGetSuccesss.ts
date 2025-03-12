import mvcView from "../../../framework/ui/mvcView";
import { wxsdk } from "../../../framework/extension/wxsdk/sdk";
import { Toast } from "../../../framework/ui/ToastManager";
import { evt } from "../../../framework/core/event";
import display from "../../../framework/misc/display";
import { PlayerInfo } from "../Common/Base/PlayerInfo";



const { ccclass, property } = cc._decorator;

@ccclass
export default class UIGetSuccesss extends mvcView {
    @property(cc.Node)
    btn_close: cc.Node = null;

    @property(cc.Label)
    label_num: cc.Label = null;

    callback: Function;

    onLoad() {
        this.onClick(this.btn_close, _ => this.click_close());
    }
    onShow(num) {
        this.label_num.string = num.toString()
        if (!isNaN(num) && num > 0) {
            PlayerInfo.labour += num;
            PlayerInfo.save("labour")
            evt.emit("Game.getTili", display.center, num)
        }


    }

    click_close() {
        vm.hide(this);
    }

    onHidden() {

    }
}
