import ccUtil from "../../../framework/utils/ccUtil";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import gameUtil from "../../../framework/utils/gameUtil";
import WeakNetGame from "../../../framework/extension/weak_net_game/WeakNetGame";
import { evt } from "../../../framework/core/event";
import mvcView from "../../../framework/ui/mvcView";
import mathf from "../../../framework/utils/mathf";
import display from "../../../framework/misc/display";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import { Toast } from "../../../framework/ui/ToastManager";
import actionUtil from "../../../framework/utils/actionUtil";
import Main from "../Main";

const { ccclass, property } = cc._decorator;

export interface SignData {
    day: number;
    imageUrl: string;
    iconLoop: string;
    num: number;
    type: number;
    typeLoop: number;
    btnString: string;
    btnLoopString: string;
}

class DayNode {
    label_title: cc.Label = null;
    icon: cc.Sprite = null;
    label_num: cc.Label = null;
    node_claimed: cc.Node = null;
    public constructor(node: cc.Node) {
        this.label_title = ccUtil.find("title", node, cc.Label)
        this.icon = ccUtil.find("icon", node, cc.Sprite);
        this.label_num = ccUtil.find("num", node, cc.Label);
        this.node_claimed = node.getChildByName("claimed")
    }

    setData(data: SignData, claimed: boolean, isloop: boolean = false) {
        this.node_claimed.active = claimed;
        if (isloop) {
            data.imageUrl = data.iconLoop;
        }
        if (data.imageUrl)
            ccUtil.setDisplay(this.icon, data.imageUrl);
        this.label_title.string = '第' + data.day + "日"
        if (this.label_num) {
            this.label_num.string = 'x' + data.num;
        }
    }
}

/**
 * csv 表头
 * 
天数	奖励内容	奖励数量	图标
day	reward	number	icon
int	string	int	string
1	gold	200	gold

    (DC)PlayerInfo 
        -CheckInTime  签到时间 
        -CheckInCount 签到次数
    
    UI  预置体说明：
     * dayCotainer
     *  - day
     *      -title
     *      -icon
     *      -num
     *      -claimed
 */


@ccclass
export default class UISign extends mvcView {

    @property(cc.Node)
    dayContainer: cc.Node = null;
    days: DayNode[] = []
    daysData: SignData[] = []
    @property(cc.Toggle)
    toggle: cc.Toggle = null

    @property(cc.Label)
    btnstring_label: cc.Label = null

    @property(cc.Label)
    seven_label: cc.Label = null

    @property(cc.Button)
    btn_claim: cc.Button = null;

    @property(cc.Node)
    claimedTip_label: cc.Node = null;

    @property(cc.Node)
    claimedTip: cc.Node = null;

    @property(cc.Node)
    icon_ad: cc.Node = null;

    isLoop: boolean = false;

    onLoad() {
        this.dayContainer.children.forEach(v => {
            let dayNode = new DayNode(v)
            this.days.push(dayNode)
        });
        csv.Sign.values.forEach((v, i) => {
            this.daysData.push({ type: v.type, day: i + 1, imageUrl: v.icon, num: v.number, btnString: v.btnString, iconLoop: v.iconLoop, typeLoop: v.typeLoop, btnLoopString: v.btnLoopString } as SignData)
        })
        this.register(this.btn_claim, this.click_checkIn);
        this.icon_ad.active = false;
    }

    onShown() {
        actionUtil.jellyJump2(this.node);
        let c = 0;
        if (PlayerInfo.signCount >= 7) {
            this.isLoop = true;
        }
        for (var i = 0; i < this.days.length; i++) {
            let day = i;
            let dayNode = this.days[i];
            let claimed = day < mathf.Repeat(PlayerInfo.signCount, 7);
            c = claimed ? c + 1 : c;
            dayNode.setData(this.daysData[i], claimed, this.isLoop);
        }
        //全部领取完毕
        if (c == this.days.length) {
            // this.btn_claim.node.active = false;
            // ccUtil.setButtonEnabled(this.btn_claim, false);
            this.btn_claim.node.active = false;
            this.claimedTip.active = false;
            this.claimedTip_label.active = true;
            return;
        }
        let day = mathf.Repeat(PlayerInfo.signCount, 7)
        let data = this.daysData[day];
        if (this.isLoop) {
            this.btnstring_label.string = data.btnLoopString;
            this.seven_label.node.active = false;
        }
        else {
            this.btnstring_label.string = data.btnString;
        }
        this.updateStatus()
    }
    updateStatus(day?) {
        if (gameUtil.isNextDay(PlayerInfo.signTime)) {
            //可领取
            // ccUtil.setButtonEnabled(this.btn_claim, true);
            this.btn_claim.node.active = true;
            this.claimedTip.active = false;
            this.claimedTip_label.active = true;
        } else {
            //已领取
            // ccUtil.setButtonEnabled(this.btn_claim, false);
            this.btn_claim.node.active = false;
            this.claimedTip.active = true;
            this.claimedTip_label.active = false;
        }
        if (day) {
            let dayNode = this.days[day];
            let data = this.daysData[day];
            dayNode.setData(data, day < mathf.Repeat(PlayerInfo.signCount, 7), this.isLoop);
        }
    }


    check_double() {
        this.icon_ad.active = this.toggle.isChecked;
    }


    //签到  
    click_checkIn() {
        if (this.toggle.isChecked) {

            WeakNetGame.doChoice("SOV_Sign_Double", this.claimDouble, this);
        } else {
            this.claim();
        }
        vm.hide(this)
    }

    claimDouble() {
        this.claim(2);
        vm.hide(this)
    }


    ////////////////////////////////////////////////////////////////
    // 领取第n天的奖励
    claim(mult = 1) {
        let day = mathf.Repeat(PlayerInfo.signCount, 7);
        Main.instance.qiandao_hongdian.active = false;
        PlayerInfo.signTime = Date.now();
        PlayerInfo.signCount++;
        PlayerInfo.save();
        let data = this.daysData[day];
        if (this.isLoop) {
            data.type = data.typeLoop;
        }
        if (data.type == 1) {
            PlayerInfo.labour += (data.num * mult);
            evt.emit("Game.getTili", display.center, (data.num * mult))
        }
        else if (data.type == 2) {
            UserInfo.gun_num += (data.num * mult);
            UserInfo.snowball_num += (data.num * mult);
            UserInfo.magnet_num += (data.num * mult);
            Toast.make("恭喜获得道具礼包");
            UserInfo.save();
        }
        else {
            PlayerInfo.unlockSkin(13);
            Toast.make("恭喜获得限定皮肤");
        }
        // evt.emit("UICheckIn.getReward", data, mult)
        this.updateStatus(day);
    }
    ////////////////////////////////////////////////////////////////
    click_close() {
        vm.hide(this);
    }
}

