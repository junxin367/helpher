"use strict";
cc._RF.push(module, '187abeaJAVKGqLjC4CXigcf', 'SovInfo');
// framework/extension/weak_net_game/SovInfo.ts

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
exports.SovInfo = void 0;
var DataCenter_1 = require("../../core/DataCenter");
var gameUtil_1 = require("../../utils/gameUtil");
var SovInfoDC = /** @class */ (function (_super) {
    __extends(SovInfoDC, _super);
    function SovInfoDC() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sovInvokeCounts = {};
        return _this;
    }
    SovInfoDC.prototype.onLoadAll = function () {
        if (gameUtil_1.default.isNextDay(this.save_timestamps)) {
            for (var k in this.sovInvokeCounts) {
                this.sovInvokeCounts[k] = 0;
            }
        }
    };
    SovInfoDC.prototype.getCount = function (keySov) {
        var c = this.sovInvokeCounts[keySov];
        if (c == null) {
            c = 0;
            this.sovInvokeCounts[keySov] = c;
        }
        return c;
    };
    SovInfoDC.prototype.invoke = function (keySov) {
        var c = this.getCount(keySov);
        this.sovInvokeCounts[keySov] = ++c;
        this.save();
    };
    __decorate([
        DataCenter_1.field()
    ], SovInfoDC.prototype, "sovInvokeCounts", void 0);
    SovInfoDC = __decorate([
        DataCenter_1.dc("Sov")
    ], SovInfoDC);
    return SovInfoDC;
}(DataCenter_1.default));
exports.default = SovInfoDC;
exports.SovInfo = DataCenter_1.default.register(SovInfoDC);

cc._RF.pop();