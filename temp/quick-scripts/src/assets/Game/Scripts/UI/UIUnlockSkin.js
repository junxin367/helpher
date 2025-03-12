"use strict";
cc._RF.push(module, '82fd0OPCltNVZ97it2ny6YA', 'UIUnlockSkin');
// Game/Scripts/UI/UIUnlockSkin.ts

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
var UIPersonSkin_1 = require("./UIPersonSkin");
var event_1 = require("../../../framework/core/event");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIUnlockSkin = /** @class */ (function (_super) {
    __extends(UIUnlockSkin, _super);
    function UIUnlockSkin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.shouzhi = null;
        _this.data = null;
        return _this;
    }
    UIUnlockSkin.prototype.onLoad = function () {
        var _this = this;
        this.register(this.icon, function (_) { return "Img/skin/thumbnail/" + _this.data.type + "/" + _this.data.thumbnail; });
    };
    UIUnlockSkin.prototype.onShow = function (id) {
        this.data = csv.Skin.get(id);
        this.render();
        // 第一次引导解锁 穿戴皮肤
        // if (UserInfo.skin_guide === 0 && id === 20) {
        //     this.shouzhi.node.active = true;
        //     this.shouzhi.play();
        // }
    };
    UIUnlockSkin.prototype.click_tomain = function () {
        // if (!(this.data.subType === 5 || this.data.subType === 6)) {
        //     PlayerInfo.unlockSkin(this.data.id);
        // }
        if (this.data.subType === UIPersonSkin_1.SkinType.Theme || this.data.subType === UIPersonSkin_1.SkinType.Key) {
            vm.hide(this);
            vm.show("Prefabs/UI/UISkin");
        }
        else {
            event_1.evt.emit("Main.skin");
        }
    };
    UIUnlockSkin.prototype.click_close = function () {
        this.data && this.data.id && PlayerInfo_1.PlayerInfo.unlockSkin(this.data.id);
        vm.hide(this);
    };
    __decorate([
        property(cc.Sprite)
    ], UIUnlockSkin.prototype, "icon", void 0);
    __decorate([
        property(cc.Animation)
    ], UIUnlockSkin.prototype, "shouzhi", void 0);
    UIUnlockSkin = __decorate([
        ccclass
    ], UIUnlockSkin);
    return UIUnlockSkin;
}(mvcView_1.default));
exports.default = UIUnlockSkin;

cc._RF.pop();