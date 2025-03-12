import AIEnemy from "../AIEnemy";
import Device from "../../../framework/misc/Device";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FreezeTarget extends cc.Component {
    ice: cc.Node = null;
    duration: number = 10.0;
    enemy: AIEnemy = null;

    label: cc.Label = null;
    timeleft: number = 0;
    onLoad() {
        this.ice = this.node.getChildByName("ice")
        this.enemy = this.getComponent(AIEnemy);
        this.label = this.getComponentInChildren(cc.Label);

    }

    start() {

    }

    cast() {
        Device.playSfx("ice")

        if (this.timeleft <= 0) {
            this.ice.opacity = 0.0;
            cc.tween(this.ice).to(1.0, { opacity: 255 }).start();
        }

        this.ice.active = true;
        this.unschedule(this.hide);
        this.scheduleOnce(this.hide, this.duration);
        this.timeleft = this.duration;
        this.label.string = this.timeleft.toString();
        this.label.node.scaleX = Math.sign(this.node.scaleX * this.enemy.baseScale)
        // freeze 
        this.enemy.go_frozen();

        this.unschedule(this.countdown);
        this.schedule(this.countdown, 1);


    }

    countdown() {
        this.timeleft -= 1;
        this.label.string = this.timeleft.toFixed();
    }

    hide() {
        this.ice.active = false;
        this.enemy.exit_frozen();
    }
}