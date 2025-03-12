
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/DoubleClick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0225f1cu7dK1ooJ3wkdH2Vn', 'DoubleClick');
// framework/misc/DoubleClick.ts

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
var DOUBLECLICK_TIMEOUT = 300;
var DoubleClick = /** @class */ (function (_super) {
    __extends(DoubleClick, _super);
    function DoubleClick() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._lastClickedTime = 0;
        return _this;
    }
    DoubleClick.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
    };
    DoubleClick.prototype.onDestroy = function () {
        this.node.off(cc.Node.EventType.TOUCH_END, this.onClick, this);
    };
    DoubleClick.prototype.onClick = function () {
        //double click 
        var now = Date.now();
        var offset = now - this._lastClickedTime;
        if (offset < DOUBLECLICK_TIMEOUT) {
            this.getComponents(cc.Component).forEach(function (v) {
                var func = v['onDoubleClick'];
                if (func) {
                    func.call(v);
                }
            });
        }
        this._lastClickedTime = now;
    };
    DoubleClick.prototype.start = function () { };
    DoubleClick = __decorate([
        ccclass
    ], DoubleClick);
    return DoubleClick;
}(cc.Component));
exports.default = DoubleClick;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxEb3VibGVDbGljay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQyxJQUFNLG1CQUFtQixHQUFHLEdBQUcsQ0FBQztBQUVoQztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQThCQztRQTdCRyxzQkFBZ0IsR0FBVSxDQUFDLENBQUM7O0lBNkJoQyxDQUFDO0lBM0JHLDRCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsK0JBQVMsR0FBVDtRQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCw2QkFBTyxHQUFQO1FBRUksZUFBZTtRQUNmLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUNwQixJQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFBO1FBQ3hDLElBQUcsTUFBTSxHQUFHLG1CQUFtQixFQUFDO1lBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7Z0JBQ3RDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQWEsQ0FBQTtnQkFDekMsSUFBRyxJQUFJLEVBQ1A7b0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDaEI7WUFDTCxDQUFDLENBQUMsQ0FBQTtTQUNMO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztJQUNoQyxDQUFDO0lBRUQsMkJBQUssR0FBTCxjQUFVLENBQUM7SUE3Qk0sV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQThCL0I7SUFBRCxrQkFBQztDQTlCRCxBQThCQyxDQTlCd0MsRUFBRSxDQUFDLFNBQVMsR0E4QnBEO2tCQTlCb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5jb25zdCBET1VCTEVDTElDS19USU1FT1VUID0gMzAwO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb3VibGVDbGljayBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBfbGFzdENsaWNrZWRUaW1lOm51bWJlciA9IDA7XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELHRoaXMub25DbGljayx0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELHRoaXMub25DbGljayx0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKClcclxuICAgIHtcclxuICAgICAgICAvL2RvdWJsZSBjbGljayBcclxuICAgICAgICBsZXQgbm93ID0gRGF0ZS5ub3coKVxyXG4gICAgICAgIGxldCBvZmZzZXQgPSBub3cgLSB0aGlzLl9sYXN0Q2xpY2tlZFRpbWVcclxuICAgICAgICBpZihvZmZzZXQgPCBET1VCTEVDTElDS19USU1FT1VUKXtcclxuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnRzKGNjLkNvbXBvbmVudCkuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgICAgICAgICBsZXQgZnVuYyA9IHZbJ29uRG91YmxlQ2xpY2snXSBhcyBGdW5jdGlvblxyXG4gICAgICAgICAgICAgICAgaWYoZnVuYylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmdW5jLmNhbGwodik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2xhc3RDbGlja2VkVGltZSA9IG5vdztcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7fVxyXG59Il19