import mvcView from "../../../framework/ui/mvcView";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import LoadingScene from "../Common/Base/LoadingScene";
import { PlayerInfo } from "../Common/Base/PlayerInfo";


const { ccclass, property } = cc._decorator;

@ccclass
export default class UIUnlock extends mvcView {




    onLoad() {

    }
    onShow() {
       
    }

    click_tomain() {
        LoadingScene.goto("Main");
        PlayerInfo.isInGuide = true;
    }



}
