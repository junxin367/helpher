"use strict";
cc._RF.push(module, 'b7dd8ihOSxNFqJGAlsmqCjA', 'SBullet2');
// framework/extension/shooter/SBullet2.ts

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
var SGameEntity_1 = require("./SGameEntity");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, requireComponent = _a.requireComponent;
var SBulletWithEntity = /** @class */ (function (_super) {
    __extends(SBulletWithEntity, _super);
    function SBulletWithEntity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 5;
        _this.tails = [];
        _this.def_opacity = 155;
        _this.entity = null;
        return _this;
    }
    Object.defineProperty(SBulletWithEntity.prototype, "damage", {
        set: function (v) {
            this.entity.damage = v;
        },
        enumerable: false,
        configurable: true
    });
    SBulletWithEntity.prototype.onLoad = function () {
        var _this = this;
        this.entity = this.getComponent(SGameEntity_1.default);
        this.entity.on(SGameEntity_1.default.Event.Dead, this.onDead, this);
        if (this.tails.length == 0) {
            this.tails = this.getComponentsInChildren(cc.Sprite);
            this.tails = this.tails.filter(function (v) { return v.node != _this.node; });
        }
    };
    SBulletWithEntity.prototype.onDestroy = function () {
        this.entity.off(SGameEntity_1.default.Event.Dead, this.onDead, this);
    };
    SBulletWithEntity.prototype.onEnable = function () {
        var _this = this;
        this.tails.forEach(function (v) {
            v.node.width = 0;
            v.node.opacity = _this.def_opacity;
        });
    };
    SBulletWithEntity.prototype.onDead = function () {
        this.tails.forEach(function (v) {
            v.node.runAction(cc.fadeOut(0.2));
        });
    };
    SBulletWithEntity.prototype.onCollisionEnter = function (other, self) {
        var entity = other.getComponent(SGameEntity_1.default);
        if (entity == null) {
            entity = other.getComponentInParent(SGameEntity_1.default);
        }
        if (entity.isActive && this.entity.isActive) {
            entity.decreaseHp(this.entity.damage);
            this.entity.decreaseHp(entity.damage);
            this.onHitEntity(entity, other);
        }
    };
    SBulletWithEntity.prototype.onHitEntity = function (entity, collider) {
    };
    SBulletWithEntity.prototype.fire = function (v) {
        if (this.entity.moveEngine) {
            this.entity.moveEngine.velocity = v;
        }
        this.entity.run();
    };
    SBulletWithEntity.prototype.update = function (dt) {
        var _this = this;
        this.tails.forEach(function (v) {
            v.node.width += _this.speed;
        });
    };
    __decorate([
        property
    ], SBulletWithEntity.prototype, "speed", void 0);
    __decorate([
        property([cc.Sprite])
    ], SBulletWithEntity.prototype, "tails", void 0);
    __decorate([
        property
    ], SBulletWithEntity.prototype, "def_opacity", void 0);
    SBulletWithEntity = __decorate([
        ccclass,
        menu("shooter/BulletWithEntity"),
        requireComponent(SGameEntity_1.default)
    ], SBulletWithEntity);
    return SBulletWithEntity;
}(cc.Component));
exports.default = SBulletWithEntity;

cc._RF.pop();