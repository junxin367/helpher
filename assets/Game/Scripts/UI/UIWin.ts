import mvcView from "../../../framework/ui/mvcView";
import LoadingScene from "../Common/Base/LoadingScene";
import Game from "../Game";
import { evt } from "../../../framework/core/event";
import Device from "../../../framework/misc/Device";
import { Toast } from "../../../framework/ui/ToastManager";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import Platform from "../../../framework/extension/Platform";
import StatHepler from "../../../framework/extension/aldsdk/StatHelper";
import wegame from "../sdk/wegame";
import { CloudFuncType } from "../Common/CloudFuncTypes";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import WeakNetGame from "../../../framework/extension/weak_net_game/WeakNetGame";
import Unity from "../Common/Unity";
import display from "../../../framework/misc/display";
import Const from "../Common/Const";
import Switcher from "../../../framework/ui/controller/Switcher";
import WinGift from "../views/WinGift";
import { umeng } from "../../../framework/extension/aldsdk/umeng";
const { ccclass, property } = cc._decorator;

@ccclass
export default class UIWin extends mvcView {

    @property(cc.Node)
    btn_next: cc.Node = null;

    @property(cc.Node)
    next_btn: cc.Node = null;

    @property(cc.Node)
    btn_get: cc.Node = null;

    isclick: boolean = false;

    isNextDraw: boolean = false;

    @property(cc.Node)
    again_btn: cc.Node = null;

    @property(Switcher)
    switch: Switcher = null;

    @property(cc.Node)
    setting: cc.Node = null;

    @property(cc.Label)
    hint_label: cc.Label = null;

    @property(cc.Label)
    level_label: cc.Label = null;

    @property(Switcher)
    switcher: Switcher = null;

    @property(cc.Sprite)
    share_video: cc.Sprite = null;

    youlike: cc.Node = null;
    drawer: cc.Node = null;

    isGetLabour: boolean = false;

    @property(WinGift)
    winGift: WinGift = null;

    winGift_OriginPos: cc.Vec3;

    onLoad() {
        this.register(this.share_video, _ => Unity.iconSOV(WeakNetGame.getChoice("SOV_Win_Get")))
        this.register(this.hint_label, _ => this.showHintLabel());
        this.register(this.level_label, _ => this.showLevelLabel());
        this.onClick(this.btn_get, _ => this.click_getLabour());
        this.onInteractable(this.btn_get, _ => !this.isGetLabour);

        this.winGift_OriginPos = this.winGift.node.position;
    }

    openEnergyPackage() {
        if (PlayerInfo.labour <= 2) {
            wegame.tryOpenCheat(CloudFuncType.Energy_Package).then(v => {
                PlayerInfo.winLink = 0;
                this.dialogToShow = "UIEnergyPackage";
            })
        }
    }

    dialogToShow = null;

    onDisable() {
        this.switch.index = 0;
    }

    onResume() {
        Platform.reloadBannerAd();
    }

    async init() {
        this.isGetLabour = false;
        this.render();
        // this.btn_get.active = true;
        this.isclick = false;
        this.isNextDraw = false
        this.dialogToShow = null;
        Device.playSfx("win");
        let isBlock = PlayerInfo.nextLevel();
        if (isBlock) {
            await evt.wait("View.onHidden")
        }
        if (PlayerInfo.level > 11) {
            this.winGift.node.position = this.winGift_OriginPos
            this.winGift.show();
        } else {
            this.winGift.hide();
        }
        // if (UserInfo.isNew)
        //     StatHepler.sendPath("新用户关卡通关人数", "关卡", PlayerInfo.playinglevel);
        // StatHepler.sendPath("所有用户关卡通关人数", "关卡", PlayerInfo.playinglevel);
    }


    onShown() {
        evt.on("Game.Resume", this.onResume, this);

        let ps = this.getComponentInChildren(cc.ParticleSystem);
        ps && ps.resetSystem();

        if (PlayerInfo.isPlayingDaily) {
            this.switch.node.active = false;
        }
        else {
            this.switch.node.active = true;
            let index = 0;
            this.schedule(_ => {
                let xxing = this.switch.children[index].getChildByName('xxing');
                cc.tween(xxing).to(0.2, { scale: 1.6 }).to(0.2, { scale: 1 }).start();
                this.switch.index = index;
                index++;
                if (index > Math.min(Game.instance.star, 3)) {
                    this.unscheduleAllCallbacks();
                }
            }, 0.3);

            if (PlayerInfo.level_star[PlayerInfo.playinglevel] < Game.instance.star) {
                PlayerInfo.star += (Game.instance.star - PlayerInfo.level_star[PlayerInfo.playinglevel])
                PlayerInfo.level_star[PlayerInfo.playinglevel] = Game.instance.star;
            }
        }
        // ttsdk.stop_recorder();
        this.init();

        if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.OS_ANDROID) {
            this.next_btn.active = true;
        }

    }


    start() {

    }

    showHintLabel() {
        if (PlayerInfo.playinglevel != PlayerInfo.level || PlayerInfo.isPlayingDaily) {
            this.hint_label.node.active = false;
            return "";
        }
        if (PlayerInfo.playinglevel == Const.Chapter_Unlock * 10) {
            return "更多关卡！即将上线";
        }

        else {
            if (PlayerInfo.playinglevel % 10 == 0) {
                return "新章节已解锁";
            }
            return "还差" + (10 - PlayerInfo.level % 10) + "关解锁第" + (Math.ceil(PlayerInfo.level / 10) + 1) + "章";
        }
    }

    showLevelLabel() {
        return "第" + PlayerInfo.getCurrentPlayingLevel() + "关";
    }


    click_level() {

        if (PlayerInfo.isPlayingDaily) {
            vm.show("Prefabs/UI/UIChallengeChapter");
        } else {
            vm.show("Prefabs/UI/UIChapter");
        }
    }

    click_setting() {

        vm.show("Prefabs/UI/UISetting");
    }

    click_skin() {

        // vm.show("Prefabs/UI/UISkin");
        evt.emit('Main.skin');
    }

    nextRandomLevel() {
        console.log("随机关卡")
        if (PlayerInfo.isPlayingDaily) {
            let lvrow = csv.daily_level.get(g.randomInt(1, PlayerInfo.maxDailyLv));
            return lvrow.id
        } else {
            let lvrow = csv.level.get(g.randomInt(2, csv.level.size))
            return lvrow.id
        }
    }

    click_next() {
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
    }

    check_getgun() {
        if (!UserInfo.gun_num && !UserInfo.isGetGunEnd) {
            let ran = Math.random();
            if (PlayerInfo.level >= csv.Config.Start_Lv_Get_Gun
                && UserInfo.gunViewDay < csv.Config.Get_Gun_Limt_Day
                && UserInfo.gunView < csv.Config.Get_Gun_Limt
                && ran < csv.Config.Get_Gun_Pro
            ) {
                vm.show("Prefabs/UI/UIGetGun", _ => {
                    this.continue();
                }, "isGetGunEnd");
                return;
            }
        }
        this.continue();
    }

    continue() {
        if (this.isclick) return;
        if (PlayerInfo.isPlayingDaily) {
            if (PlayerInfo.playingDailyLevel > PlayerInfo.maxDailyLv) {
                vm.show("Prefabs/UI/UIChallengeChapter");
                Toast.make("已挑战至最新进度");
                return;
            }
        } else {
            if (PlayerInfo.playinglevel > csv.level.size) {
                LoadingScene.goto("Main")
                return;
            }
        }

        if (PlayerInfo.labour > 0) {
            this.isclick = true;
            this.flytili();
        } else {
            vm.show("Prefabs/UI/UIGetLabour", _ => {
                this.flytili();
            }, false);
        }
    }

    async goNext() {
        if (PlayerInfo.isPlayingDaily) {
            if (PlayerInfo.isRandomLevel) PlayerInfo.playingDailyLevel = this.nextRandomLevel();

        } else {
            if (PlayerInfo.isRandomLevel) PlayerInfo.playinglevel = this.nextRandomLevel();

        }
        Game.instance.loader.level = PlayerInfo.getCurrentPlayingLevel();
        PlayerInfo.save();
        vm.hide(this);
    }

    flytili() {
        let self = this;
        let tili = cc.instantiate(Game.instance.tili);
        let tar = new cc.Vec2(this.btn_next.position.x, this.btn_next.position.y);
        let wpos = Game.instance.tili.getBoundingBoxToWorld().center;
        let startpos = this.btn_next.parent.convertToNodeSpaceAR(wpos);
        let move = cc.moveTo(0.5, tar).easing(cc.easeSineOut())
        let seq = cc.sequence(
            move,
            cc.callFunc(_ => {
                tili.destroy()
                PlayerInfo.labour--;
                self.goNext();
            })
        )
        tili.parent = this.btn_next.parent;
        tili.setPosition(startpos);
        tili.runAction(seq);

    }

    click_home() {
        LoadingScene.goto("Main");
    }

    onHidden() {
        evt.off(this);

    }

    onDestroy() {
        // if (PlayerInfo.isShowSDK()) window['zzsdkui'].unscheduleAllCallbacks();
        evt.off(this);
    }

    click_getLabour() {
        umeng.onEvent('rewardAd', 'labourWinShow');
        WeakNetGame.doChoice("SOV_Win_Get", _ => {
            this.isGetLabour = true;
            let r = csv.Config.Get_Energey_Count || 3;
            PlayerInfo.labour += r;
            PlayerInfo.save("labour");
            umeng.onEvent('rewardAd', 'labourWinRewarded');
            evt.emit("Game.getTili", display.center, r);
            Toast.make("获得" + r + "点体力");
            this.render();
            // vm.show("Prefabs/UI/UIDoubleGet", r);
        }, this)
    }
    // update (dt) {}
}
