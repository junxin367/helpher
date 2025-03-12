
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIUnlock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2c6e3bF5fxEQr95FFZZfR5D', 'UIUnlock');
// Game/Scripts/UI/UIUnlock.ts

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
var LoadingScene_1 = require("../Common/Base/LoadingScene");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIUnlock = /** @class */ (function (_super) {
    __extends(UIUnlock, _super);
    function UIUnlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIUnlock.prototype.onLoad = function () {
    };
    UIUnlock.prototype.onShow = function () {
    };
    UIUnlock.prototype.click_tomain = function () {
        LoadingScene_1.default.goto("Main");
        PlayerInfo_1.PlayerInfo.isInGuide = true;
    };
    UIUnlock = __decorate([
        ccclass
    ], UIUnlock);
    return UIUnlock;
}(mvcView_1.default));
exports.default = UIUnlock;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJVW5sb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUFvRDtBQUVwRCw0REFBdUQ7QUFDdkQsd0RBQXVEO0FBR2pELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFPO0lBQTdDOztJQW1CQSxDQUFDO0lBZEcseUJBQU0sR0FBTjtJQUVBLENBQUM7SUFDRCx5QkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDSSxzQkFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQix1QkFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQWZnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbUI1QjtJQUFELGVBQUM7Q0FuQkQsQUFtQkMsQ0FuQnFDLGlCQUFPLEdBbUI1QztrQkFuQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXZjVmlldyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL212Y1ZpZXdcIjtcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9Vc2VySW5mb1wiO1xuaW1wb3J0IExvYWRpbmdTY2VuZSBmcm9tIFwiLi4vQ29tbW9uL0Jhc2UvTG9hZGluZ1NjZW5lXCI7XG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL0NvbW1vbi9CYXNlL1BsYXllckluZm9cIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlVbmxvY2sgZXh0ZW5kcyBtdmNWaWV3IHtcblxuXG5cblxuICAgIG9uTG9hZCgpIHtcblxuICAgIH1cbiAgICBvblNob3coKSB7XG4gICAgICAgXG4gICAgfVxuXG4gICAgY2xpY2tfdG9tYWluKCkge1xuICAgICAgICBMb2FkaW5nU2NlbmUuZ290byhcIk1haW5cIik7XG4gICAgICAgIFBsYXllckluZm8uaXNJbkd1aWRlID0gdHJ1ZTtcbiAgICB9XG5cblxuXG59XG4iXX0=