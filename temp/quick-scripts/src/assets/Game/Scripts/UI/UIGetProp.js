"use strict";
cc._RF.push(module, '5faf3qgeh5N+J+UZZigl45H', 'UIGetProp');
// Game/Scripts/UI/UIGetProp.ts

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
var mvcView_1 = require("../../../framework/ui/mvcView");
var PropInfo_1 = require("../Common/PropInfo");
var ccUtil_1 = require("../../../framework/utils/ccUtil");
var Const_1 = require("../Common/Const");
var actionUtil_1 = require("../../../framework/utils/actionUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIGetProp = /** @class */ (function (_super) {
    __extends(UIGetProp, _super);
    function UIGetProp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.propsData = [];
        return _this;
    }
    UIGetProp.prototype.onLoad = function () {
        var _this = this;
        this.register(this.layout, function (_) { return _this.propsData; });
        this.propsData = csv.Prop.values.map(function (e) {
            var data = ccUtil_1.default.get(PropInfo_1.PropInfo, e.id);
            if (data.id <= Const_1.default.Chapter_Unlock + 1)
                return data;
        });
        this.render();
    };
    UIGetProp.prototype.onShow = function (num) {
        actionUtil_1.default.jellyJump2(this.node);
    };
    UIGetProp.prototype.click_close = function () {
        vm.hide(this);
    };
    UIGetProp.prototype.onHidden = function () {
    };
    __decorate([
        property(cc.Layout)
    ], UIGetProp.prototype, "layout", void 0);
    __decorate([
        property(cc.Sprite)
    ], UIGetProp.prototype, "title_sprite", void 0);
    UIGetProp = __decorate([
        ccclass
    ], UIGetProp);
    return UIGetProp;
}(mvcView_1.default));
exports.default = UIGetProp;

cc._RF.pop();