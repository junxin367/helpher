"use strict";
cc._RF.push(module, 'f2cd9nhkCtFw5Q8WNck+sNk', 'ArrowMachine');
// Game/Scripts/ArrowMachine.ts

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
var KeyToggle_1 = require("./KeyToggle");
var Arrow_1 = require("./Arrow");
var Device_1 = require("../../framework/misc/Device");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ArrowMachine = /** @class */ (function (_super) {
    __extends(ArrowMachine, _super);
    function ArrowMachine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keyActivator = null;
        _this.wood = null;
        _this.arrows = [];
        _this._activated = false;
        return _this;
    }
    ArrowMachine.prototype.onLoad = function () {
        this.arrows = this.getComponentsInChildren(Arrow_1.default);
        this.wood = this.node.getChildByName("wood");
    };
    ArrowMachine.prototype.start = function () {
        this.keyActivator.onToggleSwitched.add(this.onToggleSwitched, this);
    };
    ArrowMachine.prototype.onDestroy = function () {
        if (this.keyActivator.onToggleSwitched)
            this.keyActivator.onToggleSwitched.off(this.onToggleSwitched, this);
    };
    ArrowMachine.prototype.onToggleSwitched = function () {
        var b = this.keyActivator.isOpen;
        if (b) {
            this.activate();
        }
    };
    ArrowMachine.prototype.activate = function () {
        if (this._activated)
            return;
        this._activated = true;
        this.arrows.forEach(function (v) { return v.go(); });
        Device_1.default.playSfx("arrow_launch");
        cc.tween(this.wood).to(1.0, { opacity: 0 }).start();
    };
    __decorate([
        property({ type: KeyToggle_1.default, displayName: "触发的钥匙" })
    ], ArrowMachine.prototype, "keyActivator", void 0);
    ArrowMachine = __decorate([
        ccclass
    ], ArrowMachine);
    return ArrowMachine;
}(cc.Component));
exports.default = ArrowMachine;

cc._RF.pop();