"use strict";
cc._RF.push(module, 'dec38NrArVCjZbUKAJHeA/m', 'SGameEntity');
// framework/extension/shooter/SGameEntity.ts

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
exports.EntityState = void 0;
var ShootManager_1 = require("./ShootManager");
var MoveEngine_1 = require("../movement/MoveEngine");
var FSM_1 = require("../../core/FSM");
var Signal_1 = require("../../core/Signal");
var PsFxPlayer_1 = require("../../misc/PsFxPlayer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, menu = _a.menu;
var EntityState;
(function (EntityState) {
    EntityState[EntityState["Default"] = 0] = "Default";
    EntityState[EntityState["Run"] = 1] = "Run";
    EntityState[EntityState["Dead"] = 2] = "Dead";
    EntityState[EntityState["Disapear"] = 3] = "Disapear";
    EntityState[EntityState["Remove"] = 4] = "Remove";
})(EntityState = exports.EntityState || (exports.EntityState = {}));
var VisibleState;
(function (VisibleState) {
    VisibleState[VisibleState["Invalid"] = 0] = "Invalid";
    VisibleState[VisibleState["Check"] = 1] = "Check";
    VisibleState[VisibleState["Visible"] = 2] = "Visible";
    VisibleState[VisibleState["Invisible"] = 3] = "Invisible";
})(VisibleState || (VisibleState = {}));
var EntityEvent;
(function (EntityEvent) {
    EntityEvent[EntityEvent["Dead"] = 0] = "Dead";
    EntityEvent[EntityEvent["Remove"] = 1] = "Remove";
    EntityEvent[EntityEvent["Appear"] = 2] = "Appear";
    EntityEvent[EntityEvent["Active"] = 3] = "Active";
    EntityEvent[EntityEvent["Disapear"] = 4] = "Disapear";
    EntityEvent[EntityEvent["Hurt"] = 5] = "Hurt";
    EntityEvent[EntityEvent["HpChanged"] = 6] = "HpChanged";
})(EntityEvent || (EntityEvent = {}));
// enum ActiveEvent {
//     None,
//     PlayerDistance,
//     Visible,
//     CameraDistance,// invalid 
//     Start,
// }
var DeletePolicy;
(function (DeletePolicy) {
    DeletePolicy[DeletePolicy["RemoveNode"] = 0] = "RemoveNode";
    DeletePolicy[DeletePolicy["Destroy"] = 1] = "Destroy";
})(DeletePolicy || (DeletePolicy = {}));
var DeadDeletePolicy;
(function (DeadDeletePolicy) {
    DeadDeletePolicy[DeadDeletePolicy["DontDelete"] = 0] = "DontDelete";
    DeadDeletePolicy[DeadDeletePolicy["Delete"] = 1] = "Delete";
    DeadDeletePolicy[DeadDeletePolicy["DelayDelete"] = 2] = "DelayDelete";
})(DeadDeletePolicy || (DeadDeletePolicy = {}));
var GameEntity = /** @class */ (function (_super) {
    __extends(GameEntity, _super);
    function GameEntity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uid = 0;
        /** 最大hp值  */
        _this.mHp = 10;
        _this.damage = 10;
        _this.invisibleDelete = false;
        _this.invisibleDeleteDelay = 0;
        // @property({ displayName: "一直显示", tooltip: "正常只有active 状态才会显示。勾上后会一直显示" })
        // alwasyShow: boolean = false;
        _this.deletePolicy = DeletePolicy.RemoveNode;
        _this.deadDeletePolicy = DeadDeletePolicy.Delete;
        _this.deadDeleteDelay = 0;
        _this.has_shown = false;
        _this.ps = [];
        /**当前值  */
        _this._hp = 0;
        _this.signals = [];
        _this.sm = null;
        _this.suicide = false;
        return _this;
    }
    GameEntity_1 = GameEntity;
    GameEntity.prototype.onLoad = function () {
        this.deadFx = this.getComponent(PsFxPlayer_1.default);
        this.moveEngine = this.getComponent(MoveEngine_1.default);
        this.ps = this.getComponentsInChildren(cc.ParticleSystem);
        this.onInitFSM();
        this.fsm_visible = this.addComponent(FSM_1.default);
        this.fsm_visible.init(this);
        this.fsm_visible.addStates(VisibleState);
        this.fsm_visible.enterState(VisibleState.Check);
    };
    GameEntity.prototype.start = function () {
        this.sm = ShootManager_1.default.instance;
    };
    GameEntity.prototype.onInitFSM = function () {
        var fsm = this.addComponent(FSM_1.default);
        fsm.init(this);
        fsm.addStates(EntityState);
        fsm.enterState(EntityState.Default);
        this.__fsm = fsm;
    };
    Object.defineProperty(GameEntity.prototype, "isActive", {
        get: function () {
            if (this.__fsm == null) {
                return console.warn("Have you foggot to call super.start or super.onLoad in inherit class which derived from GameEntity!");
            }
            return this.__fsm.isInState(EntityState.Run);
        },
        set: function (v) {
            if (v) {
                this.run();
            }
            else {
                this.stopRun();
            }
        },
        enumerable: false,
        configurable: true
    });
    GameEntity.prototype.onEnable = function () {
        this._hp = this.mHp;
        this.suicide = false;
        this.node.angle = 0;
        this.run();
    };
    GameEntity.prototype.onDisable = function () {
        this.clear();
    };
    Object.defineProperty(GameEntity.prototype, "hp", {
        get: function () {
            return this._hp;
        },
        set: function (hp) {
            var old = this._hp;
            if (hp > this.maxHp)
                return;
            if (old != hp) {
                this._hp = hp;
                this.emitEvents(EntityEvent.HpChanged, hp, old);
                this.onHpChanged(this._hp, old);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameEntity.prototype, "maxHp", {
        get: function () {
            return this.mHp;
        },
        set: function (hp) {
            this.mHp = hp;
        },
        enumerable: false,
        configurable: true
    });
    GameEntity.prototype.respawn = function (bupdate) {
        if (bupdate) {
            this.hp = this.maxHp;
        }
        else {
            this._hp = this.maxHp;
        }
        //重新激活
        this.isActive = true;
    };
    GameEntity.prototype.isDead = function () {
        return this._hp <= 0;
    };
    //--------------------------------------interface----------------------------------------//
    GameEntity.prototype.onHpChanged = function (hp, prev) { };
    GameEntity.prototype.onDead = function () { };
    GameEntity.prototype.onDelete = function () { };
    GameEntity.prototype.onActive = function (state) { };
    GameEntity.prototype.canHurt = function (reason) { return true; };
    //------------------------------------------------------------------------------//
    GameEntity.prototype.decreaseHp = function (hp, reason) {
        if (this.hp == 0)
            return;
        if (!this.canHurt(reason))
            return;
        this.hp -= hp;
        this.emitEvents(EntityEvent.Hurt, this.hp, hp);
        if (this.hp <= 0) {
            this.hp = 0;
            if (this.__fsm.isInState(EntityState.Dead)) {
                return;
            }
            this.__fsm.changeState(EntityState.Dead);
        }
    };
    GameEntity.prototype.run = function () {
        this.__fsm.changeState(EntityState.Run);
    };
    GameEntity.prototype.stopRun = function () {
        this.__fsm.changeState(EntityState.Default);
    };
    //------------------------------------------------------------------------------//
    GameEntity.prototype.onEnter_CheckState = function (state) { };
    GameEntity.prototype.onExit_CheckState = function (state) { };
    GameEntity.prototype.onUpdate_CheckState = function (state, dt) {
        if (this.sm.canSee(this.node)) {
            this.fsm_visible.changeState(VisibleState.Visible);
        }
        else {
            this.fsm_visible.changeState(VisibleState.Invisible);
        }
    };
    GameEntity.prototype.onEnter_VisibleState = function (state) {
        if (this.has_shown == false) {
            this.emitEvents(EntityEvent.Appear, this);
        }
        this.has_shown = true;
    };
    GameEntity.prototype.onUpdate_VisibleState = function (state, dt) {
        if (!this.sm.canSee(this.node)) {
            this.fsm_visible.changeState(VisibleState.Invisible);
        }
    };
    GameEntity.prototype.onUpdate_InvisibleState = function (state, dt) {
        if (this.has_shown) {
            if (this.invisibleDelete) {
                if (this.fsm_visible.timeElapsed > this.invisibleDeleteDelay) {
                    this.__fsm.changeState(EntityState.Disapear);
                    return;
                }
            }
        }
        if (this.sm.canSee(this.node)) {
            this.fsm_visible.changeState(VisibleState.Visible);
        }
    };
    //------------------------------------------------------------------------------//
    GameEntity.prototype.checkVisible = function () {
        if (this.fsm_visible.isInState(VisibleState.Visible)) {
            this.run();
        }
    };
    GameEntity.prototype.onEnter_DefaultState = function (state) {
    };
    GameEntity.prototype.onUpdate_DefaultState = function (state, dt) {
        // switch (this.activeOn) {
        //     case ActiveEvent.Visible:
        //         this.checkVisible()
        //         break;
        //     case ActiveEvent.PlayerDistance:
        //         this.checkInDistance(this.sm.player);
        //         break;
        // }
    };
    GameEntity.prototype.onEnter_RunState = function (state) {
        this.onActive(state);
        this.emitEvents(EntityEvent.Active, this);
        this.ps.forEach(function (p) { return p.resetSystem(); });
    };
    GameEntity.prototype.onUpdate_RunState = function (state, dt) {
        if (this.moveEngine) {
            this.moveEngine.step(dt);
        }
        // if (this.autoDeleteDelay != -1) {
        //     if (this.__fsm.timeElapsed >= this.autoDeleteDelay) {
        //         this.__fsm.changeState(EntityState.Remove)
        //     }
        // }
    };
    GameEntity.prototype.onEnter_DeadState = function (state, extdeadFx) {
        var _this = this;
        // if (this.sprit)
        //     this.sprit.enabled = false;
        this.ps.forEach(function (p) { return p.stopSystem(); });
        if (extdeadFx) {
            extdeadFx.play().then(function (_) {
                if (_this.deadDeletePolicy != DeadDeletePolicy.DontDelete) {
                    _this.__fsm.changeState(EntityState.Default);
                }
            });
        }
        else {
            if (this.deadFx) {
                this.deadFx.play().then(function (_) {
                    //死亡效果 播放完成后删除
                    if (_this.deadDeletePolicy != DeadDeletePolicy.DontDelete) {
                        _this.__fsm.changeState(EntityState.Default);
                    }
                });
            }
        }
        this.clear();
        this.emitDeadEvents();
    };
    GameEntity.prototype.onUpdate_DeadState = function () {
        if (this.deadDeletePolicy == DeadDeletePolicy.DelayDelete) {
            if (this.__fsm.timeElapsed > this.deadDeleteDelay) {
                this.__fsm.changeState(EntityState.Default);
            }
        }
        else if (this.deadDeletePolicy == DeadDeletePolicy.Delete) {
            this.__fsm.changeState(EntityState.Default);
        }
    };
    GameEntity.prototype.onExit_DeadState = function (state) {
        //删除
        this.doDelete();
    };
    GameEntity.prototype.clear = function () {
        this.has_shown = false;
        if (this.fsm_visible)
            this.fsm_visible.changeState(VisibleState.Check);
        if (this.moveEngine)
            this.moveEngine.reset();
    };
    GameEntity.prototype.doDelete = function () {
        if (this.deadDeletePolicy == DeadDeletePolicy.DontDelete) {
            this.onDelete();
        }
        else {
            if (this.deletePolicy == DeletePolicy.RemoveNode) {
                this.node.removeFromParent();
            }
            else {
                this.node.destroy();
            }
            this.onDelete();
        }
    };
    GameEntity.prototype.onDestroy = function () {
        this.signals.forEach(function (v) { return v.clear(); });
    };
    GameEntity.prototype.onEnter_DisapearState = function (state) {
        // console.log("remove  "+this.name)
        this.clear();
        this.doDelete();
    };
    GameEntity.prototype.onExit_DisapearState = function (state) { };
    GameEntity.prototype.onUpdate_DisapearState = function (state, dt) { };
    GameEntity.prototype.emitDeadEvents = function () {
        this.onDead();
        this.emitEvents(EntityEvent.Dead, this);
    };
    GameEntity.prototype.on = function (evt, callback, target) {
        var signal = this.getEventSignal(evt);
        signal.add(callback, target);
    };
    GameEntity.prototype.off = function (evt, c, t) {
        var signal = this.getEventSignal(evt);
        signal.remove(c, t);
    };
    GameEntity.prototype.getEventSignal = function (evt) {
        var signal = this.signals[evt];
        if (signal == null) {
            signal = new Signal_1.default();
            this.signals[evt] = signal;
        }
        return signal;
    };
    GameEntity.prototype.emitEvents = function (evt) {
        var ps = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            ps[_i - 1] = arguments[_i];
        }
        var signal = this.getEventSignal(evt);
        signal.fire.apply(signal, ps);
    };
    GameEntity.prototype.kill = function (deadFx) {
        if (deadFx === void 0) { deadFx = null; }
        this._hp = 0;
        this.suicide = true;
        this.__fsm.changeState(EntityState.Dead, deadFx);
    };
    GameEntity.prototype.remove = function () {
        this.doDelete();
    };
    /**默认有碰撞 */
    GameEntity.prototype.onCollisionEnter = function (other, self) {
        if (!this.isActive)
            return;
        var entity = other.getComponent(GameEntity_1);
        if (entity == null) {
            entity = other.getComponentInParent(GameEntity_1);
        }
        if (entity) {
            if (entity.isActive) {
                entity.decreaseHp(this.damage, this);
                this.decreaseHp(entity.damage, entity);
                // this.onHitEntity(entity, other)
            }
        }
    };
    var GameEntity_1;
    GameEntity.Event = EntityEvent;
    GameEntity.States = EntityState;
    __decorate([
        property({ displayName: "最大生命值" })
    ], GameEntity.prototype, "mHp", void 0);
    __decorate([
        property({ displayName: "伤害值" })
    ], GameEntity.prototype, "damage", void 0);
    __decorate([
        property({ displayName: "看不见后删除" })
    ], GameEntity.prototype, "invisibleDelete", void 0);
    __decorate([
        property({ displayName: "delay", tooltip: "看不见延迟删除时间", visible: function () { return this.invisibleDelete; } })
    ], GameEntity.prototype, "invisibleDeleteDelay", void 0);
    __decorate([
        property({ type: cc.Enum(DeletePolicy), displayName: "删除方式" })
    ], GameEntity.prototype, "deletePolicy", void 0);
    __decorate([
        property({ displayName: "死亡后删除策略", type: cc.Enum(DeadDeletePolicy) })
    ], GameEntity.prototype, "deadDeletePolicy", void 0);
    __decorate([
        property({ displayName: "delay", visible: function () { return this.deadDeletePolicy == DeadDeletePolicy.DelayDelete; } })
    ], GameEntity.prototype, "deadDeleteDelay", void 0);
    GameEntity = GameEntity_1 = __decorate([
        ccclass,
        menu("shooter/GameEntity")
    ], GameEntity);
    return GameEntity;
}(cc.Component));
exports.default = GameEntity;

cc._RF.pop();