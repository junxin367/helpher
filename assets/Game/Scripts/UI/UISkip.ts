import mvcView from "../../../framework/ui/mvcView";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import Game from "../Game";
import WeakNetGame from "../../../framework/extension/weak_net_game/WeakNetGame";
import StatHepler from "../../../framework/extension/aldsdk/StatHelper";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import IconSov from "../../../framework/extension/weak_net_game/IconSov";
import actionUtil from "../../../framework/utils/actionUtil";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UISkip extends mvcView {

    @property(cc.Node)
    close_btn: cc.Node = null;

    @property(cc.Node)
    sdk: cc.Node = null;

    callback: Function;
    isVideo: boolean = false;

    onLoad() {
        this.registerSubViews(IconSov)
    }

    onShow(callback) {
        actionUtil.jellyJump2(this.node);
        // this.close_btn.active = false;

        this.callback = callback;
        this.isVideo = false;
        this.render();

        // let youlike = window['zzsdkui'].youlike(0, null, null, null, function () {
        //     this.interfull.active = true;
        // }.bind(this));

        // if (youlike) {
        //     youlike && this.sdk.addChild(youlike);
        //     youlike.scale = 1;
        // }
        this.close_btn.active = true;
        // this.scheduleOnce(_ => {
        // }, 1)
    }

    start() {
    }

    click_close() {
        vm.hide(this);
    }

    click_skip() {

        cc.director.pause();
        WeakNetGame.doChoice("SOV_Skip_Level", _ => {
            cc.director.resume();
            // 新用户跳关人数
            if (UserInfo.isNew) {
                StatHepler.sendPath("新用户跳关人数", '关卡', PlayerInfo.playinglevel)
            }
            vm.hide(this);
            Game.instance.onWin();
        }, this);
    }

    onHidden() {
        if (this.isVideo) {
            this.callback && this.callback();
        }

    }
    // update (dt) {}
}
