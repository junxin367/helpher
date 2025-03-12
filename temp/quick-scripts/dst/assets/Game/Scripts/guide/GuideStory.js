
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/guide/GuideStory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcZ3VpZGVcXEd1aWRlU3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQXVEO0FBRW5ELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFBO0FBRXpDO0lBQXdDLDhCQUFZO0lBQXBEOztJQXdCQSxDQUFDO0lBdEJHLDJCQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQsMEJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCw0QkFBTyxHQUFQO1FBQ0ksSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxTQUFTLEVBQUM7WUFDM0IsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO1NBQ25DO0lBQ0wsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFDSSxzQkFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsK0JBQVUsR0FBVjtRQUNJLHNCQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUF0QmdCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F3QjlCO0lBQUQsaUJBQUM7Q0F4QkQsQUF3QkMsQ0F4QnVDLEVBQUUsQ0FBQyxTQUFTLEdBd0JuRDtrQkF4Qm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9hZGluZ1NjZW5lIGZyb20gXCIuLi9Db21tb24vQmFzZS9Mb2FkaW5nU2NlbmVcIjtcclxuXHJcbmxldCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEd1aWRlU3RvcnkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hvd24oKSB7XHJcbiAgICAgICAgaWYodGhpcy5ub2RlLm5hbWUgPT0gXCJjb21pY3MyXCIpe1xyXG4gICAgICAgICAgICB2bS5oaWRlKFwiUHJlZmFicy9zdG9yeS9jb21pY3MxXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrX2dvKCkge1xyXG4gICAgICAgIExvYWRpbmdTY2VuZS5nb3RvKFwiR2FtZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGlja19za2lwKCl7XHJcbiAgICAgICAgTG9hZGluZ1NjZW5lLmdvdG8oXCJHYW1lXCIpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==