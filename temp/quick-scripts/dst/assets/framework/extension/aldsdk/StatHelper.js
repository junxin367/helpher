
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/aldsdk/StatHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ffea2zBSx5P+ouhn0URQW2m', 'StatHelper');
// framework/extension/aldsdk/StatHelper.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelEndEventType = exports.EventType = void 0;
var Net_1 = require("../../misc/Net");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EventType;
(function (EventType) {
    EventType[EventType["paySuccess"] = 0] = "paySuccess";
    EventType[EventType["payFail"] = 1] = "payFail";
    EventType[EventType["tools"] = 2] = "tools";
    EventType[EventType["revive"] = 3] = "revive";
    EventType[EventType["award"] = 4] = "award";
})(EventType = exports.EventType || (exports.EventType = {}));
var LevelEndEventType;
(function (LevelEndEventType) {
    LevelEndEventType[LevelEndEventType["Exit"] = 0] = "Exit";
    LevelEndEventType[LevelEndEventType["Win"] = 1] = "Win";
    LevelEndEventType[LevelEndEventType["Lose"] = 2] = "Lose";
})(LevelEndEventType = exports.LevelEndEventType || (exports.LevelEndEventType = {}));
var StatHepler = /** @class */ (function () {
    function StatHepler() {
    }
    StatHepler_1 = StatHepler;
    StatHepler.init = function (userId) {
        this._userId = userId;
    };
    StatHepler.startLevel = function (levelId, lv_desc) {
        this.levelId = levelId;
        this.current_lv_desc = lv_desc;
        //默认为退出，其它 状态 会设置 成功或者 失败,不设置 就是退出
        StatHepler_1.level_end_event = LevelEndEventType.Exit;
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            wx.aldStage.onStart({
                stageId: levelId,
                stageName: this.current_lv_desc,
                userId: this._userId
            });
        }
        this.isInLevel = true;
    };
    StatHepler.setLevelEndEvent = function (evt) {
        StatHepler_1.level_end_event = evt;
    };
    StatHepler.userAction = function (eventName, k, v) {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            if (k) {
                var param = {};
                param[k] = v;
                wx.aldSendEvent(eventName, param);
            }
            else {
                var param = {};
                param["userId"] = this._userId;
                wx.aldSendEvent(eventName);
            }
        }
    };
    StatHepler.sendPath = function (name, title, val) {
        // if(cc.sys.platform == cc.sys.WECHAT_GAME){
        // window['zzsdkui'].aliEvent(name, {
        //     [title]: val || 1
        // });
        // return;
        // }
        // let appid = "";
        // if(window.tt){
        //     appid = TTGameConfig.tt_appid;
        // }else if(window.qq){
        //     appid = QQGameConfig.qq_appid;
        // }else if(CC_WECHATGAME){
        //     appid = GameConfig.wx_appid;
        // }    
        // var sendData = {
        //     xsl_uuid: UserInfo.userId,
        //     xsl_appid: appid,
        //     xsl_et_action: name,
        //     xsl_et_label: title,
        //     xsl_et_value: val || 1
        // };
        // this.client.httpGet("https://r.d1fm.com/r.gif", sendData);
        if (cc.sys.os == cc.sys.OS_IOS) {
            // jsb.reflection.callStaticMethod("GDTSdk", "applicationLogAction:count:", name,title + val);
        }
    };
    StatHepler.doLevelEvent = function (eventType, itemName, itemId, itemCount, itemMoney) {
        if (itemCount === void 0) { itemCount = 1; }
        if (itemMoney === void 0) { itemMoney = "1"; }
        if (!this.isInLevel)
            return;
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            wx.aldStage.onRunning({
                stageId: this.levelId,
                stageName: this.current_lv_desc,
                userId: this._userId,
                event: EventType[eventType],
                params: {
                    itemName: itemName, itemId: itemId, itemCount: itemCount, itemMoney: itemMoney
                }
            });
        }
    };
    StatHepler.endLevel = function () {
        //统计
        //------------------------------------------------------------------------------//
        var desc = "";
        var ald_event = '';
        switch (StatHepler_1.level_end_event) {
            case LevelEndEventType.Win:
                desc = "完成关卡";
                ald_event = 'complete';
                break;
            case LevelEndEventType.Lose:
                desc = "关卡失败";
                ald_event = "fail";
                break;
            case LevelEndEventType.Exit:
                desc = "中途退出";
                ald_event = "fail";
                return;
            // break;
        }
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            wx.aldStage.onEnd({
                stageId: this.levelId,
                stageName: this.current_lv_desc,
                userId: this._userId,
                event: ald_event,
                params: {
                    desc: desc
                }
            });
        }
        this.isInLevel = false;
        //------------------------------------------------------------------------------//
    };
    var StatHepler_1;
    StatHepler.level_end_event = LevelEndEventType.Exit;
    StatHepler.current_lv_desc = "";
    StatHepler.isInLevel = false;
    StatHepler._userId = '';
    StatHepler.levelId = '0';
    StatHepler.client = new Net_1.default();
    StatHepler = StatHepler_1 = __decorate([
        ccclass
    ], StatHepler);
    return StatHepler;
}());
exports.default = StatHepler;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXGFsZHNka1xcU3RhdEhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUM7QUFNM0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBWSxTQU1YO0FBTkQsV0FBWSxTQUFTO0lBQ2pCLHFEQUFVLENBQUE7SUFDViwrQ0FBTyxDQUFBO0lBQ1AsMkNBQUssQ0FBQTtJQUNMLDZDQUFNLENBQUE7SUFDTiwyQ0FBSyxDQUFBO0FBQ1QsQ0FBQyxFQU5XLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBTXBCO0FBRUQsSUFBWSxpQkFJWDtBQUpELFdBQVksaUJBQWlCO0lBQ3pCLHlEQUFRLENBQUE7SUFDUix1REFBTyxDQUFBO0lBQ1AseURBQVEsQ0FBQTtBQUNaLENBQUMsRUFKVyxpQkFBaUIsR0FBakIseUJBQWlCLEtBQWpCLHlCQUFpQixRQUk1QjtBQUtEO0lBQUE7SUFnSUEsQ0FBQzttQkFoSW9CLFVBQVU7SUFVcEIsZUFBSSxHQUFYLFVBQVksTUFBTTtRQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFBO0lBQ3pCLENBQUM7SUFFTSxxQkFBVSxHQUFqQixVQUFrQixPQUFPLEVBQUUsT0FBTztRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQTtRQUM5QixrQ0FBa0M7UUFDbEMsWUFBVSxDQUFDLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7UUFDcEQsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtZQUN2QyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFDaEIsT0FBTyxF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QWlCLENBQUMsSUFBSTtnQkFDdkIsSUFBSSxHQUFHLE1BQU0sQ0FBQTtnQkFDYixTQUFTLEdBQUcsTUFBTSxDQUFBO2dCQUNsQixNQUFNO1lBQ1YsS0FBSyxpQkFBaUIsQ0FBQyxJQUFJO2dCQUN2QixJQUFJLEdBQUcsTUFBTSxDQUFBO2dCQUNiLFNBQVMsR0FBRyxNQUFNLENBQUE7Z0JBQ2xCLE9BQU87WUFDWCxTQUFTO1NBQ1o7UUFDRCxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFO1lBQ3ZDLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUNkLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztnQkFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxlQUFlO2dCQUMvQixNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0JBQ3BCLEtBQUssRUFBRSxTQUFTO2dCQUNoQixNQUFNLEVBQUU7b0JBQ0osSUFBSSxNQUFBO2lCQUNQO2FBQ0osQ0FBQyxDQUFDO1NBQ047UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixrRkFBa0Y7SUFDdEYsQ0FBQzs7SUE3SE0sMEJBQWUsR0FBc0IsaUJBQWlCLENBQUMsSUFBSSxDQUFBO0lBQzNELDBCQUFlLEdBQVcsRUFBRSxDQUFBO0lBQzVCLG9CQUFTLEdBQUcsS0FBSyxDQUFDO0lBR2xCLGtCQUFPLEdBQVcsRUFBRSxDQUFDO0lBQ3JCLGtCQUFPLEdBQVcsR0FBRyxDQUFDO0lBQ3RCLGlCQUFNLEdBQUcsSUFBSSxhQUFHLEVBQUUsQ0FBQTtJQVJSLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FnSTlCO0lBQUQsaUJBQUM7Q0FoSUQsQUFnSUMsSUFBQTtrQkFoSW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV0IGZyb20gXCIuLi8uLi9taXNjL05ldFwiO1xyXG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi93ZWFrX25ldF9nYW1lL1VzZXJJbmZvXCI7XHJcbmltcG9ydCB7IFRUR2FtZUNvbmZpZyB9IGZyb20gXCIuLi90dHNkay9UVEdhbWVDb25maWdzXCI7XHJcbmltcG9ydCB7IFFRR2FtZUNvbmZpZyB9IGZyb20gXCIuLi9xcS9RUUdhbWVDb25maWdzXCI7XHJcbmltcG9ydCB7IEdhbWVDb25maWcgfSBmcm9tIFwiLi4vd3hzZGsvR2FtZUNvbmZpZ3NcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5leHBvcnQgZW51bSBFdmVudFR5cGUge1xyXG4gICAgcGF5U3VjY2VzcyxcclxuICAgIHBheUZhaWwsXHJcbiAgICB0b29scyxcclxuICAgIHJldml2ZSxcclxuICAgIGF3YXJkLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBMZXZlbEVuZEV2ZW50VHlwZSB7XHJcbiAgICBFeGl0ID0gMCxcclxuICAgIFdpbiA9IDEsXHJcbiAgICBMb3NlID0gMlxyXG59XHJcblxyXG5cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRIZXBsZXIge1xyXG4gICAgc3RhdGljIGxldmVsX2VuZF9ldmVudDogTGV2ZWxFbmRFdmVudFR5cGUgPSBMZXZlbEVuZEV2ZW50VHlwZS5FeGl0XHJcbiAgICBzdGF0aWMgY3VycmVudF9sdl9kZXNjOiBzdHJpbmcgPSBcIlwiXHJcbiAgICBzdGF0aWMgaXNJbkxldmVsID0gZmFsc2U7XHJcblxyXG5cclxuICAgIHN0YXRpYyBfdXNlcklkOiBzdHJpbmcgPSAnJztcclxuICAgIHN0YXRpYyBsZXZlbElkOiBzdHJpbmcgPSAnMCc7XHJcbiAgICBzdGF0aWMgY2xpZW50ID0gbmV3IE5ldCgpXHJcblxyXG4gICAgc3RhdGljIGluaXQodXNlcklkKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlcklkID0gdXNlcklkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHN0YXJ0TGV2ZWwobGV2ZWxJZCwgbHZfZGVzYykge1xyXG4gICAgICAgIHRoaXMubGV2ZWxJZCA9IGxldmVsSWQ7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50X2x2X2Rlc2MgPSBsdl9kZXNjXHJcbiAgICAgICAgLy/pu5jorqTkuLrpgIDlh7rvvIzlhbblroMg54q25oCBIOS8muiuvue9riDmiJDlip/miJbogIUg5aSx6LSlLOS4jeiuvue9riDlsLHmmK/pgIDlh7pcclxuICAgICAgICBTdGF0SGVwbGVyLmxldmVsX2VuZF9ldmVudCA9IExldmVsRW5kRXZlbnRUeXBlLkV4aXQ7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgd3guYWxkU3RhZ2Uub25TdGFydCh7XHJcbiAgICAgICAgICAgICAgICBzdGFnZUlkOiBsZXZlbElkLFxyXG4gICAgICAgICAgICAgICAgc3RhZ2VOYW1lOiB0aGlzLmN1cnJlbnRfbHZfZGVzYyxcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogdGhpcy5fdXNlcklkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzSW5MZXZlbCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldExldmVsRW5kRXZlbnQoZXZ0OiBMZXZlbEVuZEV2ZW50VHlwZSkge1xyXG4gICAgICAgIFN0YXRIZXBsZXIubGV2ZWxfZW5kX2V2ZW50ID0gZXZ0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1c2VyQWN0aW9uKGV2ZW50TmFtZSwgaz8sIHY/KSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgaWYgKGspIHtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJhbSA9IHt9XHJcbiAgICAgICAgICAgICAgICBwYXJhbVtrXSA9IHY7XHJcbiAgICAgICAgICAgICAgICB3eC5hbGRTZW5kRXZlbnQoZXZlbnROYW1lLCBwYXJhbSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJhbSA9IHt9XHJcbiAgICAgICAgICAgICAgICBwYXJhbVtcInVzZXJJZFwiXSA9IHRoaXMuX3VzZXJJZDtcclxuICAgICAgICAgICAgICAgIHd4LmFsZFNlbmRFdmVudChldmVudE5hbWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZW5kUGF0aChuYW1lLCB0aXRsZT8sIHZhbD8pIHtcclxuICAgICAgICAvLyBpZihjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLldFQ0hBVF9HQU1FKXtcclxuICAgICAgICAvLyB3aW5kb3dbJ3p6c2RrdWknXS5hbGlFdmVudChuYW1lLCB7XHJcbiAgICAgICAgLy8gICAgIFt0aXRsZV06IHZhbCB8fCAxXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gbGV0IGFwcGlkID0gXCJcIjtcclxuICAgICAgICAvLyBpZih3aW5kb3cudHQpe1xyXG4gICAgICAgIC8vICAgICBhcHBpZCA9IFRUR2FtZUNvbmZpZy50dF9hcHBpZDtcclxuICAgICAgICAvLyB9ZWxzZSBpZih3aW5kb3cucXEpe1xyXG4gICAgICAgIC8vICAgICBhcHBpZCA9IFFRR2FtZUNvbmZpZy5xcV9hcHBpZDtcclxuICAgICAgICAvLyB9ZWxzZSBpZihDQ19XRUNIQVRHQU1FKXtcclxuICAgICAgICAvLyAgICAgYXBwaWQgPSBHYW1lQ29uZmlnLnd4X2FwcGlkO1xyXG4gICAgICAgIC8vIH0gICAgXHJcbiAgICAgICAgLy8gdmFyIHNlbmREYXRhID0ge1xyXG4gICAgICAgIC8vICAgICB4c2xfdXVpZDogVXNlckluZm8udXNlcklkLFxyXG4gICAgICAgIC8vICAgICB4c2xfYXBwaWQ6IGFwcGlkLFxyXG4gICAgICAgIC8vICAgICB4c2xfZXRfYWN0aW9uOiBuYW1lLFxyXG4gICAgICAgIC8vICAgICB4c2xfZXRfbGFiZWw6IHRpdGxlLFxyXG4gICAgICAgIC8vICAgICB4c2xfZXRfdmFsdWU6IHZhbCB8fCAxXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICAvLyB0aGlzLmNsaWVudC5odHRwR2V0KFwiaHR0cHM6Ly9yLmQxZm0uY29tL3IuZ2lmXCIsIHNlbmREYXRhKTtcclxuICAgICAgICBpZihjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUyl7XHJcbiAgICAgICAgICAgIC8vIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJHRFRTZGtcIiwgXCJhcHBsaWNhdGlvbkxvZ0FjdGlvbjpjb3VudDpcIiwgbmFtZSx0aXRsZSArIHZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc3RhdGljIGRvTGV2ZWxFdmVudChldmVudFR5cGU6IEV2ZW50VHlwZSwgaXRlbU5hbWUsIGl0ZW1JZCwgaXRlbUNvdW50ID0gMSwgaXRlbU1vbmV5ID0gXCIxXCIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNJbkxldmVsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgd3guYWxkU3RhZ2Uub25SdW5uaW5nKHtcclxuICAgICAgICAgICAgICAgIHN0YWdlSWQ6IHRoaXMubGV2ZWxJZCxcclxuICAgICAgICAgICAgICAgIHN0YWdlTmFtZTogdGhpcy5jdXJyZW50X2x2X2Rlc2MsXHJcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHRoaXMuX3VzZXJJZCxcclxuICAgICAgICAgICAgICAgIGV2ZW50OiBFdmVudFR5cGVbZXZlbnRUeXBlXSxcclxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1OYW1lLCBpdGVtSWQsIGl0ZW1Db3VudCwgaXRlbU1vbmV5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlbmRMZXZlbCgpIHtcclxuICAgICAgICAvL+e7n+iuoVxyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuICAgICAgICBsZXQgZGVzYyA9IFwiXCJcclxuICAgICAgICBsZXQgYWxkX2V2ZW50ID0gJydcclxuICAgICAgICBzd2l0Y2ggKFN0YXRIZXBsZXIubGV2ZWxfZW5kX2V2ZW50KSB7XHJcbiAgICAgICAgICAgIGNhc2UgTGV2ZWxFbmRFdmVudFR5cGUuV2luOlxyXG4gICAgICAgICAgICAgICAgZGVzYyA9IFwi5a6M5oiQ5YWz5Y2hXCJcclxuICAgICAgICAgICAgICAgIGFsZF9ldmVudCA9ICdjb21wbGV0ZSdcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExldmVsRW5kRXZlbnRUeXBlLkxvc2U6XHJcbiAgICAgICAgICAgICAgICBkZXNjID0gXCLlhbPljaHlpLHotKVcIlxyXG4gICAgICAgICAgICAgICAgYWxkX2V2ZW50ID0gXCJmYWlsXCJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExldmVsRW5kRXZlbnRUeXBlLkV4aXQ6XHJcbiAgICAgICAgICAgICAgICBkZXNjID0gXCLkuK3pgJTpgIDlh7pcIlxyXG4gICAgICAgICAgICAgICAgYWxkX2V2ZW50ID0gXCJmYWlsXCJcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIHd4LmFsZFN0YWdlLm9uRW5kKHtcclxuICAgICAgICAgICAgICAgIHN0YWdlSWQ6IHRoaXMubGV2ZWxJZCxcclxuICAgICAgICAgICAgICAgIHN0YWdlTmFtZTogdGhpcy5jdXJyZW50X2x2X2Rlc2MsXHJcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHRoaXMuX3VzZXJJZCxcclxuICAgICAgICAgICAgICAgIGV2ZW50OiBhbGRfZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBkZXNjXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzSW5MZXZlbCA9IGZhbHNlO1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuICAgIH1cclxuXHJcbn0iXX0=