"use strict";
cc._RF.push(module, 'd128d8EHFFKJr4q2gDSWpo2', 'UIBaseAnim');
// framework/extension/qanim/UIBaseAnim.ts

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
var Signal_1 = require("../../core/Signal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIBaseAnim = /** @class */ (function (_super) {
    __extends(UIBaseAnim, _super);
    function UIBaseAnim() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pasr = new PasrTimer_1.PasrTimer(0, 0, 0, 0);
        _this.easeType = EaseType_1.EaseType.linear;
        _this.onFinish = new Signal_1.default();
        return _this;
    }
    UIBaseAnim.prototype.onFinished = function () {
        this.enabled = false;
    };
    UIBaseAnim.prototype.onLoad = function () {
        this.onFinish.add(this.onFinished, this);
    };
    UIBaseAnim.prototype.onDestroy = function () {
        this.onFinish.remove(this.onFinished, this);
    };
    UIBaseAnim.prototype.start = function () {
    };
    UIBaseAnim.prototype.play = function () {
        this.enabled = true;
        this.pasr.reset();
        return this.onFinish.wait();
    };
    UIBaseAnim.prototype.update = function (dt) {
        if (!this.pasr.isFinished()) {
            var t = this.pasr.Tick(dt);
            if (this.pasr.isFinished()) {
                this.onFinish.fire();
                return;
            }
            var f = cc.easing[EaseType_1.EaseType[this.easeType]];
            t = f(t);
            this.onTick(t);
        }
    };
    __decorate([
        property({ type: cc.Enum(EaseType_1.EaseType) })
    ], UIBaseAnim.prototype, "easeType", void 0);
    UIBaseAnim = __decorate([
        ccclass
    ], UIBaseAnim);
    return UIBaseAnim;
}(cc.Component));
exports.default = UIBaseAnim;

cc._RF.pop();