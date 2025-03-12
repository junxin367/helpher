"use strict";
cc._RF.push(module, '7540d6G2QlFTI3vzQjuYVVO', 'EnemyBallUp');
// Game/Scripts/EnemyBallUp.ts

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
var AIEnemy_1 = require("./AIEnemy");
var Device_1 = require("../../framework/misc/Device");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EnemyBallUp = /** @class */ (function (_super) {
    __extends(EnemyBallUp, _super);
    function EnemyBallUp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.enemy = null;
        _this.body = null;
        _this.bubble = null;
        return _this;
    }
    EnemyBallUp.prototype.onLoad = function () {
        this.enemy = this.getComponent(AIEnemy_1.default);
        this.body = this.getComponent(cc.RigidBody);
    };
    EnemyBallUp.prototype.start = function () {
        var _this = this;
        cc.resources.load("Prefabs/effect/bubble", cc.Prefab, function (err, res) {
            Device_1.default.playSfx('bubble');
            _this.bubble = cc.instantiate(res);
            _this.node.addChild(_this.bubble);
            var r = Math.max(_this.node.width, _this.node.height);
            _this.bubble.width = r + 20;
            _this.bubble.height = _this.bubble.width;
        });
        //enemey 
        this.enemy.enableCollide = false;
        this.enemy.removeBomb();
        this.body.linearDamping = 0;
        this.body.gravityScale = -1;
    };
    EnemyBallUp.prototype.onEnable = function () {
    };
    EnemyBallUp = __decorate([
        ccclass
    ], EnemyBallUp);
    return EnemyBallUp;
}(cc.Component));
exports.default = EnemyBallUp;

cc._RF.pop();