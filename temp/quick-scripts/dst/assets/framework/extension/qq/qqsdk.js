
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/qq/qqsdk.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '142e16VnE1LvasACrUA3ZmV', 'qqsdk');
// framework/extension/qq/qqsdk.ts

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
exports.qqsdk = void 0;
var event_1 = require("../../core/event");
var QQGameConfigs_1 = require("./QQGameConfigs");
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
var QQSdk = /** @class */ (function () {
    function QQSdk() {
        this._userInfo = null;
        this._openId = "";
        if (CC_WECHATGAME) {
            if (this._version == null) {
                if (window.qq) {
                    this._systemInfo = qq.getSystemInfoSync();
                    var ver = this._systemInfo.SDKVersion.replace(/\./g, "");
                    this._version = parseInt(ver);
                }
            }
        }
    }
    Object.defineProperty(QQSdk.prototype, "Ver", {
        get: function () { return this._version; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QQSdk.prototype, "userInfo", {
        get: function () { return this._userInfo; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QQSdk.prototype, "parent", {
        get: function () {
            if (!CC_WECHATGAME)
                return "";
            var info = qq.getLaunchOptionsSync();
            if (info.scene == 1007 || info.scene == 1008) { //通过分享进入游戏
                var openId = info.query["user_id"];
                return openId;
            }
            return ""; //默认
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QQSdk.prototype, "openId", {
        get: function () {
            return this._openId;
        },
        set: function (v) {
            this._openId = v;
        },
        enumerable: false,
        configurable: true
    });
    QQSdk.prototype.requestDB = function (tbname, callback, target) {
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
    QQSdk.prototype.requestConfig = function (callback) {
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
    QQSdk.prototype.openShare = function (share_cfg, params) {
        return __awaiter(this, void 0, void 0, function () {
            var info, querys, querystr;
            return __generator(this, function (_a) {
                info = {};
                info.title = share_cfg.title;
                info.imageUrl = share_cfg.imageUrl;
                querys = info.queryObjects || {};
                console.log("qqsdk", info);
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
                    qq.aldShareAppMessage(info);
                }
                return [2 /*return*/];
            });
        });
    };
    QQSdk.prototype.createButton = function (callback, x, y, width, height) {
        console.log("-------------createButton");
        var button = qq.createUserInfoButton({
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
    QQSdk.prototype.getUserInfo = function (callback) {
        console.warn("-------------getUserInfo");
        qq.getUserInfo({
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
    QQSdk.prototype.oldAuthUser = function (callback) {
        qq.authorize({
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
    QQSdk.prototype.showShareMenu = function (cf) {
        var self = this;
        qq.showShareMenu({
            withShareTicket: true,
            success: function (res) {
                console.log(res);
            }, fail: function (res) {
                console.log(res);
            },
            complete: null
        });
        qq.aldOnShareAppMessage(function () {
            // let content =  {title:QQGameConfig.default_share_title,imageUrl:cc.url.raw(QQGameConfig.deafult_share_imgUrl)}
            return cf;
        });
    };
    QQSdk.prototype.wxLogin = function (callback) {
        var _this = this;
        qq.login({
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
    QQSdk.prototype.startAuth = function () {
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
    QQSdk.prototype.checkAuth = function () {
        var _this = this;
        if (exports.qqsdk.userInfo) {
            return Promise.resolve(exports.qqsdk.userInfo);
        }
        else {
            return new Promise(function (resolve, reject) {
                qq.getSetting({
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
    QQSdk.prototype.loginToServer = function (ret) {
        console.log("loginToServer", ret);
        if (ret && ret.userInfo) {
            this._userInfo = ret.userInfo;
        }
        event_1.evt.emit("wxUserInfo", this._userInfo, this._loginCode);
    };
    QQSdk.prototype.login = function (p) {
        var _this = this;
        if (!CC_WECHATGAME)
            return;
        var self = this;
        //qq.cloud.init({traceUser: true});
        // this._db = qq.cloud.database({env: "release-2c87c4"});//测试环境
        //this._db = qq.cloud.database();
        self.wxLogin(function (isLogin) {
            if (!isLogin)
                return;
            if (p) {
                _this.startAuth();
            }
        });
    };
    //发送消息到子域
    QQSdk.prototype.postMessage = function (cmd, data) {
        if (CC_WECHATGAME) {
            var req_1 = { cmd: cmd };
            if (data) {
                Object.keys(data).forEach(function (k) {
                    req_1[k] = data[k];
                });
            }
            qq.getOpenDataContext().postMessage(req_1);
        }
    };
    QQSdk.prototype.uploadScores = function (kvs) {
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
            qq.setUserCloudStorage(obj);
        });
    };
    QQSdk.prototype.uploadScore = function (k, v, callback) {
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
        qq.setUserCloudStorage(obj);
        // "wxgame": {
        //     "score": 16,
        //     "update_time": 1513080573
        // },
        // "cost_ms": 36500
    };
    QQSdk.prototype.loadBannerAd = function (callback) {
        var _this = this;
        if (Global.bannerAd) {
            Global.bannerAd.destroy();
        }
        if (!this._systemInfo)
            this._systemInfo = qq.getSystemInfoSync();
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
        var bannerAd = qq.createBannerAd({
            adUnitId: QQGameConfigs_1.QQGameConfig.banner_ad_id,
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
    QQSdk.prototype.showBannerAd = function (errorCallback) {
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
    QQSdk.prototype.isBannerShow = function () {
        return Global.isBannerShow;
    };
    QQSdk.prototype.hideBannerAd = function () {
        if (Global.bannerAd) {
            Global.bannerAd.hide();
            Global.isBannerShow = false;
            // Global.bannerAd = null;
        }
    };
    //interstitial
    QQSdk.prototype.showInterstitial = function (errorCallback) {
        // 创建插屏广告实例，提前初始化
        if (qq.createInterstitialAd) {
            Global.interstitialAd = qq.createInterstitialAd({
                adUnitId: QQGameConfigs_1.QQGameConfig.interstitial_ad_id
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
        return Promise.resolve();
    };
    QQSdk.prototype.loadVideoAd = function (callback) {
        console.log("============wxsdk.loadVideoAD");
        // if (!Global.videoAd ) { //如果没有广告资源就加载新的视频广告
        var self = this;
        var videoAd = Global.videoAd;
        if (!videoAd) {
            videoAd = qq.createRewardedVideoAd({
                adUnitId: QQGameConfigs_1.QQGameConfig.video_ad_id
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
    QQSdk.prototype.showAppBox = function () {
        if (window.qq) {
            var appbox_1 = qq.createAppBox({
                adUnitId: QQGameConfigs_1.QQGameConfig.box_ad_id
            });
            appbox_1.load().then(function () {
                appbox_1.show();
            });
        }
    };
    return QQSdk;
}());
exports.qqsdk = new QQSdk();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHFxXFxxcXNkay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBdUM7QUFDdkMsaURBQStDO0FBRy9DO0lBQUE7SUFVQSxDQUFDO0lBVFUsY0FBTyxHQUFHLFNBQVMsQ0FBQTtJQUNuQixlQUFRLEdBQUcsU0FBUyxDQUFBO0lBQ3BCLHFCQUFjLEdBQUcsU0FBUyxDQUFBO0lBQzFCLG1CQUFZLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLHVCQUFnQixHQUFHLENBQUMsQ0FBQSxDQUFDLFVBQVU7SUFDL0Isd0JBQWlCLEdBQUcsQ0FBQyxDQUFBLENBQUMsY0FBYztJQUkvQyxhQUFDO0NBVkQsQUFVQyxJQUFBO0FBYUQ7SUFnQ0k7UUEvQkEsY0FBUyxHQUFRLElBQUksQ0FBQztRQUV0QixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBOEJqQixJQUFJLGFBQWEsRUFBRTtZQUNmLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLElBQUksTUFBTSxDQUFDLEVBQUUsRUFBRTtvQkFDWCxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO29CQUMxQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFBO29CQUN4RCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDakM7YUFFSjtTQUNKO0lBQ0wsQ0FBQztJQWxDRCxzQkFBVyxzQkFBRzthQUFkLGNBQTJCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRWxELHNCQUFXLDJCQUFRO2FBQW5CLGNBQXdCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FB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QUFVLEdBQVY7UUFDSSxJQUFJLE1BQU0sQ0FBQyxFQUFFLEVBQUU7WUFDWCxJQUFJLFFBQU0sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN6QixRQUFRLEVBQUUsNEJBQVksQ0FBQyxTQUFTO2FBQ25DLENBQUMsQ0FBQTtZQUNGLFFBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ2YsUUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFBO1NBQ0w7SUFFTCxDQUFDO0lBRUwsWUFBQztBQUFELENBemVBLEFBeWVDLElBQUE7QUFFVSxRQUFBLEtBQUssR0FBVSxJQUFJLEtBQUssRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXZ0IH0gZnJvbSBcIi4uLy4uL2NvcmUvZXZlbnRcIjtcbmltcG9ydCB7IFFRR2FtZUNvbmZpZyB9IGZyb20gXCIuL1FRR2FtZUNvbmZpZ3NcIjtcblxuXG5jbGFzcyBHbG9iYWwge1xuICAgIHN0YXRpYyB2aWRlb0FkID0gdW5kZWZpbmVkXG4gICAgc3RhdGljIGJhbm5lckFkID0gdW5kZWZpbmVkXG4gICAgc3RhdGljIGludGVyc3RpdGlhbEFkID0gdW5kZWZpbmVkXG4gICAgc3RhdGljIGlzQmFubmVyU2hvdyA9IGZhbHNlO1xuICAgIHN0YXRpYyB2aWRlb0FkTG9hZENvdW50ID0gMCAvL+inhumikeW5v+WRiuWKoOi9veasoeaVsFxuICAgIHN0YXRpYyBiYW5uZXJBZExvYWRDb3VudCA9IDAgLy9iYW5uZXLlub/lkYrliqDovb3mrKHmlbBcbiAgICBzdGF0aWMgdmlkZW9fY2xvc2VfY2FsbGJhY2s6IChyZXQ6IGFueSkgPT4gdm9pZDtcbiAgICBzdGF0aWMgdmlkZW9fZXJyb3JfY2FsbGJhY2s6ICgpID0+IHZvaWQ7XG4gICAgc3RhdGljIHZpZGVvX2xvYWRfY2FsbGJhY2s6ICgpID0+IHZvaWQ7XG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBTaGFyZUluZm8ge1xuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgaW1hZ2VVcmw6IHN0cmluZyxcbiAgICBxdWVyeT86IHN0cmluZyxcbiAgICBhbGRfZGVzYz86IHN0cmluZ1xuXG4gICAgaWQ/OiBzdHJpbmcsXG4gICAgcXVlcnlPYmplY3RzOiBPYmplY3Rcbn1cblxuY2xhc3MgUVFTZGsge1xuICAgIF91c2VySW5mbzogYW55ID0gbnVsbDtcbiAgICBfbG9naW5Db2RlOiBhbnk7XG4gICAgX29wZW5JZDogc3RyaW5nID0gXCJcIjtcblxuICAgIF9kYjogYW55O1xuICAgIF92ZXJzaW9uOiBudW1iZXI7XG4gICAgX3N5c3RlbUluZm86IGFueTtcblxuICAgIHB1YmxpYyBnZXQgVmVyKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl92ZXJzaW9uOyB9XG5cbiAgICBwdWJsaWMgZ2V0IHVzZXJJbmZvKCkgeyByZXR1cm4gdGhpcy5fdXNlckluZm8gfVxuXG4gICAgcHVibGljIGdldCBwYXJlbnQoKSB7XG4gICAgICAgIGlmICghQ0NfV0VDSEFUR0FNRSkgcmV0dXJuIFwiXCJcbiAgICAgICAgbGV0IGluZm8gPSBxcS5nZXRMYXVuY2hPcHRpb25zU3luYygpO1xuICAgICAgICBpZiAoaW5mby5zY2VuZSA9PSAxMDA3IHx8IGluZm8uc2NlbmUgPT0gMTAwOCkgey8v6YCa6L+H5YiG5Lqr6L+b5YWl5ri45oiPXG4gICAgICAgICAgICBsZXQgb3BlbklkID0gaW5mby5xdWVyeVtcInVzZXJfaWRcIl07XG4gICAgICAgICAgICByZXR1cm4gb3BlbklkXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiXCI7IC8v6buY6K6kXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBvcGVuSWQodikge1xuICAgICAgICB0aGlzLl9vcGVuSWQgPSB2XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBvcGVuSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcGVuSWRcbiAgICB9XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoQ0NfV0VDSEFUR0FNRSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3ZlcnNpb24gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cucXEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3lzdGVtSW5mbyA9IHFxLmdldFN5c3RlbUluZm9TeW5jKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2ZXIgPSB0aGlzLl9zeXN0ZW1JbmZvLlNES1ZlcnNpb24ucmVwbGFjZSgvXFwuL2csIFwiXCIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZlcnNpb24gPSBwYXJzZUludCh2ZXIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVxdWVzdERCKHRibmFtZSwgY2FsbGJhY2ssIHRhcmdldCkge1xuICAgICAgICB0aGlzLl9kYi5jb2xsZWN0aW9uKHRibmFtZSkuZ2V0KHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldCBcIiArIHRibmFtZSArIFwiIHN1Y2M6XCIsIHJlcy5kYXRhKVxuICAgICAgICAgICAgICAgIC8vIHNlbGYuX3NoYXJlQ29uZmlnID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjay5jYWxsKHRhcmdldCwgcmVzLmRhdGEpO1xuICAgICAgICAgICAgfSwgZmFpbDogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0IFwiICsgdGJuYW1lICsgXCIgZmFpbDpcIilcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrLmNhbGwodGFyZ2V0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHJlcXVlc3RDb25maWcoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZGIuY29sbGVjdGlvbihcInRfY29uZlwiKS5nZXQoe1xuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0IGNvbmZpZ3Mgc3VjYzpcIiwgcmVzLmRhdGEpXG4gICAgICAgICAgICAgICAgLy8gc2VsZi5fc2hhcmVDb25maWcgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHJlcy5kYXRhKTtcbiAgICAgICAgICAgIH0sIGZhaWw6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldCBjb25maWdzIGZhaWw6XCIsIHJlcylcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog5omT5byA5YiG5LqrXG4gICAgICogQHBhcmFtIHNoYXJlX2NmZyB7U2hhcmVJbmZvfVxuICAgICAqL1xuICAgIGFzeW5jIG9wZW5TaGFyZShzaGFyZV9jZmc6IFNoYXJlSW5mbywgcGFyYW1zPykge1xuICAgICAgICBsZXQgaW5mbyA9IHt9IGFzIFNoYXJlSW5mb1xuICAgICAgICBpbmZvLnRpdGxlID0gc2hhcmVfY2ZnLnRpdGxlO1xuICAgICAgICBpbmZvLmltYWdlVXJsID0gc2hhcmVfY2ZnLmltYWdlVXJsO1xuICAgICAgICBsZXQgcXVlcnlzOiBhbnkgPSBpbmZvLnF1ZXJ5T2JqZWN0cyB8fCB7fTtcbiAgICAgICAgY29uc29sZS5sb2coXCJxcXNka1wiLCBpbmZvKVxuICAgICAgICBpZiAoaW5mbyAhPSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgcXVlcnlzdHIgPSBcIlwiXG4gICAgICAgICAgICBwYXJhbXMgPSBwYXJhbXMgfHwge31cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrMSA9PiB7XG4gICAgICAgICAgICAgICAgcXVlcnlzW2sxXSA9IHBhcmFtc1trMV1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBxdWVyeXN0ciA9IE9iamVjdC5rZXlzKHF1ZXJ5cykucmVkdWNlKChzdW0sIGspID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdiA9IHF1ZXJ5c1trXVxuICAgICAgICAgICAgICAgIHJldHVybiBzdW0gKyBgJHtrfT0ke3Z9JmBcbiAgICAgICAgICAgIH0sIHF1ZXJ5c3RyKVxuICAgICAgICAgICAgaW5mby5xdWVyeSA9IHF1ZXJ5c3RyICsgXCJ0aW1lPVwiICsgbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgICAgIGluZm8uYWxkX2Rlc2MgPSBzaGFyZV9jZmcuYWxkX2Rlc2NcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3BlbiBTaGFyZVwiLCBpbmZvKVxuICAgICAgICAgICAgcXEuYWxkU2hhcmVBcHBNZXNzYWdlKGluZm8pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVCdXR0b24oY2FsbGJhY2ssIHg/LCB5Pywgd2lkdGg/LCBoZWlnaHQ/KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLWNyZWF0ZUJ1dHRvblwiKTtcbiAgICAgICAgbGV0IGJ1dHRvbiA9IHFxLmNyZWF0ZVVzZXJJbmZvQnV0dG9uKHtcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgdGV4dDogXCIgICAgIFwiLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICB4OiB4IHx8IDAsIHk6IHkgfHwgMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGggfHwgY2Mud2luU2l6ZS53aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCB8fCBjYy53aW5TaXplLmhlaWdodCxcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiA0MCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwMDAnLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZmZmZidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJ1dHRvbi5vblRhcChmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICBidXR0b24uZGVzdHJveSgpO1xuICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHJlcyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGdldFVzZXJJbmZvKGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIi0tLS0tLS0tLS0tLS1nZXRVc2VySW5mb1wiKTtcbiAgICAgICAgcXEuZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICAgICAgbGFuZzogXCJ6aF9DTlwiLFxuICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0VXNlckluZm8gc3VjY2Vzcy5cIiwgcmVzKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHJlcyk7XG4gICAgICAgICAgICB9LCBmYWlsOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXRVc2VySW5mbzpcIiwgcmVzKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBudWxsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9sZEF1dGhVc2VyKGNhbGxiYWNrKSB7XG4gICAgICAgIHFxLmF1dGhvcml6ZSh7XG4gICAgICAgICAgICBzY29wZTogXCJzY29wZS51c2VySW5mb1wiLFxuICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICAgIH0sIGZhaWw6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZmFsc2UpO1xuICAgICAgICAgICAgfSwgY29tcGxldGU6IG51bGxcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgc2hvd1NoYXJlTWVudShjZjogU2hhcmVJbmZvKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgcXEuc2hvd1NoYXJlTWVudSh7XG4gICAgICAgICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWUsXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgIH0sIGZhaWw6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgfSwgY29tcGxldGU6IG51bGxcbiAgICAgICAgfSk7XG4gICAgICAgIHFxLmFsZE9uU2hhcmVBcHBNZXNzYWdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIGxldCBjb250ZW50ID0gIHt0aXRsZTpRUUdhbWVDb25maWcuZGVmYXVsdF9zaGFyZV90aXRsZSxpbWFnZVVybDpjYy51cmwucmF3KFFRR2FtZUNvbmZpZy5kZWFmdWx0X3NoYXJlX2ltZ1VybCl9XG4gICAgICAgICAgICByZXR1cm4gY2Y7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSB3eExvZ2luKGNhbGxiYWNrKSB7XG4gICAgICAgIHFxLmxvZ2luKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvZGUgXCIsIHJlcy5jb2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dpbkNvZGUgPSByZXMuY29kZTtcbiAgICAgICAgICAgICAgICBldnQuZW1pdChcInd4bG9naW5cIiwgcmVzLmNvZGUpO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICB9LCBmYWlsOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhmYWxzZSk7XG4gICAgICAgICAgICB9LCBjb21wbGV0ZTogbnVsbFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnRBdXRoKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoc2VsZi5fdmVyc2lvbiA+PSAyMjApIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNyZWF0ZUJ1dHRvbigocmV0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubG9naW5Ub1NlcnZlcihyZXQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmV0KVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl91c2VySW5mbylcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYub2xkQXV0aFVzZXIoKGlzQXV0aCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNBdXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmdldFVzZXJJbmZvKChyZXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxvZ2luVG9TZXJ2ZXIocmV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuX3VzZXJJbmZvKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrQXV0aCgpIHtcbiAgICAgICAgaWYgKHFxc2RrLnVzZXJJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHFxc2RrLnVzZXJJbmZvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgcXEuZ2V0U2V0dGluZyh7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdXRoID0gcmVzLmF1dGhTZXR0aW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF1dGhbXCJzY29wZS51c2VySW5mb1wiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKHJldCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luVG9TZXJ2ZXIocmV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl91c2VySW5mbylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gdGhpcy5zdGFydEF1dGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBmYWlsOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogbnVsbCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBsb2dpblRvU2VydmVyKHJldCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luVG9TZXJ2ZXJcIiwgcmV0KVxuICAgICAgICBpZiAocmV0ICYmIHJldC51c2VySW5mbykge1xuICAgICAgICAgICAgdGhpcy5fdXNlckluZm8gPSByZXQudXNlckluZm9cbiAgICAgICAgfVxuICAgICAgICBldnQuZW1pdChcInd4VXNlckluZm9cIiwgdGhpcy5fdXNlckluZm8sIHRoaXMuX2xvZ2luQ29kZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ2luKHApIHtcbiAgICAgICAgaWYgKCFDQ19XRUNIQVRHQU1FKSByZXR1cm5cbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAvL3FxLmNsb3VkLmluaXQoe3RyYWNlVXNlcjogdHJ1ZX0pO1xuICAgICAgICAvLyB0aGlzLl9kYiA9IHFxLmNsb3VkLmRhdGFiYXNlKHtlbnY6IFwicmVsZWFzZS0yYzg3YzRcIn0pOy8v5rWL6K+V546v5aKDXG4gICAgICAgIC8vdGhpcy5fZGIgPSBxcS5jbG91ZC5kYXRhYmFzZSgpO1xuICAgICAgICBzZWxmLnd4TG9naW4oaXNMb2dpbiA9PiB7XG4gICAgICAgICAgICBpZiAoIWlzTG9naW4pIHJldHVybjtcbiAgICAgICAgICAgIGlmIChwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEF1dGgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvL+WPkemAgea2iOaBr+WIsOWtkOWfn1xuICAgIHB1YmxpYyBwb3N0TWVzc2FnZShjbWQsIGRhdGE/KSB7XG4gICAgICAgIGlmIChDQ19XRUNIQVRHQU1FKSB7XG4gICAgICAgICAgICBsZXQgcmVxID0geyBjbWQgfVxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXFba10gPSBkYXRhW2tdXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHFxLmdldE9wZW5EYXRhQ29udGV4dCgpLnBvc3RNZXNzYWdlKHJlcSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdXBsb2FkU2NvcmVzKGt2cykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICBLVkRhdGFMaXN0OiBrdnMsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCItLS0tLS0tdXBsb2FkU2NvcmVzXCIsIGt2cyk7XG4gICAgICAgICAgICBxcS5zZXRVc2VyQ2xvdWRTdG9yYWdlKG9iailcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBsb2FkU2NvcmUoaywgdiwgY2FsbGJhY2s/KSB7XG4gICAgICAgIHZhciBrdkRhdGFMaXN0ID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGt2RGF0YUxpc3QucHVzaCh7XG4gICAgICAgICAgICBrZXk6IGssXG4gICAgICAgICAgICB2YWx1ZTogdlxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgS1ZEYXRhTGlzdDoga3ZEYXRhTGlzdCxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhkKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgIH1cbiAgICAgICAgcXEuc2V0VXNlckNsb3VkU3RvcmFnZShvYmopXG4gICAgICAgIC8vIFwid3hnYW1lXCI6IHtcbiAgICAgICAgLy8gICAgIFwic2NvcmVcIjogMTYsXG4gICAgICAgIC8vICAgICBcInVwZGF0ZV90aW1lXCI6IDE1MTMwODA1NzNcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gXCJjb3N0X21zXCI6IDM2NTAwXG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRCYW5uZXJBZChjYWxsYmFjaz8pIHtcbiAgICAgICAgaWYgKEdsb2JhbC5iYW5uZXJBZCkge1xuICAgICAgICAgICAgR2xvYmFsLmJhbm5lckFkLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fc3lzdGVtSW5mbylcbiAgICAgICAgICAgIHRoaXMuX3N5c3RlbUluZm8gPSBxcS5nZXRTeXN0ZW1JbmZvU3luYygpO1xuICAgICAgICB2YXIgdyA9IHRoaXMuX3N5c3RlbUluZm8uc2NyZWVuV2lkdGggLyAyO1xuICAgICAgICB2YXIgaCA9IHRoaXMuX3N5c3RlbUluZm8uc2NyZWVuSGVpZ2h0O1xuXG4gICAgICAgIGxldCBpc1BvciA9IHRoaXMuX3N5c3RlbUluZm8uc2NyZWVuV2lkdGggPD0gdGhpcy5fc3lzdGVtSW5mby5zY3JlZW5IZWlnaHQ7XG4gICAgICAgIGxldCBmaXhXaWR0aCA9IGlzUG9yID8gdGhpcy5fc3lzdGVtSW5mby5zY3JlZW5XaWR0aCA6ICh0aGlzLl9zeXN0ZW1JbmZvLnNjcmVlbkhlaWdodCAvIDMpO1xuICAgICAgICBsZXQgbW9kZWxTdHIgPSB0aGlzLl9zeXN0ZW1JbmZvLm1vZGVsXG4gICAgICAgIGxldCBpc0lPUyA9IGZhbHNlO1xuICAgICAgICBpZiAobW9kZWxTdHIpIHtcbiAgICAgICAgICAgIGlmIChtb2RlbFN0ci5pbmRleE9mKFwiaVBob25lXCIpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgaXNJT1MgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBiYW5uZXJBZCA9IHFxLmNyZWF0ZUJhbm5lckFkKHtcbiAgICAgICAgICAgIGFkVW5pdElkOiBRUUdhbWVDb25maWcuYmFubmVyX2FkX2lkLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCwvL2NjLnZpc2libGVSZWN0LmhlaWdodFxuICAgICAgICAgICAgICAgIHdpZHRoOiBmaXhXaWR0aFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBHbG9iYWwuYmFubmVyQWQgPSBiYW5uZXJBZDtcblxuXG5cbiAgICAgICAgYmFubmVyQWQub25Mb2FkKCgpID0+IHtcbiAgICAgICAgICAgIEdsb2JhbC5iYW5uZXJBZExvYWRDb3VudCA9IDA7XG4gICAgICAgICAgICBiYW5uZXJBZC5zdHlsZS5sZWZ0ID0gdyAtIGJhbm5lckFkLnN0eWxlLnJlYWxXaWR0aCAvIDI7XG4gICAgICAgICAgICBpZiAoaXNJT1MpIHtcbiAgICAgICAgICAgICAgICBiYW5uZXJBZC5zdHlsZS50b3AgPSBoIC0gYmFubmVyQWQuc3R5bGUucmVhbEhlaWdodCAtIDEzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiYW5uZXJBZC5zdHlsZS50b3AgPSBoIC0gYmFubmVyQWQuc3R5bGUucmVhbEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soXCJsb2FkXCIsIGJhbm5lckFkKVxuICAgICAgICB9KVxuICAgICAgICBiYW5uZXJBZC5vbkVycm9yKChlcnIpID0+IHtcbiAgICAgICAgICAgIC8v5Yqg6L295aSx6LSlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInd4c2RrIGJhbm5lckFkIG9uRXJyb3IgY29kZTpcIiArIGVyci5jb2RlICsgXCIgbXNnOlwiICsgZXJyLm1zZyk7XG4gICAgICAgICAgICBHbG9iYWwuYmFubmVyQWRMb2FkQ291bnQgKz0gMTtcbiAgICAgICAgICAgIGlmIChHbG9iYWwuYmFubmVyQWRMb2FkQ291bnQgPCA0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQmFubmVyQWQoY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR2xvYmFsLmJhbm5lckFkID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soXCJlcnJvclwiKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd0Jhbm5lckFkKGVycm9yQ2FsbGJhY2s/KTogYW55IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJXeHNkayDmmL7npLpiYW5uZXLlub/lkYpcIiwgR2xvYmFsLmJhbm5lckFkKVxuICAgICAgICBpZiAoR2xvYmFsLmJhbm5lckFkKSB7XG4gICAgICAgICAgICBHbG9iYWwuYmFubmVyQWQuc2hvdygpO1xuICAgICAgICAgICAgR2xvYmFsLmlzQmFubmVyU2hvdyA9IHRydWVcbiAgICAgICAgICAgIGV2dC5lbWl0KFwid3hzZGsuQmFubmVyUmVhZHlcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV3hzZGsg5LiN5a2Y5ZyoYmFubmVy6LWE5rqQLi4uLlwiKTtcbiAgICAgICAgICAgIHRoaXMubG9hZEJhbm5lckFkKCh2LCBhZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2ID09IFwibG9hZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Jhbm5lckFkKClcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHYgPT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrICYmIGVycm9yQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzQmFubmVyU2hvdygpIHtcbiAgICAgICAgcmV0dXJuIEdsb2JhbC5pc0Jhbm5lclNob3c7XG4gICAgfVxuXG4gICAgaGlkZUJhbm5lckFkKCkge1xuICAgICAgICBpZiAoR2xvYmFsLmJhbm5lckFkKSB7XG4gICAgICAgICAgICBHbG9iYWwuYmFubmVyQWQuaGlkZSgpO1xuICAgICAgICAgICAgR2xvYmFsLmlzQmFubmVyU2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gR2xvYmFsLmJhbm5lckFkID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vaW50ZXJzdGl0aWFsXG4gICAgc2hvd0ludGVyc3RpdGlhbChlcnJvckNhbGxiYWNrKSB7XG5cbiAgICAgICAgLy8g5Yib5bu65o+S5bGP5bm/5ZGK5a6e5L6L77yM5o+Q5YmN5Yid5aeL5YyWXG4gICAgICAgIGlmIChxcS5jcmVhdGVJbnRlcnN0aXRpYWxBZCkge1xuICAgICAgICAgICAgR2xvYmFsLmludGVyc3RpdGlhbEFkID0gcXEuY3JlYXRlSW50ZXJzdGl0aWFsQWQoe1xuICAgICAgICAgICAgICAgIGFkVW5pdElkOiBRUUdhbWVDb25maWcuaW50ZXJzdGl0aWFsX2FkX2lkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLkuI3mlK/mjIHmj5LlsY/lub/lkYpcIilcbiAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sgJiYgZXJyb3JDYWxsYmFjaygnbm90c3VwcG9ydCcpXG4gICAgICAgIH1cbiAgICAgICAgLy8g5Zyo6YCC5ZCI55qE5Zy65pmv5pi+56S65o+S5bGP5bm/5ZGKXG4gICAgICAgIGlmIChHbG9iYWwuaW50ZXJzdGl0aWFsQWQpIHtcbiAgICAgICAgICAgIEdsb2JhbC5pbnRlcnN0aXRpYWxBZC5zaG93KCkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sgJiYgZXJyb3JDYWxsYmFjayhcImVyclwiLCBlcnIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSh2ID0+IHtcbiAgICAgICAgICAgICAgICBHbG9iYWwuaW50ZXJzdGl0aWFsQWQub25DbG9zZSgocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHYoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgbG9hZFZpZGVvQWQoY2FsbGJhY2spIHtcbiAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT13eHNkay5sb2FkVmlkZW9BRFwiKTtcbiAgICAgICAgLy8gaWYgKCFHbG9iYWwudmlkZW9BZCApIHsgLy/lpoLmnpzmsqHmnInlub/lkYrotYTmupDlsLHliqDovb3mlrDnmoTop4bpopHlub/lkYpcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgdmlkZW9BZCA9IEdsb2JhbC52aWRlb0FkO1xuICAgICAgICBpZiAoIXZpZGVvQWQpIHtcbiAgICAgICAgICAgIHZpZGVvQWQgPSBxcS5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe1xuICAgICAgICAgICAgICAgIGFkVW5pdElkOiBRUUdhbWVDb25maWcudmlkZW9fYWRfaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWRlb0FkLm9mZkNsb3NlKEdsb2JhbC52aWRlb19jbG9zZV9jYWxsYmFjayk7XG4gICAgICAgICAgICB2aWRlb0FkLm9mZkVycm9yKEdsb2JhbC52aWRlb19lcnJvcl9jYWxsYmFjayk7XG4gICAgICAgICAgICB2aWRlb0FkLm9mZkxvYWQoR2xvYmFsLnZpZGVvX2xvYWRfY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIEdsb2JhbC52aWRlb19lcnJvcl9jYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8v5Yqg6L295aSx6LSlXG4gICAgICAgICAgICBHbG9iYWwudmlkZW9BZExvYWRDb3VudCArPSAxO1xuICAgICAgICAgICAgLy/lsJ3or5U05qyhXG4gICAgICAgICAgICBpZiAoR2xvYmFsLnZpZGVvQWRMb2FkQ291bnQgPCA0KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5sb2FkVmlkZW9BZChjYWxsYmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soXCJlcnJvclwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgR2xvYmFsLnZpZGVvX2Nsb3NlX2NhbGxiYWNrID0gZnVuY3Rpb24gKHJldCkge1xuICAgICAgICAgICAgLy/mkq3mlL7nu5PmnZ9cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid3hzZGsgb25DbG9zZS4uLlwiKTtcbiAgICAgICAgICAgIEdsb2JhbC52aWRlb0FkTG9hZENvdW50ID0gMFxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhcImNsb3NlXCIsIHJldC5pc0VuZGVkKVxuICAgICAgICAgICAgR2xvYmFsLnZpZGVvQWQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgR2xvYmFsLnZpZGVvX2xvYWRfY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL+WKoOi9veaIkOWKn1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3eHNkayBvbkxvYWRcIik7XG4gICAgICAgICAgICBHbG9iYWwudmlkZW9BZCA9IHZpZGVvQWQ7XG4gICAgICAgICAgICBHbG9iYWwudmlkZW9BZExvYWRDb3VudCA9IDA7XG4gICAgICAgICAgICAvLyB0aGlzLnNob3dCYW5uZXJBZCgpO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhcImxvYWRcIiwgdmlkZW9BZClcbiAgICAgICAgfVxuICAgICAgICAvLyDnlKjmiLfop6blj5Hlub/lkYrlkI7vvIzmmL7npLrmv4DlirHop4bpopHlub/lkYpcbiAgICAgICAgdmlkZW9BZC5zaG93KCkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgLy8gdGhpcy5oaWRlQmFubmVyQWQoKTtcbiAgICAgICAgICAgIHZpZGVvQWQubG9hZCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHZpZGVvQWQuc2hvdygpO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soXCJzaG93XCIpXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIEdsb2JhbC52aWRlb0FkTG9hZENvdW50ICs9IDE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgdmlkZW9BZC5vbkVycm9yKEdsb2JhbC52aWRlb19lcnJvcl9jYWxsYmFjayk7XG4gICAgICAgIHZpZGVvQWQub25DbG9zZShHbG9iYWwudmlkZW9fY2xvc2VfY2FsbGJhY2spO1xuICAgICAgICB2aWRlb0FkLm9uTG9hZChHbG9iYWwudmlkZW9fbG9hZF9jYWxsYmFjayk7XG4gICAgICAgIEdsb2JhbC52aWRlb0FkID0gdmlkZW9BZFxuICAgIH1cblxuICAgIHNob3dBcHBCb3goKSB7XG4gICAgICAgIGlmICh3aW5kb3cucXEpIHtcbiAgICAgICAgICAgIGxldCBhcHBib3ggPSBxcS5jcmVhdGVBcHBCb3goe1xuICAgICAgICAgICAgICAgIGFkVW5pdElkOiBRUUdhbWVDb25maWcuYm94X2FkX2lkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYXBwYm94LmxvYWQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBhcHBib3guc2hvdygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBsZXQgcXFzZGs6IFFRU2RrID0gbmV3IFFRU2RrKCk7Il19