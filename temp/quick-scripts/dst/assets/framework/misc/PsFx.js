
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/PsFx.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxQc0Z4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUE4QjtBQUM5QiwwQ0FBcUM7QUFFL0IsSUFBQSxLQUE4QixFQUFFLENBQUMsVUFBVSxFQUF6QyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxJQUFJLFVBQWtCLENBQUM7QUFJbEQ7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFxTUM7UUFuTUcsaUNBQWlDO1FBQ2pDLGVBQVMsR0FBd0IsRUFBRSxDQUFBO1FBRW5DLDRCQUE0QjtRQUM1QixnQkFBVSxHQUFtQixFQUFFLENBQUE7UUFHL0IsOENBQThDO1FBQzlDLGNBQVEsR0FBZ0MsSUFBSSxDQUFDO1FBRTdDLGlCQUFXLEdBQVcsRUFBRSxDQUFBO1FBRXhCLHNCQUFzQjtRQUV0QixzQkFBc0I7UUFDdEIsZUFBZTtRQUVmLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFHM0IsU0FBRyxHQUFpQixJQUFJLENBQUE7UUFHeEIsWUFBTSxHQUFjLElBQUksQ0FBQTtRQUd4QixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUcvQixjQUFRLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFHdEIscUJBQWUsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUc3QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUd2Qix1QkFBaUIsR0FBWSxLQUFLLENBQUM7UUFHbkMscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFhLElBQUksQ0FBQztRQVVoQyxpQkFBVyxHQUFZLElBQUksQ0FBQzs7UUE2STVCLGlCQUFpQjtJQUNyQixDQUFDO0lBdEpHLHNCQUFXLHVCQUFLO2FBQWhCO1lBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtnQkFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFD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LENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQVgsQ0FBVyxDQUFDLENBQUE7SUFDN0MsQ0FBQztJQUVELG9CQUFLLEdBQUw7SUFFQSxDQUFDO0lBNUtEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztxQ0FDVDtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNJO0lBR3hCO1FBREMsUUFBUTtnREFDc0I7SUFHL0I7UUFEQyxRQUFROzBDQUNhO0lBR3RCO1FBREMsUUFBUTtpREFDb0I7SUFHN0I7UUFEQyxRQUFROzRDQUNjO0lBR3ZCO1FBREMsUUFBUTttREFDMEI7SUFHbkM7UUFEQyxRQUFRO2lEQUN1QjtJQVloQztRQURDLFFBQVE7NkNBQ21CO0lBdkRYLElBQUk7UUFGeEIsT0FBTztRQUNQLElBQUksQ0FBQyxXQUFXLENBQUM7T0FDRyxJQUFJLENBcU14QjtJQUFELFdBQUM7Q0FyTUQsQUFxTUMsQ0FyTWlDLEVBQUUsQ0FBQyxTQUFTLEdBcU03QztrQkFyTW9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGV2aWNlIGZyb20gXCIuL0RldmljZVwiO1xyXG5pbXBvcnQgY2NVdGlsIGZyb20gXCIuLi91dGlscy9jY1V0aWxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIG1lbnUgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5AbWVudShcIuWKqOeUu+eJueaViC9QU0ZYXCIpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBzRnggZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShbY2MuUGFydGljbGVTeXN0ZW1dKVxyXG4gICAgcGFydGljbGVzOiBjYy5QYXJ0aWNsZVN5c3RlbVtdID0gW11cclxuXHJcbiAgICAvLyBAcHJvcGVydHkoW2NjLkFuaW1hdGlvbl0pXHJcbiAgICBhbmltYXRpb25zOiBjYy5BbmltYXRpb25bXSA9IFtdXHJcblxyXG5cclxuICAgIC8vIGFybWF0dXJlOmRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSA9IG51bGxcclxuICAgIGFybWF0dXJlOiBkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkgPSBudWxsO1xyXG5cclxuICAgIGRlZmF1bHRBbmltOiBzdHJpbmcgPSAnJ1xyXG5cclxuICAgIC8vIG5hbWU6c3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICAvLyBfY2FsbGJhY2s6RnVuY3Rpb247XHJcbiAgICAvLyBfdGFyZ2V0OmFueTtcclxuXHJcbiAgICBpc1BsYXlpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcclxuICAgIHNmeDogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBzcHJpdGU6IGNjLlNwcml0ZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGNoaWxkQW5pbWF0aW9uOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGR1cmF0aW9uOiBudW1iZXIgPSAtMTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGZhZGVBZnRlckZpbmlzaDogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICByZXBlYXRUaW1lOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcmVtb3ZlQWZ0ZXJGaW5pc2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGhpZGVBZnRlckZpbmlzaDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgcHJpdmF0ZSBfbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IGxhYmVsKCk6IGNjLkxhYmVsIHtcclxuICAgICAgICBpZiAodGhpcy5fbGFiZWwgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sYWJlbCA9IHRoaXMuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcmVzZXRPcmlnaW46IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zcHJpdGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlID0gdGhpcy5zcHJpdGUgfHwgdGhpcy5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuU3ByaXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgaWYgKGFuaW0pIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zLnB1c2goYW5pbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByb290X3BzID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pXHJcbiAgICAgICAgcm9vdF9wcyAmJiB0aGlzLnBhcnRpY2xlcy5wdXNoKHJvb3RfcHMpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5ub2RlLmNoaWxkcmVuW2ldXHJcbiAgICAgICAgICAgIGxldCBwcyA9IGNoaWxkLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSlcclxuICAgICAgICAgICAgaWYgKHBzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaChwcyk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY2hpbGRBbmltYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGxldCBhbmltID0gY2hpbGQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICAgICAgICAgIGlmIChhbmltKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKGFuaW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgKGRyYWdvbkJvbmVzKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJtYXR1cmUgPSB0aGlzLmdldENvbXBvbmVudChkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkpO1xyXG4gICAgICAgICAgICAvLyBpZiAoIXRoaXMuYXJtYXR1cmUpXHJcbiAgICAgICAgICAgIC8vIHRoaXMuYXJtYXR1cmUgPSB0aGlzLmdldENvbXBvbmVudEluQ2hpbGRyZW4oZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXJtYXR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdEFuaW0gPSB0aGlzLmFybWF0dXJlLmFuaW1hdGlvbk5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbGF5KGF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsLCBzcHJpdGVGcmFtZSA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgbGV0IGR1ciA9IDA7XHJcbiAgICAgICAgaWYgKGF1ZGlvKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Z4ID0gYXVkaW9cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHNwcml0ZUZyYW1lKSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjY1V0aWwuc2V0RGlzcGxheSh0aGlzLnNwcml0ZSwgc3ByaXRlRnJhbWUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnBhcnRpY2xlc1tpXTtcclxuICAgICAgICAgICAgZWxlbWVudC5yZXNldFN5c3RlbSgpO1xyXG4gICAgICAgICAgICBpZiAoZHVyIDwgZWxlbWVudC5kdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgZHVyID0gZWxlbWVudC5kdXJhdGlvbiArIGVsZW1lbnQubGlmZSArIGVsZW1lbnQubGlmZVZhclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbmltYXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmFuaW1hdGlvbnNbaV07XHJcbiAgICAgICAgICAgIGxldCBjbGlwcyA9IGVsZW1lbnQuZ2V0Q2xpcHMoKVxyXG4gICAgICAgICAgICBpZiAoY2xpcHMgJiYgY2xpcHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsaXAgPSBjbGlwc1swXVxyXG4gICAgICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gY2xpcC5kdXJhdGlvbiAvIGNsaXAuc3BlZWRcclxuICAgICAgICAgICAgICAgIGlmIChkdXJhdGlvbiA+IGR1cikge1xyXG4gICAgICAgICAgICAgICAgICAgIGR1ciA9IGR1cmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wbGF5KGNsaXAubmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNmeCkge1xyXG4gICAgICAgICAgICBEZXZpY2UucGxheUVmZmVjdCh0aGlzLnNmeCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYXJtYXR1cmUpIHtcclxuICAgICAgICAgICAgdGhpcy5hcm1hdHVyZS5wbGF5QW5pbWF0aW9uKHRoaXMuZGVmYXVsdEFuaW0sIHRoaXMucmVwZWF0VGltZSk7XHJcbiAgICAgICAgICAgIGR1ciA9IHRoaXMuZHVyYXRpb25cclxuICAgICAgICAgICAgaWYgKGR1ciA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuYXJtYXR1cmUuYWRkRXZlbnRMaXN0ZW5lcihkcmFnb25Cb25lcy5FdmVudE9iamVjdC5MT09QX0NPTVBMRVRFLCBfPT57XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwibG9vcCBjb21wbGV0ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5mYWRlT25GaW5pc2gocmVzb2x2ZSlcclxuICAgICAgICAgICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJtYXR1cmUuYWRkRXZlbnRMaXN0ZW5lcihkcmFnb25Cb25lcy5FdmVudE9iamVjdC5DT01QTEVURSwgXyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXJtYXR1cmUgcGxheSBjb21wbGV0ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVtb3ZlQWZ0ZXJGaW5pc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZhZGVPbkZpbmlzaChyZXNvbHZlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kdXJhdGlvbiA+IDApIHtcclxuICAgICAgICAgICAgICAgIGR1ciA9IHRoaXMuZHVyYXRpb25cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGR1ciA9IGR1ciArIDAuMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIltwc2Z4XSBwbGF5IDogXCIgLCAgdGhpcy5uYW1lLCAgZHVyKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShfID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZW1vdmVBZnRlckZpbmlzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZhZGVPbkZpbmlzaChyZXNvbHZlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBkdXIpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmYWRlT25GaW5pc2goY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJ0aWNsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucGFydGljbGVzW2ldO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0b3BTeXN0ZW0oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZmFkZUFmdGVyRmluaXNoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgc2VxID0gY2Muc2VxdWVuY2UoY2MuZmFkZU91dCh0aGlzLmZhZGVBZnRlckZpbmlzaCksIGNjLmNhbGxGdW5jKGNhbGxiYWNrKSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihzZXEpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGlkZUFmdGVyRmluaXNoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKTogYW55IHtcclxuICAgICAgICBpZiAodGhpcy5yZXNldE9yaWdpbilcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5mb3JFYWNoKHYgPT4gdi5zdGVwVG8oMCkpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19