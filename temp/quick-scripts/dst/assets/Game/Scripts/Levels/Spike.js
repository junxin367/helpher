
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Levels/Spike.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bff89TrfjpJ0IqOQOdpY+n3', 'Spike');
// Game/Scripts/Levels/Spike.ts

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
var FSM_1 = require("../../../framework/core/FSM");
var Device_1 = require("../../../framework/misc/Device");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var State;
(function (State) {
    State[State["Hide"] = 0] = "Hide";
    State[State["Show"] = 1] = "Show";
})(State || (State = {}));
var Spike = /** @class */ (function (_super) {
    __extends(Spike, _super);
    function Spike() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fsm = null;
        _this.collider = null;
        _this.spikeNode = null;
        return _this;
    }
    Spike.prototype.onLoad = function () {
        // this.pasr = new PasrTimer(5, 0.1, 2, 0.1)
        this.spikeNode = this.node.getChildByName("spike");
        this.collider = this.getComponentInChildren(cc.PhysicsCollider);
        this.fsm = this.addComponent(FSM_1.default);
        this.fsm.init(this, State);
        this.fsm.enterState(State.Hide);
    };
    Spike.prototype.start = function () {
        // if (this.node.width > this.node.height) {
        //     this.node.height = 30;
        // }
        this.node.height = 40;
    };
    Spike.prototype.onEnter_Show = function () {
        this.spikeNode.group = "spike";
        this.collider.enabled = true;
        this.spikeNode.scaleY = 0;
        Device_1.default.playSfx("spike");
        cc.tween(this.spikeNode).to(0.2, { scaleY: 1 }).start();
    };
    Spike.prototype.onUpdate_Show = function () {
        if (this.fsm.timeElapsed > 2) {
            this.fsm.changeState(State.Hide);
        }
    };
    Spike.prototype.onEnter_Hide = function () {
        this.spikeNode.group = "default";
        this.spikeNode.scaleY = 1;
        cc.tween(this.spikeNode).to(0.2, { scaleY: 0 }).start();
        this.collider.enabled = false;
    };
    Spike.prototype.onUpdate_Hide = function () {
        if (this.fsm.timeElapsed > 5) {
            this.fsm.changeState(State.Show);
        }
    };
    Spike.prototype.onExit_Show = function () {
    };
    Spike.prototype.update = function (dt) {
    };
    Spike = __decorate([
        ccclass
    ], Spike);
    return Spike;
}(cc.Component));
exports.default = Spike;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcTGV2ZWxzXFxTcGlrZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtREFBNkM7QUFDN0MseURBQW9EO0FBRWhELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFBO0FBRXpDLElBQUssS0FHSjtBQUhELFdBQUssS0FBSztJQUNOLGlDQUFJLENBQUE7SUFDSixpQ0FBSSxDQUFBO0FBQ1IsQ0FBQyxFQUhJLEtBQUssS0FBTCxLQUFLLFFBR1Q7QUFHRDtJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQW1FQztRQWpFRyxTQUFHLEdBQVEsSUFBSSxDQUFDO1FBR2hCLGNBQVEsR0FBdUIsSUFBSSxDQUFBO1FBRW5DLGVBQVMsR0FBWSxJQUFJLENBQUE7O0lBNEQ3QixDQUFDO0lBMURHLHNCQUFNLEdBQU47UUFDSSw0Q0FBNEM7UUFFNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUVsRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFaEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQUcsQ0FBQyxDQUFBO1FBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFcEMsQ0FBQztJQUVELHFCQUFLLEdBQUw7UUFDSSw0Q0FBNEM7UUFDNUMsNkJBQTZCO1FBQzdCLElBQUk7UUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELDRCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUMxQixnQkFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN2QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFNUQsQ0FBQztJQUVELDZCQUFhLEdBQWI7UUFDSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBRUQsNEJBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDMUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBRUQsNkJBQWEsR0FBYjtRQUNJLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQztJQUNMLENBQUM7SUFFRCwyQkFBVyxHQUFYO0lBRUEsQ0FBQztJQUlELHNCQUFNLEdBQU4sVUFBTyxFQUFFO0lBRVQsQ0FBQztJQWpFZ0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQW1FekI7SUFBRCxZQUFDO0NBbkVELEFBbUVDLENBbkVrQyxFQUFFLENBQUMsU0FBUyxHQW1FOUM7a0JBbkVvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFzclRpbWVyIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9taXNjL1Bhc3JUaW1lclwiXHJcbmltcG9ydCBGU00gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9jb3JlL0ZTTVwiXHJcbmltcG9ydCBEZXZpY2UgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9taXNjL0RldmljZVwiO1xyXG5cclxubGV0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3JcclxuXHJcbmVudW0gU3RhdGUge1xyXG4gICAgSGlkZSxcclxuICAgIFNob3csXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwaWtlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBmc206IEZTTSA9IG51bGw7XHJcblxyXG5cclxuICAgIGNvbGxpZGVyOiBjYy5QaHlzaWNzQ29sbGlkZXIgPSBudWxsXHJcblxyXG4gICAgc3Bpa2VOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyB0aGlzLnBhc3IgPSBuZXcgUGFzclRpbWVyKDUsIDAuMSwgMiwgMC4xKVxyXG5cclxuICAgICAgICB0aGlzLnNwaWtlTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwaWtlXCIpXHJcblxyXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSB0aGlzLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuUGh5c2ljc0NvbGxpZGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20gPSB0aGlzLmFkZENvbXBvbmVudChGU00pXHJcbiAgICAgICAgdGhpcy5mc20uaW5pdCh0aGlzLCBTdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5mc20uZW50ZXJTdGF0ZShTdGF0ZS5IaWRlKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMubm9kZS53aWR0aCA+IHRoaXMubm9kZS5oZWlnaHQpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmhlaWdodCA9IDMwO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gNDA7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbnRlcl9TaG93KCkge1xyXG4gICAgICAgIHRoaXMuc3Bpa2VOb2RlLmdyb3VwID0gXCJzcGlrZVwiO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zcGlrZU5vZGUuc2NhbGVZID0gMDtcclxuICAgICAgICBEZXZpY2UucGxheVNmeChcInNwaWtlXCIpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5zcGlrZU5vZGUpLnRvKDAuMiwgeyBzY2FsZVk6IDEgfSkuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGVfU2hvdygpIHtcclxuICAgICAgICBpZiAodGhpcy5mc20udGltZUVsYXBzZWQgPiAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnNtLmNoYW5nZVN0YXRlKFN0YXRlLkhpZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkVudGVyX0hpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5zcGlrZU5vZGUuZ3JvdXAgPSBcImRlZmF1bHRcIjtcclxuICAgICAgICB0aGlzLnNwaWtlTm9kZS5zY2FsZVkgPSAxO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuc3Bpa2VOb2RlKS50bygwLjIsIHsgc2NhbGVZOiAwIH0pLnN0YXJ0KClcclxuICAgICAgICB0aGlzLmNvbGxpZGVyLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZV9IaWRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmZzbS50aW1lRWxhcHNlZCA+IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5mc20uY2hhbmdlU3RhdGUoU3RhdGUuU2hvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRXhpdF9TaG93KCkge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG5cclxuICAgIH1cclxuXHJcbn0iXX0=