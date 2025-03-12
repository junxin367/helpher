import PsFx from "./PsFx";
import Device from "./Device";

const { ccclass, property, menu } = cc._decorator;

export interface PlayOptions {
    label?: string;
    spriteFrame?: cc.SpriteFrame;
    x?: number,
    y?: number,
}

@ccclass
@menu("动画特效/PsFxPlayer")
export default class PsFxPlayer extends cc.Component {

    @property(cc.Prefab)
    prefab: cc.Prefab = null

    @property
    prefabPath: string = '';

    // @property(PsFx)
    defaultFx: PsFx = null;

    @property(cc.SpriteFrame)
    spriteFrame: cc.SpriteFrame = null

    @property(cc.AudioClip)
    audioClip: cc.AudioClip;

    @property
    duration: number = -1;

    @property
    randomRotaion: boolean = false;

    @property
    scale: number = 1;
    onLoad() {
        // if (this.defaultFx == null)
        //     this.defaultFx = this.getComponent(PsFx);
    }

    start() {

    }


    loadPrefab() {
        if (this.prefabPath == null || isEmpty(this.prefabPath)) return Promise.resolve();
        return new Promise((resolve, reject) => {
            cc.resources.load(this.prefabPath, (err, res) => {
                if (err) reject(err)
                this.prefab = res;
                resolve(res);
            })
        })
    }

    clear() {
        if (this.defaultFx) {
            this.defaultFx.node.destroy();
        }
        this.defaultFx = null;
        this.prefab = null;
    }

    get fx() {
        if (this.defaultFx == null && this.prefab) {
            let node = cc.instantiate(this.prefab);
            if (node == null) return null;
            let fx = node.getComponent(PsFx)
            if (fx == null) {
                fx = node.addComponent(PsFx);
            }
            node.setPosition(0, 0);
            node.setParent(this.node);
            this.defaultFx = fx;
        }
        return this.defaultFx;
    }

    preload() {
        this.loadPrefab().then(v => {
            this.fx.node.active = false;
        }).catch(e => console.error(e))
    }

    get isPlaying() {
        if (!this.fx) return false;
        return this.fx.isPlaying;
    }

    onEnable() {

    }

    onDisable() {
        let fx = this.defaultFx;
        if (fx)
            fx.node.active = false;
    }

    sleep(sec):Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(_ => {
                resolve();
            }, sec)
        })
    };

    hide() {
        if (this.fx && this.fx.node)
            this.fx.node.active = false;
    }

    setOptions(fx: PsFx, options: PlayOptions) {
        if (options) {
            fx.node.x = options.x || fx.node.x
            fx.node.y = options.y || fx.node.y
            if (fx.label)
                fx.label.string = options.label || fx.label.string
        }
    }

    async play(options?: PlayOptions, audio?) {
        Device.playEffect(this.audioClip, false);
        let fx = this.fx;
        if (!fx) {
            if (this.prefab == null && this.prefabPath != null) {
                await this.loadPrefab();
            }
        }
        fx = this.fx;
        if (fx) {
            if (this.randomRotaion)
                fx.node.rotation = g.randomInt(0, 360);
            fx.reset();
            this.setOptions(fx, options);
            fx.node.scale = this.scale;
            return fx.play(audio || this.audioClip, (options && options.spriteFrame) || this.spriteFrame);
        } else {
            if (this.duration > 0)
                await this.sleep(this.duration * 1000);
            this.hide();
        }
    }

    // update (dt) {}
}
