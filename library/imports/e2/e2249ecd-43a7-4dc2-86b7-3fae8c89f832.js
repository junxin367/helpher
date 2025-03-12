"use strict";
cc._RF.push(module, 'e22497NQ6dNwoa3P66Mifgy', 'UISetting');
// Game/Scripts/UI/UISetting.ts

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
var actionUtil_1 = require("../../../framework/utils/actionUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UISetting = /** @class */ (function (_super) {
    __extends(UISetting, _super);
    function UISetting() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.music = null;
        _this.effect = null;
        _this.sdk = null;
        return _this;
        // update (dt) {}
    }
    UISetting.prototype.onLoad = function () {
        // if(window.qq || window.tt){
        //     this.fankui.active = false;
        // }
        this.musicOff = this.music.getChildByName("off");
        this.effectOff = this.effect.getChildByName("off");
    };
    UISetting.prototype.start = function () {
        // if (PlayerInfo.isShowSDK()) {
        //     let youlike = window['zzsdkui'].youlike(4, 0, -200);
        //     youlike && this.sdk.addChild(youlike);
        //     youlike.scale = 1;
        // }
    };
    UISetting.prototype.onShow = function () {
        actionUtil_1.default.jellyJump2(this.node);
        this.musicOff.active = !SettingInfo_1.SettingInfo.music;
        this.effectOff.active = !SettingInfo_1.SettingInfo.effect;
    };
    UISetting.prototype.click_music = function () {
        Device_1.default.setBGMEnable(!SettingInfo_1.SettingInfo.music);
        SettingInfo_1.SettingInfo.saveSettings();
        this.musicOff.active = !SettingInfo_1.SettingInfo.music;
    };
    UISetting.prototype.click_effect = function () {
        Device_1.default.setSFXEnable(!SettingInfo_1.SettingInfo.effect);
        SettingInfo_1.SettingInfo.saveSettings();
        this.effectOff.active = !SettingInfo_1.SettingInfo.effect;
    };
    UISetting.prototype.click_close = function () {
        vm.hide(this);
    };
    UISetting.prototype.onDestroy = function () {
        // if (PlayerInfo.isShowSDK()) window['zzsdkui'].unscheduleAllCallbacks();
    };
    __decorate([
        property(cc.Node)
    ], UISetting.prototype, "music", void 0);
    __decorate([
        property(cc.Node)
    ], UISetting.prototype, "effect", void 0);
    __decorate([
        property(cc.Node)
    ], UISetting.prototype, "sdk", void 0);
    UISetting = __decorate([
        ccclass
    ], UISetting);
    return UISetting;
}(mvcView_1.default));
exports.default = UISetting;

cc._RF.pop();