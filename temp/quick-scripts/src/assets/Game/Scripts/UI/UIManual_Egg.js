"use strict";
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