"use strict";
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