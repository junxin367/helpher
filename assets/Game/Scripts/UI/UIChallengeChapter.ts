
import mvcView from "../../../framework/ui/mvcView";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import UIChallengeChapterItem from "./UIChallengeChapterItem";

const { ccclass, property } = cc._decorator;

export const ROW: number = 5;

@ccclass
export default class UIChallengeChapter extends mvcView {

    @property(cc.Layout)
    layout: cc.Layout = null;

    @property(cc.ScrollView)
    scoreView: cc.ScrollView = null;

    datas: number[] = [];

    onLoad() {
        this.register(this.layout, _ => this.datas);
    }

    onShow() {
        !PlayerInfo.playingDailyLevel && (PlayerInfo.playingDailyLevel = PlayerInfo.dailylevel);

        this.datas.splice(0);
        let max = Math.ceil(csv.daily_level.values.length / ROW);
        for (let i = 1; i <= max; i++) {
            this.datas.push(i);
        }
        this.render();
        this.scoreView.scrollToPercentVertical((1 - PlayerInfo.playingDailyLevel / ROW / max), 0.2);
    }

    start() {

    }

    click_play() {
        let item = this.layout.node.getComponentInChildren(UIChallengeChapterItem);
        item && item.click_startGame(PlayerInfo.playingDailyLevel);
        // Main.instance.click_play();
    }

    clic_close() {
        vm.hide(this);
    }

    // update (dt) {}
}
