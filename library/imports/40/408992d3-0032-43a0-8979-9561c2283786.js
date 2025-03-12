"use strict";
cc._RF.push(module, '40899LTADJDoIl5lWHCKDeG', 'HurtableArea');
// framework/extension/shooter/HurtableArea.ts

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
var HurtableArea = /** @class */ (function (_super) {
    __extends(HurtableArea, _super);
    function HurtableArea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.absoluteKill = true;
        _this.damage = 10;
        return _this;
    }
    HurtableArea.prototype.onLoad = function () {
    };
    HurtableArea.prototype.start = function () {
    };
    HurtableArea.prototype.onCollisionEnter = function (other, self) {
        var ge = other.getComponent(SGameEntity_1.default);
        if (ge && ge.isActive) {
            if (this.absoluteKill) {
                ge.decreaseHp(ge.hp, this.name);
            }
            else {
                ge.decreaseHp(this.damage, this.name);
            }
        }
    };
    __decorate([
        property
    ], HurtableArea.prototype, "absoluteKill", void 0);
    __decorate([
        property({ visible: function () { return !this.absoluteKill; } })
    ], HurtableArea.prototype, "damage", void 0);
    HurtableArea = __decorate([
        ccclass,
        menu("shooter/HurtableArea")
    ], HurtableArea);
    return HurtableArea;
}(cc.Component));
exports.default = HurtableArea;

cc._RF.pop();