import Signal from "../core/Signal";

const {ccclass, property,menu} = cc._decorator;

@ccclass
@menu("其它/PlayController")
export default class PlayController extends cc.Component {

    isTouching:boolean = false;

    @property
    canHolding:boolean = false;

    holdingSigal:Signal = new Signal();

    pressSignal:Signal = new Signal();

    releaseSignal:Signal = new Signal()

    @property(cc.Vec2)
    pos:cc.Vec2 = cc.Vec2.ZERO;

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START,this.onBegan,this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onMove,this);
        this.node.on(cc.Node.EventType.TOUCH_END,this.onEnd,this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL,this.onEnd,this);
    }

    onDestroy()
    {
        this.node.off(cc.Node.EventType.TOUCH_START,this.onBegan,this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE,this.onMove,this);
        this.node.off(cc.Node.EventType.TOUCH_END,this.onEnd,this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL,this.onEnd,this);
    }


    start () {

    }

    onBegan(e)
    {
        this.isTouching = true;
        this.pressSignal.fire()
        let p = e.touch.getLocation()
        p = this.node.convertToNodeSpaceAR(p)
        this.pos = p;
    }

    onMove(e)
    {
        let p = e.touch.getLocation()
        p = this.node.convertToNodeSpaceAR(p)
        this.pos = p;
    }

    onEnd()
    {
        this.isTouching = false;
        this.releaseSignal.fire();
    }
    
    update()
    {
        if(this.canHolding && this.isTouching){
            this.holdingSigal.fire(this.pos);
        }
    }

}