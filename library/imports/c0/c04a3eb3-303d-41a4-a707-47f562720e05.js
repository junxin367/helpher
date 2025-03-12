"use strict";
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