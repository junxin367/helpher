"use strict";
cc._RF.push(module, '808ccyb329AArUN9k5jByHr', 'BombTooltip');
// Game/Scripts/BombTooltip.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BombTooltip = /** @class */ (function (_super) {
    __extends(BombTooltip, _super);
    function BombTooltip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.baseScale = 0;
        return _this;
    }
    BombTooltip.prototype.onLoad = function () {
        this.baseScale = this.node.scaleX;
    };
    Object.defineProperty(BombTooltip.prototype, "dir", {
        set: function (x) {
            this.node.scaleX = x * this.baseScale;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BombTooltip.prototype, "bomb", {
        set: function (v) {
            if (v) {
                this.node.active = true;
                v.onTimeLeftChanged.on(this.onTimeLeft, this);
                this.bombRef = v;
                this.label.string = v.timeLeft + "";
            }
            else {
                if (this.bombRef)
                    this.bombRef.onTimeLeftChanged.off(this.onTimeLeft, this);
                this.node.active = false;
            }
        },
        enumerable: false,
        configurable: true
    });
    BombTooltip.prototype.onDestroy = function () {
        if (this.bombRef && this.bombRef.onTimeLeftChanged)
            this.bombRef.onTimeLeftChanged.off(this.onTimeLeft, this);
    };
    BombTooltip.prototype.onTimeLeft = function (timeleft) {
        this.label.string = timeleft;
        if (timeleft <= 0) {
            this.node.active = false;
            this.bomb = null;
        }
    };
    BombTooltip.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], BombTooltip.prototype, "label", void 0);
    BombTooltip = __decorate([
        ccclass
    ], BombTooltip);
    return BombTooltip;
}(cc.Component));
exports.default = BombTooltip;

cc._RF.pop();