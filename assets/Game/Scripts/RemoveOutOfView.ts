import Signal from "../../framework/core/Signal";
import ccUtil from "../../framework/utils/ccUtil";

let { ccclass, property } = cc._decorator


@ccclass
export default class RemoveOutOfView extends cc.Component {
    lx: number = 0;
    ly: number = 0;
    rx: number = 0;
    ry: number = 0;

    onLoad() {
        let w = cc.winSize.width;
        let h = cc.winSize.height;
        this.lx = -w / 2;
        this.rx = w / 2;
        this.ly = -h / 2;
        this.ry = h / 2;
    }

    usingWorldSpace: boolean = false;

    onOffScreen: Signal = new Signal();

    start() {

    }

    update() {
        let xy = this.node.getPosition();
        if (this.usingWorldSpace) {
            xy = ccUtil.getWorldPosition(this.node);
            if (xy.x < 0 || xy.x > cc.winSize.width || xy.y < 0 || xy.y > cc.winSize.height) {
                this.onOffScreen.fire();
                this.node.destroy();
            }
        } else {
            if (xy.x < this.lx || xy.x > this.rx || xy.y > this.ry || xy.y < this.ly) {
                this.onOffScreen.fire();
                this.node.destroy();
            }
        }
    }
}