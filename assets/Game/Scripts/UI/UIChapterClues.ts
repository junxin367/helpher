

import mvcView from "../../../framework/ui/mvcView";
import { LevelInfo } from "../Common/LevelInfo";
import ccUtil from "../../../framework/utils/ccUtil";
import { SettingInfo } from "../../../framework/extension/weak_net_game/SettingInfo";
import Device from "../../../framework/misc/Device";
import { ChapterlInfo } from "../Common/ChapterlInfo";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import Switcher from "../../../framework/ui/controller/Switcher";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIChapterClues extends mvcView {
    @property(cc.ProgressBar)
    bar_chapter: cc.ProgressBar = null;

    @property(cc.Sprite)
    left_chapter: cc.Sprite = null;

    @property(cc.Sprite)
    right_chapter: cc.Sprite = null;

    @property(cc.Label)
    left_chapterNum: cc.Label = null;

    @property(cc.Label)
    right_chapterNum: cc.Label = null;

    @property(cc.Label)
    left_name: cc.Label = null;

    @property(cc.Label)
    right_name: cc.Label = null;

    @property(cc.Label)
    tip: cc.Label = null;
    @property(Switcher)
    right_swtich: Switcher = null;

    leftData: ChapterlInfo = null;
    rightData: ChapterlInfo = null;


    onLoad() {
        this.initData();
        this.registerSwitcher(this.right_swtich, _ => this.rightSwtich());

        // this.registerProgressBar(this.bar_chapter,_=> this.showBar());

        this.registerLabel(this.tip, _ => this.showTip());

        this.registerLabel(this.left_chapterNum, _ => this.leftData.chapter);
        this.registerLabel(this.left_name, _ => this.leftData.title);
        this.registerSprite(this.left_chapter, _ => "Img/chapter/zj_" + this.leftData.id);

        if (this.rightData) {
            this.registerLabel(this.right_chapterNum, _ => this.rightData.chapter);
            this.registerLabel(this.right_name, _ => this.rightData.title);
            this.registerSprite(this.right_chapter, _ => "Img/chapter/zj_" + this.rightData.id);
        }
        // this.render();
    }

    initData() {
        let id = PlayerInfo.getChapter(PlayerInfo.playinglevel);
        this.leftData = ccUtil.get(ChapterlInfo, id);
        if ((id + 1) > 5) {
            this.rightData = null;
            return;
        }
        this.rightData = ccUtil.get(ChapterlInfo, id + 1);
    }

    showBar() {
        let cur = PlayerInfo.playinglevel;
        let next = PlayerInfo.getChapter(PlayerInfo.playinglevel) * 10;
        if (cur == next) return 1;
        let sub = next - cur;
        return (10 - sub) / 10;

    }

    showTip() {
        let cur = PlayerInfo.playinglevel;
        let next = PlayerInfo.getChapter(PlayerInfo.playinglevel) * 10;
        if (cur == next && this.rightData) {
            return "恭喜你！" + this.rightData.chapter + "已解锁";
        }
        let sub = next - cur;

        return `继续挑战${sub}关，解锁下一章`;
    }

    rightSwtich() {
        let chapter = PlayerInfo.getChapter(PlayerInfo.playinglevel) + 1;
        if (chapter > 5) {
            this.tip.string = "更多关卡，即将上线";
            return 1;
        } else {

            return 0;
        }
    }

    onEnable() {
        this.bar_chapter.progress = this.showBar();
        this.render();
    }

    // onShown() {


    // }


    clic_close() {


        vm.hide(this);
    }

    // update (dt) {}
}
