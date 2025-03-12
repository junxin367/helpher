"use strict";
cc._RF.push(module, 'fddcaRUintOTaigxk1Xrt0Q', 'Portal');
// Game/Scripts/Portal.ts

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
var RoleLoader_1 = require("./RoleLoader");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemPortal = /** @class */ (function (_super) {
    __extends(ItemPortal, _super);
    function ItemPortal() {
        // anim: cc.Animation = null
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // collider: cc.PhysicsCollider = null;
        _this.anotherDoor = null;
        _this.isTransfer = false;
        _this.targetDoorNode = null;
        _this.targetPortal = null;
        _this.targetPortalCollider = null;
        _this.self_collider = null;
        _this.isEndContact = true;
        _this.endContactNumber = 0;
        return _this;
    }
    ItemPortal_1 = ItemPortal;
    ItemPortal.prototype.onLoad = function () {
    };
    ItemPortal.prototype.start = function () {
        this.targetDoorNode = this.anotherDoor.getComponent(RoleLoader_1.default).self_door;
        this.fx = this.getComponentInChildren(cc.ParticleSystem);
        this.targetPortal = this.targetDoorNode.getComponent(ItemPortal_1);
        this.targetPortalCollider = this.targetPortal.getComponent(cc.Collider);
        this.self_collider = this.getComponent(cc.Collider);
    };
    ItemPortal.prototype.go = function (node) {
        var _this = this;
        this.scheduleOnce(function (_) {
            cc.tween(node).to(0.5, { opacity: 0 }).call(function () {
                var pos = _this.targetDoorNode.getPosition();
                node.setPosition(pos.x, pos.y);
            }).to(0.5, { opacity: 255 }).start();
        }, 0);
    };
    ItemPortal.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        if (this.isTransfer || !this.isEndContact)
            return;
        this.isTransfer = true;
        this.go(other.node);
        this.fx.resetSystem();
        this.targetPortal.isTransfer = true;
        this.targetPortal.fx.resetSystem();
        this.scheduleOnce(function () {
            _this.isTransfer = false;
            _this.targetPortal.isTransfer = false;
        }, 2);
        this.isEndContact = false;
    };
    ItemPortal.prototype.onEndContact = function (contact, self, other) {
        this.endContactNumber += 1;
        if (this.endContactNumber >= 3) {
            this.endContactNumber = 0;
            this.isEndContact = true;
        }
    };
    var ItemPortal_1;
    __decorate([
        property(cc.Node)
    ], ItemPortal.prototype, "anotherDoor", void 0);
    ItemPortal = ItemPortal_1 = __decorate([
        ccclass
    ], ItemPortal);
    return ItemPortal;
}(cc.Component));
exports.default = ItemPortal;

cc._RF.pop();