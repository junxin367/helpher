"use strict";
cc._RF.push(module, '828e0jqHZ1IU5KmJfkZXpaH', 'LongTouch');
// framework/misc/LongTouch.ts

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
var Signal_1 = require("../core/Signal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
var LongTouch = /** @class */ (function (_super) {
    __extends(LongTouch, _super);
    function LongTouch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pressedTime = 0;
        _this.isPressing = false;
        _this.targetTime = 1;
        _this.onLongTouch = new Signal_1.default();
        return _this;
    }
    LongTouch.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this);
    };
    LongTouch.prototype.start = function () { };
    LongTouch.prototype.onTouchBegan = function (e) {
        this.pressedTime = 0;
        this.isPressing = true;
        e.stopPropagation();
    };
    LongTouch.prototype.update = function (dt) {
        if (this.isPressing) {
            this.pressedTime += dt;
            if (this.pressedTime >= this.targetTime) {
                this.onLongTouch.fire();
                this.pressedTime = 0;
            }
        }
    };
    LongTouch.prototype.onTouchEnded = function () {
        this.isPressing = false;
    };
    LongTouch.prototype.waitForPress = function (duration) {
        this.targetTime = duration;
        return this.onLongTouch.wait();
    };
    __decorate([
        property
    ], LongTouch.prototype, "targetTime", void 0);
    LongTouch = __decorate([
        ccclass
    ], LongTouch);
    return LongTouch;
}(cc.Component));
exports.default = LongTouch;

cc._RF.pop();