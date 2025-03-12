
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/ui/game/SubpackageLoader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx1aVxcZ2FtZVxcU3VicGFja2FnZUxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBdUM7QUFDdkMscURBQWdEO0FBRTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFBO0FBRXpDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBbUdDO1FBakdHLG9CQUFjLEdBQWEsSUFBSSxDQUFDO1FBR2hDLFNBQUcsR0FBbUIsSUFBSSxDQUFBO1FBRzFCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUk1QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBUTVCLGVBQVMsR0FBVyxJQUFJLGdCQUFNLEVBQUUsQ0FBQztRQUNqQyxXQUFLLEdBQWEsRUFBRSxDQUFBO1FBRXBCLGtCQUFZLEdBQVksSUFBSSxDQUFDOztJQXlFakMsQ0FBQztJQWxGRyxpQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVFLElBQUksSUFBSSxDQUFDLFNBQVM7WUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQU9ELGtDQUFPLEdBQVAsVUFBUSxLQUFVLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNO1FBQzlDLElBQUksQ0FB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LElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUNqQixDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FBQztJQWhHRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzREQUNhO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7aURBQ0M7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDSTtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3VEQUNRO0lBSTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dURBQ1E7SUFmWCxnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQW1HcEM7SUFBRCx1QkFBQztDQW5HRCxBQW1HQyxDQW5HNkMsRUFBRSxDQUFDLFNBQVMsR0FtR3pEO2tCQW5Hb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpZ25hbCBmcm9tIFwiLi4vLi4vY29yZS9TaWduYWxcIjtcclxuaW1wb3J0IFBsYXRmb3JtIGZyb20gXCIuLi8uLi9leHRlbnNpb24vUGxhdGZvcm1cIjtcclxuXHJcbmxldCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnBhY2thZ2VMb2FkZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWxfcHJvZ3Jlc3M6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBiYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJ0bl9yZXRyeTogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJ0bl9jbG9zZTogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5idG5fcmV0cnkubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuY2xpY2tfcmV0cnksIHRoaXMpO1xyXG4gICAgICAgIGlmICh0aGlzLmJ0bl9jbG9zZSlcclxuICAgICAgICAgICAgdGhpcy5idG5fY2xvc2Uubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuY2xpY2tfY2xvc2UsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VjY2VzczogU2lnbmFsID0gbmV3IFNpZ25hbCgpO1xyXG4gICAgbmFtZXM6IHN0cmluZ1tdID0gW11cclxuXHJcbiAgICBoaWRlT25GaW5pc2g6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIG9uU2hvd24obmFtZXM6IGFueSwgaGlkZU9uRmluaXNoLCBjYWxsYmFjaywgdGFyZ2V0KSB7XHJcbiAgICAgICAgdGhpcy5oaWRlT25GaW5pc2ggPSBoaWRlT25GaW5pc2g7XHJcbiAgICAgICAgdGhpcy5vblN1Y2Nlc3MuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm9uU3VjY2Vzcy5vbihjYWxsYmFjaywgdGFyZ2V0KTtcclxuICAgICAgICB0aGlzLm5hbWVzLnNwbGljZSgwKTtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShuYW1lcykpIHtcclxuICAgICAgICAgICAgdGhpcy5uYW1lcyA9IG5hbWVzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIChuYW1lcykgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aGlzLm5hbWVzLnB1c2gobmFtZXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbU3VicGFja2FnZUxvYWRlcl0gZmFpbCB0byBsb2FkIDogcGFyYW1zIGVycm9yXCIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFydExvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYvuekuiDlvZPliY3kuIvovb0g6L+b5bqmXHJcbiAgICAgKiBAcGFyYW0gbmFtZSDlrZDljIXlkI1cclxuICAgICAqIEBwYXJhbSBwZXJjZW50ICDlvZPliY3ov5vluqYgeC8xMDBcclxuICAgICAqIEBwYXJhbSBjIOS4i+i9veWtl+iKguaVsFxyXG4gICAgICogQHBhcmFtIHQg5oC75LiL6L295a2X6IqC5pWwIFxyXG4gICAgICovXHJcbiAgICBzaG93U3RhdHVzKG5hbWUsIHBlcmNlbnQsIGMsIHQpIHtcclxuICAgICAgICBpZiAodGhpcy5sYWJlbF9wcm9ncmVzcylcclxuICAgICAgICAgICAgdGhpcy5sYWJlbF9wcm9ncmVzcy5zdHJpbmcgPSBwZXJjZW50ICsgXCIlXCJcclxuICAgICAgICBpZiAodGhpcy5iYXIpXHJcbiAgICAgICAgICAgIHRoaXMuYmFyLnByb2dyZXNzID0gcGVyY2VudCAvIDEwMDtcclxuICAgICAgICBpZiAodGhpcy5sYWJlbClcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIuWKoOi9vVtcIiArIG5hbWUgKyBcIl3kuK1cIlxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN0YXJ0TG9hZCgpIHtcclxuICAgICAgICB0aGlzLmJ0bl9yZXRyeS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnRuX2Nsb3NlLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm5hbWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IHRoaXMubmFtZXNbaV07XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBQbGF0Zm9ybS5sb2FkU3ViUGFja2FnZShuYW1lLCAocCwgYywgdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1N0YXR1cyhuYW1lLCBwLCBjLCB0KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vblN1Y2Nlc3MuZmlyZSh0aGlzKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGlkZU9uRmluaXNoKSB7XHJcbiAgICAgICAgICAgICAgICB2bS5oaWRlKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sYWJlbClcclxuICAgICAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gXCLliqDovb3lpLHotKUs6K+354K55Ye76YeN6K+VIVwiXHJcbiAgICAgICAgICAgIHRoaXMuYnRuX3JldHJ5Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idG5fY2xvc2Uubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWwoKSB7XHJcbiAgICAgICAgdGhpcy5vblN1Y2Nlc3MuY2xlYXIoKVxyXG4gICAgICAgIHZtLmhpZGUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tfY2xvc2UoKSB7XHJcbiAgICAgICAgdm0uaGlkZSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkhpZGRlbigpIHtcclxuICAgICAgICB0aGlzLmNhbmNlbCgpXHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tfcmV0cnkoKSB7XHJcbiAgICAgICAgdGhpcy5idG5fcmV0cnkubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxufSJdfQ==