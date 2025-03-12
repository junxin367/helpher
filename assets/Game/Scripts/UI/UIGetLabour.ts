import mvcView from "../../../framework/ui/mvcView";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import LoadingScene from "../Common/Base/LoadingScene";
import Game from "../Game";
import { evt } from "../../../framework/core/event";
import { SettingInfo } from "../../../framework/extension/weak_net_game/SettingInfo";
import Device from "../../../framework/misc/Device";
import WeakNetGame from "../../../framework/extension/weak_net_game/WeakNetGame";
import { Toast } from "../../../framework/ui/ToastManager";
import display from "../../../framework/misc/display";
import { qqsdk } from "../../../framework/extension/qq/qqsdk";
import IconSov from "../../../framework/extension/weak_net_game/IconSov";
import wegame from "../sdk/wegame";
import { CloudFuncType } from "../Common/CloudFuncTypes";
import Platform from "../../../framework/extension/Platform";
import { umeng } from "../../../framework/extension/aldsdk/umeng";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIGetLabour extends mvcView {
    @property(cc.Node)
    btn_moregame: cc.Node = null;

    @property(cc.Node)
    sdk: cc.Node = null;

    @property(cc.Button)
    btn_nothanks: cc.Button = null;

    @property(cc.Button)
    btn_ok: cc.Button = null;

    @property(cc.Node)
    btn_jia: cc.Node = null

    callback: Function;
    isVideo: boolean = false;
    youlike: cc.Node = null;
    isActive: boolean = true;

    onLoad() {
        this.btn_moregame.active = window.qq ? true : false;
        this.registerSubViews(IconSov);
    }


    onDestroy() {
        evt.off(this);
    }
    onResume() {
        Platform.reloadBannerAd();
    }

    onShow(callback, isActive = false) {
        evt.on("Game.Resume", this.onResume, this);
        this.callback = callback;
        this.isActive = isActive;
        this.isVideo = false;
        this.render();
        // if (wegame.isCheatOpen(CloudFuncType.Banner_move)) {
        //     wegame.enableFakeForAdClick(this.btn_nothanks.node, this.btn_jia, 2, () => {
        //         if (PlayerInfo.isShowSDK()) {
        //             if (this.youlike == null) {
        //                 this.youlike = window['zzsdkui'].youlike(2, null, null, null, function () {
        //                     Game.instance.interfull.active = true;
        //                 }.bind(this));
        //                 if (this.youlike) {
        //                     this.sdk.addChild(this.youlike);
        //                     this.youlike.scale = 1;
        //                 }
        //             }
        //             if (this.youlike)
        //                 this.youlike.active = true;
        //         }
        //     });
        // } else {
        this.btn_nothanks.node.active = true;
        this.btn_jia.active = false;
        // }
    }

    start() {
        // if (PlayerInfo.isShowSDK()) {
        //     let youlike = window['zzsdkui'].youlike(2, 0, 400);
        //     youlike && this.sdk.addChild(youlike);
        //     youlike.scale = 1;
        // }
    }

    click_close() {
        vm.hide(this);
    }

    click_get() {
        if (PlayerInfo.labour >= csv.Config.Max_Energy && this.isActive) {
            Toast.make("体力已满，快去帮帮小姐姐吧")
            return;
        }
        this.btn_ok.interactable = false;
        this.scheduleOnce(_ => this.btn_ok.interactable = true, 3);
        umeng.onEvent('rewardAd', 'labourShow');
        WeakNetGame.doChoice("SOV_Get_Labour", _ => {
            console.log("奖励体力")
            let add = csv.Config.Energy_Get_Num;
            let old = PlayerInfo.labour
            let r = PlayerInfo.labour + add
            // PlayerInfo.labour = Math.min(r, csv.Config.Max_Energy || 5);
            PlayerInfo.labour = r;
            PlayerInfo.save("labour");
            umeng.onEvent('rewardAd', 'labourRewarded');
            evt.emit("Game.getTili", display.center, PlayerInfo.labour - old)
            // if (PlayerInfo.labour >= csv.Config.Max_Energy) {
            //     Toast.make("体力已恢复满!")
            //     vm.hide(this);

            // } else {
            //     Toast.make("获得" + add + "点体力");
            // }
            Toast.make("获得" + add + "点体力");
            this.isVideo = true;
            vm.hide(this);
        }, this);
    }

    onHidden() {
        if (this.isVideo) {
            this.callback && this.callback();
        }
        evt.off(this);

    }

    click_moregame() {


        qqsdk.showAppBox()
    }
    // update (dt) {}
}
