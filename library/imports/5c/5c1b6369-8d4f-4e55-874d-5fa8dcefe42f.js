"use strict";
cc._RF.push(module, '5c1b6NpjU9OVYdNX6jc7+Qv', 'FrameSwitch');
// framework/misc/FrameSwitch.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
var FrameSwitcher = /** @class */ (function (_super) {
    __extends(FrameSwitcher, _super);
    function FrameSwitcher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.frames = [];
        // LIFE-CYCLE CALLBACKS:
        _this.target = null;
        _this._index = 0;
        _this.randomOnLoad = false;
        return _this;
        // update (dt) {}
    }
    FrameSwitcher.prototype.onLoad = function () {
        if (this.target == null)
            this.target = this.getComponent(cc.Sprite);
        if (this.randomOnLoad)
            this.switchRandom();
    };
    FrameSwitcher.prototype.switchRandom = function () {
        this.index = g.randomInt(0, this.frames.length);
    };
    Object.defineProperty(FrameSwitcher.prototype, "index", {
        get: function () {
            return this._index;
        },
        set: function (k) {
            this.switch(k);
        },
        enumerable: false,
        configurable: true
    });
    FrameSwitcher.prototype.switch = function (index) {
        var len = this.frames.length;
        var idx = Math.min(Math.max(0, index), len - 1);
        this.target.spriteFrame = this.frames[idx];
        this._index = idx;
    };
    FrameSwitcher.prototype.start = function () {
    };
    __decorate([
        property([cc.SpriteFrame])
    ], FrameSwitcher.prototype, "frames", void 0);
    __decorate([
        property(cc.Sprite)
    ], FrameSwitcher.prototype, "target", void 0);
    __decorate([
        property
    ], FrameSwitcher.prototype, "randomOnLoad", void 0);
    FrameSwitcher = __decorate([
        ccclass
    ], FrameSwitcher);
    return FrameSwitcher;
}(cc.Component));
exports.default = FrameSwitcher;

cc._RF.pop();