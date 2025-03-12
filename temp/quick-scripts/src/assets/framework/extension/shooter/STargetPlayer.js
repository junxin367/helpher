"use strict";
cc._RF.push(module, 'cc787x1xu1OCamO8vAZfoDH', 'STargetPlayer');
// framework/extension/shooter/STargetPlayer.ts

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
var MoveEngine_1 = require("../movement/MoveEngine");
var ShootManager_1 = require("./ShootManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
var STargetPlayer = /** @class */ (function (_super) {
    __extends(STargetPlayer, _super);
    function STargetPlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.alwaysPointTarget = false;
        _this.rotationOffset = 0;
        _this.duration = 4;
        _this.lastVel = cc.Vec2.ZERO;
        return _this;
        // update (dt) {}
    }
    STargetPlayer.prototype.start = function () {
    };
    STargetPlayer.prototype.onLoad = function () {
        this.moveEntity = this.getComponent(MoveEngine_1.default);
    };
    STargetPlayer.prototype.onEnable = function () {
        this.lastVel = cc.Vec2.ZERO;
        this.target = ShootManager_1.default.instance.player;
        this.moveEntity.target = this.target;
        this.scheduleOnce(this.disableTarget, this.duration);
    };
    STargetPlayer.prototype.onDisable = function () {
        this.unschedule(this.disableTarget);
    };
    STargetPlayer.prototype.disableTarget = function () {
        this.moveEntity.target = null;
        var rot = cc.misc.degreesToRadians(this.rotationOffset - this.node.rotation);
        this.lastVel = cc.v2(Math.cos(rot), Math.sin(rot));
        // this.node.rotation = this.rotationOffset +  this.moveEntity.velocity.signAngle(cc.Vec2.RIGHT) * cc.macro.DEG;
    };
    STargetPlayer.prototype.update = function () {
        var toTarget = this.target.position.sub(this.node.position);
        // if(toTarget.magSqr() < 200 * 200)
        // {
        //     this.moveEntity.target = this.target;
        // }
        if (this.moveEntity.target == null) {
            this.moveEntity.applyForce(this.lastVel);
            return;
        }
        if (this.alwaysPointTarget) {
            this.node.rotation = this.rotationOffset + toTarget.signAngle(cc.Vec2.RIGHT) * cc.macro.DEG;
        }
    };
    __decorate([
        property
    ], STargetPlayer.prototype, "alwaysPointTarget", void 0);
    __decorate([
        property
    ], STargetPlayer.prototype, "rotationOffset", void 0);
    __decorate([
        property
    ], STargetPlayer.prototype, "duration", void 0);
    STargetPlayer = __decorate([
        ccclass,
        requireComponent(MoveEngine_1.default)
    ], STargetPlayer);
    return STargetPlayer;
}(cc.Component));
exports.default = STargetPlayer;

cc._RF.pop();