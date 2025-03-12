
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/weak_net_game/IconSov.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '304c05WgkRMGI+yG5+X8WrK', 'IconSov');
// framework/extension/weak_net_game/IconSov.ts

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
var Switcher_1 = require("../../ui/controller/Switcher");
var WeakNetGame_1 = require("./WeakNetGame");
var mvcView_1 = require("../../ui/mvcView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var IconSov = /** @class */ (function (_super) {
    __extends(IconSov, _super);
    function IconSov() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.sovName = "";
        return _this;
    }
    IconSov.prototype.onLoad = function () {
        var _this = this;
        this.icon = this.getComponent(Switcher_1.default);
        this.register(this.icon, function () { return WeakNetGame_1.default.getChoice(_this.sovName); });
        // this.onVisible(this.icon.node, () => wegame.getStatus(CloudFuncType.ShareVideoIcon) == 0)
    };
    __decorate([
        property
    ], IconSov.prototype, "sovName", void 0);
    IconSov = __decorate([
        ccclass
    ], IconSov);
    return IconSov;
}(mvcView_1.default));
exports.default = IconSov;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHdlYWtfbmV0X2dhbWVcXEljb25Tb3YudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW9EO0FBQ3BELDZDQUF3QztBQUN4Qyw0Q0FBdUM7QUFFbkMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUE7QUFFekM7SUFBcUMsMkJBQU87SUFBNUM7UUFBQSxxRUFXQztRQVZHLFVBQUksR0FBYSxJQUFJLENBQUE7UUFHckIsYUFBTyxHQUFXLEVBQUUsQ0FBQTs7SUFPeEIsQ0FBQztJQU5HLHdCQUFNLEdBQU47UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBUSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGNBQU0sT0FBQSxxQkFBVyxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQTtRQUNuRSw0RkFBNEY7SUFDaEcsQ0FBQztJQUxEO1FBREMsUUFBUTs0Q0FDVztJQUpILE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FXM0I7SUFBRCxjQUFDO0NBWEQsQUFXQyxDQVhvQyxpQkFBTyxHQVczQztrQkFYb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTd2l0Y2hlciBmcm9tIFwiLi4vLi4vdWkvY29udHJvbGxlci9Td2l0Y2hlclwiO1xyXG5pbXBvcnQgV2Vha05ldEdhbWUgZnJvbSBcIi4vV2Vha05ldEdhbWVcIjtcclxuaW1wb3J0IG12Y1ZpZXcgZnJvbSBcIi4uLy4uL3VpL212Y1ZpZXdcIjtcclxuXHJcbmxldCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb25Tb3YgZXh0ZW5kcyBtdmNWaWV3IHtcclxuICAgIGljb246IFN3aXRjaGVyID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc292TmFtZTogc3RyaW5nID0gXCJcIlxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuaWNvbiA9IHRoaXMuZ2V0Q29tcG9uZW50KFN3aXRjaGVyKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKHRoaXMuaWNvbiwgKCkgPT4gV2Vha05ldEdhbWUuZ2V0Q2hvaWNlKHRoaXMuc292TmFtZSkpXHJcbiAgICAgICAgLy8gdGhpcy5vblZpc2libGUodGhpcy5pY29uLm5vZGUsICgpID0+IHdlZ2FtZS5nZXRTdGF0dXMoQ2xvdWRGdW5jVHlwZS5TaGFyZVZpZGVvSWNvbikgPT0gMClcclxuICAgIH1cclxuXHJcbn0iXX0=