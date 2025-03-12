
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/LocalTimeSystem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8385eiFRKxL5o1AHXxP+bVl', 'LocalTimeSystem');
// framework/misc/LocalTimeSystem.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
var LocalTimeSystem = /** @class */ (function () {
    function LocalTimeSystem() {
    }
    LocalTimeSystem.init = function (utc_msec) {
        if (utc_msec == null || utc_msec == undefined)
            return;
        LocalTimeSystem.utc_sec = utc_msec;
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            wx.onHide(this.onHidden);
            wx.onShow(this.onShown);
        }
        g.setGlobalInstance(LocalTimeSystem);
    };
    LocalTimeSystem.startTimer = function () {
        this.timer = setInterval(function (_) {
            LocalTimeSystem.utc_sec += 1000;
        }, 1000);
    };
    LocalTimeSystem.stopTimer = function () {
        clearInterval(this.timer);
    };
    LocalTimeSystem.getSec = function () {
        return LocalTimeSystem.utc_sec || new Date().getTime() / 1000;
    };
    LocalTimeSystem.getDate = function () {
        if (LocalTimeSystem.utc_sec) {
            var date = new Date();
            date.setTime(LocalTimeSystem.utc_sec * 1000);
            return date;
        }
        return new Date();
    };
    LocalTimeSystem.onHidden = function () {
        console.log("game enter background");
        // this.stopTimer();
    };
    LocalTimeSystem.onShown = function () {
        console.log("game enter foreground");
        // this.startTimer();
    };
    return LocalTimeSystem;
}());
exports.default = LocalTimeSystem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxMb2NhbFRpbWVTeXN0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4QkFBOEI7QUFDOUIsNENBQTRDO0FBQzVDLDRCQUE0QjtBQUM1QiwwQ0FBMEM7QUFDMUM7SUFBQTtJQXNEQSxDQUFDO0lBbERVLG9CQUFJLEdBQVgsVUFBWSxRQUFlO1FBRXZCLElBQUcsUUFBUSxJQUFJLElBQUksSUFBRSxRQUFRLElBQUksU0FBUztZQUFDLE9BQU87UUFDbEQsZUFBZSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDbkMsSUFBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFDeEM7WUFDSSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QixFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUMxQjtRQUNELENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sMEJBQVUsR0FBakI7UUFFSSxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxVQUFBLENBQUM7WUFDdEIsZUFBZSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUM7UUFDcEMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVNLHlCQUFTLEdBQWhCO1FBQ0ksYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU0sc0JBQU0sR0FBYjtRQUVJLE9BQU8sZUFBZSxDQUFDLE9BQU8sSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFDLElBQUksQ0FBQztJQUNoRSxDQUFDO0lBRU0sdUJBQU8sR0FBZDtRQUVJLElBQUcsZUFBZSxDQUFDLE9BQU8sRUFDMUI7WUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFBO1lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQyxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFHTSx3QkFBUSxHQUFmO1FBRUksT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO1FBQ3BDLG9CQUFvQjtJQUN4QixDQUFDO0lBQ00sdUJBQU8sR0FBZDtRQUVJLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtRQUNwQyxxQkFBcUI7SUFDekIsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0F0REEsQUFzREMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8v55S15a2Q6YKu5Lu2cHVoYWxza2lqc2VtZW5AZ21haWwuY29tXHJcbi8v5rqQ56CB572R56uZIOW8gHZwbuWFqOWxgOaooeW8j+aJk+W8gCBodHRwOi8vd2ViM2luY3ViYXRvcnMuY29tL1xyXG4vL+eUteaKpWh0dHBzOi8vdC5tZS9nYW1lY29kZTk5OVxyXG4vL+e9kemhteWuouacjSBodHRwOi8vd2ViM2luY3ViYXRvcnMuY29tL2tlZnUuaHRtbFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhbFRpbWVTeXN0ZW1cclxue1xyXG4gICAgc3RhdGljIHV0Y19zZWM6bnVtYmVyXHJcbiAgICBzdGF0aWMgdGltZXI6bnVtYmVyO1xyXG4gICAgc3RhdGljIGluaXQodXRjX21zZWM6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHV0Y19tc2VjID09IG51bGx8fHV0Y19tc2VjID09IHVuZGVmaW5lZClyZXR1cm47XHJcbiAgICAgICAgTG9jYWxUaW1lU3lzdGVtLnV0Y19zZWMgPSB1dGNfbXNlYztcclxuICAgICAgICBpZihjYy5zeXMuV0VDSEFUX0dBTUUgPT0gY2Muc3lzLnBsYXRmb3JtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd3gub25IaWRlKHRoaXMub25IaWRkZW4pO1xyXG4gICAgICAgICAgICB3eC5vblNob3codGhpcy5vblNob3duKVxyXG4gICAgICAgIH1cclxuICAgICAgICBnLnNldEdsb2JhbEluc3RhbmNlKExvY2FsVGltZVN5c3RlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHN0YXJ0VGltZXIoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbChfPT57XHJcbiAgICAgICAgICAgIExvY2FsVGltZVN5c3RlbS51dGNfc2VjICs9IDEwMDA7XHJcbiAgICAgICAgfSwxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc3RvcFRpbWVyKCl7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0U2VjKCk6bnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIExvY2FsVGltZVN5c3RlbS51dGNfc2VjIHx8IG5ldyBEYXRlKCkuZ2V0VGltZSgpLzEwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldERhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIGlmKExvY2FsVGltZVN5c3RlbS51dGNfc2VjKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgIGRhdGUuc2V0VGltZShMb2NhbFRpbWVTeXN0ZW0udXRjX3NlYyoxMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc3RhdGljIGxhc3RMb2NhbFRpbWU6bnVtYmVyO1xyXG4gICAgc3RhdGljIG9uSGlkZGVuKClcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImdhbWUgZW50ZXIgYmFja2dyb3VuZFwiKVxyXG4gICAgICAgIC8vIHRoaXMuc3RvcFRpbWVyKCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgb25TaG93bigpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnYW1lIGVudGVyIGZvcmVncm91bmRcIilcclxuICAgICAgICAvLyB0aGlzLnN0YXJ0VGltZXIoKTtcclxuICAgIH1cclxufSJdfQ==