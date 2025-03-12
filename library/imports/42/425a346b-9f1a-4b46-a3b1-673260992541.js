"use strict";
cc._RF.push(module, '425a3RrnxpLRqOxZzJgmSVB', 'AIEnemy');
// Game/Scripts/AIEnemy.ts

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
var FSM_1 = require("../../framework/core/FSM");
var Role_1 = require("./Role");
var event_1 = require("../../framework/core/event");
var SkeletonBase_1 = require("./SkeletonBase");
var Device_1 = require("../../framework/misc/Device");
var RemoveOutOfView_1 = require("./RemoveOutOfView");
var Bomb_1 = require("./Bomb");
var BombTooltip_1 = require("./BombTooltip");
var Game_1 = require("./Game");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var State;
(function (State) {
    //巡逻
    State[State["Idle"] = 0] = "Idle";
    State[State["Seek"] = 1] = "Seek";
    //选择方向 
    State[State["Judge"] = 2] = "Judge";
    //发现主角
    State[State["Detected"] = 3] = "Detected";
    //追逐
    State[State["Chase"] = 4] = "Chase";
    //抓到
    State[State["Catch"] = 5] = "Catch";
    // 
    State[State["Freezed"] = 6] = "Freezed";
    State[State["LoseTarget"] = 7] = "LoseTarget";
    State[State["Dead"] = 8] = "Dead";
})(State || (State = {}));
var FaceDir;
(function (FaceDir) {
    FaceDir[FaceDir["Left"] = 0] = "Left";
    FaceDir[FaceDir["Right"] = 1] = "Right";
})(FaceDir || (FaceDir = {}));
var AIEnemy = /** @class */ (function (_super) {
    __extends(AIEnemy, _super);
    function AIEnemy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.faceDir = FaceDir.Right;
        //面向 
        _this._dir = 1;
        _this.baseScale = 0;
        _this.speed = 1;
        _this.detected_audio = null;
        _this.audio_bite = null;
        _this.audio_catched = null;
        /**进入休息时发出的声音 */
        _this.audio_seek = null;
        _this.anim = null;
        _this.audio_dead = null;
        _this.audio_walk = null;
        _this.audio_question = null;
        _this.dead_with_fall = false;
        _this.bombTooltip = null;
        _this._catchedRole = null;
        return _this;
    }
    AIEnemy_1 = AIEnemy;
    Object.defineProperty(AIEnemy.prototype, "dir", {
        get: function () {
            return this._dir;
        },
        set: function (value) {
            this._dir = value;
            var c = 1;
            if (this.faceDir == FaceDir.Left) {
                c = -1;
            }
            if (this.bombTooltip)
                this.bombTooltip.dir = value;
            this.node.scaleX = this.baseScale * value * c;
        },
        enumerable: false,
        configurable: true
    });
    AIEnemy.prototype.start = function () {
        AIEnemy_1.allEnemies.push(this);
        this.fsm = this.addComponent(FSM_1.default);
        this.fsm.init(this, State);
        // this.fsm._log = true;
        event_1.evt.on("Game.keyMoved", this.onKeyMove, this);
        event_1.evt.on("Game.bomb", this.goDead, this);
        this.fsm.enterState(State.Seek);
        this.baseScale = this.node.scale;
        this.collider = this.getComponent(cc.PhysicsCollider);
        if (this.faceDir == FaceDir.Left) {
            this._dir = -1;
        }
        // this._dir = this.faceDir;
        this.addComponent(RemoveOutOfView_1.default);
        this.anim = this.getComponent(cc.Animation);
        this.loseBomb();
    };
    AIEnemy.prototype.onDestroy = function () {
        if (this.bombTooltip && this.bombTooltip.node) {
            this.bombTooltip.node.destroy();
        }
        event_1.evt.off(this);
        var idx = AIEnemy_1.allEnemies.indexOf(this);
        AIEnemy_1.allEnemies.splice(idx, 1);
        this.removeBomb();
    };
    Object.defineProperty(AIEnemy.prototype, "enableCollide", {
        set: function (b) {
            // if (b) {
            this.collider.enabled = b;
            this.collider.sensor = !b;
            this.fsm.enabled = b;
            this.fsm.pause();
        },
        enumerable: false,
        configurable: true
    });
    AIEnemy.prototype.removeBomb = function () {
        if (this.bombTooltip && this.bombTooltip.node)
            this.bombTooltip.node.active = false;
        if (cc.isValid(this.bomb))
            this.bomb.node.destroy();
    };
    AIEnemy.prototype.onEnter_Seek = function (state) {
        this.speed = 1;
        //射线检测  主角
        state.setInterval(0.5, this.seek_l_r, this);
        state.setInterval(2, this.needHavaRest, this);
        this.playAnim("walk");
        if (this.audio_walk)
            state.audio = Device_1.default.playEffect(this.audio_walk, true);
    };
    AIEnemy.prototype.onExit_Seek = function (state) {
        Device_1.default.stopEffect(state.audio);
    };
    AIEnemy.prototype.onKeyMove = function () {
        if (this.fsm.isInState(State.Seek) || this.fsm.isInState(State.Idle)) {
            this.fsm.changeState(State.Judge);
        }
    };
    AIEnemy.prototype.seek_l_r = function () {
        if (Game_1.default.instance.isOver)
            return;
        if (!this.raycast(this.dir)) {
            this.raycast(-this.dir);
        }
    };
    AIEnemy.prototype.onEnter_Judge = function () {
        this.playAnim("idle");
        if (!this.raycast()) {
            this.dir = -this.dir;
            this.raycast();
        }
    };
    AIEnemy.prototype.onUpdate_Judge = function () {
        if (this.fsm.timeElapsed > 0.5) {
            this.fsm.changeState(State.Seek);
        }
    };
    AIEnemy.prototype.onExit_Judge = function () {
        console.log("选择方向");
        this.dir = -this.dir;
    };
    //判断前方是墙
    AIEnemy.prototype.checkIsWall = function (dist, dir) {
        if (dist === void 0) { dist = 100; }
        if (dir === void 0) { dir = this.dir; }
        var p1 = this.worldCenter();
        var p2 = cc.v2(p1.x + dir * dist, p1.y);
        var res = this._world.rayCast(p1, p2, cc.RayCastType.Closest);
        var r = res[0];
        if (r) {
            var group = r.collider.node.group;
            if (group == 'wall' || group == 'pin') {
                return true;
            }
        }
        return false;
    };
    AIEnemy.prototype.raycast = function (dir) {
        dir = dir || this.dir;
        var p1 = this.worldCenter();
        var p2 = cc.v2(p1.x + this.dir * 800, p1.y);
        var res = this._world.rayCast(p1, p2, cc.RayCastType.Closest);
        // console.log(res[0].collider.node.group);
        for (var k in res) {
            var r = res[k];
            var role = r.collider.getComponent(Role_1.default);
            if (role) {
                this.fsm.changeState(State.Detected);
                role.beDetected(this);
                this._dectedRole = role;
                return true;
            }
        }
        return false;
    };
    AIEnemy.prototype.needHavaRest = function () {
        var r = Math.random();
        if (r < 0.5) {
            this.fsm.changeState(State.Idle);
            if (this.audio_seek) {
                Device_1.default.playEffect(this.audio_seek);
            }
        }
    };
    AIEnemy.prototype.onEnter_Idle = function () {
        // console.log('休息一会')
        this.speed = 0;
        this.playAnim("idle");
    };
    AIEnemy.prototype.onUpdate_Idle = function () {
        if (this.fsm.timeElapsed > 1.0) {
            this.fsm.revertState();
        }
    };
    AIEnemy.prototype.go_frozen = function () {
        this.fsm.changeState(State.Freezed);
    };
    AIEnemy.prototype.exit_frozen = function () {
        this.fsm.changeState(State.Judge);
    };
    AIEnemy.prototype.onEnter_Freezed = function () {
        this.skeleton.timeScale = 0;
    };
    AIEnemy.prototype.onExit_Freezed = function () {
        this.skeleton.timeScale = 1;
    };
    AIEnemy.prototype.onUpdate_Seek = function () {
        // p1 主角的眼
        this.move();
    };
    AIEnemy.prototype.onEnter_Detected = function (state) {
        //显示 感叹号 
        this.anim.play("inform");
        if (this.detected_audio)
            Device_1.default.playEffect(this.detected_audio, false);
    };
    AIEnemy.prototype.onUpdate_Detected = function () {
        ///chase   
        if (this.fsm.timeElapsed > 0.3) {
            // 后开始 chase 
            this.fsm.changeState(State.Chase);
        }
    };
    AIEnemy.prototype.onExit_Detected = function (state) {
        Device_1.default.stopSfx(state.sfx);
    };
    AIEnemy.prototype.onEnter_Chase = function () {
        this.playAnim("pursue");
        if (this.audio_walk)
            Device_1.default.playEffect(this.audio_walk);
        if (this._dectedRole)
            this.dir = this._dectedRole.node.x < this.node.x ? -1 : 1;
        this.speed = 2;
        this.armature.animation.timeScale = 2;
    };
    AIEnemy.prototype.onUpdate_Chase = function () {
        this.move();
        //3s 后恢复正常状态 
        if (this.fsm.timeElapsed > 2.5) {
            this.fsm.changeState(State.LoseTarget);
        }
    };
    AIEnemy.prototype.onEnter_LoseTarget = function () {
        //显示问号 
        console.log('目标丢失!');
        this.anim.play("question");
        if (this.audio_question) {
            Device_1.default.playEffect(this.audio_question);
        }
        event_1.evt.emit("Game.loseTarget", this);
    };
    AIEnemy.prototype.onUpdate_LoseTarget = function () {
        if (this.fsm.timeElapsed > 0) {
            this.fsm.changeState(State.Seek);
        }
    };
    AIEnemy.prototype.onExit_LoseTarget = function () {
        this.dir *= -1;
        this.armature.animation.timeScale = 1;
    };
    AIEnemy.prototype.onEnter_Catch = function (state, param) {
        event_1.evt.emit("Game.catch", param);
        this.playAnim("idle");
        if (this.audio_catched) {
            Device_1.default.playEffect(this.audio_catched, false);
        }
        if (this._catchedRole)
            this.dir = this._catchedRole.node.x < this.node.x ? -1 : 1;
        // state.setInterval(1.5, this.bite, this)  
    };
    AIEnemy.prototype.bite = function () {
        this.fadeIn('bite', 2);
        if (this.audio_bite) {
            Device_1.default.playEffect(this.audio_bite, false);
        }
    };
    AIEnemy.prototype.onUpdate_Catch = function (state) {
    };
    AIEnemy.prototype.onBeginContact = function (contact, selfCollider, other) {
        if (this.collider && this.collider.enabled == false)
            return;
        if (this.fsm.isInState(State.Freezed))
            return;
        if (Game_1.default.instance.isOver)
            return;
        var group = other.node.group;
        if (group == 'role') {
            if (this.isDead())
                return;
            this._catchedRole = other.getComponent(Role_1.default);
            this.fsm.changeState(State.Catch, 'role');
            return;
        }
        else if (group == 'target') {
            if (this.isDead())
                return;
            this.fsm.changeState(State.Catch, 'target');
            return;
        }
        else if (group == 'bomb') {
            contact.disabled = true;
            if (this.isDead()) {
                return;
            }
            if (this.node.name == 'badman') {
                var bomb = other.getComponent(Bomb_1.default);
                this.getBomb(bomb);
                return;
            }
        }
        else if (group == 'spike') {
            Device_1.default.playSfx("arrow_hit_body");
            if (this.isDead())
                return;
            this.goDead();
            return;
        }
        var m = contact.getWorldManifold();
        // console.log(m.normal.x)
        if (m.normal.x >= 0.98) {
            this.dir = -1;
        }
        else if (m.normal.x <= -0.98) {
            this.dir = 1;
        }
    };
    AIEnemy.prototype.getBomb = function (bomb) {
        if (this.bomb || bomb.holder)
            return;
        this.bomb = bomb;
        bomb.holder = this.node;
        bomb.hide();
        this.handSlot.displayIndex = 0;
        if (this.bombTooltip)
            this.bombTooltip.bomb = bomb;
    };
    AIEnemy.prototype.loseBomb = function () {
        if (this.handSlot)
            this.handSlot.displayIndex = -1;
        if (this.bombTooltip)
            this.bombTooltip.bomb = null;
        if (cc.isValid(this.bomb)) {
            if (this.bomb.isExploded)
                return;
            var pos = this.node.position;
            pos.y += 100;
            this.bomb.drop(pos);
            this.bomb.holder = null;
            this.bomb = null;
        }
    };
    AIEnemy.prototype.move = function () {
        // this.node.x += this.dir * this.speed;
        // this.body.linearVelocity.x = this.dir * this.speed * 1000;
        var v = this.body.linearVelocity;
        this.body.linearVelocity = cc.v2(this.dir * this.speed * 150, v.y);
    };
    AIEnemy.prototype.onEnter_Dead = function (state, dur) {
    };
    AIEnemy.prototype.onUpdate_Dead = function (state) {
    };
    AIEnemy.prototype.removeSelf = function () {
        this.node.destroy();
    };
    AIEnemy.prototype.goDead = function (dead_anim) {
        if (dead_anim === void 0) { dead_anim = 'dead'; }
        if (dead_anim != 'dead') {
            if (!this.armature.animation.hasAnimation(dead_anim)) {
                dead_anim = 'dead';
            }
        }
        this.playAnim(dead_anim, 1);
        if (this.audio_dead)
            Device_1.default.playEffect(this.audio_dead);
        if (this.dead_with_fall) {
            this.fsm.changeState(State.Dead);
            this.body.gravityScale = 10;
            this.body.linearDamping = 0;
            this.body.linearVelocity = cc.v2(0, 1000);
            this.body.angularVelocity = 1500;
            this.collider.enabled = false;
        }
        else {
            this.fsm.changeState(State.Dead);
            this.scheduleOnce(this.removeSelf, 1.5);
        }
        this.loseBomb();
        event_1.evt.emit("Game.enemyDead", this);
    };
    AIEnemy.prototype.isDead = function () {
        return this.fsm.isInState(State.Dead);
    };
    var AIEnemy_1;
    AIEnemy.allEnemies = [];
    __decorate([
        property({ type: cc.Enum(FaceDir) })
    ], AIEnemy.prototype, "faceDir", void 0);
    __decorate([
        property
    ], AIEnemy.prototype, "_dir", void 0);
    __decorate([
        property(cc.AudioClip)
    ], AIEnemy.prototype, "detected_audio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], AIEnemy.prototype, "audio_bite", void 0);
    __decorate([
        property(cc.AudioClip)
    ], AIEnemy.prototype, "audio_catched", void 0);
    __decorate([
        property(cc.AudioClip)
    ], AIEnemy.prototype, "audio_seek", void 0);
    __decorate([
        property(cc.AudioClip)
    ], AIEnemy.prototype, "audio_dead", void 0);
    __decorate([
        property(cc.AudioClip)
    ], AIEnemy.prototype, "audio_walk", void 0);
    __decorate([
        property(cc.AudioClip)
    ], AIEnemy.prototype, "audio_question", void 0);
    __decorate([
        property
    ], AIEnemy.prototype, "dead_with_fall", void 0);
    __decorate([
        property(BombTooltip_1.default)
    ], AIEnemy.prototype, "bombTooltip", void 0);
    AIEnemy = AIEnemy_1 = __decorate([
        ccclass
    ], AIEnemy);
    return AIEnemy;
}(SkeletonBase_1.default));
exports.default = AIEnemy;

cc._RF.pop();