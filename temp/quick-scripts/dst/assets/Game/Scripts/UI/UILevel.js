
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UILevel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ac17aoDmSBFApIPkIySQQCb', 'UILevel');
// Game/Scripts/UI/UILevel.ts

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
var LevelInfo_1 = require("../Common/LevelInfo");
var ccUtil_1 = require("../../../framework/utils/ccUtil");
var DailyLevelInfo_1 = require("../Common/DailyLevelInfo");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var ChapterlInfo_1 = require("../Common/ChapterlInfo");
var Const_1 = require("../Common/Const");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UILevel = /** @class */ (function (_super) {
    __extends(UILevel, _super);
    function UILevel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layout = null;
        _this.title = null;
        _this.last_btn = null;
        _this.next_btn = null;
        _this.datas = [];
        _this.id = 0;
        return _this;
        // update (dt) {}
    }
    UILevel.prototype.onLoad = function () {
    };
    UILevel.prototype.onShow = function (id) {
        var _this = this;
        if (PlayerInfo_1.PlayerInfo.isPlayingDaily) {
            var datas_1 = [];
            csv.daily_level.values.map(function (e) {
                if (PlayerInfo_1.PlayerInfo.isGreaterDate(e.day)) {
                    var data = ccUtil_1.default.get(DailyLevelInfo_1.DailyLevelInfo, e.id);
                    datas_1.push(data);
                }
            });
            this.register(this.layout, function (_) { return datas_1; });
            this.title.string = "关卡挑战";
            this.last_btn.node.active = false;
            this.next_btn.node.active = false;
        }
        else {
            this.datas = [];
            this.id = id;
            csv.level.values.map(function (e) {
                var data = ccUtil_1.default.get(LevelInfo_1.LevelInfo, e.id);
                if (data.chapter == id)
                    _this.datas.push(data);
            });
            this.register(this.layout, function (_) { return _this.datas; });
            this.title.string = ccUtil_1.default.get(ChapterlInfo_1.ChapterlInfo, id).name;
            console.log(Math.ceil(PlayerInfo_1.PlayerInfo.level / 10), id);
            if (id == 1) {
                this.next_btn.interactable = true;
                this.last_btn.node.active = false;
            }
            else if (id == Const_1.default.Chapter_Unlock || (id >= Math.ceil(PlayerInfo_1.PlayerInfo.level / 10))) {
                this.last_btn.node.active = true;
                this.next_btn.interactable = false;
            }
            else {
                this.last_btn.node.active = true;
                this.next_btn.interactable = true;
            }
        }
        this.render();
    };
    UILevel.prototype.start = function () {
    };
    UILevel.prototype.clic_close = function () {
        vm.hide(this);
    };
    UILevel.prototype.click_last = function () {
        this.id -= 1;
        vm.show("Prefabs/UI/UILevel", this.id);
    };
    UILevel.prototype.click_next = function () {
        this.id += 1;
        vm.show("Prefabs/UI/UILevel", this.id);
    };
    __decorate([
        property(cc.Layout)
    ], UILevel.prototype, "layout", void 0);
    __decorate([
        property(cc.Label)
    ], UILevel.prototype, "title", void 0);
    __decorate([
        property(cc.Button)
    ], UILevel.prototype, "last_btn", void 0);
    __decorate([
        property(cc.Button)
    ], UILevel.prototype, "next_btn", void 0);
    UILevel = __decorate([
        ccclass
    ], UILevel);
    return UILevel;
}(mvcView_1.default));
exports.default = UILevel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJTGV2ZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEseURBQW9EO0FBQ3BELGlEQUFnRDtBQUNoRCwwREFBcUQ7QUFHckQsMkRBQTBEO0FBQzFELHdEQUF1RDtBQUN2RCx1REFBc0Q7QUFDdEQseUNBQW9DO0FBRTlCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFPO0lBQTVDO1FBQUEscUVBc0ZDO1FBbkZHLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFHekIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRzNCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsV0FBSyxHQUFnQixFQUFFLENBQUM7UUFFeEIsUUFBRSxHQUFXLENBQUMsQ0FBQzs7UUFxRWYsaUJBQWlCO0lBQ3JCLENBQUM7SUFwRUcsd0JBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCx3QkFBTSxHQUFOLFVBQU8sRUFBRztRQUFWLGlCQXlDQztRQXZDRyxJQUFJLHVCQUFVLENBQUMsY0FBYyxFQUFFO1lBRTNCLElBQUksT0FBSyxHQUFxQixFQUFFLENBQUM7WUFDakMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQztnQkFDeEIsSUFBSSx1QkFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ2pDLElBQUksSUFBSSxHQUFHLGdCQUFNLENBQUMsR0FBRyxDQUFDLCtCQUFjLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUM1QyxPQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNwQjtZQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFB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QUMsS0FBSyxDQUFDOzBDQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ087SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDTztJQVpWLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FzRjNCO0lBQUQsY0FBQztDQXRGRCxBQXNGQyxDQXRGb0MsaUJBQU8sR0FzRjNDO2tCQXRGb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgbXZjVmlldyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL212Y1ZpZXdcIjtcbmltcG9ydCB7IExldmVsSW5mbyB9IGZyb20gXCIuLi9Db21tb24vTGV2ZWxJbmZvXCI7XG5pbXBvcnQgY2NVdGlsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdXRpbHMvY2NVdGlsXCI7XG5pbXBvcnQgeyBTZXR0aW5nSW5mbyB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvU2V0dGluZ0luZm9cIjtcbmltcG9ydCBEZXZpY2UgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9taXNjL0RldmljZVwiO1xuaW1wb3J0IHsgRGFpbHlMZXZlbEluZm8gfSBmcm9tIFwiLi4vQ29tbW9uL0RhaWx5TGV2ZWxJbmZvXCI7XG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL0NvbW1vbi9CYXNlL1BsYXllckluZm9cIjtcbmltcG9ydCB7IENoYXB0ZXJsSW5mbyB9IGZyb20gXCIuLi9Db21tb24vQ2hhcHRlcmxJbmZvXCI7XG5pbXBvcnQgQ29uc3QgZnJvbSBcIi4uL0NvbW1vbi9Db25zdFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlMZXZlbCBleHRlbmRzIG12Y1ZpZXcge1xuXG4gICAgQHByb3BlcnR5KGNjLkxheW91dClcbiAgICBsYXlvdXQ6IGNjLkxheW91dCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdGl0bGU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgbGFzdF9idG46IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIG5leHRfYnRuOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgZGF0YXM6IExldmVsSW5mb1tdID0gW107XG5cbiAgICBpZDogbnVtYmVyID0gMDtcblxuICAgIG9uTG9hZCgpIHtcblxuICAgIH1cblxuICAgIG9uU2hvdyhpZD8pIHtcblxuICAgICAgICBpZiAoUGxheWVySW5mby5pc1BsYXlpbmdEYWlseSkge1xuXG4gICAgICAgICAgICBsZXQgZGF0YXM6IERhaWx5TGV2ZWxJbmZvW10gPSBbXTtcbiAgICAgICAgICAgIGNzdi5kYWlseV9sZXZlbC52YWx1ZXMubWFwKGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChQbGF5ZXJJbmZvLmlzR3JlYXRlckRhdGUoZS5kYXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gY2NVdGlsLmdldChEYWlseUxldmVsSW5mbywgZS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFzLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKHRoaXMubGF5b3V0LCBfID0+IGRhdGFzKTtcbiAgICAgICAgICAgIHRoaXMudGl0bGUuc3RyaW5nID0gXCLlhbPljaHmjJHmiJhcIjtcbiAgICAgICAgICAgIHRoaXMubGFzdF9idG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubmV4dF9idG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgICAgIGNzdi5sZXZlbC52YWx1ZXMubWFwKGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gY2NVdGlsLmdldChMZXZlbEluZm8sIGUuaWQpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmNoYXB0ZXIgPT0gaWQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXMucHVzaChkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5yZWdpc3Rlcih0aGlzLmxheW91dCwgXyA9PiB0aGlzLmRhdGFzKTtcbiAgICAgICAgICAgIHRoaXMudGl0bGUuc3RyaW5nID0gY2NVdGlsLmdldChDaGFwdGVybEluZm8sIGlkKS5uYW1lO1xuICAgICAgICAgICAgY29uc29sZS5sb2coTWF0aC5jZWlsKFBsYXllckluZm8ubGV2ZWwgLyAxMCksIGlkKTtcbiAgICAgICAgICAgIGlmIChpZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0X2J0bi5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdF9idG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlkID09IENvbnN0LkNoYXB0ZXJfVW5sb2NrIHx8IChpZCA+PSBNYXRoLmNlaWwoUGxheWVySW5mby5sZXZlbCAvIDEwKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RfYnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRfYnRuLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0X2J0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0X2J0bi5pbnRlcmFjdGFibGUgPSB0cnVlO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIGNsaWNfY2xvc2UoKSB7XG5cblxuICAgICAgICB2bS5oaWRlKHRoaXMpO1xuICAgIH1cblxuICAgIGNsaWNrX2xhc3QoKSB7XG4gICAgICAgIHRoaXMuaWQgLT0gMTtcbiAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlMZXZlbFwiLCB0aGlzLmlkKTtcbiAgICB9XG5cbiAgICBjbGlja19uZXh0KCkge1xuICAgICAgICB0aGlzLmlkICs9IDE7XG4gICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJTGV2ZWxcIiwgdGhpcy5pZCk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==