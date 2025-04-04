"use strict";
cc._RF.push(module, '545f7vJGkJFTJqgF1+IFtC8', 'EffectLoader');
// Game/Scripts/Levels/EffectLoader.ts

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
var ccUtil_1 = require("../../../framework/utils/ccUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EffectLoader = /** @class */ (function (_super) {
    __extends(EffectLoader, _super);
    function EffectLoader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path = "";
        return _this;
    }
    EffectLoader.prototype.onLoad = function () {
    };
    EffectLoader.prototype.start = function () {
        var _this = this;
        ccUtil_1.default.getRes(this.path, cc.Prefab).then(function (v) {
            var node = cc.instantiate(v);
            node.parent = _this.node;
        });
    };
    __decorate([
        property
    ], EffectLoader.prototype, "path", void 0);
    EffectLoader = __decorate([
        ccclass
    ], EffectLoader);
    return EffectLoader;
}(cc.Component));
exports.default = EffectLoader;

cc._RF.pop();