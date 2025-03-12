
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/PsSpawner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxQc1NwYXduZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTBCO0FBQzFCLG1EQUE4QztBQUV4QyxJQUFBLEtBQThCLEVBQUUsQ0FBQyxVQUFVLEVBQXpDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBa0IsQ0FBQztBQUlsRDtJQUF1Qyw2QkFBWTtJQUFuRDs7SUErRkEsQ0FBQztJQTFGRywwQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHFCQUFXLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQseUJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCx5QkFBSyxHQUFMO1FBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTztZQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELHlCQUFLLEdBQUwsVUFBTSxVQUFVO1FBQWhCLGlCQXdCQztRQXZCRyxPQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDckMsSUFBSSxJQUFJLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDdkMsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUNkLElBQUksVUFBVSxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUU7b0JBQ2pDLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNsQyxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUE7aUJBQ3JDO3FCQUFNO29CQUNILEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLENB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QyxnQkFBZ0IsQ0FBQztPQUNGLFNBQVMsQ0ErRjdCO0lBQUQsZ0JBQUM7Q0EvRkQsQUErRkMsQ0EvRnNDLEVBQUUsQ0FBQyxTQUFTLEdBK0ZsRDtrQkEvRm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHNGeCBmcm9tIFwiLi9Qc0Z4XCI7XHJcbmltcG9ydCBQb29sTWFuYWdlciBmcm9tIFwiLi4vY29yZS9Qb29sTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgbWVudSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbkBtZW51KFwi5Yqo55S754m55pWIL1BzU3Bhd25lclwiKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQc1NwYXduZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHN0YXRpYyBpbnN0YW5jZTogUHNTcGF3bmVyO1xyXG5cclxuICAgIHBvb2xtZ3I6IFBvb2xNYW5hZ2VyO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucG9vbG1nciA9IG5ldyBQb29sTWFuYWdlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wb29sbWdyKVxyXG4gICAgICAgICAgICB0aGlzLnBvb2xtZ3IuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGeChwcmVmYWJQYXRoKTogUHJvbWlzZTxQc0Z4PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFBzRng+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnBvb2xtZ3IuZ2V0KHByZWZhYlBhdGgpXHJcbiAgICAgICAgICAgIGlmIChub2RlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcmVmYWJQYXRoIGluc3RhbmNlb2YgY2MuUHJlZmFiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYlBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9vbG1nci50YWcobm9kZSwgcHJlZmFiUGF0aClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQocHJlZmFiUGF0aCwgY2MuUHJlZmFiLCAoZSwgcHJlZmFiOiBjYy5QcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0UGFyZW50KHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwc2Z4ID0gbm9kZS5nZXRPckFkZENvbXBvbmVudChQc0Z4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwc2Z4Lm5hbWUgPSBwcmVmYWJQYXRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHBzZngpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5vZGUuc2V0UGFyZW50KHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBwc2Z4ID0gbm9kZS5nZXRPckFkZENvbXBvbmVudChQc0Z4KVxyXG4gICAgICAgICAgICBwc2Z4LnJlc2V0KCk7XHJcbiAgICAgICAgICAgIHJlc29sdmUocHNmeCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcmVsb2FkKHByZWZhYlBhdGgsIG51bSkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRGeChwcmVmYWJQYXRoKS50aGVuKGZ4ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25GeEZpbnNoUGxheShmeCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkZ4Rmluc2hQbGF5KGZ4OiBQc0Z4KSB7XHJcbiAgICAgICAgdGhpcy5wb29sbWdyLnB1dChmeC5ub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5pc2goZng6IFBzRngpIHtcclxuICAgICAgICB0aGlzLnBvb2xtZ3IucHV0KGZ4Lm5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHBsYXkocHJlZmFiUGF0aCwgcG9zID0gY2MuVmVjMi5aRVJPLCByb3RhdGlvbiA9IDAsIGF1ZGlvPywgc3ByaXRlZnJhbWU/KSB7XHJcbiAgICAgICAgbGV0IGZ4ID0gYXdhaXQgdGhpcy5nZXRGeChwcmVmYWJQYXRoKTtcclxuICAgICAgICBmeC5ub2RlLnBvc2l0aW9uID0gcG9zO1xyXG4gICAgICAgIGZ4Lm5vZGUuYW5nbGUgPSByb3RhdGlvbjtcclxuICAgICAgICBhd2FpdCBmeC5wbGF5KGF1ZGlvLCBzcHJpdGVmcmFtZSlcclxuICAgICAgICB0aGlzLm9uRnhGaW5zaFBsYXkoZngpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHBsYXlXaXRob3V0RmluaXNoKHByZWZhYlBhdGgsIHBvcyA9IGNjLlZlYzIuWkVSTywgcm90YXRpb24gPSAwLCBhdWRpbz8sIHNwcml0ZWZyYW1lPykge1xyXG4gICAgICAgIGxldCBmeCA9IGF3YWl0IHRoaXMuZ2V0RngocHJlZmFiUGF0aCk7XHJcbiAgICAgICAgZngubm9kZS5wb3NpdGlvbiA9IHBvcztcclxuICAgICAgICBmeC5ub2RlLmFuZ2xlID0gcm90YXRpb247XHJcbiAgICAgICAgYXdhaXQgZngucGxheShhdWRpbywgc3ByaXRlZnJhbWUpXHJcbiAgICAgICAgLy90aGlzLm9uRnhGaW5zaFBsYXkoZngpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHBsYXkyKHByZWZhYlBhdGgsIHBvcyA9IGNjLlZlYzIuWkVSTywgcm90YXRpb24gPSAwLCBzY2FsZSA9IDApIHtcclxuICAgICAgICBsZXQgZnggPSBhd2FpdCB0aGlzLmdldEZ4KHByZWZhYlBhdGgpO1xyXG4gICAgICAgIGZ4Lm5vZGUucG9zaXRpb24gPSBwb3M7XHJcbiAgICAgICAgZngubm9kZS5zY2FsZSA9IHNjYWxlO1xyXG4gICAgICAgIGZ4Lm5vZGUuYW5nbGUgPSByb3RhdGlvbjtcclxuICAgICAgICBhd2FpdCBmeC5wbGF5KClcclxuICAgICAgICB0aGlzLm9uRnhGaW5zaFBsYXkoZngpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHBsYXkzKHByZWZhYlBhdGgsIHBvcyA9IGNjLlZlYzIuWkVSTykge1xyXG4gICAgICAgIGxldCBmeCA9IGF3YWl0IHRoaXMuZ2V0RngocHJlZmFiUGF0aCk7XHJcbiAgICAgICAgZngubm9kZS5wb3NpdGlvbiA9IHBvcztcclxuICAgICAgICBmeC5wbGF5KCkudGhlbihfID0+IHRoaXMub25GeEZpbnNoUGxheShmeCkpO1xyXG4gICAgICAgIHJldHVybiBmeDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19