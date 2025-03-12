"use strict";
cc._RF.push(module, 'e7107epGuFLy5NGrPQkHzLS', 'UIWin');
// Game/Scripts/UI/UIWin.ts

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
var LoadingScene_1 = require("../Common/Base/LoadingScene");
var Game_1 = require("../Game");
var event_1 = require("../../../framework/core/event");
var Device_1 = require("../../../framework/misc/Device");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var UserInfo_1 = require("../../../framework/extension/weak_net_game/UserInfo");
var Platform_1 = require("../../../framework/extension/Platform");
var wegame_1 = require("../sdk/wegame");
var CloudFuncTypes_1 = require("../Common/CloudFuncTypes");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var WeakNetGame_1 = require("../../../framework/extension/weak_net_game/WeakNetGame");
var Unity_1 = require("../Common/Unity");
var display_1 = require("../../../framework/misc/display");
var Const_1 = require("../Common/Const");
var Switcher_1 = require("../../../framework/ui/controller/Switcher");
var WinGift_1 = require("../views/WinGift");
var umeng_1 = require("../../../framework/extension/aldsdk/umeng");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIWin = /** @class */ (function (_super) {
    __extends(UIWin, _super);
    function UIWin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_next = null;
        _this.next_btn = null;
        _this.btn_get = null;
        _this.isclick = false;
        _this.isNextDraw = false;
        _this.again_btn = null;
        _this.switch = null;
        _this.setting = null;
        _this.hint_label = null;
        _this.level_label = null;
        _this.switcher = null;
        _this.share_video = null;
        _this.youlike = null;
        _this.drawer = null;
        _this.isGetLabour = false;
        _this.winGift = null;
        _this.dialogToShow = null;
        return _this;
        // update (dt) {}
    }
    UIWin.prototype.onLoad = function () {
        var _this = this;
        this.register(this.share_video, function (_) { return Unity_1.default.iconSOV(WeakNetGame_1.default.getChoice("SOV_Win_Get")); });
        this.register(this.hint_label, function (_) { return _this.showHintLabel(); });
        this.register(this.level_label, function (_) { return _this.showLevelLabel(); });
        this.onClick(this.btn_get, function (_) { return _this.click_getLabour(); });
        this.onInteractable(this.btn_get, function (_) { return !_this.isGetLabour; });
        this.winGift_OriginPos = this.winGift.node.position;
    };
    UIWin.prototype.openEnergyPackage = function () {
        var _this = this;
        if (PlayerInfo_1.PlayerInfo.labour <= 2) {
            wegame_1.default.tryOpenCheat(CloudFuncTypes_1.CloudFuncType.Energy_Package).then(function (v) {
                PlayerInfo_1.PlayerInfo.winLink = 0;
                _this.dialogToShow = "UIEnergyPackage";
            });
        }
    };
    UIWin.prototype.onDisable = function () {
        this.switch.index = 0;
    };
    UIWin.prototype.onResume = function () {
        Platform_1.default.reloadBannerAd();
    };
    UIWin.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isBlock;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isGetLabour = false;
                        this.render();
                        // this.btn_get.active = true;
                        this.isclick = false;
                        this.isNextDraw = false;
                        this.dialogToShow = null;
                        Device_1.default.playSfx("win");
                        isBlock = PlayerInfo_1.PlayerInfo.nextLevel();
                        if (!isBlock) return [3 /*break*/, 2];
                        return [4 /*yield*/, event_1.evt.wait("View.onHidden")];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (PlayerInfo_1.PlayerInfo.level > 11) {
                            this.winGift.node.position = this.winGift_OriginPos;
                            this.winGift.show();
                        }
                        else {
                            this.winGift.hide();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UIWin.prototype.onShown = function () {
        var _this = this;
        event_1.evt.on("Game.Resume", this.onResume, this);
        var ps = this.getComponentInChildren(cc.ParticleSystem);
        ps && ps.resetSystem();
        if (PlayerInfo_1.PlayerInfo.isPlayingDaily) {
            this.switch.node.active = false;
        }
        else {
            this.switch.node.active = true;
            var index_1 = 0;
            this.schedule(function (_) {
                var xxing = _this.switch.children[index_1].getChildByName('xxing');
                cc.tween(xxing).to(0.2, { scale: 1.6 }).to(0.2, { scale: 1 }).start();
                _this.switch.index = index_1;
                index_1++;
                if (index_1 > Math.min(Game_1.default.instance.star, 3)) {
                    _this.unscheduleAllCallbacks();
                }
            }, 0.3);
            if (PlayerInfo_1.PlayerInfo.level_star[PlayerInfo_1.PlayerInfo.playinglevel] < Game_1.default.instance.star) {
                PlayerInfo_1.PlayerInfo.star += (Game_1.default.instance.star - PlayerInfo_1.PlayerInfo.level_star[PlayerInfo_1.PlayerInfo.playinglevel]);
                PlayerInfo_1.PlayerInfo.level_star[PlayerInfo_1.PlayerInfo.playinglevel] = Game_1.default.instance.star;
            }
        }
        // ttsdk.stop_recorder();
        this.init();
        if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.OS_ANDROID) {
            this.next_btn.active = true;
        }
    };
    UIWin.prototype.start = function () {
    };
    UIWin.prototype.showHintLabel = function () {
        if (PlayerInfo_1.PlayerInfo.playinglevel != PlayerInfo_1.PlayerInfo.level || PlayerInfo_1.PlayerInfo.isPlayingDaily) {
            this.hint_label.node.active = false;
            return "";
        }
        if (PlayerInfo_1.PlayerInfo.playinglevel == Const_1.default.Chapter_Unlock * 10) {
            return "更多关卡！即将上线";
        }
        else {
            if (PlayerInfo_1.PlayerInfo.playinglevel % 10 == 0) {
                return "新章节已解锁";
            }
            return "还差" + (10 - PlayerInfo_1.PlayerInfo.level % 10) + "关解锁第" + (Math.ceil(PlayerInfo_1.PlayerInfo.level / 10) + 1) + "章";
        }
    };
    UIWin.prototype.showLevelLabel = function () {
        return "第" + PlayerInfo_1.PlayerInfo.getCurrentPlayingLevel() + "关";
    };
    UIWin.prototype.click_level = function () {
        if (PlayerInfo_1.PlayerInfo.isPlayingDaily) {
            vm.show("Prefabs/UI/UIChallengeChapter");
        }
        else {
            vm.show("Prefabs/UI/UIChapter");
        }
    };
    UIWin.prototype.click_setting = function () {
        vm.show("Prefabs/UI/UISetting");
    };
    UIWin.prototype.click_skin = function () {
        // vm.show("Prefabs/UI/UISkin");
        event_1.evt.emit('Main.skin');
    };
    UIWin.prototype.nextRandomLevel = function () {
        console.log("随机关卡");
        if (PlayerInfo_1.PlayerInfo.isPlayingDaily) {
            var lvrow = csv.daily_level.get(g.randomInt(1, PlayerInfo_1.PlayerInfo.maxDailyLv));
            return lvrow.id;
        }
        else {
            var lvrow = csv.level.get(g.randomInt(2, csv.level.size));
            return lvrow.id;
        }
    };
    UIWin.prototype.click_next = function () {
        this.continue();
        // if (PlayerInfo.isPlayingDaily) {
        //     if ((csv.Config.Challenge_Level_Show_AD == PlayerInfo.playingDailyLevel) || (((PlayerInfo.playingDailyLevel - csv.Config.Challenge_Level_Show_AD) % csv.Config.Challenge_Level_Show_AD_Interval) == 0) && (PlayerInfo.playingDailyLevel > csv.Config.Challenge_Level_Show_AD)) {
        //         WeakNetGame.doChoice("SOV_ShowAD", _ => {
        //             this.continue();
        //         }, this);
        //     }
        //     else if ((csv.Config.Challenge_Level_Show_AD_Skip == PlayerInfo.playingDailyLevel) || (((PlayerInfo.playingDailyLevel - csv.Config.Challenge_Level_Show_AD_Skip) % csv.Config.Challenge_Level_Show_AD_Skip_Interval) == 0) && (PlayerInfo.playingDailyLevel > csv.Config.Challenge_Level_Show_AD_Skip)) {
        //         Platform.showInterstitial(_ => {
        //             this.continue();
        //         }, this)
        //     }
        //     else {
        //         this.check_getgun();
        //     }
        //     return;
        // }
        // if ((csv.Config.Level_Show_AD == PlayerInfo.playinglevel) || (((PlayerInfo.playinglevel - csv.Config.Level_Show_AD) % csv.Config.Level_Show_AD_Interval) == 0) && (PlayerInfo.playinglevel > csv.Config.Level_Show_AD)) {
        //     WeakNetGame.doChoice("SOV_ShowAD", _ => {
        //         this.continue();
        //     }, this);
        // }
        // else if ((csv.Config.Level_Show_AD_Skip == PlayerInfo.playinglevel) || (((PlayerInfo.playinglevel - csv.Config.Level_Show_AD_Skip) % csv.Config.Level_Show_AD_Skip_Interval) == 0) && (PlayerInfo.playinglevel > csv.Config.Level_Show_AD_Skip)) {
        //     Platform.showInterstitial(_ => {
        //         this.continue();
        //     }, this)
        // }
        // else {
        //     this.check_getgun();
        // }
    };
    UIWin.prototype.check_getgun = function () {
        var _this = this;
        if (!UserInfo_1.UserInfo.gun_num && !UserInfo_1.UserInfo.isGetGunEnd) {
            var ran = Math.random();
            if (PlayerInfo_1.PlayerInfo.level >= csv.Config.Start_Lv_Get_Gun
                && UserInfo_1.UserInfo.gunViewDay < csv.Config.Get_Gun_Limt_Day
                && UserInfo_1.UserInfo.gunView < csv.Config.Get_Gun_Limt
                && ran < csv.Config.Get_Gun_Pro) {
                vm.show("Prefabs/UI/UIGetGun", function (_) {
                    _this.continue();
                }, "isGetGunEnd");
                return;
            }
        }
        this.continue();
    };
    UIWin.prototype.continue = function () {
        var _this = this;
        if (this.isclick)
            return;
        if (PlayerInfo_1.PlayerInfo.isPlayingDaily) {
            if (PlayerInfo_1.PlayerInfo.playingDailyLevel > PlayerInfo_1.PlayerInfo.maxDailyLv) {
                vm.show("Prefabs/UI/UIChallengeChapter");
                ToastManager_1.Toast.make("已挑战至最新进度");
                return;
            }
        }
        else {
            if (PlayerInfo_1.PlayerInfo.playinglevel > csv.level.size) {
                LoadingScene_1.default.goto("Main");
                return;
            }
        }
        if (PlayerInfo_1.PlayerInfo.labour > 0) {
            this.isclick = true;
            this.flytili();
        }
        else {
            vm.show("Prefabs/UI/UIGetLabour", function (_) {
                _this.flytili();
            }, false);
        }
    };
    UIWin.prototype.goNext = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (PlayerInfo_1.PlayerInfo.isPlayingDaily) {
                    if (PlayerInfo_1.PlayerInfo.isRandomLevel)
                        PlayerInfo_1.PlayerInfo.playingDailyLevel = this.nextRandomLevel();
                }
                else {
                    if (PlayerInfo_1.PlayerInfo.isRandomLevel)
                        PlayerInfo_1.PlayerInfo.playinglevel = this.nextRandomLevel();
                }
                Game_1.default.instance.loader.level = PlayerInfo_1.PlayerInfo.getCurrentPlayingLevel();
                PlayerInfo_1.PlayerInfo.save();
                vm.hide(this);
                return [2 /*return*/];
            });
        });
    };
    UIWin.prototype.flytili = function () {
        var self = this;
        var tili = cc.instantiate(Game_1.default.instance.tili);
        var tar = new cc.Vec2(this.btn_next.position.x, this.btn_next.position.y);
        var wpos = Game_1.default.instance.tili.getBoundingBoxToWorld().center;
        var startpos = this.btn_next.parent.convertToNodeSpaceAR(wpos);
        var move = cc.moveTo(0.5, tar).easing(cc.easeSineOut());
        var seq = cc.sequence(move, cc.callFunc(function (_) {
            tili.destroy();
            PlayerInfo_1.PlayerInfo.labour--;
            self.goNext();
        }));
        tili.parent = this.btn_next.parent;
        tili.setPosition(startpos);
        tili.runAction(seq);
    };
    UIWin.prototype.click_home = function () {
        LoadingScene_1.default.goto("Main");
    };
    UIWin.prototype.onHidden = function () {
        event_1.evt.off(this);
    };
    UIWin.prototype.onDestroy = function () {
        // if (PlayerInfo.isShowSDK()) window['zzsdkui'].unscheduleAllCallbacks();
        event_1.evt.off(this);
    };
    UIWin.prototype.click_getLabour = function () {
        var _this = this;
        umeng_1.umeng.onEvent('rewardAd', 'labourWinShow');
        WeakNetGame_1.default.doChoice("SOV_Win_Get", function (_) {
            _this.isGetLabour = true;
            var r = csv.Config.Get_Energey_Count || 3;
            PlayerInfo_1.PlayerInfo.labour += r;
            PlayerInfo_1.PlayerInfo.save("labour");
            umeng_1.umeng.onEvent('rewardAd', 'labourWinRewarded');
            event_1.evt.emit("Game.getTili", display_1.default.center, r);
            ToastManager_1.Toast.make("获得" + r + "点体力");
            _this.render();
            // vm.show("Prefabs/UI/UIDoubleGet", r);
        }, this);
    };
    __decorate([
        property(cc.Node)
    ], UIWin.prototype, "btn_next", void 0);
    __decorate([
        property(cc.Node)
    ], UIWin.prototype, "next_btn", void 0);
    __decorate([
        property(cc.Node)
    ], UIWin.prototype, "btn_get", void 0);
    __decorate([
        property(cc.Node)
    ], UIWin.prototype, "again_btn", void 0);
    __decorate([
        property(Switcher_1.default)
    ], UIWin.prototype, "switch", void 0);
    __decorate([
        property(cc.Node)
    ], UIWin.prototype, "setting", void 0);
    __decorate([
        property(cc.Label)
    ], UIWin.prototype, "hint_label", void 0);
    __decorate([
        property(cc.Label)
    ], UIWin.prototype, "level_label", void 0);
    __decorate([
        property(Switcher_1.default)
    ], UIWin.prototype, "switcher", void 0);
    __decorate([
        property(cc.Sprite)
    ], UIWin.prototype, "share_video", void 0);
    __decorate([
        property(WinGift_1.default)
    ], UIWin.prototype, "winGift", void 0);
    UIWin = __decorate([
        ccclass
    ], UIWin);
    return UIWin;
}(mvcView_1.default));
exports.default = UIWin;

cc._RF.pop();