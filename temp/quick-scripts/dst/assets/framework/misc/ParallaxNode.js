
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/ParallaxNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80e24UZAb5GD7eLDz/q0KWt', 'ParallaxNode');
// framework/misc/ParallaxNode.ts

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
var ccUtil_1 = require("../utils/ccUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var ParallaxNode = /** @class */ (function (_super) {
    __extends(ParallaxNode, _super);
    function ParallaxNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.offset = cc.v2(1, 1);
        _this.refrenceNode = null;
        _this.refrecenOffset = cc.Vec2.ZERO;
        _this.size = cc.winSize;
        _this.horizontal_repeat = true;
        _this.vertical_repeat = false;
        _this.inverted = false;
        _this.dir = 1;
        return _this;
    }
    ParallaxNode.prototype.onLoad = function () {
        this.dir = this.inverted ? -1 : 1;
    };
    //需要在将需要 复制的层放在组件所在节点的子节点下
    // 且该节点只能放在摄像机下 面  作为子节点 
    //camera ->this -> content
    ParallaxNode.prototype.start = function () {
        this.refrecenOffset = this.refrenceNode.position;
        //copy three children
        var child = this.node.children[0];
        this.size = child.getContentSize();
        if (this.horizontal_repeat) {
            var c1 = cc.instantiate(child);
            var c2 = cc.instantiate(child);
            c1.parent = this.node;
            c2.parent = this.node;
            c1.x = -child.width;
            c2.x = child.width;
        }
        else if (this.vertical_repeat) {
            var c1 = cc.instantiate(child);
            var c2 = cc.instantiate(child);
            c1.parent = this.node;
            c2.parent = this.node;
            c1.y = -child.height;
            c2.y = child.height;
        }
    };
    ParallaxNode.prototype.setBackground = function (backgroundUrl) {
        this.node.children.forEach(function (v) {
            var sp = v.getComponent(cc.Sprite);
            ccUtil_1.default.setDisplay(sp, backgroundUrl);
        });
    };
    ParallaxNode.prototype.update = function () {
        if (this.horizontal_repeat) {
            this.node.x = this.dir * (this.refrenceNode.x - this.refrecenOffset.x) * this.offset.x;
            this.node.x = this.node.x % this.size.width;
        }
        else if (this.vertical_repeat) {
            this.node.y = this.dir * (this.refrenceNode.y - this.refrecenOffset.y) * this.offset.y;
            this.node.y = this.node.y % this.size.height;
        }
        // this.node.y = this.node.y % this.size.height
    };
    __decorate([
        property
    ], ParallaxNode.prototype, "offset", void 0);
    __decorate([
        property(cc.Node)
    ], ParallaxNode.prototype, "refrenceNode", void 0);
    __decorate([
        property
    ], ParallaxNode.prototype, "horizontal_repeat", void 0);
    __decorate([
        property
    ], ParallaxNode.prototype, "vertical_repeat", void 0);
    __decorate([
        property
    ], ParallaxNode.prototype, "inverted", void 0);
    ParallaxNode = __decorate([
        ccclass,
        menu("其它/ParallaxNode")
    ], ParallaxNode);
    return ParallaxNode;
}(cc.Component));
exports.default = ParallaxNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxQYXJhbGxheE5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQXFDO0FBQy9CLElBQUEsS0FBNkIsRUFBRSxDQUFDLFVBQVUsRUFBeEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUMsSUFBSSxVQUFrQixDQUFDO0FBSWpEO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBd0VDO1FBckVHLFlBQU0sR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUc3QixrQkFBWSxHQUFXLElBQUksQ0FBQztRQUU1QixvQkFBYyxHQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXRDLFVBQUksR0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDO1FBRzFCLHVCQUFpQixHQUFXLElBQUksQ0FBQTtRQUdoQyxxQkFBZSxHQUFXLEtBQUssQ0FBQTtRQUcvQixjQUFRLEdBQVcsS0FBSyxDQUFDO1FBRXpCLFNBQUcsR0FBVSxDQUFDLENBQUM7O0lBbURuQixDQUFDO0lBakRHLDZCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLDRCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO1FBQ2pELHFCQUFxQjtRQUNyQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxjQUFjLEVB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O2tCQXhFb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjY1V0aWwgZnJvbSBcIi4uL3V0aWxzL2NjVXRpbFwiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LG1lbnUgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5AbWVudShcIuWFtuWugy9QYXJhbGxheE5vZGVcIilcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyYWxsYXhOb2RlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG9mZnNldDogY2MuVmVjMiA9IGNjLnYyKDEsMSk7XHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcmVmcmVuY2VOb2RlOmNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHJlZnJlY2VuT2Zmc2V0OmNjLlZlYzIgPSBjYy5WZWMyLlpFUk87XHJcblxyXG4gICAgc2l6ZTpjYy5TaXplID0gY2Mud2luU2l6ZTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGhvcml6b250YWxfcmVwZWF0OmJvb2xlYW4gPSB0cnVlXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB2ZXJ0aWNhbF9yZXBlYXQ6Ym9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpbnZlcnRlZDpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgZGlyOm51bWJlciA9IDE7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuZGlyID0gdGhpcy5pbnZlcnRlZCA/IC0xOjE7IFxyXG4gICAgfVxyXG4gICAgLy/pnIDopoHlnKjlsIbpnIDopoEg5aSN5Yi255qE5bGC5pS+5Zyo57uE5Lu25omA5Zyo6IqC54K555qE5a2Q6IqC54K55LiLXHJcbiAgICAvLyDkuJTor6XoioLngrnlj6rog73mlL7lnKjmkYTlg4/mnLrkuIsg6Z2iICDkvZzkuLrlrZDoioLngrkgXHJcbiAgICAvL2NhbWVyYSAtPnRoaXMgLT4gY29udGVudFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5yZWZyZWNlbk9mZnNldCA9IHRoaXMucmVmcmVuY2VOb2RlLnBvc2l0aW9uO1xyXG4gICAgICAgIC8vY29weSB0aHJlZSBjaGlsZHJlblxyXG4gICAgICAgIGxldCBjaGlsZCA9IHRoaXMubm9kZS5jaGlsZHJlblswXVxyXG4gICAgICAgIHRoaXMuc2l6ZSA9IGNoaWxkLmdldENvbnRlbnRTaXplKCk7XHJcbiAgICAgICAgaWYodGhpcy5ob3Jpem9udGFsX3JlcGVhdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjMSA9IGNjLmluc3RhbnRpYXRlKGNoaWxkKVxyXG4gICAgICAgICAgICBsZXQgYzIgPSBjYy5pbnN0YW50aWF0ZShjaGlsZClcclxuICAgICAgICAgICAgYzEucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICBjMi5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIGMxLnggPSAtY2hpbGQud2lkdGg7XHJcbiAgICAgICAgICAgIGMyLnggPSBjaGlsZC53aWR0aDtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLnZlcnRpY2FsX3JlcGVhdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjMSA9IGNjLmluc3RhbnRpYXRlKGNoaWxkKVxyXG4gICAgICAgICAgICBsZXQgYzIgPSBjYy5pbnN0YW50aWF0ZShjaGlsZClcclxuICAgICAgICAgICAgYzEucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICBjMi5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIGMxLnkgPSAtY2hpbGQuaGVpZ2h0O1xyXG4gICAgICAgICAgICBjMi55ID0gY2hpbGQuaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzZXRCYWNrZ3JvdW5kKGJhY2tncm91bmRVcmw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbi5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc3AgPSB2LmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICBjY1V0aWwuc2V0RGlzcGxheShzcCxiYWNrZ3JvdW5kVXJsKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuaG9yaXpvbnRhbF9yZXBlYXQpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IHRoaXMuZGlyICogKHRoaXMucmVmcmVuY2VOb2RlLnggLSB0aGlzLnJlZnJlY2VuT2Zmc2V0LngpICogdGhpcy5vZmZzZXQueDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggPSB0aGlzLm5vZGUueCAlIHRoaXMuc2l6ZS53aWR0aFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMudmVydGljYWxfcmVwZWF0KXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSB0aGlzLmRpciAqKHRoaXMucmVmcmVuY2VOb2RlLnkgLSB0aGlzLnJlZnJlY2VuT2Zmc2V0LnkpICogdGhpcy5vZmZzZXQueTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSB0aGlzLm5vZGUueSAlIHRoaXMuc2l6ZS5oZWlnaHRcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnkgPSB0aGlzLm5vZGUueSAlIHRoaXMuc2l6ZS5oZWlnaHRcclxuICAgIH1cclxufSJdfQ==