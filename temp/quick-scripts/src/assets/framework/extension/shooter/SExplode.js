"use strict";
cc._RF.push(module, 'f8697pU05hC1rwIAF4ytfNT', 'SExplode');
// framework/extension/shooter/SExplode.ts

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
var SExplode = /** @class */ (function (_super) {
    __extends(SExplode, _super);
    function SExplode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 5;
        _this.damage = 200;
        return _this;
        // update (dt) {}
    }
    SExplode.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SExplode.prototype.start = function () {
        _super.prototype.start.call(this);
        // ShootManager.instance.allBullets.push(this);
    };
    SExplode.prototype.onDead = function () {
    };
    SExplode.prototype.onCollisionEnter = function (other, self) {
        var entity = other.getComponent(SGameEntity_1.default);
        if (entity == null) {
            entity = other.getComponentInParent(SGameEntity_1.default);
        }
        if (entity.isActive && this.isActive) {
            // this.damage = Math.round( Math.pow(PlayerInfo.g_lv, 3)/3 +200 );
            entity.decreaseHp(this.damage);
            //this.decreaseHp(entity.damage)
            this.onHitEntity(entity, other);
        }
    };
    SExplode.prototype.onHitEntity = function (entity, collider) {
    };
    __decorate([
        property
    ], SExplode.prototype, "speed", void 0);
    __decorate([
        property
    ], SExplode.prototype, "damage", void 0);
    SExplode = __decorate([
        ccclass,
        menu("shooter/Explode")
    ], SExplode);
    return SExplode;
}(SGameEntity_1.default));
exports.default = SExplode;

cc._RF.pop();