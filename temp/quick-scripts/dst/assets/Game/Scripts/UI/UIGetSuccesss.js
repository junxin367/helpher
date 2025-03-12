
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIGetSuccesss.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b9582VfxLRPR61EjSxKxBgp', 'UIGetSuccesss');
// Game/Scripts/UI/UIGetSuccesss.ts

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
var event_1 = require("../../../framework/core/event");
var display_1 = require("../../../framework/misc/display");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIGetSuccesss = /** @class */ (function (_super) {
    __extends(UIGetSuccesss, _super);
    function UIGetSuccesss() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.label_num = null;
        return _this;
    }
    UIGetSuccesss.prototype.onLoad = function () {
        var _this = this;
        this.onClick(this.btn_close, function (_) { return _this.click_close(); });
    };
    UIGetSuccesss.prototype.onShow = function (num) {
        this.label_num.string = num.toString();
        if (!isNaN(num) && num > 0) {
            PlayerInfo_1.PlayerInfo.labour += num;
            PlayerInfo_1.PlayerInfo.save("labour");
            event_1.evt.emit("Game.getTili", display_1.default.center, num);
        }
    };
    UIGetSuccesss.prototype.click_close = function () {
        vm.hide(this);
    };
    UIGetSuccesss.prototype.onHidden = function () {
    };
    __decorate([
        property(cc.Node)
    ], UIGetSuccesss.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Label)
    ], UIGetSuccesss.prototype, "label_num", void 0);
    UIGetSuccesss = __decorate([
        ccclass
    ], UIGetSuccesss);
    return UIGetSuccesss;
}(mvcView_1.default));
exports.default = UIGetSuccesss;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJR2V0U3VjY2Vzc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW9EO0FBR3BELHVEQUFvRDtBQUNwRCwyREFBc0Q7QUFDdEQsd0RBQXVEO0FBSWpELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFPO0lBQWxEO1FBQUEscUVBOEJDO1FBNUJHLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsZUFBUyxHQUFhLElBQUksQ0FBQzs7SUF5Qi9CLENBQUM7SUFyQkcsOEJBQU0sR0FBTjtRQUFBLGlCQUVDO1FBREcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsRUFBRSxFQUFsQixDQUFrQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNELDhCQUFNLEdBQU4sVUFBTyxHQUFHO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtZQUN4Qix1QkFBVSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUM7WUFDekIsdUJBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDekIsV0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUE7U0FDaEQ7SUFHTCxDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFFQSxDQUFDO0lBM0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDUTtJQUxWLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0E4QmpDO0lBQUQsb0JBQUM7Q0E5QkQsQUE4QkMsQ0E5QjBDLGlCQUFPLEdBOEJqRDtrQkE5Qm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXZjVmlldyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL212Y1ZpZXdcIjtcbmltcG9ydCB7IHd4c2RrIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd3hzZGsvc2RrXCI7XG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvVG9hc3RNYW5hZ2VyXCI7XG5pbXBvcnQgeyBldnQgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2NvcmUvZXZlbnRcIjtcbmltcG9ydCBkaXNwbGF5IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWlzYy9kaXNwbGF5XCI7XG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL0NvbW1vbi9CYXNlL1BsYXllckluZm9cIjtcblxuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUdldFN1Y2Nlc3NzIGV4dGVuZHMgbXZjVmlldyB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuX2Nsb3NlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbF9udW06IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIGNhbGxiYWNrOiBGdW5jdGlvbjtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5vbkNsaWNrKHRoaXMuYnRuX2Nsb3NlLCBfID0+IHRoaXMuY2xpY2tfY2xvc2UoKSk7XG4gICAgfVxuICAgIG9uU2hvdyhudW0pIHtcbiAgICAgICAgdGhpcy5sYWJlbF9udW0uc3RyaW5nID0gbnVtLnRvU3RyaW5nKClcbiAgICAgICAgaWYgKCFpc05hTihudW0pICYmIG51bSA+IDApIHtcbiAgICAgICAgICAgIFBsYXllckluZm8ubGFib3VyICs9IG51bTtcbiAgICAgICAgICAgIFBsYXllckluZm8uc2F2ZShcImxhYm91clwiKVxuICAgICAgICAgICAgZXZ0LmVtaXQoXCJHYW1lLmdldFRpbGlcIiwgZGlzcGxheS5jZW50ZXIsIG51bSlcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBjbGlja19jbG9zZSgpIHtcbiAgICAgICAgdm0uaGlkZSh0aGlzKTtcbiAgICB9XG5cbiAgICBvbkhpZGRlbigpIHtcblxuICAgIH1cbn1cbiJdfQ==