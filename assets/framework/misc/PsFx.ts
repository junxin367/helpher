import Device from "./Device";
import ccUtil from "../utils/ccUtil";

const { ccclass, property, menu } = cc._decorator;

@ccclass
@menu("动画特效/PSFX")
export default class PsFx extends cc.Component {

    // @property([cc.ParticleSystem])
    particles: cc.ParticleSystem[] = []

    // @property([cc.Animation])
    animations: cc.Animation[] = []


    // armature:dragonBones.ArmatureDisplay = null
    armature: dragonBones.ArmatureDisplay = null;

    defaultAnim: string = ''

    // name:string = null;

    // _callback:Function;
    // _target:any;

    isPlaying: boolean = false;

    @property({ type: cc.AudioClip })
    sfx: cc.AudioClip = null

    @property(cc.Sprite)
    sprite: cc.Sprite = null

    @property
    childAnimation: boolean = true;

    @property
    duration: number = -1;

    @property
    fadeAfterFinish: number = -1;

    @property
    repeatTime: number = 1;

    @property
    removeAfterFinish: boolean = false;

    @property
    hideAfterFinish: boolean = true;

    private _label: cc.Label = null;

    public get label(): cc.Label {
        if (this._label == null) {
            this._label = this.getComponentInChildren(cc.Label)
        }
        return this._label;
    }

    @property
    resetOrigin: boolean = true;

    onLoad() {
        if (this.sprite == null) {
            this.sprite = this.getComponent(cc.Sprite);
            this.sprite = this.sprite || this.node.getComponentInChildren(cc.Sprite);
        }
        let anim = this.getComponent(cc.Animation)
        if (anim) {
            this.animations.push(anim);
        }
        let root_ps = this.getComponent(cc.ParticleSystem)
        root_ps && this.particles.push(root_ps)
        for (let i = 0; i < this.node.childrenCount; i++) {
            const child = this.node.children[i]
            let ps = child.getComponent(cc.ParticleSystem)
            if (ps)
                this.particles.push(ps);
            else if (this.childAnimation) {
                let anim = child.getComponent(cc.Animation)
                if (anim)
                    this.animations.push(anim);
            }
        }
        if (typeof (dragonBones) != "undefined") {
            this.armature = this.getComponent(dragonBones.ArmatureDisplay);
            // if (!this.armature)
            // this.armature = this.getComponentInChildren(dragonBones.ArmatureDisplay);
            if (this.armature) {
                this.defaultAnim = this.armature.animationName
            }
        }
    }

    play(audio: cc.AudioClip = null, spriteFrame = null) {
        this.isPlaying = true;
        let dur = 0;
        if (audio) {
            this.sfx = audio
        }
        if (spriteFrame) {
            if (typeof (spriteFrame) == "string") {
                ccUtil.setDisplay(this.sprite, spriteFrame)
            } else {
                this.sprite.spriteFrame = spriteFrame;
            }
        }

        this.node.active = true;
        for (let i = 0; i < this.particles.length; i++) {
            const element = this.particles[i];
            element.resetSystem();
            if (dur < element.duration) {
                dur = element.duration + element.life + element.lifeVar
            }
        }
        for (let i = 0; i < this.animations.length; i++) {
            const element = this.animations[i];
            let clips = element.getClips()
            if (clips && clips.length > 0) {
                let clip = clips[0]
                let duration = clip.duration / clip.speed
                if (duration > dur) {
                    dur = duration;
                }
                element.play(clip.name);
            }
        }

        if (this.sfx) {
            Device.playEffect(this.sfx, false);
        }

        if (this.armature) {
            this.armature.playAnimation(this.defaultAnim, this.repeatTime);
            dur = this.duration
            if (dur <= 0) {
                return new Promise((resolve, reject) => {
                    // this.armature.addEventListener(dragonBones.EventObject.LOOP_COMPLETE, _=>{
                    //     console.log("loop complete");
                    //     this.fadeOnFinish(resolve)
                    // })
                    this.armature.addEventListener(dragonBones.EventObject.COMPLETE, _ => {
                        console.log("armature play complete");
                        if (this.removeAfterFinish) {
                            this.node.removeFromParent();
                        } else {
                            this.fadeOnFinish(resolve)
                        }
                    })
                })
            }
        } else {
            if (this.duration > 0) {
                dur = this.duration
            } else {
                dur = dur + 0.1;
            }
        }
        // console.log("[psfx] play : " ,  this.name,  dur);
        return new Promise((resolve, reject) => {
            this.scheduleOnce(_ => {
                if (!this.isValid) return resolve()
                if (this.removeAfterFinish) {
                    this.node.removeFromParent();
                    resolve();
                } else {
                    this.fadeOnFinish(resolve)
                }
            }, dur)
        })
    }

    fadeOnFinish(callback) {
        this.isPlaying = false;
        for (let i = 0; i < this.particles.length; i++) {
            const element = this.particles[i];
            element.stopSystem();
        }
        if (this.fadeAfterFinish > 0) {
            let seq = cc.sequence(cc.fadeOut(this.fadeAfterFinish), cc.callFunc(callback))
            this.node.runAction(seq)
        } else {
            if (this.hideAfterFinish) {
                this.node.active = false;
            }
            callback();
        }
    }

    reset(): any {
        if (this.resetOrigin)
            this.node.position = cc.Vec2.ZERO;
        this.node.opacity = 255;
        this.animations.forEach(v => v.stepTo(0))
    }

    start() {

    }

    // update (dt) {}
}
