
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/ui/mvcView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx1aVxcbXZjVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBcUM7QUFDckMsa0RBQTZDO0FBQzdDLDhCQUE4QjtBQUM5Qiw0Q0FBNEM7QUFDNUMsNEJBQTRCO0FBQzVCLDBDQUEwQztBQUNwQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQU01QztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQTJTQztRQXRTRyxxQkFBZSxHQUFXLFNBQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUdwRCxzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFFakMsWUFBTSxHQUErQixFQUFFLENBQUE7UUFDdkMsYUFBTyxHQUFnQixFQUFFLENBQUE7UUFDekIsVUFBSSxHQUFxQixFQUFFLENBQUE7UUFDM0IsYUFBTyxHQUFnQixFQUFFLENBQUE7UUFDekIsV0FBSyxHQUFjLEVBQUUsQ0FBQTtRQUNyQixjQUFRLEdBQWtCLEVBQUUsQ0FBQTtRQUM1QixZQUFNLEdBQVUsRUFBRSxDQUFBO1FBQ1YsZUFBUyxHQUFlLEVBQUUsQ0FBQTtRQUVsQyxhQUFPLEdBQUcsRUFBRSxDQUFBOztJQXdSaEIsQ0FBQztnQkEzU29CLE9BQU87SUF5QnhCLHlCQUFPLEdBQVA7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDdEIsQ0FBQztJQUVELGtDQUFnQixHQUFoQixVQUFpQixRQUFRLEVBQUUsR0FBSTtRQUEvQixpQkFVQztRQVRHLElBQUk7WUFDQSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDbEQsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLElBQUksS0FB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OlsiaW1wb3J0IGNjVXRpbCBmcm9tIFwiLi4vdXRpbHMvY2NVdGlsXCI7XHJcbmltcG9ydCBTd2l0Y2hlciBmcm9tIFwiLi9jb250cm9sbGVyL1N3aXRjaGVyXCI7XHJcbi8v55S15a2Q6YKu5Lu2cHVoYWxza2lqc2VtZW5AZ21haWwuY29tXHJcbi8v5rqQ56CB572R56uZIOW8gHZwbuWFqOWxgOaooeW8j+aJk+W8gCBodHRwOi8vd2ViM2luY3ViYXRvcnMuY29tL1xyXG4vL+eUteaKpWh0dHBzOi8vdC5tZS9nYW1lY29kZTk5OVxyXG4vL+e9kemhteWuouacjSBodHRwOi8vd2ViM2luY3ViYXRvcnMuY29tL2tlZnUuaHRtbFxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbnRlcmZhY2UgU3ViVmlld0JpbmQge1xyXG4gICAgdmlld3M6IG12Y1ZpZXdbXTtcclxuICAgIGV4cDogRnVuY3Rpb25cclxufVxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtdmNWaWV3IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0aWMgRGlzYWJsZUF1dG9SZW5kZXIgPSAtMVxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcmVuZGVyX2ludGVydmFsOiBudW1iZXIgPSBtdmNWaWV3LkRpc2FibGVBdXRvUmVuZGVyO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgYXV0b19yZW5kZXJfbGlzdDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgbGFiZWxzOiAoY2MuTGFiZWwgfCBjYy5SaWNoVGV4dClbXSA9IFtdXHJcbiAgICBzcHJpdGVzOiBjYy5TcHJpdGVbXSA9IFtdXHJcbiAgICBiYXJzOiBjYy5Qcm9ncmVzc0JhcltdID0gW11cclxuICAgIGJ1dHRvbnM6IGNjLkJ1dHRvbltdID0gW11cclxuICAgIG5vZGVzOiBjYy5Ob2RlW10gPSBbXVxyXG4gICAgc3ViVmlld3M6IFN1YlZpZXdCaW5kW10gPSBbXVxyXG4gICAgZXZlbnRzOiBhbnlbXSA9IFtdXHJcbiAgICBwcml2YXRlIHN3aXRjaGVyczogU3dpdGNoZXJbXSA9IFtdXHJcblxyXG4gICAgbGF5b3V0cyA9IFtdXHJcblxyXG4gICAgX19kYXRhOiBhbnk7XHJcbiAgICBfX2RhdGEyOiBhbnk7XHJcblxyXG5cclxuICAgIGdldERhdGE8VD4oKTogVCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19kYXRhXHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJTdWJWaWV3cyh2aWV3Q29tcCwgZXhwPykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCB2aWV3cyA9IHRoaXMuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4odmlld0NvbXApXHJcbiAgICAgICAgICAgIGlmICh2aWV3cykge1xyXG4gICAgICAgICAgICAgICAgdmlld3MgPSB2aWV3cy5maWx0ZXIodiA9PiB2ICE9IHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJNdmNWaWV3KHZpZXdzLCBleHApO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+azqOWGjCDlrZB2aWV3IFxyXG4gICAgcmVnaXN0ZXJNdmNWaWV3KHZpZXdzLCBleHApIHtcclxuICAgICAgICB0aGlzLnN1YlZpZXdzLnB1c2goeyB2aWV3cywgZXhwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyPFQ+KHZpZXdfY29tcDogc3RyaW5nIHwgU3dpdGNoZXIgfCBjYy5CdXR0b24gfCBjYy5MYWJlbCB8IGNjLlJpY2hUZXh0IHwgY2MuU3ByaXRlIHwgY2MuUHJvZ3Jlc3NCYXIgfCBjYy5TY3JvbGxWaWV3IHwgY2MuTGF5b3V0IHwgbXZjVmlld1tdLCBleHA6IChkYXRhOiBULCBkYXRhMjogYW55KSA9PiBhbnksIGV4dD8pIHtcclxuICAgICAgICBpZiAodHlwZW9mICh2aWV3X2NvbXApID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5maW5kKHZpZXdfY29tcCwgdGhpcy5ub2RlKVxyXG4gICAgICAgICAgICBpZiAoIW5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih2aWV3X2NvbXAgKyBcIiBub3QgZm91bmRcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIGlmIChsYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlckxhYmVsKGxhYmVsLCBleHApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJhciA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcclxuICAgICAgICAgICAgICAgIGlmICghYmFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwID0gbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlclNwcml0ZShzcCwgZXhwKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbbXZjLVZpZXddIG5vdCBmb3VuZCA6IFwiICsgdmlld19jb21wKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlclByb2dyZXNzQmFyKGJhciwgZXhwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh2aWV3X2NvbXAgaW5zdGFuY2VvZiBjYy5MYWJlbCB8fCAoY2MuUmljaFRleHQgJiYgdmlld19jb21wIGluc3RhbmNlb2YgY2MuUmljaFRleHQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTGFiZWwodmlld19jb21wLCBleHApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZpZXdfY29tcCBpbnN0YW5jZW9mIFN3aXRjaGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyU3dpdGNoZXIodmlld19jb21wLCBleHApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZpZXdfY29tcCBpbnN0YW5jZW9mIGNjLlByb2dyZXNzQmFyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyUHJvZ3Jlc3NCYXIodmlld19jb21wLCBleHApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZpZXdfY29tcCBpbnN0YW5jZW9mIGNjLlNwcml0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlclNwcml0ZSh2aWV3X2NvbXAsIGV4cCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmlld19jb21wIGluc3RhbmNlb2YgY2MuQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2xpY2sodmlld19jb21wLm5vZGUsIGV4cClcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2aWV3X2NvbXAgaW5zdGFuY2VvZiBjYy5MYXlvdXQgfHwgdmlld19jb21wIGluc3RhbmNlb2YgY2MuU2Nyb2xsVmlldykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3Rlckxpc3Qodmlld19jb21wLCBleHAsIGV4dClcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZpZXdfY29tcCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJNdmNWaWV3KHZpZXdfY29tcCwgZXhwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlclN3aXRjaGVyKHN3aXRjaGVyOiBTd2l0Y2hlciwgZXhwKSB7XHJcbiAgICAgICAgc3dpdGNoZXIubm9kZVtcIndoaWNoXCJdID0gZXhwO1xyXG4gICAgICAgIHRoaXMuc3dpdGNoZXJzLnB1c2goc3dpdGNoZXIpO1xyXG4gICAgICAgIHJldHVybiBzd2l0Y2hlcjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVnaXN0ZXJMaXN0KGxheW91dDogY2MuTGF5b3V0IHwgY2MuU2Nyb2xsVmlldywgZXhwLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmIChjYWxsYmFjayA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrID0gKG5vZGU6IGNjLk5vZGUsIGRhdGE6IGFueSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN1YnZpZXcgPSBub2RlLmdldENvbXBvbmVudChtdmNWaWV3KVxyXG4gICAgICAgICAgICAgICAgaWYgKHN1YnZpZXcpXHJcbiAgICAgICAgICAgICAgICAgICAgc3Vidmlldy5yZW5kZXIoZGF0YSlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGF5b3V0Lm5vZGUuYXR0cih7IGRhdGFCaW5kOiBleHAsIHNldEl0ZW1DYWxsYmFjazogY2FsbGJhY2sgfSlcclxuICAgICAgICB0aGlzLmxheW91dHMucHVzaChsYXlvdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyTGFiZWwobGFiZWw6IGNjLkxhYmVsIHwgY2MuUmljaFRleHQsIGV4cCkge1xyXG4gICAgICAgIGxhYmVsLm5vZGUuYXR0cih7IGdldFZpZXdTdHJpbmc6IGV4cCB9KVxyXG4gICAgICAgIHRoaXMubGFiZWxzLnB1c2gobGFiZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2s8VD4oYnRuTm9kZTogc3RyaW5nIHwgY2MuTm9kZSwgZXhwOiAoZGF0YTogVCwgZGF0YTIpID0+IGFueSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgKGJ0bk5vZGUpID09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIGJ0bk5vZGUgPSBjYy5maW5kKGJ0bk5vZGUsIHRoaXMubm9kZSlcclxuICAgICAgICBpZiAoYnRuTm9kZSkge1xyXG4gICAgICAgICAgICBsZXQgYnRuID0gY2NVdGlsLm5ld0J1dHRvbihidG5Ob2RlLCBcIm12Y1ZpZXdcIiwgXCJfX29uQnV0dG9uQ2xpY2tlZFwiLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICBidG5Ob2RlLmF0dHIoeyBvbkNsaWNrOiBleHAuYmluZCh0aGlzKSB9KVxyXG4gICAgICAgICAgICByZXR1cm4gYnRuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9fb25CdXR0b25DbGlja2VkKGUpIHtcclxuICAgICAgICBlLnRhcmdldC5vbkNsaWNrKHRoaXMuX19kYXRhLCB0aGlzLl9fZGF0YTIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVmlzaWJsZTxUPih2aWV3X2NvbXA6IHN0cmluZyB8IGNjLk5vZGUsIGV4cDogKGRhdGE6IFQsIGRhdGEyKSA9PiBhbnkpIHtcclxuICAgICAgICBpZiAodHlwZW9mICh2aWV3X2NvbXApID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdmlld19jb21wID0gY2MuZmluZCh2aWV3X2NvbXAsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIGlmICghdmlld19jb21wKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbbXZjLVZpZXddIG5vdCBmb3VuZCA6IFwiICsgdmlld19jb21wKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZpZXdfY29tcC5hdHRyKHsgaXNWaXNpYmxlOiBleHAgfSlcclxuICAgICAgICB0aGlzLm5vZGVzLnB1c2godmlld19jb21wKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkludGVyYWN0YWJsZTxUPih2aWV3X2NvbXA6IHN0cmluZyB8IGNjLk5vZGUgfCBjYy5CdXR0b24sIGV4cDogKGRhdGE6IFQsIGRhdGEyKSA9PiBhbnkpIHtcclxuICAgICAgICBpZiAodHlwZW9mICh2aWV3X2NvbXApID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdmlld19jb21wID0gY2MuZmluZCh2aWV3X2NvbXAsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIGlmICghdmlld19jb21wKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbbXZjLVZpZXddIG5vdCBmb3VuZCA6IFwiICsgdmlld19jb21wKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2aWV3X2NvbXAgaW5zdGFuY2VvZiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgICAgIHZpZXdfY29tcCA9IHZpZXdfY29tcC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmlld19jb21wLm5vZGUuYXR0cih7IGlzSW50ZXJhY3RhYmxlOiBleHAgfSlcclxuICAgICAgICB0aGlzLmJ1dHRvbnMucHVzaCh2aWV3X2NvbXApO1xyXG4gICAgfVxyXG5cclxuICAgIG9ic2VydmU8VD4oZXhwOiAoZGF0YTogVCwgZGF0YTIpID0+IGJvb2xlYW4sIGNhbGxiYWNrLCBwb2xpY3k/KSB7XHJcbiAgICAgICAgbGV0IHRyaWdnZXJlZCA9IGZhbHNlXHJcbiAgICAgICAgbGV0IGV2dCA9IHsgZXhwLCBjYWxsYmFjaywgcG9saWN5LCB0cmlnZ2VyZWQgfVxyXG4gICAgICAgIHRoaXMuZXZlbnRzLnB1c2goZXZ0KVxyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyU3ByaXRlKHNwOiBjYy5TcHJpdGUsIGV4cCkge1xyXG4gICAgICAgIHNwLm5vZGUuYXR0cih7IHVybDogZXhwIH0pXHJcbiAgICAgICAgdGhpcy5zcHJpdGVzLnB1c2goc3ApO1xyXG4gICAgICAgIHJldHVybiBzcDtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlclByb2dyZXNzQmFyKGJhcjogY2MuUHJvZ3Jlc3NCYXIsIGV4cCkge1xyXG4gICAgICAgIGJhci5ub2RlLmF0dHIoeyBwcm9ncmVzczogZXhwIH0pXHJcbiAgICAgICAgdGhpcy5iYXJzLnB1c2goYmFyKTtcclxuICAgICAgICByZXR1cm4gYmFyO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckxheW91dChsYXlvdXQsIGRhdGE/LCBkYXRhMj8pIHtcclxuICAgICAgICBpZiAoIWxheW91dC5ub2RlLmFjdGl2ZUluSGllcmFyY2h5KSByZXR1cm47XHJcbiAgICAgICAgbGV0IGxpc3RfZGF0YSA9IGxheW91dC5ub2RlLmRhdGFCaW5kKGRhdGEsIGRhdGEyKTtcclxuICAgICAgICBsZXQgY2FsbGJhY2sgPSBsYXlvdXQubm9kZS5zZXRJdGVtQ2FsbGJhY2s7XHJcbiAgICAgICAgbGF5b3V0LnNob3dsaXN0KGNhbGxiYWNrLCBsaXN0X2RhdGEgfHwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckxpc3QoZGF0YT8sIGRhdGEyPykge1xyXG4gICAgICAgIHRoaXMubGF5b3V0cy5mb3JFYWNoKGxheW91dCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyTGF5b3V0KGxheW91dCwgZGF0YSwgZGF0YTIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZUF1dG9SZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJfaW50ZXJ2YWwgPSBtdmNWaWV3LkRpc2FibGVBdXRvUmVuZGVyXHJcbiAgICB9XHJcblxyXG4gICAgb25MYXRlclJlbmRlcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlVmlldyhkYXRhPywgZGF0YTI/KSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuYWN0aXZlID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmF1dG9fcmVuZGVyX2xpc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJMaXN0KGRhdGEsIGRhdGEyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICAgICAgbGV0IGJWaXNpYmxlID0gbm9kZVsnaXNWaXNpYmxlJ10oZGF0YSwgZGF0YTIpO1xyXG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGJWaXNpYmxlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5sYWJlbHMuZm9yRWFjaChsYWJlbCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghbGFiZWwubm9kZS5hY3RpdmUpIHJldHVybjtcclxuICAgICAgICAgICAgbGV0IHN0ciA9IGxhYmVsLm5vZGVbXCJnZXRWaWV3U3RyaW5nXCJdKGRhdGEsIGRhdGEyKTtcclxuICAgICAgICAgICAgaWYgKHN0ciA9PSBudWxsKSBjb25zb2xlLndhcm4oXCJbbXZjX1ZpZXddIGZhaWxlZCB0byByZW5kZXIgbGFiZWw6XCIgKyBsYWJlbC5ub2RlLm5hbWUsIGxhYmVsLm5vZGVbJ2dldFZpZXdTdHJpbmcnXSlcclxuICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gc3RyIHx8IFwiMFwiO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zcHJpdGVzLmZvckVhY2goc3AgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNwLm5vZGUuYWN0aXZlSW5IaWVyYXJjaHkpIHJldHVybjtcclxuICAgICAgICAgICAgbGV0IHVybCA9IHNwLm5vZGVbJ3VybCddKGRhdGEsIGRhdGEyKTtcclxuICAgICAgICAgICAgaWYgKCF1cmwpIHtcclxuICAgICAgICAgICAgICAgIHNwLnNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjY1V0aWwuc2V0RGlzcGxheShzcCwgdXJsKTtcclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChldnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWV2dC50cmlnZ2VyZWQgJiYgZXZ0LmV4cChkYXRhLCBkYXRhMikpIHtcclxuICAgICAgICAgICAgICAgIGV2dC5jYWxsYmFjayAmJiBldnQuY2FsbGJhY2suY2FsbCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgaWYgKGV2dC5wb2xpY3kpIHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGV2dC50cmlnZ2VyZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIHJlc2V0IGV2ZW50IHRyaWdnZXIgXHJcbiAgICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChldnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZ0LnRyaWdnZXJlZCAmJiAhZXZ0LmV4cChkYXRhLCBkYXRhMikpIHtcclxuICAgICAgICAgICAgICAgIGV2dC50cmlnZ2VyZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuc3ViVmlld3MuZm9yRWFjaCh2aWV3ZCA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXNcclxuICAgICAgICAgICAgaWYgKHZpZXdkLmV4cCkge1xyXG4gICAgICAgICAgICAgICAgcmVzID0gdmlld2QuZXhwKGRhdGEsIGRhdGEyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2aWV3ZC52aWV3cy5mb3JFYWNoKCh2LCBpKSA9PiB2LnJlbmRlcihyZXMgJiYgcmVzW2ldLCBkYXRhKSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWJ0bi5ub2RlLmFjdGl2ZUluSGllcmFyY2h5KSByZXR1cm47XHJcbiAgICAgICAgICAgIGxldCBiSW50ZXJhY3RhYmxlID0gYnRuLm5vZGVbJ2lzSW50ZXJhY3RhYmxlJ10oZGF0YSwgZGF0YTIpO1xyXG4gICAgICAgICAgICBidG4uaW50ZXJhY3RhYmxlID0gYkludGVyYWN0YWJsZTtcclxuICAgICAgICAgICAgYnRuLm5vZGUub3BhY2l0eSA9IGJJbnRlcmFjdGFibGUgJiYgMjU1IHx8IDEyMDtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLnN3aXRjaGVycy5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXYubm9kZS5hY3RpdmVJbkhpZXJhcmNoeSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBsZXQgZXhwID0gdi5ub2RlW1wid2hpY2hcIl1cclxuICAgICAgICAgICAgbGV0IHJlcyA9IGV4cChkYXRhLCBkYXRhMik7XHJcbiAgICAgICAgICAgIHYuaW5kZXggPSByZXM7XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMuYmFycy5mb3JFYWNoKGJhcj0+e1xyXG4gICAgICAgIC8vICAgICBsZXQgcHJvZ3Jlc3MgPSBiYXIubm9kZS5wcm9ncmVzcyhkYXRhKTtcclxuICAgICAgICAvLyAgICAgYmFyLnByb2dyZXNzID0gcHJvZ3Jlc3M7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICB0aGlzLl9yZW5kZXJCYXJzKGRhdGEsIGRhdGEyKTtcclxuICAgICAgICB0aGlzLm9uTGF0ZXJSZW5kZXIoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlckJhcnMoZGF0YT8sIGRhdGEyPykge1xyXG4gICAgICAgIHRoaXMuYmFycy5mb3JFYWNoKGJhciA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IGJhci5ub2RlWydwcm9ncmVzcyddKGRhdGEsIGRhdGEyKTtcclxuICAgICAgICAgICAgYmFyLnByb2dyZXNzID0gcHJvZ3Jlc3M7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICAvLyB0aGlzLl9yZW5kZXJCYXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGQ/LCBkMj8pIHtcclxuICAgICAgICB0aGlzLl9fZGF0YSA9IGQgfHwgdGhpcy5fX2RhdGE7XHJcbiAgICAgICAgdGhpcy5fX2RhdGEyID0gZDIgfHwgdGhpcy5fX2RhdGEyO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVZpZXcodGhpcy5fX2RhdGEsIHRoaXMuX19kYXRhMik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyTGFiZWwobGFiZWw6IGNjLkxhYmVsKSB7XHJcbiAgICAgICAgbGV0IHN0ciA9IGxhYmVsLm5vZGVbJ2dldFZpZXdTdHJpbmcnXSgpXHJcbiAgICAgICAgbGFiZWwuc3RyaW5nID0gc3RyO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlbmRlcl9pbnRlcnZhbCAhPSAtMSlcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnJlbmRlciwgdGhpcy5yZW5kZXJfaW50ZXJ2YWwpXHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnJlbmRlcik7XHJcbiAgICAgICAgdGhpcy5fX2RhdGEgPSBudWxsO1xyXG4gICAgfVxyXG5cclxufSJdfQ==