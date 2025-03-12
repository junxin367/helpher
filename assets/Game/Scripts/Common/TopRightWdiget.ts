let { ccclass, property } = cc._decorator
@ccclass
export default class TopRightWidget extends cc.Component {

    widget: cc.Widget = null;

    onLoad() {
        this.widget = this.getComponent(cc.Widget);
        if (cc.winSize.width / cc.winSize.height < 0.5) {
            this.widget.top = 180;
        } else {
            this.widget.top = 120;
        }
        this.widget.updateAlignment();
    }

    start() {

    }
}