
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UISign.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJU2lnbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBcUQ7QUFDckQsd0RBQXVEO0FBQ3ZELDhEQUF5RDtBQUN6RCxzRkFBaUY7QUFDakYsdURBQW9EO0FBQ3BELHlEQUFvRDtBQUNwRCx3REFBbUQ7QUFDbkQsMkRBQXNEO0FBQ3RELGdGQUErRTtBQUMvRSxtRUFBMkQ7QUFDM0Qsa0VBQTZEO0FBQzdELGdDQUEyQjtBQUVyQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQWE1QztJQUtJLGlCQUFtQixJQUFhO1FBSmhDLGdCQUFXLEdBQWEsSUFBSSxDQUFDO1FBQzdCLFNBQUksR0FBYyxJQUFJLENBQUM7UUFDdkIsY0FBUyxHQUFhLElBQUksQ0FBQztRQUMzQixpQkFBWSxHQUFZLElBQUksQ0FBQztRQUV6QixJQUFJLENBQUMsV0FBVyxHQUFHLGdCQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3ZELElBQUksQ0FBQyxJQUFJLEdBQUcsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDdEQsQ0FBQztJQUVELHlCQUFPLEdBQVAsVUFBUSxJQUFjLEVBQUUsT0FBZ0IsRUFBRSxNQUF1QjtRQUF2Qix1QkFBQSxFQUFBLGNBQXVCO1FBQzdELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUNuQyxJQUFJLE1BQU0sRUFBRTtZQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUNqQztRQUNELElBQUksSUFBSSxDQUFDLFFBQVE7WUFDYixnQkFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUE7UUFDOUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQzFDO0lBQ0wsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFJSDtJQUFvQywwQkFBTztJQUEzQztRQUFBLHFFQXdKQztRQXJKRyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixVQUFJLEdBQWMsRUFBRSxDQUFBO1FBQ3BCLGNBQVEsR0FBZSxFQUFFLENBQUE7UUFFekIsWUFBTSxHQUFjLElBQUksQ0FBQTtRQUd4QixxQkFBZSxHQUFhLElBQUksQ0FBQTtRQUdoQyxpQkFBVyxHQUFhLElBQUksQ0FBQTtRQUc1QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRzVCLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUdqQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLFlBQU0sR0FBWSxLQUFLLENBQUM7O0lBNkg1QixDQUFDO0lBM0hHLHVCQUFNLEdBQU47UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7WUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDNUIsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUN6QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUMsYUFBYSxFQUFjLENBQUMsQ0FBQTtRQUNyTSxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFRCx3QkFBTyxHQUFQO1FBQ0ksb0JBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLElBQUksdUJBQVUsQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLElBQUksS0FBRyxHQUFHLENBQUMsQ0FBQztZQUNaLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxPQUFPLEdBQUcsS0FBRyxHQUFHLGVBQUssQ0FBQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUQsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzNEO1FBQ0QsUUFBUTtRQUNSLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3ZCLHNDQUFzQztZQUN0QyxrREFBa0Q7WUFDbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDcEMsT0FBTztTQUNWO1FBQ0QsSUFBSSxHQUFHLEdBQUcsZUFBSyxDQUFDLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUMvQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN4QzthQUNJO1lBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUNoRDtRQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBQ0QsNkJBQVksR0FBWixVQUFhLEdBQUk7UUFDYixJQUFJLGtCQUFRLENBQUMsU0FBUyxDQUFDLHVCQUFVLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDekMsS0FBSztZQUNMLGlEQUFpRDtZQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUMvQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUN2QzthQUFNO1lBQ0gsS0FBSztZQUNMLGtEQUFrRDtZQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN4QztRQUNELElBQUksR0FBRyxFQUFFO1lBQ0wsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsR0FBRyxlQUFLLENBQUMsTUFBTSxDQUFDLHVCQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuRjtJQUNMLENBQUM7SUFHRCw2QkFBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDaEQsQ0FBQztJQUdELE1BQU07SUFDTiw4QkFBYSxHQUFiO1FBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUV2QixxQkFBVyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ25FO2FBQU07WUFDSCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEI7UUFDRCxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2pCLENBQUM7SUFFRCw0QkFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNkLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDakIsQ0FBQztJQUdELGdFQUFnRTtJQUNoRSxXQUFXO0lBQ1gsc0JBQUssR0FBTCxVQUFNLElBQVE7UUFBUixxQkFBQSxFQUFBLFFBQVE7UUFDVixJQUFJLEdBQUcsR0FBRyxlQUFLLENBQUMsTUFBTSxDQUFDLHVCQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hELGNBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5Qyx1QkFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDakMsdUJBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN2Qix1QkFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNoQix1QkFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDdkMsV0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUE7U0FDOUQ7YUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ3JCLG1CQUFRLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUN0QyxtQkFBUSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDM0MsbUJBQVEsQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ3pDLG9CQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZCLG1CQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbkI7YUFDSTtZQUNELHVCQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFCLG9CQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsOENBQThDO1FBQzlDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELGdFQUFnRTtJQUNoRSw0QkFBVyxHQUFYO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBcEpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1c7SUFJN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswQ0FDSTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNhO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ1M7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDUTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNlO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDTTtJQXpCUCxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBd0oxQjtJQUFELGFBQUM7Q0F4SkQsQUF3SkMsQ0F4Sm1DLGlCQUFPLEdBd0oxQztrQkF4Sm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2NVdGlsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdXRpbHMvY2NVdGlsXCI7XHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi4vQ29tbW9uL0Jhc2UvUGxheWVySW5mb1wiO1xyXG5pbXBvcnQgZ2FtZVV0aWwgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91dGlscy9nYW1lVXRpbFwiO1xyXG5pbXBvcnQgV2Vha05ldEdhbWUgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9XZWFrTmV0R2FtZVwiO1xyXG5pbXBvcnQgeyBldnQgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2NvcmUvZXZlbnRcIjtcclxuaW1wb3J0IG12Y1ZpZXcgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9tdmNWaWV3XCI7XHJcbmltcG9ydCBtYXRoZiBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3V0aWxzL21hdGhmXCI7XHJcbmltcG9ydCBkaXNwbGF5IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWlzYy9kaXNwbGF5XCI7XHJcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvVG9hc3RNYW5hZ2VyXCI7XHJcbmltcG9ydCBhY3Rpb25VdGlsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdXRpbHMvYWN0aW9uVXRpbFwiO1xyXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi4vTWFpblwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lnbkRhdGEge1xyXG4gICAgZGF5OiBudW1iZXI7XHJcbiAgICBpbWFnZVVybDogc3RyaW5nO1xyXG4gICAgaWNvbkxvb3A6IHN0cmluZztcclxuICAgIG51bTogbnVtYmVyO1xyXG4gICAgdHlwZTogbnVtYmVyO1xyXG4gICAgdHlwZUxvb3A6IG51bWJlcjtcclxuICAgIGJ0blN0cmluZzogc3RyaW5nO1xyXG4gICAgYnRuTG9vcFN0cmluZzogc3RyaW5nO1xyXG59XHJcblxyXG5jbGFzcyBEYXlOb2RlIHtcclxuICAgIGxhYmVsX3RpdGxlOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBpY29uOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgbGFiZWxfbnVtOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBub2RlX2NsYWltZWQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICB0aGlzLmxhYmVsX3RpdGxlID0gY2NVdGlsLmZpbmQoXCJ0aXRsZVwiLCBub2RlLCBjYy5MYWJlbClcclxuICAgICAgICB0aGlzLmljb24gPSBjY1V0aWwuZmluZChcImljb25cIiwgbm9kZSwgY2MuU3ByaXRlKTtcclxuICAgICAgICB0aGlzLmxhYmVsX251bSA9IGNjVXRpbC5maW5kKFwibnVtXCIsIG5vZGUsIGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLm5vZGVfY2xhaW1lZCA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjbGFpbWVkXCIpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGF0YShkYXRhOiBTaWduRGF0YSwgY2xhaW1lZDogYm9vbGVhbiwgaXNsb29wOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLm5vZGVfY2xhaW1lZC5hY3RpdmUgPSBjbGFpbWVkO1xyXG4gICAgICAgIGlmIChpc2xvb3ApIHtcclxuICAgICAgICAgICAgZGF0YS5pbWFnZVVybCA9IGRhdGEuaWNvbkxvb3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhLmltYWdlVXJsKVxyXG4gICAgICAgICAgICBjY1V0aWwuc2V0RGlzcGxheSh0aGlzLmljb24sIGRhdGEuaW1hZ2VVcmwpO1xyXG4gICAgICAgIHRoaXMubGFiZWxfdGl0bGUuc3RyaW5nID0gJ+esrCcgKyBkYXRhLmRheSArIFwi5pelXCJcclxuICAgICAgICBpZiAodGhpcy5sYWJlbF9udW0pIHtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbF9udW0uc3RyaW5nID0gJ3gnICsgZGF0YS5udW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogY3N2IOihqOWktFxyXG4gKiBcclxu5aSp5pWwXHTlpZblirHlhoXlrrlcdOWlluWKseaVsOmHj1x05Zu+5qCHXHJcbmRheVx0cmV3YXJkXHRudW1iZXJcdGljb25cclxuaW50XHRzdHJpbmdcdGludFx0c3RyaW5nXHJcbjFcdGdvbGRcdDIwMFx0Z29sZFxyXG5cclxuICAgIChEQylQbGF5ZXJJbmZvIFxyXG4gICAgICAgIC1DaGVja0luVGltZSAg562+5Yiw5pe26Ze0IFxyXG4gICAgICAgIC1DaGVja0luQ291bnQg562+5Yiw5qyh5pWwXHJcbiAgICBcclxuICAgIFVJICDpooTnva7kvZPor7TmmI7vvJpcclxuICAgICAqIGRheUNvdGFpbmVyXHJcbiAgICAgKiAgLSBkYXlcclxuICAgICAqICAgICAgLXRpdGxlXHJcbiAgICAgKiAgICAgIC1pY29uXHJcbiAgICAgKiAgICAgIC1udW1cclxuICAgICAqICAgICAgLWNsYWltZWRcclxuICovXHJcblxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlTaWduIGV4dGVuZHMgbXZjVmlldyB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkYXlDb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgZGF5czogRGF5Tm9kZVtdID0gW11cclxuICAgIGRheXNEYXRhOiBTaWduRGF0YVtdID0gW11cclxuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXHJcbiAgICB0b2dnbGU6IGNjLlRvZ2dsZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBidG5zdHJpbmdfbGFiZWw6IGNjLkxhYmVsID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHNldmVuX2xhYmVsOiBjYy5MYWJlbCA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgYnRuX2NsYWltOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2xhaW1lZFRpcF9sYWJlbDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjbGFpbWVkVGlwOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGljb25fYWQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGlzTG9vcDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmRheUNvbnRhaW5lci5jaGlsZHJlbi5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGF5Tm9kZSA9IG5ldyBEYXlOb2RlKHYpXHJcbiAgICAgICAgICAgIHRoaXMuZGF5cy5wdXNoKGRheU5vZGUpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY3N2LlNpZ24udmFsdWVzLmZvckVhY2goKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kYXlzRGF0YS5wdXNoKHsgdHlwZTogdi50eXBlLCBkYXk6IGkgKyAxLCBpbWFnZVVybDogdi5pY29uLCBudW06IHYubnVtYmVyLCBidG5TdHJpbmc6IHYuYnRuU3RyaW5nLCBpY29uTG9vcDogdi5pY29uTG9vcCwgdHlwZUxvb3A6IHYudHlwZUxvb3AsIGJ0bkxvb3BTdHJpbmc6IHYuYnRuTG9vcFN0cmluZyB9IGFzIFNpZ25EYXRhKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcih0aGlzLmJ0bl9jbGFpbSwgdGhpcy5jbGlja19jaGVja0luKTtcclxuICAgICAgICB0aGlzLmljb25fYWQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93bigpIHtcclxuICAgICAgICBhY3Rpb25VdGlsLmplbGx5SnVtcDIodGhpcy5ub2RlKTtcclxuICAgICAgICBsZXQgYyA9IDA7XHJcbiAgICAgICAgaWYgKFBsYXllckluZm8uc2lnbkNvdW50ID49IDcpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0xvb3AgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZGF5ID0gaTtcclxuICAgICAgICAgICAgbGV0IGRheU5vZGUgPSB0aGlzLmRheXNbaV07XHJcbiAgICAgICAgICAgIGxldCBjbGFpbWVkID0gZGF5IDwgbWF0aGYuUmVwZWF0KFBsYXllckluZm8uc2lnbkNvdW50LCA3KTtcclxuICAgICAgICAgICAgYyA9IGNsYWltZWQgPyBjICsgMSA6IGM7XHJcbiAgICAgICAgICAgIGRheU5vZGUuc2V0RGF0YSh0aGlzLmRheXNEYXRhW2ldLCBjbGFpbWVkLCB0aGlzLmlzTG9vcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5YWo6YOo6aKG5Y+W5a6M5q+VXHJcbiAgICAgICAgaWYgKGMgPT0gdGhpcy5kYXlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmJ0bl9jbGFpbS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBjY1V0aWwuc2V0QnV0dG9uRW5hYmxlZCh0aGlzLmJ0bl9jbGFpbSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bl9jbGFpbS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNsYWltZWRUaXAuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2xhaW1lZFRpcF9sYWJlbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkYXkgPSBtYXRoZi5SZXBlYXQoUGxheWVySW5mby5zaWduQ291bnQsIDcpXHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmRheXNEYXRhW2RheV07XHJcbiAgICAgICAgaWYgKHRoaXMuaXNMb29wKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuc3RyaW5nX2xhYmVsLnN0cmluZyA9IGRhdGEuYnRuTG9vcFN0cmluZztcclxuICAgICAgICAgICAgdGhpcy5zZXZlbl9sYWJlbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5idG5zdHJpbmdfbGFiZWwuc3RyaW5nID0gZGF0YS5idG5TdHJpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdHVzKClcclxuICAgIH1cclxuICAgIHVwZGF0ZVN0YXR1cyhkYXk/KSB7XHJcbiAgICAgICAgaWYgKGdhbWVVdGlsLmlzTmV4dERheShQbGF5ZXJJbmZvLnNpZ25UaW1lKSkge1xyXG4gICAgICAgICAgICAvL+WPr+mihuWPllxyXG4gICAgICAgICAgICAvLyBjY1V0aWwuc2V0QnV0dG9uRW5hYmxlZCh0aGlzLmJ0bl9jbGFpbSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuX2NsYWltLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jbGFpbWVkVGlwLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNsYWltZWRUaXBfbGFiZWwuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+W3sumihuWPllxyXG4gICAgICAgICAgICAvLyBjY1V0aWwuc2V0QnV0dG9uRW5hYmxlZCh0aGlzLmJ0bl9jbGFpbSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bl9jbGFpbS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNsYWltZWRUaXAuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jbGFpbWVkVGlwX2xhYmVsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF5KSB7XHJcbiAgICAgICAgICAgIGxldCBkYXlOb2RlID0gdGhpcy5kYXlzW2RheV07XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5kYXlzRGF0YVtkYXldO1xyXG4gICAgICAgICAgICBkYXlOb2RlLnNldERhdGEoZGF0YSwgZGF5IDwgbWF0aGYuUmVwZWF0KFBsYXllckluZm8uc2lnbkNvdW50LCA3KSwgdGhpcy5pc0xvb3ApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY2hlY2tfZG91YmxlKCkge1xyXG4gICAgICAgIHRoaXMuaWNvbl9hZC5hY3RpdmUgPSB0aGlzLnRvZ2dsZS5pc0NoZWNrZWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8v562+5YiwICBcclxuICAgIGNsaWNrX2NoZWNrSW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG9nZ2xlLmlzQ2hlY2tlZCkge1xyXG5cclxuICAgICAgICAgICAgV2Vha05ldEdhbWUuZG9DaG9pY2UoXCJTT1ZfU2lnbl9Eb3VibGVcIiwgdGhpcy5jbGFpbURvdWJsZSwgdGhpcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jbGFpbSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2bS5oaWRlKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgY2xhaW1Eb3VibGUoKSB7XHJcbiAgICAgICAgdGhpcy5jbGFpbSgyKTtcclxuICAgICAgICB2bS5oaWRlKHRoaXMpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIOmihuWPluesrG7lpKnnmoTlpZblirFcclxuICAgIGNsYWltKG11bHQgPSAxKSB7XHJcbiAgICAgICAgbGV0IGRheSA9IG1hdGhmLlJlcGVhdChQbGF5ZXJJbmZvLnNpZ25Db3VudCwgNyk7XHJcbiAgICAgICAgTWFpbi5pbnN0YW5jZS5xaWFuZGFvX2hvbmdkaWFuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIFBsYXllckluZm8uc2lnblRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIFBsYXllckluZm8uc2lnbkNvdW50Kys7XHJcbiAgICAgICAgUGxheWVySW5mby5zYXZlKCk7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmRheXNEYXRhW2RheV07XHJcbiAgICAgICAgaWYgKHRoaXMuaXNMb29wKSB7XHJcbiAgICAgICAgICAgIGRhdGEudHlwZSA9IGRhdGEudHlwZUxvb3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhLnR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLmxhYm91ciArPSAoZGF0YS5udW0gKiBtdWx0KTtcclxuICAgICAgICAgICAgZXZ0LmVtaXQoXCJHYW1lLmdldFRpbGlcIiwgZGlzcGxheS5jZW50ZXIsIChkYXRhLm51bSAqIG11bHQpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkYXRhLnR5cGUgPT0gMikge1xyXG4gICAgICAgICAgICBVc2VySW5mby5ndW5fbnVtICs9IChkYXRhLm51bSAqIG11bHQpO1xyXG4gICAgICAgICAgICBVc2VySW5mby5zbm93YmFsbF9udW0gKz0gKGRhdGEubnVtICogbXVsdCk7XHJcbiAgICAgICAgICAgIFVzZXJJbmZvLm1hZ25ldF9udW0gKz0gKGRhdGEubnVtICogbXVsdCk7XHJcbiAgICAgICAgICAgIFRvYXN0Lm1ha2UoXCLmga3llpzojrflvpfpgZPlhbfnpLzljIVcIik7XHJcbiAgICAgICAgICAgIFVzZXJJbmZvLnNhdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIFBsYXllckluZm8udW5sb2NrU2tpbigxMyk7XHJcbiAgICAgICAgICAgIFRvYXN0Lm1ha2UoXCLmga3llpzojrflvpfpmZDlrprnmq7ogqRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGV2dC5lbWl0KFwiVUlDaGVja0luLmdldFJld2FyZFwiLCBkYXRhLCBtdWx0KVxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdHVzKGRheSk7XHJcbiAgICB9XHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICBjbGlja19jbG9zZSgpIHtcclxuICAgICAgICB2bS5oaWRlKHRoaXMpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=