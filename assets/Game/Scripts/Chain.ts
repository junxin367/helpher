// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Game from "./Game";
import ccUtil from "../../framework/utils/ccUtil";
import { PlayerInfo } from "./Common/Base/PlayerInfo";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Chain extends cc.Component {

    @property(cc.Node)
    tielian: cc.Node = null;

    @property(cc.Node)
    chain_item: cc.Node = null;

    @property(cc.Node)
    handler: cc.Node = null;

    @property(Number)
    currentLen:number = 0;

    @property(Number)
    maxLen:number = 0;

    isMove: boolean = true

    collider: cc.PhysicsBoxCollider;

    onLoad () {
        this.handler.on(cc.Node.EventType.TOUCH_START, this.click, this);
        this.handler.on(cc.Node.EventType.TOUCH_MOVE, this.click_move, this);
        this.handler.on(cc.Node.EventType.TOUCH_END, this.over, this);
        this.handler.on(cc.Node.EventType.TOUCH_CANCEL, this.over, this);
        // this.schedule(this.creatChain,0)
        this.showCurrent();
    }

    start () {
        if(!PlayerInfo.isPlayingDaily)return;
        let sp = this.getComponent(cc.Sprite);
        ccUtil.setDisplay(sp,"/Img/chain/yuan_2")
    }

    showCurrent(){
        // if(this.tielian.height < this.currentLen+35){

        //     this.unschedule(this.showCurrent);
        //     return;
        // }
        // this.up();
        let sub = this.currentLen -  this.tielian.height;
        this.tielian.height  = this.currentLen
        this.tielian.y -= sub;

        this.collider = this.tielian.getComponent(cc.PhysicsBoxCollider);

            this.collider.offset = cc.v2(0,this.maxLen/2);
            this.collider.size.height = this.maxLen;
            this.tielian.getComponent(cc.RigidBody).syncPosition(true);
    
  
    }

    // creatChain(){
    //     let node = cc.instantiate(this.chain_item);
    //     this.tielian.insertChild(node,0);
    //     if(this.tielian.height >= this.maxLen){
    //         this.unschedule(this.creatChain);
    //         if(this.currentLen == this.maxLen)return;
    //         this.schedule(this.showCurrent,0)
    //         return;
    //     }
    // }

    click(){
        this.isMove = true;
     
    }

    click_move(e){
        var delta = e.touch.getDelta();
        // if(delta.y > 4){
        //     this.up()
         
        // }else if(delta.y < -4){
        //     this.down()
        // }
        if(this.tielian.height -delta.y <= 0 || this.tielian.height -delta.y >= this.maxLen){
            return;
        }
        
        this.tielian.height -= delta.y
        this.tielian.y += delta.y;
        // this.collider.offset = cc.v2(0,this.tielian.height/2);
        // this.collider.size.height = this.tielian.height;
        // this.tielian.getComponent(cc.RigidBody).syncPosition(true);
    }

    over(){

    }
}
