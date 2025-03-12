
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/wxsdk/WxGameClubButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d2056QWo9E57D39508Sok/', 'WxGameClubButton');
// framework/extension/wxsdk/WxGameClubButton.ts

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
var WxGameClubButton = /** @class */ (function (_super) {
    __extends(WxGameClubButton, _super);
    function WxGameClubButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handler = new cc.Component.EventHandler();
        _this.button = null;
        _this.width = 200;
        _this.height = 40;
        return _this;
    }
    WxGameClubButton_1 = WxGameClubButton;
    WxGameClubButton.prototype.onLoad = function () {
        WxGameClubButton_1.instance = this;
    };
    WxGameClubButton.prototype.onEnable = function () {
        this.button && this.button.show();
    };
    WxGameClubButton.prototype.onDisable = function () {
        this.button && this.button.hide();
    };
    WxGameClubButton.prototype.onDestroy = function () {
        this.button && this.button.destroy();
        WxGameClubButton_1.instance = null;
    };
    WxGameClubButton.prototype.createButton = function (callback) {
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
        this.button = wx.createGameClubButton({
            //green,white,dark , light
            icon: 'light',
            style: {
                left: leftPos,
                top: topPos,
                width: width,
                height: height,
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
    WxGameClubButton.prototype.start = function () {
        var _this = this;
        if (CC_WECHATGAME) {
            this.createButton(function (res) {
                _this.handler.emit([res]);
            });
        }
    };
    var WxGameClubButton_1;
    WxGameClubButton.instance = null;
    __decorate([
        property(cc.Component.EventHandler)
    ], WxGameClubButton.prototype, "handler", void 0);
    __decorate([
        property
    ], WxGameClubButton.prototype, "width", void 0);
    __decorate([
        property
    ], WxGameClubButton.prototype, "height", void 0);
    WxGameClubButton = WxGameClubButton_1 = __decorate([
        ccclass,
        menu("Wxsdk/WxGameClubButton")
    ], WxGameClubButton);
    return WxGameClubButton;
}(cc.Component));
exports.default = WxGameClubButton;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHd4c2RrXFxXeEdhbWVDbHViQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBOEIsRUFBRSxDQUFDLFVBQVUsRUFBekMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBQ2xELElBQUksU0FBUyxDQUFBO0FBR2I7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUF3RUM7UUFyRUcsYUFBTyxHQUE4QixJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckUsWUFBTSxHQUFRLElBQUksQ0FBQztRQUduQixXQUFLLEdBQVcsR0FBRyxDQUFDO1FBRXBCLFlBQU0sR0FBVyxFQUFFLENBQUM7O0lBK0R4QixDQUFDO3lCQXhFb0IsZ0JBQWdCO0lBV2pDLGlDQUFNLEdBQU47UUFDSSxrQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxvQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxvQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JDLGtCQUFnQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVPLHVDQUFZLEdBQXBCLFVBQXFCLFFBQVE7UUFDekIsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNaLFNBQVMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUN0QztRQUNELElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO1FBQzFELElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxZQUFZLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1FBQzNELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7UUFDdEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUN4QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFBO1NBQ3hCO1FBQ0QsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFBO1FBQy9DLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMxQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQy9CLElBQUksTUFBTSxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDMUIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFBO1FBQzVCLE1BQU0sR0FBRyxTQUFTLENBQUMsWUFBWSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFBO1FBQ3ZFLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQTtRQUM5QixNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUM7WUFDbEMsMEJBQTBCO1lBQzFCLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFO2dCQUNILElBQUksRUFBRSxPQUFPO2dCQUNiLEdBQUcsRUFBRSxNQUFNO2dCQUNYLEtBQUssRUFBRSxLQUFLO2dCQUNaLE1BQU0sRUFBRSxNQUFNO2FBQ2pCO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO1lBQ2xCLElBQUksR0FBRyxFQUFFO2dCQUNMLElBQUksUUFBUTtvQkFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDL0I7aUJBQU0sSUFBSSxRQUFRO2dCQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnQ0FBSyxHQUFMO1FBQUEsaUJBT0M7UUFORyxJQUFJLGFBQWEsRUFBRTtZQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBQSxHQUFHO2dCQUNqQixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7WUFDNUIsQ0FBQyxDQUFDLENBQUE7U0FFTDtJQUNMLENBQUM7O0lBN0RNLHlCQUFRLEdBQXFCLElBQUksQ0FBQTtJQVB4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztxREFDaUM7SUFJckU7UUFEQyxRQUFRO21EQUNXO0lBRXBCO1FBREMsUUFBUTtvREFDVztJQVRILGdCQUFnQjtRQUZwQyxPQUFPO1FBQ1AsSUFBSSxDQUFDLHdCQUF3QixDQUFDO09BQ1YsZ0JBQWdCLENBd0VwQztJQUFELHVCQUFDO0NBeEVELEFBd0VDLENBeEU2QyxFQUFFLENBQUMsU0FBUyxHQXdFekQ7a0JBeEVvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5sZXQgd3hTeXNJbmZvXHJcbkBjY2NsYXNzXHJcbkBtZW51KFwiV3hzZGsvV3hHYW1lQ2x1YkJ1dHRvblwiKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXeEdhbWVDbHViQnV0dG9uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcilcclxuICAgIGhhbmRsZXI6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgYnV0dG9uOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgd2lkdGg6IG51bWJlciA9IDIwMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgaGVpZ2h0OiBudW1iZXIgPSA0MDtcclxuICAgIHN0YXRpYyBpbnN0YW5jZTogV3hHYW1lQ2x1YkJ1dHRvbiA9IG51bGxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBXeEdhbWVDbHViQnV0dG9uLmluc3RhbmNlID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbiAmJiB0aGlzLmJ1dHRvbi5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMuYnV0dG9uICYmIHRoaXMuYnV0dG9uLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5idXR0b24gJiYgdGhpcy5idXR0b24uZGVzdHJveSgpO1xyXG4gICAgICAgIFd4R2FtZUNsdWJCdXR0b24uaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlQnV0dG9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKCF3eFN5c0luZm8pIHtcclxuICAgICAgICAgICAgd3hTeXNJbmZvID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGxlZnRQb3MgPSB3eFN5c0luZm8ud2luZG93V2lkdGggKiAwLjUgLSB0aGlzLndpZHRoIC8gMlxyXG4gICAgICAgIHZhciB0b3BQb3MgPSB3eFN5c0luZm8ud2luZG93SGVpZ2h0ICogMC41IC0gdGhpcy5oZWlnaHQgLyAyXHJcbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy53aWR0aFxyXG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmhlaWdodFxyXG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5kZXN0cm95KClcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGJ0blJlY3QgPSB0aGlzLm5vZGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKClcclxuICAgICAgICB2YXIgcmF0aW8gPSBjYy52aWV3LmdldERldmljZVBpeGVsUmF0aW8oKTtcclxuICAgICAgICB2YXIgc2NhbGUgPSBjYy52aWV3LmdldFNjYWxlWCgpXHJcbiAgICAgICAgdmFyIGZhY3RvciA9IHNjYWxlIC8gcmF0aW9cclxuICAgICAgICBsZWZ0UG9zID0gYnRuUmVjdC54ICogZmFjdG9yXHJcbiAgICAgICAgdG9wUG9zID0gd3hTeXNJbmZvLnNjcmVlbkhlaWdodCAtIChidG5SZWN0LnkgKyBidG5SZWN0LmhlaWdodCkgKiBmYWN0b3JcclxuICAgICAgICB3aWR0aCA9IGJ0blJlY3Qud2lkdGggKiBmYWN0b3JcclxuICAgICAgICBoZWlnaHQgPSBidG5SZWN0LmhlaWdodCAqIGZhY3RvclxyXG4gICAgICAgIHRoaXMuYnV0dG9uID0gd3guY3JlYXRlR2FtZUNsdWJCdXR0b24oe1xyXG4gICAgICAgICAgICAvL2dyZWVuLHdoaXRlLGRhcmsgLCBsaWdodFxyXG4gICAgICAgICAgICBpY29uOiAnbGlnaHQnLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogbGVmdFBvcyxcclxuICAgICAgICAgICAgICAgIHRvcDogdG9wUG9zLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5vblRhcCgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2socmVzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKENDX1dFQ0hBVEdBTUUpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVCdXR0b24ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlci5lbWl0KFtyZXNdKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=