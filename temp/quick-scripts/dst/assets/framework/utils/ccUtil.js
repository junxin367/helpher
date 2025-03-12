
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/utils/ccUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx1dGlsc1xcY2NVdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZEQUF3RDtBQUN4RCx1Q0FBb0M7QUFDcEMsMkNBQXNDO0FBQzZGLENBQUM7QUFDcEk7SUFBQTtJQThTQSxDQUFDO0lBN1NpQixrQkFBVyxHQUF6QixVQUEwQixNQUFNLEVBQUUsUUFBa0IsRUFBRSxRQUFrQjtRQUNwRSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2pDLElBQUksUUFBUTtZQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzdCLElBQUksUUFBUTtZQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxlQUFRLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxTQUFTLEVBQUUsSUFBSTtnQkFDbEQsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUN0QixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUdhLG9CQUFhLEdBQTNCLFVBQTRCLEVBQXFCO1FBQzdDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUM5QixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDZCxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDMUQsRUFBRSxD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QTs7d0NBQTFFLFNBQTBFLENBQUE7Ozs7Ozt3QkExQnJFLENBQUMsR0FBRyxDQUFDOzs7NkJBQUUsQ0FBQSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQTs7Ozs7O3dCQUFFLENBQUMsRUFBRSxDQUFBOzs7Ozt3QkE2Qm5DLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUM7Ozs7OztLQUV2QjtJQUVhLGFBQU0sR0FBcEIsVUFBeUMsSUFBSSxFQUFFLElBQXNCO1FBQ2pFLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7Z0JBQ25DLElBQUksR0FBRztvQkFBRSxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBNU9NLGVBQVEsR0FBUSxFQUFFLENBQUMsQ0FBQyxPQUFPO0lBQzNCLFlBQUssR0FBRyxFQUFFLENBQUM7SUE0S1gsZ0JBQVMsR0FBWSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUE7SUFDNUIsNkJBQXNCLEdBQUc7UUFDNUIsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsQ0FBQztRQUNOLFFBQVEsRUFBRSxHQUFHO1FBQ2IsYUFBYSxFQUFFLENBQUM7UUFDaEIsS0FBSyxFQUFFLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQztLQUNiLENBQUE7SUF5REwsYUFBQztDQTlTRCxBQThTQyxJQUFBO2tCQTlTb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcHJpdGVGcmFtZUNhY2hlIGZyb20gXCIuLi9taXNjL1Nwcml0ZUZyYW1lQ2FjaGVcIjtcclxuaW1wb3J0IHsgZXZ0IH0gZnJvbSBcIi4uL2NvcmUvZXZlbnRcIjtcclxuaW1wb3J0IGRpc3BsYXkgZnJvbSBcIi4uL21pc2MvZGlzcGxheVwiO1xyXG5pbnRlcmZhY2UgRmx5Q29pbkNvbmZpZyB7IGR1cj86IG51bWJlciwgbnVtPzogbnVtYmVyLCBpbnRlcnZhbD86IG51bWJlciwgcmFuZG9tX2xlbmd0aD86IG51bWJlciwgc2NhbGU/OiBudW1iZXIsIHNjYWxlVG8/OiBudW1iZXIgfTtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2NVdGlsIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFudGlhdGUob3JpZ2luLCBwb3NpdGlvbj86IGNjLlZlYzMsIHJvdGF0aW9uPzogY2MuUXVhdCk6IGFueSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShvcmlnaW4pXHJcbiAgICAgICAgaWYgKHBvc2l0aW9uKVxyXG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgaWYgKHJvdGF0aW9uKVxyXG4gICAgICAgICAgICBub2RlLnJvdGF0aW9uID0gcm90YXRpb247XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWRKc29uKHBhdGgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoLCBjYy5Kc29uQXNzZXQsIChlcnJvcmNvZGUsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YS5qc29uKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGxheVBhcnRpY2xlcyhwczogY2MuUGFydGljbGVTeXN0ZW0pIHtcclxuICAgICAgICBsZXQgc3VicyA9IHBzW1wiX3N1YlBhcnRpY2xlc1wiXVxyXG4gICAgICAgIGlmIChzdWJzID09IG51bGwpIHtcclxuICAgICAgICAgICAgc3VicyA9IHBzLm5vZGUuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oY2MuUGFydGljbGVTeXN0ZW0pO1xyXG4gICAgICAgICAgICBwc1tcIl9zdWJQYXJ0aWNsZXNcIl0gPSBzdWJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdWJzLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICAgIHYucGxheSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwbGF5QW5pbWF0aW9uKGFuaW06IGNjLkFuaW1hdGlvbiwgc3RvcEFmdGVyOiBudW1iZXIpIHtcclxuICAgICAgICBhbmltLnBsYXkoKTtcclxuICAgICAgICBpZiAoc3RvcEFmdGVyID4gMClcclxuICAgICAgICAgICAgZXZ0LnNsZWVwKHN0b3BBZnRlcikudGhlbih2ID0+IHtcclxuICAgICAgICAgICAgICAgIGFuaW0uc3RvcCgpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIHN0YXRpYyBuZXdCdXR0b24odGFyZ2V0OiBjYy5Ob2RlLCBjb21wb25lbnQ6IHN0cmluZywgaGFuZGxlcjogc3RyaW5nLCBsaXN0ZW5lcj86IGNjLk5vZGUsIGRhdGE/OiBzdHJpbmcpIHtcclxuICAgICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyIHx8IHRhcmdldDtcclxuICAgICAgICBsZXQgYnV0dG9uID0gdGFyZ2V0LmdldE9yQWRkQ29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgYnV0dG9uLnRyYW5zaXRpb24gPSBjYy5CdXR0b24uVHJhbnNpdGlvbi5TQ0FMRTtcclxuICAgICAgICBpZiAoYnV0dG9uLmNsaWNrRXZlbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGNsaWNrRXZlbnQgPSBidXR0b24uY2xpY2tFdmVudHNbMF1cclxuICAgICAgICAgICAgY2xpY2tFdmVudC50YXJnZXQgPSBsaXN0ZW5lclxyXG4gICAgICAgICAgICBjbGlja0V2ZW50LmN1c3RvbUV2ZW50RGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgIGNsaWNrRXZlbnQuY29tcG9uZW50ID0gY29tcG9uZW50O1xyXG4gICAgICAgICAgICBjbGlja0V2ZW50LmhhbmRsZXIgPSBoYW5kbGVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGlja0V2ZW50cy5wdXNoKGNjVXRpbC5oYW5kbGVyKGxpc3RlbmVyLCBjb21wb25lbnQsIGhhbmRsZXIsIGRhdGEpKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnV0dG9uO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgaGFuZGxlcih0YXJnZXQ6IGNjLk5vZGUsIGNvbXBvbmVudDogc3RyaW5nLCBoYW5kbGVyOiBzdHJpbmcsIGJpbmRzdHI/OiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgZXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBldmVudEhhbmRsZXIuY29tcG9uZW50ID0gY29tcG9uZW50XHJcbiAgICAgICAgZXZlbnRIYW5kbGVyLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICBldmVudEhhbmRsZXIuaGFuZGxlciA9IGhhbmRsZXJcclxuICAgICAgICBldmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gYmluZHN0cjtcclxuICAgICAgICByZXR1cm4gZXZlbnRIYW5kbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhbGxJbmZvczogYW55ID0ge307IC8vIOaJgOacieS/oeaBr1xyXG4gICAgc3RhdGljIHR5cGVzID0gW107XHJcbiAgICBzdGF0aWMgZ2V0PFQ+KGNsczogeyBwcm90b3R5cGU6IFQgfSwgLi4uYXJncyk6IFQge1xyXG4gICAgICAgIC8vcHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWUg5ZyoanMg57yW6K+R5ZCO5LiN5Y+v55SoXHJcbiAgICAgICAgbGV0IHR0ID0gY2xzLnByb3RvdHlwZTtcclxuICAgICAgICBsZXQgaWR4ID0gdGhpcy50eXBlcy5pbmRleE9mKHR0KTtcclxuICAgICAgICBpZiAoaWR4ID09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZXMucHVzaCh0dCk7XHJcbiAgICAgICAgICAgIGlkeCA9IHRoaXMudHlwZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1vZGVscyA9IHRoaXMuYWxsSW5mb3NbaWR4XVxyXG4gICAgICAgIGlmICghbW9kZWxzKSB7XHJcbiAgICAgICAgICAgIG1vZGVscyA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLmFsbEluZm9zW2lkeF0gPSBtb2RlbHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBfaWQgPSBhcmdzLmpvaW4oXCItXCIpO1xyXG4gICAgICAgIGxldCBpbmZvID0gbW9kZWxzW19pZF07XHJcbiAgICAgICAgaWYgKCFpbmZvKSB7XHJcbiAgICAgICAgICAgIGxldCBjID0gY2xzIGFzIGFueTtcclxuICAgICAgICAgICAgaW5mbyA9IG5ldyBjKGFyZ3MpXHJcbiAgICAgICAgICAgIC8vIGluZm8gPSBSZWZsZWN0LmNvbnN0cnVjdChjLCBhcmdzKTtcclxuICAgICAgICAgICAgbW9kZWxzW19pZF0gPSBpbmZvO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW5mbyBhcyBUO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgaXNHcmVhdGVyRGF5cyhiZWZvcmUsIG51bSA9IDcpIHtcclxuICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICB2YXIgZGlmZiA9IG5vdy5nZXRUaW1lKCkgLSBiZWZvcmVcclxuICAgICAgICBpZiAoZGlmZiA+IDg2NDAwMDAwICogbnVtKSAvLyAyNCo2MCo2MCoxMDAwXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldERpc3BsYXkoc3AsIHVybCwgY2FsbGJhY2s/KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiAodXJsKSA9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICByZXR1cm4gU3ByaXRlRnJhbWVDYWNoZS5pbnN0YW5jZS5nZXRTcHJpdGVGcmFtZSh1cmwpLnRoZW4oc2YgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBzcC5zcHJpdGVGcmFtZSA9IHNmXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlID0+IGNvbnNvbGUud2FybihlKSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodXJsIGluc3RhbmNlb2YgY2MuU3ByaXRlRnJhbWUpXHJcbiAgICAgICAgICAgICAgICBzcC5zcHJpdGVGcmFtZSA9IHVybDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRPckFkZENvbXBvbmVudDxUIGV4dGVuZHMgY2MuQ29tcG9uZW50PihvYmo6IGFueSwgdHlwZTogeyBwcm90b3R5cGU6IFQgfSk6IFQge1xyXG4gICAgICAgIHJldHVybiBvYmouZ2V0T3JBZGRDb21wb25lbnQodHlwZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBmb3JtYXRTZWNvbmRzKHRpbWUpIHtcclxuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IodGltZSAvIDM2MDApO1xyXG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcih0aW1lIC8gNjAgLSBoICogNjApO1xyXG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcih0aW1lIC0gbSAqIDYwIC0gaCAqIDM2MDApO1xyXG4gICAgICAgIHZhciBzdGFydCA9IGggPiAwID8gKGggPCAxMCA/IFwiMFwiICsgaCA6IGgpICsgXCI6XCIgOiBcIlwiO1xyXG4gICAgICAgIHZhciBlbmQgPSBtICsgXCI6XCIgKyAocyA8IDEwID8gXCIwXCIgKyBzIDogcyk7XHJcbiAgICAgICAgcmV0dXJuIHN0YXJ0ICsgZW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjb252ZXJ0Q2FtZXJhV29ybGRQb3NpdGlvbih3b3JsZHBvcywgY2FtZXJhRnJvbTogY2MuQ2FtZXJhLCBjYW1lcmFUbzogY2MuQ2FtZXJhKSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IGNhbWVyYUZyb20uZ2V0V29ybGRUb1NjcmVlblBvaW50KHdvcmxkcG9zLCBjYy5WZWMyLlpFUk8pXHJcbiAgICAgICAgbGV0IGZyb20gPSBjYW1lcmFUby5nZXRTY3JlZW5Ub1dvcmxkUG9pbnQocG9zLCBjYy5WZWMyLlpFUk8pXHJcbiAgICAgICAgcmV0dXJuIGZyb207XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldEJ1dHRvbkVuYWJsZWQoYnRuLCBiKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBidG4ubm9kZTtcclxuICAgICAgICBpZiAoYnRuIGluc3RhbmNlb2YgY2MuTm9kZSkge1xyXG4gICAgICAgICAgICBidG4gPSBidG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICAgICAgbm9kZSA9IGJ0bjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJ0bikge1xyXG4gICAgICAgICAgICBub2RlLm9wYWNpdHkgPSBiID8gMjU1IDogMTU1O1xyXG4gICAgICAgICAgICBidG4uaW50ZXJhY3RhYmxlID0gYlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmluZDxUIGV4dGVuZHMgY2MuQ29tcG9uZW50PihwYXRoOiBzdHJpbmcsIG5vZGU6IGNjLk5vZGUsIGNvbXBUeXBlOiB7IHByb3RvdHlwZTogVCB9KTogVCB7XHJcbiAgICAgICAgcmV0dXJuIGNjLmZpbmQocGF0aCwgbm9kZSkuZ2V0Q29tcG9uZW50KGNvbXBUeXBlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIHNpZ24oeCkge1xyXG4gICAgICAgIHJldHVybiB4ID4gMCA/IDEgOiAtMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICogaW52b2tlIGV2ZXJ5IGNvbXBvbmVudHMgXHJcbiAqIEBwYXJhbSBub2RlIFxyXG4gKiBAcGFyYW0gZnVuY25hbWUgXHJcbiAqIEBwYXJhbSBwYXJhbXMgXHJcbiAqL1xyXG4gICAgc3RhdGljIGJyb2FkQ2FzdChub2RlLCBmdW5jbmFtZSwgLi4ucGFyYW1zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yYWNlKFxyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudHMoY2MuQ29tcG9uZW50KS5maWx0ZXIodiA9PiB2W2Z1bmNuYW1lXSAhPSBudWxsKS5tYXAodiA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmV0ID0gdltmdW5jbmFtZV0uY2FsbCh2LCAuLi5wYXJhbXMpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXQpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhdHRlbXBhdCB0byBjYWxsIGZ1bmMgb2Ygb25lIGNvbXBvbmVudCB3aGljaCBzdWNjZWRlZCBcclxuICAgICAqIEBwYXJhbSBub2RlIFxyXG4gICAgICogQHBhcmFtIGZ1bmNuYW1lIFxyXG4gICAgICogQHBhcmFtIHBhcmFtcyBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHNlbmRNZXNzYWdlKG5vZGU6IGNjLk5vZGUsIGZ1bmNuYW1lLCAuLi5wYXJhbXMpIHtcclxuICAgICAgICBsZXQgcmV0ID0gbnVsbDtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudHMoY2MuQ29tcG9uZW50KS5zb21lKHYgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZiA9IHZbZnVuY25hbWVdXHJcbiAgICAgICAgICAgIGlmIChmKSB7XHJcbiAgICAgICAgICAgICAgICByZXQgPSBmLmNhbGwodiwgLi4ucGFyYW1zKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIC8v6auY5pWI546HZ2V0Ym91bmRpbmdib3ggLOS4jeWQjOS6jm5vZGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkXHJcbiAgICBzdGF0aWMgZ2V0V29ybGRCb3VuZGluZ0JveChub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IG5vZGUucGFyZW50XHJcbiAgICAgICAgaWYgKHBhcmVudCA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGJveCA9IG5vZGUuZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgICAgICBsZXQgeHkgPSBjYy52Mihib3gueE1pbiwgYm94LnlNaW4pXHJcbiAgICAgICAgbGV0IHh5MiA9IGNjLnYyKGJveC54TWF4LCBib3gueU1heCk7XHJcbiAgICAgICAgeHkgPSBwYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHh5KTtcclxuICAgICAgICB4eTIgPSBwYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHh5Mik7XHJcbiAgICAgICAgbGV0IHdoID0geHkyLnN1YlNlbGYoeHkpO1xyXG4gICAgICAgIHJldHVybiBjYy5yZWN0KHh5LngsIHh5LnksIHdoLngsIHdoLnkpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldFBhcmVudChub2RlLCBuZXdQYXJlbnQsIGtlZXBXb3JsZFBvc2l0aW9uID0gZmFsc2UpIHtcclxuICAgICAgICBsZXQgb2xkUGFyZW50ID0gbm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgaWYgKG9sZFBhcmVudCA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gb2xkUGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICBub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IG5ld1BhcmVudDtcclxuICAgICAgICBpZiAoa2VlcFdvcmxkUG9zaXRpb24pIHtcclxuICAgICAgICAgICAgbm9kZS5wb3NpdGlvbiA9IG5ld1BhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgZ2V0V29ybGRQb3NpdGlvbihub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgaWYgKG5vZGUucGFyZW50ID09IG51bGwpIHJldHVybjtcclxuICAgICAgICBsZXQgeHkgPSBjYy52Mihub2RlLngsIG5vZGUueSlcclxuICAgICAgICByZXR1cm4gbm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHh5KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIGNoYW5nZVBhcmVudChub2RlOiBjYy5Ob2RlLCBwYXJlbnROb2RlOiBjYy5Ob2RlLCB6aW5kZXggPSAwKSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IGNjVXRpbC5nZXRXb3JsZFBvc2l0aW9uKG5vZGUpO1xyXG4gICAgICAgIG5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgIHBhcmVudE5vZGUuYWRkQ2hpbGQobm9kZSwgemluZGV4KTtcclxuICAgICAgICBwb3MgPSBwYXJlbnROb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKHBvcylcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbW92ZVRvT3JpZ2luKG5vZGUsIGR1ciwgZWFzZT8pIHtcclxuICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5tb3ZlVG8oZHVyLCBjYy5WZWMyLlpFUk8pLmVhc2luZyhlYXNlIHx8IGNjLmVhc2VTaW5lT3V0KCkpKVxyXG4gICAgfVxyXG4gICAgc3RhdGljIF90bXBfdmVjMjogY2MuVmVjMiA9IGNjLnYyKClcclxuICAgIHN0YXRpYyBkZWZhdWx0X2ZseWNvaW5fY29uZmlnID0ge1xyXG4gICAgICAgIGR1cjogMC41LFxyXG4gICAgICAgIG51bTogNSxcclxuICAgICAgICBpbnRlcnZhbDogMC4xLFxyXG4gICAgICAgIHJhbmRvbV9sZW5ndGg6IDAsXHJcbiAgICAgICAgc2NhbGU6IDEsXHJcbiAgICAgICAgc2NhbGVUbzogMVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuaSreaUviDpo57ooYzliqjnlLsg566A5YyW54mI5pysICovXHJcbiAgICBzdGF0aWMgYXN5bmMgcGxheUZseSh0ZW1wbGF0ZTogY2MuTm9kZSwgZHVyPywgbnVtPywgaW50ZXJ2YWw/KSB7XHJcbiAgICAgICAgdGhpcy5wbGF5Rmx5Q29pbih0ZW1wbGF0ZSwgdGVtcGxhdGUucGFyZW50LCBkaXNwbGF5LmNlbnRlciwgY2NVdGlsLmdldFdvcmxkUG9zaXRpb24odGVtcGxhdGUpLCB7IGR1ciwgbnVtLCBpbnRlcnZhbCB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8v5pKt5pS+6aOe6KGM5Yqo55S7IFxyXG4gICAgc3RhdGljIGFzeW5jIHBsYXlGbHlDb2luKHRlbXBsYXRlOiBjYy5Ob2RlIHwgY2MuUHJlZmFiID0gbnVsbCwgcGFyZW50OiBjYy5Ob2RlID0gbnVsbCwgZnJvbTogY2MuTm9kZSB8IGNjLlZlYzIgPSBkaXNwbGF5LmNlbnRlciwgdG86IGNjLlZlYzIgPSBkaXNwbGF5LmxlZnRUb3AsIGNvbmZpZz86IEZseUNvaW5Db25maWcpIHtcclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbmZpZyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcgPSB0aGlzLmRlZmF1bHRfZmx5Y29pbl9jb25maWdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25maWcubnVtID0gY29uZmlnLm51bSB8fCB0aGlzLmRlZmF1bHRfZmx5Y29pbl9jb25maWcubnVtO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbmZpZy5udW07IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0ZW1wbGF0ZSkgYXMgY2MuTm9kZTtcclxuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgbGV0IGYgPSBmcm9tO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZyb20gaW5zdGFuY2VvZiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZiA9IGNjVXRpbC5nZXRXb3JsZFBvc2l0aW9uKGZyb20pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmID0gZnJvbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGYgPSBwYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoZilcclxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBwYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodG8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5yYW5kb21fbGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByb3VuZCA9IGNjLlZlYzIucmFuZG9tKHRoaXMuX3RtcF92ZWMyLCBjb25maWcucmFuZG9tX2xlbmd0aCB8fCB0aGlzLmRlZmF1bHRfZmx5Y29pbl9jb25maWcucmFuZG9tX2xlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKGYuYWRkKHJvdW5kKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24oZilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBkdXJhdGlvbiA9IGNvbmZpZy5kdXIgfHwgdGhpcy5kZWZhdWx0X2ZseWNvaW5fY29uZmlnLmR1clxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSkudG8oZHVyYXRpb24sIHsgcG9zaXRpb246IHRhcmdldCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAvL+e8qeaUvuWKqOeUu1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5zY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2NhbGUgPSBjb25maWcuc2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSkudG8oZHVyYXRpb24sIHsgc2NhbGU6IGNvbmZpZy5zY2FsZVRvIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBldnQuc2xlZXAoKGNvbmZpZy5pbnRlcnZhbCB8fCB0aGlzLmRlZmF1bHRfZmx5Y29pbl9jb25maWcuaW50ZXJ2YWwpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UmVzPFQgZXh0ZW5kcyBjYy5Bc3NldD4ocGF0aCwgdHlwZTogeyBwcm90b3R5cGU6IFQgfSk6IFByb21pc2U8VD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGgsIHR5cGUsIChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlamVjdChlcnIpXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn0iXX0=