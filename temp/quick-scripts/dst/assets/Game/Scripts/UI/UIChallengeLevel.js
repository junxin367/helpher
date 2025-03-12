
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIChallengeLevel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3c4fcd3UwRNk54DwAHrsrG6', 'UIChallengeLevel');
// Game/Scripts/UI/UIChallengeLevel.ts

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
var DailyLevelInfo_1 = require("../Common/DailyLevelInfo");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIChallengeLevel = /** @class */ (function (_super) {
    __extends(UIChallengeLevel, _super);
    function UIChallengeLevel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pageview = null;
        _this.layout = null;
        _this.num = 0;
        return _this;
        // update (dt) {}
    }
    UIChallengeLevel.prototype.onLoad = function () {
    };
    UIChallengeLevel.prototype.onShow = function () {
        var _this = this;
        var id = 0;
        var datas = [[]];
        csv.daily_level.values.map(function (e) {
            if (PlayerInfo_1.PlayerInfo.isGreaterDate(e.day)) {
                if (_this.num >= 20) {
                    id += 1;
                    _this.num = 0;
                    datas.push([]);
                }
                _this.num += 1;
                var data = ccUtil_1.default.get(DailyLevelInfo_1.DailyLevelInfo, e.id);
                datas[id].push(data);
            }
        });
        var _loop_1 = function (i) {
            var item = cc.instantiate(this_1.layout);
            item.active = true;
            this_1.pageview.addPage(item);
            this_1.register(item.getComponent(cc.Layout), function (_) { return datas[i]; });
        };
        var this_1 = this;
        for (var i = 0; i < datas.length; i++) {
            _loop_1(i);
        }
        this.pageview.setCurrentPageIndex(Math.floor(PlayerInfo_1.PlayerInfo.dailylevel / 20));
        this.render();
        if (PlayerInfo_1.PlayerInfo.isInGuide && !PlayerInfo_1.PlayerInfo.is_guide_15) {
            PlayerInfo_1.PlayerInfo.isInGuide = false;
            PlayerInfo_1.PlayerInfo.is_guide_15 = true;
            vm.show("Prefabs/UI/UIGetPresent");
        }
    };
    UIChallengeLevel.prototype.start = function () {
    };
    UIChallengeLevel.prototype.clic_close = function () {
        vm.hide(this);
    };
    UIChallengeLevel.prototype.onHidden = function () {
        this.pageview.removeAllPages();
        this.num = 0;
    };
    __decorate([
        property(cc.PageView)
    ], UIChallengeLevel.prototype, "pageview", void 0);
    __decorate([
        property(cc.Node)
    ], UIChallengeLevel.prototype, "layout", void 0);
    UIChallengeLevel = __decorate([
        ccclass
    ], UIChallengeLevel);
    return UIChallengeLevel;
}(mvcView_1.default));
exports.default = UIChallengeLevel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJQ2hhbGxlbmdlTGV2ZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEseURBQW9EO0FBRXBELDBEQUFxRDtBQUdyRCwyREFBMEQ7QUFDMUQsd0RBQXVEO0FBS2pELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFPO0lBQXJEO1FBQUEscUVBa0VDO1FBL0RHLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBRzdCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsU0FBRyxHQUFXLENBQUMsQ0FBQzs7UUF5RGhCLGlCQUFpQjtJQUNyQixDQUFDO0lBeERHLGlDQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQsaUNBQU0sR0FBTjtRQUFBLGlCQWtDQztRQWpDRyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLEtBQUssR0FBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO1lBQ3hCLElBQUksdUJBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQyxJQUFJLEtBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFO29CQUNoQixFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNSLEtBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUNiLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ2xCO2dCQUNELEtBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUNkLElBQUksSUFBSSxHQUFHLGdCQUFNLENBQUMsR0FBRyxDQUFDLCtCQUFjLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM1QyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7Z0NBRU0sQ0FBQztZQUNOLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBSyxNQUFNLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixPQUFLLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUIsT0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQVIsQ0FBUSxDQUFDLENBQUM7OztRQUovRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7b0JBQTVCLENBQUM7U0FLVDtRQUdELElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyx1QkFBVSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVkLElBQUksdUJBQVUsQ0FBQyxTQUFTLElBQUksQ0FBQyx1QkFBVSxDQUFDLFdBQVcsRUFBRTtZQUNqRCx1QkFBVSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDN0IsdUJBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQzlCLEVBQUUsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUV0QztJQUVMLENBQUM7SUFFRCxnQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHFDQUFVLEdBQVY7UUFHSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBNUREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7c0RBQ087SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDSztJQU5OLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBa0VwQztJQUFELHVCQUFDO0NBbEVELEFBa0VDLENBbEU2QyxpQkFBTyxHQWtFcEQ7a0JBbEVvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IG12Y1ZpZXcgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9tdmNWaWV3XCI7XG5pbXBvcnQgeyBMZXZlbEluZm8gfSBmcm9tIFwiLi4vQ29tbW9uL0xldmVsSW5mb1wiO1xuaW1wb3J0IGNjVXRpbCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3V0aWxzL2NjVXRpbFwiO1xuaW1wb3J0IHsgU2V0dGluZ0luZm8gfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi93ZWFrX25ldF9nYW1lL1NldHRpbmdJbmZvXCI7XG5pbXBvcnQgRGV2aWNlIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWlzYy9EZXZpY2VcIjtcbmltcG9ydCB7IERhaWx5TGV2ZWxJbmZvIH0gZnJvbSBcIi4uL0NvbW1vbi9EYWlseUxldmVsSW5mb1wiO1xuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuLi9Db21tb24vQmFzZS9QbGF5ZXJJbmZvXCI7XG5pbXBvcnQgeyBDaGFwdGVybEluZm8gfSBmcm9tIFwiLi4vQ29tbW9uL0NoYXB0ZXJsSW5mb1wiO1xuaW1wb3J0IENvbnN0IGZyb20gXCIuLi9Db21tb24vQ29uc3RcIjtcbmltcG9ydCB7IGV2dCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvY29yZS9ldmVudFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlDaGFsbGVuZ2VMZXZlbCBleHRlbmRzIG12Y1ZpZXcge1xuXG4gICAgQHByb3BlcnR5KGNjLlBhZ2VWaWV3KVxuICAgIHBhZ2V2aWV3OiBjYy5QYWdlVmlldyA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsYXlvdXQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgbnVtOiBudW1iZXIgPSAwO1xuXG4gICAgb25Mb2FkKCkge1xuXG4gICAgfVxuXG4gICAgb25TaG93KCkge1xuICAgICAgICBsZXQgaWQgPSAwO1xuICAgICAgICBsZXQgZGF0YXM6IFtEYWlseUxldmVsSW5mb1tdXSA9IFtbXV07XG4gICAgICAgIGNzdi5kYWlseV9sZXZlbC52YWx1ZXMubWFwKGUgPT4ge1xuICAgICAgICAgICAgaWYgKFBsYXllckluZm8uaXNHcmVhdGVyRGF0ZShlLmRheSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5udW0gPj0gMjApIHtcbiAgICAgICAgICAgICAgICAgICAgaWQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5udW0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBkYXRhcy5wdXNoKFtdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5udW0gKz0gMTtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGNjVXRpbC5nZXQoRGFpbHlMZXZlbEluZm8sIGUuaWQpO1xuICAgICAgICAgICAgICAgIGRhdGFzW2lkXS5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGF5b3V0KTtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucGFnZXZpZXcuYWRkUGFnZShpdGVtKTtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoaXRlbS5nZXRDb21wb25lbnQoY2MuTGF5b3V0KSwgXyA9PiBkYXRhc1tpXSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMucGFnZXZpZXcuc2V0Q3VycmVudFBhZ2VJbmRleChNYXRoLmZsb29yKFBsYXllckluZm8uZGFpbHlsZXZlbCAvIDIwKSk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgaWYgKFBsYXllckluZm8uaXNJbkd1aWRlICYmICFQbGF5ZXJJbmZvLmlzX2d1aWRlXzE1KSB7XG4gICAgICAgICAgICBQbGF5ZXJJbmZvLmlzSW5HdWlkZSA9IGZhbHNlO1xuICAgICAgICAgICAgUGxheWVySW5mby5pc19ndWlkZV8xNSA9IHRydWU7XG4gICAgICAgICAgICB2bS5zaG93KFwiUHJlZmFicy9VSS9VSUdldFByZXNlbnRcIik7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBjbGljX2Nsb3NlKCkge1xuXG5cbiAgICAgICAgdm0uaGlkZSh0aGlzKTtcbiAgICB9XG5cbiAgICBvbkhpZGRlbigpIHtcbiAgICAgICAgdGhpcy5wYWdldmlldy5yZW1vdmVBbGxQYWdlcygpO1xuICAgICAgICB0aGlzLm51bSA9IDA7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==