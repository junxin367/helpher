"use strict";
cc._RF.push(module, '518cdzeB/VJIYD2yZxm+mOJ', 'SubpackageLoader');
// framework/ui/game/SubpackageLoader.ts

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
var Signal_1 = require("../../core/Signal");
var Platform_1 = require("../../extension/Platform");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SubpackageLoader = /** @class */ (function (_super) {
    __extends(SubpackageLoader, _super);
    function SubpackageLoader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label_progress = null;
        _this.bar = null;
        _this.label = null;
        _this.btn_retry = null;
        _this.btn_close = null;
        _this.onSuccess = new Signal_1.default();
        _this.names = [];
        _this.hideOnFinish = true;
        return _this;
    }
    SubpackageLoader.prototype.onLoad = function () {
        this.btn_retry.node.on(cc.Node.EventType.TOUCH_END, this.click_retry, this);
        if (this.btn_close)
            this.btn_close.node.on(cc.Node.EventType.TOUCH_END, this.click_close, this);
    };
    SubpackageLoader.prototype.onShown = function (names, hideOnFinish, callback, target) {
        this.hideOnFinish = hideOnFinish;
        this.onSuccess.clear();
        this.onSuccess.on(callback, target);
        this.names.splice(0);
        if (Array.isArray(names)) {
            this.names = names;
        }
        else if (typeof (names) == "string") {
            this.names.push(names);
        }
        else {
            console.error("[SubpackageLoader] fail to load : params error");
            return;
        }
        this.startLoad();
    };
    /**
     * 显示 当前下载 进度
     * @param name 子包名
     * @param percent  当前进度 x/100
     * @param c 下载字节数
     * @param t 总下载字节数
     */
    SubpackageLoader.prototype.showStatus = function (name, percent, c, t) {
        if (this.label_progress)
            this.label_progress.string = percent + "%";
        if (this.bar)
            this.bar.progress = percent / 100;
        if (this.label)
            this.label.string = "加载[" + name + "]中";
    };
    SubpackageLoader.prototype.startLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _loop_1, this_1, i, e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.btn_retry.node.active = false;
                        this.btn_close.node.active = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        _loop_1 = function () {
                            var name;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        name = this_1.names[i];
                                        return [4 /*yield*/, Platform_1.default.loadSubPackage(name, function (p, c, t) {
                                                _this.showStatus(name, p, c, t);
                                            })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < this.names.length)) return [3 /*break*/, 5];
                        return [5 /*yield**/, _loop_1()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 2];
                    case 5:
                        this.onSuccess.fire(this);
                        if (this.hideOnFinish) {
                            vm.hide(this);
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        e_1 = _a.sent();
                        console.error(e_1);
                        if (this.label)
                            this.label.string = "加载失败,请点击重试!";
                        this.btn_retry.node.active = true;
                        this.btn_close.node.active = true;
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    SubpackageLoader.prototype.cancel = function () {
        this.onSuccess.clear();
        vm.hide(this);
    };
    SubpackageLoader.prototype.click_close = function () {
        vm.hide(this);
    };
    SubpackageLoader.prototype.onHidden = function () {
        this.cancel();
    };
    SubpackageLoader.prototype.click_retry = function () {
        this.btn_retry.node.active = false;
    };
    __decorate([
        property(cc.Label)
    ], SubpackageLoader.prototype, "label_progress", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], SubpackageLoader.prototype, "bar", void 0);
    __decorate([
        property(cc.Label)
    ], SubpackageLoader.prototype, "label", void 0);
    __decorate([
        property(cc.Button)
    ], SubpackageLoader.prototype, "btn_retry", void 0);
    __decorate([
        property(cc.Button)
    ], SubpackageLoader.prototype, "btn_close", void 0);
    SubpackageLoader = __decorate([
        ccclass
    ], SubpackageLoader);
    return SubpackageLoader;
}(cc.Component));
exports.default = SubpackageLoader;

cc._RF.pop();