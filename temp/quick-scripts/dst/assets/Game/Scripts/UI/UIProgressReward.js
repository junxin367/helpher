
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIProgressReward.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b1021yBMtAYo3JPepa8CDD', 'UIProgressReward');
// Game/Scripts/UI/UIProgressReward.ts

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
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BoxConfig = {
    Skin: { percent: 45 },
    Energy: { percent: 30, num: 3 },
    Prop: { percent: 25 } //1,2,3
};
var UIProgressReward = /** @class */ (function (_super) {
    __extends(UIProgressReward, _super);
    function UIProgressReward() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layout = null;
        _this.pool = [];
        _this.once = true;
        return _this;
    }
    UIProgressReward.prototype.onLoad = function () {
    };
    UIProgressReward.prototype.onShown = function () {
        this.once = true;
        this.layout.children.forEach(function (v) { return v.getChildByName("box").active = false; });
        this.pool.splice(0);
        if (!PlayerInfo_1.PlayerInfo.isAllSkinUnlocked()) {
            for (var k in BoxConfig) {
                var v = BoxConfig[k];
                for (var i = 0; i < v.percent; i++) {
                    this.pool.push(k);
                }
            }
        }
    };
    UIProgressReward.prototype.click_box = function (sender, msg) {
        if (!this.once)
            return;
        this.once = false;
        var id = parseInt(msg);
        var box = this.layout.children[id];
        var fx = box.getChildByName("box");
        fx.active = true;
        var display = fx.getComponent(dragonBones.ArmatureDisplay);
        display.playAnimation("open", 1);
        // open box 
        this.scheduleOnce(this.openBox, 0.5);
    };
    UIProgressReward.prototype.openBox = function () {
        var k = 'Energy';
        if (this.pool.length > 0) {
            k = g.getRandom(this.pool);
        }
        else {
            if (Math.random() > 0.5) {
                k = 'Prop';
            }
        }
        var cfg = BoxConfig[k];
        vm.show("Prefabs/UI/UIProgressRewardGet", k, cfg);
        this.scheduleOnce(this.hide, 1);
    };
    UIProgressReward.prototype.hide = function () {
        vm.hide(this);
    };
    __decorate([
        property(cc.Node)
    ], UIProgressReward.prototype, "layout", void 0);
    UIProgressReward = __decorate([
        ccclass
    ], UIProgressReward);
    return UIProgressReward;
}(cc.Component));
exports.default = UIProgressReward;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJUHJvZ3Jlc3NSZXdhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsd0RBQXVEO0FBRW5ELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFBO0FBRXpDLElBQU0sU0FBUyxHQUFHO0lBQ2QsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtJQUNyQixNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7SUFDL0IsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU87Q0FDaEMsQ0FBQTtBQUdEO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBd0RDO1FBckRHLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFhLEVBQUUsQ0FBQTtRQU1uQixVQUFJLEdBQUcsSUFBSSxDQUFDOztJQTZDaEIsQ0FBQztJQWpERyxpQ0FBTSxHQUFOO0lBRUEsQ0FBQztJQUdELGtDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBRSxDQUFDLE1BQU0sR0FBRyxLQUFLLEVBQXZDLENBQXVDLENBQUMsQ0FBQTtRQUMxRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNuQixJQUFJLENBQUMsdUJBQVUsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFO1lBQ2pDLEtBQUssSUFBSSxDQUFDLElBQUksU0FBUyxFQUFFO2dCQUNyQixJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtpQkFDcEI7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUVELG9DQUFTLEdBQVQsVUFBVSxNQUFNLEVBQUUsR0FBRztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQyxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2xDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFBO1FBQzFELE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2hDLFlBQVk7UUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGtDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUE7UUFDaEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQzdCO2FBQU07WUFDSCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEVBQUU7Z0JBQ3JCLENBQUMsR0FBRyxNQUFNLENBQUE7YUFDYjtTQUNKO1FBQ0QsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRUQsK0JBQUksR0FBSjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDakIsQ0FBQztJQXBERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNLO0lBSE4sZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0F3RHBDO0lBQUQsdUJBQUM7Q0F4REQsQUF3REMsQ0F4RDZDLEVBQUUsQ0FBQyxTQUFTLEdBd0R6RDtrQkF4RG9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb3ggZnJvbSBcIi4uL0JveFwiO1xyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvVG9hc3RNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi4vQ29tbW9uL0Jhc2UvUGxheWVySW5mb1wiO1xyXG5cclxubGV0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3JcclxuXHJcbmNvbnN0IEJveENvbmZpZyA9IHtcclxuICAgIFNraW46IHsgcGVyY2VudDogNDUgfSwvLyByYW5kb20gc2tpbiBcclxuICAgIEVuZXJneTogeyBwZXJjZW50OiAzMCwgbnVtOiAzIH0sXHJcbiAgICBQcm9wOiB7IHBlcmNlbnQ6IDI1IH0gLy8xLDIsM1xyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVByb2dyZXNzUmV3YXJkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxheW91dDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcG9vbDogc3RyaW5nW10gPSBbXVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25jZSA9IHRydWU7XHJcbiAgICBvblNob3duKCkge1xyXG4gICAgICAgIHRoaXMub25jZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sYXlvdXQuY2hpbGRyZW4uZm9yRWFjaCh2ID0+IHYuZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIikhLmFjdGl2ZSA9IGZhbHNlKVxyXG4gICAgICAgIHRoaXMucG9vbC5zcGxpY2UoMClcclxuICAgICAgICBpZiAoIVBsYXllckluZm8uaXNBbGxTa2luVW5sb2NrZWQoKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrIGluIEJveENvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSBCb3hDb25maWdba11cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdi5wZXJjZW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvb2wucHVzaChrKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrX2JveChzZW5kZXIsIG1zZykge1xyXG4gICAgICAgIGlmICghdGhpcy5vbmNlKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5vbmNlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlkID0gcGFyc2VJbnQobXNnKTtcclxuICAgICAgICBsZXQgYm94ID0gdGhpcy5sYXlvdXQuY2hpbGRyZW5baWRdO1xyXG4gICAgICAgIGxldCBmeCA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImJveFwiKVxyXG4gICAgICAgIGZ4LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IGRpc3BsYXkgPSBmeC5nZXRDb21wb25lbnQoZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5KVxyXG4gICAgICAgIGRpc3BsYXkucGxheUFuaW1hdGlvbihcIm9wZW5cIiwgMSlcclxuICAgICAgICAvLyBvcGVuIGJveCBcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLm9wZW5Cb3gsIDAuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkJveCgpIHtcclxuICAgICAgICBsZXQgayA9ICdFbmVyZ3knXHJcbiAgICAgICAgaWYgKHRoaXMucG9vbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGsgPSBnLmdldFJhbmRvbSh0aGlzLnBvb2wpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcclxuICAgICAgICAgICAgICAgIGsgPSAnUHJvcCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2ZnID0gQm94Q29uZmlnW2tdO1xyXG4gICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJUHJvZ3Jlc3NSZXdhcmRHZXRcIiwgaywgY2ZnKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuaGlkZSwgMSlcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIHZtLmhpZGUodGhpcylcclxuICAgIH1cclxufSJdfQ==