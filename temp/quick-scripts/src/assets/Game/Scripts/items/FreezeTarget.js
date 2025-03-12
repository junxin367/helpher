"use strict";
cc._RF.push(module, '863b2axkS1AToFMdctqXni9', 'FreezeTarget');
// Game/Scripts/items/FreezeTarget.ts

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
var AIEnemy_1 = require("../AIEnemy");
var Device_1 = require("../../../framework/misc/Device");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FreezeTarget = /** @class */ (function (_super) {
    __extends(FreezeTarget, _super);
    function FreezeTarget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ice = null;
        _this.duration = 10.0;
        _this.enemy = null;
        _this.label = null;
        _this.timeleft = 0;
        return _this;
    }
    FreezeTarget.prototype.onLoad = function () {
        this.ice = this.node.getChildByName("ice");
        this.enemy = this.getComponent(AIEnemy_1.default);
        this.label = this.getComponentInChildren(cc.Label);
    };
    FreezeTarget.prototype.start = function () {
    };
    FreezeTarget.prototype.cast = function () {
        Device_1.default.playSfx("ice");
        if (this.timeleft <= 0) {
            this.ice.opacity = 0.0;
            cc.tween(this.ice).to(1.0, { opacity: 255 }).start();
        }
        this.ice.active = true;
        this.unschedule(this.hide);
        this.scheduleOnce(this.hide, this.duration);
        this.timeleft = this.duration;
        this.label.string = this.timeleft.toString();
        this.label.node.scaleX = Math.sign(this.node.scaleX * this.enemy.baseScale);
        // freeze 
        this.enemy.go_frozen();
        this.unschedule(this.countdown);
        this.schedule(this.countdown, 1);
    };
    FreezeTarget.prototype.countdown = function () {
        this.timeleft -= 1;
        this.label.string = this.timeleft.toFixed();
    };
    FreezeTarget.prototype.hide = function () {
        this.ice.active = false;
        this.enemy.exit_frozen();
    };
    FreezeTarget = __decorate([
        ccclass
    ], FreezeTarget);
    return FreezeTarget;
}(cc.Component));
exports.default = FreezeTarget;

cc._RF.pop();