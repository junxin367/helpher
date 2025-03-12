
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/utils/mathf.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b53f27NZV1LdYvkPZFRbz31', 'mathf');
// framework/utils/mathf.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mathf = /** @class */ (function () {
    function mathf() {
    }
    mathf.Clamp = function (value, min, max) {
        if (value < min)
            value = min;
        else if (value > max)
            value = max;
        return value;
    };
    // Loops the value t, so that it is never larger than length and never smaller than 0.
    mathf.Repeat = function (t, length) {
        return mathf.Clamp(t - Math.floor(t / length) * length, 0.0, length);
    };
    // PingPongs the value t, so that it is never larger than length and never smaller than 0.
    mathf.PingPong = function (t, length) {
        t = mathf.Repeat(t, length * 2);
        return length - Math.abs(t - length);
    };
    // Calculates the ::ref::Lerp parameter between of two values.
    mathf.InverseLerp = function (a, b, value) {
        if (a != b)
            return mathf.Clamp01((value - a) / (b - a));
        else
            return 0.0;
    };
    // Calculates the shortest difference between two given angles.
    mathf.DeltaAngle = function (current, target) {
        var delta = mathf.Repeat((target - current), 360.0);
        if (delta > 180)
            delta -= 360;
        return delta;
    };
    mathf.Clamp01 = function (value) {
        if (value < 0)
            return 0;
        else if (value > 1)
            return 1;
        else
            return value;
    };
    // Interpolates between /a/ and /b/ by /t/. /t/ is clamped between 0 and 1.
    mathf.Lerp = function (a, b, t) {
        return a + (b - a) * mathf.Clamp01(t);
    };
    mathf.LerpAngle = function (a, b, t) {
        var delta = mathf.Repeat((b - a), 360);
        if (delta > 180)
            delta -= 360;
        return a + delta * mathf.Clamp01(t);
    };
    return mathf;
}());
exports.default = mathf;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx1dGlsc1xcbWF0aGYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBd0RBLENBQUM7SUF2RGlCLFdBQUssR0FBbkIsVUFBb0IsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQy9CLElBQUksS0FBSyxHQUFHLEdBQUc7WUFDWCxLQUFLLEdBQUcsR0FBRyxDQUFDO2FBQ1gsSUFBSSxLQUFLLEdBQUcsR0FBRztZQUNoQixLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxzRkFBc0Y7SUFDeEUsWUFBTSxHQUFwQixVQUFxQixDQUFDLEVBQUUsTUFBTTtRQUMxQixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELDBGQUEwRjtJQUM1RSxjQUFRLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxNQUFNO1FBQzVCLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEMsT0FBTyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELDhEQUE4RDtJQUNoRCxpQkFBVyxHQUF6QixVQUEwQixDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUs7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNOLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUU1QyxPQUFPLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBRUQsK0RBQStEO0lBQ2pELGdCQUFVLEdBQXhCLFVBQXlCLE9BQU8sRUFBRSxNQUFNO1FBQ3BDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEQsSUFBSSxLQUFLLEdBQUcsR0FBRztZQUNYLEtBQUssSUFBSSxHQUFHLENBQUM7UUFDakIsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVhLGFBQU8sR0FBckIsVUFBc0IsS0FBSztRQUN2QixJQUFJLEtBQUssR0FBRyxDQUFDO1lBQ1QsT0FBTyxDQUFDLENBQUM7YUFDUixJQUFJLEtBQUssR0FBRyxDQUFDO1lBQ2QsT0FBTyxDQUFDLENBQUM7O1lBRVQsT0FBTyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVELDJFQUEyRTtJQUM3RCxVQUFJLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFYSxlQUFTLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUMzQixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksS0FBSyxHQUFHLEdBQUc7WUFDWCxLQUFLLElBQUksR0FBRyxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0F4REEsQUF3REMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIG1hdGhmIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgQ2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XHJcbiAgICAgICAgaWYgKHZhbHVlIDwgbWluKVxyXG4gICAgICAgICAgICB2YWx1ZSA9IG1pbjtcclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA+IG1heClcclxuICAgICAgICAgICAgdmFsdWUgPSBtYXg7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExvb3BzIHRoZSB2YWx1ZSB0LCBzbyB0aGF0IGl0IGlzIG5ldmVyIGxhcmdlciB0aGFuIGxlbmd0aCBhbmQgbmV2ZXIgc21hbGxlciB0aGFuIDAuXHJcbiAgICBwdWJsaWMgc3RhdGljIFJlcGVhdCh0LCBsZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gbWF0aGYuQ2xhbXAodCAtIE1hdGguZmxvb3IodCAvIGxlbmd0aCkgKiBsZW5ndGgsIDAuMCwgbGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQaW5nUG9uZ3MgdGhlIHZhbHVlIHQsIHNvIHRoYXQgaXQgaXMgbmV2ZXIgbGFyZ2VyIHRoYW4gbGVuZ3RoIGFuZCBuZXZlciBzbWFsbGVyIHRoYW4gMC5cclxuICAgIHB1YmxpYyBzdGF0aWMgUGluZ1BvbmcodCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgdCA9IG1hdGhmLlJlcGVhdCh0LCBsZW5ndGggKiAyKTtcclxuICAgICAgICByZXR1cm4gbGVuZ3RoIC0gTWF0aC5hYnModCAtIGxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlcyB0aGUgOjpyZWY6OkxlcnAgcGFyYW1ldGVyIGJldHdlZW4gb2YgdHdvIHZhbHVlcy5cclxuICAgIHB1YmxpYyBzdGF0aWMgSW52ZXJzZUxlcnAoYSwgYiwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoYSAhPSBiKVxyXG4gICAgICAgICAgICByZXR1cm4gbWF0aGYuQ2xhbXAwMSgodmFsdWUgLSBhKSAvIChiIC0gYSkpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIDAuMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhdGVzIHRoZSBzaG9ydGVzdCBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIGdpdmVuIGFuZ2xlcy5cclxuICAgIHB1YmxpYyBzdGF0aWMgRGVsdGFBbmdsZShjdXJyZW50LCB0YXJnZXQpIHtcclxuICAgICAgICBsZXQgZGVsdGEgPSBtYXRoZi5SZXBlYXQoKHRhcmdldCAtIGN1cnJlbnQpLCAzNjAuMCk7XHJcbiAgICAgICAgaWYgKGRlbHRhID4gMTgwKVxyXG4gICAgICAgICAgICBkZWx0YSAtPSAzNjA7XHJcbiAgICAgICAgcmV0dXJuIGRlbHRhO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgQ2xhbXAwMSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA8IDApXHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlID4gMSlcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW50ZXJwb2xhdGVzIGJldHdlZW4gL2EvIGFuZCAvYi8gYnkgL3QvLiAvdC8gaXMgY2xhbXBlZCBiZXR3ZWVuIDAgYW5kIDEuXHJcbiAgICBwdWJsaWMgc3RhdGljIExlcnAoYSwgYiwgdCkge1xyXG4gICAgICAgIHJldHVybiBhICsgKGIgLSBhKSAqIG1hdGhmLkNsYW1wMDEodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBMZXJwQW5nbGUoYSwgYiwgdCkge1xyXG4gICAgICAgIGxldCBkZWx0YSA9IG1hdGhmLlJlcGVhdCgoYiAtIGEpLCAzNjApO1xyXG4gICAgICAgIGlmIChkZWx0YSA+IDE4MClcclxuICAgICAgICAgICAgZGVsdGEgLT0gMzYwO1xyXG4gICAgICAgIHJldHVybiBhICsgZGVsdGEgKiBtYXRoZi5DbGFtcDAxKHQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==