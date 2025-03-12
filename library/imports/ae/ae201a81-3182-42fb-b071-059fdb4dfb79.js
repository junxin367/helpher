"use strict";
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