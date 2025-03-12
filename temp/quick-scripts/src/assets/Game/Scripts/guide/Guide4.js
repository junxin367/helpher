"use strict";
cc._RF.push(module, '149c3pHaW5C55CAtc10Ji5T', 'Guide4');
// Game/Scripts/guide/Guide4.ts

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
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var event_1 = require("../../../framework/core/event");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Guide4 = /** @class */ (function (_super) {
    __extends(Guide4, _super);
    function Guide4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.guideNode = null;
        return _this;
        // update (dt) {}
    }
    Guide4.prototype.onLoad = function () {
        this.getComponent(cc.RigidBody).enabledContactListener = true;
        event_1.evt.on("Game.win", this.hideGuide, this);
        event_1.evt.on("Game.lose", this.hideGuide, this);
    };
    Guide4.prototype.onDisable = function () {
        event_1.evt.off(this);
    };
    Guide4.prototype.start = function () {
        this.hideGuide();
    };
    Guide4.prototype.onBeginContact = function (contact, self, other) {
        var group = other.node.group;
        if (group == 'role' && !PlayerInfo_1.PlayerInfo.is_guide_4) {
            PlayerInfo_1.PlayerInfo.is_guide_4 = true;
            PlayerInfo_1.PlayerInfo.isInGuide = true;
            this.guideNode.active = true;
        }
    };
    Guide4.prototype.onkeyClick = function () {
        if (PlayerInfo_1.PlayerInfo.isInGuide) {
            this.hideGuide();
        }
    };
    Guide4.prototype.hideGuide = function () {
        this.guideNode.active = false;
        PlayerInfo_1.PlayerInfo.isInGuide = false;
    };
    __decorate([
        property(cc.Node)
    ], Guide4.prototype, "guideNode", void 0);
    Guide4 = __decorate([
        ccclass
    ], Guide4);
    return Guide4;
}(cc.Component));
exports.default = Guide4;

cc._RF.pop();