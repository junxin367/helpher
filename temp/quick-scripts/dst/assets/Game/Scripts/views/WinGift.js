
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/views/WinGift.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef6e2MzTyhP3piIfV0yaWi6', 'WinGift');
// Game/Scripts/views/WinGift.ts

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
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var event_1 = require("../../../framework/core/event");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var STEP = 0.25;
var WinGift = /** @class */ (function (_super) {
    __extends(WinGift, _super);
    function WinGift() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.progress = null;
        _this.node_bg = null;
        return _this;
    }
    WinGift.prototype.onLoad = function () {
        event_1.evt.on("UIProgressRewardGet.show", this.onShownReward, this);
    };
    WinGift.prototype.onDestroy = function () {
        event_1.evt.off(this);
    };
    WinGift.prototype.preAddProgress = function () {
        PlayerInfo_1.PlayerInfo.boxProgress += STEP;
        PlayerInfo_1.PlayerInfo.save("boxProgress");
    };
    WinGift.prototype.postAddProgress = function () {
        if (PlayerInfo_1.PlayerInfo.boxProgress >= 1) {
            PlayerInfo_1.PlayerInfo.boxProgress = 0;
            this.showGift();
        }
    };
    WinGift.prototype.onShownReward = function () {
        this.node_bg.opacity = 0;
    };
    WinGift.prototype.showGift = function () {
        var _this = this;
        this.node_bg.opacity = 0;
        cc.tween(this.node_bg).to(1.0, { opacity: 255 }).start();
        cc.tween(this.node).to(1.0, { position: cc.v2(0, 0) }, { easing: "sineInOut" }).call(function () {
            _this.node.setPosition(-1000, -10000);
            vm.show("Prefabs/UI/UIProgressReward");
        }).start();
    };
    WinGift.prototype.show = function () {
        this.node.active = true;
        this.node_bg.opacity = 0;
        if (PlayerInfo_1.PlayerInfo.winStatus == 1 && this.shouldAddProgress()) {
            this.preAddProgress();
            this.updateProgress();
            this.postAddProgress();
        }
        else {
            this.updateProgress();
        }
    };
    WinGift.prototype.hide = function () {
        this.node_bg.opacity = 0;
        this.node.active = false;
    };
    WinGift.prototype.updateProgress = function () {
        var prev = PlayerInfo_1.PlayerInfo.boxProgress - STEP;
        prev = Math.max(0, prev);
        this.label.string = PlayerInfo_1.PlayerInfo.boxProgress * 100 + "%";
        this.progress.fillRange = prev;
        cc.tween(this.progress).to(0.5, { fillRange: PlayerInfo_1.PlayerInfo.boxProgress }).start();
    };
    WinGift.prototype.shouldAddProgress = function () {
        if (PlayerInfo_1.PlayerInfo.winStatus == -1)
            return;
        if (PlayerInfo_1.PlayerInfo.isPlayingDaily) {
            if (PlayerInfo_1.PlayerInfo.playingDailyLevel == PlayerInfo_1.PlayerInfo.dailylevel) {
                return true;
            }
            return false;
        }
        if (PlayerInfo_1.PlayerInfo.playinglevel == PlayerInfo_1.PlayerInfo.level) {
            // add progress 
            return true;
        }
        return false;
    };
    __decorate([
        property(cc.Label)
    ], WinGift.prototype, "label", void 0);
    __decorate([
        property(cc.Sprite)
    ], WinGift.prototype, "progress", void 0);
    __decorate([
        property(cc.Node)
    ], WinGift.prototype, "node_bg", void 0);
    WinGift = __decorate([
        ccclass
    ], WinGift);
    return WinGift;
}(cc.Component));
exports.default = WinGift;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcdmlld3NcXFdpbkdpZnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQXNEO0FBQ3RELHVEQUFvRDtBQUdoRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQTtBQUN6QyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7QUFFbEI7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUF1RkM7UUFwRkcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBWSxJQUFJLENBQUM7O0lBOEU1QixDQUFDO0lBM0VHLHdCQUFNLEdBQU47UUFDSSxXQUFHLENBQUMsRUFBRSxDQUFDLDBCQUEwQixFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDaEUsQ0FBQztJQUVELDJCQUFTLEdBQVQ7UUFDSSxXQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxnQ0FBYyxHQUFkO1FBQ0ksdUJBQVUsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDO1FBQy9CLHVCQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUFFRCxpQ0FBZSxHQUFmO1FBQ0ksSUFBSSx1QkFBVSxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUU7WUFDN0IsdUJBQVUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjtJQUNMLENBQUM7SUFFRCwrQkFBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCwwQkFBUSxHQUFSO1FBQUEsaUJBUUM7UUFQRyxJQUFJ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Qzs0Q0FDTTtJQVRQLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0F1RjNCO0lBQUQsY0FBQztDQXZGRCxBQXVGQyxDQXZGb0MsRUFBRSxDQUFDLFNBQVMsR0F1RmhEO2tCQXZGb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi4vQ29tbW9uL0Jhc2UvUGxheWVySW5mb1wiXHJcbmltcG9ydCB7IGV2dCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvY29yZS9ldmVudFwiO1xyXG5pbXBvcnQgeyBFYXNlVHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3FhbmltL0Vhc2VUeXBlXCI7XHJcblxyXG5sZXQgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvclxyXG5jb25zdCBTVEVQID0gMC4yNTtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luR2lmdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgcHJvZ3Jlc3M6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBub2RlX2JnOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGV2dC5vbihcIlVJUHJvZ3Jlc3NSZXdhcmRHZXQuc2hvd1wiLCB0aGlzLm9uU2hvd25SZXdhcmQsIHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGV2dC5vZmYodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJlQWRkUHJvZ3Jlc3MoKSB7XHJcbiAgICAgICAgUGxheWVySW5mby5ib3hQcm9ncmVzcyArPSBTVEVQO1xyXG4gICAgICAgIFBsYXllckluZm8uc2F2ZShcImJveFByb2dyZXNzXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcG9zdEFkZFByb2dyZXNzKCkge1xyXG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLmJveFByb2dyZXNzID49IDEpIHtcclxuICAgICAgICAgICAgUGxheWVySW5mby5ib3hQcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0dpZnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93blJld2FyZCgpIHtcclxuICAgICAgICB0aGlzLm5vZGVfYmcub3BhY2l0eSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0dpZnQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlX2JnLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZV9iZykudG8oMS4wLCB7IG9wYWNpdHk6IDI1NSB9KS5zdGFydCgpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMS4wLCB7IHBvc2l0aW9uOiBjYy52MigwLCAwKSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKC0xMDAwLCAtMTAwMDApXHJcbiAgICAgICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJUHJvZ3Jlc3NSZXdhcmRcIilcclxuICAgICAgICB9KS5zdGFydCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZV9iZy5vcGFjaXR5ID0gMDtcclxuICAgICAgICBpZiAoUGxheWVySW5mby53aW5TdGF0dXMgPT0gMSAmJiB0aGlzLnNob3VsZEFkZFByb2dyZXNzKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wcmVBZGRQcm9ncmVzcygpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzKCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9zdEFkZFByb2dyZXNzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIHRoaXMubm9kZV9iZy5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUHJvZ3Jlc3MoKSB7XHJcbiAgICAgICAgbGV0IHByZXYgPSBQbGF5ZXJJbmZvLmJveFByb2dyZXNzIC0gU1RFUDtcclxuICAgICAgICBwcmV2ID0gTWF0aC5tYXgoMCwgcHJldik7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBQbGF5ZXJJbmZvLmJveFByb2dyZXNzICogMTAwICsgXCIlXCJcclxuICAgICAgICB0aGlzLnByb2dyZXNzLmZpbGxSYW5nZSA9IHByZXY7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5wcm9ncmVzcykudG8oMC41LCB7IGZpbGxSYW5nZTogUGxheWVySW5mby5ib3hQcm9ncmVzcyB9KS5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZEFkZFByb2dyZXNzKCkge1xyXG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLndpblN0YXR1cyA9PSAtMSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLmlzUGxheWluZ0RhaWx5KSB7XHJcbiAgICAgICAgICAgIGlmIChQbGF5ZXJJbmZvLnBsYXlpbmdEYWlseUxldmVsID09IFBsYXllckluZm8uZGFpbHlsZXZlbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoUGxheWVySW5mby5wbGF5aW5nbGV2ZWwgPT0gUGxheWVySW5mby5sZXZlbCkge1xyXG4gICAgICAgICAgICAvLyBhZGQgcHJvZ3Jlc3MgXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==