const { ccclass, property } = cc._decorator;
@ccclass
export default class LayerRenderToTexutre extends cc.Component {

    @property(cc.Camera)
    camera: cc.Camera = null;

    @property(cc.Sprite)
    display: cc.Sprite = null;


    onLoad() {
        const texture = new cc.RenderTexture();
        texture.initWithSize(cc.winSize.width, cc.winSize.height);
        this.display.node.width = cc.winSize.width;
        this.display.node.height = cc.winSize.height;
        const spriteFrame = new cc.SpriteFrame();
        spriteFrame.setTexture(texture);
        this.camera.targetTexture = texture;
        this.display.spriteFrame = spriteFrame;
        this.display.node.scaleY = -1;
    }

}
