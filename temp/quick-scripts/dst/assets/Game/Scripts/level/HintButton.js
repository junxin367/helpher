
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/level/HintButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcbGV2ZWxcXEhpbnRCdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW9EO0FBQ3BELDhFQUF5RTtBQUN6RSx1REFBb0Q7QUFFcEQsd0RBQXVEO0FBQ3ZELHNGQUFpRjtBQUU3RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQTtBQUV6Qyw2QkFBNkI7QUFDN0IsMkJBQTJCO0FBQzNCLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0IsSUFBSTtBQUVKLElBQU0sT0FBTyxHQUFHLHlEQUF5RCxDQUFDO0FBRTFFO0lBQXdDLDhCQUFPO0lBQS9DO1FBQUEscUVBd0ZDO1FBckZHLGNBQVEsR0FBaUIsSUFBSSxDQUFBO1FBaUI3QixjQUFRLEdBQUcsS0FBSyxDQUFDOztJQW9FckIsQ0FBQztJQW5GRywyQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFPLENBQUMsQ0FBQTtRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pDLFdBQUcsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN2RCxpREFBaUQ7SUFDckQsQ0FBQztJQUVELDhCQUFTLEdBQVQ7UUFDSSxXQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2pCLENBQUM7SUFFRCwwQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUlELCtCQUFVLEdBQVY7UUFDSSw2QkFBNkI7UUFDN0IseUNBQXlDO1FBQ3pDLGFBQWE7UUFDYixtQ0FBbUM7UUFDbkMsaUVBQWlFO1FBQ2pFLFdBQVc7UUFDWCxzREFBc0Q7UUFDdEQsSUFBSTtRQUNKLDZCQUE2QjtRQUM3QixxQ0FBcUM7UUFDckMsMEJBQTBCO1FBQzFCLGtEQUFrRDtRQUNsRCwyQkFBMkI7UUFDM0IsSUFBSTtJQUNSLENBQUM7SUFFRCx5QkFBSSxHQUFKO1FBQ0ksc0RBQXNEO1FBQ3RELGFBQWE7UUFDYixtQ0FBbUM7UUFDbkMsaUVBQWlFO1FBQ2pFLFdBQVc7UUFDWCxzREFBc0Q7UUFDdEQsSUFBSTtRQUNKLHFDQUFxQztRQUNyQyxpREFBaUQ7UUFDakQsb0JBQW9CO1FBQ3BCLDhEQUE4RDtRQUM5RCxpQ0FBaUM7UUFDakMsc0NBQXNDO1FBQ3RDLFVBQVU7UUFDVixJQUFJO0lBQ1IsQ0FBQztJQUVELCtCQUFVLEdBQVY7UUFDSSxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxtQ0FBYyxHQUFkLFVBQWUsRUFBRTtRQUNiLElBQUksTUFBTSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN6QixPQUFPO1NBQ1Y7UUFDRCxJQUFJLEtBQUssQ0FBQztRQUNWLElBQUksdUJBQVUsQ0FBQyxjQUFjLEVBQUU7WUFDM0IsS0FBSyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ25DO2FBQU07WUFDSCxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDN0I7UUFFRCxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQ2xDLElBQUksVUFBVSxFQUFFO1lBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQzNCO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUdELDRCQUFPLEdBQVA7UUFDSSxjQUFjO0lBRWxCLENBQUM7SUFuRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDTTtJQUhaLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F3RjlCO0lBQUQsaUJBQUM7Q0F4RkQsQUF3RkMsQ0F4RnVDLGlCQUFPLEdBd0Y5QztrQkF4Rm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXZjVmlldyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL212Y1ZpZXdcIjtcclxuaW1wb3J0IEljb25Tb3YgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9JY29uU292XCI7XHJcbmltcG9ydCB7IGV2dCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvY29yZS9ldmVudFwiO1xyXG5pbXBvcnQgUGxhdGZvcm0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vUGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuLi9Db21tb24vQmFzZS9QbGF5ZXJJbmZvXCI7XHJcbmltcG9ydCBXZWFrTmV0R2FtZSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi93ZWFrX25ldF9nYW1lL1dlYWtOZXRHYW1lXCI7XHJcblxyXG5sZXQgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvclxyXG5cclxuLy8gY29uc3QgSGludF9MZXZlbF9UYWJsZSA9IHtcclxuLy8gICAgIFsxM106ICdyMDk1NHNiZXAyOCcsXHJcbi8vICAgICBbMTddOiAnZTA5NTRtcDNzanQnLFxyXG4vLyAgICAgWzE4XTogJ3UwOTU0bWN5bXJiJyxcclxuLy8gfVxyXG5cclxuY29uc3QgQ09TX1VSTCA9IFwiaHR0cHM6Ly92aWRlby0xMjU2ODk4MDc5LmNvcy5hcC1ndWFuZ3pob3UubXlxY2xvdWQuY29tL1wiO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIaW50QnV0dG9uIGV4dGVuZHMgbXZjVmlldyB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcclxuICAgIGhpbnRBbmltOiBjYy5BbmltYXRpb24gPSBudWxsXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJTdWJWaWV3cyhJY29uU292KVxyXG4gICAgICAgIHRoaXMub25DbGljayh0aGlzLm5vZGUsIHRoaXMuY2xpY2tfaGludCk7XHJcbiAgICAgICAgZXZ0Lm9uKFwiR2FtZS5vbkxldmVsTG9hZGVkXCIsIHRoaXMub25MZXZlbENoYW5nZWQsIHRoaXMpXHJcbiAgICAgICAgLy8gZXZ0Lm9uKFwiR2FtZS5oaW50VXNlclwiLCB0aGlzLm9uSGludFVzZXIsIHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGV2dC5vZmYodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaXNJbkhpbnQgPSBmYWxzZTtcclxuXHJcbiAgICBvbkhpbnRVc2VyKCkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmlzSW5IaW50KSByZXR1cm47XHJcbiAgICAgICAgLy8gaWYgKHdpbmRvdy50dCB8fCB3aW5kb3cucXEpIHsgcmV0dXJuIH1cclxuICAgICAgICAvLyBsZXQgbHZfdGI7XHJcbiAgICAgICAgLy8gaWYgKFBsYXllckluZm8uaXNQbGF5aW5nRGFpbHkpIHtcclxuICAgICAgICAvLyAgICAgbHZfdGIgPSBjc3YuZGFpbHlfbGV2ZWwuZ2V0KFBsYXllckluZm8ucGxheWluZ0RhaWx5TGV2ZWwpO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGx2X3RiID0gY3N2LmxldmVsLmdldChQbGF5ZXJJbmZvLnBsYXlpbmdsZXZlbCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmIChsdl90YiA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgLy8gbGV0IGhpbnRfdmlkZW8gPSBsdl90Yi5oaW50X3ZpZGVvO1xyXG4gICAgICAgIC8vIGlmIChoaW50X3ZpZGVvICE9IFwiXCIpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5oaW50QW5pbSAmJiB0aGlzLmhpbnRBbmltLnBsYXkoXCJoaW50XCIpXHJcbiAgICAgICAgLy8gICAgIHRoaXMuaXNJbkhpbnQgPSB0cnVlXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIGhpbnQoKSB7XHJcbiAgICAgICAgLy8gbGV0IGx2X3RiID0gY3N2LmxldmVsLmdldChQbGF5ZXJJbmZvLnBsYXlpbmdsZXZlbCk7XHJcbiAgICAgICAgLy8gbGV0IGx2X3RiO1xyXG4gICAgICAgIC8vIGlmIChQbGF5ZXJJbmZvLmlzUGxheWluZ0RhaWx5KSB7XHJcbiAgICAgICAgLy8gICAgIGx2X3RiID0gY3N2LmRhaWx5X2xldmVsLmdldChQbGF5ZXJJbmZvLnBsYXlpbmdEYWlseUxldmVsKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBsdl90YiA9IGNzdi5sZXZlbC5nZXQoUGxheWVySW5mby5wbGF5aW5nbGV2ZWwpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBsZXQgaGludF92aWRlbyA9IGx2X3RiLmhpbnRfdmlkZW87XHJcbiAgICAgICAgLy8gbGV0IGhpbnRfdmlkZW8yID0gQ09TX1VSTCArIGx2X3RiLmhpbnRfdmlkZW8yO1xyXG4gICAgICAgIC8vIGlmIChoaW50X3ZpZGVvKSB7XHJcbiAgICAgICAgLy8gICAgIFBsYXRmb3JtLnBsYXlWaWRlbyhoaW50X3ZpZGVvLCBoaW50X3ZpZGVvMikudGhlbih2ID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuaXNJbkhpbnQgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuaGludEFuaW0uc3RvcChcImhpbnRcIik7XHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGlja19oaW50KCkge1xyXG4gICAgICAgIFdlYWtOZXRHYW1lLmRvQ2hvaWNlKFwiU09WX0xldmVsX0hpbnRcIiwgdGhpcy5oaW50LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxldmVsQ2hhbmdlZChsdikge1xyXG4gICAgICAgIGlmICh3aW5kb3cudHQgfHwgd2luZG93LnFxKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbHZfdGI7XHJcbiAgICAgICAgaWYgKFBsYXllckluZm8uaXNQbGF5aW5nRGFpbHkpIHtcclxuICAgICAgICAgICAgbHZfdGIgPSBjc3YuZGFpbHlfbGV2ZWwuZ2V0KGx2KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsdl90YiA9IGNzdi5sZXZlbC5nZXQobHYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGhpbnRfdmlkZW8gPSBsdl90Yi5oaW50X3ZpZGVvO1xyXG4gICAgICAgIGlmIChoaW50X3ZpZGVvKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25TaG93bigpIHtcclxuICAgICAgICAvLyB0aGlzLnJlbmRlclxyXG5cclxuICAgIH1cclxuXHJcbn0iXX0=