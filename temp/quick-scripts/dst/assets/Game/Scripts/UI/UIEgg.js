
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIEgg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '79587TMbvtBvI5lnIp+UrOm', 'UIEgg');
// Game/Scripts/UI/UIEgg.ts

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
var UIEgg = /** @class */ (function (_super) {
    __extends(UIEgg, _super);
    function UIEgg() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Bar = null;
        _this.egg_ani = null;
        _this.lizi = null;
        _this.egg1 = null;
        _this.get_but = null;
        _this.isbanner = false;
        _this.isshowed = false;
        _this.randomNum = 0;
        _this.view = "";
        return _this;
    }
    UIEgg.prototype.onLoad = function () {
    };
    UIEgg.prototype.onShow = function (view) {
        event_1.evt.on("Game.Resume", this.onResume, this);
        this.egg_ani.on(cc.Animation.EventType.FINISHED, this.finsh, this);
        this.Bar.progress = 0;
        this.view = view;
        this.isshowed = false;
        this.randomNum = g.randomFloat(0.4, 0.6);
        Platform_1.default.refreshBannerAd();
    };
    UIEgg.prototype.onResume = function () {
        Platform_1.default.hideBannerAd();
    };
    UIEgg.prototype.onDestroy = function () {
    };
    UIEgg.prototype.click_egg = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.unschedule(this.reduce_propress);
                this.Bar.progress += 0.1;
                if (this.Bar.progress >= this.randomNum && !this.isshowed) {
                    this.isshowed = true;
                    this.egg1.y += 10;
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
                    this.unscheduleAllCallbacks();
                    this.get_but.active = false;
                    ToastManager_1.Toast.make("恭喜获得体力 1");
                    event_1.evt.emit("Game.getTili", display_1.default.center, 1);
                    PlayerInfo_1.PlayerInfo.labour += 1;
                    this.egg_ani.play("egg2");
                    return [2 /*return*/];
                }
                this.schedule(this.reduce_propress, 0.1);
                return [2 /*return*/];
            });
        });
    };
    UIEgg.prototype.reduce_propress = function () {
        if (this.isbanner)
            return;
        this.Bar.progress -= 0.01;
        if (this.Bar.progress <= 0) {
            // this.unschedule(this.reduce_propress);
            this.Bar.progress = 0;
            return;
        }
    };
    UIEgg.prototype.onHidden = function () {
        event_1.evt.off(this);
        this.egg_ani.off(cc.Animation.EventType.FINISHED, this.finsh, this);
        Platform_1.default.hideBannerAd();
        this.isbanner = false;
    };
    UIEgg.prototype.finsh = function () {
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
    ], UIEgg.prototype, "Bar", void 0);
    __decorate([
        property(cc.Animation)
    ], UIEgg.prototype, "egg_ani", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], UIEgg.prototype, "lizi", void 0);
    __decorate([
        property(cc.Node)
    ], UIEgg.prototype, "egg1", void 0);
    __decorate([
        property(cc.Node)
    ], UIEgg.prototype, "get_but", void 0);
    UIEgg = __decorate([
        ccclass
    ], UIEgg);
    return UIEgg;
}(mvcView_1.default));
exports.default = UIEgg;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJRWdnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUFvRDtBQUNwRCxtRUFBMkQ7QUFDM0QsdURBQW9EO0FBQ3BELGtFQUE2RDtBQUM3RCx3REFBdUQ7QUFDdkQsMkRBQXNEO0FBR2xELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFBO0FBRXpDO0lBQW1DLHlCQUFPO0lBQTFDO1FBQUEscUVBb0dDO1FBakdHLFNBQUcsR0FBbUIsSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBRzdCLFVBQUksR0FBc0IsSUFBSSxDQUFDO1FBRy9CLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixVQUFJLEdBQVcsRUFBRSxDQUFDOztJQStFdEIsQ0FBQztJQTdFRyxzQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELHNCQUFNLEdBQU4sVUFBTyxJQUFJO1FBRVAsV0FBRyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsQ0FBQTtRQUNqRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJ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QixFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDL0I7YUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTSxFQUFFO1lBQzFCLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUNoQztJQUNMLENBQUM7SUE5RkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztzQ0FDRTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzBDQUNNO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUM7dUNBQ0c7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1Q0FDRztJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNNO0lBZlAsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQW9HekI7SUFBRCxZQUFDO0NBcEdELEFBb0dDLENBcEdrQyxpQkFBTyxHQW9HekM7a0JBcEdvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG12Y1ZpZXcgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9tdmNWaWV3XCI7XG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvVG9hc3RNYW5hZ2VyXCI7XG5pbXBvcnQgeyBldnQgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2NvcmUvZXZlbnRcIjtcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi9QbGF0Zm9ybVwiO1xuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuLi9Db21tb24vQmFzZS9QbGF5ZXJJbmZvXCI7XG5pbXBvcnQgZGlzcGxheSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21pc2MvZGlzcGxheVwiO1xuXG5cbmxldCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlFZ2cgZXh0ZW5kcyBtdmNWaWV3IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcbiAgICBCYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXG4gICAgZWdnX2FuaTogY2MuQW5pbWF0aW9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QYXJ0aWNsZVN5c3RlbSlcbiAgICBsaXppOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBlZ2cxOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGdldF9idXQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgaXNiYW5uZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc3Nob3dlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBcbiAgICByYW5kb21OdW06IG51bWJlciA9IDA7XG4gICAgdmlldzogc3RyaW5nID0gXCJcIjtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICBcbiAgICB9XG5cbiAgICBvblNob3codmlldykge1xuICAgICAgICBcbiAgICAgICAgZXZ0Lm9uKFwiR2FtZS5SZXN1bWVcIiwgdGhpcy5vblJlc3VtZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuZWdnX2FuaS5vbihjYy5BbmltYXRpb24uRXZlbnRUeXBlLkZJTklTSEVELCB0aGlzLmZpbnNoLHRoaXMpXG4gICAgICAgIHRoaXMuQmFyLnByb2dyZXNzID0gMDtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgICAgdGhpcy5pc3Nob3dlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJhbmRvbU51bSA9IGcucmFuZG9tRmxvYXQoMC40LDAuNik7XG4gICAgICAgIFBsYXRmb3JtLnJlZnJlc2hCYW5uZXJBZCgpO1xuICAgIH1cbiAgICBvblJlc3VtZSgpe1xuICAgICAgICBQbGF0Zm9ybS5oaWRlQmFubmVyQWQoKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICBcbiAgICB9XG5cbiAgICBhc3luYyBjbGlja19lZ2coKSB7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnJlZHVjZV9wcm9wcmVzcyk7XG4gICAgICAgIHRoaXMuQmFyLnByb2dyZXNzICs9IDAuMTtcbiAgICAgICAgaWYgKHRoaXMuQmFyLnByb2dyZXNzID49IHRoaXMucmFuZG9tTnVtICYmICF0aGlzLmlzc2hvd2VkKSB7XG4gICAgICAgICAgICB0aGlzLmlzc2hvd2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZWdnMS55ICs9IDEwO1xuICAgICAgICAgICAgUGxhdGZvcm0uc2hvd0Jhbm5lckFkKCk7XG4gICAgICAgICAgICB0aGlzLmlzYmFubmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKF8gPT4ge1xuICAgICAgICAgICAgICAgIGlmKGNjLmlzVmFsaWQodGhpcykpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzYmFubmVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIFBsYXRmb3JtLmhpZGVCYW5uZXJBZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuQmFyLnByb2dyZXNzID49IDEpIHtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgICAgICAgICAgdGhpcy5nZXRfYnV0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgVG9hc3QubWFrZShcIuaBreWWnOiOt+W+l+S9k+WKmyAxXCIpO1xuICAgICAgICAgICAgZXZ0LmVtaXQoXCJHYW1lLmdldFRpbGlcIiwgZGlzcGxheS5jZW50ZXIsIDEpO1xuICAgICAgICAgICAgUGxheWVySW5mby5sYWJvdXIgKz0gMTtcbiAgICAgICAgICAgIHRoaXMuZWdnX2FuaS5wbGF5KFwiZWdnMlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMucmVkdWNlX3Byb3ByZXNzLCAwLjEpO1xuICAgIH1cblxuICAgIHJlZHVjZV9wcm9wcmVzcygpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNiYW5uZXIpIHJldHVybjtcbiAgICAgICAgdGhpcy5CYXIucHJvZ3Jlc3MgLT0gMC4wMTtcbiAgICAgICAgaWYodGhpcy5CYXIucHJvZ3Jlc3MgPD0gMCl7XG4gICAgICAgICAgICAvLyB0aGlzLnVuc2NoZWR1bGUodGhpcy5yZWR1Y2VfcHJvcHJlc3MpO1xuICAgICAgICAgICAgdGhpcy5CYXIucHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25IaWRkZW4oKSB7XG4gICAgICAgIGV2dC5vZmYodGhpcyk7XG4gICAgICAgIHRoaXMuZWdnX2FuaS5vZmYoY2MuQW5pbWF0aW9uLkV2ZW50VHlwZS5GSU5JU0hFRCwgdGhpcy5maW5zaCx0aGlzKVxuICAgICAgICBQbGF0Zm9ybS5oaWRlQmFubmVyQWQoKTtcbiAgICAgICAgdGhpcy5pc2Jhbm5lciA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZpbnNoKCl7XG4gICAgICAgIHZtLmhpZGUodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gXCJ3aW5cIikge1xuICAgICAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlXaW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy52aWV3ID09IFwibG9zZVwiKSB7XG4gICAgICAgICAgICB2bS5zaG93KFwiUHJlZmFicy9VSS9VSUxvc2VcIik7XG4gICAgICAgIH0gICAgICAgICAgICBcbiAgICB9XG5cblxufSJdfQ==