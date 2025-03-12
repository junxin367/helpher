import mvcView from "../../../framework/ui/mvcView";
import { wxsdk } from "../../../framework/extension/wxsdk/sdk";
import { Toast } from "../../../framework/ui/ToastManager";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import WeakNetGame from "../../../framework/extension/weak_net_game/WeakNetGame";
import { Api } from "../Common/Base/ServerConfig";
import Net from "../../../framework/misc/Net";


const { ccclass, property } = cc._decorator;

@ccclass
export default class UICustomer extends mvcView {
    @property(cc.Node)
    btn_close: cc.Node = null;



    callback: Function;

    isSuccess: boolean = false;

    onLoad() {
        this.onClick(this.btn_close, _ => this.click_close());
    }
    onShow(callback) {
        this.callback = callback;
        this.render();
    }

    click_close() {
        vm.hide(this);
    }

    click_customer() {
        UserInfo.tmpIskf = false;
        wxsdk.openCustomerServiceConversation(_ => {
            // Toast.make("成功");
            UserInfo.tmpIskf = true;
            if(CC_DEBUG){
                UserInfo.isKf = true;
                UserInfo.kfTime = Date.now();
                UserInfo.save()
            }
            vm.hide(this);
        }, _ => {
            // Toast.make("失败");
        })
    }

}
