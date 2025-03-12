"use strict";
cc._RF.push(module, 'd0185xh9BdOkbkHRPDQvft4', 'UIGetGun');
// Game/Scripts/UI/UIGetGun.ts

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
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var UserInfo_1 = require("../../../framework/extension/weak_net_game/UserInfo");
var mvcView_1 = require("../../../framework/ui/mvcView");
var IconSov_1 = require("../../../framework/extension/weak_net_game/IconSov");
var WeakNetGame_1 = require("../../../framework/extension/weak_net_game/WeakNetGame");
var PropInfo_1 = require("../Common/PropInfo");
var ccUtil_1 = require("../../../framework/utils/ccUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIGetGun = /** @class */ (function (_super) {
    __extends(UIGetGun, _super);
    function UIGetGun() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.label_name = null;
        _this.label_desc = null;
        _this.scene_label = "";
        _this.data = null;
        _this.propList = {
            1: "gun_num",
            2: "snowball_num",
            3: "magnet_num"
        };
        return _this;
    }
    UIGetGun.prototype.onLoad = function () {
        var _this = this;
        this.registerSubViews(IconSov_1.default);
        this.register(this.label_name, function (_) { return _this.data.name; });
        this.register(this.icon, function (_) { return _this.data.icon; });
        this.register(this.label_desc, function (_) { return _this.data.desc; });
    };
    UIGetGun.prototype.onShown = function (callback, str) {
        this.callback = callback;
        this.scene_label = str;
        UserInfo_1.UserInfo.gunView++;
        UserInfo_1.UserInfo.save("gunView");
        UserInfo_1.UserInfo.gunViewDay++;
        UserInfo_1.UserInfo.save("gunViewDay");
        var num = g.randomInt(1, 4);
        this.data = ccUtil_1.default.get(PropInfo_1.PropInfo, num);
        this.render();
    };
    UIGetGun.prototype.click_close = function () {
        vm.hide(this);
    };
    UIGetGun.prototype.click_getGun = function () {
        var _this = this;
        WeakNetGame_1.default.doChoice("Start_Get_Gun", function (_) {
            // if (UserInfo.gun_num > 0) {
            //     Toast.make("枪的数量已达上限")
            //     return;
            // }
            UserInfo_1.UserInfo[_this.propList[_this.data.id]] += 1;
            UserInfo_1.UserInfo[_this.scene_label] = true;
            UserInfo_1.UserInfo.save();
            ToastManager_1.Toast.make("已领取" + _this.data.name);
            vm.hide(_this);
        }, this);
    };
    UIGetGun.prototype.onHidden = function () {
        this.callback && this.callback();
    };
    __decorate([
        property(cc.Sprite)
    ], UIGetGun.prototype, "icon", void 0);
    __decorate([
        property(cc.Label)
    ], UIGetGun.prototype, "label_name", void 0);
    __decorate([
        property(cc.Label)
    ], UIGetGun.prototype, "label_desc", void 0);
    UIGetGun = __decorate([
        ccclass
    ], UIGetGun);
    return UIGetGun;
}(mvcView_1.default));
exports.default = UIGetGun;

cc._RF.pop();