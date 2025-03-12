
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/wxsdk/WxgetInfoButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ec38chyDftF94LQwttCl+9C', 'WxgetInfoButton');
// framework/extension/wxsdk/WxgetInfoButton.ts

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
var Platform_1 = require("../Platform");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var wxSysInfo;
var WxgetInfoButton = /** @class */ (function (_super) {
    __extends(WxgetInfoButton, _super);
    function WxgetInfoButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handler = new cc.Component.EventHandler();
        _this.button = null;
        _this.width = 200;
        _this.height = 40;
        return _this;
    }
    WxgetInfoButton.prototype.onLoad = function () {
    };
    WxgetInfoButton.prototype.onEnable = function () {
        this.button && this.button.show();
    };
    WxgetInfoButton.prototype.onDisable = function () {
        this.button && this.button.hide();
    };
    WxgetInfoButton.prototype.onDestroy = function () {
        this.button && this.button.destroy();
    };
    WxgetInfoButton.prototype.createButton = function (callback) {
        var _this = this;
        if (!wxSysInfo) {
            wxSysInfo = wx.getSystemInfoSync();
        }
        console.log("------未授权! 调用wx.createUserInfoButton-------", wx.getSystemInfoSync().windowWidth);
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
        // var point = cc.v2(btnRect.x, btnRect.y)
        // cc.view._convertPointWithScale(point)
        leftPos = btnRect.x * factor;
        topPos = wxSysInfo.screenHeight - (btnRect.y + btnRect.height) * factor;
        width = btnRect.width * factor;
        height = btnRect.height * factor;
        this.button = wx.createUserInfoButton({
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
            if (res && res.userInfo) {
                console.log("res", res);
                _this.button.destroy();
                if (callback) {
                    callback(res.userInfo);
                }
            }
            else if (callback) {
                callback(null);
            }
        });
    };
    WxgetInfoButton.prototype.start = function () {
        var _this = this;
        Platform_1.default.checkAuth().then(function (v) {
            if (!v) {
                if (CC_WECHATGAME) {
                    _this.createButton(function (userInfo) {
                        _this.onClick(userInfo, true);
                    });
                }
            }
            else {
                _this.node.on(cc.Node.EventType.TOUCH_END, _this.onClick.bind(_this, v, false));
                // this.handler.emit([v])
                //n已授权无需创建 按钮
                // this.infoHandler.emit([v])
            }
        });
    };
    WxgetInfoButton.prototype.onClick = function (userInfo, isNew) {
        this.handler.emit([userInfo, isNew]);
    };
    __decorate([
        property(cc.Component.EventHandler)
    ], WxgetInfoButton.prototype, "handler", void 0);
    __decorate([
        property
    ], WxgetInfoButton.prototype, "width", void 0);
    __decorate([
        property
    ], WxgetInfoButton.prototype, "height", void 0);
    WxgetInfoButton = __decorate([
        ccclass,
        menu("Wxsdk/WxgetInfoButton")
    ], WxgetInfoButton);
    return WxgetInfoButton;
}(cc.Component));
exports.default = WxgetInfoButton;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHd4c2RrXFxXeGdldEluZm9CdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQW1DO0FBRTdCLElBQUEsS0FBOEIsRUFBRSxDQUFDLFVBQVUsRUFBekMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBQ2xELElBQUksU0FBUyxDQUFBO0FBR2I7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUE0RkM7UUF6RkcsYUFBTyxHQUE4QixJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckUsWUFBTSxHQUFRLElBQUksQ0FBQztRQUVuQixXQUFLLEdBQVcsR0FBRyxDQUFDO1FBRXBCLFlBQU0sR0FBVyxFQUFFLENBQUM7O0lBb0Z4QixDQUFDO0lBbkZHLGdDQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsbUNBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsbUNBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBQ08sc0NBQVksR0FBcEIsVUFBcUIsUUFBUTtRQUE3QixpQkErQ0M7UUE5Q0csSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNaLFNBQVMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUN0QztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsNkNBQTZDLEVBQUUsRUFBRSxDQUFDLGlCQUFpQixF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Q0FBQyxJQUFJLENBQUMsS0FBSSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFBO2dCQUM1RSx5QkFBeUI7Z0JBQ3pCLGFBQWE7Z0JBQ2IsNkJBQTZCO2FBQ2hDO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsaUNBQU8sR0FBUCxVQUFRLFFBQVEsRUFBRSxLQUFLO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQXhGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztvREFDaUM7SUFHckU7UUFEQyxRQUFRO2tEQUNXO0lBRXBCO1FBREMsUUFBUTttREFDVztJQVJILGVBQWU7UUFGbkMsT0FBTztRQUNQLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztPQUNULGVBQWUsQ0E0Rm5DO0lBQUQsc0JBQUM7Q0E1RkQsQUE0RkMsQ0E1RjRDLEVBQUUsQ0FBQyxTQUFTLEdBNEZ4RDtrQkE1Rm9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxhdGZvcm0gZnJvbSBcIi4uL1BsYXRmb3JtXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5sZXQgd3hTeXNJbmZvXHJcbkBjY2NsYXNzXHJcbkBtZW51KFwiV3hzZGsvV3hnZXRJbmZvQnV0dG9uXCIpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFd4Z2V0SW5mb0J1dHRvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIpXHJcbiAgICBoYW5kbGVyOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgIGJ1dHRvbjogYW55ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgd2lkdGg6IG51bWJlciA9IDIwMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgaGVpZ2h0OiBudW1iZXIgPSA0MDtcclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5idXR0b24gJiYgdGhpcy5idXR0b24uc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbiAmJiB0aGlzLmJ1dHRvbi5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuYnV0dG9uICYmIHRoaXMuYnV0dG9uLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY3JlYXRlQnV0dG9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKCF3eFN5c0luZm8pIHtcclxuICAgICAgICAgICAgd3hTeXNJbmZvID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS3mnKrmjojmnYMhIOiwg+eUqHd4LmNyZWF0ZVVzZXJJbmZvQnV0dG9uLS0tLS0tLVwiLCB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoKVxyXG4gICAgICAgIHZhciBsZWZ0UG9zID0gd3hTeXNJbmZvLndpbmRvd1dpZHRoICogMC41IC0gdGhpcy53aWR0aCAvIDJcclxuICAgICAgICB2YXIgdG9wUG9zID0gd3hTeXNJbmZvLndpbmRvd0hlaWdodCAqIDAuNSAtIHRoaXMuaGVpZ2h0IC8gMlxyXG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMud2lkdGhcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5oZWlnaHRcclxuICAgICAgICBpZiAodGhpcy5idXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24uZGVzdHJveSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBidG5SZWN0ID0gdGhpcy5ub2RlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpXHJcbiAgICAgICAgdmFyIHJhdGlvID0gY2Mudmlldy5nZXREZXZpY2VQaXhlbFJhdGlvKCk7XHJcbiAgICAgICAgdmFyIHNjYWxlID0gY2Mudmlldy5nZXRTY2FsZVgoKVxyXG4gICAgICAgIHZhciBmYWN0b3IgPSBzY2FsZSAvIHJhdGlvXHJcbiAgICAgICAgLy8gdmFyIHBvaW50ID0gY2MudjIoYnRuUmVjdC54LCBidG5SZWN0LnkpXHJcbiAgICAgICAgLy8gY2Mudmlldy5fY29udmVydFBvaW50V2l0aFNjYWxlKHBvaW50KVxyXG4gICAgICAgIGxlZnRQb3MgPSBidG5SZWN0LnggKiBmYWN0b3JcclxuICAgICAgICB0b3BQb3MgPSB3eFN5c0luZm8uc2NyZWVuSGVpZ2h0IC0gKGJ0blJlY3QueSArIGJ0blJlY3QuaGVpZ2h0KSAqIGZhY3RvclxyXG4gICAgICAgIHdpZHRoID0gYnRuUmVjdC53aWR0aCAqIGZhY3RvclxyXG4gICAgICAgIGhlaWdodCA9IGJ0blJlY3QuaGVpZ2h0ICogZmFjdG9yXHJcbiAgICAgICAgdGhpcy5idXR0b24gPSB3eC5jcmVhdGVVc2VySW5mb0J1dHRvbih7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIiAgICAgICAgXCIsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBsZWZ0UG9zLFxyXG4gICAgICAgICAgICAgICAgdG9wOiB0b3BQb3MsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDYwLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAwMCcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5vblRhcCgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLnVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc1wiLCByZXMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXMudXNlckluZm8pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgUGxhdGZvcm0uY2hlY2tBdXRoKCkudGhlbih2ID0+IHtcclxuICAgICAgICAgICAgaWYgKCF2KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQ0NfV0VDSEFUR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQnV0dG9uKHVzZXJJbmZvID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNsaWNrKHVzZXJJbmZvLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzLCB2LCBmYWxzZSkpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmhhbmRsZXIuZW1pdChbdl0pXHJcbiAgICAgICAgICAgICAgICAvL27lt7LmjojmnYPml6DpnIDliJvlu7og5oyJ6ZKuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmluZm9IYW5kbGVyLmVtaXQoW3ZdKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKHVzZXJJbmZvLCBpc05ldykge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlci5lbWl0KFt1c2VySW5mbywgaXNOZXddKVxyXG4gICAgfVxyXG59Il19