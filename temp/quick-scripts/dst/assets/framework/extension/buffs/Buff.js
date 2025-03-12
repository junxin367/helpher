
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/buffs/Buff.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '277f8bZ6jxEILrygYg/BjNi', 'Buff');
// framework/extension/buffs/Buff.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Signal_1 = require("../../core/Signal");
var EventType;
(function (EventType) {
    EventType[EventType["Start"] = 0] = "Start";
    EventType[EventType["End"] = 1] = "End";
    EventType[EventType["Update"] = 2] = "Update";
})(EventType || (EventType = {}));
var Buff = /** @class */ (function () {
    function Buff() {
        var _a;
        this.duration = 10;
        this.finished = true;
        this.timeLeft = 0;
        //buff 名称 
        this.name = "";
        /** 可叠加 */
        this.canAdd = false;
        /** 最多可叠加 多长时间 */
        this.maxDuration = 0;
        //buff 刷新 间隔
        this.interval = 1;
        this.signals = (_a = {},
            _a[EventType.Start] = new Signal_1.default(),
            _a[EventType.End] = new Signal_1.default(),
            _a[EventType.Update] = new Signal_1.default(),
            _a);
        this.beganTimeSec = 0;
    }
    Object.defineProperty(Buff.prototype, "isEnabled", {
        get: function () {
            return this.timeLeft > 0;
        },
        enumerable: false,
        configurable: true
    });
    Buff.prototype.step = function () { };
    Buff.prototype.onRecovery = function () { };
    Buff.prototype.onReset = function () { };
    Buff.prototype.save = function () { };
    Buff.prototype.load = function (offlineSec) { };
    Buff.prototype.pause = function () {
    };
    Buff.prototype.resume = function () {
    };
    Buff.prototype.on = function (type, callback, target) {
        this.signals[type].add(callback, target);
    };
    Buff.prototype.off = function (type, callback, target) {
        this.signals[type].remove(callback, target);
    };
    Buff.prototype._emit = function (type) {
        var _a;
        var ps = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            ps[_i - 1] = arguments[_i];
        }
        (_a = this.signals[type]).fire.apply(_a, ps);
    };
    /**增加buff 生命周期  */
    Buff.prototype.addLife = function (life) {
        // if (this.duration + life < this.maxDuration) {
        this.duration += life;
        this.timeLeft += life;
        // }
    };
    Buff.prototype.recovery = function () {
        if (this.timeLeft <= 0)
            return;
        this.duration = this.timeLeft;
        this.finished = false;
        this.beganTimeSec = Date.now() / 1000;
        this.onRecovery();
        this.onTimeLeftChanged();
        console.warn("[BuffSystem]恢复buff:" + "[" + this.name + "]", this.duration);
    };
    /**重置 buff 生命 周期  */
    Buff.prototype.resetLife = function () {
        this.beganTimeSec = Date.now() / 1000;
        this.finished = false;
        this.timeLeft = this.duration;
        this.onReset();
    };
    Buff.prototype.enable = function (duration) {
        var a = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            a[_i - 1] = arguments[_i];
        }
        this.duration = parseInt(duration) || this.duration;
        this.resetLife();
        this.onEnabled.apply(this, a);
        this.onTimeLeftChanged();
        this._emit(EventType.Start, this);
        console.warn("[BuffSystem]开启buff:" + "[" + this.name + "]", this.duration);
    };
    Buff.prototype.disable = function () {
        this.finished = true;
        this.timeLeft = 0;
        try {
            this.onDisabled();
            this.onTimeLeftChanged();
        }
        catch (e) {
            console.warn(e);
        }
        this._emit(EventType.End, this);
        console.warn("[BuffSystem]关闭buff:" + "[" + this.name + "]");
    };
    Buff.prototype.doStep = function (now) {
        if (this.finished)
            return;
        if (this.timeLeft > 0) {
            this.timeLeft = this.duration - (now - this.beganTimeSec);
            this.step();
            this._emit(EventType.Update, this);
            this.onTimeLeftChanged();
        }
    };
    Buff.EventType = EventType;
    return Buff;
}());
exports.default = Buff;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXGJ1ZmZzXFxCdWZmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQXVDO0FBRXZDLElBQUssU0FJSjtBQUpELFdBQUssU0FBUztJQUNWLDJDQUFLLENBQUE7SUFDTCx1Q0FBRyxDQUFBO0lBQ0gsNkNBQU0sQ0FBQTtBQUNWLENBQUMsRUFKSSxTQUFTLEtBQVQsU0FBUyxRQUliO0FBRUQ7SUFBQTs7UUFFSSxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUVyQixVQUFVO1FBQ1YsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUtsQixVQUFVO1FBQ1YsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixpQkFBaUI7UUFDakIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFFeEIsWUFBWTtRQUNaLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFFckIsWUFBTztZQUNILEdBQUMsU0FBUyxDQUFDLEtBQUssSUFBRyxJQUFJLGdCQUFNLEVBQUU7WUFDL0IsR0FBQyxTQUFTLENBQUMsR0FBRyxJQUFHLElBQUksZ0JBQU0sRUFBRTtZQUM3QixHQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUcsSUFBSSxnQkFBTSxFQUFFO2dCQUNuQztRQXFDRCxpQkFBWSxHQUFXLENBQUMsQ0FBQztJQTZEN0IsQ0FBQztJQS9GRyxzQkFBSSwyQkFBUzthQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUlELG1CQUFJLEdBQUosY0FBUyxDQUFDO0lBR1YseUJBQVUsR0FBVixjQUFlLENBQUM7SUFDaEIsc0JBQU8sR0FBUCxjQUFZLENBQUM7SUFDYixtQkFBSSxHQUFKLGNBQVMsQ0FBQztJQUNWLG1CQUFJLEdBQUosVUFBSyxVQUFVLElBQUksQ0FBQztJQUVwQixvQkFBSyxHQUFMO0lBQ0EsQ0FBQztJQUVELHFCQUFNLEdBQU47SUFDQSxDQUFDO0lBSUQsaUJBQUUsR0FBRixVQUFHLElBQWUsRUFBRSxRQUFRLEVBQUUsTUFBTTtRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVELGtCQUFHLEdBQUgsVUFBSSxJQUFlLEVBQUUsUUFBUSxFQUFFLE1BQU07UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQy9DLENBQUM7SUFFTyxvQkFBSyxHQUFiLFVBQWMsSUFBZTs7UUFBRSxZQUFLO2FBQUwsVUFBSyxFQUFMLHFCQUFLLEVBQUwsSUFBSztZQUFMLDJCQUFLOztRQUNoQyxDQUFBLEtBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDLElBQUksV0FBSSxFQUFFLEVBQUU7SUFDbkMsQ0FBQztJQUlELGtCQUFrQjtJQUNsQixzQkFBTyxHQUFQLFVBQVEsSUFBSTtRQUNSLGlEQUFpRDtRQUNqRCxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQztRQUN0QixJQUFJO0lBQ1IsQ0FBQztJQUVELHVCQUFRLEdBQVI7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQztZQUFFLE9BQU87UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCxvQkFBb0I7SUFDcEIsd0JBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxxQkFBTSxHQUFOLFVBQU8sUUFBUztRQUFFLFdBQUk7YUFBSixVQUFJLEVBQUoscUJBQUksRUFBSixJQUFJO1lBQUosMEJBQUk7O1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDcEQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxTQUFTLE9BQWQsSUFBSSxFQUFjLENBQUMsRUFBRTtRQUNyQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDakMsT0FBTyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCxzQkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUE7UUFDakIsSUFBSTtZQUNBLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtTQUMzQjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1IsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNsQjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxxQkFBTSxHQUFOLFVBQU8sR0FBRztRQUNOLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQzFCLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDbEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7U0FDM0I7SUFDTCxDQUFDO0lBekhNLGNBQVMsR0FBcUIsU0FBUyxDQUFDO0lBNEhuRCxXQUFDO0NBN0hELEFBNkhDLElBQUE7a0JBN0g2QixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpZ25hbCBmcm9tIFwiLi4vLi4vY29yZS9TaWduYWxcIjtcclxuXHJcbmVudW0gRXZlbnRUeXBlIHtcclxuICAgIFN0YXJ0LFxyXG4gICAgRW5kLFxyXG4gICAgVXBkYXRlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJ1ZmYge1xyXG4gICAgc3RhdGljIEV2ZW50VHlwZTogdHlwZW9mIEV2ZW50VHlwZSA9IEV2ZW50VHlwZTtcclxuICAgIGR1cmF0aW9uOiBudW1iZXIgPSAxMDtcclxuICAgIGZpbmlzaGVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgdGltZUxlZnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLy9idWZmIOWQjeensCBcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgLy/lj6/ku6XmmK/ku7vkvZXmlbDmja4gXHJcbiAgICBkYXRhOiBhbnk7XHJcblxyXG4gICAgLyoqIOWPr+WPoOWKoCAqL1xyXG4gICAgY2FuQWRkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqIOacgOWkmuWPr+WPoOWKoCDlpJrplb/ml7bpl7QgKi9cclxuICAgIG1heER1cmF0aW9uOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8vYnVmZiDliLfmlrAg6Ze06ZqUXHJcbiAgICBpbnRlcnZhbDogbnVtYmVyID0gMTtcclxuXHJcbiAgICBzaWduYWxzOiB7IFtpbmRleDogbnVtYmVyXTogU2lnbmFsIH0gPSB7XHJcbiAgICAgICAgW0V2ZW50VHlwZS5TdGFydF06IG5ldyBTaWduYWwoKSxcclxuICAgICAgICBbRXZlbnRUeXBlLkVuZF06IG5ldyBTaWduYWwoKSxcclxuICAgICAgICBbRXZlbnRUeXBlLlVwZGF0ZV06IG5ldyBTaWduYWwoKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXQgaXNFbmFibGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVMZWZ0ID4gMDtcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBvbkVuYWJsZWQoLi4uYSlcclxuICAgIGFic3RyYWN0IG9uRGlzYWJsZWQoKVxyXG4gICAgc3RlcCgpIHsgfVxyXG4gICAgYWJzdHJhY3Qgb25UaW1lTGVmdENoYW5nZWQoKTtcclxuXHJcbiAgICBvblJlY292ZXJ5KCkgeyB9XHJcbiAgICBvblJlc2V0KCkgeyB9XHJcbiAgICBzYXZlKCkgeyB9XHJcbiAgICBsb2FkKG9mZmxpbmVTZWMpIHsgfVxyXG5cclxuICAgIHBhdXNlKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VtZSgpIHtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIG9uKHR5cGU6IEV2ZW50VHlwZSwgY2FsbGJhY2ssIHRhcmdldCkge1xyXG4gICAgICAgIHRoaXMuc2lnbmFsc1t0eXBlXS5hZGQoY2FsbGJhY2ssIHRhcmdldClcclxuICAgIH1cclxuXHJcbiAgICBvZmYodHlwZTogRXZlbnRUeXBlLCBjYWxsYmFjaywgdGFyZ2V0KSB7XHJcbiAgICAgICAgdGhpcy5zaWduYWxzW3R5cGVdLnJlbW92ZShjYWxsYmFjaywgdGFyZ2V0KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2VtaXQodHlwZTogRXZlbnRUeXBlLCAuLi5wcykge1xyXG4gICAgICAgIHRoaXMuc2lnbmFsc1t0eXBlXS5maXJlKC4uLnBzKTtcclxuICAgIH1cclxuXHJcbiAgICBiZWdhblRpbWVTZWM6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoq5aKe5YqgYnVmZiDnlJ/lkb3lkajmnJ8gICovXHJcbiAgICBhZGRMaWZlKGxpZmUpIHtcclxuICAgICAgICAvLyBpZiAodGhpcy5kdXJhdGlvbiArIGxpZmUgPCB0aGlzLm1heER1cmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiArPSBsaWZlO1xyXG4gICAgICAgIHRoaXMudGltZUxlZnQgKz0gbGlmZTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVjb3ZlcnkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZUxlZnQgPD0gMCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSB0aGlzLnRpbWVMZWZ0O1xyXG4gICAgICAgIHRoaXMuZmluaXNoZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJlZ2FuVGltZVNlYyA9IERhdGUubm93KCkgLyAxMDAwO1xyXG4gICAgICAgIHRoaXMub25SZWNvdmVyeSgpO1xyXG4gICAgICAgIHRoaXMub25UaW1lTGVmdENoYW5nZWQoKTtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJbQnVmZlN5c3RlbV3mgaLlpI1idWZmOlwiICsgXCJbXCIgKyB0aGlzLm5hbWUgKyBcIl1cIiwgdGhpcy5kdXJhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6YeN572uIGJ1ZmYg55Sf5ZG9IOWRqOacnyAgKi9cclxuICAgIHJlc2V0TGlmZSgpIHtcclxuICAgICAgICB0aGlzLmJlZ2FuVGltZVNlYyA9IERhdGUubm93KCkgLyAxMDAwO1xyXG4gICAgICAgIHRoaXMuZmluaXNoZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpbWVMZWZ0ID0gdGhpcy5kdXJhdGlvbjtcclxuICAgICAgICB0aGlzLm9uUmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBlbmFibGUoZHVyYXRpb24/LCAuLi5hKSB7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IHBhcnNlSW50KGR1cmF0aW9uKSB8fCB0aGlzLmR1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMucmVzZXRMaWZlKClcclxuICAgICAgICB0aGlzLm9uRW5hYmxlZCguLi5hKTtcclxuICAgICAgICB0aGlzLm9uVGltZUxlZnRDaGFuZ2VkKClcclxuICAgICAgICB0aGlzLl9lbWl0KEV2ZW50VHlwZS5TdGFydCwgdGhpcylcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJbQnVmZlN5c3RlbV3lvIDlkK9idWZmOlwiICsgXCJbXCIgKyB0aGlzLm5hbWUgKyBcIl1cIiwgdGhpcy5kdXJhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLmZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRpbWVMZWZ0ID0gMFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMub25EaXNhYmxlZCgpO1xyXG4gICAgICAgICAgICB0aGlzLm9uVGltZUxlZnRDaGFuZ2VkKClcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9lbWl0KEV2ZW50VHlwZS5FbmQsIHRoaXMpO1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIltCdWZmU3lzdGVtXeWFs+mXrWJ1ZmY6XCIgKyBcIltcIiArIHRoaXMubmFtZSArIFwiXVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBkb1N0ZXAobm93KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmluaXNoZWQpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy50aW1lTGVmdCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lTGVmdCA9IHRoaXMuZHVyYXRpb24gLSAobm93IC0gdGhpcy5iZWdhblRpbWVTZWMpO1xyXG4gICAgICAgICAgICB0aGlzLnN0ZXAoKVxyXG4gICAgICAgICAgICB0aGlzLl9lbWl0KEV2ZW50VHlwZS5VcGRhdGUsIHRoaXMpXHJcbiAgICAgICAgICAgIHRoaXMub25UaW1lTGVmdENoYW5nZWQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59Il19