
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UISkinItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f9266mBnQxD75ShE+Sk+oL5', 'UISkinItem');
// Game/Scripts/UI/UISkinItem.ts

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
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var Platform_1 = require("../../../framework/extension/Platform");
var event_1 = require("../../../framework/core/event");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var UISkin_1 = require("./UISkin");
var UserInfo_1 = require("../../../framework/extension/weak_net_game/UserInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SkinUnlockType;
(function (SkinUnlockType) {
    SkinUnlockType[SkinUnlockType["Level"] = 1] = "Level";
    SkinUnlockType[SkinUnlockType["Star"] = 2] = "Star";
    SkinUnlockType[SkinUnlockType["Video"] = 3] = "Video";
    SkinUnlockType[SkinUnlockType["Default"] = 4] = "Default";
})(SkinUnlockType || (SkinUnlockType = {}));
var StatusIndex;
(function (StatusIndex) {
    StatusIndex[StatusIndex["Choosed"] = 0] = "Choosed";
    StatusIndex[StatusIndex["Locked"] = 1] = "Locked";
    StatusIndex[StatusIndex["UnlockVideo"] = 2] = "UnlockVideo";
    StatusIndex[StatusIndex["Unlocked"] = 3] = "Unlocked";
})(StatusIndex || (StatusIndex = {}));
var Choosed_Color = new cc.Color().fromHEX("#FFFBDA");
var Name_Color = new cc.Color().fromHEX("#504B68");
var Unlock_Color = new cc.Color().fromHEX("#82FF52");
var UISKinItem = /** @class */ (function (_super) {
    __extends(UISKinItem, _super);
    function UISKinItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nameLabel = null;
        _this.switcher = null;
        //unlock condition
        _this.unlockDesc = null;
        _this.unlockIcon = null;
        _this.icon = null;
        _this.btn_unlock_video = null;
        _this.btn_unlock = null;
        _this.btn_select = null;
        _this.redPoint = null;
        return _this;
    }
    UISKinItem.prototype.onLoad = function () {
        var _this = this;
        event_1.evt.on("Guide.unlockSkin", this.onGuideUnlock, this);
        event_1.evt.on("Guide.useSkin", this.onGuideSelect, this);
        this.register(this.switcher, function (data) {
            _this.node.color = cc.Color.WHITE;
            _this.btn_unlock.node.color = cc.Color.WHITE;
            _this.node.opacity = 255;
            if (PlayerInfo_1.PlayerInfo.isSkinUnlocked(data.id)) {
                //已解锁 
                if (PlayerInfo_1.PlayerInfo.isSkinUsing(data.id)) {
                    _this.node.color = Choosed_Color;
                    return StatusIndex.Choosed;
                }
                else {
                    return StatusIndex.Unlocked;
                }
            }
            else {
                //未解锁 状态 
                if (data.unlockType == SkinUnlockType.Video) {
                    return StatusIndex.UnlockVideo;
                }
                else {
                    if (data.unlockType == SkinUnlockType.Level || data.unlockType == SkinUnlockType.Star) {
                        var unlock = _this.canUnlock();
                        // ccUtil.setButtonEnabled(this.btn_unlock, unlock)
                        _this.redPoint.active = unlock;
                        if (!unlock) {
                            _this.node.opacity = 222;
                        }
                        else {
                            _this.btn_unlock.node.color = Unlock_Color;
                        }
                    }
                    // this.nameLabel.node.color = cc.Color.RED;
                    return StatusIndex.Locked;
                }
            }
            return StatusIndex.Choosed;
        });
        this.register(this.unlockDesc, function (data) {
            if (data.unlockType == SkinUnlockType.Star) {
                return " x" + data.unlock2 + "颗解锁";
            }
            else {
                return "Lv" + data.unlock1 + '关解锁 ';
            }
        });
        this.register(this.nameLabel, function (data) {
            return data.name;
        });
        this.register(this.icon, function (data) { return "Img/skin/thumbnail/" + data.type + "/" + data.thumbnail; });
        this.onVisible(this.unlockIcon.node, function (data) { return data.unlockType == SkinUnlockType.Star; });
        // this.register<csv.Skin_Row>(this.unlockIcon, (data) => {
        //     if (data.unlockType == SkinUnlockType.Star) {
        //         return 'Img/main/star';
        //     } else if (data.unlockType == SkinUnlockType.Level) {
        //         return '';
        //     }
        // })
        this.register(this.btn_unlock_video, this.click_unlockvideo);
        this.register(this.btn_unlock, this.click_unlock);
        this.register(this.btn_select, this.click_select);
    };
    UISKinItem.prototype.onDestroy = function () {
        event_1.evt.off(this);
    };
    /**j是否可以解锁  */
    UISKinItem.prototype.canUnlock = function () {
        var d = this.getData();
        if (d.unlockType == SkinUnlockType.Level && PlayerInfo_1.PlayerInfo.level >= d.unlock1) {
            return true;
        }
        else if (d.unlockType == SkinUnlockType.Star && PlayerInfo_1.PlayerInfo.star >= d.unlock2) {
            return true;
        }
        else if (d.unlockType == SkinUnlockType.Video) {
            return true;
        }
        return false;
    };
    UISKinItem.prototype.click_unlockvideo = function () {
        Platform_1.default.watch_video(this.onvideocallback, this);
    };
    UISKinItem.prototype.unlock = function () {
        var d = this.getData();
        PlayerInfo_1.PlayerInfo.unlockSkin(d.id);
        ToastManager_1.Toast.make("已解锁：" + d.name);
        this.render(d);
    };
    UISKinItem.prototype.onvideocallback = function () {
        this.unlock();
    };
    UISKinItem.prototype.click_unlock = function () {
        var data = this.getData();
        if (this.canUnlock()) {
            PlayerInfo_1.PlayerInfo.unlockSkin(data.id);
            ToastManager_1.Toast.make("已解锁：" + data.name);
            event_1.evt.emit('UISkin.checkLock');
            this.render(data);
        }
        else {
            if (data.unlockType == 1) {
                ToastManager_1.Toast.make("达到" + data.unlock1 + "关解锁");
            }
            else if (data.unlockType == 2) {
                ToastManager_1.Toast.make("获取" + data.unlock2 + "颗星星解锁");
            }
        }
    };
    UISKinItem.prototype.click_select = function () {
        var data = this.getData();
        // if (UserInfo.skin_guide === 0 && data.id === 20) { // 初次解锁引导
        //     UserInfo.skin_guide = 1;
        //     UserInfo.save('skin_guide');
        // }
        if (data.type == UISkin_1.SkinType.Theme) {
            UserInfo_1.UserInfo.theme = data.data;
        }
        else {
            if (PlayerInfo_1.PlayerInfo.isSkinUnlocked(data.id)) {
                PlayerInfo_1.PlayerInfo.useSkin(data.id);
                this.render(data);
                //选择需要 取消选择其它同类项目
                event_1.evt.emit('Skin.select', data);
            }
        }
    };
    UISKinItem.prototype.click_unlockstar = function () {
    };
    UISKinItem.prototype.onGuideUnlock = function () {
        var data = this.getData();
        data && data.id === 20 && this.click_unlock();
    };
    UISKinItem.prototype.onGuideSelect = function () {
        var data = this.getData();
        data && data.id === 20 && this.click_select();
    };
    __decorate([
        property(cc.Label)
    ], UISKinItem.prototype, "nameLabel", void 0);
    __decorate([
        property(Switcher_1.default)
    ], UISKinItem.prototype, "switcher", void 0);
    __decorate([
        property(cc.Label)
    ], UISKinItem.prototype, "unlockDesc", void 0);
    __decorate([
        property(cc.Sprite)
    ], UISKinItem.prototype, "unlockIcon", void 0);
    __decorate([
        property(cc.Sprite)
    ], UISKinItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Button)
    ], UISKinItem.prototype, "btn_unlock_video", void 0);
    __decorate([
        property(cc.Button)
    ], UISKinItem.prototype, "btn_unlock", void 0);
    __decorate([
        property(cc.Button)
    ], UISKinItem.prototype, "btn_select", void 0);
    __decorate([
        property(cc.Node)
    ], UISKinItem.prototype, "redPoint", void 0);
    UISKinItem = __decorate([
        ccclass
    ], UISKinItem);
    return UISKinItem;
}(mvcView_1.default));
exports.default = UISKinItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJU2tpbkl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW9EO0FBQ3BELHNFQUFpRTtBQUNqRSx3REFBdUQ7QUFDdkQsa0VBQTZEO0FBQzdELHVEQUFvRDtBQUNwRCxtRUFBMkQ7QUFDM0QsbUNBQW9DO0FBQ3BDLGdGQUErRTtBQUUzRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQTtBQUV6QyxJQUFLLGNBS0o7QUFMRCxXQUFLLGNBQWM7SUFDZixxREFBUyxDQUFBO0lBQ1QsbURBQUksQ0FBQTtJQUNKLHFEQUFLLENBQUE7SUFDTCx5REFBVyxDQUFBO0FBQ2YsQ0FBQyxFQUxJLGNBQWMsS0FBZCxjQUFjLFFBS2xCO0FBRUQsSUFBSyxXQUtKO0FBTEQsV0FBSyxXQUFXO0lBQ1osbURBQVcsQ0FBQTtJQUNYLGlEQUFVLENBQUE7SUFDViwyREFBZSxDQUFBO0lBQ2YscURBQVksQ0FBQTtBQUNoQixDQUFDLEVBTEksV0FBVyxLQUFYLFdBQVcsUUFLZjtBQUVELElBQU0sYUFBYSxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUN2RCxJQUFNLFVBQVUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7QUFDcEQsSUFBTSxZQUFZLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBR3REO0lBQXdDLDhCQUFPO0lBQS9DO1FBQUEscUVBb0xDO1FBakxHLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixrQkFBa0I7UUFFbEIsZ0JBQVUs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QzFDLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQWhMRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNRO0lBRTNCO1FBREMsUUFBUSxDQUFDLGtCQUFRLENBQUM7Z0RBQ087SUFJMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDUztJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNTO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ0c7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3REFDYztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNRO0lBSTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ1E7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDTztJQTVCUixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBb0w5QjtJQUFELGlCQUFDO0NBcExELEFBb0xDLENBcEx1QyxpQkFBTyxHQW9MOUM7a0JBcExvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG12Y1ZpZXcgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9tdmNWaWV3XCI7XHJcbmltcG9ydCBTd2l0Y2hlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL2NvbnRyb2xsZXIvU3dpdGNoZXJcIjtcclxuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuLi9Db21tb24vQmFzZS9QbGF5ZXJJbmZvXCI7XHJcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi9QbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBldnQgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2NvcmUvZXZlbnRcIjtcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL1RvYXN0TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTa2luVHlwZSB9IGZyb20gXCIuL1VJU2tpblwiO1xyXG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvVXNlckluZm9cIjtcclxuXHJcbmxldCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yXHJcblxyXG5lbnVtIFNraW5VbmxvY2tUeXBlIHtcclxuICAgIExldmVsID0gMSxcclxuICAgIFN0YXIsXHJcbiAgICBWaWRlbyxcclxuICAgIERlZmF1bHQgPSA0XHJcbn1cclxuXHJcbmVudW0gU3RhdHVzSW5kZXgge1xyXG4gICAgQ2hvb3NlZCA9IDAsIC8vIOW3sumAieaLqVxyXG4gICAgTG9ja2VkID0gMSwgLy/plIFcclxuICAgIFVubG9ja1ZpZGVvID0gMiwgLy/nnIvop4bpopEg6aKG5Y+WXHJcbiAgICBVbmxvY2tlZCA9IDMsIC8v5bey6Kej6ZSBIFxyXG59XHJcblxyXG5jb25zdCBDaG9vc2VkX0NvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiNGRkZCREFcIilcclxuY29uc3QgTmFtZV9Db2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjNTA0QjY4XCIpXHJcbmNvbnN0IFVubG9ja19Db2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjODJGRjUyXCIpXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVNLaW5JdGVtIGV4dGVuZHMgbXZjVmlldyB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbmFtZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoU3dpdGNoZXIpXHJcbiAgICBzd2l0Y2hlcjogU3dpdGNoZXIgPSBudWxsO1xyXG5cclxuICAgIC8vdW5sb2NrIGNvbmRpdGlvblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdW5sb2NrRGVzYzogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICB1bmxvY2tJY29uOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBpY29uOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBidG5fdW5sb2NrX3ZpZGVvOiBjYy5CdXR0b24gPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJ0bl91bmxvY2s6IGNjLkJ1dHRvbiA9IG51bGxcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJ0bl9zZWxlY3Q6IGNjLkJ1dHRvbiA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHJlZFBvaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgZXZ0Lm9uKGBHdWlkZS51bmxvY2tTa2luYCwgdGhpcy5vbkd1aWRlVW5sb2NrLCB0aGlzKTtcclxuICAgICAgICBldnQub24oYEd1aWRlLnVzZVNraW5gLCB0aGlzLm9uR3VpZGVTZWxlY3QsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyPGNzdi5Ta2luX1Jvdz4odGhpcy5zd2l0Y2hlciwgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuX3VubG9jay5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICBpZiAoUGxheWVySW5mby5pc1NraW5VbmxvY2tlZChkYXRhLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgLy/lt7Lop6PplIEgXHJcbiAgICAgICAgICAgICAgICBpZiAoUGxheWVySW5mby5pc1NraW5Vc2luZyhkYXRhLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jb2xvciA9IENob29zZWRfQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YXR1c0luZGV4LkNob29zZWRcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YXR1c0luZGV4LlVubG9ja2VkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy/mnKrop6PplIEg54q25oCBIFxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudW5sb2NrVHlwZSA9PSBTa2luVW5sb2NrVHlwZS5WaWRlbykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGF0dXNJbmRleC5VbmxvY2tWaWRlbztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEudW5sb2NrVHlwZSA9PSBTa2luVW5sb2NrVHlwZS5MZXZlbCB8fCBkYXRhLnVubG9ja1R5cGUgPT0gU2tpblVubG9ja1R5cGUuU3Rhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdW5sb2NrID0gdGhpcy5jYW5VbmxvY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2NVdGlsLnNldEJ1dHRvbkVuYWJsZWQodGhpcy5idG5fdW5sb2NrLCB1bmxvY2spXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVkUG9pbnQuYWN0aXZlID0gdW5sb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXVubG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyMjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bl91bmxvY2subm9kZS5jb2xvciA9IFVubG9ja19Db2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5hbWVMYWJlbC5ub2RlLmNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGF0dXNJbmRleC5Mb2NrZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFN0YXR1c0luZGV4LkNob29zZWQ7XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXI8Y3N2LlNraW5fUm93Pih0aGlzLnVubG9ja0Rlc2MsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnVubG9ja1R5cGUgPT0gU2tpblVubG9ja1R5cGUuU3Rhcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiIHhcIiArIGRhdGEudW5sb2NrMiArIFwi6aKX6Kej6ZSBXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMdlwiICsgZGF0YS51bmxvY2sxICsgJ+WFs+ino+mUgSAnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcjxjc3YuU2tpbl9Sb3c+KHRoaXMubmFtZUxhYmVsLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YS5uYW1lXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcjxjc3YuU2tpbl9Sb3c+KHRoaXMuaWNvbiwgKGRhdGEpID0+IFwiSW1nL3NraW4vdGh1bWJuYWlsL1wiICsgZGF0YS50eXBlICsgXCIvXCIgKyBkYXRhLnRodW1ibmFpbCk7XHJcblxyXG4gICAgICAgIHRoaXMub25WaXNpYmxlPGNzdi5Ta2luX1Jvdz4odGhpcy51bmxvY2tJY29uLm5vZGUsIChkYXRhKSA9PiBkYXRhLnVubG9ja1R5cGUgPT0gU2tpblVubG9ja1R5cGUuU3Rhcik7XHJcbiAgICAgICAgLy8gdGhpcy5yZWdpc3Rlcjxjc3YuU2tpbl9Sb3c+KHRoaXMudW5sb2NrSWNvbiwgKGRhdGEpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKGRhdGEudW5sb2NrVHlwZSA9PSBTa2luVW5sb2NrVHlwZS5TdGFyKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gJ0ltZy9tYWluL3N0YXInO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2UgaWYgKGRhdGEudW5sb2NrVHlwZSA9PSBTa2luVW5sb2NrVHlwZS5MZXZlbCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKHRoaXMuYnRuX3VubG9ja192aWRlbywgdGhpcy5jbGlja191bmxvY2t2aWRlbylcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKHRoaXMuYnRuX3VubG9jaywgdGhpcy5jbGlja191bmxvY2spXHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcih0aGlzLmJ0bl9zZWxlY3QsIHRoaXMuY2xpY2tfc2VsZWN0KVxyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGV2dC5vZmYodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqauaYr+WQpuWPr+S7peino+mUgSAgKi9cclxuICAgIGNhblVubG9jaygpIHtcclxuICAgICAgICBsZXQgZDogY3N2LlNraW5fUm93ID0gdGhpcy5nZXREYXRhKCkgYXMgY3N2LlNraW5fUm93O1xyXG4gICAgICAgIGlmIChkLnVubG9ja1R5cGUgPT0gU2tpblVubG9ja1R5cGUuTGV2ZWwgJiYgUGxheWVySW5mby5sZXZlbCA+PSBkLnVubG9jazEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkLnVubG9ja1R5cGUgPT0gU2tpblVubG9ja1R5cGUuU3RhciAmJiBQbGF5ZXJJbmZvLnN0YXIgPj0gZC51bmxvY2syKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZC51bmxvY2tUeXBlID09IFNraW5VbmxvY2tUeXBlLlZpZGVvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNsaWNrX3VubG9ja3ZpZGVvKCkge1xyXG4gICAgICAgIFBsYXRmb3JtLndhdGNoX3ZpZGVvKHRoaXMub252aWRlb2NhbGxiYWNrLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICB1bmxvY2soKSB7XHJcbiAgICAgICAgbGV0IGQ6IGNzdi5Ta2luX1JvdyA9IHRoaXMuZ2V0RGF0YSgpIGFzIGNzdi5Ta2luX1JvdztcclxuICAgICAgICBQbGF5ZXJJbmZvLnVubG9ja1NraW4oZC5pZCk7XHJcbiAgICAgICAgVG9hc3QubWFrZShcIuW3suino+mUge+8mlwiICsgZC5uYW1lKTtcclxuICAgICAgICB0aGlzLnJlbmRlcihkKTtcclxuICAgIH1cclxuXHJcbiAgICBvbnZpZGVvY2FsbGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy51bmxvY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGlja191bmxvY2soKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldERhdGEoKSBhcyBjc3YuU2tpbl9Sb3c7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FuVW5sb2NrKCkpIHtcclxuICAgICAgICAgICAgUGxheWVySW5mby51bmxvY2tTa2luKGRhdGEuaWQpXHJcbiAgICAgICAgICAgIFRvYXN0Lm1ha2UoXCLlt7Lop6PplIHvvJpcIiArIGRhdGEubmFtZSlcclxuICAgICAgICAgICAgZXZ0LmVtaXQoJ1VJU2tpbi5jaGVja0xvY2snKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoZGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnVubG9ja1R5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgVG9hc3QubWFrZShcIui+vuWIsFwiICsgZGF0YS51bmxvY2sxICsgXCLlhbPop6PplIFcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLnVubG9ja1R5cGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgVG9hc3QubWFrZShcIuiOt+WPllwiICsgZGF0YS51bmxvY2syICsgXCLpopfmmJ/mmJ/op6PplIFcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGlja19zZWxlY3QoKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldERhdGEoKSBhcyBjc3YuU2tpbl9Sb3c7XHJcbiAgICAgICAgLy8gaWYgKFVzZXJJbmZvLnNraW5fZ3VpZGUgPT09IDAgJiYgZGF0YS5pZCA9PT0gMjApIHsgLy8g5Yid5qyh6Kej6ZSB5byV5a+8XHJcbiAgICAgICAgLy8gICAgIFVzZXJJbmZvLnNraW5fZ3VpZGUgPSAxO1xyXG4gICAgICAgIC8vICAgICBVc2VySW5mby5zYXZlKCdza2luX2d1aWRlJyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmIChkYXRhLnR5cGUgPT0gU2tpblR5cGUuVGhlbWUpIHtcclxuICAgICAgICAgICAgVXNlckluZm8udGhlbWUgPSBkYXRhLmRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoUGxheWVySW5mby5pc1NraW5VbmxvY2tlZChkYXRhLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgUGxheWVySW5mby51c2VTa2luKGRhdGEuaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvL+mAieaLqemcgOimgSDlj5bmtojpgInmi6nlhbblroPlkIznsbvpobnnm65cclxuICAgICAgICAgICAgICAgIGV2dC5lbWl0KCdTa2luLnNlbGVjdCcsIGRhdGEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tfdW5sb2Nrc3RhcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25HdWlkZVVubG9jaygpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpIGFzIGNzdi5Ta2luX1JvdztcclxuICAgICAgICBkYXRhICYmIGRhdGEuaWQgPT09IDIwICYmIHRoaXMuY2xpY2tfdW5sb2NrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25HdWlkZVNlbGVjdCgpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpIGFzIGNzdi5Ta2luX1JvdztcclxuICAgICAgICBkYXRhICYmIGRhdGEuaWQgPT09IDIwICYmIHRoaXMuY2xpY2tfc2VsZWN0KCk7XHJcbiAgICB9XHJcbn0iXX0=