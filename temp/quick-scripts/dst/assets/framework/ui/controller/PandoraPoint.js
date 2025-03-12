
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/ui/controller/PandoraPoint.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0d12fW+y7pPaL/wROjL6izJ', 'PandoraPoint');
// framework/ui/controller/PandoraPoint.ts

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
var Signal_1 = require("../../core/Signal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var PandoraPoint = /** @class */ (function (_super) {
    __extends(PandoraPoint, _super);
    function PandoraPoint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numberVisible = true;
        _this.subPoints = [];
        _this.n = 0;
        _this.signal = new Signal_1.default;
        return _this;
        // update (dt) {}
    }
    PandoraPoint_1 = PandoraPoint;
    PandoraPoint.prototype.onLoad = function () {
        var _this = this;
        this.sprite = this.getComponent(cc.Sprite);
        this.label = this.getComponentInChildren(cc.Label);
        if (this.label)
            this.label.node.active = this.numberVisible;
        this.subPoints.forEach(function (v) {
            v.signal.add(_this.onSubChanged, _this);
        });
    };
    PandoraPoint.prototype.onSubChanged = function (n) {
        var b = this.subPoints.some(function (v) { return v.n > 0; });
        this.setNumber(b ? 1 : 0);
    };
    PandoraPoint.prototype.start = function () {
    };
    PandoraPoint.prototype.setNumber = function (n) {
        if (this.label) {
            if (this.numberVisible) {
                this.label.string = n + "";
            }
            if (this.numberVisible) {
                this.label.node.active = n != 0;
            }
        }
        this.sprite.enabled = n != 0;
        this.n = n;
        this.signal.fire(n);
    };
    var PandoraPoint_1;
    __decorate([
        property
    ], PandoraPoint.prototype, "numberVisible", void 0);
    __decorate([
        property([PandoraPoint_1])
    ], PandoraPoint.prototype, "subPoints", void 0);
    PandoraPoint = PandoraPoint_1 = __decorate([
        ccclass,
        menu("Controller/PandoraPoint")
    ], PandoraPoint);
    return PandoraPoint;
}(cc.Component));
exports.default = PandoraPoint;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx1aVxcY29udHJvbGxlclxcUGFuZG9yYVBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUF1QztBQUVqQyxJQUFBLEtBQTJCLEVBQUUsQ0FBQyxVQUFVLEVBQXZDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFDLElBQUksVUFBaUIsQ0FBQztBQUkvQztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQXVEQztRQWxERyxtQkFBYSxHQUFXLElBQUksQ0FBQztRQUc3QixlQUFTLEdBQWtCLEVBQUUsQ0FBQTtRQUk3QixPQUFDLEdBQVUsQ0FBQyxDQUFDO1FBRWIsWUFBTSxHQUFVLElBQUksZ0JBQU0sQ0FBQzs7UUF3QzNCLGlCQUFpQjtJQUNyQixDQUFDO3FCQXZEb0IsWUFBWTtJQWdCN0IsNkJBQU0sR0FBTjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkQsSUFBRyxJQUFJLENBQUMsS0FBSztZQUNULElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBRWhELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUNwQixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsWUFBWSxFQUFDLEtBQUksQ0FBQyxDQUFBO1FBQ3hDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELG1DQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1YsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUUsT0FBQSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBUCxDQUFPLENBQUMsQ0FBQTtRQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUEsQ0FBQyxDQUFBLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBRUQsNEJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxnQ0FBUyxHQUFULFVBQVUsQ0FBUTtRQUVkLElBQUcsSUFBSSxDQUFDLEtBQUssRUFDYjtZQUNJLElBQUcsSUFBSSxDQUFDLGFBQWEsRUFDckI7Z0JBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFFLEVBQUUsQ0FBQTthQUM1QjtZQUNELElBQUcsSUFBSSxDQUFDLGFBQWEsRUFDckI7Z0JBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFJLENBQUMsSUFBRSxDQUFDLENBQUM7YUFDbEM7U0FDSjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDOztJQS9DRDtRQURDLFFBQVE7dURBQ29CO0lBRzdCO1FBREMsUUFBUSxDQUFDLENBQUMsY0FBWSxDQUFDLENBQUM7bURBQ0k7SUFSWixZQUFZO1FBRmhDLE9BQU87UUFDUCxJQUFJLENBQUMseUJBQXlCLENBQUM7T0FDWCxZQUFZLENBdURoQztJQUFELG1CQUFDO0NBdkRELEFBdURDLENBdkR5QyxFQUFFLENBQUMsU0FBUyxHQXVEckQ7a0JBdkRvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpZ25hbCBmcm9tIFwiLi4vLi4vY29yZS9TaWduYWxcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eSxtZW51fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5AbWVudShcIkNvbnRyb2xsZXIvUGFuZG9yYVBvaW50XCIpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmRvcmFQb2ludCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgbGFiZWw6Y2MuTGFiZWw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBudW1iZXJWaXNpYmxlOmJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbUGFuZG9yYVBvaW50XSlcclxuICAgIHN1YlBvaW50czpQYW5kb3JhUG9pbnRbXSA9IFtdXHJcblxyXG4gICAgc3ByaXRlOmNjLlNwcml0ZVxyXG5cclxuICAgIG46bnVtYmVyID0gMDtcclxuXHJcbiAgICBzaWduYWw6U2lnbmFsID0gbmV3IFNpZ25hbDtcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuc3ByaXRlID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICB0aGlzLmxhYmVsID0gdGhpcy5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKTtcclxuICAgICAgICBpZih0aGlzLmxhYmVsKVxyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLm5vZGUuYWN0aXZlID0gdGhpcy5udW1iZXJWaXNpYmxlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3ViUG9pbnRzLmZvckVhY2godj0+e1xyXG4gICAgICAgICAgICB2LnNpZ25hbC5hZGQodGhpcy5vblN1YkNoYW5nZWQsdGhpcylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3ViQ2hhbmdlZChuKXtcclxuICAgICAgICBsZXQgYiA9IHRoaXMuc3ViUG9pbnRzLnNvbWUodj0+di5uID4gMClcclxuICAgICAgICB0aGlzLnNldE51bWJlcihiPzE6MClcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldE51bWJlcihuOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLmxhYmVsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5udW1iZXJWaXNpYmxlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IG4gK1wiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0aGlzLm51bWJlclZpc2libGUpIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsLm5vZGUuYWN0aXZlID0gIG4hPTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zcHJpdGUuZW5hYmxlZCA9IG4gIT0wO1xyXG4gICAgICAgIHRoaXMubiA9IG47XHJcbiAgICAgICAgdGhpcy5zaWduYWwuZmlyZShuKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==