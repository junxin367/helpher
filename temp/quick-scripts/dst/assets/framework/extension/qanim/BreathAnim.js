
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/qanim/BreathAnim.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c64ecgCUqdJY7vIv+kBf4+Y', 'BreathAnim');
// framework/extension/qanim/BreathAnim.ts

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
var EaseType_1 = require("./EaseType");
var PasrTimer_1 = require("../../misc/PasrTimer");
var Extension_1 = require("./Extension");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
// let EasingEnum = Enum(typeof (easing))
var BreathAnim = /** @class */ (function (_super) {
    __extends(BreathAnim, _super);
    function BreathAnim() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pasrTimer = null;
        _this.duration = 1.0;
        _this.minScale = cc.v2();
        _this.maxScale = cc.v2();
        _this.easeType = EaseType_1.EaseType.linear;
        _this.tmp_scale = cc.v2();
        return _this;
    }
    // @property({ type: EasingEnum })
    // easingType: typeof easing = null
    BreathAnim.prototype.start = function () {
        this.pasrTimer = new PasrTimer_1.PasrTimer(0, this.duration / 2, 0, this.duration / 2);
        this.pasrTimer.reset();
    };
    BreathAnim.prototype.update = function (dt) {
        var t = this.pasrTimer.Tick(dt);
        t = cc.easing[EaseType_1.EaseType[this.easeType]](t);
        this.node.scale = Extension_1.lerpVec2(this.tmp_scale, this.maxScale, this.minScale, t);
        if (this.pasrTimer.isFinished()) {
            this.pasrTimer.reset();
        }
    };
    __decorate([
        property
    ], BreathAnim.prototype, "duration", void 0);
    __decorate([
        property(cc.Vec2)
    ], BreathAnim.prototype, "minScale", void 0);
    __decorate([
        property(cc.Vec2)
    ], BreathAnim.prototype, "maxScale", void 0);
    __decorate([
        property({ type: cc.Enum(EaseType_1.EaseType) })
    ], BreathAnim.prototype, "easeType", void 0);
    BreathAnim = __decorate([
        ccclass("BreathAnim"),
        menu("基础动画/BreathAnim")
    ], BreathAnim);
    return BreathAnim;
}(cc.Component));
exports.default = BreathAnim;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHFhbmltXFxCcmVhdGhBbmltLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFzQztBQUN0QyxrREFBaUQ7QUFDakQseUNBQXVDO0FBQ25DLElBQUEsS0FBOEIsRUFBRSxDQUFDLFVBQVUsRUFBekMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFBO0FBRy9DLHlDQUF5QztBQUl6QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQStCQztRQTlCRyxlQUFTLEdBQWMsSUFBSSxDQUFBO1FBRTNCLGNBQVEsR0FBVyxHQUFHLENBQUM7UUFFdkIsY0FBUSxHQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUU1QixjQUFRLEdBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRzVCLGNBQVEsR0FBYSxtQkFBUSxDQUFDLE1BQU0sQ0FBQztRQVVyQyxlQUFTLEdBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDOztJQVdqQyxDQUFDO0lBbkJHLGtDQUFrQztJQUNsQyxtQ0FBbUM7SUFFbkMsMEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUMxRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFJRCwyQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLG1CQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsb0JBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1RSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUExQkQ7UUFEQyxRQUFRO2dEQUNjO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFRLENBQUMsRUFBRSxDQUFDO2dEQUNEO0lBVnBCLFVBQVU7UUFGOUIsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUM7T0FDSCxVQUFVLENBK0I5QjtJQUFELGlCQUFDO0NBL0JELEFBK0JDLENBL0J1QyxFQUFFLENBQUMsU0FBUyxHQStCbkQ7a0JBL0JvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWFzZVR5cGUgfSBmcm9tIFwiLi9FYXNlVHlwZVwiO1xyXG5pbXBvcnQgeyBQYXNyVGltZXIgfSBmcm9tIFwiLi4vLi4vbWlzYy9QYXNyVGltZXJcIjtcclxuaW1wb3J0IHsgbGVycFZlYzIgfSBmcm9tIFwiLi9FeHRlbnNpb25cIjtcclxubGV0IHsgY2NjbGFzcywgcHJvcGVydHksIG1lbnUgfSA9IGNjLl9kZWNvcmF0b3JcclxuXHJcblxyXG4vLyBsZXQgRWFzaW5nRW51bSA9IEVudW0odHlwZW9mIChlYXNpbmcpKVxyXG5cclxuQGNjY2xhc3MoXCJCcmVhdGhBbmltXCIpXHJcbkBtZW51KFwi5Z+656GA5Yqo55S7L0JyZWF0aEFuaW1cIilcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJlYXRoQW5pbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwYXNyVGltZXI6IFBhc3JUaW1lciA9IG51bGxcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZHVyYXRpb246IG51bWJlciA9IDEuMDtcclxuICAgIEBwcm9wZXJ0eShjYy5WZWMyKVxyXG4gICAgbWluU2NhbGU6IGNjLlZlYzIgPSBjYy52MigpO1xyXG4gICAgQHByb3BlcnR5KGNjLlZlYzIpXHJcbiAgICBtYXhTY2FsZTogY2MuVmVjMiA9IGNjLnYyKCk7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRW51bShFYXNlVHlwZSkgfSlcclxuICAgIGVhc2VUeXBlOiBFYXNlVHlwZSA9IEVhc2VUeXBlLmxpbmVhcjtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBFYXNpbmdFbnVtIH0pXHJcbiAgICAvLyBlYXNpbmdUeXBlOiB0eXBlb2YgZWFzaW5nID0gbnVsbFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMucGFzclRpbWVyID0gbmV3IFBhc3JUaW1lcigwLCB0aGlzLmR1cmF0aW9uIC8gMiwgMCwgdGhpcy5kdXJhdGlvbiAvIDIpXHJcbiAgICAgICAgdGhpcy5wYXNyVGltZXIucmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICB0bXBfc2NhbGU6IGNjLlZlYzIgPSBjYy52MigpO1xyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHZhciB0ID0gdGhpcy5wYXNyVGltZXIuVGljayhkdCk7XHJcbiAgICAgICAgdCA9IGNjLmVhc2luZ1tFYXNlVHlwZVt0aGlzLmVhc2VUeXBlXV0odClcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSBsZXJwVmVjMih0aGlzLnRtcF9zY2FsZSwgdGhpcy5tYXhTY2FsZSwgdGhpcy5taW5TY2FsZSwgdCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGFzclRpbWVyLmlzRmluaXNoZWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhc3JUaW1lci5yZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=