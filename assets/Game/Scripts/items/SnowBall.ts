import MoveEngine, { Behavior } from "../../../framework/extension/movement/MoveEngine";
import FreezeTarget from "./FreezeTarget";
import PoolManager from "../../../framework/core/PoolManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SnowBall extends cc.Component {
    moveEngine: MoveEngine = null;

    target: cc.Node = null;
    fx: cc.Node = null;
    onLoad() {
        this.moveEngine = this.getOrAddComponent(MoveEngine);
        this.moveEngine.maxSpeed = 34;
    }

    onEnable() {
        // this.moveEngine.changeBeheavior(Behavior.Arrive);

    }

    onDisable() {
        // this.moveEngine.changeBeheavior(Behavior.Simple);

    }


    update() {
        if (!cc.isValid(this.target)) return;
        let pos = this.target.getPosition();
        pos.addSelf(cc.v2(0, 80))
        let f = this.moveEngine.seek(pos);
        this.moveEngine.applyForce(f);
        let v = pos.subSelf(this.node.getPosition())
        let distsq = v.magSqr();
        if (distsq < 1000) {
            //free enemy
            let skill = this.target.getOrAddComponent(FreezeTarget);
            //hit effect 
            let hit = PoolManager.get("Pool").get("snowball-hit")
            hit.setPosition(this.node.position);
            this.fx = hit;
            skill.cast();
            this.node.destroy();
        }
    }


}