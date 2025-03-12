"use strict";
cc._RF.push(module, 'cb2d7HHjkdALre9lNwktqW8', 'ccUtil');
// framework/utils/ccUtil.ts

"use strict";
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
var SpriteFrameCache_1 = require("../misc/SpriteFrameCache");
var event_1 = require("../core/event");
var display_1 = require("../misc/display");
;
var ccUtil = /** @class */ (function () {
    function ccUtil() {
    }
    ccUtil.Instantiate = function (origin, position, rotation) {
        var node = cc.instantiate(origin);
        if (position)
            node.position = position;
        if (rotation)
            node.rotation = rotation;
        return node;
    };
    ccUtil.loadJson = function (path) {
        return new Promise(function (resolve, reject) {
            cc.resources.load(path, cc.JsonAsset, function (errorcode, data) {
                resolve(data.json);
            });
        });
    };
    ccUtil.playParticles = function (ps) {
        var subs = ps["_subParticles"];
        if (subs == null) {
            subs = ps.node.getComponentsInChildren(cc.ParticleSystem);
            ps["_subParticles"] = subs;
        }
        subs.forEach(function (v) {
            v.play();
        });
    };
    ccUtil.playAnimation = function (anim, stopAfter) {
        anim.play();
        if (stopAfter > 0)
            event_1.evt.sleep(stopAfter).then(function (v) {
                anim.stop();
            });
    };
    ccUtil.newButton = function (target, component, handler, listener, data) {
        listener = listener || target;
        var button = target.getOrAddComponent(cc.Button);
        button.transition = cc.Button.Transition.SCALE;
        if (button.clickEvents.length > 0) {
            var clickEvent = button.clickEvents[0];
            clickEvent.target = listener;
            clickEvent.customEventData = data;
            clickEvent.component = component;
            clickEvent.handler = handler;
        }
        else {
            button.clickEvents.push(ccUtil.handler(listener, component, handler, data));
        }
        return button;
    };
    ccUtil.handler = function (target, component, handler, bindstr) {
        var eventHandler = new cc.Component.EventHandler();
        eventHandler.component = component;
        eventHandler.target = target;
        eventHandler.handler = handler;
        eventHandler.customEventData = bindstr;
        return eventHandler;
    };
    ccUtil.get = function (cls) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        //prototype.constructor.name 在js 编译后不可用
        var tt = cls.prototype;
        var idx = this.types.indexOf(tt);
        if (idx == -1) {
            this.types.push(tt);
            idx = this.types.length - 1;
        }
        var models = this.allInfos[idx];
        if (!models) {
            models = {};
            this.allInfos[idx] = models;
        }
        var _id = args.join("-");
        var info = models[_id];
        if (!info) {
            var c = cls;
            info = new c(args);
            // info = Reflect.construct(c, args);
            models[_id] = info;
        }
        return info;
    };
    ccUtil.isGreaterDays = function (before, num) {
        if (num === void 0) { num = 7; }
        var now = new Date();
        var diff = now.getTime() - before;
        if (diff > 86400000 * num) // 24*60*60*1000
         {
            return true;
        }
    };
    ccUtil.setDisplay = function (sp, url, callback) {
        if (typeof (url) == 'string') {
            return SpriteFrameCache_1.default.instance.getSpriteFrame(url).then(function (sf) {
                try {
                    sp.spriteFrame = sf;
                    callback && callback();
                }
                catch (e) {
                    console.warn(e);
                }
            }).catch(function (e) { return console.warn(e); });
        }
        else {
            if (url instanceof cc.SpriteFrame)
                sp.spriteFrame = url;
        }
    };
    ccUtil.getOrAddComponent = function (obj, type) {
        return obj.getOrAddComponent(type);
    };
    ccUtil.formatSeconds = function (time) {
        var h = Math.floor(time / 3600);
        var m = Math.floor(time / 60 - h * 60);
        var s = Math.floor(time - m * 60 - h * 3600);
        var start = h > 0 ? (h < 10 ? "0" + h : h) + ":" : "";
        var end = m + ":" + (s < 10 ? "0" + s : s);
        return start + end;
    };
    ccUtil.convertCameraWorldPosition = function (worldpos, cameraFrom, cameraTo) {
        var pos = cameraFrom.getWorldToScreenPoint(worldpos, cc.Vec2.ZERO);
        var from = cameraTo.getScreenToWorldPoint(pos, cc.Vec2.ZERO);
        return from;
    };
    ccUtil.setButtonEnabled = function (btn, b) {
        var node = btn.node;
        if (btn instanceof cc.Node) {
            btn = btn.getComponent(cc.Button);
            node = btn;
        }
        if (btn) {
            node.opacity = b ? 255 : 155;
            btn.interactable = b;
        }
    };
    ccUtil.find = function (path, node, compType) {
        return cc.find(path, node).getComponent(compType);
    };
    ccUtil.sign = function (x) {
        return x > 0 ? 1 : -1;
    };
    /**
 * invoke every components
 * @param node
 * @param funcname
 * @param params
 */
    ccUtil.broadCast = function (node, funcname) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        return Promise.race(node.getComponents(cc.Component).filter(function (v) { return v[funcname] != null; }).map(function (v) {
            return new Promise(function (resolve) {
                var _a;
                var ret = (_a = v[funcname]).call.apply(_a, __spreadArrays([v], params));
                resolve(ret);
            });
        }));
    };
    /**
     * attempat to call func of one component which succeded
     * @param node
     * @param funcname
     * @param params
     */
    ccUtil.sendMessage = function (node, funcname) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        var ret = null;
        node.getComponents(cc.Component).some(function (v) {
            var f = v[funcname];
            if (f) {
                ret = f.call.apply(f, __spreadArrays([v], params));
                return true;
            }
            return false;
        });
        return ret;
    };
    //高效率getboundingbox ,不同于node.getBoundingBoxToWorld
    ccUtil.getWorldBoundingBox = function (node) {
        var parent = node.parent;
        if (parent == null)
            return;
        var box = node.getBoundingBox();
        var xy = cc.v2(box.xMin, box.yMin);
        var xy2 = cc.v2(box.xMax, box.yMax);
        xy = parent.convertToWorldSpaceAR(xy);
        xy2 = parent.convertToWorldSpaceAR(xy2);
        var wh = xy2.subSelf(xy);
        return cc.rect(xy.x, xy.y, wh.x, wh.y);
    };
    ccUtil.setParent = function (node, newParent, keepWorldPosition) {
        if (keepWorldPosition === void 0) { keepWorldPosition = false; }
        var oldParent = node.parent;
        if (oldParent == null)
            return;
        var worldPos = oldParent.convertToWorldSpaceAR(node.position);
        node.removeFromParent();
        node.parent = newParent;
        if (keepWorldPosition) {
            node.position = newParent.convertToNodeSpaceAR(worldPos);
        }
    };
    ccUtil.getWorldPosition = function (node) {
        if (node.parent == null)
            return;
        var xy = cc.v2(node.x, node.y);
        return node.parent.convertToWorldSpaceAR(xy);
    };
    ccUtil.changeParent = function (node, parentNode, zindex) {
        if (zindex === void 0) { zindex = 0; }
        var pos = ccUtil.getWorldPosition(node);
        node.removeFromParent();
        parentNode.addChild(node, zindex);
        pos = parentNode.convertToNodeSpaceAR(pos);
        node.setPosition(pos);
    };
    ccUtil.moveToOrigin = function (node, dur, ease) {
        node.runAction(cc.moveTo(dur, cc.Vec2.ZERO).easing(ease || cc.easeSineOut()));
    };
    /**播放 飞行动画 简化版本 */
    ccUtil.playFly = function (template, dur, num, interval) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.playFlyCoin(template, template.parent, display_1.default.center, ccUtil.getWorldPosition(template), { dur: dur, num: num, interval: interval });
                return [2 /*return*/];
            });
        });
    };
    //播放飞行动画 
    ccUtil.playFlyCoin = function (template, parent, from, to, config) {
        if (template === void 0) { template = null; }
        if (parent === void 0) { parent = null; }
        if (from === void 0) { from = display_1.default.center; }
        if (to === void 0) { to = display_1.default.leftTop; }
        return __awaiter(this, void 0, void 0, function () {
            var _loop_1, this_1, i, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (config == null) {
                            config = this.default_flycoin_config;
                        }
                        config.num = config.num || this.default_flycoin_config.num;
                        _loop_1 = function () {
                            var node, f, target, round, duration;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        node = cc.instantiate(template);
                                        node.parent = parent;
                                        f = from;
                                        if (from instanceof cc.Node) {
                                            f = ccUtil.getWorldPosition(from);
                                        }
                                        else {
                                            f = from;
                                        }
                                        f = parent.convertToNodeSpaceAR(f);
                                        target = parent.convertToNodeSpaceAR(to);
                                        if (config.random_length > 0) {
                                            round = cc.Vec2.random(this_1._tmp_vec2, config.random_length || this_1.default_flycoin_config.random_length);
                                            node.setPosition(f.add(round));
                                        }
                                        else {
                                            node.setPosition(f);
                                        }
                                        duration = config.dur || this_1.default_flycoin_config.dur;
                                        cc.tween(node).to(duration, { position: target }, { easing: "sineInOut" }).call(function () {
                                            node.destroy();
                                        }).start();
                                        //缩放动画
                                        if (config.scale) {
                                            node.scale = config.scale;
                                            cc.tween(node).to(duration, { scale: config.scaleTo }).start();
                                        }
                                        return [4 /*yield*/, event_1.evt.sleep((config.interval || this_1.default_flycoin_config.interval))];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < config.num)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        console.warn(e_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ccUtil.getRes = function (path, type) {
        return new Promise(function (resolve, reject) {
            cc.resources.load(path, type, function (err, res) {
                if (err)
                    return reject(err);
                resolve(res);
            });
        });
    };
    ccUtil.allInfos = {}; // 所有信息
    ccUtil.types = [];
    ccUtil._tmp_vec2 = cc.v2();
    ccUtil.default_flycoin_config = {
        dur: 0.5,
        num: 5,
        interval: 0.1,
        random_length: 0,
        scale: 1,
        scaleTo: 1
    };
    return ccUtil;
}());
exports.default = ccUtil;

cc._RF.pop();