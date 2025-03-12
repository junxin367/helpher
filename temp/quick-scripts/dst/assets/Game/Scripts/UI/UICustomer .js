
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UICustomer .js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c7c85YJUnNB5LL5Imt3zcGk', 'UICustomer ');
// Game/Scripts/UI/UICustomer .ts

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
var UserInfo_1 = require("../../../framework/extension/weak_net_game/UserInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UICustomer = /** @class */ (function (_super) {
    __extends(UICustomer, _super);
    function UICustomer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.isSuccess = false;
        return _this;
    }
    UICustomer.prototype.onLoad = function () {
        var _this = this;
        this.onClick(this.btn_close, function (_) { return _this.click_close(); });
    };
    UICustomer.prototype.onShow = function (callback) {
        this.callback = callback;
        this.render();
    };
    UICustomer.prototype.click_close = function () {
        vm.hide(this);
    };
    UICustomer.prototype.click_customer = function () {
        var _this = this;
        UserInfo_1.UserInfo.tmpIskf = false;
        sdk_1.wxsdk.openCustomerServiceConversation(function (_) {
            // Toast.make("成功");
            UserInfo_1.UserInfo.tmpIskf = true;
            if (CC_DEBUG) {
                UserInfo_1.UserInfo.isKf = true;
                UserInfo_1.UserInfo.kfTime = Date.now();
                UserInfo_1.UserInfo.save();
            }
            vm.hide(_this);
        }, function (_) {
            // Toast.make("失败");
        });
    };
    __decorate([
        property(cc.Node)
    ], UICustomer.prototype, "btn_close", void 0);
    UICustomer = __decorate([
        ccclass
    ], UICustomer);
    return UICustomer;
}(mvcView_1.default));
exports.default = UICustomer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJQ3VzdG9tZXIgLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUFvRDtBQUNwRCw4REFBK0Q7QUFFL0QsZ0ZBQStFO0FBTXpFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFPO0lBQS9DO1FBQUEscUVBc0NDO1FBcENHLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFNMUIsZUFBUyxHQUFZLEtBQUssQ0FBQzs7SUE4Qi9CLENBQUM7SUE1QkcsMkJBQU0sR0FBTjtRQUFBLGlCQUVDO1FBREcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsRUFBRSxFQUFsQixDQUFrQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNELDJCQUFNLEdBQU4sVUFBTyxRQUFRO1FBQ1gsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxnQ0FBVyxHQUFYO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsbUNBQWMsR0FBZDtRQUFBLGlCQWNDO1FBYkcsbUJBQVEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLFdBQUssQ0FBQywrQkFBK0IsQ0FBQyxVQUFBLENBQUM7WUFDbkMsb0JBQW9CO1lBQ3BCLG1CQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFHLFFBQVEsRUFBQztnQkFDUixtQkFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLG1CQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDN0IsbUJBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTthQUNsQjtZQUNELEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDbEIsQ0FBQyxFQUFFLFVBQUEsQ0FBQztZQUNBLG9CQUFvQjtRQUN4QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFsQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUTtJQUZULFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FzQzlCO0lBQUQsaUJBQUM7Q0F0Q0QsQUFzQ0MsQ0F0Q3VDLGlCQUFPLEdBc0M5QztrQkF0Q29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXZjVmlldyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL212Y1ZpZXdcIjtcbmltcG9ydCB7IHd4c2RrIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd3hzZGsvc2RrXCI7XG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvVG9hc3RNYW5hZ2VyXCI7XG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvVXNlckluZm9cIjtcbmltcG9ydCBXZWFrTmV0R2FtZSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi93ZWFrX25ldF9nYW1lL1dlYWtOZXRHYW1lXCI7XG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vQ29tbW9uL0Jhc2UvU2VydmVyQ29uZmlnXCI7XG5pbXBvcnQgTmV0IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWlzYy9OZXRcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlDdXN0b21lciBleHRlbmRzIG12Y1ZpZXcge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0bl9jbG9zZTogY2MuTm9kZSA9IG51bGw7XG5cblxuXG4gICAgY2FsbGJhY2s6IEZ1bmN0aW9uO1xuXG4gICAgaXNTdWNjZXNzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMub25DbGljayh0aGlzLmJ0bl9jbG9zZSwgXyA9PiB0aGlzLmNsaWNrX2Nsb3NlKCkpO1xuICAgIH1cbiAgICBvblNob3coY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIGNsaWNrX2Nsb3NlKCkge1xuICAgICAgICB2bS5oaWRlKHRoaXMpO1xuICAgIH1cblxuICAgIGNsaWNrX2N1c3RvbWVyKCkge1xuICAgICAgICBVc2VySW5mby50bXBJc2tmID0gZmFsc2U7XG4gICAgICAgIHd4c2RrLm9wZW5DdXN0b21lclNlcnZpY2VDb252ZXJzYXRpb24oXyA9PiB7XG4gICAgICAgICAgICAvLyBUb2FzdC5tYWtlKFwi5oiQ5YqfXCIpO1xuICAgICAgICAgICAgVXNlckluZm8udG1wSXNrZiA9IHRydWU7XG4gICAgICAgICAgICBpZihDQ19ERUJVRyl7XG4gICAgICAgICAgICAgICAgVXNlckluZm8uaXNLZiA9IHRydWU7XG4gICAgICAgICAgICAgICAgVXNlckluZm8ua2ZUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICBVc2VySW5mby5zYXZlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZtLmhpZGUodGhpcyk7XG4gICAgICAgIH0sIF8gPT4ge1xuICAgICAgICAgICAgLy8gVG9hc3QubWFrZShcIuWksei0pVwiKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbn1cbiJdfQ==