
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/Device.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '24210hhDfpAgLyIkM7QznF8', 'Device');
// framework/misc/Device.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
var Device = /** @class */ (function () {
    function Device() {
    }
    Device.setSoundsEnable = function (b) {
        Device.setSFXEnable(b);
        Device.setBGMEnable(b);
    };
    Device.setSFXEnable = function (b) {
        Device.isSfxEnabled = b;
    };
    Device.setVibrateEnable = function (b) {
        this.isVibrateEnabled = b;
    };
    Device.setBGMEnable = function (b) {
        Device.isBgmEnabled = b;
        if (!b) {
            // cc.audioEngine.pauseMusic()
            cc.audioEngine.stopMusic();
            // this.bgm_clip && this.bgm_clip.pause();
        }
        else {
            this.playBGM(Device.tmp_bgm_url);
            // this.bgm_clip && this.bgm_clip.play();
            // cc.audioEngine.resumeMusic();
        }
    };
    Device.playSfx = function (url, loop, volume) {
        var _this = this;
        if (loop === void 0) { loop = false; }
        if (volume === void 0) { volume = 1; }
        this.stopSfx(url);
        if (!Device.isSfxEnabled) {
            return;
        }
        cc.resources.load(Device.audio_path + url, cc.AudioClip, function (err, clip) {
            if (err)
                console.warn(err);
            else {
                _this._clips[url] = _this.playEffect(clip, loop, volume);
            }
        });
    };
    Device.stopSfx = function (url) {
        var clip = this._clips[url];
        cc.audioEngine.stopEffect(clip);
        // if (clip) {
        //     clip.stop();
        // }
    };
    Device.stopAllEffect = function () {
        cc.audioEngine.stopAllEffects();
        // for (var k in this._clips) {
        //     let v = this._clips[k];
        //     v.stop();
        // }
    };
    Device.playBGM = function (url, loop) {
        var _this = this;
        if (loop === void 0) { loop = true; }
        this.tmp_bgm_url = url;
        if (!Device.isBgmEnabled) {
            return;
        }
        this.stopMusic();
        cc.resources.load(Device.audio_path + url, cc.AudioClip, function (err, clip) {
            if (err)
                console.log(err);
            else {
                _this.playMusic(clip, loop);
            }
        });
    };
    Device.setAudioPath = function (path) {
        Device.audio_path = path;
    };
    Device.playEffect = function (clip, loop, volume) {
        if (loop === void 0) { loop = false; }
        if (volume === void 0) { volume = 1; }
        if (Device.isSfxEnabled) {
            // console.log(clip);
            return cc.audioEngine.playEffect(clip, loop);
            // clip.setLoop(loop);
            // clip.setVolume(volume);
            // return clip.play();
        }
    };
    Device.stopEffect = function (id) {
        cc.audioEngine.stopEffect(id);
    };
    Device.stopMusic = function () {
        // this.bgm_clip && this.bgm_clip.stop();
        cc.audioEngine.stopMusic();
    };
    Device.playMusic = function (clip, loop) {
        if (loop === void 0) { loop = true; }
        if (Device.isBgmEnabled) {
            // this.bgm_clip = clip;
            this.bgm_clip = cc.audioEngine.playMusic(clip, loop);
            // clip.setLoop(loop);
            // return clip.play();
        }
    };
    Device.vibrate = function (long) {
        if (!this.isVibrateEnabled) {
            return;
        }
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            if (long)
                wx.vibrateLong();
            else
                wx.vibrateShort();
        }
        else {
            // console.log("not support vibrate on except-wx platfrom ")
        }
    };
    Device.isSfxEnabled = true;
    Device.isBgmEnabled = true;
    Device.isVibrateEnabled = true;
    Device.audio_path = "Audio/";
    Device.tmp_bgm_url = null;
    Device._clips = {};
    Device.bgm_clip = null;
    return Device;
}());
exports.default = Device;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxEZXZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4QkFBOEI7QUFDOUIsNENBQTRDO0FBQzVDLDRCQUE0QjtBQUM1QiwwQ0FBMEM7QUFDMUM7SUFBQTtJQWdJQSxDQUFDO0lBdkhVLHNCQUFlLEdBQXRCLFVBQXVCLENBQVU7UUFDN0IsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN0QixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFTSxtQkFBWSxHQUFuQixVQUFvQixDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTSx1QkFBZ0IsR0FBdkIsVUFBd0IsQ0FBQztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFJTSxtQkFBWSxHQUFuQixVQUFvQixDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDSiw4QkFBOEI7WUFDOUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtZQUMxQiwwQ0FBMEM7U0FDN0M7YUFBTTtZQUNILElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2pDLHlDQUF5QztZQUN6QyxnQ0FBZ0M7U0FDbkM7SUFDTCxDQUFDO0lBSU0sY0FBTyxHQUFkLFVBQWUsR0FBRyxFQUFFLElBQVksRUFBRSxNQUFVO1FBQTVDLGlCQVVDO1FBVm1CLHFCQUFBLEVBQUEsWUFBWTtRQUFFLHVCQUFBLEVBQUEsVUFBVTtRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQUUsT0FBTTtTQUFF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LElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDeEIsT0FBTztTQUNWO1FBQ0QsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUN2QyxJQUFJLElBQUk7Z0JBQ0osRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFBOztnQkFFaEIsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3pCO2FBQU07WUFDSCw0REFBNEQ7U0FDL0Q7SUFDTCxDQUFDO0lBN0hNLG1CQUFZLEdBQUcsSUFBSSxDQUFDO0lBRXBCLG1CQUFZLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLHVCQUFnQixHQUFHLElBQUksQ0FBQztJQUV4QixpQkFBVSxHQUFHLFFBQVEsQ0FBQTtJQWVyQixrQkFBVyxHQUFXLElBQUksQ0FBQztJQWUzQixhQUFNLEdBQTZCLEVBQUUsQ0FBQTtJQThEckMsZUFBUSxHQUFRLElBQUksQ0FBQztJQTZCaEMsYUFBQztDQWhJRCxBQWdJQyxJQUFBO2tCQWhJb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8v55S15a2Q6YKu5Lu2cHVoYWxza2lqc2VtZW5AZ21haWwuY29tXHJcbi8v5rqQ56CB572R56uZIOW8gHZwbuWFqOWxgOaooeW8j+aJk+W8gCBodHRwOi8vd2ViM2luY3ViYXRvcnMuY29tL1xyXG4vL+eUteaKpWh0dHBzOi8vdC5tZS9nYW1lY29kZTk5OVxyXG4vL+e9kemhteWuouacjSBodHRwOi8vd2ViM2luY3ViYXRvcnMuY29tL2tlZnUuaHRtbFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXZpY2Uge1xyXG5cclxuICAgIHN0YXRpYyBpc1NmeEVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIHN0YXRpYyBpc0JnbUVuYWJsZWQgPSB0cnVlO1xyXG4gICAgc3RhdGljIGlzVmlicmF0ZUVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIHN0YXRpYyBhdWRpb19wYXRoID0gXCJBdWRpby9cIlxyXG5cclxuICAgIHN0YXRpYyBzZXRTb3VuZHNFbmFibGUoYjogYm9vbGVhbikge1xyXG4gICAgICAgIERldmljZS5zZXRTRlhFbmFibGUoYilcclxuICAgICAgICBEZXZpY2Uuc2V0QkdNRW5hYmxlKGIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRTRlhFbmFibGUoYikge1xyXG4gICAgICAgIERldmljZS5pc1NmeEVuYWJsZWQgPSBiO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRWaWJyYXRlRW5hYmxlKGIpIHtcclxuICAgICAgICB0aGlzLmlzVmlicmF0ZUVuYWJsZWQgPSBiO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0bXBfYmdtX3VybDogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICBzdGF0aWMgc2V0QkdNRW5hYmxlKGIpIHtcclxuICAgICAgICBEZXZpY2UuaXNCZ21FbmFibGVkID0gYjtcclxuICAgICAgICBpZiAoIWIpIHtcclxuICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpXHJcbiAgICAgICAgICAgIC8vIHRoaXMuYmdtX2NsaXAgJiYgdGhpcy5iZ21fY2xpcC5wYXVzZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheUJHTShEZXZpY2UudG1wX2JnbV91cmwpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmJnbV9jbGlwICYmIHRoaXMuYmdtX2NsaXAucGxheSgpO1xyXG4gICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5yZXN1bWVNdXNpYygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgX2NsaXBzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fVxyXG5cclxuICAgIHN0YXRpYyBwbGF5U2Z4KHVybCwgbG9vcCA9IGZhbHNlLCB2b2x1bWUgPSAxKSB7XHJcbiAgICAgICAgdGhpcy5zdG9wU2Z4KHVybCk7XHJcbiAgICAgICAgaWYgKCFEZXZpY2UuaXNTZnhFbmFibGVkKSB7IHJldHVybiB9XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoRGV2aWNlLmF1ZGlvX3BhdGggKyB1cmwsIGNjLkF1ZGlvQ2xpcCwgKGVyciwgY2xpcDogY2MuQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyKVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NsaXBzW3VybF0gPSB0aGlzLnBsYXlFZmZlY3QoY2xpcCwgbG9vcCwgdm9sdW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzdG9wU2Z4KHVybCkge1xyXG4gICAgICAgIGxldCBjbGlwID0gdGhpcy5fY2xpcHNbdXJsXVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QoY2xpcCk7XHJcbiAgICAgICAgLy8gaWYgKGNsaXApIHtcclxuICAgICAgICAvLyAgICAgY2xpcC5zdG9wKCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzdG9wQWxsRWZmZWN0KCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgLy8gZm9yICh2YXIgayBpbiB0aGlzLl9jbGlwcykge1xyXG4gICAgICAgIC8vICAgICBsZXQgdiA9IHRoaXMuX2NsaXBzW2tdO1xyXG4gICAgICAgIC8vICAgICB2LnN0b3AoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBsYXlCR00odXJsLCBsb29wID0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMudG1wX2JnbV91cmwgPSB1cmw7XHJcbiAgICAgICAgaWYgKCFEZXZpY2UuaXNCZ21FbmFibGVkKSB7IHJldHVybiB9XHJcbiAgICAgICAgdGhpcy5zdG9wTXVzaWMoKTtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChEZXZpY2UuYXVkaW9fcGF0aCArIHVybCwgY2MuQXVkaW9DbGlwLCAoZXJyLCBjbGlwOiBjYy5BdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlNdXNpYyhjbGlwLCBsb29wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgc2V0QXVkaW9QYXRoKHBhdGgpIHtcclxuICAgICAgICBEZXZpY2UuYXVkaW9fcGF0aCA9IHBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBsYXlFZmZlY3QoY2xpcDogY2MuQXVkaW9DbGlwLCBsb29wID0gZmFsc2UsIHZvbHVtZSA9IDEpIHtcclxuICAgICAgICBpZiAoRGV2aWNlLmlzU2Z4RW5hYmxlZCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjbGlwKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoY2xpcCwgbG9vcCk7XHJcbiAgICAgICAgICAgIC8vIGNsaXAuc2V0TG9vcChsb29wKTtcclxuICAgICAgICAgICAgLy8gY2xpcC5zZXRWb2x1bWUodm9sdW1lKTtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIGNsaXAucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc3RvcEVmZmVjdChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdChpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGJnbV9jbGlwOiBhbnkgPSBudWxsO1xyXG4gICAgc3RhdGljIHN0b3BNdXNpYygpIHtcclxuICAgICAgICAvLyB0aGlzLmJnbV9jbGlwICYmIHRoaXMuYmdtX2NsaXAuc3RvcCgpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwbGF5TXVzaWMoY2xpcDogY2MuQXVkaW9DbGlwLCBsb29wID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmIChEZXZpY2UuaXNCZ21FbmFibGVkKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYmdtX2NsaXAgPSBjbGlwO1xyXG4gICAgICAgICAgICB0aGlzLmJnbV9jbGlwID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKGNsaXAsIGxvb3ApO1xyXG4gICAgICAgICAgICAvLyBjbGlwLnNldExvb3AobG9vcCk7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBjbGlwLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyB2aWJyYXRlKGxvbmc/KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmlicmF0ZUVuYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2Muc3lzLldFQ0hBVF9HQU1FID09IGNjLnN5cy5wbGF0Zm9ybSkge1xyXG4gICAgICAgICAgICBpZiAobG9uZylcclxuICAgICAgICAgICAgICAgIHd4LnZpYnJhdGVMb25nKClcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgd3gudmlicmF0ZVNob3J0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJub3Qgc3VwcG9ydCB2aWJyYXRlIG9uIGV4Y2VwdC13eCBwbGF0ZnJvbSBcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=