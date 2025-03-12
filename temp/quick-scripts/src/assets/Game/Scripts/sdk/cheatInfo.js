"use strict";
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