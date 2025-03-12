"use strict";
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