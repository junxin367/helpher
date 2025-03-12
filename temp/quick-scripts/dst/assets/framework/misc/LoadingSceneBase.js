
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/LoadingSceneBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'de58fTQvohHOIGkmPk32Yk3', 'LoadingSceneBase');
// framework/misc/LoadingSceneBase.ts

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
var Platform_1 = require("../extension/Platform");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var is_first = true;
var with_server = true;
var LOADING_SCENE_NAME = "LoadingScene";
var targetScene = null;
var LoadingSceneBase = /** @class */ (function (_super) {
    __extends(LoadingSceneBase, _super);
    function LoadingSceneBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultSceneName = "Home";
        _this.label = null;
        _this.percentLabel = null;
        _this.bar = null;
        return _this;
    }
    LoadingSceneBase_1 = LoadingSceneBase;
    LoadingSceneBase.prototype.onLoad = function () {
        targetScene = targetScene || this.defaultSceneName;
    };
    LoadingSceneBase.prototype.start = function () {
        this.bar.progress = 0;
        this.label.string = "加载中...";
    };
    Object.defineProperty(LoadingSceneBase.prototype, "progress", {
        set: function (p) {
            if (this.bar) {
                this.bar.progress = p;
                this.percentLabel.string = Math.floor(p * 100) + "%";
            }
        },
        enumerable: false,
        configurable: true
    });
    LoadingSceneBase.prototype.loadNextScene = function (prefabTobeLoad) {
        var _this = this;
        targetScene = targetScene || this.defaultSceneName;
        this.label.string = '加载场景资源';
        return new Promise(function (resolve, reject) {
            cc.director.preloadScene(targetScene, function (c, t, i) {
                _this.percentLabel.string = (c / t * 100).toFixed(1) + "%";
                _this.bar.progress = c / t;
            }, function (_) {
                // evt.emit("SceneChange")
                if (prefabTobeLoad) {
                    cc.resources.load(prefabTobeLoad, cc.Prefab, function (err, prefab) {
                        cc.director.loadScene(targetScene, function (_) {
                            var node = cc.instantiate(prefab);
                            cc.director.getScene().addChild(node, -1);
                            _this.onLoadFinished();
                        });
                    });
                }
                else {
                    cc.director.loadScene(targetScene, function (_) {
                        _this.onLoadFinished();
                    });
                }
            });
        });
    };
    LoadingSceneBase.prototype.onLoadFinished = function (node) {
        var root = cc.find("Canvas");
        if (root) {
            root.getComponents(cc.Component).forEach(function (v) {
                if (v.onLoadFinished) {
                    v.onLoadFinished(LoadingSceneBase_1.param, node);
                }
            });
        }
    };
    LoadingSceneBase.prototype.loadSubPackage = function (packageName, txt) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.label) {
                            this.label.string = txt;
                        }
                        return [4 /*yield*/, Platform_1.default.loadSubPackage(packageName, function (p, k, t) {
                                if (_this.progress)
                                    _this.progress = p / 100;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoadingSceneBase.setNextScene = function (scene) {
        targetScene = scene;
    };
    LoadingSceneBase.getNextScene = function () {
        return targetScene;
    };
    LoadingSceneBase.goto = function (sceneName, param) {
        if (param === void 0) { param = null; }
        LoadingSceneBase_1.param = param;
        targetScene = sceneName;
        cc.director.loadScene(LOADING_SCENE_NAME);
    };
    var LoadingSceneBase_1;
    LoadingSceneBase.param = null;
    LoadingSceneBase.ResPrefab = null;
    __decorate([
        property
    ], LoadingSceneBase.prototype, "defaultSceneName", void 0);
    __decorate([
        property(cc.Label)
    ], LoadingSceneBase.prototype, "label", void 0);
    __decorate([
        property(cc.Label)
    ], LoadingSceneBase.prototype, "percentLabel", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], LoadingSceneBase.prototype, "bar", void 0);
    LoadingSceneBase = LoadingSceneBase_1 = __decorate([
        ccclass
    ], LoadingSceneBase);
    return LoadingSceneBase;
}(cc.Component));
exports.default = LoadingSceneBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxMb2FkaW5nU2NlbmVCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUE2QztBQUV2QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUE7QUFDbkIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBRXZCLElBQU0sa0JBQWtCLEdBQUcsY0FBYyxDQUFBO0FBQ3pDLElBQUksV0FBVyxHQUFXLElBQUksQ0FBQztBQUUvQjtJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQWdHQztRQTNGRyxzQkFBZ0IsR0FBVyxNQUFNLENBQUE7UUFHakMsV0FBSyxHQUFhLElBQUksQ0FBQztRQUdmLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRzlCLFNBQUcsR0FBbUIsSUFBSSxDQUFDOztJQWtGdkMsQ0FBQzt5QkFoR29CLGdCQUFnQjtJQWdCakMsaUNBQU0sR0FBTjtRQUNJLFdBQVcsR0FBRyxXQUFXLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ3ZELENBQUM7SUFDRCxnQ0FBSyxHQUFMO1FBRUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsc0JBQUksc0NBQVE7YUFBWixVQUFhLENBQUM7WUFDVixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFBO2dCQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxD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QU8sV0FBVyxDQUFBO0lBQ3RCLENBQUM7SUFFTSxxQkFBSSxHQUFYLFVBQVksU0FBUyxFQUFFLEtBQVk7UUFBWixzQkFBQSxFQUFBLFlBQVk7UUFDL0Isa0JBQWdCLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtRQUM5QixXQUFXLEdBQUcsU0FBUyxDQUFBO1FBQ3ZCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUE7SUFDN0MsQ0FBQzs7SUE1Rk0sc0JBQUssR0FBUSxJQUFJLENBQUM7SUFDbEIsMEJBQVMsR0FBYyxJQUFJLENBQUE7SUFHbEM7UUFEQyxRQUFROzhEQUN3QjtJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MERBQ21CO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7aURBQ1U7SUFkbEIsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0FnR3BDO0lBQUQsdUJBQUM7Q0FoR0QsQUFnR0MsQ0FoRzZDLEVBQUUsQ0FBQyxTQUFTLEdBZ0d6RDtrQkFoR29CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi4vZXh0ZW5zaW9uL1BsYXRmb3JtXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuXHJcbmxldCBpc19maXJzdCA9IHRydWVcclxubGV0IHdpdGhfc2VydmVyID0gdHJ1ZTtcclxuXHJcbmNvbnN0IExPQURJTkdfU0NFTkVfTkFNRSA9IFwiTG9hZGluZ1NjZW5lXCJcclxubGV0IHRhcmdldFNjZW5lOiBzdHJpbmcgPSBudWxsO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nU2NlbmVCYXNlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwYXJhbTogYW55ID0gbnVsbDtcclxuICAgIHN0YXRpYyBSZXNQcmVmYWI6IGNjLlByZWZhYiA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGRlZmF1bHRTY2VuZU5hbWU6IHN0cmluZyA9IFwiSG9tZVwiXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIHBlcmNlbnRMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcclxuICAgIHByaXZhdGUgYmFyOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRhcmdldFNjZW5lID0gdGFyZ2V0U2NlbmUgfHwgdGhpcy5kZWZhdWx0U2NlbmVOYW1lO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmFyLnByb2dyZXNzID0gMDtcclxuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IFwi5Yqg6L295LitLi4uXCJcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcHJvZ3Jlc3MocCkge1xyXG4gICAgICAgIGlmICh0aGlzLmJhcikge1xyXG4gICAgICAgICAgICB0aGlzLmJhci5wcm9ncmVzcyA9IHBcclxuICAgICAgICAgICAgdGhpcy5wZXJjZW50TGFiZWwuc3RyaW5nID0gTWF0aC5mbG9vcihwICogMTAwKSArIFwiJVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWROZXh0U2NlbmUocHJlZmFiVG9iZUxvYWQ/KSB7XHJcbiAgICAgICAgdGFyZ2V0U2NlbmUgPSB0YXJnZXRTY2VuZSB8fCB0aGlzLmRlZmF1bHRTY2VuZU5hbWU7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAn5Yqg6L295Zy65pmv6LWE5rqQJ1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSh0YXJnZXRTY2VuZSwgKGMsIHQsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVyY2VudExhYmVsLnN0cmluZyA9IGAkeyhjIC8gdCAqIDEwMCkudG9GaXhlZCgxKX0lYFxyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXIucHJvZ3Jlc3MgPSBjIC8gdDtcclxuICAgICAgICAgICAgfSwgXyA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBldnQuZW1pdChcIlNjZW5lQ2hhbmdlXCIpXHJcbiAgICAgICAgICAgICAgICBpZiAocHJlZmFiVG9iZUxvYWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwcmVmYWJUb2JlTG9hZCwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRhcmdldFNjZW5lLCBfID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5hZGRDaGlsZChub2RlLCAtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTG9hZEZpbmlzaGVkKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRhcmdldFNjZW5lLCBfID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkxvYWRGaW5pc2hlZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWRGaW5pc2hlZChub2RlPykge1xyXG4gICAgICAgIGxldCByb290ID0gY2MuZmluZChcIkNhbnZhc1wiKVxyXG4gICAgICAgIGlmIChyb290KSB7XHJcbiAgICAgICAgICAgIHJvb3QuZ2V0Q29tcG9uZW50cyhjYy5Db21wb25lbnQpLmZvckVhY2goKHY6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHYub25Mb2FkRmluaXNoZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2Lm9uTG9hZEZpbmlzaGVkKExvYWRpbmdTY2VuZUJhc2UucGFyYW0sIG5vZGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyBsb2FkU3ViUGFja2FnZShwYWNrYWdlTmFtZSwgdHh0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGFiZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSB0eHRcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgUGxhdGZvcm0ubG9hZFN1YlBhY2thZ2UocGFja2FnZU5hbWUsIChwLCBrLCB0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2dyZXNzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IHAgLyAxMDA7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0TmV4dFNjZW5lKHNjZW5lKSB7XHJcbiAgICAgICAgdGFyZ2V0U2NlbmUgPSBzY2VuZVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXROZXh0U2NlbmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldFNjZW5lXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdvdG8oc2NlbmVOYW1lLCBwYXJhbSA9IG51bGwpIHtcclxuICAgICAgICBMb2FkaW5nU2NlbmVCYXNlLnBhcmFtID0gcGFyYW1cclxuICAgICAgICB0YXJnZXRTY2VuZSA9IHNjZW5lTmFtZVxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShMT0FESU5HX1NDRU5FX05BTUUpXHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==