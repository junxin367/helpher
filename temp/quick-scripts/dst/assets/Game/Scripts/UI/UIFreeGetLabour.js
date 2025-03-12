
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIFreeGetLabour.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJRnJlZUdldExhYm91ci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBb0Q7QUFDcEQsc0VBQWlFO0FBT2pFLGdGQUErRTtBQUUvRSx1REFBb0Q7QUFJOUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsSUFBSyxRQUdKO0FBSEQsV0FBSyxRQUFRO0lBQ1QscUNBQUcsQ0FBQTtJQUNILHVDQUFJLENBQUE7QUFDUixDQUFDLEVBSEksUUFBUSxLQUFSLFFBQVEsUUFHWjtBQUVEO0lBQTZDLG1DQUFPO0lBQXBEO1FBQUEscUVBa0lDO1FBaElHLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFHakMseUJBQW1CLEdBQWEsSUFBSSxDQUFDO1FBR3JDLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBRy9CLHVCQUFpQixHQUFhLElBQUksQ0FBQzs7SUFvSHZDLENBQUM7SUEvR0csZ0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxFQUFELENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxtQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLG1CQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMs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QUM7SUFDbEIsQ0FBQztJQTlIRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLGtCQUFRLENBQUM7NERBQ2M7SUFHakM7UUFEQyxRQUFRLENBQUMsa0JBQVEsQ0FBQztnRUFDa0I7SUFHckM7UUFEQyxRQUFRLENBQUMsa0JBQVEsQ0FBQzswREFDWTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxrQkFBUSxDQUFDOzhEQUNnQjtJQWRsQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBa0luQztJQUFELHNCQUFDO0NBbElELEFBa0lDLENBbEk0QyxpQkFBTyxHQWtJbkQ7a0JBbElvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG12Y1ZpZXcgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9tdmNWaWV3XCI7XG5pbXBvcnQgU3dpdGNoZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9jb250cm9sbGVyL1N3aXRjaGVyXCI7XG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL0NvbW1vbi9CYXNlL1BsYXllckluZm9cIjtcbmltcG9ydCB7IHd4c2RrIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd3hzZGsvc2RrXCI7XG5pbXBvcnQgeyBHYW1lQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd3hzZGsvR2FtZUNvbmZpZ3NcIjtcbmltcG9ydCBXZWFrTmV0R2FtZSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi93ZWFrX25ldF9nYW1lL1dlYWtOZXRHYW1lXCI7XG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vQ29tbW9uL0Jhc2UvU2VydmVyQ29uZmlnXCI7XG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvVG9hc3RNYW5hZ2VyXCI7XG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvVXNlckluZm9cIjtcbmltcG9ydCBOZXQgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9taXNjL05ldFwiO1xuaW1wb3J0IHsgZXZ0IH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9jb3JlL2V2ZW50XCI7XG5pbXBvcnQgeyBDb2RlIH0gZnJvbSBcIi4uL0NvbW1vbi9jb2RlXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmVudW0gQnRuU3RhdGUge1xuICAgIFJlZCwgICAgLy/ljrvpgoDor7dcbiAgICBCbHVlLCAgICAvL+mihuWPllxufVxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJRnJlZUdldExhYm91ciBleHRlbmRzIG12Y1ZpZXcge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0bl9jbG9zZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoU3dpdGNoZXIpXG4gICAgc3dpdGNoZXJfeWFvcWluOiBTd2l0Y2hlciA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoU3dpdGNoZXIpXG4gICAgc3dpdGNoZXJfc3Vic2NyaWJlcjogU3dpdGNoZXIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KFN3aXRjaGVyKVxuICAgIHN3aXRjaGVyX2tlZnU6IFN3aXRjaGVyID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShTd2l0Y2hlcilcbiAgICBzd2l0Y2hlcl9zaG91Y2FuZzogU3dpdGNoZXIgPSBudWxsO1xuXG4gICAgY2FsbGJhY2s6IEZ1bmN0aW9uO1xuXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJTd2l0Y2hlcih0aGlzLnN3aXRjaGVyX3lhb3FpbiwgXyA9PiAwKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlclN3aXRjaGVyKHRoaXMuc3dpdGNoZXJfc3Vic2NyaWJlciwgXyA9PiBVc2VySW5mby5pc0R5ID8gMSA6IDApO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyU3dpdGNoZXIodGhpcy5zd2l0Y2hlcl9rZWZ1LCBfID0+IFVzZXJJbmZvLmlzS2YgPyAxIDogMCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJTd2l0Y2hlcih0aGlzLnN3aXRjaGVyX3Nob3VjYW5nLCBfID0+IFVzZXJJbmZvLmlzU2MgPyAxIDogMCk7XG4gICAgICAgIGV2dC5vbihcIlZpZXcub25IaWRkZW5cIiwgdGhpcy5vblZpZXdIaWRkZW4sIHRoaXMpO1xuICAgICAgICBldnQub24oXCJVc2VySW5mby5pc0tmXCIsIHRoaXMucmVuZGVyLCB0aGlzKTtcbiAgICAgICAgZXZ0Lm9uKFwiVXNlckluZm8uaXNEeVwiLCB0aGlzLnJlbmRlciwgdGhpcyk7XG5cbiAgICB9XG4gICAgb25TaG93KCkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIG9uVmlld0hpZGRlbih2aWV3KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHZpZXcubm9kZS5uYW1lKVxuICAgICAgICBpZiAodmlldy5ub2RlLm5hbWUgPT0gXCJVSUdldFN1Y2Nlc3NcIikge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLmmK/lkKbpooblj5bov4flrqLmnI3lpZblirFcIixVc2VySW5mby5pc0dldEtmKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGlja19jbG9zZSgpIHtcbiAgICAgICAgdm0uaGlkZSh0aGlzKTtcbiAgICB9XG5cbiAgICBjbGlja195YW9xaW4oZXYsIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZSA9PSBCdG5TdGF0ZS5SZWQpIHtcbiAgICAgICAgICAgIC8vIOWOu+mCgOivtyBcbiAgICAgICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJRnJpZW5kSGVscFwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PSBCdG5TdGF0ZS5CbHVlKSB7XG4gICAgICAgICAgICAvLyDngrnlh7vpooblj5ZcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOW3sue7j+mihuWPluijhVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmnInpl67pophcIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsaWNrX3N1YnNjcmliZXIoZXYsIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZSA9PSBCdG5TdGF0ZS5SZWQpIHtcbiAgICAgICAgICAgIC8vIGxldCBzZWxmPSB0aGlzO1xuICAgICAgICAgICAgLy8gd3hzZGsucmVxdWVzdFN1YnNjcmliZU1lc3NhZ2UoXz0+e1xuICAgICAgICAgICAgLy8gICAgIFRvYXN0Lm1ha2UoXCLorqLpmIXmiJDlip9cIilcbiAgICAgICAgICAgIC8vICAgICBVc2VySW5mby5pc0R5ID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICAgICBVc2VySW5mby5EeVRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgLy8gICAgIC8vIFVzZXJJbmZvLnNhdmUoKTtcbiAgICAgICAgICAgIC8vICAgICAvLyB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgLy8gICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJR2V0U3VjY2Vzc1wiLGNzdi5Db25maWcuU3Vic2NyaWJlcl9TdWNjZXNzLF89PntcbiAgICAgICAgICAgIC8vICAgICAgICAgVXNlckluZm8uaXNHZXREeSA9IHRydWU7IFxuICAgICAgICAgICAgLy8gICAgICAgICBzZWxmLnJlbmRlcigpO1xuICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgLy8gfSxfPT57XG4gICAgICAgICAgICAvLyAgICAgVG9hc3QubWFrZShcIuiuoumYheW3suWPlua2iFwiKVxuICAgICAgICAgICAgLy8gfSwoZCk9PntcbiAgICAgICAgICAgIC8vICAgICBpZihkLmVycm5vID09IENvZGUuU3Vic2NyaWJlX0VSUk9SKXtcbiAgICAgICAgICAgIC8vICAgICAgICAgVG9hc3QubWFrZShkLmVycm1zZyk7XG4gICAgICAgICAgICAvLyAgICAgICAgIFVzZXJJbmZvLmlzRHkgPSB0cnVlO1xuICAgICAgICAgICAgLy8gICAgICAgICBVc2VySW5mby5pc0dldER5ID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICAgICAgICAgc2VsZi5yZW5kZXIoKTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlTdWJzY3JpYmVyXCIsIF8gPT4gdGhpcy5yZW5kZXIoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT0gQnRuU3RhdGUuQmx1ZSkge1xuICAgICAgICAgICAgLy8g54K55Ye76aKG5Y+WIOiuoumYheaIkOWKn+WlluWKsTLngrnkvZPliptcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICB2bS5zaG93KFwiUHJlZmFicy9VSS9VSUdldFN1Y2Nlc3NcIiwgY3N2LkNvbmZpZy5TdWJzY3JpYmVyX1N1Y2Nlc3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5bey57uP6aKG5Y+W6KOFXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaciemXrumimFwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xpY2tfa2VmdShldiwgc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlID09IEJ0blN0YXRlLlJlZCkge1xuICAgICAgICAgICAgLy8g5Y676YKA6K+3XG4gICAgICAgICAgICB2bS5zaG93KFwiUHJlZmFicy9VSS9VSUN1c3RvbWVyXCIsIF8gPT4gdGhpcy5yZW5kZXIoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT0gQnRuU3RhdGUuQmx1ZSkge1xuICAgICAgICAgICAgLy8g54K55Ye76aKG5Y+WXG4gICAgICAgICAgICBVc2VySW5mby5pc0dldEtmID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIHRoaXMuc3dpdGNoZXJfa2VmdS5pbmRleCA9IDI7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlHZXRTdWNjZXNzXCIsIGNzdi5Db25maWcuQ3VzdG9tZXJfU3VjY2Vzcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDlt7Lnu4/pooblj5boo4VcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pyJ6Zeu6aKYXCIpXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNsaWNrX3Nob3VjYW5nKGV2LCBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUgPT0gQnRuU3RhdGUuUmVkKSB7XG4gICAgICAgICAgICAvLyDljrvpgoDor7dcbiAgICAgICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJQ29sbGVjdGlvblwiLCBfID0+IHRoaXMucmVuZGVyKCkpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09IEJ0blN0YXRlLkJsdWUpIHtcbiAgICAgICAgICAgIC8vIOeCueWHu+mihuWPllxuICAgICAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlHZXRTdWNjZXNzXCIsIGNzdi5Db25maWcuQ29sbGVjdGlvbl9TdWNjZXNzLCBfID0+IHtcbiAgICAgICAgICAgICAgICAvL+WvueW6lOmihuWPluaIkOWKn+eahOWbnuiwgyDmjInpkq7nirbmgIHmlLnlj5ggXG4gICAgICAgICAgICAgICAgVXNlckluZm8uaXNHZXRTYyA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zd2l0Y2hlcl9zaG91Y2FuZy5pbmRleCA9IDI7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5bey57uP6aKG5Y+W6KOFXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaciemXrumimFwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBldnQub2ZmKHRoaXMpO1xuICAgIH1cblxufVxuIl19