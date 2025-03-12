"use strict";
cc._RF.push(module, 'b9582VfxLRPR61EjSxKxBgp', 'UIGetSuccesss');
// Game/Scripts/UI/UIGetSuccesss.ts

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
var mvcView_1 = require("../../../framework/ui/mvcView");
var event_1 = require("../../../framework/core/event");
var display_1 = require("../../../framework/misc/display");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIGetSuccesss = /** @class */ (function (_super) {
    __extends(UIGetSuccesss, _super);
    function UIGetSuccesss() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.label_num = null;
        return _this;
    }
    UIGetSuccesss.prototype.onLoad = function () {
        var _this = this;
        this.onClick(this.btn_close, function (_) { return _this.click_close(); });
    };
    UIGetSuccesss.prototype.onShow = function (num) {
        this.label_num.string = num.toString();
        if (!isNaN(num) && num > 0) {
            PlayerInfo_1.PlayerInfo.labour += num;
            PlayerInfo_1.PlayerInfo.save("labour");
            event_1.evt.emit("Game.getTili", display_1.default.center, num);
        }
    };
    UIGetSuccesss.prototype.click_close = function () {
        vm.hide(this);
    };
    UIGetSuccesss.prototype.onHidden = function () {
    };
    __decorate([
        property(cc.Node)
    ], UIGetSuccesss.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Label)
    ], UIGetSuccesss.prototype, "label_num", void 0);
    UIGetSuccesss = __decorate([
        ccclass
    ], UIGetSuccesss);
    return UIGetSuccesss;
}(mvcView_1.default));
exports.default = UIGetSuccesss;

cc._RF.pop();