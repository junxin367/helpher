
import mvcView from "../../../framework/ui/mvcView";
import { TurntableInfo } from "../Common/TurntableInfo";
import ccUtil from "../../../framework/utils/ccUtil";


const { ccclass, property } = cc._decorator;


@ccclass
export default class UIGetLuckyItem extends mvcView {

    @property(cc.Label)
    tiliLabel: cc.Label = null;

    @property(cc.Sprite)
    icon: cc.Sprite = null;


    onLaterRender() {
        let data = this.getData() as TurntableInfo;

        this.tiliLabel.string = `${data.content}x${data.num}`;
        ccUtil.setDisplay(this.icon, data.path);
    }
    
}
