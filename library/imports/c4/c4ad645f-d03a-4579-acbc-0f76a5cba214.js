"use strict";
cc._RF.push(module, 'c4ad6Rf0DpFeay8D3aly6IU', 'ToastComponent');
// framework/ui/ToastComponent.ts

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
var UIFunctions_1 = require("./UIFunctions");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ToastComponent = /** @class */ (function (_super) {
    __extends(ToastComponent, _super);
    function ToastComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
        // update (dt) {}
    }
    ToastComponent.prototype.onLoad = function () {
        this.animations = UIFunctions_1.default.getChildrenAnimations(this.node);
    };
    ToastComponent.prototype.start = function () {
    };
    ToastComponent.prototype.hide = function (callback) {
        this.node.active = true;
        if (!UIFunctions_1.default.doHideAnimations(this.animations, callback)) {
            this.node.active = false;
            // this.node.removeFromParent();
            if (callback) {
                callback(this);
            }
        }
    };
    ToastComponent.prototype.show = function (text) {
        this.label.string = text;
        UIFunctions_1.default.doShowAnimations(this.animations);
    };
    __decorate([
        property(cc.Label)
    ], ToastComponent.prototype, "label", void 0);
    ToastComponent = __decorate([
        ccclass
    ], ToastComponent);
    return ToastComponent;
}(cc.Component));
exports.default = ToastComponent;

cc._RF.pop();