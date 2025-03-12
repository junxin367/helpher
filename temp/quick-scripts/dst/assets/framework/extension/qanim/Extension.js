
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/qanim/Extension.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHFhbmltXFxFeHRlbnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBZ0IsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDakMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDUixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNiLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDNUIsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM1QixPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFORCw0QkFNQztBQUNELFNBQWdCLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ2pDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQ1IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQ1IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDYixHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDNUIsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM1QixPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFSRCw0QkFRQztBQUNELFNBQWdCLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDekIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFGRCxzQkFFQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBsZXJwVmVjMihvdXQsIGEsIGIsIHQpIHtcclxuICAgIGxldCBheCA9IGEueCxcclxuICAgICAgICBheSA9IGEueTtcclxuICAgIG91dC54ID0gYXggKyB0ICogKGIueCAtIGF4KTtcclxuICAgIG91dC55ID0gYXkgKyB0ICogKGIueSAtIGF5KTtcclxuICAgIHJldHVybiBvdXQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGxlcnBWZWMzKG91dCwgYSwgYiwgdCkge1xyXG4gICAgbGV0IGF4ID0gYS54LFxyXG4gICAgICAgIGF5ID0gYS55LFxyXG4gICAgICAgIGF6ID0gYS56O1xyXG4gICAgb3V0LnggPSBheCArIHQgKiAoYi54IC0gYXgpO1xyXG4gICAgb3V0LnkgPSBheSArIHQgKiAoYi55IC0gYXkpO1xyXG4gICAgb3V0LnogPSBheiArIHQgKiAoYi56IC0gYXopO1xyXG4gICAgcmV0dXJuIG91dDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbGVycGYoYSwgYiwgdCkge1xyXG4gICAgcmV0dXJuIGNjLm1pc2MubGVycChhLCBiLCB0KTtcclxufSJdfQ==