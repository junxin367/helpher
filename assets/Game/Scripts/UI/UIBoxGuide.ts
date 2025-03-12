import mvcView from "../../../framework/ui/mvcView";
import Game from "../Game";

let { ccclass, property } = cc._decorator


@ccclass
export default class UIMission extends mvcView {

    @property(cc.Label)
    label: cc.Label = null;

    onLoad() {

    }

    onShown(text?) {
        // actionUtil.jellyJump2(this.node);
        text && (this.label.string = text);
    }


    click_close() {
        vm.hide(this)
    }

    onHidden() {
        Game.instance.startGame();
    }

}