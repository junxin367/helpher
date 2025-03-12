import Thunder from "../Levels/Thunder"
import { evt } from "../../../framework/core/event";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import { Toast } from "../../../framework/ui/ToastManager";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import mvcView from "../../../framework/ui/mvcView";
import IconSov from "../../../framework/extension/weak_net_game/IconSov";
import WeakNetGame from "../../../framework/extension/weak_net_game/WeakNetGame";
import { PropInfo } from "../Common/PropInfo";
import ccUtil from "../../../framework/utils/ccUtil";

let { ccclass, property } = cc._decorator
@ccclass
export default class UIGetGun extends mvcView {

    @property(cc.Sprite)
    icon: cc.Sprite = null;

    @property(cc.Label)
    label_name: cc.Label = null;

    @property(cc.Label)
    label_desc: cc.Label = null;

    callback: any;
    scene_label: string = "";

    data: PropInfo = null;
    
    propList: object = {
        1: "gun_num",
        2: "snowball_num",
        3: "magnet_num"
    }

    onLoad() {
        this.registerSubViews(IconSov);
        this.register(this.label_name, _ => this.data.name);
        this.register(this.icon, _ => this.data.icon);
        this.register(this.label_desc, _ => this.data.desc);

    }

    onShown(callback, str) {
        this.callback = callback;
        this.scene_label = str;
        UserInfo.gunView++;
        UserInfo.save("gunView");
        UserInfo.gunViewDay++;
        UserInfo.save("gunViewDay");

        let num = g.randomInt(1, 4);
        this.data = ccUtil.get(PropInfo, num);
        this.render();
    }


    click_close() {
        vm.hide(this);
    }

    click_getGun() {
        WeakNetGame.doChoice("Start_Get_Gun", _ => {
            // if (UserInfo.gun_num > 0) {
            //     Toast.make("枪的数量已达上限")
            //     return;
            // }
            UserInfo[this.propList[this.data.id]] += 1;
            UserInfo[this.scene_label] = true;
            UserInfo.save();
            Toast.make("已领取" + this.data.name);
            vm.hide(this);
        }, this)
    }

    onHidden() {
        this.callback && this.callback();
    }


}