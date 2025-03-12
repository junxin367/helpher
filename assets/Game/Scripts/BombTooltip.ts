import Bomb from "./Bomb"

let { ccclass, property } = cc._decorator
@ccclass
export default class BombTooltip extends cc.Component {
    private bombRef: Bomb;

    @property(cc.Label)
    label: cc.Label = null;

    baseScale: number = 0;

    onLoad() {
        this.baseScale = this.node.scaleX;
    }

    set dir(x) {
        this.node.scaleX = x * this.baseScale;
    }

    set bomb(v: Bomb) {
        if (v) {
            this.node.active = true;
            v.onTimeLeftChanged.on(this.onTimeLeft, this)
            this.bombRef = v;
            this.label.string = v.timeLeft + "";
        } else {
            if (this.bombRef)
                this.bombRef.onTimeLeftChanged.off(this.onTimeLeft, this);
            this.node.active = false;
        }
    }


    onDestroy() {
        if (this.bombRef && this.bombRef.onTimeLeftChanged)
            this.bombRef.onTimeLeftChanged.off(this.onTimeLeft, this);
    }

    onTimeLeft(timeleft) {
        this.label.string = timeleft;
        if (timeleft <= 0) {
            this.node.active = false
            this.bomb = null;
        }
    }

    start() {

    }



}