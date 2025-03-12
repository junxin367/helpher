
import mvcView from "../../../framework/ui/mvcView";
import { SettingInfo } from "../../../framework/extension/weak_net_game/SettingInfo";
import Device from "../../../framework/misc/Device";
import { Toast } from "../../../framework/ui/ToastManager";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import Common from "../../../framework/utils/actionUtil";
import ccUtil from "../../../framework/utils/ccUtil";
import { TurntableInfo } from "../Common/TurntableInfo";
import FrameSwitcher from "../../../framework/misc/FrameSwitch";
import Platform from "../../../framework/extension/Platform";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import Main from "../Main";
import { evt } from "../../../framework/core/event";

const { ccclass, property } = cc._decorator;

export enum DrawType {
    FreeOnce = 1,
    TiLi,
    Gift,
    Gun,
    Skin,
    Frozen,
    Magnet
}

@ccclass
export default class UILucky extends mvcView {

    @property(cc.Sprite)
    wheelSp: cc.Sprite = null;

    @property([cc.Sprite])
    sprites: cc.Sprite[] = [];

    @property([cc.Label])
    labels: cc.Label[] = [];

    @property(cc.Button)
    btn_draw: cc.Button = null;

    @property(FrameSwitcher)
    switcherTip: FrameSwitcher = null;

    @property(FrameSwitcher)
    switcherTxt: FrameSwitcher = null;

    @property(cc.Node)
    videoIcon: cc.Node = null;

    @property(cc.Button)
    drawBtn: cc.Button = null;

    _canRotate = true;

    pool = [];

    _oneMore = false; // 再转一次

    skinId = 0;  //视频皮肤id

    onLoad() {
        this.skinId = PlayerInfo.randomVideoSkin();
        csv.turntable.values.map((_, i) => {
            let data = ccUtil.get(TurntableInfo, _.id);
            for (var j = 0; j < data.chance * 200; j++) {
                if (this.skinId === 0 && data.type === DrawType.Skin) {
                    this.pool.push(7); // 限定皮肤用完换成再转一次
                } else {
                    this.pool.push(i + 1);
                }
            }
        });
        g.shuffle(this.pool);
        console.log(this.pool);

        this.flashLight();
    }

    onShown() {
        Common.jellyJump2(this.node, 0.8, 1);

        csv.turntable.values.map((_, i) => {
            let data = ccUtil.get(TurntableInfo, _.id);
            this.labels[i].string = data.text;
            let icon = this.sprites[i];
            ccUtil.setDisplay(icon, data.path);
        });

        this.refreshView();
    }

    share_succ() {
        this.startDraw();
    }

    click_draw() {
        if (!this._canRotate) {
            Toast.make('正在给您挑选奖品...');
            return
        }
        if (g.isNextDay(UserInfo.freedrawTime)) {
            evt.emit('UILucky.redPoint');
            UserInfo.freedrawTime = new Date().getTime();
            Main.instance.zhuanpan_hongdian.active = false;
            UserInfo.save();
            this.share_succ();
        } else {
            if (this.videoIcon.active) {
                Platform.watch_video(this.startDraw, this);
            } else {
                this.startDraw();
            }
        }
    }

    startDraw() {
        let id = g.getRandomInArray(this.pool);
        this.startWheel(id);

        Device.playSfx("draw");
    }

    calculateAngle(index: number) {//奖品的index从0开始
        let angle = 4 * 360 + index * 45 - 23;
        return angle;
    }

    refreshView() {
        if (g.isGreaterDate(new Date(), new Date(UserInfo.freedrawTime))) {
            //free draw 
            this.switcherTip.index = 0;
            this.switcherTxt.index = 0;
            this.videoIcon.active = false;
        } else {
            this.switcherTip.index = 1;
            this.switcherTxt.index = 1;
            this.videoIcon.active = true;
        }

        if (this._oneMore) {
            this.switcherTxt.index = 0;
            this.videoIcon.active = false;
        }
    }

    flashLight() {
        let lights = this.wheelSp.node.children.filter(_ => _.name === 'guang');
        cc.tween(this.node).repeatForever(
            cc.tween(this.node).call(_ => {
                lights.forEach((_, i) => _.active = i % 2 === 0);
            }).delay(0.5).call(_ => {
                lights.forEach((_, i) => _.active = i % 2 === 1);
            }).delay(0.5)
        ).start();
    }

    startWheel(id) {
        console.log("target wheel:", id);
        let angle = this.calculateAngle(id);
        if (!this._canRotate) {
            Toast.make('正在给您挑选奖品...');
            return;
        }
        this._canRotate = false;
        this.drawBtn.interactable = false;

        this.wheelSp.node.rotation = 0;
        let stage3 = cc.rotateBy(Math.abs(angle / 400), angle);
        let callFunc = cc.callFunc(function () {
            this._canRotate = true;
            this._oneMore = false;
            this.showRes(id);
            this.refreshView();
            this.skinId = PlayerInfo.randomVideoSkin();
            this.drawBtn.interactable = true;
        }.bind(this));
        let sequence = cc.sequence(stage3, callFunc);
        this.wheelSp.node.runAction(sequence.easing(cc.easeQuadraticActionInOut()));
    }

    showRes(id) {
        let data = ccUtil.get(TurntableInfo, id);


        // 保存获得道具
        switch (data.type) {
            case DrawType.FreeOnce: // 再转一次
                this._oneMore = true;
                Toast.make(`获得${data.text}`);
                break;
            case DrawType.TiLi:
                this.getLuckyItem(id);
                // PlayerInfo.labour += data.num;
                // PlayerInfo.save();
                break;
            case DrawType.Gift: // 礼包
                UserInfo.gun_num += data.num;
                UserInfo.snowball_num += data.num;
                UserInfo.magnet_num + data.num;
                this.getLuckyItem(id);
                break;
            case DrawType.Gun:
                UserInfo.gun_num += data.num;
                this.getLuckyItem(id);
                break;
            case DrawType.Frozen: // 冻结
                UserInfo.snowball_num += data.num;
                this.getLuckyItem(id);
                break;
            case DrawType.Skin: // 限定皮肤
                PlayerInfo.unlockSkin(this.skinId);
                vm.show("Prefabs/UI/UIUnlockSkin", this.skinId);
                break;
            case DrawType.Magnet: // 磁铁
                UserInfo.magnet_num += data.num;
                this.getLuckyItem(id);
                break;
            default:
                break;
        }
        UserInfo.save();
        // Device.playEffect(R.audio_unlock);
    }

    onGetReward(data: TurntableInfo) {
        vm.show("Prefabs/UI/UILucky");
        Toast.make(`获得${data.content}x${data.num}`);
    }

    getLuckyItem(id) {
        vm.hide(this);
        vm.show("Prefabs/UI/UIGetLucky", id, this.onGetReward);
    }

    clic_close() {


        if (!this._canRotate) {
            Toast.make('正在给您挑选奖品...');
            return
        }
        vm.hide(this);
    }
}
