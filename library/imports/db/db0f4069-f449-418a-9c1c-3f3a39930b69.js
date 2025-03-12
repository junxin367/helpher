"use strict";
cc._RF.push(module, 'db0f4Bp9ElBipwcPzo5kwtp', 'CrossPad');
// framework/ui/controller/CrossPad.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var Switcher_1 = require("./Switcher");
var Signal_1 = require("../../core/Signal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var CrossPadDir;
(function (CrossPadDir) {
    CrossPadDir[CrossPadDir["Idle"] = 0] = "Idle";
    CrossPadDir[CrossPadDir["Left"] = 1] = "Left";
    CrossPadDir[CrossPadDir["Right"] = 2] = "Right";
    CrossPadDir[CrossPadDir["Up"] = 3] = "Up";
    CrossPadDir[CrossPadDir["Down"] = 4] = "Down";
})(CrossPadDir || (CrossPadDir = {}));
var CrossPad = /** @class */ (function (_super) {
    __extends(CrossPad, _super);
    function CrossPad() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.left = null;
        _this.right = null;
        _this.up = null;
        _this.down = null;
        _this.onTouchUp = new Signal_1.default();
        _this.dirs = [];
        return _this;
        // update (dt) {}
    }
    CrossPad.prototype.start = function () {
        this.switcher = this.getComponentInChildren(Switcher_1.default);
        this.dirs = [this.left, this.right, this.up, this.down];
        for (var i = 0; i < 4; i++) {
            var dir = this.dirs[i];
            dir["dir"] = i + 1;
            dir.on(cc.Node.EventType.TOUCH_END, this.onTouchUpC, this);
            dir.on(cc.Node.EventType.TOUCH_START, this.onTouchDownC, this);
        }
    };
    CrossPad.prototype.onTouchDownC = function (event) {
        var dir = event.target["dir"];
        this.switcher.index = dir;
    };
    CrossPad.prototype.onTouchUpC = function (evt) {
        this.switcher.index = 0;
        var dir = event.target["dir"];
        if (dir == CrossPadDir.Left) {
            console.log("touch left ");
        }
        else if (dir == CrossPadDir.Right) {
            console.log("touch Right ");
        }
        this.onTouchUp.fire(dir);
    };
    CrossPad.Dir = CrossPadDir;
    __decorate([
        property(cc.Node)
    ], CrossPad.prototype, "left", void 0);
    __decorate([
        property(cc.Node)
    ], CrossPad.prototype, "right", void 0);
    __decorate([
        property(cc.Node)
    ], CrossPad.prototype, "up", void 0);
    __decorate([
        property(cc.Node)
    ], CrossPad.prototype, "down", void 0);
    CrossPad = __decorate([
        ccclass,
        menu("Controller/CrossPad")
    ], CrossPad);
    return CrossPad;
}(cc.Component));
exports.default = CrossPad;

cc._RF.pop();