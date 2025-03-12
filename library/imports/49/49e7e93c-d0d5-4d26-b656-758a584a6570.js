"use strict";
cc._RF.push(module, '49e7ek80NVNJrZWdYpYSmVw', 'ItemsGroupView');
// Game/Scripts/views/ItemsGroupView.ts

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
var Role_1 = require("../Role");
var Effect_1 = require("../Levels/Effect");
var Game_1 = require("../Game");
var UserInfo_1 = require("../../../framework/extension/weak_net_game/UserInfo");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var ViewManager_1 = require("../../../framework/ui/ViewManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemsGroupView = /** @class */ (function (_super) {
    __extends(ItemsGroupView, _super);
    function ItemsGroupView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemsGroupView.prototype.onLoad = function () {
    };
    ItemsGroupView.prototype.start = function () {
        if (!PlayerInfo_1.PlayerInfo.isUnlock_Prop) {
            this.node.active = false;
        }
    };
    /**点击磁铁 */
    ItemsGroupView.prototype.click_magnet = function () {
        if (PlayerInfo_1.PlayerInfo.isPlayingDaily) {
            ToastManager_1.Toast.make("挑战模式不可用");
            return;
        }
        if (UserInfo_1.UserInfo.magnet_num > 0) {
            if (Game_1.default.instance.isUsedMagnet) {
                ToastManager_1.Toast.make("本关使用过了");
            }
            else {
                Game_1.default.instance.isUsedMagnet = true;
                UserInfo_1.UserInfo.magnet_num -= 1;
                Effect_1.default.do_magnet();
            }
        }
        else {
            ViewManager_1.default.instance.show("Prefabs/UI/UIGetProp");
        }
    };
    ItemsGroupView.prototype.click_snowball = function () {
        if (PlayerInfo_1.PlayerInfo.isPlayingSpecial) {
            ToastManager_1.Toast.make("特殊关卡不可用");
            return;
        }
        if (UserInfo_1.UserInfo.snowball_num > 0) {
            var b = Effect_1.default.throw_snowballs();
            if (b)
                UserInfo_1.UserInfo.snowball_num -= 1;
        }
        else {
            ViewManager_1.default.instance.show("Prefabs/UI/UIGetProp");
        }
    };
    ItemsGroupView.prototype.click_gun = function () {
        if (PlayerInfo_1.PlayerInfo.isPlayingSpecial) {
            ToastManager_1.Toast.make("特殊关卡不可用");
            return;
        }
        if (UserInfo_1.UserInfo.gun_num > 0) {
            Role_1.default.self.open_fire();
        }
        else {
            ViewManager_1.default.instance.show("Prefabs/UI/UIGetProp");
        }
    };
    ItemsGroupView.prototype.click_getProp = function () {
        ViewManager_1.default.instance.show("Prefabs/UI/UIGetProp");
    };
    ItemsGroupView = __decorate([
        ccclass
    ], ItemsGroupView);
    return ItemsGroupView;
}(cc.Component));
exports.default = ItemsGroupView;

cc._RF.pop();