import { evt } from "../../framework/core/event";

import LevelLoader from "./LevelLoader";
import { PlayerInfo } from "./Common/Base/PlayerInfo";
import Device from "../../framework/misc/Device";
import ccUtil from "../../framework/utils/ccUtil";
import Platform from "../../framework/extension/Platform";
import LoadingScene from "./Common/Base/LoadingScene";
import KeyToggle from "./KeyToggle";
import MeshSprite from "../../framework/extension/render/mesh-sprite";
import { UserInfo } from "../../framework/extension/weak_net_game/UserInfo";
import StatHepler from "../../framework/extension/aldsdk/StatHelper";

import FSM from "../../framework/core/FSM";
import { PrefabLoaderDelegate } from "../../framework/ui/controller/PrefabLoader";
import Switcher from "../../framework/ui/controller/Switcher";
import { umeng } from "../../framework/extension/aldsdk/umeng";
import wegame from "./sdk/wegame";
import mmgame from "../../framework/extension/mmcloud/mmgame";
import { Toast } from "../../framework/ui/ToastManager";
const { ccclass, property } = cc._decorator;

enum State {
    Normal,
    Hint,
}

@ccclass
export default class Game extends cc.Component implements PrefabLoaderDelegate {

    @property(cc.Node)
    guide: cc.Node = null;

    @property(cc.Node)
    tili: cc.Node = null;

    @property(cc.Node)
    xingxing: cc.Node = null;

    @property(cc.Sprite)
    bg: cc.Sprite = null;

    @property(cc.Node)
    close_btn: cc.Node = null;

    @property(cc.Label)
    level_str: cc.Label = null;

    @property(cc.Node)
    tip_str: cc.Node = null;

    @property(Switcher)
    star_switch: Switcher = null;

    loader: LevelLoader = null;

    static instance: Game = null;
    isOver: boolean = true;

    wallbg: MeshSprite = null;

    star: number = 0;

    fsm: FSM;

    static debug: boolean = false;
    isUsedMagnet: boolean = false;

    onLoad() {
        Game.instance = this;
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
        this.fsm = this.addComponent(FSM);
        this.fsm.init(this, State)
        this.fsm.enterState(State.Normal);

        let node = new cc.Node();

        let body = node.addComponent(cc.RigidBody);
        body.type = cc.RigidBodyType.Static;
        if (CC_DEBUG) {
            // add mouse joint
            let joint = node.addComponent(cc.MouseJoint);
            joint.mouseRegion = this.node;
        }

        node.parent = this.node;

        evt.on("Game.win", this.onWin, this);
        evt.on("Game.lose", this.onLose, this)
        evt.on("Game.catch", this.onCatched, this);
        evt.on("Game.hello", this.onSayHello, this);
        evt.on("Game.keyMoved", this.onKeyMoved, this);
        evt.on("Game.getTili", this.onGetTili, this);
        evt.on("Game.getstar", this.onGetStar, this);
        evt.on("PlayerInfo.star", this.onChangeStar, this)
        evt.on("UISkin.checkLock", this.check_lockSkin, this);
        evt.on("Main.skin", this.onMainSkin, this);

        this.loader = this.getComponentInChildren(LevelLoader);
        this.loader.delegate = this;
        this.loader.onLevelLoaded.add(this.onLevelLoaded, this);
        if (!Game.debug) {
            if (PlayerInfo.guide == 0) {
                //加载新手引导关
                PlayerInfo.playinglevel = 1;
                this.loader.level = 1;
                PlayerInfo.guide = 1;
                PlayerInfo.save("guide")
            } else {
                this.loader.level = PlayerInfo.getCurrentPlayingLevel();
            }
        }
        let bg = this.node.getChildByName("bg");
        bg.on(cc.Node.EventType.TOUCH_END, this.onClickBg, this);


        Platform.hideBannerAd();

    }

    onLoadPrefab(lvIndex: any, path: any) {
        if (PlayerInfo.isPlayingDaily) {
            let d = csv.daily_level.get(lvIndex)
            return ccUtil.getRes(path + "/" + d.number, cc.Prefab)
        } else {
            let d = csv.level.get(lvIndex)
            return ccUtil.getRes(path + "/" + d.number, cc.Prefab).catch(v => {
                // back 
                Toast.make("未找到该关卡,请去商店获取完整版本!")
                this.scheduleOnce(v => {
                    LoadingScene.goto("Main")
                }, 2)
            })
        }


    }

    onClickBg(e) {
        //点击背景切换方向
        evt.emit('Game.changeRoleDir')
        this.activeGame();
    }

    onMainSkin() {
        LoadingScene.goto("Skin");//, TwoType.Skin
    }

    async onGetStar(pos) {
        this.star += 1;
        ccUtil.playFlyCoin(this.xingxing, this.xingxing.parent
            , ccUtil.getWorldPosition(pos)
            , ccUtil.getWorldPosition(this.star_switch.node)
            , { num: 1.0 });
        await evt.sleep(0.3);
        this.star_switch.index = Math.min(this.star, 3);
    }

    onChangeStar() {
        csv.Skin.values.forEach(v => {
            if (v.unlockType == 2 && !PlayerInfo.isSkinUnlocked(v.id) && PlayerInfo.star >= v.unlock2) {
                // PlayerInfo.unlockSkin(v.id);
                vm.show("Prefabs/UI/UIUnlockSkin", v.id);
            }
        });
    }

    onGetTili(worldpos, num) {
        ccUtil.playFly(this.tili, 1.0, num)

        // ccUtil.playFlyCoin(this.tili, this.tili.parent, worldpos, ccUtil.getWorldPosition(this.tili), { dur: 1.0, interval: 0.2, num })
    }

    lastKey: KeyToggle = null
    //同一把钥匙 的点击次数
    sameKeyCount: number = 0;

    onKeyMoved(key) {
        if (this.isOver) return;

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
    }

    startGame() {
        // let readyNode = this.node.getChildByName("ready")
        // readyNode.active = false;

        evt.emit("Game.onStarted", this)
        this.isOver = false;
        PlayerInfo.resetLevel();
        umeng.startLevel(`level${PlayerInfo.getCurrentPlayingLevel() + (PlayerInfo.isPlayingDaily ? 300 : 0)}`);
    }

    onSayHello() {
        Device.playSfx("hello")
    }


    onLoadFinished(lv) {
        if (lv) {
            this.loader.loadPrefab("Prefabs/Levels/" + lv)
        }
    }


    onDestroy() {

        Game.instance = null;
        Game.debug = false;
        evt.off(this);
        cc.audioEngine.stopAll();
    }

    start() {
        this.close_btn.active = false;
        let w = cc.winSize.width;
        let h = cc.winSize.height;
        if (w / h > 0.7) {
            //ipad or other pad 
            let canvas = this.node.getComponent(cc.Canvas)
            canvas.fitHeight = true;
            canvas.fitWidth = false;
        }


    }

    check_lockSkin() {
        UserInfo.isunlock_men = 0;
        UserInfo.isunlock_girl = 0;
        UserInfo.isunlock_theme = 0;
        for (let i = 1; i <= 5; i++) {
            UserInfo[`isunlock_girl${i}`] = 0;
            UserInfo[`isunlock_men${i}`] = 0;
        }

        for (let i = 1; i <= csv.Skin.values.length; i++) {
            let data = csv.Skin.get(i);
            if (((PlayerInfo.level >= data.unlock1 && data.unlockType == 1) || (data.unlockType == 2 && PlayerInfo.star >= data.unlock2))
                && !PlayerInfo.isSkinUnlocked(data.id)) {
                if (data.type == 1) {
                    UserInfo.isunlock_girl = 1;
                } else if (data.type == 2) {
                    UserInfo.isunlock_men = 1;
                } else if (data.type == 3) {
                    UserInfo.isunlock_theme = 1;
                }
                if (data.subType < 5) {
                    if (data.type == 1) {
                        UserInfo[`isunlock_girl${data.subType + 1}`] = 1;
                    } else if (data.type == 2) {
                        UserInfo[`isunlock_men${data.subType + 1}`] = 1;
                    }
                }
            }
        }
    }

    onWin() {
        umeng.finishLevel(`level${PlayerInfo.getCurrentPlayingLevel() + (PlayerInfo.isPlayingDaily ? 300 : 0)}`);
        //游戏胜利
        if (this.isOver)
            return;
        Device.playSfx("hug")
        this.isOver = true;
        this.scheduleOnce(this.openWin, 0.5);
    }

    openWin() {
        if (mmgame.isCheatOpen("interstitial_on_level_end")) {
            Platform.showInterstitial()
        }
        if (PlayerInfo.playinglevel == PlayerInfo.level && PlayerInfo.playinglevel == 10) {
            vm.show("Prefabs/UI/UIFreeProp", () => {
                vm.show("Prefabs/UI/UIWin");
            })
        } else {
            vm.show("Prefabs/UI/UIWin");
        }
    }

    changeBg() {
        let num = Math.ceil(Math.random() * 4);

        // if (PlayerInfo.isPlayingDaily) {
        let count = Math.ceil(Math.random() * 3) + 6;
        ccUtil.setDisplay(this.bg, "Img/level/theme/bg_" + UserInfo.theme);
        // }
        // else {
        //     console.log('change bg ' + num)
        //     ccUtil.setDisplay(this.bg, "ui/bg/bg_" + num);
        // }
    }

    onCatched(param) {
        evt.emit("Game.lose", param);
    }

    onLevelLoaded(node: cc.Node, lvIndex) {
        // ttsdk.start_recorder();
        PlayerInfo.isPlayingSpecial = false;
        let wallnode = node.getChildByName("bg")
        if (wallnode) {
            this.wallbg = wallnode.getComponent(MeshSprite);
            this.wallbg.diffuseColor = cc.color(83, 130, 151, 255);
            ccUtil.getRes("Prefabs/shadow", cc.Prefab).then(v => {
                let n = cc.instantiate(v);
                n.parent = this.wallbg.node;
            })
            // this.wallbg.color = cc.color().fromHEX("#5F8394")
        }
        // this.isOver = false;
        this.changeBg();
        this.level_str.string = (PlayerInfo.isPlayingDaily ? "挑战-" : "关卡-") + PlayerInfo.getCurrentPlayingLevel();

        if (UserInfo.isNew)
            StatHepler.sendPath("新用户关卡开始人数", "关卡", PlayerInfo.playinglevel);
        StatHepler.sendPath("所有用户关卡开始人数", "关卡", PlayerInfo.playinglevel);

        evt.emit("Game.onLevelLoaded", lvIndex)
        PlayerInfo.onStartLevel();

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
        Device.playBGM("BGM" + UserInfo.theme);
        if (UserInfo.isNew) {
            Platform.sendUmengEvt("level_start_new", PlayerInfo.playinglevel.toString());
        }
        else {
            Platform.sendUmengEvt("level_start_all", PlayerInfo.playinglevel.toString());

        }
        this.star = 0;
        this.star_switch.index = 0;

        let walls = this.loader.node.children[0].getChildByName("walls");
        for (let i = 0; i < walls.childrenCount; i++) {
            let spr = walls.children[i].getComponent(cc.Sprite);
            spr.type = cc.Sprite.Type.TILED;
            if (spr.node.width < spr.node.height) {
                spr.node.width = 35
                ccUtil.setDisplay(spr, "Img/level/theme/zhuan_" + UserInfo.theme);
            }
            else {
                spr.node.height = 40
                ccUtil.setDisplay(spr, "Img/level/theme/zhuan_v_" + UserInfo.theme);
            }
        }

        let caos = this.loader.node.children[0].getChildByName("cao");
        for (let i = 0; i < caos.childrenCount; i++) {
            let node = caos.children[i];
            let spr = node.getComponent(cc.Sprite)
            ccUtil.setDisplay(spr, "Img/level/theme/jinshucao_" + UserInfo.theme);
            if (node.name.indexOf("short") >= 0) {
                if (node.angle == 90) {
                    node.height = 30;
                } else {
                    node.height = 40;
                }
            } else {
                //long 
                ccUtil.changeParent(node, walls, -1);
                i--;
            }
        }
        let bg = this.loader.node.children[0].getChildByName("bg");
        // bg.active = false;
        bg.getComponent(MeshSprite);
        ccUtil.setDisplay(bg.getComponent(MeshSprite), "textures/tietu_" + UserInfo.theme);
        // }
        this.isUsedMagnet = false;
        if (PlayerInfo.isPlayingDaily && ((PlayerInfo.playingDailyLevel % 5) == 0)) {
            PlayerInfo.isPlayingSpecial = true;
            let data = csv.daily_level.get(PlayerInfo.playingDailyLevel);
            this.tip_str.active = true;
            this.tip_str.getComponentInChildren(cc.Label).string = "任务：" + data.task;
            vm.show("Prefabs/UI/UIMission", "任务：" + data.task);
        } else {
            this.tip_str.active = false;
        }

        if (!PlayerInfo.isPlayingDaily && PlayerInfo.playinglevel === 5 && PlayerInfo.level === 5) {
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
        if ((PlayerInfo.level > 10 && !PlayerInfo.isPlayingDaily)) {
            PlayerInfo.isUnlock_Prop = true;
            this.node.getChildByName("ItemsGroup").active = true;
        }
    }

    activeGame() {
        if (cc.director.getPhysicsManager().enabled == false)
            cc.director.getPhysicsManager().enabled = true;
    }

    onLose() {
        umeng.failLevel(`level${PlayerInfo.getCurrentPlayingLevel() + (PlayerInfo.isPlayingDaily ? 300 : 0)}`);
        if (this.isOver)
            return;
        this.isOver = true;
        if (mmgame.isCheatOpen("interstitial_on_level_end")) {
            Platform.showInterstitial()
        }
        if (UserInfo.lose_num >= csv.Config.Show_AD_Lose) {
            UserInfo.lose_num = 1;
            if (csv.Config.Show_AD_Lose_Skip) {
                Platform.showInterstitial(_ => {
                    Device.playSfx("ohno")
                    vm.show("Prefabs/UI/UILose");
                }, this, _ => {
                    Device.playSfx("ohno")
                    vm.show("Prefabs/UI/UILose");
                })
            }
            else {
                Platform.watch_video(_ => {
                    Device.playSfx("ohno")
                    vm.show("Prefabs/UI/UILose");
                }, this, _ => {
                    Device.playSfx("ohno")
                    vm.show("Prefabs/UI/UILose");
                })
            }
        }
        else {
            UserInfo.lose_num += 1;
            Device.playSfx("ohno")
            vm.show("Prefabs/UI/UILose");
        }

    }

    click_pause() {
        // evt.emit('Game.pause');
        // cc.director.pause();
        vm.show("Prefabs/UI/UIPause");
    }

    click_skip() {

        vm.show("Prefabs/UI/UISkip");
    }

    //刷新
    click_return() {
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
        if (PlayerInfo.labour <= 0) {
            vm.show("Prefabs/UI/UIGetLabour", null, true);
            return;
        }
        PlayerInfo.labour--;
        PlayerInfo.save("labour")
        LoadingScene.goto("Game");
        // evt.emitDelay(5, "Game.hintUser")
        // }

    }

    click_labour() {

        vm.show("Prefabs/UI/UIGetLabour", null, true);
    }

    hideGuide() {
        // this.guide.active = false;
    }

    ///////////////////////////[state routine]////////////////////////////
    onEnter_Normal() {

    }

    onUpdate_Normal() {
        if (this.fsm.timeElapsed > 20) {
            //20秒后开启提示按钮
            //提示玩家 
            this.fsm.changeState(State.Hint);
        }
    }

    onEnter_Hint() {
        evt.emit("Game.hintUser")
    }



}
