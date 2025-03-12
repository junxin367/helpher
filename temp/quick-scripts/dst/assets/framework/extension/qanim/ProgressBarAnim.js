
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/qanim/ProgressBarAnim.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bf34fmd6qtFTqTAZraQS1HP', 'ProgressBarAnim');
// framework/extension/qanim/ProgressBarAnim.ts

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
var UIBaseAnim_1 = require("./UIBaseAnim");
var Extension_1 = require("./Extension");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var ProgressBarAnim = /** @class */ (function (_super) {
    __extends(ProgressBarAnim, _super);
    function ProgressBarAnim() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bar = null;
        _this.from = 0;
        _this.to = 1;
        return _this;
    }
    ProgressBarAnim.prototype.onLoad = function () {
        this.bar = this.getComponent(cc.ProgressBar);
    };
    ProgressBarAnim.prototype.start = function () { };
    ProgressBarAnim.prototype.onTick = function (t) {
        if (!this.bar)
            return;
        this.bar.progress = Extension_1.lerpf(this.from, this.to, t);
    };
    ProgressBarAnim.prototype.doPlay = function (duration, from, to) {
        this.pasr.a = duration;
        this.from = from;
        this.to = to;
        return _super.prototype.play.call(this);
    };
    __decorate([
        property
    ], ProgressBarAnim.prototype, "from", void 0);
    __decorate([
        property
    ], ProgressBarAnim.prototype, "to", void 0);
    ProgressBarAnim = __decorate([
        ccclass,
        menu("基础动画/ProgressBarAnim")
    ], ProgressBarAnim);
    return ProgressBarAnim;
}(UIBaseAnim_1.default));
exports.default = ProgressBarAnim;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHFhbmltXFxQcm9ncmVzc0JhckFuaW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXNDO0FBQ3RDLHlDQUFvQztBQUU5QixJQUFBLEtBQThCLEVBQUUsQ0FBQyxVQUFVLEVBQXpDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBa0IsQ0FBQztBQUlsRDtJQUE2QyxtQ0FBVTtJQUF2RDtRQUFBLHFFQXlCQztRQXZCRyxTQUFHLEdBQW1CLElBQUksQ0FBQTtRQUUxQixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBRWpCLFFBQUUsR0FBVyxDQUFDLENBQUM7O0lBbUJuQixDQUFDO0lBbEJHLGdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDRCwrQkFBSyxHQUFMLGNBQVUsQ0FBQztJQUdYLGdDQUFNLEdBQU4sVUFBTyxDQUFNO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTztRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxpQkFBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsZ0NBQU0sR0FBTixVQUFPLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRTtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixPQUFPLGlCQUFNLElBQUksV0FBRSxDQUFDO0lBQ3hCLENBQUM7SUFuQkQ7UUFEQyxRQUFRO2lEQUNRO0lBRWpCO1FBREMsUUFBUTsrQ0FDTTtJQU5FLGVBQWU7UUFGbkMsT0FBTztRQUNQLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztPQUNSLGVBQWUsQ0F5Qm5DO0lBQUQsc0JBQUM7Q0F6QkQsQUF5QkMsQ0F6QjRDLG9CQUFVLEdBeUJ0RDtrQkF6Qm9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlCYXNlQW5pbSBmcm9tIFwiLi9VSUJhc2VBbmltXCI7XHJcbmltcG9ydCB7IGxlcnBmIH0gZnJvbSBcIi4vRXh0ZW5zaW9uXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuQG1lbnUoXCLln7rnoYDliqjnlLsvUHJvZ3Jlc3NCYXJBbmltXCIpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzQmFyQW5pbSBleHRlbmRzIFVJQmFzZUFuaW0ge1xyXG5cclxuICAgIGJhcjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGZyb206IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRvOiBudW1iZXIgPSAxO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuYmFyID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7IH1cclxuXHJcblxyXG4gICAgb25UaWNrKHQ6IGFueSkge1xyXG4gICAgICAgIGlmICghdGhpcy5iYXIpIHJldHVybjtcclxuICAgICAgICB0aGlzLmJhci5wcm9ncmVzcyA9IGxlcnBmKHRoaXMuZnJvbSwgdGhpcy50bywgdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9QbGF5KGR1cmF0aW9uLCBmcm9tLCB0bykge1xyXG4gICAgICAgIHRoaXMucGFzci5hID0gZHVyYXRpb247XHJcbiAgICAgICAgdGhpcy5mcm9tID0gZnJvbTtcclxuICAgICAgICB0aGlzLnRvID0gdG87XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbn0iXX0=