import mvcView from "../../../framework/ui/mvcView";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import { Toast } from "../../../framework/ui/ToastManager";
import LoadingScene from "../Common/Base/LoadingScene";
import { LevelInfo } from "../Common/LevelInfo";
import { SettingInfo } from "../../../framework/extension/weak_net_game/SettingInfo";
import Device from "../../../framework/misc/Device";
import { ChapterlInfo } from "../Common/ChapterlInfo";
import Switcher from "../../../framework/ui/controller/Switcher";
import Const from "../Common/Const";
import ccUtil from "../../../framework/utils/ccUtil";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import { StarInfo } from "../Common/StarInfo";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIChapterItem extends mvcView {
    @property(cc.Label)
    label_chapter: cc.Label = null;

    @property(cc.Sprite)
    icon: cc.Sprite = null;

    @property(cc.Node)
    level_node: cc.Node = null;

    @property(cc.Node)
    lock_node: cc.Node = null;

    @property(cc.Node)
    unlock_node: cc.Node = null;

    @property(cc.Label)
    lock_label: cc.Label = null;

    @property(cc.Label)
    star_label: cc.Label = null;

    @property(cc.Node)
    left: cc.Node = null;

    @property(cc.Node)
    right: cc.Node = null;

    page: number = 0;

    onLoad() {
        this.register(this.label_chapter, _ => this.showLabel());
        this.register(this.icon, _ => this.showIcon())
    }

    onLaterRender() {
        let data = this.getData() as ChapterlInfo;
        if (PlayerInfo.star >= ccUtil.get(StarInfo, data.id).demand && (data.id - 1) * 10 < PlayerInfo.level) {
            this.lock_node.active = false;
            this.unlock_node.active = true;
        }
        else {
            this.lock_node.active = true;
            this.unlock_node.active = false;
            this.lock_label.string = "达到" + ccUtil.get(StarInfo, data.id).demand + "星解锁";
        }
        if ((PlayerInfo.level - (data.id - 1) * 10) > 5 && PlayerInfo.level > (data.id - 1) * 10) {
            this.page = 1;
            this.right.active = false;
            this.left.active = true;
        }
        else {
            this.page = 0;
            this.right.active = true;
            this.left.active = false;
        }
        this.refresh_level();
        this.starNum();
    }

    refresh_level() {
        let data = this.getData() as ChapterlInfo;
        if ((data.id - 1) * 10 > PlayerInfo.level) {
            return;
        }
        for (let i = 0; i < this.level_node.children.length; i++) {
            let level = ((data.id - 1) * 10) + (this.page * 5 + i + 1);
            this.onClick(this.level_node.children[i], _ => this.click_Chapter(level));
            this.level_node.children[i].getComponentInChildren(Switcher).index = PlayerInfo.level_star[level];
            this.level_node.children[i].getComponentInChildren(cc.Label).string = level + "";
            let levelNow_node = this.level_node.children[i].getChildByName("dangqian");
            if (level == PlayerInfo.level) {
                levelNow_node.color = cc.color(235, 113, 0, 255);
            }
            else if (level < PlayerInfo.level) {
                levelNow_node.color = cc.color(105, 185, 30, 255);

            }
            else {
                levelNow_node.color = cc.Color.GRAY;

            }
        }
    }

    starNum() {
        let data = this.getData() as ChapterlInfo;
        let num = 0;
        for (let i = (data.id - 1) * 10 + 1; i <= data.id * 10; i++) {
            num += PlayerInfo.level_star[i];
        }
        this.star_label.string = num + "/30";
    }

    showIcon() {
        let data = this.getData() as ChapterlInfo;
        if (PlayerInfo.getChapter() < data.id) {
            // this.icon.node.color = cc.Color.GRAY;
            return "ImagePart/chapter/jingqingqidai";
        }
        //  else {
        //     this.icon.node.color = cc.Color.WHITE
        // }
        if (Const.Chapter_Unlock < data.id) return "ImagePart/chapter/1";

        return "ImagePart/chapter/" + data.id;
    }

    showLabel() {
        let data = this.getData() as ChapterlInfo;
        return "第" + data.id + "章";
    }

    click_left() {
        if (this.page != 1) {
            return;
        }
        this.page = 0;
        this.right.active = true;
        this.left.active = false;
        this.refresh_level();
    }

    click_right() {
        if (this.page != 0) {
            return;
        }
        this.page = 1;
        this.right.active = false;
        this.left.active = true;
        this.refresh_level();
    }

    click_Chapter(level) {
        console.log(level)

        let lv = PlayerInfo.getCurrentLevel();
        if (lv < level) {
            Toast.make("未解锁")
            return;
        }
        if (PlayerInfo.labour > 0) {
            PlayerInfo.labour--;
            PlayerInfo.playinglevel = level;
            PlayerInfo.save();
            LoadingScene.goto("Game");
        }
        else {
            // Toast.make("体力不足");
            vm.show("Prefabs/UI/UIGetLabour", _ => {
                PlayerInfo.labour--;
                if (PlayerInfo.isPlayingDaily) {
                    PlayerInfo.playingDailyLevel = level;
                } else {
                    PlayerInfo.playinglevel = level;
                }
                PlayerInfo.save();
                LoadingScene.goto("Game");
            }, false);
        }
    }
}
