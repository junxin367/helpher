
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/guide/Guide4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '149c3pHaW5C55CAtc10Ji5T', 'Guide4');
// Game/Scripts/guide/Guide4.ts

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
var Guide4 = /** @class */ (function (_super) {
    __extends(Guide4, _super);
    function Guide4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.guideNode = null;
        return _this;
        // update (dt) {}
    }
    Guide4.prototype.onLoad = function () {
        this.getComponent(cc.RigidBody).enabledContactListener = true;
        event_1.evt.on("Game.win", this.hideGuide, this);
        event_1.evt.on("Game.lose", this.hideGuide, this);
    };
    Guide4.prototype.onDisable = function () {
        event_1.evt.off(this);
    };
    Guide4.prototype.start = function () {
        this.hideGuide();
    };
    Guide4.prototype.onBeginContact = function (contact, self, other) {
        var group = other.node.group;
        if (group == 'role' && !PlayerInfo_1.PlayerInfo.is_guide_4) {
            PlayerInfo_1.PlayerInfo.is_guide_4 = true;
            PlayerInfo_1.PlayerInfo.isInGuide = true;
            this.guideNode.active = true;
        }
    };
    Guide4.prototype.onkeyClick = function () {
        if (PlayerInfo_1.PlayerInfo.isInGuide) {
            this.hideGuide();
        }
    };
    Guide4.prototype.hideGuide = function () {
        this.guideNode.active = false;
        PlayerInfo_1.PlayerInfo.isInGuide = false;
    };
    __decorate([
        property(cc.Node)
    ], Guide4.prototype, "guideNode", void 0);
    Guide4 = __decorate([
        ccclass
    ], Guide4);
    return Guide4;
}(cc.Component));
exports.default = Guide4;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcZ3VpZGVcXEd1aWRlNC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSx3REFBdUQ7QUFDdkQsdURBQW9EO0FBRTlDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBMkNDO1FBeENHLGVBQVMsR0FBWSxJQUFJLENBQUM7O1FBdUMxQixpQkFBaUI7SUFDckIsQ0FBQztJQXRDRyx1QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1FBQzlELFdBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsV0FBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUU5QyxDQUFDO0lBRUQsMEJBQVMsR0FBVDtRQUNJLFdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDakIsQ0FBQztJQUdELHNCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELCtCQUFjLEdBQWQsVUFBZSxPQUEwQixFQUFFLElBQUksRUFBRSxLQUF5QjtRQUN0RSxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM3QixJQUFJLEtBQUssSUFBSSxNQUFNLElBQUksQ0FBQyx1QkFBVSxDQUFDLFVBQVUsRUFBRTtZQUMzQyx1QkFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDN0IsdUJBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtTQUMvQjtJQUNMLENBQUM7SUFFRCwyQkFBVSxHQUFWO1FBQ0ksSUFBSSx1QkFBVSxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRUQsMEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5Qix1QkFBVSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFFakMsQ0FBQztJQXJDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNRO0lBSFQsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQTJDMUI7SUFBRCxhQUFDO0NBM0NELEFBMkNDLENBM0NtQyxFQUFFLENBQUMsU0FBUyxHQTJDL0M7a0JBM0NvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNrZWxldG9uQmFzZSBmcm9tIFwiLi4vU2tlbGV0b25CYXNlXCI7XG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvVXNlckluZm9cIjtcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi4vQ29tbW9uL0Jhc2UvUGxheWVySW5mb1wiO1xuaW1wb3J0IHsgZXZ0IH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9jb3JlL2V2ZW50XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHdWlkZTQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZ3VpZGVOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5lbmFibGVkQ29udGFjdExpc3RlbmVyID0gdHJ1ZTtcbiAgICAgICAgZXZ0Lm9uKFwiR2FtZS53aW5cIiwgdGhpcy5oaWRlR3VpZGUsIHRoaXMpO1xuICAgICAgICBldnQub24oXCJHYW1lLmxvc2VcIiwgdGhpcy5oaWRlR3VpZGUsIHRoaXMpO1xuXG4gICAgfVxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICBldnQub2ZmKHRoaXMpXG4gICAgfVxuXG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5oaWRlR3VpZGUoKTtcbiAgICB9XG5cbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0OiBjYy5QaHlzaWNzQ29udGFjdCwgc2VsZiwgb3RoZXI6IGNjLlBoeXNpY3NDb2xsaWRlcikge1xuICAgICAgICBsZXQgZ3JvdXAgPSBvdGhlci5ub2RlLmdyb3VwO1xuICAgICAgICBpZiAoZ3JvdXAgPT0gJ3JvbGUnICYmICFQbGF5ZXJJbmZvLmlzX2d1aWRlXzQpIHtcbiAgICAgICAgICAgIFBsYXllckluZm8uaXNfZ3VpZGVfNCA9IHRydWU7XG4gICAgICAgICAgICBQbGF5ZXJJbmZvLmlzSW5HdWlkZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmd1aWRlTm9kZS5hY3RpdmUgPSB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbmtleUNsaWNrKCkge1xuICAgICAgICBpZiAoUGxheWVySW5mby5pc0luR3VpZGUpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZUd1aWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlR3VpZGUoKSB7XG4gICAgICAgIHRoaXMuZ3VpZGVOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBQbGF5ZXJJbmZvLmlzSW5HdWlkZSA9IGZhbHNlO1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==