
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/sdk/cheatInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab389aq1fdAQbyPS/CFrAqT', 'cheatInfo');
// Game/Scripts/sdk/cheatInfo.ts

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
exports.CheatInfo = void 0;
var DataCenter_1 = require("../../../framework/core/DataCenter");
var CheatInfoDC = /** @class */ (function (_super) {
    __extends(CheatInfoDC, _super);
    function CheatInfoDC() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**各功能 开启次数 */
        _this.open_nums = {};
        _this.open_date = {};
        return _this;
    }
    CheatInfoDC.prototype.getCount = function (id) {
        var c = this.open_nums[id];
        if (!c) {
            c = 0;
            this.open_nums[id] = 0;
        }
        return c;
    };
    CheatInfoDC.prototype.markOpen = function (feature_id) {
        exports.CheatInfo.open_nums[feature_id]++;
        exports.CheatInfo.open_date[feature_id] = Date.now();
        exports.CheatInfo.save();
    };
    //
    CheatInfoDC.prototype.onLoadAll = function () {
        //清0 
        for (var k in this.open_nums) {
            var date = this.open_date[k];
            if (date) {
                if (g.isNextDay(date)) {
                    this.open_nums[k] = 0;
                }
            }
        }
    };
    __decorate([
        DataCenter_1.field()
    ], CheatInfoDC.prototype, "open_nums", void 0);
    __decorate([
        DataCenter_1.field()
    ], CheatInfoDC.prototype, "open_date", void 0);
    CheatInfoDC = __decorate([
        DataCenter_1.dc("CheatInfo")
    ], CheatInfoDC);
    return CheatInfoDC;
}(DataCenter_1.default));
exports.default = CheatInfoDC;
exports.CheatInfo = DataCenter_1.default.register(CheatInfoDC);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcc2RrXFxjaGVhdEluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUEyRTtBQUczRTtJQUF5QywrQkFBVTtJQUFuRDtRQUFBLHFFQXlDQztRQXRDRyxjQUFjO1FBRWQsZUFBUyxHQUFPLEVBQUUsQ0FBQTtRQUdsQixlQUFTLEdBQU8sRUFBRSxDQUFBOztJQWlDdEIsQ0FBQztJQTlCRyw4QkFBUSxHQUFSLFVBQVMsRUFBRTtRQUNQLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDMUIsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNKLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxQjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUdELDhCQUFRLEdBQVIsVUFBUyxVQUFVO1FBQ2YsaUJBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztRQUNsQyxpQkFBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDN0MsaUJBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBR0QsRUFBRTtJQUNGLCtCQUFTLEdBQVQ7UUFDSSxLQUFLO1FBQ0wsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzFCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDNUIsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDekI7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQWxDRDtRQURDLGtCQUFLLEVBQUU7a0RBQ1U7SUFHbEI7UUFEQyxrQkFBSyxFQUFFO2tEQUNVO0lBUkQsV0FBVztRQUQvQixlQUFFLENBQUMsV0FBVyxDQUFDO09BQ0ssV0FBVyxDQXlDL0I7SUFBRCxrQkFBQztDQXpDRCxBQXlDQyxDQXpDd0Msb0JBQVUsR0F5Q2xEO2tCQXpDb0IsV0FBVztBQTRDckIsUUFBQSxTQUFTLEdBQWdCLG9CQUFVLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGFDZW50ZXIsIHsgZGMsIGZpZWxkIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9jb3JlL0RhdGFDZW50ZXJcIjtcblxuQGRjKFwiQ2hlYXRJbmZvXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVhdEluZm9EQyBleHRlbmRzIERhdGFDZW50ZXIge1xuXG5cbiAgICAvKirlkITlip/og70g5byA5ZCv5qyh5pWwICovXG4gICAgQGZpZWxkKClcbiAgICBvcGVuX251bXM6IHt9ID0ge31cblxuICAgIEBmaWVsZCgpXG4gICAgb3Blbl9kYXRlOiB7fSA9IHt9XG4gICAgXG5cbiAgICBnZXRDb3VudChpZCkge1xuICAgICAgICBsZXQgYyA9IHRoaXMub3Blbl9udW1zW2lkXVxuICAgICAgICBpZiAoIWMpIHtcbiAgICAgICAgICAgIGMgPSAwXG4gICAgICAgICAgICB0aGlzLm9wZW5fbnVtc1tpZF0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjO1xuICAgIH1cblxuXG4gICAgbWFya09wZW4oZmVhdHVyZV9pZCkge1xuICAgICAgICBDaGVhdEluZm8ub3Blbl9udW1zW2ZlYXR1cmVfaWRdKys7XG4gICAgICAgIENoZWF0SW5mby5vcGVuX2RhdGVbZmVhdHVyZV9pZF0gPSBEYXRlLm5vdygpO1xuICAgICAgICBDaGVhdEluZm8uc2F2ZSgpO1xuICAgIH1cblxuXG4gICAgLy9cbiAgICBvbkxvYWRBbGwoKSB7XG4gICAgICAgIC8v5riFMCBcbiAgICAgICAgZm9yICh2YXIgayBpbiB0aGlzLm9wZW5fbnVtcykge1xuICAgICAgICAgICAgbGV0IGRhdGUgPSB0aGlzLm9wZW5fZGF0ZVtrXVxuICAgICAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZy5pc05leHREYXkoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuX251bXNba10gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cbmV4cG9ydCBsZXQgQ2hlYXRJbmZvOiBDaGVhdEluZm9EQyA9IERhdGFDZW50ZXIucmVnaXN0ZXIoQ2hlYXRJbmZvREMpO1xuIl19