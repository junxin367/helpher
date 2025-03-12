
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Door.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '891b5WiKtdA/rjgKEjEmtMH', 'Door');
// Game/Scripts/Door.ts

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
var Device_1 = require("../../framework/misc/Device");
var ccUtil_1 = require("../../framework/utils/ccUtil");
var UserInfo_1 = require("../../framework/extension/weak_net_game/UserInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Door = /** @class */ (function (_super) {
    __extends(Door, _super);
    function Door() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anim = null;
        _this.collider = null;
        return _this;
    }
    Door.prototype.onLoad = function () {
        this.anim = this.getComponent(cc.Animation);
        this.collider = this.getComponent(cc.PhysicsCollider);
        var door1 = this.node.getChildByName("door");
        var door2 = this.node.getChildByName("door2");
        ccUtil_1.default.setDisplay(door1.getComponent(cc.Sprite), "Img/level/theme/men_" + UserInfo_1.UserInfo.theme);
        ccUtil_1.default.setDisplay(door2.getComponent(cc.Sprite), "Img/level/theme/men_" + UserInfo_1.UserInfo.theme);
    };
    Door.prototype.start = function () {
    };
    Door.prototype.unlock = function () {
        Device_1.default.playSfx("openthedoor");
        this.anim.play('unlock');
        if (this.collider) {
            this.collider.enabled = false;
        }
    };
    Door = __decorate([
        ccclass
    ], Door);
    return Door;
}(cc.Component));
exports.default = Door;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcRG9vci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBaUQ7QUFFakQsdURBQWtEO0FBQ2xELDZFQUE0RTtBQUV4RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQTtBQUV6QztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQTJCQztRQXpCRyxVQUFJLEdBQWlCLElBQUksQ0FBQTtRQUV6QixjQUFRLEdBQXVCLElBQUksQ0FBQzs7SUF1QnhDLENBQUM7SUFyQkcscUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0RCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxnQkFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxzQkFBc0IsR0FBRyxtQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFGLGdCQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLHNCQUFzQixHQUFHLG1CQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVELG9CQUFLLEdBQUw7SUFFQSxDQUFDO0lBR0QscUJBQU0sR0FBTjtRQUNJLGdCQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3hCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUNqQztJQUNMLENBQUM7SUExQmdCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0EyQnhCO0lBQUQsV0FBQztDQTNCRCxBQTJCQyxDQTNCaUMsRUFBRSxDQUFDLFNBQVMsR0EyQjdDO2tCQTNCb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEZXZpY2UgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9taXNjL0RldmljZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4vQ29tbW9uL0Jhc2UvUGxheWVySW5mb1wiO1xyXG5pbXBvcnQgY2NVdGlsIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdXRpbHMvY2NVdGlsXCI7XHJcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9Vc2VySW5mb1wiO1xyXG5cclxubGV0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3JcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9vciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgYW5pbTogY2MuQW5pbWF0aW9uID0gbnVsbFxyXG5cclxuICAgIGNvbGxpZGVyOiBjYy5QaHlzaWNzQ29sbGlkZXIgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5QaHlzaWNzQ29sbGlkZXIpO1xyXG4gICAgICAgIGxldCBkb29yMSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImRvb3JcIik7XHJcbiAgICAgICAgbGV0IGRvb3IyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZG9vcjJcIik7XHJcbiAgICAgICAgY2NVdGlsLnNldERpc3BsYXkoZG9vcjEuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSksIFwiSW1nL2xldmVsL3RoZW1lL21lbl9cIiArIFVzZXJJbmZvLnRoZW1lKTtcclxuICAgICAgICBjY1V0aWwuc2V0RGlzcGxheShkb29yMi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSwgXCJJbWcvbGV2ZWwvdGhlbWUvbWVuX1wiICsgVXNlckluZm8udGhlbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgdW5sb2NrKCkge1xyXG4gICAgICAgIERldmljZS5wbGF5U2Z4KFwib3BlbnRoZWRvb3JcIilcclxuICAgICAgICB0aGlzLmFuaW0ucGxheSgndW5sb2NrJylcclxuICAgICAgICBpZiAodGhpcy5jb2xsaWRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxpZGVyLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=