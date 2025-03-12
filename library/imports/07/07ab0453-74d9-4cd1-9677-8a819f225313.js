"use strict";
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