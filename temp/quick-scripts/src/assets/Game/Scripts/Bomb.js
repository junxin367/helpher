"use strict";
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