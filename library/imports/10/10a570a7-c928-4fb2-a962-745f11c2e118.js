"use strict";
cc._RF.push(module, '10a57CnyShPsqlidF8RwuEY', 'SnowBall');
// Game/Scripts/items/SnowBall.ts

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
var MoveEngine_1 = require("../../../framework/extension/movement/MoveEngine");
var FreezeTarget_1 = require("./FreezeTarget");
var PoolManager_1 = require("../../../framework/core/PoolManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SnowBall = /** @class */ (function (_super) {
    __extends(SnowBall, _super);
    function SnowBall() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moveEngine = null;
        _this.target = null;
        _this.fx = null;
        return _this;
    }
    SnowBall.prototype.onLoad = function () {
        this.moveEngine = this.getOrAddComponent(MoveEngine_1.default);
        this.moveEngine.maxSpeed = 34;
    };
    SnowBall.prototype.onEnable = function () {
        // this.moveEngine.changeBeheavior(Behavior.Arrive);
    };
    SnowBall.prototype.onDisable = function () {
        // this.moveEngine.changeBeheavior(Behavior.Simple);
    };
    SnowBall.prototype.update = function () {
        if (!cc.isValid(this.target))
            return;
        var pos = this.target.getPosition();
        pos.addSelf(cc.v2(0, 80));
        var f = this.moveEngine.seek(pos);
        this.moveEngine.applyForce(f);
        var v = pos.subSelf(this.node.getPosition());
        var distsq = v.magSqr();
        if (distsq < 1000) {
            //free enemy
            var skill = this.target.getOrAddComponent(FreezeTarget_1.default);
            //hit effect 
            var hit = PoolManager_1.default.get("Pool").get("snowball-hit");
            hit.setPosition(this.node.position);
            this.fx = hit;
            skill.cast();
            this.node.destroy();
        }
    };
    SnowBall = __decorate([
        ccclass
    ], SnowBall);
    return SnowBall;
}(cc.Component));
exports.default = SnowBall;

cc._RF.pop();