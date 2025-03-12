
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/InputSystem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '82d9d5+5xRIPLM32BWl70Qz', 'InputSystem');
// framework/misc/InputSystem.ts

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
exports.InputSystem = exports.Input = void 0;
var JoyStick_1 = require("./JoyStick");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
exports.Input = null;
var InputSystem = /** @class */ (function (_super) {
    __extends(InputSystem, _super);
    function InputSystem() {
        // @property(cc.Component.EventHandler)
        // onKeyDown:cc.Component.EventHandler;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._target = {};
        _this.keys = {};
        _this.__touchVec = cc.Vec2.ZERO;
        _this.radius_axis = 256;
        _this.joyStick = null;
        _this.__lastTouch = cc.Vec2.ZERO;
        _this.moveOffset = cc.Vec2.ZERO;
        _this.__curTouchId = -1;
        return _this;
    }
    /**
     * if target is a Component ,this function must be called in onLoad
     * @param target
     */
    InputSystem.prototype.setDelegate = function (target) {
        this._target = target;
    };
    InputSystem.prototype.onLoad = function () {
        exports.Input = this;
        var components = this.getComponents(cc.Component);
        for (var i = 0; i < components.length; i++) {
            var comp = components[i];
            if (comp != this && (comp.onTouchBegan || comp.onTouchEnded || comp.onTouchMoved)) {
                this._target = comp;
                break;
            }
        }
        console.log("InputSystem Component -> target:", this._target);
    };
    //Horizontal
    //Vertical
    InputSystem.prototype.start = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.triggerKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.triggerKeyUp, this);
        // if(this._target)
        // {
        this.node.on(cc.Node.EventType.TOUCH_START, this.triggerTouchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.triggerTouchMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.triggerTouchEnded, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.triggerTouchCanceled, this);
        // }
    };
    Object.defineProperty(InputSystem.prototype, "touch", {
        get: function () {
            return this.__touch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputSystem.prototype, "axis", {
        // only valid when joystick is enabled 
        get: function () {
            if (this.joyStick)
                return this.joyStick.axis;
            else
                return this.__touchVec;
        },
        enumerable: false,
        configurable: true
    });
    InputSystem.prototype.getKey = function (k) {
        return this.keys[k];
    };
    InputSystem.prototype.triggerKeyUp = function (e) {
        if (this._target.onKeyUp)
            this._target.onKeyUp(event);
        this.keys[event["key"]] = false;
    };
    InputSystem.prototype.triggerKeyDown = function (e) {
        if (this._target.onKeyDown)
            this._target.onKeyDown(event);
        this.keys[event["key"]] = true;
    };
    InputSystem.prototype.triggerTouchEnded = function (e) {
        if (this.__curTouchId != -1 && e.getID() != this.__curTouchId) {
            return;
        }
        this.__curTouchId = -1;
        if (this._target.onTouchEnded)
            this._target.onTouchEnded(e);
        this.__touch = null;
        this.__touchVec = cc.Vec2.ZERO;
        if (e.currentTouch)
            if (this.joyStick)
                this.joyStick.touchEnd(e.currentTouch.getLocation());
        this.moveOffset = cc.Vec2.ZERO;
    };
    InputSystem.prototype.triggerTouchMoved = function (e) {
        if (this.__curTouchId != -1 && e.getID() != this.__curTouchId) {
            return;
        }
        if (this._target.onTouchMoved)
            this._target.onTouchMoved(e);
        this.__touch = e.currentTouch.getLocation();
        this.moveOffset = this.__touch.sub(this.__lastTouch);
        if (this.__touch && this.__startLocation) {
            this.__touchVec = this.__touch.sub(this.__startLocation);
            if (this.joyStick)
                this.joyStick.touchMove(this.__touch);
        }
        this.__lastTouch = this.__touch;
    };
    InputSystem.prototype.triggerTouchBegan = function (e) {
        if (this.__curTouchId != -1 && e.getID() != this.__curTouchId) {
            return;
        }
        if (this._target == null)
            return;
        if (this._target.onTouchBegan)
            this._target.onTouchBegan(e);
        this.__curTouchId = e.getID();
        this.__startLocation = e.currentTouch.getLocation();
        this.__touch = e.currentTouch.getLocation();
        this.__lastTouch = this.__touch;
        if (this.joyStick)
            this.joyStick.touchStart(this.__startLocation);
    };
    InputSystem.prototype.triggerTouchCanceled = function (e) {
        this.triggerTouchEnded(e);
    };
    InputSystem.prototype.onEnable = function () {
        this.schedule(this.checkTouch, 0.02);
    };
    InputSystem.prototype.onDisable = function () {
        this.unschedule(this.checkTouch);
    };
    InputSystem.prototype.checkTouch = function () {
        if (this.__touch) {
            this.moveOffset = this.__touch.sub(this.__lastTouch);
        }
    };
    __decorate([
        property(JoyStick_1.default)
    ], InputSystem.prototype, "joyStick", void 0);
    InputSystem = __decorate([
        ccclass
    ], InputSystem);
    return InputSystem;
}(cc.Component));
exports.InputSystem = InputSystem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxJbnB1dFN5c3RlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWtDO0FBRTVCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRS9CLFFBQUEsS0FBSyxHQUFlLElBQUksQ0FBQztBQUdwQztJQUFpQywrQkFBWTtJQUE3QztRQUdJLHVDQUF1QztRQUN2Qyx1Q0FBdUM7UUFKM0MscUVBaUxDO1FBM0tHLGFBQU8sR0FBTyxFQUFFLENBQUM7UUFHakIsVUFBSSxHQUE0QixFQUFFLENBQUE7UUFNbEMsZ0JBQVUsR0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVsQyxpQkFBVyxHQUFVLEdBQUcsQ0FBQztRQUd6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBZ0d6QixpQkFBVyxHQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25DLGdCQUFVLEdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFxQmxDLGtCQUFZLEdBQVUsQ0FBQyxDQUFDLENBQUM7O0lBdUM3QixDQUFDO0lBM0pHOzs7T0FHRztJQUNILGlDQUFXLEdBQVgsVUFBWSxNQUFNO1FBRWQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDMUIsQ0FBQztJQUlELDRCQUFNLEdBQU47UUFFSSxhQUFLLEdBQUcsSUFBSSxDQUFDO1FBRWIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEQsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQ3hDO1lBQ0ksSUFBSSxJQUFJLEdBQU8sVUFBVSxDQUFDLENB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QUFVLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELCtCQUFTLEdBQVQ7UUFFSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUVJLElBQUcsSUFBSSxDQUFDLE9BQU8sRUFDZjtZQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0wsQ0FBQztJQTVKRDtRQURDLFFBQVEsQ0FBQyxrQkFBUSxDQUFDO2lEQUNNO0lBcEJoQixXQUFXO1FBRHZCLE9BQU87T0FDSyxXQUFXLENBaUx2QjtJQUFELGtCQUFDO0NBakxELEFBaUxDLENBakxnQyxFQUFFLENBQUMsU0FBUyxHQWlMNUM7QUFqTFksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm95U3RpY2sgZnJvbSBcIi4vSm95U3RpY2tcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZXhwb3J0IHZhciBJbnB1dDpJbnB1dFN5c3RlbSA9IG51bGw7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgSW5wdXRTeXN0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnRcclxue1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKVxyXG4gICAgLy8gb25LZXlEb3duOmNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXI7XHJcblxyXG4gICAgX3RhcmdldDphbnkgPSB7fTtcclxuXHJcblxyXG4gICAga2V5czp7W2luZGV4OnN0cmluZ106Ym9vbGVhbn0gPSB7fVxyXG5cclxuICAgIF9fdG91Y2g6Y2MuVmVjMjtcclxuXHJcbiAgICBfX3N0YXJ0TG9jYXRpb24gOmNjLlZlYzI7XHJcblxyXG4gICAgX190b3VjaFZlYzpjYy5WZWMyID0gY2MuVmVjMi5aRVJPO1xyXG5cclxuICAgIHJhZGl1c19heGlzOm51bWJlciA9IDI1NjtcclxuXHJcbiAgICBAcHJvcGVydHkoSm95U3RpY2spXHJcbiAgICBqb3lTdGljayA6Sm95U3RpY2s9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpZiB0YXJnZXQgaXMgYSBDb21wb25lbnQgLHRoaXMgZnVuY3Rpb24gbXVzdCBiZSBjYWxsZWQgaW4gb25Mb2FkXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IFxyXG4gICAgICovXHJcbiAgICBzZXREZWxlZ2F0ZSh0YXJnZXQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgb25Mb2FkKClcclxuICAgIHtcclxuICAgICAgICBJbnB1dCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGxldCBjb21wb25lbnRzID0gdGhpcy5nZXRDb21wb25lbnRzKGNjLkNvbXBvbmVudCk7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNvbXBvbmVudHMubGVuZ3RoO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjb21wOmFueSA9IGNvbXBvbmVudHNbaV1cclxuICAgICAgICAgICAgaWYoY29tcCAhPSB0aGlzICYmIChjb21wLm9uVG91Y2hCZWdhbiB8fCBjb21wLm9uVG91Y2hFbmRlZHx8Y29tcC5vblRvdWNoTW92ZWQpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90YXJnZXQgPSBjb21wO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJbnB1dFN5c3RlbSBDb21wb25lbnQgLT4gdGFyZ2V0OlwiLHRoaXMuX3RhcmdldClcclxuICAgIH1cclxuXHJcbiAgICAvL0hvcml6b250YWxcclxuICAgIC8vVmVydGljYWxcclxuICAgIHN0YXJ0KClcclxuICAgIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sdGhpcy50cmlnZ2VyS2V5RG93bix0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLHRoaXMudHJpZ2dlcktleVVwLHRoaXMpO1xyXG4gICAgICAgIC8vIGlmKHRoaXMuX3RhcmdldClcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULHRoaXMudHJpZ2dlclRvdWNoQmVnYW4sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLHRoaXMudHJpZ2dlclRvdWNoTW92ZWQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsdGhpcy50cmlnZ2VyVG91Y2hFbmRlZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCx0aGlzLnRyaWdnZXJUb3VjaENhbmNlbGVkLCB0aGlzKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldCB0b3VjaCgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX190b3VjaDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBvbmx5IHZhbGlkIHdoZW4gam95c3RpY2sgaXMgZW5hYmxlZCBcclxuICAgIGdldCBheGlzKClcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLmpveVN0aWNrKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5qb3lTdGljay5heGlzO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX190b3VjaFZlYztcclxuICAgIH1cclxuXHJcbiAgICBnZXRLZXkoaylcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5rZXlzW2tdIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdHJpZ2dlcktleVVwKGUpIHtcclxuICAgICAgICBpZih0aGlzLl90YXJnZXQub25LZXlVcClcclxuICAgICAgICAgICAgdGhpcy5fdGFyZ2V0Lm9uS2V5VXAoZXZlbnQpXHJcbiAgICAgICAgdGhpcy5rZXlzW2V2ZW50W1wia2V5XCJdXSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdHJpZ2dlcktleURvd24oZSk6IGFueSB7XHJcbiAgICAgICAgaWYodGhpcy5fdGFyZ2V0Lm9uS2V5RG93bilcclxuICAgICAgICAgICAgdGhpcy5fdGFyZ2V0Lm9uS2V5RG93bihldmVudClcclxuICAgICAgICB0aGlzLmtleXNbZXZlbnRbXCJrZXlcIl1dID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSB0cmlnZ2VyVG91Y2hFbmRlZChlKTogYW55IHtcclxuICAgICAgICBpZih0aGlzLl9fY3VyVG91Y2hJZCAhPS0xICYmIGUuZ2V0SUQoKSAhPSB0aGlzLl9fY3VyVG91Y2hJZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fX2N1clRvdWNoSWQgPSAtMVxyXG4gICAgICAgIGlmKHRoaXMuX3RhcmdldC5vblRvdWNoRW5kZWQpXHJcbiAgICAgICAgICAgIHRoaXMuX3RhcmdldC5vblRvdWNoRW5kZWQoZSlcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9fdG91Y2ggPSBudWxsIFxyXG4gICAgICAgIHRoaXMuX190b3VjaFZlYyA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICBpZihlLmN1cnJlbnRUb3VjaClcclxuICAgICAgICAgICAgaWYodGhpcy5qb3lTdGljaylcclxuICAgICAgICAgICAgICAgIHRoaXMuam95U3RpY2sudG91Y2hFbmQoZS5jdXJyZW50VG91Y2guZ2V0TG9jYXRpb24oKSlcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm1vdmVPZmZzZXQgPSBjYy5WZWMyLlpFUk87XHJcbiAgICB9XHJcblxyXG4gICAgX19sYXN0VG91Y2g6Y2MuVmVjMiA9IGNjLlZlYzIuWkVSTztcclxuICAgIG1vdmVPZmZzZXQ6Y2MuVmVjMiA9IGNjLlZlYzIuWkVSTztcclxuXHJcbiAgICBwcml2YXRlIHRyaWdnZXJUb3VjaE1vdmVkKGUpOiBhbnkge1xyXG4gICAgICAgIGlmKHRoaXMuX19jdXJUb3VjaElkICE9LTEgJiYgZS5nZXRJRCgpICE9IHRoaXMuX19jdXJUb3VjaElkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLl90YXJnZXQub25Ub3VjaE1vdmVkKVxyXG4gICAgICAgICAgICB0aGlzLl90YXJnZXQub25Ub3VjaE1vdmVkKGUpXHJcblxyXG4gICAgICAgIHRoaXMuX190b3VjaCA9IGUuY3VycmVudFRvdWNoLmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlT2Zmc2V0ID0gdGhpcy5fX3RvdWNoLnN1Yih0aGlzLl9fbGFzdFRvdWNoKVxyXG4gICAgICAgIGlmKHRoaXMuX190b3VjaCAmJiB0aGlzLl9fc3RhcnRMb2NhdGlvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX190b3VjaFZlYyA9IHRoaXMuX190b3VjaC5zdWIodGhpcy5fX3N0YXJ0TG9jYXRpb24pO1xyXG4gICAgICAgICAgICBpZih0aGlzLmpveVN0aWNrKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5qb3lTdGljay50b3VjaE1vdmUodGhpcy5fX3RvdWNoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9fbGFzdFRvdWNoID0gdGhpcy5fX3RvdWNoO1xyXG4gICAgfVxyXG5cclxuICAgIF9fY3VyVG91Y2hJZDpudW1iZXIgPSAtMTtcclxuXHJcbiAgICBwcml2YXRlIHRyaWdnZXJUb3VjaEJlZ2FuKGUpOiBhbnkge1xyXG4gICAgICAgIGlmKHRoaXMuX19jdXJUb3VjaElkICE9LTEgJiYgZS5nZXRJRCgpICE9IHRoaXMuX19jdXJUb3VjaElkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLl90YXJnZXQgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuX3RhcmdldC5vblRvdWNoQmVnYW4pXHJcbiAgICAgICAgICAgIHRoaXMuX3RhcmdldC5vblRvdWNoQmVnYW4oZSlcclxuICAgICAgICB0aGlzLl9fY3VyVG91Y2hJZCA9IGUuZ2V0SUQoKTtcclxuICAgICAgICB0aGlzLl9fc3RhcnRMb2NhdGlvbiA9IGUuY3VycmVudFRvdWNoLmdldExvY2F0aW9uKClcclxuICAgICAgICB0aGlzLl9fdG91Y2ggPSBlLmN1cnJlbnRUb3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuX19sYXN0VG91Y2ggPSB0aGlzLl9fdG91Y2g7XHJcbiAgICAgICAgaWYodGhpcy5qb3lTdGljaylcclxuICAgICAgICAgICAgdGhpcy5qb3lTdGljay50b3VjaFN0YXJ0KHRoaXMuX19zdGFydExvY2F0aW9uKVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB0cmlnZ2VyVG91Y2hDYW5jZWxlZChlKTogYW55IHtcclxuICAgICAgICB0aGlzLnRyaWdnZXJUb3VjaEVuZGVkKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuY2hlY2tUb3VjaCwwLjAyKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNoZWNrVG91Y2gpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrVG91Y2goKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMuX190b3VjaClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZU9mZnNldCA9IHRoaXMuX190b3VjaC5zdWIodGhpcy5fX2xhc3RUb3VjaCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19