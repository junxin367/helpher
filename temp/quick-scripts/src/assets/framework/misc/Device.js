"use strict";
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