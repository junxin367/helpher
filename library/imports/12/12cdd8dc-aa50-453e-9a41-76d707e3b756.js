"use strict";
cc._RF.push(module, '12cddjcqlBFPppBdtcH47dW', 'PlayController');
// framework/misc/PlayController.ts

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
var PlayController = /** @class */ (function (_super) {
    __extends(PlayController, _super);
    function PlayController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isTouching = false;
        _this.canHolding = false;
        _this.holdingSigal = new Signal_1.default();
        _this.pressSignal = new Signal_1.default();
        _this.releaseSignal = new Signal_1.default();
        _this.pos = cc.Vec2.ZERO;
        return _this;
    }
    PlayController.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onEnd, this);
    };
    PlayController.prototype.onDestroy = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onBegan, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onEnd, this);
    };
    PlayController.prototype.start = function () {
    };
    PlayController.prototype.onBegan = function (e) {
        this.isTouching = true;
        this.pressSignal.fire();
        var p = e.touch.getLocation();
        p = this.node.convertToNodeSpaceAR(p);
        this.pos = p;
    };
    PlayController.prototype.onMove = function (e) {
        var p = e.touch.getLocation();
        p = this.node.convertToNodeSpaceAR(p);
        this.pos = p;
    };
    PlayController.prototype.onEnd = function () {
        this.isTouching = false;
        this.releaseSignal.fire();
    };
    PlayController.prototype.update = function () {
        if (this.canHolding && this.isTouching) {
            this.holdingSigal.fire(this.pos);
        }
    };
    __decorate([
        property
    ], PlayController.prototype, "canHolding", void 0);
    __decorate([
        property(cc.Vec2)
    ], PlayController.prototype, "pos", void 0);
    PlayController = __decorate([
        ccclass,
        menu("其它/PlayController")
    ], PlayController);
    return PlayController;
}(cc.Component));
exports.default = PlayController;

cc._RF.pop();