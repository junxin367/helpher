
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UILucky.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJTHVja3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlEQUFvRDtBQUVwRCx5REFBb0Q7QUFDcEQsbUVBQTJEO0FBQzNELGdGQUErRTtBQUMvRSxrRUFBeUQ7QUFDekQsMERBQXFEO0FBQ3JELHlEQUF3RDtBQUN4RCxtRUFBZ0U7QUFDaEUsa0VBQTZEO0FBQzdELHdEQUF1RDtBQUN2RCxnQ0FBMkI7QUFDM0IsdURBQW9EO0FBRTlDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQVksUUFRWDtBQVJELFdBQVksUUFBUTtJQUNoQiwrQ0FBWSxDQUFBO0lBQ1osdUNBQUksQ0FBQTtJQUNKLHVDQUFJLENBQUE7SUFDSixxQ0FBRyxDQUFBO0lBQ0gsdUNBQUksQ0FBQTtJQUNKLDJDQUFNLENBQUE7SUFDTiwyQ0FBTSxDQUFBO0FBQ1YsQ0FBQyxFQVJXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBUW5CO0FBR0Q7SUFBcUMsMkJBQU87SUFBNUM7UUFBQSxxRUF5TkM7UUF0TkcsYUFBTyxHQUFjLElBQUksQ0FBQztRQUcxQixhQUFPLEdBQWdCLEVBQUUsQ0FBQztRQUcxQixZQUFNLEdBQWUsRUFBRSxDQUFDO1FBR3hCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFHM0IsaUJBQVcsR0FBa0IsSUFBSSxDQUFDO1FBR2xDLGlCQUFXLEdBQWtCLElBQUksQ0FBQztRQUdsQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFFbEIsVUFBSSxHQUFHLEVBQUUsQ0FBQztRQUVWLGNBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxPQUFPO1FBRXpCLFlBQU0sR0FBRyxDQUFDLENB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QUFDLHFCQUFhLENBQUM7Z0RBQ1U7SUFHbEM7UUFEQyxRQUFRLENBQUMscUJBQWEsQ0FBQztnREFDVTtJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ007SUF4QlQsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQXlOM0I7SUFBRCxjQUFDO0NBek5ELEFBeU5DLENBek5vQyxpQkFBTyxHQXlOM0M7a0JBek5vQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgbXZjVmlldyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL212Y1ZpZXdcIjtcbmltcG9ydCB7IFNldHRpbmdJbmZvIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9TZXR0aW5nSW5mb1wiO1xuaW1wb3J0IERldmljZSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21pc2MvRGV2aWNlXCI7XG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvVG9hc3RNYW5hZ2VyXCI7XG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvVXNlckluZm9cIjtcbmltcG9ydCBDb21tb24gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91dGlscy9hY3Rpb25VdGlsXCI7XG5pbXBvcnQgY2NVdGlsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdXRpbHMvY2NVdGlsXCI7XG5pbXBvcnQgeyBUdXJudGFibGVJbmZvIH0gZnJvbSBcIi4uL0NvbW1vbi9UdXJudGFibGVJbmZvXCI7XG5pbXBvcnQgRnJhbWVTd2l0Y2hlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21pc2MvRnJhbWVTd2l0Y2hcIjtcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi9QbGF0Zm9ybVwiO1xuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuLi9Db21tb24vQmFzZS9QbGF5ZXJJbmZvXCI7XG5pbXBvcnQgTWFpbiBmcm9tIFwiLi4vTWFpblwiO1xuaW1wb3J0IHsgZXZ0IH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9jb3JlL2V2ZW50XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCBlbnVtIERyYXdUeXBlIHtcbiAgICBGcmVlT25jZSA9IDEsXG4gICAgVGlMaSxcbiAgICBHaWZ0LFxuICAgIEd1bixcbiAgICBTa2luLFxuICAgIEZyb3plbixcbiAgICBNYWduZXRcbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJTHVja3kgZXh0ZW5kcyBtdmNWaWV3IHtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgd2hlZWxTcDogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlXSlcbiAgICBzcHJpdGVzOiBjYy5TcHJpdGVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KFtjYy5MYWJlbF0pXG4gICAgbGFiZWxzOiBjYy5MYWJlbFtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0bl9kcmF3OiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KEZyYW1lU3dpdGNoZXIpXG4gICAgc3dpdGNoZXJUaXA6IEZyYW1lU3dpdGNoZXIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KEZyYW1lU3dpdGNoZXIpXG4gICAgc3dpdGNoZXJUeHQ6IEZyYW1lU3dpdGNoZXIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdmlkZW9JY29uOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgZHJhd0J0bjogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIF9jYW5Sb3RhdGUgPSB0cnVlO1xuXG4gICAgcG9vbCA9IFtdO1xuXG4gICAgX29uZU1vcmUgPSBmYWxzZTsgLy8g5YaN6L2s5LiA5qyhXG5cbiAgICBza2luSWQgPSAwOyAgLy/op4bpopHnmq7ogqRpZFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnNraW5JZCA9IFBsYXllckluZm8ucmFuZG9tVmlkZW9Ta2luKCk7XG4gICAgICAgIGNzdi50dXJudGFibGUudmFsdWVzLm1hcCgoXywgaSkgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBjY1V0aWwuZ2V0KFR1cm50YWJsZUluZm8sIF8uaWQpO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkYXRhLmNoYW5jZSAqIDIwMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2tpbklkID09PSAwICYmIGRhdGEudHlwZSA9PT0gRHJhd1R5cGUuU2tpbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvb2wucHVzaCg3KTsgLy8g6ZmQ5a6a55qu6IKk55So5a6M5o2i5oiQ5YaN6L2s5LiA5qyhXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb29sLnB1c2goaSArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGcuc2h1ZmZsZSh0aGlzLnBvb2wpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBvb2wpO1xuXG4gICAgICAgIHRoaXMuZmxhc2hMaWdodCgpO1xuICAgIH1cblxuICAgIG9uU2hvd24oKSB7XG4gICAgICAgIENvbW1vbi5qZWxseUp1bXAyKHRoaXMubm9kZSwgMC44LCAxKTtcblxuICAgICAgICBjc3YudHVybnRhYmxlLnZhbHVlcy5tYXAoKF8sIGkpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gY2NVdGlsLmdldChUdXJudGFibGVJbmZvLCBfLmlkKTtcbiAgICAgICAgICAgIHRoaXMubGFiZWxzW2ldLnN0cmluZyA9IGRhdGEudGV4dDtcbiAgICAgICAgICAgIGxldCBpY29uID0gdGhpcy5zcHJpdGVzW2ldO1xuICAgICAgICAgICAgY2NVdGlsLnNldERpc3BsYXkoaWNvbiwgZGF0YS5wYXRoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZWZyZXNoVmlldygpO1xuICAgIH1cblxuICAgIHNoYXJlX3N1Y2MoKSB7XG4gICAgICAgIHRoaXMuc3RhcnREcmF3KCk7XG4gICAgfVxuXG4gICAgY2xpY2tfZHJhdygpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jYW5Sb3RhdGUpIHtcbiAgICAgICAgICAgIFRvYXN0Lm1ha2UoJ+ato+WcqOe7meaCqOaMkemAieWlluWTgS4uLicpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGcuaXNOZXh0RGF5KFVzZXJJbmZvLmZyZWVkcmF3VGltZSkpIHtcbiAgICAgICAgICAgIGV2dC5lbWl0KCdVSUx1Y2t5LnJlZFBvaW50Jyk7XG4gICAgICAgICAgICBVc2VySW5mby5mcmVlZHJhd1RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIE1haW4uaW5zdGFuY2Uuemh1YW5wYW5faG9uZ2RpYW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBVc2VySW5mby5zYXZlKCk7XG4gICAgICAgICAgICB0aGlzLnNoYXJlX3N1Y2MoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZpZGVvSWNvbi5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBQbGF0Zm9ybS53YXRjaF92aWRlbyh0aGlzLnN0YXJ0RHJhdywgdGhpcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREcmF3KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydERyYXcoKSB7XG4gICAgICAgIGxldCBpZCA9IGcuZ2V0UmFuZG9tSW5BcnJheSh0aGlzLnBvb2wpO1xuICAgICAgICB0aGlzLnN0YXJ0V2hlZWwoaWQpO1xuXG4gICAgICAgIERldmljZS5wbGF5U2Z4KFwiZHJhd1wiKTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVBbmdsZShpbmRleDogbnVtYmVyKSB7Ly/lpZblk4HnmoRpbmRleOS7jjDlvIDlp4tcbiAgICAgICAgbGV0IGFuZ2xlID0gNCAqIDM2MCArIGluZGV4ICogNDUgLSAyMztcbiAgICAgICAgcmV0dXJuIGFuZ2xlO1xuICAgIH1cblxuICAgIHJlZnJlc2hWaWV3KCkge1xuICAgICAgICBpZiAoZy5pc0dyZWF0ZXJEYXRlKG5ldyBEYXRlKCksIG5ldyBEYXRlKFVzZXJJbmZvLmZyZWVkcmF3VGltZSkpKSB7XG4gICAgICAgICAgICAvL2ZyZWUgZHJhdyBcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoZXJUaXAuaW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5zd2l0Y2hlclR4dC5pbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLnZpZGVvSWNvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoZXJUaXAuaW5kZXggPSAxO1xuICAgICAgICAgICAgdGhpcy5zd2l0Y2hlclR4dC5pbmRleCA9IDE7XG4gICAgICAgICAgICB0aGlzLnZpZGVvSWNvbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX29uZU1vcmUpIHtcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoZXJUeHQuaW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy52aWRlb0ljb24uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmbGFzaExpZ2h0KCkge1xuICAgICAgICBsZXQgbGlnaHRzID0gdGhpcy53aGVlbFNwLm5vZGUuY2hpbGRyZW4uZmlsdGVyKF8gPT4gXy5uYW1lID09PSAnZ3VhbmcnKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS5yZXBlYXRGb3JldmVyKFxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS5jYWxsKF8gPT4ge1xuICAgICAgICAgICAgICAgIGxpZ2h0cy5mb3JFYWNoKChfLCBpKSA9PiBfLmFjdGl2ZSA9IGkgJSAyID09PSAwKTtcbiAgICAgICAgICAgIH0pLmRlbGF5KDAuNSkuY2FsbChfID0+IHtcbiAgICAgICAgICAgICAgICBsaWdodHMuZm9yRWFjaCgoXywgaSkgPT4gXy5hY3RpdmUgPSBpICUgMiA9PT0gMSk7XG4gICAgICAgICAgICB9KS5kZWxheSgwLjUpXG4gICAgICAgICkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBzdGFydFdoZWVsKGlkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGFyZ2V0IHdoZWVsOlwiLCBpZCk7XG4gICAgICAgIGxldCBhbmdsZSA9IHRoaXMuY2FsY3VsYXRlQW5nbGUoaWQpO1xuICAgICAgICBpZiAoIXRoaXMuX2NhblJvdGF0ZSkge1xuICAgICAgICAgICAgVG9hc3QubWFrZSgn5q2j5Zyo57uZ5oKo5oyR6YCJ5aWW5ZOBLi4uJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2FuUm90YXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZHJhd0J0bi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLndoZWVsU3Aubm9kZS5yb3RhdGlvbiA9IDA7XG4gICAgICAgIGxldCBzdGFnZTMgPSBjYy5yb3RhdGVCeShNYXRoLmFicyhhbmdsZSAvIDQwMCksIGFuZ2xlKTtcbiAgICAgICAgbGV0IGNhbGxGdW5jID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fY2FuUm90YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX29uZU1vcmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1JlcyhpZCk7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XG4gICAgICAgICAgICB0aGlzLnNraW5JZCA9IFBsYXllckluZm8ucmFuZG9tVmlkZW9Ta2luKCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdCdG4uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgbGV0IHNlcXVlbmNlID0gY2Muc2VxdWVuY2Uoc3RhZ2UzLCBjYWxsRnVuYyk7XG4gICAgICAgIHRoaXMud2hlZWxTcC5ub2RlLnJ1bkFjdGlvbihzZXF1ZW5jZS5lYXNpbmcoY2MuZWFzZVF1YWRyYXRpY0FjdGlvbkluT3V0KCkpKTtcbiAgICB9XG5cbiAgICBzaG93UmVzKGlkKSB7XG4gICAgICAgIGxldCBkYXRhID0gY2NVdGlsLmdldChUdXJudGFibGVJbmZvLCBpZCk7XG5cblxuICAgICAgICAvLyDkv53lrZjojrflvpfpgZPlhbdcbiAgICAgICAgc3dpdGNoIChkYXRhLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgRHJhd1R5cGUuRnJlZU9uY2U6IC8vIOWGjei9rOS4gOasoVxuICAgICAgICAgICAgICAgIHRoaXMuX29uZU1vcmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2UoYOiOt+W+lyR7ZGF0YS50ZXh0fWApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEcmF3VHlwZS5UaUxpOlxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0THVja3lJdGVtKGlkKTtcbiAgICAgICAgICAgICAgICAvLyBQbGF5ZXJJbmZvLmxhYm91ciArPSBkYXRhLm51bTtcbiAgICAgICAgICAgICAgICAvLyBQbGF5ZXJJbmZvLnNhdmUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRHJhd1R5cGUuR2lmdDogLy8g56S85YyFXG4gICAgICAgICAgICAgICAgVXNlckluZm8uZ3VuX251bSArPSBkYXRhLm51bTtcbiAgICAgICAgICAgICAgICBVc2VySW5mby5zbm93YmFsbF9udW0gKz0gZGF0YS5udW07XG4gICAgICAgICAgICAgICAgVXNlckluZm8ubWFnbmV0X251bSArIGRhdGEubnVtO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0THVja3lJdGVtKGlkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRHJhd1R5cGUuR3VuOlxuICAgICAgICAgICAgICAgIFVzZXJJbmZvLmd1bl9udW0gKz0gZGF0YS5udW07XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRMdWNreUl0ZW0oaWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEcmF3VHlwZS5Gcm96ZW46IC8vIOWGu+e7k1xuICAgICAgICAgICAgICAgIFVzZXJJbmZvLnNub3diYWxsX251bSArPSBkYXRhLm51bTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEx1Y2t5SXRlbShpZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERyYXdUeXBlLlNraW46IC8vIOmZkOWumuearuiCpFxuICAgICAgICAgICAgICAgIFBsYXllckluZm8udW5sb2NrU2tpbih0aGlzLnNraW5JZCk7XG4gICAgICAgICAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlVbmxvY2tTa2luXCIsIHRoaXMuc2tpbklkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRHJhd1R5cGUuTWFnbmV0OiAvLyDno4Hpk4FcbiAgICAgICAgICAgICAgICBVc2VySW5mby5tYWduZXRfbnVtICs9IGRhdGEubnVtO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0THVja3lJdGVtKGlkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgVXNlckluZm8uc2F2ZSgpO1xuICAgICAgICAvLyBEZXZpY2UucGxheUVmZmVjdChSLmF1ZGlvX3VubG9jayk7XG4gICAgfVxuXG4gICAgb25HZXRSZXdhcmQoZGF0YTogVHVybnRhYmxlSW5mbykge1xuICAgICAgICB2bS5zaG93KFwiUHJlZmFicy9VSS9VSUx1Y2t5XCIpO1xuICAgICAgICBUb2FzdC5tYWtlKGDojrflvpcke2RhdGEuY29udGVudH14JHtkYXRhLm51bX1gKTtcbiAgICB9XG5cbiAgICBnZXRMdWNreUl0ZW0oaWQpIHtcbiAgICAgICAgdm0uaGlkZSh0aGlzKTtcbiAgICAgICAgdm0uc2hvdyhcIlByZWZhYnMvVUkvVUlHZXRMdWNreVwiLCBpZCwgdGhpcy5vbkdldFJld2FyZCk7XG4gICAgfVxuXG4gICAgY2xpY19jbG9zZSgpIHtcblxuXG4gICAgICAgIGlmICghdGhpcy5fY2FuUm90YXRlKSB7XG4gICAgICAgICAgICBUb2FzdC5tYWtlKCfmraPlnKjnu5nmgqjmjJHpgInlpZblk4EuLi4nKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHZtLmhpZGUodGhpcyk7XG4gICAgfVxufVxuIl19