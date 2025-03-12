
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIDecorateItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f693J3bUFBQbn7+A7Ga7gi', 'UIDecorateItem');
// Game/Scripts/UI/UIDecorateItem.ts

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
var event_1 = require("../../../framework/core/event");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var UIPersonSkin_1 = require("./UIPersonSkin");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StatusIndex;
(function (StatusIndex) {
    StatusIndex[StatusIndex["Choosed"] = 0] = "Choosed";
    StatusIndex[StatusIndex["Unlocked"] = 1] = "Unlocked";
    StatusIndex[StatusIndex["Locked"] = 2] = "Locked";
})(StatusIndex || (StatusIndex = {}));
var Choosed_Color = new cc.Color().fromHEX("#FFFBDA");
var Name_Color = new cc.Color().fromHEX("#504B68");
var Unlock_Color = new cc.Color().fromHEX("#82FF52");
var UIDecorateItem = /** @class */ (function (_super) {
    __extends(UIDecorateItem, _super);
    function UIDecorateItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nameLabel = null;
        _this.switcher = null;
        _this.icon = null;
        _this.btn_select = null;
        _this.btn_unlock = null;
        _this.btn_choosed = null;
        _this.redPoint = null;
        return _this;
    }
    UIDecorateItem.prototype.onLoad = function () {
        var _this = this;
        this.register(this.switcher, function (data) {
            _this.node.color = cc.Color.WHITE;
            _this.btn_unlock.node.color = cc.Color.WHITE;
            _this.node.opacity = 255;
            if (PlayerInfo_1.PlayerInfo.isDecorateUnlocked(data.id)) {
                //已解锁 
                if (PlayerInfo_1.PlayerInfo.isDecorateUsing(data.id)) {
                    _this.node.color = Choosed_Color;
                    return StatusIndex.Choosed;
                }
                else {
                    return StatusIndex.Unlocked;
                }
            }
            else {
                //未解锁 状态 
                var unlock = _this.canUnlock();
                // ccUtil.setButtonEnabled(this.btn_unlock, unlock);
                _this.redPoint.active = unlock;
                if (!unlock) {
                    _this.node.opacity = 222;
                }
                else {
                    _this.btn_unlock.interactable = false;
                    _this.btn_unlock.node.color = Unlock_Color;
                }
                // this.nameLabel.node.color = cc.Color.RED;
                return StatusIndex.Locked;
            }
        });
        this.register(this.nameLabel, function (data) {
            return data.name;
        });
        this.register(this.icon, function (data) {
            cc.log("" + data.thumbnail);
            return data.thumbnail ? "Img/decorate/thumbnail/" + data.thumbnail : '';
        });
        this.register(this.btn_unlock, this.click_unlock);
        this.register(this.btn_select, this.click_select);
        this.register(this.btn_choosed, this.click_choosed);
    };
    /**j是否可以解锁  */
    UIDecorateItem.prototype.canUnlock = function () {
        return false;
    };
    UIDecorateItem.prototype.unlock = function () {
        var d = this.getData();
        PlayerInfo_1.PlayerInfo.unlockDecorate(d.id);
        ToastManager_1.Toast.make("已解锁：" + d.name);
        this.render(d);
    };
    UIDecorateItem.prototype.onvideocallback = function () {
        this.unlock();
    };
    UIDecorateItem.prototype.click_unlock = function () {
        var data = this.getData();
        if (this.canUnlock()) {
            PlayerInfo_1.PlayerInfo.unlockDecorate(data.id);
            ToastManager_1.Toast.make("已解锁：" + data.name);
            event_1.evt.emit('UISkin.checkLock');
            this.render(data);
        }
    };
    UIDecorateItem.prototype.click_select = function () {
        var data = this.getData();
        if (PlayerInfo_1.PlayerInfo.isDecorateUnlocked(data.id)) {
            PlayerInfo_1.PlayerInfo.useDecorate(data.id);
            // this.render(data);
            //选择需要 取消选择其它同类项目
            event_1.evt.emit('Decorate.select', data);
        }
    };
    UIDecorateItem.prototype.click_choosed = function () {
        var data = this.getData();
        if (data.type === UIPersonSkin_1.DecorateType.BaiJian) {
            PlayerInfo_1.PlayerInfo.collections[data.id] = 1;
            PlayerInfo_1.PlayerInfo.save();
            // this.render();
            //选择需要 取消选择其它同类项目
            event_1.evt.emit('Decorate.select', data);
        }
    };
    __decorate([
        property(cc.Label)
    ], UIDecorateItem.prototype, "nameLabel", void 0);
    __decorate([
        property(Switcher_1.default)
    ], UIDecorateItem.prototype, "switcher", void 0);
    __decorate([
        property(cc.Sprite)
    ], UIDecorateItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Button)
    ], UIDecorateItem.prototype, "btn_select", void 0);
    __decorate([
        property(cc.Button)
    ], UIDecorateItem.prototype, "btn_unlock", void 0);
    __decorate([
        property(cc.Button)
    ], UIDecorateItem.prototype, "btn_choosed", void 0);
    __decorate([
        property(cc.Node)
    ], UIDecorateItem.prototype, "redPoint", void 0);
    UIDecorateItem = __decorate([
        ccclass
    ], UIDecorateItem);
    return UIDecorateItem;
}(mvcView_1.default));
exports.default = UIDecorateItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJRGVjb3JhdGVJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUFvRDtBQUNwRCxzRUFBaUU7QUFDakUsd0RBQXVEO0FBQ3ZELHVEQUFvRDtBQUNwRCxtRUFBMkQ7QUFDM0QsK0NBQThDO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFBO0FBRXpDLElBQUssV0FJSjtBQUpELFdBQUssV0FBVztJQUNaLG1EQUFXLENBQUE7SUFDWCxxREFBWSxDQUFBO0lBQ1osaURBQVUsQ0FBQTtBQUNkLENBQUMsRUFKSSxXQUFXLEtBQVgsV0FBVyxRQUlmO0FBRUQsSUFBTSxhQUFhLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQ3ZELElBQU0sVUFBVSxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUNwRCxJQUFNLFlBQVksR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7QUFHdEQ7SUFBNEMsa0NBQU87SUFBbkQ7UUFBQSxxRUFrSEM7UUEvR0csZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRzFCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFJN0IsZ0JBQVUsR0FBYyxJQUFJLENBQUE7UUFHNUIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsY0FBUSxHQUFZLElBQUksQ0FBQzs7SUE2RjdCLENBQUM7SUExRkcsK0JBQU0sR0FBTjtRQUFBLGlCQXlDQztRQXhDRyxJQUFJLENBQUMsUUFB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QUFDO3FEQUNRO0lBRTNCO1FBREMsUUFBUSxDQUFDLGtCQUFRLENBQUM7b0RBQ087SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNTO0lBSTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ1E7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt1REFDVTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNPO0lBckJSLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FrSGxDO0lBQUQscUJBQUM7Q0FsSEQsQUFrSEMsQ0FsSDJDLGlCQUFPLEdBa0hsRDtrQkFsSG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXZjVmlldyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL212Y1ZpZXdcIjtcclxuaW1wb3J0IFN3aXRjaGVyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvY29udHJvbGxlci9Td2l0Y2hlclwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL0NvbW1vbi9CYXNlL1BsYXllckluZm9cIjtcclxuaW1wb3J0IHsgZXZ0IH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9jb3JlL2V2ZW50XCI7XHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9Ub2FzdE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgRGVjb3JhdGVUeXBlIH0gZnJvbSBcIi4vVUlQZXJzb25Ta2luXCI7XHJcblxyXG5sZXQgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvclxyXG5cclxuZW51bSBTdGF0dXNJbmRleCB7XHJcbiAgICBDaG9vc2VkID0gMCwgLy8g5bey6YCJ5oupXHJcbiAgICBVbmxvY2tlZCA9IDEsIC8v5bey6Kej6ZSBXHJcbiAgICBMb2NrZWQgPSAyLCAvL+mUgSBcclxufVxyXG5cclxuY29uc3QgQ2hvb3NlZF9Db2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjRkZGQkRBXCIpXHJcbmNvbnN0IE5hbWVfQ29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzUwNEI2OFwiKVxyXG5jb25zdCBVbmxvY2tfQ29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzgyRkY1MlwiKVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlEZWNvcmF0ZUl0ZW0gZXh0ZW5kcyBtdmNWaWV3IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBuYW1lTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShTd2l0Y2hlcilcclxuICAgIHN3aXRjaGVyOiBTd2l0Y2hlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGljb246IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJ0bl9zZWxlY3Q6IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBidG5fdW5sb2NrOiBjYy5CdXR0b24gPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJ0bl9jaG9vc2VkOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcmVkUG9pbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcjxjc3YuQ29sbGVjdGlvbl9Sb3c+KHRoaXMuc3dpdGNoZXIsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bl91bmxvY2subm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgaWYgKFBsYXllckluZm8uaXNEZWNvcmF0ZVVubG9ja2VkKGRhdGEuaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAvL+W3suino+mUgSBcclxuICAgICAgICAgICAgICAgIGlmIChQbGF5ZXJJbmZvLmlzRGVjb3JhdGVVc2luZyhkYXRhLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jb2xvciA9IENob29zZWRfQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YXR1c0luZGV4LkNob29zZWQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGF0dXNJbmRleC5VbmxvY2tlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8v5pyq6Kej6ZSBIOeKtuaAgSBcclxuICAgICAgICAgICAgICAgIGxldCB1bmxvY2sgPSB0aGlzLmNhblVubG9jaygpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2NVdGlsLnNldEJ1dHRvbkVuYWJsZWQodGhpcy5idG5fdW5sb2NrLCB1bmxvY2spO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWRQb2ludC5hY3RpdmUgPSB1bmxvY2s7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXVubG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjIyO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bl91bmxvY2suaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5fdW5sb2NrLm5vZGUuY29sb3IgPSBVbmxvY2tfQ29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5hbWVMYWJlbC5ub2RlLmNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0YXR1c0luZGV4LkxvY2tlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXI8Y3N2LkNvbGxlY3Rpb25fUm93Pih0aGlzLm5hbWVMYWJlbCwgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGEubmFtZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyPGNzdi5Db2xsZWN0aW9uX1Jvdz4odGhpcy5pY29uLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjYy5sb2coYCR7ZGF0YS50aHVtYm5haWx9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhLnRodW1ibmFpbCA/IFwiSW1nL2RlY29yYXRlL3RodW1ibmFpbC9cIiArIGRhdGEudGh1bWJuYWlsIDogJyc7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIodGhpcy5idG5fdW5sb2NrLCB0aGlzLmNsaWNrX3VubG9jayk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcih0aGlzLmJ0bl9zZWxlY3QsIHRoaXMuY2xpY2tfc2VsZWN0KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKHRoaXMuYnRuX2Nob29zZWQsIHRoaXMuY2xpY2tfY2hvb3NlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqauaYr+WQpuWPr+S7peino+mUgSAgKi9cclxuICAgIGNhblVubG9jaygpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdW5sb2NrKCkge1xyXG4gICAgICAgIGxldCBkOiBjc3YuQ29sbGVjdGlvbl9Sb3cgPSB0aGlzLmdldERhdGEoKSBhcyBjc3YuQ29sbGVjdGlvbl9Sb3c7XHJcbiAgICAgICAgUGxheWVySW5mby51bmxvY2tEZWNvcmF0ZShkLmlkKTtcclxuICAgICAgICBUb2FzdC5tYWtlKFwi5bey6Kej6ZSB77yaXCIgKyBkLm5hbWUpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKGQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9udmlkZW9jYWxsYmFjaygpIHtcclxuICAgICAgICB0aGlzLnVubG9jaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrX3VubG9jaygpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpIGFzIGNzdi5Db2xsZWN0aW9uX1JvdztcclxuICAgICAgICBpZiAodGhpcy5jYW5VbmxvY2soKSkge1xyXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLnVubG9ja0RlY29yYXRlKGRhdGEuaWQpO1xyXG4gICAgICAgICAgICBUb2FzdC5tYWtlKFwi5bey6Kej6ZSB77yaXCIgKyBkYXRhLm5hbWUpO1xyXG4gICAgICAgICAgICBldnQuZW1pdCgnVUlTa2luLmNoZWNrTG9jaycpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcihkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tfc2VsZWN0KCkge1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXREYXRhKCkgYXMgY3N2LkNvbGxlY3Rpb25fUm93O1xyXG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLmlzRGVjb3JhdGVVbmxvY2tlZChkYXRhLmlkKSkge1xyXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLnVzZURlY29yYXRlKGRhdGEuaWQpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnJlbmRlcihkYXRhKTtcclxuICAgICAgICAgICAgLy/pgInmi6npnIDopoEg5Y+W5raI6YCJ5oup5YW25a6D5ZCM57G76aG555uuXHJcbiAgICAgICAgICAgIGV2dC5lbWl0KCdEZWNvcmF0ZS5zZWxlY3QnLCBkYXRhKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGlja19jaG9vc2VkKCkge1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXREYXRhKCkgYXMgY3N2LkNvbGxlY3Rpb25fUm93O1xyXG4gICAgICAgIGlmIChkYXRhLnR5cGUgPT09IERlY29yYXRlVHlwZS5CYWlKaWFuKSB7XHJcbiAgICAgICAgICAgIFBsYXllckluZm8uY29sbGVjdGlvbnNbZGF0YS5pZF0gPSAxO1xyXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLnNhdmUoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgLy/pgInmi6npnIDopoEg5Y+W5raI6YCJ5oup5YW25a6D5ZCM57G76aG555uuXHJcbiAgICAgICAgICAgIGV2dC5lbWl0KCdEZWNvcmF0ZS5zZWxlY3QnLCBkYXRhKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=