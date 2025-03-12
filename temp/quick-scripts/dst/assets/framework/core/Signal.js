
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/core/Signal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxjb3JlXFxTaWduYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFHSSxnQkFBWSxDQUFFLEVBQUUsQ0FBRTtRQUZsQixpQkFBWSxHQUFlLEVBQUUsQ0FBQTtRQW9EN0IsbUJBQWMsR0FBUSxJQUFJLENBQUM7SUFqRDNCLENBQUM7SUFDTCw4QkFBOEI7SUFDOUIsNENBQTRDO0lBQzVDLDRCQUE0QjtJQUM1QiwwQ0FBMEM7SUFDdEMsb0JBQUcsR0FBSCxVQUFJLENBQVcsRUFBRSxDQUFFO1FBQ2YsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFBO1FBQ2hFLElBQUksQ0FBQyxRQUFRO1lBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUEsRUFBRSxDQUFDLEdBQUEsRUFBRSxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUVELHVCQUFNLEdBQU4sVUFBTyxDQUFXLEVBQUUsQ0FBRTtRQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQXBCLENBQW9CLENBQUMsQ0FBQTtJQUMzRSxDQUFDO0lBRUQscUJBQUksR0FBSjs7UUFBSyxZQUFLO2FBQUwsVUFBSyxFQUFMLHFCQUFLLEVBQUwsSUFBSztZQUFMLHVCQUFLOztRQUNOLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsQ0FBQSxLQUFBLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxJQUFJLDJCQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUssRUFBRSxHQUFFOztnQkFFckIsT0FBTyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNwRDtJQUVMLENBQUM7SUFFRCxtQkFBRSxHQUFGLFVBQUcsQ0FBVyxFQUFFLENBQUU7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBQ0Qsb0JBQUcsR0FBSCxVQUFJLENBQVcsRUFBRSxDQUFFO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELHNCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQTtJQUU5QixDQUFDO0lBRUQscUJBQUksR0FBSixVQUFLLFFBQVEsRUFBRSxjQUFjO1FBQTdCLGlCQU9DO1FBTkcsSUFBSSxDQUFDLEdBQUc7WUFDSixLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsUUFBUSxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQTtRQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUlELHVCQUFNLEdBQU47UUFDSSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFFRCxxQkFBSSxHQUFKO1FBQUEsaUJBSUM7UUFIRyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0wsYUFBQztBQUFELENBbkVBLEFBbUVDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduYWwge1xyXG4gICAgYWxsUmVjZWl2ZXJzOiB7IGMsIHQgfVtdID0gW11cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjPywgdD8pIHtcclxuICAgIH1cclxuLy/nlLXlrZDpgq7ku7ZwdWhhbHNraWpzZW1lbkBnbWFpbC5jb21cclxuLy/mupDnoIHnvZHnq5kg5byAdnBu5YWo5bGA5qih5byP5omT5byAIGh0dHA6Ly93ZWIzaW5jdWJhdG9ycy5jb20vXHJcbi8v55S15oqlaHR0cHM6Ly90Lm1lL2dhbWVjb2RlOTk5XHJcbi8v572R6aG15a6i5pyNIGh0dHA6Ly93ZWIzaW5jdWJhdG9ycy5jb20va2VmdS5odG1sXHJcbiAgICBhZGQoYzogRnVuY3Rpb24sIHQ/KSB7XHJcbiAgICAgICAgbGV0IHJlY2VpdmVyID0gdGhpcy5hbGxSZWNlaXZlcnMuZmluZCh2ID0+IHYuYyA9PSBjICYmIHYudCA9PSB0KVxyXG4gICAgICAgIGlmICghcmVjZWl2ZXIpXHJcbiAgICAgICAgICAgIHRoaXMuYWxsUmVjZWl2ZXJzLnB1c2goeyBjLCB0IH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKGM6IEZ1bmN0aW9uLCB0Pykge1xyXG4gICAgICAgIHRoaXMuYWxsUmVjZWl2ZXJzID0gdGhpcy5hbGxSZWNlaXZlcnMuZmlsdGVyKHYgPT4gdi5jICE9IGMgJiYgdi50ICE9IHQpXHJcbiAgICB9XHJcblxyXG4gICAgZmlyZSguLi5wcykge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hbGxSZWNlaXZlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHYgPSB0aGlzLmFsbFJlY2VpdmVyc1tpXTtcclxuICAgICAgICAgICAgaWYgKHYuYylcclxuICAgICAgICAgICAgICAgIHYuYy5jYWxsKHYudCwgLi4ucHMpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJub3QgZm91bmQgY2FsbGJhY2sgXCIsIHYuYywgdi50KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb24oYzogRnVuY3Rpb24sIHQ/KSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoYywgdCk7XHJcbiAgICAgICAgdGhpcy5hZGQoYywgdCk7XHJcbiAgICB9XHJcbiAgICBvZmYoYzogRnVuY3Rpb24sIHQ/KSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoYywgdCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5hbGxSZWNlaXZlcnMuc3BsaWNlKDApO1xyXG4gICAgICAgIHRoaXMucmVqZWN0Q2FsbGJhY2sgPSBudWxsXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uY2UoY2FsbGJhY2ssIHJlamVjdENhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IGggPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGgpO1xyXG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlamVjdENhbGxiYWNrID0gcmVqZWN0Q2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5hZGQoaCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVqZWN0Q2FsbGJhY2s6IGFueSA9IG51bGw7XHJcblxyXG4gICAgY2FuY2VsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlamVjdENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVqZWN0Q2FsbGJhY2soXCJjYW5jZWxlZFwiKVxyXG4gICAgICAgICAgICB0aGlzLnJlamVjdENhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2FpdCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uY2UocmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59Il19