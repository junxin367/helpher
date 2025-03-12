
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/guide/Guide0.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcZ3VpZGVcXEd1aWRlMC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBbUQ7QUFFL0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUE7QUFFekM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFnRUM7UUE5REcsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixTQUFHLEdBQVksSUFBSSxDQUFDO1FBQ3BCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFhLElBQUksQ0FBQTs7SUEwRDdCLENBQUM7SUF4REcsdUJBQU0sR0FBTjtRQUNJLDRDQUE0QztRQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3RELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3hELENBQUM7SUFFRCxzQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxxQkFBSSxHQUFKO1FBQ0ksV0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUMxQixDQUFDO0lBRUQsb0JBQUcsR0FBSCxVQUFJLEdBQVcsRUFBRSxDQUFFLEVBQUUsQ0FBRTtRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQscUJBQUksR0FBSjtRQUFLLGVBQVE7YUFBUixVQUFRLEVBQVIscUJBQVEsRUFBUixJQUFRO1lBQVIsMEJBQVE7O1FBQ1QsS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUU7WUFDakIsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQztJQUNELHFCQUFJLEdBQUo7UUFBSyxlQUFRO2FBQVIsVUFBUSxFQUFSLHFCQUFRLEVBQVIsSUFBUTtZQUFSLDBCQUFROztRQUNULEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQixDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNuQjtJQUNMLENBQUM7SUFFSyx3QkFBTyxHQUFiOzs7Ozt3QkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTt3QkFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDdEIscUJBQU0sV0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBQTs7d0JBQS9CLFNBQStCLENBQUE7d0JBQy9CLFdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7d0JBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQzt3QkFDN0IscUJBQU0sV0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBQTs7d0JBQS9CLFNBQStCLENBQUE7d0JBQy9CLFdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7d0JBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO3dCQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTt3QkFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO3dCQUM5QixhQUFhO3dCQUNiLDZCQUE2Qjt3QkFDN0IscUJBQU0sV0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQzs0QkFDcEMsK0JBQStCOzBCQURLOzt3QkFGcEMsYUFBYTt3QkFDYiw2QkFBNkI7d0JBQzdCLFNBQW9DLENBQUE7d0JBQ3BDLCtCQUErQjt3QkFDL0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7NEJBQ25CLHNCQUFPO3lCQUNWO3dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzs7Ozs7S0FDdEQ7SUEvRGdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FnRTFCO0lBQUQsYUFBQztDQWhFRCxBQWdFQyxDQWhFbUMsRUFBRSxDQUFDLFNBQVMsR0FnRS9DO2tCQWhFb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV2dCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvY29yZS9ldmVudFwiXHJcblxyXG5sZXQgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvclxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHdWlkZTAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIGhpZ2hsaWdodDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBtc2c6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgY29udGludWU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIG1zZ0xhYmVsOiBjYy5MYWJlbCA9IG51bGxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gZXZ0Lm9uKFwiR2FtZS5rZXlNb3ZlZFwiLCB0aGlzLm9uS2V5TW92ZWQpO1xyXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGlnaGxpZ2h0XCIpXHJcbiAgICAgICAgdGhpcy5tc2cgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtc2dcIilcclxuICAgICAgICB0aGlzLm1zZ0xhYmVsID0gdGhpcy5tc2cuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5jb250aW51ZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbnRpbnVlXCIpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0aW5lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29vbigpIHtcclxuICAgICAgICBldnQuZW1pdChcIkd1aWRlLm5leHRcIilcclxuICAgIH1cclxuXHJcbiAgICB0aXAobXNnOiBzdHJpbmcsIHg/LCB5Pykge1xyXG4gICAgICAgIHRoaXMubXNnTGFiZWwuc3RyaW5nID0gbXNnO1xyXG4gICAgICAgIHRoaXMubXNnLnggPSB4IHx8IHRoaXMubXNnLng7XHJcbiAgICAgICAgdGhpcy5tc2cueSA9IHkgfHwgdGhpcy5tc2cueTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKC4uLm5vZGVzKSB7XHJcbiAgICAgICAgZm9yICh2YXIgayBpbiBub2Rlcykge1xyXG4gICAgICAgICAgICBsZXQgdiA9IG5vZGVzW2tdO1xyXG4gICAgICAgICAgICB2LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNob3coLi4ubm9kZXMpIHtcclxuICAgICAgICBmb3IgKHZhciBrIGluIG5vZGVzKSB7XHJcbiAgICAgICAgICAgIGxldCB2ID0gbm9kZXNba107XHJcbiAgICAgICAgICAgIHYuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcm91dGluZSgpIHtcclxuICAgICAgICB0aGlzLmhpZGUodGhpcy5jb250aW51ZSlcclxuICAgICAgICB0aGlzLnRpcCgn54K55Ye75q2k5aSE5ouU6LW35py65YWzIScpO1xyXG4gICAgICAgIGF3YWl0IGV2dC53YWl0KFwiR2FtZS5rZXlNb3ZlZFwiKVxyXG4gICAgICAgIGV2dC5lbWl0KFwiR2FtZS5rZXlNb3ZlZFwiKVxyXG4gICAgICAgIHRoaXMuaGlkZSh0aGlzLmNvbnRpbnVlLCB0aGlzLmhpZ2hsaWdodCk7XHJcbiAgICAgICAgdGhpcy50aXAoXCLmi5TotbfmiYDmnInnmoTmnLrlhbPvvIzorqnlpbPlranliLDovr7nu4jngrkhXCIpO1xyXG4gICAgICAgIGF3YWl0IGV2dC53YWl0KFwiR2FtZS5rZXlNb3ZlZFwiKVxyXG4gICAgICAgIGV2dC5lbWl0KFwiR2FtZS5rZXlNb3ZlZFwiKVxyXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0LnggPSAtMTAwMDtcclxuICAgICAgICB0aGlzLnNob3codGhpcy5oaWdobGlnaHQpXHJcbiAgICAgICAgdGhpcy50aXAoXCLngrnlh7vku7vmhI/kvY3nva7vvIzlj6/ku6XmlLnlj5jooYzotbDmlrnlkJHlk6YhXCIpO1xyXG4gICAgICAgIC8vcGF1c2Ugcm9sZSBcclxuICAgICAgICAvLyBldnQuZW1pdChcIkdhbWUucGF1c2VSb2xlXCIpXHJcbiAgICAgICAgYXdhaXQgZXZ0LndhaXQoXCJHYW1lLmNoYW5nZVJvbGVEaXJcIilcclxuICAgICAgICAvLyBhd2FpdCBldnQud2FpdChcIkd1aWRlLm5leHRcIilcclxuICAgICAgICBpZiAoIWNjLmlzVmFsaWQodGhpcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhpZGUodGhpcy5tc2csIHRoaXMuY29udGludWUsIHRoaXMuaGlnaGxpZ2h0KTtcclxuICAgIH1cclxufSJdfQ==