
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/RemoveOutOfView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a537fCNm/hKzLebsq+eZ3m/', 'RemoveOutOfView');
// Game/Scripts/RemoveOutOfView.ts

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
var Signal_1 = require("../../framework/core/Signal");
var ccUtil_1 = require("../../framework/utils/ccUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RemoveOutOfView = /** @class */ (function (_super) {
    __extends(RemoveOutOfView, _super);
    function RemoveOutOfView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lx = 0;
        _this.ly = 0;
        _this.rx = 0;
        _this.ry = 0;
        _this.usingWorldSpace = false;
        _this.onOffScreen = new Signal_1.default();
        return _this;
    }
    RemoveOutOfView.prototype.onLoad = function () {
        var w = cc.winSize.width;
        var h = cc.winSize.height;
        this.lx = -w / 2;
        this.rx = w / 2;
        this.ly = -h / 2;
        this.ry = h / 2;
    };
    RemoveOutOfView.prototype.start = function () {
    };
    RemoveOutOfView.prototype.update = function () {
        var xy = this.node.getPosition();
        if (this.usingWorldSpace) {
            xy = ccUtil_1.default.getWorldPosition(this.node);
            if (xy.x < 0 || xy.x > cc.winSize.width || xy.y < 0 || xy.y > cc.winSize.height) {
                this.onOffScreen.fire();
                this.node.destroy();
            }
        }
        else {
            if (xy.x < this.lx || xy.x > this.rx || xy.y > this.ry || xy.y < this.ly) {
                this.onOffScreen.fire();
                this.node.destroy();
            }
        }
    };
    RemoveOutOfView = __decorate([
        ccclass
    ], RemoveOutOfView);
    return RemoveOutOfView;
}(cc.Component));
exports.default = RemoveOutOfView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcUmVtb3ZlT3V0T2ZWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFpRDtBQUNqRCx1REFBa0Q7QUFFOUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUE7QUFJekM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUFzQ0M7UUFyQ0csUUFBRSxHQUFXLENBQUMsQ0FBQztRQUNmLFFBQUUsR0FBVyxDQUFDLENBQUM7UUFDZixRQUFFLEdBQVcsQ0FBQyxDQUFDO1FBQ2YsUUFBRSxHQUFXLENBQUMsQ0FBQztRQVdmLHFCQUFlLEdBQVksS0FBSyxDQUFDO1FBRWpDLGlCQUFXLEdBQVcsSUFBSSxnQkFBTSxFQUFFLENBQUM7O0lBcUJ2QyxDQUFDO0lBaENHLGdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFNRCwrQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGdDQUFNLEdBQU47UUFDSSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN0QixFQUFFLEdBQUcsZ0JBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7Z0JBQzdFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDdkI7U0FDSjthQUFNO1lBQ0gsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ3RFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDdkI7U0FDSjtJQUNMLENBQUM7SUFyQ2dCLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0FzQ25DO0lBQUQsc0JBQUM7Q0F0Q0QsQUFzQ0MsQ0F0QzRDLEVBQUUsQ0FBQyxTQUFTLEdBc0N4RDtrQkF0Q29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2lnbmFsIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvY29yZS9TaWduYWxcIjtcclxuaW1wb3J0IGNjVXRpbCBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3V0aWxzL2NjVXRpbFwiO1xyXG5cclxubGV0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3JcclxuXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW1vdmVPdXRPZlZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgbHg6IG51bWJlciA9IDA7XHJcbiAgICBseTogbnVtYmVyID0gMDtcclxuICAgIHJ4OiBudW1iZXIgPSAwO1xyXG4gICAgcnk6IG51bWJlciA9IDA7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGxldCB3ID0gY2Mud2luU2l6ZS53aWR0aDtcclxuICAgICAgICBsZXQgaCA9IGNjLndpblNpemUuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMubHggPSAtdyAvIDI7XHJcbiAgICAgICAgdGhpcy5yeCA9IHcgLyAyO1xyXG4gICAgICAgIHRoaXMubHkgPSAtaCAvIDI7XHJcbiAgICAgICAgdGhpcy5yeSA9IGggLyAyO1xyXG4gICAgfVxyXG5cclxuICAgIHVzaW5nV29ybGRTcGFjZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uT2ZmU2NyZWVuOiBTaWduYWwgPSBuZXcgU2lnbmFsKCk7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBsZXQgeHkgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBpZiAodGhpcy51c2luZ1dvcmxkU3BhY2UpIHtcclxuICAgICAgICAgICAgeHkgPSBjY1V0aWwuZ2V0V29ybGRQb3NpdGlvbih0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICBpZiAoeHkueCA8IDAgfHwgeHkueCA+IGNjLndpblNpemUud2lkdGggfHwgeHkueSA8IDAgfHwgeHkueSA+IGNjLndpblNpemUuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uT2ZmU2NyZWVuLmZpcmUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoeHkueCA8IHRoaXMubHggfHwgeHkueCA+IHRoaXMucnggfHwgeHkueSA+IHRoaXMucnkgfHwgeHkueSA8IHRoaXMubHkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25PZmZTY3JlZW4uZmlyZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==