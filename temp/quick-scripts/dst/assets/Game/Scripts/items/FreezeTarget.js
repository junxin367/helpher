
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/items/FreezeTarget.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '863b2axkS1AToFMdctqXni9', 'FreezeTarget');
// Game/Scripts/items/FreezeTarget.ts

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
var AIEnemy_1 = require("../AIEnemy");
var Device_1 = require("../../../framework/misc/Device");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FreezeTarget = /** @class */ (function (_super) {
    __extends(FreezeTarget, _super);
    function FreezeTarget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ice = null;
        _this.duration = 10.0;
        _this.enemy = null;
        _this.label = null;
        _this.timeleft = 0;
        return _this;
    }
    FreezeTarget.prototype.onLoad = function () {
        this.ice = this.node.getChildByName("ice");
        this.enemy = this.getComponent(AIEnemy_1.default);
        this.label = this.getComponentInChildren(cc.Label);
    };
    FreezeTarget.prototype.start = function () {
    };
    FreezeTarget.prototype.cast = function () {
        Device_1.default.playSfx("ice");
        if (this.timeleft <= 0) {
            this.ice.opacity = 0.0;
            cc.tween(this.ice).to(1.0, { opacity: 255 }).start();
        }
        this.ice.active = true;
        this.unschedule(this.hide);
        this.scheduleOnce(this.hide, this.duration);
        this.timeleft = this.duration;
        this.label.string = this.timeleft.toString();
        this.label.node.scaleX = Math.sign(this.node.scaleX * this.enemy.baseScale);
        // freeze 
        this.enemy.go_frozen();
        this.unschedule(this.countdown);
        this.schedule(this.countdown, 1);
    };
    FreezeTarget.prototype.countdown = function () {
        this.timeleft -= 1;
        this.label.string = this.timeleft.toFixed();
    };
    FreezeTarget.prototype.hide = function () {
        this.ice.active = false;
        this.enemy.exit_frozen();
    };
    FreezeTarget = __decorate([
        ccclass
    ], FreezeTarget);
    return FreezeTarget;
}(cc.Component));
exports.default = FreezeTarget;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcaXRlbXNcXEZyZWV6ZVRhcmdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUM7QUFDakMseURBQW9EO0FBRTlDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBa0RDO1FBakRHLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFDcEIsY0FBUSxHQUFXLElBQUksQ0FBQztRQUN4QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFDdkIsY0FBUSxHQUFXLENBQUMsQ0FBQzs7SUE0Q3pCLENBQUM7SUEzQ0csNkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFPLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFdkQsQ0FBQztJQUVELDRCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsMkJBQUksR0FBSjtRQUNJLGdCQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBRXJCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN4RDtRQUVELElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDM0UsVUFBVTtRQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBR3JDLENBQUM7SUFFRCxnQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQsMkJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFqRGdCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FrRGhDO0lBQUQsbUJBQUM7Q0FsREQsQUFrREMsQ0FsRHlDLEVBQUUsQ0FBQyxTQUFTLEdBa0RyRDtrQkFsRG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQUlFbmVteSBmcm9tIFwiLi4vQUlFbmVteVwiO1xyXG5pbXBvcnQgRGV2aWNlIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWlzYy9EZXZpY2VcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmVlemVUYXJnZXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgaWNlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGR1cmF0aW9uOiBudW1iZXIgPSAxMC4wO1xyXG4gICAgZW5lbXk6IEFJRW5lbXkgPSBudWxsO1xyXG5cclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICB0aW1lbGVmdDogbnVtYmVyID0gMDtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmljZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImljZVwiKVxyXG4gICAgICAgIHRoaXMuZW5lbXkgPSB0aGlzLmdldENvbXBvbmVudChBSUVuZW15KTtcclxuICAgICAgICB0aGlzLmxhYmVsID0gdGhpcy5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNhc3QoKSB7XHJcbiAgICAgICAgRGV2aWNlLnBsYXlTZngoXCJpY2VcIilcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudGltZWxlZnQgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmljZS5vcGFjaXR5ID0gMC4wO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmljZSkudG8oMS4wLCB7IG9wYWNpdHk6IDI1NSB9KS5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pY2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5oaWRlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmhpZGUsIHRoaXMuZHVyYXRpb24pO1xyXG4gICAgICAgIHRoaXMudGltZWxlZnQgPSB0aGlzLmR1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gdGhpcy50aW1lbGVmdC50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMubGFiZWwubm9kZS5zY2FsZVggPSBNYXRoLnNpZ24odGhpcy5ub2RlLnNjYWxlWCAqIHRoaXMuZW5lbXkuYmFzZVNjYWxlKVxyXG4gICAgICAgIC8vIGZyZWV6ZSBcclxuICAgICAgICB0aGlzLmVuZW15LmdvX2Zyb3plbigpO1xyXG5cclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jb3VudGRvd24pO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5jb3VudGRvd24sIDEpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY291bnRkb3duKCkge1xyXG4gICAgICAgIHRoaXMudGltZWxlZnQgLT0gMTtcclxuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHRoaXMudGltZWxlZnQudG9GaXhlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5pY2UuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbmVteS5leGl0X2Zyb3plbigpO1xyXG4gICAgfVxyXG59Il19