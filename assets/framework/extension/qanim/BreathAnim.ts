import { EaseType } from "./EaseType";
import { PasrTimer } from "../../misc/PasrTimer";
import { lerpVec2 } from "./Extension";
let { ccclass, property, menu } = cc._decorator


// let EasingEnum = Enum(typeof (easing))

@ccclass("BreathAnim")
@menu("基础动画/BreathAnim")
export default class BreathAnim extends cc.Component {
    pasrTimer: PasrTimer = null
    @property
    duration: number = 1.0;
    @property(cc.Vec2)
    minScale: cc.Vec2 = cc.v2();
    @property(cc.Vec2)
    maxScale: cc.Vec2 = cc.v2();

    @property({ type: cc.Enum(EaseType) })
    easeType: EaseType = EaseType.linear;

    // @property({ type: EasingEnum })
    // easingType: typeof easing = null

    start() {
        this.pasrTimer = new PasrTimer(0, this.duration / 2, 0, this.duration / 2)
        this.pasrTimer.reset();
    }

    tmp_scale: cc.Vec2 = cc.v2();

    update(dt) {
        var t = this.pasrTimer.Tick(dt);
        t = cc.easing[EaseType[this.easeType]](t)
        this.node.scale = lerpVec2(this.tmp_scale, this.maxScale, this.minScale, t);
        if (this.pasrTimer.isFinished()) {
            this.pasrTimer.reset();
        }
    }

}