
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/mmcloud/cheatInfoDC.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b605c0DfSREDLHF/SeiT7C6', 'cheatInfoDC');
// framework/extension/mmcloud/cheatInfoDC.ts

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
var DataCenter_1 = require("../../core/DataCenter");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXG1tY2xvdWRcXGNoZWF0SW5mb0RDLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBOEQ7QUFHOUQ7SUFBeUMsK0JBQVU7SUFBbkQ7UUFBQSxxRUF5Q0M7UUF0Q0csY0FBYztRQUVkLGVBQVMsR0FBTyxFQUFFLENBQUE7UUFHbEIsZUFBUyxHQUFPLEVBQUUsQ0FBQTs7SUFpQ3RCLENBQUM7SUE5QkcsOEJBQVEsR0FBUixVQUFTLEVBQUU7UUFDUCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQzFCLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDSixDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUI7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFHRCw4QkFBUSxHQUFSLFVBQVMsVUFBVTtRQUNmLGlCQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFDbEMsaUJBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzdDLGlCQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUdELEVBQUU7SUFDRiwrQkFBUyxHQUFUO1FBQ0ksS0FBSztRQUNMLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUMxQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQzVCLElBQUksSUFBSSxFQUFFO2dCQUNOLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3pCO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFsQ0Q7UUFEQyxrQkFBSyxFQUFFO2tEQUNVO0lBR2xCO1FBREMsa0JBQUssRUFBRTtrREFDVTtJQVJELFdBQVc7UUFEL0IsZUFBRSxDQUFDLFdBQVcsQ0FBQztPQUNLLFdBQVcsQ0F5Qy9CO0lBQUQsa0JBQUM7Q0F6Q0QsQUF5Q0MsQ0F6Q3dDLG9CQUFVLEdBeUNsRDtrQkF6Q29CLFdBQVc7QUE0Q3JCLFFBQUEsU0FBUyxHQUFnQixvQkFBVSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhQ2VudGVyLCB7IGRjLCBmaWVsZCB9IGZyb20gXCIuLi8uLi9jb3JlL0RhdGFDZW50ZXJcIjtcblxuQGRjKFwiQ2hlYXRJbmZvXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVhdEluZm9EQyBleHRlbmRzIERhdGFDZW50ZXIge1xuXG5cbiAgICAvKirlkITlip/og70g5byA5ZCv5qyh5pWwICovXG4gICAgQGZpZWxkKClcbiAgICBvcGVuX251bXM6IHt9ID0ge31cblxuICAgIEBmaWVsZCgpXG4gICAgb3Blbl9kYXRlOiB7fSA9IHt9XG5cblxuICAgIGdldENvdW50KGlkKSB7XG4gICAgICAgIGxldCBjID0gdGhpcy5vcGVuX251bXNbaWRdXG4gICAgICAgIGlmICghYykge1xuICAgICAgICAgICAgYyA9IDBcbiAgICAgICAgICAgIHRoaXMub3Blbl9udW1zW2lkXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGM7XG4gICAgfVxuXG5cbiAgICBtYXJrT3BlbihmZWF0dXJlX2lkKSB7XG4gICAgICAgIENoZWF0SW5mby5vcGVuX251bXNbZmVhdHVyZV9pZF0rKztcbiAgICAgICAgQ2hlYXRJbmZvLm9wZW5fZGF0ZVtmZWF0dXJlX2lkXSA9IERhdGUubm93KCk7XG4gICAgICAgIENoZWF0SW5mby5zYXZlKCk7XG4gICAgfVxuXG5cbiAgICAvL1xuICAgIG9uTG9hZEFsbCgpIHtcbiAgICAgICAgLy/muIUwIFxuICAgICAgICBmb3IgKHZhciBrIGluIHRoaXMub3Blbl9udW1zKSB7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IHRoaXMub3Blbl9kYXRlW2tdXG4gICAgICAgICAgICBpZiAoZGF0ZSkge1xuICAgICAgICAgICAgICAgIGlmIChnLmlzTmV4dERheShkYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5fbnVtc1trXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGxldCBDaGVhdEluZm86IENoZWF0SW5mb0RDID0gRGF0YUNlbnRlci5yZWdpc3RlcihDaGVhdEluZm9EQyk7XG4iXX0=