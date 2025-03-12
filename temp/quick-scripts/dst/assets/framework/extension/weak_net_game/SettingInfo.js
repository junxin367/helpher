
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/weak_net_game/SettingInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHdlYWtfbmV0X2dhbWVcXFNldHRpbmdJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBOEQ7QUFDOUQsNENBQXVDO0FBR3ZDO0lBQTJDLGlDQUFVO0lBQXJEO1FBQUEscUVBcUNDO1FBbkNHLE1BQU07UUFFTixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLElBQUk7UUFFSixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLE1BQU07UUFFTixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLE1BQU07UUFFTixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGFBQU8sR0FBWSxLQUFLLENBQUM7O0lBbUI3QixDQUFDO0lBakJHLGlDQUFTLEdBQVQ7UUFDSSxnQkFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsZ0JBQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLGdCQUFNLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUE7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDekMsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFNLENBQUMsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsZ0JBQU0sQ0FBQyxZQUFZLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxnQkFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBL0JEO1FBREMsa0JBQUssRUFBRTtnREFDYztJQUl0QjtRQURDLGtCQUFLLEVBQUU7aURBQ2U7SUFJdkI7UUFEQyxrQkFBSyxFQUFFO2tEQUNnQjtJQUl4QjtRQURDLGtCQUFLLEVBQUU7Z0RBQ2M7SUFoQkwsYUFBYTtRQURqQyxlQUFFLENBQUMsYUFBYSxDQUFDO09BQ0csYUFBYSxDQXFDakM7SUFBRCxvQkFBQztDQXJDRCxBQXFDQyxDQXJDMEMsb0JBQVUsR0FxQ3BEO2tCQXJDb0IsYUFBYTtBQXVDdkIsUUFBQSxXQUFXLEdBQWtCLG9CQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGFDZW50ZXIsIHsgZGMsIGZpZWxkIH0gZnJvbSBcIi4uLy4uL2NvcmUvRGF0YUNlbnRlclwiO1xyXG5pbXBvcnQgRGV2aWNlIGZyb20gXCIuLi8uLi9taXNjL0RldmljZVwiO1xyXG5cclxuQGRjKFwiU2V0dGluZ0luZm9cIilcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ0luZm9EQyBleHRlbmRzIERhdGFDZW50ZXIge1xyXG5cclxuICAgIC8v6IOM5pmv6Z+z5LmQXHJcbiAgICBAZmllbGQoKVxyXG4gICAgbXVzaWM6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8v6Z+z5pWIXHJcbiAgICBAZmllbGQoKVxyXG4gICAgZWZmZWN0OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvL+aJi+acuumch+WKqFxyXG4gICAgQGZpZWxkKClcclxuICAgIHZpYnJhdGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8v5bGP5bmV5pmD5YqoXHJcbiAgICBAZmllbGQoKVxyXG4gICAgc2hha2U6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIGlzZmlyc3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBvbkxvYWRBbGwoKSB7XHJcbiAgICAgICAgRGV2aWNlLnNldEJHTUVuYWJsZSh0aGlzLm11c2ljKTtcclxuICAgICAgICBEZXZpY2Uuc2V0U0ZYRW5hYmxlKHRoaXMuZWZmZWN0KTtcclxuICAgICAgICBEZXZpY2UuaXNWaWJyYXRlRW5hYmxlZCA9IHRoaXMudmlicmF0ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWQgc2V0dGluZ3M6LS0tLS0tLS0tLS0tLS0tXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtdXNpYzpcIiwgdGhpcy5tdXNpYylcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVmZmVjdDpcIiwgdGhpcy5lZmZlY3QpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ2aWJyYXRlOlwiLCB0aGlzLnZpYnJhdGUpXHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVNldHRpbmdzKCkge1xyXG4gICAgICAgIHRoaXMubXVzaWMgPSBEZXZpY2UuaXNCZ21FbmFibGVkO1xyXG4gICAgICAgIHRoaXMuZWZmZWN0ID0gRGV2aWNlLmlzU2Z4RW5hYmxlZDtcclxuICAgICAgICB0aGlzLnZpYnJhdGUgPSBEZXZpY2UuaXNWaWJyYXRlRW5hYmxlZDtcclxuICAgICAgICB0aGlzLnNhdmUoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgU2V0dGluZ0luZm86IFNldHRpbmdJbmZvREMgPSBEYXRhQ2VudGVyLnJlZ2lzdGVyKFNldHRpbmdJbmZvREMpOyJdfQ==