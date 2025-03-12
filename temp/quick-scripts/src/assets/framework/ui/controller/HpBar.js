"use strict";
cc._RF.push(module, '5ec641civBJM6w3EDr17oq7', 'HpBar');
// framework/ui/controller/HpBar.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, executeInEditMode = _a.executeInEditMode;
var HpBar = /** @class */ (function (_super) {
    __extends(HpBar, _super);
    function HpBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._maxHp = 0;
        _this.hpLayout = null;
        _this._hp = 0;
        return _this;
    }
    Object.defineProperty(HpBar.prototype, "maxHp", {
        get: function () {
            return this._maxHp;
        },
        set: function (value) {
            this._maxHp = value;
            this.hpLayout = this.getComponent(cc.Layout);
            var template = this.hpLayout.node.children[0];
            if (this.hpLayout.node.children.length > 1) {
                this.hpLayout.node.removeAllChildren();
                this.hpLayout.node.addChild(template);
            }
            this.hpLayout.showlist(this.createHpNodes.bind(this), range(0, this._maxHp - 1, 1));
            this.updateHp();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HpBar.prototype, "hp", {
        get: function () {
            return this._hp;
        },
        set: function (value) {
            this._hp = value;
            this.updateHp();
        },
        enumerable: false,
        configurable: true
    });
    HpBar.prototype.get = function (i) {
        return this.hpLayout.node.children[i];
    };
    HpBar.prototype.cur = function () {
        var node = this.get(this.hp);
        return node.children[0];
    };
    HpBar.prototype.onLoad = function () {
        this.hpLayout = this.getComponent(cc.Layout);
    };
    HpBar.prototype.createHpNodes = function (node, data, i) {
        node.children[0].active = true;
    };
    HpBar.prototype.updateHp = function () {
        var _this = this;
        var a = this.hpLayout.node.children.forEach(function (v, i) {
            v.children[0].active = i < _this.hp + 1;
        });
    };
    HpBar.prototype.start = function () {
    };
    HpBar.prototype.onDisable = function () {
    };
    __decorate([
        property()
    ], HpBar.prototype, "_maxHp", void 0);
    __decorate([
        property()
    ], HpBar.prototype, "maxHp", null);
    __decorate([
        property
    ], HpBar.prototype, "_hp", void 0);
    __decorate([
        property
    ], HpBar.prototype, "hp", null);
    HpBar = __decorate([
        ccclass,
        executeInEditMode(),
        menu("Controller/HpBar")
    ], HpBar);
    return HpBar;
}(cc.Component));
exports.default = HpBar;

cc._RF.pop();