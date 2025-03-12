
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/movement/MoveEngine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7671cg+6/9FY5+/MGGxplsg', 'MoveEngine');
// framework/extension/movement/MoveEngine.ts

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
exports.Behavior = void 0;
var SMoveBase_1 = require("./SMoveBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var Behavior;
(function (Behavior) {
    Behavior[Behavior["Simple"] = 0] = "Simple";
    Behavior[Behavior["FixedPosition"] = 1] = "FixedPosition";
    Behavior[Behavior["Seek"] = 2] = "Seek";
    Behavior[Behavior["Arrive"] = 3] = "Arrive";
    Behavior[Behavior["Wander"] = 4] = "Wander";
    Behavior[Behavior["Bezeir"] = 5] = "Bezeir";
    Behavior[Behavior["Path"] = 6] = "Path";
})(Behavior = exports.Behavior || (exports.Behavior = {}));
var ActivateType;
(function (ActivateType) {
    ActivateType[ActivateType["Load"] = 0] = "Load";
    ActivateType[ActivateType["FirstShow"] = 1] = "FirstShow";
    ActivateType[ActivateType["Delay"] = 2] = "Delay";
})(ActivateType || (ActivateType = {}));
var WANDER_CIRCLE_DIST = 0;
var WANDER_CIRCLE_RADIUS = 1;
var WANDER_ANGLE_CHANGE = 1;
var MoveEngine = /** @class */ (function (_super) {
    __extends(MoveEngine, _super);
    function MoveEngine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moveType = Behavior.Simple;
        _this.maxSpeed = 15;
        _this.forceWeight = 0.1;
        _this.acc = cc.Vec2.ZERO;
        _this.gravity = new cc.Vec2(0, 0);
        //---------------------------------------path relative-------------------------------------
        _this.path = [];
        _this._runningPath = [];
        _this.pathRadius = 10;
        _this.isPathLoop = true;
        // @property
        // resetPathWhenFinish = false;
        _this._currentPathIndex = 0;
        //------------------------------------------------------------------------------
        _this.wanderAngle = 0;
        _this._tmp_vec2 = cc.v2();
        return _this;
    }
    MoveEngine_1 = MoveEngine;
    MoveEngine.prototype.onLoad = function () {
    };
    MoveEngine.prototype.start = function () {
        if (this.rotateByVelocity) {
            this.node.angle = -(this.rotationOffset + this.velocity.signAngle(cc.Vec2.RIGHT) * cc.macro.DEG);
        }
        this.setPath(this.path, this.isPathLoop, true);
    };
    MoveEngine.prototype.setPath = function (path, isLoop, isRelativePath) {
        if (isLoop === void 0) { isLoop = false; }
        if (isRelativePath === void 0) { isRelativePath = true; }
        this.isPathLoop = isLoop;
        this._runningPath.splice(0, this._runningPath.length);
        for (var i = 0; i < path.length; i++) {
            var pos = path[i].clone();
            if (isRelativePath) {
                pos.addSelf(this.node.position);
            }
            this._runningPath.push(pos);
        }
        if (this.isPathLoop) {
            if (this._runningPath.length > 0) {
                var pathWayPoint = this._runningPath[0];
                this._runningPath.push(pathWayPoint);
            }
        }
        this._currentPathIndex = 0;
    };
    MoveEngine.prototype.resetPath = function () {
        this.setPath(this.path, this.isPathLoop, true);
    };
    MoveEngine.prototype.reset = function () {
        this.target = null;
        this.velocity = cc.Vec2.ZERO;
        this.resetPath();
    };
    // onBeforeUpdate(callback, target, duration = -1) {
    //     this.addCommand(callback, target, duration)
    // }
    MoveEngine.prototype.changeBeheavior = function (behavior, target) {
        if (target === void 0) { target = null; }
        this.moveType = behavior;
        if (target)
            this.target = target;
    };
    MoveEngine.prototype.applyForce = function (v2Orx, y) {
        var x = v2Orx;
        if (v2Orx instanceof cc.Vec2) {
            x = v2Orx.x;
            y = v2Orx.y;
        }
        //@ts-ignore
        this.acc.x += x;
        this.acc.y += y;
    };
    MoveEngine.prototype.getNormalPoint = function (point, a, b) {
        var ab = b.sub(a);
        var ap = point.sub(a);
        // ab.normalizeSelf()
        // let ap_ab = ab.mul(ap.dot(ab))
        var ap_ab = ap.project(ab);
        return a.add(ap_ab);
    };
    MoveEngine.prototype.drawPath = function (context) {
        // context.clear();
        context.moveTo(this._runningPath[0].x, this._runningPath[0].y);
        for (var i = 0; i < this._runningPath.length - 1; i++) {
            var a = this._runningPath[i];
            var b = this._runningPath[i + 1];
            context.lineTo(b.x, b.y);
        }
        // Game.instance.graphics.ellipse(target.x,target.y ,4,4)
        context.stroke();
    };
    MoveEngine.prototype.followPath = function (path, pathRadius) {
        if (this._currentPathIndex == path.length - 1) {
            // let distsq = this.node.position.sub(this._runningPath[this._currentPathIndex]).magSqr();
            // if(distsq < MoveEntity.ReachPathEndThreshold)
            // {
            // console.log("resetpath wehne finei");
            // if (this.resetPathWhenFinish)
            // {
            //     this.resetPath();
            // }
            // }
            return cc.Vec2.ZERO;
        }
        // this.drawPath(Game.instance.graphics);
        var predict = this.velocity.clone();
        predict.normalizeSelf();
        predict.mulSelf(MoveEngine_1.PathPredictLength);
        predict.addSelf(this.node.position); //predictLocation
        var target;
        // for (var i = 0 ;i < 2; i++)
        // {
        var a = path[this._currentPathIndex];
        var b = path[this._currentPathIndex + 1];
        var normalpoint = this.getNormalPoint(predict, a, b);
        var distsq = normalpoint.sub(b).magSqr();
        if (distsq < MoveEngine_1.ReachPathEndThreshold) {
            this._currentPathIndex += 1;
            if (this.isPathLoop && this._currentPathIndex >= path.length - 1) {
                this._currentPathIndex = 0;
            }
        }
        target = (normalpoint).addSelf(b.sub(a).normalizeSelf().mulSelf(MoveEngine_1.PathPredictLength + 10));
        if (distsq > pathRadius * pathRadius) {
            return this.seek(target);
        }
        return cc.Vec2.ZERO;
    };
    MoveEngine.prototype.seek = function (position) {
        var v = this._tmp_vec2;
        // cc.Vec2.set(v, position.x, position.y)
        v.x = position.x;
        v.y = position.y;
        v.subSelf(this.node.position);
        v.normalizeSelf();
        v.mulSelf(this.maxSpeed);
        v.subSelf(this.velocity);
        // this.limitVec2(v,this.maxSpeed);
        return v;
    };
    MoveEngine.prototype.arrive = function (position) {
        var v = position.clone();
        v.subSelf(this.node.position);
        var d = v.mag();
        v.normalizeSelf();
        if (d < 100) {
            var m = this.map(d, 0, 100, 0, this.maxSpeed);
            v.mulSelf(m);
        }
        else {
            v.mulSelf(this.maxSpeed);
        }
        v.subSelf(this.velocity);
        //limit maxforce 
        return v;
    };
    MoveEngine.prototype.wander = function () {
        var center = this.node.position;
        var size = this.node.parent.getContentSize();
        if (center.x < -size.width / 2 || center.y < -size.height / 2 || center.x > size.width / 2 || center.y > size.height / 2) {
            return this.seek(cc.v2(0, 0));
        }
        var circleCenter = this.velocity.clone();
        circleCenter.normalize();
        circleCenter.mulSelf(WANDER_CIRCLE_DIST);
        var displacement = cc.v2(-1, 0);
        displacement.mulSelf(WANDER_CIRCLE_RADIUS);
        displacement.rotateSelf(this.wanderAngle);
        this.wanderAngle += g.randomFloat(-WANDER_ANGLE_CHANGE, WANDER_ANGLE_CHANGE);
        return circleCenter.add(displacement);
    };
    MoveEngine.prototype._applyForces = function () {
        var f = cc.Vec2.ZERO;
        var pos = this.tarPos;
        //@ts-ignore
        if (this.target && this.target.activeInHierarchy) {
            //@ts-ignore
            pos = this.target.position;
        }
        if (this.moveType == Behavior.Seek) {
            f.addSelf(this.seek(pos));
        }
        else if (this.moveType == Behavior.Arrive) {
            f.addSelf(this.arrive(pos));
        }
        if (this.moveType == Behavior.Path && this._runningPath.length > 0) {
            f.addSelf(this.followPath(this._runningPath, this.pathRadius));
        }
        else if (this.moveType == Behavior.Wander) {
            f.addSelf(this.wander());
        }
        this.applyForce(this.gravity.x, this.gravity.y);
        this.applyForce(f.x, f.y);
    };
    MoveEngine.prototype.limitVec2 = function (vec, max) {
        var vec_length_sq = vec.magSqr();
        if (vec_length_sq > max * max) {
            vec.mulSelf(max / Math.sqrt(vec_length_sq)); //normal and mult
        }
        return vec_length_sq;
    };
    MoveEngine.prototype.map = function (val, s1, s2, e1, e2) {
        var newVal = (e2 - e1) * val / (s2 - s1) + e1;
        return Math.max(e1, Math.min(newVal, e2));
    };
    MoveEngine.prototype._step = function (dt) {
        this._applyForces();
        var v = this.acc.mul(this.forceWeight);
        this.velocity.addSelf(v);
        this.limitVec2(this.velocity, this.maxSpeed);
        // let speed = this.velocity.mag();
        // this.velocity.normalizeSelf();
        // this.velocity.mulSelf(Math.min(this.maxSpeed,speed));
        // this.velocity.mulSelf(0.98);
        this.node.setPosition(this.node.position.add(this.velocity));
        this.acc.set(cc.Vec2.ZERO);
        if (this.rotateByVelocity) {
            if (this.moveType != Behavior.Simple)
                this.node.angle = -(this.rotationOffset + this.velocity.signAngle(cc.Vec2.RIGHT) * cc.macro.DEG);
        }
    };
    var MoveEngine_1;
    MoveEngine.Behavior = Behavior;
    MoveEngine.ReachPathEndThreshold = 400; //20 x 20
    MoveEngine.PathPredictLength = 25;
    __decorate([
        property({ type: cc.Enum(Behavior) })
    ], MoveEngine.prototype, "moveType", void 0);
    __decorate([
        property
    ], MoveEngine.prototype, "maxSpeed", void 0);
    __decorate([
        property
    ], MoveEngine.prototype, "forceWeight", void 0);
    __decorate([
        property({ type: [cc.Vec2], visible: function () { return this.moveType == Behavior.Path; } })
    ], MoveEngine.prototype, "path", void 0);
    __decorate([
        property({ visible: function () { return this.moveType == Behavior.Path; } })
    ], MoveEngine.prototype, "pathRadius", void 0);
    __decorate([
        property({ visible: function () { return this.moveType == Behavior.Path; } })
    ], MoveEngine.prototype, "isPathLoop", void 0);
    MoveEngine = MoveEngine_1 = __decorate([
        ccclass,
        menu('movement/MoveEngine')
    ], MoveEngine);
    return MoveEngine;
}(SMoveBase_1.default));
exports.default = MoveEngine;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXG1vdmVtZW50XFxNb3ZlRW5naW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBbUM7QUFFN0IsSUFBQSxLQUE4QixFQUFFLENBQUMsVUFBVSxFQUF6QyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxJQUFJLFVBQWtCLENBQUM7QUFFbEQsSUFBWSxRQVFYO0FBUkQsV0FBWSxRQUFRO0lBQ2hCLDJDQUFNLENBQUE7SUFDTix5REFBYSxDQUFBO0lBQ2IsdUNBQUksQ0FBQTtJQUNKLDJDQUFNLENBQUE7SUFDTiwyQ0FBTSxDQUFBO0lBQ04sMkNBQU0sQ0FBQTtJQUNOLHVDQUFJLENBQUE7QUFDUixDQUFDLEVBUlcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFRbkI7QUFFRCxJQUFLLFlBSUo7QUFKRCxXQUFLLFlBQVk7SUFDYiwrQ0FBSSxDQUFBO0lBQ0oseURBQVMsQ0FBQTtJQUNULGlEQUFLLENBQUE7QUFDVCxDQUFDLEVBSkksWUFBWSxLQUFaLFlBQVksUUFJaEI7QUFDRCxJQUFNLGtCQUFrQixHQUFHLENBQUMsQ0FBQztBQUM3QixJQUFNLG9CQUFvQixHQUFHLENBQUMsQ0FBQztBQUMvQixJQUFNLG1CQUFtQixHQUFHLENBQUMsQ0FBQztBQUc5QjtJQUF3Qyw4QkFBUTtJQUFoRDtRQUFBLHFFQW9RQztRQS9QRyxjQUFRLEdBQWEsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUdyQyxjQUFRLEdBQVcsRUFBRSxDQUFDO1FBRXRCLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBRTFCLFNBQUcsR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQTtRQUMzQixhQUFPLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQywyRkFBMkY7UUFFM0YsVUFBSSxHQUFjLEVBQUUsQ0FBQTtRQUNwQixrQkFBWSxHQUFjLEVBQUUsQ0FBQztRQUU3QixnQkFBVSxHQUFXLEVBQUUsQ0FBQztRQUV4QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixZQUFZO1FBQ1osK0JBQStCO1FBQy9CLHVCQUFpQixHQUFXLENBQUMsQ0FBQztRQUM5QixnRkFBZ0Y7UUFFaEYsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFtSXhCLGVBQVMsR0FBWSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUE7O0lBc0doQyxDQUFDO21CQXBRb0IsVUFBVTtJQThCM0IsMkJBQU0sR0FBTjtJQUNBLENBQUM7SUFFRCwwQkFBSyxHQUFMO1FBQ0ksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BHO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELDRCQUFPLEdBQVAsVUFBUSxJQUFlLEVBQUUsTUFBdUIsRUFBRSxjQUE4QjtRQUF2RCx1QkFBQSxFQUFBLGNBQXVCO1FBQUUsK0JBQUEsRUFBQSxxQkFBOEI7UUFDNUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzFCLElBQUksY0FBYyxFQUFFO2dCQUNoQixHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7YUFDbEM7WUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMvQjtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDOUIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDeEM7U0FDSjtRQUNELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELDhCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsMEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxvREFBb0Q7SUFDcEQsa0RBQWtEO0lBQ2xELElBQUk7SUFFSixvQ0FBZSxHQUFmLFVBQWdCLFFBQWtCLEVBQUUsTUFBc0I7UUFBdEIsdUJBQUEsRUFBQSxhQUFzQjtRQUN0RCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLE1BQU07WUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUM3QixDQUFDO0lBR0QsK0JBQVUsR0FBVixVQUFXLEtBQXVCLEVBQUUsQ0FBVTtRQUMxQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDZCxJQUFJLEtBQUssWUFBWSxFQUFFLENBQUMsSUFBSSxFQUFFO1lBQzFCLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1osQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDZjtRQUNELFlBQVk7UUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFHRCxtQ0FBYyxHQUFkLFVBQWUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3RCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixxQkFBcUI7UUFDckIsaUNBQWlDO1FBQ2pDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDMUIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFPRCw2QkFBUSxHQUFSLFVBQVMsT0FBTztRQUNaLG1CQUFtQjtRQUNuQixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1lBQ2hDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUI7UUFDRCx5REFBeUQ7UUFDekQsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCwrQkFBVSxHQUFWLFVBQVcsSUFBZSxFQUFFLFVBQWtCO1FBQzFDLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzNDLDJGQUEyRjtZQUMzRixnREFBZ0Q7WUFDaEQsSUFBSTtZQUNKLHdDQUF3QztZQUN4QyxnQ0FBZ0M7WUFDaEMsSUFBSTtZQUNKLHdCQUF3QjtZQUN4QixJQUFJO1lBQ0osSUFBSTtZQUNKLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDdkI7UUFDRCx5Q0FBeUM7UUFDekMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQSxpQkFBaUI7UUFDckQsSUFBSSxNQUFlLENBQUM7UUFDcEIsOEJBQThCO1FBQzlCLElBQUk7UUFDSixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUV4QyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN6QyxJQUFJLE1BQU0sR0FBRyxZQUFVLENBQUMscUJBQXFCLEVBQUU7WUFDM0MsSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsQ0FBQztZQUM1QixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUM5RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO2FBQzlCO1NBQ0o7UUFDRCxNQUFNLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLENBQUMsWUFBVSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFFbkcsSUFBSSxNQUFNLEdBQUcsVUFBVSxHQUFHLFVBQVUsRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUI7UUFDRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFJRCx5QkFBSSxHQUFKLFVBQUssUUFBUTtRQUNULElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdkIseUNBQXlDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QixtQ0FBbUM7UUFDbkMsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFPLFFBQVE7UUFDWCxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFO1lBQ1QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEI7YUFBTTtZQUNILENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekIsaUJBQWlCO1FBQ2pCLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVELDJCQUFNLEdBQU47UUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNoQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM3QyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3RILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxZQUFZLEdBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsRCxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDekIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1FBQ3hDLElBQUksWUFBWSxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzNDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLG1CQUFtQixDQUFDLENBQUE7UUFDNUUsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTyxpQ0FBWSxHQUFwQjtRQUNJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBO1FBQ3BCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdEIsWUFBWTtRQUNaLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFO1lBQzlDLFlBQVk7WUFDWixHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUE7U0FDN0I7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLElBQUksRUFBRTtZQUNoQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtTQUM1QjthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ3pDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2hFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1NBQ2xFO2FBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDekMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUM1QjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTyw4QkFBUyxHQUFqQixVQUFrQixHQUFZLEVBQUUsR0FBRztRQUMvQixJQUFJLGFBQWEsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDakMsSUFBSSxhQUFhLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRTtZQUMzQixHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUI7U0FDakU7UUFDRCxPQUFPLGFBQWEsQ0FBQztJQUN6QixDQUFDO0lBRU8sd0JBQUcsR0FBWCxVQUFZLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO1FBQzNCLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDOUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCwwQkFBSyxHQUFMLFVBQU0sRUFBRztRQUVMLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxtQ0FBbUM7UUFDbkMsaUNBQWlDO1FBQ2pDLHdEQUF3RDtRQUN4RCwrQkFBK0I7UUFFL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDdkIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFNO2dCQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDeEc7SUFDTCxDQUFDOztJQS9QTSxtQkFBUSxHQUFvQixRQUFRLENBQUM7SUFvR3JDLGdDQUFxQixHQUFHLEdBQUcsQ0FBQyxDQUFDLFNBQVM7SUFDdEMsNEJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBbEc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7Z0RBQ0Q7SUFHckM7UUFEQyxRQUFRO2dEQUNhO0lBRXRCO1FBREMsUUFBUTttREFDaUI7SUFNMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGNBQWMsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs0Q0FDMUU7SUFHcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsY0FBYyxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO2tEQUNyRDtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxjQUFjLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7a0RBQ2xEO0lBckJWLFVBQVU7UUFGOUIsT0FBTztRQUNQLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztPQUNQLFVBQVUsQ0FvUTlCO0lBQUQsaUJBQUM7Q0FwUUQsQUFvUUMsQ0FwUXVDLG1CQUFRLEdBb1EvQztrQkFwUW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92ZUJhc2UgZnJvbSBcIi4vU01vdmVCYXNlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZXhwb3J0IGVudW0gQmVoYXZpb3Ige1xyXG4gICAgU2ltcGxlLCAvLyBqdXN0IG1vdmUgd2l0aCB2ZWxvY2l0eVxyXG4gICAgRml4ZWRQb3NpdGlvbiwgLy8gbW92ZSB0byB0YXJnZXQgb25jZSBcclxuICAgIFNlZWssICAgLy9zZWVrIHRvIHRhcmdldFxyXG4gICAgQXJyaXZlLC8vYXJyaXZlIHRvIHRhcmdldFxyXG4gICAgV2FuZGVyLCAvLyB3YW5kZXIgXHJcbiAgICBCZXplaXIsIC8vbW92ZSB3aXRoIGJlemllciBwYXRoIDpUb2RvXHJcbiAgICBQYXRoLC8vbW92ZSB3aXRoIGN1c3RvbSBwYXRoOyA6VG9kbzpcclxufVxyXG5cclxuZW51bSBBY3RpdmF0ZVR5cGUge1xyXG4gICAgTG9hZCxcclxuICAgIEZpcnN0U2hvdyxcclxuICAgIERlbGF5XHJcbn1cclxuY29uc3QgV0FOREVSX0NJUkNMRV9ESVNUID0gMDtcclxuY29uc3QgV0FOREVSX0NJUkNMRV9SQURJVVMgPSAxO1xyXG5jb25zdCBXQU5ERVJfQU5HTEVfQ0hBTkdFID0gMTtcclxuQGNjY2xhc3NcclxuQG1lbnUoJ21vdmVtZW50L01vdmVFbmdpbmUnKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZlRW5naW5lIGV4dGVuZHMgTW92ZUJhc2Uge1xyXG5cclxuICAgIHN0YXRpYyBCZWhhdmlvcjogdHlwZW9mIEJlaGF2aW9yID0gQmVoYXZpb3I7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRW51bShCZWhhdmlvcikgfSlcclxuICAgIG1vdmVUeXBlOiBCZWhhdmlvciA9IEJlaGF2aW9yLlNpbXBsZTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1heFNwZWVkOiBudW1iZXIgPSAxNTtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZm9yY2VXZWlnaHQ6IG51bWJlciA9IDAuMTtcclxuXHJcbiAgICBhY2M6IGNjLlZlYzIgPSBjYy5WZWMyLlpFUk9cclxuICAgIGdyYXZpdHk6IGNjLlZlYzIgPSBuZXcgY2MuVmVjMigwLCAwKTtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tcGF0aCByZWxhdGl2ZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5WZWMyXSwgdmlzaWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5tb3ZlVHlwZSA9PSBCZWhhdmlvci5QYXRoIH0gfSlcclxuICAgIHBhdGg6IGNjLlZlYzJbXSA9IFtdXHJcbiAgICBfcnVubmluZ1BhdGg6IGNjLlZlYzJbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KHsgdmlzaWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5tb3ZlVHlwZSA9PSBCZWhhdmlvci5QYXRoIH0gfSlcclxuICAgIHBhdGhSYWRpdXM6IG51bWJlciA9IDEwO1xyXG4gICAgQHByb3BlcnR5KHsgdmlzaWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5tb3ZlVHlwZSA9PSBCZWhhdmlvci5QYXRoIH0gfSlcclxuICAgIGlzUGF0aExvb3A6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgLy8gQHByb3BlcnR5XHJcbiAgICAvLyByZXNldFBhdGhXaGVuRmluaXNoID0gZmFsc2U7XHJcbiAgICBfY3VycmVudFBhdGhJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgd2FuZGVyQW5nbGU6IG51bWJlciA9IDA7XHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAodGhpcy5yb3RhdGVCeVZlbG9jaXR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IC0odGhpcy5yb3RhdGlvbk9mZnNldCArIHRoaXMudmVsb2NpdHkuc2lnbkFuZ2xlKGNjLlZlYzIuUklHSFQpICogY2MubWFjcm8uREVHKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRQYXRoKHRoaXMucGF0aCwgdGhpcy5pc1BhdGhMb29wLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQYXRoKHBhdGg6IGNjLlZlYzJbXSwgaXNMb29wOiBib29sZWFuID0gZmFsc2UsIGlzUmVsYXRpdmVQYXRoOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuaXNQYXRoTG9vcCA9IGlzTG9vcDtcclxuICAgICAgICB0aGlzLl9ydW5uaW5nUGF0aC5zcGxpY2UoMCwgdGhpcy5fcnVubmluZ1BhdGgubGVuZ3RoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHBhdGhbaV0uY2xvbmUoKTtcclxuICAgICAgICAgICAgaWYgKGlzUmVsYXRpdmVQYXRoKSB7XHJcbiAgICAgICAgICAgICAgICBwb3MuYWRkU2VsZih0aGlzLm5vZGUucG9zaXRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcnVubmluZ1BhdGgucHVzaChwb3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1BhdGhMb29wKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9ydW5uaW5nUGF0aC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGF0aFdheVBvaW50ID0gdGhpcy5fcnVubmluZ1BhdGhbMF1cclxuICAgICAgICAgICAgICAgIHRoaXMuX3J1bm5pbmdQYXRoLnB1c2gocGF0aFdheVBvaW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jdXJyZW50UGF0aEluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXNldFBhdGgoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRQYXRoKHRoaXMucGF0aCwgdGhpcy5pc1BhdGhMb29wLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICB0aGlzLnJlc2V0UGF0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG9uQmVmb3JlVXBkYXRlKGNhbGxiYWNrLCB0YXJnZXQsIGR1cmF0aW9uID0gLTEpIHtcclxuICAgIC8vICAgICB0aGlzLmFkZENvbW1hbmQoY2FsbGJhY2ssIHRhcmdldCwgZHVyYXRpb24pXHJcbiAgICAvLyB9XHJcblxyXG4gICAgY2hhbmdlQmVoZWF2aW9yKGJlaGF2aW9yOiBCZWhhdmlvciwgdGFyZ2V0OiBjYy5Ob2RlID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMubW92ZVR5cGUgPSBiZWhhdmlvcjtcclxuICAgICAgICBpZiAodGFyZ2V0KVxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYXBwbHlGb3JjZSh2Mk9yeDogY2MuVmVjMiB8IG51bWJlciwgeT86IG51bWJlcikge1xyXG4gICAgICAgIGxldCB4ID0gdjJPcng7XHJcbiAgICAgICAgaWYgKHYyT3J4IGluc3RhbmNlb2YgY2MuVmVjMikge1xyXG4gICAgICAgICAgICB4ID0gdjJPcngueDtcclxuICAgICAgICAgICAgeSA9IHYyT3J4Lnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIHRoaXMuYWNjLnggKz0geDtcclxuICAgICAgICB0aGlzLmFjYy55ICs9IHk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldE5vcm1hbFBvaW50KHBvaW50LCBhLCBiKTogY2MuVmVjMiB7XHJcbiAgICAgICAgbGV0IGFiID0gYi5zdWIoYSk7XHJcbiAgICAgICAgbGV0IGFwID0gcG9pbnQuc3ViKGEpO1xyXG4gICAgICAgIC8vIGFiLm5vcm1hbGl6ZVNlbGYoKVxyXG4gICAgICAgIC8vIGxldCBhcF9hYiA9IGFiLm11bChhcC5kb3QoYWIpKVxyXG4gICAgICAgIGxldCBhcF9hYiA9IGFwLnByb2plY3QoYWIpXHJcbiAgICAgICAgcmV0dXJuIGEuYWRkKGFwX2FiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIFJlYWNoUGF0aEVuZFRocmVzaG9sZCA9IDQwMDsgLy8yMCB4IDIwXHJcbiAgICBzdGF0aWMgUGF0aFByZWRpY3RMZW5ndGggPSAyNTtcclxuXHJcblxyXG4gICAgZHJhd1BhdGgoY29udGV4dCkge1xyXG4gICAgICAgIC8vIGNvbnRleHQuY2xlYXIoKTtcclxuICAgICAgICBjb250ZXh0Lm1vdmVUbyh0aGlzLl9ydW5uaW5nUGF0aFswXS54LCB0aGlzLl9ydW5uaW5nUGF0aFswXS55KTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3J1bm5pbmdQYXRoLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYSA9IHRoaXMuX3J1bm5pbmdQYXRoW2ldO1xyXG4gICAgICAgICAgICBsZXQgYiA9IHRoaXMuX3J1bm5pbmdQYXRoW2kgKyAxXVxyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhiLngsIGIueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEdhbWUuaW5zdGFuY2UuZ3JhcGhpY3MuZWxsaXBzZSh0YXJnZXQueCx0YXJnZXQueSAsNCw0KVxyXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9sbG93UGF0aChwYXRoOiBjYy5WZWMyW10sIHBhdGhSYWRpdXM6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50UGF0aEluZGV4ID09IHBhdGgubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAvLyBsZXQgZGlzdHNxID0gdGhpcy5ub2RlLnBvc2l0aW9uLnN1Yih0aGlzLl9ydW5uaW5nUGF0aFt0aGlzLl9jdXJyZW50UGF0aEluZGV4XSkubWFnU3FyKCk7XHJcbiAgICAgICAgICAgIC8vIGlmKGRpc3RzcSA8IE1vdmVFbnRpdHkuUmVhY2hQYXRoRW5kVGhyZXNob2xkKVxyXG4gICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVzZXRwYXRoIHdlaG5lIGZpbmVpXCIpO1xyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5yZXNldFBhdGhXaGVuRmluaXNoKVxyXG4gICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnJlc2V0UGF0aCgpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNjLlZlYzIuWkVSTztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5kcmF3UGF0aChHYW1lLmluc3RhbmNlLmdyYXBoaWNzKTtcclxuICAgICAgICBsZXQgcHJlZGljdCA9IHRoaXMudmVsb2NpdHkuY2xvbmUoKTtcclxuICAgICAgICBwcmVkaWN0Lm5vcm1hbGl6ZVNlbGYoKTtcclxuICAgICAgICBwcmVkaWN0Lm11bFNlbGYoTW92ZUVuZ2luZS5QYXRoUHJlZGljdExlbmd0aCk7XHJcbiAgICAgICAgcHJlZGljdC5hZGRTZWxmKHRoaXMubm9kZS5wb3NpdGlvbik7Ly9wcmVkaWN0TG9jYXRpb25cclxuICAgICAgICBsZXQgdGFyZ2V0OiBjYy5WZWMyO1xyXG4gICAgICAgIC8vIGZvciAodmFyIGkgPSAwIDtpIDwgMjsgaSsrKVxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICBsZXQgYSA9IHBhdGhbdGhpcy5fY3VycmVudFBhdGhJbmRleF07XHJcbiAgICAgICAgbGV0IGIgPSBwYXRoW3RoaXMuX2N1cnJlbnRQYXRoSW5kZXggKyAxXVxyXG5cclxuICAgICAgICBsZXQgbm9ybWFscG9pbnQgPSB0aGlzLmdldE5vcm1hbFBvaW50KHByZWRpY3QsIGEsIGIpO1xyXG4gICAgICAgIGxldCBkaXN0c3EgPSBub3JtYWxwb2ludC5zdWIoYikubWFnU3FyKCk7XHJcbiAgICAgICAgaWYgKGRpc3RzcSA8IE1vdmVFbmdpbmUuUmVhY2hQYXRoRW5kVGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRQYXRoSW5kZXggKz0gMTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNQYXRoTG9vcCAmJiB0aGlzLl9jdXJyZW50UGF0aEluZGV4ID49IHBhdGgubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFBhdGhJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGFyZ2V0ID0gKG5vcm1hbHBvaW50KS5hZGRTZWxmKGIuc3ViKGEpLm5vcm1hbGl6ZVNlbGYoKS5tdWxTZWxmKE1vdmVFbmdpbmUuUGF0aFByZWRpY3RMZW5ndGggKyAxMCkpXHJcblxyXG4gICAgICAgIGlmIChkaXN0c3EgPiBwYXRoUmFkaXVzICogcGF0aFJhZGl1cykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWVrKHRhcmdldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYy5WZWMyLlpFUk87XHJcbiAgICB9XHJcblxyXG4gICAgX3RtcF92ZWMyOiBjYy5WZWMyID0gY2MudjIoKVxyXG5cclxuICAgIHNlZWsocG9zaXRpb24pOiBjYy5WZWMyIHtcclxuICAgICAgICBsZXQgdiA9IHRoaXMuX3RtcF92ZWMyO1xyXG4gICAgICAgIC8vIGNjLlZlYzIuc2V0KHYsIHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpXHJcbiAgICAgICAgdi54ID0gcG9zaXRpb24ueDtcclxuICAgICAgICB2LnkgPSBwb3NpdGlvbi55O1xyXG4gICAgICAgIHYuc3ViU2VsZih0aGlzLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgIHYubm9ybWFsaXplU2VsZigpO1xyXG4gICAgICAgIHYubXVsU2VsZih0aGlzLm1heFNwZWVkKTtcclxuICAgICAgICB2LnN1YlNlbGYodGhpcy52ZWxvY2l0eSk7XHJcbiAgICAgICAgLy8gdGhpcy5saW1pdFZlYzIodix0aGlzLm1heFNwZWVkKTtcclxuICAgICAgICByZXR1cm4gdjtcclxuICAgIH1cclxuXHJcbiAgICBhcnJpdmUocG9zaXRpb24pOiBjYy5WZWMyIHtcclxuICAgICAgICBsZXQgdiA9IHBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICAgICAgdi5zdWJTZWxmKHRoaXMubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgbGV0IGQgPSB2Lm1hZygpO1xyXG4gICAgICAgIHYubm9ybWFsaXplU2VsZigpO1xyXG4gICAgICAgIGlmIChkIDwgMTAwKSB7XHJcbiAgICAgICAgICAgIGxldCBtID0gdGhpcy5tYXAoZCwgMCwgMTAwLCAwLCB0aGlzLm1heFNwZWVkKTtcclxuICAgICAgICAgICAgdi5tdWxTZWxmKG0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHYubXVsU2VsZih0aGlzLm1heFNwZWVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdi5zdWJTZWxmKHRoaXMudmVsb2NpdHkpO1xyXG4gICAgICAgIC8vbGltaXQgbWF4Zm9yY2UgXHJcbiAgICAgICAgcmV0dXJuIHY7XHJcbiAgICB9XHJcblxyXG4gICAgd2FuZGVyKCkge1xyXG4gICAgICAgIGxldCBjZW50ZXIgPSB0aGlzLm5vZGUucG9zaXRpb247XHJcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLm5vZGUucGFyZW50LmdldENvbnRlbnRTaXplKCk7XHJcbiAgICAgICAgaWYgKGNlbnRlci54IDwgLXNpemUud2lkdGggLyAyIHx8IGNlbnRlci55IDwgLXNpemUuaGVpZ2h0IC8gMiB8fCBjZW50ZXIueCA+IHNpemUud2lkdGggLyAyIHx8IGNlbnRlci55ID4gc2l6ZS5oZWlnaHQgLyAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlZWsoY2MudjIoMCwgMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2lyY2xlQ2VudGVyOiBjYy5WZWMyID0gdGhpcy52ZWxvY2l0eS5jbG9uZSgpO1xyXG4gICAgICAgIGNpcmNsZUNlbnRlci5ub3JtYWxpemUoKTtcclxuICAgICAgICBjaXJjbGVDZW50ZXIubXVsU2VsZihXQU5ERVJfQ0lSQ0xFX0RJU1QpXHJcbiAgICAgICAgbGV0IGRpc3BsYWNlbWVudDogY2MuVmVjMiA9IGNjLnYyKC0xLCAwKTtcclxuICAgICAgICBkaXNwbGFjZW1lbnQubXVsU2VsZihXQU5ERVJfQ0lSQ0xFX1JBRElVUyk7XHJcbiAgICAgICAgZGlzcGxhY2VtZW50LnJvdGF0ZVNlbGYodGhpcy53YW5kZXJBbmdsZSk7XHJcbiAgICAgICAgdGhpcy53YW5kZXJBbmdsZSArPSBnLnJhbmRvbUZsb2F0KC1XQU5ERVJfQU5HTEVfQ0hBTkdFLCBXQU5ERVJfQU5HTEVfQ0hBTkdFKVxyXG4gICAgICAgIHJldHVybiBjaXJjbGVDZW50ZXIuYWRkKGRpc3BsYWNlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYXBwbHlGb3JjZXMoKSB7XHJcbiAgICAgICAgbGV0IGYgPSBjYy5WZWMyLlpFUk9cclxuICAgICAgICBsZXQgcG9zID0gdGhpcy50YXJQb3M7XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0ICYmIHRoaXMudGFyZ2V0LmFjdGl2ZUluSGllcmFyY2h5KSB7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBwb3MgPSB0aGlzLnRhcmdldC5wb3NpdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tb3ZlVHlwZSA9PSBCZWhhdmlvci5TZWVrKSB7XHJcbiAgICAgICAgICAgIGYuYWRkU2VsZih0aGlzLnNlZWsocG9zKSlcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubW92ZVR5cGUgPT0gQmVoYXZpb3IuQXJyaXZlKSB7XHJcbiAgICAgICAgICAgIGYuYWRkU2VsZih0aGlzLmFycml2ZShwb3MpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubW92ZVR5cGUgPT0gQmVoYXZpb3IuUGF0aCAmJiB0aGlzLl9ydW5uaW5nUGF0aC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGYuYWRkU2VsZih0aGlzLmZvbGxvd1BhdGgodGhpcy5fcnVubmluZ1BhdGgsIHRoaXMucGF0aFJhZGl1cykpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3ZlVHlwZSA9PSBCZWhhdmlvci5XYW5kZXIpIHtcclxuICAgICAgICAgICAgZi5hZGRTZWxmKHRoaXMud2FuZGVyKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFwcGx5Rm9yY2UodGhpcy5ncmF2aXR5LngsIHRoaXMuZ3Jhdml0eS55KTtcclxuICAgICAgICB0aGlzLmFwcGx5Rm9yY2UoZi54LCBmLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbGltaXRWZWMyKHZlYzogY2MuVmVjMiwgbWF4KSB7XHJcbiAgICAgICAgbGV0IHZlY19sZW5ndGhfc3EgPSB2ZWMubWFnU3FyKCk7XHJcbiAgICAgICAgaWYgKHZlY19sZW5ndGhfc3EgPiBtYXggKiBtYXgpIHtcclxuICAgICAgICAgICAgdmVjLm11bFNlbGYobWF4IC8gTWF0aC5zcXJ0KHZlY19sZW5ndGhfc3EpKTsgLy9ub3JtYWwgYW5kIG11bHRcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZlY19sZW5ndGhfc3E7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtYXAodmFsLCBzMSwgczIsIGUxLCBlMikge1xyXG4gICAgICAgIGxldCBuZXdWYWwgPSAoZTIgLSBlMSkgKiB2YWwgLyAoczIgLSBzMSkgKyBlMTtcclxuICAgICAgICByZXR1cm4gTWF0aC5tYXgoZTEsIE1hdGgubWluKG5ld1ZhbCwgZTIpKTtcclxuICAgIH1cclxuXHJcbiAgICBfc3RlcChkdD8pIHtcclxuXHJcbiAgICAgICAgdGhpcy5fYXBwbHlGb3JjZXMoKTtcclxuICAgICAgICBsZXQgdiA9IHRoaXMuYWNjLm11bCh0aGlzLmZvcmNlV2VpZ2h0KVxyXG4gICAgICAgIHRoaXMudmVsb2NpdHkuYWRkU2VsZih2KVxyXG4gICAgICAgIHRoaXMubGltaXRWZWMyKHRoaXMudmVsb2NpdHksIHRoaXMubWF4U3BlZWQpO1xyXG4gICAgICAgIC8vIGxldCBzcGVlZCA9IHRoaXMudmVsb2NpdHkubWFnKCk7XHJcbiAgICAgICAgLy8gdGhpcy52ZWxvY2l0eS5ub3JtYWxpemVTZWxmKCk7XHJcbiAgICAgICAgLy8gdGhpcy52ZWxvY2l0eS5tdWxTZWxmKE1hdGgubWluKHRoaXMubWF4U3BlZWQsc3BlZWQpKTtcclxuICAgICAgICAvLyB0aGlzLnZlbG9jaXR5Lm11bFNlbGYoMC45OCk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24uYWRkKHRoaXMudmVsb2NpdHkpKTtcclxuICAgICAgICB0aGlzLmFjYy5zZXQoY2MuVmVjMi5aRVJPKTtcclxuICAgICAgICBpZiAodGhpcy5yb3RhdGVCeVZlbG9jaXR5KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1vdmVUeXBlICE9IEJlaGF2aW9yLlNpbXBsZSlcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IC0odGhpcy5yb3RhdGlvbk9mZnNldCArIHRoaXMudmVsb2NpdHkuc2lnbkFuZ2xlKGNjLlZlYzIuUklHSFQpICogY2MubWFjcm8uREVHKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=