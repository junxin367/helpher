
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Common/Base/PersistNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bee3b2VIFhPNJDQUGW7mTDp', 'PersistNode');
// Game/Scripts/Common/Base/PersistNode.ts

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
var StatHelper_1 = require("../../../../framework/extension/aldsdk/StatHelper");
var Device_1 = require("../../../../framework/misc/Device");
var ViewManager_1 = require("../../../../framework/ui/ViewManager");
var event_1 = require("../../../../framework/core/event");
var Platform_1 = require("../../../../framework/extension/Platform");
var PlayerInfo_1 = require("./PlayerInfo");
var UserInfo_1 = require("../../../../framework/extension/weak_net_game/UserInfo");
var BuffSystem_1 = require("../../../../framework/extension/buffs/BuffSystem");
var AutoLabour_1 = require("../../level/AutoLabour");
var SDKInterafce_1 = require("../../../../framework/extension/SDKInterafce");
var GameConfigs_1 = require("../../../../framework/extension/wxsdk/GameConfigs");
var ttsdk_1 = require("../../../../framework/extension/ttsdk/ttsdk");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
//config.csv配置
//BannerAdWhiteList 需要显示banner 的view列表
var PersistNode = /** @class */ (function (_super) {
    __extends(PersistNode, _super);
    function PersistNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isNewUser = true;
        _this.isHidding = false;
        return _this;
    }
    PersistNode.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.node);
        cc.game.on(cc.game.EVENT_SHOW, this.onShow, this, false);
        cc.game.on(cc.game.EVENT_HIDE, this.onHide, this, false);
        Device_1.default.setAudioPath("Audio/");
        SDKInterafce_1.SDKBase.initConfig(GameConfigs_1.GameConfig);
        csv.setParser(function (type, value) {
            if (type == "item") {
                // let ret = []
                if (typeof (value) == "string") {
                    // let vs = value.split(";")
                    // vs.forEach(v => {
                    var arr = value.split(",");
                    var r = { type: arr[0], id: arr[1], count: parseInt(arr[2]) };
                    // ret.push(r)
                    // })
                    return r;
                }
            }
        });
        BuffSystem_1.default.register("AutoLabour", AutoLabour_1.default);
        event_1.evt.on("wxsdk.BannerReady", this.onBannerReady, this);
        event_1.evt.on("View.onShow", this.onViewShow, this);
        event_1.evt.on("View.onHidden", this.onViewHidden, this);
        event_1.evt.on("Loading.Success", this.onLoadingSuccess, this);
        this.addComponent(BuffSystem_1.default);
        event_1.evt.on("wx.shareMessageToFriend", this.onShareToFriend, this);
        event_1.evt.on("WeakNetGame.ShareSuccess", this.onShareSuccess, this);
        event_1.evt.on("WeakNetGame.ShareFail", this.onShareFail, this);
        event_1.evt.on("PlayerInfo.labour", this.onLabour, this);
        //  douyin 
        if (cc.sys.BYTEDANCE_GAME == cc.sys.platform) {
            ttsdk_1.ttsdk.douyin_sidebar_check();
        }
    };
    PersistNode.prototype.onLabour = function (num) {
        console.log("体力" + num);
        // if (UserInfo.isUse && PlayerInfo.nowTili < csv.Config.Max_Energy && num >= csv.Config.Max_Energy) {
        //     if (cc.director.getScene().name == 'Game') {
        //         // if (PlayerInfo.isWechat()) vm.show("Prefabs/UI/UISubscriber");
        //     }
        // }
        if (!UserInfo_1.UserInfo.isUse && num < PlayerInfo_1.PlayerInfo.nowTili) {
            // 说明当天消耗过体力
            UserInfo_1.UserInfo.isUse = true;
            UserInfo_1.UserInfo.save("isUse");
        }
        PlayerInfo_1.PlayerInfo.nowTili = num;
    };
    PersistNode.prototype.onShareFail = function (key) {
        StatHelper_1.default.sendPath("用户分享失败次数（获利点分享）", key);
    };
    PersistNode.prototype.onShareSuccess = function (key) {
        StatHelper_1.default.sendPath("用户分享成功次数（获利点分享）", key);
    };
    //分享
    PersistNode.prototype.onShareToFriend = function (cb) {
        Platform_1.default.share(function (ok) {
            if (ok)
                cb();
        });
    };
    PersistNode.prototype.onViewShow = function (view) {
        Platform_1.default.hideBannerAd();
    };
    PersistNode.prototype.onViewHidden = function (view) {
        Platform_1.default.hideBannerAd();
        // if (!csv.Config) return;
        // // if (cc.director.getScene().name == "Game") return Platform.showBannerAd();
        // if (csv.Config.BannerAdWhiteList && csv.Config.BannerAdWhiteList.indexOf(view.node.name) != -1) {
        //     Platform.hideBannerAd();
        // }
        // evt.emit("PersistNode.onViewHidden")
        // if (csv.Config.BannerAdRefreshWhiteList && csv.Config.BannerAdRefreshWhiteList.indexOf(view.node.name) != -1) {
        //     Platform.refreshBannerAd();
        // }
    };
    PersistNode.prototype.onDestroy = function () {
        event_1.evt.off(this);
    };
    PersistNode.prototype.onBannerReady = function () {
        if (ViewManager_1.default.instance) {
            ViewManager_1.default.instance.allViews.forEach(function (v) {
                // csv.Config.BannerActiveViews
                // csv.Config.ShowBannerViews
                if (v.node.active) {
                    if (csv.Config.BannerAdWhiteList && csv.Config.BannerAdWhiteList.indexOf(v.node.name) == -1) {
                        //没有在白名单里的要隐藏 
                        console.log(v.node.name + "未在白名单里，隐藏banner");
                        Platform_1.default.hideBannerAd();
                    }
                }
            });
        }
    };
    PersistNode.prototype.onShow = function (a) {
        if (this.isHidding) {
            //resume game 
            event_1.evt.emit("Game.Resume");
            this.isHidding = false;
        }
    };
    PersistNode.prototype.onHide = function () {
        PlayerInfo_1.PlayerInfo.saveExit();
        if (!CC_DEBUG) {
            //强制上传数据
            PlayerInfo_1.PlayerInfo.save(null, true);
        }
        this.isHidding = true;
        // UserInfo.exitGame();
        this.unschedule(this.time30);
        this.unschedule(this.time45);
        this.unschedule(this.time60);
        Platform_1.default.hideBannerAd();
    };
    PersistNode.prototype.start = function () {
        // let isn = localStorage.getItem("PlayerInfo.guide")
        // if (isn == null || isn == "") {
        //     this.isNewUser = true
        // } else {
        //     this.isNewUser = false;
        // }
        // if (this.isNewUser) {
        //     //开始加载
        //     StatHepler.userAction("开始加载")
        // }
    };
    PersistNode.prototype.onLoadingSuccess = function () {
        event_1.evt.off("Loading.Success", this.onLoadingSuccess, this);
        if (this.isNewUser) {
            this.scheduleOnce(this.time30, 30);
            this.scheduleOnce(this.time45, 45);
            this.scheduleOnce(this.time60, 60);
            StatHelper_1.default.userAction("加载成功");
        }
    };
    PersistNode.prototype.time30 = function () {
        StatHelper_1.default.userAction("30s未退出");
    };
    PersistNode.prototype.time45 = function () {
        StatHelper_1.default.userAction("45s未退出");
    };
    PersistNode.prototype.time60 = function () {
        StatHelper_1.default.userAction("60s未退出");
    };
    PersistNode = __decorate([
        ccclass
    ], PersistNode);
    return PersistNode;
}(cc.Component));
exports.default = PersistNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcQ29tbW9uXFxCYXNlXFxQZXJzaXN0Tm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRkFBMkU7QUFDM0UsNERBQXVEO0FBQ3ZELG9FQUErRDtBQUMvRCwwREFBdUQ7QUFDdkQscUVBQWdFO0FBQ2hFLDJDQUEwQztBQUMxQyxtRkFBa0Y7QUFDbEYsK0VBQTBFO0FBQzFFLHFEQUFnRDtBQUVoRCw2RUFBdUU7QUFDdkUsaUZBQStFO0FBRS9FLHFFQUFvRTtBQUU5RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxjQUFjO0FBQ2Qsc0NBQXNDO0FBRXRDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBNktDO1FBNUtHLGVBQVMsR0FBWSxJQUFJLENBQUM7UUEwSDFCLGVBQVMsR0FBWSxLQUFLLENBQUM7O0lBa0QvQixDQUFDO0lBM0tHLDRCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNyQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6RCxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUN4RCxnQkFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUM3QixzQkFBTyxDQUFDLFVBQVUsQ0FBQyx3QkFBVSxDQUFDLENBQUM7UUFDL0IsR0FBRyxDQUFDLFNBQVMsQ0FBQyxV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RSxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ25DLG9CQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ2hDO0lBQ0wsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFDSSxvQkFBVSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNJLG9CQUFVLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFRCw0QkFBTSxHQUFOO1FBQ0ksb0JBQVUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQTVLZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTZLL0I7SUFBRCxrQkFBQztDQTdLRCxBQTZLQyxDQTdLd0MsRUFBRSxDQUFDLFNBQVMsR0E2S3BEO2tCQTdLb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdGF0SGVwbGVyIGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL2FsZHNkay9TdGF0SGVscGVyXCI7XHJcbmltcG9ydCBEZXZpY2UgZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1ld29yay9taXNjL0RldmljZVwiO1xyXG5pbXBvcnQgVmlld01hbmFnZXIgZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1ld29yay91aS9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBldnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWV3b3JrL2NvcmUvZXZlbnRcIjtcclxuaW1wb3J0IFBsYXRmb3JtIGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL1BsYXRmb3JtXCI7XHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9QbGF5ZXJJbmZvXCI7XHJcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgQnVmZlN5c3RlbSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi9idWZmcy9CdWZmU3lzdGVtXCI7XHJcbmltcG9ydCBBdXRvTGFib3VyIGZyb20gXCIuLi8uLi9sZXZlbC9BdXRvTGFib3VyXCI7XHJcbmltcG9ydCBDbG91ZCBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi9tbWNsb3VkL0Nsb3VkXCI7XHJcbmltcG9ydCB7IFNES0Jhc2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi9TREtJbnRlcmFmY2VcIjtcclxuaW1wb3J0IHsgR2FtZUNvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3d4c2RrL0dhbWVDb25maWdzXCI7XHJcbmltcG9ydCBEb3V5aW5TdG9yYWdlIGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3R0c2RrL0RvdXlpblN0b3JhZ2VcIjtcclxuaW1wb3J0IHsgdHRzZGsgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi90dHNkay90dHNka1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuLy9jb25maWcuY3N26YWN572uXHJcbi8vQmFubmVyQWRXaGl0ZUxpc3Qg6ZyA6KaB5pi+56S6YmFubmVyIOeahHZpZXfliJfooahcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVyc2lzdE5vZGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgaXNOZXdVc2VyOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpXHJcbiAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX1NIT1csIHRoaXMub25TaG93LCB0aGlzLCBmYWxzZSk7XHJcbiAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX0hJREUsIHRoaXMub25IaWRlLCB0aGlzLCBmYWxzZSlcclxuICAgICAgICBEZXZpY2Uuc2V0QXVkaW9QYXRoKFwiQXVkaW8vXCIpXHJcbiAgICAgICAgU0RLQmFzZS5pbml0Q29uZmlnKEdhbWVDb25maWcpO1xyXG4gICAgICAgIGNzdi5zZXRQYXJzZXIoKHR5cGUsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09IFwiaXRlbVwiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgcmV0ID0gW11cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHZhbHVlKSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHZzID0gdmFsdWUuc3BsaXQoXCI7XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdnMuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYXJyID0gdmFsdWUuc3BsaXQoXCIsXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHIgPSB7IHR5cGU6IGFyclswXSwgaWQ6IGFyclsxXSwgY291bnQ6IHBhcnNlSW50KGFyclsyXSkgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldC5wdXNoKHIpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgQnVmZlN5c3RlbS5yZWdpc3RlcihcIkF1dG9MYWJvdXJcIiwgQXV0b0xhYm91cik7XHJcblxyXG4gICAgICAgIGV2dC5vbihcInd4c2RrLkJhbm5lclJlYWR5XCIsIHRoaXMub25CYW5uZXJSZWFkeSwgdGhpcyk7XHJcbiAgICAgICAgZXZ0Lm9uKFwiVmlldy5vblNob3dcIiwgdGhpcy5vblZpZXdTaG93LCB0aGlzKVxyXG4gICAgICAgIGV2dC5vbihcIlZpZXcub25IaWRkZW5cIiwgdGhpcy5vblZpZXdIaWRkZW4sIHRoaXMpXHJcbiAgICAgICAgZXZ0Lm9uKFwiTG9hZGluZy5TdWNjZXNzXCIsIHRoaXMub25Mb2FkaW5nU3VjY2VzcywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoQnVmZlN5c3RlbSk7XHJcbiAgICAgICAgZXZ0Lm9uKFwid3guc2hhcmVNZXNzYWdlVG9GcmllbmRcIiwgdGhpcy5vblNoYXJlVG9GcmllbmQsIHRoaXMpO1xyXG4gICAgICAgIGV2dC5vbihcIldlYWtOZXRHYW1lLlNoYXJlU3VjY2Vzc1wiLCB0aGlzLm9uU2hhcmVTdWNjZXNzLCB0aGlzKTtcclxuICAgICAgICBldnQub24oXCJXZWFrTmV0R2FtZS5TaGFyZUZhaWxcIiwgdGhpcy5vblNoYXJlRmFpbCwgdGhpcyk7XHJcbiAgICAgICAgZXZ0Lm9uKFwiUGxheWVySW5mby5sYWJvdXJcIiwgdGhpcy5vbkxhYm91ciwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8vICBkb3V5aW4gXHJcbiAgICAgICAgaWYgKGNjLnN5cy5CWVRFREFOQ0VfR0FNRSA9PSBjYy5zeXMucGxhdGZvcm0pIHtcclxuICAgICAgICAgICAgdHRzZGsuZG91eWluX3NpZGViYXJfY2hlY2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgb25MYWJvdXIobnVtKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLkvZPliptcIiArIG51bSk7XHJcbiAgICAgICAgLy8gaWYgKFVzZXJJbmZvLmlzVXNlICYmIFBsYXllckluZm8ubm93VGlsaSA8IGNzdi5Db25maWcuTWF4X0VuZXJneSAmJiBudW0gPj0gY3N2LkNvbmZpZy5NYXhfRW5lcmd5KSB7XHJcbiAgICAgICAgLy8gICAgIGlmIChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUgPT0gJ0dhbWUnKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBpZiAoUGxheWVySW5mby5pc1dlY2hhdCgpKSB2bS5zaG93KFwiUHJlZmFicy9VSS9VSVN1YnNjcmliZXJcIik7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKCFVc2VySW5mby5pc1VzZSAmJiBudW0gPCBQbGF5ZXJJbmZvLm5vd1RpbGkpIHtcclxuICAgICAgICAgICAgLy8g6K+05piO5b2T5aSp5raI6ICX6L+H5L2T5YqbXHJcbiAgICAgICAgICAgIFVzZXJJbmZvLmlzVXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgVXNlckluZm8uc2F2ZShcImlzVXNlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBQbGF5ZXJJbmZvLm5vd1RpbGkgPSBudW07XHJcbiAgICB9XHJcblxyXG4gICAgb25TaGFyZUZhaWwoa2V5KSB7XHJcbiAgICAgICAgU3RhdEhlcGxlci5zZW5kUGF0aChcIueUqOaIt+WIhuS6q+Wksei0peasoeaVsO+8iOiOt+WIqeeCueWIhuS6q++8iVwiLCBrZXkpXHJcbiAgICB9XHJcblxyXG4gICAgb25TaGFyZVN1Y2Nlc3Moa2V5KSB7XHJcbiAgICAgICAgU3RhdEhlcGxlci5zZW5kUGF0aChcIueUqOaIt+WIhuS6q+aIkOWKn+asoeaVsO+8iOiOt+WIqeeCueWIhuS6q++8iVwiLCBrZXkpXHJcbiAgICB9XHJcblxyXG4gICAgLy/liIbkuqtcclxuICAgIG9uU2hhcmVUb0ZyaWVuZChjYikge1xyXG4gICAgICAgIFBsYXRmb3JtLnNoYXJlKGZ1bmN0aW9uIChvaykge1xyXG4gICAgICAgICAgICBpZiAob2spXHJcbiAgICAgICAgICAgICAgICBjYigpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25WaWV3U2hvdyh2aWV3KSB7XHJcbiAgICAgICAgICAgIFBsYXRmb3JtLmhpZGVCYW5uZXJBZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVmlld0hpZGRlbih2aWV3KSB7XHJcbiAgICAgICAgUGxhdGZvcm0uaGlkZUJhbm5lckFkKCk7XHJcbiAgICAgICAgLy8gaWYgKCFjc3YuQ29uZmlnKSByZXR1cm47XHJcbiAgICAgICAgLy8gLy8gaWYgKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSA9PSBcIkdhbWVcIikgcmV0dXJuIFBsYXRmb3JtLnNob3dCYW5uZXJBZCgpO1xyXG4gICAgICAgIC8vIGlmIChjc3YuQ29uZmlnLkJhbm5lckFkV2hpdGVMaXN0ICYmIGNzdi5Db25maWcuQmFubmVyQWRXaGl0ZUxpc3QuaW5kZXhPZih2aWV3Lm5vZGUubmFtZSkgIT0gLTEpIHtcclxuICAgICAgICAvLyAgICAgUGxhdGZvcm0uaGlkZUJhbm5lckFkKCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGV2dC5lbWl0KFwiUGVyc2lzdE5vZGUub25WaWV3SGlkZGVuXCIpXHJcbiAgICAgICAgLy8gaWYgKGNzdi5Db25maWcuQmFubmVyQWRSZWZyZXNoV2hpdGVMaXN0ICYmIGNzdi5Db25maWcuQmFubmVyQWRSZWZyZXNoV2hpdGVMaXN0LmluZGV4T2Yodmlldy5ub2RlLm5hbWUpICE9IC0xKSB7XHJcbiAgICAgICAgLy8gICAgIFBsYXRmb3JtLnJlZnJlc2hCYW5uZXJBZCgpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICB9XHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgZXZ0Lm9mZih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJhbm5lclJlYWR5KCkge1xyXG4gICAgICAgIGlmIChWaWV3TWFuYWdlci5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0YW5jZS5hbGxWaWV3cy5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY3N2LkNvbmZpZy5CYW5uZXJBY3RpdmVWaWV3c1xyXG4gICAgICAgICAgICAgICAgLy8gY3N2LkNvbmZpZy5TaG93QmFubmVyVmlld3NcclxuICAgICAgICAgICAgICAgIGlmICh2Lm5vZGUuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNzdi5Db25maWcuQmFubmVyQWRXaGl0ZUxpc3QgJiYgY3N2LkNvbmZpZy5CYW5uZXJBZFdoaXRlTGlzdC5pbmRleE9mKHYubm9kZS5uYW1lKSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+ayoeacieWcqOeZveWQjeWNlemHjOeahOimgemakOiXjyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codi5ub2RlLm5hbWUgKyBcIuacquWcqOeZveWQjeWNlemHjO+8jOmakOiXj2Jhbm5lclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGxhdGZvcm0uaGlkZUJhbm5lckFkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93KGEpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0hpZGRpbmcpIHtcclxuICAgICAgICAgICAgLy9yZXN1bWUgZ2FtZSBcclxuICAgICAgICAgICAgZXZ0LmVtaXQoXCJHYW1lLlJlc3VtZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5pc0hpZGRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlzSGlkZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uSGlkZSgpIHtcclxuICAgICAgICBQbGF5ZXJJbmZvLnNhdmVFeGl0KCk7XHJcbiAgICAgICAgaWYgKCFDQ19ERUJVRykge1xyXG4gICAgICAgICAgICAvL+W8uuWItuS4iuS8oOaVsOaNrlxyXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLnNhdmUobnVsbCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNIaWRkaW5nID0gdHJ1ZTtcclxuICAgICAgICAvLyBVc2VySW5mby5leGl0R2FtZSgpO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpbWUzMCk7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudGltZTQ1KTtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50aW1lNjApO1xyXG4gICAgICAgIFBsYXRmb3JtLmhpZGVCYW5uZXJBZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIGxldCBpc24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlBsYXllckluZm8uZ3VpZGVcIilcclxuICAgICAgICAvLyBpZiAoaXNuID09IG51bGwgfHwgaXNuID09IFwiXCIpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5pc05ld1VzZXIgPSB0cnVlXHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5pc05ld1VzZXIgPSBmYWxzZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaXNOZXdVc2VyKSB7XHJcbiAgICAgICAgLy8gICAgIC8v5byA5aeL5Yqg6L29XHJcbiAgICAgICAgLy8gICAgIFN0YXRIZXBsZXIudXNlckFjdGlvbihcIuW8gOWni+WKoOi9vVwiKVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWRpbmdTdWNjZXNzKCkge1xyXG4gICAgICAgIGV2dC5vZmYoXCJMb2FkaW5nLlN1Y2Nlc3NcIiwgdGhpcy5vbkxvYWRpbmdTdWNjZXNzLCB0aGlzKTtcclxuICAgICAgICBpZiAodGhpcy5pc05ld1VzZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy50aW1lMzAsIDMwKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy50aW1lNDUsIDQ1KTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy50aW1lNjAsIDYwKTtcclxuICAgICAgICAgICAgU3RhdEhlcGxlci51c2VyQWN0aW9uKFwi5Yqg6L295oiQ5YqfXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRpbWUzMCgpIHtcclxuICAgICAgICBTdGF0SGVwbGVyLnVzZXJBY3Rpb24oXCIzMHPmnKrpgIDlh7pcIilcclxuICAgIH1cclxuXHJcbiAgICB0aW1lNDUoKSB7XHJcbiAgICAgICAgU3RhdEhlcGxlci51c2VyQWN0aW9uKFwiNDVz5pyq6YCA5Ye6XCIpXHJcbiAgICB9XHJcblxyXG4gICAgdGltZTYwKCkge1xyXG4gICAgICAgIFN0YXRIZXBsZXIudXNlckFjdGlvbihcIjYwc+acqumAgOWHulwiKVxyXG4gICAgfVxyXG59Il19