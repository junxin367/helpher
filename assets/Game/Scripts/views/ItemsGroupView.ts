import ItemStar from "../items/ItemStar"
import FlyToMagnet from "../items/FlyToMagnet"
import Role from "../Role"
import PoolManager from "../../../framework/core/PoolManager"
import ccUtil from "../../../framework/utils/ccUtil"
import Effect from "../Levels/Effect"
import AIEnemy from "../AIEnemy"
import SnowBall from "../items/SnowBall"
import Game from "../Game"
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo"
import { PlayerInfo } from "../Common/Base/PlayerInfo"
import { Toast } from "../../../framework/ui/ToastManager"
import ViewManager from "../../../framework/ui/ViewManager"

let { ccclass, property } = cc._decorator
@ccclass
export default class ItemsGroupView extends cc.Component {

    onLoad() {

    }

    start() {
        if (!PlayerInfo.isUnlock_Prop) {
            this.node.active = false;
        }
    }

    /**点击磁铁 */
    click_magnet() {
        if (PlayerInfo.isPlayingDaily) {
            Toast.make("挑战模式不可用");
            return;
        }

        if (UserInfo.magnet_num > 0) {
            if (Game.instance.isUsedMagnet) {
                Toast.make("本关使用过了");
            }
            else {
                Game.instance.isUsedMagnet = true;
                UserInfo.magnet_num -= 1;
                Effect.do_magnet();
            }
        }
        else {
            ViewManager.instance.show("Prefabs/UI/UIGetProp");
        }
    }

    click_snowball() {
        if (PlayerInfo.isPlayingSpecial) {
            Toast.make("特殊关卡不可用");
            return;
        }
        if (UserInfo.snowball_num > 0) {
            let b = Effect.throw_snowballs();
            if (b)
                UserInfo.snowball_num -= 1;
        }
        else {
            ViewManager.instance.show("Prefabs/UI/UIGetProp");
        }
    }


    click_gun() {
        if (PlayerInfo.isPlayingSpecial) {
            Toast.make("特殊关卡不可用");
            return;
        }
        if (UserInfo.gun_num > 0) {
            Role.self.open_fire();
        }
        else {
            ViewManager.instance.show("Prefabs/UI/UIGetProp");
        }
    }

    click_getProp() {
        ViewManager.instance.show("Prefabs/UI/UIGetProp");
    }




}