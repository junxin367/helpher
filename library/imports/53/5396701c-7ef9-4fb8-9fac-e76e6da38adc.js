"use strict";
cc._RF.push(module, '53967AcfvlPuJ+s525to4rc', 'UIChallengeChapter');
// Game/Scripts/UI/UIChallengeChapter.ts

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
exports.ROW = void 0;
var mvcView_1 = require("../../../framework/ui/mvcView");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var UIChallengeChapterItem_1 = require("./UIChallengeChapterItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
exports.ROW = 5;
var UIChallengeChapter = /** @class */ (function (_super) {
    __extends(UIChallengeChapter, _super);
    function UIChallengeChapter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layout = null;
        _this.scoreView = null;
        _this.datas = [];
        return _this;
        // update (dt) {}
    }
    UIChallengeChapter.prototype.onLoad = function () {
        var _this = this;
        this.register(this.layout, function (_) { return _this.datas; });
    };
    UIChallengeChapter.prototype.onShow = function () {
        !PlayerInfo_1.PlayerInfo.playingDailyLevel && (PlayerInfo_1.PlayerInfo.playingDailyLevel = PlayerInfo_1.PlayerInfo.dailylevel);
        this.datas.splice(0);
        var max = Math.ceil(csv.daily_level.values.length / exports.ROW);
        for (var i = 1; i <= max; i++) {
            this.datas.push(i);
        }
        this.render();
        this.scoreView.scrollToPercentVertical((1 - PlayerInfo_1.PlayerInfo.playingDailyLevel / exports.ROW / max), 0.2);
    };
    UIChallengeChapter.prototype.start = function () {
    };
    UIChallengeChapter.prototype.click_play = function () {
        var item = this.layout.node.getComponentInChildren(UIChallengeChapterItem_1.default);
        item && item.click_startGame(PlayerInfo_1.PlayerInfo.playingDailyLevel);
        // Main.instance.click_play();
    };
    UIChallengeChapter.prototype.clic_close = function () {
        vm.hide(this);
    };
    __decorate([
        property(cc.Layout)
    ], UIChallengeChapter.prototype, "layout", void 0);
    __decorate([
        property(cc.ScrollView)
    ], UIChallengeChapter.prototype, "scoreView", void 0);
    UIChallengeChapter = __decorate([
        ccclass
    ], UIChallengeChapter);
    return UIChallengeChapter;
}(mvcView_1.default));
exports.default = UIChallengeChapter;

cc._RF.pop();