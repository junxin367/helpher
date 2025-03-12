import ToastComponent from "./ToastComponent";
import { V2ChangeAction } from "../misc/BoostsAction";

const { ccclass, property } = cc._decorator;

export var Toast: ToastManager = null;

@ccclass
export default class ToastManager extends cc.Component {
    toastPool: cc.NodePool;
    @property(cc.Prefab)
    prefab: cc.Prefab

    @property(cc.Vec2)
    offset: cc.Vec2 = cc.v2();

    onLoad() {
        Toast = this;
    }

    start() {
        this.toastPool = new cc.NodePool();

    }

    onDestroy() {
        this.toastPool.clear();
    }

    make(text, dur = 2) {
        //show toast 
        let node = this.toastPool.get();
        let toastComp = null;
        if (node == null) {
            node = cc.instantiate(this.prefab);
            toastComp = node.getComponent(ToastComponent);
            if (toastComp == null) {
                console.warn("Toast.make : Toast Prefab must contains ToastComponent")
            }
            // ToastManager.toastPool.put(node);
            // node = ToastManager.toastPool.get();
            node.setPosition(node.x + this.offset.x, node.y + this.offset.y)
        } else {
            toastComp = node.getComponent(ToastComponent);
        }
        if (node.parent == null)
            this.node.addChild(node, 99999);

        this.show(toastComp, text, dur)
        return toastComp;
    }

    private show(toastComp: ToastComponent, text, dur) {
        toastComp.show(text)
        this.scheduleOnce(_ => {
            toastComp.hide(_ => {
                this.toastPool.put(toastComp.node)
                console.log("Toast.hide toastpool size:", this.toastPool.size())
            });
        }, dur)
    }

    // update (dt) {}
}
