
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UILose.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJTG9zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBb0Q7QUFDcEQsNERBQXVEO0FBQ3ZELHlEQUFvRDtBQUNwRCx3REFBdUQ7QUFDdkQsbUVBQTJEO0FBQzNELGdDQUEyQjtBQUMzQix3Q0FBbUM7QUFDbkMsMkRBQXlEO0FBQ3pELCtEQUE4RDtBQUM5RCxrRUFBNkQ7QUFDN0QsZ0ZBQStFO0FBQy9FLGtFQUFpRTtBQUNqRSx1REFBb0Q7QUFDcEQsc0ZBQWlGO0FBQ2pGLHlDQUFvQztBQUNwQywyREFBc0Q7QUFDdEQsbUVBQWtFO0FBRTVELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFPO0lBQTNDO1FBQUEscUVBc1VDO1FBblVHLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFHcEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IsYUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBc0N2QixrQkFBWSxHQUFHLElBQUksQ0FBQzs7UUF5UXBCLGlCQUFpQjtJQUNyQixDQUFDO0lBOVNHLHVCQUFNLEdBQU47UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLGVBQUssQ0FBQyxPQUFPLENBQUMscUJBQVcsQ0FBQyxT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QUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFCLGFBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLG9CQUFvQixDQUFDLENBQUM7WUFDaEQsV0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUMsb0JBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUM3QixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ1osQ0FBQztJQUVELDJCQUFVLEdBQVY7UUFDSSxpQ0FBaUM7SUFDckMsQ0FBQztJQWpVRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VDQUNFO0lBR3BCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dDQUNHO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ1U7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDVTtJQWxCWixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBc1UxQjtJQUFELGFBQUM7Q0F0VUQsQUFzVUMsQ0F0VW1DLGlCQUFPLEdBc1UxQztrQkF0VW9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXZjVmlldyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL212Y1ZpZXdcIjtcbmltcG9ydCBMb2FkaW5nU2NlbmUgZnJvbSBcIi4uL0NvbW1vbi9CYXNlL0xvYWRpbmdTY2VuZVwiO1xuaW1wb3J0IERldmljZSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21pc2MvRGV2aWNlXCI7XG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL0NvbW1vbi9CYXNlL1BsYXllckluZm9cIjtcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9Ub2FzdE1hbmFnZXJcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuLi9HYW1lXCI7XG5pbXBvcnQgd2VnYW1lIGZyb20gXCIuLi9zZGsvd2VnYW1lXCI7XG5pbXBvcnQgeyBDbG91ZEZ1bmNUeXBlIH0gZnJvbSBcIi4uL0NvbW1vbi9DbG91ZEZ1bmNUeXBlc1wiO1xuaW1wb3J0IHsgcXFzZGsgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi9xcS9xcXNka1wiO1xuaW1wb3J0IFBsYXRmb3JtIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL1BsYXRmb3JtXCI7XG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvVXNlckluZm9cIjtcbmltcG9ydCB7IHR0c2RrIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vdHRzZGsvdHRzZGtcIjtcbmltcG9ydCB7IGV2dCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvY29yZS9ldmVudFwiO1xuaW1wb3J0IFdlYWtOZXRHYW1lIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvV2Vha05ldEdhbWVcIjtcbmltcG9ydCBVbml0eSBmcm9tIFwiLi4vQ29tbW9uL1VuaXR5XCI7XG5pbXBvcnQgZGlzcGxheSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21pc2MvZGlzcGxheVwiO1xuaW1wb3J0IHsgdW1lbmcgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi9hbGRzZGsvdW1lbmdcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJTG9zZSBleHRlbmRzIG12Y1ZpZXcge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2RrOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHNldHRpbmc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuX2dldDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICByYW5rOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgc2hhcmVfdmlkZW86IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGV2ZWxfbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHlvdWxpa2U6IGNjLk5vZGUgPSBudWxsO1xuICAgIGlzR2V0TGFib3VyOiBib29sZWFuID0gZmFsc2U7XG4gICAgZHJhd2VyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcih0aGlzLnNoYXJlX3ZpZGVvLCBfID0+IFVuaXR5Lmljb25TT1YoV2Vha05ldEdhbWUuZ2V0Q2hvaWNlKFwiU09WX0xvc2VfR2V0XCIpKSk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIodGhpcy5sZXZlbF9sYWJlbCwgXyA9PiB0aGlzLnNob3dMZXZlbExhYmVsKCkpO1xuXG4gICAgICAgIHRoaXMub25DbGljayh0aGlzLmJ0bl9nZXQsIF8gPT4gdGhpcy5jbGlja19nZXRMYWJvdXIoKSk7XG4gICAgICAgIHRoaXMub25JbnRlcmFjdGFibGUodGhpcy5idG5fZ2V0LCBfID0+ICF0aGlzLmlzR2V0TGFib3VyKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgLy8gaWYgKFBsYXllckluZm8uaXNTaG93U0RLKCkpIHtcbiAgICAgICAgLy8gICAgIGxldCBuZXdJbnRlciA9IHdpbmRvd1snenpzZGt1aSddLmludGVyX3Njcm9sbCgxLCAnaW50ZXJfeCcsIDUwMCwgbnVsbCwgMTAwLCBudWxsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vICAgICAgICAgLy8gR2FtZS5pbnN0YW5jZS5zaG93SW50ZXJmdWxsKCk7XG4gICAgICAgIC8vICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAvLyAgICAgbmV3SW50ZXIgJiYgdGhpcy5zZGsuYWRkQ2hpbGQobmV3SW50ZXIpO1xuICAgICAgICAvLyAgICAgbmV3SW50ZXIuc2V0UG9zaXRpb24oMCwgMTAwKTtcbiAgICAgICAgLy8gICAgIHRoaXMuZHJhd2VyID0gd2luZG93Wyd6enNka3VpJ10uZHJhd2VyKDAsICdkcmF3ZXJfcGljJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgLy8gICAgICAgICBpZiAoIWIpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5kcmF3ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgICAgICBpZiAodGhpcy55b3VsaWtlKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnlvdWxpa2UuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBQbGF0Zm9ybS5oaWRlQmFubmVyQWQoKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH0uYmluZCh0aGlzKSwgbnVsbCwgLTEwMCk7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5kcmF3ZXIpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNkay5hZGRDaGlsZCh0aGlzLmRyYXdlcik7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5kcmF3ZXIuc2NhbGUgPSAxO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuZHJhd2VyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgZGlhbG9nVG9TaG93ID0gbnVsbDtcblxuICAgIG9uSGlkZGVuKCkge1xuICAgICAgICBldnQub2ZmKHRoaXMpO1xuICAgIH1cblxuICAgIG9uUmVzdW1lKCkge1xuICAgICAgICBQbGF0Zm9ybS5yZWxvYWRCYW5uZXJBZCgpO1xuICAgIH1cblxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5pc0dldExhYm91ciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB0aGlzLmJ0bl9nZXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kaWFsb2dUb1Nob3cgPSBudWxsO1xuICAgICAgICBQbGF5ZXJJbmZvLmxvc2UoKTtcbiAgICAgICAgRGV2aWNlLnBsYXlTZngoXCJsb3NlXCIpO1xuXG4gICAgfVxuXG4gICAgc2hvd0VuZXJneVBhY2thZ2UoKSB7XG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLmxhYm91ciA8PSAyKSB7XG4gICAgICAgICAgICB3ZWdhbWUudHJ5T3BlbkNoZWF0KENsb3VkRnVuY1R5cGUuRW5lcmd5X1BhY2thZ2UpLnRoZW4odiA9PiB7XG4gICAgICAgICAgICAgICAgUGxheWVySW5mby53aW5MaW5rID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ1RvU2hvdyA9IFwiVUlFbmVyZ3lQYWNrYWdlXCI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TaG93KCkge1xuICAgICAgICBldnQub24oXCJHYW1lLlJlc3VtZVwiLCB0aGlzLm9uUmVzdW1lLCB0aGlzKTtcbiAgICAgICAgdHRzZGsuc3RvcF9yZWNvcmRlcigpO1xuICAgICAgICB0aGlzLmluaXQoKTtcblxuICAgICAgICBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgICAgICB0aGlzLnJhbmsuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmcuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dMZXZlbExhYmVsKCkge1xuICAgICAgICByZXR1cm4gXCLnrKxcIiArIFBsYXllckluZm8uZ2V0Q3VycmVudFBsYXlpbmdMZXZlbCgpICsgXCLlhbNcIjtcbiAgICB9XG5cblxuXG4gICAgYXN5bmMgc2hvd1NlcXVlbmNlbHkoYiA9IGZhbHNlKSB7XG4gICAgICAgIGF3YWl0IGV2dC5zbGVlcCgwLjEpO1xuICAgICAgICBpZiAodGhpcy5kaWFsb2dUb1Nob3cpIHtcbiAgICAgICAgICAgIGF3YWl0IGV2dC53YWl0KHRoaXMuZGlhbG9nVG9TaG93ICsgXCIub25IaWRkZW5cIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzU2hvd0tmKCkge1xuICAgICAgICBpZiAoVXNlckluZm8uaXNGaXJzdEdhbWVPdmVyICYmIEdhbWUuaW5zdGFuY2UubG9hZGVyLmxldmVsICE9IDEwMDAwKSB7XG4gICAgICAgICAgICBVc2VySW5mby5pc0ZpcnN0R2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIFVzZXJJbmZvLkZpcnN0R2FtZU92ZXJUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIFVzZXJJbmZvLnNhdmUoKVxuICAgICAgICAgICAgaWYgKCFVc2VySW5mby5pc0tmICYmIFBsYXllckluZm8uaXNXZWNoYXQoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc2hvd0RpYWxvZygpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuaXNTaG93S2YoKSkge1xuICAgICAgICAvLyAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlDdXN0b21lclwiKTtcbiAgICAgICAgLy8gICAgIHRoaXMuZGlhbG9nVG9TaG93ID0gXCJVSUN1c3RvbWVyXCI7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIGlmICghUGxheWVySW5mby5pc19ndWlkZV8xNSAmJiBQbGF5ZXJJbmZvLnBsYXlpbmdsZXZlbCA9PSAxNSAmJiBQbGF5ZXJJbmZvLmxldmVsID09IDE1KSB7XG4gICAgICAgICAgICB2bS5zaG93KFwiUHJlZmFicy9VSS9VSVVubG9ja1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0VuZXJneVBhY2thZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgc2hvd0ludGVyc3RpdGlhbChiID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBQbGF0Zm9ybS5zaG93SW50ZXJzdGl0aWFsKCgpID0+IHtcbiAgICAgICAgICAgIHNlbGYuc2hvd0RpYWxvZygpO1xuICAgICAgICAgICAgc2VsZi5zaG93U2VxdWVuY2VseShiKVxuICAgICAgICB9KS50aGVuKHYgPT4ge1xuICAgICAgICAgICAgc2VsZi5zaG93RGlhbG9nKCk7XG4gICAgICAgICAgICBzZWxmLnNob3dTZXF1ZW5jZWx5KGIpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGVycigpIHtcbiAgICAgICAgLy8gaWYgKFBsYXllckluZm8uaXNTaG93U0RLKCkpIHtcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnlvdWxpa2UgPT0gbnVsbCkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMueW91bGlrZSA9IHdpbmRvd1snenpzZGt1aSddLnlvdWxpa2UoMiwgbnVsbCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAgICAgICAgICAgICAvLyBHYW1lLmluc3RhbmNlLmludGVyZnVsbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIC8vICAgICAgICAgaWYgKHRoaXMueW91bGlrZSkge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnNkay5hZGRDaGlsZCh0aGlzLnlvdWxpa2UpO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnlvdWxpa2Uuc2NhbGUgPSAxO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnlvdWxpa2UpXG4gICAgICAgIC8vICAgICAgICAgdGhpcy55b3VsaWtlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBjbGlja19zaG93c2RrKCkge1xuICAgICAgICAvLyBpZiAodGhpcy5kcmF3ZXIpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuZHJhd2VyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyB3aW5kb3dbJ3p6c2RrdWknXS5kcmF3ZXJPcGVuKHRoaXMuZHJhd2VyKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIGNsaWNrX21vcmVnYW1lKCkge1xuXG5cbiAgICAgICAgcXFzZGsuc2hvd0FwcEJveCgpO1xuICAgIH1cblxuICAgIGNsaWNrX3NoYXJlKHYpIHtcblxuXG4gICAgICAgIGlmICh3aW5kb3cudHQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tfc2hhcmVSZWNvcmRlcih2KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBQbGF0Zm9ybS5zaGFyZSgpO1xuICAgICAgICB2LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIGNsaWNrX3NoYXJlUmVjb3JkZXIodikge1xuXG5cbiAgICAgICAgaWYgKFVzZXJJbmZvLnNoYXJlY291bnQgPiAoY3N2LkNvbmZpZy5tYXhfc2hhcmVfY291bnQgfHwgMTApKSB7XG4gICAgICAgICAgICBUb2FzdC5tYWtlKFwi5LuK5pel5YiG5Lqr5qyh5pWw5bey6L6+5LiK6ZmQIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoVXNlckluZm8ucmVjb3JkX3RpbWUgPD0gMykge1xuICAgICAgICAgICAgVG9hc3QubWFrZShcIuW9leWxj+i2hei/hzNz5omN6IO95YiG5Lqr5ZOmXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgLy/ngrnlh7vlkI7liIbkuqvlvZXlsY/vvIzmiJDlip/lkI7lj6/ojrflvpc16aKX6I2J6I6T77yM5pyq5YiG5Lqr5YiZ5peg5rOV6I635b6X44CC5YiG5Lqr6L+U5Zue5ZCO6L+Y5piv5YGc55WZ5Zyo57uT566X6aG177yM5bm257uZ5LqI5piv5ZCm6I635b6X5aWW5Yqx55qE5o+Q56S644CCXG4gICAgICAgIC8vIOaIkOWKn+aPkOekuu+8muaBreWWnOS9oOiOt+W+lzXpopfojYnojpNcbiAgICAgICAgLy8g5LiN5oiQ5Yqf5o+Q56S677ya5oiQ5Yqf5YiG5Lqr5omN6IO96I635b6X5aWW5Yqx5ZOm44CCXG4gICAgICAgIHdpbmRvdy50dC5zaGFyZUFwcE1lc3NhZ2Uoe1xuICAgICAgICAgICAgY2hhbm5lbDogXCJ2aWRlb1wiLFxuICAgICAgICAgICAgcXVlcnk6IFwiXCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZUlkOiBcInZ5MXIxZGFjdnI2MjY4NGExZVwiLCAvLyDmm7/mjaLmiJDpgJrov4flrqHmoLjnmoTliIbkuqtJRFxuICAgICAgICAgICAgdGl0bGU6IFwi5biu5aW56ISx6ZmpXCIsXG4gICAgICAgICAgICBkZXNjOiBcIuaDs+eOqeWwseaQnOe0oua4uOaIj+WQje+8muW4ruWlueiEsemZqea4uOaIj+i9r+S7tlwiLFxuICAgICAgICAgICAgZXh0cmE6IHtcbiAgICAgICAgICAgICAgICB2aWRlb1BhdGg6IFVzZXJJbmZvLnJlY29yZF9wYXRoLCAvLyDlj6/nlKjlvZXlsY/lvpfliLDnmoTmnKzlnLDmlofku7bot6/lvoRcbiAgICAgICAgICAgICAgICB2aWRlb1RvcGljczogW1wi5biu5aW56ISx6ZmpXCIsIFwi6LWi5Zyo5oCd57u0XCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XG4gICAgICAgICAgICAgICAgdi50YXJnZXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgUGxheWVySW5mby5sYWJvdXIgKz0gMztcbiAgICAgICAgICAgICAgICBQbGF5ZXJJbmZvLnNhdmUoXCJsYWJvdXJcIilcbiAgICAgICAgICAgICAgICBVc2VySW5mby5zaGFyZWNvdW50Kys7XG4gICAgICAgICAgICAgICAgVXNlckluZm8uc2F2ZShcInNoYXJlY291bnRcIilcbiAgICAgICAgICAgICAgICBUb2FzdC5tYWtlKFwi5YiG5Lqr5oiQ5Yqf77yM5aWW5YqxM+eCueS9k+WKmyFcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliIbkuqvop4bpopHlpLHotKVcIik7XG4gICAgICAgICAgICAgICAgVG9hc3QubWFrZShcIuaIkOWKn+WIhuS6q+aJjeiDveiOt+W+l+WlluWKseWTplwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsaWNrX2xldmVsKCkge1xuXG5cbiAgICAgICAgaWYgKFBsYXllckluZm8uaXNQbGF5aW5nRGFpbHkpIHtcbiAgICAgICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJQ2hhbGxlbmdlQ2hhcHRlclwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJQ2hhcHRlclwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsaWNrX3NldHRpbmcoKSB7XG5cblxuICAgICAgICB2bS5zaG93KFwiUHJlZmFicy9VSS9VSVNldHRpbmdcIik7XG4gICAgfVxuXG4gICAgY2xpY2tfc2tpbigpIHtcbiAgICAgICAgZXZ0LmVtaXQoJ01haW4uc2tpbicpO1xuXG4gICAgICAgIC8vIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJU2tpblwiKTtcbiAgICB9XG5cbiAgICBjbGlja19yYW5rKCkge1xuXG5cbiAgICAgICAgLy8gdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlSYW5rXCIpO1xuICAgIH1cblxuXG4gICAgY2xpY2tfYWdhaW4oKSB7XG5cblxuXG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLmxhYm91ciA+IDApIHtcbiAgICAgICAgICAgIGlmICghVXNlckluZm8uZ3VuX251bSAmJiAhVXNlckluZm8uaXNHZXRHdW5FbmQpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmFuID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICBpZiAoUGxheWVySW5mby5sZXZlbCA+PSBjc3YuQ29uZmlnLlN0YXJ0X0x2X0dldF9HdW5cbiAgICAgICAgICAgICAgICAgICAgJiYgVXNlckluZm8uZ3VuVmlld0RheSA8IGNzdi5Db25maWcuR2V0X0d1bl9MaW10X0RheVxuICAgICAgICAgICAgICAgICAgICAmJiBVc2VySW5mby5ndW5WaWV3IDwgY3N2LkNvbmZpZy5HZXRfR3VuX0xpbXRcbiAgICAgICAgICAgICAgICAgICAgJiYgcmFuIDwgY3N2LkNvbmZpZy5HZXRfR3VuX1Byb1xuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB2bS5zaG93KFwiUHJlZmFicy9VSS9VSUdldEd1blwiLCBfID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYXllckluZm8ubGFib3VyLS07XG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF5ZXJJbmZvLnNhdmUoXCJsYWJvdXJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nU2NlbmUuZ290byhcIkdhbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIH0sIFwiaXNHZXRHdW5FbmRcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFBsYXllckluZm8ubGFib3VyLS07XG4gICAgICAgICAgICBQbGF5ZXJJbmZvLnNhdmUoXCJsYWJvdXJcIik7XG4gICAgICAgICAgICBMb2FkaW5nU2NlbmUuZ290byhcIkdhbWVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBUb2FzdC5tYWtlKFwi5L2T5Yqb5LiN6LazXCIpO1xuICAgICAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlHZXRMYWJvdXJcIiwgXyA9PiB7XG4gICAgICAgICAgICAgICAgUGxheWVySW5mby5sYWJvdXItLTtcbiAgICAgICAgICAgICAgICBQbGF5ZXJJbmZvLnNhdmUoXCJsYWJvdXJcIik7XG4gICAgICAgICAgICAgICAgTG9hZGluZ1NjZW5lLmdvdG8oXCJHYW1lXCIpO1xuICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjbGlja19ob21lKCkge1xuICAgICAgICAvLyBcbiAgICAgICAgLy8gUGxhdGZvcm0uc2hhcmUoKTsgIFxuXG5cbiAgICAgICAgTG9hZGluZ1NjZW5lLmdvdG8oXCJNYWluXCIpO1xuICAgIH1cblxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICAvLyBpZiAoUGxheWVySW5mby5pc1Nob3dTREsoKSkgd2luZG93Wyd6enNka3VpJ10udW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgICAgICBldnQub2ZmKHRoaXMpO1xuICAgIH1cblxuICAgIGNsaWNrX2dldExhYm91cigpIHtcbiAgICAgICAgdW1lbmcub25FdmVudCgncmV3YXJkQWQnLCAnbGFib3VyTG9zZVNob3cnKTtcbiAgICAgICAgV2Vha05ldEdhbWUuZG9DaG9pY2UoXCJTT1ZfTG9zZV9HZXRcIiwgXyA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzR2V0TGFib3VyID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCByID0gY3N2LkNvbmZpZy5HZXRfRW5lcmdleV9Db3VudCB8fCAyO1xuICAgICAgICAgICAgUGxheWVySW5mby5sYWJvdXIgKz0gcjtcbiAgICAgICAgICAgIFBsYXllckluZm8uc2F2ZShcImxhYm91clwiKTtcbiAgICAgICAgICAgIHVtZW5nLm9uRXZlbnQoJ3Jld2FyZEFkJywgJ2xhYm91ckxvc2VSZXdhcmRlZCcpO1xuICAgICAgICAgICAgZXZ0LmVtaXQoXCJHYW1lLmdldFRpbGlcIiwgZGlzcGxheS5jZW50ZXIsIHIpO1xuICAgICAgICAgICAgVG9hc3QubWFrZShcIuiOt+W+l1wiICsgciArIFwi54K55L2T5YqbXCIpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSwgdGhpcylcbiAgICB9XG5cbiAgICBjbGlja19iYWNrKCkge1xuICAgICAgICAvLyBHYW1lLmluc3RhbmNlLnNob3dJbnRlcmZ1bGwoKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==