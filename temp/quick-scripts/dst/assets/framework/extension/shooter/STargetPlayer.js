
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/shooter/STargetPlayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cc787x1xu1OCamO8vAZfoDH', 'STargetPlayer');
// framework/extension/shooter/STargetPlayer.ts

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
var MoveEngine_1 = require("../movement/MoveEngine");
var ShootManager_1 = require("./ShootManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
var STargetPlayer = /** @class */ (function (_super) {
    __extends(STargetPlayer, _super);
    function STargetPlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.alwaysPointTarget = false;
        _this.rotationOffset = 0;
        _this.duration = 4;
        _this.lastVel = cc.Vec2.ZERO;
        return _this;
        // update (dt) {}
    }
    STargetPlayer.prototype.start = function () {
    };
    STargetPlayer.prototype.onLoad = function () {
        this.moveEntity = this.getComponent(MoveEngine_1.default);
    };
    STargetPlayer.prototype.onEnable = function () {
        this.lastVel = cc.Vec2.ZERO;
        this.target = ShootManager_1.default.instance.player;
        this.moveEntity.target = this.target;
        this.scheduleOnce(this.disableTarget, this.duration);
    };
    STargetPlayer.prototype.onDisable = function () {
        this.unschedule(this.disableTarget);
    };
    STargetPlayer.prototype.disableTarget = function () {
        this.moveEntity.target = null;
        var rot = cc.misc.degreesToRadians(this.rotationOffset - this.node.rotation);
        this.lastVel = cc.v2(Math.cos(rot), Math.sin(rot));
        // this.node.rotation = this.rotationOffset +  this.moveEntity.velocity.signAngle(cc.Vec2.RIGHT) * cc.macro.DEG;
    };
    STargetPlayer.prototype.update = function () {
        var toTarget = this.target.position.sub(this.node.position);
        // if(toTarget.magSqr() < 200 * 200)
        // {
        //     this.moveEntity.target = this.target;
        // }
        if (this.moveEntity.target == null) {
            this.moveEntity.applyForce(this.lastVel);
            return;
        }
        if (this.alwaysPointTarget) {
            this.node.rotation = this.rotationOffset + toTarget.signAngle(cc.Vec2.RIGHT) * cc.macro.DEG;
        }
    };
    __decorate([
        property
    ], STargetPlayer.prototype, "alwaysPointTarget", void 0);
    __decorate([
        property
    ], STargetPlayer.prototype, "rotationOffset", void 0);
    __decorate([
        property
    ], STargetPlayer.prototype, "duration", void 0);
    STargetPlayer = __decorate([
        ccclass,
        requireComponent(MoveEngine_1.default)
    ], STargetPlayer);
    return STargetPlayer;
}(cc.Component));
exports.default = STargetPlayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHNob290ZXJcXFNUYXJnZXRQbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQWdEO0FBQ2hELCtDQUEwQztBQUVwQyxJQUFBLEtBQXVDLEVBQUUsQ0FBQyxVQUFVLEVBQW5ELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFDLGdCQUFnQixzQkFBaUIsQ0FBQztBQUkzRDtJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQWlFQztRQTlERyx1QkFBaUIsR0FBVyxLQUFLLENBQUM7UUFHbEMsb0JBQWMsR0FBVSxDQUFDLENBQUM7UUFLMUIsY0FBUSxHQUFVLENBQUMsQ0FBQztRQUVwQixhQUFPLEdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7O1FBbUQvQixpQkFBaUI7SUFDckIsQ0FBQztJQWhERyw2QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDhCQUFNLEdBQU47UUFFSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQVUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxnQ0FBUSxHQUFSO1FBRUksSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLHNCQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNELGlDQUFTLEdBQVQ7UUFFSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQscUNBQWEsR0FBYjtRQUVJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUM1RSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEQsZ0hBQWdIO0lBQ3BILENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBRUksSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUQsb0NBQW9DO1FBQ3BDLElBQUk7UUFDSiw0Q0FBNEM7UUFDNUMsSUFBSTtRQUNKLElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO1lBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUN4QyxPQUFRO1NBQ1g7UUFDRCxJQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFDekI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztTQUNoRztJQUNMLENBQUM7SUF6REQ7UUFEQyxRQUFROzREQUN5QjtJQUdsQztRQURDLFFBQVE7eURBQ2lCO0lBSzFCO1FBREMsUUFBUTttREFDVztJQVhILGFBQWE7UUFGakMsT0FBTztRQUNQLGdCQUFnQixDQUFDLG9CQUFVLENBQUM7T0FDUixhQUFhLENBaUVqQztJQUFELG9CQUFDO0NBakVELEFBaUVDLENBakUwQyxFQUFFLENBQUMsU0FBUyxHQWlFdEQ7a0JBakVvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmVFbmdpbmUgZnJvbSBcIi4uL21vdmVtZW50L01vdmVFbmdpbmVcIjtcclxuaW1wb3J0IFNob290TWFuYWdlciBmcm9tIFwiLi9TaG9vdE1hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eSxyZXF1aXJlQ29tcG9uZW50fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5AcmVxdWlyZUNvbXBvbmVudChNb3ZlRW5naW5lKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTVGFyZ2V0UGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGFsd2F5c1BvaW50VGFyZ2V0OmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHJvdGF0aW9uT2Zmc2V0Om51bWJlciA9IDA7XHJcblxyXG4gICAgbW92ZUVudGl0eTpNb3ZlRW5naW5lO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZHVyYXRpb246bnVtYmVyID0gNDtcclxuXHJcbiAgICBsYXN0VmVsOmNjLlZlYzIgPSBjYy5WZWMyLlpFUk87XHJcblxyXG4gICAgdGFyZ2V0OmNjLk5vZGU7XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tb3ZlRW50aXR5ID0gdGhpcy5nZXRDb21wb25lbnQoTW92ZUVuZ2luZSk7XHJcbiAgICB9XHJcbiAgICBvbkVuYWJsZSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sYXN0VmVsID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gU2hvb3RNYW5hZ2VyLmluc3RhbmNlLnBsYXllcjtcclxuICAgICAgICB0aGlzLm1vdmVFbnRpdHkudGFyZ2V0ID0gdGhpcy50YXJnZXQ7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5kaXNhYmxlVGFyZ2V0LHRoaXMuZHVyYXRpb24pO1xyXG4gICAgfVxyXG4gICAgb25EaXNhYmxlKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5kaXNhYmxlVGFyZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNhYmxlVGFyZ2V0KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1vdmVFbnRpdHkudGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICBsZXQgcm90ID0gY2MubWlzYy5kZWdyZWVzVG9SYWRpYW5zKHRoaXMucm90YXRpb25PZmZzZXQgLSB0aGlzLm5vZGUucm90YXRpb24pXHJcbiAgICAgICAgdGhpcy5sYXN0VmVsID0gY2MudjIoTWF0aC5jb3Mocm90KSxNYXRoLnNpbihyb3QpKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUucm90YXRpb24gPSB0aGlzLnJvdGF0aW9uT2Zmc2V0ICsgIHRoaXMubW92ZUVudGl0eS52ZWxvY2l0eS5zaWduQW5nbGUoY2MuVmVjMi5SSUdIVCkgKiBjYy5tYWNyby5ERUc7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKClcclxuICAgIHtcclxuICAgICAgICBsZXQgdG9UYXJnZXQgPSB0aGlzLnRhcmdldC5wb3NpdGlvbi5zdWIodGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAvLyBpZih0b1RhcmdldC5tYWdTcXIoKSA8IDIwMCAqIDIwMClcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubW92ZUVudGl0eS50YXJnZXQgPSB0aGlzLnRhcmdldDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYodGhpcy5tb3ZlRW50aXR5LnRhcmdldCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUVudGl0eS5hcHBseUZvcmNlKHRoaXMubGFzdFZlbClcclxuICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5hbHdheXNQb2ludFRhcmdldClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5yb3RhdGlvbiA9IHRoaXMucm90YXRpb25PZmZzZXQgKyAgdG9UYXJnZXQuc2lnbkFuZ2xlKGNjLlZlYzIuUklHSFQpICogY2MubWFjcm8uREVHO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19