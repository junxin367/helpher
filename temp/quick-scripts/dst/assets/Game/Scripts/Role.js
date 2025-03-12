
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Role.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e6410CDlzFNeqtE1V959ydK', 'Role');
// Game/Scripts/Role.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var AIEnemy_1 = require("./AIEnemy");
var FSM_1 = require("../../framework/core/FSM");
var event_1 = require("../../framework/core/event");
var ItemBall_1 = require("./ItemBall");
var ItemKey_1 = require("./ItemKey");
var ccUtil_1 = require("../../framework/utils/ccUtil");
var SkeletonBase_1 = require("./SkeletonBase");
var KeyToggle_1 = require("./KeyToggle");
var Device_1 = require("../../framework/misc/Device");
var RemoveOutOfView_1 = require("./RemoveOutOfView");
var Thunder_1 = require("./Levels/Thunder");
var UserInfo_1 = require("../../framework/extension/weak_net_game/UserInfo");
var Ballon_1 = require("./Ballon");
var Bomb_1 = require("./Bomb");
var ToastManager_1 = require("../../framework/ui/ToastManager");
var Unity_1 = require("./Common/Unity");
var Effect_1 = require("./Levels/Effect");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var State;
(function (State) {
    State[State["Breath"] = 0] = "Breath";
    State[State["Idle"] = 1] = "Idle";
    State[State["Move"] = 2] = "Move";
    State[State["Shocked"] = 3] = "Shocked";
    State[State["Cliff"] = 4] = "Cliff";
    State[State["Flee"] = 5] = "Flee";
    State[State["Lose"] = 6] = "Lose";
    State[State["Win"] = 7] = "Win";
    State[State["Dead"] = 8] = "Dead";
    State[State["PrepareGun"] = 9] = "PrepareGun";
    State[State["Fly"] = 10] = "Fly";
    State[State["Trigger"] = 11] = "Trigger";
    State[State["Kick"] = 12] = "Kick";
})(State || (State = {}));
var Emotion;
(function (Emotion) {
    Emotion[Emotion["Normal"] = 0] = "Normal";
    Emotion[Emotion["Happy"] = 1] = "Happy";
    Emotion[Emotion["Frightened"] = 2] = "Frightened";
})(Emotion || (Emotion = {}));
var Role_sounds = ['enheng', 'laugh'];
var Dead_sounds = ['dead', 'dead2'];
var Role = /** @class */ (function (_super) {
    __extends(Role, _super);
    function Role() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._dir = 1;
        _this.speed = 1;
        _this.baseScale = 0;
        _this.isLose = false;
        _this.audio_cry = null;
        _this.audio_laugh = null;
        _this.hasGun = false;
        _this.inHandObject = null;
        _this.ballon = null;
        /** 给主角装武器 ,后面给抵挡一次伤害*/
        _this._thunderPrefab = null;
        _this._dectedDir = 0;
        _this._dectedEnemy = null;
        _this._thunder = null;
        _this.playEmmmCD = 0;
        _this.tmp_enemies = [];
        return _this;
    }
    Role_1 = Role;
    Object.defineProperty(Role.prototype, "dir", {
        get: function () {
            return this._dir;
        },
        set: function (value) {
            this._dir = value;
            this.node.scaleX = this.baseScale * value;
        },
        enumerable: false,
        configurable: true
    });
    Role.prototype.start = function () {
        Role_1.self = this;
        event_1.evt.on("Game.keyMoved", this.checkMove, this);
        event_1.evt.on('Game.hello', this.sayHelloBack, this);
        event_1.evt.on("Game.loseTarget", this.onLoseTarget, this);
        event_1.evt.on("Game.catch", this.beCatched, this);
        event_1.evt.on("Game.bomb", this.goDead, this);
        event_1.evt.on("Game.changeRoleDir", this.changeDirManually, this);
        event_1.evt.on("Game.enemyDead", this.onEnemyDead, this);
        //this.beCatched(enemy)
        this.colliders = this.getComponents(cc.PhysicsCollider);
        this.baseScale = this.node.scale;
        this.fsm = this.addComponent(FSM_1.default);
        this.fsm.init(this, State);
        this.fsm.enterState(State.Idle);
        this.emotionState = this.addComponent(FSM_1.default);
        this.emotionState.init(this, Emotion);
        this.emotionState.enterState(Emotion.Normal);
        var check = this.addComponent(RemoveOutOfView_1.default);
        check.onOffScreen.on(this.onOutOfScreen, this);
        this.equipGun();
        Unity_1.default.loadSkins(this.skeleton, 1);
    };
    Role.prototype.onOutOfScreen = function () {
        event_1.evt.emit("Game.lose");
    };
    Role.prototype.changeDirManually = function () {
        if (this.fsm.isInState(State.Idle)) {
            this.checkMove();
        }
        else {
            //changeDir
            if (this.fsm.isInState(State.Move))
                this.dir *= -1;
        }
    };
    Role.prototype.onLoseTarget = function () {
        //back to nomrmal
        this.armature.animation.timeScale = 1;
        // this.fsm.changeState(State.Breath);
    };
    Role.prototype.onDestroy = function () {
        event_1.evt.off(this);
        Role_1.self = null;
    };
    Role.prototype.equipGun = function () {
        var _this = this;
        this.hasGun = true;
        ccUtil_1.default.getRes("Prefabs/effect/thunder", cc.Prefab).then(function (v) {
            _this._thunderPrefab = v;
        });
    };
    Role.prototype.onBeginContact = function (contact, self, other) {
        var group = other.node.group;
        if (group == 'enemy') {
            var enemy = other.getComponent(AIEnemy_1.default);
            if (enemy) {
                contact.disabled = true;
            }
        }
        else if (group == 'target') {
            //win 
            contact.disabled = true;
            this.fsm.changeState(State.Win);
        }
        else if (group == 'pin') {
            // if (other.node.y > this.node.y + 30) {
            //     contact.disabledOnce = true;
            // }
            if (this.fsm.isInState(State.Fly)) {
                contact.disabled = true;
            }
            var pin = other.getComponent(KeyToggle_1.default);
            if (pin) {
                if (pin.curDir.y < 0) {
                    var wpos = ccUtil_1.default.getWorldPosition(other.node);
                    if (wpos.y >= this.worldCenter().y) {
                        contact.disabled = true;
                    }
                }
                else if (pin.curDir.y > 0) {
                    this.fsm.changeState(State.Idle);
                }
            }
        }
        else if (group == 'item') {
            //吃道具  ball, key 
            var name = other.node.name;
            if (name == 'ball') {
                var ball = other.node.getOrAddComponent(ItemBall_1.default);
                ball.go();
                Device_1.default.playSfx("pickup");
            }
            else if (name == 'key') {
                var key = other.node.getOrAddComponent(ItemKey_1.default);
                key.go();
            }
            else if (name == 'xuehua') {
                Effect_1.default.throw_snowballs();
                other.node.destroy();
            }
            else if (name == 'gun') {
                UserInfo_1.UserInfo.gun_num += 1;
                this.fsm.changeState(State.Idle);
                this.fastFadeIn("gun_out", 1);
                this.scheduleOnce(this.open_fire, 0.5);
                other.node.destroy();
            }
            else if (name == 'magnet') {
                Effect_1.default.do_magnet();
                other.node.destroy();
            }
        }
        else if (group == 'wall') {
            if (this.fsm.isInState(State.Fly)) {
                contact.disabled = true;
            }
            Device_1.default.playSfx('fall');
            // let name = other.node.name;
            // if (name == 'door') {
            //     let door = other.node.addComponent(Door)
            // }
        }
        else if (group == 'stop') {
            this.fsm.changeState(State.Idle, 0.5);
        }
        else if (group == 'ballon') {
            //ballon
            var ballon = other.getComponent(Ballon_1.default);
            if (cc.isValid(ballon)) {
                if (ballon.isDead())
                    return;
                var handSlot = this.handSlot;
                // handSlot.childArmature = ballon.armature;
                // let hand = cc.find("ATTACHED_NODE_TREE/ATTACHED_NODE:youshou/ATTACHED_NODE:youshou1", this.node)
                // ballon.node.parent = hand;
                if (this.inHandObject == null) {
                    var factory = dragonBones.CCFactory.getInstance();
                    handSlot.childArmature = factory.buildArmature("Armature", ballon.skeleton.getArmatureKey());
                    handSlot.childArmature.animation.play("up", 0);
                    this.inHandObject = handSlot.childArmature;
                }
                else {
                    handSlot.childArmature = this.inHandObject;
                }
                // factory.replaceSlotDisplay(ballon.skeleton.getArmatureKey(), "Armature", "ballon", "ballon", handSlot);
                if (cc.isValid(this.ballon)) {
                    try {
                        var p = cc.v2(this.node.x + 25 * this.dir, this.node.y + 100);
                        this.ballon.flyAway(p);
                    }
                    catch (e) {
                        console.error(e);
                    }
                }
                this.ballon = ballon;
                this.fsm.changeState(State.Fly);
                // this.scheduleOnce(() => , 0.3)
                // this.fsm.changeState(State.Fly);
                var state = this.fsm.getState(State.Fly);
                state.fly_startY = this.ballon.node.y;
                ballon.node.active = false;
                Device_1.default.playSfx("pickup");
                // ballon.node.destroy();
            }
        }
        else if (group == 'spike') {
            Device_1.default.playSfx("arrow_hit_body");
            this.goDead();
        }
        else if (group == 'bomb') {
            var bomb = other.getComponent(Bomb_1.default);
            if (bomb.isHiding)
                return;
            this.fsm.changeState(State.Kick, bomb);
        }
    };
    Role.prototype.onEnter_Kick = function (state, bomb) {
        this.playAnim("kick", 1);
        this.body.linearVelocity = cc.v2(0, 0);
        this.skeleton.addEventListener(dragonBones.EventObject.COMPLETE, function () {
        });
        state.bomb = bomb;
    };
    Role.prototype.onUpdate_Kick = function () {
        if (this.fsm.timeElapsed > 0.5) {
            this.fsm.changeState(State.Idle);
        }
    };
    Role.prototype.onExit_Kick = function (state) {
        Device_1.default.playSfx("kick_bomb");
        var bomb = state.bomb;
        bomb.goAway(this.dir);
    };
    //被抓住
    Role.prototype.beCatched = function () {
        console.log("lose game!!!!");
        // cc.audioEngine.playEffect(this.audio_cry, false);
        Device_1.default.playSfx("ough");
        this.fsm.changeState(State.Lose);
    };
    //被 发现s
    Role.prototype.beDetected = function (enemy) {
        console.log("be detected ");
        //惊吓 s
        event_1.evt.emit("Game.beDected");
        this._dectedDir = this.node.x > enemy.node.x ? 1 : -1;
        this._dectedEnemy = enemy;
        this.dir = -this._dectedDir;
        // if (this.hasGun) {
        //     this.fsm.changeState(State.PrepareGun)
        // } else {
        this.fsm.changeState(State.Shocked);
        // }
    };
    Role.prototype.onEnter_Shocked = function () {
        if (!this.hasGun) {
            cc.audioEngine.playEffect(this.audio_cry, false);
        }
        this.playAnim("shocked", 1);
    };
    /**开火 */
    Role.prototype.open_fire = function () {
        this.playAnim("idle");
        // this.fastFadeIn("gun_out", 1)
        this.fsm.changeState(State.Trigger);
    };
    Role.prototype.onEnter_Trigger = function () {
        var enemies = this.checkEnemy();
        if (enemies.length == 0) {
            enemies = this.checkEnemy(null, -this.dir);
            if (enemies.length > 0) {
                this.dir = -this.dir;
            }
        }
        if (enemies.length == 0) {
            ToastManager_1.Toast.make("前方没有敌人，无法使用！");
            return;
        }
        this.stopAnim();
        this.playAnim("gun", 1);
        this.lightEnemies(enemies);
        event_1.evt.emit("Game.UseGun");
        UserInfo_1.UserInfo.gun_num -= 1;
    };
    Role.prototype.lightEnemies = function (enemies) {
        return __awaiter(this, void 0, void 0, function () {
            var first, i, enemy;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        first = this.node;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < enemies.length)) return [3 /*break*/, 4];
                        enemy = enemies[i];
                        enemy.goDead("dead_smoke");
                        return [4 /*yield*/, this.getThunder().play(first, enemy.node, cc.v3(0, 60, 0))];
                    case 2:
                        _a.sent();
                        first = enemy.node;
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Role.prototype.onUpdate_Trigger = function () {
        if (this.fsm.timeElapsed > 1.5) {
            this.fsm.changeState(State.Idle);
        }
    };
    Role.prototype.getThunder = function () {
        if (this._thunder == null) {
            var node = cc.instantiate(this._thunderPrefab);
            // this.node.addChild(node);
            node.parent = this.node.parent;
            this._thunder = node.getComponent(Thunder_1.default);
        }
        return this._thunder;
    };
    Role.prototype.onUpdate_Shocked = function () {
        if (this.fsm.timeElapsed > 0.5) {
            //run
            if (!this.isLose) {
                this.fsm.changeState(State.Flee);
            }
        }
    };
    Role.prototype.onEnter_Flee = function () {
        this.dir = this._dectedDir;
        this.playAnim("walk");
        this.armature.animation.timeScale = 2;
        this.changeEmotionState(Emotion.Frightened);
    };
    Role.prototype.onUpdate_Flee = function () {
        //walk away 
        var b = this.checkIsCliff(0);
        if (b) {
            this.fsm.changeState(State.Cliff);
        }
        if (this.fsm.timeElapsed > 2.5) {
            this.fsm.changeState(State.Breath);
        }
        this.move();
    };
    Role.prototype.onExit_Flee = function () {
        this.armature.animation.timeScale = 1;
    };
    Role.prototype.onEnter_Move = function () {
        this.playAnim("walk");
        this.fadeIn("normal", 1);
    };
    Role.prototype.onUpdate_Move = function () {
        this.move();
        var b = this.checkIsCliff(0);
        if (b) {
            // this.fsm.changeState(State.Cliff)
            this.fsm.changeState(State.Idle);
            // this.dir *= -1;
        }
        else if (this.checkIsWall()) {
            this.fsm.changeState(State.Idle);
            //change dir
            this.dir *= -1;
        }
    };
    Role.prototype.onExit_Move = function () {
        this.stopAnim();
    };
    Role.prototype.onEnter_Breath = function (state) {
        var _this = this;
        this.playAnim("breath");
        Device_1.default.playSfx("breath");
        state.setTimeout(1.0, function () { return _this.fsm.changeState(State.Idle); });
    };
    Role.prototype.onEnter_Cliff = function () {
        // this.playAnim('cliff', 1)
        // Device.playSfx("cliff")
    };
    Role.prototype.onUpdate_Cliff = function () {
        if (this.fsm.timeElapsed > 1) {
            this.fsm.changeState(State.Idle);
            // this.dir *= -1
        }
    };
    Role.prototype.onEnter_Idle = function (state, timeout) {
        this.playAnim("idle");
        state.timeout = timeout;
        state.setInterval(0.75, this.checkTarget, this);
    };
    Role.prototype.onExit_Idle = function () {
        this.stopAnim();
    };
    Role.prototype.onUpdate_Idle = function (state) {
        if (state.timeout) {
            if (this.fsm.timeElapsed > state.timeout) {
                this.fsm.revertState();
            }
        }
    };
    Role.prototype.onEnter_Fly = function (state) {
        // this.colliders.forEach(v => v.enabled = false)
        if (this.fsm.getPreviousState().id != State.Fly) {
            this.playAnim("fly_idle");
            this.fastFadeIn("fly_enter", 1);
        }
        state.gravityScale = this.body.gravityScale;
        this.body.gravityScale = 0;
        state.fly_startY = this.ballon.node.y;
    };
    Role.prototype.onUpdate_Fly = function (state) {
        if (this.fsm.timeElapsed < 0.5) {
            this.body.linearVelocity = cc.v2(this.dir * 75, 100);
        }
        else {
            this.body.linearVelocity = cc.v2(0, 100);
        }
        var dist = this.node.y - state.fly_startY;
        if (dist > 222) {
            this.fsm.changeState(State.Idle);
        }
    };
    Role.prototype.onExit_Fly = function (state) {
        //recovery 
        // this.colliders.forEach(v => v.enabled = true)
        this.body.gravityScale = state.gravityScale;
        this.handSlot.childArmature = null;
        var p = cc.v2(this.node.x + 25 * this.dir, this.node.y + 100);
        this.ballon.flyAway(p);
    };
    Role.prototype.checkTarget = function () {
        this.raycast();
    };
    /**判断 前方是否是老头 */
    Role.prototype.raycast = function () {
        var cliff = this.checkIsCliff(0);
        if (cliff) {
            return false;
        }
        var p1 = this.worldCenter();
        var p2 = cc.v2(p1.x + this.dir * 800, p1.y);
        var res = this._world.rayCast(p1, p2, cc.RayCastType.Closest);
        // console.log(res[0].collider.node.group);
        var r = res[0];
        if (r) {
            var group = r.collider.node.group;
            if (group == 'target') {
                this.fsm.changeState(State.Move);
                event_1.evt.emit("Game.seeTarget", this);
                return true;
            }
        }
        return false;
    };
    Role.prototype.onEnter_Lose = function () {
        //游戏失败
        this.isLose = true;
        // this.playAnim("idle")
        this.changeEmotionState(Emotion.Frightened);
    };
    Role.prototype.onEnter_Win = function () {
        //游戏胜利
        this.playAnim2('idle', "happy");
        event_1.evt.emit("Game.win");
    };
    Role.prototype.move = function () {
        // this.node.x += this.dir * this.speed;
        var v = this.body.linearVelocity;
        this.body.linearVelocity = cc.v2(this.dir * this.speed * 180, v.y);
    };
    Role.prototype.playEmmm = function () {
        if (this.playEmmmCD <= 0) {
            Device_1.default.playSfx("eh");
            this.playEmmmCD = 5;
        }
    };
    //判断能否 移动
    Role.prototype.checkMove = function () {
        if (this.fsm.isInState(State.Shocked) ||
            this.fsm.isInState(State.PrepareGun) ||
            this.fsm.isInState(State.Flee) ||
            this.fsm.isInState(State.Trigger) ||
            this.fsm.isInState(State.Fly) ||
            this.fsm.isInState(State.Dead))
            return;
        if (this.isLose)
            return;
        var wall = this.checkIsWall(60, this.dir);
        if (wall) {
            //不处理
            var wall2 = this.checkIsWall(60, -this.dir);
            if (!wall2) {
                this.dir *= -1;
                this.changeToMove();
            }
            else {
                this.playEmmm();
            }
        }
        else {
            var cliff = this.checkIsCliff(0);
            if (!cliff) {
                //canmove 
                this.changeToMove();
            }
            else {
                // this.fadeIn("cliff", 1)
                var cliff_1 = this.checkIsCliff(0, -this.dir);
                if (!cliff_1) {
                    this.dir *= -1;
                    this.changeToMove();
                }
            }
        }
        this.playEmmmCD -= 1;
    };
    Role.prototype.changeToMove = function () {
        if (!this.isLose) {
            if (Math.random() < 0.5) {
                Device_1.default.playSfx(g.getRandomInArray(Role_sounds));
            }
            this.fsm.changeState(State.Move);
        }
    };
    //判断前方是墙
    Role.prototype.checkIsWall = function (dist, dir) {
        if (dist === void 0) { dist = 60; }
        if (dir === void 0) { dir = this.dir; }
        // let p1 = this.node.getBoundingBoxToWorld().center;
        var p1 = this.worldCenter();
        var p2 = cc.v2(p1.x + dir * dist, p1.y);
        var res = this._world.rayCast(p1, p2, cc.RayCastType.Closest);
        var r = res[0];
        if (r) {
            var group = r.collider.node.group;
            if (group == 'wall' || group == 'pin' || group == 'obstacle' || group == 'weapon') {
                return true;
            }
        }
        return false;
    };
    //判断前方是悬崖
    //height从100 的高处观察是否有悬崖
    Role.prototype.checkIsCliff = function (height, dir) {
        if (dir === void 0) { dir = this.dir; }
        height = height || 100;
        //100:为高度，安全区域 射线 最大长度为c
        var c = height / Math.sin(cc.misc.degreesToRadians(45));
        // let csq = c * c;
        // c += 5;//5个像素误差
        var rect = this.node.getBoundingBoxToWorld();
        var p1 = cc.v2(rect.center.x, rect.origin.y + height);
        var p2 = cc.v2(p1.x + dir * c, p1.y - c);
        var res = this._world.rayCast(p1, p2, cc.RayCastType.Closest);
        var r = res[0];
        return r == null;
        // if (r) {
        //     let lensq = cc.Vec2.squaredDistance(p1, r.point);
        //     if (lensq > csq) {
        //         //看到悬崖
        //         return true
        //     }
        // }
        return false;
    };
    /**看前方是否有敌人 */
    Role.prototype.checkEnemy = function (height, dir) {
        if (height === void 0) { height = null; }
        if (dir === void 0) { dir = this.dir; }
        height = height || 90;
        var rect = this.node.getBoundingBoxToWorld();
        var p1 = cc.v2(rect.center.x, rect.origin.y + height);
        var p2 = cc.v2(p1.x + dir * 800, p1.y);
        var res = this._world.rayCast(p1, p2, cc.RayCastType.All);
        this.tmp_enemies.splice(0);
        for (var i = 0; i < res.length; i++) {
            var r = res[i];
            if (r && r.collider) {
                var enemy = r.collider.getComponent(AIEnemy_1.default);
                if (enemy)
                    this.tmp_enemies.push(enemy);
            }
        }
        return this.tmp_enemies;
    };
    Role.prototype.onEnemyDead = function () {
        var _this = this;
        // this.emotionState.changeState(Emotion.Happy);
        this.scheduleOnce(function (v) {
            _this.changeEmotionState(Emotion.Happy);
        }, 1);
        Device_1.default.playEffect(this.audio_laugh);
    };
    Role.prototype.onEnter_Happy = function (state, param) {
        if (this.isDead())
            return;
        if (param) {
            this.fadeIn(param, 1);
        }
        else {
            this.fadeIn("happy", 1);
        }
    };
    Role.prototype.onEnter_Normal = function () {
        if (this.isDead())
            return;
        this.fadeIn("normal", 1);
    };
    Role.prototype.onEnter_Frightened = function () {
        if (this.isDead())
            return;
        this.fadeIn("frightened", 1);
    };
    Role.prototype.onUpdate_Frightened = function () {
        if (this.emotionState.timeElapsed > 3.0) {
            this.changeEmotionState(Emotion.Normal);
        }
    };
    Role.prototype.onUpdate_Happy = function () {
        if (this.emotionState.timeElapsed > 3.0) {
            this.changeEmotionState(Emotion.Normal);
        }
    };
    Role.prototype.changeEmotionState = function (state, param) {
        if (this.isDead())
            return;
        this.emotionState.changeState(state, param);
    };
    Role.prototype.sayHelloBack = function (target) {
        if (this.fsm.isInState(State.Idle)) {
            var targetDir = target.dir;
            this.dir = -targetDir;
            this.changeEmotionState(Emotion.Happy, 'hello');
            Device_1.default.playSfx("hi");
        }
        else {
            this.changeEmotionState(Emotion.Happy);
        }
    };
    Role.prototype.goDead = function () {
        this.fsm.changeState(State.Dead);
    };
    Role.prototype.onUpdate_Dead = function () {
    };
    Role.prototype.onEnter_Dead = function (state) {
        var _this = this;
        Device_1.default.playSfx(g.getRandomInArray(Dead_sounds));
        this.playAnim("dead", 1);
        state.setTimeout(0.5, function () {
            event_1.evt.emit("Game.lose");
            _this.fadeIn("eye_close", 1);
        });
    };
    Role.prototype.isDead = function () {
        return this.fsm.isInState(State.Dead);
    };
    var Role_1;
    Role.self = null;
    __decorate([
        property(cc.AudioClip)
    ], Role.prototype, "audio_cry", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Role.prototype, "audio_laugh", void 0);
    Role = Role_1 = __decorate([
        ccclass
    ], Role);
    return Role;
}(SkeletonBase_1.default));
exports.default = Role;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcUm9sZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBZ0M7QUFDaEMsZ0RBQTJDO0FBQzNDLG9EQUFpRDtBQUNqRCx1Q0FBa0M7QUFDbEMscUNBQWdDO0FBRWhDLHVEQUFrRDtBQUNsRCwrQ0FBMEM7QUFDMUMseUNBQWdEO0FBQ2hELHNEQUFpRDtBQUVqRCxxREFBZ0Q7QUFDaEQsNENBQXVDO0FBQ3ZDLDZFQUE0RTtBQUM1RSxtQ0FBOEI7QUFDOUIsK0JBQTBCO0FBRTFCLGdFQUF3RDtBQUN4RCx3Q0FBbUM7QUFFbkMsMENBQXFDO0FBQy9CLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQUssS0FjSjtBQWRELFdBQUssS0FBSztJQUNOLHFDQUFNLENBQUE7SUFDTixpQ0FBSSxDQUFBO0lBQ0osaUNBQUksQ0FBQTtJQUNKLHVDQUFPLENBQUE7SUFDUCxtQ0FBSyxDQUFBO0lBQ0wsaUNBQUksQ0FBQTtJQUNKLGlDQUFJLENBQUE7SUFDSiwrQkFBRyxDQUFBO0lBQ0gsaUNBQUksQ0FBQTtJQUNKLDZDQUFVLENBQUE7SUFDVixnQ0FBRyxDQUFBO0lBQ0gsd0NBQU8sQ0FBQTtJQUNQLGtDQUFJLENBQUE7QUFDUixDQUFDLEVBZEksS0FBSyxLQUFMLEtBQUssUUFjVDtBQUVELElBQUssT0FJSjtBQUpELFdBQUssT0FBTztJQUNSLHlDQUFNLENBQUE7SUFDTix1Q0FBSyxDQUFBO0lBQ0wsaURBQVUsQ0FBQTtBQUNkLENBQUMsRUFKSSxPQUFPLEtBQVAsT0FBTyxRQUlYO0FBRUQsSUFBTSxXQUFXLEdBQUcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUE7QUFDdkMsSUFBTSxXQUFXLEdBQUcs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UyxDQUFDOzZDQUNVO0lBaEJoQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBdXJCeEI7SUFBRCxXQUFDO0NBdnJCRCxBQXVyQkMsQ0F2ckJpQyxzQkFBWSxHQXVyQjdDO2tCQXZyQm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQUlFbmVteSBmcm9tIFwiLi9BSUVuZW15XCI7XHJcbmltcG9ydCBGU00gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9jb3JlL0ZTTVwiO1xyXG5pbXBvcnQgeyBldnQgfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL2NvcmUvZXZlbnRcIjtcclxuaW1wb3J0IEl0ZW1CYWxsIGZyb20gXCIuL0l0ZW1CYWxsXCI7XHJcbmltcG9ydCBJdGVtS2V5IGZyb20gXCIuL0l0ZW1LZXlcIjtcclxuaW1wb3J0IERvb3IgZnJvbSBcIi4vRG9vclwiO1xyXG5pbXBvcnQgY2NVdGlsIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdXRpbHMvY2NVdGlsXCI7XHJcbmltcG9ydCBTa2VsZXRvbkJhc2UgZnJvbSBcIi4vU2tlbGV0b25CYXNlXCI7XHJcbmltcG9ydCBLZXlUb2dnbGUsIHsgS2V5RGlyIH0gZnJvbSBcIi4vS2V5VG9nZ2xlXCI7XHJcbmltcG9ydCBEZXZpY2UgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9taXNjL0RldmljZVwiO1xyXG5pbXBvcnQgVGFyZ2V0IGZyb20gXCIuL1RhcmdldFwiO1xyXG5pbXBvcnQgUmVtb3ZlT3V0T2ZWaWV3IGZyb20gXCIuL1JlbW92ZU91dE9mVmlld1wiO1xyXG5pbXBvcnQgVGh1bmRlciBmcm9tIFwiLi9MZXZlbHMvVGh1bmRlclwiO1xyXG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvVXNlckluZm9cIjtcclxuaW1wb3J0IEJhbGxvbiBmcm9tIFwiLi9CYWxsb25cIjtcclxuaW1wb3J0IEJvbWIgZnJvbSBcIi4vQm9tYlwiO1xyXG5pbXBvcnQgSXRlbVBvcnRhbCBmcm9tIFwiLi9Qb3J0YWxcIjtcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3VpL1RvYXN0TWFuYWdlclwiO1xyXG5pbXBvcnQgVW5pdHkgZnJvbSBcIi4vQ29tbW9uL1VuaXR5XCI7XHJcbmltcG9ydCBHYW1lIGZyb20gXCIuL0dhbWVcIjtcclxuaW1wb3J0IEVmZmVjdCBmcm9tIFwiLi9MZXZlbHMvRWZmZWN0XCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5lbnVtIFN0YXRlIHtcclxuICAgIEJyZWF0aCxcclxuICAgIElkbGUsXHJcbiAgICBNb3ZlLFxyXG4gICAgU2hvY2tlZCxcclxuICAgIENsaWZmLFxyXG4gICAgRmxlZSxcclxuICAgIExvc2UsXHJcbiAgICBXaW4sXHJcbiAgICBEZWFkLFxyXG4gICAgUHJlcGFyZUd1bixcclxuICAgIEZseSxcclxuICAgIFRyaWdnZXIsXHJcbiAgICBLaWNrXHJcbn1cclxuXHJcbmVudW0gRW1vdGlvbiB7XHJcbiAgICBOb3JtYWwsXHJcbiAgICBIYXBweSxcclxuICAgIEZyaWdodGVuZWRcclxufVxyXG5cclxuY29uc3QgUm9sZV9zb3VuZHMgPSBbJ2VuaGVuZycsICdsYXVnaCddXHJcbmNvbnN0IERlYWRfc291bmRzID0gWydkZWFkJywgJ2RlYWQyJ11cclxuXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb2xlIGV4dGVuZHMgU2tlbGV0b25CYXNlIHtcclxuICAgIGZzbTogRlNNO1xyXG4gICAgcHJpdmF0ZSBfZGlyOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHNwZWVkOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIGJhc2VTY2FsZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBlbW90aW9uU3RhdGU6IEZTTTtcclxuXHJcbiAgICBpc0xvc2UgPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgYXVkaW9fY3J5OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBhdWRpb19sYXVnaDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBzdGF0aWMgc2VsZjogUm9sZSA9IG51bGxcclxuXHJcbiAgICBoYXNHdW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb2xsaWRlcnM6IGNjLlBoeXNpY3NDb2xsaWRlcltdO1xyXG5cclxuICAgIGluSGFuZE9iamVjdDogZHJhZ29uQm9uZXMuQXJtYXR1cmUgPSBudWxsO1xyXG5cclxuICAgIGJhbGxvbjogQmFsbG9uID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IGRpcigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kaXI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IGRpcih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZGlyID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IHRoaXMuYmFzZVNjYWxlICogdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgUm9sZS5zZWxmID0gdGhpcztcclxuICAgICAgICBldnQub24oXCJHYW1lLmtleU1vdmVkXCIsIHRoaXMuY2hlY2tNb3ZlLCB0aGlzKTtcclxuICAgICAgICBldnQub24oJ0dhbWUuaGVsbG8nLCB0aGlzLnNheUhlbGxvQmFjaywgdGhpcyk7XHJcbiAgICAgICAgZXZ0Lm9uKFwiR2FtZS5sb3NlVGFyZ2V0XCIsIHRoaXMub25Mb3NlVGFyZ2V0LCB0aGlzKVxyXG4gICAgICAgIGV2dC5vbihcIkdhbWUuY2F0Y2hcIiwgdGhpcy5iZUNhdGNoZWQsIHRoaXMpXHJcbiAgICAgICAgZXZ0Lm9uKFwiR2FtZS5ib21iXCIsIHRoaXMuZ29EZWFkLCB0aGlzKTtcclxuICAgICAgICBldnQub24oXCJHYW1lLmNoYW5nZVJvbGVEaXJcIiwgdGhpcy5jaGFuZ2VEaXJNYW51YWxseSwgdGhpcyk7XHJcbiAgICAgICAgZXZ0Lm9uKFwiR2FtZS5lbmVteURlYWRcIiwgdGhpcy5vbkVuZW15RGVhZCwgdGhpcyk7XHJcbiAgICAgICAgLy90aGlzLmJlQ2F0Y2hlZChlbmVteSlcclxuICAgICAgICB0aGlzLmNvbGxpZGVycyA9IHRoaXMuZ2V0Q29tcG9uZW50cyhjYy5QaHlzaWNzQ29sbGlkZXIpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5iYXNlU2NhbGUgPSB0aGlzLm5vZGUuc2NhbGU7XHJcblxyXG4gICAgICAgIHRoaXMuZnNtID0gdGhpcy5hZGRDb21wb25lbnQoRlNNKTtcclxuICAgICAgICB0aGlzLmZzbS5pbml0KHRoaXMsIFN0YXRlKTtcclxuICAgICAgICB0aGlzLmZzbS5lbnRlclN0YXRlKFN0YXRlLklkbGUpXHJcblxyXG4gICAgICAgIHRoaXMuZW1vdGlvblN0YXRlID0gdGhpcy5hZGRDb21wb25lbnQoRlNNKTtcclxuICAgICAgICB0aGlzLmVtb3Rpb25TdGF0ZS5pbml0KHRoaXMsIEVtb3Rpb24pXHJcbiAgICAgICAgdGhpcy5lbW90aW9uU3RhdGUuZW50ZXJTdGF0ZShFbW90aW9uLk5vcm1hbClcclxuXHJcblxyXG4gICAgICAgIGxldCBjaGVjayA9IHRoaXMuYWRkQ29tcG9uZW50KFJlbW92ZU91dE9mVmlldyk7XHJcbiAgICAgICAgY2hlY2sub25PZmZTY3JlZW4ub24odGhpcy5vbk91dE9mU2NyZWVuLCB0aGlzKVxyXG4gICAgICAgIHRoaXMuZXF1aXBHdW4oKTtcclxuICAgICAgICBVbml0eS5sb2FkU2tpbnModGhpcy5za2VsZXRvbiwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25PdXRPZlNjcmVlbigpIHtcclxuICAgICAgICBldnQuZW1pdChcIkdhbWUubG9zZVwiKVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZURpck1hbnVhbGx5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmZzbS5pc0luU3RhdGUoU3RhdGUuSWRsZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja01vdmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL2NoYW5nZURpclxyXG4gICAgICAgICAgICBpZiAodGhpcy5mc20uaXNJblN0YXRlKFN0YXRlLk1vdmUpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXIgKj0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9zZVRhcmdldCgpIHtcclxuICAgICAgICAvL2JhY2sgdG8gbm9tcm1hbFxyXG4gICAgICAgIHRoaXMuYXJtYXR1cmUuYW5pbWF0aW9uLnRpbWVTY2FsZSA9IDE7XHJcbiAgICAgICAgLy8gdGhpcy5mc20uY2hhbmdlU3RhdGUoU3RhdGUuQnJlYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgZXZ0Lm9mZih0aGlzKTtcclxuICAgICAgICBSb2xlLnNlbGYgPSBudWxsO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKiog57uZ5Li76KeS6KOF5q2m5ZmoICzlkI7pnaLnu5nmirXmjKHkuIDmrKHkvKTlrrMqL1xyXG5cclxuICAgIF90aHVuZGVyUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIGVxdWlwR3VuKCkge1xyXG4gICAgICAgIHRoaXMuaGFzR3VuID0gdHJ1ZTtcclxuICAgICAgICBjY1V0aWwuZ2V0UmVzKFwiUHJlZmFicy9lZmZlY3QvdGh1bmRlclwiLCBjYy5QcmVmYWIpLnRoZW4odiA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RodW5kZXJQcmVmYWIgPSB2O1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdDogY2MuUGh5c2ljc0NvbnRhY3QsIHNlbGYsIG90aGVyOiBjYy5QaHlzaWNzQ29sbGlkZXIpIHtcclxuICAgICAgICBsZXQgZ3JvdXAgPSBvdGhlci5ub2RlLmdyb3VwO1xyXG4gICAgICAgIGlmIChncm91cCA9PSAnZW5lbXknKSB7XHJcbiAgICAgICAgICAgIGxldCBlbmVteSA9IG90aGVyLmdldENvbXBvbmVudChBSUVuZW15KVxyXG4gICAgICAgICAgICBpZiAoZW5lbXkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhY3QuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChncm91cCA9PSAndGFyZ2V0Jykge1xyXG4gICAgICAgICAgICAvL3dpbiBcclxuICAgICAgICAgICAgY29udGFjdC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZnNtLmNoYW5nZVN0YXRlKFN0YXRlLldpbik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChncm91cCA9PSAncGluJykge1xyXG4gICAgICAgICAgICAvLyBpZiAob3RoZXIubm9kZS55ID4gdGhpcy5ub2RlLnkgKyAzMCkge1xyXG4gICAgICAgICAgICAvLyAgICAgY29udGFjdC5kaXNhYmxlZE9uY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5mc20uaXNJblN0YXRlKFN0YXRlLkZseSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhY3QuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBwaW4gPSBvdGhlci5nZXRDb21wb25lbnQoS2V5VG9nZ2xlKTtcclxuICAgICAgICAgICAgaWYgKHBpbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBpbi5jdXJEaXIueSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgd3BvcyA9IGNjVXRpbC5nZXRXb3JsZFBvc2l0aW9uKG90aGVyLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdwb3MueSA+PSB0aGlzLndvcmxkQ2VudGVyKCkueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWN0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBpbi5jdXJEaXIueSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZzbS5jaGFuZ2VTdGF0ZShTdGF0ZS5JZGxlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZ3JvdXAgPT0gJ2l0ZW0nKSB7XHJcbiAgICAgICAgICAgIC8v5ZCD6YGT5YW3ICBiYWxsLCBrZXkgXHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gb3RoZXIubm9kZS5uYW1lO1xyXG4gICAgICAgICAgICBpZiAobmFtZSA9PSAnYmFsbCcpIHtcclxuICAgICAgICAgICAgICAgIGxldCBiYWxsID0gb3RoZXIubm9kZS5nZXRPckFkZENvbXBvbmVudChJdGVtQmFsbCk7XHJcbiAgICAgICAgICAgICAgICBiYWxsLmdvKCk7XHJcbiAgICAgICAgICAgICAgICBEZXZpY2UucGxheVNmeChcInBpY2t1cFwiKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT0gJ2tleScpIHtcclxuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBvdGhlci5ub2RlLmdldE9yQWRkQ29tcG9uZW50KEl0ZW1LZXkpO1xyXG4gICAgICAgICAgICAgICAga2V5LmdvKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PSAneHVlaHVhJykge1xyXG4gICAgICAgICAgICAgICAgRWZmZWN0LnRocm93X3Nub3diYWxscygpO1xyXG4gICAgICAgICAgICAgICAgb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PSAnZ3VuJykge1xyXG4gICAgICAgICAgICAgICAgVXNlckluZm8uZ3VuX251bSArPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mc20uY2hhbmdlU3RhdGUoU3RhdGUuSWRsZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZhc3RGYWRlSW4oXCJndW5fb3V0XCIsIDEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLm9wZW5fZmlyZSwgMC41KTtcclxuICAgICAgICAgICAgICAgIG90aGVyLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT0gJ21hZ25ldCcpIHtcclxuICAgICAgICAgICAgICAgIEVmZmVjdC5kb19tYWduZXQoKTtcclxuICAgICAgICAgICAgICAgIG90aGVyLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChncm91cCA9PSAnd2FsbCcpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZnNtLmlzSW5TdGF0ZShTdGF0ZS5GbHkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWN0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBEZXZpY2UucGxheVNmeCgnZmFsbCcpXHJcbiAgICAgICAgICAgIC8vIGxldCBuYW1lID0gb3RoZXIubm9kZS5uYW1lO1xyXG4gICAgICAgICAgICAvLyBpZiAobmFtZSA9PSAnZG9vcicpIHtcclxuICAgICAgICAgICAgLy8gICAgIGxldCBkb29yID0gb3RoZXIubm9kZS5hZGRDb21wb25lbnQoRG9vcilcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZ3JvdXAgPT0gJ3N0b3AnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnNtLmNoYW5nZVN0YXRlKFN0YXRlLklkbGUsIDAuNSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChncm91cCA9PSAnYmFsbG9uJykge1xyXG4gICAgICAgICAgICAvL2JhbGxvblxyXG5cclxuICAgICAgICAgICAgbGV0IGJhbGxvbiA9IG90aGVyLmdldENvbXBvbmVudChCYWxsb24pO1xyXG4gICAgICAgICAgICBpZiAoY2MuaXNWYWxpZChiYWxsb24pKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFsbG9uLmlzRGVhZCgpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBsZXQgaGFuZFNsb3QgPSB0aGlzLmhhbmRTbG90O1xyXG4gICAgICAgICAgICAgICAgLy8gaGFuZFNsb3QuY2hpbGRBcm1hdHVyZSA9IGJhbGxvbi5hcm1hdHVyZTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBoYW5kID0gY2MuZmluZChcIkFUVEFDSEVEX05PREVfVFJFRS9BVFRBQ0hFRF9OT0RFOnlvdXNob3UvQVRUQUNIRURfTk9ERTp5b3VzaG91MVwiLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAvLyBiYWxsb24ubm9kZS5wYXJlbnQgPSBoYW5kO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5IYW5kT2JqZWN0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmFjdG9yeSA9IGRyYWdvbkJvbmVzLkNDRmFjdG9yeS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRTbG90LmNoaWxkQXJtYXR1cmUgPSBmYWN0b3J5LmJ1aWxkQXJtYXR1cmUoXCJBcm1hdHVyZVwiLCBiYWxsb24uc2tlbGV0b24uZ2V0QXJtYXR1cmVLZXkoKSlcclxuICAgICAgICAgICAgICAgICAgICBoYW5kU2xvdC5jaGlsZEFybWF0dXJlLmFuaW1hdGlvbi5wbGF5KFwidXBcIiwgMClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluSGFuZE9iamVjdCA9IGhhbmRTbG90LmNoaWxkQXJtYXR1cmU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRTbG90LmNoaWxkQXJtYXR1cmUgPSB0aGlzLmluSGFuZE9iamVjdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGZhY3RvcnkucmVwbGFjZVNsb3REaXNwbGF5KGJhbGxvbi5za2VsZXRvbi5nZXRBcm1hdHVyZUtleSgpLCBcIkFybWF0dXJlXCIsIFwiYmFsbG9uXCIsIFwiYmFsbG9uXCIsIGhhbmRTbG90KTtcclxuICAgICAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuYmFsbG9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwID0gY2MudjIodGhpcy5ub2RlLnggKyAyNSAqIHRoaXMuZGlyLCB0aGlzLm5vZGUueSArIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFsbG9uLmZseUF3YXkocCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWxsb24gPSBiYWxsb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZzbS5jaGFuZ2VTdGF0ZShTdGF0ZS5GbHkpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiAsIDAuMylcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZnNtLmNoYW5nZVN0YXRlKFN0YXRlLkZseSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLmZzbS5nZXRTdGF0ZShTdGF0ZS5GbHkpIGFzIGFueTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmZseV9zdGFydFkgPSB0aGlzLmJhbGxvbi5ub2RlLnk7XHJcbiAgICAgICAgICAgICAgICBiYWxsb24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIERldmljZS5wbGF5U2Z4KFwicGlja3VwXCIpXHJcbiAgICAgICAgICAgICAgICAvLyBiYWxsb24ubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGdyb3VwID09ICdzcGlrZScpIHtcclxuICAgICAgICAgICAgRGV2aWNlLnBsYXlTZngoXCJhcnJvd19oaXRfYm9keVwiKVxyXG4gICAgICAgICAgICB0aGlzLmdvRGVhZCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZ3JvdXAgPT0gJ2JvbWInKSB7XHJcbiAgICAgICAgICAgIGxldCBib21iID0gb3RoZXIuZ2V0Q29tcG9uZW50KEJvbWIpO1xyXG4gICAgICAgICAgICBpZiAoYm9tYi5pc0hpZGluZykgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLmZzbS5jaGFuZ2VTdGF0ZShTdGF0ZS5LaWNrLCBib21iKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FbnRlcl9LaWNrKHN0YXRlLCBib21iKSB7XHJcblxyXG4gICAgICAgIHRoaXMucGxheUFuaW0oXCJraWNrXCIsIDEpXHJcbiAgICAgICAgdGhpcy5ib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMClcclxuICAgICAgICB0aGlzLnNrZWxldG9uLmFkZEV2ZW50TGlzdGVuZXIoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuQ09NUExFVEUsICgpID0+IHtcclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzdGF0ZS5ib21iID0gYm9tYlxyXG4gICAgfVxyXG5cclxuICAgIG9uVXBkYXRlX0tpY2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZnNtLnRpbWVFbGFwc2VkID4gMC41KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnNtLmNoYW5nZVN0YXRlKFN0YXRlLklkbGUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRXhpdF9LaWNrKHN0YXRlKSB7XHJcbiAgICAgICAgRGV2aWNlLnBsYXlTZngoXCJraWNrX2JvbWJcIilcclxuICAgICAgICBsZXQgYm9tYiA9IHN0YXRlLmJvbWIgYXMgQm9tYjtcclxuICAgICAgICBib21iLmdvQXdheSh0aGlzLmRpcik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8v6KKr5oqT5L2PXHJcbiAgICBiZUNhdGNoZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb3NlIGdhbWUhISEhXCIpXHJcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmF1ZGlvX2NyeSwgZmFsc2UpO1xyXG4gICAgICAgIERldmljZS5wbGF5U2Z4KFwib3VnaFwiKTtcclxuICAgICAgICB0aGlzLmZzbS5jaGFuZ2VTdGF0ZShTdGF0ZS5Mb3NlKVxyXG4gICAgfVxyXG5cclxuICAgIF9kZWN0ZWREaXI6IG51bWJlciA9IDA7XHJcbiAgICBfZGVjdGVkRW5lbXk6IEFJRW5lbXkgPSBudWxsO1xyXG4gICAgLy/ooqsg5Y+R546wc1xyXG4gICAgYmVEZXRlY3RlZChlbmVteTogQUlFbmVteSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYmUgZGV0ZWN0ZWQgXCIpXHJcbiAgICAgICAgLy/mg4rlkJMgc1xyXG4gICAgICAgIGV2dC5lbWl0KFwiR2FtZS5iZURlY3RlZFwiKVxyXG4gICAgICAgIHRoaXMuX2RlY3RlZERpciA9IHRoaXMubm9kZS54ID4gZW5lbXkubm9kZS54ID8gMSA6IC0xO1xyXG4gICAgICAgIHRoaXMuX2RlY3RlZEVuZW15ID0gZW5lbXk7XHJcbiAgICAgICAgdGhpcy5kaXIgPSAtdGhpcy5fZGVjdGVkRGlyO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmhhc0d1bikge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmZzbS5jaGFuZ2VTdGF0ZShTdGF0ZS5QcmVwYXJlR3VuKVxyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5mc20uY2hhbmdlU3RhdGUoU3RhdGUuU2hvY2tlZCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW50ZXJfU2hvY2tlZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaGFzR3VuKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5hdWRpb19jcnksIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wbGF5QW5pbShcInNob2NrZWRcIiwgMSlcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKuW8gOeBqyAqL1xyXG4gICAgb3Blbl9maXJlKCkge1xyXG4gICAgICAgIHRoaXMucGxheUFuaW0oXCJpZGxlXCIpXHJcbiAgICAgICAgLy8gdGhpcy5mYXN0RmFkZUluKFwiZ3VuX291dFwiLCAxKVxyXG4gICAgICAgIHRoaXMuZnNtLmNoYW5nZVN0YXRlKFN0YXRlLlRyaWdnZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW50ZXJfVHJpZ2dlcigpIHtcclxuICAgICAgICBsZXQgZW5lbWllcyA9IHRoaXMuY2hlY2tFbmVteSgpXHJcbiAgICAgICAgaWYgKGVuZW1pZXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgZW5lbWllcyA9IHRoaXMuY2hlY2tFbmVteShudWxsLCAtdGhpcy5kaXIpXHJcbiAgICAgICAgICAgIGlmIChlbmVtaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyID0gLXRoaXMuZGlyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVuZW1pZXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgVG9hc3QubWFrZShcIuWJjeaWueayoeacieaVjOS6uu+8jOaXoOazleS9v+eUqO+8gVwiKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RvcEFuaW0oKTtcclxuICAgICAgICB0aGlzLnBsYXlBbmltKFwiZ3VuXCIsIDEpXHJcblxyXG4gICAgICAgIHRoaXMubGlnaHRFbmVtaWVzKGVuZW1pZXMpO1xyXG5cclxuICAgICAgICBldnQuZW1pdChcIkdhbWUuVXNlR3VuXCIpO1xyXG4gICAgICAgIFVzZXJJbmZvLmd1bl9udW0gLT0gMTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBsaWdodEVuZW1pZXMoZW5lbWllcykge1xyXG4gICAgICAgIGxldCBmaXJzdCA9IHRoaXMubm9kZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVuZW1pZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGVuZW15ID0gZW5lbWllc1tpXVxyXG4gICAgICAgICAgICBlbmVteS5nb0RlYWQoXCJkZWFkX3Ntb2tlXCIpO1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdldFRodW5kZXIoKS5wbGF5KGZpcnN0LCBlbmVteS5ub2RlLCBjYy52MygwLCA2MCwgMCkpO1xyXG4gICAgICAgICAgICBmaXJzdCA9IGVuZW15Lm5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvblVwZGF0ZV9UcmlnZ2VyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmZzbS50aW1lRWxhcHNlZCA+IDEuNSkge1xyXG4gICAgICAgICAgICB0aGlzLmZzbS5jaGFuZ2VTdGF0ZShTdGF0ZS5JZGxlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX3RodW5kZXI6IFRodW5kZXIgPSBudWxsO1xyXG5cclxuICAgIGdldFRodW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RodW5kZXIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuX3RodW5kZXJQcmVmYWIpXHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgICAgICB0aGlzLl90aHVuZGVyID0gbm9kZS5nZXRDb21wb25lbnQoVGh1bmRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl90aHVuZGVyO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgb25VcGRhdGVfU2hvY2tlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5mc20udGltZUVsYXBzZWQgPiAwLjUpIHtcclxuICAgICAgICAgICAgLy9ydW5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzTG9zZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mc20uY2hhbmdlU3RhdGUoU3RhdGUuRmxlZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uRW50ZXJfRmxlZSgpIHtcclxuICAgICAgICB0aGlzLmRpciA9IHRoaXMuX2RlY3RlZERpclxyXG4gICAgICAgIHRoaXMucGxheUFuaW0oXCJ3YWxrXCIpXHJcbiAgICAgICAgdGhpcy5hcm1hdHVyZS5hbmltYXRpb24udGltZVNjYWxlID0gMjtcclxuICAgICAgICB0aGlzLmNoYW5nZUVtb3Rpb25TdGF0ZShFbW90aW9uLkZyaWdodGVuZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVXBkYXRlX0ZsZWUoKSB7XHJcbiAgICAgICAgLy93YWxrIGF3YXkgXHJcbiAgICAgICAgbGV0IGIgPSB0aGlzLmNoZWNrSXNDbGlmZigwKTtcclxuICAgICAgICBpZiAoYikge1xyXG4gICAgICAgICAgICB0aGlzLmZzbS5jaGFuZ2VTdGF0ZShTdGF0ZS5DbGlmZik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmZzbS50aW1lRWxhcHNlZCA+IDIuNSkge1xyXG4gICAgICAgICAgICB0aGlzLmZzbS5jaGFuZ2VTdGF0ZShTdGF0ZS5CcmVhdGgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRXhpdF9GbGVlKCkge1xyXG4gICAgICAgIHRoaXMuYXJtYXR1cmUuYW5pbWF0aW9uLnRpbWVTY2FsZSA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbnRlcl9Nb3ZlKCkge1xyXG4gICAgICAgIHRoaXMucGxheUFuaW0oXCJ3YWxrXCIpXHJcbiAgICAgICAgdGhpcy5mYWRlSW4oXCJub3JtYWxcIiwgMSlcclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZV9Nb3ZlKCkge1xyXG4gICAgICAgIHRoaXMubW92ZSgpXHJcbiAgICAgICAgbGV0IGIgPSB0aGlzLmNoZWNrSXNDbGlmZigwKVxyXG4gICAgICAgIGlmIChiKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZnNtLmNoYW5nZVN0YXRlKFN0YXRlLkNsaWZmKVxyXG4gICAgICAgICAgICB0aGlzLmZzbS5jaGFuZ2VTdGF0ZShTdGF0ZS5JZGxlKVxyXG4gICAgICAgICAgICAvLyB0aGlzLmRpciAqPSAtMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2hlY2tJc1dhbGwoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZzbS5jaGFuZ2VTdGF0ZShTdGF0ZS5JZGxlKVxyXG4gICAgICAgICAgICAvL2NoYW5nZSBkaXJcclxuICAgICAgICAgICAgdGhpcy5kaXIgKj0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25FeGl0X01vdmUoKSB7XHJcbiAgICAgICAgdGhpcy5zdG9wQW5pbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW50ZXJfQnJlYXRoKHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5QW5pbShcImJyZWF0aFwiKVxyXG4gICAgICAgIERldmljZS5wbGF5U2Z4KFwiYnJlYXRoXCIpXHJcbiAgICAgICAgc3RhdGUuc2V0VGltZW91dCgxLjAsICgpID0+IHRoaXMuZnNtLmNoYW5nZVN0YXRlKFN0YXRlLklkbGUpKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW50ZXJfQ2xpZmYoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5wbGF5QW5pbSgnY2xpZmYnLCAxKVxyXG4gICAgICAgIC8vIERldmljZS5wbGF5U2Z4KFwiY2xpZmZcIilcclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZV9DbGlmZigpIHtcclxuICAgICAgICBpZiAodGhpcy5mc20udGltZUVsYXBzZWQgPiAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnNtLmNoYW5nZVN0YXRlKFN0YXRlLklkbGUpXHJcbiAgICAgICAgICAgIC8vIHRoaXMuZGlyICo9IC0xXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW50ZXJfSWRsZShzdGF0ZSwgdGltZW91dCkge1xyXG4gICAgICAgIHRoaXMucGxheUFuaW0oXCJpZGxlXCIpXHJcbiAgICAgICAgc3RhdGUudGltZW91dCA9IHRpbWVvdXQ7XHJcbiAgICAgICAgc3RhdGUuc2V0SW50ZXJ2YWwoMC43NSwgdGhpcy5jaGVja1RhcmdldCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FeGl0X0lkbGUoKSB7XHJcbiAgICAgICAgdGhpcy5zdG9wQW5pbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVXBkYXRlX0lkbGUoc3RhdGUpIHtcclxuICAgICAgICBpZiAoc3RhdGUudGltZW91dCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5mc20udGltZUVsYXBzZWQgPiBzdGF0ZS50aW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZzbS5yZXZlcnRTdGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW50ZXJfRmx5KHN0YXRlKSB7XHJcbiAgICAgICAgLy8gdGhpcy5jb2xsaWRlcnMuZm9yRWFjaCh2ID0+IHYuZW5hYmxlZCA9IGZhbHNlKVxyXG4gICAgICAgIGlmICh0aGlzLmZzbS5nZXRQcmV2aW91c1N0YXRlKCkuaWQgIT0gU3RhdGUuRmx5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheUFuaW0oXCJmbHlfaWRsZVwiKVxyXG4gICAgICAgICAgICB0aGlzLmZhc3RGYWRlSW4oXCJmbHlfZW50ZXJcIiwgMSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRlLmdyYXZpdHlTY2FsZSA9IHRoaXMuYm9keS5ncmF2aXR5U2NhbGU7XHJcbiAgICAgICAgdGhpcy5ib2R5LmdyYXZpdHlTY2FsZSA9IDA7XHJcbiAgICAgICAgc3RhdGUuZmx5X3N0YXJ0WSA9IHRoaXMuYmFsbG9uLm5vZGUueTtcclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZV9GbHkoc3RhdGUpIHtcclxuICAgICAgICBpZiAodGhpcy5mc20udGltZUVsYXBzZWQgPCAwLjUpIHtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIodGhpcy5kaXIgKiA3NSwgMTAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAxMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGlzdCA9IHRoaXMubm9kZS55IC0gc3RhdGUuZmx5X3N0YXJ0WTtcclxuICAgICAgICBpZiAoZGlzdCA+IDIyMikge1xyXG4gICAgICAgICAgICB0aGlzLmZzbS5jaGFuZ2VTdGF0ZShTdGF0ZS5JZGxlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uRXhpdF9GbHkoc3RhdGUpIHtcclxuICAgICAgICAvL3JlY292ZXJ5IFxyXG4gICAgICAgIC8vIHRoaXMuY29sbGlkZXJzLmZvckVhY2godiA9PiB2LmVuYWJsZWQgPSB0cnVlKVxyXG4gICAgICAgIHRoaXMuYm9keS5ncmF2aXR5U2NhbGUgPSBzdGF0ZS5ncmF2aXR5U2NhbGVcclxuICAgICAgICB0aGlzLmhhbmRTbG90LmNoaWxkQXJtYXR1cmUgPSBudWxsO1xyXG5cclxuICAgICAgICBsZXQgcCA9IGNjLnYyKHRoaXMubm9kZS54ICsgMjUgKiB0aGlzLmRpciwgdGhpcy5ub2RlLnkgKyAxMDApO1xyXG4gICAgICAgIHRoaXMuYmFsbG9uLmZseUF3YXkocCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tUYXJnZXQoKSB7XHJcbiAgICAgICAgdGhpcy5yYXljYXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Yik5patIOWJjeaWueaYr+WQpuaYr+iAgeWktCAqL1xyXG4gICAgcmF5Y2FzdCgpIHtcclxuICAgICAgICBsZXQgY2xpZmYgPSB0aGlzLmNoZWNrSXNDbGlmZigwKVxyXG4gICAgICAgIGlmIChjbGlmZikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwMSA9IHRoaXMud29ybGRDZW50ZXIoKTtcclxuICAgICAgICBsZXQgcDIgPSBjYy52MihwMS54ICsgdGhpcy5kaXIgKiA4MDAsIHAxLnkpXHJcbiAgICAgICAgbGV0IHJlcyA9IHRoaXMuX3dvcmxkLnJheUNhc3QocDEsIHAyLCBjYy5SYXlDYXN0VHlwZS5DbG9zZXN0KVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc1swXS5jb2xsaWRlci5ub2RlLmdyb3VwKTtcclxuICAgICAgICBsZXQgciA9IHJlc1swXVxyXG4gICAgICAgIGlmIChyKSB7XHJcbiAgICAgICAgICAgIGxldCBncm91cCA9IHIuY29sbGlkZXIubm9kZS5ncm91cDtcclxuICAgICAgICAgICAgaWYgKGdyb3VwID09ICd0YXJnZXQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZzbS5jaGFuZ2VTdGF0ZShTdGF0ZS5Nb3ZlKVxyXG4gICAgICAgICAgICAgICAgZXZ0LmVtaXQoXCJHYW1lLnNlZVRhcmdldFwiLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVudGVyX0xvc2UoKSB7XHJcbiAgICAgICAgLy/muLjmiI/lpLHotKVcclxuICAgICAgICB0aGlzLmlzTG9zZSA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5wbGF5QW5pbShcImlkbGVcIilcclxuICAgICAgICB0aGlzLmNoYW5nZUVtb3Rpb25TdGF0ZShFbW90aW9uLkZyaWdodGVuZWQpXHJcbiAgICB9XHJcblxyXG4gICAgb25FbnRlcl9XaW4oKSB7XHJcbiAgICAgICAgLy/muLjmiI/og5zliKlcclxuICAgICAgICB0aGlzLnBsYXlBbmltMignaWRsZScsIFwiaGFwcHlcIilcclxuICAgICAgICBldnQuZW1pdChcIkdhbWUud2luXCIpXHJcbiAgICB9XHJcblxyXG4gICAgbW92ZSgpIHtcclxuICAgICAgICAvLyB0aGlzLm5vZGUueCArPSB0aGlzLmRpciAqIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgbGV0IHYgPSB0aGlzLmJvZHkubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgdGhpcy5ib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIodGhpcy5kaXIgKiB0aGlzLnNwZWVkICogMTgwLCB2LnkpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHBsYXlFbW1tQ0Q6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcGxheUVtbW0oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheUVtbW1DRCA8PSAwKSB7XHJcbiAgICAgICAgICAgIERldmljZS5wbGF5U2Z4KFwiZWhcIilcclxuICAgICAgICAgICAgdGhpcy5wbGF5RW1tbUNEID0gNTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/liKTmlq3og73lkKYg56e75YqoXHJcbiAgICBjaGVja01vdmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZnNtLmlzSW5TdGF0ZShTdGF0ZS5TaG9ja2VkKSB8fFxyXG4gICAgICAgICAgICB0aGlzLmZzbS5pc0luU3RhdGUoU3RhdGUuUHJlcGFyZUd1bikgfHxcclxuICAgICAgICAgICAgdGhpcy5mc20uaXNJblN0YXRlKFN0YXRlLkZsZWUpIHx8XHJcbiAgICAgICAgICAgIHRoaXMuZnNtLmlzSW5TdGF0ZShTdGF0ZS5UcmlnZ2VyKSB8fFxyXG4gICAgICAgICAgICB0aGlzLmZzbS5pc0luU3RhdGUoU3RhdGUuRmx5KSB8fFxyXG4gICAgICAgICAgICB0aGlzLmZzbS5pc0luU3RhdGUoU3RhdGUuRGVhZCkpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5pc0xvc2UpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHdhbGwgPSB0aGlzLmNoZWNrSXNXYWxsKDYwLCB0aGlzLmRpcik7XHJcbiAgICAgICAgaWYgKHdhbGwpIHtcclxuICAgICAgICAgICAgLy/kuI3lpITnkIZcclxuICAgICAgICAgICAgbGV0IHdhbGwyID0gdGhpcy5jaGVja0lzV2FsbCg2MCwgLXRoaXMuZGlyKTtcclxuICAgICAgICAgICAgaWYgKCF3YWxsMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXIgKj0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVRvTW92ZSgpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlFbW1tKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBjbGlmZiA9IHRoaXMuY2hlY2tJc0NsaWZmKDApXHJcbiAgICAgICAgICAgIGlmICghY2xpZmYpIHtcclxuICAgICAgICAgICAgICAgIC8vY2FubW92ZSBcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlVG9Nb3ZlKClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZmFkZUluKFwiY2xpZmZcIiwgMSlcclxuICAgICAgICAgICAgICAgIGxldCBjbGlmZiA9IHRoaXMuY2hlY2tJc0NsaWZmKDAsIC10aGlzLmRpcilcclxuICAgICAgICAgICAgICAgIGlmICghY2xpZmYpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpciAqPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVRvTW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGxheUVtbW1DRCAtPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVRvTW92ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNMb3NlKSB7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KSB7XHJcbiAgICAgICAgICAgICAgICBEZXZpY2UucGxheVNmeChnLmdldFJhbmRvbUluQXJyYXkoUm9sZV9zb3VuZHMpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZnNtLmNoYW5nZVN0YXRlKFN0YXRlLk1vdmUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+WIpOaWreWJjeaWueaYr+WimVxyXG4gICAgY2hlY2tJc1dhbGwoZGlzdCA9IDYwLCBkaXIgPSB0aGlzLmRpcikge1xyXG4gICAgICAgIC8vIGxldCBwMSA9IHRoaXMubm9kZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jZW50ZXI7XHJcbiAgICAgICAgbGV0IHAxID0gdGhpcy53b3JsZENlbnRlcigpO1xyXG4gICAgICAgIGxldCBwMiA9IGNjLnYyKHAxLnggKyBkaXIgKiBkaXN0LCBwMS55KVxyXG4gICAgICAgIGxldCByZXMgPSB0aGlzLl93b3JsZC5yYXlDYXN0KHAxLCBwMiwgY2MuUmF5Q2FzdFR5cGUuQ2xvc2VzdClcclxuICAgICAgICBsZXQgciA9IHJlc1swXTtcclxuICAgICAgICBpZiAocikge1xyXG4gICAgICAgICAgICBsZXQgZ3JvdXAgPSByLmNvbGxpZGVyLm5vZGUuZ3JvdXBcclxuICAgICAgICAgICAgaWYgKGdyb3VwID09ICd3YWxsJyB8fCBncm91cCA9PSAncGluJyB8fCBncm91cCA9PSAnb2JzdGFjbGUnIHx8IGdyb3VwID09ICd3ZWFwb24nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIpOaWreWJjeaWueaYr+aCrOW0llxyXG4gICAgLy9oZWlnaHTku44xMDAg55qE6auY5aSE6KeC5a+f5piv5ZCm5pyJ5oKs5bSWXHJcbiAgICBjaGVja0lzQ2xpZmYoaGVpZ2h0LCBkaXIgPSB0aGlzLmRpcikge1xyXG4gICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCAxMDA7XHJcbiAgICAgICAgLy8xMDA65Li66auY5bqm77yM5a6J5YWo5Yy65Z+fIOWwhOe6vyDmnIDlpKfplb/luqbkuLpjXHJcbiAgICAgICAgbGV0IGMgPSBoZWlnaHQgLyBNYXRoLnNpbihjYy5taXNjLmRlZ3JlZXNUb1JhZGlhbnMoNDUpKVxyXG4gICAgICAgIC8vIGxldCBjc3EgPSBjICogYztcclxuICAgICAgICAvLyBjICs9IDU7Ly815Liq5YOP57Sg6K+v5beuXHJcbiAgICAgICAgbGV0IHJlY3QgPSB0aGlzLm5vZGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCk7XHJcbiAgICAgICAgbGV0IHAxID0gY2MudjIocmVjdC5jZW50ZXIueCwgcmVjdC5vcmlnaW4ueSArIGhlaWdodCk7XHJcbiAgICAgICAgbGV0IHAyID0gY2MudjIocDEueCArIGRpciAqIGMsIHAxLnkgLSBjKVxyXG4gICAgICAgIGxldCByZXMgPSB0aGlzLl93b3JsZC5yYXlDYXN0KHAxLCBwMiwgY2MuUmF5Q2FzdFR5cGUuQ2xvc2VzdClcclxuICAgICAgICBsZXQgciA9IHJlc1swXTtcclxuICAgICAgICByZXR1cm4gciA9PSBudWxsO1xyXG4gICAgICAgIC8vIGlmIChyKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBsZW5zcSA9IGNjLlZlYzIuc3F1YXJlZERpc3RhbmNlKHAxLCByLnBvaW50KTtcclxuICAgICAgICAvLyAgICAgaWYgKGxlbnNxID4gY3NxKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAvL+eci+WIsOaCrOW0llxyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdG1wX2VuZW1pZXMgPSBbXVxyXG5cclxuICAgIC8qKueci+WJjeaWueaYr+WQpuacieaVjOS6uiAqL1xyXG4gICAgY2hlY2tFbmVteShoZWlnaHQgPSBudWxsLCBkaXIgPSB0aGlzLmRpcik6IEFJRW5lbXlbXSB7XHJcbiAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IDkwO1xyXG4gICAgICAgIGxldCByZWN0ID0gdGhpcy5ub2RlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpO1xyXG4gICAgICAgIGxldCBwMSA9IGNjLnYyKHJlY3QuY2VudGVyLngsIHJlY3Qub3JpZ2luLnkgKyBoZWlnaHQpO1xyXG4gICAgICAgIGxldCBwMiA9IGNjLnYyKHAxLnggKyBkaXIgKiA4MDAsIHAxLnkpXHJcbiAgICAgICAgbGV0IHJlcyA9IHRoaXMuX3dvcmxkLnJheUNhc3QocDEsIHAyLCBjYy5SYXlDYXN0VHlwZS5BbGwpXHJcbiAgICAgICAgdGhpcy50bXBfZW5lbWllcy5zcGxpY2UoMCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHIgPSByZXNbaV1cclxuICAgICAgICAgICAgaWYgKHIgJiYgci5jb2xsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVuZW15ID0gci5jb2xsaWRlci5nZXRDb21wb25lbnQoQUlFbmVteSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW5lbXkpIHRoaXMudG1wX2VuZW1pZXMucHVzaChlbmVteSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG1wX2VuZW1pZXM7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmVteURlYWQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5lbW90aW9uU3RhdGUuY2hhbmdlU3RhdGUoRW1vdGlvbi5IYXBweSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodiA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRW1vdGlvblN0YXRlKEVtb3Rpb24uSGFwcHkpO1xyXG4gICAgICAgIH0sIDEpXHJcbiAgICAgICAgRGV2aWNlLnBsYXlFZmZlY3QodGhpcy5hdWRpb19sYXVnaCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uRW50ZXJfSGFwcHkoc3RhdGUsIHBhcmFtKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZWFkKCkpIHJldHVyblxyXG4gICAgICAgIGlmIChwYXJhbSkge1xyXG4gICAgICAgICAgICB0aGlzLmZhZGVJbihwYXJhbSwgMSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZhZGVJbihcImhhcHB5XCIsIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW50ZXJfTm9ybWFsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVhZCgpKSByZXR1cm5cclxuICAgICAgICB0aGlzLmZhZGVJbihcIm5vcm1hbFwiLCAxKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW50ZXJfRnJpZ2h0ZW5lZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RlYWQoKSkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5mYWRlSW4oXCJmcmlnaHRlbmVkXCIsIDEpXHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGVfRnJpZ2h0ZW5lZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5lbW90aW9uU3RhdGUudGltZUVsYXBzZWQgPiAzLjApIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VFbW90aW9uU3RhdGUoRW1vdGlvbi5Ob3JtYWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVXBkYXRlX0hhcHB5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVtb3Rpb25TdGF0ZS50aW1lRWxhcHNlZCA+IDMuMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUVtb3Rpb25TdGF0ZShFbW90aW9uLk5vcm1hbClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlRW1vdGlvblN0YXRlKHN0YXRlLCBwYXJhbT8pIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RlYWQoKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuZW1vdGlvblN0YXRlLmNoYW5nZVN0YXRlKHN0YXRlLCBwYXJhbSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F5SGVsbG9CYWNrKHRhcmdldDogVGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZnNtLmlzSW5TdGF0ZShTdGF0ZS5JZGxlKSkge1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0RGlyID0gdGFyZ2V0LmRpcjtcclxuICAgICAgICAgICAgdGhpcy5kaXIgPSAtdGFyZ2V0RGlyO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUVtb3Rpb25TdGF0ZShFbW90aW9uLkhhcHB5LCAnaGVsbG8nKVxyXG4gICAgICAgICAgICBEZXZpY2UucGxheVNmeChcImhpXCIpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VFbW90aW9uU3RhdGUoRW1vdGlvbi5IYXBweSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ29EZWFkKCkge1xyXG4gICAgICAgIHRoaXMuZnNtLmNoYW5nZVN0YXRlKFN0YXRlLkRlYWQpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZV9EZWFkKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkVudGVyX0RlYWQoc3RhdGUpIHtcclxuICAgICAgICBEZXZpY2UucGxheVNmeChnLmdldFJhbmRvbUluQXJyYXkoRGVhZF9zb3VuZHMpKVxyXG4gICAgICAgIHRoaXMucGxheUFuaW0oXCJkZWFkXCIsIDEpXHJcbiAgICAgICAgc3RhdGUuc2V0VGltZW91dCgwLjUsICgpID0+IHtcclxuICAgICAgICAgICAgZXZ0LmVtaXQoXCJHYW1lLmxvc2VcIilcclxuICAgICAgICAgICAgdGhpcy5mYWRlSW4oXCJleWVfY2xvc2VcIiwgMSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlzRGVhZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mc20uaXNJblN0YXRlKFN0YXRlLkRlYWQpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==