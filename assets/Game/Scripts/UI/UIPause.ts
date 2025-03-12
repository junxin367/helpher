

import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import Device from "../../../framework/misc/Device";
import { SettingInfo } from "../../../framework/extension/weak_net_game/SettingInfo";
import mvcView from "../../../framework/ui/mvcView";
import LoadingScene from "../Common/Base/LoadingScene";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import Platform from "../../../framework/extension/Platform";
import actionUtil from "../../../framework/utils/actionUtil";
import { evt } from "../../../framework/core/event";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIPause extends mvcView {

    @property(cc.Node)
    music: cc.Node = null;

    @property(cc.Node)
    effect: cc.Node = null;

    @property(cc.Node)
    sdk: cc.Node = null;

    @property(cc.Node)
    interfull_datu: cc.Node = null;

    musicOff: cc.Node;
    effectOff: cc.Node;

    onLoad() {
        this.musicOff = this.music.getChildByName("off");
        this.effectOff = this.effect.getChildByName("off");
    }

    start() {
        // if (PlayerInfo.isShowSDK()) {
        //     let youlike = window['zzsdkui'].youlike(5, 0, -200);
        //     youlike && this.sdk.addChild(youlike);
        //     youlike.scale = 1;
        // }

    }

    onShow() {
        actionUtil.jellyJump2(this.node);
        this.musicOff.active = !SettingInfo.music;
        this.effectOff.active = !SettingInfo.effect;
        this.scheduleOnce(_ => cc.director.pause(), 0.8);
    }


    click_music(tg) {
        cc.director.resume();
        evt.emit('Game.pause');

        Device.setBGMEnable(!SettingInfo.music)
        SettingInfo.saveSettings();
        this.musicOff.active = !SettingInfo.music;
    }

    click_effect(tg) {
        cc.director.resume();
        evt.emit('Game.pause');

        Device.setSFXEnable(!SettingInfo.effect)
        SettingInfo.saveSettings();
        this.effectOff.active = !SettingInfo.effect;
    }

    click_close() {
        cc.director.resume();
        vm.hide(this);
        evt.emit('Game.resume');
    }

    click_level() {
        cc.director.resume();
        if (PlayerInfo.isPlayingDaily) {
            vm.show("Prefabs/UI/UIChallengeChapter");
        } else {
            vm.show("Prefabs/UI/UIChapter");
        }
        evt.emit('Game.pause');
    }

    click_home() {
        cc.director.resume();
        LoadingScene.goto("Main");

        // let interfull_b = window['zzsdkui'].interFull_large(0, 'inter_full_large', 1800);
        // interfull_b && this.interfull_datu.children[0].addChild(interfull_b);
        // this.interfull_datu.active = true;
        // Platform.hideBannerAd();
    }

    click_homedatu() {
        cc.director.resume();
        // this.interfull_datu.active = false;
        LoadingScene.goto("Main");
    }

    onDestroy() {
        cc.director.resume();
    }
    // update (dt) {}

    // onHidden() {
    //     // evt.emit('Game.resume');
    //     cc.director.resume();
    // }
}
