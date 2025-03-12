
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIWin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJV2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUFvRDtBQUNwRCw0REFBdUQ7QUFDdkQsZ0NBQTJCO0FBQzNCLHVEQUFvRDtBQUNwRCx5REFBb0Q7QUFDcEQsbUVBQTJEO0FBQzNELGdGQUErRTtBQUMvRSxrRUFBNkQ7QUFFN0Qsd0NBQW1DO0FBQ25DLDJEQUF5RDtBQUN6RCx3REFBdUQ7QUFDdkQsc0ZBQWlGO0FBQ2pGLHlDQUFvQztBQUNwQywyREFBc0Q7QUFDdEQseUNBQW9DO0FBQ3BDLHNFQUFpRTtBQUNqRSw0Q0FBdUM7QUFDdkMsbUVBQWtFO0FBQzVELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFPO0lBQTFDO1FBQUEscUVBNFVDO1FBelVHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFHNUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBR3hCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFHN0IsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFHN0IsYUFB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QUNkLHdDQUF3QztRQUM1QyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDWixDQUFDO0lBdlVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNNO0lBT3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsa0JBQVEsQ0FBQzt5Q0FDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ1M7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDVTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxrQkFBUSxDQUFDOzJDQUNPO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ1U7SUFROUI7UUFEQyxRQUFRLENBQUMsaUJBQU8sQ0FBQzswQ0FDTTtJQTFDUCxLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBNFV6QjtJQUFELFlBQUM7Q0E1VUQsQUE0VUMsQ0E1VWtDLGlCQUFPLEdBNFV6QztrQkE1VW9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXZjVmlldyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL212Y1ZpZXdcIjtcbmltcG9ydCBMb2FkaW5nU2NlbmUgZnJvbSBcIi4uL0NvbW1vbi9CYXNlL0xvYWRpbmdTY2VuZVwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCB7IGV2dCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvY29yZS9ldmVudFwiO1xuaW1wb3J0IERldmljZSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21pc2MvRGV2aWNlXCI7XG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvVG9hc3RNYW5hZ2VyXCI7XG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvVXNlckluZm9cIjtcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi9QbGF0Zm9ybVwiO1xuaW1wb3J0IFN0YXRIZXBsZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vYWxkc2RrL1N0YXRIZWxwZXJcIjtcbmltcG9ydCB3ZWdhbWUgZnJvbSBcIi4uL3Nkay93ZWdhbWVcIjtcbmltcG9ydCB7IENsb3VkRnVuY1R5cGUgfSBmcm9tIFwiLi4vQ29tbW9uL0Nsb3VkRnVuY1R5cGVzXCI7XG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL0NvbW1vbi9CYXNlL1BsYXllckluZm9cIjtcbmltcG9ydCBXZWFrTmV0R2FtZSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi93ZWFrX25ldF9nYW1lL1dlYWtOZXRHYW1lXCI7XG5pbXBvcnQgVW5pdHkgZnJvbSBcIi4uL0NvbW1vbi9Vbml0eVwiO1xuaW1wb3J0IGRpc3BsYXkgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9taXNjL2Rpc3BsYXlcIjtcbmltcG9ydCBDb25zdCBmcm9tIFwiLi4vQ29tbW9uL0NvbnN0XCI7XG5pbXBvcnQgU3dpdGNoZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9jb250cm9sbGVyL1N3aXRjaGVyXCI7XG5pbXBvcnQgV2luR2lmdCBmcm9tIFwiLi4vdmlld3MvV2luR2lmdFwiO1xuaW1wb3J0IHsgdW1lbmcgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi9hbGRzZGsvdW1lbmdcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVdpbiBleHRlbmRzIG12Y1ZpZXcge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuX25leHQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbmV4dF9idG46IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuX2dldDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBpc2NsaWNrOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBpc05leHREcmF3OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBhZ2Fpbl9idG46IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KFN3aXRjaGVyKVxuICAgIHN3aXRjaDogU3dpdGNoZXIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2V0dGluZzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgaGludF9sYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxldmVsX2xhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoU3dpdGNoZXIpXG4gICAgc3dpdGNoZXI6IFN3aXRjaGVyID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgc2hhcmVfdmlkZW86IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICB5b3VsaWtlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBkcmF3ZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgaXNHZXRMYWJvdXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBwcm9wZXJ0eShXaW5HaWZ0KVxuICAgIHdpbkdpZnQ6IFdpbkdpZnQgPSBudWxsO1xuXG4gICAgd2luR2lmdF9PcmlnaW5Qb3M6IGNjLlZlYzM7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIodGhpcy5zaGFyZV92aWRlbywgXyA9PiBVbml0eS5pY29uU09WKFdlYWtOZXRHYW1lLmdldENob2ljZShcIlNPVl9XaW5fR2V0XCIpKSlcbiAgICAgICAgdGhpcy5yZWdpc3Rlcih0aGlzLmhpbnRfbGFiZWwsIF8gPT4gdGhpcy5zaG93SGludExhYmVsKCkpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKHRoaXMubGV2ZWxfbGFiZWwsIF8gPT4gdGhpcy5zaG93TGV2ZWxMYWJlbCgpKTtcbiAgICAgICAgdGhpcy5vbkNsaWNrKHRoaXMuYnRuX2dldCwgXyA9PiB0aGlzLmNsaWNrX2dldExhYm91cigpKTtcbiAgICAgICAgdGhpcy5vbkludGVyYWN0YWJsZSh0aGlzLmJ0bl9nZXQsIF8gPT4gIXRoaXMuaXNHZXRMYWJvdXIpO1xuXG4gICAgICAgIHRoaXMud2luR2lmdF9PcmlnaW5Qb3MgPSB0aGlzLndpbkdpZnQubm9kZS5wb3NpdGlvbjtcbiAgICB9XG5cbiAgICBvcGVuRW5lcmd5UGFja2FnZSgpIHtcbiAgICAgICAgaWYgKFBsYXllckluZm8ubGFib3VyIDw9IDIpIHtcbiAgICAgICAgICAgIHdlZ2FtZS50cnlPcGVuQ2hlYXQoQ2xvdWRGdW5jVHlwZS5FbmVyZ3lfUGFja2FnZSkudGhlbih2ID0+IHtcbiAgICAgICAgICAgICAgICBQbGF5ZXJJbmZvLndpbkxpbmsgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nVG9TaG93ID0gXCJVSUVuZXJneVBhY2thZ2VcIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaWFsb2dUb1Nob3cgPSBudWxsO1xuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLnN3aXRjaC5pbmRleCA9IDA7XG4gICAgfVxuXG4gICAgb25SZXN1bWUoKSB7XG4gICAgICAgIFBsYXRmb3JtLnJlbG9hZEJhbm5lckFkKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5pc0dldExhYm91ciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAvLyB0aGlzLmJ0bl9nZXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc2NsaWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNOZXh0RHJhdyA9IGZhbHNlXG4gICAgICAgIHRoaXMuZGlhbG9nVG9TaG93ID0gbnVsbDtcbiAgICAgICAgRGV2aWNlLnBsYXlTZngoXCJ3aW5cIik7XG4gICAgICAgIGxldCBpc0Jsb2NrID0gUGxheWVySW5mby5uZXh0TGV2ZWwoKTtcbiAgICAgICAgaWYgKGlzQmxvY2spIHtcbiAgICAgICAgICAgIGF3YWl0IGV2dC53YWl0KFwiVmlldy5vbkhpZGRlblwiKVxuICAgICAgICB9XG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLmxldmVsID4gMTEpIHtcbiAgICAgICAgICAgIHRoaXMud2luR2lmdC5ub2RlLnBvc2l0aW9uID0gdGhpcy53aW5HaWZ0X09yaWdpblBvc1xuICAgICAgICAgICAgdGhpcy53aW5HaWZ0LnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMud2luR2lmdC5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgKFVzZXJJbmZvLmlzTmV3KVxuICAgICAgICAvLyAgICAgU3RhdEhlcGxlci5zZW5kUGF0aChcIuaWsOeUqOaIt+WFs+WNoemAmuWFs+S6uuaVsFwiLCBcIuWFs+WNoVwiLCBQbGF5ZXJJbmZvLnBsYXlpbmdsZXZlbCk7XG4gICAgICAgIC8vIFN0YXRIZXBsZXIuc2VuZFBhdGgoXCLmiYDmnInnlKjmiLflhbPljaHpgJrlhbPkurrmlbBcIiwgXCLlhbPljaFcIiwgUGxheWVySW5mby5wbGF5aW5nbGV2ZWwpO1xuICAgIH1cblxuXG4gICAgb25TaG93bigpIHtcbiAgICAgICAgZXZ0Lm9uKFwiR2FtZS5SZXN1bWVcIiwgdGhpcy5vblJlc3VtZSwgdGhpcyk7XG5cbiAgICAgICAgbGV0IHBzID0gdGhpcy5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLlBhcnRpY2xlU3lzdGVtKTtcbiAgICAgICAgcHMgJiYgcHMucmVzZXRTeXN0ZW0oKTtcblxuICAgICAgICBpZiAoUGxheWVySW5mby5pc1BsYXlpbmdEYWlseSkge1xuICAgICAgICAgICAgdGhpcy5zd2l0Y2gubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKF8gPT4ge1xuICAgICAgICAgICAgICAgIGxldCB4eGluZyA9IHRoaXMuc3dpdGNoLmNoaWxkcmVuW2luZGV4XS5nZXRDaGlsZEJ5TmFtZSgneHhpbmcnKTtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih4eGluZykudG8oMC4yLCB7IHNjYWxlOiAxLjYgfSkudG8oMC4yLCB7IHNjYWxlOiAxIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2guaW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IE1hdGgubWluKEdhbWUuaW5zdGFuY2Uuc3RhciwgMykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMC4zKTtcblxuICAgICAgICAgICAgaWYgKFBsYXllckluZm8ubGV2ZWxfc3RhcltQbGF5ZXJJbmZvLnBsYXlpbmdsZXZlbF0gPCBHYW1lLmluc3RhbmNlLnN0YXIpIHtcbiAgICAgICAgICAgICAgICBQbGF5ZXJJbmZvLnN0YXIgKz0gKEdhbWUuaW5zdGFuY2Uuc3RhciAtIFBsYXllckluZm8ubGV2ZWxfc3RhcltQbGF5ZXJJbmZvLnBsYXlpbmdsZXZlbF0pXG4gICAgICAgICAgICAgICAgUGxheWVySW5mby5sZXZlbF9zdGFyW1BsYXllckluZm8ucGxheWluZ2xldmVsXSA9IEdhbWUuaW5zdGFuY2Uuc3RhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB0dHNkay5zdG9wX3JlY29yZGVyKCk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUyB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dF9idG4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIHNob3dIaW50TGFiZWwoKSB7XG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLnBsYXlpbmdsZXZlbCAhPSBQbGF5ZXJJbmZvLmxldmVsIHx8IFBsYXllckluZm8uaXNQbGF5aW5nRGFpbHkpIHtcbiAgICAgICAgICAgIHRoaXMuaGludF9sYWJlbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFBsYXllckluZm8ucGxheWluZ2xldmVsID09IENvbnN0LkNoYXB0ZXJfVW5sb2NrICogMTApIHtcbiAgICAgICAgICAgIHJldHVybiBcIuabtOWkmuWFs+WNoe+8geWNs+WwhuS4iue6v1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoUGxheWVySW5mby5wbGF5aW5nbGV2ZWwgJSAxMCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi5paw56ug6IqC5bey6Kej6ZSBXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gXCLov5jlt65cIiArICgxMCAtIFBsYXllckluZm8ubGV2ZWwgJSAxMCkgKyBcIuWFs+ino+mUgeesrFwiICsgKE1hdGguY2VpbChQbGF5ZXJJbmZvLmxldmVsIC8gMTApICsgMSkgKyBcIueroFwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd0xldmVsTGFiZWwoKSB7XG4gICAgICAgIHJldHVybiBcIuesrFwiICsgUGxheWVySW5mby5nZXRDdXJyZW50UGxheWluZ0xldmVsKCkgKyBcIuWFs1wiO1xuICAgIH1cblxuXG4gICAgY2xpY2tfbGV2ZWwoKSB7XG5cbiAgICAgICAgaWYgKFBsYXllckluZm8uaXNQbGF5aW5nRGFpbHkpIHtcbiAgICAgICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJQ2hhbGxlbmdlQ2hhcHRlclwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJQ2hhcHRlclwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsaWNrX3NldHRpbmcoKSB7XG5cbiAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlTZXR0aW5nXCIpO1xuICAgIH1cblxuICAgIGNsaWNrX3NraW4oKSB7XG5cbiAgICAgICAgLy8gdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlTa2luXCIpO1xuICAgICAgICBldnQuZW1pdCgnTWFpbi5za2luJyk7XG4gICAgfVxuXG4gICAgbmV4dFJhbmRvbUxldmVsKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIumaj+acuuWFs+WNoVwiKVxuICAgICAgICBpZiAoUGxheWVySW5mby5pc1BsYXlpbmdEYWlseSkge1xuICAgICAgICAgICAgbGV0IGx2cm93ID0gY3N2LmRhaWx5X2xldmVsLmdldChnLnJhbmRvbUludCgxLCBQbGF5ZXJJbmZvLm1heERhaWx5THYpKTtcbiAgICAgICAgICAgIHJldHVybiBsdnJvdy5pZFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGx2cm93ID0gY3N2LmxldmVsLmdldChnLnJhbmRvbUludCgyLCBjc3YubGV2ZWwuc2l6ZSkpXG4gICAgICAgICAgICByZXR1cm4gbHZyb3cuaWRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsaWNrX25leHQoKSB7XG4gICAgICAgIHRoaXMuY29udGludWUoKTtcbiAgICAgICAgLy8gaWYgKFBsYXllckluZm8uaXNQbGF5aW5nRGFpbHkpIHtcbiAgICAgICAgLy8gICAgIGlmICgoY3N2LkNvbmZpZy5DaGFsbGVuZ2VfTGV2ZWxfU2hvd19BRCA9PSBQbGF5ZXJJbmZvLnBsYXlpbmdEYWlseUxldmVsKSB8fCAoKChQbGF5ZXJJbmZvLnBsYXlpbmdEYWlseUxldmVsIC0gY3N2LkNvbmZpZy5DaGFsbGVuZ2VfTGV2ZWxfU2hvd19BRCkgJSBjc3YuQ29uZmlnLkNoYWxsZW5nZV9MZXZlbF9TaG93X0FEX0ludGVydmFsKSA9PSAwKSAmJiAoUGxheWVySW5mby5wbGF5aW5nRGFpbHlMZXZlbCA+IGNzdi5Db25maWcuQ2hhbGxlbmdlX0xldmVsX1Nob3dfQUQpKSB7XG4gICAgICAgIC8vICAgICAgICAgV2Vha05ldEdhbWUuZG9DaG9pY2UoXCJTT1ZfU2hvd0FEXCIsIF8gPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmNvbnRpbnVlKCk7XG4gICAgICAgIC8vICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgLy8gICAgIGVsc2UgaWYgKChjc3YuQ29uZmlnLkNoYWxsZW5nZV9MZXZlbF9TaG93X0FEX1NraXAgPT0gUGxheWVySW5mby5wbGF5aW5nRGFpbHlMZXZlbCkgfHwgKCgoUGxheWVySW5mby5wbGF5aW5nRGFpbHlMZXZlbCAtIGNzdi5Db25maWcuQ2hhbGxlbmdlX0xldmVsX1Nob3dfQURfU2tpcCkgJSBjc3YuQ29uZmlnLkNoYWxsZW5nZV9MZXZlbF9TaG93X0FEX1NraXBfSW50ZXJ2YWwpID09IDApICYmIChQbGF5ZXJJbmZvLnBsYXlpbmdEYWlseUxldmVsID4gY3N2LkNvbmZpZy5DaGFsbGVuZ2VfTGV2ZWxfU2hvd19BRF9Ta2lwKSkge1xuICAgICAgICAvLyAgICAgICAgIFBsYXRmb3JtLnNob3dJbnRlcnN0aXRpYWwoXyA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuY29udGludWUoKTtcbiAgICAgICAgLy8gICAgICAgICB9LCB0aGlzKVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jaGVja19nZXRndW4oKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAoKGNzdi5Db25maWcuTGV2ZWxfU2hvd19BRCA9PSBQbGF5ZXJJbmZvLnBsYXlpbmdsZXZlbCkgfHwgKCgoUGxheWVySW5mby5wbGF5aW5nbGV2ZWwgLSBjc3YuQ29uZmlnLkxldmVsX1Nob3dfQUQpICUgY3N2LkNvbmZpZy5MZXZlbF9TaG93X0FEX0ludGVydmFsKSA9PSAwKSAmJiAoUGxheWVySW5mby5wbGF5aW5nbGV2ZWwgPiBjc3YuQ29uZmlnLkxldmVsX1Nob3dfQUQpKSB7XG4gICAgICAgIC8vICAgICBXZWFrTmV0R2FtZS5kb0Nob2ljZShcIlNPVl9TaG93QURcIiwgXyA9PiB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jb250aW51ZSgpO1xuICAgICAgICAvLyAgICAgfSwgdGhpcyk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSBpZiAoKGNzdi5Db25maWcuTGV2ZWxfU2hvd19BRF9Ta2lwID09IFBsYXllckluZm8ucGxheWluZ2xldmVsKSB8fCAoKChQbGF5ZXJJbmZvLnBsYXlpbmdsZXZlbCAtIGNzdi5Db25maWcuTGV2ZWxfU2hvd19BRF9Ta2lwKSAlIGNzdi5Db25maWcuTGV2ZWxfU2hvd19BRF9Ta2lwX0ludGVydmFsKSA9PSAwKSAmJiAoUGxheWVySW5mby5wbGF5aW5nbGV2ZWwgPiBjc3YuQ29uZmlnLkxldmVsX1Nob3dfQURfU2tpcCkpIHtcbiAgICAgICAgLy8gICAgIFBsYXRmb3JtLnNob3dJbnRlcnN0aXRpYWwoXyA9PiB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jb250aW51ZSgpO1xuICAgICAgICAvLyAgICAgfSwgdGhpcylcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgLy8gICAgIHRoaXMuY2hlY2tfZ2V0Z3VuKCk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBjaGVja19nZXRndW4oKSB7XG4gICAgICAgIGlmICghVXNlckluZm8uZ3VuX251bSAmJiAhVXNlckluZm8uaXNHZXRHdW5FbmQpIHtcbiAgICAgICAgICAgIGxldCByYW4gPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgaWYgKFBsYXllckluZm8ubGV2ZWwgPj0gY3N2LkNvbmZpZy5TdGFydF9Mdl9HZXRfR3VuXG4gICAgICAgICAgICAgICAgJiYgVXNlckluZm8uZ3VuVmlld0RheSA8IGNzdi5Db25maWcuR2V0X0d1bl9MaW10X0RheVxuICAgICAgICAgICAgICAgICYmIFVzZXJJbmZvLmd1blZpZXcgPCBjc3YuQ29uZmlnLkdldF9HdW5fTGltdFxuICAgICAgICAgICAgICAgICYmIHJhbiA8IGNzdi5Db25maWcuR2V0X0d1bl9Qcm9cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJR2V0R3VuXCIsIF8gPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRpbnVlKCk7XG4gICAgICAgICAgICAgICAgfSwgXCJpc0dldEd1bkVuZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250aW51ZSgpO1xuICAgIH1cblxuICAgIGNvbnRpbnVlKCkge1xuICAgICAgICBpZiAodGhpcy5pc2NsaWNrKSByZXR1cm47XG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLmlzUGxheWluZ0RhaWx5KSB7XG4gICAgICAgICAgICBpZiAoUGxheWVySW5mby5wbGF5aW5nRGFpbHlMZXZlbCA+IFBsYXllckluZm8ubWF4RGFpbHlMdikge1xuICAgICAgICAgICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJQ2hhbGxlbmdlQ2hhcHRlclwiKTtcbiAgICAgICAgICAgICAgICBUb2FzdC5tYWtlKFwi5bey5oyR5oiY6Iez5pyA5paw6L+b5bqmXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChQbGF5ZXJJbmZvLnBsYXlpbmdsZXZlbCA+IGNzdi5sZXZlbC5zaXplKSB7XG4gICAgICAgICAgICAgICAgTG9hZGluZ1NjZW5lLmdvdG8oXCJNYWluXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFBsYXllckluZm8ubGFib3VyID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pc2NsaWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZmx5dGlsaSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlHZXRMYWJvdXJcIiwgXyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mbHl0aWxpKCk7XG4gICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnb05leHQoKSB7XG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLmlzUGxheWluZ0RhaWx5KSB7XG4gICAgICAgICAgICBpZiAoUGxheWVySW5mby5pc1JhbmRvbUxldmVsKSBQbGF5ZXJJbmZvLnBsYXlpbmdEYWlseUxldmVsID0gdGhpcy5uZXh0UmFuZG9tTGV2ZWwoKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKFBsYXllckluZm8uaXNSYW5kb21MZXZlbCkgUGxheWVySW5mby5wbGF5aW5nbGV2ZWwgPSB0aGlzLm5leHRSYW5kb21MZXZlbCgpO1xuXG4gICAgICAgIH1cbiAgICAgICAgR2FtZS5pbnN0YW5jZS5sb2FkZXIubGV2ZWwgPSBQbGF5ZXJJbmZvLmdldEN1cnJlbnRQbGF5aW5nTGV2ZWwoKTtcbiAgICAgICAgUGxheWVySW5mby5zYXZlKCk7XG4gICAgICAgIHZtLmhpZGUodGhpcyk7XG4gICAgfVxuXG4gICAgZmx5dGlsaSgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgdGlsaSA9IGNjLmluc3RhbnRpYXRlKEdhbWUuaW5zdGFuY2UudGlsaSk7XG4gICAgICAgIGxldCB0YXIgPSBuZXcgY2MuVmVjMih0aGlzLmJ0bl9uZXh0LnBvc2l0aW9uLngsIHRoaXMuYnRuX25leHQucG9zaXRpb24ueSk7XG4gICAgICAgIGxldCB3cG9zID0gR2FtZS5pbnN0YW5jZS50aWxpLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNlbnRlcjtcbiAgICAgICAgbGV0IHN0YXJ0cG9zID0gdGhpcy5idG5fbmV4dC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod3Bvcyk7XG4gICAgICAgIGxldCBtb3ZlID0gY2MubW92ZVRvKDAuNSwgdGFyKS5lYXNpbmcoY2MuZWFzZVNpbmVPdXQoKSlcbiAgICAgICAgbGV0IHNlcSA9IGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgbW92ZSxcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKF8gPT4ge1xuICAgICAgICAgICAgICAgIHRpbGkuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgUGxheWVySW5mby5sYWJvdXItLTtcbiAgICAgICAgICAgICAgICBzZWxmLmdvTmV4dCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICB0aWxpLnBhcmVudCA9IHRoaXMuYnRuX25leHQucGFyZW50O1xuICAgICAgICB0aWxpLnNldFBvc2l0aW9uKHN0YXJ0cG9zKTtcbiAgICAgICAgdGlsaS5ydW5BY3Rpb24oc2VxKTtcblxuICAgIH1cblxuICAgIGNsaWNrX2hvbWUoKSB7XG4gICAgICAgIExvYWRpbmdTY2VuZS5nb3RvKFwiTWFpblwiKTtcbiAgICB9XG5cbiAgICBvbkhpZGRlbigpIHtcbiAgICAgICAgZXZ0Lm9mZih0aGlzKTtcblxuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgLy8gaWYgKFBsYXllckluZm8uaXNTaG93U0RLKCkpIHdpbmRvd1snenpzZGt1aSddLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICAgICAgZXZ0Lm9mZih0aGlzKTtcbiAgICB9XG5cbiAgICBjbGlja19nZXRMYWJvdXIoKSB7XG4gICAgICAgIHVtZW5nLm9uRXZlbnQoJ3Jld2FyZEFkJywgJ2xhYm91cldpblNob3cnKTtcbiAgICAgICAgV2Vha05ldEdhbWUuZG9DaG9pY2UoXCJTT1ZfV2luX0dldFwiLCBfID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNHZXRMYWJvdXIgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IHIgPSBjc3YuQ29uZmlnLkdldF9FbmVyZ2V5X0NvdW50IHx8IDM7XG4gICAgICAgICAgICBQbGF5ZXJJbmZvLmxhYm91ciArPSByO1xuICAgICAgICAgICAgUGxheWVySW5mby5zYXZlKFwibGFib3VyXCIpO1xuICAgICAgICAgICAgdW1lbmcub25FdmVudCgncmV3YXJkQWQnLCAnbGFib3VyV2luUmV3YXJkZWQnKTtcbiAgICAgICAgICAgIGV2dC5lbWl0KFwiR2FtZS5nZXRUaWxpXCIsIGRpc3BsYXkuY2VudGVyLCByKTtcbiAgICAgICAgICAgIFRvYXN0Lm1ha2UoXCLojrflvpdcIiArIHIgKyBcIueCueS9k+WKm1wiKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAvLyB2bS5zaG93KFwiUHJlZmFicy9VSS9VSURvdWJsZUdldFwiLCByKTtcbiAgICAgICAgfSwgdGhpcylcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==