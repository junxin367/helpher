
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/movement/Bounce.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'beadecgi5RENYX9UGdR2FgV', 'Bounce');
// framework/extension/movement/Bounce.ts

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
var Signal_1 = require("../../../framework/core/Signal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var s_maxBounces = 3;
var s_gravity = 100;
var s_frictionFactorY = 0.1;
var s_frictionFactorX = 0.5;
var s_bounceFactor = 0.4;
var Bounce = /** @class */ (function (_super) {
    __extends(Bounce, _super);
    function Bounce() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.m_bounces = 0;
        _this.m_coinVerticalVelocity = 0;
        _this.m_vel = cc.v2(0, 0);
        _this.timeout = 0;
        _this.onFinish = new Signal_1.default();
        _this.onBounce = new Signal_1.default();
        _this.once = true;
        _this.bRotate = false;
        _this.bounceBaseY = 0;
        return _this;
    }
    Bounce.prototype.onLoad = function () {
    };
    Bounce.prototype.start = function () {
    };
    Bounce.prototype.onEnable = function () {
        this.once = true;
        this.m_bounces = 0;
        this.m_coinVerticalVelocity = 0;
        this.m_vel.mulSelf(0);
    };
    Bounce.prototype.go = function (x, y, bounceBaseY) {
        this.m_vel.x = x;
        this.m_vel.y = y;
        this.bounceBaseY = bounceBaseY;
    };
    Bounce.prototype.update = function (dt) {
        if (this.m_bounces < s_maxBounces) {
            if (this.node.y < this.bounceBaseY) {
                this.m_bounces++;
                //bounce 
                this.m_coinVerticalVelocity = this.m_coinVerticalVelocity * (-s_bounceFactor);
                this.node.y = this.bounceBaseY;
                // damping 
                this.m_vel.x = this.m_vel.x * s_frictionFactorX;
                this.m_vel.y = this.m_vel.y * s_frictionFactorY;
                if (this.bRotate)
                    this.node.angle += 60;
                this.onBounce.fire(this);
            }
            this.node.x += this.m_vel.x;
            this.node.y += this.m_vel.y;
            this.m_coinVerticalVelocity = this.m_coinVerticalVelocity + s_gravity * dt;
            //fall 
            // this.m_coinHeight = this.m_coinHeight - this.m_coinVerticalVelocity;
            this.node.y -= this.m_coinVerticalVelocity;
        }
        else {
            if (this.once) {
                this.once = false;
                if (this.timeout > 0) {
                    this.scheduleOnce(this.emitFinish, this.timeout);
                }
                else {
                    this.emitFinish();
                }
            }
        }
    };
    Bounce.prototype.emitFinish = function () {
        try {
            this.onFinish.fire(this);
        }
        catch (e) {
            console.error(e);
        }
    };
    Bounce = __decorate([
        ccclass
    ], Bounce);
    return Bounce;
}(cc.Component));
exports.default = Bounce;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXG1vdmVtZW50XFxCb3VuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW9EO0FBRWhELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFBO0FBRXpDLElBQU0sWUFBWSxHQUFXLENBQUMsQ0FBQztBQUMvQixJQUFNLFNBQVMsR0FBVyxHQUFHLENBQUM7QUFDOUIsSUFBTSxpQkFBaUIsR0FBVyxHQUFHLENBQUM7QUFDdEMsSUFBTSxpQkFBaUIsR0FBVyxHQUFHLENBQUM7QUFDdEMsSUFBTSxjQUFjLEdBQVcsR0FBRyxDQUFDO0FBRW5DO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBaUZDO1FBL0VXLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFFdEIsNEJBQXNCLEdBQVcsQ0FBQyxDQUFDO1FBRTNDLFdBQUssR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU3QixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLGNBQVEsR0FBVyxJQUFJLGdCQUFNLEVBQUUsQ0FBQztRQUNoQyxjQUFRLEdBQVcsSUFBSSxnQkFBTSxFQUFFLENBQUM7UUFFaEMsVUFBSSxHQUFHLElBQUksQ0FBQztRQUVaLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFpQnpCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDOztJQWlENUIsQ0FBQztJQWhFRyx1QkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELHNCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQseUJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUlELG1CQUFFLEdBQUYsVUFBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFdBQVc7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBRUQsdUJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxFQUFFO1lBQy9CLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixTQUFTO2dCQUNULElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUM5RSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUMvQixXQUFXO2dCQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLGlCQUFpQixDQUFDO2dCQUNoRCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxpQkFBaUIsQ0FBQztnQkFDaEQsSUFBSSxJQUFJLENBQUMsT0FBTztvQkFDWixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVCO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFFNUIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQzNFLE9BQU87WUFDUCx1RUFBdUU7WUFDdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLHNCQUFzQixDQUFDO1NBQzlDO2FBQU07WUFDSCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQ2xCLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7aUJBQ25EO3FCQUFNO29CQUNILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztpQkFDckI7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUVELDJCQUFVLEdBQVY7UUFDSSxJQUFJO1lBQ0EsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBL0VnQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBaUYxQjtJQUFELGFBQUM7Q0FqRkQsQUFpRkMsQ0FqRm1DLEVBQUUsQ0FBQyxTQUFTLEdBaUYvQztrQkFqRm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2lnbmFsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvY29yZS9TaWduYWxcIjtcclxuXHJcbmxldCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yXHJcblxyXG5jb25zdCBzX21heEJvdW5jZXM6IG51bWJlciA9IDM7XHJcbmNvbnN0IHNfZ3Jhdml0eTogbnVtYmVyID0gMTAwO1xyXG5jb25zdCBzX2ZyaWN0aW9uRmFjdG9yWTogbnVtYmVyID0gMC4xO1xyXG5jb25zdCBzX2ZyaWN0aW9uRmFjdG9yWDogbnVtYmVyID0gMC41O1xyXG5jb25zdCBzX2JvdW5jZUZhY3RvcjogbnVtYmVyID0gMC40O1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3VuY2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgbV9ib3VuY2VzOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgbV9jb2luVmVydGljYWxWZWxvY2l0eTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBtX3ZlbDogY2MuVmVjMiA9IGNjLnYyKDAsIDApO1xyXG5cclxuICAgIHRpbWVvdXQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgb25GaW5pc2g6IFNpZ25hbCA9IG5ldyBTaWduYWwoKTtcclxuICAgIG9uQm91bmNlOiBTaWduYWwgPSBuZXcgU2lnbmFsKCk7XHJcblxyXG4gICAgb25jZSA9IHRydWU7XHJcblxyXG4gICAgYlJvdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMub25jZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tX2JvdW5jZXMgPSAwO1xyXG4gICAgICAgIHRoaXMubV9jb2luVmVydGljYWxWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5tX3ZlbC5tdWxTZWxmKDApO1xyXG4gICAgfVxyXG5cclxuICAgIGJvdW5jZUJhc2VZOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGdvKHgsIHksIGJvdW5jZUJhc2VZKSB7XHJcbiAgICAgICAgdGhpcy5tX3ZlbC54ID0geDtcclxuICAgICAgICB0aGlzLm1fdmVsLnkgPSB5O1xyXG4gICAgICAgIHRoaXMuYm91bmNlQmFzZVkgPSBib3VuY2VCYXNlWTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5tX2JvdW5jZXMgPCBzX21heEJvdW5jZXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS55IDwgdGhpcy5ib3VuY2VCYXNlWSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2JvdW5jZXMrKztcclxuICAgICAgICAgICAgICAgIC8vYm91bmNlIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2NvaW5WZXJ0aWNhbFZlbG9jaXR5ID0gdGhpcy5tX2NvaW5WZXJ0aWNhbFZlbG9jaXR5ICogKC1zX2JvdW5jZUZhY3Rvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSA9IHRoaXMuYm91bmNlQmFzZVk7XHJcbiAgICAgICAgICAgICAgICAvLyBkYW1waW5nIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3ZlbC54ID0gdGhpcy5tX3ZlbC54ICogc19mcmljdGlvbkZhY3Rvclg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fdmVsLnkgPSB0aGlzLm1fdmVsLnkgKiBzX2ZyaWN0aW9uRmFjdG9yWTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJSb3RhdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFuZ2xlICs9IDYwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkJvdW5jZS5maXJlKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMubV92ZWwueDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5tX3ZlbC55O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tX2NvaW5WZXJ0aWNhbFZlbG9jaXR5ID0gdGhpcy5tX2NvaW5WZXJ0aWNhbFZlbG9jaXR5ICsgc19ncmF2aXR5ICogZHQ7XHJcbiAgICAgICAgICAgIC8vZmFsbCBcclxuICAgICAgICAgICAgLy8gdGhpcy5tX2NvaW5IZWlnaHQgPSB0aGlzLm1fY29pbkhlaWdodCAtIHRoaXMubV9jb2luVmVydGljYWxWZWxvY2l0eTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5tX2NvaW5WZXJ0aWNhbFZlbG9jaXR5O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9uY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGltZW91dCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmVtaXRGaW5pc2gsIHRoaXMudGltZW91dClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0RmluaXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZW1pdEZpbmlzaCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLm9uRmluaXNoLmZpcmUodGhpcyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=