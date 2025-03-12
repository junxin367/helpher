
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/NoobGuider.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f45ceLsf9ROtbvY0c2dQB9F', 'NoobGuider');
// framework/misc/NoobGuider.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guider = void 0;
var Signal_1 = require("../core/Signal");
var ViewManager_1 = require("../ui/ViewManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
exports.Guider = null;
var DOUBLECLICK_TIMEOUT = 300;
var ACTION_MOVE_FINGER = 1000;
var NoobGuider = /** @class */ (function (_super) {
    __extends(NoobGuider, _super);
    function NoobGuider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._lastClickedTime = 0;
        /**whole hot rect -> contains 0.maskbackgrounds 1.hightlight 2.highlight_border 3.finger */
        _this.wholeHotRect = null;
        //------------------------------------------------------------------------------//
        /** click_area(self)/ highlight_border /finger */
        _this.hotRect = null;
        _this.highlight = null;
        _this.highlight_border = null;
        _this.finger = null;
        _this.glow = null;
        _this.motionStreak = null;
        //------------------------------------------------------------------------------//
        _this.msgNode = null;
        _this.msgLabel = null;
        _this.clickSignal = new Signal_1.default();
        _this.clickBackground = new Signal_1.default();
        _this.doubleClickSignal = new Signal_1.default();
        _this.background = null;
        _this.maskStencilSp1 = null;
        _this.msgTitleLabel = null;
        _this.msgButtonLabel = null;
        _this.msgButton = null;
        _this.node_anyKey = null;
        _this.msgButtonCallback = null;
        _this.maskComp = null;
        _this.msgTitle = "";
        _this.validRect = null;
        return _this;
    }
    NoobGuider.prototype.onLoad = function () {
        this.maskComp = this.highlight.getComponent(cc.Mask);
        this.hotRect.on(cc.Node.EventType.TOUCH_START, this.onPointTouchBegan, this);
        this.hotRect.on(cc.Node.EventType.TOUCH_END, this.onPointClick, this);
        this.background.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.background.on(cc.Node.EventType.TOUCH_END, this.clickBackground.fire, this.clickBackground);
        this.hidePointer();
        this.hideMessage();
        this.motionStreak = this.finger.getComponentInChildren(cc.MotionStreak);
    };
    NoobGuider.prototype.onDestroy = function () {
        this.hotRect.off(cc.Node.EventType.TOUCH_END, this.onPointClick, this);
        this.background.off(cc.Node.EventType.TOUCH_END, this.clickBackground.fire, this.clickBackground);
        this.hotRect.off(cc.Node.EventType.TOUCH_START, this.onPointTouchBegan, this);
        this.background.off(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
    };
    NoobGuider.prototype.onShown = function () {
    };
    NoobGuider.prototype.onPointTouchBegan = function (e) {
        return false;
    };
    NoobGuider.prototype.onTouchBegan = function (e) {
        if (!this.validRect)
            return false;
        var p = e.currentTouch.getLocation;
        if (this.validRect.contains(p)) {
            //可穿透
            return false;
        }
        return true;
    };
    NoobGuider.prototype.hideMask = function () {
        this.background.active = false;
    };
    NoobGuider.prototype.showMask = function () {
        this.background.active = true;
    };
    NoobGuider.prototype.hidePointer = function () {
        // this.pointer.active = false;
        this.wholeHotRect.x = -1000;
        this.background.getComponent(cc.Widget).updateAlignment();
        this.motionStreak && this.motionStreak.reset();
    };
    NoobGuider.prototype.hideRect = function () {
        this.highlight_border.node.active = false;
    };
    /**
     * is_clickArea : false 可以点击 到该 区域下面的控件，
     */
    NoobGuider.prototype.showRect = function (rect, is_clickArea) {
        if (typeof (rect) == "string") {
            rect = this.findUINode(rect).getBoundingBoxToWorld();
        }
        var p = this.node.convertToNodeSpaceAR(rect.center);
        this.highlight.width = rect.width;
        this.highlight.height = rect.height;
        this.highlight_border.node.width = rect.width + 2;
        this.highlight_border.node.height = rect.height + 2;
        this.wholeHotRect.active = true;
        this.wholeHotRect.x = p.x;
        this.wholeHotRect.y = p.y;
        this.validRect = rect;
        this.highlight_border.node.active = true;
        if (is_clickArea) {
            this.hotRect.width = rect.width;
            this.hotRect.height = rect.height;
        }
        else {
            this.hotRect.width = 0;
            this.hotRect.height = 0;
        }
        this.background.getComponent(cc.Widget).updateAlignment();
    };
    NoobGuider.prototype.showFinger = function (bAnim) {
        if (bAnim === void 0) { bAnim = true; }
        this.finger.position = cc.Vec2.ZERO;
        this.motionStreak && this.motionStreak.reset();
        this.finger.active = true;
        if (bAnim) {
            this.finger.getComponent(cc.Animation).play("hand_click");
            this.glow.active = true;
        }
        else {
            this.finger.getComponent(cc.Animation).stop("hand_click");
            this.glow.active = false;
        }
    };
    NoobGuider.prototype.showPointer = function (node, simulate_click_area) {
        if (node === void 0) { node = cc.Vec2.ZERO; }
        if (simulate_click_area === void 0) { simulate_click_area = true; }
        if (node instanceof cc.Node) {
            var rect = node.getBoundingBoxToWorld();
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
    };
    NoobGuider.prototype.hideMessage = function () {
        this.msgNode.active = false;
    };
    NoobGuider.prototype.setMessageTitle = function (msgTitle) {
        this.msgTitle = msgTitle;
    };
    NoobGuider.prototype.showMessage = function (msg, x, y, w, h) {
        msg = msg.replace(/\/r?\/n/g, "\n");
        this.msgNode.x = x || 0;
        this.msgNode.y = y || 0;
        this.msgNode.width = w;
        this.msgNode.height = h;
        this.msgNode.active = true;
        this.msgLabel.string = msg;
        if (this.msgTitle == null || this.msgTitle == "") {
            this.msgTitleLabel.node.active = false;
        }
        else {
            this.msgTitleLabel.node.active = true;
            this.msgTitleLabel.string = this.msgTitle;
        }
        this.msgTitle = "";
        this.msgButton.node.active = false;
        this.node_anyKey.active = false;
    };
    NoobGuider.prototype.showMessageButton = function (msg, callback) {
        this.msgButton.node.active = true;
        this.msgButtonLabel.string = msg;
        this.msgButtonCallback = callback;
    };
    NoobGuider.prototype.showMessageButtonEx = function (buttonText, buttonCallback) {
        var _this = this;
        return new Promise(function (resolve) {
            if (buttonText) {
                _this.showMessageButton(buttonText, function (_) {
                    resolve();
                });
            }
        });
    };
    NoobGuider.prototype.showMessageEx = function (title, content, buttonText, buttonCallback, x, y, w, h) {
        this.setMessageTitle(title);
        this.showMessage(content, x, y, w, h);
        if (buttonText) {
            return this.showMessageButtonEx(buttonText, buttonCallback);
        }
    };
    NoobGuider.prototype.click_msgButton = function () {
        this.hideMessage();
        this.msgButtonCallback && this.msgButtonCallback();
    };
    NoobGuider.prototype.onPointClick = function () {
        var now = Date.now();
        var offset = now - this._lastClickedTime;
        if (offset < DOUBLECLICK_TIMEOUT) {
            this.doubleClickSignal.fire();
        }
        else {
            this.clickSignal.fire();
        }
        this._lastClickedTime = now;
    };
    NoobGuider.prototype.waitClick = function (node, canTrigger, showHands) {
        if (canTrigger === void 0) { canTrigger = true; }
        if (showHands === void 0) { showHands = true; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.showPointer(node);
                if (!showHands) {
                    this.hideFinger();
                }
                // btn.clickEvents.
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.clickSignal.on(function () {
                            if (canTrigger) {
                                var btn = node.getComponent(cc.Button) || node.getComponentInChildren(cc.Button);
                                try {
                                    if (btn)
                                        cc.Component.EventHandler.emitEvents(btn.clickEvents, { target: btn.node });
                                    else {
                                        node.emit(cc.Node.EventType.TOUCH_END, { target: node });
                                    }
                                }
                                catch (e) {
                                    reject(e);
                                }
                                _this.clickSignal.clear();
                            }
                            resolve();
                        });
                    })];
            });
        });
    };
    NoobGuider.prototype.waitDoubleClick = function (node) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.showPointer(node);
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.doubleClickSignal.on(function () {
                            node.getComponents(cc.Component).forEach(function (v) {
                                var func = v['onDoubleClick'];
                                if (func) {
                                    func.call(v);
                                }
                            });
                            resolve();
                        });
                    })];
            });
        });
    };
    NoobGuider.prototype.waitAnyKey = function (node) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.node_anyKey.active = true;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.clickBackground.on(function () {
                            _this.clickBackground.clear();
                            resolve();
                        });
                        if (node) {
                            _this.waitClick(node, false, false).then(function (v) {
                                resolve();
                            });
                        }
                    })];
            });
        });
    };
    NoobGuider.prototype.moveFinger = function (from, to, repeatTimes) {
        var _this = this;
        if (repeatTimes === void 0) { repeatTimes = cc.macro.REPEAT_FOREVER; }
        this.showFinger(false);
        from = this.hotRect.convertToNodeSpaceAR(from);
        to = this.hotRect.convertToNodeSpaceAR(to);
        from.subSelf(cc.v2(0, 50));
        to.subSelf(cc.v2(0, 50));
        var callback = cc.callFunc(function (v) {
            _this.finger.position = from;
            _this.motionStreak && _this.motionStreak.reset();
        });
        var move = cc.moveTo(1, to).easing(cc.easeSineInOut());
        var delay = cc.delayTime(1);
        var seq = cc.sequence(callback, move, delay).repeat(repeatTimes);
        seq.setTag(ACTION_MOVE_FINGER);
        this.finger.runAction(seq);
    };
    NoobGuider.prototype.startDrag = function (from, to, showMask) {
        if (showMask === void 0) { showMask = true; }
        var fromNode = this.findUINode(from);
        var toNode = this.findUINode(to);
        var fromRect = fromNode.getBoundingBoxToWorld();
        var toRect = toNode.getBoundingBoxToWorld();
        if (showMask) {
            this.showMask();
            this.showRect(fromRect.union(cc.rect(), toRect));
        }
        else {
            this.hideMask();
            this.hideRect();
        }
        this.moveFinger(fromRect.center, toRect.center);
    };
    NoobGuider.prototype.stopDrag = function () {
        this.finger.stopActionByTag(ACTION_MOVE_FINGER);
        this.hidePointer();
    };
    NoobGuider.prototype.findUINode = function (path, type) {
        var node = null;
        if (type == "UI") {
            node = cc.find("Canvas/ViewManager/" + path);
        }
        else {
            node = cc.find(path);
        }
        return node;
    };
    NoobGuider.prototype.waitClickEx = function (uipath, msgTitle, msgContent, x, y, anyKey) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var node;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //11 
                    //data1 为ui 路径 
                    return [4 /*yield*/, event.sleep(0.1)];
                    case 1:
                        //11 
                        //data1 为ui 路径 
                        _a.sent();
                        if (uipath instanceof cc.Node) {
                            node = uipath;
                        }
                        else {
                            if (uipath == null)
                                return [2 /*return*/, console.error("waitClickEx:" + uipath + " null ")];
                            node = this.findUINode(uipath);
                            if (node == null)
                                return [2 /*return*/, console.error(uipath + " not found ")];
                        }
                        if (msgTitle)
                            this.setMessageTitle(msgTitle);
                        if (msgContent)
                            this.showMessage(msgContent, x, y);
                        this.showMask();
                        if (!anyKey) return [3 /*break*/, 3];
                        this.showRect(node.getBoundingBoxToWorld());
                        this.hideFinger();
                        return [4 /*yield*/, this.waitAnyKey(node)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.waitClick(node).catch(function (e) { return console.error(e); })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        this.hideMask();
                        this.hidePointer();
                        this.hideMessage();
                        return [2 /*return*/];
                }
            });
        });
    };
    NoobGuider.prototype.hideFinger = function () {
        this.finger.active = false;
    };
    NoobGuider.prototype.hideAll = function () {
        this.hideMask();
        this.hideRect();
        this.hideMessage();
        this.hideFinger();
    };
    NoobGuider.prototype.waitAnyInput = function (title, content, x, y) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showMessage(title, content, x, y);
                        this.hidePointer();
                        this.hideMask();
                        return [4 /*yield*/, this.waitAnyKey()];
                    case 1:
                        _a.sent();
                        this.hideMessage();
                        return [4 /*yield*/, event.sleep(0.3)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NoobGuider.prototype.waitOpen = function (uiName, open) {
        var ps = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            ps[_i - 2] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var view;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        view = ViewManager_1.default.instance.view("UI/" + uiName);
                        if (!(view == null)) return [3 /*break*/, 2];
                        if (open) {
                            (_a = ViewManager_1.default.instance).show.apply(_a, __spreadArrays(["UI/" + uiName], ps));
                        }
                        return [4 /*yield*/, event.wait(uiName + ".onShown.After")];
                    case 1:
                        view = (_c.sent())[0];
                        return [3 /*break*/, 4];
                    case 2:
                        (_b = ViewManager_1.default.instance).show.apply(_b, __spreadArrays([view], ps));
                        return [4 /*yield*/, event.wait(uiName + ".onShown.After")];
                    case 3:
                        view = (_c.sent())[0];
                        _c.label = 4;
                    case 4: return [2 /*return*/, view];
                }
            });
        });
    };
    NoobGuider.prototype.waitClickUI = function (path) {
        var ps = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            ps[_i - 1] = arguments[_i];
        }
        return this.waitClickEx.apply(this, __spreadArrays(["Canvas/ViewManager/" + path], ps));
    };
    NoobGuider.prototype.waitClickLayoutUI = function (layoutpath, index, uipath) {
        var layout = cc.find("Canvas/ViewManager/" + layoutpath);
        if (layout) {
            var node = cc.find(uipath, layout.children[index]);
            if (node) {
                return this.waitClickEx(node);
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], NoobGuider.prototype, "wholeHotRect", void 0);
    __decorate([
        property(cc.Node)
    ], NoobGuider.prototype, "hotRect", void 0);
    __decorate([
        property(cc.Node)
    ], NoobGuider.prototype, "highlight", void 0);
    __decorate([
        property(cc.Sprite)
    ], NoobGuider.prototype, "highlight_border", void 0);
    __decorate([
        property(cc.Node)
    ], NoobGuider.prototype, "finger", void 0);
    __decorate([
        property(cc.Node)
    ], NoobGuider.prototype, "glow", void 0);
    __decorate([
        property(cc.Node)
    ], NoobGuider.prototype, "msgNode", void 0);
    __decorate([
        property(cc.Label)
    ], NoobGuider.prototype, "msgLabel", void 0);
    __decorate([
        property(cc.Node)
    ], NoobGuider.prototype, "background", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NoobGuider.prototype, "maskStencilSp1", void 0);
    __decorate([
        property(cc.Label)
    ], NoobGuider.prototype, "msgTitleLabel", void 0);
    __decorate([
        property(cc.Label)
    ], NoobGuider.prototype, "msgButtonLabel", void 0);
    __decorate([
        property(cc.Button)
    ], NoobGuider.prototype, "msgButton", void 0);
    __decorate([
        property(cc.Node)
    ], NoobGuider.prototype, "node_anyKey", void 0);
    NoobGuider = __decorate([
        ccclass
    ], NoobGuider);
    return NoobGuider;
}(cc.Component));
exports.default = NoobGuider;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxOb29iR3VpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBRXBDLGlEQUE0QztBQUV0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUVqQyxRQUFBLE1BQU0sR0FBZSxJQUFJLENBQUM7QUFDckMsSUFBTSxtQkFBbUIsR0FBRyxHQUFHLENBQUM7QUFDaEMsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUM7QUFFaEM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUEwYUM7UUF6YUcsc0JBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBRTdCLDJGQUEyRjtRQUUzRixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixrRkFBa0Y7UUFDbEYsaURBQWlEO1FBRWpELGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFFbkMsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGtCQUFZLEdBQW9CLElBQUksQ0FBQztRQUVyQyxrRkFBa0Y7UUFHbEYsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGlCQUFXLEdBQVcsSUFBSSxnQkFBTSxFQUFFLENBQUM7UUFDbkMscUJBQWUsR0FBVyxJQUFJLGdCQUFNLEVBQUUsQ0FBQztRQUN2Qyx1QkFBaUIsR0FBVyxJQUFJLGdCQUFNLEVBQUUsQ0FBQztRQUd6QyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUkzQixvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFHdEMsbUJBQWEsR0FB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QUFXLENBQUM7c0RBQ2E7SUFHdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDWTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNhO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ1E7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDVTtJQXBEWCxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBMGE5QjtJQUFELGlCQUFDO0NBMWFELEFBMGFDLENBMWF1QyxFQUFFLENBQUMsU0FBUyxHQTBhbkQ7a0JBMWFvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpZ25hbCBmcm9tIFwiLi4vY29yZS9TaWduYWxcIjtcclxuaW1wb3J0IHsgZXZ0IH0gZnJvbSBcIi4uL2NvcmUvZXZlbnRcIjtcclxuaW1wb3J0IFZpZXdNYW5hZ2VyIGZyb20gXCIuLi91aS9WaWV3TWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBsZXQgR3VpZGVyOiBOb29iR3VpZGVyID0gbnVsbDtcclxuY29uc3QgRE9VQkxFQ0xJQ0tfVElNRU9VVCA9IDMwMDtcclxuY29uc3QgQUNUSU9OX01PVkVfRklOR0VSID0gMTAwMDtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9vYkd1aWRlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBfbGFzdENsaWNrZWRUaW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKndob2xlIGhvdCByZWN0IC0+IGNvbnRhaW5zIDAubWFza2JhY2tncm91bmRzIDEuaGlnaHRsaWdodCAyLmhpZ2hsaWdodF9ib3JkZXIgMy5maW5nZXIgKi9cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgd2hvbGVIb3RSZWN0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuICAgIC8qKiBjbGlja19hcmVhKHNlbGYpLyBoaWdobGlnaHRfYm9yZGVyIC9maW5nZXIgKi9cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaG90UmVjdDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoaWdobGlnaHQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGhpZ2hsaWdodF9ib3JkZXI6IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGZpbmdlcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBnbG93OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBtb3Rpb25TdHJlYWs6IGNjLk1vdGlvblN0cmVhayA9IG51bGw7XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbXNnTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbXNnTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBjbGlja1NpZ25hbDogU2lnbmFsID0gbmV3IFNpZ25hbCgpO1xyXG4gICAgY2xpY2tCYWNrZ3JvdW5kOiBTaWduYWwgPSBuZXcgU2lnbmFsKCk7XHJcbiAgICBkb3VibGVDbGlja1NpZ25hbDogU2lnbmFsID0gbmV3IFNpZ25hbCgpO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFja2dyb3VuZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIG1hc2tTdGVuY2lsU3AxOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbXNnVGl0bGVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG1zZ0J1dHRvbkxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIG1zZ0J1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5vZGVfYW55S2V5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBtc2dCdXR0b25DYWxsYmFjazogRnVuY3Rpb24gPSBudWxsO1xyXG5cclxuICAgIG1hc2tDb21wOiBjYy5NYXNrID0gbnVsbDtcclxuXHJcbiAgICBtc2dUaXRsZTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICB2YWxpZFJlY3Q6IGNjLlJlY3QgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm1hc2tDb21wID0gdGhpcy5oaWdobGlnaHQuZ2V0Q29tcG9uZW50KGNjLk1hc2spXHJcbiAgICAgICAgdGhpcy5ob3RSZWN0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uUG9pbnRUb3VjaEJlZ2FuLCB0aGlzKVxyXG4gICAgICAgIHRoaXMuaG90UmVjdC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Qb2ludENsaWNrLCB0aGlzKVxyXG5cclxuICAgICAgICB0aGlzLmJhY2tncm91bmQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaEJlZ2FuLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmNsaWNrQmFja2dyb3VuZC5maXJlLCB0aGlzLmNsaWNrQmFja2dyb3VuZClcclxuICAgICAgICB0aGlzLmhpZGVQb2ludGVyKClcclxuICAgICAgICB0aGlzLmhpZGVNZXNzYWdlKCk7XHJcbiAgICAgICAgdGhpcy5tb3Rpb25TdHJlYWsgPSB0aGlzLmZpbmdlci5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLk1vdGlvblN0cmVhayk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuaG90UmVjdC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uUG9pbnRDbGljaywgdGhpcylcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5jbGlja0JhY2tncm91bmQuZmlyZSwgdGhpcy5jbGlja0JhY2tncm91bmQpXHJcbiAgICAgICAgdGhpcy5ob3RSZWN0Lm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblBvaW50VG91Y2hCZWdhbiwgdGhpcylcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hCZWdhbiwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93bigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25Qb2ludFRvdWNoQmVnYW4oZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hCZWdhbihlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkUmVjdCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGxldCBwID0gZS5jdXJyZW50VG91Y2guZ2V0TG9jYXRpb25cclxuICAgICAgICBpZiAodGhpcy52YWxpZFJlY3QuY29udGFpbnMocCkpIHtcclxuICAgICAgICAgICAgLy/lj6/nqb/pgI9cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVNYXNrKCkge1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93TWFzaygpIHtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlUG9pbnRlcigpIHtcclxuICAgICAgICAvLyB0aGlzLnBvaW50ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy53aG9sZUhvdFJlY3QueCA9IC0xMDAwO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS51cGRhdGVBbGlnbm1lbnQoKTtcclxuICAgICAgICB0aGlzLm1vdGlvblN0cmVhayAmJiB0aGlzLm1vdGlvblN0cmVhay5yZXNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVSZWN0KCkge1xyXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0X2JvcmRlci5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaXNfY2xpY2tBcmVhIDogZmFsc2Ug5Y+v5Lul54K55Ye7IOWIsOivpSDljLrln5/kuIvpnaLnmoTmjqfku7bvvIxcclxuICAgICAqL1xyXG4gICAgc2hvd1JlY3QocmVjdDogY2MuUmVjdCB8IHN0cmluZywgaXNfY2xpY2tBcmVhPykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgKHJlY3QpID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcmVjdCA9IHRoaXMuZmluZFVJTm9kZShyZWN0KS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHAgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocmVjdC5jZW50ZXIpO1xyXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0LndpZHRoID0gcmVjdC53aWR0aDtcclxuICAgICAgICB0aGlzLmhpZ2hsaWdodC5oZWlnaHQgPSByZWN0LmhlaWdodDtcclxuICAgICAgICB0aGlzLmhpZ2hsaWdodF9ib3JkZXIubm9kZS53aWR0aCA9IHJlY3Qud2lkdGggKyAyO1xyXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0X2JvcmRlci5ub2RlLmhlaWdodCA9IHJlY3QuaGVpZ2h0ICsgMjtcclxuICAgICAgICB0aGlzLndob2xlSG90UmVjdC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy53aG9sZUhvdFJlY3QueCA9IHAueFxyXG4gICAgICAgIHRoaXMud2hvbGVIb3RSZWN0LnkgPSBwLnk7XHJcbiAgICAgICAgdGhpcy52YWxpZFJlY3QgPSByZWN0O1xyXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0X2JvcmRlci5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKGlzX2NsaWNrQXJlYSkge1xyXG4gICAgICAgICAgICB0aGlzLmhvdFJlY3Qud2lkdGggPSByZWN0LndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmhvdFJlY3QuaGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ob3RSZWN0LndpZHRoID0gMDtcclxuICAgICAgICAgICAgdGhpcy5ob3RSZWN0LmhlaWdodCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS51cGRhdGVBbGlnbm1lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RmluZ2VyKGJBbmltID0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuZmluZ2VyLnBvc2l0aW9uID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgIHRoaXMubW90aW9uU3RyZWFrICYmIHRoaXMubW90aW9uU3RyZWFrLnJlc2V0KClcclxuICAgICAgICB0aGlzLmZpbmdlci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGlmIChiQW5pbSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmdlci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiaGFuZF9jbGlja1wiKVxyXG4gICAgICAgICAgICB0aGlzLmdsb3cuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluZ2VyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoXCJoYW5kX2NsaWNrXCIpXHJcbiAgICAgICAgICAgIHRoaXMuZ2xvdy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1BvaW50ZXIobm9kZTogY2MuTm9kZSB8IGNjLlZlYzIgPSBjYy5WZWMyLlpFUk8sIHNpbXVsYXRlX2NsaWNrX2FyZWEgPSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgICAgIGxldCByZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKVxyXG4gICAgICAgICAgICB0aGlzLnNob3dSZWN0KHJlY3QsIHNpbXVsYXRlX2NsaWNrX2FyZWEpO1xyXG4gICAgICAgICAgICBpZiAobm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSlcclxuICAgICAgICAgICAgICAgIHRoaXMubWFza0NvbXAuc3ByaXRlRnJhbWUgPSBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hc2tTdGVuY2lsU3AxKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFza0NvbXAuc3ByaXRlRnJhbWUgPSB0aGlzLm1hc2tTdGVuY2lsU3AxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0ZpbmdlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3dNYXNrKCk7XHJcbiAgICAgICAgLy8gdGhpcy5wb2ludEF2YXRhci5jaGlsZHJlbi5mb3JFYWNoKCh2LCBpKSA9PiB2LmFjdGl2ZSA9IGF2YXRhciA9PSBpKVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVNZXNzYWdlKCkge1xyXG4gICAgICAgIHRoaXMubXNnTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNZXNzYWdlVGl0bGUobXNnVGl0bGU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubXNnVGl0bGUgPSBtc2dUaXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93TWVzc2FnZShtc2c6IHN0cmluZywgeD8sIHk/LCB3PywgaD8pIHtcclxuICAgICAgICBtc2cgPSBtc2cucmVwbGFjZSgvXFwvcj9cXC9uL2csIFwiXFxuXCIpXHJcbiAgICAgICAgdGhpcy5tc2dOb2RlLnggPSB4IHx8IDA7XHJcbiAgICAgICAgdGhpcy5tc2dOb2RlLnkgPSB5IHx8IDA7XHJcbiAgICAgICAgdGhpcy5tc2dOb2RlLndpZHRoID0gdztcclxuICAgICAgICB0aGlzLm1zZ05vZGUuaGVpZ2h0ID0gaDtcclxuICAgICAgICB0aGlzLm1zZ05vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1zZ0xhYmVsLnN0cmluZyA9IG1zZztcclxuICAgICAgICBpZiAodGhpcy5tc2dUaXRsZSA9PSBudWxsIHx8IHRoaXMubXNnVGl0bGUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICB0aGlzLm1zZ1RpdGxlTGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tc2dUaXRsZUxhYmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tc2dUaXRsZUxhYmVsLnN0cmluZyA9IHRoaXMubXNnVGl0bGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubXNnVGl0bGUgPSBcIlwiXHJcbiAgICAgICAgdGhpcy5tc2dCdXR0b24ubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubm9kZV9hbnlLZXkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd01lc3NhZ2VCdXR0b24obXNnOiBzdHJpbmcsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5tc2dCdXR0b24ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubXNnQnV0dG9uTGFiZWwuc3RyaW5nID0gbXNnO1xyXG4gICAgICAgIHRoaXMubXNnQnV0dG9uQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBzaG93TWVzc2FnZUJ1dHRvbkV4KGJ1dHRvblRleHQsIGJ1dHRvbkNhbGxiYWNrKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYnV0dG9uVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZUJ1dHRvbihidXR0b25UZXh0LCBfID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzaG93TWVzc2FnZUV4KHRpdGxlLCBjb250ZW50LCBidXR0b25UZXh0PywgYnV0dG9uQ2FsbGJhY2s/LCB4PywgeT8sIHc/LCBoPykge1xyXG4gICAgICAgIHRoaXMuc2V0TWVzc2FnZVRpdGxlKHRpdGxlKTtcclxuICAgICAgICB0aGlzLnNob3dNZXNzYWdlKGNvbnRlbnQsIHgsIHksIHcsIGgpXHJcbiAgICAgICAgaWYgKGJ1dHRvblRleHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd01lc3NhZ2VCdXR0b25FeChidXR0b25UZXh0LCBidXR0b25DYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjbGlja19tc2dCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlTWVzc2FnZSgpO1xyXG4gICAgICAgIHRoaXMubXNnQnV0dG9uQ2FsbGJhY2sgJiYgdGhpcy5tc2dCdXR0b25DYWxsYmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUG9pbnRDbGljaygpIHtcclxuICAgICAgICBsZXQgbm93ID0gRGF0ZS5ub3coKVxyXG4gICAgICAgIGxldCBvZmZzZXQgPSBub3cgLSB0aGlzLl9sYXN0Q2xpY2tlZFRpbWVcclxuICAgICAgICBpZiAob2Zmc2V0IDwgRE9VQkxFQ0xJQ0tfVElNRU9VVCkge1xyXG4gICAgICAgICAgICB0aGlzLmRvdWJsZUNsaWNrU2lnbmFsLmZpcmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNsaWNrU2lnbmFsLmZpcmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbGFzdENsaWNrZWRUaW1lID0gbm93O1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHdhaXRDbGljayhub2RlOiBjYy5Ob2RlLCBjYW5UcmlnZ2VyID0gdHJ1ZSwgc2hvd0hhbmRzID0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuc2hvd1BvaW50ZXIobm9kZSk7XHJcbiAgICAgICAgaWYgKCFzaG93SGFuZHMpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlRmluZ2VyKClcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gYnRuLmNsaWNrRXZlbnRzLlxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpY2tTaWduYWwub24oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhblRyaWdnZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYnRuID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKSB8fCBub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuQnV0dG9uKTtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnRuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKGJ0bi5jbGlja0V2ZW50cywgeyB0YXJnZXQ6IGJ0bi5ub2RlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZW1pdChjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHsgdGFyZ2V0OiBub2RlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWNrU2lnbmFsLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB3YWl0RG91YmxlQ2xpY2sobm9kZSkge1xyXG4gICAgICAgIHRoaXMuc2hvd1BvaW50ZXIobm9kZSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kb3VibGVDbGlja1NpZ25hbC5vbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudHMoY2MuQ29tcG9uZW50KS5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmdW5jID0gdlsnb25Eb3VibGVDbGljayddIGFzIEZ1bmN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZ1bmMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuYy5jYWxsKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB3YWl0QW55S2V5KG5vZGU/OiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlX2FueUtleS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jbGlja0JhY2tncm91bmQub24oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja0JhY2tncm91bmQuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2FpdENsaWNrKG5vZGUsIGZhbHNlLCBmYWxzZSkudGhlbih2ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgbW92ZUZpbmdlcihmcm9tOiBjYy5WZWMyLCB0bzogY2MuVmVjMiwgcmVwZWF0VGltZXMgPSBjYy5tYWNyby5SRVBFQVRfRk9SRVZFUikge1xyXG4gICAgICAgIHRoaXMuc2hvd0ZpbmdlcihmYWxzZSk7XHJcblxyXG4gICAgICAgIGZyb20gPSB0aGlzLmhvdFJlY3QuY29udmVydFRvTm9kZVNwYWNlQVIoZnJvbSlcclxuICAgICAgICB0byA9IHRoaXMuaG90UmVjdC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0bylcclxuICAgICAgICBmcm9tLnN1YlNlbGYoY2MudjIoMCwgNTApKVxyXG4gICAgICAgIHRvLnN1YlNlbGYoY2MudjIoMCwgNTApKVxyXG4gICAgICAgIGxldCBjYWxsYmFjayA9IGNjLmNhbGxGdW5jKHYgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmdlci5wb3NpdGlvbiA9IGZyb21cclxuICAgICAgICAgICAgdGhpcy5tb3Rpb25TdHJlYWsgJiYgdGhpcy5tb3Rpb25TdHJlYWsucmVzZXQoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IG1vdmUgPSBjYy5tb3ZlVG8oMSwgdG8pLmVhc2luZyhjYy5lYXNlU2luZUluT3V0KCkpO1xyXG4gICAgICAgIGxldCBkZWxheSA9IGNjLmRlbGF5VGltZSgxKTtcclxuICAgICAgICBsZXQgc2VxID0gY2Muc2VxdWVuY2UoY2FsbGJhY2ssIG1vdmUsIGRlbGF5KS5yZXBlYXQocmVwZWF0VGltZXMpXHJcbiAgICAgICAgc2VxLnNldFRhZyhBQ1RJT05fTU9WRV9GSU5HRVIpXHJcbiAgICAgICAgdGhpcy5maW5nZXIucnVuQWN0aW9uKHNlcSlcclxuICAgIH1cclxuXHJcbiAgICBzdGFydERyYWcoZnJvbSwgdG8sIHNob3dNYXNrID0gdHJ1ZSkge1xyXG4gICAgICAgIGxldCBmcm9tTm9kZSA9IHRoaXMuZmluZFVJTm9kZShmcm9tKTtcclxuICAgICAgICBsZXQgdG9Ob2RlID0gdGhpcy5maW5kVUlOb2RlKHRvKTtcclxuICAgICAgICBsZXQgZnJvbVJlY3QgPSBmcm9tTm9kZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKVxyXG4gICAgICAgIGxldCB0b1JlY3QgPSB0b05vZGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKClcclxuICAgICAgICBpZiAoc2hvd01hc2spIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93TWFzaygpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dSZWN0KGZyb21SZWN0LnVuaW9uKGNjLnJlY3QoKSwgdG9SZWN0KSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlTWFzaygpO1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVSZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW92ZUZpbmdlcihmcm9tUmVjdC5jZW50ZXIsIHRvUmVjdC5jZW50ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BEcmFnKCkge1xyXG4gICAgICAgIHRoaXMuZmluZ2VyLnN0b3BBY3Rpb25CeVRhZyhBQ1RJT05fTU9WRV9GSU5HRVIpO1xyXG4gICAgICAgIHRoaXMuaGlkZVBvaW50ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kVUlOb2RlKHBhdGgsIHR5cGU/KTogY2MuTm9kZSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBudWxsO1xyXG4gICAgICAgIGlmICh0eXBlID09IFwiVUlcIikge1xyXG4gICAgICAgICAgICBub2RlID0gY2MuZmluZChcIkNhbnZhcy9WaWV3TWFuYWdlci9cIiArIHBhdGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vZGUgPSBjYy5maW5kKHBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbm9kZVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHdhaXRDbGlja0V4KHVpcGF0aDogc3RyaW5nIHwgY2MuTm9kZSwgbXNnVGl0bGU/OiBzdHJpbmcsIG1zZ0NvbnRlbnQ/OiBzdHJpbmcsIHggPSAwLCB5ID0gMCwgYW55S2V5Pykge1xyXG4gICAgICAgIC8vMTEgXHJcbiAgICAgICAgLy9kYXRhMSDkuLp1aSDot6/lvoQgXHJcbiAgICAgICAgYXdhaXQgZXZlbnQuc2xlZXAoMC4xKTtcclxuICAgICAgICBsZXQgbm9kZTtcclxuICAgICAgICBpZiAodWlwYXRoIGluc3RhbmNlb2YgY2MuTm9kZSkge1xyXG4gICAgICAgICAgICBub2RlID0gdWlwYXRoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh1aXBhdGggPT0gbnVsbCkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoYHdhaXRDbGlja0V4OiR7dWlwYXRofSBudWxsIGApXHJcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLmZpbmRVSU5vZGUodWlwYXRoKTtcclxuICAgICAgICAgICAgaWYgKG5vZGUgPT0gbnVsbCkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoYCR7dWlwYXRofSBub3QgZm91bmQgYClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1zZ1RpdGxlKVxyXG4gICAgICAgICAgICB0aGlzLnNldE1lc3NhZ2VUaXRsZShtc2dUaXRsZSk7XHJcbiAgICAgICAgaWYgKG1zZ0NvbnRlbnQpXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UobXNnQ29udGVudCwgeCwgeSlcclxuICAgICAgICB0aGlzLnNob3dNYXNrKClcclxuICAgICAgICBpZiAoYW55S2V5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1JlY3Qobm9kZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZUZpbmdlcigpO1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLndhaXRBbnlLZXkobm9kZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLndhaXRDbGljayhub2RlKS5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoZSkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhpZGVNYXNrKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlUG9pbnRlcigpO1xyXG4gICAgICAgIHRoaXMuaGlkZU1lc3NhZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlRmluZ2VyKCkge1xyXG4gICAgICAgIHRoaXMuZmluZ2VyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVBbGwoKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlTWFzaygpO1xyXG4gICAgICAgIHRoaXMuaGlkZVJlY3QoKTtcclxuICAgICAgICB0aGlzLmhpZGVNZXNzYWdlKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlRmluZ2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgd2FpdEFueUlucHV0KHRpdGxlLCBjb250ZW50LCB4LCB5KSB7XHJcbiAgICAgICAgdGhpcy5zaG93TWVzc2FnZSh0aXRsZSwgY29udGVudCwgeCwgeSlcclxuICAgICAgICB0aGlzLmhpZGVQb2ludGVyKClcclxuICAgICAgICB0aGlzLmhpZGVNYXNrKCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy53YWl0QW55S2V5KCk7XHJcbiAgICAgICAgdGhpcy5oaWRlTWVzc2FnZSgpO1xyXG4gICAgICAgIGF3YWl0IGV2ZW50LnNsZWVwKDAuMyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgd2FpdE9wZW4odWlOYW1lLCBvcGVuPywgLi4ucHMpIHtcclxuICAgICAgICBsZXQgdmlldyA9IFZpZXdNYW5hZ2VyLmluc3RhbmNlLnZpZXcoXCJVSS9cIiArIHVpTmFtZSlcclxuICAgICAgICBpZiAodmlldyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChvcGVuKSB7XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0YW5jZS5zaG93KFwiVUkvXCIgKyB1aU5hbWUsIC4uLnBzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFt2aWV3XSA9IGF3YWl0IGV2ZW50LndhaXQodWlOYW1lICsgXCIub25TaG93bi5BZnRlclwiKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3RhbmNlLnNob3codmlldywgLi4ucHMpO1xyXG4gICAgICAgICAgICBbdmlld10gPSBhd2FpdCBldmVudC53YWl0KHVpTmFtZSArIFwiLm9uU2hvd24uQWZ0ZXJcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZpZXc7XHJcbiAgICB9XHJcblxyXG4gICAgd2FpdENsaWNrVUkocGF0aCwgLi4ucHMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53YWl0Q2xpY2tFeChcIkNhbnZhcy9WaWV3TWFuYWdlci9cIiArIHBhdGgsIC4uLnBzKTtcclxuICAgIH1cclxuXHJcbiAgICB3YWl0Q2xpY2tMYXlvdXRVSShsYXlvdXRwYXRoLCBpbmRleCwgdWlwYXRoKSB7XHJcbiAgICAgICAgbGV0IGxheW91dCA9IGNjLmZpbmQoXCJDYW52YXMvVmlld01hbmFnZXIvXCIgKyBsYXlvdXRwYXRoKTtcclxuICAgICAgICBpZiAobGF5b3V0KSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuZmluZCh1aXBhdGgsIGxheW91dC5jaGlsZHJlbltpbmRleF0pXHJcbiAgICAgICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53YWl0Q2xpY2tFeChub2RlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ==