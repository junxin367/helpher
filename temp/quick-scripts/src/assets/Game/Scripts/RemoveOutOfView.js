"use strict";
cc._RF.push(module, 'a537fCNm/hKzLebsq+eZ3m/', 'RemoveOutOfView');
// Game/Scripts/RemoveOutOfView.ts

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
var Signal_1 = require("../../framework/core/Signal");
var ccUtil_1 = require("../../framework/utils/ccUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RemoveOutOfView = /** @class */ (function (_super) {
    __extends(RemoveOutOfView, _super);
    function RemoveOutOfView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lx = 0;
        _this.ly = 0;
        _this.rx = 0;
        _this.ry = 0;
        _this.usingWorldSpace = false;
        _this.onOffScreen = new Signal_1.default();
        return _this;
    }
    RemoveOutOfView.prototype.onLoad = function () {
        var w = cc.winSize.width;
        var h = cc.winSize.height;
        this.lx = -w / 2;
        this.rx = w / 2;
        this.ly = -h / 2;
        this.ry = h / 2;
    };
    RemoveOutOfView.prototype.start = function () {
    };
    RemoveOutOfView.prototype.update = function () {
        var xy = this.node.getPosition();
        if (this.usingWorldSpace) {
            xy = ccUtil_1.default.getWorldPosition(this.node);
            if (xy.x < 0 || xy.x > cc.winSize.width || xy.y < 0 || xy.y > cc.winSize.height) {
                this.onOffScreen.fire();
                this.node.destroy();
            }
        }
        else {
            if (xy.x < this.lx || xy.x > this.rx || xy.y > this.ry || xy.y < this.ly) {
                this.onOffScreen.fire();
                this.node.destroy();
            }
        }
    };
    RemoveOutOfView = __decorate([
        ccclass
    ], RemoveOutOfView);
    return RemoveOutOfView;
}(cc.Component));
exports.default = RemoveOutOfView;

cc._RF.pop();