import { evt } from "../../framework/core/event";
import ccUtil from "../../framework/utils/ccUtil";
import Unity from "./Common/Unity";

let { ccclass, property } = cc._decorator
@ccclass
export default class SkeletonBase extends cc.Component {
    skeleton: dragonBones.ArmatureDisplay = null;
    armature: dragonBones.Armature;
    animState: dragonBones.AnimationState;
    animState2: dragonBones.AnimationState;

    _world: cc.PhysicsManager

    body: cc.RigidBody;
    onLoad() {
        this._world = cc.director.getPhysicsManager()
        this.skeleton = this.getComponent(dragonBones.ArmatureDisplay);
        if (this.skeleton)
            this.armature = this.skeleton.armature() as dragonBones.Armature;
        this.body = this.getComponent(cc.RigidBody);
    }

    start() {

    }

    playAnim(anim, times = 0) {
        this.animState = this.armature.animation.fadeIn(anim, 0.1, times, 0, '1', dragonBones.AnimationFadeOutMode.SameLayerAndGroup)
        return this.animState
    }

    playAnim2(anim, anim2, times = 0) {
        this.animState = this.skeleton.playAnimation(anim, times);
        this.animState2 = this.armature.animation.fadeIn(anim2, 0.2, times, 0, '2', dragonBones.AnimationFadeOutMode.SameLayerAndGroup)
    }

    fadeIn(anim, times = 0) {
        this.animState2 = this.armature.animation.fadeIn(anim, 0.2, times, 0, '2', dragonBones.AnimationFadeOutMode.SameLayerAndGroup)
        return this.animState2
    }

    fastFadeIn(anim, times = 0) {
        this.animState2 = this.armature.animation.fadeIn(anim, 0, times, 0, '2', dragonBones.AnimationFadeOutMode.SameLayerAndGroup)
        return this.animState2
    }


    stopAnim() {
        if (this.animState)
            this.animState.stop();
        if (this.animState2)
            this.animState2.stop();
    }

    worldCenter() {
        let p1 = g.v2(ccUtil.getWorldPosition(this.node));
        p1.y += 50;
        return p1;
    }


    _handSlot: dragonBones.Slot;

    get handSlot() {
        if (this._handSlot == null) {
            let handSlot = this.armature.getSlot("hand");
            this._handSlot = handSlot
            return handSlot
        }
        return this._handSlot;
    }



}