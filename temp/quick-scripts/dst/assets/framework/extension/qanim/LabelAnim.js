
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/qanim/LabelAnim.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0d9c5C1JZxCCaI1096eaH/G', 'LabelAnim');
// framework/extension/qanim/LabelAnim.ts

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
var UIBaseAnim_1 = require("./UIBaseAnim");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var LabelAnim = /** @class */ (function (_super) {
    __extends(LabelAnim, _super);
    function LabelAnim() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.duration = 1;
        _this.from = 0;
        _this.to = 0;
        _this.label = null;
        return _this;
    }
    LabelAnim.prototype.onLoad = function () {
        this.label = this.getComponent(cc.Label);
    };
    LabelAnim.prototype.start = function () {
    };
    LabelAnim.prototype.play = function (duration, from, to) {
        if (duration === void 0) { duration = 0; }
        if (from === void 0) { from = 0; }
        if (to === void 0) { to = 0; }
        this.from = from;
        this.to = to;
        this.duration = duration || this.duration;
        this.pasr.a = this.duration;
        this.pasr.reset();
        return this.onFinish.wait();
    };
    LabelAnim.prototype.onTick = function (t) {
        var v = cc.misc.lerp(this.from, this.to, t);
        this.label.string = v.toFixed();
    };
    LabelAnim = __decorate([
        ccclass,
        menu("基础动画/LabelAnim")
    ], LabelAnim);
    return LabelAnim;
}(UIBaseAnim_1.default));
exports.default = LabelAnim;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHFhbmltXFxMYWJlbEFuaW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMkNBQXNDO0FBRWhDLElBQUEsS0FBOEIsRUFBRSxDQUFDLFVBQVUsRUFBekMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBSWxEO0lBQXVDLDZCQUFVO0lBQWpEO1FBQUEscUVBOEJDO1FBN0JHLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixRQUFFLEdBQVcsQ0FBQyxDQUFDO1FBQ2YsV0FBSyxHQUFhLElBQUksQ0FBQTs7SUEwQjFCLENBQUM7SUF6QkcsMEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVELHlCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsd0JBQUksR0FBSixVQUFLLFFBQW9CLEVBQUUsSUFBZ0IsRUFBRSxFQUFjO1FBQXRELHlCQUFBLEVBQUEsWUFBb0I7UUFBRSxxQkFBQSxFQUFBLFFBQWdCO1FBQUUsbUJBQUEsRUFBQSxNQUFjO1FBQ3ZELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFBO1FBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUUxQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBRWhDLENBQUM7SUFFRCwwQkFBTSxHQUFOLFVBQU8sQ0FBQztRQUNKLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQTNCZ0IsU0FBUztRQUY3QixPQUFPO1FBQ1AsSUFBSSxDQUFDLGdCQUFnQixDQUFDO09BQ0YsU0FBUyxDQThCN0I7SUFBRCxnQkFBQztDQTlCRCxBQThCQyxDQTlCc0Msb0JBQVUsR0E4QmhEO2tCQTlCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVhc2VUeXBlIH0gZnJvbSBcIi4vRWFzZVR5cGVcIjtcclxuaW1wb3J0IFVJQmFzZUFuaW0gZnJvbSBcIi4vVUlCYXNlQW5pbVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgbWVudSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbkBtZW51KFwi5Z+656GA5Yqo55S7L0xhYmVsQW5pbVwiKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbEFuaW0gZXh0ZW5kcyBVSUJhc2VBbmltIHtcclxuICAgIGR1cmF0aW9uOiBudW1iZXIgPSAxO1xyXG4gICAgZnJvbTogbnVtYmVyID0gMDtcclxuICAgIHRvOiBudW1iZXIgPSAwO1xyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubGFiZWwgPSB0aGlzLmdldENvbXBvbmVudChjYy5MYWJlbClcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcGxheShkdXJhdGlvbjogbnVtYmVyID0gMCwgZnJvbTogbnVtYmVyID0gMCwgdG86IG51bWJlciA9IDApIHtcclxuICAgICAgICB0aGlzLmZyb20gPSBmcm9tXHJcbiAgICAgICAgdGhpcy50byA9IHRvXHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uIHx8IHRoaXMuZHVyYXRpb247XHJcblxyXG4gICAgICAgIHRoaXMucGFzci5hID0gdGhpcy5kdXJhdGlvbjtcclxuICAgICAgICB0aGlzLnBhc3IucmVzZXQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5vbkZpbmlzaC53YWl0KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uVGljayh0KSB7XHJcbiAgICAgICAgbGV0IHYgPSBjYy5taXNjLmxlcnAodGhpcy5mcm9tLCB0aGlzLnRvLCB0KTtcclxuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHYudG9GaXhlZCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=