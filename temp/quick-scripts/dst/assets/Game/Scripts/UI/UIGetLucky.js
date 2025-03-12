
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIGetLucky.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9c877jPKqBOSorMM6RQ8Ese', 'UIGetLucky');
// Game/Scripts/UI/UIGetLucky.ts

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
var Signal_1 = require("../../../framework/core/Signal");
var ccUtil_1 = require("../../../framework/utils/ccUtil");
var TurntableInfo_1 = require("../Common/TurntableInfo");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var UILucky_1 = require("./UILucky");
var event_1 = require("../../../framework/core/event");
var display_1 = require("../../../framework/misc/display");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIGetLucky = /** @class */ (function (_super) {
    __extends(UIGetLucky, _super);
    function UIGetLucky() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.node_close = null;
        _this.layout = null;
        _this.item_id = 0;
        _this._closeSignal = new Signal_1.default();
        _this.datas = [];
        return _this;
    }
    UIGetLucky.prototype.onLoad = function () {
        var _this = this;
        this.register(this.layout, function (_) { return _this.datas; });
    };
    UIGetLucky.prototype.onShown = function (id, closeCallback, target, doubleEnabled) {
        var _this = this;
        this._closeSignal.on(closeCallback, this);
        this.item_id = id;
        this.datas.splice(0);
        var data = ccUtil_1.default.get(TurntableInfo_1.TurntableInfo, id);
        if (data.type === UILucky_1.DrawType.Gift) {
            csv.turntable.values.filter(function (_) {
                return UILucky_1.DrawType.Gun === _.type || UILucky_1.DrawType.Frozen === _.type || UILucky_1.DrawType.Magnet === _.type;
            }).forEach(function (_) {
                var d = ccUtil_1.default.get(TurntableInfo_1.TurntableInfo, _.id);
                d.num = 1;
                _this.datas.push(d);
            });
        }
        else {
            this.datas.push(data);
        }
        this.render();
    };
    UIGetLucky.prototype.click_no = function () {
        var data = ccUtil_1.default.get(TurntableInfo_1.TurntableInfo, this.item_id);
        vm.hide(this);
        if (this.item_id === 1 || this.item_id === 3) {
            PlayerInfo_1.PlayerInfo.addLabour(data.num);
            event_1.evt.emit("Game.getTili", display_1.default.center, data.num);
        }
    };
    UIGetLucky.prototype.onHidden = function () {
        var _this = this;
        var data = ccUtil_1.default.get(TurntableInfo_1.TurntableInfo, this.item_id);
        if (this.item_id !== 1 && this.item_id !== 3) {
            this._closeSignal.fire(data);
        }
        else {
            this.scheduleOnce(function (_) { return _this._closeSignal.fire(data); }, 1);
        }
    };
    __decorate([
        property(cc.Node)
    ], UIGetLucky.prototype, "node_close", void 0);
    __decorate([
        property(cc.Layout)
    ], UIGetLucky.prototype, "layout", void 0);
    UIGetLucky = __decorate([
        ccclass
    ], UIGetLucky);
    return UIGetLucky;
}(mvcView_1.default));
exports.default = UIGetLucky;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJR2V0THVja3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseURBQW9EO0FBQ3BELHlEQUFvRDtBQUNwRCwwREFBcUQ7QUFDckQseURBQXdEO0FBRXhELHdEQUF1RDtBQUN2RCxxQ0FBcUM7QUFFckMsdURBQW9EO0FBQ3BELDJEQUFzRDtBQUdoRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUk1QztJQUF3Qyw4QkFBTztJQUEvQztRQUFBLHFFQXVEQztRQXBERyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFFWixrQkFBWSxHQUFHLElBQUksZ0JBQU0sRUFBRSxDQUFDO1FBRTVCLFdBQUssR0FBb0IsRUFBRSxDQUFDOztJQTJDaEMsQ0FBQztJQXpDRywyQkFBTSxHQUFOO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCw0QkFBTyxHQUFQLFVBQVEsRUFBRSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsYUFBYTtRQUFoRCxpQkFrQkM7UUFqQkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWxCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksSUFBSSxHQUFHLGdCQUFNLENBQUMsR0FBRyxDQUFDLDZCQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLGtCQUFRLENBQUMsSUFBSSxFQUFFO1lBQzdCLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUM7Z0JBQ3pCLE9BQU8sa0JBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxrQkFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLGtCQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDL0YsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztnQkFDUixJQUFJLENBQUMsR0FBRyxnQkFBTSxDQUFDLEdBQUcsQ0FBQyw2QkFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDeEMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ1YsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUFNO1lBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFDSSxJQUFJLElBQUksR0FBRyxnQkFBTSxDQUFDLEdBQUcsQ0FBQyw2QkFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRCxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2QsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLENBQUMsRUFBRTtZQUMxQyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0IsV0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3REO0lBQ0wsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLElBQUksSUFBSSxHQUFHLGdCQUFNLENBQUMsR0FBRyxDQUFDLDZCQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25ELElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7YUFBTTtZQUNILElBQUksQ0FBQyxZQUFZLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBNUIsQ0FBNEIsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMzRDtJQUNMLENBQUM7SUFuREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNLO0lBTlIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXVEOUI7SUFBRCxpQkFBQztDQXZERCxBQXVEQyxDQXZEdUMsaUJBQU8sR0F1RDlDO2tCQXZEb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IG12Y1ZpZXcgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9tdmNWaWV3XCI7XG5pbXBvcnQgU2lnbmFsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvY29yZS9TaWduYWxcIjtcbmltcG9ydCBjY1V0aWwgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91dGlscy9jY1V0aWxcIjtcbmltcG9ydCB7IFR1cm50YWJsZUluZm8gfSBmcm9tIFwiLi4vQ29tbW9uL1R1cm50YWJsZUluZm9cIjtcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9Vc2VySW5mb1wiO1xuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuLi9Db21tb24vQmFzZS9QbGF5ZXJJbmZvXCI7XG5pbXBvcnQgeyBEcmF3VHlwZSB9IGZyb20gXCIuL1VJTHVja3lcIjtcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9Ub2FzdE1hbmFnZXJcIjtcbmltcG9ydCB7IGV2dCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvY29yZS9ldmVudFwiO1xuaW1wb3J0IGRpc3BsYXkgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9taXNjL2Rpc3BsYXlcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUdldEx1Y2t5IGV4dGVuZHMgbXZjVmlldyB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlX2Nsb3NlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYXlvdXQpXG4gICAgbGF5b3V0OiBjYy5MYXlvdXQgPSBudWxsO1xuXG4gICAgaXRlbV9pZCA9IDA7XG5cbiAgICBfY2xvc2VTaWduYWwgPSBuZXcgU2lnbmFsKCk7XG5cbiAgICBkYXRhczogVHVybnRhYmxlSW5mb1tdID0gW107XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIodGhpcy5sYXlvdXQsIF8gPT4gdGhpcy5kYXRhcyk7XG4gICAgfVxuXG4gICAgb25TaG93bihpZCwgY2xvc2VDYWxsYmFjaywgdGFyZ2V0LCBkb3VibGVFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuX2Nsb3NlU2lnbmFsLm9uKGNsb3NlQ2FsbGJhY2ssIHRoaXMpO1xuICAgICAgICB0aGlzLml0ZW1faWQgPSBpZDtcblxuICAgICAgICB0aGlzLmRhdGFzLnNwbGljZSgwKTtcbiAgICAgICAgbGV0IGRhdGEgPSBjY1V0aWwuZ2V0KFR1cm50YWJsZUluZm8sIGlkKTtcbiAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gRHJhd1R5cGUuR2lmdCkge1xuICAgICAgICAgICAgY3N2LnR1cm50YWJsZS52YWx1ZXMuZmlsdGVyKF8gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBEcmF3VHlwZS5HdW4gPT09IF8udHlwZSB8fCBEcmF3VHlwZS5Gcm96ZW4gPT09IF8udHlwZSB8fCBEcmF3VHlwZS5NYWduZXQgPT09IF8udHlwZTtcbiAgICAgICAgICAgIH0pLmZvckVhY2goXyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGQgPSBjY1V0aWwuZ2V0KFR1cm50YWJsZUluZm8sIF8uaWQpO1xuICAgICAgICAgICAgICAgIGQubnVtID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFzLnB1c2goZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YXMucHVzaChkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIGNsaWNrX25vKCkge1xuICAgICAgICBsZXQgZGF0YSA9IGNjVXRpbC5nZXQoVHVybnRhYmxlSW5mbywgdGhpcy5pdGVtX2lkKTtcbiAgICAgICAgdm0uaGlkZSh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuaXRlbV9pZCA9PT0gMSB8fCB0aGlzLml0ZW1faWQgPT09IDMpIHtcbiAgICAgICAgICAgIFBsYXllckluZm8uYWRkTGFib3VyKGRhdGEubnVtKTtcbiAgICAgICAgICAgIGV2dC5lbWl0KFwiR2FtZS5nZXRUaWxpXCIsIGRpc3BsYXkuY2VudGVyLCBkYXRhLm51bSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkhpZGRlbigpIHtcbiAgICAgICAgbGV0IGRhdGEgPSBjY1V0aWwuZ2V0KFR1cm50YWJsZUluZm8sIHRoaXMuaXRlbV9pZCk7XG4gICAgICAgIGlmICh0aGlzLml0ZW1faWQgIT09IDEgJiYgdGhpcy5pdGVtX2lkICE9PSAzKSB7XG4gICAgICAgICAgICB0aGlzLl9jbG9zZVNpZ25hbC5maXJlKGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoXyA9PiB0aGlzLl9jbG9zZVNpZ25hbC5maXJlKGRhdGEpLCAxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==