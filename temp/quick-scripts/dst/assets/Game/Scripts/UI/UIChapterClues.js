
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIChapterClues.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJQ2hhcHRlckNsdWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHlEQUFvRDtBQUVwRCwwREFBcUQ7QUFHckQsdURBQXNEO0FBQ3RELHdEQUF1RDtBQUN2RCxzRUFBaUU7QUFFM0QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQU87SUFBbkQ7UUFBQSxxRUE4R0M7UUE1R0csaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBR25DLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRy9CLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBR2hDLHFCQUFlLEdBQWEsSUFBSSxDQUFDO1FBR2pDLHNCQUFnQixHQUFhLElBQUksQ0FBQztRQUdsQyxlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRzNCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLFNBQUcsR0FBYSxJQUFJLENBQUM7UUFFckIsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFFOUIsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFDOUIsZUFBUyxHQUFpQixJQUFJLENBQUM7O1FBaUYvQixpQkFBaUI7SUFDckIsQ0FBQztJQS9FRywrQkFBTSxHQUFOO1FBQUEsaUJBa0JDO1FBakJHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBRWxFLGlFQUFpRTtRQUVqRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxFQUFFLEVBQWQsQ0FBYyxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQXJCLENBQXFCLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFwQyxDQUFvQyxDQUFDLENBQUM7UUFFbEYsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQXRCLENBQXNCLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFyQyxDQUFxQyxDQUFDLENBQUM7U0FDdkY7UUFDRCxpQkFBaUI7SUFDckIsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxJQUFJLEVBQUUsR0FBRyx1QkFBVSxDQUFDLFVBQVUsQ0FBQyx1QkFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsMkJBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsMkJBQVksRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELGdDQUFPLEdBQVA7UUFDSSxJQUFJLEdBQUcsR0FBRyx1QkFBVSxDQUFDLFlBQVksQ0FBQztRQUNsQyxJQUFJLElBQUksR0FBRyx1QkFBVSxDQUFDLFVBQVUsQ0FBQyx1QkFBVSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMvRCxJQUFJLEdBQUcsSUFBSSxJQUFJO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDMUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNyQixPQUFPLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUUzQixDQUFDO0lBRUQsZ0NBQU8sR0FBUDtRQUNJLElBQUksR0FBRyxHQUFHLHVCQUFVLENBQUMsWUFBWSxDQUFDO1FBQ2xDLElBQUksSUFBSSxHQUFHLHVCQUFVLENBQUMsVUFBVSxDQUFDLHVCQUFVLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQy9ELElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQy9CLE9BQU8sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUNsRDtRQUNELElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7UUFFckIsT0FBTyw2QkFBTyxHQUFHLCtDQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxJQUFJLE9BQU8sR0FBRyx1QkFBVSxDQUFDLFVBQVUsQ0FBQyx1QkFBVSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqRSxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUU7WUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7WUFDOUIsT0FBTyxDQUFDLENBQUM7U0FDWjthQUFNO1lBRUgsT0FBTyxDQUFDLENBQUM7U0FDWjtJQUNMLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsY0FBYztJQUdkLElBQUk7SUFHSixtQ0FBVSxHQUFWO1FBR0ksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBekdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7dURBQ1U7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3REFDVztJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lEQUNZO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkRBQ2M7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0REFDZTtJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNRO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ1M7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDRTtJQUVyQjtRQURDLFFBQVEsQ0FBQyxrQkFBUSxDQUFDO3dEQUNXO0lBekJiLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0E4R2xDO0lBQUQscUJBQUM7Q0E5R0QsQUE4R0MsQ0E5RzJDLGlCQUFPLEdBOEdsRDtrQkE5R29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IG12Y1ZpZXcgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9tdmNWaWV3XCI7XG5pbXBvcnQgeyBMZXZlbEluZm8gfSBmcm9tIFwiLi4vQ29tbW9uL0xldmVsSW5mb1wiO1xuaW1wb3J0IGNjVXRpbCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3V0aWxzL2NjVXRpbFwiO1xuaW1wb3J0IHsgU2V0dGluZ0luZm8gfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi93ZWFrX25ldF9nYW1lL1NldHRpbmdJbmZvXCI7XG5pbXBvcnQgRGV2aWNlIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWlzYy9EZXZpY2VcIjtcbmltcG9ydCB7IENoYXB0ZXJsSW5mbyB9IGZyb20gXCIuLi9Db21tb24vQ2hhcHRlcmxJbmZvXCI7XG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL0NvbW1vbi9CYXNlL1BsYXllckluZm9cIjtcbmltcG9ydCBTd2l0Y2hlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL2NvbnRyb2xsZXIvU3dpdGNoZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQ2hhcHRlckNsdWVzIGV4dGVuZHMgbXZjVmlldyB7XG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxuICAgIGJhcl9jaGFwdGVyOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGxlZnRfY2hhcHRlcjogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgcmlnaHRfY2hhcHRlcjogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsZWZ0X2NoYXB0ZXJOdW06IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICByaWdodF9jaGFwdGVyTnVtOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGVmdF9uYW1lOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcmlnaHRfbmFtZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHRpcDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShTd2l0Y2hlcilcbiAgICByaWdodF9zd3RpY2g6IFN3aXRjaGVyID0gbnVsbDtcblxuICAgIGxlZnREYXRhOiBDaGFwdGVybEluZm8gPSBudWxsO1xuICAgIHJpZ2h0RGF0YTogQ2hhcHRlcmxJbmZvID0gbnVsbDtcblxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmluaXREYXRhKCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJTd2l0Y2hlcih0aGlzLnJpZ2h0X3N3dGljaCwgXyA9PiB0aGlzLnJpZ2h0U3d0aWNoKCkpO1xuXG4gICAgICAgIC8vIHRoaXMucmVnaXN0ZXJQcm9ncmVzc0Jhcih0aGlzLmJhcl9jaGFwdGVyLF89PiB0aGlzLnNob3dCYXIoKSk7XG5cbiAgICAgICAgdGhpcy5yZWdpc3RlckxhYmVsKHRoaXMudGlwLCBfID0+IHRoaXMuc2hvd1RpcCgpKTtcblxuICAgICAgICB0aGlzLnJlZ2lzdGVyTGFiZWwodGhpcy5sZWZ0X2NoYXB0ZXJOdW0sIF8gPT4gdGhpcy5sZWZ0RGF0YS5jaGFwdGVyKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckxhYmVsKHRoaXMubGVmdF9uYW1lLCBfID0+IHRoaXMubGVmdERhdGEudGl0bGUpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyU3ByaXRlKHRoaXMubGVmdF9jaGFwdGVyLCBfID0+IFwiSW1nL2NoYXB0ZXIvempfXCIgKyB0aGlzLmxlZnREYXRhLmlkKTtcblxuICAgICAgICBpZiAodGhpcy5yaWdodERhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJMYWJlbCh0aGlzLnJpZ2h0X2NoYXB0ZXJOdW0sIF8gPT4gdGhpcy5yaWdodERhdGEuY2hhcHRlcik7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTGFiZWwodGhpcy5yaWdodF9uYW1lLCBfID0+IHRoaXMucmlnaHREYXRhLnRpdGxlKTtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJTcHJpdGUodGhpcy5yaWdodF9jaGFwdGVyLCBfID0+IFwiSW1nL2NoYXB0ZXIvempfXCIgKyB0aGlzLnJpZ2h0RGF0YS5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBpbml0RGF0YSgpIHtcbiAgICAgICAgbGV0IGlkID0gUGxheWVySW5mby5nZXRDaGFwdGVyKFBsYXllckluZm8ucGxheWluZ2xldmVsKTtcbiAgICAgICAgdGhpcy5sZWZ0RGF0YSA9IGNjVXRpbC5nZXQoQ2hhcHRlcmxJbmZvLCBpZCk7XG4gICAgICAgIGlmICgoaWQgKyAxKSA+IDUpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHREYXRhID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJpZ2h0RGF0YSA9IGNjVXRpbC5nZXQoQ2hhcHRlcmxJbmZvLCBpZCArIDEpO1xuICAgIH1cblxuICAgIHNob3dCYXIoKSB7XG4gICAgICAgIGxldCBjdXIgPSBQbGF5ZXJJbmZvLnBsYXlpbmdsZXZlbDtcbiAgICAgICAgbGV0IG5leHQgPSBQbGF5ZXJJbmZvLmdldENoYXB0ZXIoUGxheWVySW5mby5wbGF5aW5nbGV2ZWwpICogMTA7XG4gICAgICAgIGlmIChjdXIgPT0gbmV4dCkgcmV0dXJuIDE7XG4gICAgICAgIGxldCBzdWIgPSBuZXh0IC0gY3VyO1xuICAgICAgICByZXR1cm4gKDEwIC0gc3ViKSAvIDEwO1xuXG4gICAgfVxuXG4gICAgc2hvd1RpcCgpIHtcbiAgICAgICAgbGV0IGN1ciA9IFBsYXllckluZm8ucGxheWluZ2xldmVsO1xuICAgICAgICBsZXQgbmV4dCA9IFBsYXllckluZm8uZ2V0Q2hhcHRlcihQbGF5ZXJJbmZvLnBsYXlpbmdsZXZlbCkgKiAxMDtcbiAgICAgICAgaWYgKGN1ciA9PSBuZXh0ICYmIHRoaXMucmlnaHREYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gXCLmga3llpzkvaDvvIFcIiArIHRoaXMucmlnaHREYXRhLmNoYXB0ZXIgKyBcIuW3suino+mUgVwiO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzdWIgPSBuZXh0IC0gY3VyO1xuXG4gICAgICAgIHJldHVybiBg57un57ut5oyR5oiYJHtzdWJ95YWz77yM6Kej6ZSB5LiL5LiA56ugYDtcbiAgICB9XG5cbiAgICByaWdodFN3dGljaCgpIHtcbiAgICAgICAgbGV0IGNoYXB0ZXIgPSBQbGF5ZXJJbmZvLmdldENoYXB0ZXIoUGxheWVySW5mby5wbGF5aW5nbGV2ZWwpICsgMTtcbiAgICAgICAgaWYgKGNoYXB0ZXIgPiA1KSB7XG4gICAgICAgICAgICB0aGlzLnRpcC5zdHJpbmcgPSBcIuabtOWkmuWFs+WNoe+8jOWNs+WwhuS4iue6v1wiO1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuYmFyX2NoYXB0ZXIucHJvZ3Jlc3MgPSB0aGlzLnNob3dCYXIoKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICAvLyBvblNob3duKCkge1xuXG5cbiAgICAvLyB9XG5cblxuICAgIGNsaWNfY2xvc2UoKSB7XG5cblxuICAgICAgICB2bS5oaWRlKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=