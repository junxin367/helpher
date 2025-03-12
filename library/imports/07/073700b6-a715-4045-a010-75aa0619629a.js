"use strict";
cc._RF.push(module, '07370C2pxVARaAQdaoGGWKa', 'ClickAudioManager');
// framework/misc/ClickAudioManager.ts

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
var ClickAudio_1 = require("./ClickAudio");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, disallowMultiple = _a.disallowMultiple, menu = _a.menu;
var ClickAudioManager = /** @class */ (function (_super) {
    __extends(ClickAudioManager, _super);
    function ClickAudioManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audio = null;
        _this.audio_down = null;
        _this.withSiblings = true;
        _this.withChildren = true;
        return _this;
        // update (dt) {}
    }
    ClickAudioManager.prototype.onLoad = function () {
        if (this.withSiblings) {
            this.make(this.node.parent);
        }
        if (this.withChildren) {
            this.make(this.node);
        }
    };
    ClickAudioManager.prototype.make = function (node) {
        node.walk(this.each.bind(this), function (_) { return 0; });
        node.on(cc.Node.EventType.CHILD_ADDED, this.onChildAdd, this);
    };
    ClickAudioManager.prototype.onChildAdd = function (node) {
        node.walk(this.each.bind(this), function (_) { return 0; });
    };
    ClickAudioManager.prototype.onDestroy = function () {
        this.node.parent.off(cc.Node.EventType.CHILD_ADDED, this.onChildAdd, this);
        this.node.off(cc.Node.EventType.CHILD_ADDED, this.onChildAdd, this);
    };
    ClickAudioManager.prototype.each = function (item) {
        //if button 
        if (!item.getComponent(cc.Button))
            return;
        var comp = item.getComponent(ClickAudio_1.default);
        if (comp == null) {
            comp = item.addComponent(ClickAudio_1.default);
            comp.audio = this.audio;
            comp.audio_down = this.audio_down;
        }
    };
    ClickAudioManager.prototype.start = function () {
    };
    __decorate([
        property(cc.AudioClip)
    ], ClickAudioManager.prototype, "audio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], ClickAudioManager.prototype, "audio_down", void 0);
    __decorate([
        property
    ], ClickAudioManager.prototype, "withSiblings", void 0);
    __decorate([
        property
    ], ClickAudioManager.prototype, "withChildren", void 0);
    ClickAudioManager = __decorate([
        ccclass,
        disallowMultiple,
        menu("gamelib/ClickAudioManager")
    ], ClickAudioManager);
    return ClickAudioManager;
}(cc.Component));
exports.default = ClickAudioManager;

cc._RF.pop();