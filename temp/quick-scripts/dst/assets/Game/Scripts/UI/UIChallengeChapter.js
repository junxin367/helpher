
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIChallengeChapter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJQ2hhbGxlbmdlQ2hhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseURBQW9EO0FBQ3BELHdEQUF1RDtBQUN2RCxtRUFBOEQ7QUFFeEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFL0IsUUFBQSxHQUFHLEdBQVcsQ0FBQyxDQUFDO0FBRzdCO0lBQWdELHNDQUFPO0lBQXZEO1FBQUEscUVBeUNDO1FBdENHLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFHekIsZUFBUyxHQUFrQixJQUFJLENBQUM7UUFFaEMsV0FBSyxHQUFhLEVBQUUsQ0FBQzs7UUFnQ3JCLGlCQUFpQjtJQUNyQixDQUFDO0lBL0JHLG1DQUFNLEdBQU47UUFBQSxpQkFFQztRQURHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDSSxDQUFDLHVCQUFVLENBQUMsaUJBQWlCLElBQUksQ0FBQyx1QkFBVSxDQUFDLGlCQUFpQixHQUFHLHVCQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFeEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsV0FBRyxDQUFDLENBQUM7UUFDekQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLEdBQUcsdUJBQVUsQ0FBQyxpQkFBaUIsR0FBRyxXQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUVELGtDQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsdUNBQVUsR0FBVjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGdDQUFzQixDQUFDLENBQUM7UUFDM0UsSUFBSSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsdUJBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzNELDhCQUE4QjtJQUNsQyxDQUFDO0lBRUQsdUNBQVUsR0FBVjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQW5DRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNLO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7eURBQ1E7SUFOZixrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQXlDdEM7SUFBRCx5QkFBQztDQXpDRCxBQXlDQyxDQXpDK0MsaUJBQU8sR0F5Q3REO2tCQXpDb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgbXZjVmlldyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL212Y1ZpZXdcIjtcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi4vQ29tbW9uL0Jhc2UvUGxheWVySW5mb1wiO1xuaW1wb3J0IFVJQ2hhbGxlbmdlQ2hhcHRlckl0ZW0gZnJvbSBcIi4vVUlDaGFsbGVuZ2VDaGFwdGVySXRlbVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5leHBvcnQgY29uc3QgUk9XOiBudW1iZXIgPSA1O1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlDaGFsbGVuZ2VDaGFwdGVyIGV4dGVuZHMgbXZjVmlldyB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGF5b3V0KVxuICAgIGxheW91dDogY2MuTGF5b3V0ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxuICAgIHNjb3JlVmlldzogY2MuU2Nyb2xsVmlldyA9IG51bGw7XG5cbiAgICBkYXRhczogbnVtYmVyW10gPSBbXTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcih0aGlzLmxheW91dCwgXyA9PiB0aGlzLmRhdGFzKTtcbiAgICB9XG5cbiAgICBvblNob3coKSB7XG4gICAgICAgICFQbGF5ZXJJbmZvLnBsYXlpbmdEYWlseUxldmVsICYmIChQbGF5ZXJJbmZvLnBsYXlpbmdEYWlseUxldmVsID0gUGxheWVySW5mby5kYWlseWxldmVsKTtcblxuICAgICAgICB0aGlzLmRhdGFzLnNwbGljZSgwKTtcbiAgICAgICAgbGV0IG1heCA9IE1hdGguY2VpbChjc3YuZGFpbHlfbGV2ZWwudmFsdWVzLmxlbmd0aCAvIFJPVyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG1heDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFzLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy5zY29yZVZpZXcuc2Nyb2xsVG9QZXJjZW50VmVydGljYWwoKDEgLSBQbGF5ZXJJbmZvLnBsYXlpbmdEYWlseUxldmVsIC8gUk9XIC8gbWF4KSwgMC4yKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIGNsaWNrX3BsYXkoKSB7XG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5sYXlvdXQubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKFVJQ2hhbGxlbmdlQ2hhcHRlckl0ZW0pO1xuICAgICAgICBpdGVtICYmIGl0ZW0uY2xpY2tfc3RhcnRHYW1lKFBsYXllckluZm8ucGxheWluZ0RhaWx5TGV2ZWwpO1xuICAgICAgICAvLyBNYWluLmluc3RhbmNlLmNsaWNrX3BsYXkoKTtcbiAgICB9XG5cbiAgICBjbGljX2Nsb3NlKCkge1xuICAgICAgICB2bS5oaWRlKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=