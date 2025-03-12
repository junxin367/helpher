
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/FrameSwitch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5c1b6NpjU9OVYdNX6jc7+Qv', 'FrameSwitch');
// framework/misc/FrameSwitch.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
var FrameSwitcher = /** @class */ (function (_super) {
    __extends(FrameSwitcher, _super);
    function FrameSwitcher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.frames = [];
        // LIFE-CYCLE CALLBACKS:
        _this.target = null;
        _this._index = 0;
        _this.randomOnLoad = false;
        return _this;
        // update (dt) {}
    }
    FrameSwitcher.prototype.onLoad = function () {
        if (this.target == null)
            this.target = this.getComponent(cc.Sprite);
        if (this.randomOnLoad)
            this.switchRandom();
    };
    FrameSwitcher.prototype.switchRandom = function () {
        this.index = g.randomInt(0, this.frames.length);
    };
    Object.defineProperty(FrameSwitcher.prototype, "index", {
        get: function () {
            return this._index;
        },
        set: function (k) {
            this.switch(k);
        },
        enumerable: false,
        configurable: true
    });
    FrameSwitcher.prototype.switch = function (index) {
        var len = this.frames.length;
        var idx = Math.min(Math.max(0, index), len - 1);
        this.target.spriteFrame = this.frames[idx];
        this._index = idx;
    };
    FrameSwitcher.prototype.start = function () {
    };
    __decorate([
        property([cc.SpriteFrame])
    ], FrameSwitcher.prototype, "frames", void 0);
    __decorate([
        property(cc.Sprite)
    ], FrameSwitcher.prototype, "target", void 0);
    __decorate([
        property
    ], FrameSwitcher.prototype, "randomOnLoad", void 0);
    FrameSwitcher = __decorate([
        ccclass
    ], FrameSwitcher);
    return FrameSwitcher;
}(cc.Component));
exports.default = FrameSwitcher;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxGcmFtZVN3aXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXVDLEVBQUUsQ0FBQyxVQUFVLEVBQW5ELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFDLGdCQUFnQixzQkFBaUIsQ0FBQztBQUczRDtJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQWlEQztRQTlDRyxZQUFNLEdBQW9CLEVBQUUsQ0FBQTtRQUM1Qix3QkFBd0I7UUFFeEIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUV4QixZQUFNLEdBQVcsQ0FBQyxDQUFBO1FBR2xCLGtCQUFZLEdBQVcsS0FBSyxDQUFDOztRQXFDN0IsaUJBQWlCO0lBQ3JCLENBQUM7SUFwQ0csOEJBQU0sR0FBTjtRQUVJLElBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsSUFBRyxJQUFJLENBQUMsWUFBWTtZQUNoQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDM0IsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFFSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELHNCQUFJLGdDQUFLO2FBS1Q7WUFFSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7UUFDdEIsQ0FBQzthQVJELFVBQVUsQ0FBQztZQUVQLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsQ0FBQzs7O09BQUE7SUFPRCw4QkFBTSxHQUFOLFVBQU8sS0FBSztRQUVSLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLEVBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDdEIsQ0FBQztJQUVELDZCQUFLLEdBQUw7SUFFQSxDQUFDO0lBM0NEO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lEQUNDO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ0k7SUFLeEI7UUFEQyxRQUFRO3VEQUNvQjtJQVhaLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FpRGpDO0lBQUQsb0JBQUM7Q0FqREQsQUFpREMsQ0FqRDBDLEVBQUUsQ0FBQyxTQUFTLEdBaUR0RDtrQkFqRG9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eSxyZXF1aXJlQ29tcG9uZW50fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZVN3aXRjaGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIGZyYW1lczpjYy5TcHJpdGVGcmFtZVtdID0gW11cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHRhcmdldDpjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIF9pbmRleCA6bnVtYmVyID0gMFxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcmFuZG9tT25Mb2FkOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBvbkxvYWQoKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMudGFyZ2V0ID09IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBpZih0aGlzLnJhbmRvbU9uTG9hZClcclxuICAgICAgICAgICAgdGhpcy5zd2l0Y2hSYW5kb20oKVxyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaFJhbmRvbSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGcucmFuZG9tSW50KDAsdGhpcy5mcmFtZXMubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaW5kZXgoaylcclxuICAgIHtcclxuICAgICAgICB0aGlzLnN3aXRjaChrKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaW5kZXgoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbmRleFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzd2l0Y2goaW5kZXgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGxlbiA9IHRoaXMuZnJhbWVzLmxlbmd0aDtcclxuICAgICAgICBsZXQgaWR4ID0gTWF0aC5taW4oTWF0aC5tYXgoMCxpbmRleCksbGVuLTEpO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0LnNwcml0ZUZyYW1lID0gdGhpcy5mcmFtZXNbaWR4XVxyXG4gICAgICAgIHRoaXMuX2luZGV4ID0gaWR4O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=