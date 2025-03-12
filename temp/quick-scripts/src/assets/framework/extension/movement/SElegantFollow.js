"use strict";
cc._RF.push(module, '2439fBM+7VCRYPbogT9Q/b7', 'SElegantFollow');
// framework/extension/movement/SElegantFollow.ts

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
var SMoveBase_1 = require("./SMoveBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ElegantFollow = /** @class */ (function (_super) {
    __extends(ElegantFollow, _super);
    function ElegantFollow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxSpeed = 10;
        _this.dir = cc.Vec2.UP;
        _this.enableTarget = true;
        _this.targetAngle = 0;
        _this.rotateSpeed = 10;
        _this.intervalCheckTarget = 1;
        return _this;
    }
    ElegantFollow.prototype.onLoad = function () {
    };
    ElegantFollow.prototype.reset = function () {
        this.dir = cc.Vec2.UP;
        this.node.rotation = 0;
        this.targetAngle = 0;
        this.tar = null;
    };
    ElegantFollow.prototype.onTargetChanged = function () {
        if (!this.target)
            return;
        //dir
        var box = this.node.getBoundingBoxToWorld();
        var targetpos = this.target.getBoundingBoxToWorld().center;
        var v = targetpos.sub(box.center);
        this.targetAngle = v.signAngle(cc.Vec2.RIGHT) * cc.macro.DEG;
    };
    ElegantFollow.prototype._step = function (dt) {
        // move via velocity
        var ang = this.dir.signAngle(cc.Vec2.RIGHT) * cc.macro.DEG;
        if (this.enableTarget) {
            if (Math.abs((ang) % 360 - (this.targetAngle)) > 30) {
                this.dir = this.dir.rotateSelf(-cc.macro.RAD * this.rotateSpeed);
                // 绕半全后重新计算 target 
            }
            else {
                this.onTargetChanged();
            }
        }
        this.velocity = this.dir.mul(this.maxSpeed);
        this.node.setPosition(this.node.position.add(this.velocity));
        if (this.rotateByVelocity) {
            this.node.rotation = this.rotationOffset + ang;
        }
    };
    ElegantFollow.prototype.onEnable = function () {
        // this.schedule(this.onTargetChanged,this.intervalCheckTarget)
    };
    ElegantFollow.prototype.onDisable = function () {
        // get target angle
        // this.unschedule(this.onTargetChanged);
    };
    __decorate([
        property({ tooltip: "0-1 is appropriate value range" })
    ], ElegantFollow.prototype, "intervalCheckTarget", void 0);
    ElegantFollow = __decorate([
        ccclass
    ], ElegantFollow);
    return ElegantFollow;
}(SMoveBase_1.default));
exports.default = ElegantFollow;

cc._RF.pop();