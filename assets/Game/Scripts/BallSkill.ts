import MoveEngine from "../../framework/extension/movement/MoveEngine";
import EnemyBallUp from "./EnemyBallUp";

let { ccclass, property } = cc._decorator
@ccclass
export default class BallSkill extends cc.Component {
    target: cc.Node = null;
    moveEngine: MoveEngine = null;
    onLoad() {

    }

    start() {
        this.moveEngine = this.addComponent(MoveEngine)
        this.moveEngine.maxSpeed = 25;
    }

    update() {
        if (!cc.isValid(this.target)) return;
        let enemypos = this.target.position;
        // this.moveEngine.target = g.v2(enemypos)
        let f = this.moveEngine.seek(enemypos);
        this.moveEngine.applyForce(f);
        let v = enemypos.subSelf(this.node.position)
        let distsq = v.magSqr();
        if (distsq < 100) {
            //敌人死亡 飞上天
            this.target.getOrAddComponent(EnemyBallUp);
            this.node.destroy();
        }
    }

    trigger(target) {
        this.target = target;
    }
}