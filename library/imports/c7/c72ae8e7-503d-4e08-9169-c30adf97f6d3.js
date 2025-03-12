"use strict";
cc._RF.push(module, 'c72aejnUD1OCJFpwwrfl/bT', 'UIGetLuckyItem');
// Game/Scripts/UI/UIGetLuckyItem.ts

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
var ccUtil_1 = require("../../../framework/utils/ccUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIGetLuckyItem = /** @class */ (function (_super) {
    __extends(UIGetLuckyItem, _super);
    function UIGetLuckyItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tiliLabel = null;
        _this.icon = null;
        return _this;
    }
    UIGetLuckyItem.prototype.onLaterRender = function () {
        var data = this.getData();
        this.tiliLabel.string = data.content + "x" + data.num;
        ccUtil_1.default.setDisplay(this.icon, data.path);
    };
    __decorate([
        property(cc.Label)
    ], UIGetLuckyItem.prototype, "tiliLabel", void 0);
    __decorate([
        property(cc.Sprite)
    ], UIGetLuckyItem.prototype, "icon", void 0);
    UIGetLuckyItem = __decorate([
        ccclass
    ], UIGetLuckyItem);
    return UIGetLuckyItem;
}(mvcView_1.default));
exports.default = UIGetLuckyItem;

cc._RF.pop();