
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/TouchStartGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3e365Py/V5DA6ZR5xNadqew', 'TouchStartGame');
// Game/Scripts/TouchStartGame.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchStartGame = /** @class */ (function (_super) {
    __extends(TouchStartGame, _super);
    function TouchStartGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startBtn = null;
        _this.moveMaxDistance = 100;
        _this._distance = 0;
        _this._x = 0;
        _this._y = 0;
        return _this;
    }
    TouchStartGame.prototype.onLoad = function () {
        this.node.on('touchstart', this.onBgTouchStart, this);
        this.node.on('touchend', this.onBgTouchEnd, this);
    };
    TouchStartGame.prototype.onDestroy = function () {
        this.node.off('touchstart', this.onBgTouchStart, this);
        this.node.off('touchend', this.onBgTouchEnd, this);
    };
    TouchStartGame.prototype.onBgTouchStart = function (event) {
        var pos = event.getLocation();
        // cc.log(`x: ${pos.x} y: ${pos.y}`)
        this._x = pos.x;
        this._y = pos.y;
    };
    TouchStartGame.prototype.onBgTouchEnd = function (event) {
        var pos = event.getLocation();
        // cc.log(`x: ${pos.x} y: ${pos.y}`)
        var x = Math.abs(pos.x - this._x);
        var y = Math.abs(pos.y - this._y);
        if (x < this.moveMaxDistance && y < this.moveMaxDistance) {
            this.startBtn.clickEvents[0].emit(['click']);
        }
    };
    __decorate([
        property({ type: cc.Button, tooltip: '模拟点击的按钮，**记得去掉Button前面的勾**' })
    ], TouchStartGame.prototype, "startBtn", void 0);
    __decorate([
        property({ tooltip: '上下最大移动距离' })
    ], TouchStartGame.prototype, "moveMaxDistance", void 0);
    TouchStartGame = __decorate([
        ccclass
    ], TouchStartGame);
    return TouchStartGame;
}(cc.Component));
exports.default = TouchStartGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVG91Y2hTdGFydEdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUF3Q0M7UUFyQ0csY0FBUSxHQUFjLElBQUksQ0FBQztRQUczQixxQkFBZSxHQUFXLEdBQUcsQ0FBQztRQUU5QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLFFBQUUsR0FBVyxDQUFDLENBQUM7UUFDZixRQUFFLEdBQVcsQ0FBQyxDQUFDOztJQThCbkIsQ0FBQztJQTVCRywrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELGtDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsdUNBQWMsR0FBZCxVQUFlLEtBQUs7UUFDaEIsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlCLG9DQUFvQztRQUVwQyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxxQ0FBWSxHQUFaLFVBQWEsS0FBSztRQUNkLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QixvQ0FBb0M7UUFFcEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNoRDtJQUNMLENBQUM7SUFwQ0Q7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUMsQ0FBQztvREFDeEM7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFDLENBQUM7MkRBQ0Y7SUFOYixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBd0NsQztJQUFELHFCQUFDO0NBeENELEFBd0NDLENBeEMyQyxFQUFFLENBQUMsU0FBUyxHQXdDdkQ7a0JBeENvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG91Y2hTdGFydEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuQnV0dG9uLCB0b29sdGlwOiAn5qih5ouf54K55Ye755qE5oyJ6ZKu77yMKirorrDlvpfljrvmjolCdXR0b27liY3pnaLnmoTli74qKid9KVxyXG4gICAgc3RhcnRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0b29sdGlwOiAn5LiK5LiL5pyA5aSn56e75Yqo6Led56a7J30pXHJcbiAgICBtb3ZlTWF4RGlzdGFuY2U6IG51bWJlciA9IDEwMDtcclxuXHJcbiAgICBfZGlzdGFuY2U6IG51bWJlciA9IDA7XHJcbiAgICBfeDogbnVtYmVyID0gMDtcclxuICAgIF95OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoc3RhcnQnLCB0aGlzLm9uQmdUb3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoZW5kJywgdGhpcy5vbkJnVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKCd0b3VjaHN0YXJ0JywgdGhpcy5vbkJnVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZigndG91Y2hlbmQnLCB0aGlzLm9uQmdUb3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CZ1RvdWNoU3RhcnQoZXZlbnQpIHtcclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAvLyBjYy5sb2coYHg6ICR7cG9zLnh9IHk6ICR7cG9zLnl9YClcclxuXHJcbiAgICAgICAgdGhpcy5feCA9IHBvcy54O1xyXG4gICAgICAgIHRoaXMuX3kgPSBwb3MueTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJnVG91Y2hFbmQoZXZlbnQpIHtcclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAvLyBjYy5sb2coYHg6ICR7cG9zLnh9IHk6ICR7cG9zLnl9YClcclxuXHJcbiAgICAgICAgbGV0IHggPSBNYXRoLmFicyhwb3MueCAtIHRoaXMuX3gpO1xyXG4gICAgICAgIGxldCB5ID0gTWF0aC5hYnMocG9zLnkgLSB0aGlzLl95KTtcclxuICAgICAgICBpZiAoeCA8IHRoaXMubW92ZU1heERpc3RhbmNlICYmIHkgPCB0aGlzLm1vdmVNYXhEaXN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QnRuLmNsaWNrRXZlbnRzWzBdLmVtaXQoWydjbGljayddKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=