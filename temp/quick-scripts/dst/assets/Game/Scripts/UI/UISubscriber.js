
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UISubscriber.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '01b50uXqhxIy6wZH0bb5lx1', 'UISubscriber');
// Game/Scripts/UI/UISubscriber.ts

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
var sdk_1 = require("../../../framework/extension/wxsdk/sdk");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var UserInfo_1 = require("../../../framework/extension/weak_net_game/UserInfo");
var WeakNetGame_1 = require("../../../framework/extension/weak_net_game/WeakNetGame");
var ServerConfig_1 = require("../Common/Base/ServerConfig");
var Net_1 = require("../../../framework/misc/Net");
var code_1 = require("../Common/code");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UISubscriber = /** @class */ (function (_super) {
    __extends(UISubscriber, _super);
    function UISubscriber() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.isSuccess = false;
        return _this;
    }
    UISubscriber.prototype.onLoad = function () {
        var _this = this;
        this.onClick(this.btn_close, function (_) { return _this.click_close(); });
    };
    UISubscriber.prototype.onShow = function (callback) {
        this.callback = callback;
        this.render();
    };
    UISubscriber.prototype.click_close = function () {
        vm.hide(this);
    };
    UISubscriber.prototype.click_subscriber = function () {
        var _this = this;
        sdk_1.wxsdk.requestSubscribeMessage().then(function (v) { return _this.notifyServer(); }).catch(function (v) {
            ToastManager_1.Toast.make("订阅失败!");
        });
    };
    UISubscriber.prototype.notifyServer = function () {
        //ids 所有接受的 模板id
        vm.hide(this);
        WeakNetGame_1.default.client.httpGet(ServerConfig_1.Api.subscribe).then(function (v) {
            if (v == Net_1.default.Code.Timeout) {
                console.log("连接超时！");
            }
            else {
                if (v) {
                    var d = JSON.parse(v);
                    if (d.errno == 0) {
                        d = d.data;
                        console.log("返回数据", d);
                        //根据返回数据做对应逻辑处理
                        ToastManager_1.Toast.make("订阅成功");
                        UserInfo_1.UserInfo.isDy = true;
                        UserInfo_1.UserInfo.save();
                        vm.show("Prefabs/UI/UIGetSuccess", csv.Config.Subscriber_Success);
                    }
                    else {
                        console.log("返回错误码" + d.errno);
                        if (d.errno == code_1.Code.Subscribe_ERROR) {
                            ToastManager_1.Toast.make(d.errmsg);
                            UserInfo_1.UserInfo.isDy = true;
                            UserInfo_1.UserInfo.save();
                        }
                    }
                }
                else {
                }
            }
        });
    };
    __decorate([
        property(cc.Node)
    ], UISubscriber.prototype, "btn_close", void 0);
    UISubscriber = __decorate([
        ccclass
    ], UISubscriber);
    return UISubscriber;
}(mvcView_1.default));
exports.default = UISubscriber;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJU3Vic2NyaWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBb0Q7QUFDcEQsOERBQStEO0FBQy9ELG1FQUEyRDtBQUMzRCxnRkFBK0U7QUFDL0Usc0ZBQWlGO0FBQ2pGLDREQUFrRDtBQUNsRCxtREFBOEM7QUFDOUMsdUNBQXNDO0FBR2hDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFPO0lBQWpEO1FBQUEscUVBNERDO1FBMURHLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFNMUIsZUFBUyxHQUFZLEtBQUssQ0FBQzs7SUFvRC9CLENBQUM7SUFsREcsNkJBQU0sR0FBTjtRQUFBLGlCQUVDO1FBREcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsRUFBRSxFQUFsQixDQUFrQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNELDZCQUFNLEdBQU4sVUFBTyxRQUFRO1FBQ1gsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsdUNBQWdCLEdBQWhCO1FBQUEsaUJBSUM7UUFIRyxXQUFLLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxFQUFFLEVBQW5CLENBQW1CLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxDQUFDO1lBQ2xFLG9CQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3ZCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELG1DQUFZLEdBQVo7UUFDSSxnQkFBZ0I7UUFDaEIsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNkLHFCQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7WUFDNUMsSUFBSSxDQUFDLElBQUksYUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7YUFDdkI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLEVBQUU7b0JBQ0gsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTt3QkFDZCxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQTt3QkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDdkIsZUFBZTt3QkFDZixvQkFBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTt3QkFDbEIsbUJBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO3dCQUNyQixtQkFBUSxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUNoQixFQUFFLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztxQkFDckU7eUJBQU07d0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUMvQixJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksV0FBSSxDQUFDLGVBQWUsRUFBRTs0QkFDakMsb0JBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzRCQUNyQixtQkFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7NEJBQ3JCLG1CQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7eUJBQ25CO3FCQUNKO2lCQUNKO3FCQUFNO2lCQUVOO2FBQ0o7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUF4REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDUTtJQUZULFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0E0RGhDO0lBQUQsbUJBQUM7Q0E1REQsQUE0REMsQ0E1RHlDLGlCQUFPLEdBNERoRDtrQkE1RG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXZjVmlldyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL212Y1ZpZXdcIjtcbmltcG9ydCB7IHd4c2RrIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd3hzZGsvc2RrXCI7XG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvVG9hc3RNYW5hZ2VyXCI7XG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvVXNlckluZm9cIjtcbmltcG9ydCBXZWFrTmV0R2FtZSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi93ZWFrX25ldF9nYW1lL1dlYWtOZXRHYW1lXCI7XG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vQ29tbW9uL0Jhc2UvU2VydmVyQ29uZmlnXCI7XG5pbXBvcnQgTmV0IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWlzYy9OZXRcIjtcbmltcG9ydCB7IENvZGUgfSBmcm9tIFwiLi4vQ29tbW9uL2NvZGVcIjtcbmltcG9ydCB7IGV2dCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvY29yZS9ldmVudFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlTdWJzY3JpYmVyIGV4dGVuZHMgbXZjVmlldyB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuX2Nsb3NlOiBjYy5Ob2RlID0gbnVsbDtcblxuXG5cbiAgICBjYWxsYmFjazogRnVuY3Rpb247XG5cbiAgICBpc1N1Y2Nlc3M6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5vbkNsaWNrKHRoaXMuYnRuX2Nsb3NlLCBfID0+IHRoaXMuY2xpY2tfY2xvc2UoKSk7XG4gICAgfVxuICAgIG9uU2hvdyhjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgY2xpY2tfY2xvc2UoKSB7XG4gICAgICAgIHZtLmhpZGUodGhpcyk7XG4gICAgfVxuXG4gICAgY2xpY2tfc3Vic2NyaWJlcigpIHtcbiAgICAgICAgd3hzZGsucmVxdWVzdFN1YnNjcmliZU1lc3NhZ2UoKS50aGVuKHYgPT4gdGhpcy5ub3RpZnlTZXJ2ZXIoKSkuY2F0Y2godiA9PiB7XG4gICAgICAgICAgICBUb2FzdC5tYWtlKFwi6K6i6ZiF5aSx6LSlIVwiKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG5vdGlmeVNlcnZlcigpIHtcbiAgICAgICAgLy9pZHMg5omA5pyJ5o6l5Y+X55qEIOaooeadv2lkXG4gICAgICAgIHZtLmhpZGUodGhpcyk7XG4gICAgICAgIFdlYWtOZXRHYW1lLmNsaWVudC5odHRwR2V0KEFwaS5zdWJzY3JpYmUpLnRoZW4odiA9PiB7XG4gICAgICAgICAgICBpZiAodiA9PSBOZXQuQ29kZS5UaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLov57mjqXotoXml7bvvIFcIilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGQgPSBKU09OLnBhcnNlKHYpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZC5lcnJubyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkID0gZC5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIui/lOWbnuaVsOaNrlwiLCBkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5qC55o2u6L+U5Zue5pWw5o2u5YGa5a+55bqU6YC76L6R5aSE55CGXG4gICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5tYWtlKFwi6K6i6ZiF5oiQ5YqfXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5pc0R5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLnNhdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJR2V0U3VjY2Vzc1wiLCBjc3YuQ29uZmlnLlN1YnNjcmliZXJfU3VjY2Vzcyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIui/lOWbnumUmeivr+eggVwiICsgZC5lcnJubyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5lcnJubyA9PSBDb2RlLlN1YnNjcmliZV9FUlJPUikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2UoZC5lcnJtc2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLmlzRHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLnNhdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG59XG4iXX0=