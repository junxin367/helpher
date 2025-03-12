"use strict";
cc._RF.push(module, 'e7961Uqj2hNTZXvc+XPGOGR', 'UIPause');
// Game/Scripts/UI/UIPause.ts

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
var Device_1 = require("../../../framework/misc/Device");
var SettingInfo_1 = require("../../../framework/extension/weak_net_game/SettingInfo");
var mvcView_1 = require("../../../framework/ui/mvcView");
var LoadingScene_1 = require("../Common/Base/LoadingScene");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var actionUtil_1 = require("../../../framework/utils/actionUtil");
var event_1 = require("../../../framework/core/event");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIPause = /** @class */ (function (_super) {
    __extends(UIPause, _super);
    function UIPause() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.music = null;
        _this.effect = null;
        _this.sdk = null;
        _this.interfull_datu = null;
        return _this;
        // update (dt) {}
        // onHidden() {
        //     // evt.emit('Game.resume');
        //     cc.director.resume();
        // }
    }
    UIPause.prototype.onLoad = function () {
        this.musicOff = this.music.getChildByName("off");
        this.effectOff = this.effect.getChildByName("off");
    };
    UIPause.prototype.start = function () {
        // if (PlayerInfo.isShowSDK()) {
        //     let youlike = window['zzsdkui'].youlike(5, 0, -200);
        //     youlike && this.sdk.addChild(youlike);
        //     youlike.scale = 1;
        // }
    };
    UIPause.prototype.onShow = function () {
        actionUtil_1.default.jellyJump2(this.node);
        this.musicOff.active = !SettingInfo_1.SettingInfo.music;
        this.effectOff.active = !SettingInfo_1.SettingInfo.effect;
        this.scheduleOnce(function (_) { return cc.director.pause(); }, 0.8);
    };
    UIPause.prototype.click_music = function (tg) {
        cc.director.resume();
        event_1.evt.emit('Game.pause');
        Device_1.default.setBGMEnable(!SettingInfo_1.SettingInfo.music);
        SettingInfo_1.SettingInfo.saveSettings();
        this.musicOff.active = !SettingInfo_1.SettingInfo.music;
    };
    UIPause.prototype.click_effect = function (tg) {
        cc.director.resume();
        event_1.evt.emit('Game.pause');
        Device_1.default.setSFXEnable(!SettingInfo_1.SettingInfo.effect);
        SettingInfo_1.SettingInfo.saveSettings();
        this.effectOff.active = !SettingInfo_1.SettingInfo.effect;
    };
    UIPause.prototype.click_close = function () {
        cc.director.resume();
        vm.hide(this);
        event_1.evt.emit('Game.resume');
    };
    UIPause.prototype.click_level = function () {
        cc.director.resume();
        if (PlayerInfo_1.PlayerInfo.isPlayingDaily) {
            vm.show("Prefabs/UI/UIChallengeChapter");
        }
        else {
            vm.show("Prefabs/UI/UIChapter");
        }
        event_1.evt.emit('Game.pause');
    };
    UIPause.prototype.click_home = function () {
        cc.director.resume();
        LoadingScene_1.default.goto("Main");
        // let interfull_b = window['zzsdkui'].interFull_large(0, 'inter_full_large', 1800);
        // interfull_b && this.interfull_datu.children[0].addChild(interfull_b);
        // this.interfull_datu.active = true;
        // Platform.hideBannerAd();
    };
    UIPause.prototype.click_homedatu = function () {
        cc.director.resume();
        // this.interfull_datu.active = false;
        LoadingScene_1.default.goto("Main");
    };
    UIPause.prototype.onDestroy = function () {
        cc.director.resume();
    };
    __decorate([
        property(cc.Node)
    ], UIPause.prototype, "music", void 0);
    __decorate([
        property(cc.Node)
    ], UIPause.prototype, "effect", void 0);
    __decorate([
        property(cc.Node)
    ], UIPause.prototype, "sdk", void 0);
    __decorate([
        property(cc.Node)
    ], UIPause.prototype, "interfull_datu", void 0);
    UIPause = __decorate([
        ccclass
    ], UIPause);
    return UIPause;
}(mvcView_1.default));
exports.default = UIPause;

cc._RF.pop();