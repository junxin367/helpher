"use strict";
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