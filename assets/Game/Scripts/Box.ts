import SkeletonBase from "./SkeletonBase";
import { evt } from "../../framework/core/event";
import ccUtil from "../../framework/utils/ccUtil";
import { Toast } from "../../framework/ui/ToastManager";
import Device from "../../framework/misc/Device";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Box extends SkeletonBase {

    @property(cc.Node)
    ani_node: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    open_status: boolean = false;

    isover: boolean = false;

    onLoad() {
    }

    start() {

    }

    onBeginContact() {
        if (this.node.name == "box") {
            if (this.isover) {
                return;
            }
            this.isover = true;
            this.onOpenBox();
        }
        else {
            this.onOpenjiaBox();
        }
    }

    async onOpenBox() {
        this.ani_node.active = true;
        await evt.sleep(1)
        Device.playSfx("open-box")
        vm.show("Prefabs/UI/UIBoxAward");
    }

    onOpenjiaBox() {
        if (this.open_status) return;
        let spr = this.node.getComponent(cc.Sprite)
        ccUtil.setDisplay(spr, "Img/" + spr.spriteFrame.name + "_kong");
        this.open_status = true;
        Toast.make("可惜。。。箱子是空的");
    }

    onDestroy() {
        evt.off(this);
    }

    // update (dt) {}
}
