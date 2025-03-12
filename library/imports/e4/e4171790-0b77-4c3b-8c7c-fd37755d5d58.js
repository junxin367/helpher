"use strict";
cc._RF.push(module, 'e4171eQC3dMO4x8/Td1XV1Y', 'DCUI');
// framework/ui/DCUI.ts

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
var DataCenter_1 = require("../core/DataCenter");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DCUI = /** @class */ (function (_super) {
    __extends(DCUI, _super);
    function DCUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dataBind = "";
        return _this;
    }
    DCUI.prototype.onLoad = function () {
    };
    DCUI.prototype.setDCKey = function (k) {
        this.dataBind = k;
        this.setListener();
    };
    DCUI.prototype.setListener = function () {
        DataCenter_1.default.off(this.dataBind, this.dataChanged, this);
        DataCenter_1.default.on(this.dataBind, this.dataChanged, this);
    };
    DCUI.prototype.onValueChanged = function (v) {
    };
    DCUI.prototype.setDCValue = function (v) {
        DataCenter_1.default.set(this.dataBind, v);
    };
    DCUI.prototype.dataChanged = function (v, old) {
        this.onValueChanged(v);
    };
    DCUI.prototype.onEnable = function () {
        this.setListener();
        this.onValueChanged(DataCenter_1.default.get(this.dataBind));
    };
    DCUI.prototype.onDisable = function () {
        DataCenter_1.default.off(this.dataBind, this.dataChanged, this);
    };
    DCUI.prototype.onDestroy = function () {
        // DataCenter.off(this)
        evt.off(this);
    };
    __decorate([
        property()
    ], DCUI.prototype, "dataBind", void 0);
    DCUI = __decorate([
        ccclass
    ], DCUI);
    return DCUI;
}(cc.Component));
exports.default = DCUI;

cc._RF.pop();