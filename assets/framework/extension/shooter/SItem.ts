import GameEntity, { EntityState } from "./SGameEntity";
import ShootManager from "./ShootManager";

const {ccclass, property} = cc._decorator;



@ccclass
export default class SItem extends GameEntity {

    onCollisionEnter(other,self)
    {
        console.log("eat item 11111111111")
        //player 
        this.fsm.changeState(EntityState.Dead);
    }

    // update (dt) {}
    onActive () {
        ShootManager.instance.addItem(this.node);
    }

    onDelete()
    {
        super.onDelete();
        ShootManager.instance.removeItem(this.node);
    }
}
