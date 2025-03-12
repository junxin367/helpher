"use strict";
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