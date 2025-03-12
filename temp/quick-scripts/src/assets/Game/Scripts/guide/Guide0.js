"use strict";
cc._RF.push(module, 'dace2JEk6dMlaNuxA5sryEl', 'Guide0');
// Game/Scripts/guide/Guide0.ts

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
var event_1 = require("../../../framework/core/event");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Guide0 = /** @class */ (function (_super) {
    __extends(Guide0, _super);
    function Guide0() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.highlight = null;
        _this.msg = null;
        _this.continue = null;
        _this.msgLabel = null;
        return _this;
    }
    Guide0.prototype.onLoad = function () {
        // evt.on("Game.keyMoved", this.onKeyMoved);
        this.highlight = this.node.getChildByName("highlight");
        this.msg = this.node.getChildByName("msg");
        this.msgLabel = this.msg.getComponentInChildren(cc.Label);
        this.continue = this.node.getChildByName("continue");
    };
    Guide0.prototype.start = function () {
        this.routine();
    };
    Guide0.prototype.goon = function () {
        event_1.evt.emit("Guide.next");
    };
    Guide0.prototype.tip = function (msg, x, y) {
        this.msgLabel.string = msg;
        this.msg.x = x || this.msg.x;
        this.msg.y = y || this.msg.y;
    };
    Guide0.prototype.hide = function () {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        for (var k in nodes) {
            var v = nodes[k];
            v.active = false;
        }
    };
    Guide0.prototype.show = function () {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        for (var k in nodes) {
            var v = nodes[k];
            v.active = true;
        }
    };
    Guide0.prototype.routine = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.hide(this.continue);
                        this.tip('点击此处拔起机关!');
                        return [4 /*yield*/, event_1.evt.wait("Game.keyMoved")];
                    case 1:
                        _a.sent();
                        event_1.evt.emit("Game.keyMoved");
                        this.hide(this.continue, this.highlight);
                        this.tip("拔起所有的机关，让女孩到达终点!");
                        return [4 /*yield*/, event_1.evt.wait("Game.keyMoved")];
                    case 2:
                        _a.sent();
                        event_1.evt.emit("Game.keyMoved");
                        this.highlight.x = -1000;
                        this.show(this.highlight);
                        this.tip("点击任意位置，可以改变行走方向哦!");
                        //pause role 
                        // evt.emit("Game.pauseRole")
                        return [4 /*yield*/, event_1.evt.wait("Game.changeRoleDir")
                            // await evt.wait("Guide.next")
                        ];
                    case 3:
                        //pause role 
                        // evt.emit("Game.pauseRole")
                        _a.sent();
                        // await evt.wait("Guide.next")
                        if (!cc.isValid(this)) {
                            return [2 /*return*/];
                        }
                        this.hide(this.msg, this.continue, this.highlight);
                        return [2 /*return*/];
                }
            });
        });
    };
    Guide0 = __decorate([
        ccclass
    ], Guide0);
    return Guide0;
}(cc.Component));
exports.default = Guide0;

cc._RF.pop();