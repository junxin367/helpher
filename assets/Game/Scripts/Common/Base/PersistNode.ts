import StatHepler from "../../../../framework/extension/aldsdk/StatHelper";
import Device from "../../../../framework/misc/Device";
import ViewManager from "../../../../framework/ui/ViewManager";
import { evt } from "../../../../framework/core/event";
import Platform from "../../../../framework/extension/Platform";
import { PlayerInfo } from "./PlayerInfo";
import { UserInfo } from "../../../../framework/extension/weak_net_game/UserInfo";
import BuffSystem from "../../../../framework/extension/buffs/BuffSystem";
import AutoLabour from "../../level/AutoLabour";
import Cloud from "../../../../framework/extension/mmcloud/Cloud";
import { SDKBase } from "../../../../framework/extension/SDKInterafce";
import { GameConfig } from "../../../../framework/extension/wxsdk/GameConfigs";
import DouyinStorage from "../../../../framework/extension/ttsdk/DouyinStorage";
import { ttsdk } from "../../../../framework/extension/ttsdk/ttsdk";

const { ccclass, property } = cc._decorator;
//config.csv配置
//BannerAdWhiteList 需要显示banner 的view列表
@ccclass
export default class PersistNode extends cc.Component {
    isNewUser: boolean = true;
    onLoad() {
        cc.game.addPersistRootNode(this.node)
        cc.game.on(cc.game.EVENT_SHOW, this.onShow, this, false);
        cc.game.on(cc.game.EVENT_HIDE, this.onHide, this, false)
        Device.setAudioPath("Audio/")
        SDKBase.initConfig(GameConfig);
        csv.setParser((type, value) => {
            if (type == "item") {
                // let ret = []
                if (typeof (value) == "string") {
                    // let vs = value.split(";")
                    // vs.forEach(v => {
                    let arr = value.split(",")
                    let r = { type: arr[0], id: arr[1], count: parseInt(arr[2]) }
                    // ret.push(r)
                    // })
                    return r
                }
            }
        })

        BuffSystem.register("AutoLabour", AutoLabour);

        evt.on("wxsdk.BannerReady", this.onBannerReady, this);
        evt.on("View.onShow", this.onViewShow, this)
        evt.on("View.onHidden", this.onViewHidden, this)
        evt.on("Loading.Success", this.onLoadingSuccess, this);
        this.addComponent(BuffSystem);
        evt.on("wx.shareMessageToFriend", this.onShareToFriend, this);
        evt.on("WeakNetGame.ShareSuccess", this.onShareSuccess, this);
        evt.on("WeakNetGame.ShareFail", this.onShareFail, this);
        evt.on("PlayerInfo.labour", this.onLabour, this);

        //  douyin 
        if (cc.sys.BYTEDANCE_GAME == cc.sys.platform) {
            ttsdk.douyin_sidebar_check();
        }

    }



    onLabour(num) {
        console.log("体力" + num);
        // if (UserInfo.isUse && PlayerInfo.nowTili < csv.Config.Max_Energy && num >= csv.Config.Max_Energy) {
        //     if (cc.director.getScene().name == 'Game') {
        //         // if (PlayerInfo.isWechat()) vm.show("Prefabs/UI/UISubscriber");
        //     }
        // }
        if (!UserInfo.isUse && num < PlayerInfo.nowTili) {
            // 说明当天消耗过体力
            UserInfo.isUse = true;
            UserInfo.save("isUse");
        }
        PlayerInfo.nowTili = num;
    }

    onShareFail(key) {
        StatHepler.sendPath("用户分享失败次数（获利点分享）", key)
    }

    onShareSuccess(key) {
        StatHepler.sendPath("用户分享成功次数（获利点分享）", key)
    }

    //分享
    onShareToFriend(cb) {
        Platform.share(function (ok) {
            if (ok)
                cb()
        })
    }


    onViewShow(view) {
            Platform.hideBannerAd();
    }

    onViewHidden(view) {
        Platform.hideBannerAd();
        // if (!csv.Config) return;
        // // if (cc.director.getScene().name == "Game") return Platform.showBannerAd();
        // if (csv.Config.BannerAdWhiteList && csv.Config.BannerAdWhiteList.indexOf(view.node.name) != -1) {
        //     Platform.hideBannerAd();
        // }
        // evt.emit("PersistNode.onViewHidden")
        // if (csv.Config.BannerAdRefreshWhiteList && csv.Config.BannerAdRefreshWhiteList.indexOf(view.node.name) != -1) {
        //     Platform.refreshBannerAd();
        // }

    }
    onDestroy() {
        evt.off(this);
    }

    onBannerReady() {
        if (ViewManager.instance) {
            ViewManager.instance.allViews.forEach(v => {
                // csv.Config.BannerActiveViews
                // csv.Config.ShowBannerViews
                if (v.node.active) {
                    if (csv.Config.BannerAdWhiteList && csv.Config.BannerAdWhiteList.indexOf(v.node.name) == -1) {
                        //没有在白名单里的要隐藏 
                        console.log(v.node.name + "未在白名单里，隐藏banner");
                        Platform.hideBannerAd();
                    }
                }
            })
        }

    }

    onShow(a) {
        if (this.isHidding) {
            //resume game 
            evt.emit("Game.Resume");
            this.isHidding = false;
        }

    }

    isHidding: boolean = false;

    onHide() {
        PlayerInfo.saveExit();
        if (!CC_DEBUG) {
            //强制上传数据
            PlayerInfo.save(null, true);
        }
        this.isHidding = true;
        // UserInfo.exitGame();
        this.unschedule(this.time30);
        this.unschedule(this.time45);
        this.unschedule(this.time60);
        Platform.hideBannerAd();
    }

    start() {
        // let isn = localStorage.getItem("PlayerInfo.guide")
        // if (isn == null || isn == "") {
        //     this.isNewUser = true
        // } else {
        //     this.isNewUser = false;
        // }
        // if (this.isNewUser) {
        //     //开始加载
        //     StatHepler.userAction("开始加载")
        // }
    }

    onLoadingSuccess() {
        evt.off("Loading.Success", this.onLoadingSuccess, this);
        if (this.isNewUser) {
            this.scheduleOnce(this.time30, 30);
            this.scheduleOnce(this.time45, 45);
            this.scheduleOnce(this.time60, 60);
            StatHepler.userAction("加载成功")
        }
    }

    time30() {
        StatHepler.userAction("30s未退出")
    }

    time45() {
        StatHepler.userAction("45s未退出")
    }

    time60() {
        StatHepler.userAction("60s未退出")
    }
}