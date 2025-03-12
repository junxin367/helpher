
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIGunShow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f0dcevptxhLMZVSzE59V/OO', 'UIGunShow');
// Game/Scripts/UI/UIGunShow.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Thunder_1 = require("../Levels/Thunder");
var event_1 = require("../../../framework/core/event");
var mvcView_1 = require("../../../framework/ui/mvcView");
var IconSov_1 = require("../../../framework/extension/weak_net_game/IconSov");
var Switcher_1 = require("../../../framework/ui/controller/Switcher");
var Main_1 = require("../Main");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIGunShow = /** @class */ (function (_super) {
    __extends(UIGunShow, _super);
    function UIGunShow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.skeleton_girl = null;
        _this.skeleton_man = null;
        return _this;
    }
    UIGunShow.prototype.onLoad = function () {
        var _this = this;
        this.registerSubViews(IconSov_1.default);
        this.registerSwitcher(this.switch, function (_) { return _this.showBtn(); });
    };
    UIGunShow.prototype.showBtn = function () {
    };
    UIGunShow.prototype.onShown = function () {
        this.playAnim();
        this.schedule(this.playAnim, 1.5);
        this.render();
    };
    UIGunShow.prototype.playAnim = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.skeleton_man.playAnimation("idle", 0);
                        this.skeleton_girl.playAnimation("gun_out", 1);
                        return [4 /*yield*/, event_1.evt.sleep(0.5)];
                    case 1:
                        _a.sent();
                        this.skeleton_girl.playAnimation("gun", 1);
                        this.thunder.node.active = true;
                        this.thunder.play(this.skeleton_girl.node, this.skeleton_man.node, cc.v3(30, 80, 0));
                        this.skeleton_man.playAnimation("dead_smoke", 1);
                        return [4 /*yield*/, event_1.evt.sleep(0.5)];
                    case 2:
                        _a.sent();
                        this.thunder.node.active = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    UIGunShow.prototype.click_close = function () {
        vm.hide(this);
    };
    UIGunShow.prototype.click_getGun = function () {
    };
    UIGunShow.prototype.click_goto = function () {
        vm.hide(this);
        Main_1.default.instance.click_play();
    };
    UIGunShow.prototype.onHidden = function () {
        this.thunder.node.active = false;
        this.unschedule(this.playAnim);
    };
    __decorate([
        property(Thunder_1.default)
    ], UIGunShow.prototype, "thunder", void 0);
    __decorate([
        property(dragonBones.ArmatureDisplay)
    ], UIGunShow.prototype, "skeleton_girl", void 0);
    __decorate([
        property(dragonBones.ArmatureDisplay)
    ], UIGunShow.prototype, "skeleton_man", void 0);
    __decorate([
        property(cc.Node)
    ], UIGunShow.prototype, "tips", void 0);
    __decorate([
        property(cc.Node)
    ], UIGunShow.prototype, "btn", void 0);
    __decorate([
        property(Switcher_1.default)
    ], UIGunShow.prototype, "switch", void 0);
    UIGunShow = __decorate([
        ccclass
    ], UIGunShow);
    return UIGunShow;
}(mvcView_1.default));
exports.default = UIGunShow;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJR3VuU2hvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBdUM7QUFDdkMsdURBQW9EO0FBSXBELHlEQUFvRDtBQUNwRCw4RUFBeUU7QUFFekUsc0VBQWlFO0FBQ2pFLGdDQUEyQjtBQUV2QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQTtBQUV6QztJQUF1Qyw2QkFBTztJQUE5QztRQUFBLHFFQWlFQztRQTVERyxtQkFBYSxHQUFnQyxJQUFJLENBQUE7UUFHakQsa0JBQVksR0FBZ0MsSUFBSSxDQUFBOztJQXlEcEQsQ0FBQztJQTdDRywwQkFBTSxHQUFOO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQU8sQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDO0lBRTVELENBQUM7SUFFRCwyQkFBTyxHQUFQO0lBRUEsQ0FBQztJQUVELDJCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUssNEJBQVEsR0FBZDs7Ozs7d0JBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFBO3dCQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUE7d0JBQzlDLHFCQUFNLFdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUE7O3dCQUFwQixTQUFvQixDQUFDO3dCQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7d0JBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUNwRixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUE7d0JBQ2hELHFCQUFNLFdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUE7O3dCQUFwQixTQUFvQixDQUFDO3dCQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOzs7OztLQUNwQztJQUVELCtCQUFXLEdBQVg7UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxnQ0FBWSxHQUFaO0lBQ0EsQ0FBQztJQUVELDhCQUFVLEdBQVY7UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2QsY0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUM5QixDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQTVERDtRQURDLFFBQVEsQ0FBQyxpQkFBTyxDQUFDOzhDQUNEO0lBRWpCO1FBREMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUM7b0RBQ1c7SUFHakQ7UUFEQyxRQUFRLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQzttREFDVTtJQUdoRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNKO0lBSWQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDTDtJQUdiO1FBREMsUUFBUSxDQUFDLGtCQUFRLENBQUM7NkNBQ0Y7SUFsQkEsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQWlFN0I7SUFBRCxnQkFBQztDQWpFRCxBQWlFQyxDQWpFc0MsaUJBQU8sR0FpRTdDO2tCQWpFb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaHVuZGVyIGZyb20gXCIuLi9MZXZlbHMvVGh1bmRlclwiXHJcbmltcG9ydCB7IGV2dCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvY29yZS9ldmVudFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL0NvbW1vbi9CYXNlL1BsYXllckluZm9cIjtcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL1RvYXN0TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvVXNlckluZm9cIjtcclxuaW1wb3J0IG12Y1ZpZXcgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9tdmNWaWV3XCI7XHJcbmltcG9ydCBJY29uU292IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvSWNvblNvdlwiO1xyXG5pbXBvcnQgV2Vha05ldEdhbWUgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9XZWFrTmV0R2FtZVwiO1xyXG5pbXBvcnQgU3dpdGNoZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9jb250cm9sbGVyL1N3aXRjaGVyXCI7XHJcbmltcG9ydCBNYWluIGZyb20gXCIuLi9NYWluXCI7XHJcblxyXG5sZXQgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvclxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUd1blNob3cgZXh0ZW5kcyBtdmNWaWV3IHtcclxuXHJcbiAgICBAcHJvcGVydHkoVGh1bmRlcilcclxuICAgIHRodW5kZXI6IFRodW5kZXI7XHJcbiAgICBAcHJvcGVydHkoZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5KVxyXG4gICAgc2tlbGV0b25fZ2lybDogZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5ID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkpXHJcbiAgICBza2VsZXRvbl9tYW46IGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRpcHM6IGNjLk5vZGU7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuOiBjYy5Ob2RlO1xyXG5cclxuICAgIEBwcm9wZXJ0eShTd2l0Y2hlcilcclxuICAgIHN3aXRjaDogU3dpdGNoZXI7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJTdWJWaWV3cyhJY29uU292KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyU3dpdGNoZXIodGhpcy5zd2l0Y2gsIF8gPT4gdGhpcy5zaG93QnRuKCkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93QnRuKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblNob3duKCkge1xyXG4gICAgICAgIHRoaXMucGxheUFuaW0oKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMucGxheUFuaW0sIDEuNSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBwbGF5QW5pbSgpIHtcclxuICAgICAgICB0aGlzLnNrZWxldG9uX21hbi5wbGF5QW5pbWF0aW9uKFwiaWRsZVwiLCAwKVxyXG4gICAgICAgIHRoaXMuc2tlbGV0b25fZ2lybC5wbGF5QW5pbWF0aW9uKFwiZ3VuX291dFwiLCAxKVxyXG4gICAgICAgIGF3YWl0IGV2dC5zbGVlcCgwLjUpO1xyXG4gICAgICAgIHRoaXMuc2tlbGV0b25fZ2lybC5wbGF5QW5pbWF0aW9uKFwiZ3VuXCIsIDEpXHJcbiAgICAgICAgdGhpcy50aHVuZGVyLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRodW5kZXIucGxheSh0aGlzLnNrZWxldG9uX2dpcmwubm9kZSwgdGhpcy5za2VsZXRvbl9tYW4ubm9kZSwgY2MudjMoMzAsIDgwLCAwKSlcclxuICAgICAgICB0aGlzLnNrZWxldG9uX21hbi5wbGF5QW5pbWF0aW9uKFwiZGVhZF9zbW9rZVwiLCAxKVxyXG4gICAgICAgIGF3YWl0IGV2dC5zbGVlcCgwLjUpO1xyXG4gICAgICAgIHRoaXMudGh1bmRlci5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrX2Nsb3NlKCkge1xyXG4gICAgICAgIHZtLmhpZGUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tfZ2V0R3VuKCkge1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrX2dvdG8oKSB7XHJcbiAgICAgICAgdm0uaGlkZSh0aGlzKTtcclxuICAgICAgICBNYWluLmluc3RhbmNlLmNsaWNrX3BsYXkoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uSGlkZGVuKCkge1xyXG4gICAgICAgIHRoaXMudGh1bmRlci5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnBsYXlBbmltKVxyXG4gICAgfVxyXG5cclxufSJdfQ==