

import mvcView from "../../../framework/ui/mvcView";
import { LevelInfo } from "../Common/LevelInfo";
import ccUtil from "../../../framework/utils/ccUtil";
import { SettingInfo } from "../../../framework/extension/weak_net_game/SettingInfo";
import Device from "../../../framework/misc/Device";
import { ChapterlInfo } from "../Common/ChapterlInfo";
import Const from "../Common/Const";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import Main from "../Main";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import { ConfirmOption } from "./UIConfirm";
import LoadingScene from "../Common/Base/LoadingScene";
import { buffSystem } from "../../../framework/extension/buffs/BuffSystem";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIChapter extends mvcView {

    @property(cc.Layout)
    layout: cc.Layout = null;

    @property(cc.ScrollView)
    scoreView: cc.ScrollView = null;


    datas: ChapterlInfo[] = [];

    onLoad() {
        this.register(this.layout, _ => this.datas);
    }

    onShow() {
        this.datas.splice(0);
        csv.Chapter.values.map(e => {
            let data = ccUtil.get(ChapterlInfo, e.id);
            if (data.id <= Const.Chapter_Unlock + 1)
                this.datas.push(data);
        });
        this.render();
        if (PlayerInfo.level > 20) {
            this.scoreView.scrollToPercentVertical((1 - PlayerInfo.level / 10 / 12), 0.2);
        }
        else {
            this.scoreView.scrollToPercentVertical(1, 0.2);
        }
    }

    start() {

    }

    click_play() {
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

    onConfirm_challenge(option: ConfirmOption) {
        if (option == ConfirmOption.Yes) {
            PlayerInfo.isPlayingDaily = true;
            vm.show("Prefabs/UI/UIChallengeChapter");
        } else {
            vm.show("Prefabs/UI/UIConfirm", "是否随机开始之前的关卡", this.onConfirm, this);
        }
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

    flytili(id?) {
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
    }

    clic_close() {


        vm.hide(this);
    }

    // update (dt) {}
}
