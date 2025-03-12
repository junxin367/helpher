
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/LongTouch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '828e0jqHZ1IU5KmJfkZXpaH', 'LongTouch');
// framework/misc/LongTouch.ts

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
var Signal_1 = require("../core/Signal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
var LongTouch = /** @class */ (function (_super) {
    __extends(LongTouch, _super);
    function LongTouch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pressedTime = 0;
        _this.isPressing = false;
        _this.targetTime = 1;
        _this.onLongTouch = new Signal_1.default();
        return _this;
    }
    LongTouch.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this);
    };
    LongTouch.prototype.start = function () { };
    LongTouch.prototype.onTouchBegan = function (e) {
        this.pressedTime = 0;
        this.isPressing = true;
        e.stopPropagation();
    };
    LongTouch.prototype.update = function (dt) {
        if (this.isPressing) {
            this.pressedTime += dt;
            if (this.pressedTime >= this.targetTime) {
                this.onLongTouch.fire();
                this.pressedTime = 0;
            }
        }
    };
    LongTouch.prototype.onTouchEnded = function () {
        this.isPressing = false;
    };
    LongTouch.prototype.waitForPress = function (duration) {
        this.targetTime = duration;
        return this.onLongTouch.wait();
    };
    __decorate([
        property
    ], LongTouch.prototype, "targetTime", void 0);
    LongTouch = __decorate([
        ccclass
    ], LongTouch);
    return LongTouch;
}(cc.Component));
exports.default = LongTouch;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxMb25nVG91Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBRTlCLElBQUEsS0FBOEIsRUFBRSxDQUFDLFVBQVUsRUFBekMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBQ2xELDhCQUE4QjtBQUM5Qiw0Q0FBNEM7QUFDNUMsNEJBQTRCO0FBQzVCLDBDQUEwQztBQUUxQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQXlDQztRQXhDVSxpQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUduQixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUV0QixpQkFBVyxHQUFXLElBQUksZ0JBQU0sRUFBRSxDQUFDOztJQWtDdkMsQ0FBQztJQWhDRywwQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELHlCQUFLLEdBQUwsY0FBVSxDQUFDO0lBRVgsZ0NBQVksR0FBWixVQUFhLENBQUM7UUFDVixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELDBCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDO1lBQ3ZCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQzthQUN4QjtTQUNKO0lBQ0wsQ0FBQztJQUVELGdDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsZ0NBQVksR0FBWixVQUFhLFFBQVE7UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFsQ0Q7UUFEQyxRQUFRO2lEQUNhO0lBTEwsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXlDN0I7SUFBRCxnQkFBQztDQXpDRCxBQXlDQyxDQXpDc0MsRUFBRSxDQUFDLFNBQVMsR0F5Q2xEO2tCQXpDb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaWduYWwgZnJvbSBcIi4uL2NvcmUvU2lnbmFsXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG4vL+eUteWtkOmCruS7tnB1aGFsc2tpanNlbWVuQGdtYWlsLmNvbVxyXG4vL+a6kOeggee9keermSDlvIB2cG7lhajlsYDmqKHlvI/miZPlvIAgaHR0cDovL3dlYjNpbmN1YmF0b3JzLmNvbS9cclxuLy/nlLXmiqVodHRwczovL3QubWUvZ2FtZWNvZGU5OTlcclxuLy/nvZHpobXlrqLmnI0gaHR0cDovL3dlYjNpbmN1YmF0b3JzLmNvbS9rZWZ1Lmh0bWxcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9uZ1RvdWNoIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBwcmVzc2VkVGltZSA9IDA7XHJcbiAgICBwdWJsaWMgaXNQcmVzc2luZyA9IGZhbHNlO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHVibGljIHRhcmdldFRpbWUgPSAxO1xyXG5cclxuICAgIG9uTG9uZ1RvdWNoOiBTaWduYWwgPSBuZXcgU2lnbmFsKCk7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoQmVnYW4sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZGVkLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHsgfVxyXG5cclxuICAgIG9uVG91Y2hCZWdhbihlKSB7XHJcbiAgICAgICAgdGhpcy5wcmVzc2VkVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5pc1ByZXNzaW5nID0gdHJ1ZTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUHJlc3NpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5wcmVzc2VkVGltZSArPSBkdDtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJlc3NlZFRpbWUgPj0gdGhpcy50YXJnZXRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTG9uZ1RvdWNoLmZpcmUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJlc3NlZFRpbWUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hFbmRlZCgpIHtcclxuICAgICAgICB0aGlzLmlzUHJlc3NpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB3YWl0Rm9yUHJlc3MoZHVyYXRpb24pIHtcclxuICAgICAgICB0aGlzLnRhcmdldFRpbWUgPSBkdXJhdGlvbjtcclxuICAgICAgICByZXR1cm4gdGhpcy5vbkxvbmdUb3VjaC53YWl0KCk7XHJcbiAgICB9XHJcblxyXG59Il19