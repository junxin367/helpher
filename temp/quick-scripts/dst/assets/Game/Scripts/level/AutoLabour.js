
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/level/AutoLabour.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcbGV2ZWxcXEF1dG9MYWJvdXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQXVEO0FBQ3ZELGdDQUEyQjtBQUMzQixnRUFBMkQ7QUFDM0QsNEVBQTJFO0FBRzNFO0lBQXdDLDhCQUFJO0lBR3hDO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBSkQsc0NBQWlCLEdBQWpCO0lBQ0EsQ0FBQztJQUtELDhCQUFTLEdBQVQ7UUFDSSx1QkFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZDLElBQUksY0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDeEIsY0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUN4QztJQUNMLENBQUM7SUFFRCwrQkFBVSxHQUFWO1FBQ0ksdUJBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksdUJBQVUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDM0MsdUJBQVUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDMUU7YUFDSTtZQUNELElBQUksY0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3hCLGNBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDekM7U0FDSjtRQUNELHVCQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCx5QkFBSSxHQUFKO1FBQ0ksdUJBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QyxJQUFJLGNBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFO1lBQzlCLGNBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyx1QkFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDakc7SUFDTCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQWpDQSxBQWlDQyxDQWpDdUMsY0FBSSxHQWlDM0MiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL0NvbW1vbi9CYXNlL1BsYXllckluZm9cIjtcbmltcG9ydCBNYWluIGZyb20gXCIuLi9NYWluXCI7XG5pbXBvcnQgQnVmZiBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi9idWZmcy9CdWZmXCI7XG5pbXBvcnQgeyBidWZmU3lzdGVtIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vYnVmZnMvQnVmZlN5c3RlbVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9MYWJvdXIgZXh0ZW5kcyBCdWZmIHtcbiAgICBvblRpbWVMZWZ0Q2hhbmdlZCgpIHtcbiAgICB9XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25FbmFibGVkKCkge1xuICAgICAgICBQbGF5ZXJJbmZvLmJ1ZmZfbGFib3VyID0gdGhpcy50aW1lTGVmdDtcbiAgICAgICAgaWYgKE1haW4uaW5zdGFuY2UuZGFvamlzaGkpIHtcbiAgICAgICAgICAgIE1haW4uaW5zdGFuY2UuZGFvamlzaGkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRGlzYWJsZWQoKSB7XG4gICAgICAgIFBsYXllckluZm8ubGFib3VyICs9IDE7XG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLmxhYm91ciA8IGNzdi5Db25maWcuTWF4X0VuZXJneSkge1xuICAgICAgICAgICAgYnVmZlN5c3RlbS5zdGFydEJ1ZmYoXCJBdXRvTGFib3VyXCIsIGNzdi5Db25maWcuTGFib3VyUmVjb3ZlcnlUaW1lICogNjApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKE1haW4uaW5zdGFuY2UuZGFvamlzaGkpIHtcbiAgICAgICAgICAgICAgICBNYWluLmluc3RhbmNlLmRhb2ppc2hpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFBsYXllckluZm8uc2F2ZShcImxhYm91clwiKTtcbiAgICB9XG5cbiAgICBzdGVwKCkge1xuICAgICAgICBQbGF5ZXJJbmZvLmJ1ZmZfbGFib3VyID0gdGhpcy50aW1lTGVmdDtcbiAgICAgICAgaWYgKE1haW4uaW5zdGFuY2UubGFiZWxfdGltZUxlZnQpIHtcbiAgICAgICAgICAgIE1haW4uaW5zdGFuY2UubGFiZWxfdGltZUxlZnQuc3RyaW5nID0gbmV3IERhdGUoUGxheWVySW5mby5idWZmX2xhYm91ciAqIDEwMDApLmZvcm1hdChcIm1tOnNzXCIpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==