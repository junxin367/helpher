// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import mvcView from "../../../framework/ui/mvcView";
import { PropInfo } from "../Common/PropInfo";
import WeakNetGame from "../../../framework/extension/weak_net_game/WeakNetGame";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import { Toast } from "../../../framework/ui/ToastManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIPropItem extends mvcView {

    @property(cc.Label)
    desc_label: cc.Label = null;

    @property(cc.Label)
    count_label: cc.Label = null;


    @property(cc.Sprite)
    icon: cc.Sprite = null;

    @property(cc.Node)
    btn_get: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:
    data: PropInfo = null;

    propList: object = {
        1: "gun_num",
        2: "snowball_num",
        3: "magnet_num"
    }

    onLoad() {
        this.register<PropInfo>(this.desc_label, _ => _.desc);
        this.register<PropInfo>(this.icon, _ => _.icon);
    }

    start() {
        this.data = this.getData() as PropInfo;
        this.count_label.string = UserInfo[this.propList[this.data.id]];
    }

    click_get() {
        WeakNetGame.doChoice("SOV_GetPropItem", _ => {
            UserInfo[this.propList[this.data.id]] += 2;
            Toast.make("已领取" + this.data.name);
            this.count_label.string = UserInfo[this.propList[this.data.id]];
            UserInfo.save();
        }, this)
    }

    // update (dt) {}
}
