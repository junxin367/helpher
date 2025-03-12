
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIProgressRewardGet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'edf6fREfQxFr7fFDq1yfXUK', 'UIProgressRewardGet');
// Game/Scripts/UI/UIProgressRewardGet.ts

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
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var ccUtil_1 = require("../../../framework/utils/ccUtil");
var UserInfo_1 = require("../../../framework/extension/weak_net_game/UserInfo");
var WeakNetGame_1 = require("../../../framework/extension/weak_net_game/WeakNetGame");
var actionUtil_1 = require("../../../framework/utils/actionUtil");
var event_1 = require("../../../framework/core/event");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIProgressRewardGet = /** @class */ (function (_super) {
    __extends(UIProgressRewardGet, _super);
    function UIProgressRewardGet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = null;
        _this.title2 = null;
        _this.icon = null;
        _this.videoIcon = null;
        _this.node_no = null;
        _this.type = '';
        _this.skin_id = 0;
        return _this;
    }
    UIProgressRewardGet.prototype.onLoad = function () {
    };
    UIProgressRewardGet.prototype.start = function () {
    };
    UIProgressRewardGet.prototype.onShown = function (type, cfg) {
        event_1.evt.emit("UIProgressRewardGet.show");
        actionUtil_1.default.jellyJump2(this.node);
        this.type = type;
        this.videoIcon.active = false;
        this.node_no.active = false;
        if (type == "Energy") {
            this.title.string = '体力礼包';
            ccUtil_1.default.setDisplay(this.icon, 'Img/icon/tili');
            this.title2.string = '体力x3';
        }
        else if (type == 'Skin') {
            //随机皮肤
            this.skin_id = PlayerInfo_1.PlayerInfo.randomVideoSkin();
            this.title.string = '新皮肤';
            this.videoIcon.active = true;
            var skin = csv.Skin.get(this.skin_id);
            this.title2.string = skin.name;
            ccUtil_1.default.setDisplay(this.icon, "Img/skin/thumbnail/" + skin.type + "/" + skin.thumbnail);
            this.unschedule(this.show_no);
            this.scheduleOnce(this.show_no, 1);
        }
        else if (type == 'Prop') {
            // Toast.make("获得道具大礼包")
            this.title.string = '道具礼包';
            ccUtil_1.default.setDisplay(this.icon, 'Img/icon/xianding');
            this.title2.string = '三种道具数量 +1';
        }
    };
    UIProgressRewardGet.prototype.show_no = function () {
        this.node_no.active = true;
    };
    UIProgressRewardGet.prototype.unlockSkin = function () {
        if (this.skin_id != 0) {
            var skin = csv.Skin.get(this.skin_id);
            ToastManager_1.Toast.make("获得皮肤 : " + skin.name);
            PlayerInfo_1.PlayerInfo.unlockSkin(this.skin_id);
        }
    };
    UIProgressRewardGet.prototype.click_get = function () {
        if (this.type == 'Skin') {
            WeakNetGame_1.default.doChoice("SOV_ProgressReward_Skin", this.unlockSkin, this);
        }
        else if (this.type == 'Energy') {
            ToastManager_1.Toast.make("获得体力x3");
            PlayerInfo_1.PlayerInfo.labour += 3;
            PlayerInfo_1.PlayerInfo.save("labour");
        }
        else if (this.type == 'Prop') {
            ToastManager_1.Toast.make("获得道具大礼包 ");
            UserInfo_1.UserInfo.gun_num++;
            UserInfo_1.UserInfo.snowball_num++;
            UserInfo_1.UserInfo.magnet_num++;
            UserInfo_1.UserInfo.save();
        }
        vm.hide(this);
    };
    UIProgressRewardGet.prototype.click_no = function () {
        vm.hide(this);
    };
    __decorate([
        property(cc.Label)
    ], UIProgressRewardGet.prototype, "title", void 0);
    __decorate([
        property(cc.Label)
    ], UIProgressRewardGet.prototype, "title2", void 0);
    __decorate([
        property(cc.Sprite)
    ], UIProgressRewardGet.prototype, "icon", void 0);
    __decorate([
        property(cc.Node)
    ], UIProgressRewardGet.prototype, "videoIcon", void 0);
    __decorate([
        property(cc.Node)
    ], UIProgressRewardGet.prototype, "node_no", void 0);
    UIProgressRewardGet = __decorate([
        ccclass
    ], UIProgressRewardGet);
    return UIProgressRewardGet;
}(cc.Component));
exports.default = UIProgressRewardGet;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJUHJvZ3Jlc3NSZXdhcmRHZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQXVEO0FBQ3ZELG1FQUEyRDtBQUMzRCwwREFBcUQ7QUFDckQsZ0ZBQStFO0FBRS9FLHNGQUFpRjtBQUNqRixrRUFBNkQ7QUFDN0QsdURBQW9EO0FBRWhELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFBO0FBRXpDO0lBQWlELHVDQUFZO0lBQTdEO1FBQUEscUVBaUdDO1FBOUZHLFdBQUssR0FBYSxJQUFJLENBQUE7UUFHdEIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBSXZCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixVQUFJLEdBQVcsRUFBRSxDQUFDO1FBRWxCLGFBQU8sR0FBVyxDQUFDLENBQUM7O0lBNEV4QixDQUFDO0lBMUVHLG9DQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQsbUNBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxxQ0FBTyxHQUFQLFVBQVEsSUFBSSxFQUFFLEdBQUc7UUFDYixXQUFHLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUE7UUFDcEMsb0JBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDM0IsSUFBSSxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxH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c0NBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQTNGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNHO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dURBQ0s7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDRztJQUl2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBEQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ007SUFoQlAsbUJBQW1CO1FBRHZDLE9BQU87T0FDYSxtQkFBbUIsQ0FpR3ZDO0lBQUQsMEJBQUM7Q0FqR0QsQUFpR0MsQ0FqR2dELEVBQUUsQ0FBQyxTQUFTLEdBaUc1RDtrQkFqR29CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi4vQ29tbW9uL0Jhc2UvUGxheWVySW5mb1wiO1xyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvVG9hc3RNYW5hZ2VyXCI7XHJcbmltcG9ydCBjY1V0aWwgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91dGlscy9jY1V0aWxcIjtcclxuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi93ZWFrX25ldF9nYW1lL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi9QbGF0Zm9ybVwiO1xyXG5pbXBvcnQgV2Vha05ldEdhbWUgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9XZWFrTmV0R2FtZVwiO1xyXG5pbXBvcnQgYWN0aW9uVXRpbCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3V0aWxzL2FjdGlvblV0aWxcIjtcclxuaW1wb3J0IHsgZXZ0IH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9jb3JlL2V2ZW50XCI7XHJcblxyXG5sZXQgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvclxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVByb2dyZXNzUmV3YXJkR2V0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB0aXRsZTogY2MuTGFiZWwgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGl0bGUyOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGljb246IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdmlkZW9JY29uOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5vZGVfbm86IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICB0eXBlOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBza2luX2lkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hvd24odHlwZSwgY2ZnKSB7XHJcbiAgICAgICAgZXZ0LmVtaXQoXCJVSVByb2dyZXNzUmV3YXJkR2V0LnNob3dcIilcclxuICAgICAgICBhY3Rpb25VdGlsLmplbGx5SnVtcDIodGhpcy5ub2RlKTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMudmlkZW9JY29uLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZV9uby5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIGlmICh0eXBlID09IFwiRW5lcmd5XCIpIHtcclxuICAgICAgICAgICAgdGhpcy50aXRsZS5zdHJpbmcgPSAn5L2T5Yqb56S85YyFJ1xyXG4gICAgICAgICAgICBjY1V0aWwuc2V0RGlzcGxheSh0aGlzLmljb24sICdJbWcvaWNvbi90aWxpJylcclxuICAgICAgICAgICAgdGhpcy50aXRsZTIuc3RyaW5nID0gJ+S9k+WKm3gzJztcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJ1NraW4nKSB7XHJcbiAgICAgICAgICAgIC8v6ZqP5py655qu6IKkXHJcbiAgICAgICAgICAgIHRoaXMuc2tpbl9pZCA9IFBsYXllckluZm8ucmFuZG9tVmlkZW9Ta2luKClcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUuc3RyaW5nID0gJ+aWsOearuiCpCdcclxuICAgICAgICAgICAgdGhpcy52aWRlb0ljb24uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IHNraW4gPSBjc3YuU2tpbi5nZXQodGhpcy5za2luX2lkKVxyXG4gICAgICAgICAgICB0aGlzLnRpdGxlMi5zdHJpbmcgPSBza2luLm5hbWU7XHJcbiAgICAgICAgICAgIGNjVXRpbC5zZXREaXNwbGF5KHRoaXMuaWNvbiwgXCJJbWcvc2tpbi90aHVtYm5haWwvXCIgKyBza2luLnR5cGUgKyBcIi9cIiArIHNraW4udGh1bWJuYWlsKVxyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5zaG93X25vKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLnNob3dfbm8sIDEpXHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSAnUHJvcCcpIHtcclxuICAgICAgICAgICAgLy8gVG9hc3QubWFrZShcIuiOt+W+l+mBk+WFt+Wkp+ekvOWMhVwiKVxyXG4gICAgICAgICAgICB0aGlzLnRpdGxlLnN0cmluZyA9ICfpgZPlhbfnpLzljIUnXHJcbiAgICAgICAgICAgIGNjVXRpbC5zZXREaXNwbGF5KHRoaXMuaWNvbiwgJ0ltZy9pY29uL3hpYW5kaW5nJylcclxuICAgICAgICAgICAgdGhpcy50aXRsZTIuc3RyaW5nID0gJ+S4ieenjemBk+WFt+aVsOmHjyArMSc7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd19ubygpIHtcclxuICAgICAgICB0aGlzLm5vZGVfbm8uYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB1bmxvY2tTa2luKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNraW5faWQgIT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgc2tpbiA9IGNzdi5Ta2luLmdldCh0aGlzLnNraW5faWQpO1xyXG4gICAgICAgICAgICBUb2FzdC5tYWtlKFwi6I635b6X55qu6IKkIDogXCIgKyBza2luLm5hbWUpXHJcbiAgICAgICAgICAgIFBsYXllckluZm8udW5sb2NrU2tpbih0aGlzLnNraW5faWQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrX2dldCgpIHtcclxuICAgICAgICBpZiAodGhpcy50eXBlID09ICdTa2luJykge1xyXG4gICAgICAgICAgICBXZWFrTmV0R2FtZS5kb0Nob2ljZShcIlNPVl9Qcm9ncmVzc1Jld2FyZF9Ta2luXCIsIHRoaXMudW5sb2NrU2tpbiwgdGhpcylcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSAnRW5lcmd5Jykge1xyXG4gICAgICAgICAgICBUb2FzdC5tYWtlKFwi6I635b6X5L2T5YqbeDNcIilcclxuICAgICAgICAgICAgUGxheWVySW5mby5sYWJvdXIgKz0gMztcclxuICAgICAgICAgICAgUGxheWVySW5mby5zYXZlKFwibGFib3VyXCIpXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gJ1Byb3AnKSB7XHJcbiAgICAgICAgICAgIFRvYXN0Lm1ha2UoXCLojrflvpfpgZPlhbflpKfnpLzljIUgXCIpO1xyXG4gICAgICAgICAgICBVc2VySW5mby5ndW5fbnVtKys7XHJcbiAgICAgICAgICAgIFVzZXJJbmZvLnNub3diYWxsX251bSsrO1xyXG4gICAgICAgICAgICBVc2VySW5mby5tYWduZXRfbnVtKys7XHJcbiAgICAgICAgICAgIFVzZXJJbmZvLnNhdmUoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB2bS5oaWRlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrX25vKCkge1xyXG4gICAgICAgIHZtLmhpZGUodGhpcyk7XHJcbiAgICB9XHJcblxyXG5cclxufSAiXX0=