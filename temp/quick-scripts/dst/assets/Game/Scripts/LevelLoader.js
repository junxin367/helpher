
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/LevelLoader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcTGV2ZWxMb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkVBQXNFO0FBRWxFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFBO0FBRXpDO0lBQXlDLCtCQUFZO0lBQXJEOztJQVNBLENBQUM7SUFQRyw0QkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELDJCQUFLLEdBQUw7SUFFQSxDQUFDO0lBUmdCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FTL0I7SUFBRCxrQkFBQztDQVRELEFBU0MsQ0FUd0Msc0JBQVksR0FTcEQ7a0JBVG9CLFdBQVc7QUFXaEMsc0JBQVksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFDLGdCQUFnQixDQUFDLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJlZmFiTG9hZGVyIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdWkvY29udHJvbGxlci9QcmVmYWJMb2FkZXJcIjtcclxuXHJcbmxldCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsTG9hZGVyIGV4dGVuZHMgUHJlZmFiTG9hZGVyIHtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuUHJlZmFiTG9hZGVyLnJlZ2lzdGVyKExldmVsTG9hZGVyLFwiUHJlZmFicy9MZXZlbHNcIikiXX0=