
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/views/ItemsGroupView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49e7ek80NVNJrZWdYpYSmVw', 'ItemsGroupView');
// Game/Scripts/views/ItemsGroupView.ts

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
var Role_1 = require("../Role");
var Effect_1 = require("../Levels/Effect");
var Game_1 = require("../Game");
var UserInfo_1 = require("../../../framework/extension/weak_net_game/UserInfo");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var ViewManager_1 = require("../../../framework/ui/ViewManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemsGroupView = /** @class */ (function (_super) {
    __extends(ItemsGroupView, _super);
    function ItemsGroupView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemsGroupView.prototype.onLoad = function () {
    };
    ItemsGroupView.prototype.start = function () {
        if (!PlayerInfo_1.PlayerInfo.isUnlock_Prop) {
            this.node.active = false;
        }
    };
    /**点击磁铁 */
    ItemsGroupView.prototype.click_magnet = function () {
        if (PlayerInfo_1.PlayerInfo.isPlayingDaily) {
            ToastManager_1.Toast.make("挑战模式不可用");
            return;
        }
        if (UserInfo_1.UserInfo.magnet_num > 0) {
            if (Game_1.default.instance.isUsedMagnet) {
                ToastManager_1.Toast.make("本关使用过了");
            }
            else {
                Game_1.default.instance.isUsedMagnet = true;
                UserInfo_1.UserInfo.magnet_num -= 1;
                Effect_1.default.do_magnet();
            }
        }
        else {
            ViewManager_1.default.instance.show("Prefabs/UI/UIGetProp");
        }
    };
    ItemsGroupView.prototype.click_snowball = function () {
        if (PlayerInfo_1.PlayerInfo.isPlayingSpecial) {
            ToastManager_1.Toast.make("特殊关卡不可用");
            return;
        }
        if (UserInfo_1.UserInfo.snowball_num > 0) {
            var b = Effect_1.default.throw_snowballs();
            if (b)
                UserInfo_1.UserInfo.snowball_num -= 1;
        }
        else {
            ViewManager_1.default.instance.show("Prefabs/UI/UIGetProp");
        }
    };
    ItemsGroupView.prototype.click_gun = function () {
        if (PlayerInfo_1.PlayerInfo.isPlayingSpecial) {
            ToastManager_1.Toast.make("特殊关卡不可用");
            return;
        }
        if (UserInfo_1.UserInfo.gun_num > 0) {
            Role_1.default.self.open_fire();
        }
        else {
            ViewManager_1.default.instance.show("Prefabs/UI/UIGetProp");
        }
    };
    ItemsGroupView.prototype.click_getProp = function () {
        ViewManager_1.default.instance.show("Prefabs/UI/UIGetProp");
    };
    ItemsGroupView = __decorate([
        ccclass
    ], ItemsGroupView);
    return ItemsGroupView;
}(cc.Component));
exports.default = ItemsGroupView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcdmlld3NcXEl0ZW1zR3JvdXBWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLGdDQUEwQjtBQUcxQiwyQ0FBcUM7QUFHckMsZ0NBQTBCO0FBQzFCLGdGQUE4RTtBQUM5RSx3REFBc0Q7QUFDdEQsbUVBQTBEO0FBQzFELGlFQUEyRDtBQUV2RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQTtBQUV6QztJQUE0QyxrQ0FBWTtJQUF4RDs7SUFzRUEsQ0FBQztJQXBFRywrQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsdUJBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUVELFVBQVU7SUFDVixxQ0FBWSxHQUFaO1FBQ0ksSUFBSSx1QkFBVSxDQUFDLGNBQWMsRUFBRTtZQUMzQixvQkFBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN0QixPQUFPO1NBQ1Y7UUFFRCxJQUFJLG1CQUFRLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRTtZQUN6QixJQUFJLGNBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFO2dCQUM1QixvQkFBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN4QjtpQkFDSTtnQkFDRCxjQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ2xDLG1CQUFRLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztnQkFDekIsZ0JBQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QjtTQUNKO2FBQ0k7WUFDRCxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUNyRDtJQUNMLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0ksSUFBSSx1QkFBVSxDQUFDLGdCQUFnQixFQUFFO1lBQzdCLG9CQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3RCLE9BQU87U0FDVjtRQUNELElBQUksbUJBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxHQUFHLGdCQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDO2dCQUNELG1CQUFRLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztTQUNsQzthQUNJO1lBQ0QscUJBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDckQ7SUFDTCxDQUFDO0lBR0Qsa0NBQVMsR0FBVDtRQUNJLElBQUksdUJBQVUsQ0FBQyxnQkFBZ0IsRUFBRTtZQUM3QixvQkFBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN0QixPQUFPO1NBQ1Y7UUFDRCxJQUFJLG1CQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRTtZQUN0QixjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3pCO2FBQ0k7WUFDRCxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUNyRDtJQUNMLENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQ0kscUJBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQWpFZ0IsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQXNFbEM7SUFBRCxxQkFBQztDQXRFRCxBQXNFQyxDQXRFMkMsRUFBRSxDQUFDLFNBQVMsR0FzRXZEO2tCQXRFb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJdGVtU3RhciBmcm9tIFwiLi4vaXRlbXMvSXRlbVN0YXJcIlxyXG5pbXBvcnQgRmx5VG9NYWduZXQgZnJvbSBcIi4uL2l0ZW1zL0ZseVRvTWFnbmV0XCJcclxuaW1wb3J0IFJvbGUgZnJvbSBcIi4uL1JvbGVcIlxyXG5pbXBvcnQgUG9vbE1hbmFnZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9jb3JlL1Bvb2xNYW5hZ2VyXCJcclxuaW1wb3J0IGNjVXRpbCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3V0aWxzL2NjVXRpbFwiXHJcbmltcG9ydCBFZmZlY3QgZnJvbSBcIi4uL0xldmVscy9FZmZlY3RcIlxyXG5pbXBvcnQgQUlFbmVteSBmcm9tIFwiLi4vQUlFbmVteVwiXHJcbmltcG9ydCBTbm93QmFsbCBmcm9tIFwiLi4vaXRlbXMvU25vd0JhbGxcIlxyXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vR2FtZVwiXHJcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9Vc2VySW5mb1wiXHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi4vQ29tbW9uL0Jhc2UvUGxheWVySW5mb1wiXHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9Ub2FzdE1hbmFnZXJcIlxyXG5pbXBvcnQgVmlld01hbmFnZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9WaWV3TWFuYWdlclwiXHJcblxyXG5sZXQgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvclxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtc0dyb3VwVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAoIVBsYXllckluZm8uaXNVbmxvY2tfUHJvcCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKueCueWHu+ejgemTgSAqL1xyXG4gICAgY2xpY2tfbWFnbmV0KCkge1xyXG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLmlzUGxheWluZ0RhaWx5KSB7XHJcbiAgICAgICAgICAgIFRvYXN0Lm1ha2UoXCLmjJHmiJjmqKHlvI/kuI3lj6/nlKhcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChVc2VySW5mby5tYWduZXRfbnVtID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoR2FtZS5pbnN0YW5jZS5pc1VzZWRNYWduZXQpIHtcclxuICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2UoXCLmnKzlhbPkvb/nlKjov4fkuoZcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBHYW1lLmluc3RhbmNlLmlzVXNlZE1hZ25ldCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBVc2VySW5mby5tYWduZXRfbnVtIC09IDE7XHJcbiAgICAgICAgICAgICAgICBFZmZlY3QuZG9fbWFnbmV0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3RhbmNlLnNob3coXCJQcmVmYWJzL1VJL1VJR2V0UHJvcFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tfc25vd2JhbGwoKSB7XHJcbiAgICAgICAgaWYgKFBsYXllckluZm8uaXNQbGF5aW5nU3BlY2lhbCkge1xyXG4gICAgICAgICAgICBUb2FzdC5tYWtlKFwi54m55q6K5YWz5Y2h5LiN5Y+v55SoXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChVc2VySW5mby5zbm93YmFsbF9udW0gPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBiID0gRWZmZWN0LnRocm93X3Nub3diYWxscygpO1xyXG4gICAgICAgICAgICBpZiAoYilcclxuICAgICAgICAgICAgICAgIFVzZXJJbmZvLnNub3diYWxsX251bSAtPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdGFuY2Uuc2hvdyhcIlByZWZhYnMvVUkvVUlHZXRQcm9wXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY2xpY2tfZ3VuKCkge1xyXG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLmlzUGxheWluZ1NwZWNpYWwpIHtcclxuICAgICAgICAgICAgVG9hc3QubWFrZShcIueJueauiuWFs+WNoeS4jeWPr+eUqFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoVXNlckluZm8uZ3VuX251bSA+IDApIHtcclxuICAgICAgICAgICAgUm9sZS5zZWxmLm9wZW5fZmlyZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdGFuY2Uuc2hvdyhcIlByZWZhYnMvVUkvVUlHZXRQcm9wXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGlja19nZXRQcm9wKCkge1xyXG4gICAgICAgIFZpZXdNYW5hZ2VyLmluc3RhbmNlLnNob3coXCJQcmVmYWJzL1VJL1VJR2V0UHJvcFwiKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbn0iXX0=