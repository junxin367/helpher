"use strict";
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