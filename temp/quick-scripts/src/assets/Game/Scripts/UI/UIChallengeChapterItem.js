"use strict";
cc._RF.push(module, 'dc9e8mUsKpJgrxAEluJYFGQ', 'UIChallengeChapterItem');
// Game/Scripts/UI/UIChallengeChapterItem.ts

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
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var LoadingScene_1 = require("../Common/Base/LoadingScene");
var WeakNetGame_1 = require("../../../framework/extension/weak_net_game/WeakNetGame");
var Platform_1 = require("../../../framework/extension/Platform");
var UIChallengeChapter_1 = require("./UIChallengeChapter");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIChallengeChapterItem = /** @class */ (function (_super) {
    __extends(UIChallengeChapterItem, _super);
    function UIChallengeChapterItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label_chapter = null;
        _this.level_node = null;
        return _this;
    }
    // _init: boolean = false;
    UIChallengeChapterItem.prototype.onLoad = function () {
        var _this = this;
        this.register(this.label_chapter, function (_) { return _this.showLabel(); });
    };
    UIChallengeChapterItem.prototype.onLaterRender = function () {
        // if (!this._init) {
        //     this._init = true;
        this.refresh_level();
        // }
    };
    UIChallengeChapterItem.prototype.refresh_level = function () {
        var _this = this;
        var data = this.getData();
        var maxLevel = csv.daily_level.values.length;
        var _loop_1 = function (i) {
            var level = ((data - 1) * UIChallengeChapter_1.ROW) + (i + 1);
            this_1.onClick(this_1.level_node.children[i], function (_) { return _this.click_startGame(level); });
            var levelNow_node = this_1.level_node.children[i].getChildByName("dangqian");
            var t1_node = this_1.level_node.children[i].getChildByName("t1");
            t1_node.getComponent(cc.Label).string = ((data - 1) * 5 + i + 1) + "";
            var unlock_node = this_1.level_node.children[i].getChildByName("weijisuo");
            if (level > PlayerInfo_1.PlayerInfo.dailylevel) {
                unlock_node.active = true;
            }
            else {
                if (i == 4 && (PlayerInfo_1.PlayerInfo.challenge_gift.indexOf(data) == -1)) {
                    this_1.level_node.children[i].getChildByName("kelingqu").active = true;
                    this_1.level_node.children[i].getChildByName("libao").active = true;
                    this_1.onClick(this_1.level_node.children[i].getChildByName("libao"), function (_) { return _this.click_gift(data); });
                }
                else if (i == 4) {
                    this_1.level_node.children[i].getChildByName("libao").active = false;
                    this_1.level_node.children[i].getChildByName("kelingqu").active = false;
                }
                unlock_node.active = false;
            }
            this_1.level_node.children[i].opacity = maxLevel < level ? 0 : 255;
        };
        var this_1 = this;
        for (var i = 0; i < this.level_node.children.length; i++) {
            _loop_1(i);
        }
    };
    UIChallengeChapterItem.prototype.showLabel = function () {
        var data = this.getData();
        return "\u9636\u6BB5" + data;
    };
    UIChallengeChapterItem.prototype.click_gift = function (data) {
        this.level_node.children[4].getChildByName("libao").active = false;
        this.level_node.children[4].getChildByName("kelingqu").active = false;
        vm.show("Prefabs/UI/UIGetGift", data);
    };
    UIChallengeChapterItem.prototype.click_startGame = function (level) {
        PlayerInfo_1.PlayerInfo.isPlayingDaily = true;
        if (level > PlayerInfo_1.PlayerInfo.dailylevel) {
            ToastManager_1.Toast.make("未解锁");
            return;
        }
        if (PlayerInfo_1.PlayerInfo.labour > 0) {
            PlayerInfo_1.PlayerInfo.labour--;
            if (PlayerInfo_1.PlayerInfo.isPlayingDaily) {
                PlayerInfo_1.PlayerInfo.playingDailyLevel = level;
                if ((csv.Config.Challenge_Level_Show_AD == PlayerInfo_1.PlayerInfo.playingDailyLevel) || (((PlayerInfo_1.PlayerInfo.playingDailyLevel - csv.Config.Challenge_Level_Show_AD) % csv.Config.Challenge_Level_Show_AD_Interval) == 0) && (PlayerInfo_1.PlayerInfo.playingDailyLevel > csv.Config.Challenge_Level_Show_AD)) {
                    WeakNetGame_1.default.doChoice("SOV_ShowAD", function (_) {
                        PlayerInfo_1.PlayerInfo.save();
                        LoadingScene_1.default.goto("Game");
                    }, this);
                }
                else if ((csv.Config.Challenge_Level_Show_AD_Skip == PlayerInfo_1.PlayerInfo.playingDailyLevel) || (((PlayerInfo_1.PlayerInfo.playingDailyLevel - csv.Config.Challenge_Level_Show_AD_Skip) % csv.Config.Challenge_Level_Show_AD_Skip_Interval) == 0) && (PlayerInfo_1.PlayerInfo.playingDailyLevel > csv.Config.Challenge_Level_Show_AD_Skip)) {
                    Platform_1.default.showInterstitial(function (_) {
                        PlayerInfo_1.PlayerInfo.save();
                        LoadingScene_1.default.goto("Game");
                    }, this);
                }
                else {
                    PlayerInfo_1.PlayerInfo.save();
                    LoadingScene_1.default.goto("Game");
                }
            }
            else {
                PlayerInfo_1.PlayerInfo.playinglevel = level;
                PlayerInfo_1.PlayerInfo.save();
                LoadingScene_1.default.goto("Game");
            }
        }
        else {
            // Toast.make("体力不足");
            vm.show("Prefabs/UI/UIGetLabour", function (_) {
                PlayerInfo_1.PlayerInfo.labour--;
                if (PlayerInfo_1.PlayerInfo.isPlayingDaily) {
                    PlayerInfo_1.PlayerInfo.playingDailyLevel = level;
                }
                else {
                    PlayerInfo_1.PlayerInfo.playinglevel = level;
                }
                PlayerInfo_1.PlayerInfo.save();
                LoadingScene_1.default.goto("Game");
            }, false);
        }
        // if(PlayerInfo.isNew)
        //     StatHepler.userAction("(新玩家)进入关卡",PlayerInfo.playinglevel)
    };
    __decorate([
        property(cc.Label)
    ], UIChallengeChapterItem.prototype, "label_chapter", void 0);
    __decorate([
        property(cc.Node)
    ], UIChallengeChapterItem.prototype, "level_node", void 0);
    UIChallengeChapterItem = __decorate([
        ccclass
    ], UIChallengeChapterItem);
    return UIChallengeChapterItem;
}(mvcView_1.default));
exports.default = UIChallengeChapterItem;

cc._RF.pop();