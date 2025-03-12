"use strict";
cc._RF.push(module, '6f3546H/GpLgpM4JFNb6hcn', 'PsSpawner');
// framework/misc/PsSpawner.ts

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
var PoolManager_1 = require("../core/PoolManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var PsSpawner = /** @class */ (function (_super) {
    __extends(PsSpawner, _super);
    function PsSpawner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PsSpawner.prototype.onLoad = function () {
        this.poolmgr = new PoolManager_1.default();
    };
    PsSpawner.prototype.start = function () {
    };
    PsSpawner.prototype.clear = function () {
        if (this.poolmgr)
            this.poolmgr.clear();
    };
    PsSpawner.prototype.getFx = function (prefabPath) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var node = _this.poolmgr.get(prefabPath);
            if (node == null) {
                if (prefabPath instanceof cc.Prefab) {
                    node = cc.instantiate(prefabPath);
                    _this.poolmgr.tag(node, prefabPath);
                }
                else {
                    cc.resources.load(prefabPath, cc.Prefab, function (e, prefab) {
                        node = cc.instantiate(prefab);
                        node.setParent(_this.node);
                        var psfx = node.getOrAddComponent(PsFx_1.default);
                        psfx.name = prefabPath;
                        resolve(psfx);
                    });
                    return;
                }
            }
            node.setParent(_this.node);
            node.active = false;
            var psfx = node.getOrAddComponent(PsFx_1.default);
            psfx.reset();
            resolve(psfx);
        });
    };
    PsSpawner.prototype.preload = function (prefabPath, num) {
        var _this = this;
        for (var i = 0; i < num; i++) {
            this.getFx(prefabPath).then(function (fx) {
                _this.onFxFinshPlay(fx);
            });
        }
    };
    PsSpawner.prototype.onFxFinshPlay = function (fx) {
        this.poolmgr.put(fx.node);
    };
    PsSpawner.prototype.finish = function (fx) {
        this.poolmgr.put(fx.node);
    };
    PsSpawner.prototype.play = function (prefabPath, pos, rotation, audio, spriteframe) {
        if (pos === void 0) { pos = cc.Vec2.ZERO; }
        if (rotation === void 0) { rotation = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var fx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFx(prefabPath)];
                    case 1:
                        fx = _a.sent();
                        fx.node.position = pos;
                        fx.node.angle = rotation;
                        return [4 /*yield*/, fx.play(audio, spriteframe)];
                    case 2:
                        _a.sent();
                        this.onFxFinshPlay(fx);
                        return [2 /*return*/];
                }
            });
        });
    };
    PsSpawner.prototype.playWithoutFinish = function (prefabPath, pos, rotation, audio, spriteframe) {
        if (pos === void 0) { pos = cc.Vec2.ZERO; }
        if (rotation === void 0) { rotation = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var fx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFx(prefabPath)];
                    case 1:
                        fx = _a.sent();
                        fx.node.position = pos;
                        fx.node.angle = rotation;
                        return [4 /*yield*/, fx.play(audio, spriteframe)
                            //this.onFxFinshPlay(fx);
                        ];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PsSpawner.prototype.play2 = function (prefabPath, pos, rotation, scale) {
        if (pos === void 0) { pos = cc.Vec2.ZERO; }
        if (rotation === void 0) { rotation = 0; }
        if (scale === void 0) { scale = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var fx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFx(prefabPath)];
                    case 1:
                        fx = _a.sent();
                        fx.node.position = pos;
                        fx.node.scale = scale;
                        fx.node.angle = rotation;
                        return [4 /*yield*/, fx.play()];
                    case 2:
                        _a.sent();
                        this.onFxFinshPlay(fx);
                        return [2 /*return*/];
                }
            });
        });
    };
    PsSpawner.prototype.play3 = function (prefabPath, pos) {
        if (pos === void 0) { pos = cc.Vec2.ZERO; }
        return __awaiter(this, void 0, void 0, function () {
            var fx;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFx(prefabPath)];
                    case 1:
                        fx = _a.sent();
                        fx.node.position = pos;
                        fx.play().then(function (_) { return _this.onFxFinshPlay(fx); });
                        return [2 /*return*/, fx];
                }
            });
        });
    };
    PsSpawner = __decorate([
        ccclass,
        menu("动画特效/PsSpawner")
    ], PsSpawner);
    return PsSpawner;
}(cc.Component));
exports.default = PsSpawner;

cc._RF.pop();