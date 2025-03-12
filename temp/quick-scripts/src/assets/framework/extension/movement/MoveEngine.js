"use strict";
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