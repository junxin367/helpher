import mvcView from "../../../framework/ui/mvcView";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import { PlayerInfo } from "../Common/Base/PlayerInfo";


const { ccclass, property } = cc._decorator;

@ccclass
export default class UICollection extends mvcView {
    @property(cc.Node)
    btn_close: cc.Node = null;

    @property(cc.Node)
    btn_claim: cc.Node;

    @property(cc.Node)
    btn_sidebar: cc.Node = null;



    callback: Function;

    type:string;


    onLoad() {
        this.onClick(this.btn_close, _ => this.click_close());
        this.onClick(this.btn_sidebar, _ => this.click_sidebar());
        this.onClick(this.btn_claim, _ => this.click_claim());
        this.onVisible(this.btn_claim, ()=> !PlayerInfo.isFavClaimed && this.type == "claim")
        this.onVisible(this.btn_claim, ()=> this.type == "sidebar")
    }
    onShow(type:string) {
        this.type = type;
        this.render();
    }

    click_close() {
        vm.hide(this);
    }


    click_claim() {
        PlayerInfo.claimFav();
        this.render();
    }

    click_sidebar(){
        tt.navigateToScene({
            scene: "sidebar",
            success: (res) => {
                console.log("navigate to scene success");
                // 跳转成功回调逻辑
            },
            fail: (res) => {
                console.log("navigate to scene fail: ", res);
                // 跳转失败回调逻辑
            },
        });
    }
}
