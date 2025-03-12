"use strict";
cc._RF.push(module, 'ab1bdx+TzJO9rfqJ75XWBg+', 'SFollowCamera');
// framework/extension/movement/SFollowCamera.ts

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
var BoostsAction_1 = require("../../misc/BoostsAction");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
var FollowCamera = /** @class */ (function (_super) {
    __extends(FollowCamera, _super);
    function FollowCamera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.target = null;
        _this.offset = cc.Vec2.ZERO;
        _this.velocity = cc.Vec2.ZERO;
        return _this;
        // update (dt) {}
    }
    FollowCamera.prototype.onLoad = function () {
        this.camera = this.getComponent(cc.Camera);
    };
    FollowCamera.prototype.start = function () {
    };
    FollowCamera.prototype.reset = function () {
        this.node.y = 0;
        this.offset = cc.Vec2.ZERO;
    };
    FollowCamera.prototype.startFollow = function (target) {
        this.target = target;
    };
    FollowCamera.prototype.animOffset = function (offset, dur) {
        var _this = this;
        if (dur === void 0) { dur = 1.0; }
        var action = BoostsAction_1.ValueChangeAction.create(dur, this.offset.y, offset, function (value) {
            _this.offset.y = value;
        }).easing(cc.easeSineInOut());
        this.node.runAction(action);
    };
    FollowCamera.prototype.canSee = function (node) {
        var top = node.position.add(cc.v3(0, node.height / 2));
        var pos = this.camera.getWorldToCameraPoint(top, cc.Vec2.ZERO);
        if (pos.y > -cc.visibleRect.height / 2) {
            return true;
        }
        return false;
    };
    FollowCamera.prototype.update = function () {
        if (!this.target)
            return;
        // this.camera.node.y = this.target.y + this.offset.y;
        this.camera.node.x = this.target.x + this.offset.x;
        // let pos = this.node.position; 
        // let vec = this.target.node.position.sub(pos);
        // vec.normalizeSelf().mulSelf(10).subSelf(this.velocity)
        // this.velocity.addSelf(vec);
        // this.camera.node.setPosition(pos.add(this.velocity));
    };
    __decorate([
        property(cc.Node)
    ], FollowCamera.prototype, "target", void 0);
    FollowCamera = __decorate([
        ccclass,
        requireComponent(cc.Camera)
    ], FollowCamera);
    return FollowCamera;
}(cc.Component));
exports.default = FollowCamera;

cc._RF.pop();