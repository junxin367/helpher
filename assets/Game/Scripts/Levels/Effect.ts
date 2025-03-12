import PoolManager from "../../../framework/core/PoolManager";
import Role from "../Role";
import { evt } from "../../../framework/core/event";
import AIEnemy from "../AIEnemy";
import SnowBall from "../items/SnowBall";
import ItemStar from "../items/ItemStar";
import FlyToMagnet from "../items/FlyToMagnet";
import Game from "../Game";
import { Toast } from "../../../framework/ui/ToastManager";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";

export default class Effect {
    static showMagnet(delay = 1.0) {
        // add a megnet over the head of the girl 
        let mag = PoolManager.get("Pool").get("magnet-indicator")
        mag.position = cc.v3(0, 200, 0);
        mag.parent = Role.self.node;
        let anim = mag.getComponent(cc.Animation)
        anim.play();
        evt.sleep(delay).then(v => {
            PoolManager.get("Pool").put(mag);
        })
        // anim.on('finished', () => {
        // })
    }

    static do_magnet() {
        //find all stars
        let stars = cc.director.getScene().getComponentsInChildren(ItemStar)
        Effect.showMagnet();
        stars.forEach(v => {
            v.getOrAddComponent(FlyToMagnet);
        })
    }

    static throw_snowballs() {
        let parent = Game.instance.node;
        // play throw animation 
        if (AIEnemy.allEnemies.length <= 0) {
            Toast.make("未发现敌人");
            return false;
        }

        for (var i = 0; i < AIEnemy.allEnemies.length; i++) {
            let e = AIEnemy.allEnemies[i];
            this.addTargetBall(e, parent);
        }
        return true;
    }

    private static addTargetBall(enemey: AIEnemy, parent) {
        let pos = Role.self.node.position;
        cc.resources.load("Prefabs/effect/snowball", cc.Prefab, (err, res) => {
            let node = cc.instantiate(res) as cc.Node
            let skill = node.getComponent(SnowBall);
            skill.target = enemey.node;
            node.parent = parent;
            pos.addSelf(cc.v3(0, 80, 0))
            node.position = pos
        })
    }

}