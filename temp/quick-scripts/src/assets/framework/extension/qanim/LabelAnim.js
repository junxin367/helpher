"use strict";
cc._RF.push(module, '0d9c5C1JZxCCaI1096eaH/G', 'LabelAnim');
// framework/extension/qanim/LabelAnim.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var LabelAnim = /** @class */ (function (_super) {
    __extends(LabelAnim, _super);
    function LabelAnim() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.duration = 1;
        _this.from = 0;
        _this.to = 0;
        _this.label = null;
        return _this;
    }
    LabelAnim.prototype.onLoad = function () {
        this.label = this.getComponent(cc.Label);
    };
    LabelAnim.prototype.start = function () {
    };
    LabelAnim.prototype.play = function (duration, from, to) {
        if (duration === void 0) { duration = 0; }
        if (from === void 0) { from = 0; }
        if (to === void 0) { to = 0; }
        this.from = from;
        this.to = to;
        this.duration = duration || this.duration;
        this.pasr.a = this.duration;
        this.pasr.reset();
        return this.onFinish.wait();
    };
    LabelAnim.prototype.onTick = function (t) {
        var v = cc.misc.lerp(this.from, this.to, t);
        this.label.string = v.toFixed();
    };
    LabelAnim = __decorate([
        ccclass,
        menu("基础动画/LabelAnim")
    ], LabelAnim);
    return LabelAnim;
}(UIBaseAnim_1.default));
exports.default = LabelAnim;

cc._RF.pop();