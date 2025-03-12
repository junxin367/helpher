
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/ttsdk/ttsdk.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHR0c2RrXFx0dHNkay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBdUM7QUFDdkMsaURBQStDO0FBQy9DLHNEQUFxRDtBQUNyRCxpREFBNEM7QUFHNUM7SUFBQTtJQVdBLENBQUM7SUFWVSxjQUFPLEdBQUcsU0FBUyxDQUFBO0lBQ25CLGVBQVEsR0FBRyxTQUFTLENBQUE7SUFDcEIscUJBQWMsR0FBRyxTQUFTLENBQUE7SUFDMUIsbUJBQVksR0FBRyxLQUFLLENBQUM7SUFDckIsdUJBQWdCLEdBQUcsQ0FBQyxDQUFBLENBQUMsVUFBVTtJQUMvQix3QkFBaUIsR0FBRyxDQUFDLENBQUEsQ0FBQyxjQUFjO0lBSy9DLGFBQUM7Q0FYRCxBQVdDLElBQUE7QUFhRDtJQWdDSTtRQS9CQSxjQUFTLEdBQVEsSUFBSSxDQUFDO1FBRXRCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUE4QmpCLElBQUksTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUNYLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQzFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUE7Z0JBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2pDO1NBQ0o7SUFDTCxDQUFDO0lBL0JELHNCQUFXLHNCQUFHO2FBQWQsY0FBMkIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFbEQsc0JBQVcsMkJBQVE7YUFBbkIsY0FBd0IsT0FBTyxJQUFJLENBQUMsU0FBUyxD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SUFBQTtBQUVVLFFBQUEsS0FBSyxHQUFVLElBQUksS0FBSyxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldnQgfSBmcm9tIFwiLi4vLi4vY29yZS9ldmVudFwiO1xuaW1wb3J0IHsgVFRHYW1lQ29uZmlnIH0gZnJvbSBcIi4vVFRHYW1lQ29uZmlnc1wiO1xuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi4vd2Vha19uZXRfZ2FtZS9Vc2VySW5mb1wiO1xuaW1wb3J0IERvdXlpblN0b3JhZ2UgZnJvbSBcIi4vRG91eWluU3RvcmFnZVwiO1xuXG5cbmNsYXNzIEdsb2JhbCB7XG4gICAgc3RhdGljIHZpZGVvQWQgPSB1bmRlZmluZWRcbiAgICBzdGF0aWMgYmFubmVyQWQgPSB1bmRlZmluZWRcbiAgICBzdGF0aWMgaW50ZXJzdGl0aWFsQWQgPSB1bmRlZmluZWRcbiAgICBzdGF0aWMgaXNCYW5uZXJTaG93ID0gZmFsc2U7XG4gICAgc3RhdGljIHZpZGVvQWRMb2FkQ291bnQgPSAwIC8v6KeG6aKR5bm/5ZGK5Yqg6L295qyh5pWwXG4gICAgc3RhdGljIGJhbm5lckFkTG9hZENvdW50ID0gMCAvL2Jhbm5lcuW5v+WRiuWKoOi9veasoeaVsFxuICAgIHN0YXRpYyB2aWRlb19jbG9zZV9jYWxsYmFjazogKHJldDogYW55KSA9PiB2b2lkO1xuICAgIHN0YXRpYyB2aWRlb19lcnJvcl9jYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICBzdGF0aWMgdmlkZW9fbG9hZF9jYWxsYmFjazogKCkgPT4gdm9pZDtcblxufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hhcmVJbmZvIHtcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGltYWdlVXJsOiBzdHJpbmcsXG4gICAgcXVlcnk/OiBzdHJpbmcsXG4gICAgYWxkX2Rlc2M/OiBzdHJpbmdcblxuICAgIGlkPzogc3RyaW5nLFxuICAgIHF1ZXJ5T2JqZWN0czogT2JqZWN0XG59XG5cbmNsYXNzIFRUU2RrIHtcbiAgICBfdXNlckluZm86IGFueSA9IG51bGw7XG4gICAgX2xvZ2luQ29kZTogYW55O1xuICAgIF9vcGVuSWQ6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBfZGI6IGFueTtcbiAgICBfdmVyc2lvbjogbnVtYmVyO1xuICAgIF9zeXN0ZW1JbmZvOiBhbnk7XG5cbiAgICBwdWJsaWMgZ2V0IFZlcigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fdmVyc2lvbjsgfVxuXG4gICAgcHVibGljIGdldCB1c2VySW5mbygpIHsgcmV0dXJuIHRoaXMuX3VzZXJJbmZvIH1cblxuICAgIHB1YmxpYyBnZXQgcGFyZW50KCkge1xuICAgICAgICBpZiAoIXdpbmRvdy50dCkgcmV0dXJuIFwiXCJcbiAgICAgICAgbGV0IGluZm8gPSB0dC5nZXRMYXVuY2hPcHRpb25zU3luYygpO1xuICAgICAgICBpZiAoaW5mby5zY2VuZSA9PSAxMDA3IHx8IGluZm8uc2NlbmUgPT0gMTAwOCkgey8v6YCa6L+H5YiG5Lqr6L+b5YWl5ri45oiPXG4gICAgICAgICAgICBsZXQgb3BlbklkID0gaW5mby5xdWVyeVtcInVzZXJfaWRcIl07XG4gICAgICAgICAgICByZXR1cm4gb3BlbklkXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiXCI7IC8v6buY6K6kXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBvcGVuSWQodikge1xuICAgICAgICB0aGlzLl9vcGVuSWQgPSB2XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBvcGVuSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcGVuSWRcbiAgICB9XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAod2luZG93LnR0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fdmVyc2lvbiA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3lzdGVtSW5mbyA9IHR0LmdldFN5c3RlbUluZm9TeW5jKCk7XG4gICAgICAgICAgICAgICAgbGV0IHZlciA9IHRoaXMuX3N5c3RlbUluZm8uU0RLVmVyc2lvbi5yZXBsYWNlKC9cXC4vZywgXCJcIilcbiAgICAgICAgICAgICAgICB0aGlzLl92ZXJzaW9uID0gcGFyc2VJbnQodmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlcXVlc3REQih0Ym5hbWUsIGNhbGxiYWNrLCB0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5fZGIuY29sbGVjdGlvbih0Ym5hbWUpLmdldCh7XG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXQgXCIgKyB0Ym5hbWUgKyBcIiBzdWNjOlwiLCByZXMuZGF0YSlcbiAgICAgICAgICAgICAgICAvLyBzZWxmLl9zaGFyZUNvbmZpZyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2suY2FsbCh0YXJnZXQsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgIH0sIGZhaWw6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldCBcIiArIHRibmFtZSArIFwiIGZhaWw6XCIpXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjay5jYWxsKHRhcmdldClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICByZXF1ZXN0Q29uZmlnKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2RiLmNvbGxlY3Rpb24oXCJ0X2NvbmZcIikuZ2V0KHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldCBjb25maWdzIHN1Y2M6XCIsIHJlcy5kYXRhKVxuICAgICAgICAgICAgICAgIC8vIHNlbGYuX3NoYXJlQ29uZmlnID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhyZXMuZGF0YSk7XG4gICAgICAgICAgICB9LCBmYWlsOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXQgY29uZmlncyBmYWlsOlwiLCByZXMpXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOaJk+W8gOWIhuS6q1xuICAgICAqIEBwYXJhbSBzaGFyZV9jZmcge1NoYXJlSW5mb31cbiAgICAgKi9cbiAgICBhc3luYyBvcGVuU2hhcmUoc2hhcmVfY2ZnOiBTaGFyZUluZm8sIHBhcmFtcz8pIHtcbiAgICAgICAgaWYgKCFnLmlzd3hnYW1lKCkpIHJldHVybjtcbiAgICAgICAgbGV0IGluZm8gPSB7fSBhcyBTaGFyZUluZm9cbiAgICAgICAgaW5mby50aXRsZSA9IHNoYXJlX2NmZy50aXRsZTtcbiAgICAgICAgaW5mby5pbWFnZVVybCA9IHNoYXJlX2NmZy5pbWFnZVVybDtcbiAgICAgICAgbGV0IHF1ZXJ5czogYW55ID0gaW5mby5xdWVyeU9iamVjdHMgfHwge307XG4gICAgICAgIGlmIChpbmZvICE9IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBxdWVyeXN0ciA9IFwiXCJcbiAgICAgICAgICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fVxuICAgICAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGsxID0+IHtcbiAgICAgICAgICAgICAgICBxdWVyeXNbazFdID0gcGFyYW1zW2sxXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHF1ZXJ5c3RyID0gT2JqZWN0LmtleXMocXVlcnlzKS5yZWR1Y2UoKHN1bSwgaykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB2ID0gcXVlcnlzW2tdXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1bSArIGAke2t9PSR7dn0mYFxuICAgICAgICAgICAgfSwgcXVlcnlzdHIpXG4gICAgICAgICAgICBpbmZvLnF1ZXJ5ID0gcXVlcnlzdHIgKyBcInRpbWU9XCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICAgICAgaW5mby5hbGRfZGVzYyA9IHNoYXJlX2NmZy5hbGRfZGVzY1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJvcGVuIFNoYXJlXCIsIGluZm8pXG4gICAgICAgICAgICB0dC5hbGRTaGFyZUFwcE1lc3NhZ2UoaW5mbyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUJ1dHRvbihjYWxsYmFjaywgeD8sIHk/LCB3aWR0aD8sIGhlaWdodD8pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tY3JlYXRlQnV0dG9uXCIpO1xuICAgICAgICBsZXQgYnV0dG9uID0gdHQuY3JlYXRlVXNlckluZm9CdXR0b24oe1xuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICB0ZXh0OiBcIiAgICAgXCIsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIHg6IHggfHwgMCwgeTogeSB8fCAwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCB8fCBjYy53aW5TaXplLndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0IHx8IGNjLndpblNpemUuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDQwLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAwMCcsXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmZmZmJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYnV0dG9uLm9uVGFwKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5kZXN0cm95KCk7XG4gICAgICAgICAgICBpZiAocmVzICYmIHJlcykge1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2socmVzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgZ2V0VXNlckluZm8oY2FsbGJhY2spIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiLS0tLS0tLS0tLS0tLWdldFVzZXJJbmZvXCIpO1xuICAgICAgICB0dC5nZXRVc2VySW5mbyh7XG4gICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgICAgICBsYW5nOiBcInpoX0NOXCIsXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXRVc2VySW5mbyBzdWNjZXNzLlwiLCByZXMpO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2socmVzKTtcbiAgICAgICAgICAgIH0sIGZhaWw6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldFVzZXJJbmZvOlwiLCByZXMpO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGxldGU6IG51bGxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb2xkQXV0aFVzZXIoY2FsbGJhY2spIHtcbiAgICAgICAgdHQuYXV0aG9yaXplKHtcbiAgICAgICAgICAgIHNjb3BlOiBcInNjb3BlLnVzZXJJbmZvXCIsXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICAgICAgfSwgZmFpbDogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhmYWxzZSk7XG4gICAgICAgICAgICB9LCBjb21wbGV0ZTogbnVsbFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBzaG93U2hhcmVNZW51KGNmOiBTaGFyZUluZm8pIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0dC5zaG93U2hhcmVNZW51KHtcbiAgICAgICAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgfSwgZmFpbDogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICB9LCBjb21wbGV0ZTogbnVsbFxuICAgICAgICB9KTtcbiAgICAgICAgdHQuYWxkT25TaGFyZUFwcE1lc3NhZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gbGV0IGNvbnRlbnQgPSAge3RpdGxlOlRUR2FtZUNvbmZpZy5kZWZhdWx0X3NoYXJlX3RpdGxlLGltYWdlVXJsOmNjLnVybC5yYXcoVFRHYW1lQ29uZmlnLmRlYWZ1bHRfc2hhcmVfaW1nVXJsKX1cbiAgICAgICAgICAgIHJldHVybiBjZjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0X3JlY29yZGVyKCkge1xuICAgICAgICBpZiAod2luZG93LnR0KSB7XG4gICAgICAgICAgICBjb25zdCByZWNvcmRlciA9IHR0LmdldEdhbWVSZWNvcmRlck1hbmFnZXIoKTtcbiAgICAgICAgICAgIHJlY29yZGVyLm9uU3RhcnQocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5byA5aeL5b2V5bGP44CC44CC44CCJyk7XG4gICAgICAgICAgICAgICAgLy8gZG8gc29tZXRoaW5lOyAgXG4gICAgICAgICAgICAgICAgVXNlckluZm8uc3RhcnRfdGltZSA9IERhdGUubm93KCkgLyAxMDAwO1xuICAgICAgICAgICAgICAgIFVzZXJJbmZvLnJlY29yZF90aW1lID0gMO+8m1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgcmVjb3JkZXIuc3RhcnQoe1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMCxcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHJlY29yZGVyLm9uUGF1c2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIFVzZXJJbmZvLnJlY29yZF90aW1lID0gRGF0ZS5ub3coKSAvIDEwMDAgLSBVc2VySW5mby5zdGFydF90aW1lO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmmoLlgZzlvZXlsY/jgILjgILjgIInKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVjb3JkZXIub25SZXN1bWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIFVzZXJJbmZvLnN0YXJ0X3RpbWUgPSBEYXRlLm5vdygpIC8gMTAwMDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5oGi5aSN5b2V5bGP44CC44CC44CCJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmVjb3JkZXIub25TdG9wKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLnZpZGVvUGF0aCk7XG4gICAgICAgICAgICAgICAgVXNlckluZm8ucmVjb3JkX3BhdGggPSByZXMudmlkZW9QYXRoO1xuICAgICAgICAgICAgICAgIFVzZXJJbmZvLnJlY29yZF90aW1lID0gRGF0ZS5ub3coKSAvIDEwMDAgLSBVc2VySW5mby5zdGFydF90aW1lICsgVXNlckluZm8ucmVjb3JkX3RpbWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+e7k+adn+W9leWxj+aXtumVvzonICsgVXNlckluZm8ucmVjb3JkX3RpbWUpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmVjb3JkZXIub25FcnJvcihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5b2V5bGP5oql6ZSZPVwiLCByZXMpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIHB1YmxpYyBzdG9wX3JlY29yZGVyKCkge1xuICAgICAgICBpZiAod2luZG93LnR0KSB7XG4gICAgICAgICAgICBjb25zdCByZWNvcmRlciA9IHR0LmdldEdhbWVSZWNvcmRlck1hbmFnZXIoKTtcbiAgICAgICAgICAgIHJlY29yZGVyLnN0b3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGNoZWNrU2lkZWJhck9rKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHQuY2hlY2tTY2VuZSh7XG4gICAgICAgICAgICAgICAgc2NlbmU6IFwic2lkZWJhclwiLCBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgYXN5bmMgZG91eWluX3NpZGViYXJfY2hlY2soKSB7XG4gICAgICAgIGxldCBpc0F2YWlsYWJsZSA9IGF3YWl0IHRoaXMuY2hlY2tTaWRlYmFyT2soKVxuICAgICAgICBEb3V5aW5TdG9yYWdlLnNpZGViYXJBdmFpbGFibGUgPSBpc0F2YWlsYWJsZVxuICAgICAgICB0dC5vblNob3cob3AgPT4ge1xuICAgICAgICAgICAgaWYgKG9wLnNjZW5lID09IFwiMDIxMDM2XCIgJiYgb3AubGF1bmNoX2Zyb20gPT0gXCJob21lcGFnZVwiICYmIG9wLmxvY2F0aW9uID09IFwic2lkZWJhcl9jYXJkXCIpIHtcbiAgICAgICAgICAgICAgICAvL+S+p+i+uSDmoI/lkK/liqhcbiAgICAgICAgICAgICAgICAvL3Nob3cgaWNvbiBcbiAgICAgICAgICAgICAgICBEb3V5aW5TdG9yYWdlLmlzRnJvbVNpZGViYXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIERvdXlpblN0b3JhZ2Uuc2lkZWJhckF2YWlsYWJsZSA9IGlzQXZhaWxhYmxlO1xuICAgICAgICAgICAgICAgIC8vIHZtLnNob3coXCJQcmVmYWIvVUkvQkRfR3VpZGVfU2lkZWJhclwiLCBcInNpZGViYXJcIilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRG91eWluU3RvcmFnZS5pc0Zyb21TaWRlYmFyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLy8gcHVibGljIFNoYXJlUmVjb3JkKCl7XG4gICAgLy8gICAgIHR0LnNoYXJlQXBwTWVzc2FnZSh7ICAgIFxuICAgIC8vICAgICAgICAgY2hhbm5lbDogXCJ2aWRlb1wiLFxuICAgIC8vICAgICAgICAgcXVlcnk6IFwiXCIsXG4gICAgLy8gICAgICAgICB0ZW1wbGF0ZUlkOiBcIjFmaWRucWtlYXJpOWRuZDE4b1wiLCAvLyDmm7/mjaLmiJDpgJrov4flrqHmoLjnmoTliIbkuqtJRFxuICAgIC8vICAgICAgICAgdGl0bGU6IFwi5LiA6Lev5omT5oCq5YaS6Zmp5LiN6KaB5aSq54i9XCIsXG4gICAgLy8gICAgICAgICBkZXNjOiBcIuWcqOi/memHjOeIseS4iuWGkumZqVwiLFxuICAgIC8vICAgICAgICAgZXh0cmE6IHtcbiAgICAvLyAgICAgICAgICAgdmlkZW9QYXRoOiBVc2VySW5mby5yZWNvcmRfcGF0aCwgLy8g5Y+v55So5b2V5bGP5b6X5Yiw55qE5pys5Zyw5paH5Lu26Lev5b6EXG4gICAgLy8gICAgICAgICAgIHZpZGVvVG9waWNzOiBbXCLmiqvokKjlsI/njovlrZAyXCJdLFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIHN1Y2Nlc3MoKSB7XG5cbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICBmYWlsKGUpIHtcbiAgICAvLyAgICAgICAgICAgY29uc29sZS5sb2coXCLliIbkuqvop4bpopHlpLHotKVcIik7XG4gICAgLy8gICAgICAgICAgIFRvYXN0Lm1ha2UoXCLmiJDlip/liIbkuqvmiY3og73ojrflvpflpZblirHlk6ZcIik7XG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgIH0pO1xuICAgIC8vIH1cblxuXG4gICAgcHJpdmF0ZSB3eExvZ2luKGNhbGxiYWNrKSB7XG4gICAgICAgIHR0LmxvZ2luKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvZGUgXCIsIHJlcy5jb2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dpbkNvZGUgPSByZXMuY29kZTtcbiAgICAgICAgICAgICAgICBldnQuZW1pdChcInd4bG9naW5cIiwgcmVzLmNvZGUpO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICB9LCBmYWlsOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhmYWxzZSk7XG4gICAgICAgICAgICB9LCBjb21wbGV0ZTogbnVsbFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnRBdXRoKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoc2VsZi5fdmVyc2lvbiA+PSAyMjApIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNyZWF0ZUJ1dHRvbigocmV0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubG9naW5Ub1NlcnZlcihyZXQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmV0KVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl91c2VySW5mbylcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYub2xkQXV0aFVzZXIoKGlzQXV0aCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNBdXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmdldFVzZXJJbmZvKChyZXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxvZ2luVG9TZXJ2ZXIocmV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuX3VzZXJJbmZvKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrQXV0aCgpIHtcbiAgICAgICAgaWYgKHR0c2RrLnVzZXJJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHR0c2RrLnVzZXJJbmZvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdHQuZ2V0U2V0dGluZyh7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdXRoID0gcmVzLmF1dGhTZXR0aW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF1dGhbXCJzY29wZS51c2VySW5mb1wiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKHJldCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luVG9TZXJ2ZXIocmV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl91c2VySW5mbylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gdGhpcy5zdGFydEF1dGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBmYWlsOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogbnVsbCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBsb2dpblRvU2VydmVyKHJldCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luVG9TZXJ2ZXJcIiwgcmV0KVxuICAgICAgICBpZiAocmV0ICYmIHJldC51c2VySW5mbykge1xuICAgICAgICAgICAgdGhpcy5fdXNlckluZm8gPSByZXQudXNlckluZm9cbiAgICAgICAgfVxuICAgICAgICBldnQuZW1pdChcInd4VXNlckluZm9cIiwgdGhpcy5fdXNlckluZm8sIHRoaXMuX2xvZ2luQ29kZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ2luKHApIHtcbiAgICAgICAgaWYgKCF3aW5kb3cudHQpIHJldHVyblxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8vdHQuY2xvdWQuaW5pdCh7dHJhY2VVc2VyOiB0cnVlfSk7XG4gICAgICAgIC8vIHRoaXMuX2RiID0gdHQuY2xvdWQuZGF0YWJhc2Uoe2VudjogXCJyZWxlYXNlLTJjODdjNFwifSk7Ly/mtYvor5Xnjq/looNcbiAgICAgICAgLy90aGlzLl9kYiA9IHR0LmNsb3VkLmRhdGFiYXNlKCk7XG4gICAgICAgIHNlbGYud3hMb2dpbihpc0xvZ2luID0+IHtcbiAgICAgICAgICAgIGlmICghaXNMb2dpbikgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKHApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QXV0aCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8v5Y+R6YCB5raI5oGv5Yiw5a2Q5Z+fXG4gICAgcHVibGljIHBvc3RNZXNzYWdlKGNtZCwgZGF0YT8pIHtcbiAgICAgICAgaWYgKHdpbmRvdy50dCkge1xuICAgICAgICAgICAgbGV0IHJlcSA9IHsgY21kIH1cbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVxW2tdID0gZGF0YVtrXVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0dC5nZXRPcGVuRGF0YUNvbnRleHQoKS5wb3N0TWVzc2FnZShyZXEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHVwbG9hZFNjb3JlcyhrdnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgS1ZEYXRhTGlzdDoga3ZzLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiLS0tLS0tLXVwbG9hZFNjb3Jlc1wiLCBrdnMpO1xuICAgICAgICAgICAgdHQuc2V0VXNlckNsb3VkU3RvcmFnZShvYmopXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIHVwbG9hZFNjb3JlKGssIHYsIGNhbGxiYWNrPykge1xuICAgICAgICB2YXIga3ZEYXRhTGlzdCA9IG5ldyBBcnJheSgpO1xuICAgICAgICBrdkRhdGFMaXN0LnB1c2goe1xuICAgICAgICAgICAga2V5OiBrLFxuICAgICAgICAgICAgdmFsdWU6IHZcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgIEtWRGF0YUxpc3Q6IGt2RGF0YUxpc3QsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICB9XG4gICAgICAgIHR0LnNldFVzZXJDbG91ZFN0b3JhZ2Uob2JqKVxuICAgICAgICAvLyBcInd4Z2FtZVwiOiB7XG4gICAgICAgIC8vICAgICBcInNjb3JlXCI6IDE2LFxuICAgICAgICAvLyAgICAgXCJ1cGRhdGVfdGltZVwiOiAxNTEzMDgwNTczXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIFwiY29zdF9tc1wiOiAzNjUwMFxuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkQmFubmVyQWQoY2FsbGJhY2s/KSB7XG4gICAgICAgIGlmIChHbG9iYWwuYmFubmVyQWQpIHtcbiAgICAgICAgICAgIEdsb2JhbC5iYW5uZXJBZC5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX3N5c3RlbUluZm8pXG4gICAgICAgICAgICB0aGlzLl9zeXN0ZW1JbmZvID0gdHQuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcbiAgICAgICAgdmFyIHcgPSB0aGlzLl9zeXN0ZW1JbmZvLnNjcmVlbldpZHRoIC8gMjtcbiAgICAgICAgdmFyIGggPSB0aGlzLl9zeXN0ZW1JbmZvLnNjcmVlbkhlaWdodDtcblxuICAgICAgICBsZXQgaXNQb3IgPSB0aGlzLl9zeXN0ZW1JbmZvLnNjcmVlbldpZHRoIDw9IHRoaXMuX3N5c3RlbUluZm8uc2NyZWVuSGVpZ2h0O1xuICAgICAgICBsZXQgZml4V2lkdGggPSBpc1BvciA/IHRoaXMuX3N5c3RlbUluZm8uc2NyZWVuV2lkdGggOiAodGhpcy5fc3lzdGVtSW5mby5zY3JlZW5IZWlnaHQgLyAzKTtcbiAgICAgICAgbGV0IG1vZGVsU3RyID0gdGhpcy5fc3lzdGVtSW5mby5tb2RlbFxuICAgICAgICBsZXQgaXNJT1MgPSBmYWxzZTtcbiAgICAgICAgaWYgKG1vZGVsU3RyKSB7XG4gICAgICAgICAgICBpZiAobW9kZWxTdHIuaW5kZXhPZihcImlQaG9uZVwiKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIGlzSU9TID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgYmFubmVyQWQgPSB0dC5jcmVhdGVCYW5uZXJBZCh7XG4gICAgICAgICAgICBhZFVuaXRJZDogVFRHYW1lQ29uZmlnLmJhbm5lcl9hZF9pZCxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDAsLy9jYy52aXNpYmxlUmVjdC5oZWlnaHRcbiAgICAgICAgICAgICAgICB3aWR0aDogZml4V2lkdGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgR2xvYmFsLmJhbm5lckFkID0gYmFubmVyQWQ7XG4gICAgICAgIGJhbm5lckFkLm9uUmVzaXplKHJlcyA9PiB7XG4gICAgICAgICAgICAvLyBpZiAoZml4V2lkdGggIT0gcmVzLndpZHRoKXtcbiAgICAgICAgICAgIC8vICAgICBiYW5uZXJBZC5zdHlsZS5sZWZ0ID0gKHcgLSByZXMud2lkdGggKS8gMiA7XG4gICAgICAgICAgICAvLyAgICAgYmFubmVyQWQuc3R5bGUudG9wID0gaCAtIChyZXMud2lkdGggLyAxNiAqIDkpLTEwO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICBiYW5uZXJBZC5zdHlsZS5sZWZ0ID0gdyAtIHJlcy53aWR0aCAvIDI7XG4gICAgICAgICAgICBiYW5uZXJBZC5zdHlsZS50b3AgPSBoIC0gcmVzLmhlaWdodCAtIDEwO1xuICAgICAgICB9KTtcbiAgICAgICAgYmFubmVyQWQub25Mb2FkKCgpID0+IHtcbiAgICAgICAgICAgIEdsb2JhbC5iYW5uZXJBZExvYWRDb3VudCA9IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKFwibG9hZFwiLCBiYW5uZXJBZCk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgLy8gYmFubmVyQWQub25Mb2FkKCgpID0+IHtcbiAgICAgICAgLy8gICAgIEdsb2JhbC5iYW5uZXJBZExvYWRDb3VudCA9IDA7XG4gICAgICAgIC8vICAgICBiYW5uZXJBZC5zdHlsZS5sZWZ0ID0gdyAtIGJhbm5lckFkLnN0eWxlLnJlYWxXaWR0aCAvIDI7XG4gICAgICAgIC8vICAgICBpZiAoaXNJT1MpIHtcbiAgICAgICAgLy8gICAgICAgICBiYW5uZXJBZC5zdHlsZS50b3AgPSBoIC0gYmFubmVyQWQuc3R5bGUucmVhbEhlaWdodCAtMTM7XG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIGJhbm5lckFkLnN0eWxlLnRvcCA9IGggLSBiYW5uZXJBZC5zdHlsZS5yZWFsSGVpZ2h0O1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhcImxvYWRcIiwgYmFubmVyQWQpXG4gICAgICAgIC8vIH0pXG4gICAgICAgIGJhbm5lckFkLm9uRXJyb3IoKGVycikgPT4ge1xuICAgICAgICAgICAgLy/liqDovb3lpLHotKVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgIFwidHRzZGsgYmFubmVyQWQgb25FcnJvciBjb2RlOlwiICsgZXJyLmVyckNvZGUgKyBcIiDlvZPliY3mrKHmlbBcIiArIEdsb2JhbC5iYW5uZXJBZExvYWRDb3VudFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidHRzZGsgYmFubmVyQWQgb25FcnJvciBjb2RlOlwiICsgZXJyLmNvZGUgKyBcIiBtc2c6XCIgKyBlcnIubXNnKTtcbiAgICAgICAgICAgIEdsb2JhbC5iYW5uZXJBZExvYWRDb3VudCArPSAxO1xuICAgICAgICAgICAgaWYgKEdsb2JhbC5iYW5uZXJBZExvYWRDb3VudCA8IDQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRCYW5uZXJBZChjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHbG9iYWwuYmFubmVyQWQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhcImVycm9yXCIpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93QmFubmVyQWQoZXJyb3JDYWxsYmFjaz8pOiBhbnkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInR0c2RrIOaYvuekumJhbm5lcuW5v+WRilwiLCBHbG9iYWwuYmFubmVyQWQpXG4gICAgICAgIGlmIChHbG9iYWwuYmFubmVyQWQpIHtcbiAgICAgICAgICAgIEdsb2JhbC5iYW5uZXJBZC5zaG93KCk7XG4gICAgICAgICAgICBHbG9iYWwuaXNCYW5uZXJTaG93ID0gdHJ1ZVxuICAgICAgICAgICAgZXZ0LmVtaXQoXCJ0dHNkay5CYW5uZXJSZWFkeVwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0dHNkayDkuI3lrZjlnKhiYW5uZXLotYTmupAuLi4uXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2FkQmFubmVyQWQoKHYsIGFkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHYgPT0gXCJsb2FkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93QmFubmVyQWQoKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodiA9PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sgJiYgZXJyb3JDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNCYW5uZXJTaG93KCkge1xuICAgICAgICByZXR1cm4gR2xvYmFsLmlzQmFubmVyU2hvdztcbiAgICB9XG5cbiAgICBoaWRlQmFubmVyQWQoKSB7XG4gICAgICAgIGlmIChHbG9iYWwuYmFubmVyQWQpIHtcbiAgICAgICAgICAgIEdsb2JhbC5iYW5uZXJBZC5oaWRlKCk7XG4gICAgICAgICAgICBHbG9iYWwuaXNCYW5uZXJTaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBHbG9iYWwuYmFubmVyQWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKEdsb2JhbC5iYW5uZXJBZCkge1xuICAgICAgICAgICAgR2xvYmFsLmJhbm5lckFkLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIEdsb2JhbC5pc0Jhbm5lclNob3cgPSBmYWxzZTtcbiAgICAgICAgICAgIEdsb2JhbC5iYW5uZXJBZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL2ludGVyc3RpdGlhbFxuICAgIHNob3dJbnRlcnN0aXRpYWwoZXJyb3JDYWxsYmFjaykge1xuICAgICAgICAvLyDliJvlu7rmj5LlsY/lub/lkYrlrp7kvovvvIzmj5DliY3liJ3lp4vljJZcbiAgICAgICAgY29uc3QgaXNUb3V0aWFpbyA9IHR0LmdldFN5c3RlbUluZm9TeW5jKCkuYXBwTmFtZSA9PT0gXCJUb3V0aWFvXCI7XG4gICAgICAgIC8vIOaPkuWxj+W5v+WRiuS7heS7iuaXpeWktOadoeWuieWNk+WuouaIt+err+aUr+aMgVxuICAgICAgICBpZiAoaXNUb3V0aWFpbykge1xuICAgICAgICAgICAgaWYgKEdsb2JhbC5pbnRlcnN0aXRpYWxBZCkge1xuICAgICAgICAgICAgICAgIEdsb2JhbC5pbnRlcnN0aXRpYWxBZC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgR2xvYmFsLmludGVyc3RpdGlhbEFkID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdsb2JhbC5pbnRlcnN0aXRpYWxBZCA9IHR0LmNyZWF0ZUludGVyc3RpdGlhbEFkKHtcbiAgICAgICAgICAgICAgICBhZFVuaXRJZDogVFRHYW1lQ29uZmlnLmludGVyc3RpdGlhbF9hZF9pZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoR2xvYmFsLmludGVyc3RpdGlhbEFkKSB7XG4gICAgICAgICAgICAgICAgR2xvYmFsLmludGVyc3RpdGlhbEFkLmxvYWQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsLmludGVyc3RpdGlhbEFkLnNob3coKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSh2ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsLmludGVyc3RpdGlhbEFkLm9uQ2xvc2UoKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdigpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkVmlkZW9BZChjYWxsYmFjaykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PXR0c2RrLmxvYWRWaWRlb0FEXCIpO1xuICAgICAgICAvLyBpZiAoIUdsb2JhbC52aWRlb0FkICkgeyAvL+WmguaenOayoeacieW5v+WRiui1hOa6kOWwseWKoOi9veaWsOeahOinhumikeW5v+WRilxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCB2aWRlb0FkID0gR2xvYmFsLnZpZGVvQWQ7XG4gICAgICAgIGlmICghdmlkZW9BZCkge1xuICAgICAgICAgICAgdmlkZW9BZCA9IHR0LmNyZWF0ZVJld2FyZGVkVmlkZW9BZCh7XG4gICAgICAgICAgICAgICAgYWRVbml0SWQ6IFRUR2FtZUNvbmZpZy52aWRlb19hZF9pZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZGVvQWQub2ZmQ2xvc2UoR2xvYmFsLnZpZGVvX2Nsb3NlX2NhbGxiYWNrKTtcbiAgICAgICAgICAgIHZpZGVvQWQub2ZmRXJyb3IoR2xvYmFsLnZpZGVvX2Vycm9yX2NhbGxiYWNrKTtcbiAgICAgICAgICAgIHZpZGVvQWQub2ZmTG9hZChHbG9iYWwudmlkZW9fbG9hZF9jYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgR2xvYmFsLnZpZGVvX2Vycm9yX2NhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy/liqDovb3lpLHotKVcbiAgICAgICAgICAgIEdsb2JhbC52aWRlb0FkTG9hZENvdW50ICs9IDE7XG4gICAgICAgICAgICAvL+WwneivlTTmrKFcbiAgICAgICAgICAgIGlmIChHbG9iYWwudmlkZW9BZExvYWRDb3VudCA8IDQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmxvYWRWaWRlb0FkKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhcImVycm9yXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBHbG9iYWwudmlkZW9fY2xvc2VfY2FsbGJhY2sgPSBmdW5jdGlvbiAocmV0KSB7XG4gICAgICAgICAgICAvL+aSreaUvue7k+adn1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0dHNkayBvbkNsb3NlLi4uXCIpO1xuICAgICAgICAgICAgR2xvYmFsLnZpZGVvQWRMb2FkQ291bnQgPSAwXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKFwiY2xvc2VcIiwgcmV0LmlzRW5kZWQpXG4gICAgICAgICAgICBHbG9iYWwudmlkZW9BZCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBHbG9iYWwudmlkZW9fbG9hZF9jYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8v5Yqg6L295oiQ5YqfXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInR0c2RrIG9uTG9hZFwiKTtcbiAgICAgICAgICAgIEdsb2JhbC52aWRlb0FkID0gdmlkZW9BZDtcbiAgICAgICAgICAgIEdsb2JhbC52aWRlb0FkTG9hZENvdW50ID0gMDtcbiAgICAgICAgICAgIC8vIHRoaXMuc2hvd0Jhbm5lckFkKCk7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKFwibG9hZFwiLCB2aWRlb0FkKVxuICAgICAgICB9XG4gICAgICAgIC8vIOeUqOaIt+inpuWPkeW5v+WRiuWQju+8jOaYvuekuua/gOWKseinhumikeW5v+WRilxuICAgICAgICB2aWRlb0FkLnNob3coKS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLmhpZGVCYW5uZXJBZCgpO1xuICAgICAgICAgICAgdmlkZW9BZC5sb2FkKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdmlkZW9BZC5zaG93KCk7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhcInNob3dcIilcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgR2xvYmFsLnZpZGVvQWRMb2FkQ291bnQgKz0gMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICB2aWRlb0FkLm9uRXJyb3IoR2xvYmFsLnZpZGVvX2Vycm9yX2NhbGxiYWNrKTtcbiAgICAgICAgdmlkZW9BZC5vbkNsb3NlKEdsb2JhbC52aWRlb19jbG9zZV9jYWxsYmFjayk7XG4gICAgICAgIHZpZGVvQWQub25Mb2FkKEdsb2JhbC52aWRlb19sb2FkX2NhbGxiYWNrKTtcbiAgICAgICAgR2xvYmFsLnZpZGVvQWQgPSB2aWRlb0FkXG4gICAgfVxuXG4gICAgLy/lvZXlsY/lip/og71cblxufVxuXG5leHBvcnQgbGV0IHR0c2RrOiBUVFNkayA9IG5ldyBUVFNkaygpOyJdfQ==