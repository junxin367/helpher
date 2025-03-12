
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIGetGift.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f1b12WMwzFI2JdyDYdFUmT8', 'UIGetGift');
// Game/Scripts/UI/UIGetGift.ts

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
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var mvcView_1 = require("../../../framework/ui/mvcView");
var actionUtil_1 = require("../../../framework/utils/actionUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIGetGift = /** @class */ (function (_super) {
    __extends(UIGetGift, _super);
    function UIGetGift() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.num_label = null;
        _this._num = 0;
        _this._reward = 0;
        return _this;
    }
    UIGetGift.prototype.onLoad = function () {
    };
    UIGetGift.prototype.onShown = function (num) {
        actionUtil_1.default.jellyJump2(this.node);
        var data = csv.star.get(num + 12);
        this.num_label.string = "恭喜你获得" + data.reward + "颗星星";
        if (PlayerInfo_1.PlayerInfo.challenge_gift.indexOf(num) != -1) {
            ToastManager_1.Toast.make("已领取过该礼包");
            vm.hide(this);
            return;
        }
        this._num = num;
        this._reward = data.reward;
    };
    UIGetGift.prototype.click_close = function () {
        PlayerInfo_1.PlayerInfo.challenge_gift.push(this._num);
        PlayerInfo_1.PlayerInfo.star += this._reward;
        PlayerInfo_1.PlayerInfo.save();
        vm.hide(this);
    };
    __decorate([
        property(cc.Label)
    ], UIGetGift.prototype, "num_label", void 0);
    UIGetGift = __decorate([
        ccclass
    ], UIGetGift);
    return UIGetGift;
}(mvcView_1.default));
exports.default = UIGetGift;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJR2V0R2lmdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBdUQ7QUFDdkQsbUVBQTJEO0FBQzNELHlEQUFvRDtBQUNwRCxrRUFBNkQ7QUFFekQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUE7QUFFekM7SUFBdUMsNkJBQU87SUFBOUM7UUFBQSxxRUFrQ0M7UUEvQkcsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGFBQU8sR0FBVyxDQUFDLENBQUM7O0lBNEJ4QixDQUFDO0lBekJHLDBCQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQsMkJBQU8sR0FBUCxVQUFRLEdBQUc7UUFDUCxvQkFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN0RCxJQUFJLHVCQUFVLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUM5QyxvQkFBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN0QixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2QsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFHRCwrQkFBVyxHQUFYO1FBQ0ksdUJBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyx1QkFBVSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2hDLHVCQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEIsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBN0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ1E7SUFIVixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBa0M3QjtJQUFELGdCQUFDO0NBbENELEFBa0NDLENBbENzQyxpQkFBTyxHQWtDN0M7a0JBbENvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuLi9Db21tb24vQmFzZS9QbGF5ZXJJbmZvXCI7XG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvVG9hc3RNYW5hZ2VyXCI7XG5pbXBvcnQgbXZjVmlldyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL212Y1ZpZXdcIjtcbmltcG9ydCBhY3Rpb25VdGlsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdXRpbHMvYWN0aW9uVXRpbFwiO1xuXG5sZXQgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvclxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJR2V0R2lmdCBleHRlbmRzIG12Y1ZpZXcge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIG51bV9sYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgX251bTogbnVtYmVyID0gMDtcbiAgICBfcmV3YXJkOiBudW1iZXIgPSAwO1xuXG5cbiAgICBvbkxvYWQoKSB7XG5cbiAgICB9XG5cbiAgICBvblNob3duKG51bSkge1xuICAgICAgICBhY3Rpb25VdGlsLmplbGx5SnVtcDIodGhpcy5ub2RlKTtcbiAgICAgICAgbGV0IGRhdGEgPSBjc3Yuc3Rhci5nZXQobnVtICsgMTIpO1xuICAgICAgICB0aGlzLm51bV9sYWJlbC5zdHJpbmcgPSBcIuaBreWWnOS9oOiOt+W+l1wiICsgZGF0YS5yZXdhcmQgKyBcIumil+aYn+aYn1wiO1xuICAgICAgICBpZiAoUGxheWVySW5mby5jaGFsbGVuZ2VfZ2lmdC5pbmRleE9mKG51bSkgIT0gLTEpIHtcbiAgICAgICAgICAgIFRvYXN0Lm1ha2UoXCLlt7Lpooblj5bov4for6XnpLzljIVcIik7XG4gICAgICAgICAgICB2bS5oaWRlKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX251bSA9IG51bTtcbiAgICAgICAgdGhpcy5fcmV3YXJkID0gZGF0YS5yZXdhcmQ7XG4gICAgfVxuXG5cbiAgICBjbGlja19jbG9zZSgpIHtcbiAgICAgICAgUGxheWVySW5mby5jaGFsbGVuZ2VfZ2lmdC5wdXNoKHRoaXMuX251bSk7XG4gICAgICAgIFBsYXllckluZm8uc3RhciArPSB0aGlzLl9yZXdhcmQ7XG4gICAgICAgIFBsYXllckluZm8uc2F2ZSgpO1xuICAgICAgICB2bS5oaWRlKHRoaXMpO1xuICAgIH1cblxufSJdfQ==