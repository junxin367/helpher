
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/wxsdk/sdk.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39d4a0B6RRGXqBM/1udBqAy', 'sdk');
// framework/extension/wxsdk/sdk.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wxsdk = void 0;
var event_1 = require("../../core/event");
var GameConfigs_1 = require("./GameConfigs");
var Signal_1 = require("../../core/Signal");
var Global = /** @class */ (function () {
    function Global() {
    }
    Global.videoAd = undefined;
    Global.bannerAd = undefined;
    Global.interstitialAd = undefined;
    Global.isBannerShow = false;
    Global.videoAdLoadCount = 0; //视频广告加载次数
    Global.bannerAdLoadCount = 0; //banner广告加载次数
    return Global;
}());
var WxSdk = /** @class */ (function () {
    function WxSdk() {
        this._userInfo = null;
        this._openId = "";
        /** -----播放视频  开始------ */
        this.desurl = '';
        if (CC_WECHATGAME) {
            if (this._version == null) {
                this._systemInfo = wx.getSystemInfoSync();
                var ver = this._systemInfo.SDKVersion.replace(/\./g, "");
                this._version = parseInt(ver);
            }
        }
    }
    Object.defineProperty(WxSdk.prototype, "Ver", {
        get: function () { return this._version; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WxSdk.prototype, "userInfo", {
        get: function () { return this._userInfo; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WxSdk.prototype, "parent", {
        get: function () {
            if (!CC_WECHATGAME)
                return "";
            var info = wx.getLaunchOptionsSync();
            if (info.scene == 1007 || info.scene == 1008) { //通过分享进入游戏
                var openId = info.query["user_id"];
                return openId;
            }
            return ""; //默认
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WxSdk.prototype, "openId", {
        get: function () {
            return this._openId;
        },
        set: function (v) {
            this._openId = v;
        },
        enumerable: false,
        configurable: true
    });
    WxSdk.prototype.requestDB = function (tbname, callback, target) {
        this._db.collection(tbname).get({
            success: function (res) {
                console.log("get " + tbname + " succ:", res.data);
                // self._shareConfig = res.data;
                if (callback)
                    callback.call(target, res.data);
            },
            fail: function (res) {
                console.log("get " + tbname + " fail:");
                if (callback)
                    callback.call(target);
            }
        });
    };
    WxSdk.prototype.requestConfig = function (callback) {
        this._db.collection("t_conf").get({
            success: function (res) {
                console.log("get configs succ:", res.data);
                // self._shareConfig = res.data;
                if (callback)
                    callback(res.data);
            },
            fail: function (res) {
                console.log("get configs fail:", res);
                if (callback)
                    callback(null);
            }
        });
    };
    WxSdk.prototype.compareVersion = function (v1, v2) {
        v1 = v1.split('.');
        v2 = v2.split('.');
        var len = Math.max(v1.length, v2.length);
        while (v1.length < len) {
            v1.push('0');
        }
        while (v2.length < len) {
            v2.push('0');
        }
        for (var i = 0; i < len; i++) {
            var num1 = parseInt(v1[i]);
            var num2 = parseInt(v2[i]);
            if (num1 > num2) {
                return 1;
            }
            else if (num1 < num2) {
                return -1;
            }
        }
        return 0;
    };
    /**
     * 打开分享
     * @param share_cfg {ShareInfo}
     */
    WxSdk.prototype.openShare = function (share_cfg, params) {
        return __awaiter(this, void 0, void 0, function () {
            var info, querys, querystr;
            return __generator(this, function (_a) {
                if (!g.iswxgame())
                    return [2 /*return*/];
                info = {};
                console.log("sdsdsd", info, info.title);
                info.title = share_cfg.title;
                info.imageUrl = share_cfg.imageUrl;
                querys = info.queryObjects || {};
                if (info != null) {
                    querystr = "";
                    params = params || {};
                    Object.keys(params).forEach(function (k1) {
                        querys[k1] = params[k1];
                    });
                    querystr = Object.keys(querys).reduce(function (sum, k) {
                        var v = querys[k];
                        return sum + (k + "=" + v + "&");
                    }, querystr);
                    info.query = querystr + "time=" + new Date().getTime();
                    info.ald_desc = share_cfg.ald_desc;
                    console.log("open Share", info);
                    wx.aldShareAppMessage(info);
                }
                return [2 /*return*/];
            });
        });
    };
    WxSdk.prototype.createButton = function (callback, x, y, width, height) {
        console.log("-------------createButton");
        var button = wx.createUserInfoButton({
            type: "text",
            text: "     ",
            style: {
                x: x || 0, y: y || 0,
                width: width || cc.winSize.width,
                height: height || cc.winSize.height,
                lineHeight: 40,
                backgroundColor: '#00000000',
                color: '#ffffff'
            }
        });
        button.onTap(function (res) {
            button.destroy();
            if (res && res) {
                if (callback)
                    callback(res);
            }
            else if (callback)
                callback(null);
        });
    };
    WxSdk.prototype.getUserInfo = function (callback) {
        console.warn("-------------getUserInfo");
        wx.getUserInfo({
            withCredentials: true,
            lang: "zh_CN",
            success: function (res) {
                console.log("getUserInfo success.", res);
                if (callback)
                    callback(res);
            }, fail: function (res) {
                console.log("getUserInfo:", res);
                if (callback)
                    callback(null);
            },
            complete: null
        });
    };
    WxSdk.prototype.oldAuthUser = function (callback) {
        wx.authorize({
            scope: "scope.userInfo",
            success: function (res) {
                console.log(res);
                if (callback)
                    callback(true);
            }, fail: function (res) {
                console.log(res);
                if (callback)
                    callback(false);
            },
            complete: null
        });
    };
    WxSdk.prototype.showShareMenu = function (cf) {
        var self = this;
        wx.showShareMenu({
            withShareTicket: true,
            success: function (res) {
                console.log(res);
            }, fail: function (res) {
                console.log(res);
            },
            complete: null
        });
        wx.aldOnShareAppMessage(function () {
            // let content =  {title:GameConfig.default_share_title,imageUrl:cc.url.raw(GameConfig.deafult_share_imgUrl)}
            return cf;
        });
    };
    WxSdk.prototype.wxLogin = function (callback) {
        var _this = this;
        wx.login({
            success: function (res) {
                console.log("code ", res.code);
                _this._loginCode = res.code;
                event_1.evt.emit("wxlogin", res.code);
                if (callback)
                    callback(true);
            }, fail: function (res) {
                if (callback)
                    callback(false);
            },
            complete: null
        });
    };
    WxSdk.prototype.startAuth = function () {
        var _this = this;
        var self = this;
        return new Promise(function (resolve, reject) {
            if (self._version >= 220) {
                self.createButton(function (ret) {
                    self.loginToServer(ret);
                    if (ret)
                        resolve(_this._userInfo);
                    else
                        reject();
                });
            }
            else {
                self.oldAuthUser(function (isAuth) {
                    if (isAuth) {
                        self.getUserInfo(function (ret) {
                            self.loginToServer(ret);
                            resolve(_this._userInfo);
                        });
                    }
                    else {
                        reject();
                    }
                });
            }
        });
    };
    WxSdk.prototype.checkAuth = function () {
        var _this = this;
        if (exports.wxsdk.userInfo) {
            return Promise.resolve(exports.wxsdk.userInfo);
        }
        else {
            return new Promise(function (resolve, reject) {
                wx.getSetting({
                    success: function (res) {
                        var auth = res.authSetting;
                        if (auth["scope.userInfo"]) {
                            _this.getUserInfo(function (ret) {
                                _this.loginToServer(ret);
                                resolve(_this._userInfo);
                            });
                        }
                        else {
                            // return this.startAuth();
                            resolve(null);
                        }
                    },
                    fail: null,
                    complete: null,
                });
            });
        }
    };
    WxSdk.prototype.loginToServer = function (ret) {
        if (ret && ret.userInfo) {
            this._userInfo = ret.userInfo;
        }
        event_1.evt.emit("wxUserInfo", this._userInfo, this._loginCode);
    };
    WxSdk.prototype.login = function (p) {
        var _this = this;
        if (!CC_WECHATGAME)
            return;
        var self = this;
        //wx.cloud.init({traceUser: true});
        // this._db = wx.cloud.database({env: "release-2c87c4"});//测试环境
        //this._db = wx.cloud.database();
        self.wxLogin(function (isLogin) {
            if (!isLogin)
                return;
            if (p) {
                _this.startAuth();
            }
        });
    };
    //发送消息到子域
    WxSdk.prototype.postMessage = function (cmd, data) {
        if (CC_WECHATGAME) {
            var req_1 = { cmd: cmd };
            if (data) {
                Object.keys(data).forEach(function (k) {
                    req_1[k] = data[k];
                });
            }
            wx.getOpenDataContext().postMessage(req_1);
        }
    };
    WxSdk.prototype.uploadScores = function (kvs) {
        return new Promise(function (resolve, reject) {
            var obj = {
                KVDataList: kvs,
                success: function (d) {
                    resolve(d);
                },
                fail: function () {
                    reject();
                },
                complete: function () { },
            };
            console.warn("-------uploadScores", kvs);
            wx.setUserCloudStorage(obj);
        });
    };
    WxSdk.prototype.uploadScore = function (k, v, callback) {
        var kvDataList = new Array();
        kvDataList.push({
            key: k,
            value: v
        });
        var obj = {
            KVDataList: kvDataList,
            success: function (d) {
                if (callback)
                    callback(d);
            },
            fail: function () { },
            complete: function () { },
        };
        wx.setUserCloudStorage(obj);
        // "wxgame": {
        //     "score": 16,
        //     "update_time": 1513080573
        // },
        // "cost_ms": 36500
    };
    WxSdk.prototype.loadBannerAd = function (callback) {
        var _this = this;
        if (Global.bannerAd) {
            Global.bannerAd.destroy();
        }
        if (!this._systemInfo)
            this._systemInfo = wx.getSystemInfoSync();
        var w = this._systemInfo.screenWidth / 2;
        var h = this._systemInfo.screenHeight;
        var isPor = this._systemInfo.screenWidth <= this._systemInfo.screenHeight;
        var fixWidth = isPor ? this._systemInfo.screenWidth : (this._systemInfo.screenHeight / 3);
        var modelStr = this._systemInfo.model;
        var isIOS = false;
        if (modelStr) {
            if (modelStr.indexOf("iPhone") != -1) {
                isIOS = true;
            }
        }
        var bannerAd = wx.createBannerAd({
            adUnitId: GameConfigs_1.GameConfig.banner_ad_id,
            style: {
                left: 0,
                top: 0,
                width: fixWidth
            }
        });
        Global.bannerAd = bannerAd;
        bannerAd.onLoad(function () {
            Global.bannerAdLoadCount = 0;
            bannerAd.style.left = w - bannerAd.style.realWidth / 2;
            if (isIOS) {
                bannerAd.style.top = h - bannerAd.style.realHeight - 13;
            }
            else {
                bannerAd.style.top = h - bannerAd.style.realHeight;
            }
            if (callback)
                callback("load", bannerAd);
        });
        bannerAd.onError(function (err) {
            //加载失败
            console.log("wxsdk bannerAd onError code:" + err.code + " msg:" + err.msg);
            Global.bannerAdLoadCount += 1;
            if (Global.bannerAdLoadCount < 4) {
                _this.loadBannerAd(callback);
            }
            Global.bannerAd = null;
            if (callback)
                callback("error");
        });
    };
    WxSdk.prototype.showBannerAd = function (errorCallback) {
        var _this = this;
        console.log("Wxsdk 显示banner广告", Global.bannerAd);
        if (Global.bannerAd) {
            Global.bannerAd.show();
            Global.isBannerShow = true;
            event_1.evt.emit("wxsdk.BannerReady");
        }
        else {
            console.log("Wxsdk 不存在banner资源....");
            this.loadBannerAd(function (v, ad) {
                if (v == "load") {
                    _this.showBannerAd();
                }
                else if (v == 'error') {
                    errorCallback && errorCallback();
                }
            });
        }
    };
    WxSdk.prototype.isBannerShow = function () {
        return Global.isBannerShow;
    };
    WxSdk.prototype.hideBannerAd = function () {
        if (Global.bannerAd) {
            Global.bannerAd.hide();
            Global.isBannerShow = false;
            // Global.bannerAd = null;
        }
    };
    //interstitial
    WxSdk.prototype.showInterstitial = function (errorCallback) {
        // 创建插屏广告实例，提前初始化
        if (wx.createInterstitialAd) {
            Global.interstitialAd = wx.createInterstitialAd({
                adUnitId: GameConfigs_1.GameConfig.interstitial_ad_id
            });
        }
        else {
            console.log("不支持插屏广告");
            errorCallback && errorCallback('notsupport');
        }
        // 在适合的场景显示插屏广告
        if (Global.interstitialAd) {
            Global.interstitialAd.show().catch(function (err) {
                console.error(err);
                errorCallback && errorCallback("err", err);
            });
            return new Promise(function (v) {
                Global.interstitialAd.onClose(function (res) {
                    v();
                });
            });
        }
    };
    WxSdk.prototype.loadVideoAd = function (callback) {
        console.log("============wxsdk.loadVideoAD");
        // if (!Global.videoAd ) { //如果没有广告资源就加载新的视频广告
        var self = this;
        var videoAd = Global.videoAd;
        if (!videoAd) {
            videoAd = wx.createRewardedVideoAd({
                adUnitId: GameConfigs_1.GameConfig.video_ad_id
            });
        }
        else {
            videoAd.offClose(Global.video_close_callback);
            videoAd.offError(Global.video_error_callback);
            videoAd.offLoad(Global.video_load_callback);
        }
        Global.video_error_callback = function () {
            //加载失败
            Global.videoAdLoadCount += 1;
            //尝试4次
            if (Global.videoAdLoadCount < 1) {
                self.loadVideoAd(callback);
            }
            else {
                if (callback)
                    callback("error");
            }
        };
        Global.video_close_callback = function (ret) {
            //播放结束
            console.log("wxsdk onClose...");
            Global.videoAdLoadCount = 0;
            if (callback)
                callback("close", ret.isEnded);
            Global.videoAd = null;
        };
        Global.video_load_callback = function () {
            //加载成功
            console.log("wxsdk onLoad");
            Global.videoAd = videoAd;
            Global.videoAdLoadCount = 0;
            // this.showBannerAd();
            if (callback)
                callback("load", videoAd);
        };
        // 用户触发广告后，显示激励视频广告
        videoAd.show().catch(function () {
            // this.hideBannerAd();
            videoAd.load().then(function () {
                videoAd.show();
                if (callback)
                    callback("show");
            }).catch(function (err) {
                Global.videoAdLoadCount += 1;
            });
        });
        videoAd.onError(Global.video_error_callback);
        videoAd.onClose(Global.video_close_callback);
        videoAd.onLoad(Global.video_load_callback);
        Global.videoAd = videoAd;
    };
    /**
     一次性模板 id 和永久模板 id 不可同时使用。
    低版本基础库2.4.4~2.8.3 已支持订阅消息接口调用，仅支持传入一个一次性 tmplId / 永久 tmplId。
    2.8.2 版本开始，用户发生点击行为或者发起支付回调后，才可以调起订阅消息界面。
    2.10.0 版本开始，开发版和体验版小游戏将禁止使用模板消息 fomrId。*/
    WxSdk.prototype.requestSubscribeMessage = function () {
        // if (!g.iswxgame()) return;
        var version = wx.getSystemInfoSync().SDKVersion;
        if (CC_DEBUG || exports.wxsdk.compareVersion(version, '2.8.4') > 0) {
            return new Promise(function (resolve, reject) {
                wx.requestSubscribeMessage({
                    tmplIds: GameConfigs_1.GameConfig.tmplIds,
                    success: function (res) {
                        console.log(res);
                        var ids = [];
                        GameConfigs_1.GameConfig.tmplIds.map(function (item, index) {
                            if (res[item] == "accept") {
                                ids.push(item);
                            }
                        });
                        resolve(ids);
                    },
                    fail: function (err) {
                        wx.showModal({
                            title: '失败提示',
                            content: "错误信息：" + err.errMsg + "错误码：" + err.errCode
                        });
                        reject(err.errCode);
                    }
                });
            });
        }
        else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            wx.showModal({
                title: '提示',
                content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
            });
        }
    };
    //客服
    WxSdk.prototype.openCustomerServiceConversation = function (callback, failCallback) {
        if (CC_DEBUG) {
            callback && callback();
            return;
        }
        // if (!g.iswxgame()) return;
        var version = wx.getSystemInfoSync().SDKVersion;
        if (exports.wxsdk.compareVersion(version, '2.0.3') > 0) {
            wx.openCustomerServiceConversation({
                showMessageCard: true,
                sendMessageTitle: "帮她脱险",
                sendMessageImg: "https://www.mimgame.com/games/helpher/share/customer-claim.png",
                success: function (data) {
                    console.log("success =", data);
                    callback && callback();
                },
                fail: function (data) {
                    console.log("fail =", data);
                    failCallback && failCallback();
                },
                complete: function (data) {
                    console.log("complete =", data);
                }
            });
        }
        else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            wx.showModal({
                title: '提示',
                content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
            });
        }
    };
    /** 普清 */
    WxSdk.prototype.showVideo = function (avid, url) {
        console.log('showVideo ===>');
        this.desurl = url;
        var self = this;
        var start_url = "https://vv.video.qq.com/getinfo?vids=" + avid + "&platform=101001&charge=0&otype=json&defn=shd";
        console.log('start_url  ', start_url);
        return new Promise((function (resolve) {
            window['wx'].request({
                url: start_url,
                success: function (res) {
                    var dataJson = res.data.replace(/QZOutputJson=/, '') + "qwe";
                    var dataJson1 = dataJson.replace(/;qwe/, '');
                    var data = JSON.parse(dataJson1);
                    console.log('data  ', data);
                    if (data['em']) {
                        console.log('getVideoInfoB error  ===========>> !!!!!  em', data['em']);
                        return self.goSafeVideo(self.desurl);
                    }
                    else {
                        var theurl = data['vl']['vi'][0]['ul']['ui'][0]['url']
                            + data['vl']['vi'][0]['fn']
                            + "?vkey="
                            + data['vl']['vi'][0]['fvkey'];
                        console.log('theurl   ', theurl);
                        return self.goFreeVideo(theurl);
                    }
                },
                fail: function () {
                    console.log('getVideoInfoB error  ===========>> !!!!!');
                    return self.goSafeVideo(self.desurl);
                }
            });
        }));
    };
    /** 高清 */
    WxSdk.prototype.showVideoG = function (avid, url) {
        console.log('showVideo ===>');
        if (url)
            this.desurl = url.toString();
        var self = this;
        var start_url = "https://vv.video.qq.com/getinfo?vids=" + avid + "&platform=101001&charge=0&otype=json&defn=shd";
        console.log('start_url  ', start_url);
        var signal = new Signal_1.default();
        window['wx'].request({
            url: start_url,
            success: function (res) {
                var dataJson = res.data.replace(/QZOutputJson=/, '') + "qwe";
                var dataJson1 = dataJson.replace(/;qwe/, '');
                var data = JSON.parse(dataJson1);
                console.log('data  ', data);
                if (data['em']) {
                    console.log('getVideoInfoB error  ===========>> !!!!!  em', data['em']);
                    self.goSafeVideo(self.desurl).then(function (v) { return signal.fire(); }).catch(function (v) { return signal.cancel(); });
                    // signal.cancel();
                }
                else {
                    var gUrl = "https://vv.video.qq.com/getkey?format=2&otype=json&vt=150&vid=" + avid + "&ran=0%2E9477521511726081\\&charge=0&filename=" + avid + ".mp4&platform=11";
                    window['wx'].request({
                        url: gUrl,
                        success: function (res1) {
                            var dataJson2 = res1.data.replace(/QZOutputJson=/, '') + "qwe";
                            var dataJson3 = dataJson2.replace(/;qwe/, '');
                            var data1 = JSON.parse(dataJson3);
                            console.log('data1   ', data1);
                            var theurl = data['vl']['vi'][0]['ul']['ui'][0]['url']
                                + (avid + ".mp4")
                                + "?vkey="
                                + data1['key'];
                            console.log('theurl   ', theurl);
                            self.goFreeVideo(theurl).then(function (v) { return signal.fire(); }).catch(function (v) { return signal.cancel(); });
                        },
                        fail: function () {
                            console.log('getkey error  ===========>> !!!!!');
                            self.goSafeVideo(self.desurl).then(function (v) { return signal.fire(); }).catch(function (v) { return signal.cancel(); });
                            // signal.cancel()
                        }
                    });
                }
            },
            fail: function () {
                console.log('getVideoInfoB error  ===========>> !!!!!');
                // signal.cancel()
                self.goSafeVideo(self.desurl).then(function (v) { return signal.fire(); }).catch(function (v) { return signal.cancel(); });
            }
        });
        return signal.wait();
    };
    //oss  地址
    /** oss备份 */
    WxSdk.prototype.goSafeVideo = function (url) {
        var _this = this;
        console.log('goVideo  ===>  ', url);
        if (!url)
            return Promise.resolve();
        var wx = window['wx'];
        var signal = new Signal_1.default();
        if (wx) {
            var sys = this.getSystemInfo();
            var video_1 = wx.createVideo({
                x: 0,
                y: 0,
                width: sys.windowWidth,
                height: sys.windowHeight,
                src: url,
                objectFit: 'fill',
                controls: true,
                autoplay: true,
                showCenterPlayBtn: false,
                enableProgressGesture: false
            });
            video_1.requestFullScreen();
            video_1.onEnded(function (res) {
                console.log('播放完成');
                video_1.destroy();
                // Game.Inst.showResult()
                signal.fire();
            });
            video_1.onError(function (errMsg) {
                video_1.destroy();
                _this.goSafeVideo(url);
                signal.cancel();
                return;
            });
        }
        else {
        }
        return signal.wait();
    };
    /** 免费视频 */
    WxSdk.prototype.goFreeVideo = function (url) {
        var self = this;
        var wx = window['wx'];
        if (wx) {
            var sys = this.getSystemInfo();
            var video_2 = wx.createVideo({
                x: 0,
                y: 0,
                width: sys.windowWidth,
                height: sys.windowHeight,
                src: url,
                // poster: posterUrl,
                objectFit: 'contain',
                controls: true,
                autoplay: true,
                showCenterPlayBtn: false,
                enableProgressGesture: false
            });
            video_2.requestFullScreen();
            var signal_1 = new Signal_1.default();
            video_2.onEnded(function (res) {
                console.log('播放完成');
                video_2.destroy();
                signal_1.fire();
            });
            video_2.onError(function (errMsg) {
                console.log('goNewVideo  error  ===========>> !!!!!');
                video_2.destroy();
                self.goSafeVideo(self.desurl);
                return;
            });
            return signal_1.wait();
        }
        return Promise.resolve();
    };
    /** -----播放视频  结束-----*/
    WxSdk.prototype.getSystemInfo = function () {
        if (!this._systemInfo)
            this._systemInfo = wx.getSystemInfoSync();
        return this._systemInfo;
    };
    return WxSdk;
}());
exports.wxsdk = new WxSdk();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHd4c2RrXFxzZGsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQXVDO0FBQ3ZDLDZDQUEyQztBQUkzQyw0Q0FBdUM7QUFFdkM7SUFBQTtJQVVBLENBQUM7SUFUVSxjQUFPLEdBQUcsU0FBUyxDQUFBO0lBQ25CLGVBQVEsR0FBRyxTQUFTLENBQUE7SUFDcEIscUJBQWMsR0FBRyxTQUFTLENBQUE7SUFDMUIsbUJBQVksR0FBRyxLQUFLLENBQUM7SUFDckIsdUJBQWdCLEdBQUcsQ0FBQyxDQUFBLENBQUMsVUFBVTtJQUMvQix3QkFBaUIsR0FBRyxDQUFDLENBQUEsQ0FBQyxjQUFjO0lBSS9DLGFBQUM7Q0FWRCxBQVVDLElBQUE7QUFrQ0Q7SUFnQ0k7UUEvQkEsY0FBUyxHQUFRLElBQUksQ0FBQztRQUV0QixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBbWtCckIsMEJBQTBCO1FBQ2xCLFdBQU0sR0FBRyxFQUFFLENBQUE7UUF0aUJmLElBQUksYUFBYSxFQUFFO1lBQ2YsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDMUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQTtnQkFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDakM7U0FDSjtJQUNMLENBQUM7SUEvQkQsc0JBQVcsc0JBQUc7YUFBZCxjQUEyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUVsRCxzQkFBVywyQkFBUTthQUFuQixjQUF3QixPQUFP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QUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDbkIsT0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFBO2dCQUNmLFFBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQTtZQUVGLE9BQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxNQUFNO2dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUE7Z0JBQ3JELE9BQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQTtnQkFDZixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDN0IsT0FBTTtZQUNWLENBQUMsQ0FBQyxDQUFBO1lBQ0YsT0FBTyxRQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7U0FFeEI7UUFDRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBQ0Qsd0JBQXdCO0lBRXhCLDZCQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM5QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVMLFlBQUM7QUFBRCxDQTl2QkEsQUE4dkJDLElBQUE7QUFFVSxRQUFBLEtBQUssR0FBVSxJQUFJLEtBQUssRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXZ0IH0gZnJvbSBcIi4uLy4uL2NvcmUvZXZlbnRcIjtcclxuaW1wb3J0IHsgR2FtZUNvbmZpZyB9IGZyb20gXCIuL0dhbWVDb25maWdzXCI7XHJcblxyXG5pbXBvcnQgTmV0IGZyb20gXCIuLi8uLi9taXNjL05ldFwiO1xyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuLi8uLi91aS9Ub2FzdE1hbmFnZXJcIjtcclxuaW1wb3J0IFNpZ25hbCBmcm9tIFwiLi4vLi4vY29yZS9TaWduYWxcIjtcclxuXHJcbmNsYXNzIEdsb2JhbCB7XHJcbiAgICBzdGF0aWMgdmlkZW9BZCA9IHVuZGVmaW5lZFxyXG4gICAgc3RhdGljIGJhbm5lckFkID0gdW5kZWZpbmVkXHJcbiAgICBzdGF0aWMgaW50ZXJzdGl0aWFsQWQgPSB1bmRlZmluZWRcclxuICAgIHN0YXRpYyBpc0Jhbm5lclNob3cgPSBmYWxzZTtcclxuICAgIHN0YXRpYyB2aWRlb0FkTG9hZENvdW50ID0gMCAvL+inhumikeW5v+WRiuWKoOi9veasoeaVsFxyXG4gICAgc3RhdGljIGJhbm5lckFkTG9hZENvdW50ID0gMCAvL2Jhbm5lcuW5v+WRiuWKoOi9veasoeaVsFxyXG4gICAgc3RhdGljIHZpZGVvX2Nsb3NlX2NhbGxiYWNrOiAocmV0OiBhbnkpID0+IHZvaWQ7XHJcbiAgICBzdGF0aWMgdmlkZW9fZXJyb3JfY2FsbGJhY2s6ICgpID0+IHZvaWQ7XHJcbiAgICBzdGF0aWMgdmlkZW9fbG9hZF9jYWxsYmFjazogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuXHJcbmludGVyZmFjZSBTeXN0ZW1JbmZvIHtcclxuICAgIFNES1ZlcnNpb246IHN0cmluZyxcclxuICAgIGJhdHRlcnlMZXZlbDogbnVtYmVyLFxyXG4gICAgYmVuY2htYXJrTGV2ZWw6IG51bWJlcixcclxuICAgIGJyYW5kOiBzdHJpbmcsXHJcbiAgICBkZXZpY2VQaXhlbFJhdGlvOiBudW1iZXJcclxuICAgIGZvbnRTaXplU2V0dGluZzogbnVtYmVyLFxyXG4gICAgbGFuZ3VhZ2U6IHN0cmluZyxcclxuICAgIG1vZGVsOiBzdHJpbmcsLy9cImlQaG9uZSA2LzcvOCBQbHVzXCJcclxuICAgIHBpeGVsUmF0aW86IG51bWJlclxyXG4gICAgcGxhdGZvcm06IHN0cmluZzsvL1wiZGV2dG9vbHNcIlxyXG4gICAgc2FmZUFyZWE6IGFueTsvL3sgcmlnaHQsIGJvdHRvbSwgbGVmdCwgdG9wLCB3aWR0aCB9XHJcbiAgICBzY3JlZW5IZWlnaHQ6IG51bWJlcjtcclxuICAgIHNjcmVlbldpZHRoOiBudW1iZXI7XHJcbiAgICBzdGF0dXNCYXJIZWlnaHQ6IG51bWJlcjtcclxuICAgIHN5c3RlbTogc3RyaW5nOy8vXCJpT1MgMTAuMC4xXCJcclxuICAgIHZlcnNpb246IHN0cmluZzsvL1wiNy4wLjRcIlxyXG4gICAgd2luZG93SGVpZ2h0OiBudW1iZXJcclxuICAgIHdpbmRvd1dpZHRoOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2hhcmVJbmZvIHtcclxuICAgIHRpdGxlOiBzdHJpbmcsXHJcbiAgICBpbWFnZVVybDogc3RyaW5nLFxyXG4gICAgcXVlcnk/OiBzdHJpbmcsXHJcbiAgICBhbGRfZGVzYz86IHN0cmluZ1xyXG5cclxuICAgIGlkPzogc3RyaW5nLFxyXG4gICAgcXVlcnlPYmplY3RzOiBPYmplY3RcclxufVxyXG5cclxuY2xhc3MgV3hTZGsge1xyXG4gICAgX3VzZXJJbmZvOiBhbnkgPSBudWxsO1xyXG4gICAgX2xvZ2luQ29kZTogYW55O1xyXG4gICAgX29wZW5JZDogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBfZGI6IGFueTtcclxuICAgIF92ZXJzaW9uOiBudW1iZXI7XHJcbiAgICBfc3lzdGVtSW5mbzogYW55O1xyXG5cclxuICAgIHB1YmxpYyBnZXQgVmVyKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl92ZXJzaW9uOyB9XHJcblxyXG4gICAgcHVibGljIGdldCB1c2VySW5mbygpIHsgcmV0dXJuIHRoaXMuX3VzZXJJbmZvIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHBhcmVudCgpIHtcclxuICAgICAgICBpZiAoIUNDX1dFQ0hBVEdBTUUpIHJldHVybiBcIlwiXHJcbiAgICAgICAgbGV0IGluZm8gPSB3eC5nZXRMYXVuY2hPcHRpb25zU3luYygpO1xyXG4gICAgICAgIGlmIChpbmZvLnNjZW5lID09IDEwMDcgfHwgaW5mby5zY2VuZSA9PSAxMDA4KSB7Ly/pgJrov4fliIbkuqvov5vlhaXmuLjmiI9cclxuICAgICAgICAgICAgbGV0IG9wZW5JZCA9IGluZm8ucXVlcnlbXCJ1c2VyX2lkXCJdO1xyXG4gICAgICAgICAgICByZXR1cm4gb3BlbklkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIlwiOyAvL+m7mOiupFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgb3BlbklkKHYpIHtcclxuICAgICAgICB0aGlzLl9vcGVuSWQgPSB2XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBvcGVuSWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wZW5JZFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAoQ0NfV0VDSEFUR0FNRSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdmVyc2lvbiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zeXN0ZW1JbmZvID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuICAgICAgICAgICAgICAgIGxldCB2ZXIgPSB0aGlzLl9zeXN0ZW1JbmZvLlNES1ZlcnNpb24ucmVwbGFjZSgvXFwuL2csIFwiXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLl92ZXJzaW9uID0gcGFyc2VJbnQodmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXN0REIodGJuYW1lLCBjYWxsYmFjaywgdGFyZ2V0KSB7XHJcbiAgICAgICAgdGhpcy5fZGIuY29sbGVjdGlvbih0Ym5hbWUpLmdldCh7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0IFwiICsgdGJuYW1lICsgXCIgc3VjYzpcIiwgcmVzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICAvLyBzZWxmLl9zaGFyZUNvbmZpZyA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjay5jYWxsKHRhcmdldCwgcmVzLmRhdGEpO1xyXG4gICAgICAgICAgICB9LCBmYWlsOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldCBcIiArIHRibmFtZSArIFwiIGZhaWw6XCIpXHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrLmNhbGwodGFyZ2V0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlcXVlc3RDb25maWcoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLl9kYi5jb2xsZWN0aW9uKFwidF9jb25mXCIpLmdldCh7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0IGNvbmZpZ3Mgc3VjYzpcIiwgcmVzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICAvLyBzZWxmLl9zaGFyZUNvbmZpZyA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIH0sIGZhaWw6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0IGNvbmZpZ3MgZmFpbDpcIiwgcmVzKVxyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGFyZVZlcnNpb24odjEsIHYyKSB7XHJcbiAgICAgICAgdjEgPSB2MS5zcGxpdCgnLicpXHJcbiAgICAgICAgdjIgPSB2Mi5zcGxpdCgnLicpXHJcbiAgICAgICAgY29uc3QgbGVuID0gTWF0aC5tYXgodjEubGVuZ3RoLCB2Mi5sZW5ndGgpXHJcblxyXG4gICAgICAgIHdoaWxlICh2MS5sZW5ndGggPCBsZW4pIHtcclxuICAgICAgICAgICAgdjEucHVzaCgnMCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlICh2Mi5sZW5ndGggPCBsZW4pIHtcclxuICAgICAgICAgICAgdjIucHVzaCgnMCcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG51bTEgPSBwYXJzZUludCh2MVtpXSlcclxuICAgICAgICAgICAgY29uc3QgbnVtMiA9IHBhcnNlSW50KHYyW2ldKVxyXG5cclxuICAgICAgICAgICAgaWYgKG51bTEgPiBudW0yKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG51bTEgPCBudW0yKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDBcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiZPlvIDliIbkuqtcclxuICAgICAqIEBwYXJhbSBzaGFyZV9jZmcge1NoYXJlSW5mb31cclxuICAgICAqL1xyXG4gICAgYXN5bmMgb3BlblNoYXJlKHNoYXJlX2NmZzogU2hhcmVJbmZvLCBwYXJhbXM/KSB7XHJcbiAgICAgICAgaWYgKCFnLmlzd3hnYW1lKCkpIHJldHVybjtcclxuICAgICAgICBsZXQgaW5mbyA9IHt9IGFzIFNoYXJlSW5mbztcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNkc2RzZFwiLGluZm8saW5mby50aXRsZSk7XHJcblxyXG4gICAgICAgIGluZm8udGl0bGUgPSBzaGFyZV9jZmcudGl0bGU7XHJcbiAgICAgICAgaW5mby5pbWFnZVVybCA9IHNoYXJlX2NmZy5pbWFnZVVybDtcclxuICAgICAgICBsZXQgcXVlcnlzOiBhbnkgPSBpbmZvLnF1ZXJ5T2JqZWN0cyB8fCB7fTtcclxuICAgICAgICBpZiAoaW5mbyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBxdWVyeXN0ciA9IFwiXCJcclxuICAgICAgICAgICAgcGFyYW1zID0gcGFyYW1zIHx8IHt9XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrMSA9PiB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeXNbazFdID0gcGFyYW1zW2sxXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBxdWVyeXN0ciA9IE9iamVjdC5rZXlzKHF1ZXJ5cykucmVkdWNlKChzdW0sIGspID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gcXVlcnlzW2tdXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3VtICsgYCR7a309JHt2fSZgXHJcbiAgICAgICAgICAgIH0sIHF1ZXJ5c3RyKVxyXG4gICAgICAgICAgICBpbmZvLnF1ZXJ5ID0gcXVlcnlzdHIgKyBcInRpbWU9XCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgICAgICAgICBpbmZvLmFsZF9kZXNjID0gc2hhcmVfY2ZnLmFsZF9kZXNjXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3BlbiBTaGFyZVwiLCBpbmZvKVxyXG4gICAgICAgICAgICB3eC5hbGRTaGFyZUFwcE1lc3NhZ2UoaW5mbyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlQnV0dG9uKGNhbGxiYWNrLCB4PywgeT8sIHdpZHRoPywgaGVpZ2h0Pykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLWNyZWF0ZUJ1dHRvblwiKTtcclxuICAgICAgICBsZXQgYnV0dG9uID0gd3guY3JlYXRlVXNlckluZm9CdXR0b24oe1xyXG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgdGV4dDogXCIgICAgIFwiLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgeDogeCB8fCAwLCB5OiB5IHx8IDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGggfHwgY2Mud2luU2l6ZS53aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0IHx8IGNjLndpblNpemUuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogNDAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwMDAnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmZmZmJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnV0dG9uLm9uVGFwKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgYnV0dG9uLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2socmVzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgZ2V0VXNlckluZm8oY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCItLS0tLS0tLS0tLS0tZ2V0VXNlckluZm9cIik7XHJcbiAgICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgICAgICAgIGxhbmc6IFwiemhfQ05cIixcclxuICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXRVc2VySW5mbyBzdWNjZXNzLlwiLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhyZXMpO1xyXG4gICAgICAgICAgICB9LCBmYWlsOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldFVzZXJJbmZvOlwiLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcGxldGU6IG51bGxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbGRBdXRoVXNlcihjYWxsYmFjaykge1xyXG4gICAgICAgIHd4LmF1dGhvcml6ZSh7XHJcbiAgICAgICAgICAgIHNjb3BlOiBcInNjb3BlLnVzZXJJbmZvXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICB9LCBmYWlsOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0sIGNvbXBsZXRlOiBudWxsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzaG93U2hhcmVNZW51KGNmOiBTaGFyZUluZm8pIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgd3guc2hvd1NoYXJlTWVudSh7XHJcbiAgICAgICAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZSxcclxuICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgfSwgZmFpbDogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgfSwgY29tcGxldGU6IG51bGxcclxuICAgICAgICB9KTtcclxuICAgICAgICB3eC5hbGRPblNoYXJlQXBwTWVzc2FnZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIGxldCBjb250ZW50ID0gIHt0aXRsZTpHYW1lQ29uZmlnLmRlZmF1bHRfc2hhcmVfdGl0bGUsaW1hZ2VVcmw6Y2MudXJsLnJhdyhHYW1lQ29uZmlnLmRlYWZ1bHRfc2hhcmVfaW1nVXJsKX1cclxuICAgICAgICAgICAgcmV0dXJuIGNmO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHd4TG9naW4oY2FsbGJhY2spIHtcclxuICAgICAgICB3eC5sb2dpbih7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29kZSBcIiwgcmVzLmNvZGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9naW5Db2RlID0gcmVzLmNvZGU7XHJcbiAgICAgICAgICAgICAgICBldnQuZW1pdChcInd4bG9naW5cIiwgcmVzLmNvZGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayh0cnVlKTtcclxuICAgICAgICAgICAgfSwgZmFpbDogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0sIGNvbXBsZXRlOiBudWxsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0QXV0aCgpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlbGYuX3ZlcnNpb24gPj0gMjIwKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNyZWF0ZUJ1dHRvbigocmV0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sb2dpblRvU2VydmVyKHJldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl91c2VySW5mbylcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm9sZEF1dGhVc2VyKChpc0F1dGgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNBdXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZ2V0VXNlckluZm8oKHJldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sb2dpblRvU2VydmVyKHJldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuX3VzZXJJbmZvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hlY2tBdXRoKCkge1xyXG4gICAgICAgIGlmICh3eHNkay51c2VySW5mbykge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHd4c2RrLnVzZXJJbmZvKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXV0aCA9IHJlcy5hdXRoU2V0dGluZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF1dGhbXCJzY29wZS51c2VySW5mb1wiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRVc2VySW5mbygocmV0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpblRvU2VydmVyKHJldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl91c2VySW5mbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gdGhpcy5zdGFydEF1dGgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCBmYWlsOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBsb2dpblRvU2VydmVyKHJldCkge1xyXG4gICAgICAgIGlmIChyZXQgJiYgcmV0LnVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VzZXJJbmZvID0gcmV0LnVzZXJJbmZvXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2dC5lbWl0KFwid3hVc2VySW5mb1wiLCB0aGlzLl91c2VySW5mbywgdGhpcy5fbG9naW5Db2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9naW4ocCkge1xyXG4gICAgICAgIGlmICghQ0NfV0VDSEFUR0FNRSkgcmV0dXJuXHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIC8vd3guY2xvdWQuaW5pdCh7dHJhY2VVc2VyOiB0cnVlfSk7XHJcbiAgICAgICAgLy8gdGhpcy5fZGIgPSB3eC5jbG91ZC5kYXRhYmFzZSh7ZW52OiBcInJlbGVhc2UtMmM4N2M0XCJ9KTsvL+a1i+ivleeOr+Wig1xyXG4gICAgICAgIC8vdGhpcy5fZGIgPSB3eC5jbG91ZC5kYXRhYmFzZSgpO1xyXG4gICAgICAgIHNlbGYud3hMb2dpbihpc0xvZ2luID0+IHtcclxuICAgICAgICAgICAgaWYgKCFpc0xvZ2luKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmIChwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QXV0aCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL+WPkemAgea2iOaBr+WIsOWtkOWfn1xyXG4gICAgcHVibGljIHBvc3RNZXNzYWdlKGNtZCwgZGF0YT8pIHtcclxuICAgICAgICBpZiAoQ0NfV0VDSEFUR0FNRSkge1xyXG4gICAgICAgICAgICBsZXQgcmVxID0geyBjbWQgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChrID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXFba10gPSBkYXRhW2tdXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHd4LmdldE9wZW5EYXRhQ29udGV4dCgpLnBvc3RNZXNzYWdlKHJlcSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGxvYWRTY29yZXMoa3ZzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICAgICAgICAgIEtWRGF0YUxpc3Q6IGt2cyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkgeyB9LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIi0tLS0tLS11cGxvYWRTY29yZXNcIiwga3ZzKTtcclxuICAgICAgICAgICAgd3guc2V0VXNlckNsb3VkU3RvcmFnZShvYmopXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBsb2FkU2NvcmUoaywgdiwgY2FsbGJhY2s/KSB7XHJcbiAgICAgICAgdmFyIGt2RGF0YUxpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBrdkRhdGFMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICBrZXk6IGssXHJcbiAgICAgICAgICAgIHZhbHVlOiB2XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBvYmogPSB7XHJcbiAgICAgICAgICAgIEtWRGF0YUxpc3Q6IGt2RGF0YUxpc3QsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGQpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHsgfSxcclxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHsgfSxcclxuICAgICAgICB9XHJcbiAgICAgICAgd3guc2V0VXNlckNsb3VkU3RvcmFnZShvYmopXHJcbiAgICAgICAgLy8gXCJ3eGdhbWVcIjoge1xyXG4gICAgICAgIC8vICAgICBcInNjb3JlXCI6IDE2LFxyXG4gICAgICAgIC8vICAgICBcInVwZGF0ZV90aW1lXCI6IDE1MTMwODA1NzNcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIFwiY29zdF9tc1wiOiAzNjUwMFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkQmFubmVyQWQoY2FsbGJhY2s/KSB7XHJcbiAgICAgICAgaWYgKEdsb2JhbC5iYW5uZXJBZCkge1xyXG4gICAgICAgICAgICBHbG9iYWwuYmFubmVyQWQuZGVzdHJveSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5fc3lzdGVtSW5mbylcclxuICAgICAgICAgICAgdGhpcy5fc3lzdGVtSW5mbyA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbiAgICAgICAgdmFyIHcgPSB0aGlzLl9zeXN0ZW1JbmZvLnNjcmVlbldpZHRoIC8gMjtcclxuICAgICAgICB2YXIgaCA9IHRoaXMuX3N5c3RlbUluZm8uc2NyZWVuSGVpZ2h0O1xyXG5cclxuICAgICAgICBsZXQgaXNQb3IgPSB0aGlzLl9zeXN0ZW1JbmZvLnNjcmVlbldpZHRoIDw9IHRoaXMuX3N5c3RlbUluZm8uc2NyZWVuSGVpZ2h0O1xyXG4gICAgICAgIGxldCBmaXhXaWR0aCA9IGlzUG9yID8gdGhpcy5fc3lzdGVtSW5mby5zY3JlZW5XaWR0aCA6ICh0aGlzLl9zeXN0ZW1JbmZvLnNjcmVlbkhlaWdodCAvIDMpO1xyXG4gICAgICAgIGxldCBtb2RlbFN0ciA9IHRoaXMuX3N5c3RlbUluZm8ubW9kZWxcclxuICAgICAgICBsZXQgaXNJT1MgPSBmYWxzZTtcclxuICAgICAgICBpZiAobW9kZWxTdHIpIHtcclxuICAgICAgICAgICAgaWYgKG1vZGVsU3RyLmluZGV4T2YoXCJpUGhvbmVcIikgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGlzSU9TID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYmFubmVyQWQgPSB3eC5jcmVhdGVCYW5uZXJBZCh7XHJcbiAgICAgICAgICAgIGFkVW5pdElkOiBHYW1lQ29uZmlnLmJhbm5lcl9hZF9pZCxcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICB0b3A6IDAsLy9jYy52aXNpYmxlUmVjdC5oZWlnaHRcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBmaXhXaWR0aFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBHbG9iYWwuYmFubmVyQWQgPSBiYW5uZXJBZDtcclxuXHJcbiAgICAgICAgYmFubmVyQWQub25Mb2FkKCgpID0+IHtcclxuICAgICAgICAgICAgR2xvYmFsLmJhbm5lckFkTG9hZENvdW50ID0gMDtcclxuICAgICAgICAgICAgYmFubmVyQWQuc3R5bGUubGVmdCA9IHcgLSBiYW5uZXJBZC5zdHlsZS5yZWFsV2lkdGggLyAyO1xyXG4gICAgICAgICAgICBpZiAoaXNJT1MpIHtcclxuICAgICAgICAgICAgICAgIGJhbm5lckFkLnN0eWxlLnRvcCA9IGggLSBiYW5uZXJBZC5zdHlsZS5yZWFsSGVpZ2h0IC0gMTM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBiYW5uZXJBZC5zdHlsZS50b3AgPSBoIC0gYmFubmVyQWQuc3R5bGUucmVhbEhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKFwibG9hZFwiLCBiYW5uZXJBZClcclxuICAgICAgICB9KVxyXG4gICAgICAgIGJhbm5lckFkLm9uRXJyb3IoKGVycikgPT4ge1xyXG4gICAgICAgICAgICAvL+WKoOi9veWksei0pVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInd4c2RrIGJhbm5lckFkIG9uRXJyb3IgY29kZTpcIiArIGVyci5jb2RlICsgXCIgbXNnOlwiICsgZXJyLm1zZyk7XHJcbiAgICAgICAgICAgIEdsb2JhbC5iYW5uZXJBZExvYWRDb3VudCArPSAxO1xyXG4gICAgICAgICAgICBpZiAoR2xvYmFsLmJhbm5lckFkTG9hZENvdW50IDwgNCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQmFubmVyQWQoY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEdsb2JhbC5iYW5uZXJBZCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soXCJlcnJvclwiKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93QmFubmVyQWQoZXJyb3JDYWxsYmFjaz8pOiBhbnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiV3hzZGsg5pi+56S6YmFubmVy5bm/5ZGKXCIsIEdsb2JhbC5iYW5uZXJBZClcclxuICAgICAgICBpZiAoR2xvYmFsLmJhbm5lckFkKSB7XHJcbiAgICAgICAgICAgIEdsb2JhbC5iYW5uZXJBZC5zaG93KCk7XHJcbiAgICAgICAgICAgIEdsb2JhbC5pc0Jhbm5lclNob3cgPSB0cnVlXHJcbiAgICAgICAgICAgIGV2dC5lbWl0KFwid3hzZGsuQmFubmVyUmVhZHlcIilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIld4c2RrIOS4jeWtmOWcqGJhbm5lcui1hOa6kC4uLi5cIik7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZEJhbm5lckFkKCh2LCBhZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHYgPT0gXCJsb2FkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dCYW5uZXJBZCgpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHYgPT0gJ2Vycm9yJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sgJiYgZXJyb3JDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNCYW5uZXJTaG93KCkge1xyXG4gICAgICAgIHJldHVybiBHbG9iYWwuaXNCYW5uZXJTaG93O1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVCYW5uZXJBZCgpIHtcclxuICAgICAgICBpZiAoR2xvYmFsLmJhbm5lckFkKSB7XHJcbiAgICAgICAgICAgIEdsb2JhbC5iYW5uZXJBZC5oaWRlKCk7XHJcbiAgICAgICAgICAgIEdsb2JhbC5pc0Jhbm5lclNob3cgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gR2xvYmFsLmJhbm5lckFkID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9pbnRlcnN0aXRpYWxcclxuICAgIHNob3dJbnRlcnN0aXRpYWwoZXJyb3JDYWxsYmFjaykge1xyXG4gICAgICAgIC8vIOWIm+W7uuaPkuWxj+W5v+WRiuWunuS+i++8jOaPkOWJjeWIneWni+WMllxyXG4gICAgICAgIGlmICh3eC5jcmVhdGVJbnRlcnN0aXRpYWxBZCkge1xyXG4gICAgICAgICAgICBHbG9iYWwuaW50ZXJzdGl0aWFsQWQgPSB3eC5jcmVhdGVJbnRlcnN0aXRpYWxBZCh7XHJcbiAgICAgICAgICAgICAgICBhZFVuaXRJZDogR2FtZUNvbmZpZy5pbnRlcnN0aXRpYWxfYWRfaWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5LiN5pSv5oyB5o+S5bGP5bm/5ZGKXCIpXHJcbiAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sgJiYgZXJyb3JDYWxsYmFjaygnbm90c3VwcG9ydCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWcqOmAguWQiOeahOWcuuaZr+aYvuekuuaPkuWxj+W5v+WRilxyXG4gICAgICAgIGlmIChHbG9iYWwuaW50ZXJzdGl0aWFsQWQpIHtcclxuICAgICAgICAgICAgR2xvYmFsLmludGVyc3RpdGlhbEFkLnNob3coKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sgJiYgZXJyb3JDYWxsYmFjayhcImVyclwiLCBlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UodiA9PiB7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWwuaW50ZXJzdGl0aWFsQWQub25DbG9zZSgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdigpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRWaWRlb0FkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT13eHNkay5sb2FkVmlkZW9BRFwiKTtcclxuICAgICAgICAvLyBpZiAoIUdsb2JhbC52aWRlb0FkICkgeyAvL+WmguaenOayoeacieW5v+WRiui1hOa6kOWwseWKoOi9veaWsOeahOinhumikeW5v+WRilxyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgdmlkZW9BZCA9IEdsb2JhbC52aWRlb0FkO1xyXG4gICAgICAgIGlmICghdmlkZW9BZCkge1xyXG4gICAgICAgICAgICB2aWRlb0FkID0gd3guY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHtcclxuICAgICAgICAgICAgICAgIGFkVW5pdElkOiBHYW1lQ29uZmlnLnZpZGVvX2FkX2lkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmlkZW9BZC5vZmZDbG9zZShHbG9iYWwudmlkZW9fY2xvc2VfY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB2aWRlb0FkLm9mZkVycm9yKEdsb2JhbC52aWRlb19lcnJvcl9jYWxsYmFjayk7XHJcbiAgICAgICAgICAgIHZpZGVvQWQub2ZmTG9hZChHbG9iYWwudmlkZW9fbG9hZF9jYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEdsb2JhbC52aWRlb19lcnJvcl9jYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy/liqDovb3lpLHotKVcclxuICAgICAgICAgICAgR2xvYmFsLnZpZGVvQWRMb2FkQ291bnQgKz0gMTtcclxuICAgICAgICAgICAgLy/lsJ3or5U05qyhXHJcbiAgICAgICAgICAgIGlmIChHbG9iYWwudmlkZW9BZExvYWRDb3VudCA8IDEpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYubG9hZFZpZGVvQWQoY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhcImVycm9yXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdsb2JhbC52aWRlb19jbG9zZV9jYWxsYmFjayA9IGZ1bmN0aW9uIChyZXQpIHtcclxuICAgICAgICAgICAgLy/mkq3mlL7nu5PmnZ9cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3eHNkayBvbkNsb3NlLi4uXCIpO1xyXG4gICAgICAgICAgICBHbG9iYWwudmlkZW9BZExvYWRDb3VudCA9IDBcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhcImNsb3NlXCIsIHJldC5pc0VuZGVkKVxyXG4gICAgICAgICAgICBHbG9iYWwudmlkZW9BZCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHbG9iYWwudmlkZW9fbG9hZF9jYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy/liqDovb3miJDlip9cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3eHNkayBvbkxvYWRcIik7XHJcbiAgICAgICAgICAgIEdsb2JhbC52aWRlb0FkID0gdmlkZW9BZDtcclxuICAgICAgICAgICAgR2xvYmFsLnZpZGVvQWRMb2FkQ291bnQgPSAwO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnNob3dCYW5uZXJBZCgpO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKFwibG9hZFwiLCB2aWRlb0FkKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDnlKjmiLfop6blj5Hlub/lkYrlkI7vvIzmmL7npLrmv4DlirHop4bpopHlub/lkYpcclxuICAgICAgICB2aWRlb0FkLnNob3coKS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuaGlkZUJhbm5lckFkKCk7XHJcbiAgICAgICAgICAgIHZpZGVvQWQubG9hZCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmlkZW9BZC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKFwic2hvd1wiKVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgR2xvYmFsLnZpZGVvQWRMb2FkQ291bnQgKz0gMTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB2aWRlb0FkLm9uRXJyb3IoR2xvYmFsLnZpZGVvX2Vycm9yX2NhbGxiYWNrKTtcclxuICAgICAgICB2aWRlb0FkLm9uQ2xvc2UoR2xvYmFsLnZpZGVvX2Nsb3NlX2NhbGxiYWNrKTtcclxuICAgICAgICB2aWRlb0FkLm9uTG9hZChHbG9iYWwudmlkZW9fbG9hZF9jYWxsYmFjayk7XHJcbiAgICAgICAgR2xvYmFsLnZpZGVvQWQgPSB2aWRlb0FkXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAg5LiA5qyh5oCn5qih5p2/IGlkIOWSjOawuOS5heaooeadvyBpZCDkuI3lj6/lkIzml7bkvb/nlKjjgIJcclxuICAgIOS9jueJiOacrOWfuuehgOW6kzIuNC40fjIuOC4zIOW3suaUr+aMgeiuoumYhea2iOaBr+aOpeWPo+iwg+eUqO+8jOS7heaUr+aMgeS8oOWFpeS4gOS4quS4gOasoeaApyB0bXBsSWQgLyDmsLjkuYUgdG1wbElk44CCXHJcbiAgICAyLjguMiDniYjmnKzlvIDlp4vvvIznlKjmiLflj5HnlJ/ngrnlh7vooYzkuLrmiJbogIXlj5HotbfmlK/ku5jlm57osIPlkI7vvIzmiY3lj6/ku6XosIPotbforqLpmIXmtojmga/nlYzpnaLjgIJcclxuICAgIDIuMTAuMCDniYjmnKzlvIDlp4vvvIzlvIDlj5HniYjlkozkvZPpqozniYjlsI/muLjmiI/lsIbnpoHmraLkvb/nlKjmqKHmnb/mtojmga8gZm9tcklk44CCKi9cclxuICAgIHJlcXVlc3RTdWJzY3JpYmVNZXNzYWdlKCkge1xyXG4gICAgICAgIC8vIGlmICghZy5pc3d4Z2FtZSgpKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgdmVyc2lvbiA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCkuU0RLVmVyc2lvblxyXG4gICAgICAgIGlmIChDQ19ERUJVRyB8fCB3eHNkay5jb21wYXJlVmVyc2lvbih2ZXJzaW9uLCAnMi44LjQnKSA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHd4LnJlcXVlc3RTdWJzY3JpYmVNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB0bXBsSWRzOiBHYW1lQ29uZmlnLnRtcGxJZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWRzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcudG1wbElkcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzW2l0ZW1dID09IFwiYWNjZXB0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZHMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5aSx6LSl5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwi6ZSZ6K+v5L+h5oGv77yaXCIgKyBlcnIuZXJyTXNnICsgXCLplJnor6/noIHvvJpcIiArIGVyci5lcnJDb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIuZXJyQ29kZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8g5aaC5p6c5biM5pyb55So5oi35Zyo5pyA5paw54mI5pys55qE5a6i5oi356uv5LiK5L2T6aqM5oKo55qE5bCP56iL5bqP77yM5Y+v5Lul6L+Z5qC35a2Q5o+Q56S6XHJcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn5b2T5YmN5b6u5L+h54mI5pys6L+H5L2O77yM5peg5rOV5L2/55So6K+l5Yqf6IO977yM6K+35Y2H57qn5Yiw5pyA5paw5b6u5L+h54mI5pys5ZCO6YeN6K+V44CCJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+WuouacjVxyXG4gICAgb3BlbkN1c3RvbWVyU2VydmljZUNvbnZlcnNhdGlvbihjYWxsYmFjaywgZmFpbENhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKENDX0RFQlVHKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgKCFnLmlzd3hnYW1lKCkpIHJldHVybjtcclxuICAgICAgICBjb25zdCB2ZXJzaW9uID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKS5TREtWZXJzaW9uXHJcbiAgICAgICAgaWYgKHd4c2RrLmNvbXBhcmVWZXJzaW9uKHZlcnNpb24sICcyLjAuMycpID4gMCkge1xyXG4gICAgICAgICAgICB3eC5vcGVuQ3VzdG9tZXJTZXJ2aWNlQ29udmVyc2F0aW9uKHtcclxuICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlQ2FyZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNlbmRNZXNzYWdlVGl0bGU6IFwi5biu5aW56ISx6ZmpXCIsXHJcbiAgICAgICAgICAgICAgICBzZW5kTWVzc2FnZUltZzogXCJodHRwczovL3d3dy5taW1nYW1lLmNvbS9nYW1lcy9oZWxwaGVyL3NoYXJlL2N1c3RvbWVyLWNsYWltLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3MgPVwiLCBkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWlsID1cIiwgZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICBmYWlsQ2FsbGJhY2sgJiYgZmFpbENhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29tcGxldGUgPVwiLCBkYXRhKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOWmguaenOW4jOacm+eUqOaIt+WcqOacgOaWsOeJiOacrOeahOWuouaIt+err+S4iuS9k+mqjOaCqOeahOWwj+eoi+W6j++8jOWPr+S7pei/meagt+WtkOaPkOekulxyXG4gICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+W9k+WJjeW+ruS/oeeJiOacrOi/h+S9ju+8jOaXoOazleS9v+eUqOivpeWKn+iDve+8jOivt+WNh+e6p+WIsOacgOaWsOW+ruS/oeeJiOacrOWQjumHjeivleOAgidcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8qKiAtLS0tLeaSreaUvuinhumikSAg5byA5aeLLS0tLS0tICovXHJcbiAgICBwcml2YXRlIGRlc3VybCA9ICcnXHJcbiAgICAvKiog5pmu5riFICovXHJcbiAgICBzaG93VmlkZW8oYXZpZCwgdXJsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Nob3dWaWRlbyA9PT0+JylcclxuICAgICAgICB0aGlzLmRlc3VybCA9IHVybFxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpc1xyXG4gICAgICAgIGxldCBzdGFydF91cmwgPSBgaHR0cHM6Ly92di52aWRlby5xcS5jb20vZ2V0aW5mbz92aWRzPSR7YXZpZH0mcGxhdGZvcm09MTAxMDAxJmNoYXJnZT0wJm90eXBlPWpzb24mZGVmbj1zaGRgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0X3VybCAgJywgc3RhcnRfdXJsKVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSA9PiB7XHJcblxyXG4gICAgICAgICAgICB3aW5kb3dbJ3d4J10ucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHN0YXJ0X3VybCxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YUpzb24gPSByZXMuZGF0YS5yZXBsYWNlKC9RWk91dHB1dEpzb249LywgJycpICsgXCJxd2VcIjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YUpzb24xID0gZGF0YUpzb24ucmVwbGFjZSgvO3F3ZS8sICcnKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZGF0YUpzb24xKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YSAgJywgZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVsnZW0nXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0VmlkZW9JbmZvQiBlcnJvciAgPT09PT09PT09PT0+PiAhISEhISAgZW0nLCBkYXRhWydlbSddKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5nb1NhZmVWaWRlbyhzZWxmLmRlc3VybClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aGV1cmwgPSBkYXRhWyd2bCddWyd2aSddWzBdWyd1bCddWyd1aSddWzBdWyd1cmwnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBkYXRhWyd2bCddWyd2aSddWzBdWydmbiddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIFwiP3ZrZXk9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgZGF0YVsndmwnXVsndmknXVswXVsnZnZrZXknXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhldXJsICAgJywgdGhldXJsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5nb0ZyZWVWaWRlbyh0aGV1cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0VmlkZW9JbmZvQiBlcnJvciAgPT09PT09PT09PT0+PiAhISEhIScpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuZ29TYWZlVmlkZW8oc2VsZi5kZXN1cmwpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSkpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOmrmOa4hSAqL1xyXG4gICAgc2hvd1ZpZGVvRyhhdmlkLCB1cmw/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzaG93VmlkZW8gPT09PicpXHJcbiAgICAgICAgaWYgKHVybClcclxuICAgICAgICAgICAgdGhpcy5kZXN1cmwgPSB1cmwudG9TdHJpbmcoKVxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpc1xyXG4gICAgICAgIGxldCBzdGFydF91cmwgPSBgaHR0cHM6Ly92di52aWRlby5xcS5jb20vZ2V0aW5mbz92aWRzPSR7YXZpZH0mcGxhdGZvcm09MTAxMDAxJmNoYXJnZT0wJm90eXBlPWpzb24mZGVmbj1zaGRgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0X3VybCAgJywgc3RhcnRfdXJsKVxyXG4gICAgICAgIGxldCBzaWduYWwgPSBuZXcgU2lnbmFsKCk7XHJcbiAgICAgICAgd2luZG93Wyd3eCddLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHN0YXJ0X3VybCxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFKc29uID0gcmVzLmRhdGEucmVwbGFjZSgvUVpPdXRwdXRKc29uPS8sICcnKSArIFwicXdlXCI7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YUpzb24xID0gZGF0YUpzb24ucmVwbGFjZSgvO3F3ZS8sICcnKTtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShkYXRhSnNvbjEpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGEgICcsIGRhdGEpXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVsnZW0nXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXRWaWRlb0luZm9CIGVycm9yICA9PT09PT09PT09PT4+ICEhISEhICBlbScsIGRhdGFbJ2VtJ10pXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5nb1NhZmVWaWRlbyhzZWxmLmRlc3VybCkudGhlbih2ID0+IHNpZ25hbC5maXJlKCkpLmNhdGNoKHYgPT4gc2lnbmFsLmNhbmNlbCgpKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNpZ25hbC5jYW5jZWwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBnVXJsID0gYGh0dHBzOi8vdnYudmlkZW8ucXEuY29tL2dldGtleT9mb3JtYXQ9MiZvdHlwZT1qc29uJnZ0PTE1MCZ2aWQ9JHthdmlkfSZyYW49MFxcJTJFOTQ3NzUyMTUxMTcyNjA4MVxcXFwmY2hhcmdlPTAmZmlsZW5hbWU9JHthdmlkfS5tcDQmcGxhdGZvcm09MTFgXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Wyd3eCddLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGdVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YUpzb24yID0gcmVzMS5kYXRhLnJlcGxhY2UoL1FaT3V0cHV0SnNvbj0vLCAnJykgKyBcInF3ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFKc29uMyA9IGRhdGFKc29uMi5yZXBsYWNlKC87cXdlLywgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGExID0gSlNPTi5wYXJzZShkYXRhSnNvbjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGExICAgJywgZGF0YTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGhldXJsID0gZGF0YVsndmwnXVsndmknXVswXVsndWwnXVsndWknXVswXVsndXJsJ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGAke2F2aWR9Lm1wNGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIFwiP3ZrZXk9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGRhdGExWydrZXknXVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGV1cmwgICAnLCB0aGV1cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmdvRnJlZVZpZGVvKHRoZXVybCkudGhlbih2ID0+IHNpZ25hbC5maXJlKCkpLmNhdGNoKHYgPT4gc2lnbmFsLmNhbmNlbCgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0a2V5IGVycm9yICA9PT09PT09PT09PT4+ICEhISEhJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZ29TYWZlVmlkZW8oc2VsZi5kZXN1cmwpLnRoZW4odiA9PiBzaWduYWwuZmlyZSgpKS5jYXRjaCh2ID0+IHNpZ25hbC5jYW5jZWwoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNpZ25hbC5jYW5jZWwoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldFZpZGVvSW5mb0IgZXJyb3IgID09PT09PT09PT09Pj4gISEhISEnKVxyXG4gICAgICAgICAgICAgICAgLy8gc2lnbmFsLmNhbmNlbCgpXHJcbiAgICAgICAgICAgICAgICBzZWxmLmdvU2FmZVZpZGVvKHNlbGYuZGVzdXJsKS50aGVuKHYgPT4gc2lnbmFsLmZpcmUoKSkuY2F0Y2godiA9PiBzaWduYWwuY2FuY2VsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBzaWduYWwud2FpdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vb3NzICDlnLDlnYBcclxuXHJcbiAgICAvKiogb3Nz5aSH5Lu9ICovXHJcbiAgICBnb1NhZmVWaWRlbyh1cmw6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dvVmlkZW8gID09PT4gICcsIHVybClcclxuICAgICAgICBpZiAoIXVybCkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIGxldCB3eCA9IHdpbmRvd1snd3gnXTtcclxuICAgICAgICBsZXQgc2lnbmFsID0gbmV3IFNpZ25hbCgpO1xyXG4gICAgICAgIGlmICh3eCkge1xyXG4gICAgICAgICAgICBsZXQgc3lzID0gdGhpcy5nZXRTeXN0ZW1JbmZvKCk7XHJcbiAgICAgICAgICAgIGxldCB2aWRlbyA9IHd4LmNyZWF0ZVZpZGVvKHtcclxuICAgICAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHN5cy53aW5kb3dXaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogc3lzLndpbmRvd0hlaWdodCxcclxuICAgICAgICAgICAgICAgIHNyYzogdXJsLFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnZmlsbCcsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NlbnRlclBsYXlCdG46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlUHJvZ3Jlc3NHZXN0dXJlOiBmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB2aWRlby5yZXF1ZXN0RnVsbFNjcmVlbigpXHJcblxyXG5cclxuICAgICAgICAgICAgdmlkZW8ub25FbmRlZChyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aSreaUvuWujOaIkCcpXHJcbiAgICAgICAgICAgICAgICB2aWRlby5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgIC8vIEdhbWUuSW5zdC5zaG93UmVzdWx0KClcclxuICAgICAgICAgICAgICAgIHNpZ25hbC5maXJlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB2aWRlby5vbkVycm9yKGVyck1zZyA9PiB7XHJcbiAgICAgICAgICAgICAgICB2aWRlby5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29TYWZlVmlkZW8odXJsKVxyXG4gICAgICAgICAgICAgICAgc2lnbmFsLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzaWduYWwud2FpdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDlhY3otLnop4bpopEgKi9cclxuICAgIGdvRnJlZVZpZGVvKHVybCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzXHJcbiAgICAgICAgbGV0IHd4ID0gd2luZG93Wyd3eCddXHJcbiAgICAgICAgaWYgKHd4KSB7XHJcbiAgICAgICAgICAgIGxldCBzeXMgPSB0aGlzLmdldFN5c3RlbUluZm8oKTtcclxuICAgICAgICAgICAgbGV0IHZpZGVvID0gd3guY3JlYXRlVmlkZW8oe1xyXG4gICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogc3lzLndpbmRvd1dpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBzeXMud2luZG93SGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgc3JjOiB1cmwsXHJcbiAgICAgICAgICAgICAgICAvLyBwb3N0ZXI6IHBvc3RlclVybCxcclxuICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvbnRhaW4nLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNob3dDZW50ZXJQbGF5QnRuOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVuYWJsZVByb2dyZXNzR2VzdHVyZTogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdmlkZW8ucmVxdWVzdEZ1bGxTY3JlZW4oKVxyXG4gICAgICAgICAgICBsZXQgc2lnbmFsID0gbmV3IFNpZ25hbCgpO1xyXG4gICAgICAgICAgICB2aWRlby5vbkVuZGVkKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5pKt5pS+5a6M5oiQJylcclxuICAgICAgICAgICAgICAgIHZpZGVvLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgc2lnbmFsLmZpcmUoKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHZpZGVvLm9uRXJyb3IoZXJyTXNnID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnb05ld1ZpZGVvICBlcnJvciAgPT09PT09PT09PT0+PiAhISEhIScpXHJcbiAgICAgICAgICAgICAgICB2aWRlby5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgIHNlbGYuZ29TYWZlVmlkZW8oc2VsZi5kZXN1cmwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIHNpZ25hbC53YWl0KCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbiAgICAvKiogLS0tLS3mkq3mlL7op4bpopEgIOe7k+adny0tLS0tKi9cclxuXHJcbiAgICBnZXRTeXN0ZW1JbmZvKCk6IFN5c3RlbUluZm8ge1xyXG4gICAgICAgIGlmICghdGhpcy5fc3lzdGVtSW5mbylcclxuICAgICAgICAgICAgdGhpcy5fc3lzdGVtSW5mbyA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N5c3RlbUluZm87XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgbGV0IHd4c2RrOiBXeFNkayA9IG5ldyBXeFNkaygpOyJdfQ==