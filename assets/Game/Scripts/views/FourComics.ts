import { EaseType } from "../../../framework/extension/qanim/EaseType";

let { ccclass, property } = cc._decorator
enum AnimationType {
    Slide,
    Scale,
    Fade,
}

function prop(type) {
    if (type == AnimationType.Fade) {
        return 'opacity'
    } else if (type == AnimationType.Scale) {
        return 'scale'
    }
    return 'position'
}


@ccclass("ShowConfig")
class ShowConfig {
    @property({ type: cc.Enum(AnimationType) })
    type: AnimationType = AnimationType.Fade;
    @property()
    dur: number = 1;

    @property()
    from: number = 0;

    @property()
    to: number = 1;
    @property({ type: cc.Enum(EaseType) })
    easeType: EaseType = EaseType.linear;

    @property({ type: cc.Vec2, visible() { return this.type == AnimationType.Slide } })
    slideBy: cc.Vec2 = cc.v2();

}

@ccclass
export default class FourComics extends cc.Component {
    cells: cc.Node[] = []
    cursor: number = 0;

    @property([ShowConfig])
    configs: ShowConfig[] = []

    @property([cc.Component.EventHandler])
    onFinishes: cc.Component.EventHandler[] = [];

    @property
    interval: number = 3;

    onLoad() {
        this.cells = this.node.children;
        this.cursor = 0;
        this.node.on(cc.Node.EventType.TOUCH_END, this.next, this);
    }

    start() {
        this.prepare();
        this.next();
        this.schedule(this.next, this.interval)
    }

    next() {
        if (this.cursor >= this.configs.length) {
            return;
        }
        this.play()
        this.cursor++;
        if (this.cursor >= this.configs.length) {
            this.unschedule(this.next);
        }
    }

    prepare() {
        this.cells.forEach((v, i) => {
            let c = this.configs[i];
            let pp = prop(c.type);
            v[pp] = c.from;
        })
    }




    play() {
        let c = this.cursor
        let cell = this.cells[c];
        let config = this.configs[c];
        let t: cc.Tween = null
        if (config.type == AnimationType.Slide) {
            let pos = cell.getPosition();
            cell.setPosition(pos.x + config.slideBy.x, pos.y + config.slideBy.y)
            t = cc.tween(cell).to(config.dur, { position: pos }, { easing: EaseType[config.easeType] });
        } else if (config.type == AnimationType.Fade) {
            t = cc.tween(cell).to(config.dur, { [prop(config.type)]: config.to * 255 }, { easing: EaseType[config.easeType] })
        } else if (config.type == AnimationType.Scale) {
            t = cc.tween(cell).to(config.dur, { [prop(config.type)]: config.to }, { easing: EaseType[config.easeType] })
        }
        if (c == this.cells.length - 1) {
            t.delay(2.0).call(() => {
                this.onFinishes.forEach(v => v.emit([this]))
            }).start()
        } else {
            t.start();
        }
    }
}
