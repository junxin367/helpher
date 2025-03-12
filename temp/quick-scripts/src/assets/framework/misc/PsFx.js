"use strict";
cc._RF.push(module, '8f976MS9EZH87zQZWSJbWFP', 'PsFx');
// framework/misc/PsFx.ts

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
var Device_1 = require("./Device");
var ccUtil_1 = require("../utils/ccUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var PsFx = /** @class */ (function (_super) {
    __extends(PsFx, _super);
    function PsFx() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property([cc.ParticleSystem])
        _this.particles = [];
        // @property([cc.Animation])
        _this.animations = [];
        // armature:dragonBones.ArmatureDisplay = null
        _this.armature = null;
        _this.defaultAnim = '';
        // name:string = null;
        // _callback:Function;
        // _target:any;
        _this.isPlaying = false;
        _this.sfx = null;
        _this.sprite = null;
        _this.childAnimation = true;
        _this.duration = -1;
        _this.fadeAfterFinish = -1;
        _this.repeatTime = 1;
        _this.removeAfterFinish = false;
        _this.hideAfterFinish = true;
        _this._label = null;
        _this.resetOrigin = true;
        return _this;
        // update (dt) {}
    }
    Object.defineProperty(PsFx.prototype, "label", {
        get: function () {
            if (this._label == null) {
                this._label = this.getComponentInChildren(cc.Label);
            }
            return this._label;
        },
        enumerable: false,
        configurable: true
    });
    PsFx.prototype.onLoad = function () {
        if (this.sprite == null) {
            this.sprite = this.getComponent(cc.Sprite);
            this.sprite = this.sprite || this.node.getComponentInChildren(cc.Sprite);
        }
        var anim = this.getComponent(cc.Animation);
        if (anim) {
            this.animations.push(anim);
        }
        var root_ps = this.getComponent(cc.ParticleSystem);
        root_ps && this.particles.push(root_ps);
        for (var i = 0; i < this.node.childrenCount; i++) {
            var child = this.node.children[i];
            var ps = child.getComponent(cc.ParticleSystem);
            if (ps)
                this.particles.push(ps);
            else if (this.childAnimation) {
                var anim_1 = child.getComponent(cc.Animation);
                if (anim_1)
                    this.animations.push(anim_1);
            }
        }
        if (typeof (dragonBones) != "undefined") {
            this.armature = this.getComponent(dragonBones.ArmatureDisplay);
            // if (!this.armature)
            // this.armature = this.getComponentInChildren(dragonBones.ArmatureDisplay);
            if (this.armature) {
                this.defaultAnim = this.armature.animationName;
            }
        }
    };
    PsFx.prototype.play = function (audio, spriteFrame) {
        var _this = this;
        if (audio === void 0) { audio = null; }
        if (spriteFrame === void 0) { spriteFrame = null; }
        this.isPlaying = true;
        var dur = 0;
        if (audio) {
            this.sfx = audio;
        }
        if (spriteFrame) {
            if (typeof (spriteFrame) == "string") {
                ccUtil_1.default.setDisplay(this.sprite, spriteFrame);
            }
            else {
                this.sprite.spriteFrame = spriteFrame;
            }
        }
        this.node.active = true;
        for (var i = 0; i < this.particles.length; i++) {
            var element = this.particles[i];
            element.resetSystem();
            if (dur < element.duration) {
                dur = element.duration + element.life + element.lifeVar;
            }
        }
        for (var i = 0; i < this.animations.length; i++) {
            var element = this.animations[i];
            var clips = element.getClips();
            if (clips && clips.length > 0) {
                var clip = clips[0];
                var duration = clip.duration / clip.speed;
                if (duration > dur) {
                    dur = duration;
                }
                element.play(clip.name);
            }
        }
        if (this.sfx) {
            Device_1.default.playEffect(this.sfx, false);
        }
        if (this.armature) {
            this.armature.playAnimation(this.defaultAnim, this.repeatTime);
            dur = this.duration;
            if (dur <= 0) {
                return new Promise(function (resolve, reject) {
                    // this.armature.addEventListener(dragonBones.EventObject.LOOP_COMPLETE, _=>{
                    //     console.log("loop complete");
                    //     this.fadeOnFinish(resolve)
                    // })
                    _this.armature.addEventListener(dragonBones.EventObject.COMPLETE, function (_) {
                        console.log("armature play complete");
                        if (_this.removeAfterFinish) {
                            _this.node.removeFromParent();
                        }
                        else {
                            _this.fadeOnFinish(resolve);
                        }
                    });
                });
            }
        }
        else {
            if (this.duration > 0) {
                dur = this.duration;
            }
            else {
                dur = dur + 0.1;
            }
        }
        // console.log("[psfx] play : " ,  this.name,  dur);
        return new Promise(function (resolve, reject) {
            _this.scheduleOnce(function (_) {
                if (!_this.isValid)
                    return resolve();
                if (_this.removeAfterFinish) {
                    _this.node.removeFromParent();
                    resolve();
                }
                else {
                    _this.fadeOnFinish(resolve);
                }
            }, dur);
        });
    };
    PsFx.prototype.fadeOnFinish = function (callback) {
        this.isPlaying = false;
        for (var i = 0; i < this.particles.length; i++) {
            var element = this.particles[i];
            element.stopSystem();
        }
        if (this.fadeAfterFinish > 0) {
            var seq = cc.sequence(cc.fadeOut(this.fadeAfterFinish), cc.callFunc(callback));
            this.node.runAction(seq);
        }
        else {
            if (this.hideAfterFinish) {
                this.node.active = false;
            }
            callback();
        }
    };
    PsFx.prototype.reset = function () {
        if (this.resetOrigin)
            this.node.position = cc.Vec2.ZERO;
        this.node.opacity = 255;
        this.animations.forEach(function (v) { return v.stepTo(0); });
    };
    PsFx.prototype.start = function () {
    };
    __decorate([
        property({ type: cc.AudioClip })
    ], PsFx.prototype, "sfx", void 0);
    __decorate([
        property(cc.Sprite)
    ], PsFx.prototype, "sprite", void 0);
    __decorate([
        property
    ], PsFx.prototype, "childAnimation", void 0);
    __decorate([
        property
    ], PsFx.prototype, "duration", void 0);
    __decorate([
        property
    ], PsFx.prototype, "fadeAfterFinish", void 0);
    __decorate([
        property
    ], PsFx.prototype, "repeatTime", void 0);
    __decorate([
        property
    ], PsFx.prototype, "removeAfterFinish", void 0);
    __decorate([
        property
    ], PsFx.prototype, "hideAfterFinish", void 0);
    __decorate([
        property
    ], PsFx.prototype, "resetOrigin", void 0);
    PsFx = __decorate([
        ccclass,
        menu("动画特效/PSFX")
    ], PsFx);
    return PsFx;
}(cc.Component));
exports.default = PsFx;

cc._RF.pop();