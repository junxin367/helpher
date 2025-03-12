import mvcView from "../../../framework/ui/mvcView";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import { Toast } from "../../../framework/ui/ToastManager";
import LoadingScene from "../Common/Base/LoadingScene";
import { LevelInfo } from "../Common/LevelInfo";
import { SettingInfo } from "../../../framework/extension/weak_net_game/SettingInfo";
import Device from "../../../framework/misc/Device";
import ccUtil from "../../../framework/utils/ccUtil";
import { DailyLevelInfo } from "../Common/DailyLevelInfo";
import WeakNetGame from "../../../framework/extension/weak_net_game/WeakNetGame";
import Platform from "../../../framework/extension/Platform";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UILevelItem extends mvcView {

    @property(cc.Node)
    dangqian: cc.Node = null;

    @property(cc.Label)
    level: cc.Label = null;

    @property(cc.Node)
    lock: cc.Node = null;


    @property(cc.Node)
    jiaobiao: cc.Node = null;

    //当前进入类型的关卡数
    lv: number = 0;

    onLoad() {

    }

    showjiaobiao() {
        let data = this.getData() as LevelInfo;

        if (PlayerInfo.isPlayingDaily) {
            let lv1 = ccUtil.get(DailyLevelInfo, data.id);
            if (data.id <= PlayerInfo.dailylevel) {
                return false;
            } else {
                if (PlayerInfo.isNewLevel(lv1.day)) {
                    return true;
                } else {
                    return false;
                }

            }
        } else {
            let lv2 = ccUtil.get(LevelInfo, data.id);
            if (data.id <= PlayerInfo.level) {
                return false;
            } else {
                if (lv2.isNew) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }

    start() {
        this.lv = PlayerInfo.getCurrentLevel();
        let data = this.getData() as LevelInfo;
        this.level.string = data.id.toString();

        if (data.id == this.lv) {
            this.dangqian.active = true;
        }
        if (data.id <= this.lv) {
            this.lock.active = false;
        }
        this.onVisible(this.jiaobiao, _ => this.showjiaobiao())
        this.render()
    }

    click_startGame() {


        let data = this.getData() as LevelInfo;
        if (this.lv < data.id) {
            Toast.make("未解锁")
            return;
        }
        if (PlayerInfo.labour > 0) {
            PlayerInfo.labour--;
            if (PlayerInfo.isPlayingDaily) {
                PlayerInfo.playingDailyLevel = data.id;

                if ((csv.Config.Challenge_Level_Show_AD == PlayerInfo.playingDailyLevel) || (((PlayerInfo.playingDailyLevel - csv.Config.Challenge_Level_Show_AD) % csv.Config.Challenge_Level_Show_AD_Interval) == 0) && (PlayerInfo.playingDailyLevel > csv.Config.Challenge_Level_Show_AD)) {

                    WeakNetGame.doChoice("SOV_ShowAD", _ => {
                        PlayerInfo.save();
                        LoadingScene.goto("Game");
                    }, this);
                }

                else if ((csv.Config.Challenge_Level_Show_AD_Skip == PlayerInfo.playingDailyLevel) || (((PlayerInfo.playingDailyLevel - csv.Config.Challenge_Level_Show_AD_Skip) % csv.Config.Challenge_Level_Show_AD_Skip_Interval) == 0) && (PlayerInfo.playingDailyLevel > csv.Config.Challenge_Level_Show_AD_Skip)) {
                    Platform.showInterstitial(_ => {
                        PlayerInfo.save();
                        LoadingScene.goto("Game");
                    }, this)
                }
                else {
                    PlayerInfo.save();
                    LoadingScene.goto("Game");
                }
            } else {
                PlayerInfo.playinglevel = data.id;
                PlayerInfo.save();
                LoadingScene.goto("Game");
            }


        } else {
            // Toast.make("体力不足");
            vm.show("Prefabs/UI/UIGetLabour", _ => {
                PlayerInfo.labour--;
                if (PlayerInfo.isPlayingDaily) {
                    PlayerInfo.playingDailyLevel = data.id;
                } else {
                    PlayerInfo.playinglevel = data.id;
                }
                PlayerInfo.save();
                LoadingScene.goto("Game");
            }, false);
        }

        // if(PlayerInfo.isNew)
        //     StatHepler.userAction("(新玩家)进入关卡",PlayerInfo.playinglevel)
    }


}
