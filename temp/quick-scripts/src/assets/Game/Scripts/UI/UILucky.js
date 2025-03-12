"use strict";
cc._RF.push(module, '77fd5DILZVFnINnShtqeF4o', 'UILucky');
// Game/Scripts/UI/UILucky.ts

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
exports.DrawType = void 0;
var mvcView_1 = require("../../../framework/ui/mvcView");
var Device_1 = require("../../../framework/misc/Device");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var UserInfo_1 = require("../../../framework/extension/weak_net_game/UserInfo");
var actionUtil_1 = require("../../../framework/utils/actionUtil");
var ccUtil_1 = require("../../../framework/utils/ccUtil");
var TurntableInfo_1 = require("../Common/TurntableInfo");
var FrameSwitch_1 = require("../../../framework/misc/FrameSwitch");
var Platform_1 = require("../../../framework/extension/Platform");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var Main_1 = require("../Main");
var event_1 = require("../../../framework/core/event");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DrawType;
(function (DrawType) {
    DrawType[DrawType["FreeOnce"] = 1] = "FreeOnce";
    DrawType[DrawType["TiLi"] = 2] = "TiLi";
    DrawType[DrawType["Gift"] = 3] = "Gift";
    DrawType[DrawType["Gun"] = 4] = "Gun";
    DrawType[DrawType["Skin"] = 5] = "Skin";
    DrawType[DrawType["Frozen"] = 6] = "Frozen";
    DrawType[DrawType["Magnet"] = 7] = "Magnet";
})(DrawType = exports.DrawType || (exports.DrawType = {}));
var UILucky = /** @class */ (function (_super) {
    __extends(UILucky, _super);
    function UILucky() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wheelSp = null;
        _this.sprites = [];
        _this.labels = [];
        _this.btn_draw = null;
        _this.switcherTip = null;
        _this.switcherTxt = null;
        _this.videoIcon = null;
        _this.drawBtn = null;
        _this._canRotate = true;
        _this.pool = [];
        _this._oneMore = false; // 再转一次
        _this.skinId = 0; //视频皮肤id
        return _this;
    }
    UILucky.prototype.onLoad = function () {
        var _this = this;
        this.skinId = PlayerInfo_1.PlayerInfo.randomVideoSkin();
        csv.turntable.values.map(function (_, i) {
            var data = ccUtil_1.default.get(TurntableInfo_1.TurntableInfo, _.id);
            for (var j = 0; j < data.chance * 200; j++) {
                if (_this.skinId === 0 && data.type === DrawType.Skin) {
                    _this.pool.push(7); // 限定皮肤用完换成再转一次
                }
                else {
                    _this.pool.push(i + 1);
                }
            }
        });
        g.shuffle(this.pool);
        console.log(this.pool);
        this.flashLight();
    };
    UILucky.prototype.onShown = function () {
        var _this = this;
        actionUtil_1.default.jellyJump2(this.node, 0.8, 1);
        csv.turntable.values.map(function (_, i) {
            var data = ccUtil_1.default.get(TurntableInfo_1.TurntableInfo, _.id);
            _this.labels[i].string = data.text;
            var icon = _this.sprites[i];
            ccUtil_1.default.setDisplay(icon, data.path);
        });
        this.refreshView();
    };
    UILucky.prototype.share_succ = function () {
        this.startDraw();
    };
    UILucky.prototype.click_draw = function () {
        if (!this._canRotate) {
            ToastManager_1.Toast.make('正在给您挑选奖品...');
            return;
        }
        if (g.isNextDay(UserInfo_1.UserInfo.freedrawTime)) {
            event_1.evt.emit('UILucky.redPoint');
            UserInfo_1.UserInfo.freedrawTime = new Date().getTime();
            Main_1.default.instance.zhuanpan_hongdian.active = false;
            UserInfo_1.UserInfo.save();
            this.share_succ();
        }
        else {
            if (this.videoIcon.active) {
                Platform_1.default.watch_video(this.startDraw, this);
            }
            else {
                this.startDraw();
            }
        }
    };
    UILucky.prototype.startDraw = function () {
        var id = g.getRandomInArray(this.pool);
        this.startWheel(id);
        Device_1.default.playSfx("draw");
    };
    UILucky.prototype.calculateAngle = function (index) {
        var angle = 4 * 360 + index * 45 - 23;
        return angle;
    };
    UILucky.prototype.refreshView = function () {
        if (g.isGreaterDate(new Date(), new Date(UserInfo_1.UserInfo.freedrawTime))) {
            //free draw 
            this.switcherTip.index = 0;
            this.switcherTxt.index = 0;
            this.videoIcon.active = false;
        }
        else {
            this.switcherTip.index = 1;
            this.switcherTxt.index = 1;
            this.videoIcon.active = true;
        }
        if (this._oneMore) {
            this.switcherTxt.index = 0;
            this.videoIcon.active = false;
        }
    };
    UILucky.prototype.flashLight = function () {
        var lights = this.wheelSp.node.children.filter(function (_) { return _.name === 'guang'; });
        cc.tween(this.node).repeatForever(cc.tween(this.node).call(function (_) {
            lights.forEach(function (_, i) { return _.active = i % 2 === 0; });
        }).delay(0.5).call(function (_) {
            lights.forEach(function (_, i) { return _.active = i % 2 === 1; });
        }).delay(0.5)).start();
    };
    UILucky.prototype.startWheel = function (id) {
        console.log("target wheel:", id);
        var angle = this.calculateAngle(id);
        if (!this._canRotate) {
            ToastManager_1.Toast.make('正在给您挑选奖品...');
            return;
        }
        this._canRotate = false;
        this.drawBtn.interactable = false;
        this.wheelSp.node.rotation = 0;
        var stage3 = cc.rotateBy(Math.abs(angle / 400), angle);
        var callFunc = cc.callFunc(function () {
            this._canRotate = true;
            this._oneMore = false;
            this.showRes(id);
            this.refreshView();
            this.skinId = PlayerInfo_1.PlayerInfo.randomVideoSkin();
            this.drawBtn.interactable = true;
        }.bind(this));
        var sequence = cc.sequence(stage3, callFunc);
        this.wheelSp.node.runAction(sequence.easing(cc.easeQuadraticActionInOut()));
    };
    UILucky.prototype.showRes = function (id) {
        var data = ccUtil_1.default.get(TurntableInfo_1.TurntableInfo, id);
        // 保存获得道具
        switch (data.type) {
            case DrawType.FreeOnce: // 再转一次
                this._oneMore = true;
                ToastManager_1.Toast.make("\u83B7\u5F97" + data.text);
                break;
            case DrawType.TiLi:
                this.getLuckyItem(id);
                // PlayerInfo.labour += data.num;
                // PlayerInfo.save();
                break;
            case DrawType.Gift: // 礼包
                UserInfo_1.UserInfo.gun_num += data.num;
                UserInfo_1.UserInfo.snowball_num += data.num;
                UserInfo_1.UserInfo.magnet_num + data.num;
                this.getLuckyItem(id);
                break;
            case DrawType.Gun:
                UserInfo_1.UserInfo.gun_num += data.num;
                this.getLuckyItem(id);
                break;
            case DrawType.Frozen: // 冻结
                UserInfo_1.UserInfo.snowball_num += data.num;
                this.getLuckyItem(id);
                break;
            case DrawType.Skin: // 限定皮肤
                PlayerInfo_1.PlayerInfo.unlockSkin(this.skinId);
                vm.show("Prefabs/UI/UIUnlockSkin", this.skinId);
                break;
            case DrawType.Magnet: // 磁铁
                UserInfo_1.UserInfo.magnet_num += data.num;
                this.getLuckyItem(id);
                break;
            default:
                break;
        }
        UserInfo_1.UserInfo.save();
        // Device.playEffect(R.audio_unlock);
    };
    UILucky.prototype.onGetReward = function (data) {
        vm.show("Prefabs/UI/UILucky");
        ToastManager_1.Toast.make("\u83B7\u5F97" + data.content + "x" + data.num);
    };
    UILucky.prototype.getLuckyItem = function (id) {
        vm.hide(this);
        vm.show("Prefabs/UI/UIGetLucky", id, this.onGetReward);
    };
    UILucky.prototype.clic_close = function () {
        if (!this._canRotate) {
            ToastManager_1.Toast.make('正在给您挑选奖品...');
            return;
        }
        vm.hide(this);
    };
    __decorate([
        property(cc.Sprite)
    ], UILucky.prototype, "wheelSp", void 0);
    __decorate([
        property([cc.Sprite])
    ], UILucky.prototype, "sprites", void 0);
    __decorate([
        property([cc.Label])
    ], UILucky.prototype, "labels", void 0);
    __decorate([
        property(cc.Button)
    ], UILucky.prototype, "btn_draw", void 0);
    __decorate([
        property(FrameSwitch_1.default)
    ], UILucky.prototype, "switcherTip", void 0);
    __decorate([
        property(FrameSwitch_1.default)
    ], UILucky.prototype, "switcherTxt", void 0);
    __decorate([
        property(cc.Node)
    ], UILucky.prototype, "videoIcon", void 0);
    __decorate([
        property(cc.Button)
    ], UILucky.prototype, "drawBtn", void 0);
    UILucky = __decorate([
        ccclass
    ], UILucky);
    return UILucky;
}(mvcView_1.default));
exports.default = UILucky;

cc._RF.pop();