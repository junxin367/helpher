let { ccclass, property } = cc._decorator
@ccclass
export default class OneWayPlatform extends cc.Component {
    pointVelPlatform: cc.Vec2;
    pointVelOther: cc.Vec2;
    relativeVel: cc.Vec2;
    relativePoint: cc.Vec2;

    body: cc.RigidBody;
    onLoad() {
        this.pointVelPlatform = cc.v2();
        this.pointVelOther = cc.v2();
        this.relativeVel = cc.v2();
        this.relativePoint = cc.v2();
        this.body = this.getComponent(cc.RigidBody);

        this.body.enabledContactListener = true;
    }

    start() {

    }
    onBeginContact(contact: cc.PhysicsContact, selfCollider, otherCollider) {

        let otherBody = otherCollider.body;
        let platformBody = selfCollider.body;

        let worldManifold = contact.getWorldManifold();
        let points = worldManifold.points;

        let pointVelPlatform = this.pointVelPlatform;
        let pointVelOther = this.pointVelOther;
        let relativeVel = this.relativeVel;
        let relativePoint = this.relativePoint;

        //check if contact points are moving into platform
        for (let i = 0; i < points.length; i++) {
            platformBody.getLinearVelocityFromWorldPoint(points[i], pointVelPlatform);
            otherBody.getLinearVelocityFromWorldPoint(points[i], pointVelOther);
            platformBody.getLocalVector(pointVelOther.subSelf(pointVelPlatform), relativeVel);

            if (relativeVel.y < -32) //if moving down faster than 32 pixel/s (1m/s), handle as before
                return;  //point is moving into platform, leave contact solid and exit
            else if (relativeVel.y < 32) { //if moving slower than 32 pixel/s (1m/s)
                //borderline case, moving only slightly out of platform
                platformBody.getLocalPoint(points[i], relativePoint);
                let platformFaceY = selfCollider.getAABB().height / 2;  //front of platform, should only used on a box collider
                if (relativePoint.y > platformFaceY - 0.1 * 32)
                    return;  //contact point is less than 3.2pixel (10cm) inside front face of platfrom
            }
            else {
                //moving up faster than 1 m/s
            }
        }

        // store disabled state to contact
        contact.disabled = true;
    }

}