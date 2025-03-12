"use strict";
cc._RF.push(module, '5d511lA/mZOVoM0CptHQELT', 'UIConfirm');
// Game/Scripts/UI/UIConfirm.ts

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
exports.ConfirmOption = void 0;
var Signal_1 = require("../../../framework/core/Signal");
var mvcView_1 = require("../../../framework/ui/mvcView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ConfirmOption;
(function (ConfirmOption) {
    ConfirmOption[ConfirmOption["Default"] = 0] = "Default";
    ConfirmOption[ConfirmOption["No"] = 1] = "No";
    ConfirmOption[ConfirmOption["Yes"] = 2] = "Yes";
})(ConfirmOption = exports.ConfirmOption || (exports.ConfirmOption = {}));
var UIConfirm = /** @class */ (function (_super) {
    __extends(UIConfirm, _super);
    function UIConfirm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labelContent = null;
        _this.btn_yes = null;
        _this.btn_no = null;
        _this.btn_close = null;
        _this.onConfirm = new Signal_1.default();
        _this.option = ConfirmOption.Default;
        return _this;
    }
    UIConfirm.prototype.onLoad = function () {
        this.register(this.btn_yes, this.click_yes);
        this.register(this.btn_no, this.click_no);
        this.register(this.btn_close, this.click_close);
    };
    UIConfirm.prototype.onShown = function (text, callback, target) {
        this.labelContent.string = text;
        this.onConfirm.on(callback, target);
    };
    UIConfirm.prototype.click_yes = function () {
        this.option = ConfirmOption.Yes;
        vm.hide(this);
    };
    UIConfirm.prototype.click_no = function () {
        this.option = ConfirmOption.No;
        vm.hide(this);
    };
    UIConfirm.prototype.click_close = function () {
        this.option = ConfirmOption.Default;
        vm.hide(this);
    };
    UIConfirm.prototype.onHidden = function () {
        this.onConfirm.fire(this.option);
    };
    __decorate([
        property(cc.Label)
    ], UIConfirm.prototype, "labelContent", void 0);
    __decorate([
        property(cc.Button)
    ], UIConfirm.prototype, "btn_yes", void 0);
    __decorate([
        property(cc.Button)
    ], UIConfirm.prototype, "btn_no", void 0);
    __decorate([
        property(cc.Button)
    ], UIConfirm.prototype, "btn_close", void 0);
    UIConfirm = __decorate([
        ccclass
    ], UIConfirm);
    return UIConfirm;
}(mvcView_1.default));
exports.default = UIConfirm;

cc._RF.pop();