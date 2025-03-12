
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/core/FSM.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2339dXROBhBn5TGqU7N6oRO', 'FSM');
// framework/core/FSM.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var State = /** @class */ (function () {
    function State(id, name) {
        this.__interval_callbacks = [];
        this.interval_id = 0;
        this.id = id;
        this.name = name;
    }
    State.prototype.onEnter = function (params) { };
    State.prototype.onExit = function () { };
    State.prototype.onUpdate = function (dt) { };
    //messages 
    State.prototype.on = function () { };
    State.prototype.off = function () { };
    State.prototype.clearIntervals = function () {
        this.__interval_callbacks.splice(0, this.__interval_callbacks.length);
    };
    State.prototype.setInterval = function (interval, callback, target) {
        var id = ++this.interval_id;
        var timer = 0;
        this.__interval_callbacks.push({ id: id, callback: callback, target: target, interval: interval, timer: timer });
        return id;
    };
    State.prototype.clearInterval = function (id) {
        this.__interval_callbacks.splice(this.__interval_callbacks.indexOf(id));
    };
    State.prototype.setTimeout = function (delay, callback, target) {
        var id = ++this.interval_id;
        var timer = 0;
        this.__interval_callbacks.push({ id: id, callback: callback, target: target, delay: delay, timer: timer });
        return id;
    };
    State.prototype.clearTimeout = function (id) {
        this.clearInterval(id);
    };
    State.prototype.invokeIntervals = function (dt) {
        for (var i = 0; i < this.__interval_callbacks.length; i++) {
            var element = this.__interval_callbacks[i];
            element.timer = element.timer + dt;
            if (element.interval) {
                if (element.timer >= element.interval) {
                    element.timer = 0;
                    // call
                    element.callback.call(element.target);
                }
            }
            else if (element.delay) {
                if (element.timer >= element.delay) {
                    // call
                    element.callback.call(element.target);
                    this.__interval_callbacks.splice(i);
                    i--;
                }
            }
        }
    };
    return State;
}());
exports.State = State;
var CustomState = /** @class */ (function (_super) {
    __extends(CustomState, _super);
    function CustomState(target, id, name, pattern) {
        var _this = _super.call(this, id, name) || this;
        var enterName = cc.js.formatStr(pattern, "onEnter", _this.name);
        var updateName = cc.js.formatStr(pattern, "onUpdate", _this.name);
        var exitName = cc.js.formatStr(pattern, "onExit", _this.name);
        _this.__target = target;
        _this.__enterFunc = _this.__target[enterName];
        _this.__updateFunc = _this.__target[updateName];
        _this.__exitFunc = _this.__target[exitName];
        return _this;
    }
    CustomState.prototype.onEnter = function (params) {
        this.clearIntervals();
        if (this.__enterFunc) {
            this.__enterFunc.call(this.__target, this, params);
        }
    };
    CustomState.prototype.onExit = function () {
        if (this.__exitFunc) {
            this.__exitFunc.call(this.__target, this);
        }
    };
    CustomState.prototype.onUpdate = function (dt) {
        this.invokeIntervals(dt);
        if (this.__updateFunc) {
            this.__updateFunc.call(this.__target, this, dt);
        }
    };
    return CustomState;
}(State));
var FSM = /** @class */ (function (_super) {
    __extends(FSM, _super);
    function FSM() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timeElapsed = 0;
        _this._states = {};
        _this._isPaused = false;
        _this._log = false;
        return _this;
    }
    Object.defineProperty(FSM.prototype, "target", {
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    FSM.prototype.getState = function (stateId) {
        return this._states[stateId];
    };
    FSM.prototype.getCurrentState = function () {
        return this.c;
    };
    FSM.prototype.getPreviousState = function () {
        return this.p;
    };
    FSM.prototype.init = function (target, states, params) {
        if (params === void 0) { params = '%s_%s'; }
        this._target = target;
        this.timeElapsed = 0;
        if (states)
            this.addStates(states, params);
    };
    FSM.prototype.addStates = function (states, callbackNamePattern) {
        if (callbackNamePattern === void 0) { callbackNamePattern = "%s_%sState"; }
        var keys = Object.keys(states);
        var enumLen = (keys.length / 2);
        this.namePattern = callbackNamePattern;
        for (var i = 0; i < enumLen; i++) {
            var key = keys[i];
            var value = states[key];
            this.addState(key, value);
        }
    };
    FSM.prototype.addState = function (id, name, enterCallback, exitCallback, updateCallback, target) {
        if (this._log)
            console.log("[FSM]" + this.target.__classname__ + "(" + this.target.name + ")" + " Add State :", id, name);
        var state = new CustomState(this.target, id, name, this.namePattern);
        this._states[id] = state;
        if (enterCallback)
            state.__enterFunc = enterCallback;
        if (exitCallback)
            state.__exitFunc = exitCallback;
        if (updateCallback)
            state.__updateFunc = updateCallback;
        if (target)
            state.__target = target;
    };
    /**
     * first state
     * @param: state index or State
     */
    FSM.prototype.enterState = function (stateId, params) {
        this.timeElapsed = 0;
        var state = this._states[stateId];
        this.c = state;
        state.onEnter(params);
        if (this._log)
            console.log("[FSM]" + this.target.__classname__ + " First State:", state.name);
    };
    FSM.prototype.revertState = function () {
        this.changeState(this.p.id);
    };
    FSM.prototype.pause = function () {
        this._isPaused = true;
    };
    FSM.prototype.resume = function () {
        this._isPaused = false;
    };
    FSM.prototype.resetCurrentState = function () {
        this.timeElapsed = 0;
        console.log(cc.js.formatStr("[FSM] %s reset currentState", this.target.__classname__));
        this.c.onExit();
        this.c.onEnter();
    };
    FSM.prototype.changeState = function (stateId, params) {
        var state = this._states[stateId];
        if (state == null) {
            console.warn("[FSM] invalid state for stateId " + stateId + " of : " + this.target.__classname__);
            return;
        }
        if (this._isPaused) {
            console.warn("[FSM] fsm is paused ! " + this.target.__classname__ + " changeState to <" + state.name + "> failed!");
            return;
        }
        if (this.c) {
            if (stateId == this.c.id) {
                if (this._log)
                    console.log(this.target.__classname__ + " already in state :" + state.name);
                return;
            }
            ;
            this.c.onExit();
            this.p = this.c;
        }
        this.timeElapsed = 0;
        this.c = state;
        if (this._log)
            console.log(cc.js.formatStr("[FSM] %s (%s): %s -> %s", this.target.__classname__, this.name, this.p.name, state.name));
        this.c.onEnter(params);
    };
    FSM.prototype.isInState = function (stateId) {
        return this.c == this._states[stateId];
    };
    FSM.prototype.update = function (dt) {
        if (this._isPaused)
            return;
        if (FSM.debug)
            dt = 0.016; // use real deta
        this.timeElapsed += dt;
        if (this.c)
            this.c.onUpdate(dt);
    };
    FSM.debug = false;
    return FSM;
}(cc.Component));
exports.default = FSM;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxjb3JlXFxGU00udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBSUksZUFBWSxFQUFHLEVBQUUsSUFBSztRQVd0Qix5QkFBb0IsR0FBRyxFQUFFLENBQUE7UUFNekIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFoQnBCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNELHVCQUFPLEdBQVAsVUFBUSxNQUFPLElBQUksQ0FBQztJQUNwQixzQkFBTSxHQUFOLGNBQVcsQ0FBQztJQUNaLHdCQUFRLEdBQVIsVUFBUyxFQUFFLElBQUksQ0FBQztJQUNoQixXQUFXO0lBQ1gsa0JBQUUsR0FBRixjQUFPLENBQUM7SUFDUixtQkFBRyxHQUFILGNBQVEsQ0FBQztJQUlULDhCQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDekUsQ0FBQztJQUlELDJCQUFXLEdBQVgsVUFBWSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU87UUFDbkMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7UUFDMUUsT0FBTyxFQUFFLENBQUM7SUFDZCxD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QUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQXZJTSxTQUFLLEdBQUcsS0FBSyxDQUFDO0lBd0l6QixVQUFDO0NBN0lELEFBNklDLENBN0lnQyxFQUFFLENBQUMsU0FBUyxHQTZJNUM7a0JBN0lvQixHQUFHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdGUge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgaWQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZD8sIG5hbWU/KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbiAgICBvbkVudGVyKHBhcmFtcz8pIHsgfVxyXG4gICAgb25FeGl0KCkgeyB9XHJcbiAgICBvblVwZGF0ZShkdCkgeyB9XHJcbiAgICAvL21lc3NhZ2VzIFxyXG4gICAgb24oKSB7IH1cclxuICAgIG9mZigpIHsgfVxyXG5cclxuICAgIF9faW50ZXJ2YWxfY2FsbGJhY2tzID0gW11cclxuXHJcbiAgICBjbGVhckludGVydmFscygpIHtcclxuICAgICAgICB0aGlzLl9faW50ZXJ2YWxfY2FsbGJhY2tzLnNwbGljZSgwLCB0aGlzLl9faW50ZXJ2YWxfY2FsbGJhY2tzLmxlbmd0aClcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcnZhbF9pZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBzZXRJbnRlcnZhbChpbnRlcnZhbCwgY2FsbGJhY2ssIHRhcmdldD8pIHtcclxuICAgICAgICBsZXQgaWQgPSArK3RoaXMuaW50ZXJ2YWxfaWQ7XHJcbiAgICAgICAgbGV0IHRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLl9faW50ZXJ2YWxfY2FsbGJhY2tzLnB1c2goeyBpZCwgY2FsbGJhY2ssIHRhcmdldCwgaW50ZXJ2YWwsIHRpbWVyIH0pO1xyXG4gICAgICAgIHJldHVybiBpZDtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckludGVydmFsKGlkKSB7XHJcbiAgICAgICAgdGhpcy5fX2ludGVydmFsX2NhbGxiYWNrcy5zcGxpY2UodGhpcy5fX2ludGVydmFsX2NhbGxiYWNrcy5pbmRleE9mKGlkKSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0VGltZW91dChkZWxheSwgY2FsbGJhY2ssIHRhcmdldD8pIHtcclxuICAgICAgICBsZXQgaWQgPSArK3RoaXMuaW50ZXJ2YWxfaWQ7XHJcbiAgICAgICAgbGV0IHRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLl9faW50ZXJ2YWxfY2FsbGJhY2tzLnB1c2goeyBpZCwgY2FsbGJhY2ssIHRhcmdldCwgZGVsYXksIHRpbWVyIH0pO1xyXG4gICAgICAgIHJldHVybiBpZDtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclRpbWVvdXQoaWQpIHtcclxuICAgICAgICB0aGlzLmNsZWFySW50ZXJ2YWwoaWQpXHJcbiAgICB9XHJcblxyXG4gICAgaW52b2tlSW50ZXJ2YWxzKGR0KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9faW50ZXJ2YWxfY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9faW50ZXJ2YWxfY2FsbGJhY2tzW2ldO1xyXG4gICAgICAgICAgICBlbGVtZW50LnRpbWVyID0gZWxlbWVudC50aW1lciArIGR0O1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5pbnRlcnZhbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQudGltZXIgPj0gZWxlbWVudC5pbnRlcnZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQudGltZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGxcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNhbGxiYWNrLmNhbGwoZWxlbWVudC50YXJnZXQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5kZWxheSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQudGltZXIgPj0gZWxlbWVudC5kZWxheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGxcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNhbGxiYWNrLmNhbGwoZWxlbWVudC50YXJnZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2ludGVydmFsX2NhbGxiYWNrcy5zcGxpY2UoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDdXN0b21TdGF0ZSBleHRlbmRzIFN0YXRlIHtcclxuICAgIF9fZW50ZXJGdW5jOiBGdW5jdGlvbjtcclxuICAgIF9fZXhpdEZ1bmM6IEZ1bmN0aW9uO1xyXG4gICAgX191cGRhdGVGdW5jOiBGdW5jdGlvbjtcclxuICAgIF9fdGFyZ2V0OiBhbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIGlkLCBuYW1lLCBwYXR0ZXJuKSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIG5hbWUpO1xyXG4gICAgICAgIGxldCBlbnRlck5hbWUgPSBjYy5qcy5mb3JtYXRTdHIocGF0dGVybiwgXCJvbkVudGVyXCIsIHRoaXMubmFtZSlcclxuICAgICAgICBsZXQgdXBkYXRlTmFtZSA9IGNjLmpzLmZvcm1hdFN0cihwYXR0ZXJuLCBcIm9uVXBkYXRlXCIsIHRoaXMubmFtZSlcclxuICAgICAgICBsZXQgZXhpdE5hbWUgPSBjYy5qcy5mb3JtYXRTdHIocGF0dGVybiwgXCJvbkV4aXRcIiwgdGhpcy5uYW1lKVxyXG4gICAgICAgIHRoaXMuX190YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy5fX2VudGVyRnVuYyA9IHRoaXMuX190YXJnZXRbZW50ZXJOYW1lXTtcclxuICAgICAgICB0aGlzLl9fdXBkYXRlRnVuYyA9IHRoaXMuX190YXJnZXRbdXBkYXRlTmFtZV07XHJcbiAgICAgICAgdGhpcy5fX2V4aXRGdW5jID0gdGhpcy5fX3RhcmdldFtleGl0TmFtZV07XHJcblxyXG4gICAgfVxyXG4gICAgb25FbnRlcihwYXJhbXMpIHtcclxuICAgICAgICB0aGlzLmNsZWFySW50ZXJ2YWxzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX19lbnRlckZ1bmMpIHtcclxuICAgICAgICAgICAgdGhpcy5fX2VudGVyRnVuYy5jYWxsKHRoaXMuX190YXJnZXQsIHRoaXMsIHBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25FeGl0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9fZXhpdEZ1bmMpIHtcclxuICAgICAgICAgICAgdGhpcy5fX2V4aXRGdW5jLmNhbGwodGhpcy5fX3RhcmdldCwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25VcGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLmludm9rZUludGVydmFscyhkdCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX191cGRhdGVGdW5jKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX191cGRhdGVGdW5jLmNhbGwodGhpcy5fX3RhcmdldCwgdGhpcywgZHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZTTSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBjOiBTdGF0ZTtcclxuICAgIHA6IFN0YXRlO1xyXG4gICAgX3RhcmdldDogYW55O1xyXG5cclxuICAgIHN0YXRpYyBkZWJ1ZyA9IGZhbHNlO1xyXG5cclxuICAgIHRpbWVFbGFwc2VkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIF9zdGF0ZXM6IHsgW2luZGV4OiBudW1iZXJdOiBTdGF0ZSB9ID0ge31cclxuXHJcbiAgICBfaXNQYXVzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBuYW1lUGF0dGVybjogc3RyaW5nO1xyXG5cclxuICAgIF9sb2c6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBnZXQgdGFyZ2V0KCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0U3RhdGUoc3RhdGVJZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZXNbc3RhdGVJZF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VycmVudFN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcmV2aW91c1N0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnA7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCh0YXJnZXQ6IGFueSwgc3RhdGVzPzogYW55LCBwYXJhbXMgPSAnJXNfJXMnKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX3RhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLnRpbWVFbGFwc2VkID0gMDtcclxuICAgICAgICBpZiAoc3RhdGVzKVxyXG4gICAgICAgICAgICB0aGlzLmFkZFN0YXRlcyhzdGF0ZXMsIHBhcmFtcylcclxuICAgIH1cclxuXHJcblxyXG4gICAgYWRkU3RhdGVzKHN0YXRlczogYW55LCBjYWxsYmFja05hbWVQYXR0ZXJuID0gXCIlc18lc1N0YXRlXCIpIHtcclxuICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHN0YXRlcyk7XHJcbiAgICAgICAgbGV0IGVudW1MZW4gPSAoa2V5cy5sZW5ndGggLyAyKTtcclxuICAgICAgICB0aGlzLm5hbWVQYXR0ZXJuID0gY2FsbGJhY2tOYW1lUGF0dGVybjtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVudW1MZW47IGkrKykge1xyXG4gICAgICAgICAgICBsZXQga2V5ID0ga2V5c1tpXVxyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBzdGF0ZXNba2V5XTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkU3RhdGUoa2V5LCB2YWx1ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU3RhdGUoaWQsIG5hbWUsIGVudGVyQ2FsbGJhY2s/LCBleGl0Q2FsbGJhY2s/LCB1cGRhdGVDYWxsYmFjaz8sIHRhcmdldD8pIHtcclxuICAgICAgICBpZiAodGhpcy5fbG9nKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltGU01dXCIgKyB0aGlzLnRhcmdldC5fX2NsYXNzbmFtZV9fICsgXCIoXCIgKyB0aGlzLnRhcmdldC5uYW1lICsgXCIpXCIgKyBcIiBBZGQgU3RhdGUgOlwiLCBpZCwgbmFtZSlcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgQ3VzdG9tU3RhdGUodGhpcy50YXJnZXQsIGlkLCBuYW1lLCB0aGlzLm5hbWVQYXR0ZXJuKTtcclxuICAgICAgICB0aGlzLl9zdGF0ZXNbaWRdID0gc3RhdGU7XHJcbiAgICAgICAgaWYgKGVudGVyQ2FsbGJhY2spXHJcbiAgICAgICAgICAgIHN0YXRlLl9fZW50ZXJGdW5jID0gZW50ZXJDYWxsYmFjaztcclxuICAgICAgICBpZiAoZXhpdENhbGxiYWNrKVxyXG4gICAgICAgICAgICBzdGF0ZS5fX2V4aXRGdW5jID0gZXhpdENhbGxiYWNrO1xyXG4gICAgICAgIGlmICh1cGRhdGVDYWxsYmFjaylcclxuICAgICAgICAgICAgc3RhdGUuX191cGRhdGVGdW5jID0gdXBkYXRlQ2FsbGJhY2s7XHJcbiAgICAgICAgaWYgKHRhcmdldClcclxuICAgICAgICAgICAgc3RhdGUuX190YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmaXJzdCBzdGF0ZSBcclxuICAgICAqIEBwYXJhbTogc3RhdGUgaW5kZXggb3IgU3RhdGVcclxuICAgICAqL1xyXG4gICAgZW50ZXJTdGF0ZShzdGF0ZUlkOiBudW1iZXIsIHBhcmFtcz8pIHtcclxuICAgICAgICB0aGlzLnRpbWVFbGFwc2VkID0gMFxyXG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuX3N0YXRlc1tzdGF0ZUlkXVxyXG4gICAgICAgIHRoaXMuYyA9IHN0YXRlO1xyXG4gICAgICAgIHN0YXRlLm9uRW50ZXIocGFyYW1zKTtcclxuICAgICAgICBpZiAodGhpcy5fbG9nKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltGU01dXCIgKyB0aGlzLnRhcmdldC5fX2NsYXNzbmFtZV9fICsgXCIgRmlyc3QgU3RhdGU6XCIsIHN0YXRlLm5hbWUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV2ZXJ0U3RhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSh0aGlzLnAuaWQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwYXVzZSgpIHtcclxuICAgICAgICB0aGlzLl9pc1BhdXNlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdW1lKCkge1xyXG4gICAgICAgIHRoaXMuX2lzUGF1c2VkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRDdXJyZW50U3RhdGUoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lRWxhcHNlZCA9IDBcclxuICAgICAgICBjb25zb2xlLmxvZyhjYy5qcy5mb3JtYXRTdHIoXCJbRlNNXSAlcyByZXNldCBjdXJyZW50U3RhdGVcIiwgdGhpcy50YXJnZXQuX19jbGFzc25hbWVfXykpXHJcbiAgICAgICAgdGhpcy5jLm9uRXhpdCgpO1xyXG4gICAgICAgIHRoaXMuYy5vbkVudGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU3RhdGUoc3RhdGVJZDogbnVtYmVyLCBwYXJhbXM/KSB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5fc3RhdGVzW3N0YXRlSWRdXHJcbiAgICAgICAgaWYgKHN0YXRlID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW0ZTTV0gaW52YWxpZCBzdGF0ZSBmb3Igc3RhdGVJZCBcIiArIHN0YXRlSWQgKyBcIiBvZiA6IFwiICsgdGhpcy50YXJnZXQuX19jbGFzc25hbWVfXylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5faXNQYXVzZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW0ZTTV0gZnNtIGlzIHBhdXNlZCAhIFwiICsgdGhpcy50YXJnZXQuX19jbGFzc25hbWVfXyArIFwiIGNoYW5nZVN0YXRlIHRvIDxcIiArIHN0YXRlLm5hbWUgKyBcIj4gZmFpbGVkIVwiKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYykge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGVJZCA9PSB0aGlzLmMuaWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9sb2cpIGNvbnNvbGUubG9nKHRoaXMudGFyZ2V0Ll9fY2xhc3NuYW1lX18gKyBcIiBhbHJlYWR5IGluIHN0YXRlIDpcIiArIHN0YXRlLm5hbWUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5jLm9uRXhpdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnAgPSB0aGlzLmM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZUVsYXBzZWQgPSAwXHJcbiAgICAgICAgdGhpcy5jID0gc3RhdGU7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xvZylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY2MuanMuZm9ybWF0U3RyKFwiW0ZTTV0gJXMgKCVzKTogJXMgLT4gJXNcIiwgdGhpcy50YXJnZXQuX19jbGFzc25hbWVfXywgdGhpcy5uYW1lLCB0aGlzLnAubmFtZSwgc3RhdGUubmFtZSkpXHJcbiAgICAgICAgdGhpcy5jLm9uRW50ZXIocGFyYW1zKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaXNJblN0YXRlKHN0YXRlSWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jID09IHRoaXMuX3N0YXRlc1tzdGF0ZUlkXVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc1BhdXNlZCkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChGU00uZGVidWcpXHJcbiAgICAgICAgICAgIGR0ID0gMC4wMTY7IC8vIHVzZSByZWFsIGRldGFcclxuICAgICAgICB0aGlzLnRpbWVFbGFwc2VkICs9IGR0O1xyXG4gICAgICAgIGlmICh0aGlzLmMpXHJcbiAgICAgICAgICAgIHRoaXMuYy5vblVwZGF0ZShkdCk7XHJcbiAgICB9XHJcbn0iXX0=