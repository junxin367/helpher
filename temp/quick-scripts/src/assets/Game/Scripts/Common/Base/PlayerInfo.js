"use strict";
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