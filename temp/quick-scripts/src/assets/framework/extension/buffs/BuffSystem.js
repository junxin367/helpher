"use strict";
cc._RF.push(module, 'dd6449kM+ZJj6PrSquOOOZI', 'BuffSystem');
// framework/extension/buffs/BuffSystem.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buffSystem = void 0;
var EmptyBuff_1 = require("./EmptyBuff");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * TODO:
// BuffManager.register(OutputSpeedupBuff, ()=>PlayerInfo.buff_outputSpeed = this.timeLeft);
 */
exports.buffSystem = null;
var BuffSystem = /** @class */ (function (_super) {
    __extends(BuffSystem, _super);
    function BuffSystem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buffs = {};
        return _this;
    }
    BuffSystem_1 = BuffSystem;
    BuffSystem.prototype.onLoad = function () {
        exports.buffSystem = this;
        this.load();
    };
    BuffSystem.prototype.onEnable = function () {
        this.schedule(this.step, 1);
    };
    BuffSystem.prototype.onDisable = function () {
        this.unschedule(this.step);
    };
    BuffSystem.prototype.step = function () {
        var now = Date.now() / 1000;
        for (var i in this.buffs) {
            var buf = this.buffs[i];
            if (buf.isEnabled) {
                buf.doStep(now);
                if (!buf.isEnabled) {
                    buf.disable();
                }
            }
        }
    };
    BuffSystem.register = function (name, cls, data) {
        if (data === void 0) { data = null; }
        BuffSystem_1.buff_cls[name] = cls;
        BuffSystem_1.buff_cls_data[name] = data;
    };
    BuffSystem.prototype._create = function (buffname) {
        var cls = BuffSystem_1.buff_cls[buffname];
        if (cls == null) {
            if (typeof (buffname) == "string") {
                console.error("[BuffSystem]:" + buffname + "未注册 ！");
                return new EmptyBuff_1.default();
            }
            else {
                return new buffname;
            }
        }
        else {
            var data = BuffSystem_1.buff_cls_data[buffname];
            var buff = new cls();
            buff.name = buffname;
            buff.data = data;
            return buff;
        }
    };
    BuffSystem.prototype.getBuff = function (buffname) {
        var buf = this.buffs[buffname];
        if (!buf) {
            buf = this._create(buffname);
            this.buffs[buffname] = buf;
        }
        return buf;
    };
    /**第一个参数 必然是duration  */
    BuffSystem.prototype.startBuff = function (buffname) {
        var a = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            a[_i - 1] = arguments[_i];
        }
        var buf = this.getBuff(buffname);
        if (buf.isEnabled) {
            if (buf.canAdd) {
                buf.addLife(a[0]);
            }
            else {
                buf.resetLife();
            }
        }
        else {
            buf.enable.apply(buf, a);
        }
        return buf;
    };
    BuffSystem.prototype.stop = function (buffname) {
        var buf = this.getBuff(buffname);
        if (buf.isEnabled)
            buf.disable();
    };
    BuffSystem.prototype.save = function () {
        console.log(this.buffs);
        for (var k in this.buffs) {
            var v = this.buffs[k];
            v.save();
        }
        //保存离线时间 
        localStorage.setItem("buffSys.lastTime", Date.now().toString());
    };
    BuffSystem.prototype.load = function () {
        var last = localStorage.getItem("buffSys.lastTime");
        var lastTime;
        if (last == null || last == "") {
            lastTime = Date.now();
        }
        else {
            lastTime = parseInt(last);
        }
        var now = Date.now();
        var offset = (now - lastTime) / 1000;
        if (offset < 0)
            return;
        for (var k in BuffSystem_1.buff_cls) {
            var inst = this.getBuff(k);
            if (inst) {
                inst.load(offset);
                inst.recovery();
            }
            else {
                console.warn("error load buff:" + k);
            }
        }
    };
    var BuffSystem_1;
    BuffSystem.buff_cls = {};
    BuffSystem.buff_cls_data = {};
    BuffSystem = BuffSystem_1 = __decorate([
        ccclass
    ], BuffSystem);
    return BuffSystem;
}(cc.Component));
exports.default = BuffSystem;

cc._RF.pop();