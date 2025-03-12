"use strict";
cc._RF.push(module, 'f7a29efMb9JvpCUBVmsU8ev', 'UIChapterClues');
// Game/Scripts/UI/UIChapterClues.ts

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
var ccUtil_1 = require("../../../framework/utils/ccUtil");
var ChapterlInfo_1 = require("../Common/ChapterlInfo");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var Switcher_1 = require("../../../framework/ui/controller/Switcher");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIChapterClues = /** @class */ (function (_super) {
    __extends(UIChapterClues, _super);
    function UIChapterClues() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bar_chapter = null;
        _this.left_chapter = null;
        _this.right_chapter = null;
        _this.left_chapterNum = null;
        _this.right_chapterNum = null;
        _this.left_name = null;
        _this.right_name = null;
        _this.tip = null;
        _this.right_swtich = null;
        _this.leftData = null;
        _this.rightData = null;
        return _this;
        // update (dt) {}
    }
    UIChapterClues.prototype.onLoad = function () {
        var _this = this;
        this.initData();
        this.registerSwitcher(this.right_swtich, function (_) { return _this.rightSwtich(); });
        // this.registerProgressBar(this.bar_chapter,_=> this.showBar());
        this.registerLabel(this.tip, function (_) { return _this.showTip(); });
        this.registerLabel(this.left_chapterNum, function (_) { return _this.leftData.chapter; });
        this.registerLabel(this.left_name, function (_) { return _this.leftData.title; });
        this.registerSprite(this.left_chapter, function (_) { return "Img/chapter/zj_" + _this.leftData.id; });
        if (this.rightData) {
            this.registerLabel(this.right_chapterNum, function (_) { return _this.rightData.chapter; });
            this.registerLabel(this.right_name, function (_) { return _this.rightData.title; });
            this.registerSprite(this.right_chapter, function (_) { return "Img/chapter/zj_" + _this.rightData.id; });
        }
        // this.render();
    };
    UIChapterClues.prototype.initData = function () {
        var id = PlayerInfo_1.PlayerInfo.getChapter(PlayerInfo_1.PlayerInfo.playinglevel);
        this.leftData = ccUtil_1.default.get(ChapterlInfo_1.ChapterlInfo, id);
        if ((id + 1) > 5) {
            this.rightData = null;
            return;
        }
        this.rightData = ccUtil_1.default.get(ChapterlInfo_1.ChapterlInfo, id + 1);
    };
    UIChapterClues.prototype.showBar = function () {
        var cur = PlayerInfo_1.PlayerInfo.playinglevel;
        var next = PlayerInfo_1.PlayerInfo.getChapter(PlayerInfo_1.PlayerInfo.playinglevel) * 10;
        if (cur == next)
            return 1;
        var sub = next - cur;
        return (10 - sub) / 10;
    };
    UIChapterClues.prototype.showTip = function () {
        var cur = PlayerInfo_1.PlayerInfo.playinglevel;
        var next = PlayerInfo_1.PlayerInfo.getChapter(PlayerInfo_1.PlayerInfo.playinglevel) * 10;
        if (cur == next && this.rightData) {
            return "恭喜你！" + this.rightData.chapter + "已解锁";
        }
        var sub = next - cur;
        return "\u7EE7\u7EED\u6311\u6218" + sub + "\u5173\uFF0C\u89E3\u9501\u4E0B\u4E00\u7AE0";
    };
    UIChapterClues.prototype.rightSwtich = function () {
        var chapter = PlayerInfo_1.PlayerInfo.getChapter(PlayerInfo_1.PlayerInfo.playinglevel) + 1;
        if (chapter > 5) {
            this.tip.string = "更多关卡，即将上线";
            return 1;
        }
        else {
            return 0;
        }
    };
    UIChapterClues.prototype.onEnable = function () {
        this.bar_chapter.progress = this.showBar();
        this.render();
    };
    // onShown() {
    // }
    UIChapterClues.prototype.clic_close = function () {
        vm.hide(this);
    };
    __decorate([
        property(cc.ProgressBar)
    ], UIChapterClues.prototype, "bar_chapter", void 0);
    __decorate([
        property(cc.Sprite)
    ], UIChapterClues.prototype, "left_chapter", void 0);
    __decorate([
        property(cc.Sprite)
    ], UIChapterClues.prototype, "right_chapter", void 0);
    __decorate([
        property(cc.Label)
    ], UIChapterClues.prototype, "left_chapterNum", void 0);
    __decorate([
        property(cc.Label)
    ], UIChapterClues.prototype, "right_chapterNum", void 0);
    __decorate([
        property(cc.Label)
    ], UIChapterClues.prototype, "left_name", void 0);
    __decorate([
        property(cc.Label)
    ], UIChapterClues.prototype, "right_name", void 0);
    __decorate([
        property(cc.Label)
    ], UIChapterClues.prototype, "tip", void 0);
    __decorate([
        property(Switcher_1.default)
    ], UIChapterClues.prototype, "right_swtich", void 0);
    UIChapterClues = __decorate([
        ccclass
    ], UIChapterClues);
    return UIChapterClues;
}(mvcView_1.default));
exports.default = UIChapterClues;

cc._RF.pop();