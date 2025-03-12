"use strict";
cc._RF.push(module, '1ea85M78IFKBKPCSgHygUEE', 'EmptyBuff');
// framework/extension/buffs/EmptyBuff.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var Buff_1 = require("./Buff");
var EmptyBuff = /** @class */ (function (_super) {
    __extends(EmptyBuff, _super);
    function EmptyBuff() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmptyBuff.prototype.onEnabled = function () {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
    };
    EmptyBuff.prototype.onDisabled = function () {
    };
    EmptyBuff.prototype.onTimeLeftChanged = function () {
    };
    EmptyBuff.prototype.save = function () {
    };
    EmptyBuff.prototype.load = function (offlineSec) {
    };
    return EmptyBuff;
}(Buff_1.default));
exports.default = EmptyBuff;

cc._RF.pop();