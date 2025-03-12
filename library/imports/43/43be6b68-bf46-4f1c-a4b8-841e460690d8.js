"use strict";
cc._RF.push(module, '43be6tov0ZPHKS4hB5GBpDY', 'AutoSwitch');
// framework/ui/controller/AutoSwitch.ts

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
var Switcher_1 = require("./Switcher");
var Signal_1 = require("../../core/Signal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var AutoSwitch = /** @class */ (function (_super) {
    __extends(AutoSwitch, _super);
    function AutoSwitch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.switcher = null;
        _this.interval = 1;
        _this.onFinish = new Signal_1.default();
        _this.loop = false;
        _this.isPlaying = false;
        _this.c = 0;
        return _this;
    }
    AutoSwitch.prototype.onLoad = function () {
        this.switcher = this.getComponent(Switcher_1.default);
        this.isPlaying = false;
    };
    AutoSwitch.prototype.play = function (interval) {
        if (interval === void 0) { interval = 0; }
        this.isPlaying = true;
        this.interval = interval || this.interval;
        this.c = 0;
        this.switch();
        this.stop();
        this.schedule(this.switch, this.interval);
        return this.onFinish.wait();
    };
    AutoSwitch.prototype.stop = function () {
        this.unschedule(this.switch);
    };
    AutoSwitch.prototype.switch = function () {
        this.switcher.switch();
        this.c++;
        if (this.loop)
            return;
        if (this.c >= this.switcher._childrenCount) {
            this.unschedule(this.switch);
            this.isPlaying = false;
            this.onFinish.fire();
        }
    };
    __decorate([
        property
    ], AutoSwitch.prototype, "interval", void 0);
    __decorate([
        property
    ], AutoSwitch.prototype, "loop", void 0);
    AutoSwitch = __decorate([
        ccclass,
        menu("Controller/AutoSwitch")
    ], AutoSwitch);
    return AutoSwitch;
}(cc.Component));
exports.default = AutoSwitch;

cc._RF.pop();