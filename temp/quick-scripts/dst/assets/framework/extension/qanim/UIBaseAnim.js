
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/qanim/UIBaseAnim.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd128d8EHFFKJr4q2gDSWpo2', 'UIBaseAnim');
// framework/extension/qanim/UIBaseAnim.ts

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
var Signal_1 = require("../../core/Signal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIBaseAnim = /** @class */ (function (_super) {
    __extends(UIBaseAnim, _super);
    function UIBaseAnim() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pasr = new PasrTimer_1.PasrTimer(0, 0, 0, 0);
        _this.easeType = EaseType_1.EaseType.linear;
        _this.onFinish = new Signal_1.default();
        return _this;
    }
    UIBaseAnim.prototype.onFinished = function () {
        this.enabled = false;
    };
    UIBaseAnim.prototype.onLoad = function () {
        this.onFinish.add(this.onFinished, this);
    };
    UIBaseAnim.prototype.onDestroy = function () {
        this.onFinish.remove(this.onFinished, this);
    };
    UIBaseAnim.prototype.start = function () {
    };
    UIBaseAnim.prototype.play = function () {
        this.enabled = true;
        this.pasr.reset();
        return this.onFinish.wait();
    };
    UIBaseAnim.prototype.update = function (dt) {
        if (!this.pasr.isFinished()) {
            var t = this.pasr.Tick(dt);
            if (this.pasr.isFinished()) {
                this.onFinish.fire();
                return;
            }
            var f = cc.easing[EaseType_1.EaseType[this.easeType]];
            t = f(t);
            this.onTick(t);
        }
    };
    __decorate([
        property({ type: cc.Enum(EaseType_1.EaseType) })
    ], UIBaseAnim.prototype, "easeType", void 0);
    UIBaseAnim = __decorate([
        ccclass
    ], UIBaseAnim);
    return UIBaseAnim;
}(cc.Component));
exports.default = UIBaseAnim;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHFhbmltXFxVSUJhc2VBbmltLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFzQztBQUN0QyxrREFBaUQ7QUFDakQsNENBQXVDO0FBRWpDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlELDhCQUFZO0lBQTdEO1FBQUEscUVBNkNDO1FBNUNHLFVBQUksR0FBYyxJQUFJLHFCQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFNUMsY0FBUSxHQUFhLG1CQUFRLENBQUMsTUFBTSxDQUFDO1FBRXJDLGNBQVEsR0FBVyxJQUFJLGdCQUFNLEVBQUUsQ0FBQzs7SUF3Q3BDLENBQUM7SUFyQ0csK0JBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRCwyQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsOEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELDBCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQseUJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCwyQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQzFCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDckIsT0FBTzthQUNWO1lBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxtQkFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO1lBQzFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xCO0lBQ0wsQ0FBQztJQXRDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFRLENBQUMsRUFBRSxDQUFDO2dEQUNEO0lBSFgsVUFBVTtRQUR2QyxPQUFPO09BQ3NCLFVBQVUsQ0E2Q3ZDO0lBQUQsaUJBQUM7Q0E3Q0QsQUE2Q0MsQ0E3Q2dELEVBQUUsQ0FBQyxTQUFTLEdBNkM1RDtrQkE3QzZCLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFYXNlVHlwZSB9IGZyb20gXCIuL0Vhc2VUeXBlXCI7XHJcbmltcG9ydCB7IFBhc3JUaW1lciB9IGZyb20gXCIuLi8uLi9taXNjL1Bhc3JUaW1lclwiO1xyXG5pbXBvcnQgU2lnbmFsIGZyb20gXCIuLi8uLi9jb3JlL1NpZ25hbFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFVJQmFzZUFuaW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcGFzcjogUGFzclRpbWVyID0gbmV3IFBhc3JUaW1lcigwLCAwLCAwLCAwKTtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oRWFzZVR5cGUpIH0pXHJcbiAgICBlYXNlVHlwZTogRWFzZVR5cGUgPSBFYXNlVHlwZS5saW5lYXI7XHJcblxyXG4gICAgb25GaW5pc2g6IFNpZ25hbCA9IG5ldyBTaWduYWwoKTtcclxuXHJcblxyXG4gICAgb25GaW5pc2hlZCgpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5vbkZpbmlzaC5hZGQodGhpcy5vbkZpbmlzaGVkLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5vbkZpbmlzaC5yZW1vdmUodGhpcy5vbkZpbmlzaGVkLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcGxheSgpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGFzci5yZXNldCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9uRmluaXNoLndhaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAoIXRoaXMucGFzci5pc0ZpbmlzaGVkKCkpIHtcclxuICAgICAgICAgICAgbGV0IHQgPSB0aGlzLnBhc3IuVGljayhkdClcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFzci5pc0ZpbmlzaGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25GaW5pc2guZmlyZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBmID0gY2MuZWFzaW5nW0Vhc2VUeXBlW3RoaXMuZWFzZVR5cGVdXVxyXG4gICAgICAgICAgICB0ID0gZih0KVxyXG4gICAgICAgICAgICB0aGlzLm9uVGljayh0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3Qgb25UaWNrKHQpXHJcblxyXG59Il19