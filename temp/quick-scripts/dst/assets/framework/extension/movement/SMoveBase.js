
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/movement/SMoveBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '51afcUiRwROj7mCYywhsGlR', 'SMoveBase');
// framework/extension/movement/SMoveBase.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MoveBase = /** @class */ (function (_super) {
    __extends(MoveBase, _super);
    function MoveBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moveOnLoad = true;
        _this.velocity = cc.Vec2.RIGHT;
        _this.tar = null;
        _this.rotateByVelocity = false;
        _this.rotationOffset = 0;
        // _updateCallback: Function;
        // _callbackTarget: any;
        // _cmdUpdateDur: number = 0;
        // _updateTimer: number = 0;
        _this._paused = false;
        _this.tarPos = cc.Vec2.ZERO;
        return _this;
    }
    MoveBase.prototype.onTargetChanged = function (t) {
    };
    Object.defineProperty(MoveBase.prototype, "target", {
        get: function () {
            return this.tar;
        },
        set: function (k) {
            if (k instanceof cc.Vec3 || k instanceof cc.Vec2) {
                this.tarPos = k;
            }
            else {
                this.tar = k;
            }
            this.onTargetChanged(k);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MoveBase.prototype, "targetPosition", {
        get: function () {
            return this.tarPos;
        },
        enumerable: false,
        configurable: true
    });
    MoveBase.prototype.reset = function () {
    };
    MoveBase.prototype._step = function (dt) {
    };
    MoveBase.prototype.onBeforeUpdate = function (callback, target, duration) {
        if (duration === void 0) { duration = -1; }
    };
    MoveBase.prototype.onDisable = function () {
        // this.removeCommand()
    };
    // addCommand(callback, target, duration = -1) {
    //     this._updateTimer = 0;
    //     this._updateCallback = callback,
    //         this._callbackTarget = target;
    //     this._cmdUpdateDur = duration;
    // }
    // removeCommand(callback?, t?) {
    //     this._updateCallback = null;
    // }
    MoveBase.prototype.update = function (dt) {
        // if (this._updateCallback) {
        //     this._updateCallback.call(this._callbackTarget, this)
        //     if (this._cmdUpdateDur != -1) {
        //         this._updateTimer = this._updateTimer + dt;
        //         if (this._updateTimer >= this._cmdUpdateDur) {
        //             this.removeCommand();
        //         }
        //     }
        // }
    };
    MoveBase.prototype.isInDistance = function (targetpos, radiusSq) {
        // let c = this.node.getBoundingBoxToWorld().center
        var c = ccUtil.getWorldPosition(this.node);
        var v = targetpos.sub(c);
        if (v.magSqr() < radiusSq) {
            return true;
        }
        return false;
    };
    MoveBase.prototype.isStatic = function (variance) {
        if (variance === void 0) { variance = 1; }
        return this.velocity.fuzzyEquals(cc.Vec2.ZERO, variance);
    };
    MoveBase.prototype.step = function (dt) {
        if (this.moveOnLoad || this._paused) {
            return;
        }
        this._step(dt);
    };
    MoveBase.prototype.pause = function () {
        this._paused = true;
    };
    MoveBase.prototype.resume = function () {
        this._paused = false;
    };
    MoveBase.prototype.lateUpdate = function () {
        if (this.moveOnLoad && !this._paused) {
            this._step();
        }
    };
    __decorate([
        property
    ], MoveBase.prototype, "moveOnLoad", void 0);
    __decorate([
        property
    ], MoveBase.prototype, "velocity", void 0);
    __decorate([
        property({ type: cc.Node, displayName: "target" })
    ], MoveBase.prototype, "tar", void 0);
    __decorate([
        property
    ], MoveBase.prototype, "rotateByVelocity", void 0);
    __decorate([
        property
    ], MoveBase.prototype, "rotationOffset", void 0);
    MoveBase = __decorate([
        ccclass
    ], MoveBase);
    return MoveBase;
}(cc.Component));
exports.default = MoveBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXG1vdmVtZW50XFxTTW92ZUJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF5SEM7UUF2SEcsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRWxDLFNBQUcsR0FBWSxJQUFJLENBQUE7UUFJbkIsc0JBQWdCLEdBQVksS0FBSyxDQUFDO1FBR2xDLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBRzNCLDZCQUE2QjtRQUM3Qix3QkFBd0I7UUFDeEIsNkJBQTZCO1FBQzdCLDRCQUE0QjtRQUU1QixhQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLFlBQU0sR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7SUFrR25DLENBQUM7SUFoR0csa0NBQWUsR0FBZixVQUFnQixDQUFDO0lBRWpCLENBQUM7SUFHRCxzQkFBSSw0QkFBTTthQWFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BCLENBQUM7YUFmRCxVQUFXLENBQW9CO1lBQzNCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLEVBQUU7Z0JBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQ25CO2lCQUFNO2dCQUNILElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2FBQ2hCO1lBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG9DQUFjO2FBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBTUQsd0JBQUssR0FBTDtJQUNBLENBQUM7SUFFRCx3QkFBSyxHQUFMLFVBQU0sRUFBRztJQUVULENBQUM7SUFFRCxpQ0FBYyxHQUFkLFVBQWUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFhO1FBQWIseUJBQUEsRUFBQSxZQUFZLENBQUM7SUFFOUMsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDSSx1QkFBdUI7SUFDM0IsQ0FBQztJQUVELGdEQUFnRDtJQUNoRCw2QkFBNkI7SUFDN0IsdUNBQXVDO0lBQ3ZDLHlDQUF5QztJQUN6QyxxQ0FBcUM7SUFDckMsSUFBSTtJQUVKLGlDQUFpQztJQUNqQyxtQ0FBbUM7SUFDbkMsSUFBSTtJQUVKLHlCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsOEJBQThCO1FBQzlCLDREQUE0RDtRQUM1RCxzQ0FBc0M7UUFDdEMsc0RBQXNEO1FBQ3RELHlEQUF5RDtRQUN6RCxvQ0FBb0M7UUFDcEMsWUFBWTtRQUNaLFFBQVE7UUFDUixJQUFJO0lBQ1IsQ0FBQztJQUVELCtCQUFZLEdBQVosVUFBYSxTQUFrQixFQUFFLFFBQVE7UUFDckMsbURBQW1EO1FBQ25ELElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDMUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxRQUFRLEVBQUU7WUFDdkIsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCwyQkFBUSxHQUFSLFVBQVMsUUFBWTtRQUFaLHlCQUFBLEVBQUEsWUFBWTtRQUNqQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCx1QkFBSSxHQUFKLFVBQUssRUFBRTtRQUNILElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pDLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFHRCw2QkFBVSxHQUFWO1FBQ0ksSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNsQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7U0FDZjtJQUNMLENBQUM7SUFySEQ7UUFEQyxRQUFRO2dEQUNrQjtJQUUzQjtRQURDLFFBQVE7OENBQ3lCO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxDQUFDO3lDQUNoQztJQUluQjtRQURDLFFBQVE7c0RBQ3lCO0lBR2xDO1FBREMsUUFBUTtvREFDa0I7SUFiVixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBeUg1QjtJQUFELGVBQUM7Q0F6SEQsQUF5SEMsQ0F6SHFDLEVBQUUsQ0FBQyxTQUFTLEdBeUhqRDtrQkF6SG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZlQmFzZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1vdmVPbkxvYWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICB2ZWxvY2l0eTogY2MuVmVjMiA9IGNjLlZlYzIuUklHSFQ7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCBkaXNwbGF5TmFtZTogXCJ0YXJnZXRcIiB9KVxyXG4gICAgdGFyOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHJvdGF0ZUJ5VmVsb2NpdHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHJvdGF0aW9uT2Zmc2V0OiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICAvLyBfdXBkYXRlQ2FsbGJhY2s6IEZ1bmN0aW9uO1xyXG4gICAgLy8gX2NhbGxiYWNrVGFyZ2V0OiBhbnk7XHJcbiAgICAvLyBfY21kVXBkYXRlRHVyOiBudW1iZXIgPSAwO1xyXG4gICAgLy8gX3VwZGF0ZVRpbWVyOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIF9wYXVzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICB0YXJQb3M6IGNjLlZlYzIgPSBjYy5WZWMyLlpFUk87XHJcblxyXG4gICAgb25UYXJnZXRDaGFuZ2VkKHQpIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldCB0YXJnZXQoazogY2MuVmVjMiB8IGNjLk5vZGUpIHtcclxuICAgICAgICBpZiAoayBpbnN0YW5jZW9mIGNjLlZlYzMgfHwgayBpbnN0YW5jZW9mIGNjLlZlYzIpIHtcclxuICAgICAgICAgICAgdGhpcy50YXJQb3MgPSBrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyID0gaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vblRhcmdldENoYW5nZWQoaylcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGFyZ2V0UG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyUG9zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0YXJnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIF9zdGVwKGR0Pykge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkJlZm9yZVVwZGF0ZShjYWxsYmFjaywgdGFyZ2V0LCBkdXJhdGlvbiA9IC0xKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICAvLyB0aGlzLnJlbW92ZUNvbW1hbmQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGFkZENvbW1hbmQoY2FsbGJhY2ssIHRhcmdldCwgZHVyYXRpb24gPSAtMSkge1xyXG4gICAgLy8gICAgIHRoaXMuX3VwZGF0ZVRpbWVyID0gMDtcclxuICAgIC8vICAgICB0aGlzLl91cGRhdGVDYWxsYmFjayA9IGNhbGxiYWNrLFxyXG4gICAgLy8gICAgICAgICB0aGlzLl9jYWxsYmFja1RhcmdldCA9IHRhcmdldDtcclxuICAgIC8vICAgICB0aGlzLl9jbWRVcGRhdGVEdXIgPSBkdXJhdGlvbjtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyByZW1vdmVDb21tYW5kKGNhbGxiYWNrPywgdD8pIHtcclxuICAgIC8vICAgICB0aGlzLl91cGRhdGVDYWxsYmFjayA9IG51bGw7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuX3VwZGF0ZUNhbGxiYWNrKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuX3VwZGF0ZUNhbGxiYWNrLmNhbGwodGhpcy5fY2FsbGJhY2tUYXJnZXQsIHRoaXMpXHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLl9jbWRVcGRhdGVEdXIgIT0gLTEpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX3VwZGF0ZVRpbWVyID0gdGhpcy5fdXBkYXRlVGltZXIgKyBkdDtcclxuICAgICAgICAvLyAgICAgICAgIGlmICh0aGlzLl91cGRhdGVUaW1lciA+PSB0aGlzLl9jbWRVcGRhdGVEdXIpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnJlbW92ZUNvbW1hbmQoKTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBpc0luRGlzdGFuY2UodGFyZ2V0cG9zOiBjYy5WZWMyLCByYWRpdXNTcSkge1xyXG4gICAgICAgIC8vIGxldCBjID0gdGhpcy5ub2RlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNlbnRlclxyXG4gICAgICAgIGxldCBjID0gY2NVdGlsLmdldFdvcmxkUG9zaXRpb24odGhpcy5ub2RlKVxyXG4gICAgICAgIGxldCB2ID0gdGFyZ2V0cG9zLnN1YihjKTtcclxuICAgICAgICBpZiAodi5tYWdTcXIoKSA8IHJhZGl1c1NxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTdGF0aWModmFyaWFuY2UgPSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmVsb2NpdHkuZnV6enlFcXVhbHMoY2MuVmVjMi5aRVJPLCB2YXJpYW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RlcChkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdmVPbkxvYWQgfHwgdGhpcy5fcGF1c2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc3RlcChkdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGF1c2UoKSB7XHJcbiAgICAgICAgdGhpcy5fcGF1c2VkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXN1bWUoKSB7XHJcbiAgICAgICAgdGhpcy5fcGF1c2VkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxhdGVVcGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW92ZU9uTG9hZCAmJiAhdGhpcy5fcGF1c2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0ZXAoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=