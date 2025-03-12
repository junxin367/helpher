
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIBoxGuide.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '46ee9xjh6pBwqSO38ROu0Yr', 'UIBoxGuide');
// Game/Scripts/UI/UIBoxGuide.ts

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
var Game_1 = require("../Game");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIMission = /** @class */ (function (_super) {
    __extends(UIMission, _super);
    function UIMission() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
    }
    UIMission.prototype.onLoad = function () {
    };
    UIMission.prototype.onShown = function (text) {
        // actionUtil.jellyJump2(this.node);
        text && (this.label.string = text);
    };
    UIMission.prototype.click_close = function () {
        vm.hide(this);
    };
    UIMission.prototype.onHidden = function () {
        Game_1.default.instance.startGame();
    };
    __decorate([
        property(cc.Label)
    ], UIMission.prototype, "label", void 0);
    UIMission = __decorate([
        ccclass
    ], UIMission);
    return UIMission;
}(mvcView_1.default));
exports.default = UIMission;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJQm94R3VpZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW9EO0FBQ3BELGdDQUEyQjtBQUV2QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQTtBQUl6QztJQUF1Qyw2QkFBTztJQUE5QztRQUFBLHFFQXVCQztRQXBCRyxXQUFLLEdBQWEsSUFBSSxDQUFDOztJQW9CM0IsQ0FBQztJQWxCRywwQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELDJCQUFPLEdBQVAsVUFBUSxJQUFLO1FBQ1Qsb0NBQW9DO1FBQ3BDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFHRCwrQkFBVyxHQUFYO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNqQixDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUNJLGNBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQWxCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNJO0lBSE4sU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXVCN0I7SUFBRCxnQkFBQztDQXZCRCxBQXVCQyxDQXZCc0MsaUJBQU8sR0F1QjdDO2tCQXZCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtdmNWaWV3IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvbXZjVmlld1wiO1xyXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vR2FtZVwiO1xyXG5cclxubGV0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3JcclxuXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1pc3Npb24gZXh0ZW5kcyBtdmNWaWV3IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93bih0ZXh0Pykge1xyXG4gICAgICAgIC8vIGFjdGlvblV0aWwuamVsbHlKdW1wMih0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRleHQgJiYgKHRoaXMubGFiZWwuc3RyaW5nID0gdGV4dCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNsaWNrX2Nsb3NlKCkge1xyXG4gICAgICAgIHZtLmhpZGUodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBvbkhpZGRlbigpIHtcclxuICAgICAgICBHYW1lLmluc3RhbmNlLnN0YXJ0R2FtZSgpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==