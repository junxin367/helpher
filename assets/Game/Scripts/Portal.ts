import RoleLoader from "./RoleLoader";

let { ccclass, property } = cc._decorator
@ccclass
export default class ItemPortal extends cc.Component { // 传送门

    // anim: cc.Animation = null

    // collider: cc.PhysicsCollider = null;

    @property(cc.Node)
    anotherDoor: cc.Node = null;

    isTransfer: boolean = false;

    targetDoorNode: cc.Node = null

    targetPortal: ItemPortal = null;

    targetPortalCollider: cc.Collider = null;
    self_collider: cc.Collider = null;
    isEndContact: boolean = true;

    fx: cc.ParticleSystem;

    endContactNumber: number = 0;

    onLoad() {

    }

    start() {
        this.targetDoorNode = this.anotherDoor.getComponent(RoleLoader).self_door;
        this.fx = this.getComponentInChildren(cc.ParticleSystem);
        this.targetPortal = this.targetDoorNode.getComponent(ItemPortal);
        this.targetPortalCollider = this.targetPortal.getComponent(cc.Collider);
        this.self_collider = this.getComponent(cc.Collider);
    }

    go(node: cc.Node) {
        this.scheduleOnce(_ => {
            cc.tween(node).to(0.5, { opacity: 0 }).call(() => {
                let pos = this.targetDoorNode.getPosition();
                node.setPosition(pos.x, pos.y);
            }).to(0.5, { opacity: 255 }).start();
        }, 0);
    }


    onBeginContact(contact: cc.PhysicsContact, self, other: cc.PhysicsCollider) {
        if (this.isTransfer || !this.isEndContact) return;
        this.isTransfer = true;
        this.go(other.node);
        this.fx.resetSystem();
        this.targetPortal.isTransfer = true;
        this.targetPortal.fx.resetSystem();
        this.scheduleOnce(() => {
            this.isTransfer = false;
            this.targetPortal.isTransfer = false;
        }, 2)
        this.isEndContact = false;
    }

    onEndContact(contact: cc.PhysicsContact, self, other: cc.PhysicsCollider) {
        this.endContactNumber += 1;
        if (this.endContactNumber >= 3) {
            this.endContactNumber = 0;
            this.isEndContact = true;
        }
    }
}