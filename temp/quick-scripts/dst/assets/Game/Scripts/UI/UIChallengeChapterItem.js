
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIChallengeChapterItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJQ2hhbGxlbmdlQ2hhcHRlckl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW9EO0FBQ3BELHdEQUF1RDtBQUN2RCxtRUFBMkQ7QUFDM0QsNERBQXVEO0FBQ3ZELHNGQUFpRjtBQUNqRixrRUFBNkQ7QUFDN0QsMkRBQTJDO0FBRXJDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9ELDBDQUFPO0lBQTNEO1FBQUEscUVBcUhDO1FBbkhHLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBRy9CLGdCQUFVLEdBQVksSUFBSSxDQUFDOztJQWdIL0IsQ0FBQztJQTlHRywwQkFBMEI7SUFFMUIsdUNBQU0sR0FBTjtRQUFBLGlCQUVDO1FBREcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsRUFBRSxFQUFoQixDQUFnQixDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELDhDQUFhLEdBQWI7UUFDSSxxQkFBcUI7UUFDckIseUJBQXlCO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixJQUFJO0lBQ1IsQ0FBQztJQUVELDhDQUFhLEdBQWI7UUFBQSxpQkE4QkM7UUE3QkcsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBWSxDQUFDO1FBQ3BDLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQ0FDcEMsQ0FBQztZQUNOLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsd0JBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFD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LENBQUM7Z0JBQ2xCLHNCQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlCLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNiO1FBRUQsdUJBQXVCO1FBQ3ZCLGlFQUFpRTtJQUNyRSxDQUFDO0lBbEhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aUVBQ1k7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4REFDUztJQUxWLHNCQUFzQjtRQUQxQyxPQUFPO09BQ2Esc0JBQXNCLENBcUgxQztJQUFELDZCQUFDO0NBckhELEFBcUhDLENBckhtRCxpQkFBTyxHQXFIMUQ7a0JBckhvQixzQkFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXZjVmlldyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL212Y1ZpZXdcIjtcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi4vQ29tbW9uL0Jhc2UvUGxheWVySW5mb1wiO1xuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL1RvYXN0TWFuYWdlclwiO1xuaW1wb3J0IExvYWRpbmdTY2VuZSBmcm9tIFwiLi4vQ29tbW9uL0Jhc2UvTG9hZGluZ1NjZW5lXCI7XG5pbXBvcnQgV2Vha05ldEdhbWUgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9XZWFrTmV0R2FtZVwiO1xuaW1wb3J0IFBsYXRmb3JtIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL1BsYXRmb3JtXCI7XG5pbXBvcnQgeyBST1cgfSBmcm9tIFwiLi9VSUNoYWxsZW5nZUNoYXB0ZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQ2hhbGxlbmdlQ2hhcHRlckl0ZW0gZXh0ZW5kcyBtdmNWaWV3IHtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxfY2hhcHRlcjogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGV2ZWxfbm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAvLyBfaW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKHRoaXMubGFiZWxfY2hhcHRlciwgXyA9PiB0aGlzLnNob3dMYWJlbCgpKTtcbiAgICB9XG5cbiAgICBvbkxhdGVyUmVuZGVyKCkge1xuICAgICAgICAvLyBpZiAoIXRoaXMuX2luaXQpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuX2luaXQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoX2xldmVsKCk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICByZWZyZXNoX2xldmVsKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpIGFzIG51bWJlcjtcbiAgICAgICAgbGV0IG1heExldmVsID0gY3N2LmRhaWx5X2xldmVsLnZhbHVlcy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZXZlbF9ub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbGV2ZWwgPSAoKGRhdGEgLSAxKSAqIFJPVykgKyAoaSArIDEpO1xuICAgICAgICAgICAgdGhpcy5vbkNsaWNrKHRoaXMubGV2ZWxfbm9kZS5jaGlsZHJlbltpXSwgXyA9PiB0aGlzLmNsaWNrX3N0YXJ0R2FtZShsZXZlbCkpO1xuXG4gICAgICAgICAgICBsZXQgbGV2ZWxOb3dfbm9kZSA9IHRoaXMubGV2ZWxfbm9kZS5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcImRhbmdxaWFuXCIpO1xuXG4gICAgICAgICAgICBsZXQgdDFfbm9kZSA9IHRoaXMubGV2ZWxfbm9kZS5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInQxXCIpO1xuICAgICAgICAgICAgdDFfbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICgoZGF0YSAtIDEpICogNSArIGkgKyAxKSArIFwiXCI7XG5cbiAgICAgICAgICAgIGxldCB1bmxvY2tfbm9kZSA9IHRoaXMubGV2ZWxfbm9kZS5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcIndlaWppc3VvXCIpO1xuICAgICAgICAgICAgaWYgKGxldmVsID4gUGxheWVySW5mby5kYWlseWxldmVsKSB7XG4gICAgICAgICAgICAgICAgdW5sb2NrX25vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gNCAmJiAoUGxheWVySW5mby5jaGFsbGVuZ2VfZ2lmdC5pbmRleE9mKGRhdGEpID09IC0xKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsX25vZGUuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJrZWxpbmdxdVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsX25vZGUuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJsaWJhb1wiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2xpY2sodGhpcy5sZXZlbF9ub2RlLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwibGliYW9cIiksIF8gPT4gdGhpcy5jbGlja19naWZ0KGRhdGEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaSA9PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxfbm9kZS5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcImxpYmFvXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsX25vZGUuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJrZWxpbmdxdVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdW5sb2NrX25vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubGV2ZWxfbm9kZS5jaGlsZHJlbltpXS5vcGFjaXR5ID0gbWF4TGV2ZWwgPCBsZXZlbCA/IDAgOiAyNTU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93TGFiZWwoKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXREYXRhKCkgYXMgbnVtYmVyO1xuICAgICAgICByZXR1cm4gYOmYtuautSR7ZGF0YX1gO1xuICAgIH1cblxuICAgIGNsaWNrX2dpZnQoZGF0YSkge1xuICAgICAgICB0aGlzLmxldmVsX25vZGUuY2hpbGRyZW5bNF0uZ2V0Q2hpbGRCeU5hbWUoXCJsaWJhb1wiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sZXZlbF9ub2RlLmNoaWxkcmVuWzRdLmdldENoaWxkQnlOYW1lKFwia2VsaW5ncXVcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJR2V0R2lmdFwiLCBkYXRhKTtcbiAgICB9XG5cbiAgICBjbGlja19zdGFydEdhbWUobGV2ZWwpIHtcbiAgICAgICAgUGxheWVySW5mby5pc1BsYXlpbmdEYWlseSA9IHRydWU7XG4gICAgICAgIGlmIChsZXZlbCA+IFBsYXllckluZm8uZGFpbHlsZXZlbCkge1xuICAgICAgICAgICAgVG9hc3QubWFrZShcIuacquino+mUgVwiKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLmxhYm91ciA+IDApIHtcbiAgICAgICAgICAgIFBsYXllckluZm8ubGFib3VyLS07XG4gICAgICAgICAgICBpZiAoUGxheWVySW5mby5pc1BsYXlpbmdEYWlseSkge1xuICAgICAgICAgICAgICAgIFBsYXllckluZm8ucGxheWluZ0RhaWx5TGV2ZWwgPSBsZXZlbDtcblxuICAgICAgICAgICAgICAgIGlmICgoY3N2LkNvbmZpZy5DaGFsbGVuZ2VfTGV2ZWxfU2hvd19BRCA9PSBQbGF5ZXJJbmZvLnBsYXlpbmdEYWlseUxldmVsKSB8fCAoKChQbGF5ZXJJbmZvLnBsYXlpbmdEYWlseUxldmVsIC0gY3N2LkNvbmZpZy5DaGFsbGVuZ2VfTGV2ZWxfU2hvd19BRCkgJSBjc3YuQ29uZmlnLkNoYWxsZW5nZV9MZXZlbF9TaG93X0FEX0ludGVydmFsKSA9PSAwKSAmJiAoUGxheWVySW5mby5wbGF5aW5nRGFpbHlMZXZlbCA+IGNzdi5Db25maWcuQ2hhbGxlbmdlX0xldmVsX1Nob3dfQUQpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgV2Vha05ldEdhbWUuZG9DaG9pY2UoXCJTT1ZfU2hvd0FEXCIsIF8gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgUGxheWVySW5mby5zYXZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nU2NlbmUuZ290byhcIkdhbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoY3N2LkNvbmZpZy5DaGFsbGVuZ2VfTGV2ZWxfU2hvd19BRF9Ta2lwID09IFBsYXllckluZm8ucGxheWluZ0RhaWx5TGV2ZWwpIHx8ICgoKFBsYXllckluZm8ucGxheWluZ0RhaWx5TGV2ZWwgLSBjc3YuQ29uZmlnLkNoYWxsZW5nZV9MZXZlbF9TaG93X0FEX1NraXApICUgY3N2LkNvbmZpZy5DaGFsbGVuZ2VfTGV2ZWxfU2hvd19BRF9Ta2lwX0ludGVydmFsKSA9PSAwKSAmJiAoUGxheWVySW5mby5wbGF5aW5nRGFpbHlMZXZlbCA+IGNzdi5Db25maWcuQ2hhbGxlbmdlX0xldmVsX1Nob3dfQURfU2tpcCkpIHtcblxuICAgICAgICAgICAgICAgICAgICBQbGF0Zm9ybS5zaG93SW50ZXJzdGl0aWFsKF8gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgUGxheWVySW5mby5zYXZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nU2NlbmUuZ290byhcIkdhbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBQbGF5ZXJJbmZvLnNhdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgTG9hZGluZ1NjZW5lLmdvdG8oXCJHYW1lXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgUGxheWVySW5mby5wbGF5aW5nbGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgICAgICAgICBQbGF5ZXJJbmZvLnNhdmUoKTtcbiAgICAgICAgICAgICAgICBMb2FkaW5nU2NlbmUuZ290byhcIkdhbWVcIik7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVG9hc3QubWFrZShcIuS9k+WKm+S4jei2s1wiKTtcbiAgICAgICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJR2V0TGFib3VyXCIsIF8gPT4ge1xuICAgICAgICAgICAgICAgIFBsYXllckluZm8ubGFib3VyLS07XG4gICAgICAgICAgICAgICAgaWYgKFBsYXllckluZm8uaXNQbGF5aW5nRGFpbHkpIHtcbiAgICAgICAgICAgICAgICAgICAgUGxheWVySW5mby5wbGF5aW5nRGFpbHlMZXZlbCA9IGxldmVsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFBsYXllckluZm8ucGxheWluZ2xldmVsID0gbGV2ZWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFBsYXllckluZm8uc2F2ZSgpO1xuICAgICAgICAgICAgICAgIExvYWRpbmdTY2VuZS5nb3RvKFwiR2FtZVwiKTtcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmKFBsYXllckluZm8uaXNOZXcpXG4gICAgICAgIC8vICAgICBTdGF0SGVwbGVyLnVzZXJBY3Rpb24oXCIo5paw546p5a62Kei/m+WFpeWFs+WNoVwiLFBsYXllckluZm8ucGxheWluZ2xldmVsKVxuICAgIH1cbn1cbiJdfQ==