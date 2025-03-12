import MoveBase from "./SMoveBase";

const {ccclass, property} = cc._decorator;
@ccclass
export default class ElegantFollow extends MoveBase
{
    maxSpeed:number = 10;
    dir:cc.Vec2 = cc.Vec2.UP;
    enableTarget:boolean = true;

    targetAngle:number = 0;

    rotateSpeed:number = 10;

    @property({tooltip:"0-1 is appropriate value range"})
    intervalCheckTarget:number = 1;

    onLoad()
    {
    }

    reset()
    {
        this.dir = cc.Vec2.UP;
        this.node.rotation = 0;
        this.targetAngle = 0;
        this.tar = null;
    }

    onTargetChanged()
    {
        if(!this.target) return;
        //dir
        let box = this.node.getBoundingBoxToWorld();
        let targetpos = this.target.getBoundingBoxToWorld().center
        let v = targetpos.sub(box.center);
        this.targetAngle = v.signAngle(cc.Vec2.RIGHT) * cc.macro.DEG;
    }

    _step(dt?)
    {
        // move via velocity
        let ang = this.dir.signAngle(cc.Vec2.RIGHT) * cc.macro.DEG
        if(this.enableTarget)
        {
            if(Math.abs((ang  )% 360 - (this.targetAngle )  ) > 30)
            {
                this.dir = this.dir.rotateSelf(-cc.macro.RAD * this.rotateSpeed)
                // 绕半全后重新计算 target 
            }else{
                this.onTargetChanged();
            }
        }
        this.velocity = this.dir.mul(this.maxSpeed)
        this.node.setPosition(this.node.position.add(this.velocity));
        if(this.rotateByVelocity  )
        {
            this.node.rotation = this.rotationOffset + ang ;
        }
    }

    onEnable()
    {
        // this.schedule(this.onTargetChanged,this.intervalCheckTarget)
    }

    onDisable()
    {
        // get target angle
        // this.unschedule(this.onTargetChanged);
    }

}