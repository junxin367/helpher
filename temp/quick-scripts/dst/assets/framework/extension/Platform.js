
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/Platform.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7af6a7t0ilNfpjqyX0Z3HeA', 'Platform');
// framework/extension/Platform.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Signal_1 = require("../core/Signal");
var sdk_1 = require("./wxsdk/sdk");
var SpriteFrameCache_1 = require("../misc/SpriteFrameCache");
var ToastManager_1 = require("../ui/ToastManager");
var event_1 = require("../core/event");
var GameConfigs_1 = require("./wxsdk/GameConfigs");
var qqsdk_1 = require("./qq/qqsdk");
var ttsdk_1 = require("./ttsdk/ttsdk");
var WxCommands;
(function (WxCommands) {
    WxCommands[WxCommands["Hide"] = 99] = "Hide";
    WxCommands[WxCommands["Next"] = 100] = "Next";
    WxCommands[WxCommands["RankSmall"] = 101] = "RankSmall";
    WxCommands[WxCommands["Rank"] = 102] = "Rank";
})(WxCommands || (WxCommands = {}));
var Platform = /** @class */ (function () {
    function Platform() {
    }
    Platform.getOpenID = function () {
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            // wechat 
            var userInfo = sdk_1.wxsdk.userInfo;
            if (userInfo && userInfo.openID) {
                return userInfo.openID;
            }
            else {
                return "";
            }
        }
        else if (cc.sys.QQ_PLAY == cc.sys.platform) {
            return;
        }
        else {
            return "123";
        }
    };
    Platform.getNick = function () {
        if (cc.sys.QQ_PLAY == cc.sys.platform) {
            return;
        }
        else if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            return (sdk_1.wxsdk.userInfo && sdk_1.wxsdk.userInfo.nickName) || "自已";
        }
        else {
            return "玩家自已";
        }
    };
    Platform.getHead = function () {
        if (cc.sys.QQ_PLAY == cc.sys.platform) {
            return;
        }
        else if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            // avatarUrl:"https://wx.qlogo.cn/mmopen/vi_32/QlHaicGZOD7do9LuX5W4APHYSrUBqVaGULuwISLUf35IyOOYZ3IXl7nF5mW36JiaQ9snziawrAvkknX41SmeYa9AQ/132"city:""country:""gender:1language:"zh_CN"nickName:"Damon Ren⁶⁶⁶"province:""
            var userInfo = sdk_1.wxsdk.userInfo;
            if (userInfo && userInfo.avatarUrl) {
                return userInfo.avatarUrl;
            }
            else {
                return "https://tank.wdfunny.com/speed_logo/2.jpg";
            }
        }
        return "https://tank.wdfunny.com/speed_logo/1.jpg";
    };
    Platform.loadSelfHead = function (sprite) {
        if (cc.sys.QQ_PLAY == cc.sys.platform) {
        }
        else {
            SpriteFrameCache_1.default.instance.getSpriteFrame(Platform.getHead()).then(function (sf) { return sprite.spriteFrame = sf; });
        }
    };
    Platform.exit = function () {
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            wx.offShow(Platform.onEnterForeground);
            wx.offHide(Platform.onEnterBackground);
        }
        else if (cc.sys.QQ_PLAY == cc.sys.platform) {
        }
    };
    Platform.login = function (p) {
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            sdk_1.wxsdk.login(p);
        }
        else if (cc.sys.QQ_PLAY == cc.sys.platform) {
        }
    };
    // static startAuth() {
    //     if (cc.sys.WECHAT_GAME == cc.sys.platform) {
    //         return wxsdk.startAuth();
    //     } else {
    //         let userInfo = {} as AuthUserInfo
    //         userInfo.avatarUrl = "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1030399321,1493970029&fm=27&gp=0.jpg"
    //         userInfo.city = "WuHan",
    //             userInfo.gender = 1,
    //             userInfo.nickName = 'aliwangzai'
    //         return Promise.resolve(userInfo);
    //     }
    // }
    Platform.checkAuth = function () {
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            return sdk_1.wxsdk.checkAuth();
        }
        else {
            var userInfo = {};
            userInfo.avatarUrl = "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1030399321,1493970029&fm=27&gp=0.jpg";
            userInfo.city = "WuHan",
                userInfo.gender = 1,
                userInfo.nickName = 'aliwangzai';
            return Promise.resolve(userInfo);
        }
    };
    /** 解决 排行榜 无法划动问题 */
    Platform.fix_wechat_subContext = function (subContext, self) {
        subContext.node.active = false;
        self.scheduleOnce(function (_) {
            subContext.node.active = true;
        }, 0.1);
    };
    Platform.setUserId = function (id) {
        this.userId = id;
    };
    Platform.initShare = function (cfg, userId) {
        this.defaultShareConfig = cfg;
        this.userId = userId;
        this.isAndroid = cc.sys.os == "Android";
        console.log("================= os", cc.sys.os);
        this.isIOS = cc.sys.os == "iOS";
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            sdk_1.wxsdk.showShareMenu(cfg[0]);
            wx.onShow(Platform.onEnterForeground);
            wx.onHide(Platform.onEnterBackground);
        }
        else if (cc.sys.QQ_PLAY == cc.sys.platform) {
        }
        this.initUpdate();
    };
    Platform.getGameID = function () {
        if (cc.sys.QQ_PLAY == cc.sys.platform) {
        }
        return "speed_wanyiwan";
    };
    Platform.getLaunchOptions = function () {
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            return wx.getLaunchOptionsSync();
        }
        return { scene: 0, query: {} };
    };
    Platform.getCity = function () {
        return "";
    };
    Platform.doShare = function (share_cfg, callback, timeout) {
        if (timeout === void 0) { timeout = 3000; }
        this.doShareWithParams(null, share_cfg, callback, timeout);
    };
    Platform.share = function (calback) {
        this.doShare(this.defaultShareConfig, calback);
    };
    Platform.doShareWithParams = function (params, share_cfgs, callback, target, timeout) {
        if (timeout === void 0) { timeout = 2000; }
        share_cfgs = share_cfgs || this.defaultShareConfig;
        var share_cfg;
        if (Array.isArray(share_cfgs)) {
            share_cfg = g.getRandomInArray(share_cfgs);
        }
        console.log("######开始分享");
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            var sdk = void 0;
            if (window.qq) {
                sdk = qqsdk_1.qqsdk;
            }
            else if (window.tt) {
                sdk = ttsdk_1.ttsdk;
            }
            else {
                sdk = sdk_1.wxsdk;
            }
            params = params || {};
            params.userId = this.userId;
            sdk.openShare(share_cfg, params);
            var t_1 = new Date().getTime();
            Platform.onEnterForegroundSignal.on(function (obj) {
                Platform.onEnterForegroundSignal.clear();
                var d = new Date().getTime() - t_1;
                if (d > timeout) {
                    // if(Math.random() < 0.5)
                    // {
                    setTimeout(function (_) {
                        if (callback)
                            callback.call(target, 1);
                    }, 500);
                    // }else{
                    //     if(this.shareCount >= 2){
                    //         this.shareCount = 0;
                    //         setTimeout(_ => {
                    //             if (callback)
                    //                 callback.call(target)
                    //         }, 500)
                    //     }
                    //     else{
                    //         //用户及时返回分享失败 
                    //         Toast.make("分享失败,请尝试换其它群分享")
                    //     }
                    // }
                }
                else {
                    //用户及时返回分享失败 
                    if (callback)
                        callback.call(target, 0);
                    // Toast.make("分享失败,请尝试换其它群分享")
                }
            });
        }
        else if (cc.sys.QQ_PLAY == cc.sys.platform) {
        }
        else {
            callback && callback.call(target, 1);
        }
    };
    Platform.setAdEnabled = function (b) {
        this._videoEnabled = b;
        this._bannerEnabled = b;
    };
    Platform.isVideoAdEnabled = function (b) {
        return this._videoEnabled;
    };
    Platform.isBannerAdEnabled = function (b) {
        return this._bannerEnabled;
    };
    Platform.sendUmengEvt = function (title, count) {
        if (cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative) {
            jsb.reflection.callStaticMethod("Umeng", "umengEvt:count:", title, count);
        }
    };
    Platform.watch_video = function (callback, target, fail_load_callback) {
        console.log("######开始看视频");
        if (!this._videoEnabled)
            return;
        if (!cc.sys.isNative) {
            var sdk = void 0;
            if (window.qq) {
                sdk = qqsdk_1.qqsdk;
            }
            else if (window.tt) {
                sdk = ttsdk_1.ttsdk;
            }
            else if (window.wx) {
                sdk = sdk_1.wxsdk;
            }
            else {
                callback && callback.call(target);
                return;
            }
            if (sdk) {
                sdk.loadVideoAd(function (code, isEnded) {
                    if (code == "load") {
                        Platform._refreshEnabled = false;
                    }
                    else if (code == 'show') {
                        cc.audioEngine.pauseMusic();
                    }
                    else if (code == "close") {
                        Platform._refreshEnabled = true;
                        cc.audioEngine.pauseMusic();
                        cc.audioEngine.resumeMusic();
                        if (!isEnded) {
                            ToastManager_1.Toast.make("必须看完视频,才能获取奖励");
                            // fail_load_callback && fail_load_callback.call(target);
                            wx.showModal({
                                title: "提示", content: "看完广告才能获得奖励哦", showCancel: false
                            });
                        }
                        else {
                            callback && callback.call(target);
                        }
                    }
                    else if (code == 'error') {
                        // Toast.make("没有视频,请稍后再试!")
                        fail_load_callback && fail_load_callback.call(target);
                        // this.doShare(WeakNetGame.shareConfigs["default"], callback, target, fail_callback);
                    }
                });
            }
        }
        else if (cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative) {
            cc.audioEngine.setMusicVolume(0);
            jsb.reflection.callStaticMethod("TXsdk", "showRewardedVideo");
            var finishCallback = function (_) {
                callback && callback.call(target);
                console.log(callback, name);
                cc.audioEngine.setMusicVolume(1);
                // jsb.reflection.callStaticMethod("MoreGameHelper", "setbgmresuse","(Ljava/lang/String;)V");
                // if (name) {
                //     let str = JSON.stringify({ "type": name, "result": 1 });
                //     console.log("进入埋点上传2")
                //     jsb.reflection.callStaticMethod("AppsFlyerHelper", "trackEvent:withValues:", "ad", str);
                // }
            };
            Platform.video_callback.on(finishCallback);
            var failCallback = function (_) {
                cc.audioEngine.setMusicVolume(1);
                // jsb.reflection.callStaticMethod("MoreGameHelper", "setbgmresuse","(Ljava/lang/String;)V");
                fail_load_callback && fail_load_callback.call(target);
            };
            Platform.video_failcallback.on(failCallback);
        }
        else if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
            jsb.reflection.callStaticMethod("com/mimgame/sdk/BytedanceAdSdk", "loadAd", "()V");
            var finishCallback = function (_) {
                callback && callback.call(target);
                console.log(callback, name);
                if (name) {
                    console.log("进入埋点上传1");
                    // StatHepler.userAction(null,null,"adddClick" , { "type": name, "result": 1 })
                }
            };
            Platform.video_callback.on(finishCallback);
            var failCallback = function (_) {
                fail_load_callback && fail_load_callback.call(target);
                if (name) {
                    console.log("进入埋点上传2");
                    // StatHepler.userAction(null,null,"ad" , { "type": name, "result": 1 })
                }
            };
            Platform.video_failcallback.on(failCallback);
        }
        else {
            callback && callback.call(target);
        }
    };
    Platform.initSDK = function () {
        if (cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative) {
            jsb.reflection.callStaticMethod("GDTSdk", "init");
            jsb.reflection.callStaticMethod("Umeng", "init");
        }
    };
    Platform.showInterstitial = function (callback, target, errorCallback) {
        console.log("####显示插屏广告");
        if (CC_DEBUG) {
            console.log("DEBUG模式跳过插屏广告");
            callback && callback.call(target);
            return;
        }
        this.hideBannerAd();
        if (!cc.sys.isNative) {
            if (window.qq) {
                return qqsdk_1.qqsdk.showInterstitial(errorCallback);
            }
            else if (window.tt) {
                return ttsdk_1.ttsdk.showInterstitial(errorCallback);
            }
            return sdk_1.wxsdk.showInterstitial(errorCallback);
        }
        else if (cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative) {
            cc.audioEngine.setMusicVolume(0);
            jsb.reflection.callStaticMethod("TXsdk", "showFullScreeAd");
            var finishCallback = function (_) {
                callback && callback.call(target);
                console.log(callback, name);
                cc.audioEngine.setMusicVolume(1);
                // jsb.reflection.callStaticMethod("MoreGameHelper", "setbgmresuse","(Ljava/lang/String;)V");
                // if (name) {
                //     let str = JSON.stringify({ "type": name, "result": 1 });
                //     console.log("进入埋点上传2")
                //     jsb.reflection.callStaticMethod("AppsFlyerHelper", "trackEvent:withValues:", "ad", str);
                // }
            };
            Platform.interstitial_callback.on(finishCallback);
        }
        else if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
            jsb.reflection.callStaticMethod("com/mimgame/sdk/BytedanceAdSdk", "loadFullscreenAd", "()V");
            cc.audioEngine.setMusicVolume(0);
            var finishCallback = function (_) {
                callback && callback.call(target);
                console.log(callback, name);
                cc.audioEngine.setMusicVolume(1);
                // jsb.reflection.callStaticMethod("MoreGameHelper", "setbgmresuse","(Ljava/lang/String;)V");
                // if (name) {
                //     let str = JSON.stringify({ "type": name, "result": 1 });
                //     console.log("进入埋点上传2")
                //     jsb.reflection.callStaticMethod("AppsFlyerHelper", "trackEvent:withValues:", "ad", str);
                // }
            };
            Platform.interstitial_callback.on(finishCallback);
        }
        return Promise.resolve();
    };
    Platform.showGamePortal = function (errcallback) {
        var portalAd = null;
        console.log("创建推荐位实例-----");
        if (wx.createGamePortal) {
            portalAd = wx.createGamePortal({ adUnitId: GameConfigs_1.GameConfig.portal_id });
        }
        else {
            console.error('不支持wx.createGamePortal');
            errcallback && errcallback(0);
        }
        // 在适合的场景显示推荐位
        if (portalAd) {
            portalAd.load().then(function () { portalAd.show(); }).catch(function (err) {
                console.error('createGamePortal:' + err);
                errcallback && errcallback(1, err);
            });
        }
    };
    Platform.showBannerAd = function (errorCallback) {
        console.log("######显示Banner广告");
        if (!this._bannerEnabled)
            return;
        if (!cc.sys.isNative) {
            if (window.qq) {
                return qqsdk_1.qqsdk.showBannerAd(errorCallback);
            }
            else if (window.tt) {
                return ttsdk_1.ttsdk.showBannerAd(errorCallback);
            }
            else if (window.wx) {
                return sdk_1.wxsdk.showBannerAd(errorCallback);
            }
        }
        else if (cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative) {
            // jsb.reflection.callStaticMethod("TXsdk", "loadBanner:", (csv.Config.Banner_Refresh_Rate || 30))
        }
        else if (cc.sys.QQ_PLAY == cc.sys.platform) {
        }
        else if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
            // jsb.reflection.callStaticMethod("com/mimgame/sdk/BytedanceAdSdk", "loadBanner", "()V");
        }
        else {
            //pc 
            if (Math.random() < 0.5) {
                //显示 广告失败
                console.log("显示广告失败(模拟)");
                errorCallback && errorCallback();
            }
        }
    };
    Platform.isBannerShow = function () {
        if (CC_WECHATGAME) {
            return sdk_1.wxsdk.isBannerShow();
        }
    };
    Platform.hideBannerAd = function () {
        console.log("######隐藏Banner广告");
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            if (window.qq) {
                qqsdk_1.qqsdk.hideBannerAd();
                return;
            }
            else if (window.tt) {
                return ttsdk_1.ttsdk.hideBannerAd();
            }
            sdk_1.wxsdk.hideBannerAd();
        }
        else if (cc.sys.QQ_PLAY == cc.sys.platform) {
        }
        else if (cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative) {
            jsb.reflection.callStaticMethod("TXsdk", "hideBanner");
        }
        else if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
            jsb.reflection.callStaticMethod("com/mimgame/sdk/BytedanceAdSdk", "closeBanner", "()V");
        }
        else {
        }
    };
    Platform.refreshBannerAd = function () {
        console.log("刷新 banner ");
        if (CC_WECHATGAME) {
            if (window.qq) {
                qqsdk_1.qqsdk.loadBannerAd();
                return;
            }
            else if (window.tt) {
                return ttsdk_1.ttsdk.destroy();
            }
            sdk_1.wxsdk.loadBannerAd();
        }
    };
    Platform.reloadBannerAd = function (bShow, errcallback) {
        if (bShow === void 0) { bShow = false; }
        if (CC_WECHATGAME) {
            sdk_1.wxsdk.hideBannerAd();
            sdk_1.wxsdk.loadBannerAd(function (v) {
                if (v == "load")
                    if (bShow) {
                        sdk_1.wxsdk.showBannerAd();
                    }
                    else if (v == 'error') {
                        errcallback && errcallback();
                    }
            });
        }
        else {
            console.log("####reload Banner.....");
        }
    };
    Platform.initBannerAd = function (b) {
        if (b === void 0) { b = 1; }
        if (b == 0)
            return;
        if (cc.sys.QQ_PLAY == cc.sys.platform) {
        }
        else if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            setInterval(function (_) {
                if (Platform.bannnerRefreshEnabled && Platform._refreshEnabled) {
                    console.log("######加载WX Banner广告");
                    sdk_1.wxsdk.hideBannerAd();
                    sdk_1.wxsdk.loadBannerAd(function (v) {
                        if (v == "load")
                            sdk_1.wxsdk.showBannerAd();
                    });
                }
            }, 40000);
        }
    };
    Platform.jumpTo = function () {
        // var desGameId = 1234; //跳转的gameid，必须为数字
        // var extendInfo = ""; //额外参数，必须为字符串
        // BK.QQ.skipGame(desGameId, extendInfo);
    };
    Platform.showRankDialog = function () {
        console.log("[Platform]#showRankDialog");
        ToastManager_1.Toast.make("#[Platform]#showRankDialog");
        // ViewManager.instance.show("Game/RankDialog")
    };
    // Andriod 发送游戏快捷方式到桌面
    Platform.onEnterForeground = function (obj) {
        console.log("=====================onEnterForeground=====================");
        if (cc.sys.platform == cc.sys.QQ_PLAY) {
            //onEnterForeground
            // Device.resumeMusic()
            cc.audioEngine.resumeMusic();
        }
        else {
            // cc.audioEngine.resumeMusic()
        }
        Platform.onEnterForegroundSignal.fire(obj);
        event_1.evt.emit("onEnterForeground");
    };
    Platform.onEnterBackground = function () {
        // BK.onEnterBackground(enterBackgroundListener);
        // if (cc.sys.platform == cc.sys.QQ_PLAY) {
        // } else {
        //     cc.audioEngine.pauseMusic()
        // }
        event_1.evt.emit("onEnterBackground");
    };
    Platform.onGameExit = function () {
        // BK.onGameClose(gameCloseListener);
    };
    Platform.sendMessageToOpen = function (cmd, data) {
        if (CC_WECHATGAME) {
            sdk_1.wxsdk.postMessage(cmd, data);
        }
    };
    Platform.showSmallRank = function (rankName, rankType) {
        sdk_1.wxsdk.postMessage(WxCommands.RankSmall, { rankName: rankName, rankType: rankType });
    };
    Platform.showRank = function (rankName, rankType) {
        sdk_1.wxsdk.postMessage(WxCommands.Rank, { rankName: rankName, rankType: rankType });
    };
    Platform.hideRank = function () {
        sdk_1.wxsdk.postMessage(WxCommands.Hide);
    };
    Platform.getRankList = function (callback, target) {
        console.log("[Platform]#获取排行榜数据");
        if (cc.sys.platform == cc.sys.QQ_PLAY) {
        }
        else if (cc.sys.platform == cc.sys.WECHAT_GAME) {
        }
    };
    Platform.uploadScore = function (k, v) {
        console.log("[Platform]#上传分数");
        if (cc.sys.platform == cc.sys.QQ_PLAY) {
        }
        else if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            // wxsdk.postMessage(WxCommands., score);
            var s = JSON.stringify(v);
            sdk_1.wxsdk.uploadScore(k, s);
        }
        else {
            // Toast.make("#[Platform]#uploadScore")
        }
    };
    Platform.uploadScores = function (kvs) {
        if (cc.sys.platform == cc.sys.QQ_PLAY) {
        }
        else if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            // wxsdk.postMessage(WxCommands., score);
            return sdk_1.wxsdk.uploadScores(kvs);
        }
        else {
            return Promise.resolve({});
            // Toast.make("#[Platform]#uploadScore")
        }
    };
    Object.defineProperty(Platform, "launch_options", {
        get: function () {
            if (!CC_WECHATGAME) {
                return null;
            }
            if (this._launch_options == null) {
                this._launch_options = wx.getLaunchOptionsSync();
            }
            return this._launch_options;
        },
        enumerable: false,
        configurable: true
    });
    Platform.matchPath = function (cfg) {
        var _this = this;
        // ald_link_key
        //ald_media_id
        //ald_position_id
        // let t = '?ald_media_id=15641&ald_link_key=8ebc0645ddba0996&ald_position_id=0,?ald_media_id=15641&ald_link_key=8ebc0645ddba0996&ald_position_id=0'
        if (this.launch_options == null)
            return false;
        var s = cfg + "";
        var arr = s.split(/[,\s]+/);
        return arr.some(function (a) {
            var kvs = a.split(/[\?&@\*]/);
            kvs = kvs.filter(function (v) { return v != ''; });
            //是否解析出来的k和 launch option query 对象key 对应的值相等
            return kvs.every(function (kv) {
                var _a = kv.split('='), k = _a[0], v = _a[1];
                var rv = _this.launch_options.query[k];
                if (rv == undefined && v == undefined)
                    return false;
                return rv == v;
            });
        });
    };
    Platform.loadSubPackage = function (name, progress) {
        if (CC_WECHATGAME) {
            if (window.qq) {
                return new Promise(function (resolve, reject) {
                    var loadTask = qq.loadSubpackage({
                        name: name,
                        success: function () {
                            resolve();
                        },
                        fail: function () {
                            reject();
                        }
                    });
                    loadTask.onProgressUpdate(function (res) {
                        progress &&
                            progress(res.progress, res.totalBytesWritten, res.totalBytesExpectedToWrite);
                        // console.log('下载进度', res.progress)
                        // console.log('已经下载的数据长度', res.totalBytesWritten)
                        // console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
                    });
                });
            }
            else if (window.wx) {
                return new Promise(function (resolve, reject) {
                    var id_interval = 0;
                    var loadTask = wx.loadSubpackage({
                        name: name,
                        success: function () {
                            clearInterval(id_interval);
                            resolve();
                        },
                        fail: function (e) {
                            clearInterval(id_interval);
                            reject(e + ":" + name);
                        }
                    });
                    var c = 0;
                    id_interval = setInterval(function (v) {
                        c += 5;
                        progress && progress(c, c, 100);
                        if (c >= 100) {
                            clearInterval(id_interval);
                        }
                    }, 20);
                    loadTask.onProgressUpdate(function (res) {
                        if (id_interval != 0) {
                            clearInterval(id_interval);
                            id_interval = 0;
                        }
                        progress && progress(res.progress, res.totalBytesWritten, res.totalBytesExpectedToWrite);
                        // console.log('下载进度', res.progress)
                        // console.log('已经下载的数据长度', res.totalBytesWritten)
                        // console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
                    });
                });
            }
        }
        else {
            return new Promise(function (resolve) {
                var c = 0;
                var id = setInterval(function (v) {
                    c += 10;
                    progress && progress(c, c, 100);
                    if (c >= 100) {
                        clearInterval(id);
                        resolve();
                    }
                }, 50);
            });
        }
    };
    Platform.initUpdate = function () {
        if (CC_WECHATGAME) {
            var updateManager_1 = wx.getUpdateManager();
            updateManager_1.onCheckForUpdate(function (res) {
                // 请求完新版本信息的回调
                console.log(res.hasUpdate);
            });
            updateManager_1.onUpdateReady(function () {
                wx.showModal({
                    title: '更新提示',
                    content: '新版本已经准备好，是否重启应用？',
                    success: function (res) {
                        if (res.confirm) {
                            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                            updateManager_1.applyUpdate();
                        }
                    }
                });
            });
            updateManager_1.onUpdateFailed(function () {
                // 新版本下载失败
            });
        }
    };
    Platform.gc = function () {
        if (CC_WECHATGAME) {
            //trigger gc 
            wx.triggerGC();
        }
    };
    Platform.bannnerRefreshEnabled = true;
    Platform._refreshEnabled = false;
    Platform.onEnterForegroundSignal = new Signal_1.default();
    Platform.isAndroid = false;
    Platform.isIOS = false;
    Platform.configGetSignal = new Signal_1.default();
    /**当前玩家 id ，用于分享卡片是带上 */
    Platform.userId = '0';
    Platform.defaultShareConfig = null;
    Platform._videoEnabled = true;
    Platform._bannerEnabled = true;
    Platform.video_callback = new Signal_1.default();
    Platform.video_failcallback = new Signal_1.default();
    Platform.interstitial_callback = new Signal_1.default();
    return Platform;
}());
exports.default = Platform;
// window["watchCallback"] = () => {
//     Platform.video_callback.fire();
//     console.log("观看视频回调")
// }
// window["fullscreenCallback"] = () => {
//     cc.audioEngine.setMusicVolume(1)
//     Platform.interstitial_callback.fire();
//     console.log("观看视频回调")
// }
// window["watchCallbackfail"] = () => {
//     Platform.video_failcallback.fire();
//     console.log("观看视频失败回调")
// }
window["pause"] = function () {
    cc.game.pause();
    console.log("游戏暂停");
};
window["resume"] = function () {
    cc.game.resume();
    console.log("游戏继续");
};
window["pausemusic"] = function (params) {
    cc.audioEngine.setMusicVolume(0);
    // jsb.reflection.callStaticMethod("MoreGameHelper", "setbgmclose");
    console.log("游戏音乐暂停");
};
window["resumemusic"] = function (params) {
    cc.audioEngine.setMusicVolume(1);
    // jsb.reflection.callStaticMethod("MoreGameHelper", "setbgmresuse");
    console.log("游戏音乐继续");
};
// window["BuadSDK"] = function (event, params) {
//     if (event == "rewardedVideoAdDidClose") {
//         cc.audioEngine.setMusicVolume(1)
//         Platform.video_callback.fire();
//         // jsb.reflection.callStaticMethod("MoreGameHelper", "setbgmresuse");
//     } else if (event == "rewardedVideoAdServerRewardDidFail") {
//         cc.audioEngine.setMusicVolume(1)
//         Platform.video_failcallback.fire();
//         // jsb.reflection.callStaticMethod("MoreGameHelper", "setbgmresuse");
//     }
//     else if (event == "fullscreenVideoAdDidClose") {
//         // jsb.reflection.callStaticMethod("MoreGameHelper", "setbgmresuse");
//         cc.audioEngine.setMusicVolume(1)
//         Platform.interstitial_callback.fire();
//     }
// }
// window["ISAndroidCallbacks"] = function (event, params) {
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXFBsYXRmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBQ3BDLG1DQUFvQztBQUVwQyw2REFBd0Q7QUFDeEQsbURBQTJDO0FBQzNDLHVDQUFvQztBQUNwQyxtREFBaUQ7QUFDakQsb0NBQW1DO0FBQ25DLHVDQUFzQztBQUl0QyxJQUFLLFVBS0o7QUFMRCxXQUFLLFVBQVU7SUFDWCw0Q0FBUyxDQUFBO0lBQ1QsNkNBQUksQ0FBQTtJQUNKLHVEQUFTLENBQUE7SUFDVCw2Q0FBSSxDQUFBO0FBQ1IsQ0FBQyxFQUxJLFVBQVUsS0FBVixVQUFVLFFBS2Q7QUF1QkQ7SUFBQTtJQTZ2QkEsQ0FBQztJQWx2QlUsa0JBQVMsR0FBaEI7UUFDSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ3ZDLFVBQVU7WUFDVixJQUFJLFFBQVEsR0FBRyxXQUFLLENBQUMsUUFBUSxDQUFBO1lBQzdCLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQzdCLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQTthQUN6QjtpQkFBTTtnQkFDSCxPQUFPLEVBQUUsQ0FBQTthQUNaO1NBQ0o7YUFBTSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQzFDLE9BQU87U0FDVjthQUFNO1lBQ0gsT0FBTyxLQUFLLENBQUE7U0FDZjtJQUNMLENBQUM7SUFFTSxnQkFBTyxHQUFkO1FBQ0ksSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUNuQyxPQUFPO1NBQ1Y7YUFBTSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxH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LGtFQUFrRTtBQUNsRSwyQ0FBMkM7QUFDM0MsOENBQThDO0FBQzlDLGdGQUFnRjtBQUNoRixRQUFRO0FBQ1IsdURBQXVEO0FBQ3ZELGdGQUFnRjtBQUNoRiwyQ0FBMkM7QUFDM0MsaURBQWlEO0FBQ2pELFFBQVE7QUFDUixJQUFJO0FBRUosNERBQTREO0FBRTVELElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2lnbmFsIGZyb20gXCIuLi9jb3JlL1NpZ25hbFwiO1xyXG5pbXBvcnQgeyB3eHNkayB9IGZyb20gXCIuL3d4c2RrL3Nka1wiO1xyXG5pbXBvcnQgQktUb29sIGZyb20gXCIuL3FxL0JLVG9vbFwiO1xyXG5pbXBvcnQgU3ByaXRlRnJhbWVDYWNoZSBmcm9tIFwiLi4vbWlzYy9TcHJpdGVGcmFtZUNhY2hlXCI7XHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcIi4uL3VpL1RvYXN0TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBldnQgfSBmcm9tIFwiLi4vY29yZS9ldmVudFwiO1xyXG5pbXBvcnQgeyBHYW1lQ29uZmlnIH0gZnJvbSBcIi4vd3hzZGsvR2FtZUNvbmZpZ3NcIjtcclxuaW1wb3J0IHsgcXFzZGsgfSBmcm9tIFwiLi9xcS9xcXNka1wiO1xyXG5pbXBvcnQgeyB0dHNkayB9IGZyb20gXCIuL3R0c2RrL3R0c2RrXCI7XHJcbmltcG9ydCBTdGF0SGVwbGVyIGZyb20gXCIuL2FsZHNkay9TdGF0SGVscGVyXCI7XHJcblxyXG5cclxuZW51bSBXeENvbW1hbmRzIHtcclxuICAgIEhpZGUgPSA5OSxcclxuICAgIE5leHQsXHJcbiAgICBSYW5rU21hbGwsXHJcbiAgICBSYW5rLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNoYXJlSW5mbyB7XHJcbiAgICB0aXRsZTogc3RyaW5nLFxyXG4gICAgaW1hZ2VVcmw6IHN0cmluZyxcclxuICAgIHF1ZXJ5Pzogc3RyaW5nLFxyXG4gICAgYWxkX2Rlc2M/OiBzdHJpbmdcclxuICAgIC8vIGlkPzpzdHJpbmcsXHJcbiAgICBxdWVyeU9iamVjdHM6IE9iamVjdCB8IHsgaWQ6IHN0cmluZyB9LFxyXG4gICAgc2hhcmVfd2VpZ2h0OiBudW1iZXIsXHJcbn1cclxuLy9cIntcIm5pY2tOYW1lXCI6XCLqr61EYeqvrW3qr61v6q+tblLqr61l6q+tblwiLFwiZ2VuZGVyXCI6MSxcImxhbmd1YWdlXCI6XCJ6aF9DTlwiLFwiY2l0eVwiOlwiXCIsXCJwcm92aW5jZVwiOlwiXCIsXCJjb3VudHJ5XCI6XCLkuK3lm71cIixcImF2YXRhclVybFwiOlwiaHR0cHM6Ly93eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvT0FhRzNqY1lZVkZpYzF2WUgzSzRMeGFlajdPUEZsN2NWcGFBQ3JlMmliaWFKYTIxQ3o1elV6MUs3Rkg2Sk52ZlpxcWxoQzJnbHJEajlpYmdvZm1rMlpxek1RLzEzMlwifVwiXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aFVzZXJJbmZvIHtcclxuICAgIG9wZW5JZDogc3RyaW5nLFxyXG4gICAgYXZhdGFyVXJsOiBzdHJpbmcsXHJcbiAgICBuaWNrTmFtZTogc3RyaW5nLFxyXG4gICAgY2l0eTogc3RyaW5nLFxyXG4gICAgZ2VuZGVyOiBudW1iZXIsXHJcbiAgICBjb3VudHJ5OiBzdHJpbmc7XHJcbiAgICBwcm92aWNlOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybSB7XHJcblxyXG4gICAgc3RhdGljIGJhbm5uZXJSZWZyZXNoRW5hYmxlZCA9IHRydWU7XHJcbiAgICBzdGF0aWMgX3JlZnJlc2hFbmFibGVkID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgb25FbnRlckZvcmVncm91bmRTaWduYWwgPSBuZXcgU2lnbmFsKCk7XHJcblxyXG4gICAgc3RhdGljIGlzQW5kcm9pZCA9IGZhbHNlXHJcbiAgICBzdGF0aWMgaXNJT1MgPSBmYWxzZTtcclxuXHJcbiAgICBzdGF0aWMgX3NoYXJlQ29uZmlnOiBhbnk7XHJcblxyXG4gICAgc3RhdGljIGdldE9wZW5JRCgpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLldFQ0hBVF9HQU1FID09IGNjLnN5cy5wbGF0Zm9ybSkge1xyXG4gICAgICAgICAgICAvLyB3ZWNoYXQgXHJcbiAgICAgICAgICAgIGxldCB1c2VySW5mbyA9IHd4c2RrLnVzZXJJbmZvXHJcbiAgICAgICAgICAgIGlmICh1c2VySW5mbyAmJiB1c2VySW5mby5vcGVuSUQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VySW5mby5vcGVuSURcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5RUV9QTEFZID09IGNjLnN5cy5wbGF0Zm9ybSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiMTIzXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldE5pY2soKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5RUV9QTEFZID09IGNjLnN5cy5wbGF0Zm9ybSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmIChjYy5zeXMuV0VDSEFUX0dBTUUgPT0gY2Muc3lzLnBsYXRmb3JtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAod3hzZGsudXNlckluZm8gJiYgd3hzZGsudXNlckluZm8ubmlja05hbWUpIHx8IFwi6Ieq5beyXCJcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gXCLnjqnlrrboh6rlt7JcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0SGVhZCgpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLlFRX1BMQVkgPT0gY2Muc3lzLnBsYXRmb3JtKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5XRUNIQVRfR0FNRSA9PSBjYy5zeXMucGxhdGZvcm0pIHtcclxuICAgICAgICAgICAgLy8gYXZhdGFyVXJsOlwiaHR0cHM6Ly93eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvUWxIYWljR1pPRDdkbzlMdVg1VzRBUEhZU3JVQnFWYUdVTHV3SVNMVWYzNUl5T09ZWjNJWGw3bkY1bVczNkppYVE5c256aWF3ckF2a2tuWDQxU21lWWE5QVEvMTMyXCJjaXR5OlwiXCJjb3VudHJ5OlwiXCJnZW5kZXI6MWxhbmd1YWdlOlwiemhfQ05cIm5pY2tOYW1lOlwiRGFtb24gUmVu4oG24oG24oG2XCJwcm92aW5jZTpcIlwiXHJcbiAgICAgICAgICAgIGxldCB1c2VySW5mbyA9IHd4c2RrLnVzZXJJbmZvXHJcbiAgICAgICAgICAgIGlmICh1c2VySW5mbyAmJiB1c2VySW5mby5hdmF0YXJVcmwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VySW5mby5hdmF0YXJVcmxcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImh0dHBzOi8vdGFuay53ZGZ1bm55LmNvbS9zcGVlZF9sb2dvLzIuanBnXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJodHRwczovL3Rhbmsud2RmdW5ueS5jb20vc3BlZWRfbG9nby8xLmpwZ1wiXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBsb2FkU2VsZkhlYWQoc3ByaXRlKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5RUV9QTEFZID09IGNjLnN5cy5wbGF0Zm9ybSkge1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFNwcml0ZUZyYW1lQ2FjaGUuaW5zdGFuY2UuZ2V0U3ByaXRlRnJhbWUoUGxhdGZvcm0uZ2V0SGVhZCgpKS50aGVuKHNmID0+IHNwcml0ZS5zcHJpdGVGcmFtZSA9IHNmKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZXhpdCgpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLldFQ0hBVF9HQU1FID09IGNjLnN5cy5wbGF0Zm9ybSkge1xyXG4gICAgICAgICAgICB3eC5vZmZTaG93KFBsYXRmb3JtLm9uRW50ZXJGb3JlZ3JvdW5kKVxyXG4gICAgICAgICAgICB3eC5vZmZIaWRlKFBsYXRmb3JtLm9uRW50ZXJCYWNrZ3JvdW5kKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoY2Muc3lzLlFRX1BMQVkgPT0gY2Muc3lzLnBsYXRmb3JtKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY29uZmlnR2V0U2lnbmFsOiBTaWduYWwgPSBuZXcgU2lnbmFsKCk7XHJcblxyXG4gICAgc3RhdGljIGxvZ2luKHA/KSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5XRUNIQVRfR0FNRSA9PSBjYy5zeXMucGxhdGZvcm0pIHtcclxuICAgICAgICAgICAgd3hzZGsubG9naW4ocClcclxuICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5RUV9QTEFZID09IGNjLnN5cy5wbGF0Zm9ybSkge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzdGF0aWMgc3RhcnRBdXRoKCkge1xyXG4gICAgLy8gICAgIGlmIChjYy5zeXMuV0VDSEFUX0dBTUUgPT0gY2Muc3lzLnBsYXRmb3JtKSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiB3eHNkay5zdGFydEF1dGgoKTtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBsZXQgdXNlckluZm8gPSB7fSBhcyBBdXRoVXNlckluZm9cclxuICAgIC8vICAgICAgICAgdXNlckluZm8uYXZhdGFyVXJsID0gXCJodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnZIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTAzMDM5OTMyMSwxNDkzOTcwMDI5JmZtPTI3JmdwPTAuanBnXCJcclxuICAgIC8vICAgICAgICAgdXNlckluZm8uY2l0eSA9IFwiV3VIYW5cIixcclxuICAgIC8vICAgICAgICAgICAgIHVzZXJJbmZvLmdlbmRlciA9IDEsXHJcbiAgICAvLyAgICAgICAgICAgICB1c2VySW5mby5uaWNrTmFtZSA9ICdhbGl3YW5nemFpJ1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVzZXJJbmZvKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBjaGVja0F1dGgoKTogUHJvbWlzZTxBdXRoVXNlckluZm8+IHtcclxuICAgICAgICBpZiAoY2Muc3lzLldFQ0hBVF9HQU1FID09IGNjLnN5cy5wbGF0Zm9ybSkge1xyXG4gICAgICAgICAgICByZXR1cm4gd3hzZGsuY2hlY2tBdXRoKCkgYXMgYW55O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCB1c2VySW5mbyA9IHt9IGFzIEF1dGhVc2VySW5mb1xyXG4gICAgICAgICAgICB1c2VySW5mby5hdmF0YXJVcmwgPSBcImh0dHBzOi8vc3MwLmJkc3RhdGljLmNvbS83MGNGdkhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xMDMwMzk5MzIxLDE0OTM5NzAwMjkmZm09MjcmZ3A9MC5qcGdcIlxyXG4gICAgICAgICAgICB1c2VySW5mby5jaXR5ID0gXCJXdUhhblwiLFxyXG4gICAgICAgICAgICAgICAgdXNlckluZm8uZ2VuZGVyID0gMSxcclxuICAgICAgICAgICAgICAgIHVzZXJJbmZvLm5pY2tOYW1lID0gJ2FsaXdhbmd6YWknXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodXNlckluZm8pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog6Kej5YazIOaOkuihjOamnCDml6Dms5XliJLliqjpl67popggKi9cclxuICAgIHN0YXRpYyBmaXhfd2VjaGF0X3N1YkNvbnRleHQoc3ViQ29udGV4dDogY2MuV1hTdWJDb250ZXh0Vmlldywgc2VsZjogY2MuQ29tcG9uZW50KSB7XHJcbiAgICAgICAgc3ViQ29udGV4dC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHNlbGYuc2NoZWR1bGVPbmNlKF8gPT4ge1xyXG4gICAgICAgICAgICBzdWJDb250ZXh0Lm5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0sIDAuMSlcclxuICAgIH1cclxuXHJcbiAgICAvKirlvZPliY3njqnlrrYgaWQg77yM55So5LqO5YiG5Lqr5Y2h54mH5piv5bim5LiKICovXHJcbiAgICBzdGF0aWMgdXNlcklkOiBzdHJpbmcgPSAnMCdcclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0VXNlcklkKGlkKSB7XHJcbiAgICAgICAgdGhpcy51c2VySWQgPSBpZFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFNoYXJlQ29uZmlnOiBTaGFyZUluZm9bXSA9IG51bGw7XHJcbiAgICBzdGF0aWMgaW5pdFNoYXJlKGNmZzogU2hhcmVJbmZvW10sIHVzZXJJZD8pIHtcclxuICAgICAgICB0aGlzLmRlZmF1bHRTaGFyZUNvbmZpZyA9IGNmZztcclxuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcclxuICAgICAgICB0aGlzLmlzQW5kcm9pZCA9IGNjLnN5cy5vcyA9PSBcIkFuZHJvaWRcIlxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT0gb3NcIiwgY2Muc3lzLm9zKTtcclxuICAgICAgICB0aGlzLmlzSU9TID0gY2Muc3lzLm9zID09IFwiaU9TXCJcclxuICAgICAgICBpZiAoY2Muc3lzLldFQ0hBVF9HQU1FID09IGNjLnN5cy5wbGF0Zm9ybSkge1xyXG4gICAgICAgICAgICB3eHNkay5zaG93U2hhcmVNZW51KGNmZ1swXSk7XHJcbiAgICAgICAgICAgIHd4Lm9uU2hvdyhQbGF0Zm9ybS5vbkVudGVyRm9yZWdyb3VuZClcclxuICAgICAgICAgICAgd3gub25IaWRlKFBsYXRmb3JtLm9uRW50ZXJCYWNrZ3JvdW5kKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoY2Muc3lzLlFRX1BMQVkgPT0gY2Muc3lzLnBsYXRmb3JtKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdFVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgZ2V0R2FtZUlEKCkge1xyXG4gICAgICAgIGlmIChjYy5zeXMuUVFfUExBWSA9PSBjYy5zeXMucGxhdGZvcm0pIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwic3BlZWRfd2FueWl3YW5cIjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIGdldExhdW5jaE9wdGlvbnMoKTogeyBzY2VuZTogbnVtYmVyLCBxdWVyeTogT2JqZWN0IH0ge1xyXG4gICAgICAgIGlmIChjYy5zeXMuV0VDSEFUX0dBTUUgPT0gY2Muc3lzLnBsYXRmb3JtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3eC5nZXRMYXVuY2hPcHRpb25zU3luYygpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHNjZW5lOiAwLCBxdWVyeToge30gfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgZ2V0Q2l0eSgpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgZG9TaGFyZShzaGFyZV9jZmc6IFNoYXJlSW5mb1tdLCBjYWxsYmFjaz8sIHRpbWVvdXQgPSAzMDAwKSB7XHJcbiAgICAgICAgdGhpcy5kb1NoYXJlV2l0aFBhcmFtcyhudWxsLCBzaGFyZV9jZmcsIGNhbGxiYWNrLCB0aW1lb3V0KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaGFyZShjYWxiYWNrPykge1xyXG4gICAgICAgIHRoaXMuZG9TaGFyZSh0aGlzLmRlZmF1bHRTaGFyZUNvbmZpZywgY2FsYmFjayk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBkb1NoYXJlV2l0aFBhcmFtcyhwYXJhbXMsIHNoYXJlX2NmZ3M6IFNoYXJlSW5mb1tdLCBjYWxsYmFjaz8sIHRhcmdldD8sIHRpbWVvdXQgPSAyMDAwKSB7XHJcbiAgICAgICAgc2hhcmVfY2ZncyA9IHNoYXJlX2NmZ3MgfHwgdGhpcy5kZWZhdWx0U2hhcmVDb25maWdcclxuICAgICAgICBsZXQgc2hhcmVfY2ZnO1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNoYXJlX2NmZ3MpKSB7XHJcbiAgICAgICAgICAgIHNoYXJlX2NmZyA9IGcuZ2V0UmFuZG9tSW5BcnJheShzaGFyZV9jZmdzKSBhcyBTaGFyZUluZm87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMj5byA5aeL5YiG5LqrXCIpXHJcbiAgICAgICAgaWYgKGNjLnN5cy5XRUNIQVRfR0FNRSA9PSBjYy5zeXMucGxhdGZvcm0pIHtcclxuICAgICAgICAgICAgbGV0IHNkaztcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5xcSkge1xyXG4gICAgICAgICAgICAgICAgc2RrID0gcXFzZGs7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LnR0KSB7XHJcbiAgICAgICAgICAgICAgICBzZGsgPSB0dHNkaztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNkayA9IHd4c2RrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGFyYW1zID0gcGFyYW1zIHx8IHt9XHJcbiAgICAgICAgICAgIHBhcmFtcy51c2VySWQgPSB0aGlzLnVzZXJJZDtcclxuICAgICAgICAgICAgc2RrLm9wZW5TaGFyZShzaGFyZV9jZmcsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGxldCB0ID0gbmV3IERhdGUoKS5nZXRUaW1lKClcclxuICAgICAgICAgICAgUGxhdGZvcm0ub25FbnRlckZvcmVncm91bmRTaWduYWwub24oKG9iaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgUGxhdGZvcm0ub25FbnRlckZvcmVncm91bmRTaWduYWwuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIGxldCBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0O1xyXG4gICAgICAgICAgICAgICAgaWYgKGQgPiB0aW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYoTWF0aC5yYW5kb20oKSA8IDAuNSlcclxuICAgICAgICAgICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChfID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0YXJnZXQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMClcclxuICAgICAgICAgICAgICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYodGhpcy5zaGFyZUNvdW50ID49IDIpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5zaGFyZUNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoXyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGNhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRhcmdldClcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sIDUwMClcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy/nlKjmiLflj4rml7bov5Tlm57liIbkuqvlpLHotKUgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBUb2FzdC5tYWtlKFwi5YiG5Lqr5aSx6LSlLOivt+WwneivleaNouWFtuWug+e+pOWIhuS6q1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+eUqOaIt+WPiuaXtui/lOWbnuWIhuS6q+Wksei0pSBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGFyZ2V0LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUb2FzdC5tYWtlKFwi5YiG5Lqr5aSx6LSlLOivt+WwneivleaNouWFtuWug+e+pOWIhuS6q1wiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSBpZiAoY2Muc3lzLlFRX1BMQVkgPT0gY2Muc3lzLnBsYXRmb3JtKSB7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrLmNhbGwodGFyZ2V0LCAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIF92aWRlb0VuYWJsZWQgPSB0cnVlO1xyXG4gICAgc3RhdGljIF9iYW5uZXJFbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICBzdGF0aWMgc2V0QWRFbmFibGVkKGIpIHtcclxuICAgICAgICB0aGlzLl92aWRlb0VuYWJsZWQgPSBiO1xyXG4gICAgICAgIHRoaXMuX2Jhbm5lckVuYWJsZWQgPSBiO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpc1ZpZGVvQWRFbmFibGVkKGIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmlkZW9FbmFibGVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGlzQmFubmVyQWRFbmFibGVkKGIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYmFubmVyRW5hYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2VuZFVtZW5nRXZ0KHRpdGxlOiBzdHJpbmcsIGNvdW50OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MgJiYgY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJVbWVuZ1wiLCBcInVtZW5nRXZ0OmNvdW50OlwiLCB0aXRsZSwgY291bnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdmlkZW9fY2FsbGJhY2s6IFNpZ25hbCA9IG5ldyBTaWduYWwoKTtcclxuICAgIHN0YXRpYyB2aWRlb19mYWlsY2FsbGJhY2s6IFNpZ25hbCA9IG5ldyBTaWduYWwoKTtcclxuXHJcbiAgICBzdGF0aWMgd2F0Y2hfdmlkZW8oY2FsbGJhY2ssIHRhcmdldD8sIGZhaWxfbG9hZF9jYWxsYmFjaz8pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjI+W8gOWni+eci+inhumikVwiKVxyXG4gICAgICAgIGlmICghdGhpcy5fdmlkZW9FbmFibGVkKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCFjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgbGV0IHNkaztcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5xcSkge1xyXG4gICAgICAgICAgICAgICAgc2RrID0gcXFzZGs7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LnR0KSB7XHJcbiAgICAgICAgICAgICAgICBzZGsgPSB0dHNkaztcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cud3gpIHtcclxuICAgICAgICAgICAgICAgIHNkayA9IHd4c2RrXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2suY2FsbCh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzZGspIHtcclxuICAgICAgICAgICAgICAgIHNkay5sb2FkVmlkZW9BZCgoY29kZSwgaXNFbmRlZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2RlID09IFwibG9hZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYXRmb3JtLl9yZWZyZXNoRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PSAnc2hvdycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjb2RlID09IFwiY2xvc2VcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF0Zm9ybS5fcmVmcmVzaEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZU11c2ljKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNFbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QubWFrZShcIuW/hemhu+eci+WujOinhumikSzmiY3og73ojrflj5blpZblirFcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZhaWxfbG9hZF9jYWxsYmFjayAmJiBmYWlsX2xvYWRfY2FsbGJhY2suY2FsbCh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCLmj5DnpLpcIiwgY29udGVudDogXCLnnIvlrozlub/lkYrmiY3og73ojrflvpflpZblirHlk6ZcIiwgc2hvd0NhbmNlbDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjay5jYWxsKHRhcmdldClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PSAnZXJyb3InKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRvYXN0Lm1ha2UoXCLmsqHmnInop4bpopEs6K+356iN5ZCO5YaN6K+VIVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsX2xvYWRfY2FsbGJhY2sgJiYgZmFpbF9sb2FkX2NhbGxiYWNrLmNhbGwodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5kb1NoYXJlKFdlYWtOZXRHYW1lLnNoYXJlQ29uZmlnc1tcImRlZmF1bHRcIl0sIGNhbGxiYWNrLCB0YXJnZXQsIGZhaWxfY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TICYmIGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgwKTtcclxuXHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJUWHNka1wiLCBcInNob3dSZXdhcmRlZFZpZGVvXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZpbmlzaENhbGxiYWNrID0gXyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjay5jYWxsKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjYWxsYmFjaywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgxKTtcclxuICAgICAgICAgICAgICAgIC8vIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJNb3JlR2FtZUhlbHBlclwiLCBcInNldGJnbXJlc3VzZVwiLFwiKExqYXZhL2xhbmcvU3RyaW5nOylWXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgc3RyID0gSlNPTi5zdHJpbmdpZnkoeyBcInR5cGVcIjogbmFtZSwgXCJyZXN1bHRcIjogMSB9KTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIui/m+WFpeWfi+eCueS4iuS8oDJcIilcclxuICAgICAgICAgICAgICAgIC8vICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiQXBwc0ZseWVySGVscGVyXCIsIFwidHJhY2tFdmVudDp3aXRoVmFsdWVzOlwiLCBcImFkXCIsIHN0cik7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgUGxhdGZvcm0udmlkZW9fY2FsbGJhY2sub24oZmluaXNoQ2FsbGJhY2spO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZhaWxDYWxsYmFjayA9IF8gPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoMSk7XHJcbiAgICAgICAgICAgICAgICAvLyBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiTW9yZUdhbWVIZWxwZXJcIiwgXCJzZXRiZ21yZXN1c2VcIixcIihMamF2YS9sYW5nL1N0cmluZzspVlwiKTtcclxuICAgICAgICAgICAgICAgIGZhaWxfbG9hZF9jYWxsYmFjayAmJiBmYWlsX2xvYWRfY2FsbGJhY2suY2FsbCh0YXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFBsYXRmb3JtLnZpZGVvX2ZhaWxjYWxsYmFjay5vbihmYWlsQ2FsbGJhY2spO1xyXG5cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQgJiYgY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJjb20vbWltZ2FtZS9zZGsvQnl0ZWRhbmNlQWRTZGtcIiwgXCJsb2FkQWRcIiwgXCIoKVZcIik7XHJcbiAgICAgICAgICAgIHZhciBmaW5pc2hDYWxsYmFjayA9IF8gPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2suY2FsbCh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2FsbGJhY2ssIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIui/m+WFpeWfi+eCueS4iuS8oDFcIilcclxuICAgICAgICAgICAgICAgICAgICAvLyBTdGF0SGVwbGVyLnVzZXJBY3Rpb24obnVsbCxudWxsLFwiYWRkZENsaWNrXCIgLCB7IFwidHlwZVwiOiBuYW1lLCBcInJlc3VsdFwiOiAxIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgUGxhdGZvcm0udmlkZW9fY2FsbGJhY2sub24oZmluaXNoQ2FsbGJhY2spO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZhaWxDYWxsYmFjayA9IF8gPT4ge1xyXG4gICAgICAgICAgICAgICAgZmFpbF9sb2FkX2NhbGxiYWNrICYmIGZhaWxfbG9hZF9jYWxsYmFjay5jYWxsKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6L+b5YWl5Z+L54K55LiK5LygMlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFN0YXRIZXBsZXIudXNlckFjdGlvbihudWxsLG51bGwsXCJhZFwiICwgeyBcInR5cGVcIjogbmFtZSwgXCJyZXN1bHRcIjogMSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFBsYXRmb3JtLnZpZGVvX2ZhaWxjYWxsYmFjay5vbihmYWlsQ2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrLmNhbGwodGFyZ2V0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW5pdFNESygpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MgJiYgY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJHRFRTZGtcIiwgXCJpbml0XCIpO1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiVW1lbmdcIiwgXCJpbml0XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBzdGF0aWMgaW50ZXJzdGl0aWFsX2NhbGxiYWNrOiBTaWduYWwgPSBuZXcgU2lnbmFsKCk7XHJcbiAgICBzdGF0aWMgc2hvd0ludGVyc3RpdGlhbChjYWxsYmFjaz8sIHRhcmdldD8sIGVycm9yQ2FsbGJhY2s/KTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyPmmL7npLrmj5LlsY/lub/lkYpcIik7XHJcbiAgICAgICAgaWYgKENDX0RFQlVHKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiREVCVUfmqKHlvI/ot7Pov4fmj5LlsY/lub/lkYpcIik7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrLmNhbGwodGFyZ2V0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhpZGVCYW5uZXJBZCgpO1xyXG4gICAgICAgIGlmICghY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cucXEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBxcXNkay5zaG93SW50ZXJzdGl0aWFsKGVycm9yQ2FsbGJhY2spXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LnR0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHRzZGsuc2hvd0ludGVyc3RpdGlhbChlcnJvckNhbGxiYWNrKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB3eHNkay5zaG93SW50ZXJzdGl0aWFsKGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUyAmJiBjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoMCk7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJUWHNka1wiLCBcInNob3dGdWxsU2NyZWVBZFwiKTtcclxuICAgICAgICAgICAgdmFyIGZpbmlzaENhbGxiYWNrID0gXyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjay5jYWxsKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjYWxsYmFjaywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgxKTtcclxuICAgICAgICAgICAgICAgIC8vIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJNb3JlR2FtZUhlbHBlclwiLCBcInNldGJnbXJlc3VzZVwiLFwiKExqYXZhL2xhbmcvU3RyaW5nOylWXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgc3RyID0gSlNPTi5zdHJpbmdpZnkoeyBcInR5cGVcIjogbmFtZSwgXCJyZXN1bHRcIjogMSB9KTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIui/m+WFpeWfi+eCueS4iuS8oDJcIilcclxuICAgICAgICAgICAgICAgIC8vICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiQXBwc0ZseWVySGVscGVyXCIsIFwidHJhY2tFdmVudDp3aXRoVmFsdWVzOlwiLCBcImFkXCIsIHN0cik7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgUGxhdGZvcm0uaW50ZXJzdGl0aWFsX2NhbGxiYWNrLm9uKGZpbmlzaENhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEICYmIGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiY29tL21pbWdhbWUvc2RrL0J5dGVkYW5jZUFkU2RrXCIsIFwibG9hZEZ1bGxzY3JlZW5BZFwiLCBcIigpVlwiKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoMCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZmluaXNoQ2FsbGJhY2sgPSBfID0+IHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrLmNhbGwodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhbGxiYWNrLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKDEpO1xyXG4gICAgICAgICAgICAgICAgLy8ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIk1vcmVHYW1lSGVscGVyXCIsIFwic2V0YmdtcmVzdXNlXCIsXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIik7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxldCBzdHIgPSBKU09OLnN0cmluZ2lmeSh7IFwidHlwZVwiOiBuYW1lLCBcInJlc3VsdFwiOiAxIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwi6L+b5YWl5Z+L54K55LiK5LygMlwiKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJBcHBzRmx5ZXJIZWxwZXJcIiwgXCJ0cmFja0V2ZW50OndpdGhWYWx1ZXM6XCIsIFwiYWRcIiwgc3RyKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBQbGF0Zm9ybS5pbnRlcnN0aXRpYWxfY2FsbGJhY2sub24oZmluaXNoQ2FsbGJhY2spO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNob3dHYW1lUG9ydGFsKGVycmNhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IHBvcnRhbEFkID0gbnVsbDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuWIm+W7uuaOqOiNkOS9jeWunuS+iy0tLS0tXCIpXHJcbiAgICAgICAgaWYgKHd4LmNyZWF0ZUdhbWVQb3J0YWwpIHtcclxuICAgICAgICAgICAgcG9ydGFsQWQgPSB3eC5jcmVhdGVHYW1lUG9ydGFsKHsgYWRVbml0SWQ6IEdhbWVDb25maWcucG9ydGFsX2lkIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcign5LiN5pSv5oyBd3guY3JlYXRlR2FtZVBvcnRhbCcpO1xyXG4gICAgICAgICAgICBlcnJjYWxsYmFjayAmJiBlcnJjYWxsYmFjaygwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5Zyo6YCC5ZCI55qE5Zy65pmv5pi+56S65o6o6I2Q5L2NXHJcbiAgICAgICAgaWYgKHBvcnRhbEFkKSB7XHJcbiAgICAgICAgICAgIHBvcnRhbEFkLmxvYWQoKS50aGVuKCgpID0+IHsgcG9ydGFsQWQuc2hvdygpIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NyZWF0ZUdhbWVQb3J0YWw6JyArIGVycik7XHJcbiAgICAgICAgICAgICAgICBlcnJjYWxsYmFjayAmJiBlcnJjYWxsYmFjaygxLCBlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2hvd0Jhbm5lckFkKGVycm9yQ2FsbGJhY2s/KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyPmmL7npLpCYW5uZXLlub/lkYpcIilcclxuICAgICAgICBpZiAoIXRoaXMuX2Jhbm5lckVuYWJsZWQpIHJldHVyblxyXG4gICAgICAgIGlmICghY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cucXEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBxcXNkay5zaG93QmFubmVyQWQoZXJyb3JDYWxsYmFjaylcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cudHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0dHNkay5zaG93QmFubmVyQWQoZXJyb3JDYWxsYmFjaylcclxuICAgICAgICAgICAgfWVsc2UgaWYgKHdpbmRvdy53eCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHd4c2RrLnNob3dCYW5uZXJBZChlcnJvckNhbGxiYWNrKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MgJiYgY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIC8vIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJUWHNka1wiLCBcImxvYWRCYW5uZXI6XCIsIChjc3YuQ29uZmlnLkJhbm5lcl9SZWZyZXNoX1JhdGUgfHwgMzApKVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5RUV9QTEFZID09IGNjLnN5cy5wbGF0Zm9ybSkge1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEICYmIGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICAvLyBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiY29tL21pbWdhbWUvc2RrL0J5dGVkYW5jZUFkU2RrXCIsIFwibG9hZEJhbm5lclwiLCBcIigpVlwiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvL3BjIFxyXG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuNSkge1xyXG4gICAgICAgICAgICAgICAgLy/mmL7npLog5bm/5ZGK5aSx6LSlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaYvuekuuW5v+WRiuWksei0pSjmqKHmi58pXCIpXHJcbiAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrICYmIGVycm9yQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNCYW5uZXJTaG93KCkge1xyXG4gICAgICAgIGlmIChDQ19XRUNIQVRHQU1FKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3eHNkay5pc0Jhbm5lclNob3coKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGlkZUJhbm5lckFkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMj6ZqQ6JePQmFubmVy5bm/5ZGKXCIpXHJcbiAgICAgICAgaWYgKGNjLnN5cy5XRUNIQVRfR0FNRSA9PSBjYy5zeXMucGxhdGZvcm0pIHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5xcSkge1xyXG4gICAgICAgICAgICAgICAgcXFzZGsuaGlkZUJhbm5lckFkKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LnR0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHRzZGsuaGlkZUJhbm5lckFkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd3hzZGsuaGlkZUJhbm5lckFkKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjYy5zeXMuUVFfUExBWSA9PSBjYy5zeXMucGxhdGZvcm0pIHtcclxuICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TICYmIGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiVFhzZGtcIiwgXCJoaWRlQmFubmVyXCIpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCAmJiBjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcImNvbS9taW1nYW1lL3Nkay9CeXRlZGFuY2VBZFNka1wiLCBcImNsb3NlQmFubmVyXCIsIFwiKClWXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZWZyZXNoQmFubmVyQWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLliLfmlrAgYmFubmVyIFwiKVxyXG4gICAgICAgIGlmIChDQ19XRUNIQVRHQU1FKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cucXEpIHtcclxuICAgICAgICAgICAgICAgIHFxc2RrLmxvYWRCYW5uZXJBZCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy50dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHR0c2RrLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3eHNkay5sb2FkQmFubmVyQWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyByZWxvYWRCYW5uZXJBZChiU2hvdyA9IGZhbHNlLCBlcnJjYWxsYmFjaz8pIHtcclxuICAgICAgICBpZiAoQ0NfV0VDSEFUR0FNRSkge1xyXG4gICAgICAgICAgICB3eHNkay5oaWRlQmFubmVyQWQoKVxyXG4gICAgICAgICAgICB3eHNkay5sb2FkQmFubmVyQWQodiA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodiA9PSBcImxvYWRcIilcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYlNob3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3hzZGsuc2hvd0Jhbm5lckFkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHYgPT0gJ2Vycm9yJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJjYWxsYmFjayAmJiBlcnJjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyNyZWxvYWQgQmFubmVyLi4uLi5cIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGluaXRCYW5uZXJBZChiID0gMSkge1xyXG4gICAgICAgIGlmIChiID09IDApIHJldHVybjtcclxuICAgICAgICBpZiAoY2Muc3lzLlFRX1BMQVkgPT0gY2Muc3lzLnBsYXRmb3JtKSB7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoY2Muc3lzLldFQ0hBVF9HQU1FID09IGNjLnN5cy5wbGF0Zm9ybSkge1xyXG4gICAgICAgICAgICBzZXRJbnRlcnZhbChfID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChQbGF0Zm9ybS5iYW5ubmVyUmVmcmVzaEVuYWJsZWQgJiYgUGxhdGZvcm0uX3JlZnJlc2hFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyPliqDovb1XWCBCYW5uZXLlub/lkYpcIilcclxuICAgICAgICAgICAgICAgICAgICB3eHNkay5oaWRlQmFubmVyQWQoKVxyXG4gICAgICAgICAgICAgICAgICAgIHd4c2RrLmxvYWRCYW5uZXJBZCh2ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgPT0gXCJsb2FkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eHNkay5zaG93QmFubmVyQWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCA0MDAwMClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGp1bXBUbygpIHtcclxuICAgICAgICAvLyB2YXIgZGVzR2FtZUlkID0gMTIzNDsgLy/ot7PovaznmoRnYW1laWTvvIzlv4XpobvkuLrmlbDlrZdcclxuICAgICAgICAvLyB2YXIgZXh0ZW5kSW5mbyA9IFwiXCI7IC8v6aKd5aSW5Y+C5pWw77yM5b+F6aG75Li65a2X56ym5LiyXHJcbiAgICAgICAgLy8gQksuUVEuc2tpcEdhbWUoZGVzR2FtZUlkLCBleHRlbmRJbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2hvd1JhbmtEaWFsb2coKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJbUGxhdGZvcm1dI3Nob3dSYW5rRGlhbG9nXCIpO1xyXG4gICAgICAgIFRvYXN0Lm1ha2UoXCIjW1BsYXRmb3JtXSNzaG93UmFua0RpYWxvZ1wiKVxyXG5cclxuICAgICAgICAvLyBWaWV3TWFuYWdlci5pbnN0YW5jZS5zaG93KFwiR2FtZS9SYW5rRGlhbG9nXCIpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQW5kcmlvZCDlj5HpgIHmuLjmiI/lv6vmjbfmlrnlvI/liLDmoYzpnaJcclxuXHJcbiAgICBzdGF0aWMgb25FbnRlckZvcmVncm91bmQob2JqPykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT09b25FbnRlckZvcmVncm91bmQ9PT09PT09PT09PT09PT09PT09PT1cIilcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5RUV9QTEFZKSB7XHJcbiAgICAgICAgICAgIC8vb25FbnRlckZvcmVncm91bmRcclxuICAgICAgICAgICAgLy8gRGV2aWNlLnJlc3VtZU11c2ljKClcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lTXVzaWMoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnJlc3VtZU11c2ljKClcclxuICAgICAgICB9XHJcbiAgICAgICAgUGxhdGZvcm0ub25FbnRlckZvcmVncm91bmRTaWduYWwuZmlyZShvYmopO1xyXG4gICAgICAgIGV2dC5lbWl0KFwib25FbnRlckZvcmVncm91bmRcIilcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgb25FbnRlckJhY2tncm91bmQoKSB7XHJcbiAgICAgICAgLy8gQksub25FbnRlckJhY2tncm91bmQoZW50ZXJCYWNrZ3JvdW5kTGlzdGVuZXIpO1xyXG4gICAgICAgIC8vIGlmIChjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLlFRX1BMQVkpIHtcclxuXHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGV2dC5lbWl0KFwib25FbnRlckJhY2tncm91bmRcIilcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgb25HYW1lRXhpdCgpIHtcclxuICAgICAgICAvLyBCSy5vbkdhbWVDbG9zZShnYW1lQ2xvc2VMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNlbmRNZXNzYWdlVG9PcGVuKGNtZCwgZGF0YSkge1xyXG4gICAgICAgIGlmIChDQ19XRUNIQVRHQU1FKSB7XHJcbiAgICAgICAgICAgIHd4c2RrLnBvc3RNZXNzYWdlKGNtZCwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIHNob3dTbWFsbFJhbmsocmFua05hbWUsIHJhbmtUeXBlKSB7XHJcbiAgICAgICAgd3hzZGsucG9zdE1lc3NhZ2UoV3hDb21tYW5kcy5SYW5rU21hbGwsIHsgcmFua05hbWUsIHJhbmtUeXBlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaG93UmFuayhyYW5rTmFtZSwgcmFua1R5cGUpIHtcclxuICAgICAgICB3eHNkay5wb3N0TWVzc2FnZShXeENvbW1hbmRzLlJhbmssIHsgcmFua05hbWUsIHJhbmtUeXBlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoaWRlUmFuaygpIHtcclxuICAgICAgICB3eHNkay5wb3N0TWVzc2FnZShXeENvbW1hbmRzLkhpZGUpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFJhbmtMaXN0KGNhbGxiYWNrLCB0YXJnZXQ/KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJbUGxhdGZvcm1dI+iOt+WPluaOkuihjOamnOaVsOaNrlwiKTtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5RUV9QTEFZKSB7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVwbG9hZFNjb3JlKGs6IHN0cmluZyB8IG51bWJlciwgdj86IG9iamVjdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiW1BsYXRmb3JtXSPkuIrkvKDliIbmlbBcIik7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuUVFfUExBWSkge1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2Muc3lzLldFQ0hBVF9HQU1FID09IGNjLnN5cy5wbGF0Zm9ybSkge1xyXG4gICAgICAgICAgICAvLyB3eHNkay5wb3N0TWVzc2FnZShXeENvbW1hbmRzLiwgc2NvcmUpO1xyXG4gICAgICAgICAgICBsZXQgcyA9IEpTT04uc3RyaW5naWZ5KHYpO1xyXG4gICAgICAgICAgICB3eHNkay51cGxvYWRTY29yZShrLCBzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBUb2FzdC5tYWtlKFwiI1tQbGF0Zm9ybV0jdXBsb2FkU2NvcmVcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVwbG9hZFNjb3JlcyhrdnM6IHsga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfVtdKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuUVFfUExBWSkge1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2Muc3lzLldFQ0hBVF9HQU1FID09IGNjLnN5cy5wbGF0Zm9ybSkge1xyXG4gICAgICAgICAgICAvLyB3eHNkay5wb3N0TWVzc2FnZShXeENvbW1hbmRzLiwgc2NvcmUpO1xyXG4gICAgICAgICAgICByZXR1cm4gd3hzZGsudXBsb2FkU2NvcmVzKGt2cyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7fSlcclxuICAgICAgICAgICAgLy8gVG9hc3QubWFrZShcIiNbUGxhdGZvcm1dI3VwbG9hZFNjb3JlXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfbGF1bmNoX29wdGlvbnM6IExhdW5jaE9wdGlvbjtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGxhdW5jaF9vcHRpb25zKCk6IExhdW5jaE9wdGlvbiB7XHJcbiAgICAgICAgaWYgKCFDQ19XRUNIQVRHQU1FKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fbGF1bmNoX29wdGlvbnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sYXVuY2hfb3B0aW9ucyA9IHd4LmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9sYXVuY2hfb3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG1hdGNoUGF0aChjZmc6IHN0cmluZyB8IG51bWJlcikge1xyXG4gICAgICAgIC8vIGFsZF9saW5rX2tleVxyXG4gICAgICAgIC8vYWxkX21lZGlhX2lkXHJcbiAgICAgICAgLy9hbGRfcG9zaXRpb25faWRcclxuICAgICAgICAvLyBsZXQgdCA9ICc/YWxkX21lZGlhX2lkPTE1NjQxJmFsZF9saW5rX2tleT04ZWJjMDY0NWRkYmEwOTk2JmFsZF9wb3NpdGlvbl9pZD0wLD9hbGRfbWVkaWFfaWQ9MTU2NDEmYWxkX2xpbmtfa2V5PThlYmMwNjQ1ZGRiYTA5OTYmYWxkX3Bvc2l0aW9uX2lkPTAnXHJcbiAgICAgICAgaWYgKHRoaXMubGF1bmNoX29wdGlvbnMgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGxldCBzID0gY2ZnICsgXCJcIlxyXG4gICAgICAgIGxldCBhcnIgPSBzLnNwbGl0KC9bLFxcc10rLylcclxuICAgICAgICByZXR1cm4gYXJyLnNvbWUoYSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBrdnMgPSBhLnNwbGl0KC9bXFw/JkBcXCpdLylcclxuICAgICAgICAgICAga3ZzID0ga3ZzLmZpbHRlcih2ID0+IHYgIT0gJycpXHJcbiAgICAgICAgICAgIC8v5piv5ZCm6Kej5p6Q5Ye65p2l55qEa+WSjCBsYXVuY2ggb3B0aW9uIHF1ZXJ5IOWvueixoWtleSDlr7nlupTnmoTlgLznm7jnrYlcclxuICAgICAgICAgICAgcmV0dXJuIGt2cy5ldmVyeShrdiA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgW2ssIHZdID0ga3Yuc3BsaXQoJz0nKVxyXG4gICAgICAgICAgICAgICAgbGV0IHJ2ID0gdGhpcy5sYXVuY2hfb3B0aW9ucy5xdWVyeVtrXVxyXG4gICAgICAgICAgICAgICAgaWYgKHJ2ID09IHVuZGVmaW5lZCAmJiB2ID09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJ2ID09IHY7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHN0YXRpYyBsb2FkU3ViUGFja2FnZShuYW1lLCBwcm9ncmVzcz8pIHtcclxuICAgICAgICBpZiAoQ0NfV0VDSEFUR0FNRSkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LnFxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRUYXNrID0gcXEubG9hZFN1YnBhY2thZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZFRhc2sub25Qcm9ncmVzc1VwZGF0ZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnByb2dyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy50b3RhbEJ5dGVzV3JpdHRlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMudG90YWxCeXRlc0V4cGVjdGVkVG9Xcml0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+S4i+i9vei/m+W6picsIHJlcy5wcm9ncmVzcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+W3sue7j+S4i+i9veeahOaVsOaNrumVv+W6picsIHJlcy50b3RhbEJ5dGVzV3JpdHRlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+mihOacn+mcgOimgeS4i+i9veeahOaVsOaNruaAu+mVv+W6picsIHJlcy50b3RhbEJ5dGVzRXhwZWN0ZWRUb1dyaXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93Lnd4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpZF9pbnRlcnZhbCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9hZFRhc2sgPSB3eC5sb2FkU3VicGFja2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaWRfaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGlkX2ludGVydmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlICsgXCI6XCIgKyBuYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRfaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh2ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYyArPSA1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzICYmIHByb2dyZXNzKGMsIGMsIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjID49IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpZF9pbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCAyMClcclxuICAgICAgICAgICAgICAgICAgICBsb2FkVGFzay5vblByb2dyZXNzVXBkYXRlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZF9pbnRlcnZhbCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGlkX2ludGVydmFsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfaW50ZXJ2YWwgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzICYmIHByb2dyZXNzKHJlcy5wcm9ncmVzcywgcmVzLnRvdGFsQnl0ZXNXcml0dGVuLCByZXMudG90YWxCeXRlc0V4cGVjdGVkVG9Xcml0ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+S4i+i9vei/m+W6picsIHJlcy5wcm9ncmVzcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+W3sue7j+S4i+i9veeahOaVsOaNrumVv+W6picsIHJlcy50b3RhbEJ5dGVzV3JpdHRlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+mihOacn+mcgOimgeS4i+i9veeahOaVsOaNruaAu+mVv+W6picsIHJlcy50b3RhbEJ5dGVzRXhwZWN0ZWRUb1dyaXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGMgPSAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlkID0gc2V0SW50ZXJ2YWwodiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYyArPSAxMFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzICYmIHByb2dyZXNzKGMsIGMsIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgPj0gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCA1MClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGluaXRVcGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKENDX1dFQ0hBVEdBTUUpIHtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlTWFuYWdlciA9IHd4LmdldFVwZGF0ZU1hbmFnZXIoKVxyXG4gICAgICAgICAgICB1cGRhdGVNYW5hZ2VyLm9uQ2hlY2tGb3JVcGRhdGUoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g6K+35rGC5a6M5paw54mI5pys5L+h5oGv55qE5Zue6LCDXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuaGFzVXBkYXRlKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgdXBkYXRlTWFuYWdlci5vblVwZGF0ZVJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmm7TmlrDmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmlrDniYjmnKzlt7Lnu4/lh4blpIflpb3vvIzmmK/lkKbph43lkK/lupTnlKjvvJ8nLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5paw55qE54mI5pys5bey57uP5LiL6L295aW977yM6LCD55SoIGFwcGx5VXBkYXRlIOW6lOeUqOaWsOeJiOacrOW5tumHjeWQr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTWFuYWdlci5hcHBseVVwZGF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgdXBkYXRlTWFuYWdlci5vblVwZGF0ZUZhaWxlZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmlrDniYjmnKzkuIvovb3lpLHotKVcclxuXHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdjKCkge1xyXG4gICAgICAgIGlmIChDQ19XRUNIQVRHQU1FKSB7XHJcbiAgICAgICAgICAgIC8vdHJpZ2dlciBnYyBcclxuICAgICAgICAgICAgd3gudHJpZ2dlckdDKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuLy8gd2luZG93W1wid2F0Y2hDYWxsYmFja1wiXSA9ICgpID0+IHtcclxuLy8gICAgIFBsYXRmb3JtLnZpZGVvX2NhbGxiYWNrLmZpcmUoKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKFwi6KeC55yL6KeG6aKR5Zue6LCDXCIpXHJcbi8vIH1cclxuXHJcbi8vIHdpbmRvd1tcImZ1bGxzY3JlZW5DYWxsYmFja1wiXSA9ICgpID0+IHtcclxuLy8gICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKDEpXHJcbi8vICAgICBQbGF0Zm9ybS5pbnRlcnN0aXRpYWxfY2FsbGJhY2suZmlyZSgpO1xyXG4vLyAgICAgY29uc29sZS5sb2coXCLop4LnnIvop4bpopHlm57osINcIilcclxuLy8gfVxyXG5cclxuLy8gd2luZG93W1wid2F0Y2hDYWxsYmFja2ZhaWxcIl0gPSAoKSA9PiB7XHJcbi8vICAgICBQbGF0Zm9ybS52aWRlb19mYWlsY2FsbGJhY2suZmlyZSgpO1xyXG4vLyAgICAgY29uc29sZS5sb2coXCLop4LnnIvop4bpopHlpLHotKXlm57osINcIilcclxuLy8gfVxyXG5cclxud2luZG93W1wicGF1c2VcIl0gPSAoKSA9PiB7XHJcbiAgICBjYy5nYW1lLnBhdXNlKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIua4uOaIj+aaguWBnFwiKTtcclxufVxyXG5cclxud2luZG93W1wicmVzdW1lXCJdID0gKCkgPT4ge1xyXG4gICAgY2MuZ2FtZS5yZXN1bWUoKTtcclxuICAgIGNvbnNvbGUubG9nKFwi5ri45oiP57un57utXCIpO1xyXG59XHJcblxyXG53aW5kb3dbXCJwYXVzZW11c2ljXCJdID0gKHBhcmFtcykgPT4ge1xyXG4gICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoMCk7XHJcbiAgICAvLyBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiTW9yZUdhbWVIZWxwZXJcIiwgXCJzZXRiZ21jbG9zZVwiKTtcclxuICAgIGNvbnNvbGUubG9nKFwi5ri45oiP6Z+z5LmQ5pqC5YGcXCIpO1xyXG59XHJcblxyXG53aW5kb3dbXCJyZXN1bWVtdXNpY1wiXSA9IChwYXJhbXMpID0+IHtcclxuICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKDEpO1xyXG4gICAgLy8ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIk1vcmVHYW1lSGVscGVyXCIsIFwic2V0YmdtcmVzdXNlXCIpO1xyXG4gICAgY29uc29sZS5sb2coXCLmuLjmiI/pn7PkuZDnu6fnu61cIik7XHJcbn1cclxuXHJcblxyXG4vLyB3aW5kb3dbXCJCdWFkU0RLXCJdID0gZnVuY3Rpb24gKGV2ZW50LCBwYXJhbXMpIHtcclxuLy8gICAgIGlmIChldmVudCA9PSBcInJld2FyZGVkVmlkZW9BZERpZENsb3NlXCIpIHtcclxuLy8gICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgxKVxyXG4vLyAgICAgICAgIFBsYXRmb3JtLnZpZGVvX2NhbGxiYWNrLmZpcmUoKTtcclxuLy8gICAgICAgICAvLyBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiTW9yZUdhbWVIZWxwZXJcIiwgXCJzZXRiZ21yZXN1c2VcIik7XHJcblxyXG4vLyAgICAgfSBlbHNlIGlmIChldmVudCA9PSBcInJld2FyZGVkVmlkZW9BZFNlcnZlclJld2FyZERpZEZhaWxcIikge1xyXG4vLyAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKDEpXHJcbi8vICAgICAgICAgUGxhdGZvcm0udmlkZW9fZmFpbGNhbGxiYWNrLmZpcmUoKTtcclxuLy8gICAgICAgICAvLyBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiTW9yZUdhbWVIZWxwZXJcIiwgXCJzZXRiZ21yZXN1c2VcIik7XHJcbi8vICAgICB9XHJcbi8vICAgICBlbHNlIGlmIChldmVudCA9PSBcImZ1bGxzY3JlZW5WaWRlb0FkRGlkQ2xvc2VcIikge1xyXG4vLyAgICAgICAgIC8vIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJNb3JlR2FtZUhlbHBlclwiLCBcInNldGJnbXJlc3VzZVwiKTtcclxuLy8gICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgxKVxyXG4vLyAgICAgICAgIFBsYXRmb3JtLmludGVyc3RpdGlhbF9jYWxsYmFjay5maXJlKCk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIHdpbmRvd1tcIklTQW5kcm9pZENhbGxiYWNrc1wiXSA9IGZ1bmN0aW9uIChldmVudCwgcGFyYW1zKSB7XHJcblxyXG4vLyB9Il19