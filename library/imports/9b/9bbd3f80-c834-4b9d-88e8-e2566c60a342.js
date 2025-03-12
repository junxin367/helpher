"use strict";
cc._RF.push(module, '9bbd3+AyDRLnYjo4lZsYKNC', 'BallSkill');
// Game/Scripts/BallSkill.ts

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
var MoveEngine_1 = require("../../framework/extension/movement/MoveEngine");
var EnemyBallUp_1 = require("./EnemyBallUp");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BallSkill = /** @class */ (function (_super) {
    __extends(BallSkill, _super);
    function BallSkill() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.target = null;
        _this.moveEngine = null;
        return _this;
    }
    BallSkill.prototype.onLoad = function () {
    };
    BallSkill.prototype.start = function () {
        this.moveEngine = this.addComponent(MoveEngine_1.default);
        this.moveEngine.maxSpeed = 25;
    };
    BallSkill.prototype.update = function () {
        if (!cc.isValid(this.target))
            return;
        var enemypos = this.target.position;
        // this.moveEngine.target = g.v2(enemypos)
        var f = this.moveEngine.seek(enemypos);
        this.moveEngine.applyForce(f);
        var v = enemypos.subSelf(this.node.position);
        var distsq = v.magSqr();
        if (distsq < 100) {
            //敌人死亡 飞上天
            this.target.getOrAddComponent(EnemyBallUp_1.default);
            this.node.destroy();
        }
    };
    BallSkill.prototype.trigger = function (target) {
        this.target = target;
    };
    BallSkill = __decorate([
        ccclass
    ], BallSkill);
    return BallSkill;
}(cc.Component));
exports.default = BallSkill;

cc._RF.pop();