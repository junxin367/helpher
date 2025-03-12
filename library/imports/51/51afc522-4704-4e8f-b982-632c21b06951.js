"use strict";
cc._RF.push(module, '51afcUiRwROj7mCYywhsGlR', 'SMoveBase');
// framework/extension/movement/SMoveBase.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MoveBase = /** @class */ (function (_super) {
    __extends(MoveBase, _super);
    function MoveBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moveOnLoad = true;
        _this.velocity = cc.Vec2.RIGHT;
        _this.tar = null;
        _this.rotateByVelocity = false;
        _this.rotationOffset = 0;
        // _updateCallback: Function;
        // _callbackTarget: any;
        // _cmdUpdateDur: number = 0;
        // _updateTimer: number = 0;
        _this._paused = false;
        _this.tarPos = cc.Vec2.ZERO;
        return _this;
    }
    MoveBase.prototype.onTargetChanged = function (t) {
    };
    Object.defineProperty(MoveBase.prototype, "target", {
        get: function () {
            return this.tar;
        },
        set: function (k) {
            if (k instanceof cc.Vec3 || k instanceof cc.Vec2) {
                this.tarPos = k;
            }
            else {
                this.tar = k;
            }
            this.onTargetChanged(k);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MoveBase.prototype, "targetPosition", {
        get: function () {
            return this.tarPos;
        },
        enumerable: false,
        configurable: true
    });
    MoveBase.prototype.reset = function () {
    };
    MoveBase.prototype._step = function (dt) {
    };
    MoveBase.prototype.onBeforeUpdate = function (callback, target, duration) {
        if (duration === void 0) { duration = -1; }
    };
    MoveBase.prototype.onDisable = function () {
        // this.removeCommand()
    };
    // addCommand(callback, target, duration = -1) {
    //     this._updateTimer = 0;
    //     this._updateCallback = callback,
    //         this._callbackTarget = target;
    //     this._cmdUpdateDur = duration;
    // }
    // removeCommand(callback?, t?) {
    //     this._updateCallback = null;
    // }
    MoveBase.prototype.update = function (dt) {
        // if (this._updateCallback) {
        //     this._updateCallback.call(this._callbackTarget, this)
        //     if (this._cmdUpdateDur != -1) {
        //         this._updateTimer = this._updateTimer + dt;
        //         if (this._updateTimer >= this._cmdUpdateDur) {
        //             this.removeCommand();
        //         }
        //     }
        // }
    };
    MoveBase.prototype.isInDistance = function (targetpos, radiusSq) {
        // let c = this.node.getBoundingBoxToWorld().center
        var c = ccUtil.getWorldPosition(this.node);
        var v = targetpos.sub(c);
        if (v.magSqr() < radiusSq) {
            return true;
        }
        return false;
    };
    MoveBase.prototype.isStatic = function (variance) {
        if (variance === void 0) { variance = 1; }
        return this.velocity.fuzzyEquals(cc.Vec2.ZERO, variance);
    };
    MoveBase.prototype.step = function (dt) {
        if (this.moveOnLoad || this._paused) {
            return;
        }
        this._step(dt);
    };
    MoveBase.prototype.pause = function () {
        this._paused = true;
    };
    MoveBase.prototype.resume = function () {
        this._paused = false;
    };
    MoveBase.prototype.lateUpdate = function () {
        if (this.moveOnLoad && !this._paused) {
            this._step();
        }
    };
    __decorate([
        property
    ], MoveBase.prototype, "moveOnLoad", void 0);
    __decorate([
        property
    ], MoveBase.prototype, "velocity", void 0);
    __decorate([
        property({ type: cc.Node, displayName: "target" })
    ], MoveBase.prototype, "tar", void 0);
    __decorate([
        property
    ], MoveBase.prototype, "rotateByVelocity", void 0);
    __decorate([
        property
    ], MoveBase.prototype, "rotationOffset", void 0);
    MoveBase = __decorate([
        ccclass
    ], MoveBase);
    return MoveBase;
}(cc.Component));
exports.default = MoveBase;

cc._RF.pop();