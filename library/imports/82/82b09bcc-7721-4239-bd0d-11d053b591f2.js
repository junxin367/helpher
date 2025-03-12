"use strict";
cc._RF.push(module, '82b09vMdyFCOb0NEdBTtZHy', 'DCSprite');
// framework/ui/DCSprite.ts

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
var DCUI_1 = require("./DCUI");
var SpriteFrameCache_1 = require("../misc/SpriteFrameCache");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, menu = _a.menu;
var DCSprite = /** @class */ (function (_super) {
    __extends(DCSprite, _super);
    function DCSprite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DCSprite.prototype.onLoad = function () {
        this.sprite = this.getComponent(cc.Sprite);
    };
    DCSprite.prototype.refreshSpriteFrame = function (v) {
        var _this = this;
        // this.sprite.spriteFrame = v;
        var spriteframe = SpriteFrameCache_1.default.instance.getSpriteFrame(v).then(function (sf) {
            _this.sprite.spriteFrame = sf;
        }).catch(function (_) { console.log("request imageUrl error :" + v); });
    };
    DCSprite.prototype.onValueChanged = function (v) {
        this.refreshSpriteFrame(v);
    };
    DCSprite = __decorate([
        ccclass,
        menu("DCUI/DCSprite"),
        requireComponent(cc.Sprite)
    ], DCSprite);
    return DCSprite;
}(DCUI_1.default));
exports.default = DCSprite;

cc._RF.pop();