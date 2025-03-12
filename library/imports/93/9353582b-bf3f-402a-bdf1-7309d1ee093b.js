"use strict";
cc._RF.push(module, '93535grvz9AKr3xcwnR7gk7', 'Chain');
// Game/Scripts/Chain.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ccUtil_1 = require("../../framework/utils/ccUtil");
var PlayerInfo_1 = require("./Common/Base/PlayerInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Chain = /** @class */ (function (_super) {
    __extends(Chain, _super);
    function Chain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tielian = null;
        _this.chain_item = null;
        _this.handler = null;
        _this.currentLen = 0;
        _this.maxLen = 0;
        _this.isMove = true;
        return _this;
    }
    Chain.prototype.onLoad = function () {
        this.handler.on(cc.Node.EventType.TOUCH_START, this.click, this);
        this.handler.on(cc.Node.EventType.TOUCH_MOVE, this.click_move, this);
        this.handler.on(cc.Node.EventType.TOUCH_END, this.over, this);
        this.handler.on(cc.Node.EventType.TOUCH_CANCEL, this.over, this);
        // this.schedule(this.creatChain,0)
        this.showCurrent();
    };
    Chain.prototype.start = function () {
        if (!PlayerInfo_1.PlayerInfo.isPlayingDaily)
            return;
        var sp = this.getComponent(cc.Sprite);
        ccUtil_1.default.setDisplay(sp, "/Img/chain/yuan_2");
    };
    Chain.prototype.showCurrent = function () {
        // if(this.tielian.height < this.currentLen+35){
        //     this.unschedule(this.showCurrent);
        //     return;
        // }
        // this.up();
        var sub = this.currentLen - this.tielian.height;
        this.tielian.height = this.currentLen;
        this.tielian.y -= sub;
        this.collider = this.tielian.getComponent(cc.PhysicsBoxCollider);
        this.collider.offset = cc.v2(0, this.maxLen / 2);
        this.collider.size.height = this.maxLen;
        this.tielian.getComponent(cc.RigidBody).syncPosition(true);
    };
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
    Chain.prototype.click = function () {
        this.isMove = true;
    };
    Chain.prototype.click_move = function (e) {
        var delta = e.touch.getDelta();
        // if(delta.y > 4){
        //     this.up()
        // }else if(delta.y < -4){
        //     this.down()
        // }
        if (this.tielian.height - delta.y <= 0 || this.tielian.height - delta.y >= this.maxLen) {
            return;
        }
        this.tielian.height -= delta.y;
        this.tielian.y += delta.y;
        // this.collider.offset = cc.v2(0,this.tielian.height/2);
        // this.collider.size.height = this.tielian.height;
        // this.tielian.getComponent(cc.RigidBody).syncPosition(true);
    };
    Chain.prototype.over = function () {
    };
    __decorate([
        property(cc.Node)
    ], Chain.prototype, "tielian", void 0);
    __decorate([
        property(cc.Node)
    ], Chain.prototype, "chain_item", void 0);
    __decorate([
        property(cc.Node)
    ], Chain.prototype, "handler", void 0);
    __decorate([
        property(Number)
    ], Chain.prototype, "currentLen", void 0);
    __decorate([
        property(Number)
    ], Chain.prototype, "maxLen", void 0);
    Chain = __decorate([
        ccclass
    ], Chain);
    return Chain;
}(cc.Component));
exports.default = Chain;

cc._RF.pop();