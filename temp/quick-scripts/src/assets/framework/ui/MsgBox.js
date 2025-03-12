"use strict";
cc._RF.push(module, '80286DRY89Mi4zsQlde8jnL', 'MsgBox');
// framework/ui/MsgBox.ts

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var View_1 = require("./View");
var ccUtil_1 = require("../utils/ccUtil");
// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, playOnFocus = _a.playOnFocus;
var MsgBox = /** @class */ (function (_super) {
    __extends(MsgBox, _super);
    function MsgBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_ok = null;
        _this.btn_cancel = null;
        _this.defaultStrings = {};
        _this.text = [];
        _this.messageBoxCallback = null;
        _this.label_ok = null;
        _this.label_cancel = null;
        return _this;
        // update (dt) {}
    }
    MsgBox_1 = MsgBox;
    MsgBox.prototype.onLoad = function () {
        // this.getComponent(View).setDelegate(this);
        ccUtil_1.default.newButton(this.btn_ok, "MsgBox", "on_btn_ok_clicked", this.node);
        ccUtil_1.default.newButton(this.btn_cancel, "MsgBox", "on_btn_cancel_clicked", this.node);
    };
    MsgBox.prototype.onHidden = function () {
    };
    MsgBox.prototype.onShown = function (params) {
        var _this = this;
        this.messageBoxCallback = params.callback;
        Object.keys(params.text).forEach(function (k) {
            var _a;
            var label = ccUtil_1.default.find(k, _this.node, cc.Label);
            var basestr = _this.defaultStrings[k];
            if (basestr == null) {
                basestr = label.string;
                _this.defaultStrings[k] = basestr;
            }
            if (label) {
                label.string = (_a = cc.js).formatStr.apply(_a, __spreadArrays([basestr], params.text[k]));
            }
            else {
                console.warn("label not found", k);
            }
        });
    };
    MsgBox.prototype.start = function () {
    };
    MsgBox.prototype.on_btn_ok_clicked = function () {
        if (this.messageBoxCallback)
            this.messageBoxCallback.call(null, MsgBox_1.OK);
        this.getComponent(View_1.default).hide();
    };
    MsgBox.prototype.on_btn_cancel_clicked = function () {
        if (this.messageBoxCallback)
            this.messageBoxCallback.call(null, MsgBox_1.CANCEL);
        this.getComponent(View_1.default).hide();
    };
    var MsgBox_1;
    MsgBox.OK = 1;
    MsgBox.CANCEL = 0;
    __decorate([
        property(cc.Node)
    ], MsgBox.prototype, "btn_ok", void 0);
    __decorate([
        property(cc.Node)
    ], MsgBox.prototype, "btn_cancel", void 0);
    MsgBox = MsgBox_1 = __decorate([
        ccclass
    ], MsgBox);
    return MsgBox;
}(cc.Component));
exports.default = MsgBox;

cc._RF.pop();