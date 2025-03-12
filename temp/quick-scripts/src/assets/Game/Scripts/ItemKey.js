"use strict";
cc._RF.push(module, 'c0cb0VvZCNA8q3LL+7jUnQZ', 'ItemKey');
// Game/Scripts/ItemKey.ts

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
var Door_1 = require("./Door");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemKey = /** @class */ (function (_super) {
    __extends(ItemKey, _super);
    function ItemKey() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.door = null;
        _this.light = null;
        _this.once = true;
        return _this;
    }
    ItemKey.prototype.onLoad = function () {
        this.light = this.node.getChildByName("light");
    };
    ItemKey.prototype.start = function () {
    };
    ItemKey.prototype.go = function () {
        if (!this.once) {
            return;
        }
        //先放大，再飞到门里去
        // let winsize = cc.director.getWinSize();
        this.light.destroy();
        // let pos = cc.visibleRect.center;
        var pos2 = this.door.node.position;
        cc.tween(this.node).to(0.5, { position: pos2 }, { easing: "sineInOut" }).call(this.onReachTarget.bind(this)).start();
        // cc.tween(this.node).to(1.0, { scale: 2 }).delay(1.2).to(1.0, { scale: 1 }).start();
    };
    ItemKey.prototype.onReachTarget = function () {
        this.door.unlock();
        this.node.destroy();
    };
    __decorate([
        property(Door_1.default)
    ], ItemKey.prototype, "door", void 0);
    ItemKey = __decorate([
        ccclass
    ], ItemKey);
    return ItemKey;
}(cc.Component));
exports.default = ItemKey;

cc._RF.pop();