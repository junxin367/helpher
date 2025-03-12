"use strict";
cc._RF.push(module, 'c0f79TopoBICobmtQjrjutG', 'ViewManager');
// framework/ui/ViewManager.ts

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var View_1 = require("./View");
var event_1 = require("../core/event");
var Device_1 = require("../misc/Device");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TAG = "[ViewManager]";
var ViewManager = /** @class */ (function (_super) {
    __extends(ViewManager, _super);
    function ViewManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        // baseDir:string = "assets/"
        _this._views = {};
        // 
        _this.modal = null;
        _this.modalOpacity = 160;
        _this.audio_show = null;
        _this.audio_hide = null;
        return _this;
        // update (dt) {}
    }
    ViewManager_1 = ViewManager;
    ViewManager.prototype.onLoad = function () {
        // this.node.zIndex = 1000;
        ViewManager_1.instance = this;
        this.modal.active = false;
        // this.modal.zIndex = 999;
        // cc.game.addPersistRootNode(this.node);
        // this.node.getComponent(cc.Widget).target = cc.find("Canvas")
        window["vm"] = this;
    };
    Object.defineProperty(ViewManager.prototype, "allViews", {
        get: function () {
            var _this = this;
            return Object.keys(this._views).map(function (k) { return _this._views[k]; });
        },
        enumerable: false,
        configurable: true
    });
    ViewManager.prototype.onEnable = function () {
    };
    ViewManager.prototype.onDestroy = function () {
        // cc.game.removePersistRootNode(this.node);
        for (var key in this._views) {
            delete this._views[key];
        }
    };
    ViewManager.prototype.start = function () {
        //load prefab
        // this.modal.active = false;
        // this.sprite = this.getComponent(cc.Sprite)
        // this.modal.zIndex = 999;
    };
    ViewManager.prototype.getVisibleDialog = function () {
        var _this = this;
        var viewStacks = Object.keys(this._views).map(function (k) { return _this._views[k]; }).sort(function (a, b) { return b.node.zIndex - a.node.zIndex; });
        return viewStacks.find(function (v) { return v.isDialog && v.node.active; });
        // for (var name in this._views) {
        //     let view = this._views[name]
        //     if (view.isDialog) {
        //         if (this.isVisible(name)) {
        //             return view;
        //         }
        //     }
        // }
        // return null;
    };
    ViewManager.prototype.hasVisibleDialog = function () {
        for (var name in this._views) {
            var view = this._views[name];
            if (view.isDialog) {
                if (this.isVisible(name)) {
                    return true;
                }
            }
        }
        return false;
    };
    ViewManager.prototype.isVisible = function (viewname) {
        var view = null;
        if (typeof (viewname) == "string")
            view = this._views[viewname];
        else
            view = viewname;
        //todo check type 
        if (view) {
            return view.node.active;
        }
        return false;
    };
    ViewManager.prototype.view = function (name) {
        return this._views[name];
    };
    ViewManager.prototype.attachViewComp = function (existingView) {
        var viewComp = null;
        if (viewComp == null || viewComp == undefined) {
            viewComp = existingView.getComponent(View_1.default);
            if (viewComp == null) {
                viewComp = existingView.addComponent(View_1.default);
                viewComp.init(existingView.name);
            }
            this._views[viewComp.name] = viewComp;
        }
        return viewComp;
    };
    ViewManager.prototype.showView = function (view) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        this.modal.active = view.isDialog;
        //check has popuped dialog and  all currentview is dialog show modal forcely.
        if (this.hasVisibleDialog() || view.isDialog) {
            this.modal.active = true;
        }
        if (view.isDialog) {
            this.modal.opacity = view.opacity;
        }
        this.updateZIndex(view);
        this.audio_show && Device_1.default.playEffect(this.audio_show);
        return view.show.apply(view, params);
    };
    ViewManager.prototype.showFromPrefab = function (prefab, prefabPath) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        var view = this._views[prefabPath];
        if (view == null) {
            var node = cc.instantiate(prefab);
            if (node == null) {
                throw new Error("Error Occurs While Creating View:" + prefabPath);
            }
            view = node.getComponent(View_1.default);
            if (view == null) {
                view = node.addComponent(View_1.default);
                view.isDialog = true;
                //default is dialog
            }
            var widget = view.getComponent(cc.Widget);
            if (widget)
                widget.target = cc.find("Canvas");
            view.init(prefabPath);
            this._views[prefabPath] = view;
            if (view.isDialog) {
                this.node.addChild(node, 1000);
            }
            else {
                this.node.addChild(node, 1000);
            }
        }
        // node = view.node;
        this.node.color.setA(255);
        this.log(TAG, "show view:" + prefabPath);
        return this.showView.apply(this, __spreadArrays([view], params));
    };
    ViewManager.prototype.showFromPrefabPath = function (prefabPath) {
        var _this = this;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var view = this._views[prefabPath];
        if (view == null || view == undefined) {
            this.log("start load prefab:" + prefabPath);
            var beforeTime_1 = new Date().getTime();
            return new Promise(function (resolve, reject) {
                cc.resources.load(prefabPath, cc.Prefab, function (e, prefab) {
                    _this.log(TAG, "prefab loaded : " + prefabPath + " " + (new Date().getTime() - beforeTime_1) + "ms");
                    _this.showFromPrefab.apply(_this, __spreadArrays([prefab, prefabPath], params)).then(resolve);
                });
            });
        }
        else {
            // this.sprite.enabled = false;
            this.modal.active = view.isDialog;
            if (this.hasVisibleDialog() || view.isDialog) {
                this.modal.active = true;
                this.modal.opacity = view.opacity;
            }
            this.log(TAG, "show view:" + prefabPath, params);
            this.updateZIndex(view);
            this.audio_show && Device_1.default.playEffect(this.audio_show);
            return view.show.apply(view, params);
        }
    };
    ViewManager.prototype.preload = function (prefabPath) {
        var _this = this;
        var view = this._views[prefabPath];
        if (view == null || view == undefined) {
            cc.resources.load(prefabPath, cc.Prefab, function (e, prefab) {
                _this.log(TAG, "preload view" + prefabPath);
                var node = cc.instantiate(prefab);
                view = node.getComponent(View_1.default);
                var widget = view.getComponent(cc.Widget);
                if (widget)
                    widget.target = cc.find("Canvas");
                view.init(prefabPath);
                _this._views[prefabPath] = view;
                // this.scheduleOnce(_=>node.active = false,0);
                if (view.isDialog) {
                    _this.node.addChild(node, 1000);
                }
                else {
                    _this.node.addChild(node, 1000);
                }
                view.hide();
            });
        }
        else {
        }
    };
    // will enableTouch next show up
    ViewManager.prototype.disableTouch = function (viewNode) {
        var view = viewNode.getComponent(View_1.default);
        if (view) {
            view.touchEnabled = false;
        }
    };
    ViewManager.prototype.enableTouch = function (viewNode) {
        var view = viewNode.getComponent(View_1.default);
        if (view) {
            view.touchEnabled = true;
        }
    };
    ViewManager.prototype.show = function (view) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        // disable current view 's touch 
        var isDialog = false;
        if (view instanceof cc.Component) {
            var v = view.getComponent(View_1.default);
            isDialog = v.isDialog;
        }
        // if (isDialog) {
        for (var i = 0; i < this.node.childrenCount; i++) {
            var v = this.node.children[i];
            var view_1 = v.getComponent(View_1.default);
            if (view_1) {
                if (view_1.topMost) {
                    v.zIndex = 9999;
                }
                else {
                    v.zIndex = i * 2;
                }
            }
            else {
                v.zIndex = i;
            }
        }
        // }
        if (typeof (view) == "string") {
            return this.showFromPrefabPath.apply(this, __spreadArrays([view], params));
        }
        else {
            if (view == null || view == undefined)
                return;
            if (view.node)
                view = view.node;
            var v = this.attachViewComp(view);
            return this.showView.apply(this, __spreadArrays([v], params));
        }
    };
    ViewManager.prototype.updateZIndex = function (view) {
        if (!view.topMost) {
            if (view.isDialog) {
                view.node.zIndex = 1000;
                this.modal.zIndex = 999;
            }
        }
    };
    ViewManager.prototype.hide = function (viewname, playHideAnim) {
        if (playHideAnim === void 0) { playHideAnim = true; }
        if (typeof (viewname) != "string") {
            // get view name 
            if (viewname == null || viewname == undefined)
                return;
            var v = this.attachViewComp(viewname);
            viewname = v.name;
        }
        var view = this._views[viewname];
        if (view != null && view != undefined) {
            if (view.node.active == false)
                return;
            view.node.active = false;
            if (view.isDialog) {
                //todo: should support dialog hide animtion  later 
                this.modal.active = false;
            }
            if (this.hasVisibleDialog()) {
                this.modal.active = true;
            }
            // if(view.isInHideAnimation())
            //     return;
            // view.hide();
            if (playHideAnim)
                view.doHideAnimation();
            view.onHidden();
            this.audio_hide && Device_1.default.playEffect(this.audio_hide);
            event_1.evt.emit(view.node.name + ".onHidden");
            event_1.evt.emit("View.onHidden", view);
        }
    };
    ViewManager.prototype.checkViewStacks = function () {
        var dialog = this.getVisibleDialog();
        if (dialog) {
            this.modal.active = true;
            this.modal.opacity = dialog.opacity;
            this.updateZIndex(dialog);
        }
    };
    ViewManager.prototype.hideAll = function () {
        for (var viewname in this._views) {
            // let view = this._views[viewname]
            this.hide(viewname);
        }
    };
    var ViewManager_1;
    __decorate([
        property(cc.Node)
    ], ViewManager.prototype, "modal", void 0);
    __decorate([
        property
    ], ViewManager.prototype, "modalOpacity", void 0);
    __decorate([
        property(cc.AudioClip)
    ], ViewManager.prototype, "audio_show", void 0);
    __decorate([
        property(cc.AudioClip)
    ], ViewManager.prototype, "audio_hide", void 0);
    ViewManager = ViewManager_1 = __decorate([
        ccclass
    ], ViewManager);
    return ViewManager;
}(cc.Component));
exports.default = ViewManager;

cc._RF.pop();