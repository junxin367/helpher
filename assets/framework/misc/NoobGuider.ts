import Signal from "../core/Signal";
import { evt } from "../core/event";
import ViewManager from "../ui/ViewManager";

const { ccclass, property } = cc._decorator;

export let Guider: NoobGuider = null;
const DOUBLECLICK_TIMEOUT = 300;
const ACTION_MOVE_FINGER = 1000;
@ccclass
export default class NoobGuider extends cc.Component {
    _lastClickedTime: number = 0;

    /**whole hot rect -> contains 0.maskbackgrounds 1.hightlight 2.highlight_border 3.finger */
    @property(cc.Node)
    wholeHotRect: cc.Node = null;
    //------------------------------------------------------------------------------//
    /** click_area(self)/ highlight_border /finger */
    @property(cc.Node)
    hotRect: cc.Node = null;

    @property(cc.Node)
    highlight: cc.Node = null;
    @property(cc.Sprite)
    highlight_border: cc.Sprite = null;
    @property(cc.Node)
    finger: cc.Node = null;

    @property(cc.Node)
    glow: cc.Node = null;

    motionStreak: cc.MotionStreak = null;

    //------------------------------------------------------------------------------//

    @property(cc.Node)
    msgNode: cc.Node = null;

    @property(cc.Label)
    msgLabel: cc.Label = null;

    clickSignal: Signal = new Signal();
    clickBackground: Signal = new Signal();
    doubleClickSignal: Signal = new Signal();

    @property(cc.Node)
    background: cc.Node = null;


    @property(cc.SpriteFrame)
    maskStencilSp1: cc.SpriteFrame = null;

    @property(cc.Label)
    msgTitleLabel: cc.Label = null;

    @property(cc.Label)
    msgButtonLabel: cc.Label = null;

    @property(cc.Button)
    msgButton: cc.Button = null;

    @property(cc.Node)
    node_anyKey: cc.Node = null;

    msgButtonCallback: Function = null;

    maskComp: cc.Mask = null;

    msgTitle: string = "";

    validRect: cc.Rect = null;

    onLoad() {
        this.maskComp = this.highlight.getComponent(cc.Mask)
        this.hotRect.on(cc.Node.EventType.TOUCH_START, this.onPointTouchBegan, this)
        this.hotRect.on(cc.Node.EventType.TOUCH_END, this.onPointClick, this)

        this.background.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.background.on(cc.Node.EventType.TOUCH_END, this.clickBackground.fire, this.clickBackground)
        this.hidePointer()
        this.hideMessage();
        this.motionStreak = this.finger.getComponentInChildren(cc.MotionStreak);
    }

    onDestroy() {
        this.hotRect.off(cc.Node.EventType.TOUCH_END, this.onPointClick, this)
        this.background.off(cc.Node.EventType.TOUCH_END, this.clickBackground.fire, this.clickBackground)
        this.hotRect.off(cc.Node.EventType.TOUCH_START, this.onPointTouchBegan, this)
        this.background.off(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
    }

    onShown() {

    }

    onPointTouchBegan(e) {
        return false
    }

    onTouchBegan(e) {
        if (!this.validRect) return false;
        let p = e.currentTouch.getLocation
        if (this.validRect.contains(p)) {
            //可穿透
            return false
        }
        return true;
    }

    hideMask() {
        this.background.active = false;
    }

    showMask() {
        this.background.active = true;
    }

    hidePointer() {
        // this.pointer.active = false;
        this.wholeHotRect.x = -1000;
        this.background.getComponent(cc.Widget).updateAlignment();
        this.motionStreak && this.motionStreak.reset();
    }

    hideRect() {
        this.highlight_border.node.active = false;
    }

    /**
     * is_clickArea : false 可以点击 到该 区域下面的控件，
     */
    showRect(rect: cc.Rect | string, is_clickArea?) {
        if (typeof (rect) == "string") {
            rect = this.findUINode(rect).getBoundingBoxToWorld();
        }
        let p = this.node.convertToNodeSpaceAR(rect.center);
        this.highlight.width = rect.width;
        this.highlight.height = rect.height;
        this.highlight_border.node.width = rect.width + 2;
        this.highlight_border.node.height = rect.height + 2;
        this.wholeHotRect.active = true
        this.wholeHotRect.x = p.x
        this.wholeHotRect.y = p.y;
        this.validRect = rect;
        this.highlight_border.node.active = true;
        if (is_clickArea) {
            this.hotRect.width = rect.width;
            this.hotRect.height = rect.height;
        } else {
            this.hotRect.width = 0;
            this.hotRect.height = 0;
        }
        this.background.getComponent(cc.Widget).updateAlignment();
    }

    showFinger(bAnim = true) {
        this.finger.position = cc.Vec2.ZERO;
        this.motionStreak && this.motionStreak.reset()
        this.finger.active = true;
        if (bAnim) {
            this.finger.getComponent(cc.Animation).play("hand_click")
            this.glow.active = true
        } else {
            this.finger.getComponent(cc.Animation).stop("hand_click")
            this.glow.active = false;
        }
    }

    showPointer(node: cc.Node | cc.Vec2 = cc.Vec2.ZERO, simulate_click_area = true) {
        if (node instanceof cc.Node) {
            let rect = node.getBoundingBoxToWorld()
            this.showRect(rect, simulate_click_area);
            if (node.getComponent(cc.Sprite))
                this.maskComp.spriteFrame = node.getComponent(cc.Sprite).spriteFrame;
            else {
                if (this.maskStencilSp1)
                    this.maskComp.spriteFrame = this.maskStencilSp1;
            }
            this.showFinger();
        }
        this.showMask();
        // this.pointAvatar.children.forEach((v, i) => v.active = avatar == i)
    }

    hideMessage() {
        this.msgNode.active = false;
    }

    setMessageTitle(msgTitle: string) {
        this.msgTitle = msgTitle;
    }

    showMessage(msg: string, x?, y?, w?, h?) {
        msg = msg.replace(/\/r?\/n/g, "\n")
        this.msgNode.x = x || 0;
        this.msgNode.y = y || 0;
        this.msgNode.width = w;
        this.msgNode.height = h;
        this.msgNode.active = true;
        this.msgLabel.string = msg;
        if (this.msgTitle == null || this.msgTitle == "") {
            this.msgTitleLabel.node.active = false
        }
        else {
            this.msgTitleLabel.node.active = true;
            this.msgTitleLabel.string = this.msgTitle;
        }
        this.msgTitle = ""
        this.msgButton.node.active = false
        this.node_anyKey.active = false;
    }

    showMessageButton(msg: string, callback) {
        this.msgButton.node.active = true;
        this.msgButtonLabel.string = msg;
        this.msgButtonCallback = callback;
    }

    showMessageButtonEx(buttonText, buttonCallback) {
        return new Promise(resolve => {
            if (buttonText) {
                this.showMessageButton(buttonText, _ => {
                    resolve()
                });
            }
        })
    }

    showMessageEx(title, content, buttonText?, buttonCallback?, x?, y?, w?, h?) {
        this.setMessageTitle(title);
        this.showMessage(content, x, y, w, h)
        if (buttonText) {
            return this.showMessageButtonEx(buttonText, buttonCallback);
        }
    }


    click_msgButton() {
        this.hideMessage();
        this.msgButtonCallback && this.msgButtonCallback();
    }

    onPointClick() {
        let now = Date.now()
        let offset = now - this._lastClickedTime
        if (offset < DOUBLECLICK_TIMEOUT) {
            this.doubleClickSignal.fire();
        } else {
            this.clickSignal.fire();
        }
        this._lastClickedTime = now;
    }

    async waitClick(node: cc.Node, canTrigger = true, showHands = true) {
        this.showPointer(node);
        if (!showHands) {
            this.hideFinger()
        }
        // btn.clickEvents.
        return new Promise((resolve, reject) => {
            this.clickSignal.on(() => {
                if (canTrigger) {
                    let btn = node.getComponent(cc.Button) || node.getComponentInChildren(cc.Button);
                    try {
                        if (btn)
                            cc.Component.EventHandler.emitEvents(btn.clickEvents, { target: btn.node });
                        else {
                            node.emit(cc.Node.EventType.TOUCH_END, { target: node })
                        }
                    } catch (e) {
                        reject(e)
                    }
                    this.clickSignal.clear();
                }
                resolve();
            })
        })
    }

    async waitDoubleClick(node) {
        this.showPointer(node);
        return new Promise((resolve, reject) => {
            this.doubleClickSignal.on(() => {
                node.getComponents(cc.Component).forEach(v => {
                    let func = v['onDoubleClick'] as Function
                    if (func) {
                        func.call(v);
                    }
                })
                resolve();
            })
        })
    }

    async waitAnyKey(node?: cc.Node) {
        this.node_anyKey.active = true
        return new Promise((resolve, reject) => {
            this.clickBackground.on(() => {
                this.clickBackground.clear();
                resolve();
            })
            if (node) {
                this.waitClick(node, false, false).then(v => {
                    resolve();
                })
            }
        })
    }


    moveFinger(from: cc.Vec2, to: cc.Vec2, repeatTimes = cc.macro.REPEAT_FOREVER) {
        this.showFinger(false);

        from = this.hotRect.convertToNodeSpaceAR(from)
        to = this.hotRect.convertToNodeSpaceAR(to)
        from.subSelf(cc.v2(0, 50))
        to.subSelf(cc.v2(0, 50))
        let callback = cc.callFunc(v => {
            this.finger.position = from
            this.motionStreak && this.motionStreak.reset()
        })
        let move = cc.moveTo(1, to).easing(cc.easeSineInOut());
        let delay = cc.delayTime(1);
        let seq = cc.sequence(callback, move, delay).repeat(repeatTimes)
        seq.setTag(ACTION_MOVE_FINGER)
        this.finger.runAction(seq)
    }

    startDrag(from, to, showMask = true) {
        let fromNode = this.findUINode(from);
        let toNode = this.findUINode(to);
        let fromRect = fromNode.getBoundingBoxToWorld()
        let toRect = toNode.getBoundingBoxToWorld()
        if (showMask) {
            this.showMask();
            this.showRect(fromRect.union(cc.rect(), toRect));
        } else {
            this.hideMask();
            this.hideRect();
        }
        this.moveFinger(fromRect.center, toRect.center);
    }

    stopDrag() {
        this.finger.stopActionByTag(ACTION_MOVE_FINGER);
        this.hidePointer();
    }

    findUINode(path, type?): cc.Node {
        let node = null;
        if (type == "UI") {
            node = cc.find("Canvas/ViewManager/" + path);
        } else {
            node = cc.find(path);
        }
        return node
    }

    async waitClickEx(uipath: string | cc.Node, msgTitle?: string, msgContent?: string, x = 0, y = 0, anyKey?) {
        //11 
        //data1 为ui 路径 
        await event.sleep(0.1);
        let node;
        if (uipath instanceof cc.Node) {
            node = uipath;
        } else {
            if (uipath == null) return console.error(`waitClickEx:${uipath} null `)
            node = this.findUINode(uipath);
            if (node == null) return console.error(`${uipath} not found `)
        }
        if (msgTitle)
            this.setMessageTitle(msgTitle);
        if (msgContent)
            this.showMessage(msgContent, x, y)
        this.showMask()
        if (anyKey) {
            this.showRect(node.getBoundingBoxToWorld());
            this.hideFinger();
            await this.waitAnyKey(node)
        } else {
            await this.waitClick(node).catch(e => console.error(e))
        }

        this.hideMask();
        this.hidePointer();
        this.hideMessage();
    }

    hideFinger() {
        this.finger.active = false;
    }

    hideAll() {
        this.hideMask();
        this.hideRect();
        this.hideMessage();
        this.hideFinger();
    }

    async waitAnyInput(title, content, x, y) {
        this.showMessage(title, content, x, y)
        this.hidePointer()
        this.hideMask();
        await this.waitAnyKey();
        this.hideMessage();
        await event.sleep(0.3);
    }

    async waitOpen(uiName, open?, ...ps) {
        let view = ViewManager.instance.view("UI/" + uiName)
        if (view == null) {
            if (open) {
                ViewManager.instance.show("UI/" + uiName, ...ps)
            }
            [view] = await event.wait(uiName + ".onShown.After")
        } else {
            ViewManager.instance.show(view, ...ps);
            [view] = await event.wait(uiName + ".onShown.After")
        }
        return view;
    }

    waitClickUI(path, ...ps) {
        return this.waitClickEx("Canvas/ViewManager/" + path, ...ps);
    }

    waitClickLayoutUI(layoutpath, index, uipath) {
        let layout = cc.find("Canvas/ViewManager/" + layoutpath);
        if (layout) {
            let node = cc.find(uipath, layout.children[index])
            if (node) {
                return this.waitClickEx(node)
            }
        }
    }

}