import mvcView from "../../../framework/ui/mvcView";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import { Toast } from "../../../framework/ui/ToastManager";
import LoadingScene from "../Common/Base/LoadingScene";
import WeakNetGame from "../../../framework/extension/weak_net_game/WeakNetGame";
import Platform from "../../../framework/extension/Platform";
import { ROW } from "./UIChallengeChapter";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIChallengeChapterItem extends mvcView {
    @property(cc.Label)
    label_chapter: cc.Label = null;

    @property(cc.Node)
    level_node: cc.Node = null;

    // _init: boolean = false;

    onLoad() {
        this.register(this.label_chapter, _ => this.showLabel());
    }

    onLaterRender() {
        // if (!this._init) {
        //     this._init = true;
            this.refresh_level();
        // }
    }

    refresh_level() {
        let data = this.getData() as number;
        let maxLevel = csv.daily_level.values.length;
        for (let i = 0; i < this.level_node.children.length; i++) {
            let level = ((data - 1) * ROW) + (i + 1);
            this.onClick(this.level_node.children[i], _ => this.click_startGame(level));

            let levelNow_node = this.level_node.children[i].getChildByName("dangqian");

            let t1_node = this.level_node.children[i].getChildByName("t1");
            t1_node.getComponent(cc.Label).string = ((data - 1) * 5 + i + 1) + "";

            let unlock_node = this.level_node.children[i].getChildByName("weijisuo");
            if (level > PlayerInfo.dailylevel) {
                unlock_node.active = true;
            } else {
                if (i == 4 && (PlayerInfo.challenge_gift.indexOf(data) == -1)) {
                    this.level_node.children[i].getChildByName("kelingqu").active = true;
                    this.level_node.children[i].getChildByName("libao").active = true;
                    this.onClick(this.level_node.children[i].getChildByName("libao"), _ => this.click_gift(data));
                }
                else if (i == 4) {
                    this.level_node.children[i].getChildByName("libao").active = false;
                    this.level_node.children[i].getChildByName("kelingqu").active = false;
                }
                unlock_node.active = false;
            }

            this.level_node.children[i].opacity = maxLevel < level ? 0 : 255;
        }
    }

    showLabel() {
        let data = this.getData() as number;
        return `阶段${data}`;
    }

    click_gift(data) {
        this.level_node.children[4].getChildByName("libao").active = false;
        this.level_node.children[4].getChildByName("kelingqu").active = false;
        vm.show("Prefabs/UI/UIGetGift", data);
    }

    click_startGame(level) {
        PlayerInfo.isPlayingDaily = true;
        if (level > PlayerInfo.dailylevel) {
            Toast.make("未解锁")
            return;
        }
        if (PlayerInfo.labour > 0) {
            PlayerInfo.labour--;
            if (PlayerInfo.isPlayingDaily) {
                PlayerInfo.playingDailyLevel = level;

                if ((csv.Config.Challenge_Level_Show_AD == PlayerInfo.playingDailyLevel) || (((PlayerInfo.playingDailyLevel - csv.Config.Challenge_Level_Show_AD) % csv.Config.Challenge_Level_Show_AD_Interval) == 0) && (PlayerInfo.playingDailyLevel > csv.Config.Challenge_Level_Show_AD)) {

                    WeakNetGame.doChoice("SOV_ShowAD", _ => {
                        PlayerInfo.save();
                        LoadingScene.goto("Game");
                    }, this);

                } else if ((csv.Config.Challenge_Level_Show_AD_Skip == PlayerInfo.playingDailyLevel) || (((PlayerInfo.playingDailyLevel - csv.Config.Challenge_Level_Show_AD_Skip) % csv.Config.Challenge_Level_Show_AD_Skip_Interval) == 0) && (PlayerInfo.playingDailyLevel > csv.Config.Challenge_Level_Show_AD_Skip)) {

                    Platform.showInterstitial(_ => {
                        PlayerInfo.save();
                        LoadingScene.goto("Game");
                    }, this);

                }
                else {
                    PlayerInfo.save();
                    LoadingScene.goto("Game");
                }
            } else {
                PlayerInfo.playinglevel = level;
                PlayerInfo.save();
                LoadingScene.goto("Game");
            }


        } else {
            // Toast.make("体力不足");
            vm.show("Prefabs/UI/UIGetLabour", _ => {
                PlayerInfo.labour--;
                if (PlayerInfo.isPlayingDaily) {
                    PlayerInfo.playingDailyLevel = level;
                } else {
                    PlayerInfo.playinglevel = level;
                }
                PlayerInfo.save();
                LoadingScene.goto("Game");
            }, false);
        }

        // if(PlayerInfo.isNew)
        //     StatHepler.userAction("(新玩家)进入关卡",PlayerInfo.playinglevel)
    }
}
