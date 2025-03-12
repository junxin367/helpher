"use strict";
cc._RF.push(module, 'edf6fREfQxFr7fFDq1yfXUK', 'UIProgressRewardGet');
// Game/Scripts/UI/UIProgressRewardGet.ts

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
var ccUtil_1 = require("../../../framework/utils/ccUtil");
var UserInfo_1 = require("../../../framework/extension/weak_net_game/UserInfo");
var WeakNetGame_1 = require("../../../framework/extension/weak_net_game/WeakNetGame");
var actionUtil_1 = require("../../../framework/utils/actionUtil");
var event_1 = require("../../../framework/core/event");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIProgressRewardGet = /** @class */ (function (_super) {
    __extends(UIProgressRewardGet, _super);
    function UIProgressRewardGet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = null;
        _this.title2 = null;
        _this.icon = null;
        _this.videoIcon = null;
        _this.node_no = null;
        _this.type = '';
        _this.skin_id = 0;
        return _this;
    }
    UIProgressRewardGet.prototype.onLoad = function () {
    };
    UIProgressRewardGet.prototype.start = function () {
    };
    UIProgressRewardGet.prototype.onShown = function (type, cfg) {
        event_1.evt.emit("UIProgressRewardGet.show");
        actionUtil_1.default.jellyJump2(this.node);
        this.type = type;
        this.videoIcon.active = false;
        this.node_no.active = false;
        if (type == "Energy") {
            this.title.string = '体力礼包';
            ccUtil_1.default.setDisplay(this.icon, 'Img/icon/tili');
            this.title2.string = '体力x3';
        }
        else if (type == 'Skin') {
            //随机皮肤
            this.skin_id = PlayerInfo_1.PlayerInfo.randomVideoSkin();
            this.title.string = '新皮肤';
            this.videoIcon.active = true;
            var skin = csv.Skin.get(this.skin_id);
            this.title2.string = skin.name;
            ccUtil_1.default.setDisplay(this.icon, "Img/skin/thumbnail/" + skin.type + "/" + skin.thumbnail);
            this.unschedule(this.show_no);
            this.scheduleOnce(this.show_no, 1);
        }
        else if (type == 'Prop') {
            // Toast.make("获得道具大礼包")
            this.title.string = '道具礼包';
            ccUtil_1.default.setDisplay(this.icon, 'Img/icon/xianding');
            this.title2.string = '三种道具数量 +1';
        }
    };
    UIProgressRewardGet.prototype.show_no = function () {
        this.node_no.active = true;
    };
    UIProgressRewardGet.prototype.unlockSkin = function () {
        if (this.skin_id != 0) {
            var skin = csv.Skin.get(this.skin_id);
            ToastManager_1.Toast.make("获得皮肤 : " + skin.name);
            PlayerInfo_1.PlayerInfo.unlockSkin(this.skin_id);
        }
    };
    UIProgressRewardGet.prototype.click_get = function () {
        if (this.type == 'Skin') {
            WeakNetGame_1.default.doChoice("SOV_ProgressReward_Skin", this.unlockSkin, this);
        }
        else if (this.type == 'Energy') {
            ToastManager_1.Toast.make("获得体力x3");
            PlayerInfo_1.PlayerInfo.labour += 3;
            PlayerInfo_1.PlayerInfo.save("labour");
        }
        else if (this.type == 'Prop') {
            ToastManager_1.Toast.make("获得道具大礼包 ");
            UserInfo_1.UserInfo.gun_num++;
            UserInfo_1.UserInfo.snowball_num++;
            UserInfo_1.UserInfo.magnet_num++;
            UserInfo_1.UserInfo.save();
        }
        vm.hide(this);
    };
    UIProgressRewardGet.prototype.click_no = function () {
        vm.hide(this);
    };
    __decorate([
        property(cc.Label)
    ], UIProgressRewardGet.prototype, "title", void 0);
    __decorate([
        property(cc.Label)
    ], UIProgressRewardGet.prototype, "title2", void 0);
    __decorate([
        property(cc.Sprite)
    ], UIProgressRewardGet.prototype, "icon", void 0);
    __decorate([
        property(cc.Node)
    ], UIProgressRewardGet.prototype, "videoIcon", void 0);
    __decorate([
        property(cc.Node)
    ], UIProgressRewardGet.prototype, "node_no", void 0);
    UIProgressRewardGet = __decorate([
        ccclass
    ], UIProgressRewardGet);
    return UIProgressRewardGet;
}(cc.Component));
exports.default = UIProgressRewardGet;

cc._RF.pop();