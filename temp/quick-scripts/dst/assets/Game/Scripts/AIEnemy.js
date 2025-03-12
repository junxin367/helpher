
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/AIEnemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcQUlFbmVteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0MsK0JBQTBCO0FBQzFCLG9EQUFpRDtBQUNqRCwrQ0FBMEM7QUFDMUMsc0RBQWlEO0FBQ2pELHFEQUFnRDtBQUNoRCwrQkFBMEI7QUFDMUIsNkNBQXdDO0FBQ3hDLCtCQUEwQjtBQUVwQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QyxJQUFLLEtBZ0JKO0FBaEJELFdBQUssS0FBSztJQUNOLElBQUk7SUFDSixpQ0FBSSxDQUFBO0lBQ0osaUNBQUksQ0FBQTtJQUNKLE9BQU87SUFDUCxtQ0FBSyxDQUFBO0lBQ0wsTUFBTTtJQUNOLHlDQUFRLENBQUE7SUFDUixJQUFJO0lBQ0osbUNBQUssQ0FBQTtJQUNMLElBQUk7SUFDSixtQ0FBSyxDQUFBO0lBQ0wsR0FBRztJQUNILHVDQUFPLENBQUE7SUFDUCw2Q0FBVSxDQUFBO0lBQ1YsaUNBQUksQ0FBQTtBQUNSLENBQUMsRUFoQkksS0FBSyxLQUFMLEtBQUssUUFnQlQ7QUFFRCxJQUFLLE9BR0o7QUFIRCxXQUFLLE9BQU87SUFDUixxQ0FBUSxDQUFBO0lBQ1IsdUNBQVMsQ0FBQTtBQUNiLENBQUMsRUFISSxPQUFPLEtBQVAsT0FBTyxRQUdYO0FBSUQ7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUFtYkM7UUFqYkcsYUFBTyxHQUFZLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDakMsS0FBSztRQUVHLFVBQUksR0FBRyxDQUFDLENBQUM7UUFpQmpCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQU1WLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUdwQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFHaEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFDO1FBR25DLGdCQUFnQjtRQUVoQixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFHMUIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBR2hDLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUdoQyxvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFHcEMsb0JBQWMsR0FBWSxLQUFLLENBQUM7UUFLaEMsaUJBQVcsR0FBZ0IsSUFBSSxDQUFBO1FBb1EvQixrQkFBWSxHQUFTLElBQUksQ0FBQzs7SUFvSDlCLENBQUM7Z0JBbmJvQixPQUFPO0lBTXhCLHNCQUFXLHdCQUFHO2FBQWQ7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzthQUNELFVBQWUsS0FBSztZQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDVixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtnQkFDOUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO2FBQ1Q7WUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXO2dCQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2xELENBQUM7OztPQVZBO0lBcURELHVCQUFLLEdBQUw7UUFDSSxTQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNCLHdCQUF3QjtRQUN4QixXQUFHLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlDLFdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0RCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtZQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFBO1NBQ2pCO1FBQ0QsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMseUJBQWUsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFNUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFHRCwyQkFBUyxHQUFUO1FBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFO1lBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ25DO1FBQ0QsV0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNkLElBQUksR0FBRyxHQUFHLFNBQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLFNBQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNqQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFHdEIsQ0FBQztJQUlELHNCQUFJLGtDQUFhO2FBQWpCLFVBQWtCLENBQUM7WUFDZixXQUFXO1lBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ3BCLENBQUM7OztPQUFBO0lBRUQsNEJBQVUsR0FBVjtRQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUk7WUFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsOEJBQVksR0FBWixVQUFhLEtBQUs7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtRQUNkLFVBQVU7UUFDVixLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNyQixJQUFJLElBQUksQ0FBQyxVQUFVO1lBQ2YsS0FBSyxDQUFDLEtBQUssR0FBRyxnQkFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzlELENBQUM7SUFFRCw2QkFBVyxHQUFYLFVBQVksS0FBSztRQUNiLGdCQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsMkJBQVMsR0FBVDtRQUNJLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsRSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7SUFDTCxDQUFDO0lBR0QsMEJBQVEsR0FBUjtRQUNJLElBQUksY0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFHRCwrQkFBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNsQjtJQUVMLENBQUM7SUFFRCxnQ0FBYyxHQUFkO1FBQ0ksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQztJQUdELDhCQUFZLEdBQVo7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBRSxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQzFCLENBQUM7SUFHRCxRQUFRO0lBQ1IsNkJBQVcsR0FBWCxVQUFZLElBQVUsRUFBRSxHQUFjO1FBQTFCLHFCQUFBLEVBQUEsVUFBVTtRQUFFLG9CQUFBLEVBQUEsTUFBTSxJQUFJLENBQUMsR0FBRztRQUNsQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUIsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3ZDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUM3RCxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsRUFBRTtZQUNILElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQTtZQUNqQyxJQUFJLEtBQUssSUFBSSxNQUFNLElBQUksS0FBSyxJQUFJLEtBQUssRUFBRTtnQkFDbkMsT0FBTyxJQUFJLENBQUE7YUFDZDtTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUlELHlCQUFPLEdBQVAsVUFBUSxHQUFJO1FBQ1IsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFBO1FBQ3JCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzNDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUM3RCwyQ0FBMkM7UUFDM0MsS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQztZQUN6QyxJQUFJLElBQUksRUFBRTtnQkFDTixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixPQUFPLElBQUksQ0FBQzthQUNmO1NBQ0o7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsOEJBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUU7WUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNqQixnQkFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDdEM7U0FDSjtJQUVMLENBQUM7SUFFRCw4QkFBWSxHQUFaO1FBQ0ksc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBRUQsK0JBQWEsR0FBYjtRQUNJLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxFQUFFO1lBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRUQsMkJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsNkJBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsaUNBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsZ0NBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsK0JBQWEsR0FBYjtRQUNJLFVBQVU7UUFDVixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELGtDQUFnQixHQUFoQixVQUFpQixLQUFLO1FBQ2xCLFNBQVM7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxjQUFjO1lBQ25CLGdCQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELG1DQUFpQixHQUFqQjtRQUNJLFdBQVc7UUFDWCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsRUFBRTtZQUM1QixhQUFhO1lBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ3BDO0lBQ0wsQ0FBQztJQUVELGlDQUFlLEdBQWYsVUFBZ0IsS0FBSztRQUNqQixnQkFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQUVELCtCQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFVBQVU7WUFDZixnQkFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkMsSUFBSSxJQUFJLENBQUMsV0FBVztZQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGdDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixhQUFhO1FBQ2IsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1NBQ3pDO0lBQ0wsQ0FBQztJQUVELG9DQUFrQixHQUFsQjtRQUNJLE9BQU87UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzFCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNyQixnQkFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7U0FDekM7UUFDRCxXQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxxQ0FBbUIsR0FBbkI7UUFDSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBRUQsbUNBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQTtRQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELCtCQUFhLEdBQWIsVUFBYyxLQUFLLEVBQUUsS0FBSztRQUN0QixXQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3JCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixnQkFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWTtZQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRCw0Q0FBNEM7SUFDaEQsQ0FBQztJQUVELHNCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN0QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsZ0JBQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM3QztJQUNMLENBQUM7SUFFRCxnQ0FBYyxHQUFkLFVBQWUsS0FBSztJQUNwQixDQUFDO0lBSUQsZ0NBQWMsR0FBZCxVQUFlLE9BQTBCLEVBQUUsWUFBWSxFQUFFLEtBQXlCO1FBQzlFLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxLQUFLO1lBQUUsT0FBTztRQUM1RCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFBRSxPQUFPO1FBQzlDLElBQUksY0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUNqQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM3QixJQUFJLEtBQUssSUFBSSxNQUFNLEVBQUU7WUFDakIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUFFLE9BQU07WUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUE7WUFDekMsT0FBTztTQUNWO2FBQU0sSUFBSSxLQUFLLElBQUksUUFBUSxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFBRSxPQUFNO1lBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUE7WUFDM0MsT0FBTztTQUNWO2FBQU0sSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO1lBQ3hCLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNmLE9BQU87YUFDVjtZQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO2dCQUM1QixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQixPQUFPO2FBQ1Y7U0FDSjthQUFNLElBQUksS0FBSyxJQUFJLE9BQU8sRUFBRTtZQUN6QixnQkFBTSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1lBQ2hDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFBRSxPQUFPO1lBQzFCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNkLE9BQU07U0FDVDtRQUNELElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1FBQ2xDLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNwQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2pCO2FBQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUM1QixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQTtTQUNmO0lBQ0wsQ0FBQztJQUVELHlCQUFPLEdBQVAsVUFBUSxJQUFVO1FBQ2QsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLFdBQVc7WUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBR3JDLENBQUM7SUFFRCwwQkFBUSxHQUFSO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksSUFBSSxDQUFDLFdBQVc7WUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVU7Z0JBQUUsT0FBTztZQUNqQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQTtZQUM1QixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQztZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNwQjtJQUNMLENBQUM7SUFFRCxzQkFBSSxHQUFKO1FBQ0ksd0NBQXdDO1FBQ3hDLDZEQUE2RDtRQUM3RCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3RFLENBQUM7SUFFRCw4QkFBWSxHQUFaLFVBQWEsS0FBSyxFQUFFLEdBQUc7SUFDdkIsQ0FBQztJQUVELCtCQUFhLEdBQWIsVUFBYyxLQUFLO0lBRW5CLENBQUM7SUFHRCw0QkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBR0Qsd0JBQU0sR0FBTixVQUFPLFNBQWtCO1FBQWxCLDBCQUFBLEVBQUEsa0JBQWtCO1FBQ3JCLElBQUksU0FBUyxJQUFJLE1BQU0sRUFBRTtZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUNsRCxTQUFTLEdBQUcsTUFBTSxDQUFBO2FBQ3JCO1NBQ0o7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUMzQixJQUFJLElBQUksQ0FBQyxVQUFVO1lBQ2YsZ0JBQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXZDLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ2pDO2FBQU07WUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1NBQzFDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLFdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDcEMsQ0FBQztJQUVELHdCQUFNLEdBQU47UUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN6QyxDQUFDOztJQTdaTSxrQkFBVSxHQUFjLEVBQUUsQ0FBQTtJQWxCakM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDOzRDQUNKO0lBR2pDO1FBREMsUUFBUTt5Q0FDUTtJQXdCakI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFDYTtJQUdwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOytDQUNTO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7a0RBQ1k7SUFLbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsrQ0FDUztJQUtoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOytDQUNTO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7K0NBQ1M7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFDYTtJQUdwQztRQURDLFFBQVE7bURBQ3VCO0lBS2hDO1FBREMsUUFBUSxDQUFDLHFCQUFXLENBQUM7Z0RBQ1M7SUEzRGQsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQW1iM0I7SUFBRCxjQUFDO0NBbmJELEFBbWJDLENBbmJvQyxzQkFBWSxHQW1iaEQ7a0JBbmJvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZTTSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL2NvcmUvRlNNXCI7XHJcbmltcG9ydCBSb2xlIGZyb20gXCIuL1JvbGVcIjtcclxuaW1wb3J0IHsgZXZ0IH0gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9jb3JlL2V2ZW50XCI7XHJcbmltcG9ydCBTa2VsZXRvbkJhc2UgZnJvbSBcIi4vU2tlbGV0b25CYXNlXCI7XHJcbmltcG9ydCBEZXZpY2UgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9taXNjL0RldmljZVwiO1xyXG5pbXBvcnQgUmVtb3ZlT3V0T2ZWaWV3IGZyb20gXCIuL1JlbW92ZU91dE9mVmlld1wiO1xyXG5pbXBvcnQgQm9tYiBmcm9tIFwiLi9Cb21iXCI7XHJcbmltcG9ydCBCb21iVG9vbHRpcCBmcm9tIFwiLi9Cb21iVG9vbHRpcFwiO1xyXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuXHJcbmVudW0gU3RhdGUge1xyXG4gICAgLy/lt6HpgLtcclxuICAgIElkbGUsXHJcbiAgICBTZWVrLFxyXG4gICAgLy/pgInmi6nmlrnlkJEgXHJcbiAgICBKdWRnZSxcclxuICAgIC8v5Y+R546w5Li76KeSXHJcbiAgICBEZXRlY3RlZCxcclxuICAgIC8v6L+96YCQXHJcbiAgICBDaGFzZSxcclxuICAgIC8v5oqT5YiwXHJcbiAgICBDYXRjaCxcclxuICAgIC8vIFxyXG4gICAgRnJlZXplZCxcclxuICAgIExvc2VUYXJnZXQsXHJcbiAgICBEZWFkLFxyXG59XHJcblxyXG5lbnVtIEZhY2VEaXIge1xyXG4gICAgTGVmdCA9IDAsXHJcbiAgICBSaWdodCA9IDFcclxufVxyXG5cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFJRW5lbXkgZXh0ZW5kcyBTa2VsZXRvbkJhc2Uge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRW51bShGYWNlRGlyKSB9KVxyXG4gICAgZmFjZURpcjogRmFjZURpciA9IEZhY2VEaXIuUmlnaHQ7XHJcbiAgICAvL+mdouWQkSBcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBfZGlyID0gMTtcclxuICAgIHB1YmxpYyBnZXQgZGlyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kaXI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IGRpcih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2RpciA9IHZhbHVlO1xyXG4gICAgICAgIGxldCBjID0gMTtcclxuICAgICAgICBpZiAodGhpcy5mYWNlRGlyID09IEZhY2VEaXIuTGVmdCkge1xyXG4gICAgICAgICAgICBjID0gLTFcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYm9tYlRvb2x0aXApXHJcbiAgICAgICAgICAgIHRoaXMuYm9tYlRvb2x0aXAuZGlyID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IHRoaXMuYmFzZVNjYWxlICogdmFsdWUgKiBjO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhbGxFbmVtaWVzOiBBSUVuZW15W10gPSBbXVxyXG5cclxuICAgIGJhc2VTY2FsZTogbnVtYmVyID0gMDtcclxuICAgIHNwZWVkID0gMTtcclxuICAgIGZzbTogRlNNO1xyXG5cclxuICAgIGNvbGxpZGVyOiBjYy5QaHlzaWNzQ29sbGlkZXI7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGRldGVjdGVkX2F1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBhdWRpb19iaXRlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBhdWRpb19jYXRjaGVkOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvKirov5vlhaXkvJHmga/ml7blj5Hlh7rnmoTlo7Dpn7MgKi9cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBhdWRpb19zZWVrOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIGFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGF1ZGlvX2RlYWQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGF1ZGlvX3dhbGs6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGF1ZGlvX3F1ZXN0aW9uOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZGVhZF93aXRoX2ZhbGw6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBib21iOiBCb21iO1xyXG5cclxuICAgIEBwcm9wZXJ0eShCb21iVG9vbHRpcClcclxuICAgIGJvbWJUb29sdGlwOiBCb21iVG9vbHRpcCA9IG51bGxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBBSUVuZW15LmFsbEVuZW1pZXMucHVzaCh0aGlzKTtcclxuICAgICAgICB0aGlzLmZzbSA9IHRoaXMuYWRkQ29tcG9uZW50KEZTTSk7XHJcbiAgICAgICAgdGhpcy5mc20uaW5pdCh0aGlzLCBTdGF0ZSk7XHJcbiAgICAgICAgLy8gdGhpcy5mc20uX2xvZyA9IHRydWU7XHJcbiAgICAgICAgZXZ0Lm9uKFwiR2FtZS5rZXlNb3ZlZFwiLCB0aGlzLm9uS2V5TW92ZSwgdGhpcyk7XHJcbiAgICAgICAgZXZ0Lm9uKFwiR2FtZS5ib21iXCIsIHRoaXMuZ29EZWFkLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmZzbS5lbnRlclN0YXRlKFN0YXRlLlNlZWspXHJcbiAgICAgICAgdGhpcy5iYXNlU2NhbGUgPSB0aGlzLm5vZGUuc2NhbGU7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NDb2xsaWRlcik7XHJcbiAgICAgICAgaWYgKHRoaXMuZmFjZURpciA9PSBGYWNlRGlyLkxlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZGlyID0gLTFcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5fZGlyID0gdGhpcy5mYWNlRGlyO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KFJlbW92ZU91dE9mVmlldyk7XHJcbiAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb3NlQm9tYigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYm9tYlRvb2x0aXAgJiYgdGhpcy5ib21iVG9vbHRpcC5ub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9tYlRvb2x0aXAubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2dC5vZmYodGhpcyk7XHJcbiAgICAgICAgbGV0IGlkeCA9IEFJRW5lbXkuYWxsRW5lbWllcy5pbmRleE9mKHRoaXMpO1xyXG4gICAgICAgIEFJRW5lbXkuYWxsRW5lbWllcy5zcGxpY2UoaWR4LCAxKVxyXG4gICAgICAgIHRoaXMucmVtb3ZlQm9tYigpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgX3dvcmxkOiBjYy5QaHlzaWNzTWFuYWdlcjtcclxuXHJcbiAgICBzZXQgZW5hYmxlQ29sbGlkZShiKSB7XHJcbiAgICAgICAgLy8gaWYgKGIpIHtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyLmVuYWJsZWQgPSBiO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXIuc2Vuc29yID0gIWI7XHJcbiAgICAgICAgdGhpcy5mc20uZW5hYmxlZCA9IGI7XHJcbiAgICAgICAgdGhpcy5mc20ucGF1c2UoKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUJvbWIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYm9tYlRvb2x0aXAgJiYgdGhpcy5ib21iVG9vbHRpcC5ub2RlKVxyXG4gICAgICAgICAgICB0aGlzLmJvbWJUb29sdGlwLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5ib21iKSlcclxuICAgICAgICAgICAgdGhpcy5ib21iLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW50ZXJfU2VlayhzdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAxXHJcbiAgICAgICAgLy/lsITnur/mo4DmtYsgIOS4u+inklxyXG4gICAgICAgIHN0YXRlLnNldEludGVydmFsKDAuNSwgdGhpcy5zZWVrX2xfciwgdGhpcyk7XHJcbiAgICAgICAgc3RhdGUuc2V0SW50ZXJ2YWwoMiwgdGhpcy5uZWVkSGF2YVJlc3QsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5wbGF5QW5pbShcIndhbGtcIilcclxuICAgICAgICBpZiAodGhpcy5hdWRpb193YWxrKVxyXG4gICAgICAgICAgICBzdGF0ZS5hdWRpbyA9IERldmljZS5wbGF5RWZmZWN0KHRoaXMuYXVkaW9fd2FsaywgdHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBvbkV4aXRfU2VlayhzdGF0ZSkge1xyXG4gICAgICAgIERldmljZS5zdG9wRWZmZWN0KHN0YXRlLmF1ZGlvKTtcclxuICAgIH1cclxuXHJcbiAgICBvbktleU1vdmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZnNtLmlzSW5TdGF0ZShTdGF0ZS5TZWVrKSB8fCB0aGlzLmZzbS5pc0luU3RhdGUoU3RhdGUuSWRsZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5mc20uY2hhbmdlU3RhdGUoU3RhdGUuSnVkZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgc2Vla19sX3IoKSB7XHJcbiAgICAgICAgaWYgKEdhbWUuaW5zdGFuY2UuaXNPdmVyKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLnJheWNhc3QodGhpcy5kaXIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmF5Y2FzdCgtdGhpcy5kaXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgb25FbnRlcl9KdWRnZSgpIHtcclxuICAgICAgICB0aGlzLnBsYXlBbmltKFwiaWRsZVwiKVxyXG4gICAgICAgIGlmICghdGhpcy5yYXljYXN0KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXIgPSAtdGhpcy5kaXI7XHJcbiAgICAgICAgICAgIHRoaXMucmF5Y2FzdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGVfSnVkZ2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZnNtLnRpbWVFbGFwc2VkID4gMC41KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnNtLmNoYW5nZVN0YXRlKFN0YXRlLlNlZWspO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgb25FeGl0X0p1ZGdlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6YCJ5oup5pa55ZCRXCIpXHJcbiAgICAgICAgdGhpcy5kaXIgPSAtIHRoaXMuZGlyO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL+WIpOaWreWJjeaWueaYr+WimVxyXG4gICAgY2hlY2tJc1dhbGwoZGlzdCA9IDEwMCwgZGlyID0gdGhpcy5kaXIpIHtcclxuICAgICAgICBsZXQgcDEgPSB0aGlzLndvcmxkQ2VudGVyKCk7XHJcbiAgICAgICAgbGV0IHAyID0gY2MudjIocDEueCArIGRpciAqIGRpc3QsIHAxLnkpXHJcbiAgICAgICAgbGV0IHJlcyA9IHRoaXMuX3dvcmxkLnJheUNhc3QocDEsIHAyLCBjYy5SYXlDYXN0VHlwZS5DbG9zZXN0KVxyXG4gICAgICAgIGxldCByID0gcmVzWzBdO1xyXG4gICAgICAgIGlmIChyKSB7XHJcbiAgICAgICAgICAgIGxldCBncm91cCA9IHIuY29sbGlkZXIubm9kZS5ncm91cFxyXG4gICAgICAgICAgICBpZiAoZ3JvdXAgPT0gJ3dhbGwnIHx8IGdyb3VwID09ICdwaW4nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBfZGVjdGVkUm9sZTogUm9sZTtcclxuXHJcbiAgICByYXljYXN0KGRpcj8pIHtcclxuICAgICAgICBkaXIgPSBkaXIgfHwgdGhpcy5kaXJcclxuICAgICAgICBsZXQgcDEgPSB0aGlzLndvcmxkQ2VudGVyKCk7XHJcbiAgICAgICAgbGV0IHAyID0gY2MudjIocDEueCArIHRoaXMuZGlyICogODAwLCBwMS55KVxyXG4gICAgICAgIGxldCByZXMgPSB0aGlzLl93b3JsZC5yYXlDYXN0KHAxLCBwMiwgY2MuUmF5Q2FzdFR5cGUuQ2xvc2VzdClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNbMF0uY29sbGlkZXIubm9kZS5ncm91cCk7XHJcbiAgICAgICAgZm9yIChsZXQgayBpbiByZXMpIHtcclxuICAgICAgICAgICAgbGV0IHIgPSByZXNba107XHJcbiAgICAgICAgICAgIGxldCByb2xlID0gci5jb2xsaWRlci5nZXRDb21wb25lbnQoUm9sZSk7XHJcbiAgICAgICAgICAgIGlmIChyb2xlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZzbS5jaGFuZ2VTdGF0ZShTdGF0ZS5EZXRlY3RlZClcclxuICAgICAgICAgICAgICAgIHJvbGUuYmVEZXRlY3RlZCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RlY3RlZFJvbGUgPSByb2xlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5lZWRIYXZhUmVzdCgpIHtcclxuICAgICAgICBsZXQgciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgaWYgKHIgPCAwLjUpIHtcclxuICAgICAgICAgICAgdGhpcy5mc20uY2hhbmdlU3RhdGUoU3RhdGUuSWRsZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmF1ZGlvX3NlZWspIHtcclxuICAgICAgICAgICAgICAgIERldmljZS5wbGF5RWZmZWN0KHRoaXMuYXVkaW9fc2Vlayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uRW50ZXJfSWRsZSgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn5LyR5oGv5LiA5LyaJylcclxuICAgICAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgICAgICB0aGlzLnBsYXlBbmltKFwiaWRsZVwiKVxyXG4gICAgfVxyXG5cclxuICAgIG9uVXBkYXRlX0lkbGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZnNtLnRpbWVFbGFwc2VkID4gMS4wKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnNtLnJldmVydFN0YXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdvX2Zyb3plbigpIHtcclxuICAgICAgICB0aGlzLmZzbS5jaGFuZ2VTdGF0ZShTdGF0ZS5GcmVlemVkKTtcclxuICAgIH1cclxuICAgIGV4aXRfZnJvemVuKCkge1xyXG4gICAgICAgIHRoaXMuZnNtLmNoYW5nZVN0YXRlKFN0YXRlLkp1ZGdlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVudGVyX0ZyZWV6ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5za2VsZXRvbi50aW1lU2NhbGUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRXhpdF9GcmVlemVkKCkge1xyXG4gICAgICAgIHRoaXMuc2tlbGV0b24udGltZVNjYWxlID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZV9TZWVrKCkge1xyXG4gICAgICAgIC8vIHAxIOS4u+inkueahOecvFxyXG4gICAgICAgIHRoaXMubW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW50ZXJfRGV0ZWN0ZWQoc3RhdGUpIHtcclxuICAgICAgICAvL+aYvuekuiDmhJ/lj7nlj7cgXHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJpbmZvcm1cIik7XHJcbiAgICAgICAgaWYgKHRoaXMuZGV0ZWN0ZWRfYXVkaW8pXHJcbiAgICAgICAgICAgIERldmljZS5wbGF5RWZmZWN0KHRoaXMuZGV0ZWN0ZWRfYXVkaW8sIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZV9EZXRlY3RlZCgpIHtcclxuICAgICAgICAvLy9jaGFzZSAgIFxyXG4gICAgICAgIGlmICh0aGlzLmZzbS50aW1lRWxhcHNlZCA+IDAuMykge1xyXG4gICAgICAgICAgICAvLyDlkI7lvIDlp4sgY2hhc2UgXHJcbiAgICAgICAgICAgIHRoaXMuZnNtLmNoYW5nZVN0YXRlKFN0YXRlLkNoYXNlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkV4aXRfRGV0ZWN0ZWQoc3RhdGUpIHtcclxuICAgICAgICBEZXZpY2Uuc3RvcFNmeChzdGF0ZS5zZngpXHJcbiAgICB9XHJcblxyXG4gICAgb25FbnRlcl9DaGFzZSgpIHtcclxuICAgICAgICB0aGlzLnBsYXlBbmltKFwicHVyc3VlXCIpXHJcbiAgICAgICAgaWYgKHRoaXMuYXVkaW9fd2FsaylcclxuICAgICAgICAgICAgRGV2aWNlLnBsYXlFZmZlY3QodGhpcy5hdWRpb193YWxrKTtcclxuICAgICAgICBpZiAodGhpcy5fZGVjdGVkUm9sZSlcclxuICAgICAgICAgICAgdGhpcy5kaXIgPSB0aGlzLl9kZWN0ZWRSb2xlLm5vZGUueCA8IHRoaXMubm9kZS54ID8gLTEgOiAxO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAyO1xyXG4gICAgICAgIHRoaXMuYXJtYXR1cmUuYW5pbWF0aW9uLnRpbWVTY2FsZSA9IDI7XHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGVfQ2hhc2UoKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlKCk7XHJcbiAgICAgICAgLy8zcyDlkI7mgaLlpI3mraPluLjnirbmgIEgXHJcbiAgICAgICAgaWYgKHRoaXMuZnNtLnRpbWVFbGFwc2VkID4gMi41KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnNtLmNoYW5nZVN0YXRlKFN0YXRlLkxvc2VUYXJnZXQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW50ZXJfTG9zZVRhcmdldCgpIHtcclxuICAgICAgICAvL+aYvuekuumXruWPtyBcclxuICAgICAgICBjb25zb2xlLmxvZygn55uu5qCH5Lii5aSxIScpXHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJxdWVzdGlvblwiKVxyXG4gICAgICAgIGlmICh0aGlzLmF1ZGlvX3F1ZXN0aW9uKSB7XHJcbiAgICAgICAgICAgIERldmljZS5wbGF5RWZmZWN0KHRoaXMuYXVkaW9fcXVlc3Rpb24pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2dC5lbWl0KFwiR2FtZS5sb3NlVGFyZ2V0XCIsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgb25VcGRhdGVfTG9zZVRhcmdldCgpIHtcclxuICAgICAgICBpZiAodGhpcy5mc20udGltZUVsYXBzZWQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnNtLmNoYW5nZVN0YXRlKFN0YXRlLlNlZWspO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkV4aXRfTG9zZVRhcmdldCgpIHtcclxuICAgICAgICB0aGlzLmRpciAqPSAtMVxyXG4gICAgICAgIHRoaXMuYXJtYXR1cmUuYW5pbWF0aW9uLnRpbWVTY2FsZSA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbnRlcl9DYXRjaChzdGF0ZSwgcGFyYW0pIHtcclxuICAgICAgICBldnQuZW1pdChcIkdhbWUuY2F0Y2hcIiwgcGFyYW0pXHJcbiAgICAgICAgdGhpcy5wbGF5QW5pbShcImlkbGVcIilcclxuICAgICAgICBpZiAodGhpcy5hdWRpb19jYXRjaGVkKSB7XHJcbiAgICAgICAgICAgIERldmljZS5wbGF5RWZmZWN0KHRoaXMuYXVkaW9fY2F0Y2hlZCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fY2F0Y2hlZFJvbGUpXHJcbiAgICAgICAgICAgIHRoaXMuZGlyID0gdGhpcy5fY2F0Y2hlZFJvbGUubm9kZS54IDwgdGhpcy5ub2RlLnggPyAtMSA6IDE7XHJcbiAgICAgICAgLy8gc3RhdGUuc2V0SW50ZXJ2YWwoMS41LCB0aGlzLmJpdGUsIHRoaXMpICBcclxuICAgIH1cclxuXHJcbiAgICBiaXRlKCkge1xyXG4gICAgICAgIHRoaXMuZmFkZUluKCdiaXRlJywgMilcclxuICAgICAgICBpZiAodGhpcy5hdWRpb19iaXRlKSB7XHJcbiAgICAgICAgICAgIERldmljZS5wbGF5RWZmZWN0KHRoaXMuYXVkaW9fYml0ZSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZV9DYXRjaChzdGF0ZSkge1xyXG4gICAgfVxyXG5cclxuICAgIF9jYXRjaGVkUm9sZTogUm9sZSA9IG51bGw7XHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdDogY2MuUGh5c2ljc0NvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXI6IGNjLlBoeXNpY3NDb2xsaWRlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbGxpZGVyICYmIHRoaXMuY29sbGlkZXIuZW5hYmxlZCA9PSBmYWxzZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmZzbS5pc0luU3RhdGUoU3RhdGUuRnJlZXplZCkpIHJldHVybjtcclxuICAgICAgICBpZiAoR2FtZS5pbnN0YW5jZS5pc092ZXIpIHJldHVybjtcclxuICAgICAgICBsZXQgZ3JvdXAgPSBvdGhlci5ub2RlLmdyb3VwO1xyXG4gICAgICAgIGlmIChncm91cCA9PSAncm9sZScpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNEZWFkKCkpIHJldHVyblxyXG4gICAgICAgICAgICB0aGlzLl9jYXRjaGVkUm9sZSA9IG90aGVyLmdldENvbXBvbmVudChSb2xlKTtcclxuICAgICAgICAgICAgdGhpcy5mc20uY2hhbmdlU3RhdGUoU3RhdGUuQ2F0Y2gsICdyb2xlJylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZ3JvdXAgPT0gJ3RhcmdldCcpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNEZWFkKCkpIHJldHVyblxyXG4gICAgICAgICAgICB0aGlzLmZzbS5jaGFuZ2VTdGF0ZShTdGF0ZS5DYXRjaCwgJ3RhcmdldCcpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYgKGdyb3VwID09ICdib21iJykge1xyXG4gICAgICAgICAgICBjb250YWN0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNEZWFkKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLm5hbWUgPT0gJ2JhZG1hbicpIHtcclxuICAgICAgICAgICAgICAgIGxldCBib21iID0gb3RoZXIuZ2V0Q29tcG9uZW50KEJvbWIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRCb21iKGJvbWIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChncm91cCA9PSAnc3Bpa2UnKSB7XHJcbiAgICAgICAgICAgIERldmljZS5wbGF5U2Z4KFwiYXJyb3dfaGl0X2JvZHlcIilcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNEZWFkKCkpIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5nb0RlYWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtID0gY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhtLm5vcm1hbC54KVxyXG4gICAgICAgIGlmIChtLm5vcm1hbC54ID49IDAuOTgpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXIgPSAtMTtcclxuICAgICAgICB9IGVsc2UgaWYgKG0ubm9ybWFsLnggPD0gLTAuOTgpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXIgPSAxXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEJvbWIoYm9tYjogQm9tYikge1xyXG4gICAgICAgIGlmICh0aGlzLmJvbWIgfHwgYm9tYi5ob2xkZXIpIHJldHVybjtcclxuICAgICAgICB0aGlzLmJvbWIgPSBib21iO1xyXG4gICAgICAgIGJvbWIuaG9sZGVyID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGJvbWIuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuaGFuZFNsb3QuZGlzcGxheUluZGV4ID0gMDtcclxuICAgICAgICBpZiAodGhpcy5ib21iVG9vbHRpcClcclxuICAgICAgICAgICAgdGhpcy5ib21iVG9vbHRpcC5ib21iID0gYm9tYjtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxvc2VCb21iKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhhbmRTbG90KSB0aGlzLmhhbmRTbG90LmRpc3BsYXlJbmRleCA9IC0xO1xyXG4gICAgICAgIGlmICh0aGlzLmJvbWJUb29sdGlwKVxyXG4gICAgICAgICAgICB0aGlzLmJvbWJUb29sdGlwLmJvbWIgPSBudWxsO1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuYm9tYikpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYm9tYi5pc0V4cGxvZGVkKSByZXR1cm47XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUucG9zaXRpb25cclxuICAgICAgICAgICAgcG9zLnkgKz0gMTAwO1xyXG4gICAgICAgICAgICB0aGlzLmJvbWIuZHJvcChwb3MpO1xyXG4gICAgICAgICAgICB0aGlzLmJvbWIuaG9sZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5ib21iID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZSgpIHtcclxuICAgICAgICAvLyB0aGlzLm5vZGUueCArPSB0aGlzLmRpciAqIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgLy8gdGhpcy5ib2R5LmxpbmVhclZlbG9jaXR5LnggPSB0aGlzLmRpciAqIHRoaXMuc3BlZWQgKiAxMDAwO1xyXG4gICAgICAgIGxldCB2ID0gdGhpcy5ib2R5LmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgIHRoaXMuYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHRoaXMuZGlyICogdGhpcy5zcGVlZCAqIDE1MCwgdi55KVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW50ZXJfRGVhZChzdGF0ZSwgZHVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGVfRGVhZChzdGF0ZSkge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVtb3ZlU2VsZigpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnb0RlYWQoZGVhZF9hbmltID0gJ2RlYWQnKSB7XHJcbiAgICAgICAgaWYgKGRlYWRfYW5pbSAhPSAnZGVhZCcpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmFybWF0dXJlLmFuaW1hdGlvbi5oYXNBbmltYXRpb24oZGVhZF9hbmltKSkge1xyXG4gICAgICAgICAgICAgICAgZGVhZF9hbmltID0gJ2RlYWQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wbGF5QW5pbShkZWFkX2FuaW0sIDEpXHJcbiAgICAgICAgaWYgKHRoaXMuYXVkaW9fZGVhZClcclxuICAgICAgICAgICAgRGV2aWNlLnBsYXlFZmZlY3QodGhpcy5hdWRpb19kZWFkKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGVhZF93aXRoX2ZhbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5mc20uY2hhbmdlU3RhdGUoU3RhdGUuRGVhZCk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keS5ncmF2aXR5U2NhbGUgPSAxMDtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LmxpbmVhckRhbXBpbmcgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAxMDAwKTtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDE1MDA7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlkZXIuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnNtLmNoYW5nZVN0YXRlKFN0YXRlLkRlYWQpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLnJlbW92ZVNlbGYsIDEuNSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb3NlQm9tYigpO1xyXG4gICAgICAgIGV2dC5lbWl0KFwiR2FtZS5lbmVteURlYWRcIiwgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICBpc0RlYWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZnNtLmlzSW5TdGF0ZShTdGF0ZS5EZWFkKVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=