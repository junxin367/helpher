import Game from "../Game";
import ccUtil from "../../../framework/utils/ccUtil";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import { PlayerInfo } from "../Common/Base/PlayerInfo";

let { ccclass, property } = cc._decorator
@ccclass
export default class UIChapterHelp extends cc.Component {

    @property(cc.Sprite)
    mainbg: cc.Sprite = null;

    @property(cc.Sprite)
    title1: cc.Sprite = null;

    onLoad() {
        this.mainbg.node.opacity = 0;
    }

    start() {

    }

    onShown(c) {
        ccUtil.setDisplay(this.mainbg, 'ImgComics/chapter/' + (c - 1)).then(v => {
            cc.tween(this.mainbg.node).to(0.5, { opacity: 255 }).start();
        })

        // ccUtil.setDisplay(this.title1, 'ImgComics/chapter/title/' + chapter);
    }

    click_go() {
        Game.instance.startGame();
    }

}