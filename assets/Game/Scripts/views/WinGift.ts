import { PlayerInfo } from "../Common/Base/PlayerInfo"
import { evt } from "../../../framework/core/event";
import { EaseType } from "../../../framework/extension/qanim/EaseType";

let { ccclass, property } = cc._decorator
const STEP = 0.25;
@ccclass
export default class WinGift extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Sprite)
    progress: cc.Sprite = null;

    @property(cc.Node)
    node_bg: cc.Node = null;


    onLoad() {
        evt.on("UIProgressRewardGet.show", this.onShownReward, this)
    }

    onDestroy() {
        evt.off(this);
    }

    preAddProgress() {
        PlayerInfo.boxProgress += STEP;
        PlayerInfo.save("boxProgress")
    }

    postAddProgress() {
        if (PlayerInfo.boxProgress >= 1) {
            PlayerInfo.boxProgress = 0;
            this.showGift();
        }
    }

    onShownReward() {
        this.node_bg.opacity = 0;
    }

    showGift() {
        this.node_bg.opacity = 0;
        cc.tween(this.node_bg).to(1.0, { opacity: 255 }).start();
        cc.tween(this.node).to(1.0, { position: cc.v2(0, 0) }, { easing: "sineInOut" }).call(() => {
            this.node.setPosition(-1000, -10000)
            vm.show("Prefabs/UI/UIProgressReward")
        }).start();

    }

    show() {
        this.node.active = true;
        this.node_bg.opacity = 0;
        if (PlayerInfo.winStatus == 1 && this.shouldAddProgress()) {
            this.preAddProgress();
            this.updateProgress();
            this.postAddProgress();
        } else {
            this.updateProgress();
        }
    }

    hide() {
        this.node_bg.opacity = 0;
        this.node.active = false;
    }

    updateProgress() {
        let prev = PlayerInfo.boxProgress - STEP;
        prev = Math.max(0, prev);
        this.label.string = PlayerInfo.boxProgress * 100 + "%"
        this.progress.fillRange = prev;
        cc.tween(this.progress).to(0.5, { fillRange: PlayerInfo.boxProgress }).start();
    }

    shouldAddProgress() {
        if (PlayerInfo.winStatus == -1) return;
        if (PlayerInfo.isPlayingDaily) {
            if (PlayerInfo.playingDailyLevel == PlayerInfo.dailylevel) {
                return true;
            }
            return false;
        }
        if (PlayerInfo.playinglevel == PlayerInfo.level) {
            // add progress 
            return true;
        }
        return false;
    }


}