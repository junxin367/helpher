"use strict";
cc._RF.push(module, '129ed5o6uNHDKhz6KoueBpN', 'ToastManager');
// framework/ui/ToastManager.ts

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
exports.Toast = void 0;
var ToastComponent_1 = require("./ToastComponent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
exports.Toast = null;
var ToastManager = /** @class */ (function (_super) {
    __extends(ToastManager, _super);
    function ToastManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.offset = cc.v2();
        return _this;
        // update (dt) {}
    }
    ToastManager.prototype.onLoad = function () {
        exports.Toast = this;
    };
    ToastManager.prototype.start = function () {
        this.toastPool = new cc.NodePool();
    };
    ToastManager.prototype.onDestroy = function () {
        this.toastPool.clear();
    };
    ToastManager.prototype.make = function (text, dur) {
        if (dur === void 0) { dur = 2; }
        //show toast 
        var node = this.toastPool.get();
        var toastComp = null;
        if (node == null) {
            node = cc.instantiate(this.prefab);
            toastComp = node.getComponent(ToastComponent_1.default);
            if (toastComp == null) {
                console.warn("Toast.make : Toast Prefab must contains ToastComponent");
            }
            // ToastManager.toastPool.put(node);
            // node = ToastManager.toastPool.get();
            node.setPosition(node.x + this.offset.x, node.y + this.offset.y);
        }
        else {
            toastComp = node.getComponent(ToastComponent_1.default);
        }
        if (node.parent == null)
            this.node.addChild(node, 99999);
        this.show(toastComp, text, dur);
        return toastComp;
    };
    ToastManager.prototype.show = function (toastComp, text, dur) {
        var _this = this;
        toastComp.show(text);
        this.scheduleOnce(function (_) {
            toastComp.hide(function (_) {
                _this.toastPool.put(toastComp.node);
                console.log("Toast.hide toastpool size:", _this.toastPool.size());
            });
        }, dur);
    };
    __decorate([
        property(cc.Prefab)
    ], ToastManager.prototype, "prefab", void 0);
    __decorate([
        property(cc.Vec2)
    ], ToastManager.prototype, "offset", void 0);
    ToastManager = __decorate([
        ccclass
    ], ToastManager);
    return ToastManager;
}(cc.Component));
exports.default = ToastManager;

cc._RF.pop();