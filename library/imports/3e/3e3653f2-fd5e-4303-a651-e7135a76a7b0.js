"use strict";
cc._RF.push(module, '3e365Py/V5DA6ZR5xNadqew', 'TouchStartGame');
// Game/Scripts/TouchStartGame.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchStartGame = /** @class */ (function (_super) {
    __extends(TouchStartGame, _super);
    function TouchStartGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startBtn = null;
        _this.moveMaxDistance = 100;
        _this._distance = 0;
        _this._x = 0;
        _this._y = 0;
        return _this;
    }
    TouchStartGame.prototype.onLoad = function () {
        this.node.on('touchstart', this.onBgTouchStart, this);
        this.node.on('touchend', this.onBgTouchEnd, this);
    };
    TouchStartGame.prototype.onDestroy = function () {
        this.node.off('touchstart', this.onBgTouchStart, this);
        this.node.off('touchend', this.onBgTouchEnd, this);
    };
    TouchStartGame.prototype.onBgTouchStart = function (event) {
        var pos = event.getLocation();
        // cc.log(`x: ${pos.x} y: ${pos.y}`)
        this._x = pos.x;
        this._y = pos.y;
    };
    TouchStartGame.prototype.onBgTouchEnd = function (event) {
        var pos = event.getLocation();
        // cc.log(`x: ${pos.x} y: ${pos.y}`)
        var x = Math.abs(pos.x - this._x);
        var y = Math.abs(pos.y - this._y);
        if (x < this.moveMaxDistance && y < this.moveMaxDistance) {
            this.startBtn.clickEvents[0].emit(['click']);
        }
    };
    __decorate([
        property({ type: cc.Button, tooltip: '模拟点击的按钮，**记得去掉Button前面的勾**' })
    ], TouchStartGame.prototype, "startBtn", void 0);
    __decorate([
        property({ tooltip: '上下最大移动距离' })
    ], TouchStartGame.prototype, "moveMaxDistance", void 0);
    TouchStartGame = __decorate([
        ccclass
    ], TouchStartGame);
    return TouchStartGame;
}(cc.Component));
exports.default = TouchStartGame;

cc._RF.pop();