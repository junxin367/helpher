"use strict";
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