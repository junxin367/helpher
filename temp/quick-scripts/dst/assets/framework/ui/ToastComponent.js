
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/ui/ToastComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c4ad6Rf0DpFeay8D3aly6IU', 'ToastComponent');
// framework/ui/ToastComponent.ts

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
var UIFunctions_1 = require("./UIFunctions");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ToastComponent = /** @class */ (function (_super) {
    __extends(ToastComponent, _super);
    function ToastComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
        // update (dt) {}
    }
    ToastComponent.prototype.onLoad = function () {
        this.animations = UIFunctions_1.default.getChildrenAnimations(this.node);
    };
    ToastComponent.prototype.start = function () {
    };
    ToastComponent.prototype.hide = function (callback) {
        this.node.active = true;
        if (!UIFunctions_1.default.doHideAnimations(this.animations, callback)) {
            this.node.active = false;
            // this.node.removeFromParent();
            if (callback) {
                callback(this);
            }
        }
    };
    ToastComponent.prototype.show = function (text) {
        this.label.string = text;
        UIFunctions_1.default.doShowAnimations(this.animations);
    };
    __decorate([
        property(cc.Label)
    ], ToastComponent.prototype, "label", void 0);
    ToastComponent = __decorate([
        ccclass
    ], ToastComponent);
    return ToastComponent;
}(cc.Component));
exports.default = ToastComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx1aVxcVG9hc3RDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBRWxDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBaUNDO1FBL0JHLFdBQUssR0FBYSxJQUFJLENBQUM7O1FBOEJ2QixpQkFBaUI7SUFDckIsQ0FBQztJQTFCRywrQkFBTSxHQUFOO1FBRUksSUFBSSxDQUFDLFVBQVUsR0FBRyxxQkFBVyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsOEJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCw2QkFBSSxHQUFKLFVBQUssUUFBUTtRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFHLENBQUMscUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDLFFBQVEsQ0FBQyxFQUMxRDtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN6QixnQ0FBZ0M7WUFDaEMsSUFBRyxRQUFRLEVBQ1g7Z0JBQ0ksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2xCO1NBQ0o7SUFDTCxDQUFDO0lBQ0QsNkJBQUksR0FBSixVQUFLLElBQVM7UUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDekIscUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQTdCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNJO0lBRk4sY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQWlDbEM7SUFBRCxxQkFBQztDQWpDRCxBQWlDQyxDQWpDMkMsRUFBRSxDQUFDLFNBQVMsR0FpQ3ZEO2tCQWpDb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSUZ1bmN0aW9ucyBmcm9tIFwiLi9VSUZ1bmN0aW9uc1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2FzdENvbXBvbmVudCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuICAgIGFuaW1hdGlvbnM6Y2MuQW5pbWF0aW9uW11cclxuXHJcbiAgICBvbkxvYWQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IFVJRnVuY3Rpb25zLmdldENoaWxkcmVuQW5pbWF0aW9ucyh0aGlzLm5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZShjYWxsYmFjayk6IGFueSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgaWYoIVVJRnVuY3Rpb25zLmRvSGlkZUFuaW1hdGlvbnModGhpcy5hbmltYXRpb25zLGNhbGxiYWNrKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgaWYoY2FsbGJhY2spXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hvdyh0ZXh0OiBhbnkpOiBhbnkge1xyXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gdGV4dDtcclxuICAgICAgICBVSUZ1bmN0aW9ucy5kb1Nob3dBbmltYXRpb25zKHRoaXMuYW5pbWF0aW9ucyk7XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==