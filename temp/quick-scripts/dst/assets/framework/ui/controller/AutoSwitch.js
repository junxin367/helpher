
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/ui/controller/AutoSwitch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '43be6tov0ZPHKS4hB5GBpDY', 'AutoSwitch');
// framework/ui/controller/AutoSwitch.ts

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
var Switcher_1 = require("./Switcher");
var Signal_1 = require("../../core/Signal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var AutoSwitch = /** @class */ (function (_super) {
    __extends(AutoSwitch, _super);
    function AutoSwitch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.switcher = null;
        _this.interval = 1;
        _this.onFinish = new Signal_1.default();
        _this.loop = false;
        _this.isPlaying = false;
        _this.c = 0;
        return _this;
    }
    AutoSwitch.prototype.onLoad = function () {
        this.switcher = this.getComponent(Switcher_1.default);
        this.isPlaying = false;
    };
    AutoSwitch.prototype.play = function (interval) {
        if (interval === void 0) { interval = 0; }
        this.isPlaying = true;
        this.interval = interval || this.interval;
        this.c = 0;
        this.switch();
        this.stop();
        this.schedule(this.switch, this.interval);
        return this.onFinish.wait();
    };
    AutoSwitch.prototype.stop = function () {
        this.unschedule(this.switch);
    };
    AutoSwitch.prototype.switch = function () {
        this.switcher.switch();
        this.c++;
        if (this.loop)
            return;
        if (this.c >= this.switcher._childrenCount) {
            this.unschedule(this.switch);
            this.isPlaying = false;
            this.onFinish.fire();
        }
    };
    __decorate([
        property
    ], AutoSwitch.prototype, "interval", void 0);
    __decorate([
        property
    ], AutoSwitch.prototype, "loop", void 0);
    AutoSwitch = __decorate([
        ccclass,
        menu("Controller/AutoSwitch")
    ], AutoSwitch);
    return AutoSwitch;
}(cc.Component));
exports.default = AutoSwitch;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx1aVxcY29udHJvbGxlclxcQXV0b1N3aXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBa0M7QUFDbEMsNENBQXVDO0FBRWpDLElBQUEsS0FBOEIsRUFBRSxDQUFDLFVBQVUsRUFBekMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBSWxEO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBd0NDO1FBdkNHLGNBQVEsR0FBYSxJQUFJLENBQUE7UUFFekIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixjQUFRLEdBQVcsSUFBSSxnQkFBTSxFQUFFLENBQUM7UUFFaEMsVUFBSSxHQUFZLEtBQUssQ0FBQTtRQUVyQixlQUFTLEdBQVksS0FBSyxDQUFDO1FBTTNCLE9BQUMsR0FBVyxDQUFDLENBQUE7O0lBMEJqQixDQUFDO0lBOUJHLDJCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFHRCx5QkFBSSxHQUFKLFVBQUssUUFBWTtRQUFaLHlCQUFBLEVBQUEsWUFBWTtRQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDMUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7UUFDYixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQseUJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCwyQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDVCxJQUFJLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN0QixJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN4QjtJQUNMLENBQUM7SUFwQ0Q7UUFEQyxRQUFRO2dEQUNZO0lBR3JCO1FBREMsUUFBUTs0Q0FDWTtJQU5KLFVBQVU7UUFGOUIsT0FBTztRQUNQLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztPQUNULFVBQVUsQ0F3QzlCO0lBQUQsaUJBQUM7Q0F4Q0QsQUF3Q0MsQ0F4Q3VDLEVBQUUsQ0FBQyxTQUFTLEdBd0NuRDtrQkF4Q29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3dpdGNoZXIgZnJvbSBcIi4vU3dpdGNoZXJcIjtcclxuaW1wb3J0IFNpZ25hbCBmcm9tIFwiLi4vLi4vY29yZS9TaWduYWxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIG1lbnUgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5AbWVudShcIkNvbnRyb2xsZXIvQXV0b1N3aXRjaFwiKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvU3dpdGNoIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHN3aXRjaGVyOiBTd2l0Y2hlciA9IG51bGxcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgaW50ZXJ2YWw6IG51bWJlciA9IDE7XHJcbiAgICBvbkZpbmlzaDogU2lnbmFsID0gbmV3IFNpZ25hbCgpO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBsb29wOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBpc1BsYXlpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5zd2l0Y2hlciA9IHRoaXMuZ2V0Q29tcG9uZW50KFN3aXRjaGVyKTtcclxuICAgICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgYzogbnVtYmVyID0gMFxyXG5cclxuICAgIHBsYXkoaW50ZXJ2YWwgPSAwKSB7XHJcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBpbnRlcnZhbCB8fCB0aGlzLmludGVydmFsO1xyXG4gICAgICAgIHRoaXMuYyA9IDA7XHJcbiAgICAgICAgdGhpcy5zd2l0Y2goKVxyXG4gICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5zd2l0Y2gsIHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9uRmluaXNoLndhaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnN3aXRjaCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoKCkge1xyXG4gICAgICAgIHRoaXMuc3dpdGNoZXIuc3dpdGNoKCk7XHJcbiAgICAgICAgdGhpcy5jKys7XHJcbiAgICAgICAgaWYgKHRoaXMubG9vcCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmMgPj0gdGhpcy5zd2l0Y2hlci5fY2hpbGRyZW5Db3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5zd2l0Y2gpO1xyXG4gICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm9uRmluaXNoLmZpcmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=