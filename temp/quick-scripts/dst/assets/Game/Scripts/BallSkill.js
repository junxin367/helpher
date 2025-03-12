
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/BallSkill.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9bbd3+AyDRLnYjo4lZsYKNC', 'BallSkill');
// Game/Scripts/BallSkill.ts

"use strict";
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
var MoveEngine_1 = require("../../framework/extension/movement/MoveEngine");
var EnemyBallUp_1 = require("./EnemyBallUp");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BallSkill = /** @class */ (function (_super) {
    __extends(BallSkill, _super);
    function BallSkill() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.target = null;
        _this.moveEngine = null;
        return _this;
    }
    BallSkill.prototype.onLoad = function () {
    };
    BallSkill.prototype.start = function () {
        this.moveEngine = this.addComponent(MoveEngine_1.default);
        this.moveEngine.maxSpeed = 25;
    };
    BallSkill.prototype.update = function () {
        if (!cc.isValid(this.target))
            return;
        var enemypos = this.target.position;
        // this.moveEngine.target = g.v2(enemypos)
        var f = this.moveEngine.seek(enemypos);
        this.moveEngine.applyForce(f);
        var v = enemypos.subSelf(this.node.position);
        var distsq = v.magSqr();
        if (distsq < 100) {
            //敌人死亡 飞上天
            this.target.getOrAddComponent(EnemyBallUp_1.default);
            this.node.destroy();
        }
    };
    BallSkill.prototype.trigger = function (target) {
        this.target = target;
    };
    BallSkill = __decorate([
        ccclass
    ], BallSkill);
    return BallSkill;
}(cc.Component));
exports.default = BallSkill;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcQmFsbFNraWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRFQUF1RTtBQUN2RSw2Q0FBd0M7QUFFcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUE7QUFFekM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUE4QkM7UUE3QkcsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2QixnQkFBVSxHQUFlLElBQUksQ0FBQzs7SUE0QmxDLENBQUM7SUEzQkcsMEJBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCx5QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFVLENBQUMsQ0FBQTtRQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELDBCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQUUsT0FBTztRQUNyQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNwQywwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzVDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN4QixJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUU7WUFDZCxVQUFVO1lBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBVyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFFRCwyQkFBTyxHQUFQLFVBQVEsTUFBTTtRQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUE3QmdCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0E4QjdCO0lBQUQsZ0JBQUM7Q0E5QkQsQUE4QkMsQ0E5QnNDLEVBQUUsQ0FBQyxTQUFTLEdBOEJsRDtrQkE5Qm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92ZUVuZ2luZSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi9tb3ZlbWVudC9Nb3ZlRW5naW5lXCI7XHJcbmltcG9ydCBFbmVteUJhbGxVcCBmcm9tIFwiLi9FbmVteUJhbGxVcFwiO1xyXG5cclxubGV0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3JcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbFNraWxsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHRhcmdldDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBtb3ZlRW5naW5lOiBNb3ZlRW5naW5lID0gbnVsbDtcclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlRW5naW5lID0gdGhpcy5hZGRDb21wb25lbnQoTW92ZUVuZ2luZSlcclxuICAgICAgICB0aGlzLm1vdmVFbmdpbmUubWF4U3BlZWQgPSAyNTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKHRoaXMudGFyZ2V0KSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBlbmVteXBvcyA9IHRoaXMudGFyZ2V0LnBvc2l0aW9uO1xyXG4gICAgICAgIC8vIHRoaXMubW92ZUVuZ2luZS50YXJnZXQgPSBnLnYyKGVuZW15cG9zKVxyXG4gICAgICAgIGxldCBmID0gdGhpcy5tb3ZlRW5naW5lLnNlZWsoZW5lbXlwb3MpO1xyXG4gICAgICAgIHRoaXMubW92ZUVuZ2luZS5hcHBseUZvcmNlKGYpO1xyXG4gICAgICAgIGxldCB2ID0gZW5lbXlwb3Muc3ViU2VsZih0aGlzLm5vZGUucG9zaXRpb24pXHJcbiAgICAgICAgbGV0IGRpc3RzcSA9IHYubWFnU3FyKCk7XHJcbiAgICAgICAgaWYgKGRpc3RzcSA8IDEwMCkge1xyXG4gICAgICAgICAgICAvL+aVjOS6uuatu+S6oSDpo57kuIrlpKlcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQuZ2V0T3JBZGRDb21wb25lbnQoRW5lbXlCYWxsVXApO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cmlnZ2VyKHRhcmdldCkge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgfVxyXG59Il19