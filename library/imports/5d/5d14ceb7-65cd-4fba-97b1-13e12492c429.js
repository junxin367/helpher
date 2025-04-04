"use strict";
cc._RF.push(module, '5d14c63Zc1PupexE+EkksQp', 'MessageBoxComponent');
// framework/ui/MessageBoxComponent.ts

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
var View_1 = require("./View");
var MessageBoxManager_1 = require("./MessageBoxManager");
// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, playOnFocus = _a.playOnFocus;
var MessageBoxComponent = /** @class */ (function (_super) {
    __extends(MessageBoxComponent, _super);
    function MessageBoxComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.node_title = null;
        _this.node_content = null;
        _this.btn_ok = null;
        _this.btn_cancel = null;
        _this.messageBoxCallback = null;
        _this.label_ok = null;
        _this.label_cancel = null;
        _this.group_ok_cancel = null;
        _this.group_ok = null;
        return _this;
        // update (dt) {}
    }
    MessageBoxComponent.prototype.onLoad = function () {
        this.label_ok = this.btn_ok.getChildByName("Label").getComponent(cc.Label);
        this.label_cancel = this.btn_cancel.getChildByName("Label").getComponent(cc.Label);
        this.getComponent(View_1.default).setDelegate(this);
        this.bgAnimation = this.node.getChildByName("bg").getComponent(cc.Animation);
    };
    MessageBoxComponent.prototype.onHidden = function () {
    };
    MessageBoxComponent.prototype.onShown = function (params) {
        this.node_title.string = params.title;
        this.node_content.string = params.content;
        this.messageBoxCallback = params.callback;
        if (params.extra) {
            this.label_ok.string = params.extra.okText;
            this.label_cancel.string = params.extra.cancelText;
        }
        if (params.buttons == MessageBoxManager_1.MessageBox.OK_CANCEL) {
            //show two 
            this.group_ok_cancel.active = true;
            this.group_ok.active = false;
        }
        else {
            //show one 
            this.group_ok.active = true;
            this.group_ok_cancel.active = false;
        }
    };
    MessageBoxComponent.prototype.start = function () {
    };
    MessageBoxComponent.prototype.on_btn_ok_clicked = function () {
        if (this.messageBoxCallback)
            this.messageBoxCallback.call(null, MessageBoxManager_1.MessageBox.OK);
        this.getComponent(View_1.default).hide();
    };
    MessageBoxComponent.prototype.on_btn_cancel_clicked = function () {
        if (this.messageBoxCallback)
            this.messageBoxCallback.call(null, MessageBoxManager_1.MessageBox.CANCEL);
        this.getComponent(View_1.default).hide();
    };
    __decorate([
        property(cc.Label)
    ], MessageBoxComponent.prototype, "node_title", void 0);
    __decorate([
        property(cc.Label)
    ], MessageBoxComponent.prototype, "node_content", void 0);
    __decorate([
        property(cc.Node)
    ], MessageBoxComponent.prototype, "btn_ok", void 0);
    __decorate([
        property(cc.Node)
    ], MessageBoxComponent.prototype, "btn_cancel", void 0);
    __decorate([
        property(cc.Node)
    ], MessageBoxComponent.prototype, "group_ok_cancel", void 0);
    __decorate([
        property(cc.Node)
    ], MessageBoxComponent.prototype, "group_ok", void 0);
    MessageBoxComponent = __decorate([
        ccclass
    ], MessageBoxComponent);
    return MessageBoxComponent;
}(cc.Component));
exports.default = MessageBoxComponent;

cc._RF.pop();