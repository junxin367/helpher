import mvcView from "../../../framework/ui/mvcView";
import Switcher from "../../../framework/ui/controller/Switcher";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import { wxsdk } from "../../../framework/extension/wxsdk/sdk";
import { GameConfig } from "../../../framework/extension/wxsdk/GameConfigs";
import WeakNetGame from "../../../framework/extension/weak_net_game/WeakNetGame";
import { Api } from "../Common/Base/ServerConfig";
import { Toast } from "../../../framework/ui/ToastManager";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import Net from "../../../framework/misc/Net";
import { evt } from "../../../framework/core/event";
import { Code } from "../Common/code";


const { ccclass, property } = cc._decorator;
enum BtnState {
    Red,    //去邀请
    Blue,    //领取
}
@ccclass
export default class UIFreeGetLabour extends mvcView {
    @property(cc.Node)
    btn_close: cc.Node = null;

    @property(Switcher)
    switcher_yaoqin: Switcher = null;

    @property(Switcher)
    switcher_subscriber: Switcher = null;

    @property(Switcher)
    switcher_kefu: Switcher = null;

    @property(Switcher)
    switcher_shoucang: Switcher = null;

    callback: Function;


    onLoad() {
        this.registerSwitcher(this.switcher_yaoqin, _ => 0);
        this.registerSwitcher(this.switcher_subscriber, _ => UserInfo.isDy ? 1 : 0);
        this.registerSwitcher(this.switcher_kefu, _ => UserInfo.isKf ? 1 : 0);
        this.registerSwitcher(this.switcher_shoucang, _ => UserInfo.isSc ? 1 : 0);
        evt.on("View.onHidden", this.onViewHidden, this);
        evt.on("UserInfo.isKf", this.render, this);
        evt.on("UserInfo.isDy", this.render, this);

    }
    onShow() {
        this.render();
    }

    onViewHidden(view) {
        // console.log(view.node.name)
        if (view.node.name == "UIGetSuccess") {
            // console.log("是否领取过客服奖励",UserInfo.isGetKf);
            this.render();
        }
    }

    click_close() {
        vm.hide(this);
    }

    click_yaoqin(ev, state) {
        if (state == BtnState.Red) {
            // 去邀请 
            vm.show("Prefabs/UI/UIFriendHelp");
        } else if (state == BtnState.Blue) {
            // 点击领取
        } else {
            // 已经领取装
            console.log("有问题")
        }
    }

    click_subscriber(ev, state) {
        if (state == BtnState.Red) {
            // let self= this;
            // wxsdk.requestSubscribeMessage(_=>{
            //     Toast.make("订阅成功")
            //     UserInfo.isDy = true;
            //     UserInfo.DyTime = Date.now();
            //     // UserInfo.save();
            //     // this.render();
            //     vm.show("Prefabs/UI/UIGetSuccess",csv.Config.Subscriber_Success,_=>{
            //         UserInfo.isGetDy = true; 
            //         self.render();
            //     });
            // },_=>{
            //     Toast.make("订阅已取消")
            // },(d)=>{
            //     if(d.errno == Code.Subscribe_ERROR){
            //         Toast.make(d.errmsg);
            //         UserInfo.isDy = true;
            //         UserInfo.isGetDy = true;
            //         self.render();
            //     }
            // })
            vm.show("Prefabs/UI/UISubscriber", _ => this.render());
        } else if (state == BtnState.Blue) {
            // 点击领取 订阅成功奖励2点体力
            this.render();
            vm.show("Prefabs/UI/UIGetSuccess", csv.Config.Subscriber_Success);
        } else {
            // 已经领取装
            console.log("有问题")
        }
    }

    click_kefu(ev, state) {
        if (state == BtnState.Red) {
            // 去邀请
            vm.show("Prefabs/UI/UICustomer", _ => this.render());
        } else if (state == BtnState.Blue) {
            // 点击领取
            UserInfo.isGetKf = true;
            // this.switcher_kefu.index = 2;
            this.render();
            vm.show("Prefabs/UI/UIGetSuccess", csv.Config.Customer_Success);
        } else {
            // 已经领取装
            console.log("有问题")
        }
    }


    click_shoucang(ev, state) {
        if (state == BtnState.Red) {
            // 去邀请
            vm.show("Prefabs/UI/UICollection", _ => this.render());
        } else if (state == BtnState.Blue) {
            // 点击领取
            vm.show("Prefabs/UI/UIGetSuccess", csv.Config.Collection_Success, _ => {
                //对应领取成功的回调 按钮状态改变 
                UserInfo.isGetSc = true;
                // this.switcher_shoucang.index = 2;
                this.render();
            });
        } else {
            // 已经领取装
            console.log("有问题")
        }
    }

    onDestroy() {
        evt.off(this);
    }

}
