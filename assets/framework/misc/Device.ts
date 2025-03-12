//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
export default class Device {

    static isSfxEnabled = true;

    static isBgmEnabled = true;
    static isVibrateEnabled = true;

    static audio_path = "Audio/"

    static setSoundsEnable(b: boolean) {
        Device.setSFXEnable(b)
        Device.setBGMEnable(b);
    }

    static setSFXEnable(b) {
        Device.isSfxEnabled = b;
    }

    static setVibrateEnable(b) {
        this.isVibrateEnabled = b;
    }

    static tmp_bgm_url: string = null;

    static setBGMEnable(b) {
        Device.isBgmEnabled = b;
        if (!b) {
            // cc.audioEngine.pauseMusic()
            cc.audioEngine.stopMusic()
            // this.bgm_clip && this.bgm_clip.pause();
        } else {
            this.playBGM(Device.tmp_bgm_url);
            // this.bgm_clip && this.bgm_clip.play();
            // cc.audioEngine.resumeMusic();
        }
    }

    static _clips: { [index: string]: any } = {}

    static playSfx(url, loop = false, volume = 1) {
        this.stopSfx(url);
        if (!Device.isSfxEnabled) { return }
        cc.resources.load(Device.audio_path + url, cc.AudioClip, (err, clip: cc.AudioClip) => {
            if (err)
                console.warn(err)
            else {
                this._clips[url] = this.playEffect(clip, loop, volume);
            }
        });
    }

    static stopSfx(url) {
        let clip = this._clips[url]
        cc.audioEngine.stopEffect(clip);
        // if (clip) {
        //     clip.stop();
        // }
    }

    static stopAllEffect() {
        cc.audioEngine.stopAllEffects();
        // for (var k in this._clips) {
        //     let v = this._clips[k];
        //     v.stop();
        // }
    }

    static playBGM(url, loop = true) {
        this.tmp_bgm_url = url;
        if (!Device.isBgmEnabled) { return }
        this.stopMusic();
        cc.resources.load(Device.audio_path + url, cc.AudioClip, (err, clip: cc.AudioClip) => {
            if (err)
                console.log(err)
            else {
                this.playMusic(clip, loop);
            }
        });
    }


    static setAudioPath(path) {
        Device.audio_path = path;
    }

    static playEffect(clip: cc.AudioClip, loop = false, volume = 1) {
        if (Device.isSfxEnabled) {
            // console.log(clip);
            return cc.audioEngine.playEffect(clip, loop);
            // clip.setLoop(loop);
            // clip.setVolume(volume);
            // return clip.play();
        }
    }

    static stopEffect(id: number) {
        cc.audioEngine.stopEffect(id);
    }

    static bgm_clip: any = null;
    static stopMusic() {
        // this.bgm_clip && this.bgm_clip.stop();
        cc.audioEngine.stopMusic();
    }

    static playMusic(clip: cc.AudioClip, loop = true) {
        if (Device.isBgmEnabled) {
            // this.bgm_clip = clip;
            this.bgm_clip = cc.audioEngine.playMusic(clip, loop);
            // clip.setLoop(loop);
            // return clip.play();
        }
    }


    static vibrate(long?) {
        if (!this.isVibrateEnabled) {
            return;
        }
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            if (long)
                wx.vibrateLong()
            else
                wx.vibrateShort();
        } else {
            // console.log("not support vibrate on except-wx platfrom ")
        }
    }
}