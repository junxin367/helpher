
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIGetProp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5faf3qgeh5N+J+UZZigl45H', 'UIGetProp');
// Game/Scripts/UI/UIGetProp.ts

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
var PropInfo_1 = require("../Common/PropInfo");
var ccUtil_1 = require("../../../framework/utils/ccUtil");
var Const_1 = require("../Common/Const");
var actionUtil_1 = require("../../../framework/utils/actionUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIGetProp = /** @class */ (function (_super) {
    __extends(UIGetProp, _super);
    function UIGetProp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.propsData = [];
        return _this;
    }
    UIGetProp.prototype.onLoad = function () {
        var _this = this;
        this.register(this.layout, function (_) { return _this.propsData; });
        this.propsData = csv.Prop.values.map(function (e) {
            var data = ccUtil_1.default.get(PropInfo_1.PropInfo, e.id);
            if (data.id <= Const_1.default.Chapter_Unlock + 1)
                return data;
        });
        this.render();
    };
    UIGetProp.prototype.onShow = function (num) {
        actionUtil_1.default.jellyJump2(this.node);
    };
    UIGetProp.prototype.click_close = function () {
        vm.hide(this);
    };
    UIGetProp.prototype.onHidden = function () {
    };
    __decorate([
        property(cc.Layout)
    ], UIGetProp.prototype, "layout", void 0);
    __decorate([
        property(cc.Sprite)
    ], UIGetProp.prototype, "title_sprite", void 0);
    UIGetProp = __decorate([
        ccclass
    ], UIGetProp);
    return UIGetProp;
}(mvcView_1.default));
exports.default = UIGetProp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJR2V0UHJvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSx5REFBb0Q7QUFLcEQsK0NBQThDO0FBQzlDLDBEQUFxRDtBQUVyRCx5Q0FBb0M7QUFDcEMsa0VBQTZEO0FBRXpELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFBO0FBRXpDO0lBQXVDLDZCQUFPO0lBQTlDO1FBQUEscUVBa0NDO1FBMUJHLGVBQVMsR0FBZSxFQUFFLENBQUM7O0lBMEIvQixDQUFDO0lBeEJHLDBCQUFNLEdBQU47UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLEVBQWQsQ0FBYyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO1lBQ2xDLElBQUksSUFBSSxHQUFHLGdCQUFNLENBQUMsR0FBRyxDQUFDLG1CQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxlQUFLLENBQUMsY0FBYyxHQUFHLENBQUM7Z0JBQ25DLE9BQU8sSUFBSSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFHRCwwQkFBTSxHQUFOLFVBQU8sR0FBSTtRQUNQLG9CQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBR0QsK0JBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELDRCQUFRLEdBQVI7SUFFQSxDQUFDO0lBN0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ0Y7SUFHbEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDSTtJQU5QLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FrQzdCO0lBQUQsZ0JBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQ3NDLGlCQUFPLEdBa0M3QztrQkFsQ29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGh1bmRlciBmcm9tIFwiLi4vTGV2ZWxzL1RodW5kZXJcIlxyXG5pbXBvcnQgeyBldnQgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2NvcmUvZXZlbnRcIjtcclxuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuLi9Db21tb24vQmFzZS9QbGF5ZXJJbmZvXCI7XHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9Ub2FzdE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi93ZWFrX25ldF9nYW1lL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBtdmNWaWV3IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvbXZjVmlld1wiO1xyXG5pbXBvcnQgSWNvblNvdiBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi93ZWFrX25ldF9nYW1lL0ljb25Tb3ZcIjtcclxuaW1wb3J0IFdlYWtOZXRHYW1lIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvV2Vha05ldEdhbWVcIjtcclxuaW1wb3J0IFN3aXRjaGVyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvY29udHJvbGxlci9Td2l0Y2hlclwiO1xyXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi4vTWFpblwiO1xyXG5pbXBvcnQgeyBQcm9wSW5mbyB9IGZyb20gXCIuLi9Db21tb24vUHJvcEluZm9cIjtcclxuaW1wb3J0IGNjVXRpbCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3V0aWxzL2NjVXRpbFwiO1xyXG5pbXBvcnQgeyBDaGFwdGVybEluZm8gfSBmcm9tIFwiLi4vQ29tbW9uL0NoYXB0ZXJsSW5mb1wiO1xyXG5pbXBvcnQgQ29uc3QgZnJvbSBcIi4uL0NvbW1vbi9Db25zdFwiO1xyXG5pbXBvcnQgYWN0aW9uVXRpbCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3V0aWxzL2FjdGlvblV0aWxcIjtcclxuXHJcbmxldCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJR2V0UHJvcCBleHRlbmRzIG12Y1ZpZXcge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYXlvdXQpXHJcbiAgICBsYXlvdXQ6IGNjLkxheW91dDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgdGl0bGVfc3ByaXRlOiBjYy5TcHJpdGU7XHJcblxyXG4gICAgcHJvcHNEYXRhOiBQcm9wSW5mb1tdID0gW107XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIodGhpcy5sYXlvdXQsIF8gPT4gdGhpcy5wcm9wc0RhdGEpO1xyXG4gICAgICAgIHRoaXMucHJvcHNEYXRhID0gY3N2LlByb3AudmFsdWVzLm1hcChlID0+IHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBjY1V0aWwuZ2V0KFByb3BJbmZvLCBlLmlkKTtcclxuICAgICAgICAgICAgaWYgKGRhdGEuaWQgPD0gQ29uc3QuQ2hhcHRlcl9VbmxvY2sgKyAxKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25TaG93KG51bT8pIHtcclxuICAgICAgICBhY3Rpb25VdGlsLmplbGx5SnVtcDIodGhpcy5ub2RlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY2xpY2tfY2xvc2UoKSB7XHJcbiAgICAgICAgdm0uaGlkZSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkhpZGRlbigpIHtcclxuXHJcbiAgICB9XHJcblxyXG59Il19