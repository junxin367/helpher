
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIPause.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e7961Uqj2hNTZXvc+XPGOGR', 'UIPause');
// Game/Scripts/UI/UIPause.ts

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
var Device_1 = require("../../../framework/misc/Device");
var SettingInfo_1 = require("../../../framework/extension/weak_net_game/SettingInfo");
var mvcView_1 = require("../../../framework/ui/mvcView");
var LoadingScene_1 = require("../Common/Base/LoadingScene");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var actionUtil_1 = require("../../../framework/utils/actionUtil");
var event_1 = require("../../../framework/core/event");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIPause = /** @class */ (function (_super) {
    __extends(UIPause, _super);
    function UIPause() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.music = null;
        _this.effect = null;
        _this.sdk = null;
        _this.interfull_datu = null;
        return _this;
        // update (dt) {}
        // onHidden() {
        //     // evt.emit('Game.resume');
        //     cc.director.resume();
        // }
    }
    UIPause.prototype.onLoad = function () {
        this.musicOff = this.music.getChildByName("off");
        this.effectOff = this.effect.getChildByName("off");
    };
    UIPause.prototype.start = function () {
        // if (PlayerInfo.isShowSDK()) {
        //     let youlike = window['zzsdkui'].youlike(5, 0, -200);
        //     youlike && this.sdk.addChild(youlike);
        //     youlike.scale = 1;
        // }
    };
    UIPause.prototype.onShow = function () {
        actionUtil_1.default.jellyJump2(this.node);
        this.musicOff.active = !SettingInfo_1.SettingInfo.music;
        this.effectOff.active = !SettingInfo_1.SettingInfo.effect;
        this.scheduleOnce(function (_) { return cc.director.pause(); }, 0.8);
    };
    UIPause.prototype.click_music = function (tg) {
        cc.director.resume();
        event_1.evt.emit('Game.pause');
        Device_1.default.setBGMEnable(!SettingInfo_1.SettingInfo.music);
        SettingInfo_1.SettingInfo.saveSettings();
        this.musicOff.active = !SettingInfo_1.SettingInfo.music;
    };
    UIPause.prototype.click_effect = function (tg) {
        cc.director.resume();
        event_1.evt.emit('Game.pause');
        Device_1.default.setSFXEnable(!SettingInfo_1.SettingInfo.effect);
        SettingInfo_1.SettingInfo.saveSettings();
        this.effectOff.active = !SettingInfo_1.SettingInfo.effect;
    };
    UIPause.prototype.click_close = function () {
        cc.director.resume();
        vm.hide(this);
        event_1.evt.emit('Game.resume');
    };
    UIPause.prototype.click_level = function () {
        cc.director.resume();
        if (PlayerInfo_1.PlayerInfo.isPlayingDaily) {
            vm.show("Prefabs/UI/UIChallengeChapter");
        }
        else {
            vm.show("Prefabs/UI/UIChapter");
        }
        event_1.evt.emit('Game.pause');
    };
    UIPause.prototype.click_home = function () {
        cc.director.resume();
        LoadingScene_1.default.goto("Main");
        // let interfull_b = window['zzsdkui'].interFull_large(0, 'inter_full_large', 1800);
        // interfull_b && this.interfull_datu.children[0].addChild(interfull_b);
        // this.interfull_datu.active = true;
        // Platform.hideBannerAd();
    };
    UIPause.prototype.click_homedatu = function () {
        cc.director.resume();
        // this.interfull_datu.active = false;
        LoadingScene_1.default.goto("Main");
    };
    UIPause.prototype.onDestroy = function () {
        cc.director.resume();
    };
    __decorate([
        property(cc.Node)
    ], UIPause.prototype, "music", void 0);
    __decorate([
        property(cc.Node)
    ], UIPause.prototype, "effect", void 0);
    __decorate([
        property(cc.Node)
    ], UIPause.prototype, "sdk", void 0);
    __decorate([
        property(cc.Node)
    ], UIPause.prototype, "interfull_datu", void 0);
    UIPause = __decorate([
        ccclass
    ], UIPause);
    return UIPause;
}(mvcView_1.default));
exports.default = UIPause;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJUGF1c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EseURBQW9EO0FBQ3BELHNGQUFxRjtBQUNyRix5REFBb0Q7QUFDcEQsNERBQXVEO0FBQ3ZELHdEQUF1RDtBQUV2RCxrRUFBNkQ7QUFDN0QsdURBQW9EO0FBRTlDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFPO0lBQTVDO1FBQUEscUVBa0dDO1FBL0ZHLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixTQUFHLEdBQVksSUFBSSxDQUFDO1FBR3BCLG9CQUFjLEdBQVksSUFBSSxDQUFDOztRQWdGL0IsaUJBQWlCO1FBRWpCLGVBQWU7UUFDZixrQ0FBa0M7UUFDbEMsNEJBQTRCO1FBQzVCLElBQUk7SUFDUixDQUFDO0lBakZHLHdCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELHVCQUFLLEdBQUw7UUFDSSxnQ0FBZ0M7UUFDaEMsMkRBQTJEO1FBQzNELDZDQUE2QztRQUM3Qyx5QkFBeUI7UUFDekIsSUFBSTtJQUVSLENBQUM7SUFFRCx3QkFBTSxHQUFOO1FBQ0ksb0JBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMseUJBQVcsQ0FBQyxLQUFLLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyx5QkFBVyxDQUFDLE1BQU0sQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBbkIsQ0FBbUIsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBR0QsNkJBQVcsR0FBWCxVQUFZLEVBQUU7UUFDVixFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3JCLFdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFdkIsZ0JBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyx5QkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3ZDLHlCQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyx5QkFBVyxDQUFDLEtBQUssQ0FBQztJQUM5QyxDQUFDO0lBRUQsOEJBQVksR0FBWixVQUFhLEVBQUU7UUFDWCxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3JCLFdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFdkIsZ0JBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyx5QkFBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3hDLHlCQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyx5QkFBVyxDQUFDLE1BQU0sQ0FBQztJQUNoRCxDQUFDO0lBRUQsNkJBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDckIsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNkLFdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELDZCQUFXLEdBQVg7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3JCLElBQUksdUJBQVUsQ0FBQyxjQUFjLEVBQUU7WUFDM0IsRUFBRSxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1NBQzVDO2FBQU07WUFDSCxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDbkM7UUFDRCxXQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCw0QkFBVSxHQUFWO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNyQixzQkFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUxQixvRkFBb0Y7UUFDcEYsd0VBQXdFO1FBQ3hFLHFDQUFxQztRQUNyQywyQkFBMkI7SUFDL0IsQ0FBQztJQUVELGdDQUFjLEdBQWQ7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3JCLHNDQUFzQztRQUN0QyxzQkFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsMkJBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQXhGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNJO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3Q0FDRTtJQUdwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNhO0lBWmQsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQWtHM0I7SUFBRCxjQUFDO0NBbEdELEFBa0dDLENBbEdvQyxpQkFBTyxHQWtHM0M7a0JBbEdvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9Vc2VySW5mb1wiO1xuaW1wb3J0IERldmljZSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21pc2MvRGV2aWNlXCI7XG5pbXBvcnQgeyBTZXR0aW5nSW5mbyB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvU2V0dGluZ0luZm9cIjtcbmltcG9ydCBtdmNWaWV3IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvbXZjVmlld1wiO1xuaW1wb3J0IExvYWRpbmdTY2VuZSBmcm9tIFwiLi4vQ29tbW9uL0Jhc2UvTG9hZGluZ1NjZW5lXCI7XG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL0NvbW1vbi9CYXNlL1BsYXllckluZm9cIjtcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi9QbGF0Zm9ybVwiO1xuaW1wb3J0IGFjdGlvblV0aWwgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91dGlscy9hY3Rpb25VdGlsXCI7XG5pbXBvcnQgeyBldnQgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2NvcmUvZXZlbnRcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJUGF1c2UgZXh0ZW5kcyBtdmNWaWV3IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG11c2ljOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVmZmVjdDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzZGs6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaW50ZXJmdWxsX2RhdHU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgbXVzaWNPZmY6IGNjLk5vZGU7XG4gICAgZWZmZWN0T2ZmOiBjYy5Ob2RlO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLm11c2ljT2ZmID0gdGhpcy5tdXNpYy5nZXRDaGlsZEJ5TmFtZShcIm9mZlwiKTtcbiAgICAgICAgdGhpcy5lZmZlY3RPZmYgPSB0aGlzLmVmZmVjdC5nZXRDaGlsZEJ5TmFtZShcIm9mZlwiKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgLy8gaWYgKFBsYXllckluZm8uaXNTaG93U0RLKCkpIHtcbiAgICAgICAgLy8gICAgIGxldCB5b3VsaWtlID0gd2luZG93Wyd6enNka3VpJ10ueW91bGlrZSg1LCAwLCAtMjAwKTtcbiAgICAgICAgLy8gICAgIHlvdWxpa2UgJiYgdGhpcy5zZGsuYWRkQ2hpbGQoeW91bGlrZSk7XG4gICAgICAgIC8vICAgICB5b3VsaWtlLnNjYWxlID0gMTtcbiAgICAgICAgLy8gfVxuXG4gICAgfVxuXG4gICAgb25TaG93KCkge1xuICAgICAgICBhY3Rpb25VdGlsLmplbGx5SnVtcDIodGhpcy5ub2RlKTtcbiAgICAgICAgdGhpcy5tdXNpY09mZi5hY3RpdmUgPSAhU2V0dGluZ0luZm8ubXVzaWM7XG4gICAgICAgIHRoaXMuZWZmZWN0T2ZmLmFjdGl2ZSA9ICFTZXR0aW5nSW5mby5lZmZlY3Q7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKF8gPT4gY2MuZGlyZWN0b3IucGF1c2UoKSwgMC44KTtcbiAgICB9XG5cblxuICAgIGNsaWNrX211c2ljKHRnKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xuICAgICAgICBldnQuZW1pdCgnR2FtZS5wYXVzZScpO1xuXG4gICAgICAgIERldmljZS5zZXRCR01FbmFibGUoIVNldHRpbmdJbmZvLm11c2ljKVxuICAgICAgICBTZXR0aW5nSW5mby5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgdGhpcy5tdXNpY09mZi5hY3RpdmUgPSAhU2V0dGluZ0luZm8ubXVzaWM7XG4gICAgfVxuXG4gICAgY2xpY2tfZWZmZWN0KHRnKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xuICAgICAgICBldnQuZW1pdCgnR2FtZS5wYXVzZScpO1xuXG4gICAgICAgIERldmljZS5zZXRTRlhFbmFibGUoIVNldHRpbmdJbmZvLmVmZmVjdClcbiAgICAgICAgU2V0dGluZ0luZm8uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIHRoaXMuZWZmZWN0T2ZmLmFjdGl2ZSA9ICFTZXR0aW5nSW5mby5lZmZlY3Q7XG4gICAgfVxuXG4gICAgY2xpY2tfY2xvc2UoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xuICAgICAgICB2bS5oaWRlKHRoaXMpO1xuICAgICAgICBldnQuZW1pdCgnR2FtZS5yZXN1bWUnKTtcbiAgICB9XG5cbiAgICBjbGlja19sZXZlbCgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IucmVzdW1lKCk7XG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLmlzUGxheWluZ0RhaWx5KSB7XG4gICAgICAgICAgICB2bS5zaG93KFwiUHJlZmFicy9VSS9VSUNoYWxsZW5nZUNoYXB0ZXJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2bS5zaG93KFwiUHJlZmFicy9VSS9VSUNoYXB0ZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgZXZ0LmVtaXQoJ0dhbWUucGF1c2UnKTtcbiAgICB9XG5cbiAgICBjbGlja19ob21lKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTtcbiAgICAgICAgTG9hZGluZ1NjZW5lLmdvdG8oXCJNYWluXCIpO1xuXG4gICAgICAgIC8vIGxldCBpbnRlcmZ1bGxfYiA9IHdpbmRvd1snenpzZGt1aSddLmludGVyRnVsbF9sYXJnZSgwLCAnaW50ZXJfZnVsbF9sYXJnZScsIDE4MDApO1xuICAgICAgICAvLyBpbnRlcmZ1bGxfYiAmJiB0aGlzLmludGVyZnVsbF9kYXR1LmNoaWxkcmVuWzBdLmFkZENoaWxkKGludGVyZnVsbF9iKTtcbiAgICAgICAgLy8gdGhpcy5pbnRlcmZ1bGxfZGF0dS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyBQbGF0Zm9ybS5oaWRlQmFubmVyQWQoKTtcbiAgICB9XG5cbiAgICBjbGlja19ob21lZGF0dSgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IucmVzdW1lKCk7XG4gICAgICAgIC8vIHRoaXMuaW50ZXJmdWxsX2RhdHUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIExvYWRpbmdTY2VuZS5nb3RvKFwiTWFpblwiKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxuXG4gICAgLy8gb25IaWRkZW4oKSB7XG4gICAgLy8gICAgIC8vIGV2dC5lbWl0KCdHYW1lLnJlc3VtZScpO1xuICAgIC8vICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTtcbiAgICAvLyB9XG59XG4iXX0=