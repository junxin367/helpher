"use strict";
cc._RF.push(module, '54a31TIZXNNEZ83Ojhn4FS4', 'NumTrigger');
// framework/misc/NumTrigger.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriggerTimes = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TriggerPoint = /** @class */ (function () {
    function TriggerPoint(min, max, callback) {
        this.min = Number.MIN_VALUE;
        this.max = Number.MAX_VALUE;
        this.id = 0;
        this.triggered = false;
        this.min = min;
        this.max = max;
        this.callback = callback;
    }
    return TriggerPoint;
}());
var TriggerTimes;
(function (TriggerTimes) {
    TriggerTimes[TriggerTimes["ONCE"] = 1] = "ONCE";
    TriggerTimes[TriggerTimes["UNLIMITED"] = -1] = "UNLIMITED";
})(TriggerTimes = exports.TriggerTimes || (exports.TriggerTimes = {}));
var NumTrigger = /** @class */ (function () {
    function NumTrigger() {
        this.points = [];
        this.triggerType = TriggerTimes.ONCE;
    }
    NumTrigger.prototype.add = function (min, max, callback) {
        var a = new TriggerPoint(min, max, callback);
        // TODO:是否和已有的point 有交集
        this.points.push(a);
    };
    NumTrigger.prototype.reset = function () {
        this.points.forEach(function (v) { return v.triggered = false; });
    };
    NumTrigger.prototype.trigger = function (v, p) {
        if (p.triggered)
            return false;
        if (v >= p.min && v <= p.max) {
            if (this.triggerType == TriggerTimes.UNLIMITED) {
                this.reset();
            }
            p.triggered = true;
            p.callback();
            return true;
        }
        return false;
    };
    NumTrigger.prototype.update = function (v) {
        var _this = this;
        this.points.some(function (p) { return _this.trigger(v, p); });
    };
    NumTrigger = __decorate([
        ccclass
    ], NumTrigger);
    return NumTrigger;
}());
exports.default = NumTrigger;

cc._RF.pop();