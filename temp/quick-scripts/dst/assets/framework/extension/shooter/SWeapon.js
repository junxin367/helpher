
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/shooter/SWeapon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '977e10uu7ZMsqqaBe5sSFqA', 'SWeapon');
// framework/extension/shooter/SWeapon.ts

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
var SFireAgent_1 = require("./SFireAgent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SWeapon = /** @class */ (function (_super) {
    __extends(SWeapon, _super);
    function SWeapon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fireAgents = [];
        return _this;
    }
    SWeapon.prototype.onLoad = function () {
        this.fireAgents = this.getComponentsInChildren(SFireAgent_1.default);
    };
    SWeapon.prototype.fire = function (rotation) {
        for (var i in this.fireAgents) {
            var agent = this.fireAgents[i];
            agent.fire(rotation);
        }
    };
    SWeapon.prototype.pause = function () {
        this.fireAgents.forEach(function (v) { return v.paused = true; });
    };
    SWeapon.prototype.resume = function () {
        this.fireAgents.forEach(function (v) { return v.paused = false; });
    };
    SWeapon = __decorate([
        ccclass
    ], SWeapon);
    return SWeapon;
}(cc.Component));
exports.default = SWeapon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHNob290ZXJcXFNXZWFwb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXNDO0FBRWhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBb0JDO1FBbkJHLGdCQUFVLEdBQWlCLEVBQUUsQ0FBQTs7SUFtQmpDLENBQUM7SUFqQkcsd0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLG9CQUFVLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsc0JBQUksR0FBSixVQUFLLFFBQVM7UUFDVixLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDM0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUM5QixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUVELHVCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBRSxPQUFBLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFmLENBQWUsQ0FBQyxDQUFBO0lBQy9DLENBQUM7SUFDRCx3QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUUsT0FBQSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFuQmdCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FvQjNCO0lBQUQsY0FBQztDQXBCRCxBQW9CQyxDQXBCb0MsRUFBRSxDQUFDLFNBQVMsR0FvQmhEO2tCQXBCb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTRmlyZUFnZW50IGZyb20gXCIuL1NGaXJlQWdlbnRcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTV2VhcG9uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIGZpcmVBZ2VudHM6IFNGaXJlQWdlbnRbXSA9IFtdXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuZmlyZUFnZW50cyA9IHRoaXMuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oU0ZpcmVBZ2VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlyZShyb3RhdGlvbj8pIHtcclxuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMuZmlyZUFnZW50cykge1xyXG4gICAgICAgICAgICBsZXQgYWdlbnQgPSB0aGlzLmZpcmVBZ2VudHNbaV1cclxuICAgICAgICAgICAgYWdlbnQuZmlyZShyb3RhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBhdXNlKCkge1xyXG4gICAgICAgIHRoaXMuZmlyZUFnZW50cy5mb3JFYWNoKHY9PnYucGF1c2VkID0gdHJ1ZSlcclxuICAgIH1cclxuICAgIHJlc3VtZSgpIHtcclxuICAgICAgICB0aGlzLmZpcmVBZ2VudHMuZm9yRWFjaCh2PT52LnBhdXNlZCA9IGZhbHNlKVxyXG4gICAgfVxyXG59Il19