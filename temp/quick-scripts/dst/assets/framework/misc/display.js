
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/display.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '07ab0RTdNlM0ZZ3ioGfIlMT', 'display');
// framework/misc/display.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var display = /** @class */ (function () {
    function display() {
    }
    display.lazyInit = function () {
        if (!this._inited) {
            var size = cc.director.getWinSize();
            this._width = size.width;
            this._height = size.height;
            this._hw = this._width / 2;
            this._hh = this._height / 2;
            this._inited = true;
        }
    };
    Object.defineProperty(display, "center", {
        get: function () {
            this.lazyInit();
            return cc.v2(this.hw, this.hh, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(display, "leftTop", {
        get: function () {
            this.lazyInit();
            return cc.v2(0, this._height, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(display, "hw", {
        get: function () {
            this.lazyInit();
            return this._hw;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(display, "hh", {
        get: function () {
            this.lazyInit();
            return this._hh;
        },
        enumerable: false,
        configurable: true
    });
    display._width = 0;
    display._height = 0;
    display._hw = 0;
    display._hh = 0;
    display._inited = false;
    return display;
}());
exports.default = display;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxkaXNwbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7SUFBQTtJQThDQSxDQUFDO0lBbkNVLGdCQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUVmLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMzQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1lBQzFCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUE7WUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBRUQsc0JBQVcsaUJBQU07YUFBakI7WUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLGtCQUFPO2FBQWxCO1lBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hCLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTtJQUdELHNCQUFXLGFBQUU7YUFBYjtZQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFHRCxzQkFBVyxhQUFFO2FBQWI7WUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBekNNLGNBQU0sR0FBVyxDQUFDLENBQUM7SUFDbkIsZUFBTyxHQUFXLENBQUMsQ0FBQztJQUdwQixXQUFHLEdBQVcsQ0FBQyxDQUFDO0lBQ2hCLFdBQUcsR0FBVyxDQUFDLENBQUM7SUFFaEIsZUFBTyxHQUFZLEtBQUssQ0FBQztJQXFDcEMsY0FBQztDQTlDRCxBQThDQyxJQUFBO2tCQTlDb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBkaXNwbGF5IHtcclxuXHJcbiAgICBzdGF0aWMgX3dpZHRoOiBudW1iZXIgPSAwO1xyXG4gICAgc3RhdGljIF9oZWlnaHQ6IG51bWJlciA9IDA7XHJcblxyXG5cclxuICAgIHN0YXRpYyBfaHc6IG51bWJlciA9IDA7XHJcbiAgICBzdGF0aWMgX2hoOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHN0YXRpYyBfaW5pdGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgc3RhdGljIGxhenlJbml0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5pdGVkKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc2l6ZSA9IGNjLmRpcmVjdG9yLmdldFdpblNpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5fd2lkdGggPSBzaXplLndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLl9oZWlnaHQgPSBzaXplLmhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5faHcgPSB0aGlzLl93aWR0aCAvIDJcclxuICAgICAgICAgICAgdGhpcy5faGggPSB0aGlzLl9oZWlnaHQgLyAyXHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgY2VudGVyKCkge1xyXG4gICAgICAgIHRoaXMubGF6eUluaXQoKTtcclxuICAgICAgICByZXR1cm4gY2MudjIodGhpcy5odywgdGhpcy5oaCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBsZWZ0VG9wKCkge1xyXG4gICAgICAgIHRoaXMubGF6eUluaXQoKTtcclxuICAgICAgICByZXR1cm4gY2MudjIoMCwgdGhpcy5faGVpZ2h0LCAwKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIGdldCBodygpIHtcclxuICAgICAgICB0aGlzLmxhenlJbml0KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h3O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGhoKCkge1xyXG4gICAgICAgIHRoaXMubGF6eUluaXQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGg7XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==