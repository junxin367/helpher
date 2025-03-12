import { evt } from "../../framework/core/event";
import ccUtil from "../../framework/utils/ccUtil";
import Device from "../../framework/misc/Device";
import { SettingInfo } from "../../framework/extension/weak_net_game/SettingInfo";
import Signal from "../../framework/core/Signal";
import { PlayerInfo } from "./Common/Base/PlayerInfo";
import { UserInfo } from "../../framework/extension/weak_net_game/UserInfo";
import Game from "./Game";

const { ccclass, property } = cc._decorator;

export enum KeyDir {
    Left_To_Right,
    Right_To_Left,
    Top_To_Bottom,
    Bottom_To_Top,
}

export enum KeyShape {
    UNKNOWN,
    H,
    V,
    DOOR,
    LEFTDOOR,
    RIGHTDOOR
}

@ccclass
export default class KeyToggle extends cc.Component {

    @property(cc.PrismaticJoint)
    joint: cc.PrismaticJoint = null;

    @property({ type: cc.Enum(KeyDir), displayName: "移动方向" })
    keyDir: KeyDir = KeyDir.Bottom_To_Top;


    @property({ type: cc.Enum(KeyShape), displayName: "水平/垂直" })
    shape: KeyShape = KeyShape.UNKNOWN;

    originPos: cc.Vec3 = cc.v3();
    openPos: cc.Vec3 = cc.v3();

    @property(cc.RigidBody)
    body: cc.RigidBody = null;

    @property(cc.Node)
    handler: cc.Node = null;

    collider: cc.PhysicsCollider = null;

    @property({ displayName: "增强热区" })
    strongArea: boolean = false;

    onToggleSwitched: Signal = new Signal();


    stopSign: cc.Node = null;

    onLoad() {
        if (this.joint == null) {
            this.joint = this.node.getComponentInChildren(cc.PrismaticJoint);
        }
        this.body = this.getComponent(cc.RigidBody)
        this.body.type = cc.RigidBodyType.Static

        this.originPos = this.node.position;
        this.openPos = this.node.position;

        if (this.keyDir == KeyDir.Bottom_To_Top) {
            this.openPos.y += this.joint.upperLimit;
        } else if (this.keyDir == KeyDir.Left_To_Right) {
            this.openPos.x += this.joint.upperLimit;
        } else if (this.keyDir == KeyDir.Top_To_Bottom) {
            this.openPos.y -= this.joint.upperLimit;
        } else if (this.keyDir == KeyDir.Right_To_Left) {
            this.openPos.x -= this.joint.upperLimit;
        }


        this.handler.on(cc.Node.EventType.TOUCH_START, this.click, this);

        //destroy all collider in [handler]
        let collider = this.handler.getComponent(cc.PhysicsCollider)
        if (collider) {
            collider.destroy();
        }
        let body = this.handler.getComponent(cc.RigidBody);
        if (body) {
            body.destroy();
        }

        this.collider = this.getComponent(cc.PhysicsCollider);
        this.collider.friction = 0.2;

        // this.addComponent(OneWayPlatform);


        //create stop collider 
        // this.createStopSign();
        if (this.shape == KeyShape.UNKNOWN) {
            if (this.node.angle == 0) {
                let ratio = this.node.width / this.node.height;
                if (ratio < 2 && ratio > 1) {
                    this.shape = KeyShape.DOOR;
                } else if (ratio > 2) {
                    this.shape = KeyShape.H;
                    this.node.height = 13
                } else {
                    this.shape = KeyShape.V;
                }
            } else if (this.node.angle == 90) {
                let ratio = this.node.width / this.node.height;
                if (ratio < 2) {
                    this.shape = KeyShape.H
                    this.node.width = 13
                } else {
                    this.shape = KeyShape.V;
                }
            }
        }
        console.log(KeyShape[this.shape])
        if (this.shape == KeyShape.H) {
            // this.createStopSign();
            this.getInvisibleHandler();

        } else if (this.shape == KeyShape.V) {
            this.getInvisibleHandler();
            this.node.height = 13
        } else if (this.shape == KeyShape.DOOR) {
            this.createEdge(cc.v2(0, 1));
            this.createEdge(cc.v2(-1, 0));
            this.createEdge(cc.v2(1, 0));
        } else if (this.shape == KeyShape.LEFTDOOR) {
            this.createEdge(cc.v2(0, 1));
            this.createEdge(cc.v2(-1, 0));
            this.createEdge(cc.v2(1, 0));
        } else if (this.shape == KeyShape.RIGHTDOOR) {
            this.createEdge(cc.v2(0, 1));
            this.createEdge(cc.v2(-1, 0));
            this.createEdge(cc.v2(1, 0));
        }
        // if (PlayerInfo.isPlayingDaily) {
        let sprites = this.getComponentsInChildren(cc.Sprite);
        for (let i = 0; i < sprites.length; i++) {
            ccUtil.setDisplay(sprites[i], "Img/level/" + sprites[i].spriteFrame.name + UserInfo.theme_key);
        }
        // }
    }

    createEdge(dir: cc.Vec2) {
        let node = new cc.Node();
        node.parent = this.node;
        if (dir.y != 0) {
            node.width = this.node.width;
            node.height = 50;
        } else if (dir.x != 0) {
            node.width = 50;
            node.height = this.node.height;
        }

        let pos = node.getPosition();
        pos.addSelf(dir.multiply(cc.v2(this.node.width / 2, this.node.height / 2)))
        node.setPosition(pos);
        node.on(cc.Node.EventType.TOUCH_START, this.click, this);
    }

    async createStopSign() {
        let prefab = await ccUtil.getRes("Prefabs/misc/stop", cc.Prefab)
        this.stopSign = cc.instantiate(prefab) as cc.Node;
        this.node.addChild(this.stopSign)
    }

    start() {

    }


    _isOpen: boolean = false;
    curDir: cc.Vec2 = cc.v2();

    get isOpen() {
        return this._isOpen;
    }

    private _switch() {
        if (this._isOpen) {
            cc.tween(this.node).to(0.5, { position: this.openPos }, { easing: "sineInOut" }).call(this.onFinish.bind(this)).start()
            this.curDir.y = this.openPos.y - this.node.y;
        } else {
            cc.tween(this.node).to(0.5, { position: this.originPos }, { easing: "sineInOut" }).call(this.onFinish.bind(this)).start()
            this.curDir.y = this.originPos.y - this.node.y;
        }

    }

    _invisibleHandler: cc.Node;

    getInvisibleHandler() {
        if (this._invisibleHandler == null) {
            let invisible = new cc.Node();
            invisible.width = this.node.width;
            invisible.height = this.node.height;
            if (this.node.width < this.node.height) {
                invisible.width = 50;
            } else {
                invisible.height = 50;
            }
            invisible.parent = this.node;
            invisible.on(cc.Node.EventType.TOUCH_START, this.click, this);
            this._invisibleHandler = invisible;
        }
        return this._invisibleHandler;
    }

    checkNeedMoveBack() {
        // if (this.strongArea) {
        // this.getInvisibleHandler();
        if (this._invisibleHandler) {
            this._invisibleHandler.active = true;
        }
        return;
        // }
        if (!cc.Camera.main.canSee(this.handler)) {
            this.getInvisibleHandler();
            if (this._invisibleHandler) {
                this._invisibleHandler.active = true;
            }
        } else {
            if (this._invisibleHandler) {
                this._invisibleHandler.active = false;
            }
        }
    }

    toggle() {
        this._canceled = false;
        this._isOpen = !this._isOpen
        this._switch();
    }

    _canceled = false;

    cancel() {
        this._canceled = true;
        this._switch();
    }

    onFinish() {
        if (this._canceled) return;
        this.checkNeedMoveBack();
        this.curDir.y = 0;
        evt.emit("Game.keyMoved", this)
        this.onToggleSwitched.fire(this)
    }

    click() {
        Game.instance.activeGame();
        Device.playSfx("key");
        evt.emit("Game.keyClick")
        this.toggle();
    }

}