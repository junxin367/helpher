"use strict";
cc._RF.push(module, 'ec38chyDftF94LQwttCl+9C', 'WxgetInfoButton');
// framework/extension/wxsdk/WxgetInfoButton.ts

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
var Platform_1 = require("../Platform");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var wxSysInfo;
var WxgetInfoButton = /** @class */ (function (_super) {
    __extends(WxgetInfoButton, _super);
    function WxgetInfoButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handler = new cc.Component.EventHandler();
        _this.button = null;
        _this.width = 200;
        _this.height = 40;
        return _this;
    }
    WxgetInfoButton.prototype.onLoad = function () {
    };
    WxgetInfoButton.prototype.onEnable = function () {
        this.button && this.button.show();
    };
    WxgetInfoButton.prototype.onDisable = function () {
        this.button && this.button.hide();
    };
    WxgetInfoButton.prototype.onDestroy = function () {
        this.button && this.button.destroy();
    };
    WxgetInfoButton.prototype.createButton = function (callback) {
        var _this = this;
        if (!wxSysInfo) {
            wxSysInfo = wx.getSystemInfoSync();
        }
        console.log("------未授权! 调用wx.createUserInfoButton-------", wx.getSystemInfoSync().windowWidth);
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
        // var point = cc.v2(btnRect.x, btnRect.y)
        // cc.view._convertPointWithScale(point)
        leftPos = btnRect.x * factor;
        topPos = wxSysInfo.screenHeight - (btnRect.y + btnRect.height) * factor;
        width = btnRect.width * factor;
        height = btnRect.height * factor;
        this.button = wx.createUserInfoButton({
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
            if (res && res.userInfo) {
                console.log("res", res);
                _this.button.destroy();
                if (callback) {
                    callback(res.userInfo);
                }
            }
            else if (callback) {
                callback(null);
            }
        });
    };
    WxgetInfoButton.prototype.start = function () {
        var _this = this;
        Platform_1.default.checkAuth().then(function (v) {
            if (!v) {
                if (CC_WECHATGAME) {
                    _this.createButton(function (userInfo) {
                        _this.onClick(userInfo, true);
                    });
                }
            }
            else {
                _this.node.on(cc.Node.EventType.TOUCH_END, _this.onClick.bind(_this, v, false));
                // this.handler.emit([v])
                //n已授权无需创建 按钮
                // this.infoHandler.emit([v])
            }
        });
    };
    WxgetInfoButton.prototype.onClick = function (userInfo, isNew) {
        this.handler.emit([userInfo, isNew]);
    };
    __decorate([
        property(cc.Component.EventHandler)
    ], WxgetInfoButton.prototype, "handler", void 0);
    __decorate([
        property
    ], WxgetInfoButton.prototype, "width", void 0);
    __decorate([
        property
    ], WxgetInfoButton.prototype, "height", void 0);
    WxgetInfoButton = __decorate([
        ccclass,
        menu("Wxsdk/WxgetInfoButton")
    ], WxgetInfoButton);
    return WxgetInfoButton;
}(cc.Component));
exports.default = WxgetInfoButton;

cc._RF.pop();