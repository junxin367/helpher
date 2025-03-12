
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/core/event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxjb3JlXFxldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7SUFJSTtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTSx5QkFBRSxHQUFULFVBQVUsR0FBUSxFQUFFLE1BQWdCLEVBQUUsTUFBWTtRQUM5QyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQzlCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDbEQ7YUFBTTtZQUNILElBQUksS0FBSyxHQUFHLElBQUksS0FBSyxFQUFPLENBQUM7WUFDN0IsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDaEM7SUFDTCxDQUFDO0lBRU0sMEJBQUcsR0FBVixVQUFXLEdBQVEsRUFBRSxRQUFjLEVBQUUsTUFBWTtRQUM3QyxJQUFJLFFBQVEsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLFFBQVEsWUFBWSxRQUFRLENBQUMsRUFBRTtZQUNyRCxNQUFNLEdBQUcsUUFBUSxDQUFDO1lBQ2xCLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDbkI7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQzlCLElBQUksUUFBUSxJQUFJLElBQUksSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO2dCQUNwQyxPQUFPLElBQUksQ0FB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WyJcclxuY2xhc3MgRXZlbnRNYW5hZ2VyIHtcclxuXHJcbiAgICBwcml2YXRlIF9ldmVudExpc3Q6IHsgW2tleTogc3RyaW5nXTogQXJyYXk8eyBsaXN0ZW46IEZ1bmN0aW9uLCB0YXJnZXQ6IGFueSB9PiB9O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9ldmVudExpc3QgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb24oa2V5OiBhbnksIGxpc3RlbjogRnVuY3Rpb24sIHRhcmdldD86IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudExpc3Rba2V5XSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IHRoaXMuX2V2ZW50TGlzdFtrZXldO1xyXG4gICAgICAgICAgICBhcnJheS5wdXNoKHsgbGlzdGVuOiBsaXN0ZW4sIHRhcmdldDogdGFyZ2V0IH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2goeyBsaXN0ZW46IGxpc3RlbiwgdGFyZ2V0OiB0YXJnZXQgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50TGlzdFtrZXldID0gYXJyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvZmYoa2V5OiBhbnksIGxpc3RlbmVyPzogYW55LCB0YXJnZXQ/OiBhbnkpIHtcclxuICAgICAgICBpZiAobGlzdGVuZXIgIT0gbnVsbCAmJiAhKGxpc3RlbmVyIGluc3RhbmNlb2YgRnVuY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IGxpc3RlbmVyO1xyXG4gICAgICAgICAgICBsaXN0ZW5lciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudExpc3Rba2V5XSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lciA9PSBudWxsICYmIHRhcmdldCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fZXZlbnRMaXN0W2tleV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJyYXkgPSB0aGlzLl9ldmVudExpc3Rba2V5XTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lciAhPSBudWxsICYmIHRhcmdldCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJheVtpXS5saXN0ZW4gPT0gbGlzdGVuZXIgJiYgYXJyYXlbaV0udGFyZ2V0ID09IHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciAhPSBudWxsICYmIGFycmF5W2ldLmxpc3RlbiA9PSBsaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgIT0gbnVsbCAmJiBhcnJheVtpXS50YXJnZXQgPT0gdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5LnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fZXZlbnRMaXN0W2tleV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub2ZmVGFyZ2V0KGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvZmZUYXJnZXQodGFyZ2V0KSB7XHJcbiAgICAgICAgZm9yIChsZXQgayBpbiB0aGlzLl9ldmVudExpc3QpIHtcclxuICAgICAgICAgICAgbGV0IGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50TGlzdFtrXVxyXG4gICAgICAgICAgICB0aGlzLl9ldmVudExpc3Rba10gPSBsaXN0ZW5lcnMuZmlsdGVyKHYgPT4gdi50YXJnZXQgIT0gdGFyZ2V0KVxyXG4gICAgICAgICAgICBsZXQgYXJyYXkgPSB0aGlzLl9ldmVudExpc3Rba107XHJcbiAgICAgICAgICAgIGlmIChhcnJheS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50TGlzdFtrXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZW1pdERlbGF5KGRlbGF5OiBudW1iZXIsIHRhZzogc3RyaW5nLCAuLi5wYXJhbXM6IGFueVtdKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCh2ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KHRhZywgLi4ucGFyYW1zKTtcclxuICAgICAgICB9LCBkZWxheSAqIDEwMDApXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVtaXQodGFnOiBhbnksIC4uLnBhcmFtczogYW55W10pIHtcclxuICAgICAgICBsZXQgc2VuZE9rOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50TGlzdFt0YWddICE9IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IGFycmF5ID0gdGhpcy5fZXZlbnRMaXN0W3RhZ107XHJcbiAgICAgICAgICAgIC8vIGlmICghY2Muc3lzLmlzTW9iaWxlKSB7IGNvbnNvbGUud2FybihcImVtaXQgbWVzc2FnZTogXCIsIHRhZywgcGFyYW1zKTsgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0gYXJyYXlbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqLnRhcmdldCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5saXN0ZW4uYXBwbHkob2JqLnRhcmdldCwgcGFyYW1zKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZE9rID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5saXN0ZW4uYXBwbHkodGhpcywgcGFyYW1zKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZE9rID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZW5kT2tcclxuICAgIH1cclxuXHJcbiAgICAvKirmnInlj6/og73kvJrmi6bmiKrmtojmga/lubblgZzmraLovazlj5EgKi9cclxuICAgIHdhaXQobXNnOiBhbnksIHRpbWVvdXRTZWMgPSAwKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIGxldCB0aW1lb3V0SWQgPSAwO1xyXG4gICAgICAgICAgICBsZXQgY2FsbGJhY2sgPSBmdW5jdGlvbiAoLi4ucGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICBldnQub2ZmKG1zZywgY2FsbGJhY2ssIHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShwYXJhbXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRpbWVvdXRTZWMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KHYgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2dC5vZmYobXNnLCBjYWxsYmFjaywgc2VsZik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgndGltZW91dCcpXHJcbiAgICAgICAgICAgICAgICB9LCB0aW1lb3V0U2VjICogMTAwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBldnQub24obXNnLCBjYWxsYmFjaywgdGhpcyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzbGVlcCh0aW1lb3V0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGltZW91dCA9IHRpbWVvdXQgPCAwID8gMCA6IHRpbWVvdXQ7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgIH0sIHRpbWVvdXQgKiAxMDAwKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2xlZXBTYWZlKGNvbXAsIHRpbWVvdXQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aW1lb3V0ID0gdGltZW91dCA8IDAgPyAwIDogdGltZW91dDtcclxuICAgICAgICAgICAgY29tcC5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9LCB0aW1lb3V0KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IHZhciBldnQgPSBuZXcgRXZlbnRNYW5hZ2VyKCk7XHJcbndpbmRvd1snZXZ0J10gPSBldnQ7Il19