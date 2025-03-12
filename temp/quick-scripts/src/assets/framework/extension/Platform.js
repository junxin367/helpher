"use strict";
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