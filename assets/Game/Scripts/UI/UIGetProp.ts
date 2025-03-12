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
import { PropInfo } from "../Common/PropInfo";
import ccUtil from "../../../framework/utils/ccUtil";
import { ChapterlInfo } from "../Common/ChapterlInfo";
import Const from "../Common/Const";
import actionUtil from "../../../framework/utils/actionUtil";

let { ccclass, property } = cc._decorator
@ccclass
export default class UIGetProp extends mvcView {

    @property(cc.Layout)
    layout: cc.Layout;

    @property(cc.Sprite)
    title_sprite: cc.Sprite;

    propsData: PropInfo[] = [];

    onLoad() {
        this.register(this.layout, _ => this.propsData);
        this.propsData = csv.Prop.values.map(e => {
            let data = ccUtil.get(PropInfo, e.id);
            if (data.id <= Const.Chapter_Unlock + 1)
                return data;
        });
        this.render();
    }


    onShow(num?) {
        actionUtil.jellyJump2(this.node);
    }


    click_close() {
        vm.hide(this);
    }

    onHidden() {

    }

}