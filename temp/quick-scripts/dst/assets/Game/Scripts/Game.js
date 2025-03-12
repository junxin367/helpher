
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBaUQ7QUFFakQsNkNBQXdDO0FBQ3hDLHVEQUFzRDtBQUN0RCxzREFBaUQ7QUFDakQsdURBQWtEO0FBQ2xELCtEQUEwRDtBQUMxRCwyREFBc0Q7QUFFdEQsNEVBQXNFO0FBQ3RFLDZFQUE0RTtBQUM1RSwwRUFBcUU7QUFFckUsZ0RBQTJDO0FBRTNDLG1FQUE4RDtBQUM5RCxnRUFBK0Q7QUFFL0QsbUVBQThEO0FBQzlELGdFQUF3RDtBQUNsRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFLLEtBR0o7QUFIRCxXQUFLLEtBQUs7SUFDTixxQ0FBTSxDQUFBO0lBQ04saUNBQUksQ0FBQTtBQUNSLENBQUMsRUFISSxLQUFLLEtBQUwsS0FBSyxRQUdUO0FBR0Q7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFzZ0JDO1FBbmdCRyxXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixRQUFFLEdBQWMsSUFBSSxDQUFDO1FBR3JCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRTdCLFlBQU0sR0FBZ0IsSUFBSSxDQUFDO1FBRzNCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFlLElBQUksQ0FBQztRQUUxQixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBS2pCLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBb0g5Qixh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QUFDLGVBQWUsQ0FBQyxDQUFBO0lBQzdCLENBQUM7O0lBdGVNLGFBQVEsR0FBUyxJQUFJLENBQUM7SUFTdEIsVUFBSyxHQUFZLEtBQUssQ0FBQztJQWxDOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1Q0FDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NDQUNHO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvQ0FDQztJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ1E7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxrQkFBUSxDQUFDOzZDQUNVO0lBeEJaLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FzZ0J4QjtJQUFELFdBQUM7Q0F0Z0JELEFBc2dCQyxDQXRnQmlDLEVBQUUsQ0FBQyxTQUFTLEdBc2dCN0M7a0JBdGdCb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV2dCB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvY29yZS9ldmVudFwiO1xyXG5cclxuaW1wb3J0IExldmVsTG9hZGVyIGZyb20gXCIuL0xldmVsTG9hZGVyXCI7XHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9Db21tb24vQmFzZS9QbGF5ZXJJbmZvXCI7XHJcbmltcG9ydCBEZXZpY2UgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9taXNjL0RldmljZVwiO1xyXG5pbXBvcnQgY2NVdGlsIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdXRpbHMvY2NVdGlsXCI7XHJcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi9QbGF0Zm9ybVwiO1xyXG5pbXBvcnQgTG9hZGluZ1NjZW5lIGZyb20gXCIuL0NvbW1vbi9CYXNlL0xvYWRpbmdTY2VuZVwiO1xyXG5pbXBvcnQgS2V5VG9nZ2xlIGZyb20gXCIuL0tleVRvZ2dsZVwiO1xyXG5pbXBvcnQgTWVzaFNwcml0ZSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi9yZW5kZXIvbWVzaC1zcHJpdGVcIjtcclxuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi93ZWFrX25ldF9nYW1lL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBTdGF0SGVwbGVyIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL2FsZHNkay9TdGF0SGVscGVyXCI7XHJcblxyXG5pbXBvcnQgRlNNIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvY29yZS9GU01cIjtcclxuaW1wb3J0IHsgUHJlZmFiTG9hZGVyRGVsZWdhdGUgfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3VpL2NvbnRyb2xsZXIvUHJlZmFiTG9hZGVyXCI7XHJcbmltcG9ydCBTd2l0Y2hlciBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3VpL2NvbnRyb2xsZXIvU3dpdGNoZXJcIjtcclxuaW1wb3J0IHsgdW1lbmcgfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi9hbGRzZGsvdW1lbmdcIjtcclxuaW1wb3J0IHdlZ2FtZSBmcm9tIFwiLi9zZGsvd2VnYW1lXCI7XHJcbmltcG9ydCBtbWdhbWUgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vbW1jbG91ZC9tbWdhbWVcIjtcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3VpL1RvYXN0TWFuYWdlclwiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZW51bSBTdGF0ZSB7XHJcbiAgICBOb3JtYWwsXHJcbiAgICBIaW50LFxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IGltcGxlbWVudHMgUHJlZmFiTG9hZGVyRGVsZWdhdGUge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ3VpZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGlsaTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB4aW5neGluZzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGJnOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2xvc2VfYnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsZXZlbF9zdHI6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRpcF9zdHI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShTd2l0Y2hlcilcclxuICAgIHN0YXJfc3dpdGNoOiBTd2l0Y2hlciA9IG51bGw7XHJcblxyXG4gICAgbG9hZGVyOiBMZXZlbExvYWRlciA9IG51bGw7XHJcblxyXG4gICAgc3RhdGljIGluc3RhbmNlOiBHYW1lID0gbnVsbDtcclxuICAgIGlzT3ZlcjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgd2FsbGJnOiBNZXNoU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBzdGFyOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGZzbTogRlNNO1xyXG5cclxuICAgIHN0YXRpYyBkZWJ1ZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNVc2VkTWFnbmV0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIEdhbWUuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZEFjY3VtdWxhdG9yID0gdHJ1ZTtcclxuICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID1cclxuICAgICAgICAvLyAgICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9hYWJiQml0IHxcclxuICAgICAgICAvLyAgICAgLy8gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9wYWlyQml0IHxcclxuICAgICAgICAvLyAgICAgLy8gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9jZW50ZXJPZk1hc3NCaXQgfFxyXG4gICAgICAgIC8vICAgICBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX2pvaW50Qml0IHxcclxuICAgICAgICAvLyAgICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZSAtW107YC4vaGFwZUJpdFxyXG4gICAgICAgIC8vICAgICA7XHJcbiAgICAgICAgdGhpcy5mc20gPSB0aGlzLmFkZENvbXBvbmVudChGU00pO1xyXG4gICAgICAgIHRoaXMuZnNtLmluaXQodGhpcywgU3RhdGUpXHJcbiAgICAgICAgdGhpcy5mc20uZW50ZXJTdGF0ZShTdGF0ZS5Ob3JtYWwpO1xyXG5cclxuICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gbm9kZS5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBib2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLlN0YXRpYztcclxuICAgICAgICBpZiAoQ0NfREVCVUcpIHtcclxuICAgICAgICAgICAgLy8gYWRkIG1vdXNlIGpvaW50XHJcbiAgICAgICAgICAgIGxldCBqb2ludCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLk1vdXNlSm9pbnQpO1xyXG4gICAgICAgICAgICBqb2ludC5tb3VzZVJlZ2lvbiA9IHRoaXMubm9kZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG5cclxuICAgICAgICBldnQub24oXCJHYW1lLndpblwiLCB0aGlzLm9uV2luLCB0aGlzKTtcclxuICAgICAgICBldnQub24oXCJHYW1lLmxvc2VcIiwgdGhpcy5vbkxvc2UsIHRoaXMpXHJcbiAgICAgICAgZXZ0Lm9uKFwiR2FtZS5jYXRjaFwiLCB0aGlzLm9uQ2F0Y2hlZCwgdGhpcyk7XHJcbiAgICAgICAgZXZ0Lm9uKFwiR2FtZS5oZWxsb1wiLCB0aGlzLm9uU2F5SGVsbG8sIHRoaXMpO1xyXG4gICAgICAgIGV2dC5vbihcIkdhbWUua2V5TW92ZWRcIiwgdGhpcy5vbktleU1vdmVkLCB0aGlzKTtcclxuICAgICAgICBldnQub24oXCJHYW1lLmdldFRpbGlcIiwgdGhpcy5vbkdldFRpbGksIHRoaXMpO1xyXG4gICAgICAgIGV2dC5vbihcIkdhbWUuZ2V0c3RhclwiLCB0aGlzLm9uR2V0U3RhciwgdGhpcyk7XHJcbiAgICAgICAgZXZ0Lm9uKFwiUGxheWVySW5mby5zdGFyXCIsIHRoaXMub25DaGFuZ2VTdGFyLCB0aGlzKVxyXG4gICAgICAgIGV2dC5vbihcIlVJU2tpbi5jaGVja0xvY2tcIiwgdGhpcy5jaGVja19sb2NrU2tpbiwgdGhpcyk7XHJcbiAgICAgICAgZXZ0Lm9uKFwiTWFpbi5za2luXCIsIHRoaXMub25NYWluU2tpbiwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZGVyID0gdGhpcy5nZXRDb21wb25lbnRJbkNoaWxkcmVuKExldmVsTG9hZGVyKTtcclxuICAgICAgICB0aGlzLmxvYWRlci5kZWxlZ2F0ZSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5sb2FkZXIub25MZXZlbExvYWRlZC5hZGQodGhpcy5vbkxldmVsTG9hZGVkLCB0aGlzKTtcclxuICAgICAgICBpZiAoIUdhbWUuZGVidWcpIHtcclxuICAgICAgICAgICAgaWYgKFBsYXllckluZm8uZ3VpZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy/liqDovb3mlrDmiYvlvJXlr7zlhbNcclxuICAgICAgICAgICAgICAgIFBsYXllckluZm8ucGxheWluZ2xldmVsID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmxldmVsID0gMTtcclxuICAgICAgICAgICAgICAgIFBsYXllckluZm8uZ3VpZGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgUGxheWVySW5mby5zYXZlKFwiZ3VpZGVcIilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmxldmVsID0gUGxheWVySW5mby5nZXRDdXJyZW50UGxheWluZ0xldmVsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJnID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIik7XHJcbiAgICAgICAgYmcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQ2xpY2tCZywgdGhpcyk7XHJcblxyXG5cclxuICAgICAgICBQbGF0Zm9ybS5oaWRlQmFubmVyQWQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkUHJlZmFiKGx2SW5kZXg6IGFueSwgcGF0aDogYW55KSB7XHJcbiAgICAgICAgaWYgKFBsYXllckluZm8uaXNQbGF5aW5nRGFpbHkpIHtcclxuICAgICAgICAgICAgbGV0IGQgPSBjc3YuZGFpbHlfbGV2ZWwuZ2V0KGx2SW5kZXgpXHJcbiAgICAgICAgICAgIHJldHVybiBjY1V0aWwuZ2V0UmVzKHBhdGggKyBcIi9cIiArIGQubnVtYmVyLCBjYy5QcmVmYWIpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGQgPSBjc3YubGV2ZWwuZ2V0KGx2SW5kZXgpXHJcbiAgICAgICAgICAgIHJldHVybiBjY1V0aWwuZ2V0UmVzKHBhdGggKyBcIi9cIiArIGQubnVtYmVyLCBjYy5QcmVmYWIpLmNhdGNoKHYgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gYmFjayBcclxuICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2UoXCLmnKrmib7liLDor6XlhbPljaEs6K+35Y675ZWG5bqX6I635Y+W5a6M5pW054mI5pysIVwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZGluZ1NjZW5lLmdvdG8oXCJNYWluXCIpXHJcbiAgICAgICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2tCZyhlKSB7XHJcbiAgICAgICAgLy/ngrnlh7vog4zmma/liIfmjaLmlrnlkJFcclxuICAgICAgICBldnQuZW1pdCgnR2FtZS5jaGFuZ2VSb2xlRGlyJylcclxuICAgICAgICB0aGlzLmFjdGl2ZUdhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1haW5Ta2luKCkge1xyXG4gICAgICAgIExvYWRpbmdTY2VuZS5nb3RvKFwiU2tpblwiKTsvLywgVHdvVHlwZS5Ta2luXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25HZXRTdGFyKHBvcykge1xyXG4gICAgICAgIHRoaXMuc3RhciArPSAxO1xyXG4gICAgICAgIGNjVXRpbC5wbGF5Rmx5Q29pbih0aGlzLnhpbmd4aW5nLCB0aGlzLnhpbmd4aW5nLnBhcmVudFxyXG4gICAgICAgICAgICAsIGNjVXRpbC5nZXRXb3JsZFBvc2l0aW9uKHBvcylcclxuICAgICAgICAgICAgLCBjY1V0aWwuZ2V0V29ybGRQb3NpdGlvbih0aGlzLnN0YXJfc3dpdGNoLm5vZGUpXHJcbiAgICAgICAgICAgICwgeyBudW06IDEuMCB9KTtcclxuICAgICAgICBhd2FpdCBldnQuc2xlZXAoMC4zKTtcclxuICAgICAgICB0aGlzLnN0YXJfc3dpdGNoLmluZGV4ID0gTWF0aC5taW4odGhpcy5zdGFyLCAzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZVN0YXIoKSB7XHJcbiAgICAgICAgY3N2LlNraW4udmFsdWVzLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2LnVubG9ja1R5cGUgPT0gMiAmJiAhUGxheWVySW5mby5pc1NraW5VbmxvY2tlZCh2LmlkKSAmJiBQbGF5ZXJJbmZvLnN0YXIgPj0gdi51bmxvY2syKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBQbGF5ZXJJbmZvLnVubG9ja1NraW4odi5pZCk7XHJcbiAgICAgICAgICAgICAgICB2bS5zaG93KFwiUHJlZmFicy9VSS9VSVVubG9ja1NraW5cIiwgdi5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkdldFRpbGkod29ybGRwb3MsIG51bSkge1xyXG4gICAgICAgIGNjVXRpbC5wbGF5Rmx5KHRoaXMudGlsaSwgMS4wLCBudW0pXHJcblxyXG4gICAgICAgIC8vIGNjVXRpbC5wbGF5Rmx5Q29pbih0aGlzLnRpbGksIHRoaXMudGlsaS5wYXJlbnQsIHdvcmxkcG9zLCBjY1V0aWwuZ2V0V29ybGRQb3NpdGlvbih0aGlzLnRpbGkpLCB7IGR1cjogMS4wLCBpbnRlcnZhbDogMC4yLCBudW0gfSlcclxuICAgIH1cclxuXHJcbiAgICBsYXN0S2V5OiBLZXlUb2dnbGUgPSBudWxsXHJcbiAgICAvL+WQjOS4gOaKiumSpeWMmSDnmoTngrnlh7vmrKHmlbBcclxuICAgIHNhbWVLZXlDb3VudDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBvbktleU1vdmVkKGtleSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzT3ZlcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5sYXN0S2V5ID09IGtleSkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNhbWVLZXlDb3VudCsrO1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5zYW1lS2V5Q291bnQgPj0gNCkge1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gVG9hc3QubWFrZShcIueCueWHu+S7u+aEj+S9jee9ru+8jOaUueWPmOihjOi1sOaWueWQkSFcIilcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2FtZUtleUNvdW50ID0gMDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2FtZUtleUNvdW50ID0gMDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy5sYXN0S2V5ID0ga2V5O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICAvLyBsZXQgcmVhZHlOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicmVhZHlcIilcclxuICAgICAgICAvLyByZWFkeU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGV2dC5lbWl0KFwiR2FtZS5vblN0YXJ0ZWRcIiwgdGhpcylcclxuICAgICAgICB0aGlzLmlzT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIFBsYXllckluZm8ucmVzZXRMZXZlbCgpO1xyXG4gICAgICAgIHVtZW5nLnN0YXJ0TGV2ZWwoYGxldmVsJHtQbGF5ZXJJbmZvLmdldEN1cnJlbnRQbGF5aW5nTGV2ZWwoKSArIChQbGF5ZXJJbmZvLmlzUGxheWluZ0RhaWx5ID8gMzAwIDogMCl9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TYXlIZWxsbygpIHtcclxuICAgICAgICBEZXZpY2UucGxheVNmeChcImhlbGxvXCIpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uTG9hZEZpbmlzaGVkKGx2KSB7XHJcbiAgICAgICAgaWYgKGx2KSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLmxvYWRQcmVmYWIoXCJQcmVmYWJzL0xldmVscy9cIiArIGx2KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG5cclxuICAgICAgICBHYW1lLmluc3RhbmNlID0gbnVsbDtcclxuICAgICAgICBHYW1lLmRlYnVnID0gZmFsc2U7XHJcbiAgICAgICAgZXZ0Lm9mZih0aGlzKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZV9idG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHcgPSBjYy53aW5TaXplLndpZHRoO1xyXG4gICAgICAgIGxldCBoID0gY2Mud2luU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgaWYgKHcgLyBoID4gMC43KSB7XHJcbiAgICAgICAgICAgIC8vaXBhZCBvciBvdGhlciBwYWQgXHJcbiAgICAgICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcylcclxuICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrX2xvY2tTa2luKCkge1xyXG4gICAgICAgIFVzZXJJbmZvLmlzdW5sb2NrX21lbiA9IDA7XHJcbiAgICAgICAgVXNlckluZm8uaXN1bmxvY2tfZ2lybCA9IDA7XHJcbiAgICAgICAgVXNlckluZm8uaXN1bmxvY2tfdGhlbWUgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDU7IGkrKykge1xyXG4gICAgICAgICAgICBVc2VySW5mb1tgaXN1bmxvY2tfZ2lybCR7aX1gXSA9IDA7XHJcbiAgICAgICAgICAgIFVzZXJJbmZvW2Bpc3VubG9ja19tZW4ke2l9YF0gPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gY3N2LlNraW4udmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gY3N2LlNraW4uZ2V0KGkpO1xyXG4gICAgICAgICAgICBpZiAoKChQbGF5ZXJJbmZvLmxldmVsID49IGRhdGEudW5sb2NrMSAmJiBkYXRhLnVubG9ja1R5cGUgPT0gMSkgfHwgKGRhdGEudW5sb2NrVHlwZSA9PSAyICYmIFBsYXllckluZm8uc3RhciA+PSBkYXRhLnVubG9jazIpKVxyXG4gICAgICAgICAgICAgICAgJiYgIVBsYXllckluZm8uaXNTa2luVW5sb2NrZWQoZGF0YS5pZCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLmlzdW5sb2NrX2dpcmwgPSAxO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnR5cGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLmlzdW5sb2NrX21lbiA9IDE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudHlwZSA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uaXN1bmxvY2tfdGhlbWUgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuc3ViVHlwZSA8IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS50eXBlID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm9bYGlzdW5sb2NrX2dpcmwke2RhdGEuc3ViVHlwZSArIDF9YF0gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50eXBlID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm9bYGlzdW5sb2NrX21lbiR7ZGF0YS5zdWJUeXBlICsgMX1gXSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uV2luKCkge1xyXG4gICAgICAgIHVtZW5nLmZpbmlzaExldmVsKGBsZXZlbCR7UGxheWVySW5mby5nZXRDdXJyZW50UGxheWluZ0xldmVsKCkgKyAoUGxheWVySW5mby5pc1BsYXlpbmdEYWlseSA/IDMwMCA6IDApfWApO1xyXG4gICAgICAgIC8v5ri45oiP6IOc5YipXHJcbiAgICAgICAgaWYgKHRoaXMuaXNPdmVyKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgRGV2aWNlLnBsYXlTZngoXCJodWdcIilcclxuICAgICAgICB0aGlzLmlzT3ZlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5vcGVuV2luLCAwLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5XaW4oKSB7XHJcbiAgICAgICAgaWYgKG1tZ2FtZS5pc0NoZWF0T3BlbihcImludGVyc3RpdGlhbF9vbl9sZXZlbF9lbmRcIikpIHtcclxuICAgICAgICAgICAgUGxhdGZvcm0uc2hvd0ludGVyc3RpdGlhbCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLnBsYXlpbmdsZXZlbCA9PSBQbGF5ZXJJbmZvLmxldmVsICYmIFBsYXllckluZm8ucGxheWluZ2xldmVsID09IDEwKSB7XHJcbiAgICAgICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJRnJlZVByb3BcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlXaW5cIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlXaW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUJnKCkge1xyXG4gICAgICAgIGxldCBudW0gPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDQpO1xyXG5cclxuICAgICAgICAvLyBpZiAoUGxheWVySW5mby5pc1BsYXlpbmdEYWlseSkge1xyXG4gICAgICAgIGxldCBjb3VudCA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMykgKyA2O1xyXG4gICAgICAgIGNjVXRpbC5zZXREaXNwbGF5KHRoaXMuYmcsIFwiSW1nL2xldmVsL3RoZW1lL2JnX1wiICsgVXNlckluZm8udGhlbWUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ2NoYW5nZSBiZyAnICsgbnVtKVxyXG4gICAgICAgIC8vICAgICBjY1V0aWwuc2V0RGlzcGxheSh0aGlzLmJnLCBcInVpL2JnL2JnX1wiICsgbnVtKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DYXRjaGVkKHBhcmFtKSB7XHJcbiAgICAgICAgZXZ0LmVtaXQoXCJHYW1lLmxvc2VcIiwgcGFyYW0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTGV2ZWxMb2FkZWQobm9kZTogY2MuTm9kZSwgbHZJbmRleCkge1xyXG4gICAgICAgIC8vIHR0c2RrLnN0YXJ0X3JlY29yZGVyKCk7XHJcbiAgICAgICAgUGxheWVySW5mby5pc1BsYXlpbmdTcGVjaWFsID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHdhbGxub2RlID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcbiAgICAgICAgaWYgKHdhbGxub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2FsbGJnID0gd2FsbG5vZGUuZ2V0Q29tcG9uZW50KE1lc2hTcHJpdGUpO1xyXG4gICAgICAgICAgICB0aGlzLndhbGxiZy5kaWZmdXNlQ29sb3IgPSBjYy5jb2xvcig4MywgMTMwLCAxNTEsIDI1NSk7XHJcbiAgICAgICAgICAgIGNjVXRpbC5nZXRSZXMoXCJQcmVmYWJzL3NoYWRvd1wiLCBjYy5QcmVmYWIpLnRoZW4odiA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbiA9IGNjLmluc3RhbnRpYXRlKHYpO1xyXG4gICAgICAgICAgICAgICAgbi5wYXJlbnQgPSB0aGlzLndhbGxiZy5ub2RlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyB0aGlzLndhbGxiZy5jb2xvciA9IGNjLmNvbG9yKCkuZnJvbUhFWChcIiM1RjgzOTRcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5pc092ZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNoYW5nZUJnKCk7XHJcbiAgICAgICAgdGhpcy5sZXZlbF9zdHIuc3RyaW5nID0gKFBsYXllckluZm8uaXNQbGF5aW5nRGFpbHkgPyBcIuaMkeaImC1cIiA6IFwi5YWz5Y2hLVwiKSArIFBsYXllckluZm8uZ2V0Q3VycmVudFBsYXlpbmdMZXZlbCgpO1xyXG5cclxuICAgICAgICBpZiAoVXNlckluZm8uaXNOZXcpXHJcbiAgICAgICAgICAgIFN0YXRIZXBsZXIuc2VuZFBhdGgoXCLmlrDnlKjmiLflhbPljaHlvIDlp4vkurrmlbBcIiwgXCLlhbPljaFcIiwgUGxheWVySW5mby5wbGF5aW5nbGV2ZWwpO1xyXG4gICAgICAgIFN0YXRIZXBsZXIuc2VuZFBhdGgoXCLmiYDmnInnlKjmiLflhbPljaHlvIDlp4vkurrmlbBcIiwgXCLlhbPljaFcIiwgUGxheWVySW5mby5wbGF5aW5nbGV2ZWwpO1xyXG5cclxuICAgICAgICBldnQuZW1pdChcIkdhbWUub25MZXZlbExvYWRlZFwiLCBsdkluZGV4KVxyXG4gICAgICAgIFBsYXllckluZm8ub25TdGFydExldmVsKCk7XHJcblxyXG4gICAgICAgIC8v5paw5omL5byV5a+8IOWFs+WNoVxyXG4gICAgICAgIC8vIGlmIChsdkluZGV4ICE9IDEgfHwgKGx2SW5kZXggPT09IDggJiYgUGxheWVySW5mby5sZXZlbCAhPSA4KSkge1xyXG4gICAgICAgIC8vICAgICBsZXQgcmVhZHkgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyZWFkeVwiKVxyXG4gICAgICAgIC8vICAgICBpZiAocmVhZHkpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJlYWR5LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgICAgICByZWFkeS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5zdGFydEdhbWUsIHRoaXMpXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIERldmljZS5wbGF5QkdNKFwiQkdNXCIgKyBVc2VySW5mby50aGVtZSk7XHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLmlzTmV3KSB7XHJcbiAgICAgICAgICAgIFBsYXRmb3JtLnNlbmRVbWVuZ0V2dChcImxldmVsX3N0YXJ0X25ld1wiLCBQbGF5ZXJJbmZvLnBsYXlpbmdsZXZlbC50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIFBsYXRmb3JtLnNlbmRVbWVuZ0V2dChcImxldmVsX3N0YXJ0X2FsbFwiLCBQbGF5ZXJJbmZvLnBsYXlpbmdsZXZlbC50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhciA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGFyX3N3aXRjaC5pbmRleCA9IDA7XHJcblxyXG4gICAgICAgIGxldCB3YWxscyA9IHRoaXMubG9hZGVyLm5vZGUuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJ3YWxsc1wiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdhbGxzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgc3ByID0gd2FsbHMuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgIHNwci50eXBlID0gY2MuU3ByaXRlLlR5cGUuVElMRUQ7XHJcbiAgICAgICAgICAgIGlmIChzcHIubm9kZS53aWR0aCA8IHNwci5ub2RlLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgc3ByLm5vZGUud2lkdGggPSAzNVxyXG4gICAgICAgICAgICAgICAgY2NVdGlsLnNldERpc3BsYXkoc3ByLCBcIkltZy9sZXZlbC90aGVtZS96aHVhbl9cIiArIFVzZXJJbmZvLnRoZW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNwci5ub2RlLmhlaWdodCA9IDQwXHJcbiAgICAgICAgICAgICAgICBjY1V0aWwuc2V0RGlzcGxheShzcHIsIFwiSW1nL2xldmVsL3RoZW1lL3podWFuX3ZfXCIgKyBVc2VySW5mby50aGVtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjYW9zID0gdGhpcy5sb2FkZXIubm9kZS5jaGlsZHJlblswXS5nZXRDaGlsZEJ5TmFtZShcImNhb1wiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhb3MuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2Fvcy5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgbGV0IHNwciA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICAgICAgY2NVdGlsLnNldERpc3BsYXkoc3ByLCBcIkltZy9sZXZlbC90aGVtZS9qaW5zaHVjYW9fXCIgKyBVc2VySW5mby50aGVtZSk7XHJcbiAgICAgICAgICAgIGlmIChub2RlLm5hbWUuaW5kZXhPZihcInNob3J0XCIpID49IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLmFuZ2xlID09IDkwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5oZWlnaHQgPSAzMDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5oZWlnaHQgPSA0MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vbG9uZyBcclxuICAgICAgICAgICAgICAgIGNjVXRpbC5jaGFuZ2VQYXJlbnQobm9kZSwgd2FsbHMsIC0xKTtcclxuICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYmcgPSB0aGlzLmxvYWRlci5ub2RlLmNoaWxkcmVuWzBdLmdldENoaWxkQnlOYW1lKFwiYmdcIik7XHJcbiAgICAgICAgLy8gYmcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgYmcuZ2V0Q29tcG9uZW50KE1lc2hTcHJpdGUpO1xyXG4gICAgICAgIGNjVXRpbC5zZXREaXNwbGF5KGJnLmdldENvbXBvbmVudChNZXNoU3ByaXRlKSwgXCJ0ZXh0dXJlcy90aWV0dV9cIiArIFVzZXJJbmZvLnRoZW1lKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5pc1VzZWRNYWduZXQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoUGxheWVySW5mby5pc1BsYXlpbmdEYWlseSAmJiAoKFBsYXllckluZm8ucGxheWluZ0RhaWx5TGV2ZWwgJSA1KSA9PSAwKSkge1xyXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLmlzUGxheWluZ1NwZWNpYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IGNzdi5kYWlseV9sZXZlbC5nZXQoUGxheWVySW5mby5wbGF5aW5nRGFpbHlMZXZlbCk7XHJcbiAgICAgICAgICAgIHRoaXMudGlwX3N0ci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRpcF9zdHIuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gXCLku7vliqHvvJpcIiArIGRhdGEudGFzaztcclxuICAgICAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlNaXNzaW9uXCIsIFwi5Lu75Yqh77yaXCIgKyBkYXRhLnRhc2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGlwX3N0ci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghUGxheWVySW5mby5pc1BsYXlpbmdEYWlseSAmJiBQbGF5ZXJJbmZvLnBsYXlpbmdsZXZlbCA9PT0gNSAmJiBQbGF5ZXJJbmZvLmxldmVsID09PSA1KSB7XHJcbiAgICAgICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJQm94R3VpZGVcIiwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+WIpOaWreaYr+WQpuaYr+esrOS4gOasoei/m+ivpeeroOiKglxyXG4gICAgICAgIC8vIGxldCBjID0gUGxheWVySW5mby5nZXRDaGFwdGVyKFBsYXllckluZm8ucGxheWluZ2xldmVsKTtcclxuICAgICAgICAvLyBsZXQgYk5ldyA9IFBsYXllckluZm8uaXNDaGFwdGVyTmV3KGMpXHJcbiAgICAgICAgLy8gaWYgKGMgPiAxKSB7XHJcbiAgICAgICAgLy8gICAgIGlmIChiTmV3KSB7XHJcbiAgICAgICAgLy8gICAgICAgICB2bS5zaG93KFwiUHJlZmFicy9zdG9yeS9oZWxwXCIsIGMpXHJcbiAgICAgICAgLy8gICAgICAgICBQbGF5ZXJJbmZvLm1hcmtDaGFwdGVyT2xkKGMpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmICgoUGxheWVySW5mby5sZXZlbCA+IDEwICYmICFQbGF5ZXJJbmZvLmlzUGxheWluZ0RhaWx5KSkge1xyXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLmlzVW5sb2NrX1Byb3AgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJJdGVtc0dyb3VwXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2ZUdhbWUoKSB7XHJcbiAgICAgICAgaWYgKGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9PSBmYWxzZSlcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvc2UoKSB7XHJcbiAgICAgICAgdW1lbmcuZmFpbExldmVsKGBsZXZlbCR7UGxheWVySW5mby5nZXRDdXJyZW50UGxheWluZ0xldmVsKCkgKyAoUGxheWVySW5mby5pc1BsYXlpbmdEYWlseSA/IDMwMCA6IDApfWApO1xyXG4gICAgICAgIGlmICh0aGlzLmlzT3ZlcilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNPdmVyID0gdHJ1ZTtcclxuICAgICAgICBpZiAobW1nYW1lLmlzQ2hlYXRPcGVuKFwiaW50ZXJzdGl0aWFsX29uX2xldmVsX2VuZFwiKSkge1xyXG4gICAgICAgICAgICBQbGF0Zm9ybS5zaG93SW50ZXJzdGl0aWFsKClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLmxvc2VfbnVtID49IGNzdi5Db25maWcuU2hvd19BRF9Mb3NlKSB7XHJcbiAgICAgICAgICAgIFVzZXJJbmZvLmxvc2VfbnVtID0gMTtcclxuICAgICAgICAgICAgaWYgKGNzdi5Db25maWcuU2hvd19BRF9Mb3NlX1NraXApIHtcclxuICAgICAgICAgICAgICAgIFBsYXRmb3JtLnNob3dJbnRlcnN0aXRpYWwoXyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRGV2aWNlLnBsYXlTZngoXCJvaG5vXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlMb3NlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgdGhpcywgXyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRGV2aWNlLnBsYXlTZngoXCJvaG5vXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlMb3NlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFBsYXRmb3JtLndhdGNoX3ZpZGVvKF8gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIERldmljZS5wbGF5U2Z4KFwib2hub1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJTG9zZVwiKTtcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMsIF8gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIERldmljZS5wbGF5U2Z4KFwib2hub1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJTG9zZVwiKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIFVzZXJJbmZvLmxvc2VfbnVtICs9IDE7XHJcbiAgICAgICAgICAgIERldmljZS5wbGF5U2Z4KFwib2hub1wiKVxyXG4gICAgICAgICAgICB2bS5zaG93KFwiUHJlZmFicy9VSS9VSUxvc2VcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbGlja19wYXVzZSgpIHtcclxuICAgICAgICAvLyBldnQuZW1pdCgnR2FtZS5wYXVzZScpO1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLnBhdXNlKCk7XHJcbiAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlQYXVzZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGlja19za2lwKCkge1xyXG5cclxuICAgICAgICB2bS5zaG93KFwiUHJlZmFicy9VSS9VSVNraXBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liLfmlrBcclxuICAgIGNsaWNrX3JldHVybigpIHtcclxuICAgICAgICAvLyBpZiAoVXNlckluZm8ucmV0dXJuX251bSA+PSBjc3YuQ29uZmlnLlNob3dfQURfUmV0dXJuKSB7XHJcbiAgICAgICAgLy8gICAgIFVzZXJJbmZvLnJldHVybl9udW0gPSAxO1xyXG4gICAgICAgIC8vICAgICBpZiAoY3N2LkNvbmZpZy5TaG93X0FEX1JldHVybl9Ta2lwKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBQbGF0Zm9ybS5zaG93SW50ZXJzdGl0aWFsKF8gPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIExvYWRpbmdTY2VuZS5nb3RvKFwiR2FtZVwiKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBldnQuZW1pdERlbGF5KDUsIFwiR2FtZS5oaW50VXNlclwiKVxyXG4gICAgICAgIC8vICAgICAgICAgfSwgdGhpcywgXyA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgTG9hZGluZ1NjZW5lLmdvdG8oXCJHYW1lXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGV2dC5lbWl0RGVsYXkoNSwgXCJHYW1lLmhpbnRVc2VyXCIpXHJcbiAgICAgICAgLy8gICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgUGxhdGZvcm0ud2F0Y2hfdmlkZW8oXyA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgTG9hZGluZ1NjZW5lLmdvdG8oXCJHYW1lXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGV2dC5lbWl0RGVsYXkoNSwgXCJHYW1lLmhpbnRVc2VyXCIpXHJcbiAgICAgICAgLy8gICAgICAgICB9LCB0aGlzLCBfID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBMb2FkaW5nU2NlbmUuZ290byhcIkdhbWVcIik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZXZ0LmVtaXREZWxheSg1LCBcIkdhbWUuaGludFVzZXJcIilcclxuICAgICAgICAvLyAgICAgICAgIH0pXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gVXNlckluZm8ucmV0dXJuX251bSArPSAxO1xyXG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLmxhYm91ciA8PSAwKSB7XHJcbiAgICAgICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJR2V0TGFib3VyXCIsIG51bGwsIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFBsYXllckluZm8ubGFib3VyLS07XHJcbiAgICAgICAgUGxheWVySW5mby5zYXZlKFwibGFib3VyXCIpXHJcbiAgICAgICAgTG9hZGluZ1NjZW5lLmdvdG8oXCJHYW1lXCIpO1xyXG4gICAgICAgIC8vIGV2dC5lbWl0RGVsYXkoNSwgXCJHYW1lLmhpbnRVc2VyXCIpXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbGlja19sYWJvdXIoKSB7XHJcblxyXG4gICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJR2V0TGFib3VyXCIsIG51bGwsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVHdWlkZSgpIHtcclxuICAgICAgICAvLyB0aGlzLmd1aWRlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1tzdGF0ZSByb3V0aW5lXS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIG9uRW50ZXJfTm9ybWFsKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZV9Ob3JtYWwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZnNtLnRpbWVFbGFwc2VkID4gMjApIHtcclxuICAgICAgICAgICAgLy8yMOenkuWQjuW8gOWQr+aPkOekuuaMiemSrlxyXG4gICAgICAgICAgICAvL+aPkOekuueOqeWutiBcclxuICAgICAgICAgICAgdGhpcy5mc20uY2hhbmdlU3RhdGUoU3RhdGUuSGludCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW50ZXJfSGludCgpIHtcclxuICAgICAgICBldnQuZW1pdChcIkdhbWUuaGludFVzZXJcIilcclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG4iXX0=