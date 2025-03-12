
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/buffs/GenericBuff.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '62b6am+j4hEkrq6fMH+DNwy', 'GenericBuff');
// framework/extension/buffs/GenericBuff.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var Buff_1 = require("./Buff");
var GenericBuff = /** @class */ (function (_super) {
    __extends(GenericBuff, _super);
    function GenericBuff() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GenericBuff.prototype, "dcInstance", {
        get: function () {
            return this.data.dcInstance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GenericBuff.prototype, "dcField", {
        get: function () {
            return this.data.dcField;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GenericBuff.prototype, "countOffline", {
        /** 是否计算离线时间  */
        get: function () {
            return this.data.offline;
        },
        enumerable: false,
        configurable: true
    });
    GenericBuff.prototype.onEnabled = function () {
        var func = this.data.onEnable;
        if (func) {
            func.call(this);
        }
    };
    GenericBuff.prototype.onRecovery = function () {
        var func = this.data.onRecovery;
        if (func) {
            func.call(this);
        }
    };
    GenericBuff.prototype.onDisabled = function () {
        var func = this.data.onDisable;
        if (func) {
            func.call(this);
        }
    };
    GenericBuff.prototype.step = function () {
        var func = this.data.onStep;
        if (func) {
            func.call(this);
        }
    };
    GenericBuff.prototype.onTimeLeftChanged = function () {
        if (this.dcInstance)
            this.dcInstance.setData(this.dcField, this.timeLeft);
    };
    GenericBuff.prototype.save = function () {
        if (this.dcInstance)
            this.dcInstance.save(this.dcField);
    };
    GenericBuff.prototype.load = function (offset) {
        if (this.dcInstance) {
            this.timeLeft = this.dcInstance.getData(this.dcField);
            if (this.countOffline) {
                this.timeLeft -= offset;
            }
        }
    };
    return GenericBuff;
}(Buff_1.default));
exports.default = GenericBuff;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXGJ1ZmZzXFxHZW5lcmljQnVmZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBMEI7QUFXMUI7SUFBeUMsK0JBQUk7SUFBN0M7O0lBOERBLENBQUM7SUE1REcsc0JBQUksbUNBQVU7YUFBZDtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUE7UUFDL0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxnQ0FBTzthQUFYO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLHFDQUFZO1FBRGhCLGdCQUFnQjthQUNoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7UUFDNUIsQ0FBQzs7O09BQUE7SUFFRCwrQkFBUyxHQUFUO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUIsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ2xCO0lBQ0wsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNoQyxJQUFJLElBQUksRUFBRTtZQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDbEI7SUFDTCxDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQy9CLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNsQjtJQUNMLENBQUM7SUFFRCwwQkFBSSxHQUFKO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ2xCO0lBQ0wsQ0FBQztJQUVELHVDQUFpQixHQUFqQjtRQUNJLElBQUksSUFBSSxDQUFDLFVBQVU7WUFDZixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUM1RCxDQUFDO0lBRUQsMEJBQUksR0FBSjtRQUNJLElBQUksSUFBSSxDQUFDLFVBQVU7WUFDZixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQUVELDBCQUFJLEdBQUosVUFBSyxNQUFNO1FBQ1AsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3JELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUM7YUFDM0I7U0FDSjtJQUNMLENBQUM7SUFFTCxrQkFBQztBQUFELENBOURBLEFBOERDLENBOUR3QyxjQUFJLEdBOEQ1QyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdWZmIGZyb20gXCIuL0J1ZmZcIjtcclxuaW1wb3J0IERhdGFDZW50ZXIgZnJvbSBcIi4uLy4uL2NvcmUvRGF0YUNlbnRlclwiO1xyXG5leHBvcnQgaW50ZXJmYWNlIEdlbmVyaWNCdWZmQ29uZmlnIHtcclxuICAgIGRjSW5zdGFuY2U/OiBEYXRhQ2VudGVyLFxyXG4gICAgZGNGaWVsZD86IHN0cmluZyxcclxuICAgIG9mZmxpbmU/OiBib29sZWFuLFxyXG4gICAgb25FbmFibGU/OiBGdW5jdGlvbixcclxuICAgIG9uUmVjb3Zlcnk/OiBGdW5jdGlvbixcclxuICAgIG9uRGlzYWJsZT86IEZ1bmN0aW9uLFxyXG4gICAgb25TdGVwPzogRnVuY3Rpb24sXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJpY0J1ZmYgZXh0ZW5kcyBCdWZmIHtcclxuXHJcbiAgICBnZXQgZGNJbnN0YW5jZSgpOiBEYXRhQ2VudGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmRjSW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGNGaWVsZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuZGNGaWVsZDtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5piv5ZCm6K6h566X56a757q/5pe26Ze0ICAqL1xyXG4gICAgZ2V0IGNvdW50T2ZmbGluZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLm9mZmxpbmVcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZWQoKSB7XHJcbiAgICAgICAgbGV0IGZ1bmMgPSB0aGlzLmRhdGEub25FbmFibGU7XHJcbiAgICAgICAgaWYgKGZ1bmMpIHtcclxuICAgICAgICAgICAgZnVuYy5jYWxsKHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uUmVjb3ZlcnkoKSB7XHJcbiAgICAgICAgbGV0IGZ1bmMgPSB0aGlzLmRhdGEub25SZWNvdmVyeTtcclxuICAgICAgICBpZiAoZnVuYykge1xyXG4gICAgICAgICAgICBmdW5jLmNhbGwodGhpcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlZCgpIHtcclxuICAgICAgICBsZXQgZnVuYyA9IHRoaXMuZGF0YS5vbkRpc2FibGU7XHJcbiAgICAgICAgaWYgKGZ1bmMpIHtcclxuICAgICAgICAgICAgZnVuYy5jYWxsKHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0ZXAoKSB7XHJcbiAgICAgICAgbGV0IGZ1bmMgPSB0aGlzLmRhdGEub25TdGVwO1xyXG4gICAgICAgIGlmIChmdW5jKSB7XHJcbiAgICAgICAgICAgIGZ1bmMuY2FsbCh0aGlzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblRpbWVMZWZ0Q2hhbmdlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5kY0luc3RhbmNlKVxyXG4gICAgICAgICAgICB0aGlzLmRjSW5zdGFuY2Uuc2V0RGF0YSh0aGlzLmRjRmllbGQsIHRoaXMudGltZUxlZnQpXHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5kY0luc3RhbmNlKVxyXG4gICAgICAgICAgICB0aGlzLmRjSW5zdGFuY2Uuc2F2ZSh0aGlzLmRjRmllbGQpXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZChvZmZzZXQpIHtcclxuICAgICAgICBpZiAodGhpcy5kY0luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZUxlZnQgPSB0aGlzLmRjSW5zdGFuY2UuZ2V0RGF0YSh0aGlzLmRjRmllbGQpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvdW50T2ZmbGluZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lTGVmdCAtPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19