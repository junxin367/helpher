"use strict";
cc._RF.push(module, 'f1b12WMwzFI2JdyDYdFUmT8', 'UIGetGift');
// Game/Scripts/UI/UIGetGift.ts

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
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var mvcView_1 = require("../../../framework/ui/mvcView");
var actionUtil_1 = require("../../../framework/utils/actionUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIGetGift = /** @class */ (function (_super) {
    __extends(UIGetGift, _super);
    function UIGetGift() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.num_label = null;
        _this._num = 0;
        _this._reward = 0;
        return _this;
    }
    UIGetGift.prototype.onLoad = function () {
    };
    UIGetGift.prototype.onShown = function (num) {
        actionUtil_1.default.jellyJump2(this.node);
        var data = csv.star.get(num + 12);
        this.num_label.string = "恭喜你获得" + data.reward + "颗星星";
        if (PlayerInfo_1.PlayerInfo.challenge_gift.indexOf(num) != -1) {
            ToastManager_1.Toast.make("已领取过该礼包");
            vm.hide(this);
            return;
        }
        this._num = num;
        this._reward = data.reward;
    };
    UIGetGift.prototype.click_close = function () {
        PlayerInfo_1.PlayerInfo.challenge_gift.push(this._num);
        PlayerInfo_1.PlayerInfo.star += this._reward;
        PlayerInfo_1.PlayerInfo.save();
        vm.hide(this);
    };
    __decorate([
        property(cc.Label)
    ], UIGetGift.prototype, "num_label", void 0);
    UIGetGift = __decorate([
        ccclass
    ], UIGetGift);
    return UIGetGift;
}(mvcView_1.default));
exports.default = UIGetGift;

cc._RF.pop();