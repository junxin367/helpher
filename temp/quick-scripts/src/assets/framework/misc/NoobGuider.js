"use strict";
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