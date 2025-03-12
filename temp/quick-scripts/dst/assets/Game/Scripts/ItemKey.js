
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/ItemKey.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c0cb0VvZCNA8q3LL+7jUnQZ', 'ItemKey');
// Game/Scripts/ItemKey.ts

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
var Door_1 = require("./Door");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemKey = /** @class */ (function (_super) {
    __extends(ItemKey, _super);
    function ItemKey() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.door = null;
        _this.light = null;
        _this.once = true;
        return _this;
    }
    ItemKey.prototype.onLoad = function () {
        this.light = this.node.getChildByName("light");
    };
    ItemKey.prototype.start = function () {
    };
    ItemKey.prototype.go = function () {
        if (!this.once) {
            return;
        }
        //先放大，再飞到门里去
        // let winsize = cc.director.getWinSize();
        this.light.destroy();
        // let pos = cc.visibleRect.center;
        var pos2 = this.door.node.position;
        cc.tween(this.node).to(0.5, { position: pos2 }, { easing: "sineInOut" }).call(this.onReachTarget.bind(this)).start();
        // cc.tween(this.node).to(1.0, { scale: 2 }).delay(1.2).to(1.0, { scale: 1 }).start();
    };
    ItemKey.prototype.onReachTarget = function () {
        this.door.unlock();
        this.node.destroy();
    };
    __decorate([
        property(Door_1.default)
    ], ItemKey.prototype, "door", void 0);
    ItemKey = __decorate([
        ccclass
    ], ItemKey);
    return ItemKey;
}(cc.Component));
exports.default = ItemKey;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcSXRlbUtleS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBeUI7QUFJckIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUE7QUFFekM7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUFtQ0M7UUFoQ0csVUFBSSxHQUFTLElBQUksQ0FBQztRQUVsQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFVBQUksR0FBRyxJQUFJLENBQUM7O0lBNEJoQixDQUFDO0lBMUJHLHdCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCx1QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELG9CQUFFLEdBQUY7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLE9BQU87U0FDVjtRQUNELFlBQVk7UUFDWiwwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyQixtQ0FBbUM7UUFDbkMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFBO1FBQ2xDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNwSCxzRkFBc0Y7SUFDMUYsQ0FBQztJQUVELCtCQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQTlCRDtRQURDLFFBQVEsQ0FBQyxjQUFJLENBQUM7eUNBQ0c7SUFIRCxPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBbUMzQjtJQUFELGNBQUM7Q0FuQ0QsQUFtQ0MsQ0FuQ29DLEVBQUUsQ0FBQyxTQUFTLEdBbUNoRDtrQkFuQ29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG9vciBmcm9tIFwiLi9Eb29yXCJcclxuaW1wb3J0IGNjVXRpbCBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3V0aWxzL2NjVXRpbFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4vQ29tbW9uL0Jhc2UvUGxheWVySW5mb1wiO1xyXG5cclxubGV0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3JcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbUtleSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KERvb3IpXHJcbiAgICBkb29yOiBEb29yID0gbnVsbDtcclxuXHJcbiAgICBsaWdodDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgb25jZSA9IHRydWU7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubGlnaHQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsaWdodFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ28oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9uY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WFiOaUvuWkp++8jOWGjemjnuWIsOmXqOmHjOWOu1xyXG4gICAgICAgIC8vIGxldCB3aW5zaXplID0gY2MuZGlyZWN0b3IuZ2V0V2luU2l6ZSgpO1xyXG4gICAgICAgIHRoaXMubGlnaHQuZGVzdHJveSgpO1xyXG4gICAgICAgIC8vIGxldCBwb3MgPSBjYy52aXNpYmxlUmVjdC5jZW50ZXI7XHJcbiAgICAgICAgbGV0IHBvczIgPSB0aGlzLmRvb3Iubm9kZS5wb3NpdGlvblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC41LCB7IHBvc2l0aW9uOiBwb3MyIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLmNhbGwodGhpcy5vblJlYWNoVGFyZ2V0LmJpbmQodGhpcykpLnN0YXJ0KClcclxuICAgICAgICAvLyBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDEuMCwgeyBzY2FsZTogMiB9KS5kZWxheSgxLjIpLnRvKDEuMCwgeyBzY2FsZTogMSB9KS5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVhY2hUYXJnZXQoKSB7XHJcbiAgICAgICAgdGhpcy5kb29yLnVubG9jaygpO1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==