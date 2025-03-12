
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/JoyStick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19443OQA0RF8oVduF4TUKvS', 'JoyStick');
// framework/misc/JoyStick.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var JoyStick = /** @class */ (function (_super) {
    __extends(JoyStick, _super);
    function JoyStick() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.outterCircle = null;
        _this.innerCircle = null;
        _this.radius = 250;
        _this.innerCircleRadius = 20;
        _this.real_radius = 100;
        // dynamic Joystick
        _this.dynamicJoystick = false;
        _this.autoRadius = true;
        _this._isReleased = true;
        /**移动到指定位置手指位置 */
        _this.bmove = false;
        _this.onMove = new Signal_1.default();
        _this._axis = cc.v2();
        _this._power = 0;
        _this._tmp_moveOffset = cc.v2();
        _this._startPos = cc.Vec2.ZERO;
        _this.touch_id = null;
        return _this;
    }
    JoyStick.prototype.onLoad = function () {
        if (this.autoRadius) {
            this.radius = this.outterCircle.width / 2;
            this.innerCircleRadius = this.innerCircle.width / 2;
        }
        this.real_radius = this.outterCircle.width / 2;
        this.innerCircle.setPosition(cc.Vec3.ZERO);
        this.node.active = false;
    };
    Object.defineProperty(JoyStick.prototype, "target", {
        set: function (v) {
            v.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
            v.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
            v.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
            v.on(cc.Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
        },
        enumerable: false,
        configurable: true
    });
    JoyStick.prototype.start = function () {
        // this.releaseStick();
    };
    JoyStick.prototype.releaseStick = function () {
        // let move = cc.moveTo(0.5, cc.Vec2.ZERO);
        // let action = move.easing(cc.easeExponentialOut());
        // this.innerCircle.runAction(action);
        this.innerCircle.setPosition(cc.Vec3.ZERO);
        this._isReleased = true;
        if (this.dynamicJoystick) {
            this.scheduleOnce(this.delayClose, 0.1);
        }
    };
    JoyStick.prototype.delayClose = function () {
        this.node.active = false;
    };
    Object.defineProperty(JoyStick.prototype, "power", {
        get: function () {
            return this._power;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JoyStick.prototype, "axis", {
        get: function () {
            if (this._isReleased)
                return cc.Vec2.ZERO;
            var vec = this.innerCircle.getPosition();
            var len = vec.mag();
            if (len == 0)
                return cc.Vec2.ZERO;
            var power = len / this.radius;
            vec.multiplyScalar(1 / len);
            // this._axis.set(vec.x * power, vec.y * power);
            this._axis = cc.Vec2.multiplyScalar(this._axis, vec, power);
            this._power = power;
            return this._axis;
        },
        enumerable: false,
        configurable: true
    });
    JoyStick.prototype.move = function (p) {
        var worldP = p.clone();
        var vec = p.subtract(this._startPos);
        var mag = vec.mag();
        var offset = mag - this.radius;
        if (offset > 0) {
            vec.normalizeSelf();
            if (this.bmove) {
                cc.Vec2.copy(this._tmp_moveOffset, vec);
                offset = mag - this.real_radius;
                if (offset > 0) {
                    this._tmp_moveOffset.multiplyScalar(offset);
                    var v = this.innerCircle.getPosition();
                    this._startPos.x = worldP.x - v.x;
                    this._startPos.y = worldP.y - v.y;
                    var pos = this.node.parent.convertToNodeSpaceAR(cc.v3(this._startPos.x, this._startPos.y, 0));
                    this.node.position = pos;
                }
            }
            vec.multiplyScalar(this.radius);
        }
        this.innerCircle.setPosition(vec.x, vec.y);
    };
    JoyStick.prototype.touchStart = function (e) {
        if (this.touch_id != null && e.getID() != this.touch_id)
            return;
        // let p = e.getUILocation();
        var p = e.getLocation();
        this._startPos = p;
        this._isReleased = false;
        this.unschedule(this.delayClose);
        this.node.active = true;
        if (this.dynamicJoystick) {
            // converto screen position
            // let pos = this.node.getParent().getComponent(UITransformComponent).convertToNodeSpaceAR(v3(p.x, p.y, 0));
            var pos = this.node.getParent().convertToNodeSpaceAR(p);
            this.node.setPosition(pos);
            // this.node.opacity = 0;
            // this.node.runAction(cc.fadeIn(0.5));
        }
    };
    JoyStick.prototype.touchMove = function (e) {
        if (this.touch_id != null && e.getID() != this.touch_id)
            return;
        // let p = e.getUILocation();
        var p = e.getLocation();
        var p0 = e.getPreviousLocation();
        var dx = p.x - p0.x;
        var dy = p.y - p0.y;
        this.onMove.fire(dx, dy);
        this.move(p);
    };
    JoyStick.prototype.touchEnd = function (p) {
        this.releaseStick();
        this.touch_id = null;
    };
    JoyStick.prototype.touchCancel = function (e) {
        this.releaseStick();
        this.touch_id = null;
    };
    __decorate([
        property(cc.Node)
    ], JoyStick.prototype, "outterCircle", void 0);
    __decorate([
        property(cc.Node)
    ], JoyStick.prototype, "innerCircle", void 0);
    __decorate([
        property({ visible: function () { return !this.autoRadius; } })
    ], JoyStick.prototype, "radius", void 0);
    __decorate([
        property({ visible: function () { return !this.autoRadius; } })
    ], JoyStick.prototype, "innerCircleRadius", void 0);
    __decorate([
        property
    ], JoyStick.prototype, "dynamicJoystick", void 0);
    __decorate([
        property
    ], JoyStick.prototype, "autoRadius", void 0);
    __decorate([
        property({ displayName: "是否可移动", tooltip: "超过范围时，将随手指移动" })
    ], JoyStick.prototype, "bmove", void 0);
    JoyStick = __decorate([
        ccclass
    ], JoyStick);
    return JoyStick;
}(cc.Component));
exports.default = JoyStick;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxKb3lTdGljay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFFOUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE0SkM7UUExSkcsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsWUFBTSxHQUFXLEdBQUcsQ0FBQztRQUdyQix1QkFBaUIsR0FBVyxFQUFFLENBQUM7UUFHL0IsaUJBQVcsR0FBVyxHQUFHLENBQUM7UUFFMUIsbUJBQW1CO1FBRW5CLHFCQUFlLEdBQVksS0FBSyxDQUFDO1FBR2pDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRW5CLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRTNCLGlCQUFpQjtRQUVqQixXQUFLLEdBQUcsS0FBSyxDQUFDO1FBRWQsWUFBTSxHQUFXLElBQUksZ0JBQU0sRUFBRSxDQUFDO1FBd0M5QixXQUFLLEdBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3pCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFtQm5CLHFCQUFlLEdBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBMEJuQyxlQUFTLEdBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbEMsY0FBUSxHQUFXLElBQUksQ0FBQzs7SUF3QzVCLENBQUM7SUE3SEcseUJBQU0sR0FBTjtRQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FB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NUpxQyxFQUFFLENBQUMsU0FBUyxHQTRKakQ7a0JBNUpvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpZ25hbCBmcm9tIFwiLi4vY29yZS9TaWduYWxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpveVN0aWNrIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgb3V0dGVyQ2lyY2xlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGlubmVyQ2lyY2xlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB2aXNpYmxlKCkgeyByZXR1cm4gIXRoaXMuYXV0b1JhZGl1cyB9IH0pXHJcbiAgICByYWRpdXM6IG51bWJlciA9IDI1MDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB2aXNpYmxlKCkgeyByZXR1cm4gIXRoaXMuYXV0b1JhZGl1cyB9IH0pXHJcbiAgICBpbm5lckNpcmNsZVJhZGl1czogbnVtYmVyID0gMjA7XHJcblxyXG5cclxuICAgIHJlYWxfcmFkaXVzOiBudW1iZXIgPSAxMDA7XHJcblxyXG4gICAgLy8gZHluYW1pYyBKb3lzdGlja1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBkeW5hbWljSm95c3RpY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGF1dG9SYWRpdXM6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHByaXZhdGUgX2lzUmVsZWFzZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKuenu+WKqOWIsOaMh+WumuS9jee9ruaJi+aMh+S9jee9riAqL1xyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5piv5ZCm5Y+v56e75YqoXCIsIHRvb2x0aXA6IFwi6LaF6L+H6IyD5Zu05pe277yM5bCG6ZqP5omL5oyH56e75YqoXCIgfSlcclxuICAgIGJtb3ZlID0gZmFsc2U7XHJcblxyXG4gICAgb25Nb3ZlOiBTaWduYWwgPSBuZXcgU2lnbmFsKCk7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9SYWRpdXMpIHtcclxuICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSB0aGlzLm91dHRlckNpcmNsZS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgIHRoaXMuaW5uZXJDaXJjbGVSYWRpdXMgPSB0aGlzLmlubmVyQ2lyY2xlLndpZHRoIC8gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZWFsX3JhZGl1cyA9IHRoaXMub3V0dGVyQ2lyY2xlLndpZHRoIC8gMjtcclxuICAgICAgICB0aGlzLmlubmVyQ2lyY2xlLnNldFBvc2l0aW9uKGNjLlZlYzMuWkVSTyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB0YXJnZXQodikge1xyXG4gICAgICAgIHYub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcylcclxuICAgICAgICB2Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcylcclxuICAgICAgICB2Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKVxyXG4gICAgICAgIHYub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoQ2FuY2VsLCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIHRoaXMucmVsZWFzZVN0aWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsZWFzZVN0aWNrKCkge1xyXG4gICAgICAgIC8vIGxldCBtb3ZlID0gY2MubW92ZVRvKDAuNSwgY2MuVmVjMi5aRVJPKTtcclxuICAgICAgICAvLyBsZXQgYWN0aW9uID0gbW92ZS5lYXNpbmcoY2MuZWFzZUV4cG9uZW50aWFsT3V0KCkpO1xyXG4gICAgICAgIC8vIHRoaXMuaW5uZXJDaXJjbGUucnVuQWN0aW9uKGFjdGlvbik7XHJcbiAgICAgICAgdGhpcy5pbm5lckNpcmNsZS5zZXRQb3NpdGlvbihjYy5WZWMzLlpFUk8pO1xyXG4gICAgICAgIHRoaXMuX2lzUmVsZWFzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5keW5hbWljSm95c3RpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5kZWxheUNsb3NlLCAwLjEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGF5Q2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfYXhpczogY2MuVmVjMiA9IGNjLnYyKCk7XHJcbiAgICBfcG93ZXI6IG51bWJlciA9IDA7XHJcblxyXG4gICAgZ2V0IHBvd2VyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wb3dlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYXhpcygpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNSZWxlYXNlZCkgcmV0dXJuIGNjLlZlYzIuWkVSTztcclxuICAgICAgICBsZXQgdmVjID0gdGhpcy5pbm5lckNpcmNsZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGxldCBsZW4gPSB2ZWMubWFnKCk7XHJcbiAgICAgICAgaWYgKGxlbiA9PSAwKSByZXR1cm4gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgIHZhciBwb3dlciA9IGxlbiAvIHRoaXMucmFkaXVzO1xyXG4gICAgICAgIHZlYy5tdWx0aXBseVNjYWxhcigxIC8gbGVuKTtcclxuICAgICAgICAvLyB0aGlzLl9heGlzLnNldCh2ZWMueCAqIHBvd2VyLCB2ZWMueSAqIHBvd2VyKTtcclxuICAgICAgICB0aGlzLl9heGlzID0gY2MuVmVjMi5tdWx0aXBseVNjYWxhcih0aGlzLl9heGlzLCB2ZWMsIHBvd2VyKTtcclxuICAgICAgICB0aGlzLl9wb3dlciA9IHBvd2VyO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9heGlzO1xyXG4gICAgfVxyXG5cclxuICAgIF90bXBfbW92ZU9mZnNldDogY2MuVmVjMiA9IGNjLnYyKCk7XHJcblxyXG5cclxuICAgIG1vdmUocDogY2MuVmVjMikge1xyXG4gICAgICAgIGxldCB3b3JsZFAgPSBwLmNsb25lKCk7XHJcbiAgICAgICAgbGV0IHZlYyA9IHAuc3VidHJhY3QodGhpcy5fc3RhcnRQb3MpO1xyXG4gICAgICAgIGxldCBtYWcgPSB2ZWMubWFnKCk7XHJcbiAgICAgICAgbGV0IG9mZnNldCA9IG1hZyAtIHRoaXMucmFkaXVzO1xyXG4gICAgICAgIGlmIChvZmZzZXQgPiAwKSB7XHJcbiAgICAgICAgICAgIHZlYy5ub3JtYWxpemVTZWxmKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJtb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5WZWMyLmNvcHkodGhpcy5fdG1wX21vdmVPZmZzZXQsIHZlYyk7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBtYWcgLSB0aGlzLnJlYWxfcmFkaXVzO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90bXBfbW92ZU9mZnNldC5tdWx0aXBseVNjYWxhcihvZmZzZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHYgPSB0aGlzLmlubmVyQ2lyY2xlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhcnRQb3MueCA9IHdvcmxkUC54IC0gdi54XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhcnRQb3MueSA9IHdvcmxkUC55IC0gdi55O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYzKHRoaXMuX3N0YXJ0UG9zLngsIHRoaXMuX3N0YXJ0UG9zLnksIDApKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBwb3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmVjLm11bHRpcGx5U2NhbGFyKHRoaXMucmFkaXVzKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlubmVyQ2lyY2xlLnNldFBvc2l0aW9uKHZlYy54LCB2ZWMueSk7XHJcbiAgICB9XHJcbiAgICBfc3RhcnRQb3M6IGNjLlZlYzIgPSBjYy5WZWMyLlpFUk87XHJcbiAgICB0b3VjaF9pZDogbnVtYmVyID0gbnVsbDtcclxuICAgIHRvdWNoU3RhcnQoZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnRvdWNoX2lkICE9IG51bGwgJiYgZS5nZXRJRCgpICE9IHRoaXMudG91Y2hfaWQpIHJldHVybjtcclxuICAgICAgICAvLyBsZXQgcCA9IGUuZ2V0VUlMb2NhdGlvbigpO1xyXG4gICAgICAgIGxldCBwID0gZS5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0UG9zID0gcDtcclxuICAgICAgICB0aGlzLl9pc1JlbGVhc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZGVsYXlDbG9zZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuZHluYW1pY0pveXN0aWNrKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnZlcnRvIHNjcmVlbiBwb3NpdGlvblxyXG4gICAgICAgICAgICAvLyBsZXQgcG9zID0gdGhpcy5ub2RlLmdldFBhcmVudCgpLmdldENvbXBvbmVudChVSVRyYW5zZm9ybUNvbXBvbmVudCkuY29udmVydFRvTm9kZVNwYWNlQVIodjMocC54LCBwLnksIDApKTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5nZXRQYXJlbnQoKS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLmZhZGVJbigwLjUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG91Y2hNb3ZlKGUpIHtcclxuICAgICAgICBpZiAodGhpcy50b3VjaF9pZCAhPSBudWxsICYmIGUuZ2V0SUQoKSAhPSB0aGlzLnRvdWNoX2lkKSByZXR1cm47XHJcbiAgICAgICAgLy8gbGV0IHAgPSBlLmdldFVJTG9jYXRpb24oKTtcclxuICAgICAgICBsZXQgcCA9IGUuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBsZXQgcDAgPSBlLmdldFByZXZpb3VzTG9jYXRpb24oKTtcclxuICAgICAgICBsZXQgZHggPSBwLnggLSBwMC54O1xyXG4gICAgICAgIGxldCBkeSA9IHAueSAtIHAwLnk7XHJcbiAgICAgICAgdGhpcy5vbk1vdmUuZmlyZShkeCwgZHkpXHJcbiAgICAgICAgdGhpcy5tb3ZlKHApO1xyXG4gICAgfVxyXG5cclxuICAgIHRvdWNoRW5kKHA6IGNjLlZlYzIpIHtcclxuICAgICAgICB0aGlzLnJlbGVhc2VTdGljaygpO1xyXG4gICAgICAgIHRoaXMudG91Y2hfaWQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHRvdWNoQ2FuY2VsKGUpIHtcclxuICAgICAgICB0aGlzLnJlbGVhc2VTdGljaygpO1xyXG4gICAgICAgIHRoaXMudG91Y2hfaWQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxufSJdfQ==