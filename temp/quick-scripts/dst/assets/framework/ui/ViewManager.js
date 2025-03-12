
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/ui/ViewManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx1aVxcVmlld01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUEwQjtBQUMxQix1Q0FBb0M7QUFDcEMseUNBQW9DO0FBRTlCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQUksR0FBRyxHQUFXLGVBQWUsQ0FBQTtBQUVqQztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQXdUQztRQXBURyxlQUFlO1FBRWYsNkJBQTZCO1FBRTdCLFlBQU0sR0FBOEIsRUFBRSxDQUFBO1FBRXRDLEdBQUc7UUFFSCxXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBRzNCLGdCQUFVLEdBQWdCLElBQUksQ0FBQztRQUcvQixnQkFBVSxHQUFnQixJQUFJLENBQUM7O1FBa1MvQixpQkFBaUI7SUFDckIsQ0FBQztvQkF4VG9CLFdBQVc7SUF1QjVCLDRCQUFNLEdBQU47UUFDSSwyQkFBMkI7UUFDM0IsYUFBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzFCLDJCQUEyQjtRQUMzQix5Q0FBeUM7UUFDekMsK0RBQStEO1FBQy9ELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVELHNCQUFJLGlDQUFRO2FBQVo7WUFBQSxpQkFFQztZQURHLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBZCxDQUFjLENBQUMsQ0FBQTtRQUM1RCxDQUFDOzs7T0FB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LEdBQUcsV0FBVyxDQUFDLENBQUE7WUFDdEMsV0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBRUQscUNBQWUsR0FBZjtRQUNJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1FBQ3BDLElBQUksTUFBTSxFQUFFO1lBQ1IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFJRCw2QkFBTyxHQUFQO1FBQ0ksS0FBSyxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzlCLG1DQUFtQztZQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQzs7SUF6U0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDSTtJQUd0QjtRQURDLFFBQVE7cURBQ2tCO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ1E7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFDUTtJQXJCZCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBd1QvQjtJQUFELGtCQUFDO0NBeFRELEFBd1RDLENBeFR3QyxFQUFFLENBQUMsU0FBUyxHQXdUcEQ7a0JBeFRvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXcgZnJvbSBcIi4vVmlld1wiO1xyXG5pbXBvcnQgeyBldnQgfSBmcm9tIFwiLi4vY29yZS9ldmVudFwiO1xyXG5pbXBvcnQgRGV2aWNlIGZyb20gXCIuLi9taXNjL0RldmljZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbnZhciBUQUc6IHN0cmluZyA9IFwiW1ZpZXdNYW5hZ2VyXVwiXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIHN0YXRpYyBpbnN0YW5jZTogVmlld01hbmFnZXI7XHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICAvLyBiYXNlRGlyOnN0cmluZyA9IFwiYXNzZXRzL1wiXHJcblxyXG4gICAgX3ZpZXdzOiB7IFtpbmRleDogc3RyaW5nXTogVmlldyB9ID0ge31cclxuXHJcbiAgICAvLyBcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbW9kYWw6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbW9kYWxPcGFjaXR5OiBudW1iZXIgPSAxNjA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGF1ZGlvX3Nob3c6Y2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgYXVkaW9faGlkZTpjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuekluZGV4ID0gMTAwMDtcclxuICAgICAgICBWaWV3TWFuYWdlci5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLm1vZGFsLnpJbmRleCA9IDk5OTtcclxuICAgICAgICAvLyBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50YXJnZXQgPSBjYy5maW5kKFwiQ2FudmFzXCIpXHJcbiAgICAgICAgd2luZG93W1widm1cIl0gPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhbGxWaWV3cygpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fdmlld3MpLm1hcChrID0+IHRoaXMuX3ZpZXdzW2tdKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gY2MuZ2FtZS5yZW1vdmVQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5fdmlld3MpIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3ZpZXdzW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vbG9hZCBwcmVmYWJcclxuXHJcbiAgICAgICAgLy8gdGhpcy5tb2RhbC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLnNwcml0ZSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICAvLyB0aGlzLm1vZGFsLnpJbmRleCA9IDk5OTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0VmlzaWJsZURpYWxvZygpIHtcclxuICAgICAgICBsZXQgdmlld1N0YWNrcyA9IE9iamVjdC5rZXlzKHRoaXMuX3ZpZXdzKS5tYXAoayA9PiB0aGlzLl92aWV3c1trXSkuc29ydCgoYSwgYikgPT4gYi5ub2RlLnpJbmRleCAtIGEubm9kZS56SW5kZXgpXHJcbiAgICAgICAgcmV0dXJuIHZpZXdTdGFja3MuZmluZCh2ID0+IHYuaXNEaWFsb2cgJiYgdi5ub2RlLmFjdGl2ZSlcclxuICAgICAgICAvLyBmb3IgKHZhciBuYW1lIGluIHRoaXMuX3ZpZXdzKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCB2aWV3ID0gdGhpcy5fdmlld3NbbmFtZV1cclxuICAgICAgICAvLyAgICAgaWYgKHZpZXcuaXNEaWFsb2cpIHtcclxuICAgICAgICAvLyAgICAgICAgIGlmICh0aGlzLmlzVmlzaWJsZShuYW1lKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybiB2aWV3O1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYXNWaXNpYmxlRGlhbG9nKCkge1xyXG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5fdmlld3MpIHtcclxuICAgICAgICAgICAgbGV0IHZpZXcgPSB0aGlzLl92aWV3c1tuYW1lXVxyXG4gICAgICAgICAgICBpZiAodmlldy5pc0RpYWxvZykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzVmlzaWJsZSh2aWV3bmFtZSkge1xyXG4gICAgICAgIGxldCB2aWV3ID0gbnVsbDtcclxuICAgICAgICBpZiAodHlwZW9mICh2aWV3bmFtZSkgPT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgdmlldyA9IHRoaXMuX3ZpZXdzW3ZpZXduYW1lXVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdmlldyA9IHZpZXduYW1lO1xyXG4gICAgICAgIC8vdG9kbyBjaGVjayB0eXBlIFxyXG4gICAgICAgIGlmICh2aWV3KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2aWV3Lm5vZGUuYWN0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICB2aWV3KG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmlld3NbbmFtZV1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGF0dGFjaFZpZXdDb21wKGV4aXN0aW5nVmlldzogY2MuTm9kZSk6IFZpZXcge1xyXG4gICAgICAgIGxldCB2aWV3Q29tcCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHZpZXdDb21wID09IG51bGwgfHwgdmlld0NvbXAgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHZpZXdDb21wID0gZXhpc3RpbmdWaWV3LmdldENvbXBvbmVudChWaWV3KTtcclxuICAgICAgICAgICAgaWYgKHZpZXdDb21wID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHZpZXdDb21wID0gZXhpc3RpbmdWaWV3LmFkZENvbXBvbmVudChWaWV3KTtcclxuICAgICAgICAgICAgICAgIHZpZXdDb21wLmluaXQoZXhpc3RpbmdWaWV3Lm5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdzW3ZpZXdDb21wLm5hbWVdID0gdmlld0NvbXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2aWV3Q29tcDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dWaWV3KHZpZXc6IFZpZXcsIC4uLnBhcmFtcykge1xyXG4gICAgICAgIHRoaXMubW9kYWwuYWN0aXZlID0gdmlldy5pc0RpYWxvZztcclxuICAgICAgICAvL2NoZWNrIGhhcyBwb3B1cGVkIGRpYWxvZyBhbmQgIGFsbCBjdXJyZW50dmlldyBpcyBkaWFsb2cgc2hvdyBtb2RhbCBmb3JjZWx5LlxyXG4gICAgICAgIGlmICh0aGlzLmhhc1Zpc2libGVEaWFsb2coKSB8fCB2aWV3LmlzRGlhbG9nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWwuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2aWV3LmlzRGlhbG9nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWwub3BhY2l0eSA9IHZpZXcub3BhY2l0eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVaSW5kZXgodmlldyk7XHJcbiAgICAgICAgdGhpcy5hdWRpb19zaG93ICYmIERldmljZS5wbGF5RWZmZWN0KHRoaXMuYXVkaW9fc2hvdyk7XHJcbiAgICAgICAgcmV0dXJuIHZpZXcuc2hvdyguLi5wYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dGcm9tUHJlZmFiKHByZWZhYjogY2MuUHJlZmFiLCBwcmVmYWJQYXRoOiBzdHJpbmcsIC4uLnBhcmFtcykge1xyXG4gICAgICAgIGxldCB2aWV3ID0gdGhpcy5fdmlld3NbcHJlZmFiUGF0aF07XHJcbiAgICAgICAgaWYgKHZpZXcgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYilcclxuICAgICAgICAgICAgaWYgKG5vZGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgT2NjdXJzIFdoaWxlIENyZWF0aW5nIFZpZXc6XCIgKyBwcmVmYWJQYXRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2aWV3ID0gbm9kZS5nZXRDb21wb25lbnQoVmlldylcclxuICAgICAgICAgICAgaWYgKHZpZXcgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdmlldyA9IG5vZGUuYWRkQ29tcG9uZW50KFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgdmlldy5pc0RpYWxvZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvL2RlZmF1bHQgaXMgZGlhbG9nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHdpZGdldCA9IHZpZXcuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XHJcbiAgICAgICAgICAgIGlmICh3aWRnZXQpXHJcbiAgICAgICAgICAgICAgICB3aWRnZXQudGFyZ2V0ID0gY2MuZmluZChcIkNhbnZhc1wiKVxyXG4gICAgICAgICAgICB2aWV3LmluaXQocHJlZmFiUGF0aCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdzW3ByZWZhYlBhdGhdID0gdmlldztcclxuICAgICAgICAgICAgaWYgKHZpZXcuaXNEaWFsb2cpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChub2RlLCAxMDAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChub2RlLCAxMDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBub2RlID0gdmlldy5ub2RlO1xyXG4gICAgICAgIHRoaXMubm9kZS5jb2xvci5zZXRBKDI1NSk7XHJcbiAgICAgICAgdGhpcy5sb2coVEFHLCBcInNob3cgdmlldzpcIiArIHByZWZhYlBhdGgpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvd1ZpZXcodmlldywgLi4ucGFyYW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RnJvbVByZWZhYlBhdGgocHJlZmFiUGF0aDogc3RyaW5nLCAuLi5wYXJhbXMpIHtcclxuICAgICAgICBsZXQgdmlldyA9IHRoaXMuX3ZpZXdzW3ByZWZhYlBhdGhdXHJcbiAgICAgICAgaWYgKHZpZXcgPT0gbnVsbCB8fCB2aWV3ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZyhcInN0YXJ0IGxvYWQgcHJlZmFiOlwiICsgcHJlZmFiUGF0aClcclxuICAgICAgICAgICAgbGV0IGJlZm9yZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFZpZXc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHByZWZhYlBhdGgsIGNjLlByZWZhYiwgKGUsIHByZWZhYjogY2MuUHJlZmFiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2coVEFHLCBcInByZWZhYiBsb2FkZWQgOiBcIiArIHByZWZhYlBhdGggKyBcIiBcIiArIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGJlZm9yZVRpbWUpICsgXCJtc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Zyb21QcmVmYWIocHJlZmFiLCBwcmVmYWJQYXRoLCAuLi5wYXJhbXMpLnRoZW4ocmVzb2x2ZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5zcHJpdGUuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsLmFjdGl2ZSA9IHZpZXcuaXNEaWFsb2c7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc1Zpc2libGVEaWFsb2coKSB8fCB2aWV3LmlzRGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsLm9wYWNpdHkgPSB2aWV3Lm9wYWNpdHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sb2coVEFHLCBcInNob3cgdmlldzpcIiArIHByZWZhYlBhdGgsIHBhcmFtcylcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVaSW5kZXgodmlldyk7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9fc2hvdyAmJiBEZXZpY2UucGxheUVmZmVjdCh0aGlzLmF1ZGlvX3Nob3cpO1xyXG4gICAgICAgICAgICByZXR1cm4gdmlldy5zaG93KC4uLnBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByZWxvYWQocHJlZmFiUGF0aDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHZpZXcgPSB0aGlzLl92aWV3c1twcmVmYWJQYXRoXVxyXG4gICAgICAgIGlmICh2aWV3ID09IG51bGwgfHwgdmlldyA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQocHJlZmFiUGF0aCwgY2MuUHJlZmFiLCAoZSwgcHJlZmFiOiBjYy5QcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nKFRBRywgXCJwcmVsb2FkIHZpZXdcIiArIHByZWZhYlBhdGgpXHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYilcclxuICAgICAgICAgICAgICAgIHZpZXcgPSBub2RlLmdldENvbXBvbmVudChWaWV3KTtcclxuICAgICAgICAgICAgICAgIGxldCB3aWRnZXQgPSB2aWV3LmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpZGdldClcclxuICAgICAgICAgICAgICAgICAgICB3aWRnZXQudGFyZ2V0ID0gY2MuZmluZChcIkNhbnZhc1wiKVxyXG4gICAgICAgICAgICAgICAgdmlldy5pbml0KHByZWZhYlBhdGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmlld3NbcHJlZmFiUGF0aF0gPSB2aWV3O1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoXz0+bm9kZS5hY3RpdmUgPSBmYWxzZSwwKTtcclxuICAgICAgICAgICAgICAgIGlmICh2aWV3LmlzRGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5vZGUsIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2aWV3LmhpZGUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB3aWxsIGVuYWJsZVRvdWNoIG5leHQgc2hvdyB1cFxyXG4gICAgZGlzYWJsZVRvdWNoKHZpZXdOb2RlKSB7XHJcbiAgICAgICAgbGV0IHZpZXcgPSB2aWV3Tm9kZS5nZXRDb21wb25lbnQoVmlldylcclxuICAgICAgICBpZiAodmlldykge1xyXG4gICAgICAgICAgICB2aWV3LnRvdWNoRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbmFibGVUb3VjaCh2aWV3Tm9kZSkge1xyXG4gICAgICAgIGxldCB2aWV3ID0gdmlld05vZGUuZ2V0Q29tcG9uZW50KFZpZXcpXHJcbiAgICAgICAgaWYgKHZpZXcpIHtcclxuICAgICAgICAgICAgdmlldy50b3VjaEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgc2hvdyh2aWV3LCAuLi5wYXJhbXMpIHtcclxuICAgICAgICAvLyBkaXNhYmxlIGN1cnJlbnQgdmlldyAncyB0b3VjaCBcclxuICAgICAgICBsZXQgaXNEaWFsb2cgPSBmYWxzZTtcclxuICAgICAgICBpZiAodmlldyBpbnN0YW5jZW9mIGNjLkNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICBsZXQgdiA9IHZpZXcuZ2V0Q29tcG9uZW50KFZpZXcpXHJcbiAgICAgICAgICAgIGlzRGlhbG9nID0gdi5pc0RpYWxvZztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgKGlzRGlhbG9nKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ub2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSB0aGlzLm5vZGUuY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgICAgIGxldCB2aWV3ID0gdi5nZXRDb21wb25lbnQoVmlldyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmlldykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2aWV3LnRvcE1vc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi56SW5kZXggPSA5OTk5O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYuekluZGV4ID0gaSAqIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2LnpJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiAodmlldykgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93RnJvbVByZWZhYlBhdGgodmlldywgLi4ucGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh2aWV3ID09IG51bGwgfHwgdmlldyA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKHZpZXcubm9kZSkgdmlldyA9IHZpZXcubm9kZTtcclxuICAgICAgICAgICAgbGV0IHYgPSB0aGlzLmF0dGFjaFZpZXdDb21wKHZpZXcpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dWaWV3KHYsIC4uLnBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVpJbmRleCh2aWV3OiBWaWV3KSB7XHJcbiAgICAgICAgaWYgKCF2aWV3LnRvcE1vc3QpIHtcclxuICAgICAgICAgICAgaWYgKHZpZXcuaXNEaWFsb2cpIHtcclxuICAgICAgICAgICAgICAgIHZpZXcubm9kZS56SW5kZXggPSAxMDAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbC56SW5kZXggPSA5OTk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSh2aWV3bmFtZSwgcGxheUhpZGVBbmltID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgKHZpZXduYW1lKSAhPSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIC8vIGdldCB2aWV3IG5hbWUgXHJcbiAgICAgICAgICAgIGlmICh2aWV3bmFtZSA9PSBudWxsIHx8IHZpZXduYW1lID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBsZXQgdiA9IHRoaXMuYXR0YWNoVmlld0NvbXAodmlld25hbWUpXHJcbiAgICAgICAgICAgIHZpZXduYW1lID0gdi5uYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdmlldyA9IHRoaXMuX3ZpZXdzW3ZpZXduYW1lXVxyXG4gICAgICAgIGlmICh2aWV3ICE9IG51bGwgJiYgdmlldyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKHZpZXcubm9kZS5hY3RpdmUgPT0gZmFsc2UpIHJldHVybjtcclxuICAgICAgICAgICAgdmlldy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodmlldy5pc0RpYWxvZykge1xyXG4gICAgICAgICAgICAgICAgLy90b2RvOiBzaG91bGQgc3VwcG9ydCBkaWFsb2cgaGlkZSBhbmltdGlvbiAgbGF0ZXIgXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc1Zpc2libGVEaWFsb2coKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmKHZpZXcuaXNJbkhpZGVBbmltYXRpb24oKSlcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gdmlldy5oaWRlKCk7XHJcbiAgICAgICAgICAgIGlmIChwbGF5SGlkZUFuaW0pXHJcbiAgICAgICAgICAgICAgICB2aWV3LmRvSGlkZUFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICB2aWV3Lm9uSGlkZGVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9faGlkZSAmJiBEZXZpY2UucGxheUVmZmVjdCh0aGlzLmF1ZGlvX2hpZGUpO1xyXG4gICAgICAgICAgICBldnQuZW1pdCh2aWV3Lm5vZGUubmFtZSArIFwiLm9uSGlkZGVuXCIpXHJcbiAgICAgICAgICAgIGV2dC5lbWl0KFwiVmlldy5vbkhpZGRlblwiLCB2aWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tWaWV3U3RhY2tzKCkge1xyXG4gICAgICAgIGxldCBkaWFsb2cgPSB0aGlzLmdldFZpc2libGVEaWFsb2coKVxyXG4gICAgICAgIGlmIChkaWFsb2cpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsLm9wYWNpdHkgPSBkaWFsb2cub3BhY2l0eTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVaSW5kZXgoZGlhbG9nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBoaWRlQWxsKCkge1xyXG4gICAgICAgIGZvciAodmFyIHZpZXduYW1lIGluIHRoaXMuX3ZpZXdzKSB7XHJcbiAgICAgICAgICAgIC8vIGxldCB2aWV3ID0gdGhpcy5fdmlld3Nbdmlld25hbWVdXHJcbiAgICAgICAgICAgIHRoaXMuaGlkZSh2aWV3bmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19