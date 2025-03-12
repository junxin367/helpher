"use strict";
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