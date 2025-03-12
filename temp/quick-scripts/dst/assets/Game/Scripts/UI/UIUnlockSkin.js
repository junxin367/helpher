
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIUnlockSkin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '82fd0OPCltNVZ97it2ny6YA', 'UIUnlockSkin');
// Game/Scripts/UI/UIUnlockSkin.ts

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
var UIPersonSkin_1 = require("./UIPersonSkin");
var event_1 = require("../../../framework/core/event");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIUnlockSkin = /** @class */ (function (_super) {
    __extends(UIUnlockSkin, _super);
    function UIUnlockSkin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.shouzhi = null;
        _this.data = null;
        return _this;
    }
    UIUnlockSkin.prototype.onLoad = function () {
        var _this = this;
        this.register(this.icon, function (_) { return "Img/skin/thumbnail/" + _this.data.type + "/" + _this.data.thumbnail; });
    };
    UIUnlockSkin.prototype.onShow = function (id) {
        this.data = csv.Skin.get(id);
        this.render();
        // 第一次引导解锁 穿戴皮肤
        // if (UserInfo.skin_guide === 0 && id === 20) {
        //     this.shouzhi.node.active = true;
        //     this.shouzhi.play();
        // }
    };
    UIUnlockSkin.prototype.click_tomain = function () {
        // if (!(this.data.subType === 5 || this.data.subType === 6)) {
        //     PlayerInfo.unlockSkin(this.data.id);
        // }
        if (this.data.subType === UIPersonSkin_1.SkinType.Theme || this.data.subType === UIPersonSkin_1.SkinType.Key) {
            vm.hide(this);
            vm.show("Prefabs/UI/UISkin");
        }
        else {
            event_1.evt.emit("Main.skin");
        }
    };
    UIUnlockSkin.prototype.click_close = function () {
        this.data && this.data.id && PlayerInfo_1.PlayerInfo.unlockSkin(this.data.id);
        vm.hide(this);
    };
    __decorate([
        property(cc.Sprite)
    ], UIUnlockSkin.prototype, "icon", void 0);
    __decorate([
        property(cc.Animation)
    ], UIUnlockSkin.prototype, "shouzhi", void 0);
    UIUnlockSkin = __decorate([
        ccclass
    ], UIUnlockSkin);
    return UIUnlockSkin;
}(mvcView_1.default));
exports.default = UIUnlockSkin;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJVW5sb2NrU2tpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBb0Q7QUFDcEQsK0NBQTBDO0FBRTFDLHVEQUFvRDtBQUNwRCx3REFBdUQ7QUFHakQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQU87SUFBakQ7UUFBQSxxRUEyQ0M7UUF4Q0csVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUU3QixVQUFJLEdBQWlCLElBQUksQ0FBQzs7SUFtQzlCLENBQUM7SUFqQ0csNkJBQU0sR0FBTjtRQUFBLGlCQUVDO1FBREcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEscUJBQXFCLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFsRSxDQUFrRSxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUNELDZCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFZCxlQUFlO1FBQ2YsZ0RBQWdEO1FBQ2hELHVDQUF1QztRQUN2QywyQkFBMkI7UUFDM0IsSUFBSTtJQUNSLENBQUM7SUFFRCxtQ0FBWSxHQUFaO1FBQ0ksK0RBQStEO1FBQy9ELDJDQUEyQztRQUMzQyxJQUFJO1FBQ0osSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyx1QkFBUSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyx1QkFBUSxDQUFDLEdBQUcsRUFBRTtZQUM1RSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2QsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ2hDO2FBQU07WUFDSCxXQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLHVCQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBcENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ0c7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDTTtJQU5aLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0EyQ2hDO0lBQUQsbUJBQUM7Q0EzQ0QsQUEyQ0MsQ0EzQ3lDLGlCQUFPLEdBMkNoRDtrQkEzQ29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXZjVmlldyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL212Y1ZpZXdcIjtcbmltcG9ydCB7IFNraW5UeXBlIH0gZnJvbSBcIi4vVUlQZXJzb25Ta2luXCI7XG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvVXNlckluZm9cIjtcbmltcG9ydCB7IGV2dCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvY29yZS9ldmVudFwiO1xuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuLi9Db21tb24vQmFzZS9QbGF5ZXJJbmZvXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJVW5sb2NrU2tpbiBleHRlbmRzIG12Y1ZpZXcge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBpY29uOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcbiAgICBzaG91emhpOiBjYy5BbmltYXRpb24gPSBudWxsO1xuXG4gICAgZGF0YTogY3N2LlNraW5fUm93ID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcih0aGlzLmljb24sIF8gPT4gXCJJbWcvc2tpbi90aHVtYm5haWwvXCIgKyB0aGlzLmRhdGEudHlwZSArIFwiL1wiICsgdGhpcy5kYXRhLnRodW1ibmFpbCk7XG4gICAgfVxuICAgIG9uU2hvdyhpZCkge1xuICAgICAgICB0aGlzLmRhdGEgPSBjc3YuU2tpbi5nZXQoaWQpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgICAgIC8vIOesrOS4gOasoeW8leWvvOino+mUgSDnqb/miLTnmq7ogqRcbiAgICAgICAgLy8gaWYgKFVzZXJJbmZvLnNraW5fZ3VpZGUgPT09IDAgJiYgaWQgPT09IDIwKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnNob3V6aGkubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyAgICAgdGhpcy5zaG91emhpLnBsYXkoKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIGNsaWNrX3RvbWFpbigpIHtcbiAgICAgICAgLy8gaWYgKCEodGhpcy5kYXRhLnN1YlR5cGUgPT09IDUgfHwgdGhpcy5kYXRhLnN1YlR5cGUgPT09IDYpKSB7XG4gICAgICAgIC8vICAgICBQbGF5ZXJJbmZvLnVubG9ja1NraW4odGhpcy5kYXRhLmlkKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBpZiAodGhpcy5kYXRhLnN1YlR5cGUgPT09IFNraW5UeXBlLlRoZW1lIHx8IHRoaXMuZGF0YS5zdWJUeXBlID09PSBTa2luVHlwZS5LZXkpIHtcbiAgICAgICAgICAgIHZtLmhpZGUodGhpcyk7XG4gICAgICAgICAgICB2bS5zaG93KFwiUHJlZmFicy9VSS9VSVNraW5cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldnQuZW1pdChcIk1haW4uc2tpblwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsaWNrX2Nsb3NlKCkge1xuICAgICAgICB0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmlkICYmIFBsYXllckluZm8udW5sb2NrU2tpbih0aGlzLmRhdGEuaWQpO1xuICAgICAgICB2bS5oaWRlKHRoaXMpO1xuICAgIH1cblxuXG5cbn1cbiJdfQ==