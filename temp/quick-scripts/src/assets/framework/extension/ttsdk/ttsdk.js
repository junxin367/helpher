"use strict";
cc._RF.push(module, '74264peqDZIvqYpYdaXztFZ', 'ttsdk');
// framework/extension/ttsdk/ttsdk.ts

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
exports.ttsdk = void 0;
var event_1 = require("../../core/event");
var TTGameConfigs_1 = require("./TTGameConfigs");
var UserInfo_1 = require("../weak_net_game/UserInfo");
var DouyinStorage_1 = require("./DouyinStorage");
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
var TTSdk = /** @class */ (function () {
    function TTSdk() {
        this._userInfo = null;
        this._openId = "";
        if (window.tt) {
            if (this._version == null) {
                this._systemInfo = tt.getSystemInfoSync();
                var ver = this._systemInfo.SDKVersion.replace(/\./g, "");
                this._version = parseInt(ver);
            }
        }
    }
    Object.defineProperty(TTSdk.prototype, "Ver", {
        get: function () { return this._version; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TTSdk.prototype, "userInfo", {
        get: function () { return this._userInfo; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TTSdk.prototype, "parent", {
        get: function () {
            if (!window.tt)
                return "";
            var info = tt.getLaunchOptionsSync();
            if (info.scene == 1007 || info.scene == 1008) { //通过分享进入游戏
                var openId = info.query["user_id"];
                return openId;
            }
            return ""; //默认
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TTSdk.prototype, "openId", {
        get: function () {
            return this._openId;
        },
        set: function (v) {
            this._openId = v;
        },
        enumerable: false,
        configurable: true
    });
    TTSdk.prototype.requestDB = function (tbname, callback, target) {
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
    TTSdk.prototype.requestConfig = function (callback) {
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
    /**
     * 打开分享
     * @param share_cfg {ShareInfo}
     */
    TTSdk.prototype.openShare = function (share_cfg, params) {
        return __awaiter(this, void 0, void 0, function () {
            var info, querys, querystr;
            return __generator(this, function (_a) {
                if (!g.iswxgame())
                    return [2 /*return*/];
                info = {};
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
                    tt.aldShareAppMessage(info);
                }
                return [2 /*return*/];
            });
        });
    };
    TTSdk.prototype.createButton = function (callback, x, y, width, height) {
        console.log("-------------createButton");
        var button = tt.createUserInfoButton({
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
    TTSdk.prototype.getUserInfo = function (callback) {
        console.warn("-------------getUserInfo");
        tt.getUserInfo({
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
    TTSdk.prototype.oldAuthUser = function (callback) {
        tt.authorize({
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
    TTSdk.prototype.showShareMenu = function (cf) {
        var self = this;
        tt.showShareMenu({
            withShareTicket: true,
            success: function (res) {
                console.log(res);
            }, fail: function (res) {
                console.log(res);
            },
            complete: null
        });
        tt.aldOnShareAppMessage(function () {
            // let content =  {title:TTGameConfig.default_share_title,imageUrl:cc.url.raw(TTGameConfig.deafult_share_imgUrl)}
            return cf;
        });
    };
    TTSdk.prototype.start_recorder = function () {
        if (window.tt) {
            var recorder = tt.getGameRecorderManager();
            recorder.onStart(function (res) {
                console.log('开始录屏。。。');
                // do somethine;  
                UserInfo_1.UserInfo.start_time = Date.now() / 1000;
                UserInfo_1.UserInfo.record_time = 0;
            });
            recorder.start({
                duration: 20,
            });
            recorder.onPause(function () {
                UserInfo_1.UserInfo.record_time = Date.now() / 1000 - UserInfo_1.UserInfo.start_time;
                console.log('暂停录屏。。。');
            });
            recorder.onResume(function () {
                UserInfo_1.UserInfo.start_time = Date.now() / 1000;
                console.log('恢复录屏。。。');
            });
            recorder.onStop(function (res) {
                console.log(res.videoPath);
                UserInfo_1.UserInfo.record_path = res.videoPath;
                UserInfo_1.UserInfo.record_time = Date.now() / 1000 - UserInfo_1.UserInfo.start_time + UserInfo_1.UserInfo.record_time;
                console.log('结束录屏时长:' + UserInfo_1.UserInfo.record_time);
            });
            recorder.onError(function (res) {
                console.log("录屏报错=", res);
            });
        }
    };
    TTSdk.prototype.stop_recorder = function () {
        if (window.tt) {
            var recorder = tt.getGameRecorderManager();
            recorder.stop();
        }
    };
    TTSdk.prototype.checkSidebarOk = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        tt.checkScene({
                            scene: "sidebar",
                            success: function () {
                                resolve(true);
                            },
                            fail: function () {
                                resolve(false);
                            }
                        });
                    })];
            });
        });
    };
    TTSdk.prototype.douyin_sidebar_check = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isAvailable;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkSidebarOk()];
                    case 1:
                        isAvailable = _a.sent();
                        DouyinStorage_1.default.sidebarAvailable = isAvailable;
                        tt.onShow(function (op) {
                            if (op.scene == "021036" && op.launch_from == "homepage" && op.location == "sidebar_card") {
                                //侧边 栏启动
                                //show icon 
                                DouyinStorage_1.default.isFromSidebar = true;
                                DouyinStorage_1.default.sidebarAvailable = isAvailable;
                                // vm.show("Prefab/UI/BD_Guide_Sidebar", "sidebar")
                            }
                            else {
                                DouyinStorage_1.default.isFromSidebar = false;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    // public ShareRecord(){
    //     tt.shareAppMessage({    
    //         channel: "video",
    //         query: "",
    //         templateId: "1fidnqkeari9dnd18o", // 替换成通过审核的分享ID
    //         title: "一路打怪冒险不要太爽",
    //         desc: "在这里爱上冒险",
    //         extra: {
    //           videoPath: UserInfo.record_path, // 可用录屏得到的本地文件路径
    //           videoTopics: ["披萨小王子2"],
    //         },
    //         success() {
    //         },
    //         fail(e) {
    //           console.log("分享视频失败");
    //           Toast.make("成功分享才能获得奖励哦");
    //         },
    //       });
    // }
    TTSdk.prototype.wxLogin = function (callback) {
        var _this = this;
        tt.login({
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
    TTSdk.prototype.startAuth = function () {
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
    TTSdk.prototype.checkAuth = function () {
        var _this = this;
        if (exports.ttsdk.userInfo) {
            return Promise.resolve(exports.ttsdk.userInfo);
        }
        else {
            return new Promise(function (resolve, reject) {
                tt.getSetting({
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
    TTSdk.prototype.loginToServer = function (ret) {
        console.log("loginToServer", ret);
        if (ret && ret.userInfo) {
            this._userInfo = ret.userInfo;
        }
        event_1.evt.emit("wxUserInfo", this._userInfo, this._loginCode);
    };
    TTSdk.prototype.login = function (p) {
        var _this = this;
        if (!window.tt)
            return;
        var self = this;
        //tt.cloud.init({traceUser: true});
        // this._db = tt.cloud.database({env: "release-2c87c4"});//测试环境
        //this._db = tt.cloud.database();
        self.wxLogin(function (isLogin) {
            if (!isLogin)
                return;
            if (p) {
                _this.startAuth();
            }
        });
    };
    //发送消息到子域
    TTSdk.prototype.postMessage = function (cmd, data) {
        if (window.tt) {
            var req_1 = { cmd: cmd };
            if (data) {
                Object.keys(data).forEach(function (k) {
                    req_1[k] = data[k];
                });
            }
            tt.getOpenDataContext().postMessage(req_1);
        }
    };
    TTSdk.prototype.uploadScores = function (kvs) {
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
            tt.setUserCloudStorage(obj);
        });
    };
    TTSdk.prototype.uploadScore = function (k, v, callback) {
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
        tt.setUserCloudStorage(obj);
        // "wxgame": {
        //     "score": 16,
        //     "update_time": 1513080573
        // },
        // "cost_ms": 36500
    };
    TTSdk.prototype.loadBannerAd = function (callback) {
        var _this = this;
        if (Global.bannerAd) {
            Global.bannerAd.destroy();
        }
        if (!this._systemInfo)
            this._systemInfo = tt.getSystemInfoSync();
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
        var bannerAd = tt.createBannerAd({
            adUnitId: TTGameConfigs_1.TTGameConfig.banner_ad_id,
            style: {
                left: 0,
                top: 0,
                width: fixWidth
            }
        });
        Global.bannerAd = bannerAd;
        bannerAd.onResize(function (res) {
            // if (fixWidth != res.width){
            //     bannerAd.style.left = (w - res.width )/ 2 ;
            //     bannerAd.style.top = h - (res.width / 16 * 9)-10;
            // }
            bannerAd.style.left = w - res.width / 2;
            bannerAd.style.top = h - res.height - 10;
        });
        bannerAd.onLoad(function () {
            Global.bannerAdLoadCount = 0;
            if (callback)
                callback("load", bannerAd);
        });
        // bannerAd.onLoad(() => {
        //     Global.bannerAdLoadCount = 0;
        //     bannerAd.style.left = w - bannerAd.style.realWidth / 2;
        //     if (isIOS) {
        //         bannerAd.style.top = h - bannerAd.style.realHeight -13;
        //     } else {
        //         bannerAd.style.top = h - bannerAd.style.realHeight;
        //     }
        //     if (callback) callback("load", bannerAd)
        // })
        bannerAd.onError(function (err) {
            //加载失败
            console.log("ttsdk bannerAd onError code:" + err.errCode + " 当前次数" + Global.bannerAdLoadCount);
            // console.log("ttsdk bannerAd onError code:" + err.code + " msg:" + err.msg);
            Global.bannerAdLoadCount += 1;
            if (Global.bannerAdLoadCount < 4) {
                _this.loadBannerAd(callback);
            }
            Global.bannerAd = null;
            if (callback)
                callback("error");
        });
    };
    TTSdk.prototype.showBannerAd = function (errorCallback) {
        var _this = this;
        console.log("ttsdk 显示banner广告", Global.bannerAd);
        if (Global.bannerAd) {
            Global.bannerAd.show();
            Global.isBannerShow = true;
            event_1.evt.emit("ttsdk.BannerReady");
        }
        else {
            console.log("ttsdk 不存在banner资源....");
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
    TTSdk.prototype.isBannerShow = function () {
        return Global.isBannerShow;
    };
    TTSdk.prototype.hideBannerAd = function () {
        if (Global.bannerAd) {
            Global.bannerAd.hide();
            Global.isBannerShow = false;
            // Global.bannerAd = null;
        }
    };
    TTSdk.prototype.destroy = function () {
        if (Global.bannerAd) {
            Global.bannerAd.destroy();
            Global.isBannerShow = false;
            Global.bannerAd = null;
        }
    };
    //interstitial
    TTSdk.prototype.showInterstitial = function (errorCallback) {
        // 创建插屏广告实例，提前初始化
        var isToutiaio = tt.getSystemInfoSync().appName === "Toutiao";
        // 插屏广告仅今日头条安卓客户端支持
        if (isToutiaio) {
            if (Global.interstitialAd) {
                Global.interstitialAd.destroy();
                Global.interstitialAd = null;
            }
            Global.interstitialAd = tt.createInterstitialAd({
                adUnitId: TTGameConfigs_1.TTGameConfig.interstitial_ad_id
            });
            if (Global.interstitialAd) {
                Global.interstitialAd.load().then(function () {
                    Global.interstitialAd.show();
                }).catch(function (err) {
                    console.log(err);
                });
                return new Promise(function (v) {
                    Global.interstitialAd.onClose(function (res) {
                        v();
                    });
                });
            }
            return Promise.resolve();
        }
    };
    TTSdk.prototype.loadVideoAd = function (callback) {
        console.log("============ttsdk.loadVideoAD");
        // if (!Global.videoAd ) { //如果没有广告资源就加载新的视频广告
        var self = this;
        var videoAd = Global.videoAd;
        if (!videoAd) {
            videoAd = tt.createRewardedVideoAd({
                adUnitId: TTGameConfigs_1.TTGameConfig.video_ad_id
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
            if (Global.videoAdLoadCount < 4) {
                self.loadVideoAd(callback);
            }
            else {
                if (callback)
                    callback("error");
            }
        };
        Global.video_close_callback = function (ret) {
            //播放结束
            console.log("ttsdk onClose...");
            Global.videoAdLoadCount = 0;
            if (callback)
                callback("close", ret.isEnded);
            Global.videoAd = null;
        };
        Global.video_load_callback = function () {
            //加载成功
            console.log("ttsdk onLoad");
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
    return TTSdk;
}());
exports.ttsdk = new TTSdk();

cc._RF.pop();