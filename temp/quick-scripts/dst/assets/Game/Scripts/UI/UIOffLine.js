
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIOffLine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0af08ptRkBIy7gzoiKHutrO', 'UIOffLine');
// Game/Scripts/UI/UIOffLine.ts

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
var wegame_1 = require("../sdk/wegame");
var CloudFuncTypes_1 = require("../Common/CloudFuncTypes");
var Platform_1 = require("../../../framework/extension/Platform");
var event_1 = require("../../../framework/core/event");
var WeakNetGame_1 = require("../../../framework/extension/weak_net_game/WeakNetGame");
var display_1 = require("../../../framework/misc/display");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIOffLine = /** @class */ (function (_super) {
    __extends(UIOffLine, _super);
    function UIOffLine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_get = null;
        _this.btn_getjia = null;
        _this.sdk = null;
        _this.tili_label = null;
        _this.youlike = null;
        _this.tili = 0;
        return _this;
    }
    UIOffLine.prototype.onLoad = function () {
    };
    UIOffLine.prototype.start = function () {
        // if (PlayerInfo.isShowSDK()) {
        //     let newInter = window['zzsdkui'].inter_scroll(1, 'inter_x', 350, null, 100, null, function () {
        //         Main.instance.show_interfull();
        //     }.bind(this));
        //     newInter && this.sdk.addChild(newInter);
        //     newInter.setPosition(0, 150);
        // }
    };
    UIOffLine.prototype.onShow = function (num) {
        this.tili = num;
        this.bannerMove(true);
        this.tili_label.string = "+" + num;
    };
    UIOffLine.prototype.bannerMove = function (b) {
        if (b === void 0) { b = false; }
        if (b && wegame_1.default.isCheatOpen(CloudFuncTypes_1.CloudFuncType.Banner_move)) {
            wegame_1.default.enableFakeForAdClick(this.btn_get, this.btn_getjia, 2, this.err.bind(this));
        }
        else {
            this.btn_get.active = true;
            this.btn_getjia.active = false;
            Platform_1.default.showBannerAd();
        }
    };
    UIOffLine.prototype.err = function () {
        // if (PlayerInfo.isShowSDK()) {
        //     if (this.youlike == null) {
        //         this.youlike = window['zzsdkui'].youlike(2, null, null, null, function () {
        //             Game.instance.interfull.active = true;
        //         }.bind(this));
        //         if (this.youlike) {
        //             this.sdk.addChild(this.youlike);
        //             this.youlike.scale = 1;
        //         }
        //     }
        //     if (this.youlike)
        //         this.youlike.active = true;
        // }
    };
    UIOffLine.prototype.onDestroy = function () {
        // if (PlayerInfo.isShowSDK()) window['zzsdkui'].unscheduleAllCallbacks();
    };
    UIOffLine.prototype.click_get = function () {
        event_1.evt.emit("Game.getTili", display_1.default.center, this.tili);
        PlayerInfo_1.PlayerInfo.labour += this.tili;
        vm.hide(this);
    };
    UIOffLine.prototype.click_getDouble = function () {
        var _this = this;
        WeakNetGame_1.default.doChoice("SOV_Double_Offline", function (_) {
            event_1.evt.emit("Game.getTili", display_1.default.center, _this.tili * 2);
            PlayerInfo_1.PlayerInfo.labour += (_this.tili * 2);
            vm.hide(_this);
        }, this);
    };
    __decorate([
        property(cc.Node)
    ], UIOffLine.prototype, "btn_get", void 0);
    __decorate([
        property(cc.Node)
    ], UIOffLine.prototype, "btn_getjia", void 0);
    __decorate([
        property(cc.Node)
    ], UIOffLine.prototype, "sdk", void 0);
    __decorate([
        property(cc.Label)
    ], UIOffLine.prototype, "tili_label", void 0);
    UIOffLine = __decorate([
        ccclass
    ], UIOffLine);
    return UIOffLine;
}(mvcView_1.default));
exports.default = UIOffLine;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJT2ZmTGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBb0Q7QUFJcEQsd0RBQXVEO0FBR3ZELHdDQUFtQztBQUNuQywyREFBeUQ7QUFFekQsa0VBQTZEO0FBRzdELHVEQUFvRDtBQUNwRCxzRkFBaUY7QUFFakYsMkRBQXNEO0FBSWhELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFPO0lBQTlDO1FBQUEscUVBMEZDO1FBdEZHLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsU0FBRyxHQUFZLElBQUksQ0FBQztRQUdwQixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLFVBQUksR0FBVyxDQUFDLENBQUM7O0lBMEVyQixDQUFDO0lBeEVHLDBCQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQseUJBQUssR0FBTDtRQUNJLGdDQUFnQztRQUNoQyxzR0FBc0c7UUFDdEcsMENBQTBDO1FBQzFDLHFCQUFxQjtRQUNyQiwrQ0FBK0M7UUFDL0Msb0NBQW9DO1FBQ3BDLElBQUk7SUFDUixDQUFDO0lBR0QsMEJBQU0sR0FBTixVQUFPLEdBQUc7UUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDdkMsQ0FBQztJQUlELDhCQUFVLEdBQVYsVUFBVyxDQUFTO1FBQVQsa0JBQUEsRUFBQSxTQUFTO1FBQ2hCLElBQUksQ0FBQyxJQUFJLGdCQUFNLENBQUMsV0FBVyxDQUFDLDhCQUFhLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDcEQsZ0JBQU0sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDdEY7YUFBTTtZQUNILElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDL0Isa0JBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFHRCx1QkFBRyxHQUFIO1FBQ0ksZ0NBQWdDO1FBQ2hDLGtDQUFrQztRQUNsQyxzRkFBc0Y7UUFDdEYscURBQXFEO1FBQ3JELHlCQUF5QjtRQUN6Qiw4QkFBOEI7UUFDOUIsK0NBQStDO1FBQy9DLHNDQUFzQztRQUN0QyxZQUFZO1FBQ1osUUFBUTtRQUNSLHdCQUF3QjtRQUN4QixzQ0FBc0M7UUFDdEMsSUFBSTtJQUNSLENBQUM7SUFJRCw2QkFBUyxHQUFUO1FBQ0ksMEVBQTBFO0lBQzlFLENBQUM7SUFFRCw2QkFBUyxHQUFUO1FBQ0ksV0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BELHVCQUFVLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDL0IsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsbUNBQWUsR0FBZjtRQUFBLGlCQU9DO1FBTkcscUJBQVcsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsVUFBQSxDQUFDO1lBQ3hDLFdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLGlCQUFPLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDeEQsdUJBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDbEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBRVosQ0FBQztJQW5GRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRTtJQUdwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNTO0lBYlgsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTBGN0I7SUFBRCxnQkFBQztDQTFGRCxBQTBGQyxDQTFGc0MsaUJBQU8sR0EwRjdDO2tCQTFGb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtdmNWaWV3IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvbXZjVmlld1wiO1xuaW1wb3J0IExvYWRpbmdTY2VuZSBmcm9tIFwiLi4vQ29tbW9uL0Jhc2UvTG9hZGluZ1NjZW5lXCI7XG5pbXBvcnQgeyBTZXR0aW5nSW5mbyB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvU2V0dGluZ0luZm9cIjtcbmltcG9ydCBEZXZpY2UgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9taXNjL0RldmljZVwiO1xuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuLi9Db21tb24vQmFzZS9QbGF5ZXJJbmZvXCI7XG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvVG9hc3RNYW5hZ2VyXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0IHdlZ2FtZSBmcm9tIFwiLi4vc2RrL3dlZ2FtZVwiO1xuaW1wb3J0IHsgQ2xvdWRGdW5jVHlwZSB9IGZyb20gXCIuLi9Db21tb24vQ2xvdWRGdW5jVHlwZXNcIjtcbmltcG9ydCB7IHFxc2RrIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vcXEvcXFzZGtcIjtcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi9QbGF0Zm9ybVwiO1xuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi93ZWFrX25ldF9nYW1lL1VzZXJJbmZvXCI7XG5pbXBvcnQgeyB0dHNkayB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3R0c2RrL3R0c2RrXCI7XG5pbXBvcnQgeyBldnQgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2NvcmUvZXZlbnRcIjtcbmltcG9ydCBXZWFrTmV0R2FtZSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi93ZWFrX25ldF9nYW1lL1dlYWtOZXRHYW1lXCI7XG5pbXBvcnQgVW5pdHkgZnJvbSBcIi4uL0NvbW1vbi9Vbml0eVwiO1xuaW1wb3J0IGRpc3BsYXkgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9taXNjL2Rpc3BsYXlcIjtcbmltcG9ydCBDb25zdCBmcm9tIFwiLi4vQ29tbW9uL0NvbnN0XCI7XG5pbXBvcnQgTWFpbiBmcm9tIFwiLi4vTWFpblwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlPZmZMaW5lIGV4dGVuZHMgbXZjVmlldyB7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0bl9nZXQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuX2dldGppYTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzZGs6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHRpbGlfbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHlvdWxpa2U6IGNjLk5vZGUgPSBudWxsO1xuICAgIHRpbGk6IG51bWJlciA9IDA7XG5cbiAgICBvbkxvYWQoKSB7XG5cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgLy8gaWYgKFBsYXllckluZm8uaXNTaG93U0RLKCkpIHtcbiAgICAgICAgLy8gICAgIGxldCBuZXdJbnRlciA9IHdpbmRvd1snenpzZGt1aSddLmludGVyX3Njcm9sbCgxLCAnaW50ZXJfeCcsIDM1MCwgbnVsbCwgMTAwLCBudWxsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vICAgICAgICAgTWFpbi5pbnN0YW5jZS5zaG93X2ludGVyZnVsbCgpO1xuICAgICAgICAvLyAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgLy8gICAgIG5ld0ludGVyICYmIHRoaXMuc2RrLmFkZENoaWxkKG5ld0ludGVyKTtcbiAgICAgICAgLy8gICAgIG5ld0ludGVyLnNldFBvc2l0aW9uKDAsIDE1MCk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cblxuICAgIG9uU2hvdyhudW0pIHtcbiAgICAgICAgdGhpcy50aWxpID0gbnVtO1xuICAgICAgICB0aGlzLmJhbm5lck1vdmUodHJ1ZSk7XG4gICAgICAgIHRoaXMudGlsaV9sYWJlbC5zdHJpbmcgPSBcIitcIiArIG51bTtcbiAgICB9XG5cblxuXG4gICAgYmFubmVyTW92ZShiID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGIgJiYgd2VnYW1lLmlzQ2hlYXRPcGVuKENsb3VkRnVuY1R5cGUuQmFubmVyX21vdmUpKSB7XG4gICAgICAgICAgICB3ZWdhbWUuZW5hYmxlRmFrZUZvckFkQ2xpY2sodGhpcy5idG5fZ2V0LCB0aGlzLmJ0bl9nZXRqaWEsIDIsIHRoaXMuZXJyLmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idG5fZ2V0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJ0bl9nZXRqaWEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBQbGF0Zm9ybS5zaG93QmFubmVyQWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZXJyKCkge1xuICAgICAgICAvLyBpZiAoUGxheWVySW5mby5pc1Nob3dTREsoKSkge1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMueW91bGlrZSA9PSBudWxsKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy55b3VsaWtlID0gd2luZG93Wyd6enNka3VpJ10ueW91bGlrZSgyLCBudWxsLCBudWxsLCBudWxsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIEdhbWUuaW5zdGFuY2UuaW50ZXJmdWxsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgLy8gICAgICAgICBpZiAodGhpcy55b3VsaWtlKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuc2RrLmFkZENoaWxkKHRoaXMueW91bGlrZSk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMueW91bGlrZS5zY2FsZSA9IDE7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgaWYgKHRoaXMueW91bGlrZSlcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnlvdWxpa2UuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuXG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIC8vIGlmIChQbGF5ZXJJbmZvLmlzU2hvd1NESygpKSB3aW5kb3dbJ3p6c2RrdWknXS51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG4gICAgY2xpY2tfZ2V0KCkge1xuICAgICAgICBldnQuZW1pdChcIkdhbWUuZ2V0VGlsaVwiLCBkaXNwbGF5LmNlbnRlciwgdGhpcy50aWxpKTtcbiAgICAgICAgUGxheWVySW5mby5sYWJvdXIgKz0gdGhpcy50aWxpO1xuICAgICAgICB2bS5oaWRlKHRoaXMpO1xuICAgIH1cblxuICAgIGNsaWNrX2dldERvdWJsZSgpIHtcbiAgICAgICAgV2Vha05ldEdhbWUuZG9DaG9pY2UoXCJTT1ZfRG91YmxlX09mZmxpbmVcIiwgXyA9PiB7XG4gICAgICAgICAgICBldnQuZW1pdChcIkdhbWUuZ2V0VGlsaVwiLCBkaXNwbGF5LmNlbnRlciwgdGhpcy50aWxpICogMik7XG4gICAgICAgICAgICBQbGF5ZXJJbmZvLmxhYm91ciArPSAodGhpcy50aWxpICogMik7XG4gICAgICAgICAgICB2bS5oaWRlKHRoaXMpO1xuICAgICAgICB9LCB0aGlzKVxuXG4gICAgfVxuXG5cbn1cbiJdfQ==