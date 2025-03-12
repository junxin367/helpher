"use strict";
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