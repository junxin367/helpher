import mvcView from "../../../framework/ui/mvcView";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import LoadingScene from "../Common/Base/LoadingScene";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import { evt } from "../../../framework/core/event";
import display from "../../../framework/misc/display";


const { ccclass, property } = cc._decorator;

@ccclass
export default class UIGetPersent extends mvcView {



    isclick: boolean = false;
    onLoad() {

    }
    onShow() {
        this.isclick = false;
    }

    click_get() {
        if (this.isclick)
            return;
        this.isclick = true;
        PlayerInfo.labour += 3;
        evt.emit("Game.getTili", display.center, 3);
        vm.hide(this);
    }



}
