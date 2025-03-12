
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Arrow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4672eLYLCdHurz5iOTsLGL0', 'Arrow');
// Game/Scripts/Arrow.ts

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
var RemoveOutOfView_1 = require("./RemoveOutOfView");
var AIEnemy_1 = require("./AIEnemy");
var Role_1 = require("./Role");
var Device_1 = require("../../framework/misc/Device");
var Target_1 = require("./Target");
var Ballon_1 = require("./Ballon");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Arrow = /** @class */ (function (_super) {
    __extends(Arrow, _super);
    function Arrow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 1500;
        _this._isMoving = false;
        _this._vel = cc.v2();
        return _this;
    }
    Arrow.prototype.onLoad = function () {
        this.body = this.getComponent(cc.RigidBody);
        var check = this.addComponent(RemoveOutOfView_1.default);
        check.usingWorldSpace = true;
    };
    Arrow.prototype.start = function () {
    };
    Arrow.prototype.go = function () {
        this._isMoving = true;
        var rad = this.node.angle * cc.macro.RAD;
        this._vel = cc.v2(Math.cos(rad), Math.sin(rad));
        this._vel.mulSelf(this.speed);
    };
    Arrow.prototype.stop = function () {
        this._isMoving = false;
        this.body.linearVelocity = cc.v2(0, 0);
    };
    Arrow.prototype.stopWithInetia = function (scalar) {
        if (scalar === void 0) { scalar = 0.9; }
        this._vel.mulSelf(scalar);
    };
    Arrow.prototype.update = function () {
        // velocity
        if (this._isMoving) {
            this.body.linearVelocity = this._vel;
        }
    };
    Arrow.prototype.fadeAfter = function (delay, dur) {
        var _this = this;
        if (delay === void 0) { delay = 0.5; }
        if (dur === void 0) { dur = 0.6; }
        cc.tween(this.node).delay(delay).to(dur, { opacity: 0 }).call(function () { return _this.node.destroy(); }).start();
    };
    Arrow.prototype.onBeginContact = function (contact, self, other) {
        console.log(other.name);
        var group = other.node.group;
        if (group == "wall" || group == "pin") {
            // arrow_hit
            Device_1.default.playSfx("arrow_hit");
            this.stop();
            this.fadeAfter();
        }
        else if (group == 'enemy') {
            //射中敌人
            var enemy = other.getComponent(AIEnemy_1.default);
            if (!enemy.isDead()) {
                Device_1.default.playSfx("arrow_hit_body");
                enemy.goDead();
            }
        }
        else if (group == 'role') {
            //射中主角
            var role = other.getComponent(Role_1.default);
            Device_1.default.playSfx("arrow_hit_body");
            role.goDead();
        }
        else if (group == 'target') {
            //射中老头
            var target = other.getComponent(Target_1.default);
            Device_1.default.playSfx("arrow_hit_body");
            this.stopWithInetia(0.1);
            this.schedule(this.stop, 0.3);
            target.goDead();
        }
        else if (group == 'ballon') {
            var ballon = other.getComponent(Ballon_1.default);
            // ballon.flyAway();
            ballon.goDead();
        }
    };
    Arrow = __decorate([
        ccclass
    ], Arrow);
    return Arrow;
}(cc.Component));
exports.default = Arrow;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcQXJyb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQWdEO0FBQ2hELHFDQUFnQztBQUNoQywrQkFBMEI7QUFDMUIsc0RBQWlEO0FBQ2pELG1DQUE4QjtBQUM5QixtQ0FBOEI7QUFFMUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUE7QUFFekM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUE4RUM7UUE1RUcsV0FBSyxHQUFXLElBQUksQ0FBQztRQVlyQixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFVBQUksR0FBWSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7O0lBK0Q1QixDQUFDO0lBMUVHLHNCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMseUJBQWUsQ0FBQyxDQUFDO1FBQy9DLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxxQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUtELGtCQUFFLEdBQUY7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtRQUNyQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FB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LEtBQUssQ0FBQyxZQUFZLENBQUMsZ0JBQU0sQ0FBQyxDQUFDO1lBQ3hDLG9CQUFvQjtZQUNwQixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBNUVnQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBOEV6QjtJQUFELFlBQUM7Q0E5RUQsQUE4RUMsQ0E5RWtDLEVBQUUsQ0FBQyxTQUFTLEdBOEU5QztrQkE5RW9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVtb3ZlT3V0T2ZWaWV3IGZyb20gXCIuL1JlbW92ZU91dE9mVmlld1wiO1xyXG5pbXBvcnQgQUlFbmVteSBmcm9tIFwiLi9BSUVuZW15XCI7XHJcbmltcG9ydCBSb2xlIGZyb20gXCIuL1JvbGVcIjtcclxuaW1wb3J0IERldmljZSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL21pc2MvRGV2aWNlXCI7XHJcbmltcG9ydCBUYXJnZXQgZnJvbSBcIi4vVGFyZ2V0XCI7XHJcbmltcG9ydCBCYWxsb24gZnJvbSBcIi4vQmFsbG9uXCI7XHJcblxyXG5sZXQgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvclxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnJvdyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBib2R5OiBjYy5SaWdpZEJvZHk7XHJcbiAgICBzcGVlZDogbnVtYmVyID0gMTUwMDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLmFkZENvbXBvbmVudChSZW1vdmVPdXRPZlZpZXcpO1xyXG4gICAgICAgIGNoZWNrLnVzaW5nV29ybGRTcGFjZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIF9pc01vdmluZyA9IGZhbHNlO1xyXG4gICAgX3ZlbDogY2MuVmVjMiA9IGNjLnYyKCk7XHJcblxyXG4gICAgZ28oKSB7XHJcbiAgICAgICAgdGhpcy5faXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgbGV0IHJhZCA9IHRoaXMubm9kZS5hbmdsZSAqIGNjLm1hY3JvLlJBRDtcclxuICAgICAgICB0aGlzLl92ZWwgPSBjYy52MihNYXRoLmNvcyhyYWQpLCBNYXRoLnNpbihyYWQpKTtcclxuICAgICAgICB0aGlzLl92ZWwubXVsU2VsZih0aGlzLnNwZWVkKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIHRoaXMuX2lzTW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcFdpdGhJbmV0aWEoc2NhbGFyID0gMC45KSB7XHJcbiAgICAgICAgdGhpcy5fdmVsLm11bFNlbGYoc2NhbGFyKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICAvLyB2ZWxvY2l0eVxyXG4gICAgICAgIGlmICh0aGlzLl9pc01vdmluZykge1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkubGluZWFyVmVsb2NpdHkgPSB0aGlzLl92ZWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmFkZUFmdGVyKGRlbGF5ID0gMC41LCBkdXIgPSAwLjYpIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLmRlbGF5KGRlbGF5KS50byhkdXIsIHsgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHRoaXMubm9kZS5kZXN0cm95KCkpLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdDogY2MuUGh5c2ljc0NvbnRhY3QsIHNlbGYsIG90aGVyOiBjYy5QaHlzaWNzQ29sbGlkZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhvdGhlci5uYW1lKTtcclxuICAgICAgICBsZXQgZ3JvdXAgPSBvdGhlci5ub2RlLmdyb3VwO1xyXG4gICAgICAgIGlmIChncm91cCA9PSBcIndhbGxcIiB8fCBncm91cCA9PSBcInBpblwiKSB7XHJcbiAgICAgICAgICAgIC8vIGFycm93X2hpdFxyXG4gICAgICAgICAgICBEZXZpY2UucGxheVNmeChcImFycm93X2hpdFwiKVxyXG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICAgICAgdGhpcy5mYWRlQWZ0ZXIoKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZ3JvdXAgPT0gJ2VuZW15Jykge1xyXG4gICAgICAgICAgICAvL+WwhOS4reaVjOS6ulxyXG4gICAgICAgICAgICBsZXQgZW5lbXkgPSBvdGhlci5nZXRDb21wb25lbnQoQUlFbmVteSk7XHJcbiAgICAgICAgICAgIGlmICghZW5lbXkuaXNEZWFkKCkpIHtcclxuICAgICAgICAgICAgICAgIERldmljZS5wbGF5U2Z4KFwiYXJyb3dfaGl0X2JvZHlcIilcclxuICAgICAgICAgICAgICAgIGVuZW15LmdvRGVhZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChncm91cCA9PSAncm9sZScpIHtcclxuICAgICAgICAgICAgLy/lsITkuK3kuLvop5JcclxuICAgICAgICAgICAgbGV0IHJvbGUgPSBvdGhlci5nZXRDb21wb25lbnQoUm9sZSk7XHJcbiAgICAgICAgICAgIERldmljZS5wbGF5U2Z4KFwiYXJyb3dfaGl0X2JvZHlcIilcclxuICAgICAgICAgICAgcm9sZS5nb0RlYWQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGdyb3VwID09ICd0YXJnZXQnKSB7XHJcbiAgICAgICAgICAgIC8v5bCE5Lit6ICB5aS0XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBvdGhlci5nZXRDb21wb25lbnQoVGFyZ2V0KVxyXG4gICAgICAgICAgICBEZXZpY2UucGxheVNmeChcImFycm93X2hpdF9ib2R5XCIpXHJcbiAgICAgICAgICAgIHRoaXMuc3RvcFdpdGhJbmV0aWEoMC4xKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnN0b3AsIDAuMylcclxuICAgICAgICAgICAgdGFyZ2V0LmdvRGVhZCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZ3JvdXAgPT0gJ2JhbGxvbicpIHtcclxuICAgICAgICAgICAgbGV0IGJhbGxvbiA9IG90aGVyLmdldENvbXBvbmVudChCYWxsb24pO1xyXG4gICAgICAgICAgICAvLyBiYWxsb24uZmx5QXdheSgpO1xyXG4gICAgICAgICAgICBiYWxsb24uZ29EZWFkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ==