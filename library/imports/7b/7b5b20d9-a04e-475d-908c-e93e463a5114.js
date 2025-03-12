"use strict";
cc._RF.push(module, '7b5b2DZoE5HXZCM6T5GOlEU', 'mvcView');
// framework/ui/mvcView.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ccUtil_1 = require("../utils/ccUtil");
var Switcher_1 = require("./controller/Switcher");
//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var mvcView = /** @class */ (function (_super) {
    __extends(mvcView, _super);
    function mvcView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render_interval = mvcView_1.DisableAutoRender;
        _this.auto_render_list = true;
        _this.labels = [];
        _this.sprites = [];
        _this.bars = [];
        _this.buttons = [];
        _this.nodes = [];
        _this.subViews = [];
        _this.events = [];
        _this.switchers = [];
        _this.layouts = [];
        return _this;
    }
    mvcView_1 = mvcView;
    mvcView.prototype.getData = function () {
        return this.__data;
    };
    mvcView.prototype.registerSubViews = function (viewComp, exp) {
        var _this = this;
        try {
            var views = this.getComponentsInChildren(viewComp);
            if (views) {
                views = views.filter(function (v) { return v != _this; });
            }
            this.registerMvcView(views, exp);
        }
        catch (e) {
            console.error(e);
        }
    };
    //注册 子view 
    mvcView.prototype.registerMvcView = function (views, exp) {
        this.subViews.push({ views: views, exp: exp });
    };
    mvcView.prototype.register = function (view_comp, exp, ext) {
        if (typeof (view_comp) == "string") {
            var node = cc.find(view_comp, this.node);
            if (!node) {
                throw new Error(view_comp + " not found");
            }
            var label = node.getComponent(cc.Label);
            if (label) {
                this.registerLabel(label, exp);
            }
            else {
                var bar = node.getComponent(cc.ProgressBar);
                if (!bar) {
                    var sp = node.getComponent(cc.Sprite);
                    if (sp) {
                        this.registerSprite(sp, exp);
                    }
                    else {
                        console.warn("[mvc-View] not found : " + view_comp);
                    }
                }
                else {
                    this.registerProgressBar(bar, exp);
                }
            }
        }
        else {
            if (view_comp instanceof cc.Label || (cc.RichText && view_comp instanceof cc.RichText)) {
                this.registerLabel(view_comp, exp);
            }
            else if (view_comp instanceof Switcher_1.default) {
                this.registerSwitcher(view_comp, exp);
            }
            else if (view_comp instanceof cc.ProgressBar) {
                this.registerProgressBar(view_comp, exp);
            }
            else if (view_comp instanceof cc.Sprite) {
                this.registerSprite(view_comp, exp);
            }
            else if (view_comp instanceof cc.Button) {
                this.onClick(view_comp.node, exp);
            }
            else if (view_comp instanceof cc.Layout || view_comp instanceof cc.ScrollView) {
                this.registerList(view_comp, exp, ext);
            }
            else if (Array.isArray(view_comp)) {
                this.registerMvcView(view_comp, exp);
            }
        }
    };
    mvcView.prototype.registerSwitcher = function (switcher, exp) {
        switcher.node["which"] = exp;
        this.switchers.push(switcher);
        return switcher;
    };
    mvcView.prototype.registerList = function (layout, exp, callback) {
        if (callback == null) {
            callback = function (node, data, i) {
                var subview = node.getComponent(mvcView_1);
                if (subview)
                    subview.render(data);
            };
        }
        layout.node.attr({ dataBind: exp, setItemCallback: callback });
        this.layouts.push(layout);
    };
    mvcView.prototype.registerLabel = function (label, exp) {
        label.node.attr({ getViewString: exp });
        this.labels.push(label);
    };
    mvcView.prototype.onClick = function (btnNode, exp) {
        if (typeof (btnNode) == "string")
            btnNode = cc.find(btnNode, this.node);
        if (btnNode) {
            var btn = ccUtil_1.default.newButton(btnNode, "mvcView", "__onButtonClicked", this.node);
            btnNode.attr({ onClick: exp.bind(this) });
            return btn;
        }
    };
    mvcView.prototype.__onButtonClicked = function (e) {
        e.target.onClick(this.__data, this.__data2);
    };
    mvcView.prototype.onVisible = function (view_comp, exp) {
        if (typeof (view_comp) == "string") {
            view_comp = cc.find(view_comp, this.node);
            if (!view_comp) {
                console.warn("[mvc-View] not found : " + view_comp);
                return;
            }
        }
        view_comp.attr({ isVisible: exp });
        this.nodes.push(view_comp);
    };
    mvcView.prototype.onInteractable = function (view_comp, exp) {
        if (typeof (view_comp) == "string") {
            view_comp = cc.find(view_comp, this.node);
            if (!view_comp) {
                console.warn("[mvc-View] not found : " + view_comp);
                return;
            }
        }
        if (view_comp instanceof cc.Node) {
            view_comp = view_comp.getComponent(cc.Button);
        }
        view_comp.node.attr({ isInteractable: exp });
        this.buttons.push(view_comp);
    };
    mvcView.prototype.observe = function (exp, callback, policy) {
        var triggered = false;
        var evt = { exp: exp, callback: callback, policy: policy, triggered: triggered };
        this.events.push(evt);
    };
    mvcView.prototype.registerSprite = function (sp, exp) {
        sp.node.attr({ url: exp });
        this.sprites.push(sp);
        return sp;
    };
    mvcView.prototype.registerProgressBar = function (bar, exp) {
        bar.node.attr({ progress: exp });
        this.bars.push(bar);
        return bar;
    };
    mvcView.prototype.renderLayout = function (layout, data, data2) {
        if (!layout.node.activeInHierarchy)
            return;
        var list_data = layout.node.dataBind(data, data2);
        var callback = layout.node.setItemCallback;
        layout.showlist(callback, list_data || []);
    };
    mvcView.prototype.renderList = function (data, data2) {
        var _this = this;
        this.layouts.forEach(function (layout) {
            _this.renderLayout(layout, data, data2);
        });
    };
    mvcView.prototype.disableAutoRender = function () {
        this.render_interval = mvcView_1.DisableAutoRender;
    };
    mvcView.prototype.onLaterRender = function () {
    };
    mvcView.prototype._updateView = function (data, data2) {
        var _this = this;
        if (this.node.active == false)
            return;
        if (this.auto_render_list) {
            this.renderList(data, data2);
        }
        this.nodes.forEach(function (node) {
            var bVisible = node['isVisible'](data, data2);
            node.active = bVisible;
        });
        this.labels.forEach(function (label) {
            if (!label.node.active)
                return;
            var str = label.node["getViewString"](data, data2);
            if (str == null)
                console.warn("[mvc_View] failed to render label:" + label.node.name, label.node['getViewString']);
            label.string = str || "0";
        });
        this.sprites.forEach(function (sp) {
            if (!sp.node.activeInHierarchy)
                return;
            var url = sp.node['url'](data, data2);
            if (!url) {
                sp.spriteFrame = null;
                return;
            }
            ccUtil_1.default.setDisplay(sp, url);
        });
        this.events.forEach(function (evt) {
            if (!evt.triggered && evt.exp(data, data2)) {
                evt.callback && evt.callback.call(_this);
                if (evt.policy) {
                }
                evt.triggered = true;
            }
        });
        // reset event trigger 
        this.events.forEach(function (evt) {
            if (evt.triggered && !evt.exp(data, data2)) {
                evt.triggered = false;
            }
        });
        this.subViews.forEach(function (viewd) {
            var res;
            if (viewd.exp) {
                res = viewd.exp(data, data2);
            }
            viewd.views.forEach(function (v, i) { return v.render(res && res[i], data); });
        });
        this.buttons.forEach(function (btn) {
            if (!btn.node.activeInHierarchy)
                return;
            var bInteractable = btn.node['isInteractable'](data, data2);
            btn.interactable = bInteractable;
            btn.node.opacity = bInteractable && 255 || 120;
        });
        this.switchers.forEach(function (v) {
            if (!v.node.activeInHierarchy)
                return;
            var exp = v.node["which"];
            var res = exp(data, data2);
            v.index = res;
        });
        // this.bars.forEach(bar=>{
        //     let progress = bar.node.progress(data);
        //     bar.progress = progress;
        // })
        this._renderBars(data, data2);
        this.onLaterRender();
    };
    mvcView.prototype._renderBars = function (data, data2) {
        this.bars.forEach(function (bar) {
            var progress = bar.node['progress'](data, data2);
            bar.progress = progress;
        });
    };
    mvcView.prototype.update = function (dt) {
        // this._renderBars();
    };
    mvcView.prototype.render = function (d, d2) {
        this.__data = d || this.__data;
        this.__data2 = d2 || this.__data2;
        this._updateView(this.__data, this.__data2);
    };
    mvcView.prototype.renderLabel = function (label) {
        var str = label.node['getViewString']();
        label.string = str;
    };
    mvcView.prototype.onEnable = function () {
        if (this.render_interval != -1)
            this.schedule(this.render, this.render_interval);
    };
    mvcView.prototype.onDisable = function () {
        this.unschedule(this.render);
        this.__data = null;
    };
    var mvcView_1;
    mvcView.DisableAutoRender = -1;
    __decorate([
        property
    ], mvcView.prototype, "render_interval", void 0);
    __decorate([
        property
    ], mvcView.prototype, "auto_render_list", void 0);
    mvcView = mvcView_1 = __decorate([
        ccclass
    ], mvcView);
    return mvcView;
}(cc.Component));
exports.default = mvcView;

cc._RF.pop();