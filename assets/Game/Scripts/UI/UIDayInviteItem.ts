import mvcView from "../../../framework/ui/mvcView";
import Platform from "../../../framework/extension/Platform";
import Switcher from "../../../framework/ui/controller/Switcher";
import WeakNetGame from "../../../framework/extension/weak_net_game/WeakNetGame";
import { Api } from "../Common/Base/ServerConfig";
import Net from "../../../framework/misc/Net";
import { Toast } from "../../../framework/ui/ToastManager";
import UIFriendHelp, { DayInvite } from "./UIFriendHelp";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import { evt } from "../../../framework/core/event";

let { ccclass, property } = cc._decorator

const index_count = [3, 1, 1]

@ccclass
export default class UIDayInviteItem extends mvcView {

    @property(cc.Label)
    label_count: cc.Label = null;

    @property(cc.Sprite)
    icon: cc.Sprite = null;

    @property(Switcher)
    tg_btn: Switcher = null

    index: number = 0;

    onLoad() {
        this.register(this.tg_btn, () => {
            if (this.data == null) return 0;
            if (this.data.status == 0) return 1
            return 2;
        })
        this.register(this.label_count, () => {
            if (this.data && this.data.count) {
                return "x" + this.data.count
            } else {
                return index_count[this.index]
            }
        });
        this.register(this.icon, () => {
            if (this.data) {
                return this.data.avatarUrl || "Img/rank/moren";
            }
            return "Img/all/empty";
        })
    }

    setData(data, i) {
        this.index = i
        this.render(data)
    }

    get data() {
        return this.getData() as DayInvite
    }

    click_invite() {
        Platform.share();
    }

    click_claim() {
        WeakNetGame.client.httpGet(Api.invite_claim_day, { id: this.data._id }).then(v => {
            if (v != Net.Code.Timeout) {
                if (v) {
                    let d = JSON.parse(v)
                    if (d.errno == 0) {
                        let data = d.data
                        let add = data.num || index_count[this.index]
                        let c = PlayerInfo.labour + add
                        PlayerInfo.labour = c;
                        PlayerInfo.save('labour');
                        Toast.make("成功领取" + add + "个体力");
                        this.data.status = 1;
                        this.render(this.data);
                        evt.emit("Game.friendTili", UIFriendHelp.day_invite, UIFriendHelp.sum_invite)
                    } else {
                        //fail
                        console.log(d.errno)
                        Toast.make("领取失败:" + d.errno)
                    }
                } else {
                    Toast.make("服务器出错!")
                }
            } else {
                Toast.make("领取超时!")
            }
        })
    }

}