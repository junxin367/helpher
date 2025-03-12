
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Chain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcQ2hhaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsdURBQWtEO0FBQ2xELHVEQUFzRDtBQUVoRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQThGQztRQTNGRyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZ0JBQVUsR0FBVSxDQUFDLENBQUM7UUFHdEIsWUFBTSxHQUFVLENBQUMsQ0FBQztRQUVsQixZQUFNLEdBQVksSUFBSSxDQUFBOztJQTZFMUIsQ0FBQztJQXpFRyxzQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FB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T0FDYSxLQUFLLENBOEZ6QjtJQUFELFlBQUM7Q0E5RkQsQUE4RkMsQ0E5RmtDLEVBQUUsQ0FBQyxTQUFTLEdBOEY5QztrQkE5Rm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWUgZnJvbSBcIi4vR2FtZVwiO1xuaW1wb3J0IGNjVXRpbCBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3V0aWxzL2NjVXRpbFwiO1xuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuL0NvbW1vbi9CYXNlL1BsYXllckluZm9cIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFpbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0aWVsaWFuOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNoYWluX2l0ZW06IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGFuZGxlcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoTnVtYmVyKVxuICAgIGN1cnJlbnRMZW46bnVtYmVyID0gMDtcblxuICAgIEBwcm9wZXJ0eShOdW1iZXIpXG4gICAgbWF4TGVuOm51bWJlciA9IDA7XG5cbiAgICBpc01vdmU6IGJvb2xlYW4gPSB0cnVlXG5cbiAgICBjb2xsaWRlcjogY2MuUGh5c2ljc0JveENvbGxpZGVyO1xuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVyLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLmNsaWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVyLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMuY2xpY2tfbW92ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlci5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub3ZlciwgdGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlci5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub3ZlciwgdGhpcyk7XG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGUodGhpcy5jcmVhdENoYWluLDApXG4gICAgICAgIHRoaXMuc2hvd0N1cnJlbnQoKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGlmKCFQbGF5ZXJJbmZvLmlzUGxheWluZ0RhaWx5KXJldHVybjtcbiAgICAgICAgbGV0IHNwID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgY2NVdGlsLnNldERpc3BsYXkoc3AsXCIvSW1nL2NoYWluL3l1YW5fMlwiKVxuICAgIH1cblxuICAgIHNob3dDdXJyZW50KCl7XG4gICAgICAgIC8vIGlmKHRoaXMudGllbGlhbi5oZWlnaHQgPCB0aGlzLmN1cnJlbnRMZW4rMzUpe1xuXG4gICAgICAgIC8vICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5zaG93Q3VycmVudCk7XG4gICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gdGhpcy51cCgpO1xuICAgICAgICBsZXQgc3ViID0gdGhpcy5jdXJyZW50TGVuIC0gIHRoaXMudGllbGlhbi5oZWlnaHQ7XG4gICAgICAgIHRoaXMudGllbGlhbi5oZWlnaHQgID0gdGhpcy5jdXJyZW50TGVuXG4gICAgICAgIHRoaXMudGllbGlhbi55IC09IHN1YjtcblxuICAgICAgICB0aGlzLmNvbGxpZGVyID0gdGhpcy50aWVsaWFuLmdldENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbGxpZGVyLm9mZnNldCA9IGNjLnYyKDAsdGhpcy5tYXhMZW4vMik7XG4gICAgICAgICAgICB0aGlzLmNvbGxpZGVyLnNpemUuaGVpZ2h0ID0gdGhpcy5tYXhMZW47XG4gICAgICAgICAgICB0aGlzLnRpZWxpYW4uZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkuc3luY1Bvc2l0aW9uKHRydWUpO1xuICAgIFxuICBcbiAgICB9XG5cbiAgICAvLyBjcmVhdENoYWluKCl7XG4gICAgLy8gICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5jaGFpbl9pdGVtKTtcbiAgICAvLyAgICAgdGhpcy50aWVsaWFuLmluc2VydENoaWxkKG5vZGUsMCk7XG4gICAgLy8gICAgIGlmKHRoaXMudGllbGlhbi5oZWlnaHQgPj0gdGhpcy5tYXhMZW4pe1xuICAgIC8vICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY3JlYXRDaGFpbik7XG4gICAgLy8gICAgICAgICBpZih0aGlzLmN1cnJlbnRMZW4gPT0gdGhpcy5tYXhMZW4pcmV0dXJuO1xuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnNob3dDdXJyZW50LDApXG4gICAgLy8gICAgICAgICByZXR1cm47XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBjbGljaygpe1xuICAgICAgICB0aGlzLmlzTW92ZSA9IHRydWU7XG4gICAgIFxuICAgIH1cblxuICAgIGNsaWNrX21vdmUoZSl7XG4gICAgICAgIHZhciBkZWx0YSA9IGUudG91Y2guZ2V0RGVsdGEoKTtcbiAgICAgICAgLy8gaWYoZGVsdGEueSA+IDQpe1xuICAgICAgICAvLyAgICAgdGhpcy51cCgpXG4gICAgICAgICBcbiAgICAgICAgLy8gfWVsc2UgaWYoZGVsdGEueSA8IC00KXtcbiAgICAgICAgLy8gICAgIHRoaXMuZG93bigpXG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYodGhpcy50aWVsaWFuLmhlaWdodCAtZGVsdGEueSA8PSAwIHx8IHRoaXMudGllbGlhbi5oZWlnaHQgLWRlbHRhLnkgPj0gdGhpcy5tYXhMZW4pe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnRpZWxpYW4uaGVpZ2h0IC09IGRlbHRhLnlcbiAgICAgICAgdGhpcy50aWVsaWFuLnkgKz0gZGVsdGEueTtcbiAgICAgICAgLy8gdGhpcy5jb2xsaWRlci5vZmZzZXQgPSBjYy52MigwLHRoaXMudGllbGlhbi5oZWlnaHQvMik7XG4gICAgICAgIC8vIHRoaXMuY29sbGlkZXIuc2l6ZS5oZWlnaHQgPSB0aGlzLnRpZWxpYW4uaGVpZ2h0O1xuICAgICAgICAvLyB0aGlzLnRpZWxpYW4uZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkuc3luY1Bvc2l0aW9uKHRydWUpO1xuICAgIH1cblxuICAgIG92ZXIoKXtcblxuICAgIH1cbn1cbiJdfQ==