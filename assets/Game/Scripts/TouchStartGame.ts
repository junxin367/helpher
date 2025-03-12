

const { ccclass, property } = cc._decorator;

@ccclass
export default class TouchStartGame extends cc.Component {

    @property({type: cc.Button, tooltip: '模拟点击的按钮，**记得去掉Button前面的勾**'})
    startBtn: cc.Button = null;

    @property({tooltip: '上下最大移动距离'})
    moveMaxDistance: number = 100;

    _distance: number = 0;
    _x: number = 0;
    _y: number = 0;

    onLoad() {
        this.node.on('touchstart', this.onBgTouchStart, this);
        this.node.on('touchend', this.onBgTouchEnd, this);
    }

    onDestroy() {
        this.node.off('touchstart', this.onBgTouchStart, this);
        this.node.off('touchend', this.onBgTouchEnd, this);
    }

    onBgTouchStart(event) {
        let pos = event.getLocation();
        // cc.log(`x: ${pos.x} y: ${pos.y}`)

        this._x = pos.x;
        this._y = pos.y;
    }

    onBgTouchEnd(event) {
        let pos = event.getLocation();
        // cc.log(`x: ${pos.x} y: ${pos.y}`)

        let x = Math.abs(pos.x - this._x);
        let y = Math.abs(pos.y - this._y);
        if (x < this.moveMaxDistance && y < this.moveMaxDistance) {
            this.startBtn.clickEvents[0].emit(['click']);
        }
    }
}