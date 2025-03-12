import mvcView from "../../../framework/ui/mvcView";
import { wxsdk } from "../../../framework/extension/wxsdk/sdk";
import { Toast } from "../../../framework/ui/ToastManager";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import WeakNetGame from "../../../framework/extension/weak_net_game/WeakNetGame";
import { Api } from "../Common/Base/ServerConfig";
import Net from "../../../framework/misc/Net";
import { Code } from "../Common/code";
import { evt } from "../../../framework/core/event";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UISubscriber extends mvcView {
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

    click_subscriber() {
        wxsdk.requestSubscribeMessage().then(v => this.notifyServer()).catch(v => {
            Toast.make("订阅失败!")
        })
    }

    notifyServer() {
        //ids 所有接受的 模板id
        vm.hide(this);
        WeakNetGame.client.httpGet(Api.subscribe).then(v => {
            if (v == Net.Code.Timeout) {
                console.log("连接超时！")
            } else {
                if (v) {
                    let d = JSON.parse(v);
                    if (d.errno == 0) {
                        d = d.data
                        console.log("返回数据", d);
                        //根据返回数据做对应逻辑处理
                        Toast.make("订阅成功")
                        UserInfo.isDy = true;
                        UserInfo.save();
                        vm.show("Prefabs/UI/UIGetSuccess", csv.Config.Subscriber_Success);
                    } else {
                        console.log("返回错误码" + d.errno);
                        if (d.errno == Code.Subscribe_ERROR) {
                            Toast.make(d.errmsg);
                            UserInfo.isDy = true;
                            UserInfo.save();
                        }
                    }
                } else {

                }
            }
        })
    }

}
