"use strict";
cc._RF.push(module, '358f1qIG4JC3oIJ6SV8FVQO', 'Ballon');
// Game/Scripts/Ballon.ts

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
var SkeletonBase_1 = require("./SkeletonBase");
var RemoveOutOfView_1 = require("./RemoveOutOfView");
var Device_1 = require("../../framework/misc/Device");
var event_1 = require("../../framework/core/event");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Ballon = /** @class */ (function (_super) {
    __extends(Ballon, _super);
    function Ballon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._fly = false;
        _this._dead = false;
        return _this;
    }
    Ballon.prototype.start = function () {
        this.armature.animation.timeScale = 0.5;
        this.collider = this.getComponent(cc.PhysicsCollider);
        this.addComponent(RemoveOutOfView_1.default);
    };
    Ballon.prototype.flyAway = function (frompos) {
        var _this = this;
        Device_1.default.playSfx("ballon_flyaway");
        this.node.active = true;
        this.collider.enabled = false;
        if (frompos) {
            this.scheduleOnce(function (_) {
                _this.node.position = frompos;
            }, 0);
        }
        this.skeleton.playAnimation("up", 0);
        this._fly = true;
    };
    Ballon.prototype.update = function () {
        if (this._fly) {
            this.body.linearVelocity = cc.v2(0, 180);
        }
    };
    Ballon.prototype.onDestroy = function () {
        event_1.evt.emit("Game.boollonDes");
    };
    Ballon.prototype.isDead = function () {
        return this._dead;
    };
    Ballon.prototype.goDead = function () {
        if (this._dead)
            return;
        this._dead = true;
        Device_1.default.playSfx("ballon_bomb");
        this.skeleton.timeScale = 1;
        this.stopAnim();
        this.playAnim("dead", 1);
        this.scheduleOnce(this.dispose, 1);
        // evt.emit("Game.boollonDes")
    };
    Ballon.prototype.dispose = function () {
        this.node.destroy();
    };
    Ballon = __decorate([
        ccclass
    ], Ballon);
    return Ballon;
}(SkeletonBase_1.default));
exports.default = Ballon;

cc._RF.pop();