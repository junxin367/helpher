
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIFriendHelpItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJRnJpZW5kSGVscEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW9EO0FBQ3BELG1EQUF1RDtBQUN2RCw0REFBZ0U7QUFFaEUsbUVBQTJEO0FBQzNELHdEQUF1RDtBQUN2RCwrQ0FBeUQ7QUFDekQsc0VBQWlFO0FBQ2pFLHNGQUFpRjtBQUNqRixrRUFBNkQ7QUFDN0QsdURBQW9EO0FBRWhELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFBO0FBRXpDO0lBQThDLG9DQUFPO0lBQXJEO1FBQUEscUVBd0VDO1FBckVHLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFHNUIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFHN0IsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUd6QixlQUFTLEdBQWEsSUFBSSxDQUFDOztJQXlEL0IsQ0FBQztJQXZERyxpQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3BELENBQUM7SUFFRCxnQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGtDQUFPLEdBQVAsVUFBUSxVQUFxQixFQUFFLEtBQWE7UUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQTtRQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDMUIsSUFBSSxLQUFLLElBQUksVUFBVSxDQUFDLFlBQVksSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLFlBQVksRUFBRTtZQUNyRSxLQUFLO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO2FBQU07WUFDSCxJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsWUFBWSxFQUFFO2dCQUNqQyxLQUFLO2dCQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzthQUM1QjtpQkFBTTtnQkFDSCxLQUFLO2dCQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzthQUM1QjtTQUNKO0lBQ0wsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDSSxrQkFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxzQ0FBVyxHQUFYO1FBQUEsaUJBd0JDO1FBdkJHLHFCQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztZQUNuRCxJQUFJLENBQUMsSUFBSSxhQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDdkIsb0JBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7YUFDdEI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLEVBQUU7b0JBQ0gsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDeEIsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztvQkFDbkIsSUFBSSxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTt3QkFDaEIsb0JBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDbkM7eUJBQU07d0JBQ0gsS0FBSzt3QkFDTCxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQTt3QkFDdEIsdUJBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzFCLG9CQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUM7d0JBQ2pDLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzt3QkFDekIsc0JBQVksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7d0JBQ3ZDLFdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsc0JBQVksQ0FBQyxVQUFVLEVBQUUsc0JBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQTtxQkFDaEY7aUJBQ0o7cUJBQU07b0JBQ0gsb0JBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7aUJBQ3ZCO2FBQ0o7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFwRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt1REFDUTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dEQUNTO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0RBQ1M7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDTTtJQUd6QjtRQURDLFFBQVEsQ0FBQyxrQkFBUSxDQUFDO3VEQUNRO0lBZlYsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0F3RXBDO0lBQUQsdUJBQUM7Q0F4RUQsQUF3RUMsQ0F4RTZDLGlCQUFPLEdBd0VwRDtrQkF4RW9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtdmNWaWV3IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvbXZjVmlld1wiO1xyXG5pbXBvcnQgTmV0LCB7IG5ldCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWlzYy9OZXRcIjtcclxuaW1wb3J0IHsgU2VydmVyQ29uZmlnLCBBcGkgfSBmcm9tIFwiLi4vQ29tbW9uL0Jhc2UvU2VydmVyQ29uZmlnXCI7XHJcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvVG9hc3RNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi4vQ29tbW9uL0Jhc2UvUGxheWVySW5mb1wiO1xyXG5pbXBvcnQgVUlGcmllbmRIZWxwLCB7IFN1bUludml0ZSB9IGZyb20gXCIuL1VJRnJpZW5kSGVscFwiO1xyXG5pbXBvcnQgU3dpdGNoZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9jb250cm9sbGVyL1N3aXRjaGVyXCI7XHJcbmltcG9ydCBXZWFrTmV0R2FtZSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi93ZWFrX25ldF9nYW1lL1dlYWtOZXRHYW1lXCI7XHJcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi9QbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBldnQgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2NvcmUvZXZlbnRcIjtcclxuXHJcbmxldCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJRnJpZW5kSGVscEl0ZW0gZXh0ZW5kcyBtdmNWaWV3IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgYnRuX2NsYWltOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBidG5faW52aXRlOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsX3RleHQ6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbF9jOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFN3aXRjaGVyKVxyXG4gICAgdGdfc3RhdHVzOiBTd2l0Y2hlciA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIodGhpcy5idG5fY2xhaW0sIHRoaXMuY2xpY2tfY2xhaW0pXHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcih0aGlzLmJ0bl9pbnZpdGUsIHRoaXMuY2xpY2tfc2hhcmUpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldERhdGEoc3VtX2ludml0ZTogU3VtSW52aXRlLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5sYWJlbF90ZXh0LnN0cmluZyA9IFwi56ysXCIgKyAoaW5kZXggKyAxKSArIFwi5L2N5paw5aW95Y+LXCJcclxuICAgICAgICB0aGlzLmxhYmVsX2Muc3RyaW5nID0gXCJ4MlwiXHJcbiAgICAgICAgaWYgKGluZGV4ID49IHN1bV9pbnZpdGUuY2xhaW1lZENvdW50ICYmIGluZGV4IDwgc3VtX2ludml0ZS5pbnZpdGVlQ291bnQpIHtcclxuICAgICAgICAgICAgLy/lj6/pooblj5ZcclxuICAgICAgICAgICAgdGhpcy50Z19zdGF0dXMuaW5kZXggPSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA8IHN1bV9pbnZpdGUuY2xhaW1lZENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAvL+W3sumihuWPllxyXG4gICAgICAgICAgICAgICAgdGhpcy50Z19zdGF0dXMuaW5kZXggPSAyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy/lvoXpgoDor7dcclxuICAgICAgICAgICAgICAgIHRoaXMudGdfc3RhdHVzLmluZGV4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGlja19zaGFyZSgpIHtcclxuICAgICAgICBQbGF0Zm9ybS5zaGFyZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrX2NsYWltKCkge1xyXG4gICAgICAgIFdlYWtOZXRHYW1lLmNsaWVudC5odHRwR2V0KEFwaS5pbnZpdGVfY2xhaW1fbmV3KS50aGVuKHYgPT4ge1xyXG4gICAgICAgICAgICBpZiAodiA9PSBOZXQuQ29kZS5UaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5tYWtlKFwi6aKG5Y+W6LaF5pe2IVwiKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHYpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gSlNPTi5wYXJzZSh2KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmV0ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5lcnJubyAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2UoXCLpooblj5blpLHotKU6XCIgKyByZXMuZXJybm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZGQgPSByZXQubnVtIHx8IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGxheWVySW5mby5hZGRMYWJvdXIoYWRkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QubWFrZShcIuaIkOWKn+mihuWPllwiICsgYWRkICsgXCLkuKrkvZPliptcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGdfc3RhdHVzLmluZGV4ID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVUlGcmllbmRIZWxwLnN1bV9pbnZpdGUuY2xhaW1lZENvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2dC5lbWl0KFwiR2FtZS5mcmllbmRUaWxpXCIsIFVJRnJpZW5kSGVscC5kYXlfaW52aXRlLCBVSUZyaWVuZEhlbHAuc3VtX2ludml0ZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2UoXCLmnI3liqHlmajlh7rplJkhXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiJdfQ==