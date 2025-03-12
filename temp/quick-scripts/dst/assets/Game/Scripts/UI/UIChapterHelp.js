
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIChapterHelp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b2e40lsG+lFOodZ1m6Sz1vu', 'UIChapterHelp');
// Game/Scripts/UI/UIChapterHelp.ts

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
var Game_1 = require("../Game");
var ccUtil_1 = require("../../../framework/utils/ccUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIChapterHelp = /** @class */ (function (_super) {
    __extends(UIChapterHelp, _super);
    function UIChapterHelp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mainbg = null;
        _this.title1 = null;
        return _this;
    }
    UIChapterHelp.prototype.onLoad = function () {
        this.mainbg.node.opacity = 0;
    };
    UIChapterHelp.prototype.start = function () {
    };
    UIChapterHelp.prototype.onShown = function (c) {
        var _this = this;
        ccUtil_1.default.setDisplay(this.mainbg, 'ImgComics/chapter/' + (c - 1)).then(function (v) {
            cc.tween(_this.mainbg.node).to(0.5, { opacity: 255 }).start();
        });
        // ccUtil.setDisplay(this.title1, 'ImgComics/chapter/title/' + chapter);
    };
    UIChapterHelp.prototype.click_go = function () {
        Game_1.default.instance.startGame();
    };
    __decorate([
        property(cc.Sprite)
    ], UIChapterHelp.prototype, "mainbg", void 0);
    __decorate([
        property(cc.Sprite)
    ], UIChapterHelp.prototype, "title1", void 0);
    UIChapterHelp = __decorate([
        ccclass
    ], UIChapterHelp);
    return UIChapterHelp;
}(cc.Component));
exports.default = UIChapterHelp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJQ2hhcHRlckhlbHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0NBQTJCO0FBQzNCLDBEQUFxRDtBQUlqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQTtBQUV6QztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQTRCQztRQXpCRyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLFlBQU0sR0FBYyxJQUFJLENBQUM7O0lBc0I3QixDQUFDO0lBcEJHLDhCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCw2QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELCtCQUFPLEdBQVAsVUFBUSxDQUFDO1FBQVQsaUJBTUM7UUFMRyxnQkFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLG9CQUFvQixHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztZQUNqRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFBO1FBRUYsd0VBQXdFO0lBQzVFLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksY0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBdkJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ0s7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFDSztJQU5SLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0E0QmpDO0lBQUQsb0JBQUM7Q0E1QkQsQUE0QkMsQ0E1QjBDLEVBQUUsQ0FBQyxTQUFTLEdBNEJ0RDtrQkE1Qm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tIFwiLi4vR2FtZVwiO1xyXG5pbXBvcnQgY2NVdGlsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdXRpbHMvY2NVdGlsXCI7XHJcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL0NvbW1vbi9CYXNlL1BsYXllckluZm9cIjtcclxuXHJcbmxldCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQ2hhcHRlckhlbHAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBtYWluYmc6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHRpdGxlMTogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5tYWluYmcubm9kZS5vcGFjaXR5ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93bihjKSB7XHJcbiAgICAgICAgY2NVdGlsLnNldERpc3BsYXkodGhpcy5tYWluYmcsICdJbWdDb21pY3MvY2hhcHRlci8nICsgKGMgLSAxKSkudGhlbih2ID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluYmcubm9kZSkudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9KS5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIGNjVXRpbC5zZXREaXNwbGF5KHRoaXMudGl0bGUxLCAnSW1nQ29taWNzL2NoYXB0ZXIvdGl0bGUvJyArIGNoYXB0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrX2dvKCkge1xyXG4gICAgICAgIEdhbWUuaW5zdGFuY2Uuc3RhcnRHYW1lKCk7XHJcbiAgICB9XHJcblxyXG59Il19