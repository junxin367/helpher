"use strict";
cc._RF.push(module, 'beadecgi5RENYX9UGdR2FgV', 'Bounce');
// framework/extension/movement/Bounce.ts

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
var Signal_1 = require("../../../framework/core/Signal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var s_maxBounces = 3;
var s_gravity = 100;
var s_frictionFactorY = 0.1;
var s_frictionFactorX = 0.5;
var s_bounceFactor = 0.4;
var Bounce = /** @class */ (function (_super) {
    __extends(Bounce, _super);
    function Bounce() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.m_bounces = 0;
        _this.m_coinVerticalVelocity = 0;
        _this.m_vel = cc.v2(0, 0);
        _this.timeout = 0;
        _this.onFinish = new Signal_1.default();
        _this.onBounce = new Signal_1.default();
        _this.once = true;
        _this.bRotate = false;
        _this.bounceBaseY = 0;
        return _this;
    }
    Bounce.prototype.onLoad = function () {
    };
    Bounce.prototype.start = function () {
    };
    Bounce.prototype.onEnable = function () {
        this.once = true;
        this.m_bounces = 0;
        this.m_coinVerticalVelocity = 0;
        this.m_vel.mulSelf(0);
    };
    Bounce.prototype.go = function (x, y, bounceBaseY) {
        this.m_vel.x = x;
        this.m_vel.y = y;
        this.bounceBaseY = bounceBaseY;
    };
    Bounce.prototype.update = function (dt) {
        if (this.m_bounces < s_maxBounces) {
            if (this.node.y < this.bounceBaseY) {
                this.m_bounces++;
                //bounce 
                this.m_coinVerticalVelocity = this.m_coinVerticalVelocity * (-s_bounceFactor);
                this.node.y = this.bounceBaseY;
                // damping 
                this.m_vel.x = this.m_vel.x * s_frictionFactorX;
                this.m_vel.y = this.m_vel.y * s_frictionFactorY;
                if (this.bRotate)
                    this.node.angle += 60;
                this.onBounce.fire(this);
            }
            this.node.x += this.m_vel.x;
            this.node.y += this.m_vel.y;
            this.m_coinVerticalVelocity = this.m_coinVerticalVelocity + s_gravity * dt;
            //fall 
            // this.m_coinHeight = this.m_coinHeight - this.m_coinVerticalVelocity;
            this.node.y -= this.m_coinVerticalVelocity;
        }
        else {
            if (this.once) {
                this.once = false;
                if (this.timeout > 0) {
                    this.scheduleOnce(this.emitFinish, this.timeout);
                }
                else {
                    this.emitFinish();
                }
            }
        }
    };
    Bounce.prototype.emitFinish = function () {
        try {
            this.onFinish.fire(this);
        }
        catch (e) {
            console.error(e);
        }
    };
    Bounce = __decorate([
        ccclass
    ], Bounce);
    return Bounce;
}(cc.Component));
exports.default = Bounce;

cc._RF.pop();