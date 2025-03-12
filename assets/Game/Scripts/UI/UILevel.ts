

import mvcView from "../../../framework/ui/mvcView";
import { LevelInfo } from "../Common/LevelInfo";
import ccUtil from "../../../framework/utils/ccUtil";
import { SettingInfo } from "../../../framework/extension/weak_net_game/SettingInfo";
import Device from "../../../framework/misc/Device";
import { DailyLevelInfo } from "../Common/DailyLevelInfo";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import { ChapterlInfo } from "../Common/ChapterlInfo";
import Const from "../Common/Const";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UILevel extends mvcView {

    @property(cc.Layout)
    layout: cc.Layout = null;

    @property(cc.Label)
    title: cc.Label = null;

    @property(cc.Button)
    last_btn: cc.Button = null;

    @property(cc.Button)
    next_btn: cc.Button = null;

    datas: LevelInfo[] = [];

    id: number = 0;

    onLoad() {

    }

    onShow(id?) {

        if (PlayerInfo.isPlayingDaily) {

            let datas: DailyLevelInfo[] = [];
            csv.daily_level.values.map(e => {
                if (PlayerInfo.isGreaterDate(e.day)) {
                    let data = ccUtil.get(DailyLevelInfo, e.id);
                    datas.push(data);
                }
            });
            this.register(this.layout, _ => datas);
            this.title.string = "关卡挑战";
            this.last_btn.node.active = false;
            this.next_btn.node.active = false;
        } else {
            this.datas = [];
            this.id = id;
            csv.level.values.map(e => {
                let data = ccUtil.get(LevelInfo, e.id);
                if (data.chapter == id)
                    this.datas.push(data);
            });
            this.register(this.layout, _ => this.datas);
            this.title.string = ccUtil.get(ChapterlInfo, id).name;
            console.log(Math.ceil(PlayerInfo.level / 10), id);
            if (id == 1) {
                this.next_btn.interactable = true;
                this.last_btn.node.active = false;
            }
            else if (id == Const.Chapter_Unlock || (id >= Math.ceil(PlayerInfo.level / 10))) {
                this.last_btn.node.active = true;
                this.next_btn.interactable = false;
            }
            else {
                this.last_btn.node.active = true;
                this.next_btn.interactable = true;

            }
        }
        this.render();
    }

    start() {

    }

    clic_close() {


        vm.hide(this);
    }

    click_last() {
        this.id -= 1;
        vm.show("Prefabs/UI/UILevel", this.id);
    }

    click_next() {
        this.id += 1;
        vm.show("Prefabs/UI/UILevel", this.id);
    }

    // update (dt) {}
}
