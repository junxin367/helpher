"use strict";
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