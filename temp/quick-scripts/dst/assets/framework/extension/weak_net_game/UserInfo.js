
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/weak_net_game/UserInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHdlYWtfbmV0X2dhbWVcXFVzZXJJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBOEQ7QUFDOUQsNkNBQXdDO0FBQ3hDLGlEQUE0QztBQUM1Qyx3Q0FBcUQ7QUFDckQsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFBO0FBRXpCO0lBQXdDLDhCQUFVO0lBQWxEO1FBQ0ksV0FBVztRQUNYLHdCQUF3QjtRQUY1QixxRUF5VkM7UUFyVkcsV0FBVztRQUNYLHVCQUF1QjtRQUV2QixXQUFXO1FBQ1gsb0JBQW9CO1FBR3BCLG1CQUFhLEdBQVcsQ0FBQyxDQUFBO1FBR3pCLHVCQUFpQixHQUFZLEtBQUssQ0FBQztRQUVuQyxtQkFBbUI7UUFFbkIsc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBRWpDLHlDQUF5QztRQUN6QyxjQUFjO1FBRWQsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsY0FBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixjQUFjO1FBRWQsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFFekIsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUdwQixlQUFTLEdBQVcsRUFBRSxDQUFDO1FBRXZCLFFBQVE7UUFFUixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRXJCLHlDQUF5QztRQUd6QyxvQkFBYyxHQUFXLENBQUMsQ0FBQztRQUUzQix5QkFBeUI7UUFFekIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFHekIsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUVuQixtQkFBbUI7UUFDbkIsV0FBSyxHQUFHLEtBQUssQ0FBQztRQUVkLFNBQVM7UUFDVCxxQkFBZSxHQUFHLElBQUksQ0FBQztRQUV2QixlQUFlO1FBRWYsdUJBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBRTlCLFVBQVU7UUFFVixV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O3NEQUNtQjtJQUkzQjtRQURDLGtCQUFLLEVBQUU7aURBQ2M7SUE3TEwsVUFBVTtRQUQ5QixlQUFFLENBQUMsVUFBVSxDQUFDO09BQ00sVUFBVSxDQXlWOUI7SUFBRCxpQkFBQztDQXpWRCxBQXlWQyxDQXpWdUMsb0JBQVUsR0F5VmpEO2tCQXpWb0IsVUFBVTtBQTZWcEIsUUFBQSxRQUFRLEdBQWUsb0JBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YUNlbnRlciwgeyBkYywgZmllbGQgfSBmcm9tIFwiLi4vLi4vY29yZS9EYXRhQ2VudGVyXCI7XHJcbmltcG9ydCBXZWFrTmV0R2FtZSBmcm9tIFwiLi9XZWFrTmV0R2FtZVwiO1xyXG5pbXBvcnQgZ2FtZVV0aWwgZnJvbSBcIi4uLy4uL3V0aWxzL2dhbWVVdGlsXCI7XHJcbmltcG9ydCBQbGF0Zm9ybSwgeyBBdXRoVXNlckluZm8gfSBmcm9tIFwiLi4vUGxhdGZvcm1cIjtcclxubGV0IGZpcnN0RW50ZXJIb21lID0gdHJ1ZVxyXG5AZGMoXCJVc2VySW5mb1wiKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mb0RDIGV4dGVuZHMgRGF0YUNlbnRlciB7XHJcbiAgICAvLyBAZmllbGQoKVxyXG4gICAgLy8gaXBfY25hbWU6IHN0cmluZyA9IFwiXCJcclxuXHJcbiAgICAvLyBAZmllbGQoKVxyXG4gICAgLy8gaXBfYWRkcjogc3RyaW5nID0gXCJcIlxyXG5cclxuICAgIC8vIEBmaWVsZCgpXHJcbiAgICAvLyBpcF9zOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBmaWVsZCgpXHJcbiAgICBsYXN0TG9naW5UaW1lOiBudW1iZXIgPSAwXHJcblxyXG4gICAgQGZpZWxkKClcclxuICAgIGlzRmlyc3RMb2dpblRvZGF5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoq6ZyA6KaB5Zyo6L+b5YWl5ZCO572u5Li6ZmFsc2UgKi9cclxuICAgIEBmaWVsZCgpXHJcbiAgICBpc0ZpcnN0RW50ZXJHYW1lOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvLz09PT09PT09PT09PT09PT0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLyoq5q+P5pel5YiG5Lqr5b2V5bGP5qyh5pWwICovXHJcbiAgICBAZmllbGQoKVxyXG4gICAgc2hhcmVjb3VudDogbnVtYmVyID0gMDtcclxuICAgIEBmaWVsZCgpXHJcbiAgICBuaWNrTmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICAvKirmr4/ml6XlsZXnpLrlvIDlsY/mrKHmlbAgKi9cclxuICAgIEBmaWVsZCgpXHJcbiAgICBrYWlwaW5nY291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBAZmllbGQoKVxyXG4gICAgdXNlcklkOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBAZmllbGQoKVxyXG4gICAgYXZhdGFyVXJsOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICAvL+e0r+iuoeWksei0peasoeaVsFxyXG4gICAgQGZpZWxkKClcclxuICAgIGxvc2VfbnVtOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIC8vPT09PT09PT09PT09PT09PS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgQGZpZWxkKClcclxuICAgIGZpcnN0TG9naW5UaW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKuacgOWQjuS4gOasoemAgOWHuua4uOaIjyDnmoTml7bpl7QgLOenkuS4uuWNleS9jSAgKi9cclxuICAgIEBmaWVsZCgpXHJcbiAgICBsYXN0RXhpdFRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQGZpZWxkKClcclxuICAgIGdlbmRlcjogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLyDvvIjmlrDnjqnlrrbvvInlvZPlpKnpgIDlh7rmuLjmiI/lho3ov5vkuZ/nrpcgXHJcbiAgICBpc05ldyA9IGZhbHNlO1xyXG5cclxuICAgIC8v5b2T5aSp56ys5LiA5qyh57uT566XXHJcbiAgICBpc0ZpcnN0R2FtZU92ZXIgPSB0cnVlO1xyXG5cclxuICAgIC8qKuesrOS4gOasoea4uOaIj+e7k+eul+aXtumXtCAqL1xyXG4gICAgQGZpZWxkKClcclxuICAgIEZpcnN0R2FtZU92ZXJUaW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKuaYr+WQpuiuoumYhSAqL1xyXG4gICAgQGZpZWxkKClcclxuICAgIGlzRHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgLyoq5piv5ZCm5a6i5pyN5Lya6K+dKi9cclxuICAgIEBmaWVsZCgpXHJcbiAgICBpc0tmOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoq5piv5ZCm5Yia5omN5omT5byA5a6i5pyNKi9cclxuICAgIHRtcElza2Y6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKirmmK/lkKbliJrmiY3miZPlvIDmlLbol48qL1xyXG4gICAgdG1wSXNTYzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKuaYr+WQpumihuWPlui/h+WuouacjeWlluWKsSAqL1xyXG4gICAgQGZpZWxkKClcclxuICAgIGlzR2V0S2Y6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKirov5vlhaXlrqLmnI3kvJror53nmoTml7bpl7QgKi9cclxuICAgIEBmaWVsZCgpXHJcbiAgICBrZlRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoq5piv5ZCm5re75Yqg5Yiw5oiR55qE5bCP56iL5bqPICovXHJcbiAgICBAZmllbGQoKVxyXG4gICAgaXNTYzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKuaYr+WQpumihuWPlui/h+aUtuiXj+WlluWKsSAqL1xyXG4gICAgQGZpZWxkKClcclxuICAgIGlzR2V0U2M6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKirmmK/lkKbkvb/nlKjov4fkvZPlipsgKi9cclxuICAgIEBmaWVsZCgpXHJcbiAgICBpc1VzZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8v5p6q55qE5pWw6YePXHJcbiAgICBAZmllbGQoKVxyXG4gICAgZ3VuX251bTogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvL+mbqueQg+eahOaVsOmHj1xyXG4gICAgQGZpZWxkKClcclxuICAgIHNub3diYWxsX251bTogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvL+ejgemTgeeahOaVsOmHj1xyXG4gICAgQGZpZWxkKClcclxuICAgIG1hZ25ldF9udW06IG51bWJlciA9IDA7XHJcblxyXG5cclxuICAgIC8v5piv5ZCm5LuO5byA5aeL5oyJ6ZKu6aKG5Y+WXHJcbiAgICBAZmllbGQoKVxyXG4gICAgaXNHZXRHdW5TdGFydDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8v5piv5ZCm5LuO57uT566X55WM6Z2i6aKG5Y+WXHJcbiAgICBAZmllbGQoKVxyXG4gICAgaXNHZXRHdW5FbmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvL+mihuWPluaequeahOaXtumXtFxyXG4gICAgQGZpZWxkKClcclxuICAgIGdldEd1blRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLy/ntK/orqHph43or5XmrKHmlbBcclxuICAgIEBmaWVsZCgpXHJcbiAgICByZXR1cm5fbnVtOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIC8v57Sv6K6h6YeN6K+V5qyh5pWw55qE5YWz5Y2hXHJcbiAgICBAZmllbGQoKVxyXG4gICAgcmV0dXJuX2xldmVsOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHJlY29yZF9wYXRoOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBzdGFydF90aW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcmVjb3JkX3RpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLy/lhY3otLnovaznm5jmrKHmlbBcclxuICAgIEBmaWVsZCgpXHJcbiAgICBmcmVlZHJhd1RpbWU6IG51bWJlciA9IDA7XHJcblxyXG5cclxuICAgIEBmaWVsZCgpXHJcbiAgICBhdXRoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy/pooblj5bmnqrlvLnnqpfnmoTmgLvmlbDph49cclxuICAgIEBmaWVsZCgpXHJcbiAgICBndW5WaWV3OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8v6aKG5Y+W5p6q5by556qX55qE5q+P5pelXHJcbiAgICBAZmllbGQoKVxyXG4gICAgZ3VuVmlld0RheTogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvL+a4uOaIj+S4u+mimFxyXG4gICAgQGZpZWxkKClcclxuICAgIHRoZW1lOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIC8v5aWz5a2p55qu6IKk5piv5ZCm5pyJ5bCa5pyq6aKG5Y+WXHJcbiAgICBAZmllbGQoKVxyXG4gICAgaXN1bmxvY2tfZ2lybDogbnVtYmVyID0gMDtcclxuICAgIEBmaWVsZCgpXHJcbiAgICBpc3VubG9ja19naXJsMTogbnVtYmVyID0gMDtcclxuICAgIEBmaWVsZCgpXHJcbiAgICBpc3VubG9ja19naXJsMjogbnVtYmVyID0gMDtcclxuICAgIEBmaWVsZCgpXHJcbiAgICBpc3VubG9ja19naXJsMzogbnVtYmVyID0gMDtcclxuICAgIEBmaWVsZCgpXHJcbiAgICBpc3VubG9ja19naXJsNDogbnVtYmVyID0gMDtcclxuICAgIEBmaWVsZCgpXHJcbiAgICBpc3VubG9ja19naXJsNTogbnVtYmVyID0gMDtcclxuXHJcblxyXG4gICAgLy/ogIHlpLTnmq7ogqTmmK/lkKbmnInlsJrmnKrpooblj5ZcclxuICAgIEBmaWVsZCgpXHJcbiAgICBpc3VubG9ja19tZW46IG51bWJlciA9IDA7XHJcbiAgICBAZmllbGQoKVxyXG4gICAgaXN1bmxvY2tfbWVuMTogbnVtYmVyID0gMDtcclxuICAgIEBmaWVsZCgpXHJcbiAgICBpc3VubG9ja19tZW4yOiBudW1iZXIgPSAwO1xyXG4gICAgQGZpZWxkKClcclxuICAgIGlzdW5sb2NrX21lbjM6IG51bWJlciA9IDA7XHJcbiAgICBAZmllbGQoKVxyXG4gICAgaXN1bmxvY2tfbWVuNDogbnVtYmVyID0gMDtcclxuICAgIEBmaWVsZCgpXHJcbiAgICBpc3VubG9ja19tZW41OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8v5ri45oiP5Li76aKY5piv5ZCm5pyJ5bCa5pyq6aKG5Y+WXHJcbiAgICBAZmllbGQoKVxyXG4gICAgaXN1bmxvY2tfdGhlbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLy/pkqXljJnkuLvpophcclxuICAgIEBmaWVsZCgpXHJcbiAgICB0aGVtZV9rZXk6IG51bWJlciA9IDE7XHJcblxyXG4gICAgLy8gLy/pppbmrKHmj5DnpLrnmq7ogqTlvLrliLblvJXlr7xcclxuICAgIC8vIEBmaWVsZCgpXHJcbiAgICAvLyBza2luX2d1aWRlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGdldCB1c2VyVHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc05ldyA/IFwiKOaWsOeOqeWutilcIiA6IFwiKOiAgeeOqeWutilcIlxyXG4gICAgfVxyXG5cclxuICAgIGV4aXRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMubGFzdEV4aXRUaW1lID0gRGF0ZS5ub3coKSAvIDEwMDA7XHJcbiAgICAgICAgdGhpcy5zYXZlKFwibGFzdEV4aXRUaW1lXCIpXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkQWxsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmZpcnN0TG9naW5UaW1lID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdExvZ2luVGltZSA9IERhdGUubm93KClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVVdGlsLmlzTmV4dERheSh0aGlzLmZpcnN0TG9naW5UaW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc05ldyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lVXRpbC5pc05leHREYXkodGhpcy5sYXN0TG9naW5UaW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RMb2dpblRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICB0aGlzLmlzRmlyc3RMb2dpblRvZGF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc1VzZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlzR2V0R3VuU3RhcnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc0dldEd1bkVuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNoYXJlY291bnQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmthaXBpbmdjb3VudCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubG9zZV9udW0gPSAxXHJcbiAgICAgICAgICAgIHRoaXMucmV0dXJuX251bSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuZ3VuVmlld0RheSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0TG9naW5Ub2RheSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiAoZ2FtZVV0aWwuaXNOZXh0RGF5KHRoaXMuRHlUaW1lKSkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmlzRHkgPSBmYWxzZTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmlzRHkgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmlzR2V0RHkgPSBmYWxzZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKGdhbWVVdGlsLmlzTmV4dERheSh0aGlzLmtmVGltZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0tmID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lVXRpbC5pc05leHREYXkodGhpcy5GaXJzdEdhbWVPdmVyVGltZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0R2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdEdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0VtcHR5KHRoaXMudXNlcklkKSkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJJZCA9IGcudXVpZCgzMiwgMTYpXHJcbiAgICAgICAgICAgIC8vIFBsYXRmb3JtLnVzZXJJZCA9IHRoaXMudXNlcklkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNhdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LiK5Lyg55So5oi35pWw5o2uIFxyXG4gICAgICogQHBhcmFtIGt2cyBcclxuICAgICAqL1xyXG4gICAgYXN5bmMgdXBsb2FkVXNlckluZm8oa3ZzOiBPYmplY3QpIHtcclxuICAgICAgICAvL+S7heWvueaOiOadg+i/h+eahOeUqOaIt+i/m+ihjOaPkOS6pOaVsOaNrlxyXG4gICAgICAgIGlmIChpc0VtcHR5KFVzZXJJbmZvLnVzZXJJZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+W8gOWni+S4iuS8oFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBkID0ge1xyXG4gICAgICAgICAgICAgICAgLy8gdXNlcklkOiBVc2VySW5mby51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAvLyBuaWNrTmFtZTogVXNlckluZm8ubmlja05hbWUsXHJcbiAgICAgICAgICAgICAgICAvLyBhdmF0YXJVcmw6IFVzZXJJbmZvLmF2YXRhclVybCxcclxuICAgICAgICAgICAgICAgIC8vIGdlbmRlcjogVXNlckluZm8uZ2VuZGVyLFxyXG4gICAgICAgICAgICAgICAgLy8gY2hhbm5lbDogY2hhbm5lbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIGt2cykge1xyXG4gICAgICAgICAgICAgICAgZFtrXSA9IGt2c1trXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+S4iuS8oOaOiOadg+S/oeaBr1xyXG4gICAgICAgICAgICBhd2FpdCBXZWFrTmV0R2FtZS5zeW5jRGF0YShKU09OLnN0cmluZ2lmeShkKSlcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLkuIrkvKDmlbDmja7lpLHotKVcIiArIGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gLTI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiAg5ZyoIFd4Z2V0SW5mb0J1dHRvbiDnmoTmjInpkq7lm57osIPph4zmiafooYxcclxuICAgICAqIEBwYXJhbSBrdnMg6ZyA6KaB5LiK5Lyg55qEa2V5LXZhbHVlIOWvuSDmlbDmja5cclxuICAgICAqIEBwYXJhbSBhdXRoSW5mbyDku45XeGdldEluZm9CdXR0b24g5oyJ6ZKu5Zue6LCD6YeM6I635Y+W55qE5Y+C5pWwXHJcbiAgICAgKiBAcmV0dXJucyAwIOihqOekuuaIkOWKn+S4iuS8oCAsLSAx546p5a62IOacquaOiOadg++8jCAtMiAg5LiK5Lyg6L+H56iL5aSx6LSlXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIG9wZW5SYW5rQW5kVXBsb2FkKGt2czogT2JqZWN0LCBhdXRoSW5mbzogQXV0aFVzZXJJbmZvKSB7XHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLmF1dGggPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaWYgKCFhdXRoSW5mbykge1xyXG4gICAgICAgICAgICAgICAgYXV0aEluZm8gPSBhd2FpdCBQbGF0Zm9ybS5jaGVja0F1dGgoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vdXBkYXRlIHVzZXIgaW5mbyBcclxuICAgICAgICAgICAgaWYgKGF1dGhJbmZvID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIC8v546p5a625pyq5o6I5p2DXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL+W3suaOiOadgyBcclxuICAgICAgICAgICAgICAgIFVzZXJJbmZvLm5pY2tOYW1lID0gYXV0aEluZm8ubmlja05hbWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNFbXB0eShVc2VySW5mby51c2VySWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlckluZm8udXNlcklkID0gZy51dWlkKDMyLCAxNik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBVc2VySW5mby5nZW5kZXIgPSBhdXRoSW5mby5nZW5kZXI7XHJcbiAgICAgICAgICAgICAgICBVc2VySW5mby5hdmF0YXJVcmwgPSBhdXRoSW5mby5hdmF0YXJVcmw7XHJcbiAgICAgICAgICAgICAgICBVc2VySW5mby5hdXRoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8v5L+d5a2Y5o6I5p2D5L+h5oGvXHJcbiAgICAgICAgICAgICAgICBVc2VySW5mby5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhbm5lbCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKENDX1dFQ0hBVEdBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LnR0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWwgPSAndHQnXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cucXEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbCA9ICdxcSdcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsID0gJ3d4J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbCA9ICdzaW0nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoa3ZzID09IG51bGwpIHsga3ZzID0ge30gfVxyXG4gICAgICAgICAgICAgICAga3ZzW1wibmlja05hbWVcIl0gPSBVc2VySW5mby5uaWNrTmFtZTtcclxuICAgICAgICAgICAgICAgIGt2c1tcImF2YXRhclVybFwiXSA9IFVzZXJJbmZvLmF2YXRhclVybDtcclxuICAgICAgICAgICAgICAgIGt2c1tcImdlbmRlclwiXSA9IFVzZXJJbmZvLmdlbmRlcjtcclxuICAgICAgICAgICAgICAgIGt2c1snY2hhbm5lbCddID0gY2hhbm5lbDtcclxuICAgICAgICAgICAgICAgIGt2c1snYXV0aCddID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8v5byA5aeL5LiK5LygXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51cGxvYWRVc2VySW5mbyhrdnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzQXV0aE9rKCkge1xyXG4gICAgICAgIHJldHVybiAhaXNFbXB0eShVc2VySW5mby5uaWNrTmFtZSlcclxuICAgIH1cclxuICAgIC8qKuajgOafpeaYr+WQpuacieemu+e6v+aUtuebiiBcclxuICAgICAqIEByZXR1cm5zIOemu+e6v+aXtumXtCAgKHMpXHJcbiAgICAqL1xyXG4gICAgY2hlY2tPZmZsaW5lKCkge1xyXG4gICAgICAgIGlmIChmaXJzdEVudGVySG9tZSkge1xyXG4gICAgICAgICAgICBmaXJzdEVudGVySG9tZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gRGF0ZS5ub3coKSAvIDEwMDAgLSBVc2VySW5mby5sYXN0RXhpdFRpbWU7XHJcbiAgICAgICAgICAgIGlmIChvZmZzZXQgPiA2MCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mZnNldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBsZXQgVXNlckluZm86IFVzZXJJbmZvREMgPSBEYXRhQ2VudGVyLnJlZ2lzdGVyKFVzZXJJbmZvREMpO1xyXG4iXX0=