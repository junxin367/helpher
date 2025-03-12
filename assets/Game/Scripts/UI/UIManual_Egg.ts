import mvcView from "../../../framework/ui/mvcView";
import { Toast } from "../../../framework/ui/ToastManager";
import { evt } from "../../../framework/core/event";
import Platform from "../../../framework/extension/Platform";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import display from "../../../framework/misc/display";


let { ccclass, property } = cc._decorator
@ccclass
export default class UIManual_Egg extends mvcView {

    @property(cc.ProgressBar)
    Bar: cc.ProgressBar = null;

    @property(cc.Animation)
    egg_ani: cc.Animation = null;

    @property(cc.ParticleSystem)
    lizi: cc.ParticleSystem = null;

    @property(cc.Node)
    egg1: cc.Node = null;

    
    @property(cc.Node)
    get_but: cc.Node = null;

    state:cc.AnimationState

    isleave: boolean = false;
    isbanner: boolean = false;
    isshowed: boolean = false;
    isplay: boolean = false;
    randomNum: number = 0;
    view: string = "";

    onLoad() {
        this.egg_ani.on(cc.Animation.EventType.FINISHED, this.finsh,this)
    }

    onShow(view) {
        evt.on("Game.Resume", this.onResume, this);
        this.Bar.progress = 0;
        this.view = view;
        this.randomNum = g.randomFloat(0.4,0.6);
        // this.randomNum = (Math.floor(Math.random() * 3) + 4) / 10;
        Platform.refreshBannerAd();
        
    }
    onResume(){
        Platform.hideBannerAd();
    }

    onDestroy() {
        // this.egg_ani.off(cc.Animation.EventType.FINISHED, this.finsh,this)
    }

    async click_egg() {
        // if (!this.isplay) {
        //     this.isplay = true;
        //     this.egg_ani.play();
        // }
        this.unschedule(this.reduce_propress);
        this.Bar.progress += 0.1;
        if (this.Bar.progress >= this.randomNum && !this.isshowed) {
            this.isshowed = true;
            this.egg1.y += 10;
            // Platform.reloadBannerAd(true);
            Platform.showBannerAd();
            this.isbanner = true;
            this.scheduleOnce(_ => {
                if(cc.isValid(this)){
                    this.isbanner = false;
                    Platform.hideBannerAd();
                }
            }, 2)
        }
        if (this.Bar.progress >= 1) {
            // this.lizi.resetSystem();
            this.unscheduleAllCallbacks();
            this.egg_ani.play("egg2");
            Toast.make("恭喜获得体力 1");
            evt.emit("Game.getTili", display.center, 1);
            PlayerInfo.labour += 1;
            this.get_but.active = false;
            return;
            // await evt.sleep(1.5);
            // vm.hide(this);
            // if (this.view == "win") {
            //     vm.show("Prefabs/UI/UIWin");
            // }
            // else if (this.view == "lose") {
            //     vm.show("Prefabs/UI/UILose");
            // }
            
        }
        this.schedule(this.reduce_propress, 0, 1000, 0.5);
    }

    reduce_propress() {
        if (this.isbanner) return;
        this.Bar.progress -= 0.001;
        if(this.Bar.progress <= 0){
            this.unschedule(this.reduce_propress);
            this.Bar.progress = 0;
        }
    }

    onHide() {
        evt.off(this);
        Platform.hideBannerAd();
        this.isbanner = false;
        this.isleave = true;
    }

    finsh(){
        console.log("动画结束")
        vm.hide(this);
        if (this.view == "win") {
            vm.show("Prefabs/UI/UIWin");
        }
        else if (this.view == "lose") {
            vm.show("Prefabs/UI/UILose");
        }            
    }


}