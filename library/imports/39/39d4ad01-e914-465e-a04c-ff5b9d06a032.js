"use strict";
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