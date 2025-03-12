import LoadingScene from "./Common/Base/LoadingScene";
import Device from "../../framework/misc/Device";
import { PlayerInfo } from "./Common/Base/PlayerInfo";
import { UserInfo } from "../../framework/extension/weak_net_game/UserInfo";
import Platform from "../../framework/extension/Platform";
import ccUtil from "../../framework/utils/ccUtil";
import { evt } from "../../framework/core/event";
import Net, { net } from "../../framework/misc/Net";
import WeakNetGame from "../../framework/extension/weak_net_game/WeakNetGame";
import { Api, ServerConfig } from "./Common/Base/ServerConfig";
import { SumInvite, DayInvite } from "./UI/UIFriendHelp";
import PandoraPoint from "../../framework/ui/controller/PandoraPoint";
import { ConfirmOption } from "./UI/UIConfirm";
import Game from "./Game";
import Unity from "./Common/Unity";
import { TwoType } from "./UI/UIPersonSkin";
import BuffSystem, { buffSystem } from "../../framework/extension/buffs/BuffSystem";
import DouyinStorage from "../../framework/extension/ttsdk/DouyinStorage";


const { ccclass, property } = cc._decorator;
let inited: boolean = false
// if(!CC_DEBUG)console.log = function(){}
@ccclass
export default class Main extends cc.Component {
    // @property(cc.Node)
    // dailyChallenge: cc.Node = null;
    @property(cc.Node)
    tili: cc.Node = null;

    @property(cc.Node)
    btn_play: cc.Node = null;

    @property(cc.Node)
    daojishi: cc.Node = null;

    @property(cc.Label)
    label_timeLeft: cc.Label = null;

    @property(cc.Label)
    label_level: cc.Label = null;

    @property(cc.Node)
    guideNode: cc.Node = null;

    @property(cc.Node)
    qiandao_hongdian: cc.Node = null;

    @property(cc.Node)
    zhuanpan_hongdian: cc.Node = null;

    @property(cc.Node)
    theme_hongdian: cc.Node = null;

    @property(cc.Node)
    skin_hongdian: cc.Node = null;

    @property(cc.Node)
    node_sidebar_icon: cc.Node = null;

    static instance: Main = null
    isclick: boolean = false;

    @property(dragonBones.ArmatureDisplay)
    girl: dragonBones.ArmatureDisplay = null;

    @property(PandoraPoint)
    redpoint: PandoraPoint = null;

    drawer: cc.Node = null;

    @property(cc.Button)
    btn_challange: cc.Button = null;
    @property(cc.Label)
    challene_unlockTip: cc.Label = null;

    onLoad() {
        Main.instance = this;
        cc.director.getPhysicsManager().enabled = true;

        evt.on("PersistNode.onViewHidden", this.onViewHidden, this);

        evt.on("Game.getTili", this.playAddTili, this);
        evt.on("Game.friendTili", this.calcRedpoint, this);
        evt.on("UISkin.onHidden", this.onChangeSkin, this)
        evt.on("PlayerInfo.star", this.onChangeStar, this)
        evt.on("UISkin.checkLock", this.check_lockSkin, this);
        evt.on("UILucky.redPoint", this.luckyRedPoint, this);
        evt.on("Main.skin", this.onMainSkin, this);

        // this.onVisible(this.node_sidebar_icon, () => UserInfo.sidebarAvailable && !UserInfo.sidebarRewardClaimed)

        if (inited == false) {
            inited = true;
            PlayerInfo.updateBuffs();
            this.checkDaily();
            // Platform.loadSubPackage("Audio").then(_ => {
            //     Device.playBGM("BGM0");
            // })
        }
        Device.playBGM("BGM0");
        // this.dailyChallenge.active = PlayerInfo.level >= csv.Config.Begin_Daily_Level ? true : false;
        if (CC_DEBUG) {
            window['main'] = this;
        }
        if (PlayerInfo.level < (csv.Config.Chanllenge_Unlock_Level || 25)) {
            //25关解锁
            this.challene_unlockTip.string = ((csv.Config.Chanllenge_Unlock_Level || 25) - PlayerInfo.level).toFixed() + "关后解锁!";
            this.btn_challange.interactable = false;
        } else {
            this.btn_challange.interactable = true;
            this.challene_unlockTip.node.parent.active = false;
        }


        if(this.node_sidebar_icon){
            if(DouyinStorage.sidebarAvailable && !PlayerInfo.isFavClaimed){
                // ok 
                // todo : check sidebar reward index is available 
                this.node_sidebar_icon.active = true;
            }else{
                this.node_sidebar_icon.active = false;
            }
        }

    }

    onChangeSkin() {
        Unity.loadSkins(this.girl, 1);
    }

    onChangeStar() {
        csv.Skin.values.forEach(v => {
            if (v.unlockType == 2 && !PlayerInfo.isSkinUnlocked(v.id) && PlayerInfo.star >= v.unlock2) {
                // PlayerInfo.unlockSkin(v.id);
                vm.show("Prefabs/UI/UIUnlockSkin", v.id);
            }
        });
        //判断 是否解锁 章节
        let c = PlayerInfo.getChapter(PlayerInfo.level);
        if (PlayerInfo.star >= csv.star.get(c).demand) {
            let bNew = PlayerInfo.isChapterNew(c)
            if (c > 1) {
                if (bNew) {
                    vm.show("Prefabs/story/help", c)
                    PlayerInfo.markChapterOld(c);
                }
            }
        }

    }

    onLoadFinished(viewname) {
        if (viewname)
            vm.show(viewname)
    }



    start() {
        PlayerInfo.init();
        if (buffSystem.getBuff("AutoLabour").isEnabled) {
            this.daojishi.active = true;
        }
        else {
            this.daojishi.active = false;
        }
        this.label_timeLeft.string = new Date(PlayerInfo.buff_labour * 1000).format("mm:ss");
        if (PlayerInfo.labour < csv.Config.Max_Energy && !buffSystem.getBuff("AutoLabour").isEnabled) {
            if (PlayerInfo.buff_labour > 0) {
                buffSystem.startBuff("AutoLabour", PlayerInfo.buff_labour);
            }
            else {
                buffSystem.startBuff("AutoLabour", csv.Config.LabourRecoveryTime * 60 || 300);
            }
        }else{
            buffSystem.stop("AutoLabour")
        }

        this.girl.armature().animation.fadeIn('frightened', 0.2, 0, '1');
        Unity.loadSkins(this.girl, 1);

        this.isclick = false;
        this.label_level.string = "关卡进度:" + PlayerInfo.level;

        Platform.hideBannerAd();

        //每次进主页请求是否有体力可领取
        // if (PlayerInfo.isWechat()) this.checkTili();
        if (PlayerInfo.isInGuide && !PlayerInfo.is_guide_15) {
            this.guideNode.active = true;
        }
        // WeakNetGame.client.httpPost(ServerConfig.force_url).then(v => {
        //     if (v) {
        //         console.log(v);
        //     }
        // })
        for (let i = 1; i <= csv.level.values.length; i++) {
            if (!PlayerInfo.level_star[i]) {
                PlayerInfo.level_star[i] = 0;
            }
        }
        this.qiandao_hongdian.active = g.isNextDay(PlayerInfo.signTime);
        this.zhuanpan_hongdian.active = g.isNextDay(UserInfo.freedrawTime);
        this.check_lockSkin();

        if (PlayerInfo.guide == 0) {
            vm.show("Prefabs/story/comics1")
        } else {
            g.isNextDay(PlayerInfo.signTime) && vm.show("Prefabs/UI/UISign");
        }
    }

    checkDaily() {
        csv.daily_level.values.forEach(e => {
            if (PlayerInfo.isGreaterDate(e.day)) {
                PlayerInfo.maxDailyLv = e.id;
            }
        });
        console.log("每日挑战最大关卡数：" + PlayerInfo.maxDailyLv)
    }

    calcRedpoint(day_invite, sum_invite) {
        let freeTili = 0;
        for (var k in day_invite) {
            let day = day_invite[k] as DayInvite
            if (day && day.status == 0) {
                freeTili++;
            }
        }
        let sum = sum_invite as SumInvite
        sum.claimedCount = sum.claimedCount || 0;
        if (sum.claimedCount < sum.inviteeCount) {
            freeTili++;
        }
        this.redpoint.setNumber(freeTili);
    }

    luckyRedPoint() {
        this.zhuanpan_hongdian.active = false;
    }

    checkTili() {
        WeakNetGame.client.httpGet(Api.invite_get).then(v => {
            if (v == Net.Code.Timeout) {
            } else {
                if (v) {
                    let d = JSON.parse(v);
                    if (d.errno == 0) {
                        d = d.data
                        this.calcRedpoint(d.day_invite, d.sum_invite);
                    } else {

                    }
                } else {

                }
            }
        })
    }


    onConfirm(option: ConfirmOption) {
        if (option == ConfirmOption.Yes) {
            PlayerInfo.isRandomLevel = true;
            let lvrow = csv.level.get(g.randomInt(2, csv.level.size))
            this.flytili(lvrow.id);
        } else {
            PlayerInfo.isRandomLevel = false;
        }
    }
    onConfirm_challenge(option: ConfirmOption) {
        if (option == ConfirmOption.Yes) {
            PlayerInfo.isPlayingDaily = true;
            vm.show("Prefabs/UI/UIChallengeChapter");
        } else {
            vm.show("Prefabs/UI/UIConfirm", "是否随机开始之前的关卡", this.onConfirm, this);
        }
    }
    confirm() {
        if (PlayerInfo.level >= csv.level.size) {
            if (PlayerInfo.dailylevel <= PlayerInfo.maxDailyLv) {
                vm.show("Prefabs/UI/UIConfirm", "是否前往挑战关卡？", this.onConfirm_challenge, this);
            } else {
                vm.show("Prefabs/UI/UIConfirm", "是否随机开始之前的关卡", this.onConfirm, this);
                return;
            }

        } else {
            this.flytili();
        }
    }

    onMainSkin() {
        LoadingScene.goto("Skin");//, TwoType.Skin
    }

    check_lockSkin() {
        UserInfo.isunlock_men = 0;
        UserInfo.isunlock_girl = 0;
        UserInfo.isunlock_theme = 0;
        for (let i = 1; i <= 5; i++) {
            UserInfo[`isunlock_girl${i}`] = 0;
            UserInfo[`isunlock_men${i}`] = 0;
        }
        this.theme_hongdian.active = false;
        this.skin_hongdian.active = false;

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

        if (UserInfo.isunlock_theme) {
            this.theme_hongdian.active = true;
        }
        if (UserInfo.isunlock_men || UserInfo.isunlock_girl) {
            this.skin_hongdian.active = true;
        }
    }

    click_sidebar() {
        if (cc.sys.BYTEDANCE_GAME == cc.sys.platform) {
            if (DouyinStorage.isFromSidebar) {
                // UserInfo.isFromSidebar = false;
                vm.show("Prefabs/UI/BD_Guide_Sidebar", "claim")
            } else {
                vm.show("Prefabs/UI/BD_Guide_Sidebar", "sidebar")
            }
        }
    }

    click_play() {
        // console.log(csv.level.size)
        // console.log(PlayerInfo.playinglevel)

        if (this.isclick) return;

        //进入新手引导关
        if (PlayerInfo.guide == 0) {
            LoadingScene.goto("Game");
            this.isclick = true;
            return;
        }
        if (PlayerInfo.labour > 0) {
            if (!UserInfo.gun_num && !UserInfo.isGetGunStart) {
                let ran = Math.random();
                if (PlayerInfo.level >= csv.Config.Start_Lv_Get_Gun
                    && UserInfo.gunViewDay < csv.Config.Get_Gun_Limt_Day
                    && UserInfo.gunView < csv.Config.Get_Gun_Limt
                    && ran < csv.Config.Get_Gun_Pro
                ) {
                    vm.show("Prefabs/UI/UIGetGun", _ => {
                        this.confirm();
                    }, "isGetGunStart");
                    return;
                }


            }
            this.confirm();
        } else {
            vm.show("Prefabs/UI/UIGetLabour", _ => {
                this.confirm();
            }, false);
        }

    }


    test(lv) {
        Game.debug = true;
        LoadingScene.goto("Game", lv)
    }
    click_daily() {

        PlayerInfo.isPlayingDaily = true;
        vm.show("Prefabs/UI/UIChallengeChapter");
        if (PlayerInfo.isInGuide && !PlayerInfo.is_guide_15) {
            this.guideNode.active = false;
        }
    }

    async click_level() {
        PlayerInfo.isPlayingDaily = false;

        // await Platform.loadSubPackage("ImagePart");
        vm.show("Prefabs/UI/UIChapter");
    }

    click_setting() {
        vm.show("Prefabs/UI/UISetting");
    }

    click_rank() {
        // vm.show("Prefabs/UI/UIRank");
    }

    click_labour() {
        vm.show("Prefabs/UI/UIGetLabour", null, true);
    }

    click_draw() {

        vm.show("Prefabs/UI/UILucky");
    }


    click_gettili() {
        // vm.show("Prefabs/UI/UIFriendHelp")
        vm.show("Prefabs/UI/UIFreeGetLabour")
    }

    click_friend() {
        vm.show("Prefabs/UI/UIFriendHelp")
    }

    click_theme() {
        vm.show("Prefabs/UI/UISkin");
    }

    click_shouchang() {
        LoadingScene.goto("Skin", TwoType.Collection);
    }

    click_skin() {
        LoadingScene.goto("Skin", TwoType.Skin);
    }

    click_sign() {
        vm.show("Prefabs/UI/UISign");
    }

    playAddTili(worldpos, num) {
        ccUtil.playFly(this.tili, 1.0, num)
        // ccUtil.playFlyCoin(this.tili, this.tili.parent, worldpos, ccUtil.getWorldPosition(this.tili), { dur: 1.0, interval: 0.2, num })
    }

    async click_world_wx(userInfo?, isNew?) {
        if (userInfo) {
            await UserInfo.openRankAndUpload({ level: PlayerInfo.level, challengelevel: PlayerInfo.dailylevel }, userInfo);
            // vm.show("Prefabs/UI/UIRank");
        }
    }

    flytili(id?) {
        let tili = cc.instantiate(this.tili);
        let tar = new cc.Vec2(this.btn_play.position.x, this.btn_play.position.y);
        let wpos = this.tili.getBoundingBoxToWorld().center;
        let startpos = this.btn_play.parent.convertToNodeSpaceAR(wpos);
        let move = cc.moveTo(0.5, tar).easing(cc.easeSineOut())
        let seq = cc.sequence(
            move,
            cc.callFunc(_ => {
                tili.destroy()
                PlayerInfo.isPlayingDaily = false;
                PlayerInfo.labour--;
                PlayerInfo.save("labour");
                if (PlayerInfo.labour <= csv.Config.Max_Energy - 1) {
                    buffSystem.startBuff("AutoLabour", PlayerInfo.buff_labour || 300);
                }
                if (id) {
                    PlayerInfo.playinglevel = id;
                } else {
                    PlayerInfo.playinglevel = PlayerInfo.level;
                }
                LoadingScene.goto("Game");
            })
        )
        tili.parent = this.btn_play.parent;
        tili.setPosition(startpos);
        tili.runAction(seq);
        this.isclick = true;

    }
    // update (dt) {}
    onDestroy() {
        cc.audioEngine.stopAll();
        evt.off(this);
    }
}
