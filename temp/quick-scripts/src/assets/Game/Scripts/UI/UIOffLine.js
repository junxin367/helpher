"use strict";
cc._RF.push(module, '0af08ptRkBIy7gzoiKHutrO', 'UIOffLine');
// Game/Scripts/UI/UIOffLine.ts

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
var wegame_1 = require("../sdk/wegame");
var CloudFuncTypes_1 = require("../Common/CloudFuncTypes");
var Platform_1 = require("../../../framework/extension/Platform");
var event_1 = require("../../../framework/core/event");
var WeakNetGame_1 = require("../../../framework/extension/weak_net_game/WeakNetGame");
var display_1 = require("../../../framework/misc/display");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIOffLine = /** @class */ (function (_super) {
    __extends(UIOffLine, _super);
    function UIOffLine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_get = null;
        _this.btn_getjia = null;
        _this.sdk = null;
        _this.tili_label = null;
        _this.youlike = null;
        _this.tili = 0;
        return _this;
    }
    UIOffLine.prototype.onLoad = function () {
    };
    UIOffLine.prototype.start = function () {
        // if (PlayerInfo.isShowSDK()) {
        //     let newInter = window['zzsdkui'].inter_scroll(1, 'inter_x', 350, null, 100, null, function () {
        //         Main.instance.show_interfull();
        //     }.bind(this));
        //     newInter && this.sdk.addChild(newInter);
        //     newInter.setPosition(0, 150);
        // }
    };
    UIOffLine.prototype.onShow = function (num) {
        this.tili = num;
        this.bannerMove(true);
        this.tili_label.string = "+" + num;
    };
    UIOffLine.prototype.bannerMove = function (b) {
        if (b === void 0) { b = false; }
        if (b && wegame_1.default.isCheatOpen(CloudFuncTypes_1.CloudFuncType.Banner_move)) {
            wegame_1.default.enableFakeForAdClick(this.btn_get, this.btn_getjia, 2, this.err.bind(this));
        }
        else {
            this.btn_get.active = true;
            this.btn_getjia.active = false;
            Platform_1.default.showBannerAd();
        }
    };
    UIOffLine.prototype.err = function () {
        // if (PlayerInfo.isShowSDK()) {
        //     if (this.youlike == null) {
        //         this.youlike = window['zzsdkui'].youlike(2, null, null, null, function () {
        //             Game.instance.interfull.active = true;
        //         }.bind(this));
        //         if (this.youlike) {
        //             this.sdk.addChild(this.youlike);
        //             this.youlike.scale = 1;
        //         }
        //     }
        //     if (this.youlike)
        //         this.youlike.active = true;
        // }
    };
    UIOffLine.prototype.onDestroy = function () {
        // if (PlayerInfo.isShowSDK()) window['zzsdkui'].unscheduleAllCallbacks();
    };
    UIOffLine.prototype.click_get = function () {
        event_1.evt.emit("Game.getTili", display_1.default.center, this.tili);
        PlayerInfo_1.PlayerInfo.labour += this.tili;
        vm.hide(this);
    };
    UIOffLine.prototype.click_getDouble = function () {
        var _this = this;
        WeakNetGame_1.default.doChoice("SOV_Double_Offline", function (_) {
            event_1.evt.emit("Game.getTili", display_1.default.center, _this.tili * 2);
            PlayerInfo_1.PlayerInfo.labour += (_this.tili * 2);
            vm.hide(_this);
        }, this);
    };
    __decorate([
        property(cc.Node)
    ], UIOffLine.prototype, "btn_get", void 0);
    __decorate([
        property(cc.Node)
    ], UIOffLine.prototype, "btn_getjia", void 0);
    __decorate([
        property(cc.Node)
    ], UIOffLine.prototype, "sdk", void 0);
    __decorate([
        property(cc.Label)
    ], UIOffLine.prototype, "tili_label", void 0);
    UIOffLine = __decorate([
        ccclass
    ], UIOffLine);
    return UIOffLine;
}(mvcView_1.default));
exports.default = UIOffLine;

cc._RF.pop();