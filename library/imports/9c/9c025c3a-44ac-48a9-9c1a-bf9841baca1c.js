"use strict";
cc._RF.push(module, '9c025w6RKxIqZwav5hBusoc', 'UILose');
// Game/Scripts/UI/UILose.ts

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
var Device_1 = require("../../../framework/misc/Device");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var Game_1 = require("../Game");
var wegame_1 = require("../sdk/wegame");
var CloudFuncTypes_1 = require("../Common/CloudFuncTypes");
var qqsdk_1 = require("../../../framework/extension/qq/qqsdk");
var Platform_1 = require("../../../framework/extension/Platform");
var UserInfo_1 = require("../../../framework/extension/weak_net_game/UserInfo");
var ttsdk_1 = require("../../../framework/extension/ttsdk/ttsdk");
var event_1 = require("../../../framework/core/event");
var WeakNetGame_1 = require("../../../framework/extension/weak_net_game/WeakNetGame");
var Unity_1 = require("../Common/Unity");
var display_1 = require("../../../framework/misc/display");
var umeng_1 = require("../../../framework/extension/aldsdk/umeng");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UILose = /** @class */ (function (_super) {
    __extends(UILose, _super);
    function UILose() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sdk = null;
        _this.setting = null;
        _this.btn_get = null;
        _this.rank = null;
        _this.share_video = null;
        _this.level_label = null;
        _this.youlike = null;
        _this.isGetLabour = false;
        _this.drawer = null;
        _this.dialogToShow = null;
        return _this;
        // update (dt) {}
    }
    UILose.prototype.onLoad = function () {
        var _this = this;
        this.register(this.share_video, function (_) { return Unity_1.default.iconSOV(WeakNetGame_1.default.getChoice("SOV_Lose_Get")); });
        this.register(this.level_label, function (_) { return _this.showLevelLabel(); });
        this.onClick(this.btn_get, function (_) { return _this.click_getLabour(); });
        this.onInteractable(this.btn_get, function (_) { return !_this.isGetLabour; });
    };
    UILose.prototype.start = function () {
        // if (PlayerInfo.isShowSDK()) {
        //     let newInter = window['zzsdkui'].inter_scroll(1, 'inter_x', 500, null, 100, null, function () {
        //         // Game.instance.showInterfull();
        //     }.bind(this));
        //     newInter && this.sdk.addChild(newInter);
        //     newInter.setPosition(0, 100);
        //     this.drawer = window['zzsdkui'].drawer(0, 'drawer_pic', null, null, null, null, null, null, null, function (b) {
        //         if (!b) {
        //             this.drawer.active = false;
        //         }
        //         else {
        //             if (this.youlike) {
        //                 this.youlike.active = false;
        //             }
        //             else {
        //                 Platform.hideBannerAd();
        //             }
        //         }
        //     }.bind(this), null, -100);
        //     if (this.drawer) {
        //         this.sdk.addChild(this.drawer);
        //         this.drawer.scale = 1;
        //         this.drawer.active = false;
        //     }
        // }
    };
    UILose.prototype.onHidden = function () {
        event_1.evt.off(this);
    };
    UILose.prototype.onResume = function () {
        Platform_1.default.reloadBannerAd();
    };
    UILose.prototype.init = function () {
        this.isGetLabour = false;
        this.render();
        this.btn_get.active = true;
        this.dialogToShow = null;
        PlayerInfo_1.PlayerInfo.lose();
        Device_1.default.playSfx("lose");
    };
    UILose.prototype.showEnergyPackage = function () {
        var _this = this;
        if (PlayerInfo_1.PlayerInfo.labour <= 2) {
            wegame_1.default.tryOpenCheat(CloudFuncTypes_1.CloudFuncType.Energy_Package).then(function (v) {
                PlayerInfo_1.PlayerInfo.winLink = 0;
                _this.dialogToShow = "UIEnergyPackage";
            });
        }
    };
    UILose.prototype.onShow = function () {
        event_1.evt.on("Game.Resume", this.onResume, this);
        ttsdk_1.ttsdk.stop_recorder();
        this.init();
        if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.OS_ANDROID) {
            this.rank.active = false;
            this.setting.active = true;
        }
    };
    UILose.prototype.showLevelLabel = function () {
        return "第" + PlayerInfo_1.PlayerInfo.getCurrentPlayingLevel() + "关";
    };
    UILose.prototype.showSequencely = function (b) {
        if (b === void 0) { b = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, event_1.evt.sleep(0.1)];
                    case 1:
                        _a.sent();
                        if (!this.dialogToShow) return [3 /*break*/, 3];
                        return [4 /*yield*/, event_1.evt.wait(this.dialogToShow + ".onHidden")];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UILose.prototype.isShowKf = function () {
        if (UserInfo_1.UserInfo.isFirstGameOver && Game_1.default.instance.loader.level != 10000) {
            UserInfo_1.UserInfo.isFirstGameOver = false;
            UserInfo_1.UserInfo.FirstGameOverTime = Date.now();
            UserInfo_1.UserInfo.save();
            if (!UserInfo_1.UserInfo.isKf && PlayerInfo_1.PlayerInfo.isWechat()) {
                return true;
            }
        }
        return false;
    };
    UILose.prototype.showDialog = function () {
        // if (this.isShowKf()) {
        //     vm.show("Prefabs/UI/UICustomer");
        //     this.dialogToShow = "UICustomer";
        // } else {
        if (!PlayerInfo_1.PlayerInfo.is_guide_15 && PlayerInfo_1.PlayerInfo.playinglevel == 15 && PlayerInfo_1.PlayerInfo.level == 15) {
            vm.show("Prefabs/UI/UIUnlock");
        }
        else {
            this.showEnergyPackage();
        }
        // }
    };
    UILose.prototype.showInterstitial = function (b) {
        if (b === void 0) { b = false; }
        var self = this;
        Platform_1.default.showInterstitial(function () {
            self.showDialog();
            self.showSequencely(b);
        }).then(function (v) {
            self.showDialog();
            self.showSequencely(b);
        });
    };
    UILose.prototype.err = function () {
        // if (PlayerInfo.isShowSDK()) {
        //     if (this.youlike == null) {
        //         this.youlike = window['zzsdkui'].youlike(2, null, null, null, function () {
        //             // Game.instance.interfull.active = true;
        //         }.bind(this));
        //         if (this.youlike) {
        //             this.sdk.addChild(this.youlike);
        //             this.youlike.scale = 1;
        //         }
        //     }
        //     if (this.youlike)
        //         this.youlike.active = true;
        // }
    };
    UILose.prototype.click_showsdk = function () {
        // if (this.drawer) {
        //     this.drawer.active = true;
        // window['zzsdkui'].drawerOpen(this.drawer);
        // }
    };
    UILose.prototype.click_moregame = function () {
        qqsdk_1.qqsdk.showAppBox();
    };
    UILose.prototype.click_share = function (v) {
        if (window.tt) {
            this.click_shareRecorder(v);
            return;
        }
        Platform_1.default.share();
        v.active = false;
        this.render();
    };
    UILose.prototype.click_shareRecorder = function (v) {
        if (UserInfo_1.UserInfo.sharecount > (csv.Config.max_share_count || 10)) {
            ToastManager_1.Toast.make("今日分享次数已达上限!");
            return;
        }
        if (UserInfo_1.UserInfo.record_time <= 3) {
            ToastManager_1.Toast.make("录屏超过3s才能分享哦");
            return;
        }
        var self = this;
        //点击后分享录屏，成功后可获得5颗草莓，未分享则无法获得。分享返回后还是停留在结算页，并给予是否获得奖励的提示。
        // 成功提示：恭喜你获得5颗草莓
        // 不成功提示：成功分享才能获得奖励哦。
        window.tt.shareAppMessage({
            channel: "video",
            query: "",
            templateId: "vy1r1dacvr62684a1e",
            title: "帮她脱险",
            desc: "想玩就搜索游戏名：帮她脱险游戏软件",
            extra: {
                videoPath: UserInfo_1.UserInfo.record_path,
                videoTopics: ["帮她脱险", "赢在思维"],
            },
            success: function () {
                v.target.active = false;
                PlayerInfo_1.PlayerInfo.labour += 3;
                PlayerInfo_1.PlayerInfo.save("labour");
                UserInfo_1.UserInfo.sharecount++;
                UserInfo_1.UserInfo.save("sharecount");
                ToastManager_1.Toast.make("分享成功，奖励3点体力!");
            },
            fail: function (e) {
                console.log("分享视频失败");
                ToastManager_1.Toast.make("成功分享才能获得奖励哦");
            },
        });
    };
    UILose.prototype.click_level = function () {
        if (PlayerInfo_1.PlayerInfo.isPlayingDaily) {
            vm.show("Prefabs/UI/UIChallengeChapter");
        }
        else {
            vm.show("Prefabs/UI/UIChapter");
        }
    };
    UILose.prototype.click_setting = function () {
        vm.show("Prefabs/UI/UISetting");
    };
    UILose.prototype.click_skin = function () {
        event_1.evt.emit('Main.skin');
        // vm.show("Prefabs/UI/UISkin");
    };
    UILose.prototype.click_rank = function () {
        // vm.show("Prefabs/UI/UIRank");
    };
    UILose.prototype.click_again = function () {
        if (PlayerInfo_1.PlayerInfo.labour > 0) {
            if (!UserInfo_1.UserInfo.gun_num && !UserInfo_1.UserInfo.isGetGunEnd) {
                var ran = Math.random();
                if (PlayerInfo_1.PlayerInfo.level >= csv.Config.Start_Lv_Get_Gun
                    && UserInfo_1.UserInfo.gunViewDay < csv.Config.Get_Gun_Limt_Day
                    && UserInfo_1.UserInfo.gunView < csv.Config.Get_Gun_Limt
                    && ran < csv.Config.Get_Gun_Pro) {
                    vm.show("Prefabs/UI/UIGetGun", function (_) {
                        PlayerInfo_1.PlayerInfo.labour--;
                        PlayerInfo_1.PlayerInfo.save("labour");
                        LoadingScene_1.default.goto("Game");
                    }, "isGetGunEnd");
                    return;
                }
            }
            PlayerInfo_1.PlayerInfo.labour--;
            PlayerInfo_1.PlayerInfo.save("labour");
            LoadingScene_1.default.goto("Game");
        }
        else {
            // Toast.make("体力不足");
            vm.show("Prefabs/UI/UIGetLabour", function (_) {
                PlayerInfo_1.PlayerInfo.labour--;
                PlayerInfo_1.PlayerInfo.save("labour");
                LoadingScene_1.default.goto("Game");
            }, false);
        }
    };
    UILose.prototype.click_home = function () {
        // 
        // Platform.share();  
        LoadingScene_1.default.goto("Main");
    };
    UILose.prototype.onDestroy = function () {
        // if (PlayerInfo.isShowSDK()) window['zzsdkui'].unscheduleAllCallbacks();
        event_1.evt.off(this);
    };
    UILose.prototype.click_getLabour = function () {
        var _this = this;
        umeng_1.umeng.onEvent('rewardAd', 'labourLoseShow');
        WeakNetGame_1.default.doChoice("SOV_Lose_Get", function (_) {
            _this.isGetLabour = true;
            var r = csv.Config.Get_Energey_Count || 2;
            PlayerInfo_1.PlayerInfo.labour += r;
            PlayerInfo_1.PlayerInfo.save("labour");
            umeng_1.umeng.onEvent('rewardAd', 'labourLoseRewarded');
            event_1.evt.emit("Game.getTili", display_1.default.center, r);
            ToastManager_1.Toast.make("获得" + r + "点体力");
            _this.render();
        }, this);
    };
    UILose.prototype.click_back = function () {
        // Game.instance.showInterfull();
    };
    __decorate([
        property(cc.Node)
    ], UILose.prototype, "sdk", void 0);
    __decorate([
        property(cc.Node)
    ], UILose.prototype, "setting", void 0);
    __decorate([
        property(cc.Node)
    ], UILose.prototype, "btn_get", void 0);
    __decorate([
        property(cc.Node)
    ], UILose.prototype, "rank", void 0);
    __decorate([
        property(cc.Sprite)
    ], UILose.prototype, "share_video", void 0);
    __decorate([
        property(cc.Label)
    ], UILose.prototype, "level_label", void 0);
    UILose = __decorate([
        ccclass
    ], UILose);
    return UILose;
}(mvcView_1.default));
exports.default = UILose;

cc._RF.pop();