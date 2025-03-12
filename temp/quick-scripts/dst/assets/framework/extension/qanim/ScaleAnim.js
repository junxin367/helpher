
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/qanim/ScaleAnim.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '09546do5HREQ6WDm6UpmZHA', 'ScaleAnim');
// framework/extension/qanim/ScaleAnim.ts

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
var ScaleAnim = /** @class */ (function (_super) {
    __extends(ScaleAnim, _super);
    function ScaleAnim() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.from = cc.v3();
        _this.to = cc.v3();
        _this.tmp_scale = cc.v3();
        return _this;
    }
    ScaleAnim.prototype.onTick = function (t) {
        this.node.scale = Extension_1.lerpVec3(this.tmp_scale, this.from, this.to, t);
    };
    ScaleAnim.prototype.start = function () {
        this.pasr.reset();
    };
    ScaleAnim.prototype.play = function () {
        return _super.prototype.play.call(this);
    };
    ScaleAnim.prototype.onEnable = function () {
        if (this.pasr)
            this.pasr.reset();
    };
    ScaleAnim.prototype.onDisable = function () {
    };
    __decorate([
        property(cc.Vec3)
    ], ScaleAnim.prototype, "from", void 0);
    __decorate([
        property(cc.Vec3)
    ], ScaleAnim.prototype, "to", void 0);
    ScaleAnim = __decorate([
        ccclass("ScaleAnim"),
        menu("基础动画/ScaleAnim")
    ], ScaleAnim);
    return ScaleAnim;
}(UIBaseAnim_1.default));
exports.default = ScaleAnim;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHFhbmltXFxTY2FsZUFuaW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMkNBQXNDO0FBQ3RDLHlDQUF1QztBQUNuQyxJQUFBLEtBQThCLEVBQUUsQ0FBQyxVQUFVLEVBQXpDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBa0IsQ0FBQTtBQUcvQztJQUF1Qyw2QkFBVTtJQUFqRDtRQUFBLHFFQWdDQztRQTdCRyxVQUFJLEdBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBR3hCLFFBQUUsR0FBWSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFHdEIsZUFBUyxHQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7SUF1QmpDLENBQUM7SUFyQkcsMEJBQU0sR0FBTixVQUFPLENBQU07UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxvQkFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCx5QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsd0JBQUksR0FBSjtRQUNJLE9BQU8saUJBQU0sSUFBSSxXQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELDRCQUFRLEdBQVI7UUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJO1lBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN6QixDQUFDO0lBRUQsNkJBQVMsR0FBVDtJQUVBLENBQUM7SUEzQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNJO0lBTkwsU0FBUztRQUY3QixPQUFPLENBQUMsV0FBVyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztPQUNGLFNBQVMsQ0FnQzdCO0lBQUQsZ0JBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQ3NDLG9CQUFVLEdBZ0NoRDtrQkFoQ29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFYXNlVHlwZSB9IGZyb20gXCIuL0Vhc2VUeXBlXCI7XHJcbmltcG9ydCBVSUJhc2VBbmltIGZyb20gXCIuL1VJQmFzZUFuaW1cIjtcclxuaW1wb3J0IHsgbGVycFZlYzMgfSBmcm9tIFwiLi9FeHRlbnNpb25cIjtcclxubGV0IHsgY2NjbGFzcywgcHJvcGVydHksIG1lbnUgfSA9IGNjLl9kZWNvcmF0b3JcclxuQGNjY2xhc3MoXCJTY2FsZUFuaW1cIilcclxuQG1lbnUoXCLln7rnoYDliqjnlLsvU2NhbGVBbmltXCIpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjYWxlQW5pbSBleHRlbmRzIFVJQmFzZUFuaW0ge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5WZWMzKVxyXG4gICAgZnJvbTogY2MuVmVjMyA9IGNjLnYzKCk7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlZlYzMpXHJcbiAgICB0bzogY2MuVmVjMyA9IGNjLnYzKCk7XHJcblxyXG5cclxuICAgIHRtcF9zY2FsZTogY2MuVmVjMyA9IGNjLnYzKCk7XHJcblxyXG4gICAgb25UaWNrKHQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IGxlcnBWZWMzKHRoaXMudG1wX3NjYWxlLCB0aGlzLmZyb20sIHRoaXMudG8sIHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMucGFzci5yZXNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5wYXNyKVxyXG4gICAgICAgICAgICB0aGlzLnBhc3IucmVzZXQoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG59Il19