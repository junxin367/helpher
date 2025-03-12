import mvcView from "../../../framework/ui/mvcView";
import Switcher from "../../../framework/ui/controller/Switcher";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import Platform from "../../../framework/extension/Platform";
import { evt } from "../../../framework/core/event";
import { Toast } from "../../../framework/ui/ToastManager";
import { SkinType } from "./UISkin";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";

let { ccclass, property } = cc._decorator

enum SkinUnlockType {
    Level = 1,
    Star,
    Video,
    Default = 4
}

enum StatusIndex {
    Choosed = 0, // 已选择
    Locked = 1, //锁
    UnlockVideo = 2, //看视频 领取
    Unlocked = 3, //已解锁 
}

const Choosed_Color = new cc.Color().fromHEX("#FFFBDA")
const Name_Color = new cc.Color().fromHEX("#504B68")
const Unlock_Color = new cc.Color().fromHEX("#82FF52")

@ccclass
export default class UISKinItem extends mvcView {

    @property(cc.Label)
    nameLabel: cc.Label = null;
    @property(Switcher)
    switcher: Switcher = null;

    //unlock condition
    @property(cc.Label)
    unlockDesc: cc.Label = null;

    @property(cc.Sprite)
    unlockIcon: cc.Sprite = null;

    @property(cc.Sprite)
    icon: cc.Sprite = null;

    @property(cc.Button)
    btn_unlock_video: cc.Button = null

    @property(cc.Button)
    btn_unlock: cc.Button = null


    @property(cc.Button)
    btn_select: cc.Button = null

    @property(cc.Node)
    redPoint: cc.Node = null;

    onLoad() {
        evt.on(`Guide.unlockSkin`, this.onGuideUnlock, this);
        evt.on(`Guide.useSkin`, this.onGuideSelect, this);

        this.register<csv.Skin_Row>(this.switcher, (data) => {
            this.node.color = cc.Color.WHITE;
            this.btn_unlock.node.color = cc.Color.WHITE;
            this.node.opacity = 255;
            if (PlayerInfo.isSkinUnlocked(data.id)) {
                //已解锁 
                if (PlayerInfo.isSkinUsing(data.id)) {
                    this.node.color = Choosed_Color;
                    return StatusIndex.Choosed
                } else {
                    return StatusIndex.Unlocked;
                }
            } else {
                //未解锁 状态 
                if (data.unlockType == SkinUnlockType.Video) {
                    return StatusIndex.UnlockVideo;
                } else {
                    if (data.unlockType == SkinUnlockType.Level || data.unlockType == SkinUnlockType.Star) {
                        let unlock = this.canUnlock();
                        // ccUtil.setButtonEnabled(this.btn_unlock, unlock)
                        this.redPoint.active = unlock;
                        if (!unlock) {
                            this.node.opacity = 222;
                        } else {
                            this.btn_unlock.node.color = Unlock_Color;
                        }
                    }
                    // this.nameLabel.node.color = cc.Color.RED;
                    return StatusIndex.Locked;
                }
            }
            return StatusIndex.Choosed;
        })


        this.register<csv.Skin_Row>(this.unlockDesc, (data) => {
            if (data.unlockType == SkinUnlockType.Star) {
                return " x" + data.unlock2 + "颗解锁";
            } else {
                return "Lv" + data.unlock1 + '关解锁 ';
            }
        })

        this.register<csv.Skin_Row>(this.nameLabel, (data) => {
            return data.name
        })

        this.register<csv.Skin_Row>(this.icon, (data) => "Img/skin/thumbnail/" + data.type + "/" + data.thumbnail);

        this.onVisible<csv.Skin_Row>(this.unlockIcon.node, (data) => data.unlockType == SkinUnlockType.Star);
        // this.register<csv.Skin_Row>(this.unlockIcon, (data) => {
        //     if (data.unlockType == SkinUnlockType.Star) {
        //         return 'Img/main/star';
        //     } else if (data.unlockType == SkinUnlockType.Level) {
        //         return '';
        //     }
        // })
        this.register(this.btn_unlock_video, this.click_unlockvideo)
        this.register(this.btn_unlock, this.click_unlock)
        this.register(this.btn_select, this.click_select)

    }
    
    onDestroy() {
        evt.off(this);
    }

    /**j是否可以解锁  */
    canUnlock() {
        let d: csv.Skin_Row = this.getData() as csv.Skin_Row;
        if (d.unlockType == SkinUnlockType.Level && PlayerInfo.level >= d.unlock1) {
            return true;
        } else if (d.unlockType == SkinUnlockType.Star && PlayerInfo.star >= d.unlock2) {
            return true;
        } else if (d.unlockType == SkinUnlockType.Video) {
            return true;
        }
        return false;
    }


    click_unlockvideo() {
        Platform.watch_video(this.onvideocallback, this);
    }

    unlock() {
        let d: csv.Skin_Row = this.getData() as csv.Skin_Row;
        PlayerInfo.unlockSkin(d.id);
        Toast.make("已解锁：" + d.name);
        this.render(d);
    }

    onvideocallback() {
        this.unlock();
    }

    click_unlock() {
        let data = this.getData() as csv.Skin_Row;
        if (this.canUnlock()) {
            PlayerInfo.unlockSkin(data.id)
            Toast.make("已解锁：" + data.name)
            evt.emit('UISkin.checkLock');
            this.render(data)
        }
        else {
            if (data.unlockType == 1) {
                Toast.make("达到" + data.unlock1 + "关解锁")
            }
            else if (data.unlockType == 2) {
                Toast.make("获取" + data.unlock2 + "颗星星解锁")
            }
        }
    }

    click_select() {
        let data = this.getData() as csv.Skin_Row;
        // if (UserInfo.skin_guide === 0 && data.id === 20) { // 初次解锁引导
        //     UserInfo.skin_guide = 1;
        //     UserInfo.save('skin_guide');
        // }
        if (data.type == SkinType.Theme) {
            UserInfo.theme = data.data;
        }
        else {
            if (PlayerInfo.isSkinUnlocked(data.id)) {
                PlayerInfo.useSkin(data.id);
                this.render(data);
                //选择需要 取消选择其它同类项目
                evt.emit('Skin.select', data)
            }
        }
    }

    click_unlockstar() {

    }

    onGuideUnlock() {
        let data = this.getData() as csv.Skin_Row;
        data && data.id === 20 && this.click_unlock();
    }

    onGuideSelect() {
        let data = this.getData() as csv.Skin_Row;
        data && data.id === 20 && this.click_select();
    }
}