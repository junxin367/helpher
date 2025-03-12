
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UILevelItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4032fjUf9lFooZXP/BDN2G4', 'UILevelItem');
// Game/Scripts/UI/UILevelItem.ts

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
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var LoadingScene_1 = require("../Common/Base/LoadingScene");
var LevelInfo_1 = require("../Common/LevelInfo");
var ccUtil_1 = require("../../../framework/utils/ccUtil");
var DailyLevelInfo_1 = require("../Common/DailyLevelInfo");
var WeakNetGame_1 = require("../../../framework/extension/weak_net_game/WeakNetGame");
var Platform_1 = require("../../../framework/extension/Platform");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UILevelItem = /** @class */ (function (_super) {
    __extends(UILevelItem, _super);
    function UILevelItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dangqian = null;
        _this.level = null;
        _this.lock = null;
        _this.jiaobiao = null;
        //当前进入类型的关卡数
        _this.lv = 0;
        return _this;
    }
    UILevelItem.prototype.onLoad = function () {
    };
    UILevelItem.prototype.showjiaobiao = function () {
        var data = this.getData();
        if (PlayerInfo_1.PlayerInfo.isPlayingDaily) {
            var lv1 = ccUtil_1.default.get(DailyLevelInfo_1.DailyLevelInfo, data.id);
            if (data.id <= PlayerInfo_1.PlayerInfo.dailylevel) {
                return false;
            }
            else {
                if (PlayerInfo_1.PlayerInfo.isNewLevel(lv1.day)) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        else {
            var lv2 = ccUtil_1.default.get(LevelInfo_1.LevelInfo, data.id);
            if (data.id <= PlayerInfo_1.PlayerInfo.level) {
                return false;
            }
            else {
                if (lv2.isNew) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    };
    UILevelItem.prototype.start = function () {
        var _this = this;
        this.lv = PlayerInfo_1.PlayerInfo.getCurrentLevel();
        var data = this.getData();
        this.level.string = data.id.toString();
        if (data.id == this.lv) {
            this.dangqian.active = true;
        }
        if (data.id <= this.lv) {
            this.lock.active = false;
        }
        this.onVisible(this.jiaobiao, function (_) { return _this.showjiaobiao(); });
        this.render();
    };
    UILevelItem.prototype.click_startGame = function () {
        var data = this.getData();
        if (this.lv < data.id) {
            ToastManager_1.Toast.make("未解锁");
            return;
        }
        if (PlayerInfo_1.PlayerInfo.labour > 0) {
            PlayerInfo_1.PlayerInfo.labour--;
            if (PlayerInfo_1.PlayerInfo.isPlayingDaily) {
                PlayerInfo_1.PlayerInfo.playingDailyLevel = data.id;
                if ((csv.Config.Challenge_Level_Show_AD == PlayerInfo_1.PlayerInfo.playingDailyLevel) || (((PlayerInfo_1.PlayerInfo.playingDailyLevel - csv.Config.Challenge_Level_Show_AD) % csv.Config.Challenge_Level_Show_AD_Interval) == 0) && (PlayerInfo_1.PlayerInfo.playingDailyLevel > csv.Config.Challenge_Level_Show_AD)) {
                    WeakNetGame_1.default.doChoice("SOV_ShowAD", function (_) {
                        PlayerInfo_1.PlayerInfo.save();
                        LoadingScene_1.default.goto("Game");
                    }, this);
                }
                else if ((csv.Config.Challenge_Level_Show_AD_Skip == PlayerInfo_1.PlayerInfo.playingDailyLevel) || (((PlayerInfo_1.PlayerInfo.playingDailyLevel - csv.Config.Challenge_Level_Show_AD_Skip) % csv.Config.Challenge_Level_Show_AD_Skip_Interval) == 0) && (PlayerInfo_1.PlayerInfo.playingDailyLevel > csv.Config.Challenge_Level_Show_AD_Skip)) {
                    Platform_1.default.showInterstitial(function (_) {
                        PlayerInfo_1.PlayerInfo.save();
                        LoadingScene_1.default.goto("Game");
                    }, this);
                }
                else {
                    PlayerInfo_1.PlayerInfo.save();
                    LoadingScene_1.default.goto("Game");
                }
            }
            else {
                PlayerInfo_1.PlayerInfo.playinglevel = data.id;
                PlayerInfo_1.PlayerInfo.save();
                LoadingScene_1.default.goto("Game");
            }
        }
        else {
            // Toast.make("体力不足");
            vm.show("Prefabs/UI/UIGetLabour", function (_) {
                PlayerInfo_1.PlayerInfo.labour--;
                if (PlayerInfo_1.PlayerInfo.isPlayingDaily) {
                    PlayerInfo_1.PlayerInfo.playingDailyLevel = data.id;
                }
                else {
                    PlayerInfo_1.PlayerInfo.playinglevel = data.id;
                }
                PlayerInfo_1.PlayerInfo.save();
                LoadingScene_1.default.goto("Game");
            }, false);
        }
        // if(PlayerInfo.isNew)
        //     StatHepler.userAction("(新玩家)进入关卡",PlayerInfo.playinglevel)
    };
    __decorate([
        property(cc.Node)
    ], UILevelItem.prototype, "dangqian", void 0);
    __decorate([
        property(cc.Label)
    ], UILevelItem.prototype, "level", void 0);
    __decorate([
        property(cc.Node)
    ], UILevelItem.prototype, "lock", void 0);
    __decorate([
        property(cc.Node)
    ], UILevelItem.prototype, "jiaobiao", void 0);
    UILevelItem = __decorate([
        ccclass
    ], UILevelItem);
    return UILevelItem;
}(mvcView_1.default));
exports.default = UILevelItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJTGV2ZWxJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUFvRDtBQUNwRCx3REFBdUQ7QUFDdkQsbUVBQTJEO0FBQzNELDREQUF1RDtBQUN2RCxpREFBZ0Q7QUFHaEQsMERBQXFEO0FBQ3JELDJEQUEwRDtBQUMxRCxzRkFBaUY7QUFDakYsa0VBQTZEO0FBRXZELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFPO0lBQWhEO1FBQUEscUVBMkhDO1FBeEhHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBSXJCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsWUFBWTtRQUNaLFFBQUUsR0FBVyxDQUFDLENBQUM7O0lBMkduQixDQUFDO0lBekdHLDRCQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQsa0NBQVksR0FBWjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQWUsQ0FBQztRQUV2QyxJQUFJLHVCQUFVLENBQUMsY0FBYyxFQUFFO1lBQzNCLElBQUksR0FBRyxHQUFHLGdCQUFNLENBQUMsR0FBRyxDQUFDLCtCQUFjLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSx1QkFBVSxDQUFDLFVBQVUsRUFBRTtnQkFDbEMsT0FBTyxLQUFLLENBQUM7YUFDaEI7aUJBQU07Z0JBQ0gsSUFBSSx1QkFBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ2hDLE9BQU8sSUFBSSxDQUFDO2lCQUNmO3FCQUFNO29CQUNILE9BQU8sS0FBSyxDQUFDO2lC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ekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDSTtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNHO0lBSXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ087SUFiUixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBMkgvQjtJQUFELGtCQUFDO0NBM0hELEFBMkhDLENBM0h3QyxpQkFBTyxHQTJIL0M7a0JBM0hvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG12Y1ZpZXcgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9tdmNWaWV3XCI7XG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL0NvbW1vbi9CYXNlL1BsYXllckluZm9cIjtcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9Ub2FzdE1hbmFnZXJcIjtcbmltcG9ydCBMb2FkaW5nU2NlbmUgZnJvbSBcIi4uL0NvbW1vbi9CYXNlL0xvYWRpbmdTY2VuZVwiO1xuaW1wb3J0IHsgTGV2ZWxJbmZvIH0gZnJvbSBcIi4uL0NvbW1vbi9MZXZlbEluZm9cIjtcbmltcG9ydCB7IFNldHRpbmdJbmZvIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9TZXR0aW5nSW5mb1wiO1xuaW1wb3J0IERldmljZSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21pc2MvRGV2aWNlXCI7XG5pbXBvcnQgY2NVdGlsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdXRpbHMvY2NVdGlsXCI7XG5pbXBvcnQgeyBEYWlseUxldmVsSW5mbyB9IGZyb20gXCIuLi9Db21tb24vRGFpbHlMZXZlbEluZm9cIjtcbmltcG9ydCBXZWFrTmV0R2FtZSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi93ZWFrX25ldF9nYW1lL1dlYWtOZXRHYW1lXCI7XG5pbXBvcnQgUGxhdGZvcm0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vUGxhdGZvcm1cIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJTGV2ZWxJdGVtIGV4dGVuZHMgbXZjVmlldyB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBkYW5ncWlhbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGV2ZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxvY2s6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBqaWFvYmlhbzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAvL+W9k+WJjei/m+WFpeexu+Wei+eahOWFs+WNoeaVsFxuICAgIGx2OiBudW1iZXIgPSAwO1xuXG4gICAgb25Mb2FkKCkge1xuXG4gICAgfVxuXG4gICAgc2hvd2ppYW9iaWFvKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpIGFzIExldmVsSW5mbztcblxuICAgICAgICBpZiAoUGxheWVySW5mby5pc1BsYXlpbmdEYWlseSkge1xuICAgICAgICAgICAgbGV0IGx2MSA9IGNjVXRpbC5nZXQoRGFpbHlMZXZlbEluZm8sIGRhdGEuaWQpO1xuICAgICAgICAgICAgaWYgKGRhdGEuaWQgPD0gUGxheWVySW5mby5kYWlseWxldmVsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoUGxheWVySW5mby5pc05ld0xldmVsKGx2MS5kYXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBsdjIgPSBjY1V0aWwuZ2V0KExldmVsSW5mbywgZGF0YS5pZCk7XG4gICAgICAgICAgICBpZiAoZGF0YS5pZCA8PSBQbGF5ZXJJbmZvLmxldmVsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobHYyLmlzTmV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5sdiA9IFBsYXllckluZm8uZ2V0Q3VycmVudExldmVsKCk7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXREYXRhKCkgYXMgTGV2ZWxJbmZvO1xuICAgICAgICB0aGlzLmxldmVsLnN0cmluZyA9IGRhdGEuaWQudG9TdHJpbmcoKTtcblxuICAgICAgICBpZiAoZGF0YS5pZCA9PSB0aGlzLmx2KSB7XG4gICAgICAgICAgICB0aGlzLmRhbmdxaWFuLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEuaWQgPD0gdGhpcy5sdikge1xuICAgICAgICAgICAgdGhpcy5sb2NrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25WaXNpYmxlKHRoaXMuamlhb2JpYW8sIF8gPT4gdGhpcy5zaG93amlhb2JpYW8oKSlcbiAgICAgICAgdGhpcy5yZW5kZXIoKVxuICAgIH1cblxuICAgIGNsaWNrX3N0YXJ0R2FtZSgpIHtcblxuXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXREYXRhKCkgYXMgTGV2ZWxJbmZvO1xuICAgICAgICBpZiAodGhpcy5sdiA8IGRhdGEuaWQpIHtcbiAgICAgICAgICAgIFRvYXN0Lm1ha2UoXCLmnKrop6PplIFcIilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoUGxheWVySW5mby5sYWJvdXIgPiAwKSB7XG4gICAgICAgICAgICBQbGF5ZXJJbmZvLmxhYm91ci0tO1xuICAgICAgICAgICAgaWYgKFBsYXllckluZm8uaXNQbGF5aW5nRGFpbHkpIHtcbiAgICAgICAgICAgICAgICBQbGF5ZXJJbmZvLnBsYXlpbmdEYWlseUxldmVsID0gZGF0YS5pZDtcblxuICAgICAgICAgICAgICAgIGlmICgoY3N2LkNvbmZpZy5DaGFsbGVuZ2VfTGV2ZWxfU2hvd19BRCA9PSBQbGF5ZXJJbmZvLnBsYXlpbmdEYWlseUxldmVsKSB8fCAoKChQbGF5ZXJJbmZvLnBsYXlpbmdEYWlseUxldmVsIC0gY3N2LkNvbmZpZy5DaGFsbGVuZ2VfTGV2ZWxfU2hvd19BRCkgJSBjc3YuQ29uZmlnLkNoYWxsZW5nZV9MZXZlbF9TaG93X0FEX0ludGVydmFsKSA9PSAwKSAmJiAoUGxheWVySW5mby5wbGF5aW5nRGFpbHlMZXZlbCA+IGNzdi5Db25maWcuQ2hhbGxlbmdlX0xldmVsX1Nob3dfQUQpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgV2Vha05ldEdhbWUuZG9DaG9pY2UoXCJTT1ZfU2hvd0FEXCIsIF8gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgUGxheWVySW5mby5zYXZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nU2NlbmUuZ290byhcIkdhbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKChjc3YuQ29uZmlnLkNoYWxsZW5nZV9MZXZlbF9TaG93X0FEX1NraXAgPT0gUGxheWVySW5mby5wbGF5aW5nRGFpbHlMZXZlbCkgfHwgKCgoUGxheWVySW5mby5wbGF5aW5nRGFpbHlMZXZlbCAtIGNzdi5Db25maWcuQ2hhbGxlbmdlX0xldmVsX1Nob3dfQURfU2tpcCkgJSBjc3YuQ29uZmlnLkNoYWxsZW5nZV9MZXZlbF9TaG93X0FEX1NraXBfSW50ZXJ2YWwpID09IDApICYmIChQbGF5ZXJJbmZvLnBsYXlpbmdEYWlseUxldmVsID4gY3N2LkNvbmZpZy5DaGFsbGVuZ2VfTGV2ZWxfU2hvd19BRF9Ta2lwKSkge1xuICAgICAgICAgICAgICAgICAgICBQbGF0Zm9ybS5zaG93SW50ZXJzdGl0aWFsKF8gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgUGxheWVySW5mby5zYXZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nU2NlbmUuZ290byhcIkdhbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIH0sIHRoaXMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBQbGF5ZXJJbmZvLnNhdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgTG9hZGluZ1NjZW5lLmdvdG8oXCJHYW1lXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgUGxheWVySW5mby5wbGF5aW5nbGV2ZWwgPSBkYXRhLmlkO1xuICAgICAgICAgICAgICAgIFBsYXllckluZm8uc2F2ZSgpO1xuICAgICAgICAgICAgICAgIExvYWRpbmdTY2VuZS5nb3RvKFwiR2FtZVwiKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBUb2FzdC5tYWtlKFwi5L2T5Yqb5LiN6LazXCIpO1xuICAgICAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlHZXRMYWJvdXJcIiwgXyA9PiB7XG4gICAgICAgICAgICAgICAgUGxheWVySW5mby5sYWJvdXItLTtcbiAgICAgICAgICAgICAgICBpZiAoUGxheWVySW5mby5pc1BsYXlpbmdEYWlseSkge1xuICAgICAgICAgICAgICAgICAgICBQbGF5ZXJJbmZvLnBsYXlpbmdEYWlseUxldmVsID0gZGF0YS5pZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBQbGF5ZXJJbmZvLnBsYXlpbmdsZXZlbCA9IGRhdGEuaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFBsYXllckluZm8uc2F2ZSgpO1xuICAgICAgICAgICAgICAgIExvYWRpbmdTY2VuZS5nb3RvKFwiR2FtZVwiKTtcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmKFBsYXllckluZm8uaXNOZXcpXG4gICAgICAgIC8vICAgICBTdGF0SGVwbGVyLnVzZXJBY3Rpb24oXCIo5paw546p5a62Kei/m+WFpeWFs+WNoVwiLFBsYXllckluZm8ucGxheWluZ2xldmVsKVxuICAgIH1cblxuXG59XG4iXX0=