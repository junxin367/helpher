

import mvcView from "../../../framework/ui/mvcView";
import { LevelInfo } from "../Common/LevelInfo";
import ccUtil from "../../../framework/utils/ccUtil";
import { SettingInfo } from "../../../framework/extension/weak_net_game/SettingInfo";
import Device from "../../../framework/misc/Device";
import { DailyLevelInfo } from "../Common/DailyLevelInfo";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import { ChapterlInfo } from "../Common/ChapterlInfo";
import Const from "../Common/Const";
import { evt } from "../../../framework/core/event";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIChallengeLevel extends mvcView {

    @property(cc.PageView)
    pageview: cc.PageView = null;

    @property(cc.Node)
    layout: cc.Node = null;

    num: number = 0;

    onLoad() {

    }

    onShow() {
        let id = 0;
        let datas: [DailyLevelInfo[]] = [[]];
        csv.daily_level.values.map(e => {
            if (PlayerInfo.isGreaterDate(e.day)) {
                if (this.num >= 20) {
                    id += 1;
                    this.num = 0;
                    datas.push([]);
                }
                this.num += 1;
                let data = ccUtil.get(DailyLevelInfo, e.id);
                datas[id].push(data);
            }
        });

        for (let i = 0; i < datas.length; i++) {
            let item = cc.instantiate(this.layout);
            item.active = true;
            this.pageview.addPage(item);
            this.register(item.getComponent(cc.Layout), _ => datas[i]);
        }


        this.pageview.setCurrentPageIndex(Math.floor(PlayerInfo.dailylevel / 20));
        this.render();

        if (PlayerInfo.isInGuide && !PlayerInfo.is_guide_15) {
            PlayerInfo.isInGuide = false;
            PlayerInfo.is_guide_15 = true;
            vm.show("Prefabs/UI/UIGetPresent");

        }

    }

    start() {

    }

    clic_close() {


        vm.hide(this);
    }

    onHidden() {
        this.pageview.removeAllPages();
        this.num = 0;
    }

    // update (dt) {}
}
