"use strict";
cc._RF.push(module, '605ae73CBxEz4HS7tGfUegA', 'STargetEnemies');
// framework/extension/shooter/STargetEnemies.ts

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
var SMoveBase_1 = require("../movement/SMoveBase");
var ShootManager_1 = require("./ShootManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
var STargetEnemies = /** @class */ (function (_super) {
    __extends(STargetEnemies, _super);
    function STargetEnemies() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.targetInterval = 0.2;
        return _this;
    }
    STargetEnemies.prototype.onLoad = function () {
        this.moveEntity = this.getComponent(SMoveBase_1.default);
    };
    Object.defineProperty(STargetEnemies.prototype, "interval", {
        set: function (v) {
            this.targetInterval = v;
            this.onDisable();
            this.onEnable();
        },
        enumerable: false,
        configurable: true
    });
    STargetEnemies.prototype.random = function (length) {
        return Math.floor(Math.random() * length);
    };
    STargetEnemies.prototype.seekTarget = function () {
        if (!this.moveEntity.target || !this.moveEntity.target.activeInHierarchy) {
            var enemies = ShootManager_1.default.instance.allEnemies;
            var idx = this.random(enemies.length);
            this.moveEntity.target = enemies[idx];
        }
        // all enemies
    };
    STargetEnemies.prototype.onEnable = function () {
        this.schedule(this.seekTarget, this.targetInterval);
    };
    STargetEnemies.prototype.onDisable = function () {
        this.unschedule(this.seekTarget);
    };
    __decorate([
        property
    ], STargetEnemies.prototype, "targetInterval", void 0);
    STargetEnemies = __decorate([
        ccclass
    ], STargetEnemies);
    return STargetEnemies;
}(cc.Component));
exports.default = STargetEnemies;

cc._RF.pop();