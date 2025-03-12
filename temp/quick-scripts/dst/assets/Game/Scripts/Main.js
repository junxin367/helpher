
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '452dcM/WRZDLpN5bLukXPR9', 'Main');
// Game/Scripts/Main.ts

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
var LoadingScene_1 = require("./Common/Base/LoadingScene");
var Device_1 = require("../../framework/misc/Device");
var PlayerInfo_1 = require("./Common/Base/PlayerInfo");
var UserInfo_1 = require("../../framework/extension/weak_net_game/UserInfo");
var Platform_1 = require("../../framework/extension/Platform");
var ccUtil_1 = require("../../framework/utils/ccUtil");
var event_1 = require("../../framework/core/event");
var Net_1 = require("../../framework/misc/Net");
var WeakNetGame_1 = require("../../framework/extension/weak_net_game/WeakNetGame");
var ServerConfig_1 = require("./Common/Base/ServerConfig");
var PandoraPoint_1 = require("../../framework/ui/controller/PandoraPoint");
var UIConfirm_1 = require("./UI/UIConfirm");
var Game_1 = require("./Game");
var Unity_1 = require("./Common/Unity");
var UIPersonSkin_1 = require("./UI/UIPersonSkin");
var BuffSystem_1 = require("../../framework/extension/buffs/BuffSystem");
var DouyinStorage_1 = require("../../framework/extension/ttsdk/DouyinStorage");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var inited = false;
// if(!CC_DEBUG)console.log = function(){}
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property(cc.Node)
        // dailyChallenge: cc.Node = null;
        _this.tili = null;
        _this.btn_play = null;
        _this.daojishi = null;
        _this.label_timeLeft = null;
        _this.label_level = null;
        _this.guideNode = null;
        _this.qiandao_hongdian = null;
        _this.zhuanpan_hongdian = null;
        _this.theme_hongdian = null;
        _this.skin_hongdian = null;
        _this.node_sidebar_icon = null;
        _this.isclick = false;
        _this.girl = null;
        _this.redpoint = null;
        _this.drawer = null;
        _this.btn_challange = null;
        _this.challene_unlockTip = null;
        return _this;
    }
    Main_1 = Main;
    Main.prototype.onLoad = function () {
        Main_1.instance = this;
        cc.director.getPhysicsManager().enabled = true;
        event_1.evt.on("PersistNode.onViewHidden", this.onViewHidden, this);
        event_1.evt.on("Game.getTili", this.playAddTili, this);
        event_1.evt.on("Game.friendTili", this.calcRedpoint, this);
        event_1.evt.on("UISkin.onHidden", this.onChangeSkin, this);
        event_1.evt.on("PlayerInfo.star", this.onChangeStar, this);
        event_1.evt.on("UISkin.checkLock", this.check_lockSkin, this);
        event_1.evt.on("UILucky.redPoint", this.luckyRedPoint, this);
        event_1.evt.on("Main.skin", this.onMainSkin, this);
        // this.onVisible(this.node_sidebar_icon, () => UserInfo.sidebarAvailable && !UserInfo.sidebarRewardClaimed)
        if (inited == false) {
            inited = true;
            PlayerInfo_1.PlayerInfo.updateBuffs();
            this.checkDaily();
            // Platform.loadSubPackage("Audio").then(_ => {
            //     Device.playBGM("BGM0");
            // })
        }
        Device_1.default.playBGM("BGM0");
        // this.dailyChallenge.active = PlayerInfo.level >= csv.Config.Begin_Daily_Level ? true : false;
        if (CC_DEBUG) {
            window['main'] = this;
        }
        if (PlayerInfo_1.PlayerInfo.level < (csv.Config.Chanllenge_Unlock_Level || 25)) {
            //25关解锁
            this.challene_unlockTip.string = ((csv.Config.Chanllenge_Unlock_Level || 25) - PlayerInfo_1.PlayerInfo.level).toFixed() + "关后解锁!";
            this.btn_challange.interactable = false;
        }
        else {
            this.btn_challange.interactable = true;
            this.challene_unlockTip.node.parent.active = false;
        }
        if (this.node_sidebar_icon) {
            if (DouyinStorage_1.default.sidebarAvailable && !PlayerInfo_1.PlayerInfo.isFavClaimed) {
                // ok 
                // todo : check sidebar reward index is available 
                this.node_sidebar_icon.active = true;
            }
            else {
                this.node_sidebar_icon.active = false;
            }
        }
    };
    Main.prototype.onChangeSkin = function () {
        Unity_1.default.loadSkins(this.girl, 1);
    };
    Main.prototype.onChangeStar = function () {
        csv.Skin.values.forEach(function (v) {
            if (v.unlockType == 2 && !PlayerInfo_1.PlayerInfo.isSkinUnlocked(v.id) && PlayerInfo_1.PlayerInfo.star >= v.unlock2) {
                // PlayerInfo.unlockSkin(v.id);
                vm.show("Prefabs/UI/UIUnlockSkin", v.id);
            }
        });
        //判断 是否解锁 章节
        var c = PlayerInfo_1.PlayerInfo.getChapter(PlayerInfo_1.PlayerInfo.level);
        if (PlayerInfo_1.PlayerInfo.star >= csv.star.get(c).demand) {
            var bNew = PlayerInfo_1.PlayerInfo.isChapterNew(c);
            if (c > 1) {
                if (bNew) {
                    vm.show("Prefabs/story/help", c);
                    PlayerInfo_1.PlayerInfo.markChapterOld(c);
                }
            }
        }
    };
    Main.prototype.onLoadFinished = function (viewname) {
        if (viewname)
            vm.show(viewname);
    };
    Main.prototype.start = function () {
        PlayerInfo_1.PlayerInfo.init();
        if (BuffSystem_1.buffSystem.getBuff("AutoLabour").isEnabled) {
            this.daojishi.active = true;
        }
        else {
            this.daojishi.active = false;
        }
        this.label_timeLeft.string = new Date(PlayerInfo_1.PlayerInfo.buff_labour * 1000).format("mm:ss");
        if (PlayerInfo_1.PlayerInfo.labour < csv.Config.Max_Energy && !BuffSystem_1.buffSystem.getBuff("AutoLabour").isEnabled) {
            if (PlayerInfo_1.PlayerInfo.buff_labour > 0) {
                BuffSystem_1.buffSystem.startBuff("AutoLabour", PlayerInfo_1.PlayerInfo.buff_labour);
            }
            else {
                BuffSystem_1.buffSystem.startBuff("AutoLabour", csv.Config.LabourRecoveryTime * 60 || 300);
            }
        }
        else {
            BuffSystem_1.buffSystem.stop("AutoLabour");
        }
        this.girl.armature().animation.fadeIn('frightened', 0.2, 0, '1');
        Unity_1.default.loadSkins(this.girl, 1);
        this.isclick = false;
        this.label_level.string = "关卡进度:" + PlayerInfo_1.PlayerInfo.level;
        Platform_1.default.hideBannerAd();
        //每次进主页请求是否有体力可领取
        // if (PlayerInfo.isWechat()) this.checkTili();
        if (PlayerInfo_1.PlayerInfo.isInGuide && !PlayerInfo_1.PlayerInfo.is_guide_15) {
            this.guideNode.active = true;
        }
        // WeakNetGame.client.httpPost(ServerConfig.force_url).then(v => {
        //     if (v) {
        //         console.log(v);
        //     }
        // })
        for (var i = 1; i <= csv.level.values.length; i++) {
            if (!PlayerInfo_1.PlayerInfo.level_star[i]) {
                PlayerInfo_1.PlayerInfo.level_star[i] = 0;
            }
        }
        this.qiandao_hongdian.active = g.isNextDay(PlayerInfo_1.PlayerInfo.signTime);
        this.zhuanpan_hongdian.active = g.isNextDay(UserInfo_1.UserInfo.freedrawTime);
        this.check_lockSkin();
        if (PlayerInfo_1.PlayerInfo.guide == 0) {
            vm.show("Prefabs/story/comics1");
        }
        else {
            g.isNextDay(PlayerInfo_1.PlayerInfo.signTime) && vm.show("Prefabs/UI/UISign");
        }
    };
    Main.prototype.checkDaily = function () {
        csv.daily_level.values.forEach(function (e) {
            if (PlayerInfo_1.PlayerInfo.isGreaterDate(e.day)) {
                PlayerInfo_1.PlayerInfo.maxDailyLv = e.id;
            }
        });
        console.log("每日挑战最大关卡数：" + PlayerInfo_1.PlayerInfo.maxDailyLv);
    };
    Main.prototype.calcRedpoint = function (day_invite, sum_invite) {
        var freeTili = 0;
        for (var k in day_invite) {
            var day = day_invite[k];
            if (day && day.status == 0) {
                freeTili++;
            }
        }
        var sum = sum_invite;
        sum.claimedCount = sum.claimedCount || 0;
        if (sum.claimedCount < sum.inviteeCount) {
            freeTili++;
        }
        this.redpoint.setNumber(freeTili);
    };
    Main.prototype.luckyRedPoint = function () {
        this.zhuanpan_hongdian.active = false;
    };
    Main.prototype.checkTili = function () {
        var _this = this;
        WeakNetGame_1.default.client.httpGet(ServerConfig_1.Api.invite_get).then(function (v) {
            if (v == Net_1.default.Code.Timeout) {
            }
            else {
                if (v) {
                    var d = JSON.parse(v);
                    if (d.errno == 0) {
                        d = d.data;
                        _this.calcRedpoint(d.day_invite, d.sum_invite);
                    }
                    else {
                    }
                }
                else {
                }
            }
        });
    };
    Main.prototype.onConfirm = function (option) {
        if (option == UIConfirm_1.ConfirmOption.Yes) {
            PlayerInfo_1.PlayerInfo.isRandomLevel = true;
            var lvrow = csv.level.get(g.randomInt(2, csv.level.size));
            this.flytili(lvrow.id);
        }
        else {
            PlayerInfo_1.PlayerInfo.isRandomLevel = false;
        }
    };
    Main.prototype.onConfirm_challenge = function (option) {
        if (option == UIConfirm_1.ConfirmOption.Yes) {
            PlayerInfo_1.PlayerInfo.isPlayingDaily = true;
            vm.show("Prefabs/UI/UIChallengeChapter");
        }
        else {
            vm.show("Prefabs/UI/UIConfirm", "是否随机开始之前的关卡", this.onConfirm, this);
        }
    };
    Main.prototype.confirm = function () {
        if (PlayerInfo_1.PlayerInfo.level >= csv.level.size) {
            if (PlayerInfo_1.PlayerInfo.dailylevel <= PlayerInfo_1.PlayerInfo.maxDailyLv) {
                vm.show("Prefabs/UI/UIConfirm", "是否前往挑战关卡？", this.onConfirm_challenge, this);
            }
            else {
                vm.show("Prefabs/UI/UIConfirm", "是否随机开始之前的关卡", this.onConfirm, this);
                return;
            }
        }
        else {
            this.flytili();
        }
    };
    Main.prototype.onMainSkin = function () {
        LoadingScene_1.default.goto("Skin"); //, TwoType.Skin
    };
    Main.prototype.check_lockSkin = function () {
        UserInfo_1.UserInfo.isunlock_men = 0;
        UserInfo_1.UserInfo.isunlock_girl = 0;
        UserInfo_1.UserInfo.isunlock_theme = 0;
        for (var i = 1; i <= 5; i++) {
            UserInfo_1.UserInfo["isunlock_girl" + i] = 0;
            UserInfo_1.UserInfo["isunlock_men" + i] = 0;
        }
        this.theme_hongdian.active = false;
        this.skin_hongdian.active = false;
        for (var i = 1; i <= csv.Skin.values.length; i++) {
            var data = csv.Skin.get(i);
            if (((PlayerInfo_1.PlayerInfo.level >= data.unlock1 && data.unlockType == 1) || (data.unlockType == 2 && PlayerInfo_1.PlayerInfo.star >= data.unlock2))
                && !PlayerInfo_1.PlayerInfo.isSkinUnlocked(data.id)) {
                if (data.type == 1) {
                    UserInfo_1.UserInfo.isunlock_girl = 1;
                }
                else if (data.type == 2) {
                    UserInfo_1.UserInfo.isunlock_men = 1;
                }
                else if (data.type == 3) {
                    UserInfo_1.UserInfo.isunlock_theme = 1;
                }
                if (data.subType < 5) {
                    if (data.type == 1) {
                        UserInfo_1.UserInfo["isunlock_girl" + (data.subType + 1)] = 1;
                    }
                    else if (data.type == 2) {
                        UserInfo_1.UserInfo["isunlock_men" + (data.subType + 1)] = 1;
                    }
                }
            }
        }
        if (UserInfo_1.UserInfo.isunlock_theme) {
            this.theme_hongdian.active = true;
        }
        if (UserInfo_1.UserInfo.isunlock_men || UserInfo_1.UserInfo.isunlock_girl) {
            this.skin_hongdian.active = true;
        }
    };
    Main.prototype.click_sidebar = function () {
        if (cc.sys.BYTEDANCE_GAME == cc.sys.platform) {
            if (DouyinStorage_1.default.isFromSidebar) {
                // UserInfo.isFromSidebar = false;
                vm.show("Prefabs/UI/BD_Guide_Sidebar", "claim");
            }
            else {
                vm.show("Prefabs/UI/BD_Guide_Sidebar", "sidebar");
            }
        }
    };
    Main.prototype.click_play = function () {
        // console.log(csv.level.size)
        // console.log(PlayerInfo.playinglevel)
        var _this = this;
        if (this.isclick)
            return;
        //进入新手引导关
        if (PlayerInfo_1.PlayerInfo.guide == 0) {
            LoadingScene_1.default.goto("Game");
            this.isclick = true;
            return;
        }
        if (PlayerInfo_1.PlayerInfo.labour > 0) {
            if (!UserInfo_1.UserInfo.gun_num && !UserInfo_1.UserInfo.isGetGunStart) {
                var ran = Math.random();
                if (PlayerInfo_1.PlayerInfo.level >= csv.Config.Start_Lv_Get_Gun
                    && UserInfo_1.UserInfo.gunViewDay < csv.Config.Get_Gun_Limt_Day
                    && UserInfo_1.UserInfo.gunView < csv.Config.Get_Gun_Limt
                    && ran < csv.Config.Get_Gun_Pro) {
                    vm.show("Prefabs/UI/UIGetGun", function (_) {
                        _this.confirm();
                    }, "isGetGunStart");
                    return;
                }
            }
            this.confirm();
        }
        else {
            vm.show("Prefabs/UI/UIGetLabour", function (_) {
                _this.confirm();
            }, false);
        }
    };
    Main.prototype.test = function (lv) {
        Game_1.default.debug = true;
        LoadingScene_1.default.goto("Game", lv);
    };
    Main.prototype.click_daily = function () {
        PlayerInfo_1.PlayerInfo.isPlayingDaily = true;
        vm.show("Prefabs/UI/UIChallengeChapter");
        if (PlayerInfo_1.PlayerInfo.isInGuide && !PlayerInfo_1.PlayerInfo.is_guide_15) {
            this.guideNode.active = false;
        }
    };
    Main.prototype.click_level = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                PlayerInfo_1.PlayerInfo.isPlayingDaily = false;
                // await Platform.loadSubPackage("ImagePart");
                vm.show("Prefabs/UI/UIChapter");
                return [2 /*return*/];
            });
        });
    };
    Main.prototype.click_setting = function () {
        vm.show("Prefabs/UI/UISetting");
    };
    Main.prototype.click_rank = function () {
        // vm.show("Prefabs/UI/UIRank");
    };
    Main.prototype.click_labour = function () {
        vm.show("Prefabs/UI/UIGetLabour", null, true);
    };
    Main.prototype.click_draw = function () {
        vm.show("Prefabs/UI/UILucky");
    };
    Main.prototype.click_gettili = function () {
        // vm.show("Prefabs/UI/UIFriendHelp")
        vm.show("Prefabs/UI/UIFreeGetLabour");
    };
    Main.prototype.click_friend = function () {
        vm.show("Prefabs/UI/UIFriendHelp");
    };
    Main.prototype.click_theme = function () {
        vm.show("Prefabs/UI/UISkin");
    };
    Main.prototype.click_shouchang = function () {
        LoadingScene_1.default.goto("Skin", UIPersonSkin_1.TwoType.Collection);
    };
    Main.prototype.click_skin = function () {
        LoadingScene_1.default.goto("Skin", UIPersonSkin_1.TwoType.Skin);
    };
    Main.prototype.click_sign = function () {
        vm.show("Prefabs/UI/UISign");
    };
    Main.prototype.playAddTili = function (worldpos, num) {
        ccUtil_1.default.playFly(this.tili, 1.0, num);
        // ccUtil.playFlyCoin(this.tili, this.tili.parent, worldpos, ccUtil.getWorldPosition(this.tili), { dur: 1.0, interval: 0.2, num })
    };
    Main.prototype.click_world_wx = function (userInfo, isNew) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!userInfo) return [3 /*break*/, 2];
                        return [4 /*yield*/, UserInfo_1.UserInfo.openRankAndUpload({ level: PlayerInfo_1.PlayerInfo.level, challengelevel: PlayerInfo_1.PlayerInfo.dailylevel }, userInfo)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.flytili = function (id) {
        var tili = cc.instantiate(this.tili);
        var tar = new cc.Vec2(this.btn_play.position.x, this.btn_play.position.y);
        var wpos = this.tili.getBoundingBoxToWorld().center;
        var startpos = this.btn_play.parent.convertToNodeSpaceAR(wpos);
        var move = cc.moveTo(0.5, tar).easing(cc.easeSineOut());
        var seq = cc.sequence(move, cc.callFunc(function (_) {
            tili.destroy();
            PlayerInfo_1.PlayerInfo.isPlayingDaily = false;
            PlayerInfo_1.PlayerInfo.labour--;
            PlayerInfo_1.PlayerInfo.save("labour");
            if (PlayerInfo_1.PlayerInfo.labour <= csv.Config.Max_Energy - 1) {
                BuffSystem_1.buffSystem.startBuff("AutoLabour", PlayerInfo_1.PlayerInfo.buff_labour || 300);
            }
            if (id) {
                PlayerInfo_1.PlayerInfo.playinglevel = id;
            }
            else {
                PlayerInfo_1.PlayerInfo.playinglevel = PlayerInfo_1.PlayerInfo.level;
            }
            LoadingScene_1.default.goto("Game");
        }));
        tili.parent = this.btn_play.parent;
        tili.setPosition(startpos);
        tili.runAction(seq);
        this.isclick = true;
    };
    // update (dt) {}
    Main.prototype.onDestroy = function () {
        cc.audioEngine.stopAll();
        event_1.evt.off(this);
    };
    var Main_1;
    Main.instance = null;
    __decorate([
        property(cc.Node)
    ], Main.prototype, "tili", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "btn_play", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "daojishi", void 0);
    __decorate([
        property(cc.Label)
    ], Main.prototype, "label_timeLeft", void 0);
    __decorate([
        property(cc.Label)
    ], Main.prototype, "label_level", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "guideNode", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "qiandao_hongdian", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "zhuanpan_hongdian", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "theme_hongdian", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "skin_hongdian", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "node_sidebar_icon", void 0);
    __decorate([
        property(dragonBones.ArmatureDisplay)
    ], Main.prototype, "girl", void 0);
    __decorate([
        property(PandoraPoint_1.default)
    ], Main.prototype, "redpoint", void 0);
    __decorate([
        property(cc.Button)
    ], Main.prototype, "btn_challange", void 0);
    __decorate([
        property(cc.Label)
    ], Main.prototype, "challene_unlockTip", void 0);
    Main = Main_1 = __decorate([
        ccclass
    ], Main);
    return Main;
}(cc.Component));
exports.default = Main;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFDdEQsc0RBQWlEO0FBQ2pELHVEQUFzRDtBQUN0RCw2RUFBNEU7QUFDNUUsK0RBQTBEO0FBQzFELHVEQUFrRDtBQUNsRCxvREFBaUQ7QUFDakQsZ0RBQW9EO0FBQ3BELG1GQUE4RTtBQUM5RSwyREFBK0Q7QUFFL0QsMkVBQXNFO0FBQ3RFLDRDQUErQztBQUMvQywrQkFBMEI7QUFDMUIsd0NBQW1DO0FBQ25DLGtEQUE0QztBQUM1Qyx5RUFBb0Y7QUFDcEYsK0VBQTBFO0FBR3BFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLElBQUksTUFBTSxHQUFZLEtBQUssQ0FBQTtBQUMzQiwwQ0FBMEM7QUFFMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUF3ZEM7UUF2ZEcscUJBQXFCO1FBQ3JCLGtDQUFrQztRQUVsQyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixvQkFBYyxHQUFhLElBQUksQ0FBQztRQUdoQyxpQkFBVyxHQUFhLElBQUksQ0FBQztRQUc3QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUdqQyx1QkFBaUIsR0FBWSxJQUFJLENBQUM7UUFHbEMsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFHL0IsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsdUJBQWlCLEdBQVksSUFBSSxDQUFDO1FBR2xDLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFHekIsVUFBSSxHQUFnQyxJQUFJLENBQUM7UUFH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SSxDQUFDOzBDQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ2E7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDVTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ2U7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDZ0I7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDYTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNZO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ2dCO0lBTWxDO1FBREMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUM7c0NBQ0c7SUFHekM7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzswQ0FDTztJQUs5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNZO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0RBQ2lCO0lBbERuQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBd2R4QjtJQUFELFdBQUM7Q0F4ZEQsQUF3ZEMsQ0F4ZGlDLEVBQUUsQ0FBQyxTQUFTLEdBd2Q3QztrQkF4ZG9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9hZGluZ1NjZW5lIGZyb20gXCIuL0NvbW1vbi9CYXNlL0xvYWRpbmdTY2VuZVwiO1xuaW1wb3J0IERldmljZSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL21pc2MvRGV2aWNlXCI7XG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4vQ29tbW9uL0Jhc2UvUGxheWVySW5mb1wiO1xuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi93ZWFrX25ldF9nYW1lL1VzZXJJbmZvXCI7XG5pbXBvcnQgUGxhdGZvcm0gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vUGxhdGZvcm1cIjtcbmltcG9ydCBjY1V0aWwgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay91dGlscy9jY1V0aWxcIjtcbmltcG9ydCB7IGV2dCB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvY29yZS9ldmVudFwiO1xuaW1wb3J0IE5ldCwgeyBuZXQgfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL21pc2MvTmV0XCI7XG5pbXBvcnQgV2Vha05ldEdhbWUgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9XZWFrTmV0R2FtZVwiO1xuaW1wb3J0IHsgQXBpLCBTZXJ2ZXJDb25maWcgfSBmcm9tIFwiLi9Db21tb24vQmFzZS9TZXJ2ZXJDb25maWdcIjtcbmltcG9ydCB7IFN1bUludml0ZSwgRGF5SW52aXRlIH0gZnJvbSBcIi4vVUkvVUlGcmllbmRIZWxwXCI7XG5pbXBvcnQgUGFuZG9yYVBvaW50IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdWkvY29udHJvbGxlci9QYW5kb3JhUG9pbnRcIjtcbmltcG9ydCB7IENvbmZpcm1PcHRpb24gfSBmcm9tIFwiLi9VSS9VSUNvbmZpcm1cIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuL0dhbWVcIjtcbmltcG9ydCBVbml0eSBmcm9tIFwiLi9Db21tb24vVW5pdHlcIjtcbmltcG9ydCB7IFR3b1R5cGUgfSBmcm9tIFwiLi9VSS9VSVBlcnNvblNraW5cIjtcbmltcG9ydCBCdWZmU3lzdGVtLCB7IGJ1ZmZTeXN0ZW0gfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi9idWZmcy9CdWZmU3lzdGVtXCI7XG5pbXBvcnQgRG91eWluU3RvcmFnZSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi90dHNkay9Eb3V5aW5TdG9yYWdlXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmxldCBpbml0ZWQ6IGJvb2xlYW4gPSBmYWxzZVxuLy8gaWYoIUNDX0RFQlVHKWNvbnNvbGUubG9nID0gZnVuY3Rpb24oKXt9XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gZGFpbHlDaGFsbGVuZ2U6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRpbGk6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuX3BsYXk6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZGFvamlzaGk6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsX3RpbWVMZWZ0OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxfbGV2ZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGd1aWRlTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBxaWFuZGFvX2hvbmdkaWFuOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHpodWFucGFuX2hvbmdkaWFuOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRoZW1lX2hvbmdkaWFuOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHNraW5faG9uZ2RpYW46IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZV9zaWRlYmFyX2ljb246IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgc3RhdGljIGluc3RhbmNlOiBNYWluID0gbnVsbFxuICAgIGlzY2xpY2s6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBwcm9wZXJ0eShkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkpXG4gICAgZ2lybDogZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShQYW5kb3JhUG9pbnQpXG4gICAgcmVkcG9pbnQ6IFBhbmRvcmFQb2ludCA9IG51bGw7XG5cbiAgICBkcmF3ZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5fY2hhbGxhbmdlOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBjaGFsbGVuZV91bmxvY2tUaXA6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgTWFpbi5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgICAgZXZ0Lm9uKFwiUGVyc2lzdE5vZGUub25WaWV3SGlkZGVuXCIsIHRoaXMub25WaWV3SGlkZGVuLCB0aGlzKTtcblxuICAgICAgICBldnQub24oXCJHYW1lLmdldFRpbGlcIiwgdGhpcy5wbGF5QWRkVGlsaSwgdGhpcyk7XG4gICAgICAgIGV2dC5vbihcIkdhbWUuZnJpZW5kVGlsaVwiLCB0aGlzLmNhbGNSZWRwb2ludCwgdGhpcyk7XG4gICAgICAgIGV2dC5vbihcIlVJU2tpbi5vbkhpZGRlblwiLCB0aGlzLm9uQ2hhbmdlU2tpbiwgdGhpcylcbiAgICAgICAgZXZ0Lm9uKFwiUGxheWVySW5mby5zdGFyXCIsIHRoaXMub25DaGFuZ2VTdGFyLCB0aGlzKVxuICAgICAgICBldnQub24oXCJVSVNraW4uY2hlY2tMb2NrXCIsIHRoaXMuY2hlY2tfbG9ja1NraW4sIHRoaXMpO1xuICAgICAgICBldnQub24oXCJVSUx1Y2t5LnJlZFBvaW50XCIsIHRoaXMubHVja3lSZWRQb2ludCwgdGhpcyk7XG4gICAgICAgIGV2dC5vbihcIk1haW4uc2tpblwiLCB0aGlzLm9uTWFpblNraW4sIHRoaXMpO1xuXG4gICAgICAgIC8vIHRoaXMub25WaXNpYmxlKHRoaXMubm9kZV9zaWRlYmFyX2ljb24sICgpID0+IFVzZXJJbmZvLnNpZGViYXJBdmFpbGFibGUgJiYgIVVzZXJJbmZvLnNpZGViYXJSZXdhcmRDbGFpbWVkKVxuXG4gICAgICAgIGlmIChpbml0ZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGluaXRlZCA9IHRydWU7XG4gICAgICAgICAgICBQbGF5ZXJJbmZvLnVwZGF0ZUJ1ZmZzKCk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrRGFpbHkoKTtcbiAgICAgICAgICAgIC8vIFBsYXRmb3JtLmxvYWRTdWJQYWNrYWdlKFwiQXVkaW9cIikudGhlbihfID0+IHtcbiAgICAgICAgICAgIC8vICAgICBEZXZpY2UucGxheUJHTShcIkJHTTBcIik7XG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICB9XG4gICAgICAgIERldmljZS5wbGF5QkdNKFwiQkdNMFwiKTtcbiAgICAgICAgLy8gdGhpcy5kYWlseUNoYWxsZW5nZS5hY3RpdmUgPSBQbGF5ZXJJbmZvLmxldmVsID49IGNzdi5Db25maWcuQmVnaW5fRGFpbHlfTGV2ZWwgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIGlmIChDQ19ERUJVRykge1xuICAgICAgICAgICAgd2luZG93WydtYWluJ10gPSB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLmxldmVsIDwgKGNzdi5Db25maWcuQ2hhbmxsZW5nZV9VbmxvY2tfTGV2ZWwgfHwgMjUpKSB7XG4gICAgICAgICAgICAvLzI15YWz6Kej6ZSBXG4gICAgICAgICAgICB0aGlzLmNoYWxsZW5lX3VubG9ja1RpcC5zdHJpbmcgPSAoKGNzdi5Db25maWcuQ2hhbmxsZW5nZV9VbmxvY2tfTGV2ZWwgfHwgMjUpIC0gUGxheWVySW5mby5sZXZlbCkudG9GaXhlZCgpICsgXCLlhbPlkI7op6PplIEhXCI7XG4gICAgICAgICAgICB0aGlzLmJ0bl9jaGFsbGFuZ2UuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJ0bl9jaGFsbGFuZ2UuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2hhbGxlbmVfdW5sb2NrVGlwLm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZih0aGlzLm5vZGVfc2lkZWJhcl9pY29uKXtcbiAgICAgICAgICAgIGlmKERvdXlpblN0b3JhZ2Uuc2lkZWJhckF2YWlsYWJsZSAmJiAhUGxheWVySW5mby5pc0ZhdkNsYWltZWQpe1xuICAgICAgICAgICAgICAgIC8vIG9rIFxuICAgICAgICAgICAgICAgIC8vIHRvZG8gOiBjaGVjayBzaWRlYmFyIHJld2FyZCBpbmRleCBpcyBhdmFpbGFibGUgXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlX3NpZGViYXJfaWNvbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlX3NpZGViYXJfaWNvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgb25DaGFuZ2VTa2luKCkge1xuICAgICAgICBVbml0eS5sb2FkU2tpbnModGhpcy5naXJsLCAxKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZVN0YXIoKSB7XG4gICAgICAgIGNzdi5Ta2luLnZhbHVlcy5mb3JFYWNoKHYgPT4ge1xuICAgICAgICAgICAgaWYgKHYudW5sb2NrVHlwZSA9PSAyICYmICFQbGF5ZXJJbmZvLmlzU2tpblVubG9ja2VkKHYuaWQpICYmIFBsYXllckluZm8uc3RhciA+PSB2LnVubG9jazIpIHtcbiAgICAgICAgICAgICAgICAvLyBQbGF5ZXJJbmZvLnVubG9ja1NraW4odi5pZCk7XG4gICAgICAgICAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlVbmxvY2tTa2luXCIsIHYuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy/liKTmlq0g5piv5ZCm6Kej6ZSBIOeroOiKglxuICAgICAgICBsZXQgYyA9IFBsYXllckluZm8uZ2V0Q2hhcHRlcihQbGF5ZXJJbmZvLmxldmVsKTtcbiAgICAgICAgaWYgKFBsYXllckluZm8uc3RhciA+PSBjc3Yuc3Rhci5nZXQoYykuZGVtYW5kKSB7XG4gICAgICAgICAgICBsZXQgYk5ldyA9IFBsYXllckluZm8uaXNDaGFwdGVyTmV3KGMpXG4gICAgICAgICAgICBpZiAoYyA+IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoYk5ldykge1xuICAgICAgICAgICAgICAgICAgICB2bS5zaG93KFwiUHJlZmFicy9zdG9yeS9oZWxwXCIsIGMpXG4gICAgICAgICAgICAgICAgICAgIFBsYXllckluZm8ubWFya0NoYXB0ZXJPbGQoYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBvbkxvYWRGaW5pc2hlZCh2aWV3bmFtZSkge1xuICAgICAgICBpZiAodmlld25hbWUpXG4gICAgICAgICAgICB2bS5zaG93KHZpZXduYW1lKVxuICAgIH1cblxuXG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgUGxheWVySW5mby5pbml0KCk7XG4gICAgICAgIGlmIChidWZmU3lzdGVtLmdldEJ1ZmYoXCJBdXRvTGFib3VyXCIpLmlzRW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5kYW9qaXNoaS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kYW9qaXNoaS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhYmVsX3RpbWVMZWZ0LnN0cmluZyA9IG5ldyBEYXRlKFBsYXllckluZm8uYnVmZl9sYWJvdXIgKiAxMDAwKS5mb3JtYXQoXCJtbTpzc1wiKTtcbiAgICAgICAgaWYgKFBsYXllckluZm8ubGFib3VyIDwgY3N2LkNvbmZpZy5NYXhfRW5lcmd5ICYmICFidWZmU3lzdGVtLmdldEJ1ZmYoXCJBdXRvTGFib3VyXCIpLmlzRW5hYmxlZCkge1xuICAgICAgICAgICAgaWYgKFBsYXllckluZm8uYnVmZl9sYWJvdXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgYnVmZlN5c3RlbS5zdGFydEJ1ZmYoXCJBdXRvTGFib3VyXCIsIFBsYXllckluZm8uYnVmZl9sYWJvdXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYnVmZlN5c3RlbS5zdGFydEJ1ZmYoXCJBdXRvTGFib3VyXCIsIGNzdi5Db25maWcuTGFib3VyUmVjb3ZlcnlUaW1lICogNjAgfHwgMzAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBidWZmU3lzdGVtLnN0b3AoXCJBdXRvTGFib3VyXCIpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdpcmwuYXJtYXR1cmUoKS5hbmltYXRpb24uZmFkZUluKCdmcmlnaHRlbmVkJywgMC4yLCAwLCAnMScpO1xuICAgICAgICBVbml0eS5sb2FkU2tpbnModGhpcy5naXJsLCAxKTtcblxuICAgICAgICB0aGlzLmlzY2xpY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYWJlbF9sZXZlbC5zdHJpbmcgPSBcIuWFs+WNoei/m+W6pjpcIiArIFBsYXllckluZm8ubGV2ZWw7XG5cbiAgICAgICAgUGxhdGZvcm0uaGlkZUJhbm5lckFkKCk7XG5cbiAgICAgICAgLy/mr4/mrKHov5vkuLvpobXor7fmsYLmmK/lkKbmnInkvZPlipvlj6/pooblj5ZcbiAgICAgICAgLy8gaWYgKFBsYXllckluZm8uaXNXZWNoYXQoKSkgdGhpcy5jaGVja1RpbGkoKTtcbiAgICAgICAgaWYgKFBsYXllckluZm8uaXNJbkd1aWRlICYmICFQbGF5ZXJJbmZvLmlzX2d1aWRlXzE1KSB7XG4gICAgICAgICAgICB0aGlzLmd1aWRlTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdlYWtOZXRHYW1lLmNsaWVudC5odHRwUG9zdChTZXJ2ZXJDb25maWcuZm9yY2VfdXJsKS50aGVuKHYgPT4ge1xuICAgICAgICAvLyAgICAgaWYgKHYpIHtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh2KTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSlcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gY3N2LmxldmVsLnZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFQbGF5ZXJJbmZvLmxldmVsX3N0YXJbaV0pIHtcbiAgICAgICAgICAgICAgICBQbGF5ZXJJbmZvLmxldmVsX3N0YXJbaV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucWlhbmRhb19ob25nZGlhbi5hY3RpdmUgPSBnLmlzTmV4dERheShQbGF5ZXJJbmZvLnNpZ25UaW1lKTtcbiAgICAgICAgdGhpcy56aHVhbnBhbl9ob25nZGlhbi5hY3RpdmUgPSBnLmlzTmV4dERheShVc2VySW5mby5mcmVlZHJhd1RpbWUpO1xuICAgICAgICB0aGlzLmNoZWNrX2xvY2tTa2luKCk7XG5cbiAgICAgICAgaWYgKFBsYXllckluZm8uZ3VpZGUgPT0gMCkge1xuICAgICAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvc3RvcnkvY29taWNzMVwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZy5pc05leHREYXkoUGxheWVySW5mby5zaWduVGltZSkgJiYgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlTaWduXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tEYWlseSgpIHtcbiAgICAgICAgY3N2LmRhaWx5X2xldmVsLnZhbHVlcy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgaWYgKFBsYXllckluZm8uaXNHcmVhdGVyRGF0ZShlLmRheSkpIHtcbiAgICAgICAgICAgICAgICBQbGF5ZXJJbmZvLm1heERhaWx5THYgPSBlLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCLmr4/ml6XmjJHmiJjmnIDlpKflhbPljaHmlbDvvJpcIiArIFBsYXllckluZm8ubWF4RGFpbHlMdilcbiAgICB9XG5cbiAgICBjYWxjUmVkcG9pbnQoZGF5X2ludml0ZSwgc3VtX2ludml0ZSkge1xuICAgICAgICBsZXQgZnJlZVRpbGkgPSAwO1xuICAgICAgICBmb3IgKHZhciBrIGluIGRheV9pbnZpdGUpIHtcbiAgICAgICAgICAgIGxldCBkYXkgPSBkYXlfaW52aXRlW2tdIGFzIERheUludml0ZVxuICAgICAgICAgICAgaWYgKGRheSAmJiBkYXkuc3RhdHVzID09IDApIHtcbiAgICAgICAgICAgICAgICBmcmVlVGlsaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBzdW0gPSBzdW1faW52aXRlIGFzIFN1bUludml0ZVxuICAgICAgICBzdW0uY2xhaW1lZENvdW50ID0gc3VtLmNsYWltZWRDb3VudCB8fCAwO1xuICAgICAgICBpZiAoc3VtLmNsYWltZWRDb3VudCA8IHN1bS5pbnZpdGVlQ291bnQpIHtcbiAgICAgICAgICAgIGZyZWVUaWxpKys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWRwb2ludC5zZXROdW1iZXIoZnJlZVRpbGkpO1xuICAgIH1cblxuICAgIGx1Y2t5UmVkUG9pbnQoKSB7XG4gICAgICAgIHRoaXMuemh1YW5wYW5faG9uZ2RpYW4uYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY2hlY2tUaWxpKCkge1xuICAgICAgICBXZWFrTmV0R2FtZS5jbGllbnQuaHR0cEdldChBcGkuaW52aXRlX2dldCkudGhlbih2ID0+IHtcbiAgICAgICAgICAgIGlmICh2ID09IE5ldC5Db2RlLlRpbWVvdXQpIHtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGQgPSBKU09OLnBhcnNlKHYpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZC5lcnJubyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkID0gZC5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGNSZWRwb2ludChkLmRheV9pbnZpdGUsIGQuc3VtX2ludml0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBvbkNvbmZpcm0ob3B0aW9uOiBDb25maXJtT3B0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb24gPT0gQ29uZmlybU9wdGlvbi5ZZXMpIHtcbiAgICAgICAgICAgIFBsYXllckluZm8uaXNSYW5kb21MZXZlbCA9IHRydWU7XG4gICAgICAgICAgICBsZXQgbHZyb3cgPSBjc3YubGV2ZWwuZ2V0KGcucmFuZG9tSW50KDIsIGNzdi5sZXZlbC5zaXplKSlcbiAgICAgICAgICAgIHRoaXMuZmx5dGlsaShsdnJvdy5pZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBQbGF5ZXJJbmZvLmlzUmFuZG9tTGV2ZWwgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkNvbmZpcm1fY2hhbGxlbmdlKG9wdGlvbjogQ29uZmlybU9wdGlvbikge1xuICAgICAgICBpZiAob3B0aW9uID09IENvbmZpcm1PcHRpb24uWWVzKSB7XG4gICAgICAgICAgICBQbGF5ZXJJbmZvLmlzUGxheWluZ0RhaWx5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJQ2hhbGxlbmdlQ2hhcHRlclwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJQ29uZmlybVwiLCBcIuaYr+WQpumaj+acuuW8gOWni+S5i+WJjeeahOWFs+WNoVwiLCB0aGlzLm9uQ29uZmlybSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uZmlybSgpIHtcbiAgICAgICAgaWYgKFBsYXllckluZm8ubGV2ZWwgPj0gY3N2LmxldmVsLnNpemUpIHtcbiAgICAgICAgICAgIGlmIChQbGF5ZXJJbmZvLmRhaWx5bGV2ZWwgPD0gUGxheWVySW5mby5tYXhEYWlseUx2KSB7XG4gICAgICAgICAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlDb25maXJtXCIsIFwi5piv5ZCm5YmN5b6A5oyR5oiY5YWz5Y2h77yfXCIsIHRoaXMub25Db25maXJtX2NoYWxsZW5nZSwgdGhpcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJQ29uZmlybVwiLCBcIuaYr+WQpumaj+acuuW8gOWni+S5i+WJjeeahOWFs+WNoVwiLCB0aGlzLm9uQ29uZmlybSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZseXRpbGkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTWFpblNraW4oKSB7XG4gICAgICAgIExvYWRpbmdTY2VuZS5nb3RvKFwiU2tpblwiKTsvLywgVHdvVHlwZS5Ta2luXG4gICAgfVxuXG4gICAgY2hlY2tfbG9ja1NraW4oKSB7XG4gICAgICAgIFVzZXJJbmZvLmlzdW5sb2NrX21lbiA9IDA7XG4gICAgICAgIFVzZXJJbmZvLmlzdW5sb2NrX2dpcmwgPSAwO1xuICAgICAgICBVc2VySW5mby5pc3VubG9ja190aGVtZSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDU7IGkrKykge1xuICAgICAgICAgICAgVXNlckluZm9bYGlzdW5sb2NrX2dpcmwke2l9YF0gPSAwO1xuICAgICAgICAgICAgVXNlckluZm9bYGlzdW5sb2NrX21lbiR7aX1gXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aGVtZV9ob25nZGlhbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5za2luX2hvbmdkaWFuLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGNzdi5Ta2luLnZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBjc3YuU2tpbi5nZXQoaSk7XG4gICAgICAgICAgICBpZiAoKChQbGF5ZXJJbmZvLmxldmVsID49IGRhdGEudW5sb2NrMSAmJiBkYXRhLnVubG9ja1R5cGUgPT0gMSkgfHwgKGRhdGEudW5sb2NrVHlwZSA9PSAyICYmIFBsYXllckluZm8uc3RhciA+PSBkYXRhLnVubG9jazIpKVxuICAgICAgICAgICAgICAgICYmICFQbGF5ZXJJbmZvLmlzU2tpblVubG9ja2VkKGRhdGEuaWQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLmlzdW5sb2NrX2dpcmwgPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50eXBlID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uaXN1bmxvY2tfbWVuID0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudHlwZSA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLmlzdW5sb2NrX3RoZW1lID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuc3ViVHlwZSA8IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mb1tgaXN1bmxvY2tfZ2lybCR7ZGF0YS5zdWJUeXBlICsgMX1gXSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50eXBlID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvW2Bpc3VubG9ja19tZW4ke2RhdGEuc3ViVHlwZSArIDF9YF0gPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFVzZXJJbmZvLmlzdW5sb2NrX3RoZW1lKSB7XG4gICAgICAgICAgICB0aGlzLnRoZW1lX2hvbmdkaWFuLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFVzZXJJbmZvLmlzdW5sb2NrX21lbiB8fCBVc2VySW5mby5pc3VubG9ja19naXJsKSB7XG4gICAgICAgICAgICB0aGlzLnNraW5faG9uZ2RpYW4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsaWNrX3NpZGViYXIoKSB7XG4gICAgICAgIGlmIChjYy5zeXMuQllURURBTkNFX0dBTUUgPT0gY2Muc3lzLnBsYXRmb3JtKSB7XG4gICAgICAgICAgICBpZiAoRG91eWluU3RvcmFnZS5pc0Zyb21TaWRlYmFyKSB7XG4gICAgICAgICAgICAgICAgLy8gVXNlckluZm8uaXNGcm9tU2lkZWJhciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL0JEX0d1aWRlX1NpZGViYXJcIiwgXCJjbGFpbVwiKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2bS5zaG93KFwiUHJlZmFicy9VSS9CRF9HdWlkZV9TaWRlYmFyXCIsIFwic2lkZWJhclwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xpY2tfcGxheSgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coY3N2LmxldmVsLnNpemUpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFBsYXllckluZm8ucGxheWluZ2xldmVsKVxuXG4gICAgICAgIGlmICh0aGlzLmlzY2xpY2spIHJldHVybjtcblxuICAgICAgICAvL+i/m+WFpeaWsOaJi+W8leWvvOWFs1xuICAgICAgICBpZiAoUGxheWVySW5mby5ndWlkZSA9PSAwKSB7XG4gICAgICAgICAgICBMb2FkaW5nU2NlbmUuZ290byhcIkdhbWVcIik7XG4gICAgICAgICAgICB0aGlzLmlzY2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLmxhYm91ciA+IDApIHtcbiAgICAgICAgICAgIGlmICghVXNlckluZm8uZ3VuX251bSAmJiAhVXNlckluZm8uaXNHZXRHdW5TdGFydCkge1xuICAgICAgICAgICAgICAgIGxldCByYW4gPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgICAgIGlmIChQbGF5ZXJJbmZvLmxldmVsID49IGNzdi5Db25maWcuU3RhcnRfTHZfR2V0X0d1blxuICAgICAgICAgICAgICAgICAgICAmJiBVc2VySW5mby5ndW5WaWV3RGF5IDwgY3N2LkNvbmZpZy5HZXRfR3VuX0xpbXRfRGF5XG4gICAgICAgICAgICAgICAgICAgICYmIFVzZXJJbmZvLmd1blZpZXcgPCBjc3YuQ29uZmlnLkdldF9HdW5fTGltdFxuICAgICAgICAgICAgICAgICAgICAmJiByYW4gPCBjc3YuQ29uZmlnLkdldF9HdW5fUHJvXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJR2V0R3VuXCIsIF8gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maXJtKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIFwiaXNHZXRHdW5TdGFydFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm0oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJR2V0TGFib3VyXCIsIF8gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybSgpO1xuICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIHRlc3QobHYpIHtcbiAgICAgICAgR2FtZS5kZWJ1ZyA9IHRydWU7XG4gICAgICAgIExvYWRpbmdTY2VuZS5nb3RvKFwiR2FtZVwiLCBsdilcbiAgICB9XG4gICAgY2xpY2tfZGFpbHkoKSB7XG5cbiAgICAgICAgUGxheWVySW5mby5pc1BsYXlpbmdEYWlseSA9IHRydWU7XG4gICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJQ2hhbGxlbmdlQ2hhcHRlclwiKTtcbiAgICAgICAgaWYgKFBsYXllckluZm8uaXNJbkd1aWRlICYmICFQbGF5ZXJJbmZvLmlzX2d1aWRlXzE1KSB7XG4gICAgICAgICAgICB0aGlzLmd1aWRlTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGNsaWNrX2xldmVsKCkge1xuICAgICAgICBQbGF5ZXJJbmZvLmlzUGxheWluZ0RhaWx5ID0gZmFsc2U7XG5cbiAgICAgICAgLy8gYXdhaXQgUGxhdGZvcm0ubG9hZFN1YlBhY2thZ2UoXCJJbWFnZVBhcnRcIik7XG4gICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJQ2hhcHRlclwiKTtcbiAgICB9XG5cbiAgICBjbGlja19zZXR0aW5nKCkge1xuICAgICAgICB2bS5zaG93KFwiUHJlZmFicy9VSS9VSVNldHRpbmdcIik7XG4gICAgfVxuXG4gICAgY2xpY2tfcmFuaygpIHtcbiAgICAgICAgLy8gdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlSYW5rXCIpO1xuICAgIH1cblxuICAgIGNsaWNrX2xhYm91cigpIHtcbiAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlHZXRMYWJvdXJcIiwgbnVsbCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgY2xpY2tfZHJhdygpIHtcblxuICAgICAgICB2bS5zaG93KFwiUHJlZmFicy9VSS9VSUx1Y2t5XCIpO1xuICAgIH1cblxuXG4gICAgY2xpY2tfZ2V0dGlsaSgpIHtcbiAgICAgICAgLy8gdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlGcmllbmRIZWxwXCIpXG4gICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJRnJlZUdldExhYm91clwiKVxuICAgIH1cblxuICAgIGNsaWNrX2ZyaWVuZCgpIHtcbiAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlGcmllbmRIZWxwXCIpXG4gICAgfVxuXG4gICAgY2xpY2tfdGhlbWUoKSB7XG4gICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJU2tpblwiKTtcbiAgICB9XG5cbiAgICBjbGlja19zaG91Y2hhbmcoKSB7XG4gICAgICAgIExvYWRpbmdTY2VuZS5nb3RvKFwiU2tpblwiLCBUd29UeXBlLkNvbGxlY3Rpb24pO1xuICAgIH1cblxuICAgIGNsaWNrX3NraW4oKSB7XG4gICAgICAgIExvYWRpbmdTY2VuZS5nb3RvKFwiU2tpblwiLCBUd29UeXBlLlNraW4pO1xuICAgIH1cblxuICAgIGNsaWNrX3NpZ24oKSB7XG4gICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJU2lnblwiKTtcbiAgICB9XG5cbiAgICBwbGF5QWRkVGlsaSh3b3JsZHBvcywgbnVtKSB7XG4gICAgICAgIGNjVXRpbC5wbGF5Rmx5KHRoaXMudGlsaSwgMS4wLCBudW0pXG4gICAgICAgIC8vIGNjVXRpbC5wbGF5Rmx5Q29pbih0aGlzLnRpbGksIHRoaXMudGlsaS5wYXJlbnQsIHdvcmxkcG9zLCBjY1V0aWwuZ2V0V29ybGRQb3NpdGlvbih0aGlzLnRpbGkpLCB7IGR1cjogMS4wLCBpbnRlcnZhbDogMC4yLCBudW0gfSlcbiAgICB9XG5cbiAgICBhc3luYyBjbGlja193b3JsZF93eCh1c2VySW5mbz8sIGlzTmV3Pykge1xuICAgICAgICBpZiAodXNlckluZm8pIHtcbiAgICAgICAgICAgIGF3YWl0IFVzZXJJbmZvLm9wZW5SYW5rQW5kVXBsb2FkKHsgbGV2ZWw6IFBsYXllckluZm8ubGV2ZWwsIGNoYWxsZW5nZWxldmVsOiBQbGF5ZXJJbmZvLmRhaWx5bGV2ZWwgfSwgdXNlckluZm8pO1xuICAgICAgICAgICAgLy8gdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlSYW5rXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmx5dGlsaShpZD8pIHtcbiAgICAgICAgbGV0IHRpbGkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRpbGkpO1xuICAgICAgICBsZXQgdGFyID0gbmV3IGNjLlZlYzIodGhpcy5idG5fcGxheS5wb3NpdGlvbi54LCB0aGlzLmJ0bl9wbGF5LnBvc2l0aW9uLnkpO1xuICAgICAgICBsZXQgd3BvcyA9IHRoaXMudGlsaS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jZW50ZXI7XG4gICAgICAgIGxldCBzdGFydHBvcyA9IHRoaXMuYnRuX3BsYXkucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdwb3MpO1xuICAgICAgICBsZXQgbW92ZSA9IGNjLm1vdmVUbygwLjUsIHRhcikuZWFzaW5nKGNjLmVhc2VTaW5lT3V0KCkpXG4gICAgICAgIGxldCBzZXEgPSBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgIG1vdmUsXG4gICAgICAgICAgICBjYy5jYWxsRnVuYyhfID0+IHtcbiAgICAgICAgICAgICAgICB0aWxpLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgIFBsYXllckluZm8uaXNQbGF5aW5nRGFpbHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBQbGF5ZXJJbmZvLmxhYm91ci0tO1xuICAgICAgICAgICAgICAgIFBsYXllckluZm8uc2F2ZShcImxhYm91clwiKTtcbiAgICAgICAgICAgICAgICBpZiAoUGxheWVySW5mby5sYWJvdXIgPD0gY3N2LkNvbmZpZy5NYXhfRW5lcmd5IC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBidWZmU3lzdGVtLnN0YXJ0QnVmZihcIkF1dG9MYWJvdXJcIiwgUGxheWVySW5mby5idWZmX2xhYm91ciB8fCAzMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgUGxheWVySW5mby5wbGF5aW5nbGV2ZWwgPSBpZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBQbGF5ZXJJbmZvLnBsYXlpbmdsZXZlbCA9IFBsYXllckluZm8ubGV2ZWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIExvYWRpbmdTY2VuZS5nb3RvKFwiR2FtZVwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgdGlsaS5wYXJlbnQgPSB0aGlzLmJ0bl9wbGF5LnBhcmVudDtcbiAgICAgICAgdGlsaS5zZXRQb3NpdGlvbihzdGFydHBvcyk7XG4gICAgICAgIHRpbGkucnVuQWN0aW9uKHNlcSk7XG4gICAgICAgIHRoaXMuaXNjbGljayA9IHRydWU7XG5cbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcbiAgICAgICAgZXZ0Lm9mZih0aGlzKTtcbiAgICB9XG59XG4iXX0=