
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/EnemyBallUp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcRW5lbXlCYWxsVXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQStCO0FBQy9CLHNEQUFpRDtBQUU3QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQTtBQUV6QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQThCQztRQTdCRyxXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFVBQUksR0FBaUIsSUFBSSxDQUFDO1FBQzFCLFlBQU0sR0FBWSxJQUFJLENBQUM7O0lBMkIzQixDQUFDO0lBekJHLDRCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQU8sQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELDJCQUFLLEdBQUw7UUFBQSxpQkFjQztRQWJHLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztZQUMzRCxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUN4QixLQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEMsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNuRCxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFBO1FBQzFDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsU0FBUztRQUNULElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsOEJBQVEsR0FBUjtJQUVBLENBQUM7SUE1QmdCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E4Qi9CO0lBQUQsa0JBQUM7Q0E5QkQsQUE4QkMsQ0E5QndDLEVBQUUsQ0FBQyxTQUFTLEdBOEJwRDtrQkE5Qm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQUlFbmVteSBmcm9tIFwiLi9BSUVuZW15XCJcclxuaW1wb3J0IERldmljZSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL21pc2MvRGV2aWNlXCI7XHJcblxyXG5sZXQgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvclxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteUJhbGxVcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBlbmVteTogQUlFbmVteSA9IG51bGw7XHJcbiAgICBib2R5OiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG4gICAgYnViYmxlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbmVteSA9IHRoaXMuZ2V0Q29tcG9uZW50KEFJRW5lbXkpO1xyXG4gICAgICAgIHRoaXMuYm9keSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJQcmVmYWJzL2VmZmVjdC9idWJibGVcIiwgY2MuUHJlZmFiLCAoZXJyLCByZXMpID0+IHtcclxuICAgICAgICAgICAgRGV2aWNlLnBsYXlTZngoJ2J1YmJsZScpXHJcbiAgICAgICAgICAgIHRoaXMuYnViYmxlID0gY2MuaW5zdGFudGlhdGUocmVzKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHRoaXMuYnViYmxlKTtcclxuICAgICAgICAgICAgbGV0IHIgPSBNYXRoLm1heCh0aGlzLm5vZGUud2lkdGgsIHRoaXMubm9kZS5oZWlnaHQpXHJcbiAgICAgICAgICAgIHRoaXMuYnViYmxlLndpZHRoID0gciArIDIwO1xyXG4gICAgICAgICAgICB0aGlzLmJ1YmJsZS5oZWlnaHQgPSB0aGlzLmJ1YmJsZS53aWR0aFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy9lbmVtZXkgXHJcbiAgICAgICAgdGhpcy5lbmVteS5lbmFibGVDb2xsaWRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbmVteS5yZW1vdmVCb21iKCk7XHJcbiAgICAgICAgdGhpcy5ib2R5LmxpbmVhckRhbXBpbmcgPSAwO1xyXG4gICAgICAgIHRoaXMuYm9keS5ncmF2aXR5U2NhbGUgPSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG59Il19