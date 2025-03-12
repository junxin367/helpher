
import mvcView from "../../../framework/ui/mvcView";
import Signal from "../../../framework/core/Signal";
import ccUtil from "../../../framework/utils/ccUtil";
import { TurntableInfo } from "../Common/TurntableInfo";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import { DrawType } from "./UILucky";
import { Toast } from "../../../framework/ui/ToastManager";
import { evt } from "../../../framework/core/event";
import display from "../../../framework/misc/display";


const { ccclass, property } = cc._decorator;


@ccclass
export default class UIGetLucky extends mvcView {

    @property(cc.Node)
    node_close: cc.Node = null;

    @property(cc.Layout)
    layout: cc.Layout = null;

    item_id = 0;

    _closeSignal = new Signal();

    datas: TurntableInfo[] = [];

    onLoad() {
        this.register(this.layout, _ => this.datas);
    }

    onShown(id, closeCallback, target, doubleEnabled) {
        this._closeSignal.on(closeCallback, this);
        this.item_id = id;

        this.datas.splice(0);
        let data = ccUtil.get(TurntableInfo, id);
        if (data.type === DrawType.Gift) {
            csv.turntable.values.filter(_ => {
                return DrawType.Gun === _.type || DrawType.Frozen === _.type || DrawType.Magnet === _.type;
            }).forEach(_ => {
                let d = ccUtil.get(TurntableInfo, _.id);
                d.num = 1;
                this.datas.push(d);
            });
        } else {
            this.datas.push(data);
        }
        this.render();
    }

    click_no() {
        let data = ccUtil.get(TurntableInfo, this.item_id);
        vm.hide(this);
        if (this.item_id === 1 || this.item_id === 3) {
            PlayerInfo.addLabour(data.num);
            evt.emit("Game.getTili", display.center, data.num);
        }
    }

    onHidden() {
        let data = ccUtil.get(TurntableInfo, this.item_id);
        if (this.item_id !== 1 && this.item_id !== 3) {
            this._closeSignal.fire(data);
        } else {
            this.scheduleOnce(_ => this._closeSignal.fire(data), 1);
        }
    }
}
