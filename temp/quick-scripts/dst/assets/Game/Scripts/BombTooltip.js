
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/BombTooltip.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '808ccyb329AArUN9k5jByHr', 'BombTooltip');
// Game/Scripts/BombTooltip.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BombTooltip = /** @class */ (function (_super) {
    __extends(BombTooltip, _super);
    function BombTooltip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.baseScale = 0;
        return _this;
    }
    BombTooltip.prototype.onLoad = function () {
        this.baseScale = this.node.scaleX;
    };
    Object.defineProperty(BombTooltip.prototype, "dir", {
        set: function (x) {
            this.node.scaleX = x * this.baseScale;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BombTooltip.prototype, "bomb", {
        set: function (v) {
            if (v) {
                this.node.active = true;
                v.onTimeLeftChanged.on(this.onTimeLeft, this);
                this.bombRef = v;
                this.label.string = v.timeLeft + "";
            }
            else {
                if (this.bombRef)
                    this.bombRef.onTimeLeftChanged.off(this.onTimeLeft, this);
                this.node.active = false;
            }
        },
        enumerable: false,
        configurable: true
    });
    BombTooltip.prototype.onDestroy = function () {
        if (this.bombRef && this.bombRef.onTimeLeftChanged)
            this.bombRef.onTimeLeftChanged.off(this.onTimeLeft, this);
    };
    BombTooltip.prototype.onTimeLeft = function (timeleft) {
        this.label.string = timeleft;
        if (timeleft <= 0) {
            this.node.active = false;
            this.bomb = null;
        }
    };
    BombTooltip.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], BombTooltip.prototype, "label", void 0);
    BombTooltip = __decorate([
        ccclass
    ], BombTooltip);
    return BombTooltip;
}(cc.Component));
exports.default = BombTooltip;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcQm9tYlRvb2x0aXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUksSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUE7QUFFekM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFpREM7UUE3Q0csV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixlQUFTLEdBQVcsQ0FBQyxDQUFDOztJQTJDMUIsQ0FBQztJQXpDRyw0QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN0QyxDQUFDO0lBRUQsc0JBQUksNEJBQUc7YUFBUCxVQUFRLENBQUM7WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDZCQUFJO2FBQVIsVUFBUyxDQUFPO1lBQ1osSUFBSSxDQUFDLEVBQUU7Z0JBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixDQUFDLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUE7Z0JBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzthQUN2QztpQkFBTTtnQkFDSCxJQUFJLElBQUksQ0FBQyxPQUFPO29CQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUM1QjtRQUNMLENBQUM7OztPQUFBO0lBR0QsK0JBQVMsR0FBVDtRQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQjtZQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsUUFBUTtRQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztRQUM3QixJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7WUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRUQsMkJBQUssR0FBTDtJQUVBLENBQUM7SUF6Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDSTtJQUpOLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FpRC9CO0lBQUQsa0JBQUM7Q0FqREQsQUFpREMsQ0FqRHdDLEVBQUUsQ0FBQyxTQUFTLEdBaURwRDtrQkFqRG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9tYiBmcm9tIFwiLi9Cb21iXCJcclxuXHJcbmxldCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvbWJUb29sdGlwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgYm9tYlJlZjogQm9tYjtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIGJhc2VTY2FsZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlU2NhbGUgPSB0aGlzLm5vZGUuc2NhbGVYO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBkaXIoeCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSB4ICogdGhpcy5iYXNlU2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGJvbWIodjogQm9tYikge1xyXG4gICAgICAgIGlmICh2KSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB2Lm9uVGltZUxlZnRDaGFuZ2VkLm9uKHRoaXMub25UaW1lTGVmdCwgdGhpcylcclxuICAgICAgICAgICAgdGhpcy5ib21iUmVmID0gdjtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSB2LnRpbWVMZWZ0ICsgXCJcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib21iUmVmKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib21iUmVmLm9uVGltZUxlZnRDaGFuZ2VkLm9mZih0aGlzLm9uVGltZUxlZnQsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYm9tYlJlZiAmJiB0aGlzLmJvbWJSZWYub25UaW1lTGVmdENoYW5nZWQpXHJcbiAgICAgICAgICAgIHRoaXMuYm9tYlJlZi5vblRpbWVMZWZ0Q2hhbmdlZC5vZmYodGhpcy5vblRpbWVMZWZ0LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvblRpbWVMZWZ0KHRpbWVsZWZ0KSB7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSB0aW1lbGVmdDtcclxuICAgICAgICBpZiAodGltZWxlZnQgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5ib21iID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59Il19