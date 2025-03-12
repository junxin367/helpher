"use strict";
cc._RF.push(module, '01b50uXqhxIy6wZH0bb5lx1', 'UISubscriber');
// Game/Scripts/UI/UISubscriber.ts

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
var sdk_1 = require("../../../framework/extension/wxsdk/sdk");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var UserInfo_1 = require("../../../framework/extension/weak_net_game/UserInfo");
var WeakNetGame_1 = require("../../../framework/extension/weak_net_game/WeakNetGame");
var ServerConfig_1 = require("../Common/Base/ServerConfig");
var Net_1 = require("../../../framework/misc/Net");
var code_1 = require("../Common/code");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UISubscriber = /** @class */ (function (_super) {
    __extends(UISubscriber, _super);
    function UISubscriber() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.isSuccess = false;
        return _this;
    }
    UISubscriber.prototype.onLoad = function () {
        var _this = this;
        this.onClick(this.btn_close, function (_) { return _this.click_close(); });
    };
    UISubscriber.prototype.onShow = function (callback) {
        this.callback = callback;
        this.render();
    };
    UISubscriber.prototype.click_close = function () {
        vm.hide(this);
    };
    UISubscriber.prototype.click_subscriber = function () {
        var _this = this;
        sdk_1.wxsdk.requestSubscribeMessage().then(function (v) { return _this.notifyServer(); }).catch(function (v) {
            ToastManager_1.Toast.make("订阅失败!");
        });
    };
    UISubscriber.prototype.notifyServer = function () {
        //ids 所有接受的 模板id
        vm.hide(this);
        WeakNetGame_1.default.client.httpGet(ServerConfig_1.Api.subscribe).then(function (v) {
            if (v == Net_1.default.Code.Timeout) {
                console.log("连接超时！");
            }
            else {
                if (v) {
                    var d = JSON.parse(v);
                    if (d.errno == 0) {
                        d = d.data;
                        console.log("返回数据", d);
                        //根据返回数据做对应逻辑处理
                        ToastManager_1.Toast.make("订阅成功");
                        UserInfo_1.UserInfo.isDy = true;
                        UserInfo_1.UserInfo.save();
                        vm.show("Prefabs/UI/UIGetSuccess", csv.Config.Subscriber_Success);
                    }
                    else {
                        console.log("返回错误码" + d.errno);
                        if (d.errno == code_1.Code.Subscribe_ERROR) {
                            ToastManager_1.Toast.make(d.errmsg);
                            UserInfo_1.UserInfo.isDy = true;
                            UserInfo_1.UserInfo.save();
                        }
                    }
                }
                else {
                }
            }
        });
    };
    __decorate([
        property(cc.Node)
    ], UISubscriber.prototype, "btn_close", void 0);
    UISubscriber = __decorate([
        ccclass
    ], UISubscriber);
    return UISubscriber;
}(mvcView_1.default));
exports.default = UISubscriber;

cc._RF.pop();