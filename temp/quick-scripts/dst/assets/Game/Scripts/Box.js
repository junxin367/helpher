
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Box.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c126i1qjBAroThxPAYe8kc', 'Box');
// Game/Scripts/Box.ts

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
var SkeletonBase_1 = require("./SkeletonBase");
var event_1 = require("../../framework/core/event");
var ccUtil_1 = require("../../framework/utils/ccUtil");
var ToastManager_1 = require("../../framework/ui/ToastManager");
var Device_1 = require("../../framework/misc/Device");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ani_node = null;
        // LIFE-CYCLE CALLBACKS:
        _this.open_status = false;
        _this.isover = false;
        return _this;
        // update (dt) {}
    }
    Box.prototype.onLoad = function () {
    };
    Box.prototype.start = function () {
    };
    Box.prototype.onBeginContact = function () {
        if (this.node.name == "box") {
            if (this.isover) {
                return;
            }
            this.isover = true;
            this.onOpenBox();
        }
        else {
            this.onOpenjiaBox();
        }
    };
    Box.prototype.onOpenBox = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.ani_node.active = true;
                        return [4 /*yield*/, event_1.evt.sleep(1)];
                    case 1:
                        _a.sent();
                        Device_1.default.playSfx("open-box");
                        vm.show("Prefabs/UI/UIBoxAward");
                        return [2 /*return*/];
                }
            });
        });
    };
    Box.prototype.onOpenjiaBox = function () {
        if (this.open_status)
            return;
        var spr = this.node.getComponent(cc.Sprite);
        ccUtil_1.default.setDisplay(spr, "Img/" + spr.spriteFrame.name + "_kong");
        this.open_status = true;
        ToastManager_1.Toast.make("可惜。。。箱子是空的");
    };
    Box.prototype.onDestroy = function () {
        event_1.evt.off(this);
    };
    __decorate([
        property(cc.Node)
    ], Box.prototype, "ani_node", void 0);
    Box = __decorate([
        ccclass
    ], Box);
    return Box;
}(SkeletonBase_1.default));
exports.default = Box;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcQm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEwQztBQUMxQyxvREFBaUQ7QUFDakQsdURBQWtEO0FBQ2xELGdFQUF3RDtBQUN4RCxzREFBaUQ7QUFFM0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUMsdUJBQVk7SUFBN0M7UUFBQSxxRUFtREM7UUFoREcsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6Qix3QkFBd0I7UUFFeEIsaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFFN0IsWUFBTSxHQUFZLEtBQUssQ0FBQzs7UUF5Q3hCLGlCQUFpQjtJQUNyQixDQUFDO0lBeENHLG9CQUFNLEdBQU47SUFDQSxDQUFDO0lBRUQsbUJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCw0QkFBYyxHQUFkO1FBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLEVBQUU7WUFDekIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNiLE9BQU87YUFDVjtZQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNwQjthQUNJO1lBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVLLHVCQUFTLEdBQWY7Ozs7O3dCQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt3QkFDNUIscUJBQU0sV0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQWxCLFNBQWtCLENBQUE7d0JBQ2xCLGdCQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO3dCQUMxQixFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7Ozs7O0tBQ3BDO0lBRUQsMEJBQVksR0FBWjtRQUNJLElBQUksSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBQzdCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUMzQyxnQkFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsTUFBTSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLG9CQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCx1QkFBUyxHQUFUO1FBQ0ksV0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBN0NEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ087SUFIUixHQUFHO1FBRHZCLE9BQU87T0FDYSxHQUFHLENBbUR2QjtJQUFELFVBQUM7Q0FuREQsQUFtREMsQ0FuRGdDLHNCQUFZLEdBbUQ1QztrQkFuRG9CLEdBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2tlbGV0b25CYXNlIGZyb20gXCIuL1NrZWxldG9uQmFzZVwiO1xyXG5pbXBvcnQgeyBldnQgfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL2NvcmUvZXZlbnRcIjtcclxuaW1wb3J0IGNjVXRpbCBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3V0aWxzL2NjVXRpbFwiO1xyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdWkvVG9hc3RNYW5hZ2VyXCI7XHJcbmltcG9ydCBEZXZpY2UgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9taXNjL0RldmljZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJveCBleHRlbmRzIFNrZWxldG9uQmFzZSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBhbmlfbm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb3Blbl9zdGF0dXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBpc292ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PSBcImJveFwiKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzb3Zlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaXNvdmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5vbk9wZW5Cb3goKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub25PcGVuamlhQm94KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uT3BlbkJveCgpIHtcclxuICAgICAgICB0aGlzLmFuaV9ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgYXdhaXQgZXZ0LnNsZWVwKDEpXHJcbiAgICAgICAgRGV2aWNlLnBsYXlTZngoXCJvcGVuLWJveFwiKVxyXG4gICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJQm94QXdhcmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25PcGVuamlhQm94KCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9wZW5fc3RhdHVzKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHNwciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgICAgIGNjVXRpbC5zZXREaXNwbGF5KHNwciwgXCJJbWcvXCIgKyBzcHIuc3ByaXRlRnJhbWUubmFtZSArIFwiX2tvbmdcIik7XHJcbiAgICAgICAgdGhpcy5vcGVuX3N0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgVG9hc3QubWFrZShcIuWPr+aDnOOAguOAguOAgueuseWtkOaYr+epuueahFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgZXZ0Lm9mZih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==