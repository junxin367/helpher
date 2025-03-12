"use strict";
cc._RF.push(module, 'aa221tK42VAnbWR7mYHwCkT', 'SEquipSystem');
// framework/extension/shooter/SEquipSystem.ts

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
var SWeapon_1 = require("./SWeapon");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SEquipSystem = /** @class */ (function (_super) {
    __extends(SEquipSystem, _super);
    function SEquipSystem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.weaponPrefab = null;
        _this.weapon = null;
        _this.weapons = {};
        return _this;
        // update (dt) {}
    }
    SEquipSystem.prototype.start = function () {
        //mainweapon
        this.switchWeapon(this.weaponPrefab);
    };
    SEquipSystem.prototype.onDisable = function () {
        this.removeMainWeapon();
    };
    SEquipSystem.prototype.createWeapon = function (weaponPrefab) {
        var weaponNode = cc.instantiate(weaponPrefab);
        weaponNode.setParent(this.node);
        weaponNode.setPosition(0, 0);
        var weapon = weaponNode.getComponent(SWeapon_1.default);
        if (!weapon) {
            console.log("[SEquipSystem] target node is not a SWeapon");
            weapon = weaponNode.addComponent(SWeapon_1.default);
        }
        return weapon;
    };
    SEquipSystem.prototype.addWeapon = function (k, weaponPrefab) {
        this.removeWeapon(k);
        var weapon = this.createWeapon(weaponPrefab);
        this.weapons[k] = weapon;
    };
    SEquipSystem.prototype.removeMainWeapon = function () {
        if (this.weapon) {
            this.weapon.node.destroy();
        }
    };
    SEquipSystem.prototype.removeWeapon = function (k) {
        var weapon = this.weapons[k];
        if (weapon)
            weapon.node.destroy();
        this.weapons[k] = null;
    };
    SEquipSystem.prototype.switchWeapon = function (weaponPrefab) {
        if (weaponPrefab == null)
            return;
        if (this.weapon) {
            this.weapon.node.destroy();
        }
        this.weapon = this.createWeapon(weaponPrefab);
    };
    __decorate([
        property(cc.Prefab)
    ], SEquipSystem.prototype, "weaponPrefab", void 0);
    SEquipSystem = __decorate([
        ccclass
    ], SEquipSystem);
    return SEquipSystem;
}(cc.Component));
exports.default = SEquipSystem;

cc._RF.pop();