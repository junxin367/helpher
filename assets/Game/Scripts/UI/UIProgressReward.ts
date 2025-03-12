import Box from "../Box";
import { Toast } from "../../../framework/ui/ToastManager";
import { PlayerInfo } from "../Common/Base/PlayerInfo";

let { ccclass, property } = cc._decorator

const BoxConfig = {
    Skin: { percent: 45 },// random skin 
    Energy: { percent: 30, num: 3 },
    Prop: { percent: 25 } //1,2,3
}

@ccclass
export default class UIProgressReward extends cc.Component {

    @property(cc.Node)
    layout: cc.Node = null;

    pool: string[] = []

    onLoad() {

    }

    once = true;
    onShown() {
        this.once = true;
        this.layout.children.forEach(v => v.getChildByName("box")!.active = false)
        this.pool.splice(0)
        if (!PlayerInfo.isAllSkinUnlocked()) {
            for (let k in BoxConfig) {
                let v = BoxConfig[k]
                for (let i = 0; i < v.percent; i++) {
                    this.pool.push(k)
                }
            }
        }
    }

    click_box(sender, msg) {
        if (!this.once) return;
        this.once = false;
        let id = parseInt(msg);
        let box = this.layout.children[id];
        let fx = box.getChildByName("box")
        fx.active = true;
        let display = fx.getComponent(dragonBones.ArmatureDisplay)
        display.playAnimation("open", 1)
        // open box 
        this.scheduleOnce(this.openBox, 0.5);
    }

    openBox() {
        let k = 'Energy'
        if (this.pool.length > 0) {
            k = g.getRandom(this.pool)
        } else {
            if (Math.random() > 0.5) {
                k = 'Prop'
            }
        }
        let cfg = BoxConfig[k];
        vm.show("Prefabs/UI/UIProgressRewardGet", k, cfg)
        this.scheduleOnce(this.hide, 1)
    }

    hide() {
        vm.hide(this)
    }
}