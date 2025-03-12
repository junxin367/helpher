
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UISkip.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1fff0lSIdFN15dcQJQ9V+vD', 'UISkip');
// Game/Scripts/UI/UISkip.ts

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
var Game_1 = require("../Game");
var WeakNetGame_1 = require("../../../framework/extension/weak_net_game/WeakNetGame");
var StatHelper_1 = require("../../../framework/extension/aldsdk/StatHelper");
var UserInfo_1 = require("../../../framework/extension/weak_net_game/UserInfo");
var IconSov_1 = require("../../../framework/extension/weak_net_game/IconSov");
var actionUtil_1 = require("../../../framework/utils/actionUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UISkip = /** @class */ (function (_super) {
    __extends(UISkip, _super);
    function UISkip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.close_btn = null;
        _this.sdk = null;
        _this.isVideo = false;
        return _this;
        // update (dt) {}
    }
    UISkip.prototype.onLoad = function () {
        this.registerSubViews(IconSov_1.default);
    };
    UISkip.prototype.onShow = function (callback) {
        actionUtil_1.default.jellyJump2(this.node);
        // this.close_btn.active = false;
        this.callback = callback;
        this.isVideo = false;
        this.render();
        // let youlike = window['zzsdkui'].youlike(0, null, null, null, function () {
        //     this.interfull.active = true;
        // }.bind(this));
        // if (youlike) {
        //     youlike && this.sdk.addChild(youlike);
        //     youlike.scale = 1;
        // }
        this.close_btn.active = true;
        // this.scheduleOnce(_ => {
        // }, 1)
    };
    UISkip.prototype.start = function () {
    };
    UISkip.prototype.click_close = function () {
        vm.hide(this);
    };
    UISkip.prototype.click_skip = function () {
        var _this = this;
        cc.director.pause();
        WeakNetGame_1.default.doChoice("SOV_Skip_Level", function (_) {
            cc.director.resume();
            // 新用户跳关人数
            if (UserInfo_1.UserInfo.isNew) {
                StatHelper_1.default.sendPath("新用户跳关人数", '关卡', PlayerInfo_1.PlayerInfo.playinglevel);
            }
            vm.hide(_this);
            Game_1.default.instance.onWin();
        }, this);
    };
    UISkip.prototype.onHidden = function () {
        if (this.isVideo) {
            this.callback && this.callback();
        }
    };
    __decorate([
        property(cc.Node)
    ], UISkip.prototype, "close_btn", void 0);
    __decorate([
        property(cc.Node)
    ], UISkip.prototype, "sdk", void 0);
    UISkip = __decorate([
        ccclass
    ], UISkip);
    return UISkip;
}(mvcView_1.default));
exports.default = UISkip;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJU2tpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBb0Q7QUFDcEQsd0RBQXVEO0FBQ3ZELGdDQUEyQjtBQUMzQixzRkFBaUY7QUFDakYsNkVBQXdFO0FBQ3hFLGdGQUErRTtBQUMvRSw4RUFBeUU7QUFDekUsa0VBQTZEO0FBRXZELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFPO0lBQTNDO1FBQUEscUVBZ0VDO1FBN0RHLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUdwQixhQUFPLEdBQVksS0FBSyxDQUFDOztRQXNEekIsaUJBQWlCO0lBQ3JCLENBQUM7SUFyREcsdUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBTyxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUVELHVCQUFNLEdBQU4sVUFBTyxRQUFRO1FBQ1gsb0JBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLGlDQUFpQztRQUVqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFZCw2RUFBNkU7UUFDN0Usb0NBQW9DO1FBQ3BDLGlCQUFpQjtRQUVqQixpQkFBaUI7UUFDakIsNkNBQTZDO1FBQzdDLHlCQUF5QjtRQUN6QixJQUFJO1FBQ0osSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzdCLDJCQUEyQjtRQUMzQixRQUFRO0lBQ1osQ0FBQztJQUVELHNCQUFLLEdBQUw7SUFDQSxDQUFDO0lBRUQsNEJBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELDJCQUFVLEdBQVY7UUFBQSxpQkFZQztRQVZHLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEIscUJBQVcsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsVUFBQSxDQUFDO1lBQ3BDLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDckIsVUFBVTtZQUNWLElBQUksbUJBQVEsQ0FBQyxLQUFLLEVBQUU7Z0JBQ2hCLG9CQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsdUJBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQTthQUNoRTtZQUNELEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7WUFDZCxjQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCx5QkFBUSxHQUFSO1FBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDcEM7SUFFTCxDQUFDO0lBM0REO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1Q0FDRTtJQU5ILE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FnRTFCO0lBQUQsYUFBQztDQWhFRCxBQWdFQyxDQWhFbUMsaUJBQU8sR0FnRTFDO2tCQWhFb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtdmNWaWV3IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvbXZjVmlld1wiO1xuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuLi9Db21tb24vQmFzZS9QbGF5ZXJJbmZvXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0IFdlYWtOZXRHYW1lIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvV2Vha05ldEdhbWVcIjtcbmltcG9ydCBTdGF0SGVwbGVyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL2FsZHNkay9TdGF0SGVscGVyXCI7XG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvVXNlckluZm9cIjtcbmltcG9ydCBJY29uU292IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvSWNvblNvdlwiO1xuaW1wb3J0IGFjdGlvblV0aWwgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91dGlscy9hY3Rpb25VdGlsXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVNraXAgZXh0ZW5kcyBtdmNWaWV3IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNsb3NlX2J0bjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzZGs6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgY2FsbGJhY2s6IEZ1bmN0aW9uO1xuICAgIGlzVmlkZW86IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlclN1YlZpZXdzKEljb25Tb3YpXG4gICAgfVxuXG4gICAgb25TaG93KGNhbGxiYWNrKSB7XG4gICAgICAgIGFjdGlvblV0aWwuamVsbHlKdW1wMih0aGlzLm5vZGUpO1xuICAgICAgICAvLyB0aGlzLmNsb3NlX2J0bi5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMuaXNWaWRlbyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgICAgIC8vIGxldCB5b3VsaWtlID0gd2luZG93Wyd6enNka3VpJ10ueW91bGlrZSgwLCBudWxsLCBudWxsLCBudWxsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vICAgICB0aGlzLmludGVyZnVsbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgIC8vIGlmICh5b3VsaWtlKSB7XG4gICAgICAgIC8vICAgICB5b3VsaWtlICYmIHRoaXMuc2RrLmFkZENoaWxkKHlvdWxpa2UpO1xuICAgICAgICAvLyAgICAgeW91bGlrZS5zY2FsZSA9IDE7XG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5jbG9zZV9idG4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoXyA9PiB7XG4gICAgICAgIC8vIH0sIDEpXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgfVxuXG4gICAgY2xpY2tfY2xvc2UoKSB7XG4gICAgICAgIHZtLmhpZGUodGhpcyk7XG4gICAgfVxuXG4gICAgY2xpY2tfc2tpcCgpIHtcblxuICAgICAgICBjYy5kaXJlY3Rvci5wYXVzZSgpO1xuICAgICAgICBXZWFrTmV0R2FtZS5kb0Nob2ljZShcIlNPVl9Ta2lwX0xldmVsXCIsIF8gPT4ge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IucmVzdW1lKCk7XG4gICAgICAgICAgICAvLyDmlrDnlKjmiLfot7PlhbPkurrmlbBcbiAgICAgICAgICAgIGlmIChVc2VySW5mby5pc05ldykge1xuICAgICAgICAgICAgICAgIFN0YXRIZXBsZXIuc2VuZFBhdGgoXCLmlrDnlKjmiLfot7PlhbPkurrmlbBcIiwgJ+WFs+WNoScsIFBsYXllckluZm8ucGxheWluZ2xldmVsKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdm0uaGlkZSh0aGlzKTtcbiAgICAgICAgICAgIEdhbWUuaW5zdGFuY2Uub25XaW4oKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25IaWRkZW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVmlkZW8pIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjaygpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==