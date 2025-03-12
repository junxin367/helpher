import mvcView from "../../../framework/ui/mvcView";
import LoadingScene from "../Common/Base/LoadingScene";
import { SettingInfo } from "../../../framework/extension/weak_net_game/SettingInfo";
import Device from "../../../framework/misc/Device";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import { Toast } from "../../../framework/ui/ToastManager";
import Game from "../Game";
import wegame from "../sdk/wegame";
import { CloudFuncType } from "../Common/CloudFuncTypes";
import { qqsdk } from "../../../framework/extension/qq/qqsdk";
import Platform from "../../../framework/extension/Platform";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import { ttsdk } from "../../../framework/extension/ttsdk/ttsdk";
import { evt } from "../../../framework/core/event";
import WeakNetGame from "../../../framework/extension/weak_net_game/WeakNetGame";
import Unity from "../Common/Unity";
import display from "../../../framework/misc/display";
import Const from "../Common/Const";
import Main from "../Main";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIOffLine extends mvcView {


    @property(cc.Node)
    btn_get: cc.Node = null;

    @property(cc.Node)
    btn_getjia: cc.Node = null;

    @property(cc.Node)
    sdk: cc.Node = null;

    @property(cc.Label)
    tili_label: cc.Label = null;

    youlike: cc.Node = null;
    tili: number = 0;

    onLoad() {

    }

    start() {
        // if (PlayerInfo.isShowSDK()) {
        //     let newInter = window['zzsdkui'].inter_scroll(1, 'inter_x', 350, null, 100, null, function () {
        //         Main.instance.show_interfull();
        //     }.bind(this));
        //     newInter && this.sdk.addChild(newInter);
        //     newInter.setPosition(0, 150);
        // }
    }


    onShow(num) {
        this.tili = num;
        this.bannerMove(true);
        this.tili_label.string = "+" + num;
    }



    bannerMove(b = false) {
        if (b && wegame.isCheatOpen(CloudFuncType.Banner_move)) {
            wegame.enableFakeForAdClick(this.btn_get, this.btn_getjia, 2, this.err.bind(this));
        } else {
            this.btn_get.active = true;
            this.btn_getjia.active = false;
            Platform.showBannerAd();
        }
    }


    err() {
        // if (PlayerInfo.isShowSDK()) {
        //     if (this.youlike == null) {
        //         this.youlike = window['zzsdkui'].youlike(2, null, null, null, function () {
        //             Game.instance.interfull.active = true;
        //         }.bind(this));
        //         if (this.youlike) {
        //             this.sdk.addChild(this.youlike);
        //             this.youlike.scale = 1;
        //         }
        //     }
        //     if (this.youlike)
        //         this.youlike.active = true;
        // }
    }



    onDestroy() {
        // if (PlayerInfo.isShowSDK()) window['zzsdkui'].unscheduleAllCallbacks();
    }

    click_get() {
        evt.emit("Game.getTili", display.center, this.tili);
        PlayerInfo.labour += this.tili;
        vm.hide(this);
    }

    click_getDouble() {
        WeakNetGame.doChoice("SOV_Double_Offline", _ => {
            evt.emit("Game.getTili", display.center, this.tili * 2);
            PlayerInfo.labour += (this.tili * 2);
            vm.hide(this);
        }, this)

    }


}
