"use strict";
cc._RF.push(module, 'f2448CUAlJFk6s9frbtdrWA', 'UIEnergeyPackage');
// Game/Scripts/UI/UIEnergeyPackage.ts

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
var IconSov_1 = require("../../../framework/extension/weak_net_game/IconSov");
var WeakNetGame_1 = require("../../../framework/extension/weak_net_game/WeakNetGame");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var event_1 = require("../../../framework/core/event");
var display_1 = require("../../../framework/misc/display");
var StatHelper_1 = require("../../../framework/extension/aldsdk/StatHelper");
var Platform_1 = require("../../../framework/extension/Platform");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIEnergeyPackage = /** @class */ (function (_super) {
    __extends(UIEnergeyPackage, _super);
    function UIEnergeyPackage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label_tips = null;
        _this.label_energy = null;
        _this.btn_claim = null;
        _this.btn_double = null;
        _this.btn_nothanks = null;
        _this.btn_jia = null;
        _this.sdk = null;
        _this.youlike = null;
        _this.successClaim = false;
        return _this;
        // onHidden() {
        //     if (this.successClaim) {
        //         vm.show("Prefabs/UI/UIDoubleGet", csv.Config.EneryPackage_Count);
        //     }
        // }
    }
    UIEnergeyPackage.prototype.onLoad = function () {
        this.register(this.label_tips, function () { return "\u606D\u559C\u4F60\u83B7\u5F97" + csv.Config.EneryPackage_Count + "\u4F53\u529B\uFF0C\u5FEB\u6765\u9886\u53D6\u5427\uFF01"; });
        this.register(this.label_energy, function () { return csv.Config.EneryPackage_Count; });
        this.register(this.btn_claim, this.click_claim);
        this.register(this.btn_double, this.click_double);
        this.register(this.btn_nothanks, this.click_cancel);
        this.registerSubViews(IconSov_1.default);
    };
    UIEnergeyPackage.prototype.start = function () {
        // if (PlayerInfo.isShowSDK()) {
        //     let youlike = window['zzsdkui'].youlike(2, 0, 400);
        //     youlike && this.sdk.addChild(youlike);
        //     youlike.scale = 1;
        // }
    };
    UIEnergeyPackage.prototype.onHidden = function () {
        event_1.evt.off(this);
    };
    UIEnergeyPackage.prototype.onDestroy = function () {
        event_1.evt.off(this);
    };
    UIEnergeyPackage.prototype.onResume = function () {
        Platform_1.default.reloadBannerAd();
    };
    UIEnergeyPackage.prototype.onShown = function () {
        event_1.evt.on("Game.Resume", this.onResume, this);
        this.render();
        this.successClaim = false;
        if (window.qq || window.tt) {
            this.btn_nothanks.node.active = true;
            this.btn_jia.active = false;
            Platform_1.default.showBannerAd();
            return;
        }
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
    UIEnergeyPackage.prototype.click_cancel = function () {
        vm.hide(this);
    };
    UIEnergeyPackage.prototype.click_claim = function () {
        // if (this.checkEnergyFull()) return;
        this.claim();
    };
    UIEnergeyPackage.prototype.click_double = function () {
        // if (this.checkEnergyFull()) return;
        WeakNetGame_1.default.doChoice("SOV_EneryPackage", this.onClaimDouble, this, function () {
            StatHelper_1.default.sendPath("领取体力大礼包", "状态", "领取失败");
        });
    };
    UIEnergeyPackage.prototype.checkEnergyFull = function () {
        if (PlayerInfo_1.PlayerInfo.labour >= csv.Config.Max_Energy) {
            ToastManager_1.Toast.make('体力已满!');
            return true;
        }
        return false;
    };
    UIEnergeyPackage.prototype.onClaimDouble = function () {
        this.claim(1);
        // vm.hide(this);
    };
    UIEnergeyPackage.prototype.claim = function (mult) {
        if (mult === void 0) { mult = 1; }
        if (this.successClaim)
            return;
        var add = mult * csv.Config.EneryPackage_Count;
        var old = PlayerInfo_1.PlayerInfo.labour;
        var r = PlayerInfo_1.PlayerInfo.labour + add;
        // PlayerInfo.labour = Math.min(r, csv.Config.Max_Energy);
        PlayerInfo_1.PlayerInfo.labour = r;
        PlayerInfo_1.PlayerInfo.save("labour");
        event_1.evt.emit("Game.getTili", display_1.default.center, PlayerInfo_1.PlayerInfo.labour - old);
        // if (PlayerInfo.labour >= csv.Config.Max_Energy) {
        //     Toast.make("体力已恢复满!")
        // } else {
        //     Toast.make("获得" + add + "点体力");
        // }
        ToastManager_1.Toast.make("获得" + add + "点体力");
        this.successClaim = true;
        StatHelper_1.default.sendPath("领取体力大礼包", "状态", "领取成功");
    };
    __decorate([
        property(cc.Label)
    ], UIEnergeyPackage.prototype, "label_tips", void 0);
    __decorate([
        property(cc.Label)
    ], UIEnergeyPackage.prototype, "label_energy", void 0);
    __decorate([
        property(cc.Button)
    ], UIEnergeyPackage.prototype, "btn_claim", void 0);
    __decorate([
        property(cc.Button)
    ], UIEnergeyPackage.prototype, "btn_double", void 0);
    __decorate([
        property(cc.Button)
    ], UIEnergeyPackage.prototype, "btn_nothanks", void 0);
    __decorate([
        property(cc.Node)
    ], UIEnergeyPackage.prototype, "btn_jia", void 0);
    __decorate([
        property(cc.Node)
    ], UIEnergeyPackage.prototype, "sdk", void 0);
    UIEnergeyPackage = __decorate([
        ccclass
    ], UIEnergeyPackage);
    return UIEnergeyPackage;
}(mvcView_1.default));
exports.default = UIEnergeyPackage;

cc._RF.pop();