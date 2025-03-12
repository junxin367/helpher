import ViewManager from "./ViewManager";
import { evt } from "../core/event";
import UIFunctions from "./UIFunctions";

const { ccclass, property } = cc._decorator;

@ccclass
export default class View extends cc.Component {
    // isTouchEnabled: boolean = true;
    emit(e, msg) {
        evt.emit(msg)
    }

    name: string;

    @property
    isDialog: boolean = false;

    @property
    closeOnClick: boolean = false;

    target: any;

    @property
    opacity: number = 200;



    @property
    childrenAnimation: boolean = false;

    @property({ visible: true, displayName: "topMost" })
    private _topMost: boolean = false;


    touchBlocker: cc.Node = null;
    touchBlockerComp: cc.BlockInputEvents = null;


    animations: cc.Animation[] = [];

    call(event, exp: string) {
        // eval(exp);
        g.execScript(exp);
    }

    setDelegate(target) {
        this.target = target;
    }

    emitEvent(e, exp: string) {
        evt.emit(exp);
    }

    /** 打开其它界面  */
    showUI(e, viewPath) {
        ViewManager.instance.show(viewPath)
    }

    onLoad() {


        if (this.childrenAnimation) {
            this.animations = UIFunctions.getChildrenAnimations(this.node)
        } else {
            var anim = this.node.getComponent(cc.Animation)
            if (anim)
                this.animations.push(anim)
        }
        let components = this.getComponents(cc.Component);
        for (var i = 0; i < components.length; i++) {
            let comp: any = components[i]
            if (comp != this) {
                if (comp.onShown || comp.onShow || comp.onHidden) {
                    this.target = comp;
                    break;
                }
            }
        }

        /** 点击背景退出弹窗 */
        if (this.isDialog) {
            if (this.closeOnClick) {
                this.node.on(cc.Node.EventType.TOUCH_END, this.hide, this);
                this.node.children[0] && this.node.children[0].addComponent(cc.BlockInputEvents);
            }
        }


        if (this.animations.length > 0) {
            // this.touchBlocker = new cc.Node();
            // this.touchBlocker.name = "TouchBlocker"
            // this.touchBlocker.width = 2000;
            // this.touchBlocker.height = 2000;
            // this.touchBlockerComp = this.touchBlocker.addComponent(cc.BlockInputEvents)
            // this.node.addChild(this.touchBlocker, 1000)
        }

    }

    start() {
        this.touchEnabled = true;
    }

    init(viewname: string) {
        this.name = viewname;
        let idx = viewname.lastIndexOf("/") + 1
        // idx = Math.max(0,idx);
        this.node.name = viewname.substr(idx)
    }

    hideAnimationCallback() {
        this.node.active = this.visible;
        ViewManager.instance.checkViewStacks();
    }

    _isHiding: boolean = false;


    /**
     * //如果 实现了view的animation那么需要 animation 去做隐藏
     * 否则会不会有animtion ，系统 将直接 设置 active 为false
     */
    doHideAnimation() {
        // if (!this.isDialog)
        // {
        //todo is in hide animtion return ;
        // if(this.isInHideAnimation())return;
        this.node.active = true;
        this._isHiding = true;
        if (!UIFunctions.doHideAnimations(this.animations, this.hideAnimationCallback, this)) {
            this.node.active = false;
            this._isHiding = false;
            ViewManager.instance.checkViewStacks();
        }
        this.log("[View] hide:", this.name);
        this._visibleDirty = false;
    }

    isInHideAnimation(): any {
        return this._isHiding
    }

    onHidden() {
        this._visibleDirty = false;
        if (this.target && this.target.onHidden)
            this.target.onHidden();
        // cc.Component.EventHandler.emitEvents(this.onHiddenEvents,[params]);
    }

    hide() {
        // super.hide()
        //ViewManager remove dd
        this.touchEnabled = false;
        ViewManager.instance.hide(this.node);
    }

    _visibleDirty: boolean;

    get visible() { return this._visibleDirty; }



    set topMost(b) {
        if (this._topMost) this._topMost = b;
        this.node.zIndex = 9999;
    }

    get topMost() {
        return this._topMost;
    }

    showAnimationNextFrame(callback) {
        this.scheduleOnce(_ => {
            UIFunctions.doShowAnimations(this.animations, callback)
        }, 0)
    }

    get touchEnabled() {
        if (this.touchBlocker) {
            return !this.touchBlocker.active
        }
        return true;
    }

    set touchEnabled(b) {
        if (this.touchBlocker) {
            this.touchBlocker.active = !b
        }
    }

    // setTouchEnabled(bEnabled){
    //     this.touchBlockerComp.enabled = bEnabled;
    //     // UIFunctions.setTouchEnabled(this.node,bEnabled);
    // }

    show(...params) {
        this.node.active = true;
        //reset zindex 
        if (this.topMost)
            this.node.zIndex = 9999;
        this.log("[View] show:", this.name, params);
        UIFunctions.stopAnimations(this.animations);

        // call next frames 
        // this.showAnimationDelay()
        //确保在widget 更新结束后开始动画 ，
        return new Promise<View>((resolve, reject) => {
            let self = this;

            let showFinishCallback = function () {
                if (!self.touchEnabled)
                    self.touchEnabled = true;
                let ret = null;
                if (self.target && self.target.onShown) {
                    try {
                        ret = self.target.onShown(...params);
                    } catch (err) {
                        self.error(err)
                    }
                }
                evt.emit(self.node.name + ".onShown", self, ret, params)
                evt.emit("View.onShown", self, ret, params);
                resolve(self);
            }
            this.showAnimationNextFrame(showFinishCallback)
            this._visibleDirty = true;
            evt.emitDelay(0, self.node.name + ".onShown.Before", self, params)
            evt.emit("View.onShow", self, params);
            // mvc view 
            // let mv = this.getComponent(mvc_View)
            // mv && mv.render()
            if (this.target && this.target.onShow) {
                try {
                    this.target.onShow(...params);
                } catch (err) {
                    this.error(err)
                }
            }
            // cc.Component.EventHandler.emitEvents(this.onShownEvents,[params]);
        })
    }
}
