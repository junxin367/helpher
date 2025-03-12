
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/ui/controller/Draggable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ae201qBMYJC+7BxBZ/bTft5', 'Draggable');
// framework/ui/controller/Draggable.ts

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
var Draggable = /** @class */ (function (_super) {
    __extends(Draggable, _super);
    function Draggable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onDragStart = new Signal_1.default();
        _this.onDragMove = new Signal_1.default();
        _this.onDragEnd = new Signal_1.default();
        _this.onDragCancel = new Signal_1.default();
        _this.oosEnabled = false;
        // @property({ displayName: "是否可以拖出屏幕" })
        // public isDir = [horizontal,];
        _this.yEnabled = true;
        _this.moveBackDur = 0.5;
        _this.isDrag = false;
        _this.isDragging = false;
        return _this;
    }
    Draggable.prototype.onLoad = function () {
    };
    Draggable.prototype.start = function () {
    };
    Draggable.prototype.onEnable = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCanceled, this);
    };
    Draggable.prototype.onDisable = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCanceled, this);
    };
    Draggable.prototype.onTouchBegan = function (evt) {
        var v = evt.getLocation();
        this.dragStartPos = this.node.position;
        this.onDragStart.fire(v);
        evt.stopPropagation();
        this.isDrag = false;
        this.isDragging = true;
        this.last = this.node.parent.convertToNodeSpaceAR(v);
        this.offset = this.node.position.sub(this.last);
    };
    Draggable.prototype.onTouchMoved = function (evt) {
        var v = evt.getLocation();
        // console.log(this.offset);
        // this.node.position = v.sub(this.offset);
        // let heroRigidBody = this.node.getComponent(cc.RigidBody);
        // heroRigidBody.applyLinearImpulse(evt.touch.getDelta(),
        //     heroRigidBody.getWorldCenter(),
        //     true
        // );
        if (this.yEnabled) {
            var cur = this.node.parent.convertToNodeSpaceAR(v);
            var p = cur.addSelf(this.offset);
            this.node.position = p;
            this.isDrag = true;
            this.last = cur;
            return;
        }
        if (evt.touch.getDelta().x > 20) {
            var offset = cc.v2(20, evt.touch.getDelta().y);
            this.node.x += offset.x;
            // if (this.yEnabled)
            //     this.node.y += offset.y;
        }
        else if (evt.touch.getDelta().x < -20) {
            var offset = cc.v2(-20, evt.touch.getDelta().y);
            this.node.x += offset.x;
            //this.node.y += offset.y;
        }
        else {
            this.node.x += evt.touch.getDelta().x;
            // if (this.yEnabled)
            //     this.node.y += evt.touch.getDelta().y;
        }
        this.onDragMove.fire(evt.touch.getDelta());
        this.isDrag = true;
    };
    Draggable.prototype.onTouchEnded = function (evt) {
        this.isDragging = false;
        if (this.isDrag == false)
            return;
        var v = evt.getLocation();
        this.onDragEnd.fire(v);
        if (!this.oosEnabled) {
            if (!cc.Camera.main.canSee(this.node)) {
                this.moveBack();
            }
        }
    };
    Draggable.prototype.onTouchCanceled = function (evt) {
        this.isDragging = false;
        var v = evt.getLocation();
        this.onDragCancel.fire(v);
        if (!this.oosEnabled) {
            if (!cc.Camera.main.canSee(this.node)) {
                this.moveBack();
            }
        }
    };
    Draggable.prototype.moveBack = function () {
        this.node.runAction(cc.moveTo(this.moveBackDur, this.dragStartPos).easing(cc.easeBackInOut));
    };
    __decorate([
        property({ displayName: "是否可以拖出屏幕" })
    ], Draggable.prototype, "oosEnabled", void 0);
    __decorate([
        property({ displayName: "是否可以拖动Y" })
    ], Draggable.prototype, "yEnabled", void 0);
    __decorate([
        property
    ], Draggable.prototype, "moveBackDur", void 0);
    Draggable = __decorate([
        ccclass,
        menu("Controller/Draggable")
    ], Draggable);
    return Draggable;
}(cc.Component));
exports.default = Draggable;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx1aVxcY29udHJvbGxlclxcRHJhZ2dhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUF1QztBQUVqQyxJQUFBLEtBQThCLEVBQUUsQ0FBQyxVQUFVLEVBQXpDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBa0IsQ0FBQztBQUlsRDtJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQW1JQztRQWpJRyxpQkFBVyxHQUFXLElBQUksZ0JBQU0sRUFBRSxDQUFDO1FBQ25DLGdCQUFVLEdBQVcsSUFBSSxnQkFBTSxFQUFFLENBQUM7UUFDbEMsZUFBUyxHQUFXLElBQUksZ0JBQU0sRUFBRSxDQUFDO1FBQ2pDLGtCQUFZLEdBQVcsSUFBSSxnQkFBTSxFQUFFLENBQUM7UUFHN0IsZ0JBQVUsR0FBRyxLQUFLLENBQUM7UUFFMUIseUNBQXlDO1FBQ3pDLGdDQUFnQztRQUd6QixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBSXZCLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBMkMxQixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsZ0JBQVUsR0FBRyxLQUFLLENBQUM7O0lBb0V2QixDQUFDO0lBL0dHLDBCQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQseUJBQUssR0FBTDtJQUdBLENBQUM7SUFFRCw0QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLElBQUks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QUFFLENBQUM7YUFDbkI7U0FFSjtJQUNMLENBQUM7SUFFRCxtQ0FBZSxHQUFmLFVBQWdCLEdBQUc7UUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNuQjtTQUNKO0lBQ0wsQ0FBQztJQUdELDRCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBMUhEO1FBREMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxDQUFDO2lEQUNaO0lBTTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxDQUFDOytDQUNkO0lBSXZCO1FBREMsUUFBUTtrREFDaUI7SUFsQlQsU0FBUztRQUY3QixPQUFPO1FBQ1AsSUFBSSxDQUFDLHNCQUFzQixDQUFDO09BQ1IsU0FBUyxDQW1JN0I7SUFBRCxnQkFBQztDQW5JRCxBQW1JQyxDQW5Jc0MsRUFBRSxDQUFDLFNBQVMsR0FtSWxEO2tCQW5Jb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaWduYWwgZnJvbSBcIi4uLy4uL2NvcmUvU2lnbmFsXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuQG1lbnUoXCJDb250cm9sbGVyL0RyYWdnYWJsZVwiKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnZ2FibGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG9uRHJhZ1N0YXJ0OiBTaWduYWwgPSBuZXcgU2lnbmFsKCk7XHJcbiAgICBvbkRyYWdNb3ZlOiBTaWduYWwgPSBuZXcgU2lnbmFsKCk7XHJcbiAgICBvbkRyYWdFbmQ6IFNpZ25hbCA9IG5ldyBTaWduYWwoKTtcclxuICAgIG9uRHJhZ0NhbmNlbDogU2lnbmFsID0gbmV3IFNpZ25hbCgpO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuaYr+WQpuWPr+S7peaLluWHuuWxj+W5lVwiIH0pXHJcbiAgICBwdWJsaWMgb29zRW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuaYr+WQpuWPr+S7peaLluWHuuWxj+W5lVwiIH0pXHJcbiAgICAvLyBwdWJsaWMgaXNEaXIgPSBbaG9yaXpvbnRhbCxdO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuaYr+WQpuWPr+S7peaLluWKqFlcIiB9KVxyXG4gICAgcHVibGljIHlFbmFibGVkID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtb3ZlQmFja0R1cjogbnVtYmVyID0gMC41O1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaEJlZ2FuLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZWQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZGVkLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hDYW5jZWxlZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoQmVnYW4sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZWQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmRlZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaENhbmNlbGVkLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmZzZXQ6IGNjLlZlYzI7XHJcblxyXG4gICAgZHJhZ1N0YXJ0UG9zOiBjYy5WZWMyO1xyXG5cclxuICAgIGxhc3Q6IGNjLlZlYzI7XHJcblxyXG5cclxuICAgIG9uVG91Y2hCZWdhbihldnQpIHtcclxuICAgICAgICBsZXQgdiA9IGV2dC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMub25EcmFnU3RhcnQuZmlyZSh2KVxyXG4gICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLmlzRHJhZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sYXN0ID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih2KTtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IHRoaXMubm9kZS5wb3NpdGlvbi5zdWIodGhpcy5sYXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBpc0RyYWcgPSBmYWxzZTtcclxuXHJcbiAgICBpc0RyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gICAgb25Ub3VjaE1vdmVkKGV2dCkge1xyXG4gICAgICAgIGxldCB2ID0gZXZ0LmdldExvY2F0aW9uKClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm9mZnNldCk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnBvc2l0aW9uID0gdi5zdWIodGhpcy5vZmZzZXQpO1xyXG4gICAgICAgIC8vIGxldCBoZXJvUmlnaWRCb2R5ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIC8vIGhlcm9SaWdpZEJvZHkuYXBwbHlMaW5lYXJJbXB1bHNlKGV2dC50b3VjaC5nZXREZWx0YSgpLFxyXG4gICAgICAgIC8vICAgICBoZXJvUmlnaWRCb2R5LmdldFdvcmxkQ2VudGVyKCksXHJcbiAgICAgICAgLy8gICAgIHRydWVcclxuICAgICAgICAvLyApO1xyXG4gICAgICAgIGlmICh0aGlzLnlFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXIgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHYpO1xyXG4gICAgICAgICAgICBsZXQgcCA9IGN1ci5hZGRTZWxmKHRoaXMub2Zmc2V0KVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBwO1xyXG4gICAgICAgICAgICB0aGlzLmlzRHJhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdCA9IGN1cjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZ0LnRvdWNoLmdldERlbHRhKCkueCA+IDIwKSB7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSBjYy52MigyMCwgZXZ0LnRvdWNoLmdldERlbHRhKCkueSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IG9mZnNldC54O1xyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy55RW5hYmxlZClcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS55ICs9IG9mZnNldC55O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZ0LnRvdWNoLmdldERlbHRhKCkueCA8IC0yMCkge1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gY2MudjIoLTIwLCBldnQudG91Y2guZ2V0RGVsdGEoKS55KTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gb2Zmc2V0Lng7XHJcblxyXG4gICAgICAgICAgICAvL3RoaXMubm9kZS55ICs9IG9mZnNldC55O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IGV2dC50b3VjaC5nZXREZWx0YSgpLng7XHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLnlFbmFibGVkKVxyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnkgKz0gZXZ0LnRvdWNoLmdldERlbHRhKCkueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMub25EcmFnTW92ZS5maXJlKGV2dC50b3VjaC5nZXREZWx0YSgpKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc0RyYWcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hFbmRlZChldnQpIHtcclxuICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5pc0RyYWcgPT0gZmFsc2UpIHJldHVybjtcclxuICAgICAgICBsZXQgdiA9IGV2dC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgdGhpcy5vbkRyYWdFbmQuZmlyZSh2KVxyXG4gICAgICAgIGlmICghdGhpcy5vb3NFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIGlmICghY2MuQ2FtZXJhLm1haW4uY2FuU2VlKHRoaXMubm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaENhbmNlbGVkKGV2dCkge1xyXG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCB2ID0gZXZ0LmdldExvY2F0aW9uKClcclxuICAgICAgICB0aGlzLm9uRHJhZ0NhbmNlbC5maXJlKHYpXHJcbiAgICAgICAgaWYgKCF0aGlzLm9vc0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgaWYgKCFjYy5DYW1lcmEubWFpbi5jYW5TZWUodGhpcy5ub2RlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBtb3ZlQmFjaygpIHtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLm1vdmVUbyh0aGlzLm1vdmVCYWNrRHVyLCB0aGlzLmRyYWdTdGFydFBvcykuZWFzaW5nKGNjLmVhc2VCYWNrSW5PdXQpKTtcclxuICAgIH1cclxufSJdfQ==