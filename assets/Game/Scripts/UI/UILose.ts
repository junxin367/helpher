import mvcView from "../../../framework/ui/mvcView";
import LoadingScene from "../Common/Base/LoadingScene";
import Device from "../../../framework/misc/Device";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import { Toast } from "../../../framework/ui/ToastManager";
import Game from "../Game";
import wegame from "../sdk/wegame";
import { CloudFuncType } from "../Common/CloudFuncTypes";
import { qqsdk } from "../../../framework/extension/qq/qqsdk";
import Platform from "../../../framework/extension/Platform";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import { ttsdk } from "../../../framework/extension/ttsdk/ttsdk";
import { evt } from "../../../framework/core/event";
import WeakNetGame from "../../../framework/extension/weak_net_game/WeakNetGame";
import Unity from "../Common/Unity";
import display from "../../../framework/misc/display";
import { umeng } from "../../../framework/extension/aldsdk/umeng";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UILose extends mvcView {

    @property(cc.Node)
    sdk: cc.Node = null;

    @property(cc.Node)
    setting: cc.Node = null;

    @property(cc.Node)
    btn_get: cc.Node = null;

    @property(cc.Node)
    rank: cc.Node = null;

    @property(cc.Sprite)
    share_video: cc.Sprite = null;

    @property(cc.Label)
    level_label: cc.Label = null;

    youlike: cc.Node = null;
    isGetLabour: boolean = false;
    drawer: cc.Node = null;

    onLoad() {
        this.register(this.share_video, _ => Unity.iconSOV(WeakNetGame.getChoice("SOV_Lose_Get")));
        this.register(this.level_label, _ => this.showLevelLabel());

        this.onClick(this.btn_get, _ => this.click_getLabour());
        this.onInteractable(this.btn_get, _ => !this.isGetLabour);
    }

    start() {
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
    }

    dialogToShow = null;

    onHidden() {
        evt.off(this);
    }

    onResume() {
        Platform.reloadBannerAd();
    }


    init() {
        this.isGetLabour = false;
        this.render();
        this.btn_get.active = true;
        this.dialogToShow = null;
        PlayerInfo.lose();
        Device.playSfx("lose");

    }

    showEnergyPackage() {
        if (PlayerInfo.labour <= 2) {
            wegame.tryOpenCheat(CloudFuncType.Energy_Package).then(v => {
                PlayerInfo.winLink = 0;
                this.dialogToShow = "UIEnergyPackage";
            })
        }
    }

    onShow() {
        evt.on("Game.Resume", this.onResume, this);
        ttsdk.stop_recorder();
        this.init();

        if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.OS_ANDROID) {
            this.rank.active = false;
            this.setting.active = true;
        }
    }

    showLevelLabel() {
        return "第" + PlayerInfo.getCurrentPlayingLevel() + "关";
    }



    async showSequencely(b = false) {
        await evt.sleep(0.1);
        if (this.dialogToShow) {
            await evt.wait(this.dialogToShow + ".onHidden")
        }
    }

    isShowKf() {
        if (UserInfo.isFirstGameOver && Game.instance.loader.level != 10000) {
            UserInfo.isFirstGameOver = false;
            UserInfo.FirstGameOverTime = Date.now();
            UserInfo.save()
            if (!UserInfo.isKf && PlayerInfo.isWechat()) {
                return true;
            }
        }
        return false;
    }
    showDialog() {
        // if (this.isShowKf()) {
        //     vm.show("Prefabs/UI/UICustomer");
        //     this.dialogToShow = "UICustomer";
        // } else {
        if (!PlayerInfo.is_guide_15 && PlayerInfo.playinglevel == 15 && PlayerInfo.level == 15) {
            vm.show("Prefabs/UI/UIUnlock");
        } else {
            this.showEnergyPackage();
        }
        // }
    }

    showInterstitial(b = false) {
        let self = this;
        Platform.showInterstitial(() => {
            self.showDialog();
            self.showSequencely(b)
        }).then(v => {
            self.showDialog();
            self.showSequencely(b)
        });
    }

    err() {
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
    }

    click_showsdk() {
        // if (this.drawer) {
        //     this.drawer.active = true;
            // window['zzsdkui'].drawerOpen(this.drawer);
        // }
    }

    click_moregame() {


        qqsdk.showAppBox();
    }

    click_share(v) {


        if (window.tt) {
            this.click_shareRecorder(v);
            return;
        }
        Platform.share();
        v.active = false;
        this.render();
    }

    click_shareRecorder(v) {


        if (UserInfo.sharecount > (csv.Config.max_share_count || 10)) {
            Toast.make("今日分享次数已达上限!");
            return;
        }
        if (UserInfo.record_time <= 3) {
            Toast.make("录屏超过3s才能分享哦");
            return;
        }
        let self = this;
        //点击后分享录屏，成功后可获得5颗草莓，未分享则无法获得。分享返回后还是停留在结算页，并给予是否获得奖励的提示。
        // 成功提示：恭喜你获得5颗草莓
        // 不成功提示：成功分享才能获得奖励哦。
        window.tt.shareAppMessage({
            channel: "video",
            query: "",
            templateId: "vy1r1dacvr62684a1e", // 替换成通过审核的分享ID
            title: "帮她脱险",
            desc: "想玩就搜索游戏名：帮她脱险游戏软件",
            extra: {
                videoPath: UserInfo.record_path, // 可用录屏得到的本地文件路径
                videoTopics: ["帮她脱险", "赢在思维"],
            },
            success() {
                v.target.active = false;
                PlayerInfo.labour += 3;
                PlayerInfo.save("labour")
                UserInfo.sharecount++;
                UserInfo.save("sharecount")
                Toast.make("分享成功，奖励3点体力!");
            },
            fail(e) {
                console.log("分享视频失败");
                Toast.make("成功分享才能获得奖励哦");
            },
        });
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
        evt.emit('Main.skin');

        // vm.show("Prefabs/UI/UISkin");
    }

    click_rank() {


        // vm.show("Prefabs/UI/UIRank");
    }


    click_again() {



        if (PlayerInfo.labour > 0) {
            if (!UserInfo.gun_num && !UserInfo.isGetGunEnd) {
                let ran = Math.random();
                if (PlayerInfo.level >= csv.Config.Start_Lv_Get_Gun
                    && UserInfo.gunViewDay < csv.Config.Get_Gun_Limt_Day
                    && UserInfo.gunView < csv.Config.Get_Gun_Limt
                    && ran < csv.Config.Get_Gun_Pro
                ) {
                    vm.show("Prefabs/UI/UIGetGun", _ => {
                        PlayerInfo.labour--;
                        PlayerInfo.save("labour");
                        LoadingScene.goto("Game");
                    }, "isGetGunEnd");
                    return;
                }

            }
            PlayerInfo.labour--;
            PlayerInfo.save("labour");
            LoadingScene.goto("Game");
        } else {
            // Toast.make("体力不足");
            vm.show("Prefabs/UI/UIGetLabour", _ => {
                PlayerInfo.labour--;
                PlayerInfo.save("labour");
                LoadingScene.goto("Game");
            }, false);
        }
    }


    click_home() {
        // 
        // Platform.share();  


        LoadingScene.goto("Main");
    }


    onDestroy() {
        // if (PlayerInfo.isShowSDK()) window['zzsdkui'].unscheduleAllCallbacks();
        evt.off(this);
    }

    click_getLabour() {
        umeng.onEvent('rewardAd', 'labourLoseShow');
        WeakNetGame.doChoice("SOV_Lose_Get", _ => {
            this.isGetLabour = true;
            let r = csv.Config.Get_Energey_Count || 2;
            PlayerInfo.labour += r;
            PlayerInfo.save("labour");
            umeng.onEvent('rewardAd', 'labourLoseRewarded');
            evt.emit("Game.getTili", display.center, r);
            Toast.make("获得" + r + "点体力");
            this.render();
        }, this)
    }

    click_back() {
        // Game.instance.showInterfull();
    }
    // update (dt) {}
}
