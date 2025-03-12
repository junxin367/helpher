
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/OneWayPlatform.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcT25lV2F5UGxhdGZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUksSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUE7QUFFekM7SUFBNEMsa0NBQVk7SUFBeEQ7O0lBeURBLENBQUM7SUFsREcsK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU1QyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztJQUM1QyxDQUFDO0lBRUQsOEJBQUssR0FBTDtJQUVBLENBQUM7SUFDRCx1Q0FBYyxHQUFkLFVBQWUsT0FBMEIsRUFBRSxZQUFZLEVBQUUsYUFBYTtRQUVsRSxJQUFJLFNBQVMsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQ25DLElBQUksWUFBWSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFFckMsSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDL0MsSUFBSSxNQUFNLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUVsQyxJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3QyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDbkMsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUV2QyxrREFBa0Q7UUFDbEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsWUFBWSxDQUFDLCtCQUErQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzFFLFNBQVMsQ0FBQywrQkFBK0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDcEUsWUFBWSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFFbEYsSUFBSSxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLGdFQUFnRTtnQkFDckYsT0FBTyxDQUFFLDZEQUE2RDtpQkFDckUsSUFBSSxXQUFXLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLHlDQUF5QztnQkFDcEUsdURBQXVEO2dCQUN2RCxZQUFZLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFDckQsSUFBSSxhQUFhLEdBQUcsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBRSx1REFBdUQ7Z0JBQy9HLElBQUksYUFBYSxDQUFDLENBQUMsR0FBRyxhQUFhLEdBQUcsR0FBRyxHQUFHLEVBQUU7b0JBQzFDLE9BQU8sQ0FBRSwwRUFBMEU7YUFDMUY7aUJBQ0k7Z0JBQ0QsNkJBQTZCO2FBQ2hDO1NBQ0o7UUFFRCxrQ0FBa0M7UUFDbEMsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQXZEZ0IsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQXlEbEM7SUFBRCxxQkFBQztDQXpERCxBQXlEQyxDQXpEMkMsRUFBRSxDQUFDLFNBQVMsR0F5RHZEO2tCQXpEb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9uZVdheVBsYXRmb3JtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHBvaW50VmVsUGxhdGZvcm06IGNjLlZlYzI7XHJcbiAgICBwb2ludFZlbE90aGVyOiBjYy5WZWMyO1xyXG4gICAgcmVsYXRpdmVWZWw6IGNjLlZlYzI7XHJcbiAgICByZWxhdGl2ZVBvaW50OiBjYy5WZWMyO1xyXG5cclxuICAgIGJvZHk6IGNjLlJpZ2lkQm9keTtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnBvaW50VmVsUGxhdGZvcm0gPSBjYy52MigpO1xyXG4gICAgICAgIHRoaXMucG9pbnRWZWxPdGhlciA9IGNjLnYyKCk7XHJcbiAgICAgICAgdGhpcy5yZWxhdGl2ZVZlbCA9IGNjLnYyKCk7XHJcbiAgICAgICAgdGhpcy5yZWxhdGl2ZVBvaW50ID0gY2MudjIoKTtcclxuICAgICAgICB0aGlzLmJvZHkgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG5cclxuICAgICAgICB0aGlzLmJvZHkuZW5hYmxlZENvbnRhY3RMaXN0ZW5lciA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdDogY2MuUGh5c2ljc0NvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xyXG5cclxuICAgICAgICBsZXQgb3RoZXJCb2R5ID0gb3RoZXJDb2xsaWRlci5ib2R5O1xyXG4gICAgICAgIGxldCBwbGF0Zm9ybUJvZHkgPSBzZWxmQ29sbGlkZXIuYm9keTtcclxuXHJcbiAgICAgICAgbGV0IHdvcmxkTWFuaWZvbGQgPSBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKTtcclxuICAgICAgICBsZXQgcG9pbnRzID0gd29ybGRNYW5pZm9sZC5wb2ludHM7XHJcblxyXG4gICAgICAgIGxldCBwb2ludFZlbFBsYXRmb3JtID0gdGhpcy5wb2ludFZlbFBsYXRmb3JtO1xyXG4gICAgICAgIGxldCBwb2ludFZlbE90aGVyID0gdGhpcy5wb2ludFZlbE90aGVyO1xyXG4gICAgICAgIGxldCByZWxhdGl2ZVZlbCA9IHRoaXMucmVsYXRpdmVWZWw7XHJcbiAgICAgICAgbGV0IHJlbGF0aXZlUG9pbnQgPSB0aGlzLnJlbGF0aXZlUG9pbnQ7XHJcblxyXG4gICAgICAgIC8vY2hlY2sgaWYgY29udGFjdCBwb2ludHMgYXJlIG1vdmluZyBpbnRvIHBsYXRmb3JtXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcGxhdGZvcm1Cb2R5LmdldExpbmVhclZlbG9jaXR5RnJvbVdvcmxkUG9pbnQocG9pbnRzW2ldLCBwb2ludFZlbFBsYXRmb3JtKTtcclxuICAgICAgICAgICAgb3RoZXJCb2R5LmdldExpbmVhclZlbG9jaXR5RnJvbVdvcmxkUG9pbnQocG9pbnRzW2ldLCBwb2ludFZlbE90aGVyKTtcclxuICAgICAgICAgICAgcGxhdGZvcm1Cb2R5LmdldExvY2FsVmVjdG9yKHBvaW50VmVsT3RoZXIuc3ViU2VsZihwb2ludFZlbFBsYXRmb3JtKSwgcmVsYXRpdmVWZWwpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlbGF0aXZlVmVsLnkgPCAtMzIpIC8vaWYgbW92aW5nIGRvd24gZmFzdGVyIHRoYW4gMzIgcGl4ZWwvcyAoMW0vcyksIGhhbmRsZSBhcyBiZWZvcmVcclxuICAgICAgICAgICAgICAgIHJldHVybjsgIC8vcG9pbnQgaXMgbW92aW5nIGludG8gcGxhdGZvcm0sIGxlYXZlIGNvbnRhY3Qgc29saWQgYW5kIGV4aXRcclxuICAgICAgICAgICAgZWxzZSBpZiAocmVsYXRpdmVWZWwueSA8IDMyKSB7IC8vaWYgbW92aW5nIHNsb3dlciB0aGFuIDMyIHBpeGVsL3MgKDFtL3MpXHJcbiAgICAgICAgICAgICAgICAvL2JvcmRlcmxpbmUgY2FzZSwgbW92aW5nIG9ubHkgc2xpZ2h0bHkgb3V0IG9mIHBsYXRmb3JtXHJcbiAgICAgICAgICAgICAgICBwbGF0Zm9ybUJvZHkuZ2V0TG9jYWxQb2ludChwb2ludHNbaV0sIHJlbGF0aXZlUG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBsYXRmb3JtRmFjZVkgPSBzZWxmQ29sbGlkZXIuZ2V0QUFCQigpLmhlaWdodCAvIDI7ICAvL2Zyb250IG9mIHBsYXRmb3JtLCBzaG91bGQgb25seSB1c2VkIG9uIGEgYm94IGNvbGxpZGVyXHJcbiAgICAgICAgICAgICAgICBpZiAocmVsYXRpdmVQb2ludC55ID4gcGxhdGZvcm1GYWNlWSAtIDAuMSAqIDMyKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgIC8vY29udGFjdCBwb2ludCBpcyBsZXNzIHRoYW4gMy4ycGl4ZWwgKDEwY20pIGluc2lkZSBmcm9udCBmYWNlIG9mIHBsYXRmcm9tXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL21vdmluZyB1cCBmYXN0ZXIgdGhhbiAxIG0vc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzdG9yZSBkaXNhYmxlZCBzdGF0ZSB0byBjb250YWN0XHJcbiAgICAgICAgY29udGFjdC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG59Il19