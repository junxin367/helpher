
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/wxsdk/WxFeedbackButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '56c5dQwMDVIbZzexb7961L/', 'WxFeedbackButton');
// framework/extension/wxsdk/WxFeedbackButton.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var wxSysInfo;
var WxFeedbackButton = /** @class */ (function (_super) {
    __extends(WxFeedbackButton, _super);
    function WxFeedbackButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handler = new cc.Component.EventHandler();
        _this.button = null;
        _this.width = 200;
        _this.height = 40;
        return _this;
    }
    WxFeedbackButton.prototype.onLoad = function () {
    };
    WxFeedbackButton.prototype.onEnable = function () {
        this.button && this.button.show();
    };
    WxFeedbackButton.prototype.onDisable = function () {
        this.button && this.button.hide();
    };
    WxFeedbackButton.prototype.onDestroy = function () {
        this.button && this.button.destroy();
    };
    WxFeedbackButton.prototype.createButton = function (callback) {
        if (!wxSysInfo) {
            wxSysInfo = wx.getSystemInfoSync();
        }
        var leftPos = wxSysInfo.windowWidth * 0.5 - this.width / 2;
        var topPos = wxSysInfo.windowHeight * 0.5 - this.height / 2;
        var width = this.width;
        var height = this.height;
        if (this.button) {
            this.button.destroy();
        }
        var btnRect = this.node.getBoundingBoxToWorld();
        var ratio = cc.view.getDevicePixelRatio();
        var scale = cc.view.getScaleX();
        var factor = scale / ratio;
        leftPos = btnRect.x * factor;
        topPos = wxSysInfo.screenHeight - (btnRect.y + btnRect.height) * factor;
        width = btnRect.width * factor;
        height = btnRect.height * factor;
        this.button = wx.createFeedbackButton({
            type: "text",
            text: "        ",
            style: {
                left: leftPos,
                top: topPos,
                width: width,
                height: height,
                lineHeight: 60,
                textAlign: 'center',
                backgroundColor: '#00000000',
                color: '#ffffff'
            }
        });
        this.button.onTap(function (res) {
            if (res) {
                if (callback)
                    callback(res);
            }
            else if (callback)
                callback(null);
        });
    };
    WxFeedbackButton.prototype.start = function () {
        var _this = this;
        if (CC_WECHATGAME) {
            this.createButton(function (res) {
                _this.handler.emit([res]);
            });
        }
    };
    __decorate([
        property(cc.Component.EventHandler)
    ], WxFeedbackButton.prototype, "handler", void 0);
    __decorate([
        property
    ], WxFeedbackButton.prototype, "width", void 0);
    __decorate([
        property
    ], WxFeedbackButton.prototype, "height", void 0);
    WxFeedbackButton = __decorate([
        ccclass,
        menu("Wxsdk/WxFeedbackButton")
    ], WxFeedbackButton);
    return WxFeedbackButton;
}(cc.Component));
exports.default = WxFeedbackButton;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHd4c2RrXFxXeEZlZWRiYWNrQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBOEIsRUFBRSxDQUFDLFVBQVUsRUFBekMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBQ2xELElBQUksU0FBUyxDQUFBO0FBR2I7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUEwRUM7UUF2RUcsYUFBTyxHQUE4QixJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckUsWUFBTSxHQUFRLElBQUksQ0FBQztRQUduQixXQUFLLEdBQVcsR0FBRyxDQUFDO1FBRXBCLFlBQU0sR0FBVyxFQUFFLENBQUM7O0lBaUV4QixDQUFDO0lBaEVHLGlDQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRU8sdUNBQVksR0FBcEIsVUFBcUIsUUFBUTtRQUN6QixJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ1osU0FBUyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDLFdBQVcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7UUFDMUQsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLFlBQVksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7UUFDM0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUN0QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFBO1FBQ3hCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUE7U0FDeEI7UUFDRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUE7UUFDL0MsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzFDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDL0IsSUFBSSxNQUFNLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQTtRQUMxQixPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUE7UUFDNUIsTUFBTSxHQUFHLFNBQVMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUE7UUFDdkUsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFBO1FBQzlCLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztZQUNsQyxJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxVQUFVO1lBQ2hCLEtBQUssRUFBRTtnQkFDSCxJQUFJLEVBQUUsT0FBTztnQkFDYixHQUFHLEVBQUUsTUFBTTtnQkFDWCxLQUFLLEVBQUUsS0FBSztnQkFDWixNQUFNLEVBQUUsTUFBTTtnQkFDZCxVQUFVLEVBQUUsRUFBRTtnQkFDZCxTQUFTLEVBQUUsUUFBUTtnQkFDbkIsZUFBZSxFQUFFLFdBQVc7Z0JBQzVCLEtBQUssRUFBRSxTQUFTO2FBQ25CO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO1lBQ2xCLElBQUksR0FBRyxFQUFFO2dCQUNMLElBQUksUUFBUTtvQkFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDL0I7aUJBQU0sSUFBSSxRQUFRO2dCQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnQ0FBSyxHQUFMO1FBQUEsaUJBT0M7UUFORyxJQUFJLGFBQWEsRUFBRTtZQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBQSxHQUFHO2dCQUNqQixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7WUFDNUIsQ0FBQyxDQUFDLENBQUE7U0FFTDtJQUNMLENBQUM7SUF0RUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7cURBQ2lDO0lBSXJFO1FBREMsUUFBUTttREFDVztJQUVwQjtRQURDLFFBQVE7b0RBQ1c7SUFUSCxnQkFBZ0I7UUFGcEMsT0FBTztRQUNQLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztPQUNWLGdCQUFnQixDQTBFcEM7SUFBRCx1QkFBQztDQTFFRCxBQTBFQyxDQTFFNkMsRUFBRSxDQUFDLFNBQVMsR0EwRXpEO2tCQTFFb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgbWVudSB9ID0gY2MuX2RlY29yYXRvcjtcclxubGV0IHd4U3lzSW5mb1xyXG5AY2NjbGFzc1xyXG5AbWVudShcIld4c2RrL1d4RmVlZGJhY2tCdXR0b25cIilcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV3hGZWVkYmFja0J1dHRvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIpXHJcbiAgICBoYW5kbGVyOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgIGJ1dHRvbjogYW55ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHdpZHRoOiBudW1iZXIgPSAyMDA7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIGhlaWdodDogbnVtYmVyID0gNDA7XHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMuYnV0dG9uICYmIHRoaXMuYnV0dG9uLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy5idXR0b24gJiYgdGhpcy5idXR0b24uaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbiAmJiB0aGlzLmJ1dHRvbi5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVCdXR0b24oY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoIXd4U3lzSW5mbykge1xyXG4gICAgICAgICAgICB3eFN5c0luZm8gPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbGVmdFBvcyA9IHd4U3lzSW5mby53aW5kb3dXaWR0aCAqIDAuNSAtIHRoaXMud2lkdGggLyAyXHJcbiAgICAgICAgdmFyIHRvcFBvcyA9IHd4U3lzSW5mby53aW5kb3dIZWlnaHQgKiAwLjUgLSB0aGlzLmhlaWdodCAvIDJcclxuICAgICAgICB2YXIgd2lkdGggPSB0aGlzLndpZHRoXHJcbiAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLmRlc3Ryb3koKVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYnRuUmVjdCA9IHRoaXMubm9kZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKVxyXG4gICAgICAgIHZhciByYXRpbyA9IGNjLnZpZXcuZ2V0RGV2aWNlUGl4ZWxSYXRpbygpO1xyXG4gICAgICAgIHZhciBzY2FsZSA9IGNjLnZpZXcuZ2V0U2NhbGVYKClcclxuICAgICAgICB2YXIgZmFjdG9yID0gc2NhbGUgLyByYXRpb1xyXG4gICAgICAgIGxlZnRQb3MgPSBidG5SZWN0LnggKiBmYWN0b3JcclxuICAgICAgICB0b3BQb3MgPSB3eFN5c0luZm8uc2NyZWVuSGVpZ2h0IC0gKGJ0blJlY3QueSArIGJ0blJlY3QuaGVpZ2h0KSAqIGZhY3RvclxyXG4gICAgICAgIHdpZHRoID0gYnRuUmVjdC53aWR0aCAqIGZhY3RvclxyXG4gICAgICAgIGhlaWdodCA9IGJ0blJlY3QuaGVpZ2h0ICogZmFjdG9yXHJcbiAgICAgICAgdGhpcy5idXR0b24gPSB3eC5jcmVhdGVGZWVkYmFja0J1dHRvbih7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIiAgICAgICAgXCIsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBsZWZ0UG9zLFxyXG4gICAgICAgICAgICAgICAgdG9wOiB0b3BQb3MsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDYwLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAwMCcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5vblRhcCgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2socmVzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKENDX1dFQ0hBVEdBTUUpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVCdXR0b24ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlci5lbWl0KFtyZXNdKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=