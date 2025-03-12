
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Common/Base/PlayerInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '52354lZ+KNEUIfTnhd3AFTV', 'PlayerInfo');
// Game/Scripts/Common/Base/PlayerInfo.ts

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
exports.PlayerInfo = void 0;
var DataCenter_1 = require("../../../../framework/core/DataCenter");
var gameUtil_1 = require("../../../../framework/utils/gameUtil");
var Platform_1 = require("../../../../framework/extension/Platform");
var UserInfo_1 = require("../../../../framework/extension/weak_net_game/UserInfo");
var WeakNetGame_1 = require("../../../../framework/extension/weak_net_game/WeakNetGame");
var arr_1234 = [1, 2, 3, 4];
var PlayerInfoDC = /** @class */ (function (_super) {
    __extends(PlayerInfoDC, _super);
    function PlayerInfoDC() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //解锁关卡
        _this.level = 1;
        //当前关卡
        _this.playinglevel = 1;
        //是否在游玩每日关卡
        _this.isPlayingDaily = false;
        //是否在游玩特殊关卡
        _this.isPlayingSpecial = false;
        //解锁每日关卡
        _this.dailylevel = 1;
        //当前游玩每日关卡
        _this.playingDailyLevel = 0;
        //体力
        _this.labour = 10;
        //体力恢复 剩余时间
        _this.buff_labour = 0;
        //上次退出的时间
        _this.lastExitTime = 0;
        _this.challenge_level_unlocked = false;
        /**邀请者的id */
        _this.inviterId = 0;
        _this.openId = "";
        /**
         * 每次添加 删除 字段，需要带上版本号
         * 升级后，新的key 会被加入，删除的key，会保留 ，版本好不会更新
         * */
        /**version 2:
         * -inited
         * version 3:
         * - isguided (removed)
         * - is_guide_4 (add)
         * - isguided_badman (add)
         */
        _this.version = 3;
        _this.inited = false;
        //是否过引导4关
        _this.is_guide_4 = false;
        //挑战模式阶段礼包
        _this.challenge_gift = [];
        //关卡星星数量
        _this.level_star = {};
        //我的收藏宝贝
        _this.collections = {};
        //是否过引导15关
        _this.is_guide_15 = false;
        //**是否正在引导 */
        _this.isInGuide = false;
        /**是否引导过坏人关卡 */
        _this.isguided_badman = false;
        /**是否解锁道具 */
        _this.isUnlock_Prop = false;
        _this.guide = 1;
        _this.boxProgress = 0;
        //1 : win , -1 : lose  , 0:unsure
        _this.winStatus = 0;
        ///////////////////////////[chapter help]////////////////////////////
        _this.newchapter = {};
        ///////////////////////////[skin data]////////////////////////////
        // [id:status]
        _this.skins = {};
        _this.isFavClaimed = false;
        ///////////////////////////[sign start]////////////////////////////
        _this.signCount = 0;
        _this.signTime = 0;
        ///////////////////////////[sign start]////////////////////////////
        _this.star = 0;
        //连续胜利
        _this.winLink = 0;
        _this.lld = new Date();
        _this.nowTili = 0;
        //当天是否消耗过体力
        _this.isUse = false;
        _this.maxDailyLv = 0;
        _this.playTime = 0;
        _this.isRandomLevel = false;
        return _this;
    }
    PlayerInfoDC.prototype.claimFav = function () {
        this.isFavClaimed = true;
        this.save("isFavClaimed");
    };
    PlayerInfoDC.prototype.initSkinData = function () {
        var _this = this;
        csv.on('load', function (v) {
            if (v != 'Skin')
                return;
            csv.Skin.values.forEach(function (v) {
                if (v.unlockType == 4) {
                    //默认选择
                    if (_this.skins[v.id] == null) {
                        _this.skins[v.id] = 2;
                    }
                }
            });
        });
    };
    /**是否已解锁 */
    PlayerInfoDC.prototype.isSkinUnlocked = function (id) {
        var s = this.skins[id];
        return s >= 1;
    };
    /**是否正在使用中 */
    PlayerInfoDC.prototype.isSkinUsing = function (id) {
        return this.skins[id] == 2;
    };
    PlayerInfoDC.prototype.isAllSkinUnlocked = function () {
        var _this = this;
        var res = csv.Skin.values.filter(function (v) { return arr_1234.indexOf(v.subType) > -1 && v.unlockType === 3; })
            .every(function (_) { return _this.isSkinUnlocked(_.id); });
        return res;
    };
    PlayerInfoDC.prototype.unlockSkin = function (id) {
        if (this.isSkinUnlocked(id))
            return;
        this.skins[id] = 1;
        this.save('skins');
    };
    PlayerInfoDC.prototype.randomVideoSkin = function () {
        var res = csv.Skin.values.filter(function (_) { return arr_1234.indexOf(_.subType) > -1 && _.unlockType === 3; });
        g.shuffle(res);
        for (var i = 0; i < res.length; i++) {
            if (!this.skins[res[i].id]) {
                return res[i].id;
            }
        }
        return 0;
    };
    PlayerInfoDC.prototype.useSkin = function (id) {
        if (!this.isSkinUnlocked(id))
            return;
        var data = csv.Skin.get(id);
        var sameTypeSkins = csv.Skin.search(function (v) { return v.type == data.type && v.subType == data.subType && v.id != id; });
        sameTypeSkins.forEach(function (v) {
            if (exports.PlayerInfo.skins[v.id] == 2)
                exports.PlayerInfo.skins[v.id] = 1;
        });
        this.skins[id] = 2;
        this.save('skins');
    };
    ///////////////////////////[skin data end]////////////////////////////
    ///////////////////////////[collection data start]////////////////////////////
    PlayerInfoDC.prototype.initDecoreateData = function () {
        var _this = this;
        csv.on('load', function (v) {
            if (v != 'Collection')
                return;
            csv.Collection.values.forEach(function (v) {
                if (v.unlockType == 1) {
                    //默认选择
                    if (_this.collections[v.id] == null) {
                        _this.collections[v.id] = 2;
                    }
                }
            });
        });
    };
    /**是否已解锁收藏 */
    PlayerInfoDC.prototype.isDecorateUnlocked = function (id) {
        var s = this.collections[id];
        return s >= 1;
    };
    /**是否正在使用收藏中 */
    PlayerInfoDC.prototype.isDecorateUsing = function (id) {
        return this.collections[id] === 2;
    };
    PlayerInfoDC.prototype.unlockDecorate = function (id) {
        if (this.isDecorateUnlocked(id))
            return;
        this.collections[id] = 1;
        this.save('collections');
    };
    PlayerInfoDC.prototype.useDecorate = function (id) {
        if (!this.isDecorateUnlocked(id))
            return;
        var data = csv.Collection.get(id);
        var sameTypeDecorates = csv.Collection.search(function (v) { return v.type == data.type && v.id != id; });
        sameTypeDecorates.forEach(function (v) {
            if (data.type !== 1 && exports.PlayerInfo.collections[v.id] == 2)
                exports.PlayerInfo.collections[v.id] = 1;
        });
        this.collections[id] = 2;
        this.save('collections');
    };
    PlayerInfoDC.prototype.init = function () {
        //如果是新用户
        if (UserInfo_1.UserInfo.isNew) {
            //如果没有过初始化用户数据
            if (this.inited == false) {
                this.inited = true;
                //初始化初始体力
                this.labour = csv.Config.Init_Energy || 5;
                //变成未引导状态 
                //0表示未进行过任何引导
                this.guide = 0;
                this.save();
            }
        }
    };
    PlayerInfoDC.prototype.onStartLevel = function () {
        this.playTime = 0;
    };
    PlayerInfoDC.prototype.onLoadAll = function () {
        // this.updateBuffs();
        //update skin data
        this.initSkinData();
        this.initDecoreateData();
    };
    PlayerInfoDC.prototype.saveExit = function () {
        this.lastExitTime = Date.now() / 1000;
        this.save('buff_labour');
        console.log(this.buff_labour);
        this.save("lastExitTime");
    };
    PlayerInfoDC.prototype.updateBuffs = function () {
        if (this.buff_labour > 0) {
            var diff_sec = (Date.now() / 1000 - this.lastExitTime);
            // 200 260 
            // -60
            console.log("离线时体力" + this.labour);
            console.log("离线时长:" + diff_sec);
            var old = this.labour;
            var _a = gameUtil_1.default.calcOfflineReward(this.labour, this.buff_labour, diff_sec, csv.Config.Max_Energy, 300), coin = _a[0], leftTime = _a[1];
            if (coin >= 0) {
                this.buff_labour = leftTime;
                this.labour = coin;
            }
            var offsetBeforeLLD = (Date.now() - this.lld.getTime()) / 1000;
            //离上次登陆时间 过了超过 10分钟,那么必然恢复满体力
            if (offsetBeforeLLD > 60 * 10 * csv.Config.Max_Energy) {
                this.labour = csv.Config.Max_Energy;
            }
            console.log("现在体力" + this.labour);
            exports.PlayerInfo.nowTili = this.labour;
            // if (old < csv.Config.Max_Energy && this.labour >= csv.Config.Max_Energy && !UserInfo.isDy) {
            //    vm.show("Prefabs/UI/UISubscriber");
            // }
            //  if (this.labour > 5) return;
            //  let left = this.buff_labour - diff_sec;
            //  if (left < 0) {
            //      let offline_reward = Math.floor(diff_sec / 300)
            //      if (offline_reward <= 0) offline_reward = 1;
            //      this.labour += Math.min(offline_reward, 5 - this.labour);
            //      if (this.labour >= 5) {
            //          this.buff_labour = 0
            //      } else {
            //          let left_sec = this.buff_labour - diff_sec % 300;
            //          if (left_sec < 0) left_sec = 300 + left_sec;
            //          this.buff_labour = left_sec
            //      }
            //  } else {
            //      this.buff_labour = left;
            //  }
        }
    };
    PlayerInfoDC.prototype.upRank = function () {
        // if (window.tt) return;
        var kvs = [
            { key: "level", value: JSON.stringify({ level: exports.PlayerInfo.level, challengelevel: exports.PlayerInfo.dailylevel }) },
        ];
        Platform_1.default.uploadScores(kvs);
    };
    PlayerInfoDC.prototype.addLabour = function (add) {
        var c = exports.PlayerInfo.labour + add;
        exports.PlayerInfo.labour = c;
        exports.PlayerInfo.save('labour');
    };
    PlayerInfoDC.prototype.isShowSDK = function () {
        //@ts-ignore
        if (window.qq) {
            return false;
            //@ts-ignore
        }
        else if (window.tt) {
            return false;
        }
        else if (CC_DEBUG) {
            return false;
            //@ts-ignore
        }
        else if (window.wx) {
            return true;
        }
        else {
            return false;
        }
    };
    PlayerInfoDC.prototype.isWechat = function () {
        if (window.qq) {
            return false;
            //@ts-ignore
        }
        else if (window.tt) {
            return false;
        }
        else if (CC_DEBUG) {
            return true;
            //@ts-ignore
        }
        else if (window.wx) {
            return true;
        }
    };
    PlayerInfoDC.prototype.save = function (v, force) {
        if (force === void 0) { force = false; }
        if (v) {
            _super.prototype.save.call(this, v);
            this.save_timestamps = Date.now();
            _super.prototype.save.call(this, "save_timestamps");
            return;
        }
        else {
            _super.prototype.save.call(this);
        }
        var time = this.save_timestamps;
        // do 
        if (!force) {
            if (Date.now() - time < 1000 * csv.Config.Sync_User_Data_Time) {
                console.log("上报太频繁，下次同步。。。。");
                return;
            }
        }
        //未登陆不记录保存时间 
        var data = this.toString();
        if (v == null) {
            console.warn("Start sync to server!", data);
            WeakNetGame_1.default.syncData(data).then(function (v) {
                if (v) {
                    //同步成功
                    console.log("上报用户数据成功");
                }
            });
        }
    };
    /**领取邀请奖励 */
    // 今天邀请(新，老)
    // openId, invitee, avatarUrl, status
    //总邀请
    // openId, inviteeCount ,claimedCount;
    PlayerInfoDC.prototype.claimInviteReward = function () {
    };
    /*获取指定关卡所在的章节数，不传参则返回当前已解锁的最后一章 */
    PlayerInfoDC.prototype.getChapter = function (lv) {
        var level = lv ? lv : this.level;
        var n = Math.floor((level - 1) / 10) + 1;
        return n;
    };
    PlayerInfoDC.prototype.isChapterNew = function (c) {
        return this.newchapter[c] == null;
    };
    PlayerInfoDC.prototype.markChapterOld = function (c) {
        this.newchapter[c] = 1;
        exports.PlayerInfo.save('newchapter');
    };
    /**获得当前解锁的关卡数 */
    PlayerInfoDC.prototype.getCurrentLevel = function () {
        if (this.isPlayingDaily) {
            return exports.PlayerInfo.dailylevel;
        }
        else {
            return exports.PlayerInfo.level;
        }
    };
    /**获得当前正在游玩的关卡数 */
    PlayerInfoDC.prototype.getCurrentPlayingLevel = function () {
        if (this.isPlayingDaily) {
            return exports.PlayerInfo.playingDailyLevel;
        }
        else {
            return exports.PlayerInfo.playinglevel;
        }
    };
    PlayerInfoDC.prototype.resetLevel = function () {
        this.winStatus = 0;
    };
    PlayerInfoDC.prototype.lose = function () {
        this.winStatus = -1;
    };
    //下一关
    PlayerInfoDC.prototype.nextLevel = function () {
        var _this = this;
        this.winStatus = 1;
        var block = false;
        if (this.isPlayingDaily) {
            this.playingDailyLevel += 1;
            if (this.playingDailyLevel > this.dailylevel) {
                this.dailylevel = this.playingDailyLevel;
                if (!window.tt) {
                    UserInfo_1.UserInfo.uploadUserInfo({ level: this.level, challengelevel: this.dailylevel });
                    this.upRank();
                }
            }
        }
        else {
            this.playinglevel += 1;
            if (this.playinglevel > this.level && this.challenge_level_unlocked == false) {
                this.level = this.playinglevel;
                if (this.level === (csv.Config.Chanllenge_Unlock_Level || 25)) {
                    vm.show("Prefabs/UI/UIUnlockMode");
                    this.challenge_level_unlocked = true;
                    block = true;
                }
                csv.Skin.values.forEach(function (v) {
                    if (v.unlockType == 1 && !exports.PlayerInfo.isSkinUnlocked(v.id) && _this.level == v.unlock1) {
                        // PlayerInfo.unlockSkin(v.id);
                        vm.show("Prefabs/UI/UIUnlockSkin", v.id);
                        block = true;
                    }
                });
                var c = exports.PlayerInfo.getChapter(this.level);
                if (exports.PlayerInfo.star >= csv.star.get(c).demand) {
                    var bNew = exports.PlayerInfo.isChapterNew(c);
                    if (c > 1) {
                        if (bNew) {
                            vm.show("Prefabs/story/help", c);
                            block = true;
                            exports.PlayerInfo.markChapterOld(c);
                        }
                    }
                }
                if (!window.tt) {
                    UserInfo_1.UserInfo.uploadUserInfo({ level: this.level, challengelevel: this.dailylevel });
                    this.upRank();
                }
            }
        }
        this.save();
        return block;
    };
    // 比较当前日期和每日挑战表格里的日期 
    PlayerInfoDC.prototype.isGreaterDate = function (date2) {
        var oDate1 = this.lld;
        // oDate1 = new Date("2020/5/16")
        // console.log("当前日期",oDate1);
        var oDate2 = new Date(date2);
        // console.log("表格日期",oDate2);
        if (oDate1.getTime() >= oDate2.getTime()) {
            //  console.log("当前日期大于或等于表格日期");
            return true;
        }
        else {
            // console.log("当前日期小于表格日期");
            return false;
        }
    };
    PlayerInfoDC.prototype.isNewLevel = function (date2) {
        var oDate1 = this.lld;
        // oDate1 = new Date("2020/5/16")
        // console.log("当前日期",oDate1.toDateString());
        var oDate2 = new Date(date2);
        // console.log("表格日期",oDate2.toDateString());
        if (oDate1.toDateString() == oDate2.toDateString()) {
            // console.log("当前日期等于表格日期");
            return true;
        }
        else {
            // console.log("当前日期不等于于表格日期");
            return false;
        }
    };
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "level", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "playinglevel", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "isPlayingDaily", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "isPlayingSpecial", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "dailylevel", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "playingDailyLevel", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "labour", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "buff_labour", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "lastExitTime", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "challenge_level_unlocked", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "inviterId", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "openId", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "version", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "inited", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "is_guide_4", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "challenge_gift", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "level_star", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "collections", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "is_guide_15", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "isguided_badman", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "isUnlock_Prop", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "guide", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "boxProgress", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "newchapter", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "skins", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "isFavClaimed", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "signCount", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "signTime", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "star", void 0);
    __decorate([
        DataCenter_1.field({ persistent: false, enumerable: false, readonly: true })
    ], PlayerInfoDC.prototype, "lld", void 0);
    __decorate([
        DataCenter_1.field()
    ], PlayerInfoDC.prototype, "isUse", void 0);
    PlayerInfoDC = __decorate([
        DataCenter_1.dc("PlayerInfo")
    ], PlayerInfoDC);
    return PlayerInfoDC;
}(DataCenter_1.default));
exports.default = PlayerInfoDC;
exports.PlayerInfo = DataCenter_1.default.register(PlayerInfoDC);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcQ29tbW9uXFxCYXNlXFxQbGF5ZXJJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvRUFBOEU7QUFDOUUsaUVBQTREO0FBQzVELHFFQUFnRTtBQUNoRSxtRkFBa0Y7QUFDbEYseUZBQW9GO0FBS3BGLElBQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFHN0I7SUFBMEMsZ0NBQVU7SUFBcEQ7UUFBQSxxRUF5aUJDO1FBdmlCRSxNQUFNO1FBRU4sV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixNQUFNO1FBRU4sa0JBQVksR0FBVyxDQUFDLENBQUM7UUFFekIsV0FBVztRQUVYLG9CQUFjLEdBQVksS0FBSyxDQUFDO1FBRWhDLFdBQVc7UUFFWCxzQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFFbEMsUUFBUTtRQUVSLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBRXZCLFVBQVU7UUFFVix1QkFBaUIsR0FBVyxDQUFDLENBQUM7UUFFOUIsSUFBSTtRQUVKLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFFcEIsV0FBVztRQUVYLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRXhCLFNBQVM7UUFFVCxrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUl6Qiw4QkFBd0IsR0FBWSxLQUFLLENBQUM7UUFLMUMsWUFBWTtRQUVaLGVBQVMsR0FBVyxDQUFDLENBQUE7UUFHckIsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUVwQjs7O2FBR0s7UUFDTDs7Ozs7O1dBTUc7UUFFSCxhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBR1osWUFBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixTQUFTO1FBRVQsZ0JBQVUsR0FBRyxLQUFLLENBQUM7UUFHbkIsVUFBVTtRQUVWLG9CQUFjLEdBQWEsRUFBRSxDQUFDO1FBRTlCLFFBQVE7UUFF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QUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7NkNBQ3pDO0lBS3ZCO1FBREMsa0JBQUssRUFBRTsrQ0FDZTtJQXJRTCxZQUFZO1FBRGhDLGVBQUUsQ0FBQyxZQUFZLENBQUM7T0FDSSxZQUFZLENBeWlCaEM7SUFBRCxtQkFBQztDQXppQkQsQUF5aUJDLENBemlCeUMsb0JBQVUsR0F5aUJuRDtrQkF6aUJvQixZQUFZO0FBNGlCdEIsUUFBQSxVQUFVLEdBQWlCLG9CQUFVLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGFDZW50ZXIsIHsgZGMsIGZpZWxkIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1ld29yay9jb3JlL0RhdGFDZW50ZXJcIjtcclxuaW1wb3J0IGdhbWVVdGlsIGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZXdvcmsvdXRpbHMvZ2FtZVV0aWxcIjtcclxuaW1wb3J0IFBsYXRmb3JtIGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL1BsYXRmb3JtXCI7XHJcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgV2Vha05ldEdhbWUgZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9XZWFrTmV0R2FtZVwiO1xyXG5pbXBvcnQgTmV0IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZXdvcmsvbWlzYy9OZXRcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4vU2VydmVyQ29uZmlnXCI7XHJcbmltcG9ydCB7IGV2dCB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZXdvcmsvY29yZS9ldmVudFwiO1xyXG5cclxuY29uc3QgYXJyXzEyMzQgPSBbMSwgMiwgMywgNF1cclxuXHJcbkBkYyhcIlBsYXllckluZm9cIilcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVySW5mb0RDIGV4dGVuZHMgRGF0YUNlbnRlciB7XHJcblxyXG4gICAvL+ino+mUgeWFs+WNoVxyXG4gICBAZmllbGQoKVxyXG4gICBsZXZlbDogbnVtYmVyID0gMTtcclxuXHJcbiAgIC8v5b2T5YmN5YWz5Y2hXHJcbiAgIEBmaWVsZCgpXHJcbiAgIHBsYXlpbmdsZXZlbDogbnVtYmVyID0gMTtcclxuXHJcbiAgIC8v5piv5ZCm5Zyo5ri4546p5q+P5pel5YWz5Y2hXHJcbiAgIEBmaWVsZCgpXHJcbiAgIGlzUGxheWluZ0RhaWx5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAvL+aYr+WQpuWcqOa4uOeOqeeJueauiuWFs+WNoVxyXG4gICBAZmllbGQoKVxyXG4gICBpc1BsYXlpbmdTcGVjaWFsOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAvL+ino+mUgeavj+aXpeWFs+WNoVxyXG4gICBAZmllbGQoKVxyXG4gICBkYWlseWxldmVsOiBudW1iZXIgPSAxO1xyXG5cclxuICAgLy/lvZPliY3muLjnjqnmr4/ml6XlhbPljaFcclxuICAgQGZpZWxkKClcclxuICAgcGxheWluZ0RhaWx5TGV2ZWw6IG51bWJlciA9IDA7XHJcblxyXG4gICAvL+S9k+WKm1xyXG4gICBAZmllbGQoKVxyXG4gICBsYWJvdXI6IG51bWJlciA9IDEwO1xyXG5cclxuICAgLy/kvZPlipvmgaLlpI0g5Ymp5L2Z5pe26Ze0XHJcbiAgIEBmaWVsZCgpXHJcbiAgIGJ1ZmZfbGFib3VyOiBudW1iZXIgPSAwO1xyXG5cclxuICAgLy/kuIrmrKHpgIDlh7rnmoTml7bpl7RcclxuICAgQGZpZWxkKClcclxuICAgbGFzdEV4aXRUaW1lOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgIEBmaWVsZCgpXHJcbiAgIGNoYWxsZW5nZV9sZXZlbF91bmxvY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcblxyXG5cclxuICAgLyoq6YKA6K+36ICF55qEaWQgKi9cclxuICAgQGZpZWxkKClcclxuICAgaW52aXRlcklkOiBudW1iZXIgPSAwXHJcblxyXG4gICBAZmllbGQoKVxyXG4gICBvcGVuSWQ6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAvKipcclxuICAgICog5q+P5qyh5re75YqgIOWIoOmZpCDlrZfmrrXvvIzpnIDopoHluKbkuIrniYjmnKzlj7cgIFxyXG4gICAgKiDljYfnuqflkI7vvIzmlrDnmoRrZXkg5Lya6KKr5Yqg5YWl77yM5Yig6Zmk55qEa2V577yM5Lya5L+d55WZIO+8jOeJiOacrOWlveS4jeS8muabtOaWsFxyXG4gICAgKiAqL1xyXG4gICAvKip2ZXJzaW9uIDI6XHJcbiAgICAqIC1pbml0ZWRcclxuICAgICogdmVyc2lvbiAzOlxyXG4gICAgKiAtIGlzZ3VpZGVkIChyZW1vdmVkKVxyXG4gICAgKiAtIGlzX2d1aWRlXzQgKGFkZClcclxuICAgICogLSBpc2d1aWRlZF9iYWRtYW4gKGFkZClcclxuICAgICovXHJcbiAgIEBmaWVsZCgpXHJcbiAgIHZlcnNpb24gPSAzO1xyXG5cclxuICAgQGZpZWxkKClcclxuICAgaW5pdGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAvL+aYr+WQpui/h+W8leWvvDTlhbNcclxuICAgQGZpZWxkKClcclxuICAgaXNfZ3VpZGVfNCA9IGZhbHNlO1xyXG5cclxuXHJcbiAgIC8v5oyR5oiY5qih5byP6Zi25q6156S85YyFXHJcbiAgIEBmaWVsZCgpXHJcbiAgIGNoYWxsZW5nZV9naWZ0OiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgLy/lhbPljaHmmJ/mmJ/mlbDph49cclxuICAgQGZpZWxkKClcclxuICAgbGV2ZWxfc3RhcjogeyBbaW5kZXg6IG51bWJlcl06IG51bWJlciB9ID0ge307XHJcblxyXG4gICAvL+aIkeeahOaUtuiXj+Wunei0nVxyXG4gICBAZmllbGQoKVxyXG4gICBjb2xsZWN0aW9uczogeyBbaW5kZXg6IG51bWJlcl06IG51bWJlciB9ID0ge307XHJcblxyXG4gICAvL+aYr+WQpui/h+W8leWvvDE15YWzXHJcbiAgIEBmaWVsZCgpXHJcbiAgIGlzX2d1aWRlXzE1ID0gZmFsc2U7XHJcblxyXG4gICAvLyoq5piv5ZCm5q2j5Zyo5byV5a+8ICovXHJcbiAgIGlzSW5HdWlkZSA9IGZhbHNlO1xyXG5cclxuICAgLyoq5piv5ZCm5byV5a+86L+H5Z2P5Lq65YWz5Y2hICovXHJcbiAgIEBmaWVsZCgpXHJcbiAgIGlzZ3VpZGVkX2JhZG1hbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgLyoq5piv5ZCm6Kej6ZSB6YGT5YW3ICovXHJcbiAgIEBmaWVsZCgpXHJcbiAgIGlzVW5sb2NrX1Byb3A6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIEBmaWVsZCgpXHJcbiAgIGd1aWRlOiBudW1iZXIgPSAxO1xyXG5cclxuICAgQGZpZWxkKClcclxuICAgYm94UHJvZ3Jlc3M6IG51bWJlciA9IDA7XHJcblxyXG4gICAvLzEgOiB3aW4gLCAtMSA6IGxvc2UgICwgMDp1bnN1cmVcclxuICAgd2luU3RhdHVzOiBudW1iZXIgPSAwO1xyXG5cclxuICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vW2NoYXB0ZXIgaGVscF0vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgIEBmaWVsZCgpXHJcbiAgIG5ld2NoYXB0ZXI6IHsgW2luZGV4OiBudW1iZXJdOiBudW1iZXIgfSA9IHt9XHJcblxyXG4gICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9bc2tpbiBkYXRhXS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgLy8gW2lkOnN0YXR1c11cclxuICAgQGZpZWxkKClcclxuICAgc2tpbnM6IHsgW2luZGV4OiBudW1iZXJdOiBudW1iZXIgfSA9IHt9XHJcblxyXG5cclxuICAgQGZpZWxkKClcclxuICAgaXNGYXZDbGFpbWVkOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICBjbGFpbUZhdigpe1xyXG4gICAgICB0aGlzLmlzRmF2Q2xhaW1lZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2F2ZShcImlzRmF2Q2xhaW1lZFwiKVxyXG4gICB9XHJcblxyXG4gICBpbml0U2tpbkRhdGEoKSB7XHJcbiAgICAgIGNzdi5vbignbG9hZCcsIHYgPT4ge1xyXG4gICAgICAgICBpZiAodiAhPSAnU2tpbicpIHJldHVybjtcclxuICAgICAgICAgY3N2LlNraW4udmFsdWVzLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2LnVubG9ja1R5cGUgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAvL+m7mOiupOmAieaLqVxyXG4gICAgICAgICAgICAgICBpZiAodGhpcy5za2luc1t2LmlkXSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2tpbnNbdi5pZF0gPSAyO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgfVxyXG5cclxuICAgLyoq5piv5ZCm5bey6Kej6ZSBICovXHJcbiAgIGlzU2tpblVubG9ja2VkKGlkKSB7XHJcbiAgICAgIGxldCBzID0gdGhpcy5za2luc1tpZF1cclxuICAgICAgcmV0dXJuIHMgPj0gMTtcclxuICAgfVxyXG4gICAvKirmmK/lkKbmraPlnKjkvb/nlKjkuK0gKi9cclxuICAgaXNTa2luVXNpbmcoaWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2tpbnNbaWRdID09IDI7XHJcbiAgIH1cclxuXHJcblxyXG4gICBpc0FsbFNraW5VbmxvY2tlZCgpIHtcclxuICAgICAgbGV0IHJlcyA9IGNzdi5Ta2luLnZhbHVlcy5maWx0ZXIodiA9PiBhcnJfMTIzNC5pbmRleE9mKHYuc3ViVHlwZSkgPiAtMSAmJiB2LnVubG9ja1R5cGUgPT09IDMpXHJcbiAgICAgICAgIC5ldmVyeShfID0+IHRoaXMuaXNTa2luVW5sb2NrZWQoXy5pZCkpO1xyXG4gICAgICByZXR1cm4gcmVzO1xyXG4gICB9XHJcblxyXG4gICB1bmxvY2tTa2luKGlkKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzU2tpblVubG9ja2VkKGlkKSkgcmV0dXJuO1xyXG4gICAgICB0aGlzLnNraW5zW2lkXSA9IDE7XHJcbiAgICAgIHRoaXMuc2F2ZSgnc2tpbnMnKTtcclxuICAgfVxyXG5cclxuICAgcmFuZG9tVmlkZW9Ta2luKCkgeyAvLyDkuI3lkKvkuLvpopjlkozpkqXljJlcclxuICAgICAgbGV0IHJlcyA9IGNzdi5Ta2luLnZhbHVlcy5maWx0ZXIoXyA9PiBhcnJfMTIzNC5pbmRleE9mKF8uc3ViVHlwZSkgPiAtMSAmJiBfLnVubG9ja1R5cGUgPT09IDMpO1xyXG4gICAgICBnLnNodWZmbGUocmVzKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgaWYgKCF0aGlzLnNraW5zW3Jlc1tpXS5pZF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc1tpXS5pZDtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICB9XHJcblxyXG4gICB1c2VTa2luKGlkKSB7XHJcbiAgICAgIGlmICghdGhpcy5pc1NraW5VbmxvY2tlZChpZCkpIHJldHVybjtcclxuICAgICAgbGV0IGRhdGE6IGNzdi5Ta2luX1JvdyA9IGNzdi5Ta2luLmdldChpZCk7XHJcbiAgICAgIGxldCBzYW1lVHlwZVNraW5zID0gY3N2LlNraW4uc2VhcmNoKHYgPT4gdi50eXBlID09IGRhdGEudHlwZSAmJiB2LnN1YlR5cGUgPT0gZGF0YS5zdWJUeXBlICYmIHYuaWQgIT0gaWQpXHJcbiAgICAgIHNhbWVUeXBlU2tpbnMuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgaWYgKFBsYXllckluZm8uc2tpbnNbdi5pZF0gPT0gMilcclxuICAgICAgICAgICAgUGxheWVySW5mby5za2luc1t2LmlkXSA9IDE7XHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2tpbnNbaWRdID0gMjtcclxuICAgICAgdGhpcy5zYXZlKCdza2lucycpO1xyXG4gICB9XHJcblxyXG4gICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9bc2tpbiBkYXRhIGVuZF0vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vW2NvbGxlY3Rpb24gZGF0YSBzdGFydF0vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICBpbml0RGVjb3JlYXRlRGF0YSgpIHtcclxuICAgICAgY3N2Lm9uKCdsb2FkJywgdiA9PiB7XHJcbiAgICAgICAgIGlmICh2ICE9ICdDb2xsZWN0aW9uJykgcmV0dXJuO1xyXG4gICAgICAgICBjc3YuQ29sbGVjdGlvbi52YWx1ZXMuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgICAgaWYgKHYudW5sb2NrVHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgIC8v6buY6K6k6YCJ5oupXHJcbiAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbGxlY3Rpb25zW3YuaWRdID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5jb2xsZWN0aW9uc1t2LmlkXSA9IDI7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICB9XHJcblxyXG4gICAvKirmmK/lkKblt7Lop6PplIHmlLbol48gKi9cclxuICAgaXNEZWNvcmF0ZVVubG9ja2VkKGlkKSB7XHJcbiAgICAgIGxldCBzID0gdGhpcy5jb2xsZWN0aW9uc1tpZF07XHJcbiAgICAgIHJldHVybiBzID49IDE7XHJcbiAgIH1cclxuXHJcbiAgIC8qKuaYr+WQpuato+WcqOS9v+eUqOaUtuiXj+S4rSAqL1xyXG4gICBpc0RlY29yYXRlVXNpbmcoaWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbnNbaWRdID09PSAyO1xyXG4gICB9XHJcblxyXG4gICB1bmxvY2tEZWNvcmF0ZShpZCkge1xyXG4gICAgICBpZiAodGhpcy5pc0RlY29yYXRlVW5sb2NrZWQoaWQpKSByZXR1cm47XHJcbiAgICAgIHRoaXMuY29sbGVjdGlvbnNbaWRdID0gMTtcclxuICAgICAgdGhpcy5zYXZlKCdjb2xsZWN0aW9ucycpO1xyXG4gICB9XHJcblxyXG4gICB1c2VEZWNvcmF0ZShpZCkge1xyXG4gICAgICBpZiAoIXRoaXMuaXNEZWNvcmF0ZVVubG9ja2VkKGlkKSkgcmV0dXJuO1xyXG4gICAgICBsZXQgZGF0YTogY3N2LkNvbGxlY3Rpb25fUm93ID0gY3N2LkNvbGxlY3Rpb24uZ2V0KGlkKTtcclxuICAgICAgbGV0IHNhbWVUeXBlRGVjb3JhdGVzID0gY3N2LkNvbGxlY3Rpb24uc2VhcmNoKHYgPT4gdi50eXBlID09IGRhdGEudHlwZSAmJiB2LmlkICE9IGlkKTtcclxuICAgICAgc2FtZVR5cGVEZWNvcmF0ZXMuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgaWYgKGRhdGEudHlwZSAhPT0gMSAmJiBQbGF5ZXJJbmZvLmNvbGxlY3Rpb25zW3YuaWRdID09IDIpXHJcbiAgICAgICAgICAgIFBsYXllckluZm8uY29sbGVjdGlvbnNbdi5pZF0gPSAxO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5jb2xsZWN0aW9uc1tpZF0gPSAyO1xyXG4gICAgICB0aGlzLnNhdmUoJ2NvbGxlY3Rpb25zJyk7XHJcbiAgIH1cclxuXHJcblxyXG4gICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9bc2lnbiBzdGFydF0vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgIEBmaWVsZCgpXHJcbiAgIHNpZ25Db3VudDogbnVtYmVyID0gMDtcclxuXHJcbiAgIEBmaWVsZCgpXHJcbiAgIHNpZ25UaW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vW3NpZ24gc3RhcnRdLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgIEBmaWVsZCgpXHJcbiAgIHN0YXI6IG51bWJlciA9IDA7XHJcblxyXG5cclxuICAgLy/ov57nu63og5zliKlcclxuICAgd2luTGluazogbnVtYmVyID0gMDtcclxuXHJcbiAgIEBmaWVsZCh7IHBlcnNpc3RlbnQ6IGZhbHNlLCBlbnVtZXJhYmxlOiBmYWxzZSwgcmVhZG9ubHk6IHRydWUgfSlcclxuICAgbGxkOiBEYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgIG5vd1RpbGk6IG51bWJlciA9IDA7XHJcbiAgIC8v5b2T5aSp5piv5ZCm5raI6ICX6L+H5L2T5YqbXHJcbiAgIEBmaWVsZCgpXHJcbiAgIGlzVXNlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBtYXhEYWlseUx2OiBudW1iZXIgPSAwO1xyXG4gICBwbGF5VGltZTogbnVtYmVyID0gMDtcclxuICAgaXNSYW5kb21MZXZlbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBpbml0KCkge1xyXG4gICAgICAvL+WmguaenOaYr+aWsOeUqOaIt1xyXG4gICAgICBpZiAoVXNlckluZm8uaXNOZXcpIHtcclxuICAgICAgICAgLy/lpoLmnpzmsqHmnInov4fliJ3lp4vljJbnlKjmiLfmlbDmja5cclxuICAgICAgICAgaWYgKHRoaXMuaW5pdGVkID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy/liJ3lp4vljJbliJ3lp4vkvZPliptcclxuICAgICAgICAgICAgdGhpcy5sYWJvdXIgPSBjc3YuQ29uZmlnLkluaXRfRW5lcmd5IHx8IDU7XHJcbiAgICAgICAgICAgIC8v5Y+Y5oiQ5pyq5byV5a+854q25oCBIFxyXG4gICAgICAgICAgICAvLzDooajnpLrmnKrov5vooYzov4fku7vkvZXlvJXlr7xcclxuICAgICAgICAgICAgdGhpcy5ndWlkZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZSgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgb25TdGFydExldmVsKCkge1xyXG4gICAgICB0aGlzLnBsYXlUaW1lID0gMDtcclxuICAgfVxyXG5cclxuICAgb25Mb2FkQWxsKCkge1xyXG4gICAgICAvLyB0aGlzLnVwZGF0ZUJ1ZmZzKCk7XHJcbiAgICAgIC8vdXBkYXRlIHNraW4gZGF0YVxyXG4gICAgICB0aGlzLmluaXRTa2luRGF0YSgpO1xyXG4gICAgICB0aGlzLmluaXREZWNvcmVhdGVEYXRhKCk7XHJcbiAgIH1cclxuXHJcbiAgIHNhdmVFeGl0KCkge1xyXG4gICAgICB0aGlzLmxhc3RFeGl0VGltZSA9IERhdGUubm93KCkgLyAxMDAwO1xyXG4gICAgICB0aGlzLnNhdmUoJ2J1ZmZfbGFib3VyJylcclxuICAgICAgY29uc29sZS5sb2codGhpcy5idWZmX2xhYm91cik7XHJcbiAgICAgIHRoaXMuc2F2ZShcImxhc3RFeGl0VGltZVwiKVxyXG4gICB9XHJcblxyXG4gICB1cGRhdGVCdWZmcygpIHtcclxuXHJcbiAgICAgIGlmICh0aGlzLmJ1ZmZfbGFib3VyID4gMCkge1xyXG4gICAgICAgICBsZXQgZGlmZl9zZWMgPSAoRGF0ZS5ub3coKSAvIDEwMDAgLSB0aGlzLmxhc3RFeGl0VGltZSk7XHJcbiAgICAgICAgIC8vIDIwMCAyNjAgXHJcbiAgICAgICAgIC8vIC02MFxyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIuemu+e6v+aXtuS9k+WKm1wiICsgdGhpcy5sYWJvdXIpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIuemu+e6v+aXtumVvzpcIiArIGRpZmZfc2VjKTtcclxuICAgICAgICAgbGV0IG9sZCA9IHRoaXMubGFib3VyO1xyXG4gICAgICAgICBsZXQgW2NvaW4sIGxlZnRUaW1lXSA9IGdhbWVVdGlsLmNhbGNPZmZsaW5lUmV3YXJkKHRoaXMubGFib3VyLCB0aGlzLmJ1ZmZfbGFib3VyLCBkaWZmX3NlYywgY3N2LkNvbmZpZy5NYXhfRW5lcmd5LCAzMDApO1xyXG4gICAgICAgICBpZiAoY29pbiA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVmZl9sYWJvdXIgPSBsZWZ0VGltZTtcclxuICAgICAgICAgICAgdGhpcy5sYWJvdXIgPSBjb2luO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGxldCBvZmZzZXRCZWZvcmVMTEQgPSAoRGF0ZS5ub3coKSAtIHRoaXMubGxkLmdldFRpbWUoKSkgLyAxMDAwO1xyXG4gICAgICAgICAvL+emu+S4iuasoeeZu+mZhuaXtumXtCDov4fkuobotoXov4cgMTDliIbpkp8s6YKj5LmI5b+F54S25oGi5aSN5ruh5L2T5YqbXHJcbiAgICAgICAgIGlmIChvZmZzZXRCZWZvcmVMTEQgPiA2MCAqIDEwICogY3N2LkNvbmZpZy5NYXhfRW5lcmd5KSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFib3VyID0gY3N2LkNvbmZpZy5NYXhfRW5lcmd5O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwi546w5Zyo5L2T5YqbXCIgKyB0aGlzLmxhYm91cik7XHJcbiAgICAgICAgIFBsYXllckluZm8ubm93VGlsaSA9IHRoaXMubGFib3VyO1xyXG4gICAgICAgICAvLyBpZiAob2xkIDwgY3N2LkNvbmZpZy5NYXhfRW5lcmd5ICYmIHRoaXMubGFib3VyID49IGNzdi5Db25maWcuTWF4X0VuZXJneSAmJiAhVXNlckluZm8uaXNEeSkge1xyXG4gICAgICAgICAvLyAgICB2bS5zaG93KFwiUHJlZmFicy9VSS9VSVN1YnNjcmliZXJcIik7XHJcbiAgICAgICAgIC8vIH1cclxuICAgICAgICAgLy8gIGlmICh0aGlzLmxhYm91ciA+IDUpIHJldHVybjtcclxuICAgICAgICAgLy8gIGxldCBsZWZ0ID0gdGhpcy5idWZmX2xhYm91ciAtIGRpZmZfc2VjO1xyXG4gICAgICAgICAvLyAgaWYgKGxlZnQgPCAwKSB7XHJcbiAgICAgICAgIC8vICAgICAgbGV0IG9mZmxpbmVfcmV3YXJkID0gTWF0aC5mbG9vcihkaWZmX3NlYyAvIDMwMClcclxuICAgICAgICAgLy8gICAgICBpZiAob2ZmbGluZV9yZXdhcmQgPD0gMCkgb2ZmbGluZV9yZXdhcmQgPSAxO1xyXG4gICAgICAgICAvLyAgICAgIHRoaXMubGFib3VyICs9IE1hdGgubWluKG9mZmxpbmVfcmV3YXJkLCA1IC0gdGhpcy5sYWJvdXIpO1xyXG4gICAgICAgICAvLyAgICAgIGlmICh0aGlzLmxhYm91ciA+PSA1KSB7XHJcbiAgICAgICAgIC8vICAgICAgICAgIHRoaXMuYnVmZl9sYWJvdXIgPSAwXHJcbiAgICAgICAgIC8vICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgLy8gICAgICAgICAgbGV0IGxlZnRfc2VjID0gdGhpcy5idWZmX2xhYm91ciAtIGRpZmZfc2VjICUgMzAwO1xyXG4gICAgICAgICAvLyAgICAgICAgICBpZiAobGVmdF9zZWMgPCAwKSBsZWZ0X3NlYyA9IDMwMCArIGxlZnRfc2VjO1xyXG4gICAgICAgICAvLyAgICAgICAgICB0aGlzLmJ1ZmZfbGFib3VyID0gbGVmdF9zZWNcclxuICAgICAgICAgLy8gICAgICB9XHJcbiAgICAgICAgIC8vICB9IGVsc2Uge1xyXG4gICAgICAgICAvLyAgICAgIHRoaXMuYnVmZl9sYWJvdXIgPSBsZWZ0O1xyXG4gICAgICAgICAvLyAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHVwUmFuaygpIHtcclxuICAgICAgLy8gaWYgKHdpbmRvdy50dCkgcmV0dXJuO1xyXG4gICAgICBsZXQga3ZzID0gW1xyXG4gICAgICAgICB7IGtleTogXCJsZXZlbFwiLCB2YWx1ZTogSlNPTi5zdHJpbmdpZnkoeyBsZXZlbDogUGxheWVySW5mby5sZXZlbCwgY2hhbGxlbmdlbGV2ZWw6IFBsYXllckluZm8uZGFpbHlsZXZlbCB9KSB9LFxyXG4gICAgICBdXHJcbiAgICAgIFBsYXRmb3JtLnVwbG9hZFNjb3JlcyhrdnMpXHJcbiAgIH1cclxuXHJcbiAgIGFkZExhYm91cihhZGQpIHtcclxuICAgICAgbGV0IGMgPSBQbGF5ZXJJbmZvLmxhYm91ciArIGFkZFxyXG4gICAgICBQbGF5ZXJJbmZvLmxhYm91ciA9IGM7XHJcbiAgICAgIFBsYXllckluZm8uc2F2ZSgnbGFib3VyJyk7XHJcbiAgIH1cclxuXHJcbiAgIGlzU2hvd1NESygpIHtcclxuICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgIGlmICh3aW5kb3cucXEpIHtcclxuICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgfSBlbHNlIGlmICh3aW5kb3cudHQpIHtcclxuICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IGVsc2UgaWYgKENDX0RFQlVHKSB7XHJcbiAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgIH0gZWxzZSBpZiAod2luZG93Lnd4KSB7XHJcbiAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgaXNXZWNoYXQoKSB7XHJcbiAgICAgIGlmICh3aW5kb3cucXEpIHtcclxuICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgfSBlbHNlIGlmICh3aW5kb3cudHQpIHtcclxuICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IGVsc2UgaWYgKENDX0RFQlVHKSB7XHJcbiAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgfSBlbHNlIGlmICh3aW5kb3cud3gpIHtcclxuICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgc2F2ZSh2PywgZm9yY2UgPSBmYWxzZSkge1xyXG4gICAgICBpZiAodikge1xyXG4gICAgICAgICBzdXBlci5zYXZlKHYpO1xyXG4gICAgICAgICB0aGlzLnNhdmVfdGltZXN0YW1wcyA9IERhdGUubm93KCk7XHJcbiAgICAgICAgIHN1cGVyLnNhdmUoXCJzYXZlX3RpbWVzdGFtcHNcIilcclxuICAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBzdXBlci5zYXZlKCk7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHRpbWUgPSB0aGlzLnNhdmVfdGltZXN0YW1wc1xyXG4gICAgICAvLyBkbyBcclxuICAgICAgaWYgKCFmb3JjZSkge1xyXG4gICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHRpbWUgPCAxMDAwICogY3N2LkNvbmZpZy5TeW5jX1VzZXJfRGF0YV9UaW1lKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5LiK5oql5aSq6aKR57mB77yM5LiL5qyh5ZCM5q2l44CC44CC44CC44CCXCIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8v5pyq55m76ZmG5LiN6K6w5b2V5L+d5a2Y5pe26Ze0IFxyXG4gICAgICBsZXQgZGF0YSA9IHRoaXMudG9TdHJpbmcoKVxyXG4gICAgICBpZiAodiA9PSBudWxsKSB7XHJcbiAgICAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0IHN5bmMgdG8gc2VydmVyIVwiLCBkYXRhKTtcclxuICAgICAgICAgV2Vha05ldEdhbWUuc3luY0RhdGEoZGF0YSkudGhlbih2ID0+IHtcclxuICAgICAgICAgICAgaWYgKHYpIHtcclxuICAgICAgICAgICAgICAgLy/lkIzmraXmiJDlip9cclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLkuIrmiqXnlKjmiLfmlbDmja7miJDlip9cIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKumihuWPlumCgOivt+WlluWKsSAqL1xyXG4gICAvLyDku4rlpKnpgoDor7co5paw77yM6ICBKVxyXG4gICAvLyBvcGVuSWQsIGludml0ZWUsIGF2YXRhclVybCwgc3RhdHVzXHJcbiAgIC8v5oC76YKA6K+3XHJcbiAgIC8vIG9wZW5JZCwgaW52aXRlZUNvdW50ICxjbGFpbWVkQ291bnQ7XHJcbiAgIGNsYWltSW52aXRlUmV3YXJkKCkge1xyXG5cclxuICAgfVxyXG5cclxuICAgLyrojrflj5bmjIflrprlhbPljaHmiYDlnKjnmoTnq6DoioLmlbDvvIzkuI3kvKDlj4LliJnov5Tlm57lvZPliY3lt7Lop6PplIHnmoTmnIDlkI7kuIDnq6AgKi9cclxuICAgZ2V0Q2hhcHRlcihsdj8pIHtcclxuICAgICAgbGV0IGxldmVsID0gbHYgPyBsdiA6IHRoaXMubGV2ZWxcclxuICAgICAgbGV0IG4gPSBNYXRoLmZsb29yKChsZXZlbCAtIDEpIC8gMTApICsgMTtcclxuICAgICAgcmV0dXJuIG47XHJcbiAgIH1cclxuXHJcbiAgIGlzQ2hhcHRlck5ldyhjKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5ld2NoYXB0ZXJbY10gPT0gbnVsbDtcclxuICAgfVxyXG5cclxuICAgbWFya0NoYXB0ZXJPbGQoYykge1xyXG4gICAgICB0aGlzLm5ld2NoYXB0ZXJbY10gPSAxO1xyXG4gICAgICBQbGF5ZXJJbmZvLnNhdmUoJ25ld2NoYXB0ZXInKVxyXG4gICB9XHJcblxyXG4gICAvKirojrflvpflvZPliY3op6PplIHnmoTlhbPljaHmlbAgKi9cclxuICAgZ2V0Q3VycmVudExldmVsKCkge1xyXG4gICAgICBpZiAodGhpcy5pc1BsYXlpbmdEYWlseSkge1xyXG4gICAgICAgICByZXR1cm4gUGxheWVySW5mby5kYWlseWxldmVsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gUGxheWVySW5mby5sZXZlbDtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKirojrflvpflvZPliY3mraPlnKjmuLjnjqnnmoTlhbPljaHmlbAgKi9cclxuICAgZ2V0Q3VycmVudFBsYXlpbmdMZXZlbCgpIHtcclxuICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nRGFpbHkpIHtcclxuICAgICAgICAgcmV0dXJuIFBsYXllckluZm8ucGxheWluZ0RhaWx5TGV2ZWw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiBQbGF5ZXJJbmZvLnBsYXlpbmdsZXZlbDtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICByZXNldExldmVsKCkge1xyXG4gICAgICB0aGlzLndpblN0YXR1cyA9IDA7XHJcbiAgIH1cclxuXHJcbiAgIGxvc2UoKSB7XHJcbiAgICAgIHRoaXMud2luU3RhdHVzID0gLTE7XHJcbiAgIH1cclxuXHJcbiAgIC8v5LiL5LiA5YWzXHJcbiAgIG5leHRMZXZlbCgpIHtcclxuICAgICAgdGhpcy53aW5TdGF0dXMgPSAxXHJcbiAgICAgIGxldCBibG9jayA9IGZhbHNlO1xyXG4gICAgICBpZiAodGhpcy5pc1BsYXlpbmdEYWlseSkge1xyXG4gICAgICAgICB0aGlzLnBsYXlpbmdEYWlseUxldmVsICs9IDE7XHJcbiAgICAgICAgIGlmICh0aGlzLnBsYXlpbmdEYWlseUxldmVsID4gdGhpcy5kYWlseWxldmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGFpbHlsZXZlbCA9IHRoaXMucGxheWluZ0RhaWx5TGV2ZWw7XHJcbiAgICAgICAgICAgIGlmICghd2luZG93LnR0KSB7XHJcbiAgICAgICAgICAgICAgIFVzZXJJbmZvLnVwbG9hZFVzZXJJbmZvKHsgbGV2ZWw6IHRoaXMubGV2ZWwsIGNoYWxsZW5nZWxldmVsOiB0aGlzLmRhaWx5bGV2ZWwgfSk7XHJcbiAgICAgICAgICAgICAgIHRoaXMudXBSYW5rKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnBsYXlpbmdsZXZlbCArPSAxO1xyXG4gICAgICAgICBpZiAodGhpcy5wbGF5aW5nbGV2ZWwgPiB0aGlzLmxldmVsICYmIHRoaXMuY2hhbGxlbmdlX2xldmVsX3VubG9ja2VkID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLnBsYXlpbmdsZXZlbDtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV2ZWwgPT09IChjc3YuQ29uZmlnLkNoYW5sbGVuZ2VfVW5sb2NrX0xldmVsIHx8IDI1KSkge1xyXG4gICAgICAgICAgICAgICB2bS5zaG93KFwiUHJlZmFicy9VSS9VSVVubG9ja01vZGVcIilcclxuICAgICAgICAgICAgICAgdGhpcy5jaGFsbGVuZ2VfbGV2ZWxfdW5sb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICBibG9jayA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3N2LlNraW4udmFsdWVzLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICAgICAgIGlmICh2LnVubG9ja1R5cGUgPT0gMSAmJiAhUGxheWVySW5mby5pc1NraW5VbmxvY2tlZCh2LmlkKSAmJiB0aGlzLmxldmVsID09IHYudW5sb2NrMSkge1xyXG4gICAgICAgICAgICAgICAgICAvLyBQbGF5ZXJJbmZvLnVubG9ja1NraW4odi5pZCk7XHJcbiAgICAgICAgICAgICAgICAgIHZtLnNob3coXCJQcmVmYWJzL1VJL1VJVW5sb2NrU2tpblwiLCB2LmlkKTtcclxuICAgICAgICAgICAgICAgICAgYmxvY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgYyA9IFBsYXllckluZm8uZ2V0Q2hhcHRlcih0aGlzLmxldmVsKTtcclxuICAgICAgICAgICAgaWYgKFBsYXllckluZm8uc3RhciA+PSBjc3Yuc3Rhci5nZXQoYykuZGVtYW5kKSB7XHJcbiAgICAgICAgICAgICAgIGxldCBiTmV3ID0gUGxheWVySW5mby5pc0NoYXB0ZXJOZXcoYylcclxuICAgICAgICAgICAgICAgaWYgKGMgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChiTmV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHZtLnNob3coXCJQcmVmYWJzL3N0b3J5L2hlbHBcIiwgYylcclxuICAgICAgICAgICAgICAgICAgICAgYmxvY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICBQbGF5ZXJJbmZvLm1hcmtDaGFwdGVyT2xkKGMpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy50dCkge1xyXG4gICAgICAgICAgICAgICBVc2VySW5mby51cGxvYWRVc2VySW5mbyh7IGxldmVsOiB0aGlzLmxldmVsLCBjaGFsbGVuZ2VsZXZlbDogdGhpcy5kYWlseWxldmVsIH0pO1xyXG4gICAgICAgICAgICAgICB0aGlzLnVwUmFuaygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zYXZlKCk7XHJcbiAgICAgIHJldHVybiBibG9jaztcclxuICAgfVxyXG5cclxuICAgLy8g5q+U6L6D5b2T5YmN5pel5pyf5ZKM5q+P5pel5oyR5oiY6KGo5qC86YeM55qE5pel5pyfIFxyXG4gICBpc0dyZWF0ZXJEYXRlKGRhdGUyKSB7XHJcbiAgICAgIGxldCBvRGF0ZTE6IERhdGUgPSB0aGlzLmxsZFxyXG4gICAgICAvLyBvRGF0ZTEgPSBuZXcgRGF0ZShcIjIwMjAvNS8xNlwiKVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIuW9k+WJjeaXpeacn1wiLG9EYXRlMSk7XHJcblxyXG4gICAgICB2YXIgb0RhdGUyID0gbmV3IERhdGUoZGF0ZTIpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIuihqOagvOaXpeacn1wiLG9EYXRlMik7XHJcbiAgICAgIGlmIChvRGF0ZTEuZ2V0VGltZSgpID49IG9EYXRlMi5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwi5b2T5YmN5pel5pyf5aSn5LqO5oiW562J5LqO6KGo5qC85pel5pyfXCIpO1xyXG4gICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlvZPliY3ml6XmnJ/lsI/kuo7ooajmoLzml6XmnJ9cIik7XHJcbiAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgfVxyXG5cclxuICAgaXNOZXdMZXZlbChkYXRlMikge1xyXG4gICAgICBsZXQgb0RhdGUxOiBEYXRlID0gdGhpcy5sbGRcclxuICAgICAgLy8gb0RhdGUxID0gbmV3IERhdGUoXCIyMDIwLzUvMTZcIilcclxuICAgICAgLy8gY29uc29sZS5sb2coXCLlvZPliY3ml6XmnJ9cIixvRGF0ZTEudG9EYXRlU3RyaW5nKCkpO1xyXG4gICAgICB2YXIgb0RhdGUyID0gbmV3IERhdGUoZGF0ZTIpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIuihqOagvOaXpeacn1wiLG9EYXRlMi50b0RhdGVTdHJpbmcoKSk7XHJcbiAgICAgIGlmIChvRGF0ZTEudG9EYXRlU3RyaW5nKCkgPT0gb0RhdGUyLnRvRGF0ZVN0cmluZygpKSB7XHJcbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5b2T5YmN5pel5pyf562J5LqO6KGo5qC85pel5pyfXCIpO1xyXG4gICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlvZPliY3ml6XmnJ/kuI3nrYnkuo7kuo7ooajmoLzml6XmnJ9cIik7XHJcbiAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgbGV0IFBsYXllckluZm86IFBsYXllckluZm9EQyA9IERhdGFDZW50ZXIucmVnaXN0ZXIoUGxheWVySW5mb0RDKTtcclxuIl19