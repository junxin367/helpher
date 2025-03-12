"use strict";
cc._RF.push(module, '277f8bZ6jxEILrygYg/BjNi', 'Buff');
// framework/extension/buffs/Buff.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Signal_1 = require("../../core/Signal");
var EventType;
(function (EventType) {
    EventType[EventType["Start"] = 0] = "Start";
    EventType[EventType["End"] = 1] = "End";
    EventType[EventType["Update"] = 2] = "Update";
})(EventType || (EventType = {}));
var Buff = /** @class */ (function () {
    function Buff() {
        var _a;
        this.duration = 10;
        this.finished = true;
        this.timeLeft = 0;
        //buff 名称 
        this.name = "";
        /** 可叠加 */
        this.canAdd = false;
        /** 最多可叠加 多长时间 */
        this.maxDuration = 0;
        //buff 刷新 间隔
        this.interval = 1;
        this.signals = (_a = {},
            _a[EventType.Start] = new Signal_1.default(),
            _a[EventType.End] = new Signal_1.default(),
            _a[EventType.Update] = new Signal_1.default(),
            _a);
        this.beganTimeSec = 0;
    }
    Object.defineProperty(Buff.prototype, "isEnabled", {
        get: function () {
            return this.timeLeft > 0;
        },
        enumerable: false,
        configurable: true
    });
    Buff.prototype.step = function () { };
    Buff.prototype.onRecovery = function () { };
    Buff.prototype.onReset = function () { };
    Buff.prototype.save = function () { };
    Buff.prototype.load = function (offlineSec) { };
    Buff.prototype.pause = function () {
    };
    Buff.prototype.resume = function () {
    };
    Buff.prototype.on = function (type, callback, target) {
        this.signals[type].add(callback, target);
    };
    Buff.prototype.off = function (type, callback, target) {
        this.signals[type].remove(callback, target);
    };
    Buff.prototype._emit = function (type) {
        var _a;
        var ps = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            ps[_i - 1] = arguments[_i];
        }
        (_a = this.signals[type]).fire.apply(_a, ps);
    };
    /**增加buff 生命周期  */
    Buff.prototype.addLife = function (life) {
        // if (this.duration + life < this.maxDuration) {
        this.duration += life;
        this.timeLeft += life;
        // }
    };
    Buff.prototype.recovery = function () {
        if (this.timeLeft <= 0)
            return;
        this.duration = this.timeLeft;
        this.finished = false;
        this.beganTimeSec = Date.now() / 1000;
        this.onRecovery();
        this.onTimeLeftChanged();
        console.warn("[BuffSystem]恢复buff:" + "[" + this.name + "]", this.duration);
    };
    /**重置 buff 生命 周期  */
    Buff.prototype.resetLife = function () {
        this.beganTimeSec = Date.now() / 1000;
        this.finished = false;
        this.timeLeft = this.duration;
        this.onReset();
    };
    Buff.prototype.enable = function (duration) {
        var a = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            a[_i - 1] = arguments[_i];
        }
        this.duration = parseInt(duration) || this.duration;
        this.resetLife();
        this.onEnabled.apply(this, a);
        this.onTimeLeftChanged();
        this._emit(EventType.Start, this);
        console.warn("[BuffSystem]开启buff:" + "[" + this.name + "]", this.duration);
    };
    Buff.prototype.disable = function () {
        this.finished = true;
        this.timeLeft = 0;
        try {
            this.onDisabled();
            this.onTimeLeftChanged();
        }
        catch (e) {
            console.warn(e);
        }
        this._emit(EventType.End, this);
        console.warn("[BuffSystem]关闭buff:" + "[" + this.name + "]");
    };
    Buff.prototype.doStep = function (now) {
        if (this.finished)
            return;
        if (this.timeLeft > 0) {
            this.timeLeft = this.duration - (now - this.beganTimeSec);
            this.step();
            this._emit(EventType.Update, this);
            this.onTimeLeftChanged();
        }
    };
    Buff.EventType = EventType;
    return Buff;
}());
exports.default = Buff;

cc._RF.pop();