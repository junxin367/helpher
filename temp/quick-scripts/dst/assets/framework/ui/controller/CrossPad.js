
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/ui/controller/CrossPad.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'db0f4Bp9ElBipwcPzo5kwtp', 'CrossPad');
// framework/ui/controller/CrossPad.ts

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
var Switcher_1 = require("./Switcher");
var Signal_1 = require("../../core/Signal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var CrossPadDir;
(function (CrossPadDir) {
    CrossPadDir[CrossPadDir["Idle"] = 0] = "Idle";
    CrossPadDir[CrossPadDir["Left"] = 1] = "Left";
    CrossPadDir[CrossPadDir["Right"] = 2] = "Right";
    CrossPadDir[CrossPadDir["Up"] = 3] = "Up";
    CrossPadDir[CrossPadDir["Down"] = 4] = "Down";
})(CrossPadDir || (CrossPadDir = {}));
var CrossPad = /** @class */ (function (_super) {
    __extends(CrossPad, _super);
    function CrossPad() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.left = null;
        _this.right = null;
        _this.up = null;
        _this.down = null;
        _this.onTouchUp = new Signal_1.default();
        _this.dirs = [];
        return _this;
        // update (dt) {}
    }
    CrossPad.prototype.start = function () {
        this.switcher = this.getComponentInChildren(Switcher_1.default);
        this.dirs = [this.left, this.right, this.up, this.down];
        for (var i = 0; i < 4; i++) {
            var dir = this.dirs[i];
            dir["dir"] = i + 1;
            dir.on(cc.Node.EventType.TOUCH_END, this.onTouchUpC, this);
            dir.on(cc.Node.EventType.TOUCH_START, this.onTouchDownC, this);
        }
    };
    CrossPad.prototype.onTouchDownC = function (event) {
        var dir = event.target["dir"];
        this.switcher.index = dir;
    };
    CrossPad.prototype.onTouchUpC = function (evt) {
        this.switcher.index = 0;
        var dir = event.target["dir"];
        if (dir == CrossPadDir.Left) {
            console.log("touch left ");
        }
        else if (dir == CrossPadDir.Right) {
            console.log("touch Right ");
        }
        this.onTouchUp.fire(dir);
    };
    CrossPad.Dir = CrossPadDir;
    __decorate([
        property(cc.Node)
    ], CrossPad.prototype, "left", void 0);
    __decorate([
        property(cc.Node)
    ], CrossPad.prototype, "right", void 0);
    __decorate([
        property(cc.Node)
    ], CrossPad.prototype, "up", void 0);
    __decorate([
        property(cc.Node)
    ], CrossPad.prototype, "down", void 0);
    CrossPad = __decorate([
        ccclass,
        menu("Controller/CrossPad")
    ], CrossPad);
    return CrossPad;
}(cc.Component));
exports.default = CrossPad;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx1aVxcY29udHJvbGxlclxcQ3Jvc3NQYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWtDO0FBQ2xDLDRDQUF1QztBQUdqQyxJQUFBLEtBQTZCLEVBQUUsQ0FBQyxVQUFVLEVBQXpDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFHLElBQUksVUFBaUIsQ0FBQztBQUVqRCxJQUFLLFdBTUo7QUFORCxXQUFLLFdBQVc7SUFDWiw2Q0FBSSxDQUFBO0lBQ0osNkNBQUksQ0FBQTtJQUNKLCtDQUFLLENBQUE7SUFDTCx5Q0FBRSxDQUFBO0lBQ0YsNkNBQUksQ0FBQTtBQUNSLENBQUMsRUFOSSxXQUFXLEtBQVgsV0FBVyxRQU1mO0FBSUQ7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFrREM7UUE1Q0csVUFBSSxHQUFXLElBQUksQ0FBQztRQUVwQixXQUFLLEdBQVcsSUFBSSxDQUFDO1FBRXJCLFFBQUUsR0FBVyxJQUFJLENBQUM7UUFFbEIsVUFBSSxHQUFXLElBQUksQ0FBQztRQUVwQixlQUFTLEdBQWMsSUFBSSxnQkFBTSxFQUFFLENBQUM7UUFFcEMsVUFBSSxHQUFjLEVBQUUsQ0FBQTs7UUFpQ3BCLGlCQUFpQjtJQUNyQixDQUFDO0lBaENHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxrQkFBUSxDQUFDLENBQUM7UUFFdEQsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUMxQjtZQUNJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFJLENBQUMsR0FBRSxDQUFDLENBQUM7WUFDbkIsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUcsSUFBSSxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsQ0FBQztZQUMzRCxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRyxJQUFJLENBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xFO0lBQ0wsQ0FBQztJQUVELCtCQUFZLEdBQVosVUFBYSxLQUFLO1FBQ2QsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUU7SUFDL0IsQ0FBQztJQUdELDZCQUFVLEdBQVYsVUFBVyxHQUFHO1FBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBRyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksRUFBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzlCO2FBQUssSUFBRyxHQUFHLElBQUksV0FBVyxDQUFDLEtBQUssRUFDakM7WUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQTdDTSxZQUFHLEdBQUcsV0FBVyxDQUFDO0lBSXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dDQUNBO0lBRWxCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0U7SUFaSCxRQUFRO1FBRjVCLE9BQU87UUFDUCxJQUFJLENBQUMscUJBQXFCLENBQUM7T0FDUCxRQUFRLENBa0Q1QjtJQUFELGVBQUM7Q0FsREQsQUFrREMsQ0FsRHFDLEVBQUUsQ0FBQyxTQUFTLEdBa0RqRDtrQkFsRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3dpdGNoZXIgZnJvbSBcIi4vU3dpdGNoZXJcIjtcclxuaW1wb3J0IFNpZ25hbCBmcm9tIFwiLi4vLi4vY29yZS9TaWduYWxcIjtcclxuXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHkgLCBtZW51fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5lbnVtIENyb3NzUGFkRGlye1xyXG4gICAgSWRsZSxcclxuICAgIExlZnQsXHJcbiAgICBSaWdodCxcclxuICAgIFVwLFxyXG4gICAgRG93bixcclxufVxyXG5cclxuQGNjY2xhc3NcclxuQG1lbnUoXCJDb250cm9sbGVyL0Nyb3NzUGFkXCIpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyb3NzUGFkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0aWMgRGlyID0gQ3Jvc3NQYWREaXI7XHJcbiAgICBzd2l0Y2hlcjpTd2l0Y2hlciA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsZWZ0OmNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICByaWdodDpjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdXA6Y2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRvd246Y2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgb25Ub3VjaFVwOlNpZ25hbCAgICAgPSBuZXcgU2lnbmFsKCk7XHJcblxyXG4gICAgZGlyczpjYy5Ob2RlIFtdID0gW11cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5zd2l0Y2hlciA9IHRoaXMuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihTd2l0Y2hlcik7XHJcblxyXG4gICAgICAgIHRoaXMuZGlycyA9IFsgdGhpcy5sZWZ0ICx0aGlzLnJpZ2h0ICwgdGhpcy51cCwgdGhpcy5kb3duXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMCA7aSA8IDQ7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBkaXIgPSB0aGlzLmRpcnNbaV07XHJcbiAgICAgICAgICAgIGRpcltcImRpclwiXSA9ICBpKyAxO1xyXG4gICAgICAgICAgICBkaXIub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EICwgdGhpcy5vblRvdWNoVXBDLHRoaXMpO1xyXG4gICAgICAgICAgICBkaXIub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQgLCB0aGlzLm9uVG91Y2hEb3duQyx0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaERvd25DKGV2ZW50KXtcclxuICAgICAgICBsZXQgZGlyID0gZXZlbnQudGFyZ2V0W1wiZGlyXCJdO1xyXG4gICAgICAgIHRoaXMuc3dpdGNoZXIuaW5kZXggPSBkaXIgO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvblRvdWNoVXBDKGV2dCl7XHJcbiAgICAgICAgdGhpcy5zd2l0Y2hlci5pbmRleCA9IDA7XHJcbiAgICAgICAgbGV0IGRpciA9IGV2ZW50LnRhcmdldFtcImRpclwiXTtcclxuICAgICAgICBpZihkaXIgPT0gQ3Jvc3NQYWREaXIuTGVmdCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG91Y2ggbGVmdCBcIik7XHJcbiAgICAgICAgfWVsc2UgaWYoZGlyID09IENyb3NzUGFkRGlyLlJpZ2h0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b3VjaCBSaWdodCBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25Ub3VjaFVwLmZpcmUoZGlyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==