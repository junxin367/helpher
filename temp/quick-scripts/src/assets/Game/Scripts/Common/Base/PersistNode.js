"use strict";
cc._RF.push(module, 'bee3b2VIFhPNJDQUGW7mTDp', 'PersistNode');
// Game/Scripts/Common/Base/PersistNode.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var StatHelper_1 = require("../../../../framework/extension/aldsdk/StatHelper");
var Device_1 = require("../../../../framework/misc/Device");
var ViewManager_1 = require("../../../../framework/ui/ViewManager");
var event_1 = require("../../../../framework/core/event");
var Platform_1 = require("../../../../framework/extension/Platform");
var PlayerInfo_1 = require("./PlayerInfo");
var UserInfo_1 = require("../../../../framework/extension/weak_net_game/UserInfo");
var BuffSystem_1 = require("../../../../framework/extension/buffs/BuffSystem");
var AutoLabour_1 = require("../../level/AutoLabour");
var SDKInterafce_1 = require("../../../../framework/extension/SDKInterafce");
var GameConfigs_1 = require("../../../../framework/extension/wxsdk/GameConfigs");
var ttsdk_1 = require("../../../../framework/extension/ttsdk/ttsdk");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
//config.csv配置
//BannerAdWhiteList 需要显示banner 的view列表
var PersistNode = /** @class */ (function (_super) {
    __extends(PersistNode, _super);
    function PersistNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isNewUser = true;
        _this.isHidding = false;
        return _this;
    }
    PersistNode.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.node);
        cc.game.on(cc.game.EVENT_SHOW, this.onShow, this, false);
        cc.game.on(cc.game.EVENT_HIDE, this.onHide, this, false);
        Device_1.default.setAudioPath("Audio/");
        SDKInterafce_1.SDKBase.initConfig(GameConfigs_1.GameConfig);
        csv.setParser(function (type, value) {
            if (type == "item") {
                // let ret = []
                if (typeof (value) == "string") {
                    // let vs = value.split(";")
                    // vs.forEach(v => {
                    var arr = value.split(",");
                    var r = { type: arr[0], id: arr[1], count: parseInt(arr[2]) };
                    // ret.push(r)
                    // })
                    return r;
                }
            }
        });
        BuffSystem_1.default.register("AutoLabour", AutoLabour_1.default);
        event_1.evt.on("wxsdk.BannerReady", this.onBannerReady, this);
        event_1.evt.on("View.onShow", this.onViewShow, this);
        event_1.evt.on("View.onHidden", this.onViewHidden, this);
        event_1.evt.on("Loading.Success", this.onLoadingSuccess, this);
        this.addComponent(BuffSystem_1.default);
        event_1.evt.on("wx.shareMessageToFriend", this.onShareToFriend, this);
        event_1.evt.on("WeakNetGame.ShareSuccess", this.onShareSuccess, this);
        event_1.evt.on("WeakNetGame.ShareFail", this.onShareFail, this);
        event_1.evt.on("PlayerInfo.labour", this.onLabour, this);
        //  douyin 
        if (cc.sys.BYTEDANCE_GAME == cc.sys.platform) {
            ttsdk_1.ttsdk.douyin_sidebar_check();
        }
    };
    PersistNode.prototype.onLabour = function (num) {
        console.log("体力" + num);
        // if (UserInfo.isUse && PlayerInfo.nowTili < csv.Config.Max_Energy && num >= csv.Config.Max_Energy) {
        //     if (cc.director.getScene().name == 'Game') {
        //         // if (PlayerInfo.isWechat()) vm.show("Prefabs/UI/UISubscriber");
        //     }
        // }
        if (!UserInfo_1.UserInfo.isUse && num < PlayerInfo_1.PlayerInfo.nowTili) {
            // 说明当天消耗过体力
            UserInfo_1.UserInfo.isUse = true;
            UserInfo_1.UserInfo.save("isUse");
        }
        PlayerInfo_1.PlayerInfo.nowTili = num;
    };
    PersistNode.prototype.onShareFail = function (key) {
        StatHelper_1.default.sendPath("用户分享失败次数（获利点分享）", key);
    };
    PersistNode.prototype.onShareSuccess = function (key) {
        StatHelper_1.default.sendPath("用户分享成功次数（获利点分享）", key);
    };
    //分享
    PersistNode.prototype.onShareToFriend = function (cb) {
        Platform_1.default.share(function (ok) {
            if (ok)
                cb();
        });
    };
    PersistNode.prototype.onViewShow = function (view) {
        Platform_1.default.hideBannerAd();
    };
    PersistNode.prototype.onViewHidden = function (view) {
        Platform_1.default.hideBannerAd();
        // if (!csv.Config) return;
        // // if (cc.director.getScene().name == "Game") return Platform.showBannerAd();
        // if (csv.Config.BannerAdWhiteList && csv.Config.BannerAdWhiteList.indexOf(view.node.name) != -1) {
        //     Platform.hideBannerAd();
        // }
        // evt.emit("PersistNode.onViewHidden")
        // if (csv.Config.BannerAdRefreshWhiteList && csv.Config.BannerAdRefreshWhiteList.indexOf(view.node.name) != -1) {
        //     Platform.refreshBannerAd();
        // }
    };
    PersistNode.prototype.onDestroy = function () {
        event_1.evt.off(this);
    };
    PersistNode.prototype.onBannerReady = function () {
        if (ViewManager_1.default.instance) {
            ViewManager_1.default.instance.allViews.forEach(function (v) {
                // csv.Config.BannerActiveViews
                // csv.Config.ShowBannerViews
                if (v.node.active) {
                    if (csv.Config.BannerAdWhiteList && csv.Config.BannerAdWhiteList.indexOf(v.node.name) == -1) {
                        //没有在白名单里的要隐藏 
                        console.log(v.node.name + "未在白名单里，隐藏banner");
                        Platform_1.default.hideBannerAd();
                    }
                }
            });
        }
    };
    PersistNode.prototype.onShow = function (a) {
        if (this.isHidding) {
            //resume game 
            event_1.evt.emit("Game.Resume");
            this.isHidding = false;
        }
    };
    PersistNode.prototype.onHide = function () {
        PlayerInfo_1.PlayerInfo.saveExit();
        if (!CC_DEBUG) {
            //强制上传数据
            PlayerInfo_1.PlayerInfo.save(null, true);
        }
        this.isHidding = true;
        // UserInfo.exitGame();
        this.unschedule(this.time30);
        this.unschedule(this.time45);
        this.unschedule(this.time60);
        Platform_1.default.hideBannerAd();
    };
    PersistNode.prototype.start = function () {
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
    };
    PersistNode.prototype.onLoadingSuccess = function () {
        event_1.evt.off("Loading.Success", this.onLoadingSuccess, this);
        if (this.isNewUser) {
            this.scheduleOnce(this.time30, 30);
            this.scheduleOnce(this.time45, 45);
            this.scheduleOnce(this.time60, 60);
            StatHelper_1.default.userAction("加载成功");
        }
    };
    PersistNode.prototype.time30 = function () {
        StatHelper_1.default.userAction("30s未退出");
    };
    PersistNode.prototype.time45 = function () {
        StatHelper_1.default.userAction("45s未退出");
    };
    PersistNode.prototype.time60 = function () {
        StatHelper_1.default.userAction("60s未退出");
    };
    PersistNode = __decorate([
        ccclass
    ], PersistNode);
    return PersistNode;
}(cc.Component));
exports.default = PersistNode;

cc._RF.pop();