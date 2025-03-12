
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIGetGun.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJR2V0R3VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLG1FQUEyRDtBQUMzRCxnRkFBK0U7QUFDL0UseURBQW9EO0FBQ3BELDhFQUF5RTtBQUN6RSxzRkFBaUY7QUFDakYsK0NBQThDO0FBQzlDLDBEQUFxRDtBQUVqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQTtBQUV6QztJQUFzQyw0QkFBTztJQUE3QztRQUFBLHFFQW1FQztRQWhFRyxVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLGlCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRXpCLFVBQUksR0FBYSxJQUFJLENBQUM7UUFFdEIsY0FBUSxHQUFXO1lBQ2YsQ0FBQyxFQUFFLFNBQVM7WUFDWixDQUFDLEVBQUUsY0FBYztZQUNqQixDQUFDLEVBQUUsWUFBWTtTQUNsQixDQUFBOztJQStDTCxDQUFDO0lBN0NHLHlCQUFNLEdBQU47UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBTyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQWQsQ0FBYyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQWQsQ0FBYyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQWQsQ0FBYyxDQUFDLENBQUM7SUFFeEQsQ0FBQztJQUVELDBCQUFPLEdBQVAsVUFBUSxRQUFRLEVBQUUsR0FBRztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUN2QixtQkFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLG1CQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pCLG1CQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEIsbUJBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFNUIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxnQkFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBR0QsOEJBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFBQSxpQkFZQztRQVhHLHFCQUFXLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxVQUFBLENBQUM7WUFDbkMsOEJBQThCO1lBQzlCLDZCQUE2QjtZQUM3QixjQUFjO1lBQ2QsSUFBSTtZQUNKLG1CQUFRLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNDLG1CQUFRLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNsQyxtQkFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hCLG9CQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDbEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ1osQ0FBQztJQUVELDJCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBN0REO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0c7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDUztJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNTO0lBVFgsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW1FNUI7SUFBRCxlQUFDO0NBbkVELEFBbUVDLENBbkVxQyxpQkFBTyxHQW1FNUM7a0JBbkVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRodW5kZXIgZnJvbSBcIi4uL0xldmVscy9UaHVuZGVyXCJcbmltcG9ydCB7IGV2dCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvY29yZS9ldmVudFwiO1xuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuLi9Db21tb24vQmFzZS9QbGF5ZXJJbmZvXCI7XG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvVG9hc3RNYW5hZ2VyXCI7XG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvVXNlckluZm9cIjtcbmltcG9ydCBtdmNWaWV3IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvbXZjVmlld1wiO1xuaW1wb3J0IEljb25Tb3YgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9JY29uU292XCI7XG5pbXBvcnQgV2Vha05ldEdhbWUgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9XZWFrTmV0R2FtZVwiO1xuaW1wb3J0IHsgUHJvcEluZm8gfSBmcm9tIFwiLi4vQ29tbW9uL1Byb3BJbmZvXCI7XG5pbXBvcnQgY2NVdGlsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdXRpbHMvY2NVdGlsXCI7XG5cbmxldCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlHZXRHdW4gZXh0ZW5kcyBtdmNWaWV3IHtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgaWNvbjogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbF9uYW1lOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxfZGVzYzogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgY2FsbGJhY2s6IGFueTtcbiAgICBzY2VuZV9sYWJlbDogc3RyaW5nID0gXCJcIjtcblxuICAgIGRhdGE6IFByb3BJbmZvID0gbnVsbDtcbiAgICBcbiAgICBwcm9wTGlzdDogb2JqZWN0ID0ge1xuICAgICAgICAxOiBcImd1bl9udW1cIixcbiAgICAgICAgMjogXCJzbm93YmFsbF9udW1cIixcbiAgICAgICAgMzogXCJtYWduZXRfbnVtXCJcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJTdWJWaWV3cyhJY29uU292KTtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcih0aGlzLmxhYmVsX25hbWUsIF8gPT4gdGhpcy5kYXRhLm5hbWUpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKHRoaXMuaWNvbiwgXyA9PiB0aGlzLmRhdGEuaWNvbik7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIodGhpcy5sYWJlbF9kZXNjLCBfID0+IHRoaXMuZGF0YS5kZXNjKTtcblxuICAgIH1cblxuICAgIG9uU2hvd24oY2FsbGJhY2ssIHN0cikge1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMuc2NlbmVfbGFiZWwgPSBzdHI7XG4gICAgICAgIFVzZXJJbmZvLmd1blZpZXcrKztcbiAgICAgICAgVXNlckluZm8uc2F2ZShcImd1blZpZXdcIik7XG4gICAgICAgIFVzZXJJbmZvLmd1blZpZXdEYXkrKztcbiAgICAgICAgVXNlckluZm8uc2F2ZShcImd1blZpZXdEYXlcIik7XG5cbiAgICAgICAgbGV0IG51bSA9IGcucmFuZG9tSW50KDEsIDQpO1xuICAgICAgICB0aGlzLmRhdGEgPSBjY1V0aWwuZ2V0KFByb3BJbmZvLCBudW0pO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuXG4gICAgY2xpY2tfY2xvc2UoKSB7XG4gICAgICAgIHZtLmhpZGUodGhpcyk7XG4gICAgfVxuXG4gICAgY2xpY2tfZ2V0R3VuKCkge1xuICAgICAgICBXZWFrTmV0R2FtZS5kb0Nob2ljZShcIlN0YXJ0X0dldF9HdW5cIiwgXyA9PiB7XG4gICAgICAgICAgICAvLyBpZiAoVXNlckluZm8uZ3VuX251bSA+IDApIHtcbiAgICAgICAgICAgIC8vICAgICBUb2FzdC5tYWtlKFwi5p6q55qE5pWw6YeP5bey6L6+5LiK6ZmQXCIpXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgVXNlckluZm9bdGhpcy5wcm9wTGlzdFt0aGlzLmRhdGEuaWRdXSArPSAxO1xuICAgICAgICAgICAgVXNlckluZm9bdGhpcy5zY2VuZV9sYWJlbF0gPSB0cnVlO1xuICAgICAgICAgICAgVXNlckluZm8uc2F2ZSgpO1xuICAgICAgICAgICAgVG9hc3QubWFrZShcIuW3sumihuWPllwiICsgdGhpcy5kYXRhLm5hbWUpO1xuICAgICAgICAgICAgdm0uaGlkZSh0aGlzKTtcbiAgICAgICAgfSwgdGhpcylcbiAgICB9XG5cbiAgICBvbkhpZGRlbigpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKCk7XG4gICAgfVxuXG5cbn0iXX0=