"use strict";
cc._RF.push(module, '50577U0PIBPf7an/3VlOADJ', 'Signal');
// framework/core/Signal.ts

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Signal = /** @class */ (function () {
    function Signal(c, t) {
        this.allReceivers = [];
        this.rejectCallback = null;
    }
    //电子邮件puhalskijsemen@gmail.com
    //源码网站 开vpn全局模式打开 http://web3incubators.com/
    //电报https://t.me/gamecode999
    //网页客服 http://web3incubators.com/kefu.html
    Signal.prototype.add = function (c, t) {
        var receiver = this.allReceivers.find(function (v) { return v.c == c && v.t == t; });
        if (!receiver)
            this.allReceivers.push({ c: c, t: t });
    };
    Signal.prototype.remove = function (c, t) {
        this.allReceivers = this.allReceivers.filter(function (v) { return v.c != c && v.t != t; });
    };
    Signal.prototype.fire = function () {
        var _a;
        var ps = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ps[_i] = arguments[_i];
        }
        for (var i = 0; i < this.allReceivers.length; i++) {
            var v = this.allReceivers[i];
            if (v.c)
                (_a = v.c).call.apply(_a, __spreadArrays([v.t], ps));
            else
                console.warn("not found callback ", v.c, v.t);
        }
    };
    Signal.prototype.on = function (c, t) {
        this.remove(c, t);
        this.add(c, t);
    };
    Signal.prototype.off = function (c, t) {
        this.remove(c, t);
    };
    Signal.prototype.clear = function () {
        this.allReceivers.splice(0);
        this.rejectCallback = null;
    };
    Signal.prototype.once = function (callback, rejectCallback) {
        var _this = this;
        var h = function () {
            _this.remove(h);
            callback && callback();
        };
        this.rejectCallback = rejectCallback;
        this.add(h);
    };
    Signal.prototype.cancel = function () {
        if (this.rejectCallback) {
            this.rejectCallback("canceled");
            this.rejectCallback = null;
        }
    };
    Signal.prototype.wait = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.once(resolve, reject);
        });
    };
    return Signal;
}());
exports.default = Signal;

cc._RF.pop();