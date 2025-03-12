"use strict";
cc._RF.push(module, '6f1e8XLN/BKobzVLgkNM77D', 'UIFreeGetLabour');
// Game/Scripts/UI/UIFreeGetLabour.ts

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
var Switcher_1 = require("../../../framework/ui/controller/Switcher");
var UserInfo_1 = require("../../../framework/extension/weak_net_game/UserInfo");
var event_1 = require("../../../framework/core/event");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BtnState;
(function (BtnState) {
    BtnState[BtnState["Red"] = 0] = "Red";
    BtnState[BtnState["Blue"] = 1] = "Blue";
})(BtnState || (BtnState = {}));
var UIFreeGetLabour = /** @class */ (function (_super) {
    __extends(UIFreeGetLabour, _super);
    function UIFreeGetLabour() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.switcher_yaoqin = null;
        _this.switcher_subscriber = null;
        _this.switcher_kefu = null;
        _this.switcher_shoucang = null;
        return _this;
    }
    UIFreeGetLabour.prototype.onLoad = function () {
        this.registerSwitcher(this.switcher_yaoqin, function (_) { return 0; });
        this.registerSwitcher(this.switcher_subscriber, function (_) { return UserInfo_1.UserInfo.isDy ? 1 : 0; });
        this.registerSwitcher(this.switcher_kefu, function (_) { return UserInfo_1.UserInfo.isKf ? 1 : 0; });
        this.registerSwitcher(this.switcher_shoucang, function (_) { return UserInfo_1.UserInfo.isSc ? 1 : 0; });
        event_1.evt.on("View.onHidden", this.onViewHidden, this);
        event_1.evt.on("UserInfo.isKf", this.render, this);
        event_1.evt.on("UserInfo.isDy", this.render, this);
    };
    UIFreeGetLabour.prototype.onShow = function () {
        this.render();
    };
    UIFreeGetLabour.prototype.onViewHidden = function (view) {
        // console.log(view.node.name)
        if (view.node.name == "UIGetSuccess") {
            // console.log("是否领取过客服奖励",UserInfo.isGetKf);
            this.render();
        }
    };
    UIFreeGetLabour.prototype.click_close = function () {
        vm.hide(this);
    };
    UIFreeGetLabour.prototype.click_yaoqin = function (ev, state) {
        if (state == BtnState.Red) {
            // 去邀请 
            vm.show("Prefabs/UI/UIFriendHelp");
        }
        else if (state == BtnState.Blue) {
            // 点击领取
        }
        else {
            // 已经领取装
            console.log("有问题");
        }
    };
    UIFreeGetLabour.prototype.click_subscriber = function (ev, state) {
        var _this = this;
        if (state == BtnState.Red) {
            // let self= this;
            // wxsdk.requestSubscribeMessage(_=>{
            //     Toast.make("订阅成功")
            //     UserInfo.isDy = true;
            //     UserInfo.DyTime = Date.now();
            //     // UserInfo.save();
            //     // this.render();
            //     vm.show("Prefabs/UI/UIGetSuccess",csv.Config.Subscriber_Success,_=>{
            //         UserInfo.isGetDy = true; 
            //         self.render();
            //     });
            // },_=>{
            //     Toast.make("订阅已取消")
            // },(d)=>{
            //     if(d.errno == Code.Subscribe_ERROR){
            //         Toast.make(d.errmsg);
            //         UserInfo.isDy = true;
            //         UserInfo.isGetDy = true;
            //         self.render();
            //     }
            // })
            vm.show("Prefabs/UI/UISubscriber", function (_) { return _this.render(); });
        }
        else if (state == BtnState.Blue) {
            // 点击领取 订阅成功奖励2点体力
            this.render();
            vm.show("Prefabs/UI/UIGetSuccess", csv.Config.Subscriber_Success);
        }
        else {
            // 已经领取装
            console.log("有问题");
        }
    };
    UIFreeGetLabour.prototype.click_kefu = function (ev, state) {
        var _this = this;
        if (state == BtnState.Red) {
            // 去邀请
            vm.show("Prefabs/UI/UICustomer", function (_) { return _this.render(); });
        }
        else if (state == BtnState.Blue) {
            // 点击领取
            UserInfo_1.UserInfo.isGetKf = true;
            // this.switcher_kefu.index = 2;
            this.render();
            vm.show("Prefabs/UI/UIGetSuccess", csv.Config.Customer_Success);
        }
        else {
            // 已经领取装
            console.log("有问题");
        }
    };
    UIFreeGetLabour.prototype.click_shoucang = function (ev, state) {
        var _this = this;
        if (state == BtnState.Red) {
            // 去邀请
            vm.show("Prefabs/UI/UICollection", function (_) { return _this.render(); });
        }
        else if (state == BtnState.Blue) {
            // 点击领取
            vm.show("Prefabs/UI/UIGetSuccess", csv.Config.Collection_Success, function (_) {
                //对应领取成功的回调 按钮状态改变 
                UserInfo_1.UserInfo.isGetSc = true;
                // this.switcher_shoucang.index = 2;
                _this.render();
            });
        }
        else {
            // 已经领取装
            console.log("有问题");
        }
    };
    UIFreeGetLabour.prototype.onDestroy = function () {
        event_1.evt.off(this);
    };
    __decorate([
        property(cc.Node)
    ], UIFreeGetLabour.prototype, "btn_close", void 0);
    __decorate([
        property(Switcher_1.default)
    ], UIFreeGetLabour.prototype, "switcher_yaoqin", void 0);
    __decorate([
        property(Switcher_1.default)
    ], UIFreeGetLabour.prototype, "switcher_subscriber", void 0);
    __decorate([
        property(Switcher_1.default)
    ], UIFreeGetLabour.prototype, "switcher_kefu", void 0);
    __decorate([
        property(Switcher_1.default)
    ], UIFreeGetLabour.prototype, "switcher_shoucang", void 0);
    UIFreeGetLabour = __decorate([
        ccclass
    ], UIFreeGetLabour);
    return UIFreeGetLabour;
}(mvcView_1.default));
exports.default = UIFreeGetLabour;

cc._RF.pop();