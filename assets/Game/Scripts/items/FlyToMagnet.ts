import MoveEngine, { Behavior } from "../../../framework/extension/movement/MoveEngine"
import Role from "../Role";
import { RoleType } from "../RoleLoader";

let { ccclass, property } = cc._decorator
@ccclass
export default class FlyToMagnet extends cc.Component {
    moveEngine: MoveEngine = null;

    onLoad() {
        this.moveEngine = this.getOrAddComponent(MoveEngine);
    }

    onEnable() {
        this.moveEngine.changeBeheavior(Behavior.Arrive);
    }

    onDisable() {
        this.moveEngine.changeBeheavior(Behavior.Simple);
    }

    update() {
        let pos = Role.self.node.getPosition();
        pos.y += 100;
        this.moveEngine.target = pos;
    }



}