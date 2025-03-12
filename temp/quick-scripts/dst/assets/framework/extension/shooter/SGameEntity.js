
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/shooter/SGameEntity.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHNob290ZXJcXFNHYW1lRW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBMEM7QUFDMUMscURBQWdEO0FBRWhELHNDQUFpQztBQUNqQyw0Q0FBdUM7QUFDdkMsb0RBQStDO0FBRXpDLElBQUEsS0FBZ0QsRUFBRSxDQUFDLFVBQVUsRUFBM0QsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsZ0JBQWdCLHNCQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBR3BFLElBQVksV0FNWDtBQU5ELFdBQVksV0FBVztJQUNuQixtREFBTyxDQUFBO0lBQ1AsMkNBQUcsQ0FBQTtJQUNILDZDQUFJLENBQUE7SUFDSixxREFBUSxDQUFBO0lBQ1IsaURBQU0sQ0FBQTtBQUNWLENBQUMsRUFOVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQU10QjtBQUVELElBQUssWUFLSjtBQUxELFdBQUssWUFBWTtJQUNiLHFEQUFPLENBQUE7SUFDUCxpREFBSyxDQUFBO0lBQ0wscURBQU8sQ0FBQTtJQUNQLHlEQUFTLENBQUE7QUFDYixDQUFDLEVBTEksWUFBWSxLQUFaLFlBQVksUUFLaEI7QUFFRCxJQUFLLFdBUUo7QUFSRCxXQUFLLFdBQVc7SUFDWiw2Q0FBSSxDQUFBO0lBQ0osaURBQU0sQ0FBQTtJQUNOLGlEQUFNLENBQUE7SUFDTixpREFBTSxDQUFBO0lBQ04scURBQVEsQ0FBQTtJQUNSLDZDQUFJLENBQUE7SUFDSix1REFBUyxDQUFBO0FBQ2IsQ0FBQyxFQVJJLFdBQVcsS0FBWCxXQUFXLFFBUWY7QUFHRCxxQkFBcUI7QUFDckIsWUFBWTtBQUNaLHNCQUFzQjtBQUN0QixlQUFlO0FBQ2YsaUNBQWlDO0FBQ2pDLGFBQWE7QUFDYixJQUFJO0FBRUosSUFBSyxZQUdKO0FBSEQsV0FBSyxZQUFZO0lBQ2IsMkRBQVUsQ0FBQTtJ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RjlCLE9BQU87UUFDUCxJQUFJLENBQUMsb0JBQW9CLENBQUM7T0FDTixVQUFVLENBcVo5QjtJQUFELGlCQUFDO0NBclpELEFBcVpDLENBclp1QyxFQUFFLENBQUMsU0FBUyxHQXFabkQ7a0JBclpvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNob290TWFuYWdlciBmcm9tIFwiLi9TaG9vdE1hbmFnZXJcIjtcclxuaW1wb3J0IE1vdmVFbmdpbmUgZnJvbSBcIi4uL21vdmVtZW50L01vdmVFbmdpbmVcIjtcclxuXHJcbmltcG9ydCBGU00gZnJvbSBcIi4uLy4uL2NvcmUvRlNNXCI7XHJcbmltcG9ydCBTaWduYWwgZnJvbSBcIi4uLy4uL2NvcmUvU2lnbmFsXCI7XHJcbmltcG9ydCBQc0Z4UGxheWVyIGZyb20gXCIuLi8uLi9taXNjL1BzRnhQbGF5ZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIHJlcXVpcmVDb21wb25lbnQsIG1lbnUgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5cclxuZXhwb3J0IGVudW0gRW50aXR5U3RhdGUge1xyXG4gICAgRGVmYXVsdCxcclxuICAgIFJ1bixcclxuICAgIERlYWQsXHJcbiAgICBEaXNhcGVhcixcclxuICAgIFJlbW92ZSxcclxufVxyXG5cclxuZW51bSBWaXNpYmxlU3RhdGUge1xyXG4gICAgSW52YWxpZCxcclxuICAgIENoZWNrLFxyXG4gICAgVmlzaWJsZSxcclxuICAgIEludmlzaWJsZVxyXG59XHJcblxyXG5lbnVtIEVudGl0eUV2ZW50IHtcclxuICAgIERlYWQsICAvL+iiqyDlubLmrbtcclxuICAgIFJlbW92ZSwvL+iHquWKqHJlbW92ZSBcclxuICAgIEFwcGVhciwgLy8g56ys5LiA5qyh5Ye6546w5Zyo5bGP5bmVICxcclxuICAgIEFjdGl2ZSwgLy/mv4DmtLsgXHJcbiAgICBEaXNhcGVhciwgLy/mtojlpLHlnKjlsY/luZXlpJZcclxuICAgIEh1cnQsIC8vXHJcbiAgICBIcENoYW5nZWQsXHJcbn1cclxuXHJcblxyXG4vLyBlbnVtIEFjdGl2ZUV2ZW50IHtcclxuLy8gICAgIE5vbmUsXHJcbi8vICAgICBQbGF5ZXJEaXN0YW5jZSxcclxuLy8gICAgIFZpc2libGUsXHJcbi8vICAgICBDYW1lcmFEaXN0YW5jZSwvLyBpbnZhbGlkIFxyXG4vLyAgICAgU3RhcnQsXHJcbi8vIH1cclxuXHJcbmVudW0gRGVsZXRlUG9saWN5IHtcclxuICAgIFJlbW92ZU5vZGUsXHJcbiAgICBEZXN0cm95LFxyXG59XHJcblxyXG5lbnVtIERlYWREZWxldGVQb2xpY3kge1xyXG4gICAgRG9udERlbGV0ZSxcclxuICAgIERlbGV0ZSxcclxuICAgIERlbGF5RGVsZXRlLFxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5AbWVudShcInNob290ZXIvR2FtZUVudGl0eVwiKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lRW50aXR5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgdWlkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKiDmnIDlpKdocOWAvCAgKi9cclxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuacgOWkp+eUn+WRveWAvFwiIH0pXHJcbiAgICBtSHA6IG51bWJlciA9IDEwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuS8pOWus+WAvFwiIH0pXHJcbiAgICBkYW1hZ2U6IG51bWJlciA9IDEwO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oQWN0aXZlRXZlbnQpLCBkaXNwbGF5TmFtZTogXCLmv4DmtLvmlrnlvI9cIiB9KVxyXG4gICAgLy8gYWN0aXZlVHlwZTogQWN0aXZlRXZlbnQgPSBBY3RpdmVFdmVudC5TdGFydDtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoeyB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmFjdGl2ZVR5cGUgIT0gQWN0aXZlRXZlbnQuU3RhcnQgfSB9KVxyXG4gICAgLy8gYWN0aXZlRGlzdGFuY2U6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5bu26L+f6Ieq5Yqo5Yig6ZmkXCIsIHRvb2x0aXA6IFwiLTEg5LiN6Ieq5Yqo5Yig6ZmkICwwIOeri+WIu+WIoOmZpCDvvIw+IDAg5bu26L+f5Yig6ZmkXCIsIG1pbjogLTEgfSlcclxuICAgIC8vIGF1dG9EZWxldGVEZWxheTogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogUHNGeFBsYXllciwgZGlzcGxheU5hbWU6IFwi5Yig6Zmk54m55pWIXCIsIHZpc2libGUoKSB7IHJldHVybiB0aGlzLmF1dG9SZW1vdmVEZWxheSA+IDAgfSB9KVxyXG4gICAgLy8gZGVsZXRlRng6IFBzRnhQbGF5ZXI7XHJcblxyXG4gICAgLyoq5q275Lqh54m55pWIICovXHJcbiAgICBkZWFkRng6IFBzRnhQbGF5ZXJcclxuXHJcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLnnIvkuI3op4HlkI7liKDpmaRcIiB9KVxyXG4gICAgaW52aXNpYmxlRGVsZXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwiZGVsYXlcIiwgdG9vbHRpcDogXCLnnIvkuI3op4Hlu7bov5/liKDpmaTml7bpl7RcIiwgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuaW52aXNpYmxlRGVsZXRlIH0gfSlcclxuICAgIGludmlzaWJsZURlbGV0ZURlbGF5OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuS4gOebtOaYvuekulwiLCB0b29sdGlwOiBcIuato+W4uOWPquaciWFjdGl2ZSDnirbmgIHmiY3kvJrmmL7npLrjgILli77kuIrlkI7kvJrkuIDnm7TmmL7npLpcIiB9KVxyXG4gICAgLy8gYWx3YXN5U2hvdzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oRGVsZXRlUG9saWN5KSwgZGlzcGxheU5hbWU6IFwi5Yig6Zmk5pa55byPXCIgfSlcclxuICAgIGRlbGV0ZVBvbGljeTogRGVsZXRlUG9saWN5ID0gRGVsZXRlUG9saWN5LlJlbW92ZU5vZGU7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuatu+S6oeWQjuWIoOmZpOetlueVpVwiLCB0eXBlOiBjYy5FbnVtKERlYWREZWxldGVQb2xpY3kpIH0pXHJcbiAgICBkZWFkRGVsZXRlUG9saWN5OiBEZWFkRGVsZXRlUG9saWN5ID0gRGVhZERlbGV0ZVBvbGljeS5EZWxldGU7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwiZGVsYXlcIiwgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuZGVhZERlbGV0ZVBvbGljeSA9PSBEZWFkRGVsZXRlUG9saWN5LkRlbGF5RGVsZXRlIH0gfSlcclxuICAgIGRlYWREZWxldGVEZWxheTogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvKirnp7vliqjlvJXmk44gKi9cclxuICAgIG1vdmVFbmdpbmU6IE1vdmVFbmdpbmVcclxuICAgIF9fZnNtOiBGU01cclxuXHJcblxyXG4gICAgLy8gc3ByaXQ6IGNjLlNwcml0ZTtcclxuICAgIGZzbV92aXNpYmxlOiBGU01cclxuICAgIGhhc19zaG93bjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHM6IGNjLlBhcnRpY2xlU3lzdGVtW10gPSBbXVxyXG4gICAgc3RhdGljIEV2ZW50OiB0eXBlb2YgRW50aXR5RXZlbnQgPSBFbnRpdHlFdmVudFxyXG4gICAgc3RhdGljIFN0YXRlczogdHlwZW9mIEVudGl0eVN0YXRlID0gRW50aXR5U3RhdGVcclxuXHJcbiAgICAvKirlvZPliY3lgLwgICovXHJcbiAgICBwcml2YXRlIF9ocDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBzaWduYWxzOiBTaWduYWxbXSA9IFtdXHJcblxyXG4gICAgc206IFNob290TWFuYWdlciA9IG51bGw7XHJcblxyXG5cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5kZWFkRnggPSB0aGlzLmdldENvbXBvbmVudChQc0Z4UGxheWVyKTtcclxuICAgICAgICB0aGlzLm1vdmVFbmdpbmUgPSB0aGlzLmdldENvbXBvbmVudChNb3ZlRW5naW5lKVxyXG4gICAgICAgIHRoaXMucHMgPSB0aGlzLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKGNjLlBhcnRpY2xlU3lzdGVtKVxyXG5cclxuICAgICAgICB0aGlzLm9uSW5pdEZTTSgpO1xyXG5cclxuICAgICAgICB0aGlzLmZzbV92aXNpYmxlID0gdGhpcy5hZGRDb21wb25lbnQoRlNNKTtcclxuICAgICAgICB0aGlzLmZzbV92aXNpYmxlLmluaXQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5mc21fdmlzaWJsZS5hZGRTdGF0ZXMoVmlzaWJsZVN0YXRlKTtcclxuICAgICAgICB0aGlzLmZzbV92aXNpYmxlLmVudGVyU3RhdGUoVmlzaWJsZVN0YXRlLkNoZWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnNtID0gU2hvb3RNYW5hZ2VyLmluc3RhbmNlXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uSW5pdEZTTSgpIHtcclxuICAgICAgICBsZXQgZnNtID0gdGhpcy5hZGRDb21wb25lbnQoRlNNKVxyXG4gICAgICAgIGZzbS5pbml0KHRoaXMpO1xyXG4gICAgICAgIGZzbS5hZGRTdGF0ZXMoRW50aXR5U3RhdGUpO1xyXG4gICAgICAgIGZzbS5lbnRlclN0YXRlKEVudGl0eVN0YXRlLkRlZmF1bHQpO1xyXG4gICAgICAgIHRoaXMuX19mc20gPSBmc207XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgZ2V0IGlzQWN0aXZlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9fZnNtID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihcIkhhdmUgeW91IGZvZ2dvdCB0byBjYWxsIHN1cGVyLnN0YXJ0IG9yIHN1cGVyLm9uTG9hZCBpbiBpbmhlcml0IGNsYXNzIHdoaWNoIGRlcml2ZWQgZnJvbSBHYW1lRW50aXR5IVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fX2ZzbS5pc0luU3RhdGUoRW50aXR5U3RhdGUuUnVuKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaXNBY3RpdmUodikge1xyXG4gICAgICAgIGlmICh2KSB7XHJcbiAgICAgICAgICAgIHRoaXMucnVuKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BSdW4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMuX2hwID0gdGhpcy5tSHA7XHJcbiAgICAgICAgdGhpcy5zdWljaWRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gMDtcclxuICAgICAgICB0aGlzLnJ1bigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldCBocChocDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IG9sZCA9IHRoaXMuX2hwO1xyXG4gICAgICAgIGlmIChocCA+IHRoaXMubWF4SHApIHJldHVybjtcclxuICAgICAgICBpZiAob2xkICE9IGhwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hwID0gaHA7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdEV2ZW50cyhFbnRpdHlFdmVudC5IcENoYW5nZWQsIGhwLCBvbGQpO1xyXG4gICAgICAgICAgICB0aGlzLm9uSHBDaGFuZ2VkKHRoaXMuX2hwLCBvbGQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldCBtYXhIcChocCkge1xyXG4gICAgICAgIHRoaXMubUhwID0gaHBcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWF4SHAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubUhwXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhwKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ocDtcclxuICAgIH1cclxuXHJcbiAgICByZXNwYXduKGJ1cGRhdGU/KSB7XHJcbiAgICAgICAgaWYgKGJ1cGRhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5ocCA9IHRoaXMubWF4SHBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9ocCA9IHRoaXMubWF4SHA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6YeN5paw5r+A5rS7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaXNEZWFkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ocCA8PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1pbnRlcmZhY2UtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuICAgIG9uSHBDaGFuZ2VkKGhwLCBwcmV2KSB7IH1cclxuICAgIG9uRGVhZCgpIHsgfVxyXG4gICAgb25EZWxldGUoKSB7IH1cclxuICAgIG9uQWN0aXZlKHN0YXRlKSB7IH1cclxuICAgIGNhbkh1cnQocmVhc29uKSB7IHJldHVybiB0cnVlOyB9XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcblxyXG4gICAgZGVjcmVhc2VIcChocCwgcmVhc29uPykge1xyXG4gICAgICAgIGlmICh0aGlzLmhwID09IDApIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuSHVydChyZWFzb24pKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5ocCAtPSBocDtcclxuICAgICAgICB0aGlzLmVtaXRFdmVudHMoRW50aXR5RXZlbnQuSHVydCwgdGhpcy5ocCwgaHApO1xyXG4gICAgICAgIGlmICh0aGlzLmhwIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5ocCA9IDA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9fZnNtLmlzSW5TdGF0ZShFbnRpdHlTdGF0ZS5EZWFkKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fX2ZzbS5jaGFuZ2VTdGF0ZShFbnRpdHlTdGF0ZS5EZWFkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJ1bigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5fX2ZzbS5jaGFuZ2VTdGF0ZShFbnRpdHlTdGF0ZS5SdW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BSdW4oKSB7XHJcbiAgICAgICAgdGhpcy5fX2ZzbS5jaGFuZ2VTdGF0ZShFbnRpdHlTdGF0ZS5EZWZhdWx0KTtcclxuICAgIH1cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcbiAgICBvbkVudGVyX0NoZWNrU3RhdGUoc3RhdGUpIHsgfVxyXG4gICAgb25FeGl0X0NoZWNrU3RhdGUoc3RhdGUpIHsgfVxyXG4gICAgb25VcGRhdGVfQ2hlY2tTdGF0ZShzdGF0ZSwgZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnNtLmNhblNlZSh0aGlzLm5vZGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnNtX3Zpc2libGUuY2hhbmdlU3RhdGUoVmlzaWJsZVN0YXRlLlZpc2libGUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mc21fdmlzaWJsZS5jaGFuZ2VTdGF0ZShWaXNpYmxlU3RhdGUuSW52aXNpYmxlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgb25FbnRlcl9WaXNpYmxlU3RhdGUoc3RhdGUpIHtcclxuICAgICAgICBpZiAodGhpcy5oYXNfc2hvd24gPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnRzKEVudGl0eUV2ZW50LkFwcGVhciwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGFzX3Nob3duID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZV9WaXNpYmxlU3RhdGUoc3RhdGUsIGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc20uY2FuU2VlKHRoaXMubm9kZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5mc21fdmlzaWJsZS5jaGFuZ2VTdGF0ZShWaXNpYmxlU3RhdGUuSW52aXNpYmxlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZV9JbnZpc2libGVTdGF0ZShzdGF0ZSwgZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc19zaG93bikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnZpc2libGVEZWxldGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZzbV92aXNpYmxlLnRpbWVFbGFwc2VkID4gdGhpcy5pbnZpc2libGVEZWxldGVEZWxheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX19mc20uY2hhbmdlU3RhdGUoRW50aXR5U3RhdGUuRGlzYXBlYXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zbS5jYW5TZWUodGhpcy5ub2RlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZzbV92aXNpYmxlLmNoYW5nZVN0YXRlKFZpc2libGVTdGF0ZS5WaXNpYmxlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcblxyXG4gICAgY2hlY2tWaXNpYmxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmZzbV92aXNpYmxlLmlzSW5TdGF0ZShWaXNpYmxlU3RhdGUuVmlzaWJsZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5ydW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FbnRlcl9EZWZhdWx0U3RhdGUoc3RhdGUpIHtcclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZV9EZWZhdWx0U3RhdGUoc3RhdGUsIGR0OiBudW1iZXIpIHtcclxuICAgICAgICAvLyBzd2l0Y2ggKHRoaXMuYWN0aXZlT24pIHtcclxuICAgICAgICAvLyAgICAgY2FzZSBBY3RpdmVFdmVudC5WaXNpYmxlOlxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jaGVja1Zpc2libGUoKVxyXG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgIGNhc2UgQWN0aXZlRXZlbnQuUGxheWVyRGlzdGFuY2U6XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmNoZWNrSW5EaXN0YW5jZSh0aGlzLnNtLnBsYXllcik7XHJcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uRW50ZXJfUnVuU3RhdGUoc3RhdGUpIHtcclxuICAgICAgICB0aGlzLm9uQWN0aXZlKHN0YXRlKTtcclxuICAgICAgICB0aGlzLmVtaXRFdmVudHMoRW50aXR5RXZlbnQuQWN0aXZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnBzLmZvckVhY2gocCA9PiBwLnJlc2V0U3lzdGVtKCkpXHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGVfUnVuU3RhdGUoc3RhdGUsIGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW92ZUVuZ2luZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVFbmdpbmUuc3RlcChkdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmICh0aGlzLmF1dG9EZWxldGVEZWxheSAhPSAtMSkge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5fX2ZzbS50aW1lRWxhcHNlZCA+PSB0aGlzLmF1dG9EZWxldGVEZWxheSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fX2ZzbS5jaGFuZ2VTdGF0ZShFbnRpdHlTdGF0ZS5SZW1vdmUpXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FbnRlcl9EZWFkU3RhdGUoc3RhdGUsIGV4dGRlYWRGeDogUHNGeFBsYXllcikge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnNwcml0KVxyXG4gICAgICAgIC8vICAgICB0aGlzLnNwcml0LmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBzLmZvckVhY2gocCA9PiBwLnN0b3BTeXN0ZW0oKSlcclxuICAgICAgICBpZiAoZXh0ZGVhZEZ4KSB7XHJcbiAgICAgICAgICAgIGV4dGRlYWRGeC5wbGF5KCkudGhlbihfID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlYWREZWxldGVQb2xpY3kgIT0gRGVhZERlbGV0ZVBvbGljeS5Eb250RGVsZXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2ZzbS5jaGFuZ2VTdGF0ZShFbnRpdHlTdGF0ZS5EZWZhdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kZWFkRngpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVhZEZ4LnBsYXkoKS50aGVuKF8gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5q275Lqh5pWI5p6cIOaSreaUvuWujOaIkOWQjuWIoOmZpFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlYWREZWxldGVQb2xpY3kgIT0gRGVhZERlbGV0ZVBvbGljeS5Eb250RGVsZXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19mc20uY2hhbmdlU3RhdGUoRW50aXR5U3RhdGUuRGVmYXVsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5lbWl0RGVhZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVXBkYXRlX0RlYWRTdGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5kZWFkRGVsZXRlUG9saWN5ID09IERlYWREZWxldGVQb2xpY3kuRGVsYXlEZWxldGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX19mc20udGltZUVsYXBzZWQgPiB0aGlzLmRlYWREZWxldGVEZWxheSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2ZzbS5jaGFuZ2VTdGF0ZShFbnRpdHlTdGF0ZS5EZWZhdWx0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRlYWREZWxldGVQb2xpY3kgPT0gRGVhZERlbGV0ZVBvbGljeS5EZWxldGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fX2ZzbS5jaGFuZ2VTdGF0ZShFbnRpdHlTdGF0ZS5EZWZhdWx0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkV4aXRfRGVhZFN0YXRlKHN0YXRlKSB7XHJcbiAgICAgICAgLy/liKDpmaRcclxuICAgICAgICB0aGlzLmRvRGVsZXRlKClcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmhhc19zaG93biA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLmZzbV92aXNpYmxlKVxyXG4gICAgICAgICAgICB0aGlzLmZzbV92aXNpYmxlLmNoYW5nZVN0YXRlKFZpc2libGVTdGF0ZS5DaGVjaylcclxuICAgICAgICBpZiAodGhpcy5tb3ZlRW5naW5lKVxyXG4gICAgICAgICAgICB0aGlzLm1vdmVFbmdpbmUucmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBkb0RlbGV0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5kZWFkRGVsZXRlUG9saWN5ID09IERlYWREZWxldGVQb2xpY3kuRG9udERlbGV0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uRGVsZXRlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGVsZXRlUG9saWN5ID09IERlbGV0ZVBvbGljeS5SZW1vdmVOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm9uRGVsZXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc2lnbmFscy5mb3JFYWNoKHYgPT4gdi5jbGVhcigpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25FbnRlcl9EaXNhcGVhclN0YXRlKHN0YXRlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZW1vdmUgIFwiK3RoaXMubmFtZSlcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5kb0RlbGV0ZSgpXHJcbiAgICB9XHJcbiAgICBvbkV4aXRfRGlzYXBlYXJTdGF0ZShzdGF0ZSkgeyB9XHJcbiAgICBvblVwZGF0ZV9EaXNhcGVhclN0YXRlKHN0YXRlLCBkdDogbnVtYmVyKSB7IH1cclxuXHJcblxyXG5cclxuICAgIGVtaXREZWFkRXZlbnRzKCkge1xyXG4gICAgICAgIHRoaXMub25EZWFkKCk7XHJcbiAgICAgICAgdGhpcy5lbWl0RXZlbnRzKEVudGl0eUV2ZW50LkRlYWQsIHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgb24oZXZ0OiBFbnRpdHlFdmVudCB8IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uLCB0YXJnZXQ6IGFueSkge1xyXG4gICAgICAgIGxldCBzaWduYWwgPSB0aGlzLmdldEV2ZW50U2lnbmFsKGV2dClcclxuICAgICAgICBzaWduYWwuYWRkKGNhbGxiYWNrLCB0YXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZihldnQ6IEVudGl0eUV2ZW50IHwgc3RyaW5nLCBjOiBGdW5jdGlvbiwgdDogYW55KSB7XHJcbiAgICAgICAgbGV0IHNpZ25hbCA9IHRoaXMuZ2V0RXZlbnRTaWduYWwoZXZ0KVxyXG4gICAgICAgIHNpZ25hbC5yZW1vdmUoYywgdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RXZlbnRTaWduYWwoZXZ0KSB7XHJcbiAgICAgICAgbGV0IHNpZ25hbCA9IHRoaXMuc2lnbmFsc1tldnRdXHJcbiAgICAgICAgaWYgKHNpZ25hbCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHNpZ25hbCA9IG5ldyBTaWduYWwoKTtcclxuICAgICAgICAgICAgdGhpcy5zaWduYWxzW2V2dF0gPSBzaWduYWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzaWduYWw7XHJcbiAgICB9XHJcblxyXG4gICAgZW1pdEV2ZW50cyhldnQ6IEVudGl0eUV2ZW50IHwgc3RyaW5nLCAuLi5wcykge1xyXG4gICAgICAgIGxldCBzaWduYWwgPSB0aGlzLmdldEV2ZW50U2lnbmFsKGV2dClcclxuICAgICAgICBzaWduYWwuZmlyZSguLi5wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VpY2lkZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGtpbGwoZGVhZEZ4OiBQc0Z4UGxheWVyID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuX2hwID0gMDtcclxuICAgICAgICB0aGlzLnN1aWNpZGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX19mc20uY2hhbmdlU3RhdGUoRW50aXR5U3RhdGUuRGVhZCwgZGVhZEZ4KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgICB0aGlzLmRvRGVsZXRlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKum7mOiupOacieeisOaSniAqL1xyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlcjogY2MuQ29sbGlkZXIsIHNlbGYpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHJldHVybjtcclxuICAgICAgICBsZXQgZW50aXR5ID0gb3RoZXIuZ2V0Q29tcG9uZW50KEdhbWVFbnRpdHkpXHJcbiAgICAgICAgaWYgKGVudGl0eSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGVudGl0eSA9IG90aGVyLmdldENvbXBvbmVudEluUGFyZW50KEdhbWVFbnRpdHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZW50aXR5KSB7XHJcbiAgICAgICAgICAgIGlmIChlbnRpdHkuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIGVudGl0eS5kZWNyZWFzZUhwKHRoaXMuZGFtYWdlLCB0aGlzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWNyZWFzZUhwKGVudGl0eS5kYW1hZ2UsIGVudGl0eSlcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMub25IaXRFbnRpdHkoZW50aXR5LCBvdGhlcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19