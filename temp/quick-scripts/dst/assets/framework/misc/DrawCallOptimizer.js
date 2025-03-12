
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/DrawCallOptimizer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxEcmF3Q2FsbE9wdGltaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQWdEO0FBQ2hELHVDQUFvQztBQUNwQywwQ0FBcUM7QUFFL0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsSUFBWSxPQVdYO0FBWEQsV0FBWSxPQUFPO0lBQ2YseUNBQU0sQ0FBQTtJQUNOLHlDQUFNLENBQUE7SUFDTix5Q0FBTSxDQUFBO0lBQ04seUNBQU0sQ0FBQTtJQUNOLHlDQUFNLENBQUE7SUFDTix5Q0FBTSxDQUFBO0lBQ04seUNBQU0sQ0FBQTtJQUNOLHlDQUFNLENBQUE7SUFDTix5Q0FBTSxDQUFBO0lBQ04seUNBQU0sQ0FBQTtBQUNWLENBQUMsRUFYVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFXbEI7QUFFRCxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUE7QUFHbkI7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUErQ0M7UUE3Q0csdUJBQWlCLEdBQWMsRUFBRSxDQUFBO1FBR2pDLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsYUFBTyxHQUFZLE9BQU8sQ0FBQyxNQUFNLENBQUM7O0lBdUN0QyxDQUFDO0lBckNHLGtDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQyxXQUFHLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzFDLFdBQUcsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNoRCxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNwQyxDQUFDO0lBRU0sOEJBQVksR0FBbkIsVUFBb0IsT0FBTztRQUN2QixPQUFPLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBRUQscUNBQVMsR0FBVDtRQUNJLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMvQixLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxpQ0FBSyxHQUFMO1FBQUEsaUJBR0M7UUFGRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsZ0JBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBckMsQ0FBcUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsb0NBQVEsR0FBUixVQUFTLFFBQTJCO1FBQXBDLGlCQUtDO1FBSkcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7WUFDZCxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksS0FBSSxDQUFDLE9BQU87Z0JBQ3pCLGdCQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDSSxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLHVCQUF1QixDQUFDLHlCQUFlLENBQUMsQ0FBQTtRQUM5RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzNCLENBQUM7SUFFRCwwQ0FBYyxHQUFkLFVBQWUsSUFBYTtRQUN4QixnQkFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUEzQ0Q7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7Z0VBQ2E7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7c0RBQ0g7SUFSakIsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0ErQ3JDO0lBQUQsd0JBQUM7Q0EvQ0QsQUErQ0MsQ0EvQzhDLEVBQUUsQ0FBQyxTQUFTLEdBK0MxRDtrQkEvQ29CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEcmF3Q2FsbFJlb3JkZXIgZnJvbSBcIi4vRHJhd0NhbGxSZW9yZGVyXCI7XHJcbmltcG9ydCB7IGV2dCB9IGZyb20gXCIuLi9jb3JlL2V2ZW50XCI7XHJcbmltcG9ydCBjY1V0aWwgZnJvbSBcIi4uL3V0aWxzL2NjVXRpbFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZXhwb3J0IGVudW0gRENJbmRleCB7XHJcbiAgICBpbmRleDAsXHJcbiAgICBpbmRleDEsXHJcbiAgICBpbmRleDIsXHJcbiAgICBpbmRleDMsXHJcbiAgICBpbmRleDQsXHJcbiAgICBpbmRleDUsXHJcbiAgICBpbmRleDYsXHJcbiAgICBpbmRleDcsXHJcbiAgICBpbmRleDgsXHJcbiAgICBpbmRleDksXHJcbn1cclxuXHJcbmxldCBvcHRpbWl6ZXJzID0ge31cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdDYWxsT3B0aW1pemVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICB0b2JlT3B0aW1pemVOb2RlczogY2MuTm9kZVtdID0gW11cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5ld0xheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5FbnVtKERDSW5kZXgpIH0pXHJcbiAgICBvcmRlcklkOiBEQ0luZGV4ID0gRENJbmRleC5pbmRleDA7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubmV3TGF5ZXIgPSB0aGlzLm5ld0xheWVyIHx8IHRoaXMubm9kZTtcclxuICAgICAgICBldnQub24oXCJEQy5vcHRpbWl6ZVwiLCB0aGlzLm9wdGltaXplLCB0aGlzKVxyXG4gICAgICAgIGV2dC5vbihcIkRDLm9wdGltaXplQWxsXCIsIHRoaXMub3B0aW1pemVBbGwsIHRoaXMpXHJcbiAgICAgICAgb3B0aW1pemVyc1t0aGlzLm9yZGVySWRdID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0T3B0aW1pemVyKG9yZGVySWQpOiBEcmF3Q2FsbE9wdGltaXplciB7XHJcbiAgICAgICAgcmV0dXJuIG9wdGltaXplcnNbb3JkZXJJZF1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgZGVsZXRlIG9wdGltaXplcnNbdGhpcy5vcmRlcklkXVxyXG4gICAgICAgIGV2ZW50Lm9mZih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnRvYmVPcHRpbWl6ZU5vZGVzLmZvckVhY2godiA9PiBjY1V0aWwuY2hhbmdlUGFyZW50KHYsIHRoaXMubmV3TGF5ZXIpKTtcclxuICAgICAgICB0aGlzLm9wdGltaXplQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3B0aW1pemUocmVvcmRlcnM6IERyYXdDYWxsUmVvcmRlcltdKSB7XHJcbiAgICAgICAgcmVvcmRlcnMuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgICAgaWYgKHYub3JkZXJJZCA9PSB0aGlzLm9yZGVySWQpXHJcbiAgICAgICAgICAgICAgICBjY1V0aWwuY2hhbmdlUGFyZW50KHYubm9kZSwgdGhpcy5uZXdMYXllcik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvcHRpbWl6ZUFsbCgpIHtcclxuICAgICAgICBsZXQgcmVvcmRlcnMgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKERyYXdDYWxsUmVvcmRlcilcclxuICAgICAgICB0aGlzLm9wdGltaXplKHJlb3JkZXJzKVxyXG4gICAgfVxyXG5cclxuICAgIG9wdGltaXplVGFyZ2V0KG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBjY1V0aWwuY2hhbmdlUGFyZW50KG5vZGUsIHRoaXMubmV3TGF5ZXIpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==