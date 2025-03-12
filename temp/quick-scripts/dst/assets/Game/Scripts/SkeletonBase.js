
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/SkeletonBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcU2tlbGV0b25CYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHVEQUFrRDtBQUc5QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQTtBQUV6QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQXFFQztRQXBFRyxjQUFRLEdBQWdDLElBQUksQ0FBQzs7SUFvRWpELENBQUM7SUE1REcsNkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1FBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDL0QsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQTBCLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsNEJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCwrQkFBUSxHQUFSLFVBQVMsSUFBSSxFQUFFLEtBQVM7UUFBVCxzQkFBQSxFQUFBLFNBQVM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxXQUFXLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUM3SCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7SUFDekIsQ0FBQztJQUVELGdDQUFTLEdBQVQsVUFBVSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQVM7UUFBVCxzQkFBQSxFQUFBLFNBQVM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxXQUFXLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtJQUNuSSxDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFPLElBQUksRUFBRSxLQUFTO1FBQVQsc0JBQUEsRUFBQSxTQUFTO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsV0FBVyxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDOUgsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFBO0lBQzFCLENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVcsSUFBSSxFQUFFLEtBQVM7UUFBVCxzQkFBQSxFQUFBLFNBQVM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxXQUFXLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUM1SCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUE7SUFDMUIsQ0FBQztJQUdELCtCQUFRLEdBQVI7UUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTO1lBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyxVQUFVO1lBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUNJLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsZ0JBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsRCxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUtELHNCQUFJLGtDQUFRO2FBQVo7WUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO2dCQUN4QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUE7Z0JBQ3pCLE9BQU8sUUFBUSxDQUFBO2FBQ2xCO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBakVnQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBcUVoQztJQUFELG1CQUFDO0NBckVELEFBcUVDLENBckV5QyxFQUFFLENBQUMsU0FBUyxHQXFFckQ7a0JBckVvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXZ0IH0gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9jb3JlL2V2ZW50XCI7XHJcbmltcG9ydCBjY1V0aWwgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay91dGlscy9jY1V0aWxcIjtcclxuaW1wb3J0IFVuaXR5IGZyb20gXCIuL0NvbW1vbi9Vbml0eVwiO1xyXG5cclxubGV0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3JcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2tlbGV0b25CYXNlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHNrZWxldG9uOiBkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkgPSBudWxsO1xyXG4gICAgYXJtYXR1cmU6IGRyYWdvbkJvbmVzLkFybWF0dXJlO1xyXG4gICAgYW5pbVN0YXRlOiBkcmFnb25Cb25lcy5BbmltYXRpb25TdGF0ZTtcclxuICAgIGFuaW1TdGF0ZTI6IGRyYWdvbkJvbmVzLkFuaW1hdGlvblN0YXRlO1xyXG5cclxuICAgIF93b3JsZDogY2MuUGh5c2ljc01hbmFnZXJcclxuXHJcbiAgICBib2R5OiBjYy5SaWdpZEJvZHk7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5fd29ybGQgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpXHJcbiAgICAgICAgdGhpcy5za2VsZXRvbiA9IHRoaXMuZ2V0Q29tcG9uZW50KGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2tlbGV0b24pXHJcbiAgICAgICAgICAgIHRoaXMuYXJtYXR1cmUgPSB0aGlzLnNrZWxldG9uLmFybWF0dXJlKCkgYXMgZHJhZ29uQm9uZXMuQXJtYXR1cmU7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcGxheUFuaW0oYW5pbSwgdGltZXMgPSAwKSB7XHJcbiAgICAgICAgdGhpcy5hbmltU3RhdGUgPSB0aGlzLmFybWF0dXJlLmFuaW1hdGlvbi5mYWRlSW4oYW5pbSwgMC4xLCB0aW1lcywgMCwgJzEnLCBkcmFnb25Cb25lcy5BbmltYXRpb25GYWRlT3V0TW9kZS5TYW1lTGF5ZXJBbmRHcm91cClcclxuICAgICAgICByZXR1cm4gdGhpcy5hbmltU3RhdGVcclxuICAgIH1cclxuXHJcbiAgICBwbGF5QW5pbTIoYW5pbSwgYW5pbTIsIHRpbWVzID0gMCkge1xyXG4gICAgICAgIHRoaXMuYW5pbVN0YXRlID0gdGhpcy5za2VsZXRvbi5wbGF5QW5pbWF0aW9uKGFuaW0sIHRpbWVzKTtcclxuICAgICAgICB0aGlzLmFuaW1TdGF0ZTIgPSB0aGlzLmFybWF0dXJlLmFuaW1hdGlvbi5mYWRlSW4oYW5pbTIsIDAuMiwgdGltZXMsIDAsICcyJywgZHJhZ29uQm9uZXMuQW5pbWF0aW9uRmFkZU91dE1vZGUuU2FtZUxheWVyQW5kR3JvdXApXHJcbiAgICB9XHJcblxyXG4gICAgZmFkZUluKGFuaW0sIHRpbWVzID0gMCkge1xyXG4gICAgICAgIHRoaXMuYW5pbVN0YXRlMiA9IHRoaXMuYXJtYXR1cmUuYW5pbWF0aW9uLmZhZGVJbihhbmltLCAwLjIsIHRpbWVzLCAwLCAnMicsIGRyYWdvbkJvbmVzLkFuaW1hdGlvbkZhZGVPdXRNb2RlLlNhbWVMYXllckFuZEdyb3VwKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmFuaW1TdGF0ZTJcclxuICAgIH1cclxuXHJcbiAgICBmYXN0RmFkZUluKGFuaW0sIHRpbWVzID0gMCkge1xyXG4gICAgICAgIHRoaXMuYW5pbVN0YXRlMiA9IHRoaXMuYXJtYXR1cmUuYW5pbWF0aW9uLmZhZGVJbihhbmltLCAwLCB0aW1lcywgMCwgJzInLCBkcmFnb25Cb25lcy5BbmltYXRpb25GYWRlT3V0TW9kZS5TYW1lTGF5ZXJBbmRHcm91cClcclxuICAgICAgICByZXR1cm4gdGhpcy5hbmltU3RhdGUyXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0b3BBbmltKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1TdGF0ZSlcclxuICAgICAgICAgICAgdGhpcy5hbmltU3RhdGUuc3RvcCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1TdGF0ZTIpXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbVN0YXRlMi5zdG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgd29ybGRDZW50ZXIoKSB7XHJcbiAgICAgICAgbGV0IHAxID0gZy52MihjY1V0aWwuZ2V0V29ybGRQb3NpdGlvbih0aGlzLm5vZGUpKTtcclxuICAgICAgICBwMS55ICs9IDUwO1xyXG4gICAgICAgIHJldHVybiBwMTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX2hhbmRTbG90OiBkcmFnb25Cb25lcy5TbG90O1xyXG5cclxuICAgIGdldCBoYW5kU2xvdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5faGFuZFNsb3QgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgaGFuZFNsb3QgPSB0aGlzLmFybWF0dXJlLmdldFNsb3QoXCJoYW5kXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kU2xvdCA9IGhhbmRTbG90XHJcbiAgICAgICAgICAgIHJldHVybiBoYW5kU2xvdFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faGFuZFNsb3Q7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0iXX0=