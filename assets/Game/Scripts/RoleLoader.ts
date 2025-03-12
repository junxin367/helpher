import Bomb from "./Bomb";
import ItemPortal from "./Portal";
import { PlayerInfo } from "./Common/Base/PlayerInfo";

let { ccclass, property, executeInEditMode } = cc._decorator
export enum RoleType {
    Girl,
    Older,
    Badman,
    Dog,
    Bat,
    Balloon,
    Bomb,
    Door,
    Box,
    Box_jia
}

const RolePrefabs = {
    [RoleType.Girl]: "Prefabs/roles/girl",
    [RoleType.Older]: "Prefabs/roles/older",
    [RoleType.Badman]: "Prefabs/roles/badman",
    [RoleType.Dog]: "Prefabs/roles/dog",
    [RoleType.Bat]: "Prefabs/roles/bat",
    [RoleType.Balloon]: "Prefabs/roles/ballon",
    [RoleType.Bomb]: "Prefabs/roles/bomb",
    [RoleType.Door]: "Prefabs/roles/men",
    [RoleType.Box]: "Prefabs/roles/box",
    [RoleType.Box_jia]: "Prefabs/roles/box_jia",

}

const Colors = {
    [RoleType.Badman]: cc.Color.RED,
    [RoleType.Dog]: cc.Color.GRAY,
    [RoleType.Girl]: cc.Color.WHITE,
    [RoleType.Older]: cc.Color.GREEN,
    [RoleType.Bat]: cc.Color.BLACK,
    [RoleType.Balloon]: cc.Color.YELLOW,
    [RoleType.Bomb]: cc.Color.GRAY,
    [RoleType.Door]: cc.Color.CYAN,
    [RoleType.Box]: cc.Color.ORANGE,
    [RoleType.Box_jia]: cc.Color.BLUE,
}

@ccclass
@executeInEditMode
export default class RoleLoader extends cc.Component {
    @property({ type: cc.Enum(RoleType) })
    private _type: RoleType = RoleType.Girl;

    @property({ type: cc.Enum(RoleType) })
    public get type(): RoleType {
        return this._type;
    }
    public set type(value: RoleType) {
        this._type = value;
        this.updateIndicator();

    }

    @property({ displayName: "不随机" })
    isClaim: Boolean = false;

    @property({ displayName: "炸弹剩余时间" })
    time: number = 15;

    @property(cc.Node)
    another_door: cc.Node;

    self_door: cc.Node;

    indicator: cc.Sprite;


    onLoad() {
        this.indicator = this.getComponent(cc.Sprite);
    }

    updateIndicator() {
        this.node.color = Colors[this.type];
        this.node.width = 50;
        this.node.height = 50;
    }

    get path() {
        if (this.isClaim) return RolePrefabs[this.type];
        if (this.type == RoleType.Dog || this.type == RoleType.Badman) {
            this.type = g.getRandomInArray([RoleType.Dog, RoleType.Badman])
        } else if (this.type == RoleType.Older) {
            if ((!PlayerInfo.isPlayingDaily && csv.level.get(PlayerInfo.playinglevel).treasure)
                || (PlayerInfo.isPlayingDaily && csv.daily_level.get(PlayerInfo.playingDailyLevel).treasure)) {
                this.type = RoleType.Box;
            }
        }
        return RolePrefabs[this.type]
    }

    start() {
        if (CC_EDITOR) {
            return this.updateIndicator();
        }
        cc.resources.load(this.path, cc.Prefab, (err, res) => {
            let node = cc.instantiate(res) as cc.Node
            node.parent = this.node.parent;
            node.position = this.node.position;
            node.scaleX = node.scaleX * this.node.scaleX;
            if (node.name == "bomb") {
                console.log(node.name)
                node.getComponent(Bomb)._timeLeft = this.time;
            }
            else if (node.name == "men") {
                this.self_door = node;
                node.getComponent(ItemPortal).anotherDoor = this.another_door;
            }
        })
        this.indicator.enabled = false;
    }
}