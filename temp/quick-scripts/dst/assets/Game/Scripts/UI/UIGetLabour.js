
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIGetLabour.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cc5f94l4m1LpIYa8UIX4oXW', 'UIGetLabour');
// Game/Scripts/UI/UIGetLabour.ts

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
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var event_1 = require("../../../framework/core/event");
var WeakNetGame_1 = require("../../../framework/extension/weak_net_game/WeakNetGame");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var display_1 = require("../../../framework/misc/display");
var qqsdk_1 = require("../../../framework/extension/qq/qqsdk");
var IconSov_1 = require("../../../framework/extension/weak_net_game/IconSov");
var Platform_1 = require("../../../framework/extension/Platform");
var umeng_1 = require("../../../framework/extension/aldsdk/umeng");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIGetLabour = /** @class */ (function (_super) {
    __extends(UIGetLabour, _super);
    function UIGetLabour() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_moregame = null;
        _this.sdk = null;
        _this.btn_nothanks = null;
        _this.btn_ok = null;
        _this.btn_jia = null;
        _this.isVideo = false;
        _this.youlike = null;
        _this.isActive = true;
        return _this;
        // update (dt) {}
    }
    UIGetLabour.prototype.onLoad = function () {
        this.btn_moregame.active = window.qq ? true : false;
        this.registerSubViews(IconSov_1.default);
    };
    UIGetLabour.prototype.onDestroy = function () {
        event_1.evt.off(this);
    };
    UIGetLabour.prototype.onResume = function () {
        Platform_1.default.reloadBannerAd();
    };
    UIGetLabour.prototype.onShow = function (callback, isActive) {
        if (isActive === void 0) { isActive = false; }
        event_1.evt.on("Game.Resume", this.onResume, this);
        this.callback = callback;
        this.isActive = isActive;
        this.isVideo = false;
        this.render();
        // if (wegame.isCheatOpen(CloudFuncType.Banner_move)) {
        //     wegame.enableFakeForAdClick(this.btn_nothanks.node, this.btn_jia, 2, () => {
        //         if (PlayerInfo.isShowSDK()) {
        //             if (this.youlike == null) {
        //                 this.youlike = window['zzsdkui'].youlike(2, null, null, null, function () {
        //                     Game.instance.interfull.active = true;
        //                 }.bind(this));
        //                 if (this.youlike) {
        //                     this.sdk.addChild(this.youlike);
        //                     this.youlike.scale = 1;
        //                 }
        //             }
        //             if (this.youlike)
        //                 this.youlike.active = true;
        //         }
        //     });
        // } else {
        this.btn_nothanks.node.active = true;
        this.btn_jia.active = false;
        // }
    };
    UIGetLabour.prototype.start = function () {
        // if (PlayerInfo.isShowSDK()) {
        //     let youlike = window['zzsdkui'].youlike(2, 0, 400);
        //     youlike && this.sdk.addChild(youlike);
        //     youlike.scale = 1;
        // }
    };
    UIGetLabour.prototype.click_close = function () {
        vm.hide(this);
    };
    UIGetLabour.prototype.click_get = function () {
        var _this = this;
        if (PlayerInfo_1.PlayerInfo.labour >= csv.Config.Max_Energy && this.isActive) {
            ToastManager_1.Toast.make("体力已满，快去帮帮小姐姐吧");
            return;
        }
        this.btn_ok.interactable = false;
        this.scheduleOnce(function (_) { return _this.btn_ok.interactable = true; }, 3);
        umeng_1.umeng.onEvent('rewardAd', 'labourShow');
        WeakNetGame_1.default.doChoice("SOV_Get_Labour", function (_) {
            console.log("奖励体力");
            var add = csv.Config.Energy_Get_Num;
            var old = PlayerInfo_1.PlayerInfo.labour;
            var r = PlayerInfo_1.PlayerInfo.labour + add;
            // PlayerInfo.labour = Math.min(r, csv.Config.Max_Energy || 5);
            PlayerInfo_1.PlayerInfo.labour = r;
            PlayerInfo_1.PlayerInfo.save("labour");
            umeng_1.umeng.onEvent('rewardAd', 'labourRewarded');
            event_1.evt.emit("Game.getTili", display_1.default.center, PlayerInfo_1.PlayerInfo.labour - old);
            // if (PlayerInfo.labour >= csv.Config.Max_Energy) {
            //     Toast.make("体力已恢复满!")
            //     vm.hide(this);
            // } else {
            //     Toast.make("获得" + add + "点体力");
            // }
            ToastManager_1.Toast.make("获得" + add + "点体力");
            _this.isVideo = true;
            vm.hide(_this);
        }, this);
    };
    UIGetLabour.prototype.onHidden = function () {
        if (this.isVideo) {
            this.callback && this.callback();
        }
        event_1.evt.off(this);
    };
    UIGetLabour.prototype.click_moregame = function () {
        qqsdk_1.qqsdk.showAppBox();
    };
    __decorate([
        property(cc.Node)
    ], UIGetLabour.prototype, "btn_moregame", void 0);
    __decorate([
        property(cc.Node)
    ], UIGetLabour.prototype, "sdk", void 0);
    __decorate([
        property(cc.Button)
    ], UIGetLabour.prototype, "btn_nothanks", void 0);
    __decorate([
        property(cc.Button)
    ], UIGetLabour.prototype, "btn_ok", void 0);
    __decorate([
        property(cc.Node)
    ], UIGetLabour.prototype, "btn_jia", void 0);
    UIGetLabour = __decorate([
        ccclass
    ], UIGetLabour);
    return UIGetLabour;
}(mvcView_1.default));
exports.default = UIGetLabour;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJR2V0TGFib3VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUFvRDtBQUNwRCx3REFBdUQ7QUFHdkQsdURBQW9EO0FBR3BELHNGQUFpRjtBQUNqRixtRUFBMkQ7QUFDM0QsMkRBQXNEO0FBQ3RELCtEQUE4RDtBQUM5RCw4RUFBeUU7QUFHekUsa0VBQTZEO0FBQzdELG1FQUFrRTtBQUU1RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBTztJQUFoRDtRQUFBLHFFQXVIQztRQXJIRyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixTQUFHLEdBQVksSUFBSSxDQUFDO1FBR3BCLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRy9CLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFHekIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUd2QixhQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsY0FBUSxHQUFZLElBQUksQ0FBQzs7UUFtR3pCLGlCQUFpQjtJQUNyQixDQUFDO0lBbEdHLDRCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFHRCwrQkFBUyxHQUFUO1FBQ0ksV0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBQ0QsOEJBQVEsR0FBUjtRQUNJLGtCQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELDRCQUFN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LENBQUMsQ0FBQztRQUNsQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3BDO1FBQ0QsV0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVsQixDQUFDO0lBRUQsb0NBQWMsR0FBZDtRQUdJLGFBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUN0QixDQUFDO0lBbkhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1c7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDRTtJQUdwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNXO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ0s7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDSztJQWROLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0F1SC9CO0lBQUQsa0JBQUM7Q0F2SEQsQUF1SEMsQ0F2SHdDLGlCQUFPLEdBdUgvQztrQkF2SG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXZjVmlldyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL212Y1ZpZXdcIjtcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi4vQ29tbW9uL0Jhc2UvUGxheWVySW5mb1wiO1xuaW1wb3J0IExvYWRpbmdTY2VuZSBmcm9tIFwiLi4vQ29tbW9uL0Jhc2UvTG9hZGluZ1NjZW5lXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0IHsgZXZ0IH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9jb3JlL2V2ZW50XCI7XG5pbXBvcnQgeyBTZXR0aW5nSW5mbyB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvU2V0dGluZ0luZm9cIjtcbmltcG9ydCBEZXZpY2UgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9taXNjL0RldmljZVwiO1xuaW1wb3J0IFdlYWtOZXRHYW1lIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvV2Vha05ldEdhbWVcIjtcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9Ub2FzdE1hbmFnZXJcIjtcbmltcG9ydCBkaXNwbGF5IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWlzYy9kaXNwbGF5XCI7XG5pbXBvcnQgeyBxcXNkayB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3FxL3Fxc2RrXCI7XG5pbXBvcnQgSWNvblNvdiBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi93ZWFrX25ldF9nYW1lL0ljb25Tb3ZcIjtcbmltcG9ydCB3ZWdhbWUgZnJvbSBcIi4uL3Nkay93ZWdhbWVcIjtcbmltcG9ydCB7IENsb3VkRnVuY1R5cGUgfSBmcm9tIFwiLi4vQ29tbW9uL0Nsb3VkRnVuY1R5cGVzXCI7XG5pbXBvcnQgUGxhdGZvcm0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vUGxhdGZvcm1cIjtcbmltcG9ydCB7IHVtZW5nIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vYWxkc2RrL3VtZW5nXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUdldExhYm91ciBleHRlbmRzIG12Y1ZpZXcge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0bl9tb3JlZ2FtZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzZGs6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5fbm90aGFua3M6IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0bl9vazogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0bl9qaWE6IGNjLk5vZGUgPSBudWxsXG5cbiAgICBjYWxsYmFjazogRnVuY3Rpb247XG4gICAgaXNWaWRlbzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHlvdWxpa2U6IGNjLk5vZGUgPSBudWxsO1xuICAgIGlzQWN0aXZlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5idG5fbW9yZWdhbWUuYWN0aXZlID0gd2luZG93LnFxID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyU3ViVmlld3MoSWNvblNvdik7XG4gICAgfVxuXG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIGV2dC5vZmYodGhpcyk7XG4gICAgfVxuICAgIG9uUmVzdW1lKCkge1xuICAgICAgICBQbGF0Zm9ybS5yZWxvYWRCYW5uZXJBZCgpO1xuICAgIH1cblxuICAgIG9uU2hvdyhjYWxsYmFjaywgaXNBY3RpdmUgPSBmYWxzZSkge1xuICAgICAgICBldnQub24oXCJHYW1lLlJlc3VtZVwiLCB0aGlzLm9uUmVzdW1lLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gaXNBY3RpdmU7XG4gICAgICAgIHRoaXMuaXNWaWRlbyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAvLyBpZiAod2VnYW1lLmlzQ2hlYXRPcGVuKENsb3VkRnVuY1R5cGUuQmFubmVyX21vdmUpKSB7XG4gICAgICAgIC8vICAgICB3ZWdhbWUuZW5hYmxlRmFrZUZvckFkQ2xpY2sodGhpcy5idG5fbm90aGFua3Mubm9kZSwgdGhpcy5idG5famlhLCAyLCAoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKFBsYXllckluZm8uaXNTaG93U0RLKCkpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMueW91bGlrZSA9PSBudWxsKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnlvdWxpa2UgPSB3aW5kb3dbJ3p6c2RrdWknXS55b3VsaWtlKDIsIG51bGwsIG51bGwsIG51bGwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBHYW1lLmluc3RhbmNlLmludGVyZnVsbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmICh0aGlzLnlvdWxpa2UpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnNkay5hZGRDaGlsZCh0aGlzLnlvdWxpa2UpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMueW91bGlrZS5zY2FsZSA9IDE7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMueW91bGlrZSlcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMueW91bGlrZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJ0bl9ub3RoYW5rcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYnRuX2ppYS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICAvLyBpZiAoUGxheWVySW5mby5pc1Nob3dTREsoKSkge1xuICAgICAgICAvLyAgICAgbGV0IHlvdWxpa2UgPSB3aW5kb3dbJ3p6c2RrdWknXS55b3VsaWtlKDIsIDAsIDQwMCk7XG4gICAgICAgIC8vICAgICB5b3VsaWtlICYmIHRoaXMuc2RrLmFkZENoaWxkKHlvdWxpa2UpO1xuICAgICAgICAvLyAgICAgeW91bGlrZS5zY2FsZSA9IDE7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBjbGlja19jbG9zZSgpIHtcbiAgICAgICAgdm0uaGlkZSh0aGlzKTtcbiAgICB9XG5cbiAgICBjbGlja19nZXQoKSB7XG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLmxhYm91ciA+PSBjc3YuQ29uZmlnLk1heF9FbmVyZ3kgJiYgdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgVG9hc3QubWFrZShcIuS9k+WKm+W3sua7oe+8jOW/q+WOu+W4ruW4ruWwj+WnkOWnkOWQp1wiKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYnRuX29rLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShfID0+IHRoaXMuYnRuX29rLmludGVyYWN0YWJsZSA9IHRydWUsIDMpO1xuICAgICAgICB1bWVuZy5vbkV2ZW50KCdyZXdhcmRBZCcsICdsYWJvdXJTaG93Jyk7XG4gICAgICAgIFdlYWtOZXRHYW1lLmRvQ2hvaWNlKFwiU09WX0dldF9MYWJvdXJcIiwgXyA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWlluWKseS9k+WKm1wiKVxuICAgICAgICAgICAgbGV0IGFkZCA9IGNzdi5Db25maWcuRW5lcmd5X0dldF9OdW07XG4gICAgICAgICAgICBsZXQgb2xkID0gUGxheWVySW5mby5sYWJvdXJcbiAgICAgICAgICAgIGxldCByID0gUGxheWVySW5mby5sYWJvdXIgKyBhZGRcbiAgICAgICAgICAgIC8vIFBsYXllckluZm8ubGFib3VyID0gTWF0aC5taW4ociwgY3N2LkNvbmZpZy5NYXhfRW5lcmd5IHx8IDUpO1xuICAgICAgICAgICAgUGxheWVySW5mby5sYWJvdXIgPSByO1xuICAgICAgICAgICAgUGxheWVySW5mby5zYXZlKFwibGFib3VyXCIpO1xuICAgICAgICAgICAgdW1lbmcub25FdmVudCgncmV3YXJkQWQnLCAnbGFib3VyUmV3YXJkZWQnKTtcbiAgICAgICAgICAgIGV2dC5lbWl0KFwiR2FtZS5nZXRUaWxpXCIsIGRpc3BsYXkuY2VudGVyLCBQbGF5ZXJJbmZvLmxhYm91ciAtIG9sZClcbiAgICAgICAgICAgIC8vIGlmIChQbGF5ZXJJbmZvLmxhYm91ciA+PSBjc3YuQ29uZmlnLk1heF9FbmVyZ3kpIHtcbiAgICAgICAgICAgIC8vICAgICBUb2FzdC5tYWtlKFwi5L2T5Yqb5bey5oGi5aSN5ruhIVwiKVxuICAgICAgICAgICAgLy8gICAgIHZtLmhpZGUodGhpcyk7XG5cbiAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgVG9hc3QubWFrZShcIuiOt+W+l1wiICsgYWRkICsgXCLngrnkvZPliptcIik7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBUb2FzdC5tYWtlKFwi6I635b6XXCIgKyBhZGQgKyBcIueCueS9k+WKm1wiKTtcbiAgICAgICAgICAgIHRoaXMuaXNWaWRlbyA9IHRydWU7XG4gICAgICAgICAgICB2bS5oaWRlKHRoaXMpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICBvbkhpZGRlbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNWaWRlbykge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZXZ0Lm9mZih0aGlzKTtcblxuICAgIH1cblxuICAgIGNsaWNrX21vcmVnYW1lKCkge1xuXG5cbiAgICAgICAgcXFzZGsuc2hvd0FwcEJveCgpXG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=