"use strict";
cc._RF.push(module, 'e15c4lULtJElJBzayTDrBtU', 'UICollection');
// Game/Scripts/UI/UICollection.ts

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
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UICollection = /** @class */ (function (_super) {
    __extends(UICollection, _super);
    function UICollection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.btn_sidebar = null;
        return _this;
    }
    UICollection.prototype.onLoad = function () {
        var _this = this;
        this.onClick(this.btn_close, function (_) { return _this.click_close(); });
        this.onClick(this.btn_sidebar, function (_) { return _this.click_sidebar(); });
        this.onClick(this.btn_claim, function (_) { return _this.click_claim(); });
        this.onVisible(this.btn_claim, function () { return !PlayerInfo_1.PlayerInfo.isFavClaimed && _this.type == "claim"; });
        this.onVisible(this.btn_claim, function () { return _this.type == "sidebar"; });
    };
    UICollection.prototype.onShow = function (type) {
        this.type = type;
        this.render();
    };
    UICollection.prototype.click_close = function () {
        vm.hide(this);
    };
    UICollection.prototype.click_claim = function () {
        PlayerInfo_1.PlayerInfo.claimFav();
        this.render();
    };
    UICollection.prototype.click_sidebar = function () {
        tt.navigateToScene({
            scene: "sidebar",
            success: function (res) {
                console.log("navigate to scene success");
                // 跳转成功回调逻辑
            },
            fail: function (res) {
                console.log("navigate to scene fail: ", res);
                // 跳转失败回调逻辑
            },
        });
    };
    __decorate([
        property(cc.Node)
    ], UICollection.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Node)
    ], UICollection.prototype, "btn_claim", void 0);
    __decorate([
        property(cc.Node)
    ], UICollection.prototype, "btn_sidebar", void 0);
    UICollection = __decorate([
        ccclass
    ], UICollection);
    return UICollection;
}(mvcView_1.default));
exports.default = UICollection;

cc._RF.pop();