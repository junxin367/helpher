"use strict";
cc._RF.push(module, 'bd7b1tgUE5NurcrQniSYrVo', 'Target');
// Game/Scripts/Target.ts

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
var event_1 = require("../../framework/core/event");
var SkeletonBase_1 = require("./SkeletonBase");
var FSM_1 = require("../../framework/core/FSM");
var ccUtil_1 = require("../../framework/utils/ccUtil");
var Device_1 = require("../../framework/misc/Device");
var AIEnemy_1 = require("./AIEnemy");
var Role_1 = require("./Role");
var Unity_1 = require("./Common/Unity");
var Emotion;
(function (Emotion) {
    Emotion[Emotion["Normal"] = 0] = "Normal";
    Emotion[Emotion["Happy"] = 1] = "Happy";
    Emotion[Emotion["Frightened"] = 2] = "Frightened";
})(Emotion || (Emotion = {}));
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Target = /** @class */ (function (_super) {
    __extends(Target, _super);
    function Target() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //老头
        // fsm:FSM ;   
        _this.dir = -1;
        _this.cd = 0;
        _this._statusWin = false;
        _this._statusLose = false;
        _this.baseScale = 0;
        _this.shockedAnim = null;
        _this.timer = 0;
        _this.isDead = false;
        return _this;
    }
    Target.prototype.start = function () {
        event_1.evt.on("Game.beDected", this.onDetected, this);
        event_1.evt.on("Game.win", this.onWin, this);
        event_1.evt.on("Game.lose", this.onGameLose, this);
        event_1.evt.on("Game.bomb", this.goDead, this);
        event_1.evt.on("Game.catch", this.onCatched, this);
        event_1.evt.on("Game.loseTarget", this.onLoseTarget, this);
        event_1.evt.on("Game.enemyDead", this.onEnemyDead, this);
        // evt.on("Game.seeTarget", this.onSeeTarget, this)
        this.playAnim("idle");
        this.schedule(this.checkSight, 2);
        this.baseScale = Math.abs(this.node.scale);
        this.emotionState = this.addComponent(FSM_1.default);
        this.emotionState.init(this, Emotion);
        this.emotionState.enterState(Emotion.Normal);
        this.schedule(this.checkFace, 1);
        Unity_1.default.loadSkins(this.skeleton, 2);
    };
    Target.prototype.onEnable = function () {
    };
    Target.prototype.onDetected = function () {
        //被察觉
        this.shockedAnim = this.playAnim("shocked");
        this.scheduleOnce(this.checkEmotion, 4);
    };
    Target.prototype.checkEmotion = function () {
        if (AIEnemy_1.default.allEnemies.length <= 0) {
            this.stopAnim();
            this.playAnim("idle");
        }
    };
    Target.prototype.onCatched = function (t) {
        if (t == 'target') {
            // this.emotionState.changeState(Emotion.Frightened);
            this.playAnim("shocked");
        }
    };
    Target.prototype.onLoseTarget = function () {
        this.playAnim("idle");
    };
    Target.prototype.onEnemyDead = function () {
        this.stopAnim();
        this.playAnim("idle");
    };
    Target.prototype.onDestroy = function () {
        event_1.evt.off(this);
    };
    Target.prototype.onWin = function () {
        this.fadeIn('happy', 0);
        this._statusWin = true;
    };
    Target.prototype.onGameLose = function () {
        this._statusLose = true;
    };
    Target.prototype.checkSight = function () {
        if (this._statusWin || this._statusLose)
            return;
        this.timer += 2;
        if (this.timer < this.cd) {
            return;
        }
        this.timer = 0;
        //能否看到
        var pos = g.v2(ccUtil_1.default.getWorldPosition(this.node));
        pos.y += 60;
        var pos2 = pos.clone();
        pos2.x = this.dir * 250;
        var res = this._world.rayCast(pos, pos2, cc.RayCastType.Any);
        for (var k in res) {
            var r = res[k];
            var group = r.collider.node.group;
            if (group == 'role') {
                //看到主角
                this.sayHello();
                // 10s 后不在打招呼
                this.cd = 10;
                break;
            }
        }
    };
    Target.prototype.sayHello = function () {
        this.fadeIn("hello", 1);
        event_1.evt.emit("Game.hello", this);
    };
    Target.prototype.onEnter_Happy = function (state, param) {
        if (param) {
            this.fadeIn(param, 1);
        }
        else {
            this.fadeIn("happy", 1);
        }
    };
    Target.prototype.onEnter_Normal = function () {
        this.fadeIn("normal", 1);
    };
    Target.prototype.onEnter_Frightened = function () {
        this.fadeIn("frightened", 1);
    };
    Target.prototype.onUpdate_Frightened = function () {
        if (this.emotionState.timeElapsed > 2.0) {
            this.emotionState.changeState(Emotion.Normal);
        }
    };
    Target.prototype.onUpdate_Happy = function () {
        if (this.emotionState.timeElapsed > 4.0) {
            this.emotionState.changeState(Emotion.Normal);
        }
    };
    Target.prototype.goDead = function () {
        if (this.isDead)
            return;
        this.isDead = true;
        this.playAnim("shocked");
        Device_1.default.playSfx("ohoh");
        this.scheduleOnce(this.loseGame, 0.5);
    };
    Target.prototype.loseGame = function () {
        event_1.evt.emit("Game.lose");
    };
    Target.prototype.checkFace = function () {
        var role = Role_1.default.self;
        if (!role)
            return;
        if (Math.abs(role.node.y - this.node.y) > 200) {
            return;
        }
        if (role.node.x > this.node.x) {
            // 在右边
            this.node.scaleX = -1 * this.baseScale;
        }
        else {
            //左边
            this.node.scaleX = 1 * this.baseScale;
        }
    };
    __decorate([
        property
    ], Target.prototype, "dir", void 0);
    Target = __decorate([
        ccclass
    ], Target);
    return Target;
}(SkeletonBase_1.default));
exports.default = Target;

cc._RF.pop();