"use strict";
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