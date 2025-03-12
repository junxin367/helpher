
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIMission.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2a575O5zWlCzopIb9O9lPHR', 'UIMission');
// Game/Scripts/UI/UIMission.ts

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
var actionUtil_1 = require("../../../framework/utils/actionUtil");
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
        actionUtil_1.default.jellyJump2(this.node);
        this.label.string = text;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJTWlzc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5REFBb0Q7QUFDcEQsa0VBQTZEO0FBQzdELGdDQUEyQjtBQUV2QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQTtBQUl6QztJQUF1Qyw2QkFBTztJQUE5QztRQUFBLHFFQXVCQztRQXBCRyxXQUFLLEdBQWEsSUFBSSxDQUFDOztJQW9CM0IsQ0FBQztJQWxCRywwQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELDJCQUFPLEdBQVAsVUFBUSxJQUFJO1FBQ1Isb0JBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBR0QsK0JBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDakIsQ0FBQztJQUVELDRCQUFRLEdBQVI7UUFDSSxjQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFsQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDSTtJQUhOLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0F1QjdCO0lBQUQsZ0JBQUM7Q0F2QkQsQUF1QkMsQ0F2QnNDLGlCQUFPLEdBdUI3QztrQkF2Qm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2lnbmFsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvY29yZS9TaWduYWxcIjtcclxuaW1wb3J0IG12Y1ZpZXcgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9tdmNWaWV3XCI7XHJcbmltcG9ydCBhY3Rpb25VdGlsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdXRpbHMvYWN0aW9uVXRpbFwiO1xyXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vR2FtZVwiO1xyXG5cclxubGV0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3JcclxuXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1pc3Npb24gZXh0ZW5kcyBtdmNWaWV3IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93bih0ZXh0KSB7XHJcbiAgICAgICAgYWN0aW9uVXRpbC5qZWxseUp1bXAyKHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSB0ZXh0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjbGlja19jbG9zZSgpIHtcclxuICAgICAgICB2bS5oaWRlKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgb25IaWRkZW4oKSB7XHJcbiAgICAgICAgR2FtZS5pbnN0YW5jZS5zdGFydEdhbWUoKTtcclxuICAgIH1cclxuXHJcbn0iXX0=