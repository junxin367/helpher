"use strict";
cc._RF.push(module, 'c54a7cm6XlB2b3eaP/Cgyq4', 'LevelLoader');
// Game/Scripts/LevelLoader.ts

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
var PrefabLoader_1 = require("../../framework/ui/controller/PrefabLoader");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelLoader = /** @class */ (function (_super) {
    __extends(LevelLoader, _super);
    function LevelLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelLoader.prototype.onLoad = function () {
    };
    LevelLoader.prototype.start = function () {
    };
    LevelLoader = __decorate([
        ccclass
    ], LevelLoader);
    return LevelLoader;
}(PrefabLoader_1.default));
exports.default = LevelLoader;
PrefabLoader_1.default.register(LevelLoader, "Prefabs/Levels");

cc._RF.pop();