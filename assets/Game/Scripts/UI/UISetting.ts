

import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import Device from "../../../framework/misc/Device";
import { SettingInfo } from "../../../framework/extension/weak_net_game/SettingInfo";
import mvcView from "../../../framework/ui/mvcView";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import actionUtil from "../../../framework/utils/actionUtil";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UISetting extends mvcView {

    @property(cc.Node)
    music: cc.Node = null;

    @property(cc.Node)
    effect: cc.Node = null;

    @property(cc.Node)
    sdk: cc.Node = null;

    // @property(cc.Node)
    // fankui: cc.Node = null;

    musicOff: cc.Node;
    effectOff: cc.Node;

    onLoad() {
        // if(window.qq || window.tt){
        //     this.fankui.active = false;
        // }
        this.musicOff = this.music.getChildByName("off");
        this.effectOff = this.effect.getChildByName("off");
    }

    start() {
        // if (PlayerInfo.isShowSDK()) {
        //     let youlike = window['zzsdkui'].youlike(4, 0, -200);
        //     youlike && this.sdk.addChild(youlike);
        //     youlike.scale = 1;
        // }
    }

    onShow() {
        actionUtil.jellyJump2(this.node);

        this.musicOff.active = !SettingInfo.music;
        this.effectOff.active = !SettingInfo.effect;
    }

    click_music() {


        Device.setBGMEnable(!SettingInfo.music)
        SettingInfo.saveSettings();
        this.musicOff.active = !SettingInfo.music;
    }

    click_effect() {


        Device.setSFXEnable(!SettingInfo.effect)
        SettingInfo.saveSettings();
        this.effectOff.active = !SettingInfo.effect;
    }

    click_close() {


        vm.hide(this);
    }

    onDestroy() {
        // if (PlayerInfo.isShowSDK()) window['zzsdkui'].unscheduleAllCallbacks();
    }
    // update (dt) {}
}
