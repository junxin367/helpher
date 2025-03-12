"use strict";
cc._RF.push(module, '977e10uu7ZMsqqaBe5sSFqA', 'SWeapon');
// framework/extension/shooter/SWeapon.ts

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
var SFireAgent_1 = require("./SFireAgent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SWeapon = /** @class */ (function (_super) {
    __extends(SWeapon, _super);
    function SWeapon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fireAgents = [];
        return _this;
    }
    SWeapon.prototype.onLoad = function () {
        this.fireAgents = this.getComponentsInChildren(SFireAgent_1.default);
    };
    SWeapon.prototype.fire = function (rotation) {
        for (var i in this.fireAgents) {
            var agent = this.fireAgents[i];
            agent.fire(rotation);
        }
    };
    SWeapon.prototype.pause = function () {
        this.fireAgents.forEach(function (v) { return v.paused = true; });
    };
    SWeapon.prototype.resume = function () {
        this.fireAgents.forEach(function (v) { return v.paused = false; });
    };
    SWeapon = __decorate([
        ccclass
    ], SWeapon);
    return SWeapon;
}(cc.Component));
exports.default = SWeapon;

cc._RF.pop();