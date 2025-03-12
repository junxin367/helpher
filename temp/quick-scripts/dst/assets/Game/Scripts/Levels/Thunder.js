
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Levels/Thunder.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb872SONn1GWLqiBQ6LN12m', 'Thunder');
// Game/Scripts/Levels/Thunder.ts

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
var event_1 = require("../../../framework/core/event");
var Device_1 = require("../../../framework/misc/Device");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animation = null;
        _this.explode = null;
        _this.light_width = 50;
        return _this;
    }
    default_1.prototype.onLoad = function () {
        this.animation = this.getComponent(cc.Animation);
        this.explode = this.node.getChildByName("0");
    };
    default_1.prototype.play = function (fromNode, toNode, offset) {
        this.animation.play();
        Device_1.default.playSfx("lightling");
        // let from = ccUtil.getWorldPosition(fromNode);
        // let to = ccUtil.getWorldPosition(toNode)
        var from = fromNode.position.add(offset);
        var to = toNode.position.add(offset);
        this.node.setPosition(from);
        var toTarget = to.sub(from);
        var mag = toTarget.mag() * 4 / 5;
        // let s = this.node.getContentSize()
        this.node.setContentSize(mag, this.light_width);
        this.explode.setPosition(mag, 0);
        this.node.angle = Math.atan2(toTarget.y, toTarget.x) * cc.macro.DEG;
        return event_1.evt.sleep(0.2);
    };
    default_1.prototype.update = function () {
    };
    __decorate([
        property
    ], default_1.prototype, "light_width", void 0);
    default_1 = __decorate([
        ccclass("Thunder"),
        menu("Game/Effect/Thunder")
    ], default_1);
    return default_1;
}(cc.Component));
exports.default = default_1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcTGV2ZWxzXFxUaHVuZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHVEQUFvRDtBQUNwRCx5REFBb0Q7QUFFaEQsSUFBQSxLQUE4QixFQUFFLENBQUMsVUFBVSxFQUF6QyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxJQUFJLFVBQWtCLENBQUE7QUFHL0M7SUFBNkIsNkJBQVk7SUFBekM7UUFBQSxxRUFnQ0M7UUEvQkcsZUFBUyxHQUFpQixJQUFJLENBQUE7UUFDOUIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUV2QixpQkFBVyxHQUFXLEVBQUUsQ0FBQzs7SUE0QjdCLENBQUM7SUExQkcsMEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBRUQsd0JBQUksR0FBSixVQUFLLFFBQWlCLEVBQUUsTUFBZSxFQUFFLE1BQU07UUFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixnQkFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUMzQixnREFBZ0Q7UUFDaEQsMkNBQTJDO1FBQzNDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzNCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDcEUsT0FBTyxXQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCwwQkFBTSxHQUFOO0lBRUEsQ0FBQztJQTFCRDtRQURDLFFBQVE7a0RBQ2dCO0lBSjdCO1FBRkMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUNsQixJQUFJLENBQUMscUJBQXFCLENBQUM7aUJBaUMzQjtJQUFELGdCQUFDO0NBaENELEFBZ0NDLENBaEM0QixFQUFFLENBQUMsU0FBUyxHQWdDeEMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2NVdGlsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdXRpbHMvY2NVdGlsXCI7XHJcbmltcG9ydCB7IGV2dCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvY29yZS9ldmVudFwiO1xyXG5pbXBvcnQgRGV2aWNlIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWlzYy9EZXZpY2VcIjtcclxuXHJcbmxldCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yXHJcbkBjY2NsYXNzKFwiVGh1bmRlclwiKVxyXG5AbWVudShcIkdhbWUvRWZmZWN0L1RodW5kZXJcIilcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgYW5pbWF0aW9uOiBjYy5BbmltYXRpb24gPSBudWxsXHJcbiAgICBleHBsb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBsaWdodF93aWR0aDogbnVtYmVyID0gNTA7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICB0aGlzLmV4cGxvZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCIwXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcGxheShmcm9tTm9kZTogY2MuTm9kZSwgdG9Ob2RlOiBjYy5Ob2RlLCBvZmZzZXQpIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbi5wbGF5KCk7XHJcbiAgICAgICAgRGV2aWNlLnBsYXlTZngoXCJsaWdodGxpbmdcIilcclxuICAgICAgICAvLyBsZXQgZnJvbSA9IGNjVXRpbC5nZXRXb3JsZFBvc2l0aW9uKGZyb21Ob2RlKTtcclxuICAgICAgICAvLyBsZXQgdG8gPSBjY1V0aWwuZ2V0V29ybGRQb3NpdGlvbih0b05vZGUpXHJcbiAgICAgICAgbGV0IGZyb20gPSBmcm9tTm9kZS5wb3NpdGlvbi5hZGQob2Zmc2V0KTtcclxuICAgICAgICBsZXQgdG8gPSB0b05vZGUucG9zaXRpb24uYWRkKG9mZnNldCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKGZyb20pXHJcbiAgICAgICAgbGV0IHRvVGFyZ2V0ID0gdG8uc3ViKGZyb20pO1xyXG4gICAgICAgIGxldCBtYWcgPSB0b1RhcmdldC5tYWcoKSAqIDQgLyA1O1xyXG4gICAgICAgIC8vIGxldCBzID0gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKClcclxuICAgICAgICB0aGlzLm5vZGUuc2V0Q29udGVudFNpemUobWFnLCB0aGlzLmxpZ2h0X3dpZHRoKVxyXG4gICAgICAgIHRoaXMuZXhwbG9kZS5zZXRQb3NpdGlvbihtYWcsIDApO1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IE1hdGguYXRhbjIodG9UYXJnZXQueSwgdG9UYXJnZXQueCkgKiBjYy5tYWNyby5ERUc7XHJcbiAgICAgICAgcmV0dXJuIGV2dC5zbGVlcCgwLjIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG59Il19