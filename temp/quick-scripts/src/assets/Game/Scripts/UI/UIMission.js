"use strict";
cc._RF.push(module, '2a575O5zWlCzopIb9O9lPHR', 'UIMission');
// Game/Scripts/UI/UIMission.ts

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
var mvcView_1 = require("../../../framework/ui/mvcView");
var actionUtil_1 = require("../../../framework/utils/actionUtil");
var Game_1 = require("../Game");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIMission = /** @class */ (function (_super) {
    __extends(UIMission, _super);
    function UIMission() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
    }
    UIMission.prototype.onLoad = function () {
    };
    UIMission.prototype.onShown = function (text) {
        actionUtil_1.default.jellyJump2(this.node);
        this.label.string = text;
    };
    UIMission.prototype.click_close = function () {
        vm.hide(this);
    };
    UIMission.prototype.onHidden = function () {
        Game_1.default.instance.startGame();
    };
    __decorate([
        property(cc.Label)
    ], UIMission.prototype, "label", void 0);
    UIMission = __decorate([
        ccclass
    ], UIMission);
    return UIMission;
}(mvcView_1.default));
exports.default = UIMission;

cc._RF.pop();