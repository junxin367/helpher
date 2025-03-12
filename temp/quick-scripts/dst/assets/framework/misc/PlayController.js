
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/PlayController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '12cddjcqlBFPppBdtcH47dW', 'PlayController');
// framework/misc/PlayController.ts

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
var Signal_1 = require("../core/Signal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var PlayController = /** @class */ (function (_super) {
    __extends(PlayController, _super);
    function PlayController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isTouching = false;
        _this.canHolding = false;
        _this.holdingSigal = new Signal_1.default();
        _this.pressSignal = new Signal_1.default();
        _this.releaseSignal = new Signal_1.default();
        _this.pos = cc.Vec2.ZERO;
        return _this;
    }
    PlayController.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onEnd, this);
    };
    PlayController.prototype.onDestroy = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onBegan, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onEnd, this);
    };
    PlayController.prototype.start = function () {
    };
    PlayController.prototype.onBegan = function (e) {
        this.isTouching = true;
        this.pressSignal.fire();
        var p = e.touch.getLocation();
        p = this.node.convertToNodeSpaceAR(p);
        this.pos = p;
    };
    PlayController.prototype.onMove = function (e) {
        var p = e.touch.getLocation();
        p = this.node.convertToNodeSpaceAR(p);
        this.pos = p;
    };
    PlayController.prototype.onEnd = function () {
        this.isTouching = false;
        this.releaseSignal.fire();
    };
    PlayController.prototype.update = function () {
        if (this.canHolding && this.isTouching) {
            this.holdingSigal.fire(this.pos);
        }
    };
    __decorate([
        property
    ], PlayController.prototype, "canHolding", void 0);
    __decorate([
        property(cc.Vec2)
    ], PlayController.prototype, "pos", void 0);
    PlayController = __decorate([
        ccclass,
        menu("其它/PlayController")
    ], PlayController);
    return PlayController;
}(cc.Component));
exports.default = PlayController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxQbGF5Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFFOUIsSUFBQSxLQUEyQixFQUFFLENBQUMsVUFBVSxFQUF2QyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBQyxJQUFJLFVBQWlCLENBQUM7QUFJL0M7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFpRUM7UUEvREcsZ0JBQVUsR0FBVyxLQUFLLENBQUM7UUFHM0IsZ0JBQVUsR0FBVyxLQUFLLENBQUM7UUFFM0Isa0JBQVksR0FBVSxJQUFJLGdCQUFNLEVBQUUsQ0FBQztRQUVuQyxpQkFBVyxHQUFVLElBQUksZ0JBQU0sRUFBRSxDQUFDO1FBRWxDLG1CQUFhLEdBQVUsSUFBSSxnQkFBTSxFQUFFLENBQUE7UUFHbkMsU0FBRyxHQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOztJQW1EL0IsQ0FBQztJQWpERywrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELGtDQUFTLEdBQVQ7UUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBR0QsOEJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxnQ0FBTyxHQUFQLFVBQVEsQ0FBQztRQUVMLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUM3QixDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNyQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQsK0JBQU0sR0FBTixVQUFPLENBQUM7UUFFSixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQzdCLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBRUksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUVJLElBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFDO1lBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQztJQUNMLENBQUM7SUExREQ7UUFEQyxRQUFRO3NEQUNrQjtJQVMzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNTO0lBZFYsY0FBYztRQUZsQyxPQUFPO1FBQ1AsSUFBSSxDQUFDLG1CQUFtQixDQUFDO09BQ0wsY0FBYyxDQWlFbEM7SUFBRCxxQkFBQztDQWpFRCxBQWlFQyxDQWpFMkMsRUFBRSxDQUFDLFNBQVMsR0FpRXZEO2tCQWpFb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaWduYWwgZnJvbSBcIi4uL2NvcmUvU2lnbmFsXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHksbWVudX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuQG1lbnUoXCLlhbblroMvUGxheUNvbnRyb2xsZXJcIilcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIGlzVG91Y2hpbmc6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgY2FuSG9sZGluZzpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgaG9sZGluZ1NpZ2FsOlNpZ25hbCA9IG5ldyBTaWduYWwoKTtcclxuXHJcbiAgICBwcmVzc1NpZ25hbDpTaWduYWwgPSBuZXcgU2lnbmFsKCk7XHJcblxyXG4gICAgcmVsZWFzZVNpZ25hbDpTaWduYWwgPSBuZXcgU2lnbmFsKClcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuVmVjMilcclxuICAgIHBvczpjYy5WZWMyID0gY2MuVmVjMi5aRVJPO1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULHRoaXMub25CZWdhbix0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSx0aGlzLm9uTW92ZSx0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELHRoaXMub25FbmQsdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCx0aGlzLm9uRW5kLHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCx0aGlzLm9uQmVnYW4sdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLHRoaXMub25Nb3ZlLHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELHRoaXMub25FbmQsdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsdGhpcy5vbkVuZCx0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2FuKGUpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pc1RvdWNoaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnByZXNzU2lnbmFsLmZpcmUoKVxyXG4gICAgICAgIGxldCBwID0gZS50b3VjaC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgcCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwKVxyXG4gICAgICAgIHRoaXMucG9zID0gcDtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdmUoZSlcclxuICAgIHtcclxuICAgICAgICBsZXQgcCA9IGUudG91Y2guZ2V0TG9jYXRpb24oKVxyXG4gICAgICAgIHAgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocClcclxuICAgICAgICB0aGlzLnBvcyA9IHA7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaXNUb3VjaGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVsZWFzZVNpZ25hbC5maXJlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVwZGF0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5jYW5Ib2xkaW5nICYmIHRoaXMuaXNUb3VjaGluZyl7XHJcbiAgICAgICAgICAgIHRoaXMuaG9sZGluZ1NpZ2FsLmZpcmUodGhpcy5wb3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=