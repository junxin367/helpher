"use strict";
cc._RF.push(module, 'c64ecgCUqdJY7vIv+kBf4+Y', 'BreathAnim');
// framework/extension/qanim/BreathAnim.ts

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
var EaseType_1 = require("./EaseType");
var PasrTimer_1 = require("../../misc/PasrTimer");
var Extension_1 = require("./Extension");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
// let EasingEnum = Enum(typeof (easing))
var BreathAnim = /** @class */ (function (_super) {
    __extends(BreathAnim, _super);
    function BreathAnim() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pasrTimer = null;
        _this.duration = 1.0;
        _this.minScale = cc.v2();
        _this.maxScale = cc.v2();
        _this.easeType = EaseType_1.EaseType.linear;
        _this.tmp_scale = cc.v2();
        return _this;
    }
    // @property({ type: EasingEnum })
    // easingType: typeof easing = null
    BreathAnim.prototype.start = function () {
        this.pasrTimer = new PasrTimer_1.PasrTimer(0, this.duration / 2, 0, this.duration / 2);
        this.pasrTimer.reset();
    };
    BreathAnim.prototype.update = function (dt) {
        var t = this.pasrTimer.Tick(dt);
        t = cc.easing[EaseType_1.EaseType[this.easeType]](t);
        this.node.scale = Extension_1.lerpVec2(this.tmp_scale, this.maxScale, this.minScale, t);
        if (this.pasrTimer.isFinished()) {
            this.pasrTimer.reset();
        }
    };
    __decorate([
        property
    ], BreathAnim.prototype, "duration", void 0);
    __decorate([
        property(cc.Vec2)
    ], BreathAnim.prototype, "minScale", void 0);
    __decorate([
        property(cc.Vec2)
    ], BreathAnim.prototype, "maxScale", void 0);
    __decorate([
        property({ type: cc.Enum(EaseType_1.EaseType) })
    ], BreathAnim.prototype, "easeType", void 0);
    BreathAnim = __decorate([
        ccclass("BreathAnim"),
        menu("基础动画/BreathAnim")
    ], BreathAnim);
    return BreathAnim;
}(cc.Component));
exports.default = BreathAnim;

cc._RF.pop();