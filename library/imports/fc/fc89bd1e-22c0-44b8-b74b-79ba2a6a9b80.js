"use strict";
cc._RF.push(module, 'fc89b0eIsBEuLdLeboqapuA', 'Extension');
// framework/extension/qanim/Extension.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lerpf = exports.lerpVec3 = exports.lerpVec2 = void 0;
function lerpVec2(out, a, b, t) {
    var ax = a.x, ay = a.y;
    out.x = ax + t * (b.x - ax);
    out.y = ay + t * (b.y - ay);
    return out;
}
exports.lerpVec2 = lerpVec2;
function lerpVec3(out, a, b, t) {
    var ax = a.x, ay = a.y, az = a.z;
    out.x = ax + t * (b.x - ax);
    out.y = ay + t * (b.y - ay);
    out.z = az + t * (b.z - az);
    return out;
}
exports.lerpVec3 = lerpVec3;
function lerpf(a, b, t) {
    return cc.misc.lerp(a, b, t);
}
exports.lerpf = lerpf;

cc._RF.pop();