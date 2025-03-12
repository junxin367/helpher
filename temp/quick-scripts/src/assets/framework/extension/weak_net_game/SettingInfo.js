"use strict";
cc._RF.push(module, 'dd0afi5IoZLuLT9UMhemhBT', 'SettingInfo');
// framework/extension/weak_net_game/SettingInfo.ts

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
exports.SettingInfo = void 0;
var DataCenter_1 = require("../../core/DataCenter");
var Device_1 = require("../../misc/Device");
var SettingInfoDC = /** @class */ (function (_super) {
    __extends(SettingInfoDC, _super);
    function SettingInfoDC() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //背景音乐
        _this.music = true;
        //音效
        _this.effect = true;
        //手机震动
        _this.vibrate = true;
        //屏幕晃动
        _this.shake = true;
        _this.isfirst = false;
        return _this;
    }
    SettingInfoDC.prototype.onLoadAll = function () {
        Device_1.default.setBGMEnable(this.music);
        Device_1.default.setSFXEnable(this.effect);
        Device_1.default.isVibrateEnabled = this.vibrate;
        console.log("load settings:---------------");
        console.log("music:", this.music);
        console.log("effect:", this.effect);
        console.log("vibrate:", this.vibrate);
    };
    SettingInfoDC.prototype.saveSettings = function () {
        this.music = Device_1.default.isBgmEnabled;
        this.effect = Device_1.default.isSfxEnabled;
        this.vibrate = Device_1.default.isVibrateEnabled;
        this.save();
    };
    __decorate([
        DataCenter_1.field()
    ], SettingInfoDC.prototype, "music", void 0);
    __decorate([
        DataCenter_1.field()
    ], SettingInfoDC.prototype, "effect", void 0);
    __decorate([
        DataCenter_1.field()
    ], SettingInfoDC.prototype, "vibrate", void 0);
    __decorate([
        DataCenter_1.field()
    ], SettingInfoDC.prototype, "shake", void 0);
    SettingInfoDC = __decorate([
        DataCenter_1.dc("SettingInfo")
    ], SettingInfoDC);
    return SettingInfoDC;
}(DataCenter_1.default));
exports.default = SettingInfoDC;
exports.SettingInfo = DataCenter_1.default.register(SettingInfoDC);

cc._RF.pop();