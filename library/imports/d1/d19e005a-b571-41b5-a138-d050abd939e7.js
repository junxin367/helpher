"use strict";
cc._RF.push(module, 'd19e0BatXFBtaE40FCr2Tnn', 'UIGetPersent');
// Game/Scripts/UI/UIGetPersent.ts

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
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var event_1 = require("../../../framework/core/event");
var display_1 = require("../../../framework/misc/display");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIGetPersent = /** @class */ (function (_super) {
    __extends(UIGetPersent, _super);
    function UIGetPersent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isclick = false;
        return _this;
    }
    UIGetPersent.prototype.onLoad = function () {
    };
    UIGetPersent.prototype.onShow = function () {
        this.isclick = false;
    };
    UIGetPersent.prototype.click_get = function () {
        if (this.isclick)
            return;
        this.isclick = true;
        PlayerInfo_1.PlayerInfo.labour += 3;
        event_1.evt.emit("Game.getTili", display_1.default.center, 3);
        vm.hide(this);
    };
    UIGetPersent = __decorate([
        ccclass
    ], UIGetPersent);
    return UIGetPersent;
}(mvcView_1.default));
exports.default = UIGetPersent;

cc._RF.pop();