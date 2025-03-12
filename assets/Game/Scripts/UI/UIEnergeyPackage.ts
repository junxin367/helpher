import mvcView from "../../../framework/ui/mvcView";
import IconSov from "../../../framework/extension/weak_net_game/IconSov";
import WeakNetGame from "../../../framework/extension/weak_net_game/WeakNetGame";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import { Toast } from "../../../framework/ui/ToastManager";
import { evt } from "../../../framework/core/event";
import display from "../../../framework/misc/display";
import StatHepler from "../../../framework/extension/aldsdk/StatHelper";
import wegame from "../sdk/wegame";
import { CloudFuncType } from "../Common/CloudFuncTypes";
import Game from "../Game";
import Platform from "../../../framework/extension/Platform";

let { ccclass, property } = cc._decorator
@ccclass
export default class UIEnergeyPackage extends mvcView {
    @property(cc.Label)
    label_tips: cc.Label = null;

    @property(cc.Label)
    label_energy: cc.Label = null;

    @property(cc.Button)
    btn_claim: cc.Button = null;

    @property(cc.Button)
    btn_double: cc.Button = null;

    @property(cc.Button)
    btn_nothanks: cc.Button = null;

    @property(cc.Node)
    btn_jia: cc.Node = null

    @property(cc.Node)
    sdk: cc.Node = null;
    youlike: cc.Node = null;

    successClaim: boolean = false;

    onLoad() {
        this.register(this.label_tips, () => `恭喜你获得${csv.Config.EneryPackage_Count}体力，快来领取吧！`)
        this.register(this.label_energy, () => csv.Config.EneryPackage_Count)
        this.register(this.btn_claim, this.click_claim)
        this.register(this.btn_double, this.click_double)
        this.register(this.btn_nothanks, this.click_cancel)
        this.registerSubViews(IconSov);

    }



    start() {
        // if (PlayerInfo.isShowSDK()) {
        //     let youlike = window['zzsdkui'].youlike(2, 0, 400);
        //     youlike && this.sdk.addChild(youlike);
        //     youlike.scale = 1;
        // }
    }
    onHidden() {
        evt.off(this);
    }
    onDestroy() {
        evt.off(this);
    }
    onResume() {
        Platform.reloadBannerAd();
    }
    onShown() {
        evt.on("Game.Resume", this.onResume, this);
        this.render();
        this.successClaim = false;
        if (window.qq || window.tt) {
            this.btn_nothanks.node.active = true;
            this.btn_jia.active = false;
            Platform.showBannerAd();
            return;
        }
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

    click_cancel() {
        vm.hide(this);
    }

    click_claim() {
        // if (this.checkEnergyFull()) return;
        this.claim()
    }

    click_double() {
        // if (this.checkEnergyFull()) return;
        WeakNetGame.doChoice("SOV_EneryPackage", this.onClaimDouble, this, () => {
            StatHepler.sendPath("领取体力大礼包", "状态", "领取失败")
        })
    }

    checkEnergyFull() {
        if (PlayerInfo.labour >= csv.Config.Max_Energy) {
            Toast.make('体力已满!')
            return true;
        }
        return false
    }

    onClaimDouble() {
        this.claim(1);
        // vm.hide(this);
    }

    claim(mult = 1) {
        if (this.successClaim) return;
        let add = mult * csv.Config.EneryPackage_Count;
        let old = PlayerInfo.labour;
        let r = PlayerInfo.labour + add;
        // PlayerInfo.labour = Math.min(r, csv.Config.Max_Energy);
        PlayerInfo.labour = r;
        PlayerInfo.save("labour")
        evt.emit("Game.getTili", display.center, PlayerInfo.labour - old)
        // if (PlayerInfo.labour >= csv.Config.Max_Energy) {
        //     Toast.make("体力已恢复满!")
        // } else {
        //     Toast.make("获得" + add + "点体力");
        // }
        Toast.make("获得" + add + "点体力");
        this.successClaim = true;
        StatHepler.sendPath("领取体力大礼包", "状态", "领取成功")
    }

    // onHidden() {
    //     if (this.successClaim) {
    //         vm.show("Prefabs/UI/UIDoubleGet", csv.Config.EneryPackage_Count);
    //     }
    // }

}