
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/ui/View.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx1aVxcVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFDeEMsdUNBQW9DO0FBQ3BDLDZDQUF3QztBQUVsQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQTJPQztRQWxPRyxjQUFRLEdBQVksS0FBSyxDQUFDO1FBRzFCLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBSzlCLGFBQU8sR0FBVyxHQUFHLENBQUM7UUFLdEIsdUJBQWlCLEdBQVksS0FBSyxDQUFDO1FBRzNCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFHbEMsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDN0Isc0JBQWdCLEdBQXdCLElBQUksQ0FBQztRQUc3QyxnQkFBVSxHQUFtQixFQUFFLENBQUM7UUE2RWhDLGVBQVMsR0FBWSxLQUFLLENBQUM7O0lBOEgvQixDQUFDO0lBMU9HLGtDQUFrQztJQUNsQyxtQkFBSSxHQUFKLFVBQUssQ0FBQyxFQUFFLEdBQUc7UUFDUCxXQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ2pCLENBQUM7SUE4QkQsbUJBQUksR0FBSixVQUFLLEtBQUssRUFBRSxHQUFXO1FBQ25CLGFBQWE7UUFDYixDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCwwQkFBVyxHQUFYLFVBQVksTUFBTTtRQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx3QkFBUyxHQUFULFVBQVUsQ0FBQyxFQUFFLEdBQVc7UUFDcEIsV0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsY0FBYztJQUNkLHFCQUFNLEdB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QUMsQ0FBQztZQUN0QyxZQUFZO1lBQ1osdUNBQXVDO1lBQ3ZDLG9CQUFvQjtZQUNwQixJQUFJLEtBQUksQ0FBQyxNQUFNLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQ25DLElBQUk7b0JBQ0EsQ0FBQSxLQUFBLEtBQUksQ0FBQyxNQUFNLENBQUEsQ0FBQyxNQUFNLFdBQUksTUFBTSxFQUFFO2lCQUNqQztnQkFBQyxPQUFPLEdBQUcsRUFBRTtvQkFDVixLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2lCQUNsQjthQUNKO1lBQ0QscUVBQXFFO1FBQ3pFLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQWpPRDtRQURDLFFBQVE7MENBQ2lCO0lBRzFCO1FBREMsUUFBUTs4Q0FDcUI7SUFLOUI7UUFEQyxRQUFRO3lDQUNhO0lBS3RCO1FBREMsUUFBUTttREFDMEI7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsQ0FBQzswQ0FDbEI7SUF6QmpCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0EyT3hCO0lBQUQsV0FBQztDQTNPRCxBQTJPQyxDQTNPaUMsRUFBRSxDQUFDLFNBQVMsR0EyTzdDO2tCQTNPb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3TWFuYWdlciBmcm9tIFwiLi9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBldnQgfSBmcm9tIFwiLi4vY29yZS9ldmVudFwiO1xyXG5pbXBvcnQgVUlGdW5jdGlvbnMgZnJvbSBcIi4vVUlGdW5jdGlvbnNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIC8vIGlzVG91Y2hFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGVtaXQoZSwgbXNnKSB7XHJcbiAgICAgICAgZXZ0LmVtaXQobXNnKVxyXG4gICAgfVxyXG5cclxuICAgIG5hbWU6IHN0cmluZztcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGlzRGlhbG9nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBjbG9zZU9uQ2xpY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICB0YXJnZXQ6IGFueTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG9wYWNpdHk6IG51bWJlciA9IDIwMDtcclxuXHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgY2hpbGRyZW5BbmltYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB2aXNpYmxlOiB0cnVlLCBkaXNwbGF5TmFtZTogXCJ0b3BNb3N0XCIgfSlcclxuICAgIHByaXZhdGUgX3RvcE1vc3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgdG91Y2hCbG9ja2VyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHRvdWNoQmxvY2tlckNvbXA6IGNjLkJsb2NrSW5wdXRFdmVudHMgPSBudWxsO1xyXG5cclxuXHJcbiAgICBhbmltYXRpb25zOiBjYy5BbmltYXRpb25bXSA9IFtdO1xyXG5cclxuICAgIGNhbGwoZXZlbnQsIGV4cDogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gZXZhbChleHApO1xyXG4gICAgICAgIGcuZXhlY1NjcmlwdChleHApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERlbGVnYXRlKHRhcmdldCkge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIGVtaXRFdmVudChlLCBleHA6IHN0cmluZykge1xyXG4gICAgICAgIGV2dC5lbWl0KGV4cCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaJk+W8gOWFtuWug+eVjOmdoiAgKi9cclxuICAgIHNob3dVSShlLCB2aWV3UGF0aCkge1xyXG4gICAgICAgIFZpZXdNYW5hZ2VyLmluc3RhbmNlLnNob3codmlld1BhdGgpXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW5BbmltYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zID0gVUlGdW5jdGlvbnMuZ2V0Q2hpbGRyZW5BbmltYXRpb25zKHRoaXMubm9kZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgYW5pbSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG4gICAgICAgICAgICBpZiAoYW5pbSlcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKGFuaW0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjb21wb25lbnRzID0gdGhpcy5nZXRDb21wb25lbnRzKGNjLkNvbXBvbmVudCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb25lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjb21wOiBhbnkgPSBjb21wb25lbnRzW2ldXHJcbiAgICAgICAgICAgIGlmIChjb21wICE9IHRoaXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb21wLm9uU2hvd24gfHwgY29tcC5vblNob3cgfHwgY29tcC5vbkhpZGRlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gY29tcDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqIOeCueWHu+iDjOaZr+mAgOWHuuW8ueeqlyAqL1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGlhbG9nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNsb3NlT25DbGljaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5oaWRlLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXSAmJiB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uYWRkQ29tcG9uZW50KGNjLkJsb2NrSW5wdXRFdmVudHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudG91Y2hCbG9ja2VyID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy50b3VjaEJsb2NrZXIubmFtZSA9IFwiVG91Y2hCbG9ja2VyXCJcclxuICAgICAgICAgICAgLy8gdGhpcy50b3VjaEJsb2NrZXIud2lkdGggPSAyMDAwO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnRvdWNoQmxvY2tlci5oZWlnaHQgPSAyMDAwO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnRvdWNoQmxvY2tlckNvbXAgPSB0aGlzLnRvdWNoQmxvY2tlci5hZGRDb21wb25lbnQoY2MuQmxvY2tJbnB1dEV2ZW50cylcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmFkZENoaWxkKHRoaXMudG91Y2hCbG9ja2VyLCAxMDAwKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy50b3VjaEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQodmlld25hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHZpZXduYW1lO1xyXG4gICAgICAgIGxldCBpZHggPSB2aWV3bmFtZS5sYXN0SW5kZXhPZihcIi9cIikgKyAxXHJcbiAgICAgICAgLy8gaWR4ID0gTWF0aC5tYXgoMCxpZHgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5uYW1lID0gdmlld25hbWUuc3Vic3RyKGlkeClcclxuICAgIH1cclxuXHJcbiAgICBoaWRlQW5pbWF0aW9uQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRoaXMudmlzaWJsZTtcclxuICAgICAgICBWaWV3TWFuYWdlci5pbnN0YW5jZS5jaGVja1ZpZXdTdGFja3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBfaXNIaWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAvL+WmguaenCDlrp7njrDkuoZ2aWV355qEYW5pbWF0aW9u6YKj5LmI6ZyA6KaBIGFuaW1hdGlvbiDljrvlgZrpmpDol49cclxuICAgICAqIOWQpuWImeS8muS4jeS8muaciWFuaW10aW9uIO+8jOezu+e7nyDlsIbnm7TmjqUg6K6+572uIGFjdGl2ZSDkuLpmYWxzZVxyXG4gICAgICovXHJcbiAgICBkb0hpZGVBbmltYXRpb24oKSB7XHJcbiAgICAgICAgLy8gaWYgKCF0aGlzLmlzRGlhbG9nKVxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvL3RvZG8gaXMgaW4gaGlkZSBhbmltdGlvbiByZXR1cm4gO1xyXG4gICAgICAgIC8vIGlmKHRoaXMuaXNJbkhpZGVBbmltYXRpb24oKSlyZXR1cm47XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5faXNIaWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGlmICghVUlGdW5jdGlvbnMuZG9IaWRlQW5pbWF0aW9ucyh0aGlzLmFuaW1hdGlvbnMsIHRoaXMuaGlkZUFuaW1hdGlvbkNhbGxiYWNrLCB0aGlzKSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzSGlkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3RhbmNlLmNoZWNrVmlld1N0YWNrcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvZyhcIltWaWV3XSBoaWRlOlwiLCB0aGlzLm5hbWUpO1xyXG4gICAgICAgIHRoaXMuX3Zpc2libGVEaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSW5IaWRlQW5pbWF0aW9uKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzSGlkaW5nXHJcbiAgICB9XHJcblxyXG4gICAgb25IaWRkZW4oKSB7XHJcbiAgICAgICAgdGhpcy5fdmlzaWJsZURpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0ICYmIHRoaXMudGFyZ2V0Lm9uSGlkZGVuKVxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5vbkhpZGRlbigpO1xyXG4gICAgICAgIC8vIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyh0aGlzLm9uSGlkZGVuRXZlbnRzLFtwYXJhbXNdKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIC8vIHN1cGVyLmhpZGUoKVxyXG4gICAgICAgIC8vVmlld01hbmFnZXIgcmVtb3ZlIGRkXHJcbiAgICAgICAgdGhpcy50b3VjaEVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBWaWV3TWFuYWdlci5pbnN0YW5jZS5oaWRlKHRoaXMubm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Zpc2libGVEaXJ0eTogYm9vbGVhbjtcclxuXHJcbiAgICBnZXQgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuX3Zpc2libGVEaXJ0eTsgfVxyXG5cclxuXHJcblxyXG4gICAgc2V0IHRvcE1vc3QoYikge1xyXG4gICAgICAgIGlmICh0aGlzLl90b3BNb3N0KSB0aGlzLl90b3BNb3N0ID0gYjtcclxuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gOTk5OTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdG9wTW9zdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9wTW9zdDtcclxuICAgIH1cclxuXHJcbiAgICBzaG93QW5pbWF0aW9uTmV4dEZyYW1lKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoXyA9PiB7XHJcbiAgICAgICAgICAgIFVJRnVuY3Rpb25zLmRvU2hvd0FuaW1hdGlvbnModGhpcy5hbmltYXRpb25zLCBjYWxsYmFjaylcclxuICAgICAgICB9LCAwKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCB0b3VjaEVuYWJsZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG91Y2hCbG9ja2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy50b3VjaEJsb2NrZXIuYWN0aXZlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB0b3VjaEVuYWJsZWQoYikge1xyXG4gICAgICAgIGlmICh0aGlzLnRvdWNoQmxvY2tlcikge1xyXG4gICAgICAgICAgICB0aGlzLnRvdWNoQmxvY2tlci5hY3RpdmUgPSAhYlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXRUb3VjaEVuYWJsZWQoYkVuYWJsZWQpe1xyXG4gICAgLy8gICAgIHRoaXMudG91Y2hCbG9ja2VyQ29tcC5lbmFibGVkID0gYkVuYWJsZWQ7XHJcbiAgICAvLyAgICAgLy8gVUlGdW5jdGlvbnMuc2V0VG91Y2hFbmFibGVkKHRoaXMubm9kZSxiRW5hYmxlZCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgc2hvdyguLi5wYXJhbXMpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvL3Jlc2V0IHppbmRleCBcclxuICAgICAgICBpZiAodGhpcy50b3BNb3N0KVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gOTk5OTtcclxuICAgICAgICB0aGlzLmxvZyhcIltWaWV3XSBzaG93OlwiLCB0aGlzLm5hbWUsIHBhcmFtcyk7XHJcbiAgICAgICAgVUlGdW5jdGlvbnMuc3RvcEFuaW1hdGlvbnModGhpcy5hbmltYXRpb25zKTtcclxuXHJcbiAgICAgICAgLy8gY2FsbCBuZXh0IGZyYW1lcyBcclxuICAgICAgICAvLyB0aGlzLnNob3dBbmltYXRpb25EZWxheSgpXHJcbiAgICAgICAgLy/noa7kv53lnKh3aWRnZXQg5pu05paw57uT5p2f5ZCO5byA5aeL5Yqo55S7IO+8jFxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxWaWV3PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGxldCBzaG93RmluaXNoQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGYudG91Y2hFbmFibGVkKVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudG91Y2hFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxldCByZXQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYudGFyZ2V0ICYmIHNlbGYudGFyZ2V0Lm9uU2hvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQgPSBzZWxmLnRhcmdldC5vblNob3duKC4uLnBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGV2dC5lbWl0KHNlbGYubm9kZS5uYW1lICsgXCIub25TaG93blwiLCBzZWxmLCByZXQsIHBhcmFtcylcclxuICAgICAgICAgICAgICAgIGV2dC5lbWl0KFwiVmlldy5vblNob3duXCIsIHNlbGYsIHJldCwgcGFyYW1zKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoc2VsZik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zaG93QW5pbWF0aW9uTmV4dEZyYW1lKHNob3dGaW5pc2hDYWxsYmFjaylcclxuICAgICAgICAgICAgdGhpcy5fdmlzaWJsZURpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgZXZ0LmVtaXREZWxheSgwLCBzZWxmLm5vZGUubmFtZSArIFwiLm9uU2hvd24uQmVmb3JlXCIsIHNlbGYsIHBhcmFtcylcclxuICAgICAgICAgICAgZXZ0LmVtaXQoXCJWaWV3Lm9uU2hvd1wiLCBzZWxmLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICAvLyBtdmMgdmlldyBcclxuICAgICAgICAgICAgLy8gbGV0IG12ID0gdGhpcy5nZXRDb21wb25lbnQobXZjX1ZpZXcpXHJcbiAgICAgICAgICAgIC8vIG12ICYmIG12LnJlbmRlcigpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldCAmJiB0aGlzLnRhcmdldC5vblNob3cpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXQub25TaG93KC4uLnBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHModGhpcy5vblNob3duRXZlbnRzLFtwYXJhbXNdKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiJdfQ==