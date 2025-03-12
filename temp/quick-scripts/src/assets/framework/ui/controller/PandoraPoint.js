"use strict";
cc._RF.push(module, '0d12fW+y7pPaL/wROjL6izJ', 'PandoraPoint');
// framework/ui/controller/PandoraPoint.ts

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
var Signal_1 = require("../../core/Signal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var PandoraPoint = /** @class */ (function (_super) {
    __extends(PandoraPoint, _super);
    function PandoraPoint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numberVisible = true;
        _this.subPoints = [];
        _this.n = 0;
        _this.signal = new Signal_1.default;
        return _this;
        // update (dt) {}
    }
    PandoraPoint_1 = PandoraPoint;
    PandoraPoint.prototype.onLoad = function () {
        var _this = this;
        this.sprite = this.getComponent(cc.Sprite);
        this.label = this.getComponentInChildren(cc.Label);
        if (this.label)
            this.label.node.active = this.numberVisible;
        this.subPoints.forEach(function (v) {
            v.signal.add(_this.onSubChanged, _this);
        });
    };
    PandoraPoint.prototype.onSubChanged = function (n) {
        var b = this.subPoints.some(function (v) { return v.n > 0; });
        this.setNumber(b ? 1 : 0);
    };
    PandoraPoint.prototype.start = function () {
    };
    PandoraPoint.prototype.setNumber = function (n) {
        if (this.label) {
            if (this.numberVisible) {
                this.label.string = n + "";
            }
            if (this.numberVisible) {
                this.label.node.active = n != 0;
            }
        }
        this.sprite.enabled = n != 0;
        this.n = n;
        this.signal.fire(n);
    };
    var PandoraPoint_1;
    __decorate([
        property
    ], PandoraPoint.prototype, "numberVisible", void 0);
    __decorate([
        property([PandoraPoint_1])
    ], PandoraPoint.prototype, "subPoints", void 0);
    PandoraPoint = PandoraPoint_1 = __decorate([
        ccclass,
        menu("Controller/PandoraPoint")
    ], PandoraPoint);
    return PandoraPoint;
}(cc.Component));
exports.default = PandoraPoint;

cc._RF.pop();