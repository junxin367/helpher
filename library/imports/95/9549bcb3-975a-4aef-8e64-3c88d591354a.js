"use strict";
cc._RF.push(module, '9549byzl1pK745kPIjVkTVK', 'UIFriendHelp');
// Game/Scripts/UI/UIFriendHelp.ts

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
var Net_1 = require("../../../framework/misc/Net");
var ServerConfig_1 = require("../Common/Base/ServerConfig");
var mvcView_1 = require("../../../framework/ui/mvcView");
var ListView_1 = require("../../../framework/ui/controller/ListView");
var UIFriendHelpItem_1 = require("./UIFriendHelpItem");
var WeakNetGame_1 = require("../../../framework/extension/weak_net_game/WeakNetGame");
var UIDayInviteItem_1 = require("./UIDayInviteItem");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIFriendHelp = /** @class */ (function (_super) {
    __extends(UIFriendHelp, _super);
    function UIFriendHelp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layout = null;
        _this.listview = null;
        return _this;
    }
    UIFriendHelp_1 = UIFriendHelp;
    UIFriendHelp.prototype.onLoad = function () {
        this.register(this.layout, function (v) { return UIFriendHelp_1.day_invite; }, this.setItem.bind(this));
    };
    UIFriendHelp.prototype.start = function () {
        this.listview.numItems = 0;
    };
    UIFriendHelp.prototype.setItem = function (node, data, i) {
        var item = node.getComponent(UIDayInviteItem_1.default);
        item.setData(data, i);
    };
    UIFriendHelp.prototype.onShown = function () {
        var _this = this;
        WeakNetGame_1.default.client.httpGet(ServerConfig_1.Api.invite_get).then(function (v) {
            if (v == Net_1.default.Code.Timeout) {
                ToastManager_1.Toast.make("邀请信息读取失败!");
            }
            else {
                if (v) {
                    var d = JSON.parse(v);
                    console.log(d);
                    _this.onRequested(d.data);
                }
                else {
                    ToastManager_1.Toast.make("服务器出错!");
                }
            }
        });
    };
    UIFriendHelp.prototype.onRequested = function (data) {
        UIFriendHelp_1.day_invite.splice(0);
        for (var i = 0; i < 3; i++) {
            var v = data.day_invite[i];
            UIFriendHelp_1.day_invite.push(v);
        }
        UIFriendHelp_1.sum_invite = data.sum_invite;
        if (UIFriendHelp_1.sum_invite.claimedCount == null) {
            UIFriendHelp_1.sum_invite.claimedCount = 0;
        }
        this.render(data.day_items);
        this.listview.numItems = 100;
    };
    UIFriendHelp.prototype.onRender = function (node, index) {
        var item = node.getComponent(UIFriendHelpItem_1.default);
        item.setData(UIFriendHelp_1.sum_invite, index);
    };
    UIFriendHelp.prototype.click_close = function () {
        vm.hide(this);
    };
    var UIFriendHelp_1;
    UIFriendHelp.sum_invite = null;
    UIFriendHelp.day_invite = [];
    __decorate([
        property(cc.Layout)
    ], UIFriendHelp.prototype, "layout", void 0);
    __decorate([
        property(ListView_1.default)
    ], UIFriendHelp.prototype, "listview", void 0);
    UIFriendHelp = UIFriendHelp_1 = __decorate([
        ccclass
    ], UIFriendHelp);
    return UIFriendHelp;
}(mvcView_1.default));
exports.default = UIFriendHelp;

cc._RF.pop();