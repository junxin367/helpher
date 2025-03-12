import mvcView from "../../../framework/ui/mvcView";
import Net, { net } from "../../../framework/misc/Net";
import { ServerConfig, Api } from "../Common/Base/ServerConfig";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import { Toast } from "../../../framework/ui/ToastManager";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import UIFriendHelp, { SumInvite } from "./UIFriendHelp";
import Switcher from "../../../framework/ui/controller/Switcher";
import WeakNetGame from "../../../framework/extension/weak_net_game/WeakNetGame";
import Platform from "../../../framework/extension/Platform";
import { evt } from "../../../framework/core/event";

let { ccclass, property } = cc._decorator
@ccclass
export default class UIFriendHelpItem extends mvcView {

    @property(cc.Button)
    btn_claim: cc.Button = null;

    @property(cc.Button)
    btn_invite: cc.Button = null;

    @property(cc.Label)
    label_text: cc.Label = null;

    @property(cc.Label)
    label_c: cc.Label = null;

    @property(Switcher)
    tg_status: Switcher = null;

    onLoad() {
        this.register(this.btn_claim, this.click_claim)
        this.register(this.btn_invite, this.click_share)
    }

    start() {

    }

    setData(sum_invite: SumInvite, index: number) {
        this.label_text.string = "第" + (index + 1) + "位新好友"
        this.label_c.string = "x2"
        if (index >= sum_invite.claimedCount && index < sum_invite.inviteeCount) {
            //可领取
            this.tg_status.index = 1;
        } else {
            if (index < sum_invite.claimedCount) {
                //已领取
                this.tg_status.index = 2;
            } else {
                //待邀请
                this.tg_status.index = 0;
            }
        }
    }

    click_share() {
        Platform.share();
    }

    click_claim() {
        WeakNetGame.client.httpGet(Api.invite_claim_new).then(v => {
            if (v == Net.Code.Timeout) {
                Toast.make("领取超时!")
            } else {
                if (v) {
                    let res = JSON.parse(v);
                    let ret = res.data;
                    if (res.errno != 0) {
                        Toast.make("领取失败:" + res.errno);
                    } else {
                        // ok
                        let add = ret.num || 2
                        PlayerInfo.addLabour(add);
                        Toast.make("成功领取" + add + "个体力");
                        this.tg_status.index = 2;
                        UIFriendHelp.sum_invite.claimedCount++;
                        evt.emit("Game.friendTili", UIFriendHelp.day_invite, UIFriendHelp.sum_invite)
                    }
                } else {
                    Toast.make("服务器出错!")
                }
            }
        })
    }
}
