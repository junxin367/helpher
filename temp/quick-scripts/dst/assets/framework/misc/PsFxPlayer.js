
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/PsFxPlayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxQc0Z4UGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUEwQjtBQUMxQixtQ0FBOEI7QUFFeEIsSUFBQSxLQUE4QixFQUFFLENBQUMsVUFBVSxFQUF6QyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxJQUFJLFVBQWtCLENBQUM7QUFXbEQ7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUF3SUM7UUFySUcsWUFBTSxHQUFjLElBQUksQ0FBQTtRQUd4QixnQkFBVSxHQUFXLEVBQUUsQ0FBQztRQUV4QixrQkFBa0I7UUFDbEIsZUFBUyxHQUFTLElBQUksQ0FBQztRQUd2QixpQkFBVyxHQUFtQixJQUFJLENBQUE7UUFNbEMsY0FBUSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBR3RCLG1CQUFhLEdBQVksS0FBSyxDQUFDO1FBRy9CLFdBQUssR0FBVyxDQUFDLENBQUM7O1FBK0dsQixpQkFBaUI7SUFDckIsQ0FBQztJQS9HRywyQkFBTSxHQUFOO1FBQ0ksOEJBQThCO1FBQzlCLGdEQUFnRDtJQUNwRCxDQUFDO0lBRUQsMEJBQUssR0FBTDtJQUVBLENBQUM7SUFHRCwrQkFBVSxHQUFWO1FBQUEsaUJBU0M7UUFSRyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbEYsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztnQkFDeEMsSUFBSSxHQUFHO29CQUFFLE1BQU0sQ0FB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QixzQkFBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUM7OzZCQUUxRixDQUFBLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFBLEVBQWpCLHdCQUFpQjt3QkFDakIscUJBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFBOzt3QkFBdEMsU0FBc0MsQ0FBQzs7O3dCQUMzQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7OztLQUVuQjtJQWxJRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNJO0lBR3hCO1FBREMsUUFBUTtrREFDZTtJQU14QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO21EQUNTO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ0M7SUFHeEI7UUFEQyxRQUFRO2dEQUNhO0lBR3RCO1FBREMsUUFBUTtxREFDc0I7SUFHL0I7UUFEQyxRQUFROzZDQUNTO0lBeEJELFVBQVU7UUFGOUIsT0FBTztRQUNQLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztPQUNILFVBQVUsQ0F3STlCO0lBQUQsaUJBQUM7Q0F4SUQsQUF3SUMsQ0F4SXVDLEVBQUUsQ0FBQyxTQUFTLEdBd0luRDtrQkF4SW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHNGeCBmcm9tIFwiLi9Qc0Z4XCI7XHJcbmltcG9ydCBEZXZpY2UgZnJvbSBcIi4vRGV2aWNlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQbGF5T3B0aW9ucyB7XHJcbiAgICBsYWJlbD86IHN0cmluZztcclxuICAgIHNwcml0ZUZyYW1lPzogY2MuU3ByaXRlRnJhbWU7XHJcbiAgICB4PzogbnVtYmVyLFxyXG4gICAgeT86IG51bWJlcixcclxufVxyXG5cclxuQGNjY2xhc3NcclxuQG1lbnUoXCLliqjnlLvnibnmlYgvUHNGeFBsYXllclwiKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQc0Z4UGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwcmVmYWJQYXRoOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoUHNGeClcclxuICAgIGRlZmF1bHRGeDogUHNGeCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBhdWRpb0NsaXA6IGNjLkF1ZGlvQ2xpcDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGR1cmF0aW9uOiBudW1iZXIgPSAtMTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHJhbmRvbVJvdGFpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNjYWxlOiBudW1iZXIgPSAxO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmRlZmF1bHRGeCA9PSBudWxsKVxyXG4gICAgICAgIC8vICAgICB0aGlzLmRlZmF1bHRGeCA9IHRoaXMuZ2V0Q29tcG9uZW50KFBzRngpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgbG9hZFByZWZhYigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcmVmYWJQYXRoID09IG51bGwgfHwgaXNFbXB0eSh0aGlzLnByZWZhYlBhdGgpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQodGhpcy5wcmVmYWJQYXRoLCAoZXJyLCByZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHJlamVjdChlcnIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZWZhYiA9IHJlcztcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRGeCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRGeC5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0RnggPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJlZmFiID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZngoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdEZ4ID09IG51bGwgJiYgdGhpcy5wcmVmYWIpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYik7XHJcbiAgICAgICAgICAgIGlmIChub2RlID09IG51bGwpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBsZXQgZnggPSBub2RlLmdldENvbXBvbmVudChQc0Z4KVxyXG4gICAgICAgICAgICBpZiAoZnggPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZnggPSBub2RlLmFkZENvbXBvbmVudChQc0Z4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgICAgICBub2RlLnNldFBhcmVudCh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRGeCA9IGZ4O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0Rng7XHJcbiAgICB9XHJcblxyXG4gICAgcHJlbG9hZCgpIHtcclxuICAgICAgICB0aGlzLmxvYWRQcmVmYWIoKS50aGVuKHYgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZ4Lm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSkuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKGUpKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc1BsYXlpbmcoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmZ4KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZnguaXNQbGF5aW5nO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgbGV0IGZ4ID0gdGhpcy5kZWZhdWx0Rng7XHJcbiAgICAgICAgaWYgKGZ4KVxyXG4gICAgICAgICAgICBmeC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNsZWVwKHNlYyk6UHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChfID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSwgc2VjKVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZnggJiYgdGhpcy5meC5ub2RlKVxyXG4gICAgICAgICAgICB0aGlzLmZ4Lm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0T3B0aW9ucyhmeDogUHNGeCwgb3B0aW9uczogUGxheU9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICBmeC5ub2RlLnggPSBvcHRpb25zLnggfHwgZngubm9kZS54XHJcbiAgICAgICAgICAgIGZ4Lm5vZGUueSA9IG9wdGlvbnMueSB8fCBmeC5ub2RlLnlcclxuICAgICAgICAgICAgaWYgKGZ4LmxhYmVsKVxyXG4gICAgICAgICAgICAgICAgZngubGFiZWwuc3RyaW5nID0gb3B0aW9ucy5sYWJlbCB8fCBmeC5sYWJlbC5zdHJpbmdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcGxheShvcHRpb25zPzogUGxheU9wdGlvbnMsIGF1ZGlvPykge1xyXG4gICAgICAgIERldmljZS5wbGF5RWZmZWN0KHRoaXMuYXVkaW9DbGlwLCBmYWxzZSk7XHJcbiAgICAgICAgbGV0IGZ4ID0gdGhpcy5meDtcclxuICAgICAgICBpZiAoIWZ4KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByZWZhYiA9PSBudWxsICYmIHRoaXMucHJlZmFiUGF0aCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRQcmVmYWIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmeCA9IHRoaXMuZng7XHJcbiAgICAgICAgaWYgKGZ4KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJhbmRvbVJvdGFpb24pXHJcbiAgICAgICAgICAgICAgICBmeC5ub2RlLnJvdGF0aW9uID0gZy5yYW5kb21JbnQoMCwgMzYwKTtcclxuICAgICAgICAgICAgZngucmVzZXQoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25zKGZ4LCBvcHRpb25zKTtcclxuICAgICAgICAgICAgZngubm9kZS5zY2FsZSA9IHRoaXMuc2NhbGU7XHJcbiAgICAgICAgICAgIHJldHVybiBmeC5wbGF5KGF1ZGlvIHx8IHRoaXMuYXVkaW9DbGlwLCAob3B0aW9ucyAmJiBvcHRpb25zLnNwcml0ZUZyYW1lKSB8fCB0aGlzLnNwcml0ZUZyYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kdXJhdGlvbiA+IDApXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKHRoaXMuZHVyYXRpb24gKiAxMDAwKTtcclxuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19