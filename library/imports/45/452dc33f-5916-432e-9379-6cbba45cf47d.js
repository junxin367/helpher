"use strict";
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