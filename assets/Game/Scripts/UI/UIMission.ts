import Signal from "../../../framework/core/Signal";
import mvcView from "../../../framework/ui/mvcView";
import actionUtil from "../../../framework/utils/actionUtil";
import Game from "../Game";

let { ccclass, property } = cc._decorator


@ccclass
export default class UIMission extends mvcView {

    @property(cc.Label)
    label: cc.Label = null;

    onLoad() {

    }

    onShown(text) {
        actionUtil.jellyJump2(this.node);
        this.label.string = text;
    }


    click_close() {
        vm.hide(this)
    }

    onHidden() {
        Game.instance.startGame();
    }

}