
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/Locker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6315frODjtDP5L26E4YpAcQ', 'Locker');
// framework/misc/Locker.ts

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var lockers = {};
var Locker = /** @class */ (function () {
    function Locker(target, func_name, options) {
        this.activated = false;
        this.func_name = func_name;
        this.real_func = target[func_name];
        var proxy1 = new Proxy(this.real_func, {
            apply: function (target, thisarg, argumentsList) {
                this.activated = true;
                if (options != Locker.Prevent) {
                    return target.apply.apply(target, __spreadArrays([this], argumentsList));
                }
            }
        });
        target[func_name] = proxy1;
        this.target = target;
        lockers[target] = this;
    }
    Locker.intercept = function (target, func_name) {
        if (lockers[target]) {
            return lockers[target];
        }
        return new Locker(target, func_name, Locker.Prevent);
    };
    Locker.prototype.release = function () {
        //还原
        this.target[this.func_name] = this.real_func;
        if (this.activated) {
            this.real_func.apply(this.target);
        }
        delete lockers[this.target];
    };
    Locker.Prevent = 0;
    Locker.Before = 1;
    Locker.After = 2;
    return Locker;
}());
exports.default = Locker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxMb2NrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFBO0FBQ2xCO0lBcUJJLGdCQUFZLE1BQU0sRUFBQyxTQUFTLEVBQUMsT0FBTztRQUZwQyxjQUFTLEdBQVcsS0FBSyxDQUFDO1FBR3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLElBQUksTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkMsS0FBSyxFQUFDLFVBQVMsTUFBTSxFQUFDLE9BQU8sRUFBQyxhQUFhO2dCQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsSUFBRyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sRUFDNUI7b0JBQ0ksT0FBTyxNQUFNLENBQUMsS0FBSyxPQUFaLE1BQU0sa0JBQU8sSUFBSSxHQUFJLGFBQWEsR0FBQztpQkFDN0M7WUFDTCxDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQTtRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUE5Qk0sZ0JBQVMsR0FBaEIsVUFBaUIsTUFBTSxFQUFDLFNBQVM7UUFFN0IsSUFBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUM7WUFDZixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtTQUN6QjtRQUNELE9BQU8sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDdEQsQ0FBQztJQTBCRCx3QkFBTyxHQUFQO1FBQ0ksSUFBSTtRQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDN0MsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFDO1lBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ3BDO1FBQ0QsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUEzQ00sY0FBTyxHQUFHLENBQUMsQ0FBQztJQUNaLGFBQU0sR0FBRyxDQUFDLENBQUM7SUFDWCxZQUFLLEdBQUcsQ0FBQyxDQUFDO0lBMENyQixhQUFDO0NBOUNELEFBOENDLElBQUE7a0JBOUNvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9ja2VycyA9IHt9XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2tlciAge1xyXG5cclxuICAgIHN0YXRpYyBQcmV2ZW50ID0gMDtcclxuICAgIHN0YXRpYyBCZWZvcmUgPSAxO1xyXG4gICAgc3RhdGljIEFmdGVyID0gMjtcclxuXHJcbiAgICBzdGF0aWMgaW50ZXJjZXB0KHRhcmdldCxmdW5jX25hbWUpOkxvY2tlclxyXG4gICAge1xyXG4gICAgICAgIGlmKGxvY2tlcnNbdGFyZ2V0XSl7XHJcbiAgICAgICAgICAgIHJldHVybiBsb2NrZXJzW3RhcmdldF1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBMb2NrZXIodGFyZ2V0LGZ1bmNfbmFtZSxMb2NrZXIuUHJldmVudClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jX25hbWU6c3RyaW5nO1xyXG4gICAgcmVhbF9mdW5jOkZ1bmN0aW9uO1xyXG4gICAgdGFyZ2V0OmFueTtcclxuXHJcbiAgICBhZ2VudDpGdW5jdGlvbjtcclxuICAgIGFjdGl2YXRlZDpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGFyZ2V0LGZ1bmNfbmFtZSxvcHRpb25zKXtcclxuICAgICAgICB0aGlzLmZ1bmNfbmFtZSA9IGZ1bmNfbmFtZTtcclxuICAgICAgICB0aGlzLnJlYWxfZnVuYyA9IHRhcmdldFtmdW5jX25hbWVdO1xyXG4gICAgICAgIHZhciBwcm94eTEgPSBuZXcgUHJveHkodGhpcy5yZWFsX2Z1bmMsIHtcclxuICAgICAgICAgICAgYXBwbHk6ZnVuY3Rpb24odGFyZ2V0LHRoaXNhcmcsYXJndW1lbnRzTGlzdCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zICE9IExvY2tlci5QcmV2ZW50KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQuYXBwbHkodGhpcywuLi5hcmd1bWVudHNMaXN0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGFyZ2V0W2Z1bmNfbmFtZV0gPSBwcm94eTFcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICBsb2NrZXJzW3RhcmdldF0gPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbGVhc2UoKXtcclxuICAgICAgICAvL+i/mOWOn1xyXG4gICAgICAgIHRoaXMudGFyZ2V0W3RoaXMuZnVuY19uYW1lXSA9IHRoaXMucmVhbF9mdW5jO1xyXG4gICAgICAgIGlmKHRoaXMuYWN0aXZhdGVkKXtcclxuICAgICAgICAgICAgdGhpcy5yZWFsX2Z1bmMuYXBwbHkodGhpcy50YXJnZXQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGV0ZSBsb2NrZXJzW3RoaXMudGFyZ2V0XVxyXG4gICAgfVxyXG59Il19