"use strict";
cc._RF.push(module, 'f9e52WLze5MBrhxXx/fWqyL', 'DCToggle');
// framework/ui/DCToggle.ts

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
// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var DCToggle = /** @class */ (function (_super) {
    __extends(DCToggle, _super);
    function DCToggle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.revserse = false;
        _this.autosync = true;
        return _this;
    }
    DCToggle.prototype.onLoad = function () {
        this.toggle = this.getComponent(cc.Toggle);
        if (this.autosync) {
            var listener = new cc.Component.EventHandler();
            listener.component = "DCToggle";
            listener.target = this.node;
            listener.handler = "onChecked";
            this.toggle.checkEvents.push(listener);
        }
    };
    DCToggle.prototype.onChecked = function (v) {
        if (this.isFromSelf)
            return;
        if (this.revserse) {
            this.setDCValue(!v.isChecked);
        }
        else {
            this.setDCValue(v.isChecked);
        }
    };
    DCToggle.prototype.setChecked = function (b) {
        this.isFromSelf = true;
        if (b)
            this.toggle.check();
        else
            this.toggle.uncheck();
        this.isFromSelf = false;
    };
    DCToggle.prototype.onValueChanged = function (v) {
        if (this.revserse) {
            this.setChecked(!v);
        }
        else {
            this.setChecked(v);
        }
    };
    __decorate([
        property({ tooltip: "If reverse is enabled ,checked is false !, unchecked is true" })
    ], DCToggle.prototype, "revserse", void 0);
    __decorate([
        property({ tooltip: " Make sure data bind type should be boolean" })
    ], DCToggle.prototype, "autosync", void 0);
    DCToggle = __decorate([
        ccclass,
        menu("DCUI/DCToggle")
    ], DCToggle);
    return DCToggle;
}(DCUI_1.default));
exports.default = DCToggle;

cc._RF.pop();