"use strict";
cc._RF.push(module, '62b6am+j4hEkrq6fMH+DNwy', 'GenericBuff');
// framework/extension/buffs/GenericBuff.ts

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
var GenericBuff = /** @class */ (function (_super) {
    __extends(GenericBuff, _super);
    function GenericBuff() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GenericBuff.prototype, "dcInstance", {
        get: function () {
            return this.data.dcInstance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GenericBuff.prototype, "dcField", {
        get: function () {
            return this.data.dcField;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GenericBuff.prototype, "countOffline", {
        /** 是否计算离线时间  */
        get: function () {
            return this.data.offline;
        },
        enumerable: false,
        configurable: true
    });
    GenericBuff.prototype.onEnabled = function () {
        var func = this.data.onEnable;
        if (func) {
            func.call(this);
        }
    };
    GenericBuff.prototype.onRecovery = function () {
        var func = this.data.onRecovery;
        if (func) {
            func.call(this);
        }
    };
    GenericBuff.prototype.onDisabled = function () {
        var func = this.data.onDisable;
        if (func) {
            func.call(this);
        }
    };
    GenericBuff.prototype.step = function () {
        var func = this.data.onStep;
        if (func) {
            func.call(this);
        }
    };
    GenericBuff.prototype.onTimeLeftChanged = function () {
        if (this.dcInstance)
            this.dcInstance.setData(this.dcField, this.timeLeft);
    };
    GenericBuff.prototype.save = function () {
        if (this.dcInstance)
            this.dcInstance.save(this.dcField);
    };
    GenericBuff.prototype.load = function (offset) {
        if (this.dcInstance) {
            this.timeLeft = this.dcInstance.getData(this.dcField);
            if (this.countOffline) {
                this.timeLeft -= offset;
            }
        }
    };
    return GenericBuff;
}(Buff_1.default));
exports.default = GenericBuff;

cc._RF.pop();