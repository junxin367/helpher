"use strict";
cc._RF.push(module, 'c7c85YJUnNB5LL5Imt3zcGk', 'UICustomer ');
// Game/Scripts/UI/UICustomer .ts

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
var UserInfo_1 = require("../../../framework/extension/weak_net_game/UserInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UICustomer = /** @class */ (function (_super) {
    __extends(UICustomer, _super);
    function UICustomer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.isSuccess = false;
        return _this;
    }
    UICustomer.prototype.onLoad = function () {
        var _this = this;
        this.onClick(this.btn_close, function (_) { return _this.click_close(); });
    };
    UICustomer.prototype.onShow = function (callback) {
        this.callback = callback;
        this.render();
    };
    UICustomer.prototype.click_close = function () {
        vm.hide(this);
    };
    UICustomer.prototype.click_customer = function () {
        var _this = this;
        UserInfo_1.UserInfo.tmpIskf = false;
        sdk_1.wxsdk.openCustomerServiceConversation(function (_) {
            // Toast.make("成功");
            UserInfo_1.UserInfo.tmpIskf = true;
            if (CC_DEBUG) {
                UserInfo_1.UserInfo.isKf = true;
                UserInfo_1.UserInfo.kfTime = Date.now();
                UserInfo_1.UserInfo.save();
            }
            vm.hide(_this);
        }, function (_) {
            // Toast.make("失败");
        });
    };
    __decorate([
        property(cc.Node)
    ], UICustomer.prototype, "btn_close", void 0);
    UICustomer = __decorate([
        ccclass
    ], UICustomer);
    return UICustomer;
}(mvcView_1.default));
exports.default = UICustomer;

cc._RF.pop();