"use strict";
cc._RF.push(module, '7213alSGlhOObvGLLyQvhtZ', 'DCPandoraPoint');
// framework/ui/DCPandoraPoint.ts

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
var PandoraPoint_1 = require("./controller/PandoraPoint");
// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, menu = _a.menu;
var DCPandoraPoint = /** @class */ (function (_super) {
    __extends(DCPandoraPoint, _super);
    function DCPandoraPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DCPandoraPoint.prototype.onLoad = function () {
        this.point = this.getComponent(PandoraPoint_1.default);
    };
    DCPandoraPoint.prototype.onValueChanged = function (v) {
        this.point.setNumber(v);
    };
    DCPandoraPoint = __decorate([
        ccclass,
        menu("DCUI/DCPandoraPoint"),
        requireComponent(PandoraPoint_1.default)
    ], DCPandoraPoint);
    return DCPandoraPoint;
}(DCUI_1.default));
exports.default = DCPandoraPoint;

cc._RF.pop();