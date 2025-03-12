"use strict";
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