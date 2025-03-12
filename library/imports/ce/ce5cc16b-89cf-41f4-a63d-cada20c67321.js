"use strict";
cc._RF.push(module, 'ce5ccFric9B9KY9ytogxnMh', 'OneWayPlatform');
// Game/Scripts/OneWayPlatform.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OneWayPlatform = /** @class */ (function (_super) {
    __extends(OneWayPlatform, _super);
    function OneWayPlatform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OneWayPlatform.prototype.onLoad = function () {
        this.pointVelPlatform = cc.v2();
        this.pointVelOther = cc.v2();
        this.relativeVel = cc.v2();
        this.relativePoint = cc.v2();
        this.body = this.getComponent(cc.RigidBody);
        this.body.enabledContactListener = true;
    };
    OneWayPlatform.prototype.start = function () {
    };
    OneWayPlatform.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        var otherBody = otherCollider.body;
        var platformBody = selfCollider.body;
        var worldManifold = contact.getWorldManifold();
        var points = worldManifold.points;
        var pointVelPlatform = this.pointVelPlatform;
        var pointVelOther = this.pointVelOther;
        var relativeVel = this.relativeVel;
        var relativePoint = this.relativePoint;
        //check if contact points are moving into platform
        for (var i = 0; i < points.length; i++) {
            platformBody.getLinearVelocityFromWorldPoint(points[i], pointVelPlatform);
            otherBody.getLinearVelocityFromWorldPoint(points[i], pointVelOther);
            platformBody.getLocalVector(pointVelOther.subSelf(pointVelPlatform), relativeVel);
            if (relativeVel.y < -32) //if moving down faster than 32 pixel/s (1m/s), handle as before
                return; //point is moving into platform, leave contact solid and exit
            else if (relativeVel.y < 32) { //if moving slower than 32 pixel/s (1m/s)
                //borderline case, moving only slightly out of platform
                platformBody.getLocalPoint(points[i], relativePoint);
                var platformFaceY = selfCollider.getAABB().height / 2; //front of platform, should only used on a box collider
                if (relativePoint.y > platformFaceY - 0.1 * 32)
                    return; //contact point is less than 3.2pixel (10cm) inside front face of platfrom
            }
            else {
                //moving up faster than 1 m/s
            }
        }
        // store disabled state to contact
        contact.disabled = true;
    };
    OneWayPlatform = __decorate([
        ccclass
    ], OneWayPlatform);
    return OneWayPlatform;
}(cc.Component));
exports.default = OneWayPlatform;

cc._RF.pop();