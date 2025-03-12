"use strict";
cc._RF.push(module, '2f693J3bUFBQbn7+A7Ga7gi', 'UIDecorateItem');
// Game/Scripts/UI/UIDecorateItem.ts

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
var Switcher_1 = require("../../../framework/ui/controller/Switcher");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var event_1 = require("../../../framework/core/event");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var UIPersonSkin_1 = require("./UIPersonSkin");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StatusIndex;
(function (StatusIndex) {
    StatusIndex[StatusIndex["Choosed"] = 0] = "Choosed";
    StatusIndex[StatusIndex["Unlocked"] = 1] = "Unlocked";
    StatusIndex[StatusIndex["Locked"] = 2] = "Locked";
})(StatusIndex || (StatusIndex = {}));
var Choosed_Color = new cc.Color().fromHEX("#FFFBDA");
var Name_Color = new cc.Color().fromHEX("#504B68");
var Unlock_Color = new cc.Color().fromHEX("#82FF52");
var UIDecorateItem = /** @class */ (function (_super) {
    __extends(UIDecorateItem, _super);
    function UIDecorateItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nameLabel = null;
        _this.switcher = null;
        _this.icon = null;
        _this.btn_select = null;
        _this.btn_unlock = null;
        _this.btn_choosed = null;
        _this.redPoint = null;
        return _this;
    }
    UIDecorateItem.prototype.onLoad = function () {
        var _this = this;
        this.register(this.switcher, function (data) {
            _this.node.color = cc.Color.WHITE;
            _this.btn_unlock.node.color = cc.Color.WHITE;
            _this.node.opacity = 255;
            if (PlayerInfo_1.PlayerInfo.isDecorateUnlocked(data.id)) {
                //已解锁 
                if (PlayerInfo_1.PlayerInfo.isDecorateUsing(data.id)) {
                    _this.node.color = Choosed_Color;
                    return StatusIndex.Choosed;
                }
                else {
                    return StatusIndex.Unlocked;
                }
            }
            else {
                //未解锁 状态 
                var unlock = _this.canUnlock();
                // ccUtil.setButtonEnabled(this.btn_unlock, unlock);
                _this.redPoint.active = unlock;
                if (!unlock) {
                    _this.node.opacity = 222;
                }
                else {
                    _this.btn_unlock.interactable = false;
                    _this.btn_unlock.node.color = Unlock_Color;
                }
                // this.nameLabel.node.color = cc.Color.RED;
                return StatusIndex.Locked;
            }
        });
        this.register(this.nameLabel, function (data) {
            return data.name;
        });
        this.register(this.icon, function (data) {
            cc.log("" + data.thumbnail);
            return data.thumbnail ? "Img/decorate/thumbnail/" + data.thumbnail : '';
        });
        this.register(this.btn_unlock, this.click_unlock);
        this.register(this.btn_select, this.click_select);
        this.register(this.btn_choosed, this.click_choosed);
    };
    /**j是否可以解锁  */
    UIDecorateItem.prototype.canUnlock = function () {
        return false;
    };
    UIDecorateItem.prototype.unlock = function () {
        var d = this.getData();
        PlayerInfo_1.PlayerInfo.unlockDecorate(d.id);
        ToastManager_1.Toast.make("已解锁：" + d.name);
        this.render(d);
    };
    UIDecorateItem.prototype.onvideocallback = function () {
        this.unlock();
    };
    UIDecorateItem.prototype.click_unlock = function () {
        var data = this.getData();
        if (this.canUnlock()) {
            PlayerInfo_1.PlayerInfo.unlockDecorate(data.id);
            ToastManager_1.Toast.make("已解锁：" + data.name);
            event_1.evt.emit('UISkin.checkLock');
            this.render(data);
        }
    };
    UIDecorateItem.prototype.click_select = function () {
        var data = this.getData();
        if (PlayerInfo_1.PlayerInfo.isDecorateUnlocked(data.id)) {
            PlayerInfo_1.PlayerInfo.useDecorate(data.id);
            // this.render(data);
            //选择需要 取消选择其它同类项目
            event_1.evt.emit('Decorate.select', data);
        }
    };
    UIDecorateItem.prototype.click_choosed = function () {
        var data = this.getData();
        if (data.type === UIPersonSkin_1.DecorateType.BaiJian) {
            PlayerInfo_1.PlayerInfo.collections[data.id] = 1;
            PlayerInfo_1.PlayerInfo.save();
            // this.render();
            //选择需要 取消选择其它同类项目
            event_1.evt.emit('Decorate.select', data);
        }
    };
    __decorate([
        property(cc.Label)
    ], UIDecorateItem.prototype, "nameLabel", void 0);
    __decorate([
        property(Switcher_1.default)
    ], UIDecorateItem.prototype, "switcher", void 0);
    __decorate([
        property(cc.Sprite)
    ], UIDecorateItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Button)
    ], UIDecorateItem.prototype, "btn_select", void 0);
    __decorate([
        property(cc.Button)
    ], UIDecorateItem.prototype, "btn_unlock", void 0);
    __decorate([
        property(cc.Button)
    ], UIDecorateItem.prototype, "btn_choosed", void 0);
    __decorate([
        property(cc.Node)
    ], UIDecorateItem.prototype, "redPoint", void 0);
    UIDecorateItem = __decorate([
        ccclass
    ], UIDecorateItem);
    return UIDecorateItem;
}(mvcView_1.default));
exports.default = UIDecorateItem;

cc._RF.pop();