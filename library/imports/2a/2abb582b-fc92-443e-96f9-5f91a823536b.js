"use strict";
cc._RF.push(module, '2abb5gr/JJEPpb5X5GoI1Nr', 'UserInfo');
// framework/extension/weak_net_game/UserInfo.ts

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
exports.UserInfo = void 0;
var DataCenter_1 = require("../../core/DataCenter");
var WeakNetGame_1 = require("./WeakNetGame");
var gameUtil_1 = require("../../utils/gameUtil");
var Platform_1 = require("../Platform");
var firstEnterHome = true;
var UserInfoDC = /** @class */ (function (_super) {
    __extends(UserInfoDC, _super);
    function UserInfoDC() {
        // @field()
        // ip_cname: string = ""
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @field()
        // ip_addr: string = ""
        // @field()
        // ip_s: number = 0;
        _this.lastLoginTime = 0;
        _this.isFirstLoginToday = false;
        /**需要在进入后置为false */
        _this.isFirstEnterGame = true;
        //================-----------------------
        /**每日分享录屏次数 */
        _this.sharecount = 0;
        _this.nickName = '';
        /**每日展示开屏次数 */
        _this.kaipingcount = 0;
        _this.userId = '';
        _this.avatarUrl = '';
        //累计失败次数
        _this.lose_num = 1;
        //================-----------------------
        _this.firstLoginTime = 0;
        /**最后一次退出游戏 的时间 ,秒为单位  */
        _this.lastExitTime = 0;
        _this.gender = 0;
        // （新玩家）当天退出游戏再进也算 
        _this.isNew = false;
        //当天第一次结算
        _this.isFirstGameOver = true;
        /**第一次游戏结算时间 */
        _this.FirstGameOverTime = 0;
        /**是否订阅 */
        _this.isDy = false;
        /**是否客服会话*/
        _this.isKf = false;
        /**是否刚才打开客服*/
        _this.tmpIskf = false;
        /**是否刚才打开收藏*/
        _this.tmpIsSc = false;
        /**是否领取过客服奖励 */
        _this.isGetKf = false;
        /**进入客服会话的时间 */
        _this.kfTime = 0;
        /**是否添加到我的小程序 */
        _this.isSc = false;
        /**是否领取过收藏奖励 */
        _this.isGetSc = false;
        /**是否使用过体力 */
        _this.isUse = false;
        //枪的数量
        _this.gun_num = 0;
        //雪球的数量
        _this.snowball_num = 0;
        //磁铁的数量
        _this.magnet_num = 0;
        //是否从开始按钮领取
        _this.isGetGunStart = false;
        //是否从结算界面领取
        _this.isGetGunEnd = false;
        //领取枪的时间
        _this.getGunTime = 0;
        //累计重试次数
        _this.return_num = 1;
        //累计重试次数的关卡
        _this.return_level = 0;
        _this.record_path = '';
        _this.start_time = 0;
        _this.record_time = 0;
        //免费转盘次数
        _this.freedrawTime = 0;
        _this.auth = false;
        //领取枪弹窗的总数量
        _this.gunView = 0;
        //领取枪弹窗的每日
        _this.gunViewDay = 0;
        //游戏主题
        _this.theme = 1;
        //女孩皮肤是否有尚未领取
        _this.isunlock_girl = 0;
        _this.isunlock_girl1 = 0;
        _this.isunlock_girl2 = 0;
        _this.isunlock_girl3 = 0;
        _this.isunlock_girl4 = 0;
        _this.isunlock_girl5 = 0;
        //老头皮肤是否有尚未领取
        _this.isunlock_men = 0;
        _this.isunlock_men1 = 0;
        _this.isunlock_men2 = 0;
        _this.isunlock_men3 = 0;
        _this.isunlock_men4 = 0;
        _this.isunlock_men5 = 0;
        //游戏主题是否有尚未领取
        _this.isunlock_theme = 0;
        //钥匙主题
        _this.theme_key = 1;
        return _this;
    }
    Object.defineProperty(UserInfoDC.prototype, "userType", {
        // //首次提示皮肤强制引导
        // @field()
        // skin_guide: number = 0;
        get: function () {
            return this.isNew ? "(新玩家)" : "(老玩家)";
        },
        enumerable: false,
        configurable: true
    });
    UserInfoDC.prototype.exitGame = function () {
        this.lastExitTime = Date.now() / 1000;
        this.save("lastExitTime");
    };
    UserInfoDC.prototype.onLoadAll = function () {
        if (this.firstLoginTime == 0) {
            this.firstLoginTime = Date.now();
        }
        if (gameUtil_1.default.isNextDay(this.firstLoginTime)) {
            this.isNew = false;
        }
        else {
            this.isNew = true;
        }
        if (gameUtil_1.default.isNextDay(this.lastLoginTime)) {
            this.lastLoginTime = Date.now();
            this.isFirstLoginToday = true;
            this.isUse = false;
            this.isGetGunStart = false;
            this.isGetGunEnd = false;
            this.sharecount = 0;
            this.kaipingcount = 0;
            this.lose_num = 1;
            this.return_num = 1;
            this.gunViewDay = 0;
        }
        else {
            this.isFirstLoginToday = false;
        }
        // if (gameUtil.isNextDay(this.DyTime)) {
        //     this.isDy = false;
        // } else {
        //     this.isDy = true;
        //     this.isGetDy = false;
        // }
        if (gameUtil_1.default.isNextDay(this.kfTime)) {
            this.isKf = false;
        }
        if (gameUtil_1.default.isNextDay(this.FirstGameOverTime)) {
            this.isFirstGameOver = true;
        }
        else {
            this.isFirstGameOver = false;
        }
        if (isEmpty(this.userId)) {
            this.userId = g.uuid(32, 16);
            // Platform.userId = this.userId;
        }
        this.save();
    };
    /**
     * 上传用户数据
     * @param kvs
     */
    UserInfoDC.prototype.uploadUserInfo = function (kvs) {
        return __awaiter(this, void 0, void 0, function () {
            var d, k, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //仅对授权过的用户进行提交数据
                        if (isEmpty(exports.UserInfo.userId)) {
                            return [2 /*return*/, -1];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        d = {
                        // userId: UserInfo.userId,
                        // nickName: UserInfo.nickName,
                        // avatarUrl: UserInfo.avatarUrl,
                        // gender: UserInfo.gender,
                        // channel: channel,
                        };
                        for (k in kvs) {
                            d[k] = kvs[k];
                        }
                        //上传授权信息
                        return [4 /*yield*/, WeakNetGame_1.default.syncData(JSON.stringify(d))];
                    case 2:
                        //上传授权信息
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error("上传数据失败" + e_1);
                        return [2 /*return*/, -2];
                    case 4: return [2 /*return*/, 0];
                }
            });
        });
    };
    /**
     *  在 WxgetInfoButton 的按钮回调里执行
     * @param kvs 需要上传的key-value 对 数据
     * @param authInfo 从WxgetInfoButton 按钮回调里获取的参数
     * @returns 0 表示成功上传 ,- 1玩家 未授权， -2  上传过程失败
     */
    UserInfoDC.prototype.openRankAndUpload = function (kvs, authInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var channel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(exports.UserInfo.auth == false)) return [3 /*break*/, 3];
                        if (!!authInfo) return [3 /*break*/, 2];
                        return [4 /*yield*/, Platform_1.default.checkAuth()];
                    case 1:
                        authInfo = _a.sent();
                        _a.label = 2;
                    case 2:
                        //update user info 
                        if (authInfo == null) {
                            //玩家未授权
                            return [2 /*return*/, -1];
                        }
                        else {
                            //已授权 
                            exports.UserInfo.nickName = authInfo.nickName;
                            if (isEmpty(exports.UserInfo.userId)) {
                                exports.UserInfo.userId = g.uuid(32, 16);
                            }
                            exports.UserInfo.gender = authInfo.gender;
                            exports.UserInfo.avatarUrl = authInfo.avatarUrl;
                            exports.UserInfo.auth = true;
                            //保存授权信息
                            exports.UserInfo.save();
                            channel = '';
                            if (CC_WECHATGAME) {
                                if (window.tt) {
                                    channel = 'tt';
                                }
                                else if (window.qq) {
                                    channel = 'qq';
                                }
                                else {
                                    channel = 'wx';
                                }
                            }
                            else {
                                channel = 'sim';
                            }
                            if (kvs == null) {
                                kvs = {};
                            }
                            kvs["nickName"] = exports.UserInfo.nickName;
                            kvs["avatarUrl"] = exports.UserInfo.avatarUrl;
                            kvs["gender"] = exports.UserInfo.gender;
                            kvs['channel'] = channel;
                            kvs['auth'] = true;
                            //开始上传
                            return [2 /*return*/, this.uploadUserInfo(kvs)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserInfoDC.prototype.isAuthOk = function () {
        return !isEmpty(exports.UserInfo.nickName);
    };
    /**检查是否有离线收益
     * @returns 离线时间  (s)
    */
    UserInfoDC.prototype.checkOffline = function () {
        if (firstEnterHome) {
            firstEnterHome = false;
            var offset = Date.now() / 1000 - exports.UserInfo.lastExitTime;
            if (offset > 60) {
                return offset;
            }
            return 0;
        }
    };
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "lastLoginTime", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "isFirstLoginToday", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "isFirstEnterGame", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "sharecount", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "nickName", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "kaipingcount", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "userId", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "avatarUrl", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "lose_num", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "firstLoginTime", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "lastExitTime", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "gender", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "FirstGameOverTime", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "isDy", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "isKf", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "isGetKf", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "kfTime", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "isSc", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "isGetSc", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "isUse", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "gun_num", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "snowball_num", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "magnet_num", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "isGetGunStart", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "isGetGunEnd", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "getGunTime", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "return_num", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "return_level", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "freedrawTime", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "auth", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "gunView", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "gunViewDay", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "theme", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "isunlock_girl", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "isunlock_girl1", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "isunlock_girl2", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "isunlock_girl3", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "isunlock_girl4", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "isunlock_girl5", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "isunlock_men", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "isunlock_men1", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "isunlock_men2", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "isunlock_men3", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "isunlock_men4", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "isunlock_men5", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "isunlock_theme", void 0);
    __decorate([
        DataCenter_1.field()
    ], UserInfoDC.prototype, "theme_key", void 0);
    UserInfoDC = __decorate([
        DataCenter_1.dc("UserInfo")
    ], UserInfoDC);
    return UserInfoDC;
}(DataCenter_1.default));
exports.default = UserInfoDC;
exports.UserInfo = DataCenter_1.default.register(UserInfoDC);

cc._RF.pop();