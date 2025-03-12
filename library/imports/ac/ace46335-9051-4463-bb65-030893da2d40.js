"use strict";
cc._RF.push(module, 'ace46M1kFFEY7tlAwiT2i1A', 'DrawCallOptimizer');
// framework/misc/DrawCallOptimizer.ts

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
exports.DCIndex = void 0;
var DrawCallReorder_1 = require("./DrawCallReorder");
var event_1 = require("../core/event");
var ccUtil_1 = require("../utils/ccUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DCIndex;
(function (DCIndex) {
    DCIndex[DCIndex["index0"] = 0] = "index0";
    DCIndex[DCIndex["index1"] = 1] = "index1";
    DCIndex[DCIndex["index2"] = 2] = "index2";
    DCIndex[DCIndex["index3"] = 3] = "index3";
    DCIndex[DCIndex["index4"] = 4] = "index4";
    DCIndex[DCIndex["index5"] = 5] = "index5";
    DCIndex[DCIndex["index6"] = 6] = "index6";
    DCIndex[DCIndex["index7"] = 7] = "index7";
    DCIndex[DCIndex["index8"] = 8] = "index8";
    DCIndex[DCIndex["index9"] = 9] = "index9";
})(DCIndex = exports.DCIndex || (exports.DCIndex = {}));
var optimizers = {};
var DrawCallOptimizer = /** @class */ (function (_super) {
    __extends(DrawCallOptimizer, _super);
    function DrawCallOptimizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tobeOptimizeNodes = [];
        _this.newLayer = null;
        _this.orderId = DCIndex.index0;
        return _this;
    }
    DrawCallOptimizer.prototype.onLoad = function () {
        this.newLayer = this.newLayer || this.node;
        event_1.evt.on("DC.optimize", this.optimize, this);
        event_1.evt.on("DC.optimizeAll", this.optimizeAll, this);
        optimizers[this.orderId] = this;
    };
    DrawCallOptimizer.getOptimizer = function (orderId) {
        return optimizers[orderId];
    };
    DrawCallOptimizer.prototype.onDestroy = function () {
        delete optimizers[this.orderId];
        event.off(this);
    };
    DrawCallOptimizer.prototype.start = function () {
        var _this = this;
        this.tobeOptimizeNodes.forEach(function (v) { return ccUtil_1.default.changeParent(v, _this.newLayer); });
        this.optimizeAll();
    };
    DrawCallOptimizer.prototype.optimize = function (reorders) {
        var _this = this;
        reorders.forEach(function (v) {
            if (v.orderId == _this.orderId)
                ccUtil_1.default.changeParent(v.node, _this.newLayer);
        });
    };
    DrawCallOptimizer.prototype.optimizeAll = function () {
        var reorders = cc.director.getScene().getComponentsInChildren(DrawCallReorder_1.default);
        this.optimize(reorders);
    };
    DrawCallOptimizer.prototype.optimizeTarget = function (node) {
        ccUtil_1.default.changeParent(node, this.newLayer);
    };
    __decorate([
        property([cc.Node])
    ], DrawCallOptimizer.prototype, "tobeOptimizeNodes", void 0);
    __decorate([
        property(cc.Node)
    ], DrawCallOptimizer.prototype, "newLayer", void 0);
    __decorate([
        property({ type: cc.Enum(DCIndex) })
    ], DrawCallOptimizer.prototype, "orderId", void 0);
    DrawCallOptimizer = __decorate([
        ccclass
    ], DrawCallOptimizer);
    return DrawCallOptimizer;
}(cc.Component));
exports.default = DrawCallOptimizer;

cc._RF.pop();