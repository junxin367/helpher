import { evt } from "../../../framework/core/event"
import { PlayerInfo } from "../Common/Base/PlayerInfo";

let { ccclass, property } = cc._decorator
@ccclass
export default class Guide5 extends cc.Component {

    onLoad() {
        evt.on("Game.onStarted", this.onGameStarted, this)
    }

    onDestroy() {
        evt.off(this);
    }


    close() {
        this.node.active = false;
    }

    onGameStarted() {
        if (PlayerInfo.isguided_badman) {
            return;
        }
        PlayerInfo.isguided_badman = true;
        this.node.active = true;
    }

    start() {
        this.node.active = false
    }

}