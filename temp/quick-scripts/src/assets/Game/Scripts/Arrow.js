"use strict";
cc._RF.push(module, '4672eLYLCdHurz5iOTsLGL0', 'Arrow');
// Game/Scripts/Arrow.ts

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
var RemoveOutOfView_1 = require("./RemoveOutOfView");
var AIEnemy_1 = require("./AIEnemy");
var Role_1 = require("./Role");
var Device_1 = require("../../framework/misc/Device");
var Target_1 = require("./Target");
var Ballon_1 = require("./Ballon");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Arrow = /** @class */ (function (_super) {
    __extends(Arrow, _super);
    function Arrow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 1500;
        _this._isMoving = false;
        _this._vel = cc.v2();
        return _this;
    }
    Arrow.prototype.onLoad = function () {
        this.body = this.getComponent(cc.RigidBody);
        var check = this.addComponent(RemoveOutOfView_1.default);
        check.usingWorldSpace = true;
    };
    Arrow.prototype.start = function () {
    };
    Arrow.prototype.go = function () {
        this._isMoving = true;
        var rad = this.node.angle * cc.macro.RAD;
        this._vel = cc.v2(Math.cos(rad), Math.sin(rad));
        this._vel.mulSelf(this.speed);
    };
    Arrow.prototype.stop = function () {
        this._isMoving = false;
        this.body.linearVelocity = cc.v2(0, 0);
    };
    Arrow.prototype.stopWithInetia = function (scalar) {
        if (scalar === void 0) { scalar = 0.9; }
        this._vel.mulSelf(scalar);
    };
    Arrow.prototype.update = function () {
        // velocity
        if (this._isMoving) {
            this.body.linearVelocity = this._vel;
        }
    };
    Arrow.prototype.fadeAfter = function (delay, dur) {
        var _this = this;
        if (delay === void 0) { delay = 0.5; }
        if (dur === void 0) { dur = 0.6; }
        cc.tween(this.node).delay(delay).to(dur, { opacity: 0 }).call(function () { return _this.node.destroy(); }).start();
    };
    Arrow.prototype.onBeginContact = function (contact, self, other) {
        console.log(other.name);
        var group = other.node.group;
        if (group == "wall" || group == "pin") {
            // arrow_hit
            Device_1.default.playSfx("arrow_hit");
            this.stop();
            this.fadeAfter();
        }
        else if (group == 'enemy') {
            //射中敌人
            var enemy = other.getComponent(AIEnemy_1.default);
            if (!enemy.isDead()) {
                Device_1.default.playSfx("arrow_hit_body");
                enemy.goDead();
            }
        }
        else if (group == 'role') {
            //射中主角
            var role = other.getComponent(Role_1.default);
            Device_1.default.playSfx("arrow_hit_body");
            role.goDead();
        }
        else if (group == 'target') {
            //射中老头
            var target = other.getComponent(Target_1.default);
            Device_1.default.playSfx("arrow_hit_body");
            this.stopWithInetia(0.1);
            this.schedule(this.stop, 0.3);
            target.goDead();
        }
        else if (group == 'ballon') {
            var ballon = other.getComponent(Ballon_1.default);
            // ballon.flyAway();
            ballon.goDead();
        }
    };
    Arrow = __decorate([
        ccclass
    ], Arrow);
    return Arrow;
}(cc.Component));
exports.default = Arrow;

cc._RF.pop();