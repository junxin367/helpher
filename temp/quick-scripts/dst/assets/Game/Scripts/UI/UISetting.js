
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UISetting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e22497NQ6dNwoa3P66Mifgy', 'UISetting');
// Game/Scripts/UI/UISetting.ts

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
var Device_1 = require("../../../framework/misc/Device");
var SettingInfo_1 = require("../../../framework/extension/weak_net_game/SettingInfo");
var mvcView_1 = require("../../../framework/ui/mvcView");
var actionUtil_1 = require("../../../framework/utils/actionUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UISetting = /** @class */ (function (_super) {
    __extends(UISetting, _super);
    function UISetting() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.music = null;
        _this.effect = null;
        _this.sdk = null;
        return _this;
        // update (dt) {}
    }
    UISetting.prototype.onLoad = function () {
        // if(window.qq || window.tt){
        //     this.fankui.active = false;
        // }
        this.musicOff = this.music.getChildByName("off");
        this.effectOff = this.effect.getChildByName("off");
    };
    UISetting.prototype.start = function () {
        // if (PlayerInfo.isShowSDK()) {
        //     let youlike = window['zzsdkui'].youlike(4, 0, -200);
        //     youlike && this.sdk.addChild(youlike);
        //     youlike.scale = 1;
        // }
    };
    UISetting.prototype.onShow = function () {
        actionUtil_1.default.jellyJump2(this.node);
        this.musicOff.active = !SettingInfo_1.SettingInfo.music;
        this.effectOff.active = !SettingInfo_1.SettingInfo.effect;
    };
    UISetting.prototype.click_music = function () {
        Device_1.default.setBGMEnable(!SettingInfo_1.SettingInfo.music);
        SettingInfo_1.SettingInfo.saveSettings();
        this.musicOff.active = !SettingInfo_1.SettingInfo.music;
    };
    UISetting.prototype.click_effect = function () {
        Device_1.default.setSFXEnable(!SettingInfo_1.SettingInfo.effect);
        SettingInfo_1.SettingInfo.saveSettings();
        this.effectOff.active = !SettingInfo_1.SettingInfo.effect;
    };
    UISetting.prototype.click_close = function () {
        vm.hide(this);
    };
    UISetting.prototype.onDestroy = function () {
        // if (PlayerInfo.isShowSDK()) window['zzsdkui'].unscheduleAllCallbacks();
    };
    __decorate([
        property(cc.Node)
    ], UISetting.prototype, "music", void 0);
    __decorate([
        property(cc.Node)
    ], UISetting.prototype, "effect", void 0);
    __decorate([
        property(cc.Node)
    ], UISetting.prototype, "sdk", void 0);
    UISetting = __decorate([
        ccclass
    ], UISetting);
    return UISetting;
}(mvcView_1.default));
exports.default = UISetting;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJU2V0dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSx5REFBb0Q7QUFDcEQsc0ZBQXFGO0FBQ3JGLHlEQUFvRDtBQUVwRCxrRUFBNkQ7QUFFdkQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQU87SUFBOUM7UUFBQSxxRUFrRUM7UUEvREcsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLFNBQUcsR0FBWSxJQUFJLENBQUM7O1FBd0RwQixpQkFBaUI7SUFDckIsQ0FBQztJQWpERywwQkFBTSxHQUFOO1FBQ0ksOEJBQThCO1FBQzlCLGtDQUFrQztRQUNsQyxJQUFJO1FBQ0osSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCx5QkFBSyxHQUFMO1FBQ0ksZ0NBQWdDO1FBQ2hDLDJEQUEyRDtRQUMzRCw2Q0FBNkM7UUFDN0MseUJBQXlCO1FBQ3pCLElBQUk7SUFDUixDQUFDO0lBRUQsMEJBQU0sR0FBTjtRQUNJLG9CQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVqQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLHlCQUFXLENBQUMsS0FBSyxDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMseUJBQVcsQ0FBQyxNQUFNLENBQUM7SUFDaEQsQ0FBQztJQUVELCtCQUFXLEdBQVg7UUFHSSxnQkFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLHlCQUFXLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdkMseUJBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLHlCQUFXLENBQUMsS0FBSyxDQUFDO0lBQzlDLENBQUM7SUFFRCxnQ0FBWSxHQUFaO1FBR0ksZ0JBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyx5QkFBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3hDLHlCQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyx5QkFBVyxDQUFDLE1BQU0sQ0FBQztJQUNoRCxDQUFDO0lBRUQsK0JBQVcsR0FBWDtRQUdJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELDZCQUFTLEdBQVQ7UUFDSSwwRUFBMEU7SUFDOUUsQ0FBQztJQTdERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNJO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRTtJQVRILFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FrRTdCO0lBQUQsZ0JBQUM7Q0FsRUQsQUFrRUMsQ0FsRXNDLGlCQUFPLEdBa0U3QztrQkFsRW9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi93ZWFrX25ldF9nYW1lL1VzZXJJbmZvXCI7XG5pbXBvcnQgRGV2aWNlIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWlzYy9EZXZpY2VcIjtcbmltcG9ydCB7IFNldHRpbmdJbmZvIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9TZXR0aW5nSW5mb1wiO1xuaW1wb3J0IG12Y1ZpZXcgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9tdmNWaWV3XCI7XG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL0NvbW1vbi9CYXNlL1BsYXllckluZm9cIjtcbmltcG9ydCBhY3Rpb25VdGlsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdXRpbHMvYWN0aW9uVXRpbFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlTZXR0aW5nIGV4dGVuZHMgbXZjVmlldyB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBtdXNpYzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBlZmZlY3Q6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2RrOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIGZhbmt1aTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBtdXNpY09mZjogY2MuTm9kZTtcbiAgICBlZmZlY3RPZmY6IGNjLk5vZGU7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIGlmKHdpbmRvdy5xcSB8fCB3aW5kb3cudHQpe1xuICAgICAgICAvLyAgICAgdGhpcy5mYW5rdWkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5tdXNpY09mZiA9IHRoaXMubXVzaWMuZ2V0Q2hpbGRCeU5hbWUoXCJvZmZcIik7XG4gICAgICAgIHRoaXMuZWZmZWN0T2ZmID0gdGhpcy5lZmZlY3QuZ2V0Q2hpbGRCeU5hbWUoXCJvZmZcIik7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8vIGlmIChQbGF5ZXJJbmZvLmlzU2hvd1NESygpKSB7XG4gICAgICAgIC8vICAgICBsZXQgeW91bGlrZSA9IHdpbmRvd1snenpzZGt1aSddLnlvdWxpa2UoNCwgMCwgLTIwMCk7XG4gICAgICAgIC8vICAgICB5b3VsaWtlICYmIHRoaXMuc2RrLmFkZENoaWxkKHlvdWxpa2UpO1xuICAgICAgICAvLyAgICAgeW91bGlrZS5zY2FsZSA9IDE7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBvblNob3coKSB7XG4gICAgICAgIGFjdGlvblV0aWwuamVsbHlKdW1wMih0aGlzLm5vZGUpO1xuXG4gICAgICAgIHRoaXMubXVzaWNPZmYuYWN0aXZlID0gIVNldHRpbmdJbmZvLm11c2ljO1xuICAgICAgICB0aGlzLmVmZmVjdE9mZi5hY3RpdmUgPSAhU2V0dGluZ0luZm8uZWZmZWN0O1xuICAgIH1cblxuICAgIGNsaWNrX211c2ljKCkge1xuXG5cbiAgICAgICAgRGV2aWNlLnNldEJHTUVuYWJsZSghU2V0dGluZ0luZm8ubXVzaWMpXG4gICAgICAgIFNldHRpbmdJbmZvLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB0aGlzLm11c2ljT2ZmLmFjdGl2ZSA9ICFTZXR0aW5nSW5mby5tdXNpYztcbiAgICB9XG5cbiAgICBjbGlja19lZmZlY3QoKSB7XG5cblxuICAgICAgICBEZXZpY2Uuc2V0U0ZYRW5hYmxlKCFTZXR0aW5nSW5mby5lZmZlY3QpXG4gICAgICAgIFNldHRpbmdJbmZvLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB0aGlzLmVmZmVjdE9mZi5hY3RpdmUgPSAhU2V0dGluZ0luZm8uZWZmZWN0O1xuICAgIH1cblxuICAgIGNsaWNrX2Nsb3NlKCkge1xuXG5cbiAgICAgICAgdm0uaGlkZSh0aGlzKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIC8vIGlmIChQbGF5ZXJJbmZvLmlzU2hvd1NESygpKSB3aW5kb3dbJ3p6c2RrdWknXS51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=