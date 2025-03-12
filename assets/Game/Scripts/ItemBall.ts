import AIEnemy from "./AIEnemy"
import MoveEngine from "../../framework/extension/movement/MoveEngine";
import FSM from "../../framework/core/FSM";
import EnemyBallUp from "./EnemyBallUp";
import BallSkill from "./BallSkill";

let { ccclass, property } = cc._decorator

@ccclass
export default class ItemBall extends cc.Component {

    light: cc.Node = null;
    moveEngine: MoveEngine = null;
    once: boolean = true;

    onLoad() {
        this.light = this.node.getChildByName("light")

    }

    start() {

    }

    go() {
        if (!this.once) {
            return;
        }
        for (var i = 0; i < AIEnemy.allEnemies.length; i++) {
            let e = AIEnemy.allEnemies[i];
            this.addBallSkill(e);
        }
        this.once = false;
        this.light.destroy();
        this.node.destroy();
        //play fx 
    }

    addBallSkill(enemey: AIEnemy) {
        let parent = this.node.parent;
        let pos = this.node.position;
        cc.resources.load("Prefabs/effect/ball_skill", cc.Prefab, (err, res) => {
            let node = cc.instantiate(res) as cc.Node
            let skill = node.getComponent(BallSkill);
            skill.trigger(enemey.node);
            node.parent = parent;
            node.position = pos;
        })
    }

}
