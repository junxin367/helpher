"use strict";
cc._RF.push(module, 'bc48cBqkERHuJx+iKzOzwOV', 'MessageBoxManager');
// framework/ui/MessageBoxManager.ts

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
exports.MessageBox = void 0;
var ViewManager_1 = require("./ViewManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MessageBoxManager = /** @class */ (function (_super) {
    __extends(MessageBoxManager, _super);
    function MessageBoxManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prefab = null;
        return _this;
    }
    MessageBoxManager_1 = MessageBoxManager;
    MessageBoxManager.prototype.onLoad = function () {
        MessageBoxManager_1.instance = this;
    };
    var MessageBoxManager_1;
    MessageBoxManager.instance = null;
    __decorate([
        property(cc.Prefab)
    ], MessageBoxManager.prototype, "prefab", void 0);
    MessageBoxManager = MessageBoxManager_1 = __decorate([
        ccclass
    ], MessageBoxManager);
    return MessageBoxManager;
}(cc.Component));
exports.default = MessageBoxManager;
var MessageBox = /** @class */ (function () {
    function MessageBox() {
    }
    MessageBox.prototype.start = function () {
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    // static UIPath:string = "plugin_boosts/ui/MessageBox"
    MessageBox.show = function (content, title, buttons, extra) {
        title = (title == null || title == undefined) ? "提示" : title;
        return new Promise(function (resolve, reject) {
            ViewManager_1.default.instance.showFromPrefab(MessageBoxManager.instance.prefab, "MessageBox", {
                title: title,
                content: content,
                buttons: buttons,
                extra: extra,
                callback: function (code) {
                    resolve(code);
                }
            });
        });
    };
    MessageBox.raise = function (prefabPath, texts) {
        return new Promise(function (resolve, reject) {
            ViewManager_1.default.instance.show(prefabPath, {
                text: texts,
                callback: function (code) {
                    resolve(code);
                }
            });
        });
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    MessageBox.OK = 1;
    MessageBox.CANCEL = 0;
    MessageBox.OK_CANCEL = 2;
    return MessageBox;
}());
exports.MessageBox = MessageBox;

cc._RF.pop();