"use strict";
cc._RF.push(module, 'def1dPA325M7pKG0xS3zYXZ', 'UISign');
// Game/Scripts/UI/UISign.ts

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
var ccUtil_1 = require("../../../framework/utils/ccUtil");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var gameUtil_1 = require("../../../framework/utils/gameUtil");
var WeakNetGame_1 = require("../../../framework/extension/weak_net_game/WeakNetGame");
var event_1 = require("../../../framework/core/event");
var mvcView_1 = require("../../../framework/ui/mvcView");
var mathf_1 = require("../../../framework/utils/mathf");
var display_1 = require("../../../framework/misc/display");
var UserInfo_1 = require("../../../framework/extension/weak_net_game/UserInfo");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var actionUtil_1 = require("../../../framework/utils/actionUtil");
var Main_1 = require("../Main");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DayNode = /** @class */ (function () {
    function DayNode(node) {
        this.label_title = null;
        this.icon = null;
        this.label_num = null;
        this.node_claimed = null;
        this.label_title = ccUtil_1.default.find("title", node, cc.Label);
        this.icon = ccUtil_1.default.find("icon", node, cc.Sprite);
        this.label_num = ccUtil_1.default.find("num", node, cc.Label);
        this.node_claimed = node.getChildByName("claimed");
    }
    DayNode.prototype.setData = function (data, claimed, isloop) {
        if (isloop === void 0) { isloop = false; }
        this.node_claimed.active = claimed;
        if (isloop) {
            data.imageUrl = data.iconLoop;
        }
        if (data.imageUrl)
            ccUtil_1.default.setDisplay(this.icon, data.imageUrl);
        this.label_title.string = '第' + data.day + "日";
        if (this.label_num) {
            this.label_num.string = 'x' + data.num;
        }
    };
    return DayNode;
}());
/**
 * csv 表头
 *
天数	奖励内容	奖励数量	图标
day	reward	number	icon
int	string	int	string
1	gold	200	gold

    (DC)PlayerInfo
        -CheckInTime  签到时间
        -CheckInCount 签到次数
    
    UI  预置体说明：
     * dayCotainer
     *  - day
     *      -title
     *      -icon
     *      -num
     *      -claimed
 */
var UISign = /** @class */ (function (_super) {
    __extends(UISign, _super);
    function UISign() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dayContainer = null;
        _this.days = [];
        _this.daysData = [];
        _this.toggle = null;
        _this.btnstring_label = null;
        _this.seven_label = null;
        _this.btn_claim = null;
        _this.claimedTip_label = null;
        _this.claimedTip = null;
        _this.icon_ad = null;
        _this.isLoop = false;
        return _this;
    }
    UISign.prototype.onLoad = function () {
        var _this = this;
        this.dayContainer.children.forEach(function (v) {
            var dayNode = new DayNode(v);
            _this.days.push(dayNode);
        });
        csv.Sign.values.forEach(function (v, i) {
            _this.daysData.push({ type: v.type, day: i + 1, imageUrl: v.icon, num: v.number, btnString: v.btnString, iconLoop: v.iconLoop, typeLoop: v.typeLoop, btnLoopString: v.btnLoopString });
        });
        this.register(this.btn_claim, this.click_checkIn);
        this.icon_ad.active = false;
    };
    UISign.prototype.onShown = function () {
        actionUtil_1.default.jellyJump2(this.node);
        var c = 0;
        if (PlayerInfo_1.PlayerInfo.signCount >= 7) {
            this.isLoop = true;
        }
        for (var i = 0; i < this.days.length; i++) {
            var day_1 = i;
            var dayNode = this.days[i];
            var claimed = day_1 < mathf_1.default.Repeat(PlayerInfo_1.PlayerInfo.signCount, 7);
            c = claimed ? c + 1 : c;
            dayNode.setData(this.daysData[i], claimed, this.isLoop);
        }
        //全部领取完毕
        if (c == this.days.length) {
            // this.btn_claim.node.active = false;
            // ccUtil.setButtonEnabled(this.btn_claim, false);
            this.btn_claim.node.active = false;
            this.claimedTip.active = false;
            this.claimedTip_label.active = true;
            return;
        }
        var day = mathf_1.default.Repeat(PlayerInfo_1.PlayerInfo.signCount, 7);
        var data = this.daysData[day];
        if (this.isLoop) {
            this.btnstring_label.string = data.btnLoopString;
            this.seven_label.node.active = false;
        }
        else {
            this.btnstring_label.string = data.btnString;
        }
        this.updateStatus();
    };
    UISign.prototype.updateStatus = function (day) {
        if (gameUtil_1.default.isNextDay(PlayerInfo_1.PlayerInfo.signTime)) {
            //可领取
            // ccUtil.setButtonEnabled(this.btn_claim, true);
            this.btn_claim.node.active = true;
            this.claimedTip.active = false;
            this.claimedTip_label.active = true;
        }
        else {
            //已领取
            // ccUtil.setButtonEnabled(this.btn_claim, false);
            this.btn_claim.node.active = false;
            this.claimedTip.active = true;
            this.claimedTip_label.active = false;
        }
        if (day) {
            var dayNode = this.days[day];
            var data = this.daysData[day];
            dayNode.setData(data, day < mathf_1.default.Repeat(PlayerInfo_1.PlayerInfo.signCount, 7), this.isLoop);
        }
    };
    UISign.prototype.check_double = function () {
        this.icon_ad.active = this.toggle.isChecked;
    };
    //签到  
    UISign.prototype.click_checkIn = function () {
        if (this.toggle.isChecked) {
            WeakNetGame_1.default.doChoice("SOV_Sign_Double", this.claimDouble, this);
        }
        else {
            this.claim();
        }
        vm.hide(this);
    };
    UISign.prototype.claimDouble = function () {
        this.claim(2);
        vm.hide(this);
    };
    ////////////////////////////////////////////////////////////////
    // 领取第n天的奖励
    UISign.prototype.claim = function (mult) {
        if (mult === void 0) { mult = 1; }
        var day = mathf_1.default.Repeat(PlayerInfo_1.PlayerInfo.signCount, 7);
        Main_1.default.instance.qiandao_hongdian.active = false;
        PlayerInfo_1.PlayerInfo.signTime = Date.now();
        PlayerInfo_1.PlayerInfo.signCount++;
        PlayerInfo_1.PlayerInfo.save();
        var data = this.daysData[day];
        if (this.isLoop) {
            data.type = data.typeLoop;
        }
        if (data.type == 1) {
            PlayerInfo_1.PlayerInfo.labour += (data.num * mult);
            event_1.evt.emit("Game.getTili", display_1.default.center, (data.num * mult));
        }
        else if (data.type == 2) {
            UserInfo_1.UserInfo.gun_num += (data.num * mult);
            UserInfo_1.UserInfo.snowball_num += (data.num * mult);
            UserInfo_1.UserInfo.magnet_num += (data.num * mult);
            ToastManager_1.Toast.make("恭喜获得道具礼包");
            UserInfo_1.UserInfo.save();
        }
        else {
            PlayerInfo_1.PlayerInfo.unlockSkin(13);
            ToastManager_1.Toast.make("恭喜获得限定皮肤");
        }
        // evt.emit("UICheckIn.getReward", data, mult)
        this.updateStatus(day);
    };
    ////////////////////////////////////////////////////////////////
    UISign.prototype.click_close = function () {
        vm.hide(this);
    };
    __decorate([
        property(cc.Node)
    ], UISign.prototype, "dayContainer", void 0);
    __decorate([
        property(cc.Toggle)
    ], UISign.prototype, "toggle", void 0);
    __decorate([
        property(cc.Label)
    ], UISign.prototype, "btnstring_label", void 0);
    __decorate([
        property(cc.Label)
    ], UISign.prototype, "seven_label", void 0);
    __decorate([
        property(cc.Button)
    ], UISign.prototype, "btn_claim", void 0);
    __decorate([
        property(cc.Node)
    ], UISign.prototype, "claimedTip_label", void 0);
    __decorate([
        property(cc.Node)
    ], UISign.prototype, "claimedTip", void 0);
    __decorate([
        property(cc.Node)
    ], UISign.prototype, "icon_ad", void 0);
    UISign = __decorate([
        ccclass
    ], UISign);
    return UISign;
}(mvcView_1.default));
exports.default = UISign;

cc._RF.pop();