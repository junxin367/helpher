"use strict";
cc._RF.push(module, 'afdeeOTHcZAoo9wQLgzmKVQ', 'UIPropItem');
// Game/Scripts/UI/UIPropItem.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var WeakNetGame_1 = require("../../../framework/extension/weak_net_game/WeakNetGame");
var UserInfo_1 = require("../../../framework/extension/weak_net_game/UserInfo");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIPropItem = /** @class */ (function (_super) {
    __extends(UIPropItem, _super);
    function UIPropItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.desc_label = null;
        _this.count_label = null;
        _this.icon = null;
        _this.btn_get = null;
        // LIFE-CYCLE CALLBACKS:
        _this.data = null;
        _this.propList = {
            1: "gun_num",
            2: "snowball_num",
            3: "magnet_num"
        };
        return _this;
        // update (dt) {}
    }
    UIPropItem.prototype.onLoad = function () {
        this.register(this.desc_label, function (_) { return _.desc; });
        this.register(this.icon, function (_) { return _.icon; });
    };
    UIPropItem.prototype.start = function () {
        this.data = this.getData();
        this.count_label.string = UserInfo_1.UserInfo[this.propList[this.data.id]];
    };
    UIPropItem.prototype.click_get = function () {
        var _this = this;
        WeakNetGame_1.default.doChoice("SOV_GetPropItem", function (_) {
            UserInfo_1.UserInfo[_this.propList[_this.data.id]] += 2;
            ToastManager_1.Toast.make("已领取" + _this.data.name);
            _this.count_label.string = UserInfo_1.UserInfo[_this.propList[_this.data.id]];
            UserInfo_1.UserInfo.save();
        }, this);
    };
    __decorate([
        property(cc.Label)
    ], UIPropItem.prototype, "desc_label", void 0);
    __decorate([
        property(cc.Label)
    ], UIPropItem.prototype, "count_label", void 0);
    __decorate([
        property(cc.Sprite)
    ], UIPropItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Node)
    ], UIPropItem.prototype, "btn_get", void 0);
    UIPropItem = __decorate([
        ccclass
    ], UIPropItem);
    return UIPropItem;
}(mvcView_1.default));
exports.default = UIPropItem;

cc._RF.pop();