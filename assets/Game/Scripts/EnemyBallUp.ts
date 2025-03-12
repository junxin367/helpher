import AIEnemy from "./AIEnemy"
import Device from "../../framework/misc/Device";

let { ccclass, property } = cc._decorator
@ccclass
export default class EnemyBallUp extends cc.Component {
    enemy: AIEnemy = null;
    body: cc.RigidBody = null;
    bubble: cc.Node = null;

    onLoad() {
        this.enemy = this.getComponent(AIEnemy);
        this.body = this.getComponent(cc.RigidBody);
    }

    start() {
        cc.resources.load("Prefabs/effect/bubble", cc.Prefab, (err, res) => {
            Device.playSfx('bubble')
            this.bubble = cc.instantiate(res);
            this.node.addChild(this.bubble);
            let r = Math.max(this.node.width, this.node.height)
            this.bubble.width = r + 20;
            this.bubble.height = this.bubble.width
        })
        //enemey 
        this.enemy.enableCollide = false;
        this.enemy.removeBomb();
        this.body.linearDamping = 0;
        this.body.gravityScale = -1;
    }

    onEnable() {

    }

}