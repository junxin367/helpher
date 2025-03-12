"use strict";
cc._RF.push(module, '3c0b8VvOVhJXKj7ZG3hrVct', 'PsFxPlayer');
// framework/misc/PsFxPlayer.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var PsFx_1 = require("./PsFx");
var Device_1 = require("./Device");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var PsFxPlayer = /** @class */ (function (_super) {
    __extends(PsFxPlayer, _super);
    function PsFxPlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prefab = null;
        _this.prefabPath = '';
        // @property(PsFx)
        _this.defaultFx = null;
        _this.spriteFrame = null;
        _this.duration = -1;
        _this.randomRotaion = false;
        _this.scale = 1;
        return _this;
        // update (dt) {}
    }
    PsFxPlayer.prototype.onLoad = function () {
        // if (this.defaultFx == null)
        //     this.defaultFx = this.getComponent(PsFx);
    };
    PsFxPlayer.prototype.start = function () {
    };
    PsFxPlayer.prototype.loadPrefab = function () {
        var _this = this;
        if (this.prefabPath == null || isEmpty(this.prefabPath))
            return Promise.resolve();
        return new Promise(function (resolve, reject) {
            cc.resources.load(_this.prefabPath, function (err, res) {
                if (err)
                    reject(err);
                _this.prefab = res;
                resolve(res);
            });
        });
    };
    PsFxPlayer.prototype.clear = function () {
        if (this.defaultFx) {
            this.defaultFx.node.destroy();
        }
        this.defaultFx = null;
        this.prefab = null;
    };
    Object.defineProperty(PsFxPlayer.prototype, "fx", {
        get: function () {
            if (this.defaultFx == null && this.prefab) {
                var node = cc.instantiate(this.prefab);
                if (node == null)
                    return null;
                var fx = node.getComponent(PsFx_1.default);
                if (fx == null) {
                    fx = node.addComponent(PsFx_1.default);
                }
                node.setPosition(0, 0);
                node.setParent(this.node);
                this.defaultFx = fx;
            }
            return this.defaultFx;
        },
        enumerable: false,
        configurable: true
    });
    PsFxPlayer.prototype.preload = function () {
        var _this = this;
        this.loadPrefab().then(function (v) {
            _this.fx.node.active = false;
        }).catch(function (e) { return console.error(e); });
    };
    Object.defineProperty(PsFxPlayer.prototype, "isPlaying", {
        get: function () {
            if (!this.fx)
                return false;
            return this.fx.isPlaying;
        },
        enumerable: false,
        configurable: true
    });
    PsFxPlayer.prototype.onEnable = function () {
    };
    PsFxPlayer.prototype.onDisable = function () {
        var fx = this.defaultFx;
        if (fx)
            fx.node.active = false;
    };
    PsFxPlayer.prototype.sleep = function (sec) {
        return new Promise(function (resolve, reject) {
            setTimeout(function (_) {
                resolve();
            }, sec);
        });
    };
    ;
    PsFxPlayer.prototype.hide = function () {
        if (this.fx && this.fx.node)
            this.fx.node.active = false;
    };
    PsFxPlayer.prototype.setOptions = function (fx, options) {
        if (options) {
            fx.node.x = options.x || fx.node.x;
            fx.node.y = options.y || fx.node.y;
            if (fx.label)
                fx.label.string = options.label || fx.label.string;
        }
    };
    PsFxPlayer.prototype.play = function (options, audio) {
        return __awaiter(this, void 0, void 0, function () {
            var fx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Device_1.default.playEffect(this.audioClip, false);
                        fx = this.fx;
                        if (!!fx) return [3 /*break*/, 2];
                        if (!(this.prefab == null && this.prefabPath != null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadPrefab()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        fx = this.fx;
                        if (!fx) return [3 /*break*/, 3];
                        if (this.randomRotaion)
                            fx.node.rotation = g.randomInt(0, 360);
                        fx.reset();
                        this.setOptions(fx, options);
                        fx.node.scale = this.scale;
                        return [2 /*return*/, fx.play(audio || this.audioClip, (options && options.spriteFrame) || this.spriteFrame)];
                    case 3:
                        if (!(this.duration > 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.sleep(this.duration * 1000)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        this.hide();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        property(cc.Prefab)
    ], PsFxPlayer.prototype, "prefab", void 0);
    __decorate([
        property
    ], PsFxPlayer.prototype, "prefabPath", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PsFxPlayer.prototype, "spriteFrame", void 0);
    __decorate([
        property(cc.AudioClip)
    ], PsFxPlayer.prototype, "audioClip", void 0);
    __decorate([
        property
    ], PsFxPlayer.prototype, "duration", void 0);
    __decorate([
        property
    ], PsFxPlayer.prototype, "randomRotaion", void 0);
    __decorate([
        property
    ], PsFxPlayer.prototype, "scale", void 0);
    PsFxPlayer = __decorate([
        ccclass,
        menu("动画特效/PsFxPlayer")
    ], PsFxPlayer);
    return PsFxPlayer;
}(cc.Component));
exports.default = PsFxPlayer;

cc._RF.pop();