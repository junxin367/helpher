"use strict";
cc._RF.push(module, 'fdfe4adZTZIIKMg7g5itn0V', 'UIBoxAward');
// Game/Scripts/UI/UIBoxAward.ts

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
var event_1 = require("../../../framework/core/event");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var actionUtil_1 = require("../../../framework/utils/actionUtil");
var ccUtil_1 = require("../../../framework/utils/ccUtil");
var CollectionInfo_1 = require("../Common/CollectionInfo");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIBoxAward = /** @class */ (function (_super) {
    __extends(UIBoxAward, _super);
    function UIBoxAward() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.num_label = null;
        return _this;
    }
    UIBoxAward.prototype.onLoad = function () {
    };
    UIBoxAward.prototype.onShown = function () {
        actionUtil_1.default.jellyJump2(this.node);
        this.num_label.string = "x  3";
        var level;
        if (PlayerInfo_1.PlayerInfo.isPlayingDaily) {
            level = csv.daily_level.get(PlayerInfo_1.PlayerInfo.playingDailyLevel);
        }
        else {
            level = csv.level.get(PlayerInfo_1.PlayerInfo.playinglevel);
        }
        var coll = ccUtil_1.default.get(CollectionInfo_1.CollectionInfo, level.treasure);
        ToastManager_1.Toast.make("\u83B7\u5F97" + coll.name);
        ccUtil_1.default.setDisplay(this.icon, coll.thumbnail);
        PlayerInfo_1.PlayerInfo.unlockDecorate(coll.id);
    };
    UIBoxAward.prototype.click_close = function () {
        event_1.evt.emit("Game.win");
        vm.hide(this);
    };
    __decorate([
        property(cc.Sprite)
    ], UIBoxAward.prototype, "icon", void 0);
    __decorate([
        property(cc.Label)
    ], UIBoxAward.prototype, "num_label", void 0);
    UIBoxAward = __decorate([
        ccclass
    ], UIBoxAward);
    return UIBoxAward;
}(mvcView_1.default));
exports.default = UIBoxAward;

cc._RF.pop();