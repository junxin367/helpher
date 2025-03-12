"use strict";
cc._RF.push(module, 'e1217OaHDFCEbPP4vjLJXLh', 'View');
// framework/ui/View.ts

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
var ViewManager_1 = require("./ViewManager");
var event_1 = require("../core/event");
var UIFunctions_1 = require("./UIFunctions");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var View = /** @class */ (function (_super) {
    __extends(View, _super);
    function View() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDialog = false;
        _this.closeOnClick = false;
        _this.opacity = 200;
        _this.childrenAnimation = false;
        _this._topMost = false;
        _this.touchBlocker = null;
        _this.touchBlockerComp = null;
        _this.animations = [];
        _this._isHiding = false;
        return _this;
    }
    // isTouchEnabled: boolean = true;
    View.prototype.emit = function (e, msg) {
        event_1.evt.emit(msg);
    };
    View.prototype.call = function (event, exp) {
        // eval(exp);
        g.execScript(exp);
    };
    View.prototype.setDelegate = function (target) {
        this.target = target;
    };
    View.prototype.emitEvent = function (e, exp) {
        event_1.evt.emit(exp);
    };
    /** 打开其它界面  */
    View.prototype.showUI = function (e, viewPath) {
        ViewManager_1.default.instance.show(viewPath);
    };
    View.prototype.onLoad = function () {
        if (this.childrenAnimation) {
            this.animations = UIFunctions_1.default.getChildrenAnimations(this.node);
        }
        else {
            var anim = this.node.getComponent(cc.Animation);
            if (anim)
                this.animations.push(anim);
        }
        var components = this.getComponents(cc.Component);
        for (var i = 0; i < components.length; i++) {
            var comp = components[i];
            if (comp != this) {
                if (comp.onShown || comp.onShow || comp.onHidden) {
                    this.target = comp;
                    break;
                }
            }
        }
        /** 点击背景退出弹窗 */
        if (this.isDialog) {
            if (this.closeOnClick) {
                this.node.on(cc.Node.EventType.TOUCH_END, this.hide, this);
                this.node.children[0] && this.node.children[0].addComponent(cc.BlockInputEvents);
            }
        }
        if (this.animations.length > 0) {
            // this.touchBlocker = new cc.Node();
            // this.touchBlocker.name = "TouchBlocker"
            // this.touchBlocker.width = 2000;
            // this.touchBlocker.height = 2000;
            // this.touchBlockerComp = this.touchBlocker.addComponent(cc.BlockInputEvents)
            // this.node.addChild(this.touchBlocker, 1000)
        }
    };
    View.prototype.start = function () {
        this.touchEnabled = true;
    };
    View.prototype.init = function (viewname) {
        this.name = viewname;
        var idx = viewname.lastIndexOf("/") + 1;
        // idx = Math.max(0,idx);
        this.node.name = viewname.substr(idx);
    };
    View.prototype.hideAnimationCallback = function () {
        this.node.active = this.visible;
        ViewManager_1.default.instance.checkViewStacks();
    };
    /**
     * //如果 实现了view的animation那么需要 animation 去做隐藏
     * 否则会不会有animtion ，系统 将直接 设置 active 为false
     */
    View.prototype.doHideAnimation = function () {
        // if (!this.isDialog)
        // {
        //todo is in hide animtion return ;
        // if(this.isInHideAnimation())return;
        this.node.active = true;
        this._isHiding = true;
        if (!UIFunctions_1.default.doHideAnimations(this.animations, this.hideAnimationCallback, this)) {
            this.node.active = false;
            this._isHiding = false;
            ViewManager_1.default.instance.checkViewStacks();
        }
        this.log("[View] hide:", this.name);
        this._visibleDirty = false;
    };
    View.prototype.isInHideAnimation = function () {
        return this._isHiding;
    };
    View.prototype.onHidden = function () {
        this._visibleDirty = false;
        if (this.target && this.target.onHidden)
            this.target.onHidden();
        // cc.Component.EventHandler.emitEvents(this.onHiddenEvents,[params]);
    };
    View.prototype.hide = function () {
        // super.hide()
        //ViewManager remove dd
        this.touchEnabled = false;
        ViewManager_1.default.instance.hide(this.node);
    };
    Object.defineProperty(View.prototype, "visible", {
        get: function () { return this._visibleDirty; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(View.prototype, "topMost", {
        get: function () {
            return this._topMost;
        },
        set: function (b) {
            if (this._topMost)
                this._topMost = b;
            this.node.zIndex = 9999;
        },
        enumerable: false,
        configurable: true
    });
    View.prototype.showAnimationNextFrame = function (callback) {
        var _this = this;
        this.scheduleOnce(function (_) {
            UIFunctions_1.default.doShowAnimations(_this.animations, callback);
        }, 0);
    };
    Object.defineProperty(View.prototype, "touchEnabled", {
        get: function () {
            if (this.touchBlocker) {
                return !this.touchBlocker.active;
            }
            return true;
        },
        set: function (b) {
            if (this.touchBlocker) {
                this.touchBlocker.active = !b;
            }
        },
        enumerable: false,
        configurable: true
    });
    // setTouchEnabled(bEnabled){
    //     this.touchBlockerComp.enabled = bEnabled;
    //     // UIFunctions.setTouchEnabled(this.node,bEnabled);
    // }
    View.prototype.show = function () {
        var _this = this;
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.node.active = true;
        //reset zindex 
        if (this.topMost)
            this.node.zIndex = 9999;
        this.log("[View] show:", this.name, params);
        UIFunctions_1.default.stopAnimations(this.animations);
        // call next frames 
        // this.showAnimationDelay()
        //确保在widget 更新结束后开始动画 ，
        return new Promise(function (resolve, reject) {
            var _a;
            var self = _this;
            var showFinishCallback = function () {
                var _a;
                if (!self.touchEnabled)
                    self.touchEnabled = true;
                var ret = null;
                if (self.target && self.target.onShown) {
                    try {
                        ret = (_a = self.target).onShown.apply(_a, params);
                    }
                    catch (err) {
                        self.error(err);
                    }
                }
                event_1.evt.emit(self.node.name + ".onShown", self, ret, params);
                event_1.evt.emit("View.onShown", self, ret, params);
                resolve(self);
            };
            _this.showAnimationNextFrame(showFinishCallback);
            _this._visibleDirty = true;
            event_1.evt.emitDelay(0, self.node.name + ".onShown.Before", self, params);
            event_1.evt.emit("View.onShow", self, params);
            // mvc view 
            // let mv = this.getComponent(mvc_View)
            // mv && mv.render()
            if (_this.target && _this.target.onShow) {
                try {
                    (_a = _this.target).onShow.apply(_a, params);
                }
                catch (err) {
                    _this.error(err);
                }
            }
            // cc.Component.EventHandler.emitEvents(this.onShownEvents,[params]);
        });
    };
    __decorate([
        property
    ], View.prototype, "isDialog", void 0);
    __decorate([
        property
    ], View.prototype, "closeOnClick", void 0);
    __decorate([
        property
    ], View.prototype, "opacity", void 0);
    __decorate([
        property
    ], View.prototype, "childrenAnimation", void 0);
    __decorate([
        property({ visible: true, displayName: "topMost" })
    ], View.prototype, "_topMost", void 0);
    View = __decorate([
        ccclass
    ], View);
    return View;
}(cc.Component));
exports.default = View;

cc._RF.pop();