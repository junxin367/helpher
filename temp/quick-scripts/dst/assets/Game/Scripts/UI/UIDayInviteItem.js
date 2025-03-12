
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIDayInviteItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJRGF5SW52aXRlSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBb0Q7QUFDcEQsa0VBQTZEO0FBQzdELHNFQUFpRTtBQUNqRSxzRkFBaUY7QUFDakYsNERBQWtEO0FBQ2xELG1EQUE4QztBQUM5QyxtRUFBMkQ7QUFDM0QsK0NBQXlEO0FBQ3pELHdEQUF1RDtBQUN2RCx1REFBb0Q7QUFFaEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUE7QUFFekMsSUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBRzdCO0lBQTZDLG1DQUFPO0lBQXBEO1FBQUEscUVBNEVDO1FBekVHLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRzdCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsWUFBTSxHQUFhLElBQUksQ0FBQTtRQUV2QixXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQWlFdEIsQ0FBQztJQS9ERyxnQ0FBTSxHQUFOO1FBQUEsaUJBbUJDO1FBbEJHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN2QixJQUFJLEtBQUksQ0FBQyxJQUFJLElBQUksSUFBSTtnQkFBRSxPQUFPLENBQUMsQ0FBQztZQUNoQyxJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUM7Z0JBQUUsT0FBTyxDQUFDLENBQUE7WUFDbkMsT0FBTyxDQUFDLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUM1QixJQUFJLEtBQUksQ0FBQyxJQUFJLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQzlCLE9B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QyxRQUFRLENBQUMsa0JBQVEsQ0FBQzttREFDSTtJQVROLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0E0RW5DO0lBQUQsc0JBQUM7Q0E1RUQsQUE0RUMsQ0E1RTRDLGlCQUFPLEdBNEVuRDtrQkE1RW9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXZjVmlldyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL212Y1ZpZXdcIjtcclxuaW1wb3J0IFBsYXRmb3JtIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL1BsYXRmb3JtXCI7XHJcbmltcG9ydCBTd2l0Y2hlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL2NvbnRyb2xsZXIvU3dpdGNoZXJcIjtcclxuaW1wb3J0IFdlYWtOZXRHYW1lIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvV2Vha05ldEdhbWVcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uL0NvbW1vbi9CYXNlL1NlcnZlckNvbmZpZ1wiO1xyXG5pbXBvcnQgTmV0IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWlzYy9OZXRcIjtcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL1RvYXN0TWFuYWdlclwiO1xyXG5pbXBvcnQgVUlGcmllbmRIZWxwLCB7IERheUludml0ZSB9IGZyb20gXCIuL1VJRnJpZW5kSGVscFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL0NvbW1vbi9CYXNlL1BsYXllckluZm9cIjtcclxuaW1wb3J0IHsgZXZ0IH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9jb3JlL2V2ZW50XCI7XHJcblxyXG5sZXQgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvclxyXG5cclxuY29uc3QgaW5kZXhfY291bnQgPSBbMywgMSwgMV1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJRGF5SW52aXRlSXRlbSBleHRlbmRzIG12Y1ZpZXcge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsX2NvdW50OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGljb246IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFN3aXRjaGVyKVxyXG4gICAgdGdfYnRuOiBTd2l0Y2hlciA9IG51bGxcclxuXHJcbiAgICBpbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcih0aGlzLnRnX2J0biwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhID09IG51bGwpIHJldHVybiAwO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnN0YXR1cyA9PSAwKSByZXR1cm4gMVxyXG4gICAgICAgICAgICByZXR1cm4gMjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIodGhpcy5sYWJlbF9jb3VudCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5jb3VudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwieFwiICsgdGhpcy5kYXRhLmNvdW50XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXhfY291bnRbdGhpcy5pbmRleF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIodGhpcy5pY29uLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuYXZhdGFyVXJsIHx8IFwiSW1nL3JhbmsvbW9yZW5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gXCJJbWcvYWxsL2VtcHR5XCI7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzZXREYXRhKGRhdGEsIGkpIHtcclxuICAgICAgICB0aGlzLmluZGV4ID0gaVxyXG4gICAgICAgIHRoaXMucmVuZGVyKGRhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YSgpIGFzIERheUludml0ZVxyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrX2ludml0ZSgpIHtcclxuICAgICAgICBQbGF0Zm9ybS5zaGFyZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrX2NsYWltKCkge1xyXG4gICAgICAgIFdlYWtOZXRHYW1lLmNsaWVudC5odHRwR2V0KEFwaS5pbnZpdGVfY2xhaW1fZGF5LCB7IGlkOiB0aGlzLmRhdGEuX2lkIH0pLnRoZW4odiA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2ICE9IE5ldC5Db2RlLlRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGQgPSBKU09OLnBhcnNlKHYpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQuZXJybm8gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGQuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkID0gZGF0YS5udW0gfHwgaW5kZXhfY291bnRbdGhpcy5pbmRleF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGMgPSBQbGF5ZXJJbmZvLmxhYm91ciArIGFkZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF5ZXJJbmZvLmxhYm91ciA9IGM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYXllckluZm8uc2F2ZSgnbGFib3VyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2UoXCLmiJDlip/pooblj5ZcIiArIGFkZCArIFwi5Liq5L2T5YqbXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuc3RhdHVzID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIodGhpcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LmVtaXQoXCJHYW1lLmZyaWVuZFRpbGlcIiwgVUlGcmllbmRIZWxwLmRheV9pbnZpdGUsIFVJRnJpZW5kSGVscC5zdW1faW52aXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZmFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkLmVycm5vKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5tYWtlKFwi6aKG5Y+W5aSx6LSlOlwiICsgZC5lcnJubylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2UoXCLmnI3liqHlmajlh7rplJkhXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5tYWtlKFwi6aKG5Y+W6LaF5pe2IVwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn0iXX0=