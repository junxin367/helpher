"use strict";
cc._RF.push(module, 'cc5f94l4m1LpIYa8UIX4oXW', 'UIGetLabour');
// Game/Scripts/UI/UIGetLabour.ts

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
var mvcView_1 = require("../../../framework/ui/mvcView");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var event_1 = require("../../../framework/core/event");
var WeakNetGame_1 = require("../../../framework/extension/weak_net_game/WeakNetGame");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var display_1 = require("../../../framework/misc/display");
var qqsdk_1 = require("../../../framework/extension/qq/qqsdk");
var IconSov_1 = require("../../../framework/extension/weak_net_game/IconSov");
var Platform_1 = require("../../../framework/extension/Platform");
var umeng_1 = require("../../../framework/extension/aldsdk/umeng");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIGetLabour = /** @class */ (function (_super) {
    __extends(UIGetLabour, _super);
    function UIGetLabour() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_moregame = null;
        _this.sdk = null;
        _this.btn_nothanks = null;
        _this.btn_ok = null;
        _this.btn_jia = null;
        _this.isVideo = false;
        _this.youlike = null;
        _this.isActive = true;
        return _this;
        // update (dt) {}
    }
    UIGetLabour.prototype.onLoad = function () {
        this.btn_moregame.active = window.qq ? true : false;
        this.registerSubViews(IconSov_1.default);
    };
    UIGetLabour.prototype.onDestroy = function () {
        event_1.evt.off(this);
    };
    UIGetLabour.prototype.onResume = function () {
        Platform_1.default.reloadBannerAd();
    };
    UIGetLabour.prototype.onShow = function (callback, isActive) {
        if (isActive === void 0) { isActive = false; }
        event_1.evt.on("Game.Resume", this.onResume, this);
        this.callback = callback;
        this.isActive = isActive;
        this.isVideo = false;
        this.render();
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
    };
    UIGetLabour.prototype.start = function () {
        // if (PlayerInfo.isShowSDK()) {
        //     let youlike = window['zzsdkui'].youlike(2, 0, 400);
        //     youlike && this.sdk.addChild(youlike);
        //     youlike.scale = 1;
        // }
    };
    UIGetLabour.prototype.click_close = function () {
        vm.hide(this);
    };
    UIGetLabour.prototype.click_get = function () {
        var _this = this;
        if (PlayerInfo_1.PlayerInfo.labour >= csv.Config.Max_Energy && this.isActive) {
            ToastManager_1.Toast.make("体力已满，快去帮帮小姐姐吧");
            return;
        }
        this.btn_ok.interactable = false;
        this.scheduleOnce(function (_) { return _this.btn_ok.interactable = true; }, 3);
        umeng_1.umeng.onEvent('rewardAd', 'labourShow');
        WeakNetGame_1.default.doChoice("SOV_Get_Labour", function (_) {
            console.log("奖励体力");
            var add = csv.Config.Energy_Get_Num;
            var old = PlayerInfo_1.PlayerInfo.labour;
            var r = PlayerInfo_1.PlayerInfo.labour + add;
            // PlayerInfo.labour = Math.min(r, csv.Config.Max_Energy || 5);
            PlayerInfo_1.PlayerInfo.labour = r;
            PlayerInfo_1.PlayerInfo.save("labour");
            umeng_1.umeng.onEvent('rewardAd', 'labourRewarded');
            event_1.evt.emit("Game.getTili", display_1.default.center, PlayerInfo_1.PlayerInfo.labour - old);
            // if (PlayerInfo.labour >= csv.Config.Max_Energy) {
            //     Toast.make("体力已恢复满!")
            //     vm.hide(this);
            // } else {
            //     Toast.make("获得" + add + "点体力");
            // }
            ToastManager_1.Toast.make("获得" + add + "点体力");
            _this.isVideo = true;
            vm.hide(_this);
        }, this);
    };
    UIGetLabour.prototype.onHidden = function () {
        if (this.isVideo) {
            this.callback && this.callback();
        }
        event_1.evt.off(this);
    };
    UIGetLabour.prototype.click_moregame = function () {
        qqsdk_1.qqsdk.showAppBox();
    };
    __decorate([
        property(cc.Node)
    ], UIGetLabour.prototype, "btn_moregame", void 0);
    __decorate([
        property(cc.Node)
    ], UIGetLabour.prototype, "sdk", void 0);
    __decorate([
        property(cc.Button)
    ], UIGetLabour.prototype, "btn_nothanks", void 0);
    __decorate([
        property(cc.Button)
    ], UIGetLabour.prototype, "btn_ok", void 0);
    __decorate([
        property(cc.Node)
    ], UIGetLabour.prototype, "btn_jia", void 0);
    UIGetLabour = __decorate([
        ccclass
    ], UIGetLabour);
    return UIGetLabour;
}(mvcView_1.default));
exports.default = UIGetLabour;

cc._RF.pop();