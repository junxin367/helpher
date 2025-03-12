"use strict";
cc._RF.push(module, '9c351+bI0tPqbc0vLxFTH7n', 'SBullet');
// framework/extension/shooter/SBullet.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var SBullet = /** @class */ (function (_super) {
    __extends(SBullet, _super);
    function SBullet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 5;
        _this.tails = [];
        _this.def_opacity = 155;
        return _this;
    }
    SBullet.prototype.onDead = function () {
        this.tails.forEach(function (v) {
            v.node.runAction(cc.fadeOut(0.2));
        });
    };
    SBullet.prototype.onLoad = function () {
        var _this = this;
        _super.prototype.onLoad.call(this);
        if (this.tails.length == 0) {
            this.tails = this.getComponentsInChildren(cc.Sprite);
            this.tails = this.tails.filter(function (v) { return v.node != _this.node; });
        }
    };
    SBullet.prototype.onEnable = function () {
        var _this = this;
        _super.prototype.onEnable.call(this);
        this.tails.forEach(function (v) {
            v.node.width = 0;
            v.node.opacity = _this.def_opacity;
        });
    };
    SBullet.prototype.onCollisionEnter = function (other, self) {
        var entity = other.getComponent(SGameEntity_1.default);
        if (entity == null) {
            entity = other.getComponentInParent(SGameEntity_1.default);
        }
        if (entity.isActive && this.isActive) {
            entity.decreaseHp(this.damage);
            this.decreaseHp(entity.damage);
            this.onHitEntity(entity, other);
        }
    };
    SBullet.prototype.onHitEntity = function (entity, collider) {
    };
    SBullet.prototype.fire = function (v) {
        this.moveEngine.velocity = v;
        this.run();
    };
    SBullet.prototype.update = function (dt) {
        var _this = this;
        this.tails.forEach(function (v) {
            v.node.width += _this.speed;
        });
    };
    __decorate([
        property
    ], SBullet.prototype, "speed", void 0);
    __decorate([
        property([cc.Sprite])
    ], SBullet.prototype, "tails", void 0);
    __decorate([
        property
    ], SBullet.prototype, "def_opacity", void 0);
    SBullet = __decorate([
        ccclass,
        menu("shooter/Bullet")
    ], SBullet);
    return SBullet;
}(SGameEntity_1.default));
exports.default = SBullet;

cc._RF.pop();