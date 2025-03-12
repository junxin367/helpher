
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/movement/SElegantFollow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2439fBM+7VCRYPbogT9Q/b7', 'SElegantFollow');
// framework/extension/movement/SElegantFollow.ts

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
var SMoveBase_1 = require("./SMoveBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ElegantFollow = /** @class */ (function (_super) {
    __extends(ElegantFollow, _super);
    function ElegantFollow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxSpeed = 10;
        _this.dir = cc.Vec2.UP;
        _this.enableTarget = true;
        _this.targetAngle = 0;
        _this.rotateSpeed = 10;
        _this.intervalCheckTarget = 1;
        return _this;
    }
    ElegantFollow.prototype.onLoad = function () {
    };
    ElegantFollow.prototype.reset = function () {
        this.dir = cc.Vec2.UP;
        this.node.rotation = 0;
        this.targetAngle = 0;
        this.tar = null;
    };
    ElegantFollow.prototype.onTargetChanged = function () {
        if (!this.target)
            return;
        //dir
        var box = this.node.getBoundingBoxToWorld();
        var targetpos = this.target.getBoundingBoxToWorld().center;
        var v = targetpos.sub(box.center);
        this.targetAngle = v.signAngle(cc.Vec2.RIGHT) * cc.macro.DEG;
    };
    ElegantFollow.prototype._step = function (dt) {
        // move via velocity
        var ang = this.dir.signAngle(cc.Vec2.RIGHT) * cc.macro.DEG;
        if (this.enableTarget) {
            if (Math.abs((ang) % 360 - (this.targetAngle)) > 30) {
                this.dir = this.dir.rotateSelf(-cc.macro.RAD * this.rotateSpeed);
                // 绕半全后重新计算 target 
            }
            else {
                this.onTargetChanged();
            }
        }
        this.velocity = this.dir.mul(this.maxSpeed);
        this.node.setPosition(this.node.position.add(this.velocity));
        if (this.rotateByVelocity) {
            this.node.rotation = this.rotationOffset + ang;
        }
    };
    ElegantFollow.prototype.onEnable = function () {
        // this.schedule(this.onTargetChanged,this.intervalCheckTarget)
    };
    ElegantFollow.prototype.onDisable = function () {
        // get target angle
        // this.unschedule(this.onTargetChanged);
    };
    __decorate([
        property({ tooltip: "0-1 is appropriate value range" })
    ], ElegantFollow.prototype, "intervalCheckTarget", void 0);
    ElegantFollow = __decorate([
        ccclass
    ], ElegantFollow);
    return ElegantFollow;
}(SMoveBase_1.default));
exports.default = ElegantFollow;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXG1vdmVtZW50XFxTRWxlZ2FudEZvbGxvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBbUM7QUFFN0IsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUM7SUFBMkMsaUNBQVE7SUFBbkQ7UUFBQSxxRUFvRUM7UUFsRUcsY0FBUSxHQUFVLEVBQUUsQ0FBQztRQUNyQixTQUFHLEdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDekIsa0JBQVksR0FBVyxJQUFJLENBQUM7UUFFNUIsaUJBQVcsR0FBVSxDQUFDLENBQUM7UUFFdkIsaUJBQVcsR0FBVSxFQUFFLENBQUM7UUFHeEIseUJBQW1CLEdBQVUsQ0FBQyxDQUFDOztJQXlEbkMsQ0FBQztJQXZERyw4QkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFFSSxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDO0lBRUQsdUNBQWUsR0FBZjtRQUVJLElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU87UUFDeEIsS0FBSztRQUNMLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM1QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsTUFBTSxDQUFBO1FBQzFELElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2pFLENBQUM7SUFFRCw2QkFBSyxHQUFMLFVBQU0sRUFBRztRQUVMLG9CQUFvQjtRQUNwQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFBO1FBQzFELElBQUcsSUFBSSxDQUFDLFlBQVksRUFDcEI7WUFDSSxJQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUcsR0FBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUcsR0FBRyxFQUFFLEVBQ3REO2dCQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7Z0JBQ2hFLG1CQUFtQjthQUN0QjtpQkFBSTtnQkFDRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDMUI7U0FDSjtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFDeEI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBRTtTQUNuRDtJQUNMLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBRUksK0RBQStEO0lBQ25FLENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBRUksbUJBQW1CO1FBQ25CLHlDQUF5QztJQUM3QyxDQUFDO0lBdkREO1FBREMsUUFBUSxDQUFDLEVBQUMsT0FBTyxFQUFDLGdDQUFnQyxFQUFDLENBQUM7OERBQ3RCO0lBWGQsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQW9FakM7SUFBRCxvQkFBQztDQXBFRCxBQW9FQyxDQXBFMEMsbUJBQVEsR0FvRWxEO2tCQXBFb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZlQmFzZSBmcm9tIFwiLi9TTW92ZUJhc2VcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVnYW50Rm9sbG93IGV4dGVuZHMgTW92ZUJhc2Vcclxue1xyXG4gICAgbWF4U3BlZWQ6bnVtYmVyID0gMTA7XHJcbiAgICBkaXI6Y2MuVmVjMiA9IGNjLlZlYzIuVVA7XHJcbiAgICBlbmFibGVUYXJnZXQ6Ym9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgdGFyZ2V0QW5nbGU6bnVtYmVyID0gMDtcclxuXHJcbiAgICByb3RhdGVTcGVlZDpudW1iZXIgPSAxMDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3Rvb2x0aXA6XCIwLTEgaXMgYXBwcm9wcmlhdGUgdmFsdWUgcmFuZ2VcIn0pXHJcbiAgICBpbnRlcnZhbENoZWNrVGFyZ2V0Om51bWJlciA9IDE7XHJcblxyXG4gICAgb25Mb2FkKClcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kaXIgPSBjYy5WZWMyLlVQO1xyXG4gICAgICAgIHRoaXMubm9kZS5yb3RhdGlvbiA9IDA7XHJcbiAgICAgICAgdGhpcy50YXJnZXRBbmdsZSA9IDA7XHJcbiAgICAgICAgdGhpcy50YXIgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVGFyZ2V0Q2hhbmdlZCgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIXRoaXMudGFyZ2V0KSByZXR1cm47XHJcbiAgICAgICAgLy9kaXJcclxuICAgICAgICBsZXQgYm94ID0gdGhpcy5ub2RlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpO1xyXG4gICAgICAgIGxldCB0YXJnZXRwb3MgPSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jZW50ZXJcclxuICAgICAgICBsZXQgdiA9IHRhcmdldHBvcy5zdWIoYm94LmNlbnRlcik7XHJcbiAgICAgICAgdGhpcy50YXJnZXRBbmdsZSA9IHYuc2lnbkFuZ2xlKGNjLlZlYzIuUklHSFQpICogY2MubWFjcm8uREVHO1xyXG4gICAgfVxyXG5cclxuICAgIF9zdGVwKGR0PylcclxuICAgIHtcclxuICAgICAgICAvLyBtb3ZlIHZpYSB2ZWxvY2l0eVxyXG4gICAgICAgIGxldCBhbmcgPSB0aGlzLmRpci5zaWduQW5nbGUoY2MuVmVjMi5SSUdIVCkgKiBjYy5tYWNyby5ERUdcclxuICAgICAgICBpZih0aGlzLmVuYWJsZVRhcmdldClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKE1hdGguYWJzKChhbmcgICklIDM2MCAtICh0aGlzLnRhcmdldEFuZ2xlICkgICkgPiAzMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXIgPSB0aGlzLmRpci5yb3RhdGVTZWxmKC1jYy5tYWNyby5SQUQgKiB0aGlzLnJvdGF0ZVNwZWVkKVxyXG4gICAgICAgICAgICAgICAgLy8g57uV5Y2K5YWo5ZCO6YeN5paw6K6h566XIHRhcmdldCBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uVGFyZ2V0Q2hhbmdlZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB0aGlzLmRpci5tdWwodGhpcy5tYXhTcGVlZClcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLmFkZCh0aGlzLnZlbG9jaXR5KSk7XHJcbiAgICAgICAgaWYodGhpcy5yb3RhdGVCeVZlbG9jaXR5ICApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucm90YXRpb24gPSB0aGlzLnJvdGF0aW9uT2Zmc2V0ICsgYW5nIDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGUodGhpcy5vblRhcmdldENoYW5nZWQsdGhpcy5pbnRlcnZhbENoZWNrVGFyZ2V0KVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gZ2V0IHRhcmdldCBhbmdsZVxyXG4gICAgICAgIC8vIHRoaXMudW5zY2hlZHVsZSh0aGlzLm9uVGFyZ2V0Q2hhbmdlZCk7XHJcbiAgICB9XHJcblxyXG59Il19