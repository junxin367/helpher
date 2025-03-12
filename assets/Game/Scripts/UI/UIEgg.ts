import mvcView from "../../../framework/ui/mvcView";
import { Toast } from "../../../framework/ui/ToastManager";
import { evt } from "../../../framework/core/event";
import Platform from "../../../framework/extension/Platform";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import display from "../../../framework/misc/display";


let { ccclass, property } = cc._decorator
@ccclass
export default class UIEgg extends mvcView {

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

    isbanner: boolean = false;
    isshowed: boolean = false;
  
    randomNum: number = 0;
    view: string = "";

    onLoad() {
       
    }

    onShow(view) {
        
        evt.on("Game.Resume", this.onResume, this);
        this.egg_ani.on(cc.Animation.EventType.FINISHED, this.finsh,this)
        this.Bar.progress = 0;
        this.view = view;
        this.isshowed = false;
        this.randomNum = g.randomFloat(0.4,0.6);
        Platform.refreshBannerAd();
    }
    onResume(){
        Platform.hideBannerAd();
    }

    onDestroy() {
      
    }

    async click_egg() {
        this.unschedule(this.reduce_propress);
        this.Bar.progress += 0.1;
        if (this.Bar.progress >= this.randomNum && !this.isshowed) {
            this.isshowed = true;
            this.egg1.y += 10;
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
            this.unscheduleAllCallbacks();
            this.get_but.active = false;
            Toast.make("恭喜获得体力 1");
            evt.emit("Game.getTili", display.center, 1);
            PlayerInfo.labour += 1;
            this.egg_ani.play("egg2");
            return;
        }
        this.schedule(this.reduce_propress, 0.1);
    }

    reduce_propress() {
        if (this.isbanner) return;
        this.Bar.progress -= 0.01;
        if(this.Bar.progress <= 0){
            // this.unschedule(this.reduce_propress);
            this.Bar.progress = 0;
            return;
        }
    }

    onHidden() {
        evt.off(this);
        this.egg_ani.off(cc.Animation.EventType.FINISHED, this.finsh,this)
        Platform.hideBannerAd();
        this.isbanner = false;
    }

    finsh(){
        vm.hide(this);
        if (this.view == "win") {
            vm.show("Prefabs/UI/UIWin");
        }
        else if (this.view == "lose") {
            vm.show("Prefabs/UI/UILose");
        }            
    }


}