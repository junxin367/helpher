"use strict";
cc._RF.push(module, 'dc341fggZxGOb4PoTLDQlBi', 'UIFreeProp');
// Game/Scripts/UI/UIFreeProp.ts

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
var ccUtil_1 = require("../../../framework/utils/ccUtil");
var UserInfo_1 = require("../../../framework/extension/weak_net_game/UserInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIFreeProp = /** @class */ (function (_super) {
    __extends(UIFreeProp, _super);
    function UIFreeProp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemLayout = null;
        _this.dialog = null;
        _this.particle = null;
        _this.iconNode = null;
        _this.btn_get = null;
        _this.node_btn_close = null;
        _this.res_names = ["snowball_num", "magnet_num", "gun_num"];
        return _this;
    }
    UIFreeProp.prototype.onLoad = function () {
        this.node_btn_close.active = false;
    };
    UIFreeProp.prototype.onShown = function (callback) {
        var _this = this;
        this.hideCallback = callback;
        var pos = this.itemLayout.position;
        this.dialog.active = false;
        this.itemLayout.setPosition(0, 0);
        this.itemLayout.scale = 0;
        cc.tween(this.itemLayout)
            .to(0.5, { scale: 1 }, { easing: "backInOut" })
            .delay(1.0)
            .to(0.5, { position: pos }, { easing: "sineInOut" })
            .call(function () {
            _this.dialog.active = true;
            _this.dialog.scale = 0;
            cc.tween(_this.dialog).to(0.5, { scale: 1 }, { easing: "sineInOut" }).start();
        })
            .start();
    };
    UIFreeProp.prototype.click_get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var children, i, child;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.btn_get.interactable = false;
                        children = this.itemLayout.children;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 3)) return [3 /*break*/, 4];
                        child = children[i];
                        return [4 /*yield*/, ccUtil_1.default.playFlyCoin(this.particle, child, ccUtil_1.default.getWorldPosition(this.iconNode), ccUtil_1.default.getWorldPosition(child), { num: 1, dur: 0.8 })];
                    case 2:
                        _a.sent();
                        UserInfo_1.UserInfo.addData(this.res_names[i], 3, true);
                        cc.tween(child).to(0.2, { scale: 1.3 }).to(0.1, { scale: 1 }).start();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.node_btn_close.active = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    UIFreeProp.prototype.click_close = function () {
        vm.hide(this);
    };
    UIFreeProp.prototype.onHidden = function () {
        if (this.hideCallback)
            this.hideCallback.call(this);
    };
    __decorate([
        property(cc.Node)
    ], UIFreeProp.prototype, "itemLayout", void 0);
    __decorate([
        property(cc.Node)
    ], UIFreeProp.prototype, "dialog", void 0);
    __decorate([
        property(cc.Node)
    ], UIFreeProp.prototype, "particle", void 0);
    __decorate([
        property(cc.Node)
    ], UIFreeProp.prototype, "iconNode", void 0);
    __decorate([
        property(cc.Button)
    ], UIFreeProp.prototype, "btn_get", void 0);
    __decorate([
        property(cc.Node)
    ], UIFreeProp.prototype, "node_btn_close", void 0);
    UIFreeProp = __decorate([
        ccclass
    ], UIFreeProp);
    return UIFreeProp;
}(cc.Component));
exports.default = UIFreeProp;

cc._RF.pop();