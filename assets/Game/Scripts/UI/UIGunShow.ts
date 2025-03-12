import Thunder from "../Levels/Thunder"
import { evt } from "../../../framework/core/event";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import { Toast } from "../../../framework/ui/ToastManager";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import mvcView from "../../../framework/ui/mvcView";
import IconSov from "../../../framework/extension/weak_net_game/IconSov";
import WeakNetGame from "../../../framework/extension/weak_net_game/WeakNetGame";
import Switcher from "../../../framework/ui/controller/Switcher";
import Main from "../Main";

let { ccclass, property } = cc._decorator
@ccclass
export default class UIGunShow extends mvcView {

    @property(Thunder)
    thunder: Thunder;
    @property(dragonBones.ArmatureDisplay)
    skeleton_girl: dragonBones.ArmatureDisplay = null

    @property(dragonBones.ArmatureDisplay)
    skeleton_man: dragonBones.ArmatureDisplay = null

    @property(cc.Node)
    tips: cc.Node;


    @property(cc.Node)
    btn: cc.Node;

    @property(Switcher)
    switch: Switcher;

    onLoad() {
        this.registerSubViews(IconSov);
        this.registerSwitcher(this.switch, _ => this.showBtn());

    }

    showBtn() {

    }

    onShown() {
        this.playAnim();
        this.schedule(this.playAnim, 1.5);
        this.render();
    }

    async playAnim() {
        this.skeleton_man.playAnimation("idle", 0)
        this.skeleton_girl.playAnimation("gun_out", 1)
        await evt.sleep(0.5);
        this.skeleton_girl.playAnimation("gun", 1)
        this.thunder.node.active = true;
        this.thunder.play(this.skeleton_girl.node, this.skeleton_man.node, cc.v3(30, 80, 0))
        this.skeleton_man.playAnimation("dead_smoke", 1)
        await evt.sleep(0.5);
        this.thunder.node.active = false;
    }

    click_close() {
        vm.hide(this);
    }

    click_getGun() {
    }

    click_goto() {
        vm.hide(this);
        Main.instance.click_play()
    }

    onHidden() {
        this.thunder.node.active = false;
        this.unschedule(this.playAnim)
    }

}