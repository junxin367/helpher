
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/NumTrigger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '54a31TIZXNNEZ83Ojhn4FS4', 'NumTrigger');
// framework/misc/NumTrigger.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriggerTimes = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TriggerPoint = /** @class */ (function () {
    function TriggerPoint(min, max, callback) {
        this.min = Number.MIN_VALUE;
        this.max = Number.MAX_VALUE;
        this.id = 0;
        this.triggered = false;
        this.min = min;
        this.max = max;
        this.callback = callback;
    }
    return TriggerPoint;
}());
var TriggerTimes;
(function (TriggerTimes) {
    TriggerTimes[TriggerTimes["ONCE"] = 1] = "ONCE";
    TriggerTimes[TriggerTimes["UNLIMITED"] = -1] = "UNLIMITED";
})(TriggerTimes = exports.TriggerTimes || (exports.TriggerTimes = {}));
var NumTrigger = /** @class */ (function () {
    function NumTrigger() {
        this.points = [];
        this.triggerType = TriggerTimes.ONCE;
    }
    NumTrigger.prototype.add = function (min, max, callback) {
        var a = new TriggerPoint(min, max, callback);
        // TODO:是否和已有的point 有交集
        this.points.push(a);
    };
    NumTrigger.prototype.reset = function () {
        this.points.forEach(function (v) { return v.triggered = false; });
    };
    NumTrigger.prototype.trigger = function (v, p) {
        if (p.triggered)
            return false;
        if (v >= p.min && v <= p.max) {
            if (this.triggerType == TriggerTimes.UNLIMITED) {
                this.reset();
            }
            p.triggered = true;
            p.callback();
            return true;
        }
        return false;
    };
    NumTrigger.prototype.update = function (v) {
        var _this = this;
        this.points.some(function (p) { return _this.trigger(v, p); });
    };
    NumTrigger = __decorate([
        ccclass
    ], NumTrigger);
    return NumTrigger;
}());
exports.default = NumTrigger;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxOdW1UcmlnZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBTUksc0JBQVksR0FBRyxFQUFDLEdBQUcsRUFBQyxRQUFRO1FBTDVCLFFBQUcsR0FBVSxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQzlCLFFBQUcsR0FBVSxNQUFNLENBQUMsU0FBUyxDQUFDO1FBRTlCLE9BQUUsR0FBVSxDQUFDLENBQUM7UUFDZCxjQUFTLEdBQVcsS0FBSyxDQUFDO1FBRXRCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQVhBLEFBV0MsSUFBQTtBQUVELElBQVksWUFHWDtBQUhELFdBQVksWUFBWTtJQUNwQiwrQ0FBUSxDQUFBO0lBQ1IsMERBQWMsQ0FBQTtBQUNsQixDQUFDLEVBSFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFHdkI7QUFHRDtJQUFBO1FBRUksV0FBTSxHQUFrQixFQUFFLENBQUE7UUFTMUIsZ0JBQVcsR0FBZ0IsWUFBWSxDQUFDLElBQUksQ0FBQztJQTJCakQsQ0FBQztJQWxDRyx3QkFBRyxHQUFILFVBQUksR0FBRyxFQUFDLEdBQUcsRUFBQyxRQUFRO1FBRWhCLElBQUksQ0FBQyxHQUFHLElBQUksWUFBWSxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFJRCwwQkFBSyxHQUFMO1FBRUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUUsT0FBQSxDQUFDLENBQUMsU0FBUyxHQUFHLEtBQUssRUFBbkIsQ0FBbUIsQ0FBQyxDQUFBO0lBQy9DLENBQUM7SUFFTyw0QkFBTyxHQUFmLFVBQWdCLENBQUMsRUFBQyxDQUFjO1FBRTVCLElBQUcsQ0FBQyxDQUFDLFNBQVM7WUFDVixPQUFPLEtBQUssQ0FBQztRQUNqQixJQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBRyxDQUFDLENBQUMsR0FBRyxFQUMxQjtZQUNJLElBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxZQUFZLENBQUMsU0FBUyxFQUFDO2dCQUMxQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDaEI7WUFDRCxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUNuQixDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7WUFDWixPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQztJQUVELDJCQUFNLEdBQU4sVUFBTyxDQUFDO1FBQVIsaUJBR0M7UUFERyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBRSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFqQixDQUFpQixDQUFDLENBQUE7SUFDMUMsQ0FBQztJQXJDZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXNDOUI7SUFBRCxpQkFBQztDQXRDRCxBQXNDQyxJQUFBO2tCQXRDb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuY2xhc3MgVHJpZ2dlclBvaW50IHtcclxuICAgIG1pbjpudW1iZXIgPSBOdW1iZXIuTUlOX1ZBTFVFO1xyXG4gICAgbWF4Om51bWJlciA9IE51bWJlci5NQVhfVkFMVUU7XHJcbiAgICBjYWxsYmFjazpGdW5jdGlvbjtcclxuICAgIGlkOm51bWJlciA9IDA7XHJcbiAgICB0cmlnZ2VyZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29uc3RydWN0b3IobWluLG1heCxjYWxsYmFjayl7XHJcbiAgICAgICAgdGhpcy5taW4gPSBtaW47XHJcbiAgICAgICAgdGhpcy5tYXggPSBtYXg7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBUcmlnZ2VyVGltZXN7XHJcbiAgICBPTkNFID0gMSAsXHJcbiAgICBVTkxJTUlURUQgPSAtMSxcclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtVHJpZ2dlciAge1xyXG5cclxuICAgIHBvaW50czpUcmlnZ2VyUG9pbnRbXSA9IFtdXHJcbiAgICBcclxuICAgIGFkZChtaW4sbWF4LGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBhID0gbmV3IFRyaWdnZXJQb2ludChtaW4sbWF4LGNhbGxiYWNrKTtcclxuICAgICAgICAvLyBUT0RPOuaYr+WQpuWSjOW3suacieeahHBvaW50IOacieS6pOmbhlxyXG4gICAgICAgIHRoaXMucG9pbnRzLnB1c2goYSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJpZ2dlclR5cGU6VHJpZ2dlclRpbWVzID0gVHJpZ2dlclRpbWVzLk9OQ0U7XHJcblxyXG4gICAgcmVzZXQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucG9pbnRzLmZvckVhY2godj0+di50cmlnZ2VyZWQgPSBmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRyaWdnZXIodixwOlRyaWdnZXJQb2ludClcclxuICAgIHtcclxuICAgICAgICBpZihwLnRyaWdnZXJlZClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmKHYgPj0gcC5taW4gJiYgdiA8PXAubWF4KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy50cmlnZ2VyVHlwZSA9PSBUcmlnZ2VyVGltZXMuVU5MSU1JVEVEKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwLnRyaWdnZXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHAuY2FsbGJhY2soKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHYpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5wb2ludHMuc29tZShwPT50aGlzLnRyaWdnZXIodixwKSlcclxuICAgIH1cclxufSJdfQ==