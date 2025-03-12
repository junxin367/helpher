"use strict";
cc._RF.push(module, '1fff0lSIdFN15dcQJQ9V+vD', 'UISkip');
// Game/Scripts/UI/UISkip.ts

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
var Game_1 = require("../Game");
var WeakNetGame_1 = require("../../../framework/extension/weak_net_game/WeakNetGame");
var StatHelper_1 = require("../../../framework/extension/aldsdk/StatHelper");
var UserInfo_1 = require("../../../framework/extension/weak_net_game/UserInfo");
var IconSov_1 = require("../../../framework/extension/weak_net_game/IconSov");
var actionUtil_1 = require("../../../framework/utils/actionUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UISkip = /** @class */ (function (_super) {
    __extends(UISkip, _super);
    function UISkip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.close_btn = null;
        _this.sdk = null;
        _this.isVideo = false;
        return _this;
        // update (dt) {}
    }
    UISkip.prototype.onLoad = function () {
        this.registerSubViews(IconSov_1.default);
    };
    UISkip.prototype.onShow = function (callback) {
        actionUtil_1.default.jellyJump2(this.node);
        // this.close_btn.active = false;
        this.callback = callback;
        this.isVideo = false;
        this.render();
        // let youlike = window['zzsdkui'].youlike(0, null, null, null, function () {
        //     this.interfull.active = true;
        // }.bind(this));
        // if (youlike) {
        //     youlike && this.sdk.addChild(youlike);
        //     youlike.scale = 1;
        // }
        this.close_btn.active = true;
        // this.scheduleOnce(_ => {
        // }, 1)
    };
    UISkip.prototype.start = function () {
    };
    UISkip.prototype.click_close = function () {
        vm.hide(this);
    };
    UISkip.prototype.click_skip = function () {
        var _this = this;
        cc.director.pause();
        WeakNetGame_1.default.doChoice("SOV_Skip_Level", function (_) {
            cc.director.resume();
            // 新用户跳关人数
            if (UserInfo_1.UserInfo.isNew) {
                StatHelper_1.default.sendPath("新用户跳关人数", '关卡', PlayerInfo_1.PlayerInfo.playinglevel);
            }
            vm.hide(_this);
            Game_1.default.instance.onWin();
        }, this);
    };
    UISkip.prototype.onHidden = function () {
        if (this.isVideo) {
            this.callback && this.callback();
        }
    };
    __decorate([
        property(cc.Node)
    ], UISkip.prototype, "close_btn", void 0);
    __decorate([
        property(cc.Node)
    ], UISkip.prototype, "sdk", void 0);
    UISkip = __decorate([
        ccclass
    ], UISkip);
    return UISkip;
}(mvcView_1.default));
exports.default = UISkip;

cc._RF.pop();