"use strict";
cc._RF.push(module, 'bb872SONn1GWLqiBQ6LN12m', 'Thunder');
// Game/Scripts/Levels/Thunder.ts

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
var event_1 = require("../../../framework/core/event");
var Device_1 = require("../../../framework/misc/Device");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animation = null;
        _this.explode = null;
        _this.light_width = 50;
        return _this;
    }
    default_1.prototype.onLoad = function () {
        this.animation = this.getComponent(cc.Animation);
        this.explode = this.node.getChildByName("0");
    };
    default_1.prototype.play = function (fromNode, toNode, offset) {
        this.animation.play();
        Device_1.default.playSfx("lightling");
        // let from = ccUtil.getWorldPosition(fromNode);
        // let to = ccUtil.getWorldPosition(toNode)
        var from = fromNode.position.add(offset);
        var to = toNode.position.add(offset);
        this.node.setPosition(from);
        var toTarget = to.sub(from);
        var mag = toTarget.mag() * 4 / 5;
        // let s = this.node.getContentSize()
        this.node.setContentSize(mag, this.light_width);
        this.explode.setPosition(mag, 0);
        this.node.angle = Math.atan2(toTarget.y, toTarget.x) * cc.macro.DEG;
        return event_1.evt.sleep(0.2);
    };
    default_1.prototype.update = function () {
    };
    __decorate([
        property
    ], default_1.prototype, "light_width", void 0);
    default_1 = __decorate([
        ccclass("Thunder"),
        menu("Game/Effect/Thunder")
    ], default_1);
    return default_1;
}(cc.Component));
exports.default = default_1;

cc._RF.pop();