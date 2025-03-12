"use strict";
cc._RF.push(module, 'aae0boKDwBKsJJzzN3Z90y0', 'UIFriendHelpItem');
// Game/Scripts/UI/UIFriendHelpItem.ts

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
var Net_1 = require("../../../framework/misc/Net");
var ServerConfig_1 = require("../Common/Base/ServerConfig");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var UIFriendHelp_1 = require("./UIFriendHelp");
var Switcher_1 = require("../../../framework/ui/controller/Switcher");
var WeakNetGame_1 = require("../../../framework/extension/weak_net_game/WeakNetGame");
var Platform_1 = require("../../../framework/extension/Platform");
var event_1 = require("../../../framework/core/event");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIFriendHelpItem = /** @class */ (function (_super) {
    __extends(UIFriendHelpItem, _super);
    function UIFriendHelpItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_claim = null;
        _this.btn_invite = null;
        _this.label_text = null;
        _this.label_c = null;
        _this.tg_status = null;
        return _this;
    }
    UIFriendHelpItem.prototype.onLoad = function () {
        this.register(this.btn_claim, this.click_claim);
        this.register(this.btn_invite, this.click_share);
    };
    UIFriendHelpItem.prototype.start = function () {
    };
    UIFriendHelpItem.prototype.setData = function (sum_invite, index) {
        this.label_text.string = "第" + (index + 1) + "位新好友";
        this.label_c.string = "x2";
        if (index >= sum_invite.claimedCount && index < sum_invite.inviteeCount) {
            //可领取
            this.tg_status.index = 1;
        }
        else {
            if (index < sum_invite.claimedCount) {
                //已领取
                this.tg_status.index = 2;
            }
            else {
                //待邀请
                this.tg_status.index = 0;
            }
        }
    };
    UIFriendHelpItem.prototype.click_share = function () {
        Platform_1.default.share();
    };
    UIFriendHelpItem.prototype.click_claim = function () {
        var _this = this;
        WeakNetGame_1.default.client.httpGet(ServerConfig_1.Api.invite_claim_new).then(function (v) {
            if (v == Net_1.default.Code.Timeout) {
                ToastManager_1.Toast.make("领取超时!");
            }
            else {
                if (v) {
                    var res = JSON.parse(v);
                    var ret = res.data;
                    if (res.errno != 0) {
                        ToastManager_1.Toast.make("领取失败:" + res.errno);
                    }
                    else {
                        // ok
                        var add = ret.num || 2;
                        PlayerInfo_1.PlayerInfo.addLabour(add);
                        ToastManager_1.Toast.make("成功领取" + add + "个体力");
                        _this.tg_status.index = 2;
                        UIFriendHelp_1.default.sum_invite.claimedCount++;
                        event_1.evt.emit("Game.friendTili", UIFriendHelp_1.default.day_invite, UIFriendHelp_1.default.sum_invite);
                    }
                }
                else {
                    ToastManager_1.Toast.make("服务器出错!");
                }
            }
        });
    };
    __decorate([
        property(cc.Button)
    ], UIFriendHelpItem.prototype, "btn_claim", void 0);
    __decorate([
        property(cc.Button)
    ], UIFriendHelpItem.prototype, "btn_invite", void 0);
    __decorate([
        property(cc.Label)
    ], UIFriendHelpItem.prototype, "label_text", void 0);
    __decorate([
        property(cc.Label)
    ], UIFriendHelpItem.prototype, "label_c", void 0);
    __decorate([
        property(Switcher_1.default)
    ], UIFriendHelpItem.prototype, "tg_status", void 0);
    UIFriendHelpItem = __decorate([
        ccclass
    ], UIFriendHelpItem);
    return UIFriendHelpItem;
}(mvcView_1.default));
exports.default = UIFriendHelpItem;

cc._RF.pop();