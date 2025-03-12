
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Bomb.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f18b5j+0yhGi51AISgM2sHK', 'Bomb');
// Game/Scripts/Bomb.ts

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
var BoostsAction_1 = require("../../framework/misc/BoostsAction");
var event_1 = require("../../framework/core/event");
var SkeletonBase_1 = require("./SkeletonBase");
var Device_1 = require("../../framework/misc/Device");
var RemoveOutOfView_1 = require("./RemoveOutOfView");
var Signal_1 = require("../../framework/core/Signal");
var Game_1 = require("./Game");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var Bomb = /** @class */ (function (_super) {
    __extends(Bomb, _super);
    function Bomb() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this._timeLeft = 0;
        _this.onTimeLeftChanged = new Signal_1.default();
        _this.bombExplosion = null;
        _this.preExplosion = null;
        _this.node_tooltip = null;
        _this.node_light = null;
        _this.holder = null;
        _this.onece = true;
        _this.isExploded = false;
        return _this;
    }
    Object.defineProperty(Bomb.prototype, "timeLeft", {
        get: function () {
            return this._timeLeft;
        },
        set: function (v) {
            this._timeLeft = v;
            this.onTimeLeftChanged.fire(v);
            this.label.string = v.toString();
        },
        enumerable: false,
        configurable: true
    });
    Bomb.prototype.onDestroy = function () {
        event_1.evt.emit('Game.bombDes');
        event_1.evt.off(this);
    };
    Bomb.prototype.start = function () {
        event_1.evt.on("Game.onStarted", this.onGameStarted, this);
        event_1.evt.on("Game.win", this.onWin, this);
        event_1.evt.on("Game.lose", this.onGameLose, this);
        event_1.evt.on("Game.pause", this.onGameLose, this);
        event_1.evt.on("Game.resume", this.onGameStarted, this);
        this.label.string = this._timeLeft.toString();
        this.preExplosion.on("finished", this.playSecondExplode, this);
        this.collider = this.getComponent(cc.PhysicsCollider);
        if (!Game_1.default.instance.isOver) {
            this.schedule(this.countdown, 1);
        }
        var roov = this.getOrAddComponent(RemoveOutOfView_1.default);
        roov.onOffScreen.on(this.onOffScreen, this);
    };
    Bomb.prototype.onWin = function () {
        this.unschedule(this.countdown);
    };
    Bomb.prototype.onGameLose = function () {
        this.unschedule(this.countdown);
    };
    Bomb.prototype.onGameStarted = function () {
        this.schedule(this.countdown, 1);
    };
    Bomb.prototype.onOffScreen = function () {
    };
    Bomb.prototype.countdown = function () {
        this.timeLeft--;
        if (this.timeLeft <= 3) {
            this.label.node.color = cc.Color.RED;
            this.startShake();
        }
        else {
            this.label.node.color = cc.Color.WHITE;
            this.stopShake();
        }
        if (this.timeLeft <= 0) {
            this.unschedule(this.countdown);
            this.explode();
        }
    };
    Object.defineProperty(Bomb.prototype, "isHiding", {
        get: function () {
            return this.node_tooltip.active == false;
        },
        enumerable: false,
        configurable: true
    });
    Bomb.prototype.hide = function () {
        this.node.stopAllActions();
        this.node_tooltip.active = false;
        var display = this.getComponent(cc.Sprite);
        display && (display.enabled = false);
        this.node_light.active = false;
    };
    Bomb.prototype.show = function () {
        this.node_tooltip.active = true;
        var display = this.getComponent(cc.Sprite);
        display && (display.enabled = true);
        this.node_light.active = true;
    };
    Bomb.prototype.goAway = function (dir) {
        this.collider.enabled = false;
        this.unschedule(this.countdown);
        this.stopShake();
        this.body.linearDamping = 0;
        this.body.linearVelocity = cc.v2(dir * 1000, 1000);
    };
    Bomb.prototype.startShake = function () {
        if (this.shakeAction) {
            return;
        }
        this.shakeAction = this.node.runAction(BoostsAction_1.Shake.create(3.0, 2, 0));
        // this.shakeAction = this.node.runAction(cc.blink(3,3))
    };
    Bomb.prototype.stopShake = function () {
        this.node.stopAction(this.shakeAction);
        this.shakeAction = null;
    };
    Bomb.prototype.drop = function (pos) {
        this.show();
        this.scheduleOnce(this.doDrop.bind(this, pos));
        // this.body.angularVelocity = 1500;
    };
    Bomb.prototype.doDrop = function (pos) {
        this.node.setPosition(pos);
        this.body.gravityScale = 10;
        this.body.linearDamping = 0;
        this.body.linearVelocity = cc.v2(0, 1000);
    };
    Bomb.prototype.explode = function () {
        //爆炸 
        this.isExploded = true;
        if (this.bombExplosion) {
            this.getComponent(cc.Sprite).enabled = false;
            this.node_tooltip.active = false;
            this.node_light.active = false;
            if (cc.isValid(this.holder)) {
                this.node.position = this.holder.position;
            }
            this.preExplosion.play("pre_explode");
            // this.bombExplosion.addEventListener(dragonBones.EventObject.COMPLETE, () => {
            //     this.node.destroy();
            // })
        }
    };
    Bomb.prototype.playSecondExplode = function () {
        if (!this.onece)
            return;
        this.onece = false;
        this.bombExplosion.play("explode");
        this.preExplosion.play("pre_explode2");
        Device_1.default.playSfx("bomb_explode");
        cc.Camera.main.node.runAction(cc.sequence(BoostsAction_1.Shake.create(0.5, 5, 5), cc.callFunc(this.loseGame, this)));
        event_1.evt.emit("Game.bomb");
    };
    Bomb.prototype.loseGame = function () {
        this.node && this.node.destroy();
        event_1.evt.emit("Game.lose");
    };
    Bomb.prototype.update = function () {
        if (this.body.linearVelocity.y == 0)
            return;
        this.node.stopAllActions();
    };
    __decorate([
        property(cc.Label)
    ], Bomb.prototype, "label", void 0);
    __decorate([
        property({ displayName: "剩余时间" })
    ], Bomb.prototype, "_timeLeft", void 0);
    __decorate([
        property
    ], Bomb.prototype, "timeLeft", null);
    __decorate([
        property(cc.Animation)
    ], Bomb.prototype, "bombExplosion", void 0);
    __decorate([
        property(cc.Animation)
    ], Bomb.prototype, "preExplosion", void 0);
    __decorate([
        property(cc.Node)
    ], Bomb.prototype, "node_tooltip", void 0);
    __decorate([
        property(cc.Node)
    ], Bomb.prototype, "node_light", void 0);
    Bomb = __decorate([
        ccclass,
        executeInEditMode
    ], Bomb);
    return Bomb;
}(SkeletonBase_1.default));
exports.default = Bomb;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcQm9tYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBMEQ7QUFDMUQsb0RBQWlEO0FBQ2pELCtDQUEwQztBQUUxQyxzREFBaUQ7QUFDakQscURBQWdEO0FBQ2hELHNEQUFpRDtBQUNqRCwrQkFBMEI7QUFHdEIsSUFBQSxLQUEyQyxFQUFFLENBQUMsVUFBVSxFQUF0RCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxpQkFBaUIsdUJBQWtCLENBQUE7QUFHNUQ7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUE0TEM7UUF6TEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLHVCQUFpQixHQUFXLElBQUksZ0JBQU0sRUFBRSxDQUFDO1FBUXpDLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUduQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFJbEMsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsWUFBTSxHQUFZLElBQUksQ0FBQztRQU92QixXQUFLLEdBQUcsSUFBSSxDQUFDO1FBa0hiLGdCQUFVLEdBQUcsS0FBSyxDQUFDOztJQXVDdkIsQ0FBQztJQWpMRyxzQkFBSSwwQkFBUTthQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ3pCLENBQUM7YUFpQkQsVUFBYSxDQUFDO1lBQ1YsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDcEMsQ0FBQzs7O09BckJBO0lBMEJELHdCQUFTLEdBQVQ7UUFDSSxXQUFHLENB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LElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQXhMRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3VDQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDOzJDQUNaO0lBS3RCO1FBREMsUUFBUTt3Q0FHUjtJQUdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7K0NBQ1k7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDVztJQUlsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNXO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ1M7SUExQlYsSUFBSTtRQUZ4QixPQUFPO1FBQ1AsaUJBQWlCO09BQ0csSUFBSSxDQTRMeEI7SUFBRCxXQUFDO0NBNUxELEFBNExDLENBNUxpQyxzQkFBWSxHQTRMN0M7a0JBNUxvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hha2UgfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL21pc2MvQm9vc3RzQWN0aW9uXCI7XHJcbmltcG9ydCB7IGV2dCB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvY29yZS9ldmVudFwiO1xyXG5pbXBvcnQgU2tlbGV0b25CYXNlIGZyb20gXCIuL1NrZWxldG9uQmFzZVwiO1xyXG5pbXBvcnQgY2NVdGlsIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdXRpbHMvY2NVdGlsXCI7XHJcbmltcG9ydCBEZXZpY2UgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9taXNjL0RldmljZVwiO1xyXG5pbXBvcnQgUmVtb3ZlT3V0T2ZWaWV3IGZyb20gXCIuL1JlbW92ZU91dE9mVmlld1wiO1xyXG5pbXBvcnQgU2lnbmFsIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvY29yZS9TaWduYWxcIjtcclxuaW1wb3J0IEdhbWUgZnJvbSBcIi4vR2FtZVwiO1xyXG5pbXBvcnQgUm9sZSBmcm9tIFwiLi9Sb2xlXCI7XHJcblxyXG5sZXQgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUgfSA9IGNjLl9kZWNvcmF0b3JcclxuQGNjY2xhc3NcclxuQGV4ZWN1dGVJbkVkaXRNb2RlXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvbWIgZXh0ZW5kcyBTa2VsZXRvbkJhc2Uge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5Ymp5L2Z5pe26Ze0XCIgfSlcclxuICAgIF90aW1lTGVmdDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBvblRpbWVMZWZ0Q2hhbmdlZDogU2lnbmFsID0gbmV3IFNpZ25hbCgpO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZ2V0IHRpbWVMZWZ0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aW1lTGVmdFxyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXHJcbiAgICBib21iRXhwbG9zaW9uOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXHJcbiAgICBwcmVFeHBsb3Npb246IGNjLkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbm9kZV90b29sdGlwOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5vZGVfbGlnaHQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGhvbGRlcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgc2V0IHRpbWVMZWZ0KHYpIHtcclxuICAgICAgICB0aGlzLl90aW1lTGVmdCA9IHY7XHJcbiAgICAgICAgdGhpcy5vblRpbWVMZWZ0Q2hhbmdlZC5maXJlKHYpO1xyXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gdi50b1N0cmluZygpXHJcbiAgICB9XHJcbiAgICBvbmVjZSA9IHRydWU7XHJcblxyXG4gICAgY29sbGlkZXI6IGNjLlBoeXNpY3NDb2xsaWRlcjtcclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgZXZ0LmVtaXQoJ0dhbWUuYm9tYkRlcycpO1xyXG4gICAgICAgIGV2dC5vZmYodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgZXZ0Lm9uKFwiR2FtZS5vblN0YXJ0ZWRcIiwgdGhpcy5vbkdhbWVTdGFydGVkLCB0aGlzKVxyXG4gICAgICAgIGV2dC5vbihcIkdhbWUud2luXCIsIHRoaXMub25XaW4sIHRoaXMpXHJcbiAgICAgICAgZXZ0Lm9uKFwiR2FtZS5sb3NlXCIsIHRoaXMub25HYW1lTG9zZSwgdGhpcyk7XHJcbiAgICAgICAgZXZ0Lm9uKFwiR2FtZS5wYXVzZVwiLCB0aGlzLm9uR2FtZUxvc2UsIHRoaXMpO1xyXG4gICAgICAgIGV2dC5vbihcIkdhbWUucmVzdW1lXCIsIHRoaXMub25HYW1lU3RhcnRlZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSB0aGlzLl90aW1lTGVmdC50b1N0cmluZygpXHJcbiAgICAgICAgdGhpcy5wcmVFeHBsb3Npb24ub24oXCJmaW5pc2hlZFwiLCB0aGlzLnBsYXlTZWNvbmRFeHBsb2RlLCB0aGlzKVxyXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5QaHlzaWNzQ29sbGlkZXIpO1xyXG4gICAgICAgIGlmICghR2FtZS5pbnN0YW5jZS5pc092ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmNvdW50ZG93biwgMSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJvb3YgPSB0aGlzLmdldE9yQWRkQ29tcG9uZW50KFJlbW92ZU91dE9mVmlldyk7XHJcbiAgICAgICAgcm9vdi5vbk9mZlNjcmVlbi5vbih0aGlzLm9uT2ZmU2NyZWVuLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbldpbigpIHtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jb3VudGRvd24pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uR2FtZUxvc2UoKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY291bnRkb3duKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkdhbWVTdGFydGVkKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5jb3VudGRvd24sIDEpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uT2ZmU2NyZWVuKCkge1xyXG4gICAgfVxyXG5cclxuICAgIGNvdW50ZG93bigpIHtcclxuICAgICAgICB0aGlzLnRpbWVMZWZ0LS1cclxuICAgICAgICBpZiAodGhpcy50aW1lTGVmdCA8PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwubm9kZS5jb2xvciA9IGNjLkNvbG9yLlJFRFxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0U2hha2UoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BTaGFrZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRpbWVMZWZ0IDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY291bnRkb3duKTtcclxuICAgICAgICAgICAgdGhpcy5leHBsb2RlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc0hpZGluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlX3Rvb2x0aXAuYWN0aXZlID09IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlX3Rvb2x0aXAuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBsZXQgZGlzcGxheSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICBkaXNwbGF5ICYmIChkaXNwbGF5LmVuYWJsZWQgPSBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlX2xpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIHRoaXMubm9kZV90b29sdGlwLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IGRpc3BsYXkgPSB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICAgICAgZGlzcGxheSAmJiAoZGlzcGxheS5lbmFibGVkID0gdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlX2xpZ2h0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ29Bd2F5KGRpcikge1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXIuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNvdW50ZG93bik7XHJcbiAgICAgICAgdGhpcy5zdG9wU2hha2UoKTtcclxuICAgICAgICB0aGlzLmJvZHkubGluZWFyRGFtcGluZyA9IDA7XHJcbiAgICAgICAgdGhpcy5ib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoZGlyICogMTAwMCwgMTAwMClcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2hha2VBY3Rpb246IGNjLkFjdGlvbjtcclxuXHJcbiAgICBzdGFydFNoYWtlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNoYWtlQWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaGFrZUFjdGlvbiA9IHRoaXMubm9kZS5ydW5BY3Rpb24oU2hha2UuY3JlYXRlKDMuMCwgMiwgMCkpXHJcbiAgICAgICAgLy8gdGhpcy5zaGFrZUFjdGlvbiA9IHRoaXMubm9kZS5ydW5BY3Rpb24oY2MuYmxpbmsoMywzKSlcclxuICAgIH1cclxuXHJcbiAgICBzdG9wU2hha2UoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBY3Rpb24odGhpcy5zaGFrZUFjdGlvbilcclxuICAgICAgICB0aGlzLnNoYWtlQWN0aW9uID0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGRyb3AocG9zKSB7XHJcbiAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5kb0Ryb3AuYmluZCh0aGlzLCBwb3MpKVxyXG5cclxuICAgICAgICAvLyB0aGlzLmJvZHkuYW5ndWxhclZlbG9jaXR5ID0gMTUwMDtcclxuICAgIH1cclxuXHJcbiAgICBkb0Ryb3AocG9zKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHBvcylcclxuICAgICAgICB0aGlzLmJvZHkuZ3Jhdml0eVNjYWxlID0gMTA7XHJcbiAgICAgICAgdGhpcy5ib2R5LmxpbmVhckRhbXBpbmcgPSAwO1xyXG4gICAgICAgIHRoaXMuYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRXhwbG9kZWQgPSBmYWxzZTtcclxuXHJcbiAgICBleHBsb2RlKCkge1xyXG4gICAgICAgIC8v54iG54K4IFxyXG4gICAgICAgIHRoaXMuaXNFeHBsb2RlZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuYm9tYkV4cGxvc2lvbikge1xyXG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlX3Rvb2x0aXAuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZV9saWdodC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5ob2xkZXIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLmhvbGRlci5wb3NpdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnByZUV4cGxvc2lvbi5wbGF5KFwicHJlX2V4cGxvZGVcIilcclxuICAgICAgICAgICAgLy8gdGhpcy5ib21iRXhwbG9zaW9uLmFkZEV2ZW50TGlzdGVuZXIoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuQ09NUExFVEUsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXlTZWNvbmRFeHBsb2RlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5vbmVjZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMub25lY2UgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJvbWJFeHBsb3Npb24ucGxheShcImV4cGxvZGVcIik7XHJcbiAgICAgICAgdGhpcy5wcmVFeHBsb3Npb24ucGxheShcInByZV9leHBsb2RlMlwiKVxyXG4gICAgICAgIERldmljZS5wbGF5U2Z4KFwiYm9tYl9leHBsb2RlXCIpO1xyXG4gICAgICAgIGNjLkNhbWVyYS5tYWluLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFNoYWtlLmNyZWF0ZSgwLjUsIDUsIDUpLCBjYy5jYWxsRnVuYyh0aGlzLmxvc2VHYW1lLCB0aGlzKSkpO1xyXG4gICAgICAgIGV2dC5lbWl0KFwiR2FtZS5ib21iXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvc2VHYW1lKCkge1xyXG4gICAgICAgIHRoaXMubm9kZSAmJiB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIGV2dC5lbWl0KFwiR2FtZS5sb3NlXCIpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ib2R5LmxpbmVhclZlbG9jaXR5LnkgPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgfVxyXG59Il19