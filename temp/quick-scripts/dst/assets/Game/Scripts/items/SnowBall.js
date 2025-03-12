
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/items/SnowBall.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcaXRlbXNcXFNub3dCYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtFQUF3RjtBQUN4RiwrQ0FBMEM7QUFDMUMsbUVBQThEO0FBRXhELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMENDO1FBekNHLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBRTlCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsUUFBRSxHQUFZLElBQUksQ0FBQzs7SUFzQ3ZCLENBQUM7SUFyQ0cseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFVLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELDJCQUFRLEdBQVI7UUFDSSxvREFBb0Q7SUFFeEQsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDSSxvREFBb0Q7SUFFeEQsQ0FBQztJQUdELHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQUUsT0FBTztRQUNyQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN6QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQTtRQUM1QyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDeEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxFQUFFO1lBQ2YsWUFBWTtZQUNaLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsc0JBQVksQ0FBQyxDQUFDO1lBQ3hELGFBQWE7WUFDYixJQUFJLEdBQUcsR0FBRyxxQkFBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7WUFDckQsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO1lBQ2QsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUF2Q2dCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwQzVCO0lBQUQsZUFBQztDQTFDRCxBQTBDQyxDQTFDcUMsRUFBRSxDQUFDLFNBQVMsR0EwQ2pEO2tCQTFDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZlRW5naW5lLCB7IEJlaGF2aW9yIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vbW92ZW1lbnQvTW92ZUVuZ2luZVwiO1xyXG5pbXBvcnQgRnJlZXplVGFyZ2V0IGZyb20gXCIuL0ZyZWV6ZVRhcmdldFwiO1xyXG5pbXBvcnQgUG9vbE1hbmFnZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9jb3JlL1Bvb2xNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25vd0JhbGwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgbW92ZUVuZ2luZTogTW92ZUVuZ2luZSA9IG51bGw7XHJcblxyXG4gICAgdGFyZ2V0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGZ4OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm1vdmVFbmdpbmUgPSB0aGlzLmdldE9yQWRkQ29tcG9uZW50KE1vdmVFbmdpbmUpO1xyXG4gICAgICAgIHRoaXMubW92ZUVuZ2luZS5tYXhTcGVlZCA9IDM0O1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIC8vIHRoaXMubW92ZUVuZ2luZS5jaGFuZ2VCZWhlYXZpb3IoQmVoYXZpb3IuQXJyaXZlKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIC8vIHRoaXMubW92ZUVuZ2luZS5jaGFuZ2VCZWhlYXZpb3IoQmVoYXZpb3IuU2ltcGxlKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAoIWNjLmlzVmFsaWQodGhpcy50YXJnZXQpKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMudGFyZ2V0LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgcG9zLmFkZFNlbGYoY2MudjIoMCwgODApKVxyXG4gICAgICAgIGxldCBmID0gdGhpcy5tb3ZlRW5naW5lLnNlZWsocG9zKTtcclxuICAgICAgICB0aGlzLm1vdmVFbmdpbmUuYXBwbHlGb3JjZShmKTtcclxuICAgICAgICBsZXQgdiA9IHBvcy5zdWJTZWxmKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKVxyXG4gICAgICAgIGxldCBkaXN0c3EgPSB2Lm1hZ1NxcigpO1xyXG4gICAgICAgIGlmIChkaXN0c3EgPCAxMDAwKSB7XHJcbiAgICAgICAgICAgIC8vZnJlZSBlbmVteVxyXG4gICAgICAgICAgICBsZXQgc2tpbGwgPSB0aGlzLnRhcmdldC5nZXRPckFkZENvbXBvbmVudChGcmVlemVUYXJnZXQpO1xyXG4gICAgICAgICAgICAvL2hpdCBlZmZlY3QgXHJcbiAgICAgICAgICAgIGxldCBoaXQgPSBQb29sTWFuYWdlci5nZXQoXCJQb29sXCIpLmdldChcInNub3diYWxsLWhpdFwiKVxyXG4gICAgICAgICAgICBoaXQuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5meCA9IGhpdDtcclxuICAgICAgICAgICAgc2tpbGwuY2FzdCgpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59Il19