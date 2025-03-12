"use strict";
cc._RF.push(module, 'e8322y95RJEnaGi+kL+OU8h', 'HintButton');
// Game/Scripts/level/HintButton.ts

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
var IconSov_1 = require("../../../framework/extension/weak_net_game/IconSov");
var event_1 = require("../../../framework/core/event");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var WeakNetGame_1 = require("../../../framework/extension/weak_net_game/WeakNetGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
// const Hint_Level_Table = {
//     [13]: 'r0954sbep28',
//     [17]: 'e0954mp3sjt',
//     [18]: 'u0954mcymrb',
// }
var COS_URL = "https://video-1256898079.cos.ap-guangzhou.myqcloud.com/";
var HintButton = /** @class */ (function (_super) {
    __extends(HintButton, _super);
    function HintButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hintAnim = null;
        _this.isInHint = false;
        return _this;
    }
    HintButton.prototype.onLoad = function () {
        this.registerSubViews(IconSov_1.default);
        this.onClick(this.node, this.click_hint);
        event_1.evt.on("Game.onLevelLoaded", this.onLevelChanged, this);
        // evt.on("Game.hintUser", this.onHintUser, this)
    };
    HintButton.prototype.onDestroy = function () {
        event_1.evt.off(this);
    };
    HintButton.prototype.start = function () {
    };
    HintButton.prototype.onHintUser = function () {
        // if (this.isInHint) return;
        // if (window.tt || window.qq) { return }
        // let lv_tb;
        // if (PlayerInfo.isPlayingDaily) {
        //     lv_tb = csv.daily_level.get(PlayerInfo.playingDailyLevel);
        // } else {
        //     lv_tb = csv.level.get(PlayerInfo.playinglevel);
        // }
        // if (lv_tb == null) return;
        // let hint_video = lv_tb.hint_video;
        // if (hint_video != "") {
        //     this.hintAnim && this.hintAnim.play("hint")
        //     this.isInHint = true
        // }
    };
    HintButton.prototype.hint = function () {
        // let lv_tb = csv.level.get(PlayerInfo.playinglevel);
        // let lv_tb;
        // if (PlayerInfo.isPlayingDaily) {
        //     lv_tb = csv.daily_level.get(PlayerInfo.playingDailyLevel);
        // } else {
        //     lv_tb = csv.level.get(PlayerInfo.playinglevel);
        // }
        // let hint_video = lv_tb.hint_video;
        // let hint_video2 = COS_URL + lv_tb.hint_video2;
        // if (hint_video) {
        //     Platform.playVideo(hint_video, hint_video2).then(v => {
        //         this.isInHint = false;
        //         this.hintAnim.stop("hint");
        //     });
        // }
    };
    HintButton.prototype.click_hint = function () {
        WeakNetGame_1.default.doChoice("SOV_Level_Hint", this.hint, this);
    };
    HintButton.prototype.onLevelChanged = function (lv) {
        if (window.tt || window.qq) {
            this.node.active = false;
            return;
        }
        var lv_tb;
        if (PlayerInfo_1.PlayerInfo.isPlayingDaily) {
            lv_tb = csv.daily_level.get(lv);
        }
        else {
            lv_tb = csv.level.get(lv);
        }
        var hint_video = lv_tb.hint_video;
        if (hint_video) {
            this.node.active = true;
        }
        else {
            this.node.active = false;
        }
        this.render();
    };
    HintButton.prototype.onShown = function () {
        // this.render
    };
    __decorate([
        property(cc.Animation)
    ], HintButton.prototype, "hintAnim", void 0);
    HintButton = __decorate([
        ccclass
    ], HintButton);
    return HintButton;
}(mvcView_1.default));
exports.default = HintButton;

cc._RF.pop();