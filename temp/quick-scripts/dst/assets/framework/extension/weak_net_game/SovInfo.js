
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/weak_net_game/SovInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '187abeaJAVKGqLjC4CXigcf', 'SovInfo');
// framework/extension/weak_net_game/SovInfo.ts

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
exports.SovInfo = void 0;
var DataCenter_1 = require("../../core/DataCenter");
var gameUtil_1 = require("../../utils/gameUtil");
var SovInfoDC = /** @class */ (function (_super) {
    __extends(SovInfoDC, _super);
    function SovInfoDC() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sovInvokeCounts = {};
        return _this;
    }
    SovInfoDC.prototype.onLoadAll = function () {
        if (gameUtil_1.default.isNextDay(this.save_timestamps)) {
            for (var k in this.sovInvokeCounts) {
                this.sovInvokeCounts[k] = 0;
            }
        }
    };
    SovInfoDC.prototype.getCount = function (keySov) {
        var c = this.sovInvokeCounts[keySov];
        if (c == null) {
            c = 0;
            this.sovInvokeCounts[keySov] = c;
        }
        return c;
    };
    SovInfoDC.prototype.invoke = function (keySov) {
        var c = this.getCount(keySov);
        this.sovInvokeCounts[keySov] = ++c;
        this.save();
    };
    __decorate([
        DataCenter_1.field()
    ], SovInfoDC.prototype, "sovInvokeCounts", void 0);
    SovInfoDC = __decorate([
        DataCenter_1.dc("Sov")
    ], SovInfoDC);
    return SovInfoDC;
}(DataCenter_1.default));
exports.default = SovInfoDC;
exports.SovInfo = DataCenter_1.default.register(SovInfoDC);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHdlYWtfbmV0X2dhbWVcXFNvdkluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUE4RDtBQUM5RCxpREFBNEM7QUFJNUM7SUFBdUMsNkJBQVU7SUFBakQ7UUFBQSxxRUEyQkM7UUF4QkcscUJBQWUsR0FBZ0MsRUFBRSxDQUFBOztJQXdCckQsQ0FBQztJQXRCRyw2QkFBUyxHQUFUO1FBQ0ksSUFBSSxrQkFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDMUMsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMvQjtTQUNKO0lBQ0wsQ0FBQztJQUVELDRCQUFRLEdBQVIsVUFBUyxNQUFjO1FBQ25CLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsMEJBQU0sR0FBTixVQUFPLE1BQWM7UUFDakIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBdkJEO1FBREMsa0JBQUssRUFBRTtzREFDeUM7SUFIaEMsU0FBUztRQUQ3QixlQUFFLENBQUMsS0FBSyxDQUFDO09BQ1csU0FBUyxDQTJCN0I7SUFBRCxnQkFBQztDQTNCRCxBQTJCQyxDQTNCc0Msb0JBQVUsR0EyQmhEO2tCQTNCb0IsU0FBUztBQTRCbkIsUUFBQSxPQUFPLEdBQWMsb0JBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YUNlbnRlciwgeyBkYywgZmllbGQgfSBmcm9tIFwiLi4vLi4vY29yZS9EYXRhQ2VudGVyXCI7XHJcbmltcG9ydCBnYW1lVXRpbCBmcm9tIFwiLi4vLi4vdXRpbHMvZ2FtZVV0aWxcIjtcclxuXHJcblxyXG5AZGMoXCJTb3ZcIilcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU292SW5mb0RDIGV4dGVuZHMgRGF0YUNlbnRlciB7XHJcblxyXG4gICAgQGZpZWxkKClcclxuICAgIHNvdkludm9rZUNvdW50czogeyBbaW5kZXg6IHN0cmluZ106IG51bWJlciB9ID0ge31cclxuXHJcbiAgICBvbkxvYWRBbGwoKSB7XHJcbiAgICAgICAgaWYgKGdhbWVVdGlsLmlzTmV4dERheSh0aGlzLnNhdmVfdGltZXN0YW1wcykpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgayBpbiB0aGlzLnNvdkludm9rZUNvdW50cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3ZJbnZva2VDb3VudHNba10gPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldENvdW50KGtleVNvdjogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGMgPSB0aGlzLnNvdkludm9rZUNvdW50c1trZXlTb3ZdXHJcbiAgICAgICAgaWYgKGMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjID0gMFxyXG4gICAgICAgICAgICB0aGlzLnNvdkludm9rZUNvdW50c1trZXlTb3ZdID0gYztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGM7XHJcbiAgICB9XHJcblxyXG4gICAgaW52b2tlKGtleVNvdjogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGMgPSB0aGlzLmdldENvdW50KGtleVNvdik7XHJcbiAgICAgICAgdGhpcy5zb3ZJbnZva2VDb3VudHNba2V5U292XSA9ICsrYztcclxuICAgICAgICB0aGlzLnNhdmUoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgbGV0IFNvdkluZm86IFNvdkluZm9EQyA9IERhdGFDZW50ZXIucmVnaXN0ZXIoU292SW5mb0RDKTtcclxuIl19