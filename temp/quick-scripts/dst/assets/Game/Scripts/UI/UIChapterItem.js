
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIChapterItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7f4586+4zJMZ4x7HSDe9hQj', 'UIChapterItem');
// Game/Scripts/UI/UIChapterItem.ts

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
var Switcher_1 = require("../../../framework/ui/controller/Switcher");
var Const_1 = require("../Common/Const");
var ccUtil_1 = require("../../../framework/utils/ccUtil");
var StarInfo_1 = require("../Common/StarInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIChapterItem = /** @class */ (function (_super) {
    __extends(UIChapterItem, _super);
    function UIChapterItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label_chapter = null;
        _this.icon = null;
        _this.level_node = null;
        _this.lock_node = null;
        _this.unlock_node = null;
        _this.lock_label = null;
        _this.star_label = null;
        _this.left = null;
        _this.right = null;
        _this.page = 0;
        return _this;
    }
    UIChapterItem.prototype.onLoad = function () {
        var _this = this;
        this.register(this.label_chapter, function (_) { return _this.showLabel(); });
        this.register(this.icon, function (_) { return _this.showIcon(); });
    };
    UIChapterItem.prototype.onLaterRender = function () {
        var data = this.getData();
        if (PlayerInfo_1.PlayerInfo.star >= ccUtil_1.default.get(StarInfo_1.StarInfo, data.id).demand && (data.id - 1) * 10 < PlayerInfo_1.PlayerInfo.level) {
            this.lock_node.active = false;
            this.unlock_node.active = true;
        }
        else {
            this.lock_node.active = true;
            this.unlock_node.active = false;
            this.lock_label.string = "达到" + ccUtil_1.default.get(StarInfo_1.StarInfo, data.id).demand + "星解锁";
        }
        if ((PlayerInfo_1.PlayerInfo.level - (data.id - 1) * 10) > 5 && PlayerInfo_1.PlayerInfo.level > (data.id - 1) * 10) {
            this.page = 1;
            this.right.active = false;
            this.left.active = true;
        }
        else {
            this.page = 0;
            this.right.active = true;
            this.left.active = false;
        }
        this.refresh_level();
        this.starNum();
    };
    UIChapterItem.prototype.refresh_level = function () {
        var _this = this;
        var data = this.getData();
        if ((data.id - 1) * 10 > PlayerInfo_1.PlayerInfo.level) {
            return;
        }
        var _loop_1 = function (i) {
            var level = ((data.id - 1) * 10) + (this_1.page * 5 + i + 1);
            this_1.onClick(this_1.level_node.children[i], function (_) { return _this.click_Chapter(level); });
            this_1.level_node.children[i].getComponentInChildren(Switcher_1.default).index = PlayerInfo_1.PlayerInfo.level_star[level];
            this_1.level_node.children[i].getComponentInChildren(cc.Label).string = level + "";
            var levelNow_node = this_1.level_node.children[i].getChildByName("dangqian");
            if (level == PlayerInfo_1.PlayerInfo.level) {
                levelNow_node.color = cc.color(235, 113, 0, 255);
            }
            else if (level < PlayerInfo_1.PlayerInfo.level) {
                levelNow_node.color = cc.color(105, 185, 30, 255);
            }
            else {
                levelNow_node.color = cc.Color.GRAY;
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.level_node.children.length; i++) {
            _loop_1(i);
        }
    };
    UIChapterItem.prototype.starNum = function () {
        var data = this.getData();
        var num = 0;
        for (var i = (data.id - 1) * 10 + 1; i <= data.id * 10; i++) {
            num += PlayerInfo_1.PlayerInfo.level_star[i];
        }
        this.star_label.string = num + "/30";
    };
    UIChapterItem.prototype.showIcon = function () {
        var data = this.getData();
        if (PlayerInfo_1.PlayerInfo.getChapter() < data.id) {
            // this.icon.node.color = cc.Color.GRAY;
            return "ImagePart/chapter/jingqingqidai";
        }
        //  else {
        //     this.icon.node.color = cc.Color.WHITE
        // }
        if (Const_1.default.Chapter_Unlock < data.id)
            return "ImagePart/chapter/1";
        return "ImagePart/chapter/" + data.id;
    };
    UIChapterItem.prototype.showLabel = function () {
        var data = this.getData();
        return "第" + data.id + "章";
    };
    UIChapterItem.prototype.click_left = function () {
        if (this.page != 1) {
            return;
        }
        this.page = 0;
        this.right.active = true;
        this.left.active = false;
        this.refresh_level();
    };
    UIChapterItem.prototype.click_right = function () {
        if (this.page != 0) {
            return;
        }
        this.page = 1;
        this.right.active = false;
        this.left.active = true;
        this.refresh_level();
    };
    UIChapterItem.prototype.click_Chapter = function (level) {
        console.log(level);
        var lv = PlayerInfo_1.PlayerInfo.getCurrentLevel();
        if (lv < level) {
            ToastManager_1.Toast.make("未解锁");
            return;
        }
        if (PlayerInfo_1.PlayerInfo.labour > 0) {
            PlayerInfo_1.PlayerInfo.labour--;
            PlayerInfo_1.PlayerInfo.playinglevel = level;
            PlayerInfo_1.PlayerInfo.save();
            LoadingScene_1.default.goto("Game");
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
    };
    __decorate([
        property(cc.Label)
    ], UIChapterItem.prototype, "label_chapter", void 0);
    __decorate([
        property(cc.Sprite)
    ], UIChapterItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Node)
    ], UIChapterItem.prototype, "level_node", void 0);
    __decorate([
        property(cc.Node)
    ], UIChapterItem.prototype, "lock_node", void 0);
    __decorate([
        property(cc.Node)
    ], UIChapterItem.prototype, "unlock_node", void 0);
    __decorate([
        property(cc.Label)
    ], UIChapterItem.prototype, "lock_label", void 0);
    __decorate([
        property(cc.Label)
    ], UIChapterItem.prototype, "star_label", void 0);
    __decorate([
        property(cc.Node)
    ], UIChapterItem.prototype, "left", void 0);
    __decorate([
        property(cc.Node)
    ], UIChapterItem.prototype, "right", void 0);
    UIChapterItem = __decorate([
        ccclass
    ], UIChapterItem);
    return UIChapterItem;
}(mvcView_1.default));
exports.default = UIChapterItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJQ2hhcHRlckl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW9EO0FBQ3BELHdEQUF1RDtBQUN2RCxtRUFBMkQ7QUFDM0QsNERBQXVEO0FBS3ZELHNFQUFpRTtBQUNqRSx5Q0FBb0M7QUFDcEMsMERBQXFEO0FBRXJELCtDQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBTztJQUFsRDtRQUFBLHFFQWlLQztRQS9KRyxtQkFBYSxHQUFhLElBQUksQ0FBQztRQUcvQixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdyQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFVBQUksR0FBVyxDQUFDLENBQUM7O0lBcUlyQixDQUFDO0lBbklHLDhCQUFNLEdBQU47UUFBQSxpQkFHQztRQUZHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBRUQscUNBQWEsR0FBYjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQWtCLENBQUM7UUFDMUMsSUFBSSx1QkFBVSxDQUFDLElBQUksSUFBSSxnQkFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyx1QkFBVSxDQUFDLEtBQUssRUFBRTtZQUNsRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ2xDO2FBQ0k7WUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxnQkFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ2hGO1FBQ0QsSUFBSSxDQUFDLHVCQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksdUJBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUN0RixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDM0I7YUFDSTtZQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdB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USxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDUztJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNTO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ0c7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDSTtJQTFCTCxhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBaUtqQztJQUFELG9CQUFDO0NBaktELEFBaUtDLENBakswQyxpQkFBTyxHQWlLakQ7a0JBaktvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG12Y1ZpZXcgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9tdmNWaWV3XCI7XG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL0NvbW1vbi9CYXNlL1BsYXllckluZm9cIjtcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9Ub2FzdE1hbmFnZXJcIjtcbmltcG9ydCBMb2FkaW5nU2NlbmUgZnJvbSBcIi4uL0NvbW1vbi9CYXNlL0xvYWRpbmdTY2VuZVwiO1xuaW1wb3J0IHsgTGV2ZWxJbmZvIH0gZnJvbSBcIi4uL0NvbW1vbi9MZXZlbEluZm9cIjtcbmltcG9ydCB7IFNldHRpbmdJbmZvIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9TZXR0aW5nSW5mb1wiO1xuaW1wb3J0IERldmljZSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21pc2MvRGV2aWNlXCI7XG5pbXBvcnQgeyBDaGFwdGVybEluZm8gfSBmcm9tIFwiLi4vQ29tbW9uL0NoYXB0ZXJsSW5mb1wiO1xuaW1wb3J0IFN3aXRjaGVyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvY29udHJvbGxlci9Td2l0Y2hlclwiO1xuaW1wb3J0IENvbnN0IGZyb20gXCIuLi9Db21tb24vQ29uc3RcIjtcbmltcG9ydCBjY1V0aWwgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91dGlscy9jY1V0aWxcIjtcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9Vc2VySW5mb1wiO1xuaW1wb3J0IHsgU3RhckluZm8gfSBmcm9tIFwiLi4vQ29tbW9uL1N0YXJJbmZvXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUNoYXB0ZXJJdGVtIGV4dGVuZHMgbXZjVmlldyB7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsX2NoYXB0ZXI6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgaWNvbjogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxldmVsX25vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbG9ja19ub2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHVubG9ja19ub2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsb2NrX2xhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgc3Rhcl9sYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGVmdDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICByaWdodDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwYWdlOiBudW1iZXIgPSAwO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKHRoaXMubGFiZWxfY2hhcHRlciwgXyA9PiB0aGlzLnNob3dMYWJlbCgpKTtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcih0aGlzLmljb24sIF8gPT4gdGhpcy5zaG93SWNvbigpKVxuICAgIH1cblxuICAgIG9uTGF0ZXJSZW5kZXIoKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXREYXRhKCkgYXMgQ2hhcHRlcmxJbmZvO1xuICAgICAgICBpZiAoUGxheWVySW5mby5zdGFyID49IGNjVXRpbC5nZXQoU3RhckluZm8sIGRhdGEuaWQpLmRlbWFuZCAmJiAoZGF0YS5pZCAtIDEpICogMTAgPCBQbGF5ZXJJbmZvLmxldmVsKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2tfbm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudW5sb2NrX25vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9ja19ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnVubG9ja19ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sb2NrX2xhYmVsLnN0cmluZyA9IFwi6L6+5YiwXCIgKyBjY1V0aWwuZ2V0KFN0YXJJbmZvLCBkYXRhLmlkKS5kZW1hbmQgKyBcIuaYn+ino+mUgVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoUGxheWVySW5mby5sZXZlbCAtIChkYXRhLmlkIC0gMSkgKiAxMCkgPiA1ICYmIFBsYXllckluZm8ubGV2ZWwgPiAoZGF0YS5pZCAtIDEpICogMTApIHtcbiAgICAgICAgICAgIHRoaXMucGFnZSA9IDE7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2UgPSAwO1xuICAgICAgICAgICAgdGhpcy5yaWdodC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVmcmVzaF9sZXZlbCgpO1xuICAgICAgICB0aGlzLnN0YXJOdW0oKTtcbiAgICB9XG5cbiAgICByZWZyZXNoX2xldmVsKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpIGFzIENoYXB0ZXJsSW5mbztcbiAgICAgICAgaWYgKChkYXRhLmlkIC0gMSkgKiAxMCA+IFBsYXllckluZm8ubGV2ZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGV2ZWxfbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxldmVsID0gKChkYXRhLmlkIC0gMSkgKiAxMCkgKyAodGhpcy5wYWdlICogNSArIGkgKyAxKTtcbiAgICAgICAgICAgIHRoaXMub25DbGljayh0aGlzLmxldmVsX25vZGUuY2hpbGRyZW5baV0sIF8gPT4gdGhpcy5jbGlja19DaGFwdGVyKGxldmVsKSk7XG4gICAgICAgICAgICB0aGlzLmxldmVsX25vZGUuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihTd2l0Y2hlcikuaW5kZXggPSBQbGF5ZXJJbmZvLmxldmVsX3N0YXJbbGV2ZWxdO1xuICAgICAgICAgICAgdGhpcy5sZXZlbF9ub2RlLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IGxldmVsICsgXCJcIjtcbiAgICAgICAgICAgIGxldCBsZXZlbE5vd19ub2RlID0gdGhpcy5sZXZlbF9ub2RlLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwiZGFuZ3FpYW5cIik7XG4gICAgICAgICAgICBpZiAobGV2ZWwgPT0gUGxheWVySW5mby5sZXZlbCkge1xuICAgICAgICAgICAgICAgIGxldmVsTm93X25vZGUuY29sb3IgPSBjYy5jb2xvcigyMzUsIDExMywgMCwgMjU1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGxldmVsIDwgUGxheWVySW5mby5sZXZlbCkge1xuICAgICAgICAgICAgICAgIGxldmVsTm93X25vZGUuY29sb3IgPSBjYy5jb2xvcigxMDUsIDE4NSwgMzAsIDI1NSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldmVsTm93X25vZGUuY29sb3IgPSBjYy5Db2xvci5HUkFZO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFyTnVtKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpIGFzIENoYXB0ZXJsSW5mbztcbiAgICAgICAgbGV0IG51bSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAoZGF0YS5pZCAtIDEpICogMTAgKyAxOyBpIDw9IGRhdGEuaWQgKiAxMDsgaSsrKSB7XG4gICAgICAgICAgICBudW0gKz0gUGxheWVySW5mby5sZXZlbF9zdGFyW2ldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3Rhcl9sYWJlbC5zdHJpbmcgPSBudW0gKyBcIi8zMFwiO1xuICAgIH1cblxuICAgIHNob3dJY29uKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpIGFzIENoYXB0ZXJsSW5mbztcbiAgICAgICAgaWYgKFBsYXllckluZm8uZ2V0Q2hhcHRlcigpIDwgZGF0YS5pZCkge1xuICAgICAgICAgICAgLy8gdGhpcy5pY29uLm5vZGUuY29sb3IgPSBjYy5Db2xvci5HUkFZO1xuICAgICAgICAgICAgcmV0dXJuIFwiSW1hZ2VQYXJ0L2NoYXB0ZXIvamluZ3FpbmdxaWRhaVwiO1xuICAgICAgICB9XG4gICAgICAgIC8vICBlbHNlIHtcbiAgICAgICAgLy8gICAgIHRoaXMuaWNvbi5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEVcbiAgICAgICAgLy8gfVxuICAgICAgICBpZiAoQ29uc3QuQ2hhcHRlcl9VbmxvY2sgPCBkYXRhLmlkKSByZXR1cm4gXCJJbWFnZVBhcnQvY2hhcHRlci8xXCI7XG5cbiAgICAgICAgcmV0dXJuIFwiSW1hZ2VQYXJ0L2NoYXB0ZXIvXCIgKyBkYXRhLmlkO1xuICAgIH1cblxuICAgIHNob3dMYWJlbCgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldERhdGEoKSBhcyBDaGFwdGVybEluZm87XG4gICAgICAgIHJldHVybiBcIuesrFwiICsgZGF0YS5pZCArIFwi56ugXCI7XG4gICAgfVxuXG4gICAgY2xpY2tfbGVmdCgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFnZSAhPSAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYWdlID0gMDtcbiAgICAgICAgdGhpcy5yaWdodC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxlZnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVmcmVzaF9sZXZlbCgpO1xuICAgIH1cblxuICAgIGNsaWNrX3JpZ2h0KCkge1xuICAgICAgICBpZiAodGhpcy5wYWdlICE9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhZ2UgPSAxO1xuICAgICAgICB0aGlzLnJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxlZnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZWZyZXNoX2xldmVsKCk7XG4gICAgfVxuXG4gICAgY2xpY2tfQ2hhcHRlcihsZXZlbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhsZXZlbClcblxuICAgICAgICBsZXQgbHYgPSBQbGF5ZXJJbmZvLmdldEN1cnJlbnRMZXZlbCgpO1xuICAgICAgICBpZiAobHYgPCBsZXZlbCkge1xuICAgICAgICAgICAgVG9hc3QubWFrZShcIuacquino+mUgVwiKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLmxhYm91ciA+IDApIHtcbiAgICAgICAgICAgIFBsYXllckluZm8ubGFib3VyLS07XG4gICAgICAgICAgICBQbGF5ZXJJbmZvLnBsYXlpbmdsZXZlbCA9IGxldmVsO1xuICAgICAgICAgICAgUGxheWVySW5mby5zYXZlKCk7XG4gICAgICAgICAgICBMb2FkaW5nU2NlbmUuZ290byhcIkdhbWVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBUb2FzdC5tYWtlKFwi5L2T5Yqb5LiN6LazXCIpO1xuICAgICAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlHZXRMYWJvdXJcIiwgXyA9PiB7XG4gICAgICAgICAgICAgICAgUGxheWVySW5mby5sYWJvdXItLTtcbiAgICAgICAgICAgICAgICBpZiAoUGxheWVySW5mby5pc1BsYXlpbmdEYWlseSkge1xuICAgICAgICAgICAgICAgICAgICBQbGF5ZXJJbmZvLnBsYXlpbmdEYWlseUxldmVsID0gbGV2ZWw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgUGxheWVySW5mby5wbGF5aW5nbGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUGxheWVySW5mby5zYXZlKCk7XG4gICAgICAgICAgICAgICAgTG9hZGluZ1NjZW5lLmdvdG8oXCJHYW1lXCIpO1xuICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19