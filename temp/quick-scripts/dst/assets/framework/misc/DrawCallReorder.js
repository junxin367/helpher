
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/DrawCallReorder.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b3a85+0BDNLALxTeNtup6wM', 'DrawCallReorder');
// framework/misc/DrawCallReorder.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DrawCallReorder = /** @class */ (function (_super) {
    __extends(DrawCallReorder, _super);
    function DrawCallReorder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.orderId = 0;
        return _this;
    }
    DrawCallReorder.prototype.onLoad = function () {
    };
    DrawCallReorder.prototype.start = function () {
    };
    __decorate([
        property
    ], DrawCallReorder.prototype, "orderId", void 0);
    DrawCallReorder = __decorate([
        ccclass
    ], DrawCallReorder);
    return DrawCallReorder;
}(cc.Component));
exports.default = DrawCallReorder;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxEcmF3Q2FsbFJlb3JkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUFVQztRQVJHLGFBQU8sR0FBVSxDQUFDLENBQUM7O0lBUXZCLENBQUM7SUFORyxnQ0FBTSxHQUFOO0lBRUEsQ0FBQztJQUNELCtCQUFLLEdBQUw7SUFFQSxDQUFDO0lBUEQ7UUFEQyxRQUFRO29EQUNVO0lBRkYsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQVVuQztJQUFELHNCQUFDO0NBVkQsQUFVQyxDQVY0QyxFQUFFLENBQUMsU0FBUyxHQVV4RDtrQkFWb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd0NhbGxSZW9yZGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgb3JkZXJJZDpudW1iZXIgPSAwO1xyXG4gICAgXHJcbiAgICBvbkxvYWQgKCkge1xyXG5cclxuICAgIH1cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcbn0iXX0=