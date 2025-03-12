
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIChapter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c04a36zMD1BpKcHR/Vicg4F', 'UIChapter');
// Game/Scripts/UI/UIChapter.ts

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
var ccUtil_1 = require("../../../framework/utils/ccUtil");
var ChapterlInfo_1 = require("../Common/ChapterlInfo");
var Const_1 = require("../Common/Const");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var UserInfo_1 = require("../../../framework/extension/weak_net_game/UserInfo");
var UIConfirm_1 = require("./UIConfirm");
var LoadingScene_1 = require("../Common/Base/LoadingScene");
var BuffSystem_1 = require("../../../framework/extension/buffs/BuffSystem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIChapter = /** @class */ (function (_super) {
    __extends(UIChapter, _super);
    function UIChapter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layout = null;
        _this.scoreView = null;
        _this.datas = [];
        return _this;
        // update (dt) {}
    }
    UIChapter.prototype.onLoad = function () {
        var _this = this;
        this.register(this.layout, function (_) { return _this.datas; });
    };
    UIChapter.prototype.onShow = function () {
        var _this = this;
        this.datas.splice(0);
        csv.Chapter.values.map(function (e) {
            var data = ccUtil_1.default.get(ChapterlInfo_1.ChapterlInfo, e.id);
            if (data.id <= Const_1.default.Chapter_Unlock + 1)
                _this.datas.push(data);
        });
        this.render();
        if (PlayerInfo_1.PlayerInfo.level > 20) {
            this.scoreView.scrollToPercentVertical((1 - PlayerInfo_1.PlayerInfo.level / 10 / 12), 0.2);
        }
        else {
            this.scoreView.scrollToPercentVertical(1, 0.2);
        }
    };
    UIChapter.prototype.start = function () {
    };
    UIChapter.prototype.click_play = function () {
        var _this = this;
        if (PlayerInfo_1.PlayerInfo.labour > 0) {
            if (!UserInfo_1.UserInfo.gun_num && !UserInfo_1.UserInfo.isGetGunStart) {
                var ran = Math.random();
                if (PlayerInfo_1.PlayerInfo.level >= csv.Config.Start_Lv_Get_Gun
                    && UserInfo_1.UserInfo.gunViewDay < csv.Config.Get_Gun_Limt_Day
                    && UserInfo_1.UserInfo.gunView < csv.Config.Get_Gun_Limt
                    && ran < csv.Config.Get_Gun_Pro) {
                    vm.show("Prefabs/UI/UIGetGun", function (_) {
                        _this.confirm();
                    }, "isGetGunStart");
                    return;
                }
            }
            this.confirm();
        }
        else {
            vm.show("Prefabs/UI/UIGetLabour", function (_) {
                _this.confirm();
            }, false);
        }
    };
    UIChapter.prototype.confirm = function () {
        if (PlayerInfo_1.PlayerInfo.level >= csv.level.size) {
            if (PlayerInfo_1.PlayerInfo.dailylevel <= PlayerInfo_1.PlayerInfo.maxDailyLv) {
                vm.show("Prefabs/UI/UIConfirm", "是否前往挑战关卡？", this.onConfirm_challenge, this);
            }
            else {
                vm.show("Prefabs/UI/UIConfirm", "是否随机开始之前的关卡", this.onConfirm, this);
                return;
            }
        }
        else {
            this.flytili();
        }
    };
    UIChapter.prototype.onConfirm_challenge = function (option) {
        if (option == UIConfirm_1.ConfirmOption.Yes) {
            PlayerInfo_1.PlayerInfo.isPlayingDaily = true;
            vm.show("Prefabs/UI/UIChallengeChapter");
        }
        else {
            vm.show("Prefabs/UI/UIConfirm", "是否随机开始之前的关卡", this.onConfirm, this);
        }
    };
    UIChapter.prototype.onConfirm = function (option) {
        if (option == UIConfirm_1.ConfirmOption.Yes) {
            PlayerInfo_1.PlayerInfo.isRandomLevel = true;
            var lvrow = csv.level.get(g.randomInt(2, csv.level.size));
            this.flytili(lvrow.id);
        }
        else {
            PlayerInfo_1.PlayerInfo.isRandomLevel = false;
        }
    };
    UIChapter.prototype.flytili = function (id) {
        PlayerInfo_1.PlayerInfo.isPlayingDaily = false;
        PlayerInfo_1.PlayerInfo.labour--;
        PlayerInfo_1.PlayerInfo.save("labour");
        if (PlayerInfo_1.PlayerInfo.labour <= csv.Config.Max_Energy - 1) {
            BuffSystem_1.buffSystem.startBuff("AutoLabour", PlayerInfo_1.PlayerInfo.buff_labour || 300);
        }
        if (id) {
            PlayerInfo_1.PlayerInfo.playinglevel = id;
        }
        else {
            PlayerInfo_1.PlayerInfo.playinglevel = PlayerInfo_1.PlayerInfo.level;
        }
        LoadingScene_1.default.goto("Game");
    };
    UIChapter.prototype.clic_close = function () {
        vm.hide(this);
    };
    __decorate([
        property(cc.Layout)
    ], UIChapter.prototype, "layout", void 0);
    __decorate([
        property(cc.ScrollView)
    ], UIChapter.prototype, "scoreView", void 0);
    UIChapter = __decorate([
        ccclass
    ], UIChapter);
    return UIChapter;
}(mvcView_1.default));
exports.default = UIChapter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJQ2hhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSx5REFBb0Q7QUFFcEQsMERBQXFEO0FBR3JELHVEQUFzRDtBQUN0RCx5Q0FBb0M7QUFDcEMsd0RBQXVEO0FBRXZELGdGQUErRTtBQUMvRSx5Q0FBNEM7QUFDNUMsNERBQXVEO0FBQ3ZELDRFQUEyRTtBQUVyRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBTztJQUE5QztRQUFBLHFFQW9IQztRQWpIRyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBa0IsSUFBSSxDQUFDO1FBR2hDLFdBQUssR0FBbUIsRUFBRSxDQUFDOztRQTBHM0IsaUJBQWlCO0lBQ3JCLENBQUM7SUF6R0csMEJBQU0sR0FBTjtRQUFBLGlCQUVDO1FBREcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssRUFBVixDQUFVLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsMEJBQU0sR0FBTjtRQUFBLGlCQWNDO1FBYkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQztZQUNwQixJQUFJLElBQUksR0FBRyxnQkFBTSxDQUFDLEdBQUcsQ0FBQywyQkFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMxQyxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksZUFBSyxDQUFDLGNBQWMsR0FBRyxDQUFDO2dCQUNuQyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJ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c0MsaUJBQU8sR0FvSDdDO2tCQXBIb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgbXZjVmlldyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL212Y1ZpZXdcIjtcbmltcG9ydCB7IExldmVsSW5mbyB9IGZyb20gXCIuLi9Db21tb24vTGV2ZWxJbmZvXCI7XG5pbXBvcnQgY2NVdGlsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdXRpbHMvY2NVdGlsXCI7XG5pbXBvcnQgeyBTZXR0aW5nSW5mbyB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvU2V0dGluZ0luZm9cIjtcbmltcG9ydCBEZXZpY2UgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9taXNjL0RldmljZVwiO1xuaW1wb3J0IHsgQ2hhcHRlcmxJbmZvIH0gZnJvbSBcIi4uL0NvbW1vbi9DaGFwdGVybEluZm9cIjtcbmltcG9ydCBDb25zdCBmcm9tIFwiLi4vQ29tbW9uL0NvbnN0XCI7XG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL0NvbW1vbi9CYXNlL1BsYXllckluZm9cIjtcbmltcG9ydCBNYWluIGZyb20gXCIuLi9NYWluXCI7XG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvVXNlckluZm9cIjtcbmltcG9ydCB7IENvbmZpcm1PcHRpb24gfSBmcm9tIFwiLi9VSUNvbmZpcm1cIjtcbmltcG9ydCBMb2FkaW5nU2NlbmUgZnJvbSBcIi4uL0NvbW1vbi9CYXNlL0xvYWRpbmdTY2VuZVwiO1xuaW1wb3J0IHsgYnVmZlN5c3RlbSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL2J1ZmZzL0J1ZmZTeXN0ZW1cIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQ2hhcHRlciBleHRlbmRzIG12Y1ZpZXcge1xuXG4gICAgQHByb3BlcnR5KGNjLkxheW91dClcbiAgICBsYXlvdXQ6IGNjLkxheW91dCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcbiAgICBzY29yZVZpZXc6IGNjLlNjcm9sbFZpZXcgPSBudWxsO1xuXG5cbiAgICBkYXRhczogQ2hhcHRlcmxJbmZvW10gPSBbXTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcih0aGlzLmxheW91dCwgXyA9PiB0aGlzLmRhdGFzKTtcbiAgICB9XG5cbiAgICBvblNob3coKSB7XG4gICAgICAgIHRoaXMuZGF0YXMuc3BsaWNlKDApO1xuICAgICAgICBjc3YuQ2hhcHRlci52YWx1ZXMubWFwKGUgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBjY1V0aWwuZ2V0KENoYXB0ZXJsSW5mbywgZS5pZCk7XG4gICAgICAgICAgICBpZiAoZGF0YS5pZCA8PSBDb25zdC5DaGFwdGVyX1VubG9jayArIDEpXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhcy5wdXNoKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgaWYgKFBsYXllckluZm8ubGV2ZWwgPiAyMCkge1xuICAgICAgICAgICAgdGhpcy5zY29yZVZpZXcuc2Nyb2xsVG9QZXJjZW50VmVydGljYWwoKDEgLSBQbGF5ZXJJbmZvLmxldmVsIC8gMTAgLyAxMiksIDAuMik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjb3JlVmlldy5zY3JvbGxUb1BlcmNlbnRWZXJ0aWNhbCgxLCAwLjIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBjbGlja19wbGF5KCkge1xuICAgICAgICBpZiAoUGxheWVySW5mby5sYWJvdXIgPiAwKSB7XG4gICAgICAgICAgICBpZiAoIVVzZXJJbmZvLmd1bl9udW0gJiYgIVVzZXJJbmZvLmlzR2V0R3VuU3RhcnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmFuID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICBpZiAoUGxheWVySW5mby5sZXZlbCA+PSBjc3YuQ29uZmlnLlN0YXJ0X0x2X0dldF9HdW5cbiAgICAgICAgICAgICAgICAgICAgJiYgVXNlckluZm8uZ3VuVmlld0RheSA8IGNzdi5Db25maWcuR2V0X0d1bl9MaW10X0RheVxuICAgICAgICAgICAgICAgICAgICAmJiBVc2VySW5mby5ndW5WaWV3IDwgY3N2LkNvbmZpZy5HZXRfR3VuX0xpbXRcbiAgICAgICAgICAgICAgICAgICAgJiYgcmFuIDwgY3N2LkNvbmZpZy5HZXRfR3VuX1Byb1xuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB2bS5zaG93KFwiUHJlZmFicy9VSS9VSUdldEd1blwiLCBfID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybSgpO1xuICAgICAgICAgICAgICAgICAgICB9LCBcImlzR2V0R3VuU3RhcnRcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb25maXJtKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2bS5zaG93KFwiUHJlZmFicy9VSS9VSUdldExhYm91clwiLCBfID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm0oKTtcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29uZmlybSgpIHtcbiAgICAgICAgaWYgKFBsYXllckluZm8ubGV2ZWwgPj0gY3N2LmxldmVsLnNpemUpIHtcbiAgICAgICAgICAgIGlmIChQbGF5ZXJJbmZvLmRhaWx5bGV2ZWwgPD0gUGxheWVySW5mby5tYXhEYWlseUx2KSB7XG4gICAgICAgICAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlDb25maXJtXCIsIFwi5piv5ZCm5YmN5b6A5oyR5oiY5YWz5Y2h77yfXCIsIHRoaXMub25Db25maXJtX2NoYWxsZW5nZSwgdGhpcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJQ29uZmlybVwiLCBcIuaYr+WQpumaj+acuuW8gOWni+S5i+WJjeeahOWFs+WNoVwiLCB0aGlzLm9uQ29uZmlybSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZseXRpbGkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29uZmlybV9jaGFsbGVuZ2Uob3B0aW9uOiBDb25maXJtT3B0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb24gPT0gQ29uZmlybU9wdGlvbi5ZZXMpIHtcbiAgICAgICAgICAgIFBsYXllckluZm8uaXNQbGF5aW5nRGFpbHkgPSB0cnVlO1xuICAgICAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlDaGFsbGVuZ2VDaGFwdGVyXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlDb25maXJtXCIsIFwi5piv5ZCm6ZqP5py65byA5aeL5LmL5YmN55qE5YWz5Y2hXCIsIHRoaXMub25Db25maXJtLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29uZmlybShvcHRpb246IENvbmZpcm1PcHRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbiA9PSBDb25maXJtT3B0aW9uLlllcykge1xuICAgICAgICAgICAgUGxheWVySW5mby5pc1JhbmRvbUxldmVsID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBsdnJvdyA9IGNzdi5sZXZlbC5nZXQoZy5yYW5kb21JbnQoMiwgY3N2LmxldmVsLnNpemUpKVxuICAgICAgICAgICAgdGhpcy5mbHl0aWxpKGx2cm93LmlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFBsYXllckluZm8uaXNSYW5kb21MZXZlbCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmx5dGlsaShpZD8pIHtcbiAgICAgICAgUGxheWVySW5mby5pc1BsYXlpbmdEYWlseSA9IGZhbHNlO1xuICAgICAgICBQbGF5ZXJJbmZvLmxhYm91ci0tO1xuICAgICAgICBQbGF5ZXJJbmZvLnNhdmUoXCJsYWJvdXJcIik7XG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLmxhYm91ciA8PSBjc3YuQ29uZmlnLk1heF9FbmVyZ3kgLSAxKSB7XG4gICAgICAgICAgICBidWZmU3lzdGVtLnN0YXJ0QnVmZihcIkF1dG9MYWJvdXJcIiwgUGxheWVySW5mby5idWZmX2xhYm91ciB8fCAzMDApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpZCkge1xuICAgICAgICAgICAgUGxheWVySW5mby5wbGF5aW5nbGV2ZWwgPSBpZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFBsYXllckluZm8ucGxheWluZ2xldmVsID0gUGxheWVySW5mby5sZXZlbDtcbiAgICAgICAgfVxuICAgICAgICBMb2FkaW5nU2NlbmUuZ290byhcIkdhbWVcIik7XG4gICAgfVxuXG4gICAgY2xpY19jbG9zZSgpIHtcblxuXG4gICAgICAgIHZtLmhpZGUodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==