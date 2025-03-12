"use strict";
cc._RF.push(module, '136d2Hvn6BNOL0h0MuQISH6', 'SkeletonBase');
// Game/Scripts/SkeletonBase.ts

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
var ccUtil_1 = require("../../framework/utils/ccUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SkeletonBase = /** @class */ (function (_super) {
    __extends(SkeletonBase, _super);
    function SkeletonBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.skeleton = null;
        return _this;
    }
    SkeletonBase.prototype.onLoad = function () {
        this._world = cc.director.getPhysicsManager();
        this.skeleton = this.getComponent(dragonBones.ArmatureDisplay);
        if (this.skeleton)
            this.armature = this.skeleton.armature();
        this.body = this.getComponent(cc.RigidBody);
    };
    SkeletonBase.prototype.start = function () {
    };
    SkeletonBase.prototype.playAnim = function (anim, times) {
        if (times === void 0) { times = 0; }
        this.animState = this.armature.animation.fadeIn(anim, 0.1, times, 0, '1', dragonBones.AnimationFadeOutMode.SameLayerAndGroup);
        return this.animState;
    };
    SkeletonBase.prototype.playAnim2 = function (anim, anim2, times) {
        if (times === void 0) { times = 0; }
        this.animState = this.skeleton.playAnimation(anim, times);
        this.animState2 = this.armature.animation.fadeIn(anim2, 0.2, times, 0, '2', dragonBones.AnimationFadeOutMode.SameLayerAndGroup);
    };
    SkeletonBase.prototype.fadeIn = function (anim, times) {
        if (times === void 0) { times = 0; }
        this.animState2 = this.armature.animation.fadeIn(anim, 0.2, times, 0, '2', dragonBones.AnimationFadeOutMode.SameLayerAndGroup);
        return this.animState2;
    };
    SkeletonBase.prototype.fastFadeIn = function (anim, times) {
        if (times === void 0) { times = 0; }
        this.animState2 = this.armature.animation.fadeIn(anim, 0, times, 0, '2', dragonBones.AnimationFadeOutMode.SameLayerAndGroup);
        return this.animState2;
    };
    SkeletonBase.prototype.stopAnim = function () {
        if (this.animState)
            this.animState.stop();
        if (this.animState2)
            this.animState2.stop();
    };
    SkeletonBase.prototype.worldCenter = function () {
        var p1 = g.v2(ccUtil_1.default.getWorldPosition(this.node));
        p1.y += 50;
        return p1;
    };
    Object.defineProperty(SkeletonBase.prototype, "handSlot", {
        get: function () {
            if (this._handSlot == null) {
                var handSlot = this.armature.getSlot("hand");
                this._handSlot = handSlot;
                return handSlot;
            }
            return this._handSlot;
        },
        enumerable: false,
        configurable: true
    });
    SkeletonBase = __decorate([
        ccclass
    ], SkeletonBase);
    return SkeletonBase;
}(cc.Component));
exports.default = SkeletonBase;

cc._RF.pop();