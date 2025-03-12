"use strict";
cc._RF.push(module, '80e24UZAb5GD7eLDz/q0KWt', 'ParallaxNode');
// framework/misc/ParallaxNode.ts

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
var ccUtil_1 = require("../utils/ccUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var ParallaxNode = /** @class */ (function (_super) {
    __extends(ParallaxNode, _super);
    function ParallaxNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.offset = cc.v2(1, 1);
        _this.refrenceNode = null;
        _this.refrecenOffset = cc.Vec2.ZERO;
        _this.size = cc.winSize;
        _this.horizontal_repeat = true;
        _this.vertical_repeat = false;
        _this.inverted = false;
        _this.dir = 1;
        return _this;
    }
    ParallaxNode.prototype.onLoad = function () {
        this.dir = this.inverted ? -1 : 1;
    };
    //需要在将需要 复制的层放在组件所在节点的子节点下
    // 且该节点只能放在摄像机下 面  作为子节点 
    //camera ->this -> content
    ParallaxNode.prototype.start = function () {
        this.refrecenOffset = this.refrenceNode.position;
        //copy three children
        var child = this.node.children[0];
        this.size = child.getContentSize();
        if (this.horizontal_repeat) {
            var c1 = cc.instantiate(child);
            var c2 = cc.instantiate(child);
            c1.parent = this.node;
            c2.parent = this.node;
            c1.x = -child.width;
            c2.x = child.width;
        }
        else if (this.vertical_repeat) {
            var c1 = cc.instantiate(child);
            var c2 = cc.instantiate(child);
            c1.parent = this.node;
            c2.parent = this.node;
            c1.y = -child.height;
            c2.y = child.height;
        }
    };
    ParallaxNode.prototype.setBackground = function (backgroundUrl) {
        this.node.children.forEach(function (v) {
            var sp = v.getComponent(cc.Sprite);
            ccUtil_1.default.setDisplay(sp, backgroundUrl);
        });
    };
    ParallaxNode.prototype.update = function () {
        if (this.horizontal_repeat) {
            this.node.x = this.dir * (this.refrenceNode.x - this.refrecenOffset.x) * this.offset.x;
            this.node.x = this.node.x % this.size.width;
        }
        else if (this.vertical_repeat) {
            this.node.y = this.dir * (this.refrenceNode.y - this.refrecenOffset.y) * this.offset.y;
            this.node.y = this.node.y % this.size.height;
        }
        // this.node.y = this.node.y % this.size.height
    };
    __decorate([
        property
    ], ParallaxNode.prototype, "offset", void 0);
    __decorate([
        property(cc.Node)
    ], ParallaxNode.prototype, "refrenceNode", void 0);
    __decorate([
        property
    ], ParallaxNode.prototype, "horizontal_repeat", void 0);
    __decorate([
        property
    ], ParallaxNode.prototype, "vertical_repeat", void 0);
    __decorate([
        property
    ], ParallaxNode.prototype, "inverted", void 0);
    ParallaxNode = __decorate([
        ccclass,
        menu("其它/ParallaxNode")
    ], ParallaxNode);
    return ParallaxNode;
}(cc.Component));
exports.default = ParallaxNode;

cc._RF.pop();