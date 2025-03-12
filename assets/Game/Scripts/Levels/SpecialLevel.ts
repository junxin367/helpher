
import { evt } from "../../../framework/core/event";
import { Toast } from "../../../framework/ui/ToastManager";
import Device from "../../../framework/misc/Device";

const { ccclass, property } = cc._decorator;

export enum RoleType {
    Balloon,
    Enemy,
    Star,
    Box,
    Bomb,
}

@ccclass
export default class SpecialLevel extends cc.Component {

    @property({ type: cc.Enum(RoleType) })
    private _type: RoleType = RoleType.Balloon;

    @property({ type: cc.Enum(RoleType) })
    public get type(): RoleType {
        return this._type;
    }

    public set type(value: RoleType) {
        this._type = value;
    }

    @property(cc.Node)
    nodes: cc.Node = null;

    count: number = 0;
    node_Counts: number = 0;

    static instance: SpecialLevel = null

    onLoad() {
        SpecialLevel.instance = this;
    }

    gameOver() {
        evt.off(this);
    }

    start() {
        if (this.type == RoleType.Enemy) {
            evt.on("Game.enemyDead", this.check_enemy, this);
        }
        else if (this.type == RoleType.Balloon) {
            evt.on("Game.boollonDes", this.check_enemy, this);
        }
        else if (this.type == RoleType.Star) {
            evt.on("Game.getstar", this.check_enemy, this);
        }
        else if (this.type == RoleType.Box) {
            return;
            // evt.on("Game.getstar", this.check_enemy, this);
        }
        else if (this.type == RoleType.Bomb) {

            console.log('sd')

            evt.on("Game.bombDes", this.check_enemy, this);
        }
        this.node_Counts = this.nodes.childrenCount;
    }

    check_enemy() {
        console.log('sd')
        if (!this.enabledInHierarchy) return;
        this.count += 1;
        if (this.node_Counts <= this.count) {
            Toast.make("任务完成");
            Device.playSfx("finish-mission")
            evt.emit("Game.win");
        }
    }

    onDestroy() {
        evt.off(this);
        SpecialLevel.instance = null;
    }

    // update (dt) {}
}
