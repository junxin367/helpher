import { ValueChangeAction } from "../../misc/BoostsAction";

const {ccclass, property,requireComponent} = cc._decorator;

@ccclass
@requireComponent(cc.Camera)
export default class FollowCamera extends cc.Component {
    camera:cc.Camera;

    @property(cc.Node)
    target:cc.Node = null;

    offset: cc.Vec2 = cc.Vec2.ZERO;

    onLoad()
    {
        this.camera = this.getComponent(cc.Camera);
    }

    start () {
    }

    reset()
    {
        this.node.y = 0;
        this.offset = cc.Vec2.ZERO;
    }

    startFollow(target?)
    {
        this.target = target;
    }
    velocity:cc.Vec2 = cc.Vec2.ZERO;

    animOffset(offset: number,dur = 1.0): any {
        let action = ValueChangeAction.create(dur,this.offset.y,offset,value=>{
            this.offset.y = value;
        }).easing(cc.easeSineInOut())
        this.node.runAction(action)
    }

    canSee(node:cc.Node)
    {
        let top = node.position.add(cc.v3(0,node.height/2))
        let pos = this.camera.getWorldToCameraPoint(top,cc.Vec2.ZERO);
        if(pos.y > -cc.visibleRect.height/2){
            return true
        }
        return false
    }

    update()
    {
        if(!this.target) return;
        // this.camera.node.y = this.target.y + this.offset.y;
        this.camera.node.x = this.target.x + this.offset.x;
        // let pos = this.node.position; 
        // let vec = this.target.node.position.sub(pos);
        // vec.normalizeSelf().mulSelf(10).subSelf(this.velocity)
        // this.velocity.addSelf(vec);
        // this.camera.node.setPosition(pos.add(this.velocity));
    }

    // update (dt) {}
}
