"use strict";
cc._RF.push(module, '4f0f8BSL8VHbKF2xS0xZF6k', 'SAutoRotate');
// framework/extension/shooter/SAutoRotate.ts

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
var SGameEntity_1 = require("./SGameEntity");
var ccUtil_1 = require("../../utils/ccUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var State;
(function (State) {
    State[State["Idle"] = 0] = "Idle";
    State[State["Rotate"] = 1] = "Rotate";
})(State || (State = {}));
var SAutoRotate = /** @class */ (function (_super) {
    __extends(SAutoRotate, _super);
    function SAutoRotate() {
        // seekPlayer:boolean = true;
        // seekNearest:boolean = true;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.target = null;
        // rotateRange:number = 10;
        _this.maxTurnRate = 0.02; //  360 s  
        // private targetAngle: number = 0;
        _this.heading = cc.v2(1, 0);
        _this.isRotating = false;
        /**可以旋转到后背 */
        _this.canRotateBack = false;
        return _this;
    }
    SAutoRotate.prototype.onLoad = function () {
        if (this.node.scaleX < 0) {
            this.heading = cc.v2(-1, 0);
        }
    };
    SAutoRotate.prototype.isBackRotate = function (toTarget) {
        if (!this.canRotateBack) {
            if (this.node.scaleX < 0) {
                if (toTarget.x > 0) {
                    return true;
                }
            }
            else {
                if (toTarget.x < 0) {
                    return true;
                }
            }
        }
        return false;
    };
    SAutoRotate.prototype.rotate = function () {
        if (!cc.isValid(this.target)) {
            this.rotateToVec();
            return 0;
        }
        if (this.target) {
            if (this.target.isDead()) {
                this.rotateToVec();
                return 0;
            }
        }
        var box = ccUtil_1.default.getWorldBoundingBox(this.node);
        var targetpos = ccUtil_1.default.getWorldPosition(this.target.node);
        var toTarget = targetpos.sub(box.center);
        if (this.isBackRotate(toTarget)) {
            this.rotateToVec();
            return;
        }
        toTarget.normalizeSelf();
        return this.rotateToVec(toTarget);
    };
    SAutoRotate.prototype.signVec2 = function (v1, v2) {
        if (v1.y * v2.x > v1.x * v2.y) {
            return -1;
        }
        else {
            return 1;
        }
    };
    SAutoRotate.prototype.rotateToVec = function (toTarget) {
        if (toTarget === void 0) { toTarget = null; }
        if (toTarget == null) {
            if (this.node.scaleX < 0) {
                toTarget = cc.v2(-1, 0);
            }
            else {
                toTarget = cc.Vec2.RIGHT;
            }
        }
        // let toTarget = cc.v2(1,0);
        var sign = this.signVec2(this.heading, toTarget);
        var angle = Math.acos(this.heading.dot(toTarget));
        if (angle < 0.0001) {
            return 0;
        }
        ;
        if (isNaN(angle)) {
            angle = 0;
        }
        if (angle > this.maxTurnRate) {
            angle = this.maxTurnRate;
        }
        this.heading.rotateSelf(sign * angle);
        var a = this.heading.signAngle(cc.Vec2.RIGHT);
        this.node.angle = cc.macro.DEG * a;
        if (this.node.scaleX < 0) {
            this.node.angle += 180;
        }
        return 1;
    };
    SAutoRotate.prototype.update = function (dt) {
        this.isRotating = !!this.rotate();
    };
    SAutoRotate.inaccuracyScalar = 3;
    __decorate([
        property(SGameEntity_1.default)
    ], SAutoRotate.prototype, "target", void 0);
    __decorate([
        property
    ], SAutoRotate.prototype, "maxTurnRate", void 0);
    SAutoRotate = __decorate([
        ccclass,
        menu("shooter/AutoRotate")
    ], SAutoRotate);
    return SAutoRotate;
}(cc.Component));
exports.default = SAutoRotate;

cc._RF.pop();