
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/shooter/HurtableArea.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '40899LTADJDoIl5lWHCKDeG', 'HurtableArea');
// framework/extension/shooter/HurtableArea.ts

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
var SGameEntity_1 = require("./SGameEntity");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var HurtableArea = /** @class */ (function (_super) {
    __extends(HurtableArea, _super);
    function HurtableArea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.absoluteKill = true;
        _this.damage = 10;
        return _this;
    }
    HurtableArea.prototype.onLoad = function () {
    };
    HurtableArea.prototype.start = function () {
    };
    HurtableArea.prototype.onCollisionEnter = function (other, self) {
        var ge = other.getComponent(SGameEntity_1.default);
        if (ge && ge.isActive) {
            if (this.absoluteKill) {
                ge.decreaseHp(ge.hp, this.name);
            }
            else {
                ge.decreaseHp(this.damage, this.name);
            }
        }
    };
    __decorate([
        property
    ], HurtableArea.prototype, "absoluteKill", void 0);
    __decorate([
        property({ visible: function () { return !this.absoluteKill; } })
    ], HurtableArea.prototype, "damage", void 0);
    HurtableArea = __decorate([
        ccclass,
        menu("shooter/HurtableArea")
    ], HurtableArea);
    return HurtableArea;
}(cc.Component));
exports.default = HurtableArea;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHNob290ZXJcXEh1cnRhYmxlQXJlYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBdUM7QUFFbkMsSUFBQSxLQUE4QixFQUFFLENBQUMsVUFBVSxFQUF6QyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxJQUFJLFVBQWtCLENBQUE7QUFHL0M7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUE4QkM7UUEzQkcsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0IsWUFBTSxHQUFXLEVBQUUsQ0FBQzs7SUF3QnhCLENBQUM7SUFwQkcsNkJBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCw0QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHVDQUFnQixHQUFoQixVQUFpQixLQUFrQixFQUFFLElBQWlCO1FBQ2xELElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMscUJBQVUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNuQixFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25DO2lCQUFNO2dCQUNILEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDekM7U0FDSjtJQUNMLENBQUM7SUF4QkQ7UUFEQyxRQUFRO3NEQUNvQjtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sZ0JBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnREFDbEM7SUFOSCxZQUFZO1FBRmhDLE9BQU87UUFDUCxJQUFJLENBQUMsc0JBQXNCLENBQUM7T0FDUixZQUFZLENBOEJoQztJQUFELG1CQUFDO0NBOUJELEFBOEJDLENBOUJ5QyxFQUFFLENBQUMsU0FBUyxHQThCckQ7a0JBOUJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVFbnRpdHkgZnJvbSBcIi4vU0dhbWVFbnRpdHlcIjtcclxuXHJcbmxldCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yXHJcbkBjY2NsYXNzXHJcbkBtZW51KFwic2hvb3Rlci9IdXJ0YWJsZUFyZWFcIilcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHVydGFibGVBcmVhIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGFic29sdXRlS2lsbDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdmlzaWJsZSgpIHsgcmV0dXJuICF0aGlzLmFic29sdXRlS2lsbCB9IH0pXHJcbiAgICBkYW1hZ2U6IG51bWJlciA9IDEwO1xyXG5cclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlcjogY2MuQ29sbGlkZXIsIHNlbGY6IGNjLkNvbGxpZGVyKSB7XHJcbiAgICAgICAgbGV0IGdlID0gb3RoZXIuZ2V0Q29tcG9uZW50KEdhbWVFbnRpdHkpO1xyXG4gICAgICAgIGlmIChnZSAmJiBnZS5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hYnNvbHV0ZUtpbGwpIHtcclxuICAgICAgICAgICAgICAgIGdlLmRlY3JlYXNlSHAoZ2UuaHAsIHRoaXMubmFtZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBnZS5kZWNyZWFzZUhwKHRoaXMuZGFtYWdlLCB0aGlzLm5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=