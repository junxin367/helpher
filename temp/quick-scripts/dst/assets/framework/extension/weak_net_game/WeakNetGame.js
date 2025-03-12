
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/weak_net_game/WeakNetGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0bcf4uw82lEiZu0xHGC+nQ4', 'WeakNetGame');
// framework/extension/weak_net_game/WeakNetGame.ts

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
var Platform_1 = require("../Platform");
var Net_1 = require("../../misc/Net");
var event_1 = require("../../core/event");
var SovInfo_1 = require("./SovInfo");
var gameUtil_1 = require("../../utils/gameUtil");
var ToastManager_1 = require("../../ui/ToastManager");
var WeakNetGame = /** @class */ (function () {
    function WeakNetGame() {
    }
    Object.defineProperty(WeakNetGame, "isLoggedIn", {
        /**是否已经登陆 */
        get: function () {
            return this.logined_useId != null;
        },
        enumerable: false,
        configurable: true
    });
    WeakNetGame.requestConfig = function () {
        var _this = this;
        if (this.config_inited)
            return;
        return new Promise(function (resolve, reject) {
            // console.log("request url:", this.serverConfig.config_url)
            Net_1.net.httpGet(_this.serverConfig.config_url + "?r=" + Date.now()).then(function (res) {
                if (res == Net_1.default.Code.Timeout) {
                    reject('timeout');
                }
                else {
                    if (res) {
                        _this.config = JSON.parse(res);
                        _this.config_inited = true;
                        console.log('配置', _this.config);
                        resolve();
                    }
                    else {
                        resolve();
                    }
                }
            });
        });
    };
    //share_config_url
    WeakNetGame.requestShareConfig = function () {
        var _this = this;
        if (this.shareConfig_inited)
            return;
        return new Promise(function (resolve, reject) {
            Net_1.net.httpGet(_this.serverConfig.cdn_url + _this.config.share_config_url + "?t=" + Date.now()).then(function (res) {
                if (res == Net_1.default.Code.Timeout) {
                    resolve();
                }
                else {
                    if (res) {
                        _this.shareConfigs = JSON.parse(res);
                        _this.shareConfig_inited = true;
                        console.log('分享配置', _this.shareConfigs);
                        resolve();
                    }
                    else {
                        resolve();
                    }
                }
            });
        });
    };
    //csv_url
    WeakNetGame.downloadCsv = function (name) {
        var _this = this;
        //5秒以内无需下载 
        var time = Date.now();
        var cache = this._configstr_cache[name];
        if (cache && time - cache.timestamp <= 1000 * 10) {
            console.log("刚已下载并加载表： " + name);
            return Promise.resolve();
        }
        var url = this.serverConfig.cdn_url + this.config.csv_url + name + '.csv' + "?t=" + Date.now();
        return new Promise(function (resolve, reject) {
            console.log("download csv:" + name);
            Net_1.net.httpGet(url).then(function (res) {
                if (res == Net_1.default.Code.Timeout) {
                    csv.load("Config/csv/" + name, resolve);
                }
                else {
                    if (res) {
                        csv.loadString(name, res, resolve);
                        delete _this._configstr_cache[name];
                        _this._configstr_cache[name] = { timestamp: Date.now(), data: res };
                    }
                    else {
                        csv.load("Config/csv/" + name, resolve);
                    }
                }
            });
        });
    };
    WeakNetGame.loadLocalCsv = function (name, callback) {
        return new Promise(function (resolve, reject) {
            console.log("load local csv:" + name);
            csv.load("Config/csv/" + name, resolve);
            if (callback)
                callback(name);
        });
    };
    WeakNetGame.loadLocalCsvs = function (callback) {
        var _this = this;
        if (this.config.local_csv == null) {
            return new Promise(function (resolve) {
                csv.loadDir("Config/csv", resolve);
            });
        }
        else {
            if (this.config.local_csv.length > 0) {
                var arr_1 = [];
                this.config.local_csv.forEach(function (v) {
                    var p = _this.loadLocalCsv(v, callback);
                    arr_1.push(p);
                });
                return Promise.all(arr_1);
            }
        }
    };
    WeakNetGame.downloadCsvs = function () {
        var _this = this;
        if (this.config.csv.length == 0) {
            csv.loadDir("Config/csv");
        }
        else {
            var arr_2 = [];
            this.config.csv.forEach(function (v) {
                var p = _this.downloadCsv(v);
                arr_2.push(p);
            });
            return Promise.all(arr_2);
        }
    };
    WeakNetGame.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params, code, options, res, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = { openId: this.serverConfig.openId };
                        if (!CC_WECHATGAME) return [3 /*break*/, 2];
                        Platform_1.default.login();
                        return [4 /*yield*/, event_1.evt.wait("wxlogin")];
                    case 1:
                        code = (_a.sent())[0];
                        options = wx.getLaunchOptionsSync();
                        params = {
                            code: code,
                            type: "wxlogin",
                            query: JSON.stringify(options.query),
                            scene: options.scene
                        };
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.client.httpGet(this.serverConfig.root_url + "/game/login", params)];
                    case 3:
                        res = _a.sent();
                        if (res == Net_1.default.Code.Timeout) {
                            console.log("登陆失败", this.retry_count);
                            return [2 /*return*/, false];
                        }
                        else {
                            if (res) {
                                ret = JSON.parse(res);
                                console.log("登陆返回", ret);
                                if (ret.data) {
                                    this.client.setHeader("Authorization", ret.data.token);
                                    console.log('登陆成功', ret.data);
                                    this.logined_useId = ret.data.openId;
                                    this.retry_count = 0;
                                    this.userInfo = ret.data;
                                    return [2 /*return*/, true];
                                }
                                console.log("登陆失败");
                                return [2 /*return*/, false];
                            }
                            else {
                                console.log("登陆失败", this.retry_count);
                                return [2 /*return*/, false];
                                //重新登陆 
                                // if (this.retry_count <= 1) {
                                //     this.retry_count++;
                                //     return await this.login();
                                // } else {
                                //     return false;
                                // }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WeakNetGame.syncData = function (v, openId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (openId == null) {
                    if (WeakNetGame.isLoggedIn) {
                        openId = this.logined_useId;
                    }
                    else {
                        return [2 /*return*/, console.warn("上传数据！，未登陆且未指定用户id")];
                    }
                }
                return [2 /*return*/, this.syncDataToTable(v, 'user', openId)];
            });
        });
    };
    /**
     * 上传数据到指定远端服务器
     * @param v 数据
     * @param table  指定表
     * @param id  数据id
     */
    WeakNetGame.syncDataToTable = function (v, table, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (id == null) {
                            return [2 /*return*/, console.warn("上传数据！未指定id !")];
                        }
                        return [4 /*yield*/, this.client.httpPut(this.serverConfig.root_url + "/" + table + "/" + id, v)];
                    case 1:
                        res = _a.sent();
                        if (res == Net_1.default.Code.Timeout) {
                            console.log("上传数据 超时....");
                            return [2 /*return*/, false];
                        }
                        else {
                            if (res) {
                                ret = JSON.parse(res);
                                console.log(ret);
                                return [2 /*return*/, ret];
                            }
                            else {
                                console.warn("同步数据失败");
                                return [2 /*return*/, false];
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WeakNetGame.loadUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //拉取用户数据
                        if (!this.isLoggedIn)
                            return [2 /*return*/, console.warn("拉取数据时：未登录")];
                        if (this.userInfo) {
                            return [2 /*return*/, this.userInfo];
                        }
                        console.log("拉取用户数据");
                        return [4 /*yield*/, this.client.httpGet(this.serverConfig.root_url + "/user/" + this.logined_useId)];
                    case 1:
                        res = _a.sent();
                        if (res == Net_1.default.Code.Timeout) {
                            return [2 /*return*/, this.userInfo];
                        }
                        else {
                            if (res) {
                                ret = JSON.parse(res);
                                if (!ret.errno) {
                                    return [2 /*return*/, ret.data];
                                }
                            }
                            else {
                                return [2 /*return*/, this.userInfo];
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WeakNetGame.setVideoWatchedCount = function (c) {
        this.video_watched_count = c;
        localStorage.setItem("__video_watched_count__", this.video_watched_count + "");
        localStorage.setItem("__video_watched_date__", Date.now().toString());
    };
    WeakNetGame.setShareFailCount = function (c) {
        this.share_fail_count = c;
        localStorage.setItem("_share_fail_count_", this.share_fail_count + "");
        localStorage.setItem("_share_fail_date_", Date.now().toString());
    };
    WeakNetGame.setShareSuccCount = function (c) {
        this.share_succ_count = c;
        localStorage.setItem("_share_succ_count_", this.share_succ_count + "");
        localStorage.setItem("_share_succ_date_", Date.now().toString());
    };
    WeakNetGame.initUserData = function () {
        var video_watched_count = localStorage.getItem('__video_watched_count__');
        var video_watched_date = localStorage.getItem("__video_watched_date__");
        var fail_share_count = localStorage.getItem('_share_fail_count_');
        var fail_share_date = localStorage.getItem("_share_fail_date_");
        var succ_share_count = localStorage.getItem('_share_succ_count_');
        var succ_share_date = localStorage.getItem("_share_succ_date_");
        var d = parseInt(video_watched_date);
        var c = parseInt(video_watched_count);
        if (isNaN(c)) {
            this.setVideoWatchedCount(0);
        }
        else {
            this.video_watched_count = c;
        }
        if (!isNaN(d)) {
            if (gameUtil_1.default.isNextDay(d)) {
                this.setVideoWatchedCount(0);
            }
        }
        d = parseInt(fail_share_date);
        c = parseInt(fail_share_count);
        if (isNaN(c)) {
            this.setShareFailCount(0);
        }
        else {
            this.share_fail_count = c;
        }
        if (!isNaN(d)) {
            if (gameUtil_1.default.isNextDay(d)) {
                this.setShareFailCount(0);
            }
        }
        d = parseInt(succ_share_count);
        c = parseInt(succ_share_date);
        if (isNaN(c)) {
            this.setShareSuccCount(0);
        }
        else {
            this.share_succ_count = c;
        }
        if (!isNaN(d)) {
            if (gameUtil_1.default.isNextDay(d)) {
                this.setShareSuccCount(0);
            }
        }
    };
    WeakNetGame.initConfig = function (conf) {
        this.serverConfig = conf;
        this.client.setTimeout(2500);
        console.log("[WeakNetGame]加载配置文件");
        console.log(conf);
    };
    WeakNetGame.doLogin = function (progressCallback) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isInit) return [3 /*break*/, 10];
                        console.log("[WeakNetGame]开始登陆");
                        WeakNetGame.initUserData();
                        if (!!this.serverConfig.is_local_game) return [3 /*break*/, 9];
                        progressCallback && progressCallback("config");
                        return [4 /*yield*/, WeakNetGame.requestConfig()];
                    case 1:
                        _a.sent();
                        progressCallback && progressCallback("local_csv");
                        return [4 /*yield*/, WeakNetGame.loadLocalCsvs(function (_) {
                                // progressCallback && progressCallback('local_csv_loaded', _);
                            })];
                    case 2:
                        _a.sent();
                        progressCallback && progressCallback("csv");
                        return [4 /*yield*/, WeakNetGame.downloadCsvs()];
                    case 3:
                        _a.sent();
                        if (!this.serverConfig.is_normal_login) return [3 /*break*/, 5];
                        progressCallback && progressCallback("login");
                        return [4 /*yield*/, WeakNetGame.login()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        if (!CC_WECHATGAME) return [3 /*break*/, 7];
                        progressCallback && progressCallback("share_config");
                        return [4 /*yield*/, WeakNetGame.requestShareConfig()];
                    case 6:
                        _a.sent();
                        Platform_1.default.initShare(this.shareConfigs['default'], this.logined_useId);
                        _a.label = 7;
                    case 7:
                        //检测 ip 
                        if (!this.isLoggedIn) {
                            return [2 /*return*/, false];
                        }
                        this.isInit = true;
                        progressCallback && progressCallback("complete");
                        return [4 /*yield*/, WeakNetGame.loadUserInfo()];
                    case 8: return [2 /*return*/, _a.sent()];
                    case 9:
                        this.isInit = true;
                        return [2 /*return*/, new Promise(function (resolve) {
                                csv.loadDir("Config/csv", resolve);
                            })];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 视频v次后分享s次，然后循环；
     * @param a  当前执行了几次
     * @param v  视频v次
     * @param s  分享s次
     */
    WeakNetGame.check = function (a, t1, c1, t2, c2) {
        var c = c1 + c2 + 1;
        a = a % c;
        if (a >= c1)
            return t2;
        else if (a <= c1)
            return t1;
    };
    WeakNetGame.getChoice = function (key) {
        if (this.video_watched_count >= this.max_video_watch) {
            return 0;
        }
        var val = key;
        if (typeof (key) == "string") {
            if (csv.Config) {
                val = csv.Config[key];
            }
            else {
                val = 0;
            }
        }
        var choice = Number(val);
        if (isNaN(choice)) {
            // 0=3,1=4 
            try {
                var _a = val.split(",").map(function (v) { return v.split("=").map(function (x) { return parseInt(x); }); }), _b = _a[0], t1 = _b[0], c1 = _b[1], _c = _a[1], t2 = _c[0], c2 = _c[1];
                var c = SovInfo_1.SovInfo.getCount(key);
                choice = this.check(c, t1, c1, t2, c2);
            }
            catch (e) {
                console.error("配置错误：请检测后台配置！" + "[" + key + "] = " + val);
                choice = 0;
            }
        }
        if (val == 2) {
            choice = g.randomInt(0, 2);
        }
        return choice;
    };
    WeakNetGame.set_safe_check_callback = function (callback) {
        this._check_safe_callback = callback;
    };
    Object.defineProperty(WeakNetGame, "is_safe_mode", {
        get: function () {
            if (!this._check_safe_callback)
                return false;
            return this._check_safe_callback();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WeakNetGame, "sharedUUIDs", {
        get: function () {
            return this._sharedUUIDs;
        },
        enumerable: false,
        configurable: true
    });
    WeakNetGame.isValidShare = function (uuid) {
        return this._sharedUUIDs[uuid] != null;
    };
    WeakNetGame.isClaimedShare = function (uuid) {
        return this.claimedUUIDs[uuid] != null;
    };
    WeakNetGame.claimShare = function (uuid) {
        this.claimedUUIDs[uuid] = uuid;
        var callback = this._sharedUUIDs[uuid];
        if (callback)
            callback();
    };
    WeakNetGame.doChoice = function (key, callback, target, fail_callback) {
        var _this = this;
        var choice = this.getChoice(key);
        //发送给指定好友
        //https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.shareMessageToFriend.html
        var shareToFriend = function () {
            // let shareCfg = this.shareConfigs['default'] as ShareInfo
            // let imageUrl = shareCfg.imageUrl;
            // let imageUrlId = "";//?审核通过的图片 ID，详见https://developers.weixin.qq.com/minigame/dev/guide/open-ability/share/share.html#%E4%BD%BF%E7%94%A8%E5%AE%A1%E6%A0%B8%E9%80%9A%E8%BF%87%E7%9A%84%E8%BD%AC%E5%8F%91%E5%9B%BE%E7%89%87
            // Platform.sendMessageToOpen("shareMessageToFriend", { imageUrl, imageUrlId })
            // evt.emit("wx.shareMessageToFriend", function() {});if
            // 2. 当玩家当日普通分享获利超过3次后，给出toast提示：暂无可用视频，请稍后再试~；
            if (_this.share_succ_count >= 3) {
                ToastManager_1.Toast.make("暂无可用视频，请稍后再试 !");
                fail_callback && fail_callback.call();
            }
            else {
                share();
            }
        };
        var watch = function () {
            Platform_1.default.watch_video(function (_) {
                SovInfo_1.SovInfo.invoke(key);
                _this.video_watched_count++;
                _this.setVideoWatchedCount(_this.video_watched_count);
                event_1.evt.emit("WeakNetGame.watch_video", _this.video_watched_count);
                callback && callback.call(target, 'video');
            }, target, function () {
                // 1. 当获利点不能正常拉起视频时，需要切换到普通分享；
                shareToFriend();
            });
        };
        var share = function (b) {
            if (b === void 0) { b = false; }
            if (_this.is_safe_mode) {
                watch();
                return;
            }
            if (_this.is_forbidden) {
                watch();
            }
            else {
                if (b) {
                    var uuid = g.uuid(8, 16);
                    _this._sharedUUIDs[uuid] = callback.bind(target, 'share_link_click');
                    Platform_1.default.doShareWithParams({ uuid: uuid, share_link: true }, _this.shareConfigs[key], function () {
                        callback && callback.call(target, 'share_link');
                    }, _this);
                }
                else {
                    //6. 连续分享失败3次后，第4次点击去分享按钮，直接拉起视频；
                    // if (this.share_fail_count >= 3) {
                    //     this.setShareFailCount(0)
                    //     return watch();
                    // }
                    Platform_1.default.doShare(_this.shareConfigs[key], function (ok) {
                        var notFail = true;
                        if (CC_WECHATGAME) {
                            if (Math.random() < _this.share_fail_rate) {
                                notFail = false;
                            }
                        }
                        if (ok && notFail) {
                            _this.setShareSuccCount(++_this.share_succ_count);
                            event_1.evt.emit("WeakNetGame.ShareSuccess", key);
                            callback && callback.call(target, 'share');
                            SovInfo_1.SovInfo.invoke(key);
                        }
                        else {
                            _this.setShareFailCount(++_this.share_fail_count);
                            fail_callback && fail_callback.call();
                            event_1.evt.emit("WeakNetGame.ShareFail", key);
                            if (CC_WECHATGAME) {
                                wx.showModal({
                                    title: "提示",
                                    content: g.getRandom(_this.share_fail_texts),
                                    showCancel: true,
                                    cancelText: "取消",
                                    confirmText: "去分享",
                                    success: function (res) {
                                        if (res.cancel) {
                                            //点击取消,默认隐藏弹框
                                        }
                                        else {
                                            share();
                                        }
                                    }
                                });
                            }
                            else {
                                console.warn("分享失败! ,请重试!");
                            }
                        }
                    }, _this.share_succ_delay);
                }
            }
        };
        if (choice == 0) {
            share();
        }
        else if (choice == 1) {
            if (this.video_watched_count >= this.max_video_watch) {
                share();
            }
            else {
                watch();
            }
        }
        else if (choice == 3) {
            callback && callback.call(target);
        }
        else if (choice == 4) {
            // 链接分享 ，需要玩家点击链接后完成整个分享流程
            share(true);
        }
    };
    WeakNetGame.shareConfigs = {};
    WeakNetGame.config = { share_config_url: "share_config.json", csv_url: "csv/", csv: [], local_csv: [] };
    WeakNetGame.isInit = false;
    WeakNetGame.config_inited = false;
    WeakNetGame.shareConfig_inited = false;
    WeakNetGame.logined_useId = null;
    ///------------------------------------------------------------------
    WeakNetGame.video_watched_count = 0;
    WeakNetGame.share_fail_count = 0;
    WeakNetGame.share_succ_count = 0;
    ///------------------------------------------------------------------
    WeakNetGame.is_forbidden = false;
    /**当天看视频上限 */
    WeakNetGame.max_video_watch = 99;
    WeakNetGame.share_succ_delay = 2000;
    /**失败概率 */
    WeakNetGame.share_fail_rate = 0.05;
    /**当天分享失败上限 */
    WeakNetGame.max_share_fail = 3;
    ///------------------------------------------------------------------
    WeakNetGame._check_safe_callback = null;
    WeakNetGame._configstr_cache = {};
    WeakNetGame.client = new Net_1.default();
    WeakNetGame.retry_count = 0;
    WeakNetGame.userInfo = null;
    /**只保存当前session */
    WeakNetGame._sharedUUIDs = {};
    WeakNetGame.claimedUUIDs = {};
    WeakNetGame.share_fail_texts = ['分享失败，请分享到30人群', '分享失败，请分享到新的群'];
    return WeakNetGame;
}());
exports.default = WeakNetGame;
window["WeakNetGame"] = WeakNetGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHdlYWtfbmV0X2dhbWVcXFdlYWtOZXRHYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQWtEO0FBQ2xELHNDQUEwQztBQUMxQywwQ0FBdUM7QUFDdkMscUNBQW9DO0FBQ3BDLGlEQUE0QztBQUM1QyxzREFBOEM7QUFpQjlDO0lBQUE7SUFrakJBLENBQUM7SUFyaEJHLHNCQUFrQix5QkFBVTtRQUQ1QixZQUFZO2FBQ1o7WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRWMseUJBQWEsR0FBNUI7UUFBQSxpQkFvQkM7UUFuQkcsSUFBSSxJQUFJLENBQUMsYUFBYTtZQUFFLE9BQU87UUFDL0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLDREQUE0RDtZQUM1RCxTQUFHLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO2dCQUNuRSxJQUFJLEdBQUcsSUFBSSxhQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDekIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO2lCQUNwQjtxQkFBTTtvQkFDSCxJQUFJLEdBQUcsRUFBRTt3QkFDTCxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7d0JBQzdCLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO3dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQy9CLE9BQU8sRUFBRSxDQUFDO3FC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Qiw0QkFBZ0IsR0FBRyxJQUFJLENBQUM7SUFDL0IsVUFBVTtJQUNILDJCQUFlLEdBQUcsSUFBSSxDQUFDO0lBQzlCLGNBQWM7SUFDUCwwQkFBYyxHQUFHLENBQUMsQ0FBQztJQUMxQixxRUFBcUU7SUFFOUQsZ0NBQW9CLEdBQWEsSUFBSSxDQUFDO0lBa0R0Qyw0QkFBZ0IsR0FBNkMsRUFBRSxDQUFBO0lBb0UvRCxrQkFBTSxHQUFHLElBQUksYUFBRyxFQUFFLENBQUM7SUFFbkIsdUJBQVcsR0FBRyxDQUFDLENBQUM7SUFFaEIsb0JBQVEsR0FBUSxJQUFJLENBQUM7SUF1UjVCLGtCQUFrQjtJQUNILHdCQUFZLEdBQUcsRUFBRSxDQUFBO0lBVWpCLHdCQUFZLEdBQUcsRUFBRSxDQUFBO0lBYXpCLDRCQUFnQixHQUFHLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQyxDQUFBO0lBK0cvRCxrQkFBQztDQWxqQkQsQUFrakJDLElBQUE7a0JBbGpCb0IsV0FBVztBQW9qQmhDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxXQUFXLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxhdGZvcm0sIHsgU2hhcmVJbmZvIH0gZnJvbSBcIi4uL1BsYXRmb3JtXCI7XHJcbmltcG9ydCBOZXQsIHsgbmV0IH0gZnJvbSBcIi4uLy4uL21pc2MvTmV0XCI7XHJcbmltcG9ydCB7IGV2dCB9IGZyb20gXCIuLi8uLi9jb3JlL2V2ZW50XCI7XHJcbmltcG9ydCB7IFNvdkluZm8gfSBmcm9tIFwiLi9Tb3ZJbmZvXCI7XHJcbmltcG9ydCBnYW1lVXRpbCBmcm9tIFwiLi4vLi4vdXRpbHMvZ2FtZVV0aWxcIjtcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwiLi4vLi4vdWkvVG9hc3RNYW5hZ2VyXCI7XHJcblxyXG5cclxuXHJcbmludGVyZmFjZSBMb2dpblJldCB7XHJcbiAgICBlcnJubzogbnVtYmVyLFxyXG4gICAgZXJybXNnOiBzdHJpbmcsXHJcbiAgICBkYXRhOiB7IHRva2VuOiBzdHJpbmcsIG9wZW5JZDogc3RyaW5nIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFNlcnZlckNvbmZpZyB7XHJcbiAgICBzaGFyZV9jb25maWdfdXJsOiBzdHJpbmc7XHJcbiAgICBjc3ZfdXJsOiBzdHJpbmc7XHJcbiAgICBjc3Y6IHN0cmluZ1tdO1xyXG4gICAgbG9jYWxfY3N2OiBzdHJpbmdbXTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2Vha05ldEdhbWUge1xyXG4gICAgc3RhdGljIHNlcnZlckNvbmZpZzogV2Vha05ldENvbmZcclxuICAgIHN0YXRpYyBzaGFyZUNvbmZpZ3M6IGFueSA9IHt9XHJcbiAgICBzdGF0aWMgY29uZmlnOiBTZXJ2ZXJDb25maWcgPSB7IHNoYXJlX2NvbmZpZ191cmw6IFwic2hhcmVfY29uZmlnLmpzb25cIiwgY3N2X3VybDogXCJjc3YvXCIsIGNzdjogW10sIGxvY2FsX2NzdjogW10gfVxyXG4gICAgc3RhdGljIGlzSW5pdCA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGNvbmZpZ19pbml0ZWQgPSBmYWxzZTtcclxuICAgIHN0YXRpYyBzaGFyZUNvbmZpZ19pbml0ZWQgPSBmYWxzZTtcclxuICAgIHN0YXRpYyBsb2dpbmVkX3VzZUlkOiBzdHJpbmcgPSBudWxsXHJcblxyXG4gICAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBzdGF0aWMgdmlkZW9fd2F0Y2hlZF9jb3VudCA9IDA7XHJcbiAgICBzdGF0aWMgc2hhcmVfZmFpbF9jb3VudCA9IDA7XHJcbiAgICBzdGF0aWMgc2hhcmVfc3VjY19jb3VudCA9IDA7XHJcbiAgICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHN0YXRpYyBpc19mb3JiaWRkZW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKirlvZPlpKnnnIvop4bpopHkuIrpmZAgKi9cclxuICAgIHN0YXRpYyBtYXhfdmlkZW9fd2F0Y2ggPSA5OTtcclxuXHJcbiAgICBzdGF0aWMgc2hhcmVfc3VjY19kZWxheSA9IDIwMDA7XHJcbiAgICAvKirlpLHotKXmpoLnjocgKi9cclxuICAgIHN0YXRpYyBzaGFyZV9mYWlsX3JhdGUgPSAwLjA1O1xyXG4gICAgLyoq5b2T5aSp5YiG5Lqr5aSx6LSl5LiK6ZmQICovXHJcbiAgICBzdGF0aWMgbWF4X3NoYXJlX2ZhaWwgPSAzO1xyXG4gICAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgc3RhdGljIF9jaGVja19zYWZlX2NhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGw7XHJcblxyXG4gICAgLyoq5piv5ZCm5bey57uP55m76ZmGICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpc0xvZ2dlZEluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2luZWRfdXNlSWQgIT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZXF1ZXN0Q29uZmlnKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ19pbml0ZWQpIHJldHVybjtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlcXVlc3QgdXJsOlwiLCB0aGlzLnNlcnZlckNvbmZpZy5jb25maWdfdXJsKVxyXG4gICAgICAgICAgICBuZXQuaHR0cEdldCh0aGlzLnNlcnZlckNvbmZpZy5jb25maWdfdXJsICsgXCI/cj1cIiArIERhdGUubm93KCkpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMgPT0gTmV0LkNvZGUuVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgndGltZW91dCcpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcgPSBKU09OLnBhcnNlKHJlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWdfaW5pdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+mFjee9ricsIHRoaXMuY29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vc2hhcmVfY29uZmlnX3VybFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVxdWVzdFNoYXJlQ29uZmlnKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNoYXJlQ29uZmlnX2luaXRlZCkgcmV0dXJuO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIG5ldC5odHRwR2V0KHRoaXMuc2VydmVyQ29uZmlnLmNkbl91cmwgKyB0aGlzLmNvbmZpZy5zaGFyZV9jb25maWdfdXJsICsgXCI/dD1cIiArIERhdGUubm93KCkpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMgPT0gTmV0LkNvZGUuVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYXJlQ29uZmlncyA9IEpTT04ucGFyc2UocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYXJlQ29uZmlnX2luaXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfliIbkuqvphY3nva4nLCB0aGlzLnNoYXJlQ29uZmlncylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgX2NvbmZpZ3N0cl9jYWNoZTogeyBbaW5kZXg6IHN0cmluZ106IHsgdGltZXN0YW1wLCBkYXRhIH0gfSA9IHt9XHJcblxyXG4gICAgLy9jc3ZfdXJsXHJcbiAgICBwdWJsaWMgc3RhdGljIGRvd25sb2FkQ3N2KG5hbWUpIHtcclxuICAgICAgICAvLzXnp5Lku6XlhoXml6DpnIDkuIvovb0gXHJcbiAgICAgICAgbGV0IHRpbWUgPSBEYXRlLm5vdygpXHJcbiAgICAgICAgbGV0IGNhY2hlID0gdGhpcy5fY29uZmlnc3RyX2NhY2hlW25hbWVdXHJcbiAgICAgICAgaWYgKGNhY2hlICYmIHRpbWUgLSBjYWNoZS50aW1lc3RhbXAgPD0gMTAwMCAqIDEwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yia5bey5LiL6L295bm25Yqg6L296KGo77yaIFwiICsgbmFtZSlcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLnNlcnZlckNvbmZpZy5jZG5fdXJsICsgdGhpcy5jb25maWcuY3N2X3VybCArIG5hbWUgKyAnLmNzdicgKyBcIj90PVwiICsgRGF0ZS5ub3coKVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZG93bmxvYWQgY3N2OlwiICsgbmFtZSlcclxuICAgICAgICAgICAgbmV0Lmh0dHBHZXQodXJsKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzID09IE5ldC5Db2RlLlRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjc3YubG9hZChcIkNvbmZpZy9jc3YvXCIgKyBuYW1lLCByZXNvbHZlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3YubG9hZFN0cmluZyhuYW1lLCByZXMsIHJlc29sdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jb25maWdzdHJfY2FjaGVbbmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZ3N0cl9jYWNoZVtuYW1lXSA9IHsgdGltZXN0YW1wOiBEYXRlLm5vdygpLCBkYXRhOiByZXMgfTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3YubG9hZChcIkNvbmZpZy9jc3YvXCIgKyBuYW1lLCByZXNvbHZlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRMb2NhbENzdihuYW1lLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9hZCBsb2NhbCBjc3Y6XCIgKyBuYW1lKTtcclxuICAgICAgICAgICAgY3N2LmxvYWQoXCJDb25maWcvY3N2L1wiICsgbmFtZSwgcmVzb2x2ZSk7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmFtZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBsb2FkTG9jYWxDc3ZzKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmxvY2FsX2NzdiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgICAgIGNzdi5sb2FkRGlyKFwiQ29uZmlnL2NzdlwiLCByZXNvbHZlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5sb2NhbF9jc3YubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFyciA9IFtdXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2NhbF9jc3YuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcCA9IHRoaXMubG9hZExvY2FsQ3N2KHYsIGNhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGFycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZG93bmxvYWRDc3ZzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5jc3YubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgY3N2LmxvYWREaXIoXCJDb25maWcvY3N2XCIpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGFyciA9IFtdXHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmNzdi5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHAgPSB0aGlzLmRvd25sb2FkQ3N2KHYpO1xyXG4gICAgICAgICAgICAgICAgYXJyLnB1c2gocCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChhcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2xpZW50ID0gbmV3IE5ldCgpO1xyXG5cclxuICAgIHN0YXRpYyByZXRyeV9jb3VudCA9IDA7XHJcblxyXG4gICAgc3RhdGljIHVzZXJJbmZvOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIHN0YXRpYyBhc3luYyBsb2dpbigpIHtcclxuICAgICAgICBsZXQgcGFyYW1zOiBhbnkgPSB7IG9wZW5JZDogdGhpcy5zZXJ2ZXJDb25maWcub3BlbklkIH1cclxuICAgICAgICBpZiAoQ0NfV0VDSEFUR0FNRSkge1xyXG4gICAgICAgICAgICBQbGF0Zm9ybS5sb2dpbigpXHJcbiAgICAgICAgICAgIGxldCBbY29kZV0gPSBhd2FpdCBldnQud2FpdChcInd4bG9naW5cIilcclxuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB3eC5nZXRMYXVuY2hPcHRpb25zU3luYygpO1xyXG4gICAgICAgICAgICBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICBjb2RlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ3eGxvZ2luXCIsXHJcbiAgICAgICAgICAgICAgICBxdWVyeTogSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5xdWVyeSksXHJcbiAgICAgICAgICAgICAgICBzY2VuZTogb3B0aW9ucy5zY2VuZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCB0aGlzLmNsaWVudC5odHRwR2V0KHRoaXMuc2VydmVyQ29uZmlnLnJvb3RfdXJsICsgXCIvZ2FtZS9sb2dpblwiLCBwYXJhbXMpXHJcbiAgICAgICAgaWYgKHJlcyA9PSBOZXQuQ29kZS5UaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi55m76ZmG5aSx6LSlXCIsIHRoaXMucmV0cnlfY291bnQpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmV0ID0gSlNPTi5wYXJzZShyZXMpIGFzIExvZ2luUmV0O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLnmbvpmYbov5Tlm55cIiwgcmV0KTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50LnNldEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgcmV0LmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnmbvpmYbmiJDlip8nLCByZXQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbmVkX3VzZUlkID0gcmV0LmRhdGEub3BlbklkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV0cnlfY291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8gPSByZXQuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi55m76ZmG5aSx6LSlXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIueZu+mZhuWksei0pVwiLCB0aGlzLnJldHJ5X2NvdW50KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy/ph43mlrDnmbvpmYYgXHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5yZXRyeV9jb3VudCA8PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5yZXRyeV9jb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiBhd2FpdCB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBzeW5jRGF0YSh2LCBvcGVuSWQ/KSB7XHJcbiAgICAgICAgaWYgKG9wZW5JZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChXZWFrTmV0R2FtZS5pc0xvZ2dlZEluKSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuSWQgPSB0aGlzLmxvZ2luZWRfdXNlSWQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKFwi5LiK5Lyg5pWw5o2u77yB77yM5pyq55m76ZmG5LiU5pyq5oyH5a6a55So5oi3aWRcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5zeW5jRGF0YVRvVGFibGUodiwgJ3VzZXInLCBvcGVuSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LiK5Lyg5pWw5o2u5Yiw5oyH5a6a6L+c56uv5pyN5Yqh5ZmoIFxyXG4gICAgICogQHBhcmFtIHYg5pWw5o2uIFxyXG4gICAgICogQHBhcmFtIHRhYmxlICDmjIflrprooahcclxuICAgICAqIEBwYXJhbSBpZCAg5pWw5o2uaWQgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhc3luYyBzeW5jRGF0YVRvVGFibGUodiwgdGFibGUsIGlkPykge1xyXG4gICAgICAgIGlmIChpZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oXCLkuIrkvKDmlbDmja7vvIHmnKrmjIflrpppZCAhXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCB0aGlzLmNsaWVudC5odHRwUHV0KHRoaXMuc2VydmVyQ29uZmlnLnJvb3RfdXJsICsgXCIvXCIgKyB0YWJsZSArIFwiL1wiICsgaWQsIHYpXHJcbiAgICAgICAgaWYgKHJlcyA9PSBOZXQuQ29kZS5UaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5LiK5Lyg5pWw5o2uIOi2heaXti4uLi5cIilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJldCA9IEpTT04ucGFyc2UocmVzKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJldCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi5ZCM5q2l5pWw5o2u5aSx6LSlXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGxvYWRVc2VySW5mbygpIHtcclxuICAgICAgICAvL+aLieWPlueUqOaIt+aVsOaNrlxyXG4gICAgICAgIGlmICghdGhpcy5pc0xvZ2dlZEluKSByZXR1cm4gY29uc29sZS53YXJuKFwi5ouJ5Y+W5pWw5o2u5pe277ya5pyq55m75b2VXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLnVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVzZXJJbmZvXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5ouJ5Y+W55So5oi35pWw5o2uXCIpXHJcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IHRoaXMuY2xpZW50Lmh0dHBHZXQodGhpcy5zZXJ2ZXJDb25maWcucm9vdF91cmwgKyBcIi91c2VyL1wiICsgdGhpcy5sb2dpbmVkX3VzZUlkKVxyXG4gICAgICAgIGlmIChyZXMgPT0gTmV0LkNvZGUuVGltZW91dCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51c2VySW5mbztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmV0ID0gSlNPTi5wYXJzZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXQuZXJybm8pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51c2VySW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0VmlkZW9XYXRjaGVkQ291bnQoYykge1xyXG4gICAgICAgIHRoaXMudmlkZW9fd2F0Y2hlZF9jb3VudCA9IGM7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJfX3ZpZGVvX3dhdGNoZWRfY291bnRfX1wiLCB0aGlzLnZpZGVvX3dhdGNoZWRfY291bnQgKyBcIlwiKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiX192aWRlb193YXRjaGVkX2RhdGVfX1wiLCBEYXRlLm5vdygpLnRvU3RyaW5nKCkpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBzZXRTaGFyZUZhaWxDb3VudChjKSB7XHJcbiAgICAgICAgdGhpcy5zaGFyZV9mYWlsX2NvdW50ID0gYztcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIl9zaGFyZV9mYWlsX2NvdW50X1wiLCB0aGlzLnNoYXJlX2ZhaWxfY291bnQgKyBcIlwiKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiX3NoYXJlX2ZhaWxfZGF0ZV9cIiwgRGF0ZS5ub3coKS50b1N0cmluZygpKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgc2V0U2hhcmVTdWNjQ291bnQoYykge1xyXG4gICAgICAgIHRoaXMuc2hhcmVfc3VjY19jb3VudCA9IGM7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJfc2hhcmVfc3VjY19jb3VudF9cIiwgdGhpcy5zaGFyZV9zdWNjX2NvdW50ICsgXCJcIilcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIl9zaGFyZV9zdWNjX2RhdGVfXCIsIERhdGUubm93KCkudG9TdHJpbmcoKSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW5pdFVzZXJEYXRhKCkge1xyXG4gICAgICAgIGxldCB2aWRlb193YXRjaGVkX2NvdW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ19fdmlkZW9fd2F0Y2hlZF9jb3VudF9fJylcclxuICAgICAgICBsZXQgdmlkZW9fd2F0Y2hlZF9kYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJfX3ZpZGVvX3dhdGNoZWRfZGF0ZV9fXCIpXHJcbiAgICAgICAgbGV0IGZhaWxfc2hhcmVfY291bnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnX3NoYXJlX2ZhaWxfY291bnRfJylcclxuICAgICAgICBsZXQgZmFpbF9zaGFyZV9kYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJfc2hhcmVfZmFpbF9kYXRlX1wiKVxyXG5cclxuICAgICAgICBsZXQgc3VjY19zaGFyZV9jb3VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdfc2hhcmVfc3VjY19jb3VudF8nKVxyXG4gICAgICAgIGxldCBzdWNjX3NoYXJlX2RhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIl9zaGFyZV9zdWNjX2RhdGVfXCIpXHJcblxyXG4gICAgICAgIGxldCBkID0gcGFyc2VJbnQodmlkZW9fd2F0Y2hlZF9kYXRlKVxyXG4gICAgICAgIGxldCBjID0gcGFyc2VJbnQodmlkZW9fd2F0Y2hlZF9jb3VudClcclxuICAgICAgICBpZiAoaXNOYU4oYykpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRWaWRlb1dhdGNoZWRDb3VudCgwKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9fd2F0Y2hlZF9jb3VudCA9IGNcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc05hTihkKSkge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZVV0aWwuaXNOZXh0RGF5KGQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZpZGVvV2F0Y2hlZENvdW50KDApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGQgPSBwYXJzZUludChmYWlsX3NoYXJlX2RhdGUpXHJcbiAgICAgICAgYyA9IHBhcnNlSW50KGZhaWxfc2hhcmVfY291bnQpXHJcbiAgICAgICAgaWYgKGlzTmFOKGMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2hhcmVGYWlsQ291bnQoMClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNoYXJlX2ZhaWxfY291bnQgPSBjXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXNOYU4oZCkpIHtcclxuICAgICAgICAgICAgaWYgKGdhbWVVdGlsLmlzTmV4dERheShkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTaGFyZUZhaWxDb3VudCgwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkID0gcGFyc2VJbnQoc3VjY19zaGFyZV9jb3VudClcclxuICAgICAgICBjID0gcGFyc2VJbnQoc3VjY19zaGFyZV9kYXRlKVxyXG4gICAgICAgIGlmIChpc05hTihjKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFNoYXJlU3VjY0NvdW50KDApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaGFyZV9zdWNjX2NvdW50ID0gY1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWlzTmFOKGQpKSB7XHJcbiAgICAgICAgICAgIGlmIChnYW1lVXRpbC5pc05leHREYXkoZCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2hhcmVTdWNjQ291bnQoMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW5pdENvbmZpZyhjb25mKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJDb25maWcgPSBjb25mO1xyXG4gICAgICAgIHRoaXMuY2xpZW50LnNldFRpbWVvdXQoMjUwMClcclxuICAgICAgICBjb25zb2xlLmxvZyhcIltXZWFrTmV0R2FtZV3liqDovb3phY3nva7mlofku7ZcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhjb25mKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZG9Mb2dpbihwcm9ncmVzc0NhbGxiYWNrPyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzSW5pdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltXZWFrTmV0R2FtZV3lvIDlp4vnmbvpmYZcIilcclxuICAgICAgICAgICAgV2Vha05ldEdhbWUuaW5pdFVzZXJEYXRhKClcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNlcnZlckNvbmZpZy5pc19sb2NhbF9nYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0NhbGxiYWNrICYmIHByb2dyZXNzQ2FsbGJhY2soXCJjb25maWdcIik7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBXZWFrTmV0R2FtZS5yZXF1ZXN0Q29uZmlnKClcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzQ2FsbGJhY2sgJiYgcHJvZ3Jlc3NDYWxsYmFjayhcImxvY2FsX2NzdlwiKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IFdlYWtOZXRHYW1lLmxvYWRMb2NhbENzdnMoXyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvZ3Jlc3NDYWxsYmFjayAmJiBwcm9ncmVzc0NhbGxiYWNrKCdsb2NhbF9jc3ZfbG9hZGVkJywgXyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NDYWxsYmFjayAmJiBwcm9ncmVzc0NhbGxiYWNrKFwiY3N2XCIpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgV2Vha05ldEdhbWUuZG93bmxvYWRDc3ZzKClcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXJ2ZXJDb25maWcuaXNfbm9ybWFsX2xvZ2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NDYWxsYmFjayAmJiBwcm9ncmVzc0NhbGxiYWNrKFwibG9naW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgV2Vha05ldEdhbWUubG9naW4oKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKENDX1dFQ0hBVEdBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0NhbGxiYWNrICYmIHByb2dyZXNzQ2FsbGJhY2soXCJzaGFyZV9jb25maWdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgV2Vha05ldEdhbWUucmVxdWVzdFNoYXJlQ29uZmlnKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgUGxhdGZvcm0uaW5pdFNoYXJlKHRoaXMuc2hhcmVDb25maWdzWydkZWZhdWx0J10sIHRoaXMubG9naW5lZF91c2VJZClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v5qOA5rWLIGlwIFxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzTG9nZ2VkSW4pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzSW5pdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0NhbGxiYWNrICYmIHByb2dyZXNzQ2FsbGJhY2soXCJjb21wbGV0ZVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBXZWFrTmV0R2FtZS5sb2FkVXNlckluZm8oKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0luaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNzdi5sb2FkRGlyKFwiQ29uZmlnL2NzdlwiLCByZXNvbHZlKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDop4bpopF25qyh5ZCO5YiG5Lqrc+asoe+8jOeEtuWQjuW+queOr++8m1xyXG4gICAgICogQHBhcmFtIGEgIOW9k+WJjeaJp+ihjOS6huWHoOasoVxyXG4gICAgICogQHBhcmFtIHYgIOinhumikXbmrKFcclxuICAgICAqIEBwYXJhbSBzICDliIbkuqtz5qyhXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjaGVjayhhLCB0MSwgYzEsIHQyLCBjMikge1xyXG4gICAgICAgIGxldCBjID0gYzEgKyBjMiArIDE7XHJcbiAgICAgICAgYSA9IGEgJSBjO1xyXG4gICAgICAgIGlmIChhID49IGMxKSByZXR1cm4gdDI7XHJcbiAgICAgICAgZWxzZSBpZiAoYSA8PSBjMSkgcmV0dXJuIHQxO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDaG9pY2Uoa2V5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmlkZW9fd2F0Y2hlZF9jb3VudCA+PSB0aGlzLm1heF92aWRlb193YXRjaCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHZhbCA9IGtleVxyXG4gICAgICAgIGlmICh0eXBlb2YgKGtleSkgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBpZiAoY3N2LkNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgdmFsID0gY3N2LkNvbmZpZ1trZXldO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFsID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2hvaWNlID0gTnVtYmVyKHZhbClcclxuICAgICAgICBpZiAoaXNOYU4oY2hvaWNlKSkge1xyXG4gICAgICAgICAgICAvLyAwPTMsMT00IFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IFtbdDEsIGMxXSwgW3QyLCBjMl1dID0gdmFsLnNwbGl0KFwiLFwiKS5tYXAodiA9PiB2LnNwbGl0KFwiPVwiKS5tYXAoeCA9PiBwYXJzZUludCh4KSkpXHJcbiAgICAgICAgICAgICAgICBsZXQgYyA9IFNvdkluZm8uZ2V0Q291bnQoa2V5KVxyXG4gICAgICAgICAgICAgICAgY2hvaWNlID0gdGhpcy5jaGVjayhjLCB0MSwgYzEsIHQyLCBjMilcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIumFjee9rumUmeivr++8muivt+ajgOa1i+WQjuWPsOmFjee9ru+8gVwiICsgXCJbXCIgKyBrZXkgKyBcIl0gPSBcIiArIHZhbCk7XHJcbiAgICAgICAgICAgICAgICBjaG9pY2UgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWwgPT0gMikge1xyXG4gICAgICAgICAgICBjaG9pY2UgPSBnLnJhbmRvbUludCgwLCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNob2ljZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0X3NhZmVfY2hlY2tfY2FsbGJhY2soY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLl9jaGVja19zYWZlX2NhbGxiYWNrID0gY2FsbGJhY2tcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGlzX3NhZmVfbW9kZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2NoZWNrX3NhZmVfY2FsbGJhY2spIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tfc2FmZV9jYWxsYmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWPquS/neWtmOW9k+WJjXNlc3Npb24gKi9cclxuICAgIHByaXZhdGUgc3RhdGljIF9zaGFyZWRVVUlEcyA9IHt9XHJcblxyXG4gICAgc3RhdGljIGdldCBzaGFyZWRVVUlEcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2hhcmVkVVVJRHM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGlzVmFsaWRTaGFyZSh1dWlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NoYXJlZFVVSURzW3V1aWRdICE9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2xhaW1lZFVVSURzID0ge31cclxuXHJcbiAgICBzdGF0aWMgaXNDbGFpbWVkU2hhcmUodXVpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xhaW1lZFVVSURzW3V1aWRdICE9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2xhaW1TaGFyZSh1dWlkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmNsYWltZWRVVUlEc1t1dWlkXSA9IHV1aWQ7XHJcbiAgICAgICAgbGV0IGNhbGxiYWNrID0gdGhpcy5fc2hhcmVkVVVJRHNbdXVpZF1cclxuICAgICAgICBpZiAoY2FsbGJhY2spXHJcbiAgICAgICAgICAgIGNhbGxiYWNrKClcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2hhcmVfZmFpbF90ZXh0cyA9IFsn5YiG5Lqr5aSx6LSl77yM6K+35YiG5Lqr5YiwMzDkurrnvqQnLCAn5YiG5Lqr5aSx6LSl77yM6K+35YiG5Lqr5Yiw5paw55qE576kJ11cclxuXHJcbiAgICBzdGF0aWMgZG9DaG9pY2Uoa2V5OiBhbnksIGNhbGxiYWNrLCB0YXJnZXQ/LCBmYWlsX2NhbGxiYWNrPykge1xyXG4gICAgICAgIGxldCBjaG9pY2UgPSB0aGlzLmdldENob2ljZShrZXkpO1xyXG4gICAgICAgIC8v5Y+R6YCB57uZ5oyH5a6a5aW95Y+LXHJcbiAgICAgICAgLy9odHRwczovL2RldmVsb3BlcnMud2VpeGluLnFxLmNvbS9taW5pZ2FtZS9kZXYvYXBpL29wZW4tYXBpL2RhdGEvd3guc2hhcmVNZXNzYWdlVG9GcmllbmQuaHRtbFxyXG4gICAgICAgIGxldCBzaGFyZVRvRnJpZW5kID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBsZXQgc2hhcmVDZmcgPSB0aGlzLnNoYXJlQ29uZmlnc1snZGVmYXVsdCddIGFzIFNoYXJlSW5mb1xyXG4gICAgICAgICAgICAvLyBsZXQgaW1hZ2VVcmwgPSBzaGFyZUNmZy5pbWFnZVVybDtcclxuICAgICAgICAgICAgLy8gbGV0IGltYWdlVXJsSWQgPSBcIlwiOy8vP+WuoeaguOmAmui/h+eahOWbvueJhyBJRO+8jOivpuingWh0dHBzOi8vZGV2ZWxvcGVycy53ZWl4aW4ucXEuY29tL21pbmlnYW1lL2Rldi9ndWlkZS9vcGVuLWFiaWxpdHkvc2hhcmUvc2hhcmUuaHRtbCMlRTQlQkQlQkYlRTclOTQlQTglRTUlQUUlQTElRTYlQTAlQjglRTklODAlOUElRTglQkYlODclRTclOUElODQlRTglQkQlQUMlRTUlOEYlOTElRTUlOUIlQkUlRTclODklODdcclxuICAgICAgICAgICAgLy8gUGxhdGZvcm0uc2VuZE1lc3NhZ2VUb09wZW4oXCJzaGFyZU1lc3NhZ2VUb0ZyaWVuZFwiLCB7IGltYWdlVXJsLCBpbWFnZVVybElkIH0pXHJcbiAgICAgICAgICAgIC8vIGV2dC5lbWl0KFwid3guc2hhcmVNZXNzYWdlVG9GcmllbmRcIiwgZnVuY3Rpb24oKSB7fSk7aWZcclxuICAgICAgICAgICAgLy8gMi4g5b2T546p5a625b2T5pel5pmu6YCa5YiG5Lqr6I635Yip6LaF6L+HM+asoeWQju+8jOe7meWHunRvYXN05o+Q56S677ya5pqC5peg5Y+v55So6KeG6aKR77yM6K+356iN5ZCO5YaN6K+Vfu+8m1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zaGFyZV9zdWNjX2NvdW50ID49IDMpIHtcclxuICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2UoXCLmmoLml6Dlj6/nlKjop4bpopHvvIzor7fnqI3lkI7lho3or5UgIVwiKVxyXG4gICAgICAgICAgICAgICAgZmFpbF9jYWxsYmFjayAmJiBmYWlsX2NhbGxiYWNrLmNhbGwoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNoYXJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB3YXRjaCA9ICgpID0+IHtcclxuICAgICAgICAgICAgUGxhdGZvcm0ud2F0Y2hfdmlkZW8oXyA9PiB7XHJcbiAgICAgICAgICAgICAgICBTb3ZJbmZvLmludm9rZShrZXkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb193YXRjaGVkX2NvdW50KytcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmlkZW9XYXRjaGVkQ291bnQodGhpcy52aWRlb193YXRjaGVkX2NvdW50KVxyXG4gICAgICAgICAgICAgICAgZXZ0LmVtaXQoXCJXZWFrTmV0R2FtZS53YXRjaF92aWRlb1wiLCB0aGlzLnZpZGVvX3dhdGNoZWRfY291bnQpXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjay5jYWxsKHRhcmdldCwgJ3ZpZGVvJylcclxuXHJcbiAgICAgICAgICAgIH0sIHRhcmdldCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gMS4g5b2T6I635Yip54K55LiN6IO95q2j5bi45ouJ6LW36KeG6aKR5pe277yM6ZyA6KaB5YiH5o2i5Yiw5pmu6YCa5YiG5Lqr77ybXHJcbiAgICAgICAgICAgICAgICBzaGFyZVRvRnJpZW5kKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzaGFyZSA9IChiID0gZmFsc2UpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzX3NhZmVfbW9kZSkge1xyXG4gICAgICAgICAgICAgICAgd2F0Y2goKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzX2ZvcmJpZGRlbikge1xyXG4gICAgICAgICAgICAgICAgd2F0Y2goKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXVpZCA9IGcudXVpZCg4LCAxNilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaGFyZWRVVUlEc1t1dWlkXSA9IGNhbGxiYWNrLmJpbmQodGFyZ2V0LCAnc2hhcmVfbGlua19jbGljaycpO1xyXG4gICAgICAgICAgICAgICAgICAgIFBsYXRmb3JtLmRvU2hhcmVXaXRoUGFyYW1zKHsgdXVpZCwgc2hhcmVfbGluazogdHJ1ZSB9LCB0aGlzLnNoYXJlQ29uZmlnc1trZXldLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrLmNhbGwodGFyZ2V0LCAnc2hhcmVfbGluaycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLzYuIOi/nue7reWIhuS6q+Wksei0pTPmrKHlkI7vvIznrKw05qyh54K55Ye75Y675YiG5Lqr5oyJ6ZKu77yM55u05o6l5ouJ6LW36KeG6aKR77ybXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuc2hhcmVfZmFpbF9jb3VudCA+PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuc2V0U2hhcmVGYWlsQ291bnQoMClcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIHdhdGNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIFBsYXRmb3JtLmRvU2hhcmUodGhpcy5zaGFyZUNvbmZpZ3Nba2V5XSwgKG9rKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub3RGYWlsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKENDX1dFQ0hBVEdBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgdGhpcy5zaGFyZV9mYWlsX3JhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RGYWlsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9rICYmIG5vdEZhaWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U2hhcmVTdWNjQ291bnQoKyt0aGlzLnNoYXJlX3N1Y2NfY291bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldnQuZW1pdChcIldlYWtOZXRHYW1lLlNoYXJlU3VjY2Vzc1wiLCBrZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjay5jYWxsKHRhcmdldCwgJ3NoYXJlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb3ZJbmZvLmludm9rZShrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTaGFyZUZhaWxDb3VudCgrK3RoaXMuc2hhcmVfZmFpbF9jb3VudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWxfY2FsbGJhY2sgJiYgZmFpbF9jYWxsYmFjay5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldnQuZW1pdChcIldlYWtOZXRHYW1lLlNoYXJlRmFpbFwiLCBrZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQ0NfV0VDSEFUR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIuaPkOekulwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBnLmdldFJhbmRvbSh0aGlzLnNoYXJlX2ZhaWxfdGV4dHMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxUZXh0OiBcIuWPlua2iFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtVGV4dDogXCLljrvliIbkuqtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jYW5jZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+eCueWHu+WPlua2iCzpu5jorqTpmpDol4/lvLnmoYZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIuWIhuS6q+Wksei0pSEgLOivt+mHjeivlSFcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHRoaXMuc2hhcmVfc3VjY19kZWxheSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hvaWNlID09IDApIHtcclxuICAgICAgICAgICAgc2hhcmUoKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoY2hvaWNlID09IDEpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmlkZW9fd2F0Y2hlZF9jb3VudCA+PSB0aGlzLm1heF92aWRlb193YXRjaCkge1xyXG4gICAgICAgICAgICAgICAgc2hhcmUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdhdGNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGNob2ljZSA9PSAzKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrLmNhbGwodGFyZ2V0KVxyXG4gICAgICAgIH0gZWxzZSBpZiAoY2hvaWNlID09IDQpIHtcclxuICAgICAgICAgICAgLy8g6ZO+5o6l5YiG5LqrIO+8jOmcgOimgeeOqeWutueCueWHu+mTvuaOpeWQjuWujOaIkOaVtOS4quWIhuS6q+a1geeoi1xyXG4gICAgICAgICAgICBzaGFyZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxud2luZG93W1wiV2Vha05ldEdhbWVcIl0gPSBXZWFrTmV0R2FtZTsiXX0=