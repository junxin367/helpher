"use strict";
cc._RF.push(module, '0cf66K7vRxKfKCRFczebJno', 'event');
// framework/core/event.ts

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.evt = void 0;
var EventManager = /** @class */ (function () {
    function EventManager() {
        this._eventList = {};
    }
    EventManager.prototype.on = function (key, listen, target) {
        if (this._eventList[key] != null) {
            var array = this._eventList[key];
            array.push({ listen: listen, target: target });
        }
        else {
            var array = new Array();
            array.push({ listen: listen, target: target });
            this._eventList[key] = array;
        }
    };
    EventManager.prototype.off = function (key, listener, target) {
        if (listener != null && !(listener instanceof Function)) {
            target = listener;
            listener = null;
        }
        if (this._eventList[key] != null) {
            if (listener == null && target == null) {
                delete this._eventList[key];
            }
            else {
                var array = this._eventList[key];
                for (var i = array.length - 1; i >= 0; i--) {
                    if (listener != null && target != null) {
                        if (array[i].listen == listener && array[i].target == target) {
                            array.splice(i, 1);
                        }
                    }
                    else if (listener != null && array[i].listen == listener) {
                        array.splice(i, 1);
                    }
                    else if (target != null && array[i].target == target) {
                        array.splice(i, 1);
                    }
                }
                if (array.length == 0) {
                    delete this._eventList[key];
                }
            }
        }
        else {
            this.offTarget(key);
        }
    };
    EventManager.prototype.offTarget = function (target) {
        for (var k in this._eventList) {
            var listeners = this._eventList[k];
            this._eventList[k] = listeners.filter(function (v) { return v.target != target; });
            var array = this._eventList[k];
            if (array.length == 0) {
                delete this._eventList[k];
            }
        }
    };
    EventManager.prototype.emitDelay = function (delay, tag) {
        var _this = this;
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        setTimeout(function (v) {
            _this.emit.apply(_this, __spreadArrays([tag], params));
        }, delay * 1000);
    };
    EventManager.prototype.emit = function (tag) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var sendOk = false;
        if (this._eventList[tag] != null) {
            var array = this._eventList[tag];
            // if (!cc.sys.isMobile) { console.warn("emit message: ", tag, params); }
            for (var i = 0; i < array.length; i++) {
                var obj = array[i];
                if (obj.target != null) {
                    if (obj.listen.apply(obj.target, params))
                        sendOk = true;
                }
                else {
                    if (obj.listen.apply(this, params))
                        sendOk = true;
                }
            }
        }
        return sendOk;
    };
    /**有可能会拦截消息并停止转发 */
    EventManager.prototype.wait = function (msg, timeoutSec) {
        var _this = this;
        if (timeoutSec === void 0) { timeoutSec = 0; }
        return new Promise(function (resolve, reject) {
            var self = _this;
            var timeoutId = 0;
            var callback = function () {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i] = arguments[_i];
                }
                exports.evt.off(msg, callback, self);
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                resolve(params);
            };
            if (timeoutSec > 0) {
                timeoutId = setTimeout(function (v) {
                    exports.evt.off(msg, callback, self);
                    resolve('timeout');
                }, timeoutSec * 1000);
            }
            exports.evt.on(msg, callback, _this);
        });
    };
    EventManager.prototype.sleep = function (timeout) {
        return new Promise(function (resolve, reject) {
            timeout = timeout < 0 ? 0 : timeout;
            setTimeout(function () {
                resolve();
            }, timeout * 1000);
        });
    };
    EventManager.prototype.sleepSafe = function (comp, timeout) {
        return new Promise(function (resolve, reject) {
            timeout = timeout < 0 ? 0 : timeout;
            comp.scheduleOnce(function () {
                resolve();
            }, timeout);
        });
    };
    return EventManager;
}());
exports.evt = new EventManager();
window['evt'] = exports.evt;

cc._RF.pop();