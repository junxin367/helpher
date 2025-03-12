"use strict";
cc._RF.push(module, 'bf34fmd6qtFTqTAZraQS1HP', 'ProgressBarAnim');
// framework/extension/qanim/ProgressBarAnim.ts

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
var ProgressBarAnim = /** @class */ (function (_super) {
    __extends(ProgressBarAnim, _super);
    function ProgressBarAnim() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bar = null;
        _this.from = 0;
        _this.to = 1;
        return _this;
    }
    ProgressBarAnim.prototype.onLoad = function () {
        this.bar = this.getComponent(cc.ProgressBar);
    };
    ProgressBarAnim.prototype.start = function () { };
    ProgressBarAnim.prototype.onTick = function (t) {
        if (!this.bar)
            return;
        this.bar.progress = Extension_1.lerpf(this.from, this.to, t);
    };
    ProgressBarAnim.prototype.doPlay = function (duration, from, to) {
        this.pasr.a = duration;
        this.from = from;
        this.to = to;
        return _super.prototype.play.call(this);
    };
    __decorate([
        property
    ], ProgressBarAnim.prototype, "from", void 0);
    __decorate([
        property
    ], ProgressBarAnim.prototype, "to", void 0);
    ProgressBarAnim = __decorate([
        ccclass,
        menu("基础动画/ProgressBarAnim")
    ], ProgressBarAnim);
    return ProgressBarAnim;
}(UIBaseAnim_1.default));
exports.default = ProgressBarAnim;

cc._RF.pop();