"use strict";
cc._RF.push(module, '891b5WiKtdA/rjgKEjEmtMH', 'Door');
// Game/Scripts/Door.ts

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
var Device_1 = require("../../framework/misc/Device");
var ccUtil_1 = require("../../framework/utils/ccUtil");
var UserInfo_1 = require("../../framework/extension/weak_net_game/UserInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Door = /** @class */ (function (_super) {
    __extends(Door, _super);
    function Door() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anim = null;
        _this.collider = null;
        return _this;
    }
    Door.prototype.onLoad = function () {
        this.anim = this.getComponent(cc.Animation);
        this.collider = this.getComponent(cc.PhysicsCollider);
        var door1 = this.node.getChildByName("door");
        var door2 = this.node.getChildByName("door2");
        ccUtil_1.default.setDisplay(door1.getComponent(cc.Sprite), "Img/level/theme/men_" + UserInfo_1.UserInfo.theme);
        ccUtil_1.default.setDisplay(door2.getComponent(cc.Sprite), "Img/level/theme/men_" + UserInfo_1.UserInfo.theme);
    };
    Door.prototype.start = function () {
    };
    Door.prototype.unlock = function () {
        Device_1.default.playSfx("openthedoor");
        this.anim.play('unlock');
        if (this.collider) {
            this.collider.enabled = false;
        }
    };
    Door = __decorate([
        ccclass
    ], Door);
    return Door;
}(cc.Component));
exports.default = Door;

cc._RF.pop();