import ccUtil from "../utils/ccUtil";
import Switcher from "./controller/Switcher";
//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
const { ccclass, property } = cc._decorator;
interface SubViewBind {
    views: mvcView[];
    exp: Function
}
@ccclass
export default class mvcView extends cc.Component {

    static DisableAutoRender = -1

    @property
    render_interval: number = mvcView.DisableAutoRender;

    @property
    auto_render_list: boolean = true;

    labels: (cc.Label | cc.RichText)[] = []
    sprites: cc.Sprite[] = []
    bars: cc.ProgressBar[] = []
    buttons: cc.Button[] = []
    nodes: cc.Node[] = []
    subViews: SubViewBind[] = []
    events: any[] = []
    private switchers: Switcher[] = []

    layouts = []

    __data: any;
    __data2: any;


    getData<T>(): T {
        return this.__data
    }

    registerSubViews(viewComp, exp?) {
        try {
            let views = this.getComponentsInChildren(viewComp)
            if (views) {
                views = views.filter(v => v != this);
            }
            this.registerMvcView(views, exp);
        } catch (e) {
            console.error(e)
        }
    }

    //注册 子view 
    registerMvcView(views, exp) {
        this.subViews.push({ views, exp });
    }

    register<T>(view_comp: string | Switcher | cc.Button | cc.Label | cc.RichText | cc.Sprite | cc.ProgressBar | cc.ScrollView | cc.Layout | mvcView[], exp: (data: T, data2: any) => any, ext?) {
        if (typeof (view_comp) == "string") {
            let node = cc.find(view_comp, this.node)
            if (!node) {
                throw new Error(view_comp + " not found")
            }
            let label = node.getComponent(cc.Label);
            if (label) {
                this.registerLabel(label, exp);
            } else {
                let bar = node.getComponent(cc.ProgressBar);
                if (!bar) {
                    let sp = node.getComponent(cc.Sprite);
                    if (sp) {
                        this.registerSprite(sp, exp);
                    } else {
                        console.warn("[mvc-View] not found : " + view_comp)
                    }
                } else {
                    this.registerProgressBar(bar, exp);
                }
            }
        } else {
            if (view_comp instanceof cc.Label || (cc.RichText && view_comp instanceof cc.RichText)) {
                this.registerLabel(view_comp, exp);
            } else if (view_comp instanceof Switcher) {
                this.registerSwitcher(view_comp, exp);
            } else if (view_comp instanceof cc.ProgressBar) {
                this.registerProgressBar(view_comp, exp);
            } else if (view_comp instanceof cc.Sprite) {
                this.registerSprite(view_comp, exp);
            } else if (view_comp instanceof cc.Button) {
                this.onClick(view_comp.node, exp)
            } else if (view_comp instanceof cc.Layout || view_comp instanceof cc.ScrollView) {
                this.registerList(view_comp, exp, ext)
            } else if (Array.isArray(view_comp)) {
                this.registerMvcView(view_comp, exp);
            }
        }
    }

    registerSwitcher(switcher: Switcher, exp) {
        switcher.node["which"] = exp;
        this.switchers.push(switcher);
        return switcher;
    }


    registerList(layout: cc.Layout | cc.ScrollView, exp, callback) {
        if (callback == null) {
            callback = (node: cc.Node, data: any, i) => {
                let subview = node.getComponent(mvcView)
                if (subview)
                    subview.render(data)
            };
        }
        layout.node.attr({ dataBind: exp, setItemCallback: callback })
        this.layouts.push(layout);
    }

    registerLabel(label: cc.Label | cc.RichText, exp) {
        label.node.attr({ getViewString: exp })
        this.labels.push(label);
    }

    onClick<T>(btnNode: string | cc.Node, exp: (data: T, data2) => any) {
        if (typeof (btnNode) == "string")
            btnNode = cc.find(btnNode, this.node)
        if (btnNode) {
            let btn = ccUtil.newButton(btnNode, "mvcView", "__onButtonClicked", this.node);
            btnNode.attr({ onClick: exp.bind(this) })
            return btn;
        }
    }

    private __onButtonClicked(e) {
        e.target.onClick(this.__data, this.__data2);
    }

    onVisible<T>(view_comp: string | cc.Node, exp: (data: T, data2) => any) {
        if (typeof (view_comp) == "string") {
            view_comp = cc.find(view_comp, this.node);
            if (!view_comp) {
                console.warn("[mvc-View] not found : " + view_comp)
                return;
            }
        }
        view_comp.attr({ isVisible: exp })
        this.nodes.push(view_comp);
    }

    onInteractable<T>(view_comp: string | cc.Node | cc.Button, exp: (data: T, data2) => any) {
        if (typeof (view_comp) == "string") {
            view_comp = cc.find(view_comp, this.node);
            if (!view_comp) {
                console.warn("[mvc-View] not found : " + view_comp)
                return;
            }
        }
        if (view_comp instanceof cc.Node) {
            view_comp = view_comp.getComponent(cc.Button);
        }
        view_comp.node.attr({ isInteractable: exp })
        this.buttons.push(view_comp);
    }

    observe<T>(exp: (data: T, data2) => boolean, callback, policy?) {
        let triggered = false
        let evt = { exp, callback, policy, triggered }
        this.events.push(evt)
    }

    registerSprite(sp: cc.Sprite, exp) {
        sp.node.attr({ url: exp })
        this.sprites.push(sp);
        return sp;
    }

    registerProgressBar(bar: cc.ProgressBar, exp) {
        bar.node.attr({ progress: exp })
        this.bars.push(bar);
        return bar;
    }

    renderLayout(layout, data?, data2?) {
        if (!layout.node.activeInHierarchy) return;
        let list_data = layout.node.dataBind(data, data2);
        let callback = layout.node.setItemCallback;
        layout.showlist(callback, list_data || []);
    }

    renderList(data?, data2?) {
        this.layouts.forEach(layout => {
            this.renderLayout(layout, data, data2);
        })
    }

    disableAutoRender() {
        this.render_interval = mvcView.DisableAutoRender
    }

    onLaterRender() {

    }

    private _updateView(data?, data2?) {

        if (this.node.active == false) return;

        if (this.auto_render_list) {
            this.renderList(data, data2);
        }

        this.nodes.forEach(node => {
            let bVisible = node['isVisible'](data, data2);
            node.active = bVisible;
        })
        this.labels.forEach(label => {
            if (!label.node.active) return;
            let str = label.node["getViewString"](data, data2);
            if (str == null) console.warn("[mvc_View] failed to render label:" + label.node.name, label.node['getViewString'])
            label.string = str || "0";
        })
        this.sprites.forEach(sp => {
            if (!sp.node.activeInHierarchy) return;
            let url = sp.node['url'](data, data2);
            if (!url) {
                sp.spriteFrame = null;
                return;
            }
            ccUtil.setDisplay(sp, url);
        })


        this.events.forEach(evt => {
            if (!evt.triggered && evt.exp(data, data2)) {
                evt.callback && evt.callback.call(this)
                if (evt.policy) {
                }
                evt.triggered = true
            }
        })
        // reset event trigger 
        this.events.forEach(evt => {
            if (evt.triggered && !evt.exp(data, data2)) {
                evt.triggered = false;
            }
        })

        this.subViews.forEach(viewd => {
            let res
            if (viewd.exp) {
                res = viewd.exp(data, data2);
            }
            viewd.views.forEach((v, i) => v.render(res && res[i], data))
        })

        this.buttons.forEach(btn => {
            if (!btn.node.activeInHierarchy) return;
            let bInteractable = btn.node['isInteractable'](data, data2);
            btn.interactable = bInteractable;
            btn.node.opacity = bInteractable && 255 || 120;
        })

        this.switchers.forEach(v => {
            if (!v.node.activeInHierarchy) return;
            let exp = v.node["which"]
            let res = exp(data, data2);
            v.index = res;
        })


        // this.bars.forEach(bar=>{
        //     let progress = bar.node.progress(data);
        //     bar.progress = progress;
        // })
        this._renderBars(data, data2);
        this.onLaterRender();

    }

    _renderBars(data?, data2?) {
        this.bars.forEach(bar => {
            let progress = bar.node['progress'](data, data2);
            bar.progress = progress;
        })
    }

    update(dt) {
        // this._renderBars();
    }

    render(d?, d2?) {
        this.__data = d || this.__data;
        this.__data2 = d2 || this.__data2;
        this._updateView(this.__data, this.__data2);
    }

    renderLabel(label: cc.Label) {
        let str = label.node['getViewString']()
        label.string = str;
    }

    onEnable() {
        if (this.render_interval != -1)
            this.schedule(this.render, this.render_interval)
    }

    onDisable() {
        this.unschedule(this.render);
        this.__data = null;
    }

}