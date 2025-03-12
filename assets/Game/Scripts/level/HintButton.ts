import mvcView from "../../../framework/ui/mvcView";
import IconSov from "../../../framework/extension/weak_net_game/IconSov";
import { evt } from "../../../framework/core/event";
import Platform from "../../../framework/extension/Platform";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import WeakNetGame from "../../../framework/extension/weak_net_game/WeakNetGame";

let { ccclass, property } = cc._decorator

// const Hint_Level_Table = {
//     [13]: 'r0954sbep28',
//     [17]: 'e0954mp3sjt',
//     [18]: 'u0954mcymrb',
// }

const COS_URL = "https://video-1256898079.cos.ap-guangzhou.myqcloud.com/";
@ccclass
export default class HintButton extends mvcView {

    @property(cc.Animation)
    hintAnim: cc.Animation = null

    onLoad() {
        this.registerSubViews(IconSov)
        this.onClick(this.node, this.click_hint);
        evt.on("Game.onLevelLoaded", this.onLevelChanged, this)
        // evt.on("Game.hintUser", this.onHintUser, this)
    }

    onDestroy() {
        evt.off(this)
    }

    start() {

    }

    isInHint = false;

    onHintUser() {
        // if (this.isInHint) return;
        // if (window.tt || window.qq) { return }
        // let lv_tb;
        // if (PlayerInfo.isPlayingDaily) {
        //     lv_tb = csv.daily_level.get(PlayerInfo.playingDailyLevel);
        // } else {
        //     lv_tb = csv.level.get(PlayerInfo.playinglevel);
        // }
        // if (lv_tb == null) return;
        // let hint_video = lv_tb.hint_video;
        // if (hint_video != "") {
        //     this.hintAnim && this.hintAnim.play("hint")
        //     this.isInHint = true
        // }
    }

    hint() {
        // let lv_tb = csv.level.get(PlayerInfo.playinglevel);
        // let lv_tb;
        // if (PlayerInfo.isPlayingDaily) {
        //     lv_tb = csv.daily_level.get(PlayerInfo.playingDailyLevel);
        // } else {
        //     lv_tb = csv.level.get(PlayerInfo.playinglevel);
        // }
        // let hint_video = lv_tb.hint_video;
        // let hint_video2 = COS_URL + lv_tb.hint_video2;
        // if (hint_video) {
        //     Platform.playVideo(hint_video, hint_video2).then(v => {
        //         this.isInHint = false;
        //         this.hintAnim.stop("hint");
        //     });
        // }
    }

    click_hint() {
        WeakNetGame.doChoice("SOV_Level_Hint", this.hint, this);
    }

    onLevelChanged(lv) {
        if (window.tt || window.qq) {
            this.node.active = false;
            return;
        }
        let lv_tb;
        if (PlayerInfo.isPlayingDaily) {
            lv_tb = csv.daily_level.get(lv);
        } else {
            lv_tb = csv.level.get(lv);
        }

        let hint_video = lv_tb.hint_video;
        if (hint_video) {
            this.node.active = true;
        } else {
            this.node.active = false;
        }
        this.render();
    }


    onShown() {
        // this.render

    }

}