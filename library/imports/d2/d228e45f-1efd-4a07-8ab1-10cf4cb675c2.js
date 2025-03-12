"use strict";
cc._RF.push(module, 'd228eRfHv1KB4qxEM9MtnXC', 'Switcher');
// framework/ui/controller/Switcher.ts

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
var Signal_1 = require("../../core/Signal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, executeInEditMode = _a.executeInEditMode, inspector = _a.inspector;
var Switcher = /** @class */ (function (_super) {
    __extends(Switcher, _super);
    function Switcher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.children = null;
        _this.onValueChanged = new Signal_1.default();
        _this._childrenCount = 0;
        _this._currentIndex = 0;
        _this.interactable = false;
        _this._currentChild = null;
        _this.btn = null;
        return _this;
    }
    Object.defineProperty(Switcher.prototype, "currentIndex", {
        get: function () {
            return this._currentIndex;
        },
        set: function (value) {
            value = cc.misc.clampf(value, 0, this.children.length - 1);
            value = Math.floor(value);
            this._select(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Switcher.prototype, "index", {
        get: function () {
            return this.currentIndex;
        },
        set: function (index) {
            if (!this.children) {
                this._currentIndex = index;
            }
            if (this.currentIndex != index) {
                this._select(index);
                this.onValueChanged.fire(index);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Switcher.prototype, "resizeToCurrent", {
        set: function (v) {
            if (v) {
                this.node.setContentSize(this._currentChild.getContentSize());
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Switcher.prototype, "_checkInteractive", {
        set: function (v) {
            if (v) {
                this.btn = this.getComponent(cc.Button);
                if (this.btn == null) {
                    this.btn = this.addComponent(cc.Button);
                    this.btn.target = this._currentChild;
                    var evt = new cc.Component.EventHandler();
                    evt.target = this.node;
                    evt.component = "Switcher";
                    evt.handler = "switch";
                    this.btn.clickEvents.push(evt);
                }
            }
            else {
                if (this.btn) {
                    this.btn.destroy();
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Switcher.prototype.onLoad = function () {
        // this._currentIndex = this.children.indexOf(this.currentActiveNode);
    };
    Switcher.prototype.resetInEditor = function () {
    };
    Switcher.prototype.start = function () {
        this.children = this.node.children;
        this._childrenCount = this.children.length;
        this._select(this.currentIndex);
        // this.resizeToCurrent = true;
        this._checkInteractive = this.interactable;
    };
    Switcher.prototype._select = function (index) {
        this._currentIndex = index;
        this._currentChild = this.children[index];
        for (var i = 0; i < this.children.length; i++) {
            var element = this.children[i];
            if (i == index) {
                element.active = true;
            }
            else {
                element.active = false;
            }
        }
    };
    Switcher.prototype.switch = function () {
        this.index = (this.currentIndex + 1) % (this._childrenCount);
    };
    __decorate([
        property()
    ], Switcher.prototype, "_childrenCount", void 0);
    __decorate([
        property()
    ], Switcher.prototype, "_currentIndex", void 0);
    __decorate([
        property({ displayName: "交互" })
    ], Switcher.prototype, "interactable", void 0);
    __decorate([
        property({ displayName: "当前值" })
    ], Switcher.prototype, "currentIndex", null);
    __decorate([
        property(cc.Node)
    ], Switcher.prototype, "_currentChild", void 0);
    Switcher = __decorate([
        ccclass,
        menu("Controller/Switcher"),
        executeInEditMode(),
        inspector("packages://qcontroller/inspector/switcher.js")
    ], Switcher);
    return Switcher;
}(cc.Component));
exports.default = Switcher;

cc._RF.pop();