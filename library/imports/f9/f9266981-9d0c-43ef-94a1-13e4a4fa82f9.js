"use strict";
cc._RF.push(module, 'f9266mBnQxD75ShE+Sk+oL5', 'UISkinItem');
// Game/Scripts/UI/UISkinItem.ts

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
var Platform_1 = require("../../../framework/extension/Platform");
var event_1 = require("../../../framework/core/event");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var UISkin_1 = require("./UISkin");
var UserInfo_1 = require("../../../framework/extension/weak_net_game/UserInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SkinUnlockType;
(function (SkinUnlockType) {
    SkinUnlockType[SkinUnlockType["Level"] = 1] = "Level";
    SkinUnlockType[SkinUnlockType["Star"] = 2] = "Star";
    SkinUnlockType[SkinUnlockType["Video"] = 3] = "Video";
    SkinUnlockType[SkinUnlockType["Default"] = 4] = "Default";
})(SkinUnlockType || (SkinUnlockType = {}));
var StatusIndex;
(function (StatusIndex) {
    StatusIndex[StatusIndex["Choosed"] = 0] = "Choosed";
    StatusIndex[StatusIndex["Locked"] = 1] = "Locked";
    StatusIndex[StatusIndex["UnlockVideo"] = 2] = "UnlockVideo";
    StatusIndex[StatusIndex["Unlocked"] = 3] = "Unlocked";
})(StatusIndex || (StatusIndex = {}));
var Choosed_Color = new cc.Color().fromHEX("#FFFBDA");
var Name_Color = new cc.Color().fromHEX("#504B68");
var Unlock_Color = new cc.Color().fromHEX("#82FF52");
var UISKinItem = /** @class */ (function (_super) {
    __extends(UISKinItem, _super);
    function UISKinItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nameLabel = null;
        _this.switcher = null;
        //unlock condition
        _this.unlockDesc = null;
        _this.unlockIcon = null;
        _this.icon = null;
        _this.btn_unlock_video = null;
        _this.btn_unlock = null;
        _this.btn_select = null;
        _this.redPoint = null;
        return _this;
    }
    UISKinItem.prototype.onLoad = function () {
        var _this = this;
        event_1.evt.on("Guide.unlockSkin", this.onGuideUnlock, this);
        event_1.evt.on("Guide.useSkin", this.onGuideSelect, this);
        this.register(this.switcher, function (data) {
            _this.node.color = cc.Color.WHITE;
            _this.btn_unlock.node.color = cc.Color.WHITE;
            _this.node.opacity = 255;
            if (PlayerInfo_1.PlayerInfo.isSkinUnlocked(data.id)) {
                //已解锁 
                if (PlayerInfo_1.PlayerInfo.isSkinUsing(data.id)) {
                    _this.node.color = Choosed_Color;
                    return StatusIndex.Choosed;
                }
                else {
                    return StatusIndex.Unlocked;
                }
            }
            else {
                //未解锁 状态 
                if (data.unlockType == SkinUnlockType.Video) {
                    return StatusIndex.UnlockVideo;
                }
                else {
                    if (data.unlockType == SkinUnlockType.Level || data.unlockType == SkinUnlockType.Star) {
                        var unlock = _this.canUnlock();
                        // ccUtil.setButtonEnabled(this.btn_unlock, unlock)
                        _this.redPoint.active = unlock;
                        if (!unlock) {
                            _this.node.opacity = 222;
                        }
                        else {
                            _this.btn_unlock.node.color = Unlock_Color;
                        }
                    }
                    // this.nameLabel.node.color = cc.Color.RED;
                    return StatusIndex.Locked;
                }
            }
            return StatusIndex.Choosed;
        });
        this.register(this.unlockDesc, function (data) {
            if (data.unlockType == SkinUnlockType.Star) {
                return " x" + data.unlock2 + "颗解锁";
            }
            else {
                return "Lv" + data.unlock1 + '关解锁 ';
            }
        });
        this.register(this.nameLabel, function (data) {
            return data.name;
        });
        this.register(this.icon, function (data) { return "Img/skin/thumbnail/" + data.type + "/" + data.thumbnail; });
        this.onVisible(this.unlockIcon.node, function (data) { return data.unlockType == SkinUnlockType.Star; });
        // this.register<csv.Skin_Row>(this.unlockIcon, (data) => {
        //     if (data.unlockType == SkinUnlockType.Star) {
        //         return 'Img/main/star';
        //     } else if (data.unlockType == SkinUnlockType.Level) {
        //         return '';
        //     }
        // })
        this.register(this.btn_unlock_video, this.click_unlockvideo);
        this.register(this.btn_unlock, this.click_unlock);
        this.register(this.btn_select, this.click_select);
    };
    UISKinItem.prototype.onDestroy = function () {
        event_1.evt.off(this);
    };
    /**j是否可以解锁  */
    UISKinItem.prototype.canUnlock = function () {
        var d = this.getData();
        if (d.unlockType == SkinUnlockType.Level && PlayerInfo_1.PlayerInfo.level >= d.unlock1) {
            return true;
        }
        else if (d.unlockType == SkinUnlockType.Star && PlayerInfo_1.PlayerInfo.star >= d.unlock2) {
            return true;
        }
        else if (d.unlockType == SkinUnlockType.Video) {
            return true;
        }
        return false;
    };
    UISKinItem.prototype.click_unlockvideo = function () {
        Platform_1.default.watch_video(this.onvideocallback, this);
    };
    UISKinItem.prototype.unlock = function () {
        var d = this.getData();
        PlayerInfo_1.PlayerInfo.unlockSkin(d.id);
        ToastManager_1.Toast.make("已解锁：" + d.name);
        this.render(d);
    };
    UISKinItem.prototype.onvideocallback = function () {
        this.unlock();
    };
    UISKinItem.prototype.click_unlock = function () {
        var data = this.getData();
        if (this.canUnlock()) {
            PlayerInfo_1.PlayerInfo.unlockSkin(data.id);
            ToastManager_1.Toast.make("已解锁：" + data.name);
            event_1.evt.emit('UISkin.checkLock');
            this.render(data);
        }
        else {
            if (data.unlockType == 1) {
                ToastManager_1.Toast.make("达到" + data.unlock1 + "关解锁");
            }
            else if (data.unlockType == 2) {
                ToastManager_1.Toast.make("获取" + data.unlock2 + "颗星星解锁");
            }
        }
    };
    UISKinItem.prototype.click_select = function () {
        var data = this.getData();
        // if (UserInfo.skin_guide === 0 && data.id === 20) { // 初次解锁引导
        //     UserInfo.skin_guide = 1;
        //     UserInfo.save('skin_guide');
        // }
        if (data.type == UISkin_1.SkinType.Theme) {
            UserInfo_1.UserInfo.theme = data.data;
        }
        else {
            if (PlayerInfo_1.PlayerInfo.isSkinUnlocked(data.id)) {
                PlayerInfo_1.PlayerInfo.useSkin(data.id);
                this.render(data);
                //选择需要 取消选择其它同类项目
                event_1.evt.emit('Skin.select', data);
            }
        }
    };
    UISKinItem.prototype.click_unlockstar = function () {
    };
    UISKinItem.prototype.onGuideUnlock = function () {
        var data = this.getData();
        data && data.id === 20 && this.click_unlock();
    };
    UISKinItem.prototype.onGuideSelect = function () {
        var data = this.getData();
        data && data.id === 20 && this.click_select();
    };
    __decorate([
        property(cc.Label)
    ], UISKinItem.prototype, "nameLabel", void 0);
    __decorate([
        property(Switcher_1.default)
    ], UISKinItem.prototype, "switcher", void 0);
    __decorate([
        property(cc.Label)
    ], UISKinItem.prototype, "unlockDesc", void 0);
    __decorate([
        property(cc.Sprite)
    ], UISKinItem.prototype, "unlockIcon", void 0);
    __decorate([
        property(cc.Sprite)
    ], UISKinItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Button)
    ], UISKinItem.prototype, "btn_unlock_video", void 0);
    __decorate([
        property(cc.Button)
    ], UISKinItem.prototype, "btn_unlock", void 0);
    __decorate([
        property(cc.Button)
    ], UISKinItem.prototype, "btn_select", void 0);
    __decorate([
        property(cc.Node)
    ], UISKinItem.prototype, "redPoint", void 0);
    UISKinItem = __decorate([
        ccclass
    ], UISKinItem);
    return UISKinItem;
}(mvcView_1.default));
exports.default = UISKinItem;

cc._RF.pop();