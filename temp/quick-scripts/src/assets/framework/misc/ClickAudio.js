"use strict";
cc._RF.push(module, '79f2ailkJpKCb/aXocZslku', 'ClickAudio');
// framework/misc/ClickAudio.ts

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
var Device_1 = require("./Device");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
var ClickAudio = /** @class */ (function (_super) {
    __extends(ClickAudio, _super);
    function ClickAudio() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audio = null;
        _this.audio_down = null;
        return _this;
        // update (dt) {}
    }
    ClickAudio.prototype.onLoad = function () {
        var _this = this;
        this.node.on('touchstart', function (_) {
            //cc.EaseElasticOut:create(
            // this.node.stopAllActions();
            Device_1.default.playEffect(_this.audio_down, false);
        }, this.node);
        this.node.on("touchend", function (_) {
            Device_1.default.playEffect(_this.audio, false);
        });
        this.node.on("touchcancel", function (_) {
        });
    };
    __decorate([
        property(cc.AudioClip)
    ], ClickAudio.prototype, "audio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], ClickAudio.prototype, "audio_down", void 0);
    ClickAudio = __decorate([
        ccclass
    ], ClickAudio);
    return ClickAudio;
}(cc.Component));
exports.default = ClickAudio;

cc._RF.pop();