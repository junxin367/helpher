import mvcView from "../../../framework/ui/mvcView";
import Switcher from "../../../framework/ui/controller/Switcher";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import { evt } from "../../../framework/core/event";
import { Toast } from "../../../framework/ui/ToastManager";
import { DecorateType } from "./UIPersonSkin";

let { ccclass, property } = cc._decorator

enum StatusIndex {
    Choosed = 0, // 已选择
    Unlocked = 1, //已解锁
    Locked = 2, //锁 
}

const Choosed_Color = new cc.Color().fromHEX("#FFFBDA")
const Name_Color = new cc.Color().fromHEX("#504B68")
const Unlock_Color = new cc.Color().fromHEX("#82FF52")

@ccclass
export default class UIDecorateItem extends mvcView {

    @property(cc.Label)
    nameLabel: cc.Label = null;
    @property(Switcher)
    switcher: Switcher = null;

    @property(cc.Sprite)
    icon: cc.Sprite = null;

    @property(cc.Button)
    btn_select: cc.Button = null;


    @property(cc.Button)
    btn_unlock: cc.Button = null

    @property(cc.Button)
    btn_choosed: cc.Button = null;

    @property(cc.Node)
    redPoint: cc.Node = null;


    onLoad() {
        this.register<csv.Collection_Row>(this.switcher, (data) => {
            this.node.color = cc.Color.WHITE;
            this.btn_unlock.node.color = cc.Color.WHITE;
            this.node.opacity = 255;
            if (PlayerInfo.isDecorateUnlocked(data.id)) {
                //已解锁 
                if (PlayerInfo.isDecorateUsing(data.id)) {
                    this.node.color = Choosed_Color;
                    return StatusIndex.Choosed;
                } else {
                    return StatusIndex.Unlocked;
                }
            } else {
                //未解锁 状态 
                let unlock = this.canUnlock();
                // ccUtil.setButtonEnabled(this.btn_unlock, unlock);
                this.redPoint.active = unlock;
                if (!unlock) {
                    this.node.opacity = 222;
                } else {
                    this.btn_unlock.interactable = false;
                    this.btn_unlock.node.color = Unlock_Color;
                }
                // this.nameLabel.node.color = cc.Color.RED;
                return StatusIndex.Locked;
            }
        })

        this.register<csv.Collection_Row>(this.nameLabel, (data) => {
            return data.name;
        })

        this.register<csv.Collection_Row>(this.icon, (data) => {
            cc.log(`${data.thumbnail}`);
            return data.thumbnail ? "Img/decorate/thumbnail/" + data.thumbnail : '';
        });

        this.register(this.btn_unlock, this.click_unlock);
        this.register(this.btn_select, this.click_select);
        this.register(this.btn_choosed, this.click_choosed);
    }

    /**j是否可以解锁  */
    canUnlock() {
        return false;
    }

    unlock() {
        let d: csv.Collection_Row = this.getData() as csv.Collection_Row;
        PlayerInfo.unlockDecorate(d.id);
        Toast.make("已解锁：" + d.name);
        this.render(d);
    }

    onvideocallback() {
        this.unlock();
    }

    click_unlock() {
        let data = this.getData() as csv.Collection_Row;
        if (this.canUnlock()) {
            PlayerInfo.unlockDecorate(data.id);
            Toast.make("已解锁：" + data.name);
            evt.emit('UISkin.checkLock');
            this.render(data);
        }
    }

    click_select() {
        let data = this.getData() as csv.Collection_Row;
        if (PlayerInfo.isDecorateUnlocked(data.id)) {
            PlayerInfo.useDecorate(data.id);
            // this.render(data);
            //选择需要 取消选择其它同类项目
            evt.emit('Decorate.select', data)
        }
    }

    click_choosed() {
        let data = this.getData() as csv.Collection_Row;
        if (data.type === DecorateType.BaiJian) {
            PlayerInfo.collections[data.id] = 1;
            PlayerInfo.save();
            // this.render();
            //选择需要 取消选择其它同类项目
            evt.emit('Decorate.select', data)
        }
    }

}