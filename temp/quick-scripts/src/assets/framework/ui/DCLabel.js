"use strict";
cc._RF.push(module, 'a56c0Fh1bpDto6UwDov+u7M', 'DCLabel');
// framework/ui/DCLabel.ts

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
var DCUI_1 = require("./DCUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, menu = _a.menu;
//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
var DCLabel = /** @class */ (function (_super) {
    __extends(DCLabel, _super);
    function DCLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.str = "%s";
        _this.hasAnim = true;
        _this.dur = 0.1;
        _this.scale = 1.2;
        _this.formatUnit = true;
        return _this;
        // update (dt) {}
    }
    DCLabel.prototype.onLoad = function () {
        this.label = this.getComponent(cc.Label);
    };
    DCLabel.prototype.onValueChanged = function (v) {
        if (v == null) {
            console.log("[DCLabel] warn!", "not found field " + this.dataBind);
            v = "0";
        }
        if (this.formatUnit) {
            this.label.string = cc.js.formatStr(this.str, v.toUnitString());
        }
        else {
            this.label.string = cc.js.formatStr(this.str, v);
        }
        if (this.hasAnim) {
            this.node.stopActionByTag(1000);
            var scale = cc.scaleTo(this.dur, this.scale).easing(cc.easeSineInOut());
            var scale2 = cc.scaleTo(this.dur, 1, 1);
            var seq = cc.sequence(scale, scale2);
            seq.setTag(1000);
            this.node.runAction(seq);
        }
    };
    __decorate([
        property
    ], DCLabel.prototype, "str", void 0);
    __decorate([
        property
    ], DCLabel.prototype, "hasAnim", void 0);
    __decorate([
        property({ visible: function () { return this.hasAnim; } })
    ], DCLabel.prototype, "dur", void 0);
    __decorate([
        property({ visible: function () { return this.hasAnim; } })
    ], DCLabel.prototype, "scale", void 0);
    __decorate([
        property({ displayName: "单位格式化" })
    ], DCLabel.prototype, "formatUnit", void 0);
    DCLabel = __decorate([
        ccclass,
        menu("DCUI/DCLable"),
        requireComponent(cc.Label)
    ], DCLabel);
    return DCLabel;
}(DCUI_1.default));
exports.default = DCLabel;

cc._RF.pop();