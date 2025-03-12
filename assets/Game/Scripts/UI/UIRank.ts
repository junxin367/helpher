
import mvcView from "../../../framework/ui/mvcView";
import wxRankList from "./wxRankList";
import ccUtil from "../../../framework/utils/ccUtil";
import UIFunctions from "../../../framework/ui/UIFunctions";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import WeakNetGame from "../../../framework/extension/weak_net_game/WeakNetGame";
import Net from "../../../framework/misc/Net";
import { SettingInfo } from "../../../framework/extension/weak_net_game/SettingInfo";
import Device from "../../../framework/misc/Device";
import Platform from "../../../framework/extension/Platform";

const { ccclass, property } = cc._decorator;

export interface RankItem {
    userId: string,
    nickName: string,
    avatarUrl: string,
    gender: number,
    highScore: number,
    level: number,
    openId: string,
    _id: string,
    challengelevel: number,
}

@ccclass
export default class UIRank extends mvcView {

    @property(cc.Layout)
    layout: cc.Layout = null;

    @property(cc.ToggleContainer)
    radioGroup: cc.ToggleContainer = null;

    @property(cc.ToggleContainer)
    modelGroup: cc.ToggleContainer = null;

    @property(cc.Node)
    node_worldRank: cc.Node = null;

    @property(cc.Node)
    subContext: cc.Node = null;

    static rankUrl = "";
    myRank: RankItem = {} as RankItem;
    ranklist: RankItem[];
    lvRank: number = 0;
    isPlayingDaily: boolean = false;
    onLoad() {
        this.register(this.layout, _ => this.ranklist, this.itemAtIndex.bind(this));
        this.register("panel/my/head", _ => UserInfo.avatarUrl ? UserInfo.avatarUrl : "Img/rank/moren");
        this.register("panel/my/rankIcon", _ => this.lvRank == 0 ? "Img/rank/moren" : "Img/rank/" + (this.lvRank));
        this.register("panel/my/score", _ => ((this.isPlayingDaily ? PlayerInfo.dailylevel : PlayerInfo.level) || 0) + "关");
        this.register("panel/my/name", _ => (UserInfo.nickName ? (UserInfo.nickName.length <= 10 ? UserInfo.nickName : UserInfo.nickName.substr(0, 10)) : "自已"));
        this.register("panel/my/rank", _ => this.lvRank == 0 ? "未上榜" : (this.lvRank));
        this.onVisible("panel/my/rankIcon", _ => this.lvRank < 4 && this.lvRank != 0);
        this.onVisible("panel/my/rank", _ => this.lvRank > 3 || this.lvRank == 0);

    }

    start() {

    }

    onShow() {
        let model = this.modelGroup.toggleItems.find(v => v.isChecked)
        if (UIFunctions.getToggleIndex(model) == 0) {
            this.isPlayingDaily = false
        } else {
            this.isPlayingDaily = true
        }
        let toggle = this.radioGroup.toggleItems.find(v => v.isChecked)
        if (UIFunctions.getToggleIndex(toggle) == 0) {
            this.click_friend()
        } else {
            this.click_world();
        }
    }

    click_close() {

        wxRankList.instance.onClose();
        vm.hide(this);
    }

    click_friend() {

        // this.node_worldRank.active = false;
        this.node_worldRank.active = false;
        if (this.isPlayingDaily) {
            wxRankList.instance.loadChallengLevelOpenRank();
        }
        else {
            wxRankList.instance.loadLevelOpenRank();
        }
        this.subContext.active = true;
    }

    click_world() {
        wxRankList.instance.onClose();
        this.click_world_wx();
    }


    /**
     *  //微信 按钮回调
     * @param userInfo 微信获取到的用户信息，
     * @param isNew 弹框返回 true 表示授权 ， 其它 表示已授权过
     */
    async click_world_wx(userInfo?, isNew?) {
        if (isNew) {
            UIFunctions.selectToggleIndex(this.radioGroup.node, 1);
        }
        this.node_worldRank.active = true
        if (userInfo) {
            await UserInfo.openRankAndUpload({ level: PlayerInfo.level, challengelevel: PlayerInfo.dailylevel }, userInfo);
        }
        if (!this.ranklist)
            this.requestRank();
        this.render();
        this.subContext.active = false;
    }


    requestRank() {
        let params = {
            orderBy: this.isPlayingDaily ? "challengelevel" : "level",
            page: 1,
            row: 20
        }
        WeakNetGame.client.httpGet(UIRank.rankUrl, params).then(v => {
            if (v == Net.Code.Timeout) {
                // Toast.make("请求超时")
            } else {
                if (v) {
                    console.log(v)
                    let ret = JSON.parse(v);
                    let data = ret.data
                    if (data) {
                        this.ranklist = data.list as RankItem[];
                        for (let i = 0; i < data.list.length; i++) {
                            if (data.list[i].avatarUrl == UserInfo.avatarUrl) {
                                this.myRank = data.list[i];
                                this.lvRank = i;
                            }
                        }
                        this.checkUserRank();
                        // 60 s 后清除缓存 
                        this.scheduleOnce(_ => this.ranklist = null, 60);
                        console.log(data);
                        // this.status = this.Rank_Loaded
                        if (data) {
                            this.render();
                        }
                    } else {
                        // this.status = this.Rank_load_Error
                        // this.render();
                        // Toast.make("加载失败！")
                    }
                }
            }
        })
    }

    itemAtIndex(node: cc.Node, data: RankItem, i) {
        let nickname = data.nickName || data._id || "未授权玩家";
        var nick = nickname.length <= 5 ? nickname : nickname.substr(0, 10);
        let head = ccUtil.find("head", node, cc.Sprite);
        let nickLabel = ccUtil.find("name", node, cc.Label);
        let rankLabel = ccUtil.find("rank", node, cc.Label);
        let scoreLabel = ccUtil.find("score", node, cc.Label);
        let rankIcon = ccUtil.find("rankIcon", node, cc.Sprite);


        rankIcon.node.active = false;
        rankLabel.node.active = false;
        if (i < 3) {
            ccUtil.setDisplay(rankIcon, "Img/rank/" + (i + 1));
            rankIcon.node.active = true
        }
        else {
            rankLabel.string = i + 1;
            rankLabel.node.active = true;
        }

        if (data.avatarUrl) {
            ccUtil.setDisplay(head, data.avatarUrl);
        } else {
            ccUtil.setDisplay(head, "Img/rank/moren");
        }
        nickLabel.string = nick;
        scoreLabel.string = (this.isPlayingDaily ? data.challengelevel : data.level || 0) + "关";
    }

    checkUserRank() {
        for (let key in this.ranklist) {
            if (this.ranklist[key].openId == PlayerInfo.openId) {
                this.lvRank = parseInt(key) + 1;
                return;
            }
            else {
                this.lvRank = 0;
            }
        }
    }
    click_share(v) {
        Device.playSfx("button")
        Platform.share();
    }

    click_challenge() {
        this.isPlayingDaily = true;
        let toggle = this.radioGroup.toggleItems.find(v => v.isChecked)
        if (UIFunctions.getToggleIndex(toggle) == 0) {
            this.click_friend()
        } else {
            this.ranklist = null;
            this.click_world();
        }
    }

    click_normal() {
        this.isPlayingDaily = false;
        let toggle = this.radioGroup.toggleItems.find(v => v.isChecked)
        if (UIFunctions.getToggleIndex(toggle) == 0) {
            this.click_friend()
        } else {
            this.ranklist = null;
            this.click_world();
        }
    }
    // update (dt) {}
}
