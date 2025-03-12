import ccUtil from "../../../framework/utils/ccUtil";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import { EaseType } from "../../../framework/extension/qanim/EaseType";
import { evt } from "../../../framework/core/event";

let { ccclass, property } = cc._decorator
@ccclass
export default class UIFreeProp extends cc.Component {

    @property(cc.Node)
    itemLayout: cc.Node = null;

    @property(cc.Node)
    dialog: cc.Node = null

    @property(cc.Node)
    particle: cc.Node = null;

    @property(cc.Node)
    iconNode: cc.Node = null;

    @property(cc.Button)
    btn_get: cc.Button = null;

    @property(cc.Node)
    node_btn_close: cc.Node = null;

    hideCallback: Function;

    onLoad() {
        this.node_btn_close.active = false
    }

    onShown(callback) {
        this.hideCallback = callback;
        let pos = this.itemLayout.position;
        this.dialog.active = false;
        this.itemLayout.setPosition(0, 0)
        this.itemLayout.scale = 0;
        cc.tween(this.itemLayout)
            .to(0.5, { scale: 1 }, { easing: "backInOut" })
            .delay(1.0)
            .to(0.5, { position: pos }, { easing: "sineInOut" })
            .call(() => {
                this.dialog.active = true;
                this.dialog.scale = 0;
                cc.tween(this.dialog).to(0.5, { scale: 1 }, { easing: "sineInOut" }).start()
            })
            .start();
    }

    res_names = ["snowball_num", "magnet_num", "gun_num"]

    async click_get() {
        this.btn_get.interactable = false;
        let children = this.itemLayout.children;
        for (let i = 0; i < 3; i++) {
            let child = children[i];
            await ccUtil.playFlyCoin(this.particle, child, ccUtil.getWorldPosition(this.iconNode), ccUtil.getWorldPosition(child), { num: 1, dur: 0.8 });
            UserInfo.addData(this.res_names[i], 3, true);
            cc.tween(child).to(0.2, { scale: 1.3 }).to(0.1, { scale: 1 }).start();
        }
        this.node_btn_close.active = true;
    }

    click_close() {
        vm.hide(this);
    }

    onHidden() {
        if (this.hideCallback)
            this.hideCallback.call(this);
    }
}