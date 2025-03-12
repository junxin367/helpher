"use strict";
cc._RF.push(module, '4e3f0RaDhxIubqRxrKSav/2', 'AutoLabour');
// Game/Scripts/level/AutoLabour.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var Main_1 = require("../Main");
var Buff_1 = require("../../../framework/extension/buffs/Buff");
var BuffSystem_1 = require("../../../framework/extension/buffs/BuffSystem");
var AutoLabour = /** @class */ (function (_super) {
    __extends(AutoLabour, _super);
    function AutoLabour() {
        return _super.call(this) || this;
    }
    AutoLabour.prototype.onTimeLeftChanged = function () {
    };
    AutoLabour.prototype.onEnabled = function () {
        PlayerInfo_1.PlayerInfo.buff_labour = this.timeLeft;
        if (Main_1.default.instance.daojishi) {
            Main_1.default.instance.daojishi.active = true;
        }
    };
    AutoLabour.prototype.onDisabled = function () {
        PlayerInfo_1.PlayerInfo.labour += 1;
        if (PlayerInfo_1.PlayerInfo.labour < csv.Config.Max_Energy) {
            BuffSystem_1.buffSystem.startBuff("AutoLabour", csv.Config.LabourRecoveryTime * 60);
        }
        else {
            if (Main_1.default.instance.daojishi) {
                Main_1.default.instance.daojishi.active = false;
            }
        }
        PlayerInfo_1.PlayerInfo.save("labour");
    };
    AutoLabour.prototype.step = function () {
        PlayerInfo_1.PlayerInfo.buff_labour = this.timeLeft;
        if (Main_1.default.instance.label_timeLeft) {
            Main_1.default.instance.label_timeLeft.string = new Date(PlayerInfo_1.PlayerInfo.buff_labour * 1000).format("mm:ss");
        }
    };
    return AutoLabour;
}(Buff_1.default));
exports.default = AutoLabour;

cc._RF.pop();