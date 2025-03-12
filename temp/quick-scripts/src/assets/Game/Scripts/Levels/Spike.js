"use strict";
cc._RF.push(module, 'bff89TrfjpJ0IqOQOdpY+n3', 'Spike');
// Game/Scripts/Levels/Spike.ts

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
var FSM_1 = require("../../../framework/core/FSM");
var Device_1 = require("../../../framework/misc/Device");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var State;
(function (State) {
    State[State["Hide"] = 0] = "Hide";
    State[State["Show"] = 1] = "Show";
})(State || (State = {}));
var Spike = /** @class */ (function (_super) {
    __extends(Spike, _super);
    function Spike() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fsm = null;
        _this.collider = null;
        _this.spikeNode = null;
        return _this;
    }
    Spike.prototype.onLoad = function () {
        // this.pasr = new PasrTimer(5, 0.1, 2, 0.1)
        this.spikeNode = this.node.getChildByName("spike");
        this.collider = this.getComponentInChildren(cc.PhysicsCollider);
        this.fsm = this.addComponent(FSM_1.default);
        this.fsm.init(this, State);
        this.fsm.enterState(State.Hide);
    };
    Spike.prototype.start = function () {
        // if (this.node.width > this.node.height) {
        //     this.node.height = 30;
        // }
        this.node.height = 40;
    };
    Spike.prototype.onEnter_Show = function () {
        this.spikeNode.group = "spike";
        this.collider.enabled = true;
        this.spikeNode.scaleY = 0;
        Device_1.default.playSfx("spike");
        cc.tween(this.spikeNode).to(0.2, { scaleY: 1 }).start();
    };
    Spike.prototype.onUpdate_Show = function () {
        if (this.fsm.timeElapsed > 2) {
            this.fsm.changeState(State.Hide);
        }
    };
    Spike.prototype.onEnter_Hide = function () {
        this.spikeNode.group = "default";
        this.spikeNode.scaleY = 1;
        cc.tween(this.spikeNode).to(0.2, { scaleY: 0 }).start();
        this.collider.enabled = false;
    };
    Spike.prototype.onUpdate_Hide = function () {
        if (this.fsm.timeElapsed > 5) {
            this.fsm.changeState(State.Show);
        }
    };
    Spike.prototype.onExit_Show = function () {
    };
    Spike.prototype.update = function (dt) {
    };
    Spike = __decorate([
        ccclass
    ], Spike);
    return Spike;
}(cc.Component));
exports.default = Spike;

cc._RF.pop();