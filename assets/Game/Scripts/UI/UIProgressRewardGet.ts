import { PlayerInfo } from "../Common/Base/PlayerInfo";
import { Toast } from "../../../framework/ui/ToastManager";
import ccUtil from "../../../framework/utils/ccUtil";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import Platform from "../../../framework/extension/Platform";
import WeakNetGame from "../../../framework/extension/weak_net_game/WeakNetGame";
import actionUtil from "../../../framework/utils/actionUtil";
import { evt } from "../../../framework/core/event";

let { ccclass, property } = cc._decorator
@ccclass
export default class UIProgressRewardGet extends cc.Component {

    @property(cc.Label)
    title: cc.Label = null

    @property(cc.Label)
    title2: cc.Label = null;

    @property(cc.Sprite)
    icon: cc.Sprite = null;


    @property(cc.Node)
    videoIcon: cc.Node = null;

    @property(cc.Node)
    node_no: cc.Node = null;


    type: string = '';

    skin_id: number = 0;

    onLoad() {

    }

    start() {

    }

    onShown(type, cfg) {
        evt.emit("UIProgressRewardGet.show")
        actionUtil.jellyJump2(this.node);
        this.type = type;
        this.videoIcon.active = false;
        this.node_no.active = false
        if (type == "Energy") {
            this.title.string = '体力礼包'
            ccUtil.setDisplay(this.icon, 'Img/icon/tili')
            this.title2.string = '体力x3';
        } else if (type == 'Skin') {
            //随机皮肤
            this.skin_id = PlayerInfo.randomVideoSkin()

            this.title.string = '新皮肤'
            this.videoIcon.active = true;
            let skin = csv.Skin.get(this.skin_id)
            this.title2.string = skin.name;
            ccUtil.setDisplay(this.icon, "Img/skin/thumbnail/" + skin.type + "/" + skin.thumbnail)
            this.unschedule(this.show_no)
            this.scheduleOnce(this.show_no, 1)

        } else if (type == 'Prop') {
            // Toast.make("获得道具大礼包")
            this.title.string = '道具礼包'
            ccUtil.setDisplay(this.icon, 'Img/icon/xianding')
            this.title2.string = '三种道具数量 +1';
        }


    }

    show_no() {
        this.node_no.active = true;
    }

    unlockSkin() {
        if (this.skin_id != 0) {
            let skin = csv.Skin.get(this.skin_id);
            Toast.make("获得皮肤 : " + skin.name)
            PlayerInfo.unlockSkin(this.skin_id)
        }
    }

    click_get() {
        if (this.type == 'Skin') {
            WeakNetGame.doChoice("SOV_ProgressReward_Skin", this.unlockSkin, this)
        } else if (this.type == 'Energy') {
            Toast.make("获得体力x3")
            PlayerInfo.labour += 3;
            PlayerInfo.save("labour")
        } else if (this.type == 'Prop') {
            Toast.make("获得道具大礼包 ");
            UserInfo.gun_num++;
            UserInfo.snowball_num++;
            UserInfo.magnet_num++;
            UserInfo.save()
        }
        vm.hide(this);
    }

    click_no() {
        vm.hide(this);
    }


} 