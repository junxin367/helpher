"use strict";
cc._RF.push(module, '24aa7TdxfpLUoWUzV4/AQBt', 'UIDayInviteItem');
// Game/Scripts/UI/UIDayInviteItem.ts

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
var Platform_1 = require("../../../framework/extension/Platform");
var Switcher_1 = require("../../../framework/ui/controller/Switcher");
var WeakNetGame_1 = require("../../../framework/extension/weak_net_game/WeakNetGame");
var ServerConfig_1 = require("../Common/Base/ServerConfig");
var Net_1 = require("../../../framework/misc/Net");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var UIFriendHelp_1 = require("./UIFriendHelp");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var event_1 = require("../../../framework/core/event");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var index_count = [3, 1, 1];
var UIDayInviteItem = /** @class */ (function (_super) {
    __extends(UIDayInviteItem, _super);
    function UIDayInviteItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label_count = null;
        _this.icon = null;
        _this.tg_btn = null;
        _this.index = 0;
        return _this;
    }
    UIDayInviteItem.prototype.onLoad = function () {
        var _this = this;
        this.register(this.tg_btn, function () {
            if (_this.data == null)
                return 0;
            if (_this.data.status == 0)
                return 1;
            return 2;
        });
        this.register(this.label_count, function () {
            if (_this.data && _this.data.count) {
                return "x" + _this.data.count;
            }
            else {
                return index_count[_this.index];
            }
        });
        this.register(this.icon, function () {
            if (_this.data) {
                return _this.data.avatarUrl || "Img/rank/moren";
            }
            return "Img/all/empty";
        });
    };
    UIDayInviteItem.prototype.setData = function (data, i) {
        this.index = i;
        this.render(data);
    };
    Object.defineProperty(UIDayInviteItem.prototype, "data", {
        get: function () {
            return this.getData();
        },
        enumerable: false,
        configurable: true
    });
    UIDayInviteItem.prototype.click_invite = function () {
        Platform_1.default.share();
    };
    UIDayInviteItem.prototype.click_claim = function () {
        var _this = this;
        WeakNetGame_1.default.client.httpGet(ServerConfig_1.Api.invite_claim_day, { id: this.data._id }).then(function (v) {
            if (v != Net_1.default.Code.Timeout) {
                if (v) {
                    var d = JSON.parse(v);
                    if (d.errno == 0) {
                        var data = d.data;
                        var add = data.num || index_count[_this.index];
                        var c = PlayerInfo_1.PlayerInfo.labour + add;
                        PlayerInfo_1.PlayerInfo.labour = c;
                        PlayerInfo_1.PlayerInfo.save('labour');
                        ToastManager_1.Toast.make("成功领取" + add + "个体力");
                        _this.data.status = 1;
                        _this.render(_this.data);
                        event_1.evt.emit("Game.friendTili", UIFriendHelp_1.default.day_invite, UIFriendHelp_1.default.sum_invite);
                    }
                    else {
                        //fail
                        console.log(d.errno);
                        ToastManager_1.Toast.make("领取失败:" + d.errno);
                    }
                }
                else {
                    ToastManager_1.Toast.make("服务器出错!");
                }
            }
            else {
                ToastManager_1.Toast.make("领取超时!");
            }
        });
    };
    __decorate([
        property(cc.Label)
    ], UIDayInviteItem.prototype, "label_count", void 0);
    __decorate([
        property(cc.Sprite)
    ], UIDayInviteItem.prototype, "icon", void 0);
    __decorate([
        property(Switcher_1.default)
    ], UIDayInviteItem.prototype, "tg_btn", void 0);
    UIDayInviteItem = __decorate([
        ccclass
    ], UIDayInviteItem);
    return UIDayInviteItem;
}(mvcView_1.default));
exports.default = UIDayInviteItem;

cc._RF.pop();