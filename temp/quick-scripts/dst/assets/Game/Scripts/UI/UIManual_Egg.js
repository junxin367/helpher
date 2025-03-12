
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIManual_Egg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1f3196wW/ZI56hwvioBYU0W', 'UIManual_Egg');
// Game/Scripts/UI/UIManual_Egg.ts

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
var mvcView_1 = require("../../../framework/ui/mvcView");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var event_1 = require("../../../framework/core/event");
var Platform_1 = require("../../../framework/extension/Platform");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var display_1 = require("../../../framework/misc/display");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIManual_Egg = /** @class */ (function (_super) {
    __extends(UIManual_Egg, _super);
    function UIManual_Egg() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Bar = null;
        _this.egg_ani = null;
        _this.lizi = null;
        _this.egg1 = null;
        _this.get_but = null;
        _this.isleave = false;
        _this.isbanner = false;
        _this.isshowed = false;
        _this.isplay = false;
        _this.randomNum = 0;
        _this.view = "";
        return _this;
    }
    UIManual_Egg.prototype.onLoad = function () {
        this.egg_ani.on(cc.Animation.EventType.FINISHED, this.finsh, this);
    };
    UIManual_Egg.prototype.onShow = function (view) {
        event_1.evt.on("Game.Resume", this.onResume, this);
        this.Bar.progress = 0;
        this.view = view;
        this.randomNum = g.randomFloat(0.4, 0.6);
        // this.randomNum = (Math.floor(Math.random() * 3) + 4) / 10;
        Platform_1.default.refreshBannerAd();
    };
    UIManual_Egg.prototype.onResume = function () {
        Platform_1.default.hideBannerAd();
    };
    UIManual_Egg.prototype.onDestroy = function () {
        // this.egg_ani.off(cc.Animation.EventType.FINISHED, this.finsh,this)
    };
    UIManual_Egg.prototype.click_egg = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // if (!this.isplay) {
                //     this.isplay = true;
                //     this.egg_ani.play();
                // }
                this.unschedule(this.reduce_propress);
                this.Bar.progress += 0.1;
                if (this.Bar.progress >= this.randomNum && !this.isshowed) {
                    this.isshowed = true;
                    this.egg1.y += 10;
                    // Platform.reloadBannerAd(true);
                    Platform_1.default.showBannerAd();
                    this.isbanner = true;
                    this.scheduleOnce(function (_) {
                        if (cc.isValid(_this)) {
                            _this.isbanner = false;
                            Platform_1.default.hideBannerAd();
                        }
                    }, 2);
                }
                if (this.Bar.progress >= 1) {
                    // this.lizi.resetSystem();
                    this.unscheduleAllCallbacks();
                    this.egg_ani.play("egg2");
                    ToastManager_1.Toast.make("恭喜获得体力 1");
                    event_1.evt.emit("Game.getTili", display_1.default.center, 1);
                    PlayerInfo_1.PlayerInfo.labour += 1;
                    this.get_but.active = false;
                    return [2 /*return*/];
                    // await evt.sleep(1.5);
                    // vm.hide(this);
                    // if (this.view == "win") {
                    //     vm.show("Prefabs/UI/UIWin");
                    // }
                    // else if (this.view == "lose") {
                    //     vm.show("Prefabs/UI/UILose");
                    // }
                }
                this.schedule(this.reduce_propress, 0, 1000, 0.5);
                return [2 /*return*/];
            });
        });
    };
    UIManual_Egg.prototype.reduce_propress = function () {
        if (this.isbanner)
            return;
        this.Bar.progress -= 0.001;
        if (this.Bar.progress <= 0) {
            this.unschedule(this.reduce_propress);
            this.Bar.progress = 0;
        }
    };
    UIManual_Egg.prototype.onHide = function () {
        event_1.evt.off(this);
        Platform_1.default.hideBannerAd();
        this.isbanner = false;
        this.isleave = true;
    };
    UIManual_Egg.prototype.finsh = function () {
        console.log("动画结束");
        vm.hide(this);
        if (this.view == "win") {
            vm.show("Prefabs/UI/UIWin");
        }
        else if (this.view == "lose") {
            vm.show("Prefabs/UI/UILose");
        }
    };
    __decorate([
        property(cc.ProgressBar)
    ], UIManual_Egg.prototype, "Bar", void 0);
    __decorate([
        property(cc.Animation)
    ], UIManual_Egg.prototype, "egg_ani", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], UIManual_Egg.prototype, "lizi", void 0);
    __decorate([
        property(cc.Node)
    ], UIManual_Egg.prototype, "egg1", void 0);
    __decorate([
        property(cc.Node)
    ], UIManual_Egg.prototype, "get_but", void 0);
    UIManual_Egg = __decorate([
        ccclass
    ], UIManual_Egg);
    return UIManual_Egg;
}(mvcView_1.default));
exports.default = UIManual_Egg;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJTWFudWFsX0VnZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBb0Q7QUFDcEQsbUVBQTJEO0FBQzNELHVEQUFvRDtBQUNwRCxrRUFBNkQ7QUFDN0Qsd0RBQXVEO0FBQ3ZELDJEQUFzRDtBQUdsRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQTtBQUV6QztJQUEwQyxnQ0FBTztJQUFqRDtRQUFBLHFFQXNIQztRQW5IRyxTQUFHLEdBQW1CLElBQUksQ0FBQztRQUczQixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUc3QixVQUFJLEdBQXNCLElBQUksQ0FBQztRQUcvQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBSXJCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFJeEIsYUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixjQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLFVBQUksR0FBVyxFQUFFLENBQUM7O0lBNkZ0QixDQUFDO0lBM0ZHLDZCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsQ0FBQTtJQUNyRSxDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFPLElBQUk7UUFDUCxXQUFHLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxH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a0JBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRUQsNEJBQUssR0FBTDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDbkIsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNkLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLEVBQUU7WUFDcEIsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQy9CO2FBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sRUFBRTtZQUMxQixFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDaEM7SUFDTCxDQUFDO0lBaEhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NkNBQ0U7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDTTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDOzhDQUNHO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ0c7SUFJckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDTTtJQWhCUCxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBc0hoQztJQUFELG1CQUFDO0NBdEhELEFBc0hDLENBdEh5QyxpQkFBTyxHQXNIaEQ7a0JBdEhvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG12Y1ZpZXcgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9tdmNWaWV3XCI7XHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9Ub2FzdE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgZXZ0IH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9jb3JlL2V2ZW50XCI7XHJcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi9QbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL0NvbW1vbi9CYXNlL1BsYXllckluZm9cIjtcclxuaW1wb3J0IGRpc3BsYXkgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9taXNjL2Rpc3BsYXlcIjtcclxuXHJcblxyXG5sZXQgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvclxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1hbnVhbF9FZ2cgZXh0ZW5kcyBtdmNWaWV3IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBCYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxyXG4gICAgZWdnX2FuaTogY2MuQW5pbWF0aW9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUGFydGljbGVTeXN0ZW0pXHJcbiAgICBsaXppOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlZ2cxOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2V0X2J1dDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgc3RhdGU6Y2MuQW5pbWF0aW9uU3RhdGVcclxuXHJcbiAgICBpc2xlYXZlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc2Jhbm5lcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNzaG93ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzcGxheTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcmFuZG9tTnVtOiBudW1iZXIgPSAwO1xyXG4gICAgdmlldzogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5lZ2dfYW5pLm9uKGNjLkFuaW1hdGlvbi5FdmVudFR5cGUuRklOSVNIRUQsIHRoaXMuZmluc2gsdGhpcylcclxuICAgIH1cclxuXHJcbiAgICBvblNob3codmlldykge1xyXG4gICAgICAgIGV2dC5vbihcIkdhbWUuUmVzdW1lXCIsIHRoaXMub25SZXN1bWUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuQmFyLnByb2dyZXNzID0gMDtcclxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xyXG4gICAgICAgIHRoaXMucmFuZG9tTnVtID0gZy5yYW5kb21GbG9hdCgwLjQsMC42KTtcclxuICAgICAgICAvLyB0aGlzLnJhbmRvbU51bSA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKSArIDQpIC8gMTA7XHJcbiAgICAgICAgUGxhdGZvcm0ucmVmcmVzaEJhbm5lckFkKCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBvblJlc3VtZSgpe1xyXG4gICAgICAgIFBsYXRmb3JtLmhpZGVCYW5uZXJBZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICAvLyB0aGlzLmVnZ19hbmkub2ZmKGNjLkFuaW1hdGlvbi5FdmVudFR5cGUuRklOSVNIRUQsIHRoaXMuZmluc2gsdGhpcylcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjbGlja19lZ2coKSB7XHJcbiAgICAgICAgLy8gaWYgKCF0aGlzLmlzcGxheSkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmlzcGxheSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZWdnX2FuaS5wbGF5KCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnJlZHVjZV9wcm9wcmVzcyk7XHJcbiAgICAgICAgdGhpcy5CYXIucHJvZ3Jlc3MgKz0gMC4xO1xyXG4gICAgICAgIGlmICh0aGlzLkJhci5wcm9ncmVzcyA+PSB0aGlzLnJhbmRvbU51bSAmJiAhdGhpcy5pc3Nob3dlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzc2hvd2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5lZ2cxLnkgKz0gMTA7XHJcbiAgICAgICAgICAgIC8vIFBsYXRmb3JtLnJlbG9hZEJhbm5lckFkKHRydWUpO1xyXG4gICAgICAgICAgICBQbGF0Zm9ybS5zaG93QmFubmVyQWQoKTtcclxuICAgICAgICAgICAgdGhpcy5pc2Jhbm5lciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKF8gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoY2MuaXNWYWxpZCh0aGlzKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc2Jhbm5lciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIFBsYXRmb3JtLmhpZGVCYW5uZXJBZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5CYXIucHJvZ3Jlc3MgPj0gMSkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmxpemkucmVzZXRTeXN0ZW0oKTtcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWdnX2FuaS5wbGF5KFwiZWdnMlwiKTtcclxuICAgICAgICAgICAgVG9hc3QubWFrZShcIuaBreWWnOiOt+W+l+S9k+WKmyAxXCIpO1xyXG4gICAgICAgICAgICBldnQuZW1pdChcIkdhbWUuZ2V0VGlsaVwiLCBkaXNwbGF5LmNlbnRlciwgMSk7XHJcbiAgICAgICAgICAgIFBsYXllckluZm8ubGFib3VyICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0X2J1dC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAvLyBhd2FpdCBldnQuc2xlZXAoMS41KTtcclxuICAgICAgICAgICAgLy8gdm0uaGlkZSh0aGlzKTtcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMudmlldyA9PSBcIndpblwiKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB2bS5zaG93KFwiUHJlZmFicy9VSS9VSVdpblwiKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBlbHNlIGlmICh0aGlzLnZpZXcgPT0gXCJsb3NlXCIpIHtcclxuICAgICAgICAgICAgLy8gICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJTG9zZVwiKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnJlZHVjZV9wcm9wcmVzcywgMCwgMTAwMCwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICByZWR1Y2VfcHJvcHJlc3MoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNiYW5uZXIpIHJldHVybjtcclxuICAgICAgICB0aGlzLkJhci5wcm9ncmVzcyAtPSAwLjAwMTtcclxuICAgICAgICBpZih0aGlzLkJhci5wcm9ncmVzcyA8PSAwKXtcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMucmVkdWNlX3Byb3ByZXNzKTtcclxuICAgICAgICAgICAgdGhpcy5CYXIucHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkhpZGUoKSB7XHJcbiAgICAgICAgZXZ0Lm9mZih0aGlzKTtcclxuICAgICAgICBQbGF0Zm9ybS5oaWRlQmFubmVyQWQoKTtcclxuICAgICAgICB0aGlzLmlzYmFubmVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc2xlYXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5zaCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5Yqo55S757uT5p2fXCIpXHJcbiAgICAgICAgdm0uaGlkZSh0aGlzKTtcclxuICAgICAgICBpZiAodGhpcy52aWV3ID09IFwid2luXCIpIHtcclxuICAgICAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlXaW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudmlldyA9PSBcImxvc2VcIikge1xyXG4gICAgICAgICAgICB2bS5zaG93KFwiUHJlZmFicy9VSS9VSUxvc2VcIik7XHJcbiAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=