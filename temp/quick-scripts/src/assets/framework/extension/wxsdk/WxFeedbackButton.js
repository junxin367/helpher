"use strict";
cc._RF.push(module, '56c5dQwMDVIbZzexb7961L/', 'WxFeedbackButton');
// framework/extension/wxsdk/WxFeedbackButton.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var wxSysInfo;
var WxFeedbackButton = /** @class */ (function (_super) {
    __extends(WxFeedbackButton, _super);
    function WxFeedbackButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handler = new cc.Component.EventHandler();
        _this.button = null;
        _this.width = 200;
        _this.height = 40;
        return _this;
    }
    WxFeedbackButton.prototype.onLoad = function () {
    };
    WxFeedbackButton.prototype.onEnable = function () {
        this.button && this.button.show();
    };
    WxFeedbackButton.prototype.onDisable = function () {
        this.button && this.button.hide();
    };
    WxFeedbackButton.prototype.onDestroy = function () {
        this.button && this.button.destroy();
    };
    WxFeedbackButton.prototype.createButton = function (callback) {
        if (!wxSysInfo) {
            wxSysInfo = wx.getSystemInfoSync();
        }
        var leftPos = wxSysInfo.windowWidth * 0.5 - this.width / 2;
        var topPos = wxSysInfo.windowHeight * 0.5 - this.height / 2;
        var width = this.width;
        var height = this.height;
        if (this.button) {
            this.button.destroy();
        }
        var btnRect = this.node.getBoundingBoxToWorld();
        var ratio = cc.view.getDevicePixelRatio();
        var scale = cc.view.getScaleX();
        var factor = scale / ratio;
        leftPos = btnRect.x * factor;
        topPos = wxSysInfo.screenHeight - (btnRect.y + btnRect.height) * factor;
        width = btnRect.width * factor;
        height = btnRect.height * factor;
        this.button = wx.createFeedbackButton({
            type: "text",
            text: "        ",
            style: {
                left: leftPos,
                top: topPos,
                width: width,
                height: height,
                lineHeight: 60,
                textAlign: 'center',
                backgroundColor: '#00000000',
                color: '#ffffff'
            }
        });
        this.button.onTap(function (res) {
            if (res) {
                if (callback)
                    callback(res);
            }
            else if (callback)
                callback(null);
        });
    };
    WxFeedbackButton.prototype.start = function () {
        var _this = this;
        if (CC_WECHATGAME) {
            this.createButton(function (res) {
                _this.handler.emit([res]);
            });
        }
    };
    __decorate([
        property(cc.Component.EventHandler)
    ], WxFeedbackButton.prototype, "handler", void 0);
    __decorate([
        property
    ], WxFeedbackButton.prototype, "width", void 0);
    __decorate([
        property
    ], WxFeedbackButton.prototype, "height", void 0);
    WxFeedbackButton = __decorate([
        ccclass,
        menu("Wxsdk/WxFeedbackButton")
    ], WxFeedbackButton);
    return WxFeedbackButton;
}(cc.Component));
exports.default = WxFeedbackButton;

cc._RF.pop();