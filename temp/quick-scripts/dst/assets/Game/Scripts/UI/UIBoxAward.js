
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIBoxAward.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJQm94QXdhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW9EO0FBQ3BELHVEQUFvRDtBQUNwRCx3REFBdUQ7QUFDdkQsa0VBQTZEO0FBQzdELDBEQUFxRDtBQUNyRCwyREFBMEQ7QUFDMUQsbUVBQTJEO0FBRXZELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFBO0FBSXpDO0lBQXdDLDhCQUFPO0lBQS9DO1FBQUEscUVBb0NDO1FBakNHLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsZUFBUyxHQUFhLElBQUksQ0FBQzs7SUE4Qi9CLENBQUM7SUE1QkcsMkJBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCw0QkFBTyxHQUFQO1FBQ0ksb0JBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUUvQixJQUFJLEtBQUssQ0FBQztRQUNWLElBQUksdUJBQVUsQ0FBQyxjQUFjLEVBQUU7WUFDM0IsS0FBSyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLHVCQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUM3RDthQUFNO1lBQ0gsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLHVCQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbEQ7UUFDRCxJQUFJLElBQUksR0FBRyxnQkFBTSxDQUFDLEdBQUcsQ0FBQywrQkFBYyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV0RCxvQkFBSyxDQUFDLElBQUksQ0FBQyxpQkFBSyxJQUFJLENBQUMsSUFBTSxDQUFDLENBQUM7UUFDN0IsZ0JBQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFN0MsdUJBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFHRCxnQ0FBVyxHQUFYO1FBQ0ksV0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUEvQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNRO0lBTlYsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQW9DOUI7SUFBRCxpQkFBQztDQXBDRCxBQW9DQyxDQXBDdUMsaUJBQU8sR0FvQzlDO2tCQXBDb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtdmNWaWV3IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvbXZjVmlld1wiO1xyXG5pbXBvcnQgeyBldnQgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2NvcmUvZXZlbnRcIjtcclxuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuLi9Db21tb24vQmFzZS9QbGF5ZXJJbmZvXCI7XHJcbmltcG9ydCBhY3Rpb25VdGlsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdXRpbHMvYWN0aW9uVXRpbFwiO1xyXG5pbXBvcnQgY2NVdGlsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdXRpbHMvY2NVdGlsXCI7XHJcbmltcG9ydCB7IENvbGxlY3Rpb25JbmZvIH0gZnJvbSBcIi4uL0NvbW1vbi9Db2xsZWN0aW9uSW5mb1wiO1xyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvVG9hc3RNYW5hZ2VyXCI7XHJcblxyXG5sZXQgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvclxyXG5cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQm94QXdhcmQgZXh0ZW5kcyBtdmNWaWV3IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgaWNvbjogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBudW1fbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hvd24oKSB7XHJcbiAgICAgICAgYWN0aW9uVXRpbC5qZWxseUp1bXAyKHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy5udW1fbGFiZWwuc3RyaW5nID0gXCJ4ICAzXCI7XHJcblxyXG4gICAgICAgIGxldCBsZXZlbDtcclxuICAgICAgICBpZiAoUGxheWVySW5mby5pc1BsYXlpbmdEYWlseSkge1xyXG4gICAgICAgICAgICBsZXZlbCA9IGNzdi5kYWlseV9sZXZlbC5nZXQoUGxheWVySW5mby5wbGF5aW5nRGFpbHlMZXZlbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV2ZWwgPSBjc3YubGV2ZWwuZ2V0KFBsYXllckluZm8ucGxheWluZ2xldmVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvbGwgPSBjY1V0aWwuZ2V0KENvbGxlY3Rpb25JbmZvLCBsZXZlbC50cmVhc3VyZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgVG9hc3QubWFrZShg6I635b6XJHtjb2xsLm5hbWV9YCk7XHJcbiAgICAgICAgY2NVdGlsLnNldERpc3BsYXkodGhpcy5pY29uLCBjb2xsLnRodW1ibmFpbCk7XHJcblxyXG4gICAgICAgIFBsYXllckluZm8udW5sb2NrRGVjb3JhdGUoY29sbC5pZCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNsaWNrX2Nsb3NlKCkge1xyXG4gICAgICAgIGV2dC5lbWl0KFwiR2FtZS53aW5cIik7XHJcbiAgICAgICAgdm0uaGlkZSh0aGlzKTtcclxuICAgIH1cclxuXHJcbn0iXX0=