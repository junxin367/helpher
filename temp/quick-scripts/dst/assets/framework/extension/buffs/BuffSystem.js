
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/buffs/BuffSystem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXGJ1ZmZzXFxCdWZmU3lzdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSx5Q0FBb0M7QUFDOUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUM7OztHQUdHO0FBR1EsUUFBQSxVQUFVLEdBQWUsSUFBSSxDQUFDO0FBR3pDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBdUhDO1FBdEhXLFdBQUssR0FBa0MsRUFBRSxDQUFBOztJQXNIckQsQ0FBQzttQkF2SG9CLFVBQVU7SUFNM0IsMkJBQU0sR0FBTjtRQUNJLGtCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRVMsNkJBQVEsR0FBbEI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVTLDhCQUFTLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVTLHlCQUFJLEdBQWQ7UUFDSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQzVCLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN0QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3ZCLElBQUksR0FBRyxDQUFDLFNBQVMsRUFBRTtnQkFDZixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRTtvQkFDaEIsR0FBRyxDQUFD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c0NvbnRlbnQiOlsiaW1wb3J0IEJ1ZmZCYXNlIGZyb20gXCIuL0J1ZmZcIjtcclxuXHJcbmltcG9ydCBCdWZmIGZyb20gXCIuL0J1ZmZcIjtcclxuaW1wb3J0IEVtcHR5QnVmZiBmcm9tIFwiLi9FbXB0eUJ1ZmZcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuLyoqXHJcbiAqIFRPRE86XHJcbi8vIEJ1ZmZNYW5hZ2VyLnJlZ2lzdGVyKE91dHB1dFNwZWVkdXBCdWZmLCAoKT0+UGxheWVySW5mby5idWZmX291dHB1dFNwZWVkID0gdGhpcy50aW1lTGVmdCk7XHJcbiAqL1xyXG5cclxuXHJcbmV4cG9ydCBsZXQgYnVmZlN5c3RlbTogQnVmZlN5c3RlbSA9IG51bGw7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWZmU3lzdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgYnVmZnM6IHsgW2luZGV4OiBzdHJpbmddOiBCdWZmQmFzZSB9ID0ge31cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBidWZmX2NscyA9IHt9XHJcbiAgICBwcml2YXRlIHN0YXRpYyBidWZmX2Nsc19kYXRhID0ge31cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgYnVmZlN5c3RlbSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5zdGVwLCAxKVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuc3RlcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0ZXAoKSB7XHJcbiAgICAgICAgbGV0IG5vdyA9IERhdGUubm93KCkgLyAxMDAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5idWZmcykge1xyXG4gICAgICAgICAgICBsZXQgYnVmID0gdGhpcy5idWZmc1tpXVxyXG4gICAgICAgICAgICBpZiAoYnVmLmlzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgYnVmLmRvU3RlcChub3cpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFidWYuaXNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmLmRpc2FibGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyKG5hbWUsIGNscywgZGF0YSA9IG51bGwpIHtcclxuICAgICAgICBCdWZmU3lzdGVtLmJ1ZmZfY2xzW25hbWVdID0gY2xzO1xyXG4gICAgICAgIEJ1ZmZTeXN0ZW0uYnVmZl9jbHNfZGF0YVtuYW1lXSA9IGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlKGJ1ZmZuYW1lKSB7XHJcbiAgICAgICAgbGV0IGNscyA9IEJ1ZmZTeXN0ZW0uYnVmZl9jbHNbYnVmZm5hbWVdO1xyXG4gICAgICAgIGlmIChjbHMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIChidWZmbmFtZSkgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltCdWZmU3lzdGVtXTpcIiArIGJ1ZmZuYW1lICsgXCLmnKrms6jlhowg77yBXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVtcHR5QnVmZigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBidWZmbmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gQnVmZlN5c3RlbS5idWZmX2Nsc19kYXRhW2J1ZmZuYW1lXVxyXG4gICAgICAgICAgICBsZXQgYnVmZiA9IG5ldyBjbHMoKSBhcyBCdWZmO1xyXG4gICAgICAgICAgICBidWZmLm5hbWUgPSBidWZmbmFtZTtcclxuICAgICAgICAgICAgYnVmZi5kYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgcmV0dXJuIGJ1ZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEJ1ZmYoYnVmZm5hbWUpIHtcclxuICAgICAgICBsZXQgYnVmID0gdGhpcy5idWZmc1tidWZmbmFtZV1cclxuICAgICAgICBpZiAoIWJ1Zikge1xyXG4gICAgICAgICAgICBidWYgPSB0aGlzLl9jcmVhdGUoYnVmZm5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1ZmZzW2J1ZmZuYW1lXSA9IGJ1ZlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnVmO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuesrOS4gOS4quWPguaVsCDlv4XnhLbmmK9kdXJhdGlvbiAgKi9cclxuICAgIHN0YXJ0QnVmZihidWZmbmFtZSwgLi4uYSkge1xyXG4gICAgICAgIGxldCBidWYgPSB0aGlzLmdldEJ1ZmYoYnVmZm5hbWUpO1xyXG4gICAgICAgIGlmIChidWYuaXNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIGlmIChidWYuY2FuQWRkKSB7XHJcbiAgICAgICAgICAgICAgICBidWYuYWRkTGlmZShhWzBdKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnVmLnJlc2V0TGlmZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnVmLmVuYWJsZSguLi5hKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnVmO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdG9wKGJ1ZmZuYW1lKSB7XHJcbiAgICAgICAgbGV0IGJ1ZiA9IHRoaXMuZ2V0QnVmZihidWZmbmFtZSlcclxuICAgICAgICBpZiAoYnVmLmlzRW5hYmxlZClcclxuICAgICAgICAgICAgYnVmLmRpc2FibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYnVmZnMpO1xyXG4gICAgICAgIGZvciAodmFyIGsgaW4gdGhpcy5idWZmcykge1xyXG4gICAgICAgICAgICBsZXQgdiA9IHRoaXMuYnVmZnNba107XHJcbiAgICAgICAgICAgIHYuc2F2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+S/neWtmOemu+e6v+aXtumXtCBcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJ1ZmZTeXMubGFzdFRpbWVcIiwgRGF0ZS5ub3coKS50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbG9hZCgpIHtcclxuICAgICAgICBsZXQgbGFzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYnVmZlN5cy5sYXN0VGltZVwiKVxyXG4gICAgICAgIGxldCBsYXN0VGltZTtcclxuICAgICAgICBpZiAobGFzdCA9PSBudWxsIHx8IGxhc3QgPT0gXCJcIikge1xyXG4gICAgICAgICAgICBsYXN0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGFzdFRpbWUgPSBwYXJzZUludChsYXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5vdyA9IERhdGUubm93KCk7XHJcbiAgICAgICAgbGV0IG9mZnNldCA9IChub3cgLSBsYXN0VGltZSkgLyAxMDAwO1xyXG4gICAgICAgIGlmIChvZmZzZXQgPCAwKSByZXR1cm47XHJcbiAgICAgICAgZm9yICh2YXIgayBpbiBCdWZmU3lzdGVtLmJ1ZmZfY2xzKSB7XHJcbiAgICAgICAgICAgIGxldCBpbnN0ID0gdGhpcy5nZXRCdWZmKGspO1xyXG4gICAgICAgICAgICBpZiAoaW5zdCkge1xyXG4gICAgICAgICAgICAgICAgaW5zdC5sb2FkKG9mZnNldCk7XHJcbiAgICAgICAgICAgICAgICBpbnN0LnJlY292ZXJ5KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJlcnJvciBsb2FkIGJ1ZmY6XCIgKyBrKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==