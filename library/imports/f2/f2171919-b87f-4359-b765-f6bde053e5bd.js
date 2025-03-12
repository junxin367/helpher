"use strict";
cc._RF.push(module, 'f2171kZuH9DWbdl9r3gU+W9', 'GuideStory');
// Game/Scripts/guide/GuideStory.ts

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
var LoadingScene_1 = require("../Common/Base/LoadingScene");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GuideStory = /** @class */ (function (_super) {
    __extends(GuideStory, _super);
    function GuideStory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GuideStory.prototype.onLoad = function () {
    };
    GuideStory.prototype.start = function () {
    };
    GuideStory.prototype.onShown = function () {
        if (this.node.name == "comics2") {
            vm.hide("Prefabs/story/comics1");
        }
    };
    GuideStory.prototype.click_go = function () {
        LoadingScene_1.default.goto("Game");
    };
    GuideStory.prototype.click_skip = function () {
        LoadingScene_1.default.goto("Game");
    };
    GuideStory = __decorate([
        ccclass
    ], GuideStory);
    return GuideStory;
}(cc.Component));
exports.default = GuideStory;

cc._RF.pop();