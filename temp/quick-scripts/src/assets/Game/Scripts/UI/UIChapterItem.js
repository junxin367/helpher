"use strict";
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