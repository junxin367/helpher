import Net, { net } from "../../../framework/misc/Net"
import { ServerConfig, Api } from "../Common/Base/ServerConfig"
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo"
import mvcView from "../../../framework/ui/mvcView";
import ListView from "../../../framework/ui/controller/ListView";
import UIFriendHelpItem from "./UIFriendHelpItem";
import WeakNetGame from "../../../framework/extension/weak_net_game/WeakNetGame";
import UIDayInviteItem from "./UIDayInviteItem";
import { Toast } from "../../../framework/ui/ToastManager";

let { ccclass, property } = cc._decorator
export interface SumInvite {
    openId, inviteeCount, claimedCount
}
export interface DayInvite {
    _id, openId, invitee, status, index, nickName, avatarUrl, count
}

@ccclass
export default class UIFriendHelp extends mvcView {

    @property(cc.Layout)
    layout: cc.Layout = null;

    @property(ListView)
    listview: ListView = null;

    static sum_invite: SumInvite = null;
    static day_invite: DayInvite[] = [];

    onLoad() {
        this.register(this.layout, v => UIFriendHelp.day_invite, this.setItem.bind(this))
    }

    start() {
        this.listview.numItems = 0
    }


    setItem(node: cc.Node, data: DayInvite, i) {
        let item = node.getComponent(UIDayInviteItem);
        item.setData(data, i);
    }

    onShown() {
        WeakNetGame.client.httpGet(Api.invite_get).then(v => {
            if (v == Net.Code.Timeout) {
                Toast.make("邀请信息读取失败!")
            } else {
                if (v) {
                    let d = JSON.parse(v);
                    console.log(d);
                    this.onRequested(d.data)
                } else {
                    Toast.make("服务器出错!")
                }
            }
        })
    }

    onRequested(data: any) {
        UIFriendHelp.day_invite.splice(0)
        for (var i = 0; i < 3; i++) {
            let v = data.day_invite[i];
            UIFriendHelp.day_invite.push(v)
        }
        UIFriendHelp.sum_invite = data.sum_invite;
        if (UIFriendHelp.sum_invite.claimedCount == null) {
            UIFriendHelp.sum_invite.claimedCount = 0;
        }
        this.render(data.day_items)
        this.listview.numItems = 100;
    }

    onRender(node: cc.Node, index: number) {
        let item = node.getComponent(UIFriendHelpItem);
        item.setData(UIFriendHelp.sum_invite, index);
    }


    click_close() {
        vm.hide(this);
    }


}