"use strict";
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