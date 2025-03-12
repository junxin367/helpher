
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIEnergeyPackage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2448CUAlJFk6s9frbtdrWA', 'UIEnergeyPackage');
// Game/Scripts/UI/UIEnergeyPackage.ts

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
var IconSov_1 = require("../../../framework/extension/weak_net_game/IconSov");
var WeakNetGame_1 = require("../../../framework/extension/weak_net_game/WeakNetGame");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var event_1 = require("../../../framework/core/event");
var display_1 = require("../../../framework/misc/display");
var StatHelper_1 = require("../../../framework/extension/aldsdk/StatHelper");
var Platform_1 = require("../../../framework/extension/Platform");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIEnergeyPackage = /** @class */ (function (_super) {
    __extends(UIEnergeyPackage, _super);
    function UIEnergeyPackage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label_tips = null;
        _this.label_energy = null;
        _this.btn_claim = null;
        _this.btn_double = null;
        _this.btn_nothanks = null;
        _this.btn_jia = null;
        _this.sdk = null;
        _this.youlike = null;
        _this.successClaim = false;
        return _this;
        // onHidden() {
        //     if (this.successClaim) {
        //         vm.show("Prefabs/UI/UIDoubleGet", csv.Config.EneryPackage_Count);
        //     }
        // }
    }
    UIEnergeyPackage.prototype.onLoad = function () {
        this.register(this.label_tips, function () { return "\u606D\u559C\u4F60\u83B7\u5F97" + csv.Config.EneryPackage_Count + "\u4F53\u529B\uFF0C\u5FEB\u6765\u9886\u53D6\u5427\uFF01"; });
        this.register(this.label_energy, function () { return csv.Config.EneryPackage_Count; });
        this.register(this.btn_claim, this.click_claim);
        this.register(this.btn_double, this.click_double);
        this.register(this.btn_nothanks, this.click_cancel);
        this.registerSubViews(IconSov_1.default);
    };
    UIEnergeyPackage.prototype.start = function () {
        // if (PlayerInfo.isShowSDK()) {
        //     let youlike = window['zzsdkui'].youlike(2, 0, 400);
        //     youlike && this.sdk.addChild(youlike);
        //     youlike.scale = 1;
        // }
    };
    UIEnergeyPackage.prototype.onHidden = function () {
        event_1.evt.off(this);
    };
    UIEnergeyPackage.prototype.onDestroy = function () {
        event_1.evt.off(this);
    };
    UIEnergeyPackage.prototype.onResume = function () {
        Platform_1.default.reloadBannerAd();
    };
    UIEnergeyPackage.prototype.onShown = function () {
        event_1.evt.on("Game.Resume", this.onResume, this);
        this.render();
        this.successClaim = false;
        if (window.qq || window.tt) {
            this.btn_nothanks.node.active = true;
            this.btn_jia.active = false;
            Platform_1.default.showBannerAd();
            return;
        }
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
    UIEnergeyPackage.prototype.click_cancel = function () {
        vm.hide(this);
    };
    UIEnergeyPackage.prototype.click_claim = function () {
        // if (this.checkEnergyFull()) return;
        this.claim();
    };
    UIEnergeyPackage.prototype.click_double = function () {
        // if (this.checkEnergyFull()) return;
        WeakNetGame_1.default.doChoice("SOV_EneryPackage", this.onClaimDouble, this, function () {
            StatHelper_1.default.sendPath("领取体力大礼包", "状态", "领取失败");
        });
    };
    UIEnergeyPackage.prototype.checkEnergyFull = function () {
        if (PlayerInfo_1.PlayerInfo.labour >= csv.Config.Max_Energy) {
            ToastManager_1.Toast.make('体力已满!');
            return true;
        }
        return false;
    };
    UIEnergeyPackage.prototype.onClaimDouble = function () {
        this.claim(1);
        // vm.hide(this);
    };
    UIEnergeyPackage.prototype.claim = function (mult) {
        if (mult === void 0) { mult = 1; }
        if (this.successClaim)
            return;
        var add = mult * csv.Config.EneryPackage_Count;
        var old = PlayerInfo_1.PlayerInfo.labour;
        var r = PlayerInfo_1.PlayerInfo.labour + add;
        // PlayerInfo.labour = Math.min(r, csv.Config.Max_Energy);
        PlayerInfo_1.PlayerInfo.labour = r;
        PlayerInfo_1.PlayerInfo.save("labour");
        event_1.evt.emit("Game.getTili", display_1.default.center, PlayerInfo_1.PlayerInfo.labour - old);
        // if (PlayerInfo.labour >= csv.Config.Max_Energy) {
        //     Toast.make("体力已恢复满!")
        // } else {
        //     Toast.make("获得" + add + "点体力");
        // }
        ToastManager_1.Toast.make("获得" + add + "点体力");
        this.successClaim = true;
        StatHelper_1.default.sendPath("领取体力大礼包", "状态", "领取成功");
    };
    __decorate([
        property(cc.Label)
    ], UIEnergeyPackage.prototype, "label_tips", void 0);
    __decorate([
        property(cc.Label)
    ], UIEnergeyPackage.prototype, "label_energy", void 0);
    __decorate([
        property(cc.Button)
    ], UIEnergeyPackage.prototype, "btn_claim", void 0);
    __decorate([
        property(cc.Button)
    ], UIEnergeyPackage.prototype, "btn_double", void 0);
    __decorate([
        property(cc.Button)
    ], UIEnergeyPackage.prototype, "btn_nothanks", void 0);
    __decorate([
        property(cc.Node)
    ], UIEnergeyPackage.prototype, "btn_jia", void 0);
    __decorate([
        property(cc.Node)
    ], UIEnergeyPackage.prototype, "sdk", void 0);
    UIEnergeyPackage = __decorate([
        ccclass
    ], UIEnergeyPackage);
    return UIEnergeyPackage;
}(mvcView_1.default));
exports.default = UIEnergeyPackage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJRW5lcmdleVBhY2thZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW9EO0FBQ3BELDhFQUF5RTtBQUN6RSxzRkFBaUY7QUFDakYsd0RBQXVEO0FBQ3ZELG1FQUEyRDtBQUMzRCx1REFBb0Q7QUFDcEQsMkRBQXNEO0FBQ3RELDZFQUF3RTtBQUl4RSxrRUFBNkQ7QUFFekQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUE7QUFFekM7SUFBOEMsb0NBQU87SUFBckQ7UUFBQSxxRUEySUM7UUF6SUcsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFHOUIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUc1QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQixhQUFPLEdBQVksSUFBSSxDQUFBO1FBR3ZCLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFDcEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixrQkFBWSxHQUFZLEtBQUssQ0FBQzs7UUE4RzlCLGVBQWU7UUFDZiwrQkFBK0I7UUFDL0IsNEVBQTRFO1FBQzVFLFFBQVE7UUFDUixJQUFJO0lBRVIsQ0FBQztJQWxIRyxpQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxtQ0FBUSxHQUFHLENBQUMsTUFBTSxDQUFDLGtCQUFrQiwyREFBVyxFQUFoRCxDQUFnRCxDQUFDLENBQUE7UUFDdEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLGNBQU0sT0FBQSxHQUFHLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUE3QixDQUE2QixDQUFDLENBQUE7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MERBQ1c7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNFO0lBcEJILGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBMklwQztJQUFELHVCQUFDO0NBM0lELEFBMklDLENBM0k2QyxpQkFBTyxHQTJJcEQ7a0JBM0lvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXZjVmlldyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL212Y1ZpZXdcIjtcclxuaW1wb3J0IEljb25Tb3YgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9JY29uU292XCI7XHJcbmltcG9ydCBXZWFrTmV0R2FtZSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi93ZWFrX25ldF9nYW1lL1dlYWtOZXRHYW1lXCI7XHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi4vQ29tbW9uL0Jhc2UvUGxheWVySW5mb1wiO1xyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvVG9hc3RNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IGV2dCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvY29yZS9ldmVudFwiO1xyXG5pbXBvcnQgZGlzcGxheSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21pc2MvZGlzcGxheVwiO1xyXG5pbXBvcnQgU3RhdEhlcGxlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi9hbGRzZGsvU3RhdEhlbHBlclwiO1xyXG5pbXBvcnQgd2VnYW1lIGZyb20gXCIuLi9zZGsvd2VnYW1lXCI7XHJcbmltcG9ydCB7IENsb3VkRnVuY1R5cGUgfSBmcm9tIFwiLi4vQ29tbW9uL0Nsb3VkRnVuY1R5cGVzXCI7XHJcbmltcG9ydCBHYW1lIGZyb20gXCIuLi9HYW1lXCI7XHJcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi9QbGF0Zm9ybVwiO1xyXG5cclxubGV0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3JcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlFbmVyZ2V5UGFja2FnZSBleHRlbmRzIG12Y1ZpZXcge1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWxfdGlwczogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsX2VuZXJneTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBidG5fY2xhaW06IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJ0bl9kb3VibGU6IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJ0bl9ub3RoYW5rczogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl9qaWE6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzZGs6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgeW91bGlrZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgc3VjY2Vzc0NsYWltOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIodGhpcy5sYWJlbF90aXBzLCAoKSA9PiBg5oGt5Zac5L2g6I635b6XJHtjc3YuQ29uZmlnLkVuZXJ5UGFja2FnZV9Db3VudH3kvZPlipvvvIzlv6vmnaXpooblj5blkKfvvIFgKVxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIodGhpcy5sYWJlbF9lbmVyZ3ksICgpID0+IGNzdi5Db25maWcuRW5lcnlQYWNrYWdlX0NvdW50KVxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIodGhpcy5idG5fY2xhaW0sIHRoaXMuY2xpY2tfY2xhaW0pXHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcih0aGlzLmJ0bl9kb3VibGUsIHRoaXMuY2xpY2tfZG91YmxlKVxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIodGhpcy5idG5fbm90aGFua3MsIHRoaXMuY2xpY2tfY2FuY2VsKVxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJTdWJWaWV3cyhJY29uU292KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBpZiAoUGxheWVySW5mby5pc1Nob3dTREsoKSkge1xyXG4gICAgICAgIC8vICAgICBsZXQgeW91bGlrZSA9IHdpbmRvd1snenpzZGt1aSddLnlvdWxpa2UoMiwgMCwgNDAwKTtcclxuICAgICAgICAvLyAgICAgeW91bGlrZSAmJiB0aGlzLnNkay5hZGRDaGlsZCh5b3VsaWtlKTtcclxuICAgICAgICAvLyAgICAgeW91bGlrZS5zY2FsZSA9IDE7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgb25IaWRkZW4oKSB7XHJcbiAgICAgICAgZXZ0Lm9mZih0aGlzKTtcclxuICAgIH1cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBldnQub2ZmKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgb25SZXN1bWUoKSB7XHJcbiAgICAgICAgUGxhdGZvcm0ucmVsb2FkQmFubmVyQWQoKTtcclxuICAgIH1cclxuICAgIG9uU2hvd24oKSB7XHJcbiAgICAgICAgZXZ0Lm9uKFwiR2FtZS5SZXN1bWVcIiwgdGhpcy5vblJlc3VtZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLnN1Y2Nlc3NDbGFpbSA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh3aW5kb3cucXEgfHwgd2luZG93LnR0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuX25vdGhhbmtzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idG5famlhLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBQbGF0Zm9ybS5zaG93QmFubmVyQWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiAod2VnYW1lLmlzQ2hlYXRPcGVuKENsb3VkRnVuY1R5cGUuQmFubmVyX21vdmUpKSB7XHJcbiAgICAgICAgLy8gICAgIHdlZ2FtZS5lbmFibGVGYWtlRm9yQWRDbGljayh0aGlzLmJ0bl9ub3RoYW5rcy5ub2RlLCB0aGlzLmJ0bl9qaWEsIDIsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGlmIChQbGF5ZXJJbmZvLmlzU2hvd1NESygpKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMueW91bGlrZSA9PSBudWxsKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMueW91bGlrZSA9IHdpbmRvd1snenpzZGt1aSddLnlvdWxpa2UoMiwgbnVsbCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgR2FtZS5pbnN0YW5jZS5pbnRlcmZ1bGwuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgaWYgKHRoaXMueW91bGlrZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZGsuYWRkQ2hpbGQodGhpcy55b3VsaWtlKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMueW91bGlrZS5zY2FsZSA9IDE7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMueW91bGlrZSlcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy55b3VsaWtlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5idG5fbm90aGFua3Mubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYnRuX2ppYS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tfY2FuY2VsKCkge1xyXG4gICAgICAgIHZtLmhpZGUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tfY2xhaW0oKSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuY2hlY2tFbmVyZ3lGdWxsKCkpIHJldHVybjtcclxuICAgICAgICB0aGlzLmNsYWltKClcclxuICAgIH1cclxuXHJcbiAgICBjbGlja19kb3VibGUoKSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuY2hlY2tFbmVyZ3lGdWxsKCkpIHJldHVybjtcclxuICAgICAgICBXZWFrTmV0R2FtZS5kb0Nob2ljZShcIlNPVl9FbmVyeVBhY2thZ2VcIiwgdGhpcy5vbkNsYWltRG91YmxlLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIFN0YXRIZXBsZXIuc2VuZFBhdGgoXCLpooblj5bkvZPlipvlpKfnpLzljIVcIiwgXCLnirbmgIFcIiwgXCLpooblj5blpLHotKVcIilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrRW5lcmd5RnVsbCgpIHtcclxuICAgICAgICBpZiAoUGxheWVySW5mby5sYWJvdXIgPj0gY3N2LkNvbmZpZy5NYXhfRW5lcmd5KSB7XHJcbiAgICAgICAgICAgIFRvYXN0Lm1ha2UoJ+S9k+WKm+W3sua7oSEnKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgb25DbGFpbURvdWJsZSgpIHtcclxuICAgICAgICB0aGlzLmNsYWltKDEpO1xyXG4gICAgICAgIC8vIHZtLmhpZGUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhaW0obXVsdCA9IDEpIHtcclxuICAgICAgICBpZiAodGhpcy5zdWNjZXNzQ2xhaW0pIHJldHVybjtcclxuICAgICAgICBsZXQgYWRkID0gbXVsdCAqIGNzdi5Db25maWcuRW5lcnlQYWNrYWdlX0NvdW50O1xyXG4gICAgICAgIGxldCBvbGQgPSBQbGF5ZXJJbmZvLmxhYm91cjtcclxuICAgICAgICBsZXQgciA9IFBsYXllckluZm8ubGFib3VyICsgYWRkO1xyXG4gICAgICAgIC8vIFBsYXllckluZm8ubGFib3VyID0gTWF0aC5taW4ociwgY3N2LkNvbmZpZy5NYXhfRW5lcmd5KTtcclxuICAgICAgICBQbGF5ZXJJbmZvLmxhYm91ciA9IHI7XHJcbiAgICAgICAgUGxheWVySW5mby5zYXZlKFwibGFib3VyXCIpXHJcbiAgICAgICAgZXZ0LmVtaXQoXCJHYW1lLmdldFRpbGlcIiwgZGlzcGxheS5jZW50ZXIsIFBsYXllckluZm8ubGFib3VyIC0gb2xkKVxyXG4gICAgICAgIC8vIGlmIChQbGF5ZXJJbmZvLmxhYm91ciA+PSBjc3YuQ29uZmlnLk1heF9FbmVyZ3kpIHtcclxuICAgICAgICAvLyAgICAgVG9hc3QubWFrZShcIuS9k+WKm+W3suaBouWkjea7oSFcIilcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBUb2FzdC5tYWtlKFwi6I635b6XXCIgKyBhZGQgKyBcIueCueS9k+WKm1wiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgVG9hc3QubWFrZShcIuiOt+W+l1wiICsgYWRkICsgXCLngrnkvZPliptcIik7XHJcbiAgICAgICAgdGhpcy5zdWNjZXNzQ2xhaW0gPSB0cnVlO1xyXG4gICAgICAgIFN0YXRIZXBsZXIuc2VuZFBhdGgoXCLpooblj5bkvZPlipvlpKfnpLzljIVcIiwgXCLnirbmgIFcIiwgXCLpooblj5bmiJDlip9cIilcclxuICAgIH1cclxuXHJcbiAgICAvLyBvbkhpZGRlbigpIHtcclxuICAgIC8vICAgICBpZiAodGhpcy5zdWNjZXNzQ2xhaW0pIHtcclxuICAgIC8vICAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlEb3VibGVHZXRcIiwgY3N2LkNvbmZpZy5FbmVyeVBhY2thZ2VfQ291bnQpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbn0iXX0=