import Device from "./Device";

const { ccclass, property } = cc._decorator;
//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
@ccclass
export default class ClickAudio extends cc.Component {

    @property(cc.AudioClip)
    audio: cc.AudioClip = null;

    @property(cc.AudioClip)
    audio_down: cc.AudioClip = null;

    onLoad() {

        this.node.on('touchstart', _ => {
            //cc.EaseElasticOut:create(
            // this.node.stopAllActions();
            Device.playEffect(this.audio_down, false)
        }, this.node);

        this.node.on("touchend", _ => {
            Device.playEffect(this.audio, false)
        })
        this.node.on("touchcancel", _ => {
        })
    }

    // update (dt) {}
}
