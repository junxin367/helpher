"use strict";
cc._RF.push(module, 'b62dd4Yqn9N25kPcL9wVfsH', 'FlyToMagnet');
// Game/Scripts/items/FlyToMagnet.ts

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
var MoveEngine_1 = require("../../../framework/extension/movement/MoveEngine");
var Role_1 = require("../Role");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FlyToMagnet = /** @class */ (function (_super) {
    __extends(FlyToMagnet, _super);
    function FlyToMagnet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moveEngine = null;
        return _this;
    }
    FlyToMagnet.prototype.onLoad = function () {
        this.moveEngine = this.getOrAddComponent(MoveEngine_1.default);
    };
    FlyToMagnet.prototype.onEnable = function () {
        this.moveEngine.changeBeheavior(MoveEngine_1.Behavior.Arrive);
    };
    FlyToMagnet.prototype.onDisable = function () {
        this.moveEngine.changeBeheavior(MoveEngine_1.Behavior.Simple);
    };
    FlyToMagnet.prototype.update = function () {
        var pos = Role_1.default.self.node.getPosition();
        pos.y += 100;
        this.moveEngine.target = pos;
    };
    FlyToMagnet = __decorate([
        ccclass
    ], FlyToMagnet);
    return FlyToMagnet;
}(cc.Component));
exports.default = FlyToMagnet;

cc._RF.pop();