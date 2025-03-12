"use strict";
cc._RF.push(module, '48e3dwvCYhKg51q7xsnrrYc', 'Game');
// Game/Scripts/Game.ts

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
var event_1 = require("../../framework/core/event");
var LevelLoader_1 = require("./LevelLoader");
var PlayerInfo_1 = require("./Common/Base/PlayerInfo");
var Device_1 = require("../../framework/misc/Device");
var ccUtil_1 = require("../../framework/utils/ccUtil");
var Platform_1 = require("../../framework/extension/Platform");
var LoadingScene_1 = require("./Common/Base/LoadingScene");
var mesh_sprite_1 = require("../../framework/extension/render/mesh-sprite");
var UserInfo_1 = require("../../framework/extension/weak_net_game/UserInfo");
var StatHelper_1 = require("../../framework/extension/aldsdk/StatHelper");
var FSM_1 = require("../../framework/core/FSM");
var Switcher_1 = require("../../framework/ui/controller/Switcher");
var umeng_1 = require("../../framework/extension/aldsdk/umeng");
var mmgame_1 = require("../../framework/extension/mmcloud/mmgame");
var ToastManager_1 = require("../../framework/ui/ToastManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var State;
(function (State) {
    State[State["Normal"] = 0] = "Normal";
    State[State["Hint"] = 1] = "Hint";
})(State || (State = {}));
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.guide = null;
        _this.tili = null;
        _this.xingxing = null;
        _this.bg = null;
        _this.close_btn = null;
        _this.level_str = null;
        _this.tip_str = null;
        _this.star_switch = null;
        _this.loader = null;
        _this.isOver = true;
        _this.wallbg = null;
        _this.star = 0;
        _this.isUsedMagnet = false;
        _this.lastKey = null;
        //同一把钥匙 的点击次数
        _this.sameKeyCount = 0;
        return _this;
    }
    Game_1 = Game;
    Game.prototype.onLoad = function () {
        Game_1.instance = this;
        cc.director.getCollisionManager().enabled = true;
        cc.director.getPhysicsManager().enabled = true;
        // cc.director.getPhysicsManager().enabledAccumulator = true;
        // cc.director.getPhysicsManager().debugDrawFlags =
        //     cc.PhysicsManager.DrawBits.e_aabbBit |
        //     // cc.PhysicsManager.DrawBits.e_pairBit |
        //     // cc.PhysicsManager.DrawBits.e_centerOfMassBit |
        //     cc.PhysicsManager.DrawBits.e_jointBit |
        //     cc.PhysicsManager.DrawBits.e -[];`./hapeBit
        //     ;
        this.fsm = this.addComponent(FSM_1.default);
        this.fsm.init(this, State);
        this.fsm.enterState(State.Normal);
        var node = new cc.Node();
        var body = node.addComponent(cc.RigidBody);
        body.type = cc.RigidBodyType.Static;
        if (CC_DEBUG) {
            // add mouse joint
            var joint = node.addComponent(cc.MouseJoint);
            joint.mouseRegion = this.node;
        }
        node.parent = this.node;
        event_1.evt.on("Game.win", this.onWin, this);
        event_1.evt.on("Game.lose", this.onLose, this);
        event_1.evt.on("Game.catch", this.onCatched, this);
        event_1.evt.on("Game.hello", this.onSayHello, this);
        event_1.evt.on("Game.keyMoved", this.onKeyMoved, this);
        event_1.evt.on("Game.getTili", this.onGetTili, this);
        event_1.evt.on("Game.getstar", this.onGetStar, this);
        event_1.evt.on("PlayerInfo.star", this.onChangeStar, this);
        event_1.evt.on("UISkin.checkLock", this.check_lockSkin, this);
        event_1.evt.on("Main.skin", this.onMainSkin, this);
        this.loader = this.getComponentInChildren(LevelLoader_1.default);
        this.loader.delegate = this;
        this.loader.onLevelLoaded.add(this.onLevelLoaded, this);
        if (!Game_1.debug) {
            if (PlayerInfo_1.PlayerInfo.guide == 0) {
                //加载新手引导关
                PlayerInfo_1.PlayerInfo.playinglevel = 1;
                this.loader.level = 1;
                PlayerInfo_1.PlayerInfo.guide = 1;
                PlayerInfo_1.PlayerInfo.save("guide");
            }
            else {
                this.loader.level = PlayerInfo_1.PlayerInfo.getCurrentPlayingLevel();
            }
        }
        var bg = this.node.getChildByName("bg");
        bg.on(cc.Node.EventType.TOUCH_END, this.onClickBg, this);
        Platform_1.default.hideBannerAd();
    };
    Game.prototype.onLoadPrefab = function (lvIndex, path) {
        var _this = this;
        if (PlayerInfo_1.PlayerInfo.isPlayingDaily) {
            var d = csv.daily_level.get(lvIndex);
            return ccUtil_1.default.getRes(path + "/" + d.number, cc.Prefab);
        }
        else {
            var d = csv.level.get(lvIndex);
            return ccUtil_1.default.getRes(path + "/" + d.number, cc.Prefab).catch(function (v) {
                // back 
                ToastManager_1.Toast.make("未找到该关卡,请去商店获取完整版本!");
                _this.scheduleOnce(function (v) {
                    LoadingScene_1.default.goto("Main");
                }, 2);
            });
        }
    };
    Game.prototype.onClickBg = function (e) {
        //点击背景切换方向
        event_1.evt.emit('Game.changeRoleDir');
        this.activeGame();
    };
    Game.prototype.onMainSkin = function () {
        LoadingScene_1.default.goto("Skin"); //, TwoType.Skin
    };
    Game.prototype.onGetStar = function (pos) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.star += 1;
                        ccUtil_1.default.playFlyCoin(this.xingxing, this.xingxing.parent, ccUtil_1.default.getWorldPosition(pos), ccUtil_1.default.getWorldPosition(this.star_switch.node), { num: 1.0 });
                        return [4 /*yield*/, event_1.evt.sleep(0.3)];
                    case 1:
                        _a.sent();
                        this.star_switch.index = Math.min(this.star, 3);
                        return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.onChangeStar = function () {
        csv.Skin.values.forEach(function (v) {
            if (v.unlockType == 2 && !PlayerInfo_1.PlayerInfo.isSkinUnlocked(v.id) && PlayerInfo_1.PlayerInfo.star >= v.unlock2) {
                // PlayerInfo.unlockSkin(v.id);
                vm.show("Prefabs/UI/UIUnlockSkin", v.id);
            }
        });
    };
    Game.prototype.onGetTili = function (worldpos, num) {
        ccUtil_1.default.playFly(this.tili, 1.0, num);
        // ccUtil.playFlyCoin(this.tili, this.tili.parent, worldpos, ccUtil.getWorldPosition(this.tili), { dur: 1.0, interval: 0.2, num })
    };
    Game.prototype.onKeyMoved = function (key) {
        if (this.isOver)
            return;
        // if (this.lastKey == key) {
        //     this.sameKeyCount++;
        //     if (this.sameKeyCount >= 4) {
        //         // Toast.make("点击任意位置，改变行走方向!")
        //         this.sameKeyCount = 0;
        //     }
        // } else {
        //     this.sameKeyCount = 0;
        // }
        // this.lastKey = key;
    };
    Game.prototype.startGame = function () {
        // let readyNode = this.node.getChildByName("ready")
        // readyNode.active = false;
        event_1.evt.emit("Game.onStarted", this);
        this.isOver = false;
        PlayerInfo_1.PlayerInfo.resetLevel();
        umeng_1.umeng.startLevel("level" + (PlayerInfo_1.PlayerInfo.getCurrentPlayingLevel() + (PlayerInfo_1.PlayerInfo.isPlayingDaily ? 300 : 0)));
    };
    Game.prototype.onSayHello = function () {
        Device_1.default.playSfx("hello");
    };
    Game.prototype.onLoadFinished = function (lv) {
        if (lv) {
            this.loader.loadPrefab("Prefabs/Levels/" + lv);
        }
    };
    Game.prototype.onDestroy = function () {
        Game_1.instance = null;
        Game_1.debug = false;
        event_1.evt.off(this);
        cc.audioEngine.stopAll();
    };
    Game.prototype.start = function () {
        this.close_btn.active = false;
        var w = cc.winSize.width;
        var h = cc.winSize.height;
        if (w / h > 0.7) {
            //ipad or other pad 
            var canvas = this.node.getComponent(cc.Canvas);
            canvas.fitHeight = true;
            canvas.fitWidth = false;
        }
    };
    Game.prototype.check_lockSkin = function () {
        UserInfo_1.UserInfo.isunlock_men = 0;
        UserInfo_1.UserInfo.isunlock_girl = 0;
        UserInfo_1.UserInfo.isunlock_theme = 0;
        for (var i = 1; i <= 5; i++) {
            UserInfo_1.UserInfo["isunlock_girl" + i] = 0;
            UserInfo_1.UserInfo["isunlock_men" + i] = 0;
        }
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
    };
    Game.prototype.onWin = function () {
        umeng_1.umeng.finishLevel("level" + (PlayerInfo_1.PlayerInfo.getCurrentPlayingLevel() + (PlayerInfo_1.PlayerInfo.isPlayingDaily ? 300 : 0)));
        //游戏胜利
        if (this.isOver)
            return;
        Device_1.default.playSfx("hug");
        this.isOver = true;
        this.scheduleOnce(this.openWin, 0.5);
    };
    Game.prototype.openWin = function () {
        if (mmgame_1.default.isCheatOpen("interstitial_on_level_end")) {
            Platform_1.default.showInterstitial();
        }
        if (PlayerInfo_1.PlayerInfo.playinglevel == PlayerInfo_1.PlayerInfo.level && PlayerInfo_1.PlayerInfo.playinglevel == 10) {
            vm.show("Prefabs/UI/UIFreeProp", function () {
                vm.show("Prefabs/UI/UIWin");
            });
        }
        else {
            vm.show("Prefabs/UI/UIWin");
        }
    };
    Game.prototype.changeBg = function () {
        var num = Math.ceil(Math.random() * 4);
        // if (PlayerInfo.isPlayingDaily) {
        var count = Math.ceil(Math.random() * 3) + 6;
        ccUtil_1.default.setDisplay(this.bg, "Img/level/theme/bg_" + UserInfo_1.UserInfo.theme);
        // }
        // else {
        //     console.log('change bg ' + num)
        //     ccUtil.setDisplay(this.bg, "ui/bg/bg_" + num);
        // }
    };
    Game.prototype.onCatched = function (param) {
        event_1.evt.emit("Game.lose", param);
    };
    Game.prototype.onLevelLoaded = function (node, lvIndex) {
        var _this = this;
        // ttsdk.start_recorder();
        PlayerInfo_1.PlayerInfo.isPlayingSpecial = false;
        var wallnode = node.getChildByName("bg");
        if (wallnode) {
            this.wallbg = wallnode.getComponent(mesh_sprite_1.default);
            this.wallbg.diffuseColor = cc.color(83, 130, 151, 255);
            ccUtil_1.default.getRes("Prefabs/shadow", cc.Prefab).then(function (v) {
                var n = cc.instantiate(v);
                n.parent = _this.wallbg.node;
            });
            // this.wallbg.color = cc.color().fromHEX("#5F8394")
        }
        // this.isOver = false;
        this.changeBg();
        this.level_str.string = (PlayerInfo_1.PlayerInfo.isPlayingDaily ? "挑战-" : "关卡-") + PlayerInfo_1.PlayerInfo.getCurrentPlayingLevel();
        if (UserInfo_1.UserInfo.isNew)
            StatHelper_1.default.sendPath("新用户关卡开始人数", "关卡", PlayerInfo_1.PlayerInfo.playinglevel);
        StatHelper_1.default.sendPath("所有用户关卡开始人数", "关卡", PlayerInfo_1.PlayerInfo.playinglevel);
        event_1.evt.emit("Game.onLevelLoaded", lvIndex);
        PlayerInfo_1.PlayerInfo.onStartLevel();
        //新手引导 关卡
        // if (lvIndex != 1 || (lvIndex === 8 && PlayerInfo.level != 8)) {
        //     let ready = this.node.getChildByName("ready")
        //     if (ready) {
        //         ready.active = true;
        //         ready.on(cc.Node.EventType.TOUCH_START, this.startGame, this)
        cc.director.getPhysicsManager().enabled = false;
        //     }
        // } else {
        this.startGame();
        // }
        Device_1.default.playBGM("BGM" + UserInfo_1.UserInfo.theme);
        if (UserInfo_1.UserInfo.isNew) {
            Platform_1.default.sendUmengEvt("level_start_new", PlayerInfo_1.PlayerInfo.playinglevel.toString());
        }
        else {
            Platform_1.default.sendUmengEvt("level_start_all", PlayerInfo_1.PlayerInfo.playinglevel.toString());
        }
        this.star = 0;
        this.star_switch.index = 0;
        var walls = this.loader.node.children[0].getChildByName("walls");
        for (var i = 0; i < walls.childrenCount; i++) {
            var spr = walls.children[i].getComponent(cc.Sprite);
            spr.type = cc.Sprite.Type.TILED;
            if (spr.node.width < spr.node.height) {
                spr.node.width = 35;
                ccUtil_1.default.setDisplay(spr, "Img/level/theme/zhuan_" + UserInfo_1.UserInfo.theme);
            }
            else {
                spr.node.height = 40;
                ccUtil_1.default.setDisplay(spr, "Img/level/theme/zhuan_v_" + UserInfo_1.UserInfo.theme);
            }
        }
        var caos = this.loader.node.children[0].getChildByName("cao");
        for (var i = 0; i < caos.childrenCount; i++) {
            var node_1 = caos.children[i];
            var spr = node_1.getComponent(cc.Sprite);
            ccUtil_1.default.setDisplay(spr, "Img/level/theme/jinshucao_" + UserInfo_1.UserInfo.theme);
            if (node_1.name.indexOf("short") >= 0) {
                if (node_1.angle == 90) {
                    node_1.height = 30;
                }
                else {
                    node_1.height = 40;
                }
            }
            else {
                //long 
                ccUtil_1.default.changeParent(node_1, walls, -1);
                i--;
            }
        }
        var bg = this.loader.node.children[0].getChildByName("bg");
        // bg.active = false;
        bg.getComponent(mesh_sprite_1.default);
        ccUtil_1.default.setDisplay(bg.getComponent(mesh_sprite_1.default), "textures/tietu_" + UserInfo_1.UserInfo.theme);
        // }
        this.isUsedMagnet = false;
        if (PlayerInfo_1.PlayerInfo.isPlayingDaily && ((PlayerInfo_1.PlayerInfo.playingDailyLevel % 5) == 0)) {
            PlayerInfo_1.PlayerInfo.isPlayingSpecial = true;
            var data = csv.daily_level.get(PlayerInfo_1.PlayerInfo.playingDailyLevel);
            this.tip_str.active = true;
            this.tip_str.getComponentInChildren(cc.Label).string = "任务：" + data.task;
            vm.show("Prefabs/UI/UIMission", "任务：" + data.task);
        }
        else {
            this.tip_str.active = false;
        }
        if (!PlayerInfo_1.PlayerInfo.isPlayingDaily && PlayerInfo_1.PlayerInfo.playinglevel === 5 && PlayerInfo_1.PlayerInfo.level === 5) {
            vm.show("Prefabs/UI/UIBoxGuide", 0);
        }
        //判断是否是第一次进该章节
        // let c = PlayerInfo.getChapter(PlayerInfo.playinglevel);
        // let bNew = PlayerInfo.isChapterNew(c)
        // if (c > 1) {
        //     if (bNew) {
        //         vm.show("Prefabs/story/help", c)
        //         PlayerInfo.markChapterOld(c);
        //     }
        // }
        if ((PlayerInfo_1.PlayerInfo.level > 10 && !PlayerInfo_1.PlayerInfo.isPlayingDaily)) {
            PlayerInfo_1.PlayerInfo.isUnlock_Prop = true;
            this.node.getChildByName("ItemsGroup").active = true;
        }
    };
    Game.prototype.activeGame = function () {
        if (cc.director.getPhysicsManager().enabled == false)
            cc.director.getPhysicsManager().enabled = true;
    };
    Game.prototype.onLose = function () {
        umeng_1.umeng.failLevel("level" + (PlayerInfo_1.PlayerInfo.getCurrentPlayingLevel() + (PlayerInfo_1.PlayerInfo.isPlayingDaily ? 300 : 0)));
        if (this.isOver)
            return;
        this.isOver = true;
        if (mmgame_1.default.isCheatOpen("interstitial_on_level_end")) {
            Platform_1.default.showInterstitial();
        }
        if (UserInfo_1.UserInfo.lose_num >= csv.Config.Show_AD_Lose) {
            UserInfo_1.UserInfo.lose_num = 1;
            if (csv.Config.Show_AD_Lose_Skip) {
                Platform_1.default.showInterstitial(function (_) {
                    Device_1.default.playSfx("ohno");
                    vm.show("Prefabs/UI/UILose");
                }, this, function (_) {
                    Device_1.default.playSfx("ohno");
                    vm.show("Prefabs/UI/UILose");
                });
            }
            else {
                Platform_1.default.watch_video(function (_) {
                    Device_1.default.playSfx("ohno");
                    vm.show("Prefabs/UI/UILose");
                }, this, function (_) {
                    Device_1.default.playSfx("ohno");
                    vm.show("Prefabs/UI/UILose");
                });
            }
        }
        else {
            UserInfo_1.UserInfo.lose_num += 1;
            Device_1.default.playSfx("ohno");
            vm.show("Prefabs/UI/UILose");
        }
    };
    Game.prototype.click_pause = function () {
        // evt.emit('Game.pause');
        // cc.director.pause();
        vm.show("Prefabs/UI/UIPause");
    };
    Game.prototype.click_skip = function () {
        vm.show("Prefabs/UI/UISkip");
    };
    //刷新
    Game.prototype.click_return = function () {
        // if (UserInfo.return_num >= csv.Config.Show_AD_Return) {
        //     UserInfo.return_num = 1;
        //     if (csv.Config.Show_AD_Return_Skip) {
        //         Platform.showInterstitial(_ => {
        //             LoadingScene.goto("Game");
        //             evt.emitDelay(5, "Game.hintUser")
        //         }, this, _ => {
        //             LoadingScene.goto("Game");
        //             evt.emitDelay(5, "Game.hintUser")
        //         })
        //     }
        //     else {
        //         Platform.watch_video(_ => {
        //             LoadingScene.goto("Game");
        //             evt.emitDelay(5, "Game.hintUser")
        //         }, this, _ => {
        //             LoadingScene.goto("Game");
        //             evt.emitDelay(5, "Game.hintUser")
        //         })
        //     }
        // }
        // else {
        // UserInfo.return_num += 1;
        if (PlayerInfo_1.PlayerInfo.labour <= 0) {
            vm.show("Prefabs/UI/UIGetLabour", null, true);
            return;
        }
        PlayerInfo_1.PlayerInfo.labour--;
        PlayerInfo_1.PlayerInfo.save("labour");
        LoadingScene_1.default.goto("Game");
        // evt.emitDelay(5, "Game.hintUser")
        // }
    };
    Game.prototype.click_labour = function () {
        vm.show("Prefabs/UI/UIGetLabour", null, true);
    };
    Game.prototype.hideGuide = function () {
        // this.guide.active = false;
    };
    ///////////////////////////[state routine]////////////////////////////
    Game.prototype.onEnter_Normal = function () {
    };
    Game.prototype.onUpdate_Normal = function () {
        if (this.fsm.timeElapsed > 20) {
            //20秒后开启提示按钮
            //提示玩家 
            this.fsm.changeState(State.Hint);
        }
    };
    Game.prototype.onEnter_Hint = function () {
        event_1.evt.emit("Game.hintUser");
    };
    var Game_1;
    Game.instance = null;
    Game.debug = false;
    __decorate([
        property(cc.Node)
    ], Game.prototype, "guide", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "tili", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "xingxing", void 0);
    __decorate([
        property(cc.Sprite)
    ], Game.prototype, "bg", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "close_btn", void 0);
    __decorate([
        property(cc.Label)
    ], Game.prototype, "level_str", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "tip_str", void 0);
    __decorate([
        property(Switcher_1.default)
    ], Game.prototype, "star_switch", void 0);
    Game = Game_1 = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;

cc._RF.pop();