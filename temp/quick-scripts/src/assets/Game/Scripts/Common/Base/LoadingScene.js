"use strict";
cc._RF.push(module, 'de9c0ThpIRLg5fl6xvliSXs', 'LoadingScene');
// Game/Scripts/Common/Base/LoadingScene.ts

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
var LoadingSceneBase_1 = require("../../../../framework/misc/LoadingSceneBase");
var ServerConfig_1 = require("./ServerConfig");
var event_1 = require("../../../../framework/core/event");
var PlayerInfo_1 = require("./PlayerInfo");
var WeakNetGame_1 = require("../../../../framework/extension/weak_net_game/WeakNetGame");
var UserInfo_1 = require("../../../../framework/extension/weak_net_game/UserInfo");
var StatHelper_1 = require("../../../../framework/extension/aldsdk/StatHelper");
var Platform_1 = require("../../../../framework/extension/Platform");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var inited = false;
var LoadingScene = /** @class */ (function (_super) {
    __extends(LoadingScene, _super);
    function LoadingScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canRetry = false;
        return _this;
    }
    LoadingScene.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
    };
    LoadingScene.prototype.nextScene = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (inited) {
                    if (!window.tt) {
                        // this.loadSubPackage("Audio", '加载资源')
                        //await this.loadSubPackage("Img", "加载主场景资源");
                        //await this.loadSubPackage("ImagePart", "加载图片");
                        //await this.loadSubPackage("ui", "加载背景");
                        //await this.loadSubPackage("ske", "加载动画");
                    }
                }
                this.loadNextScene();
                event_1.evt.emit("Loading.Success");
                if (csv.Config.Forbid_Banner) {
                    Platform_1.default._bannerEnabled = false;
                }
                else {
                    Platform_1.default._bannerEnabled = true;
                }
                if (cc.sys.os == cc.sys.OS_IOS) {
                    if (UserInfo_1.UserInfo.kaipingcount < csv.Config.Show_Kaiping_AD) {
                        UserInfo_1.UserInfo.kaipingcount += 1;
                        UserInfo_1.UserInfo.save("kaipingcount");
                        // jsb.reflection.callStaticMethod("TXsdk", "showSplashAd");
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    //csv config share_config complete
    LoadingScene.prototype.loginProgress = function (evt, ext) {
        switch (evt) {
            case 'login':
                this.label.string = "登录中";
                this.progress = 0.1;
                break;
            case 'config':
                this.label.string = "加载配置";
                this.progress = 0.2;
                break;
            case 'local_csv':
                this.label.string = "加载本地配置";
                this.progress = 0.3;
                break;
            // case 'local_csv_loaded':
            //     this.label.string = "已加载配置(" + ext + ")"
            //     this.progress = 0.5;
            case "csv":
                this.label.string = "加载网络配置";
                this.progress = 0.5;
                break;
            case 'share_config':
                this.label.string = "加载分享配置";
                this.progress = 0.7;
                break;
            case "complete":
                this.label.string = "进入游戏...";
                this.progress = 0.8;
                break;
        }
    };
    LoadingScene.prototype.onClick = function () {
        if (this.canRetry) {
            this.startLogin();
            this.canRetry = false;
        }
    };
    LoadingScene.prototype.start = function () {
        this.startLogin();
    };
    LoadingScene.prototype.onDestroy = function () {
    };
    /**伪登录，仅用于记录是否点击卡片 */
    LoadingScene.prototype.checkScene = function () {
        if (CC_WECHATGAME) {
            var options = wx.getLaunchOptionsSync();
            if (options.scene == 1008) {
                var share_cardid = options.query['id'];
                if (share_cardid) {
                    StatHelper_1.default.sendPath("分享卡片点击人数", share_cardid);
                }
            }
            // let params = {
            //     query: options.query,
            //     scene: options.scene,
            //     userId: UserInfo.userId
            // }
            // // 告知服务器点的是谁的分享
            // net.httpPost(ServerConfig.root_url + "/game/enter", params)
        }
        else {
            //for test 模拟点击分享卡片
            // let params = {
            //     query: { id: 1, userId: "D2BFAF0530E53B74C6FB3B487B475D79", time: Date.now() },
            //     scene: 1008,
            //     userId: UserInfo.userId
            // }
            // let d = JSON.stringify(params);
            // // 告知服务器点的是谁的分享
            // net.httpGet(ServerConfig.root_url + "/game/enter?data=" + d)
        }
    };
    LoadingScene.prototype.startLogin = function () {
        var _this = this;
        //do init 
        if (!inited) {
            // if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.OS_ANDROID) {
            //     Platform.initSDK();
            // }
            WeakNetGame_1.default.initConfig(ServerConfig_1.ServerConfig);
            this.checkScene();
            //第一进入游戏 的loading 界面 
            if (!ServerConfig_1.ServerConfig.is_local_game) {
                WeakNetGame_1.default.downloadCsv("Config").then(function (v) {
                    console.log("加载Config成功！！");
                    csv.removeIndex("Config", "Key");
                    csv.createIndex("Config", "Key", "config_data");
                });
            }
            // if (PlayerInfo.isShowSDK()) {
            //     window['zzsdkui'].initSDK(0, '1.0.0', 'https://wxa.332831.com/xsl/wx92b8f834ef8fda71/v1.0.0/config.json', 'wx92b8f834ef8fda71', '', () => {
            //         console.log('sdk加载完成')
            //     });
            // }
        }
        // if (isEmpty(UserInfo.userId)) {
        //     UserInfo.userId = g.uuid(16, 16)
        //     UserInfo.save();
        // }
        if (!inited) {
            console.log("loading init !!!!!");
            // login using wx code ,
            //使用openid 登陆可以记录数据 
            WeakNetGame_1.default.doLogin(this.loginProgress.bind(this)).then(function (data) {
                inited = true;
                // 后设置索引 
                csv.removeIndex("Config", "Key");
                csv.createIndex("Config", "Key", "config_data");
                // check save timestamps 
                if (!data) {
                    //登录失败，也进入
                    event_1.evt.emit("Loading.Login");
                    _this.nextScene();
                    return;
                }
                var time = data.save_timestamps;
                //是否同步过
                if (time != null) {
                    //上一次同步时间 大于本地保存时间 
                    if (time > PlayerInfo_1.PlayerInfo.save_timestamps) {
                        //使用服务器数据
                        PlayerInfo_1.PlayerInfo.loadFromJsonObject(data);
                    }
                    else {
                        //使用本地数据
                        console.log("使用本地数据 ，服务器不是最新的");
                    }
                }
                else {
                    //同步本地数据 到服务器 
                    //如果还未初始化过,需要从服务器拉数据
                    if (PlayerInfo_1.PlayerInfo.inited == false) {
                        //新玩家使用服务器
                        PlayerInfo_1.PlayerInfo.loadFromJsonObject(data);
                    }
                    else {
                        //老玩家使用之前的userId
                        PlayerInfo_1.PlayerInfo.openId = data.openId;
                    }
                    // UserInfo.save();
                    // PlayerInfo.save(null, true);
                }
                // 如果已经订阅 说明已经领取奖励
                UserInfo_1.UserInfo.isDy = data.isDy ? data.isDy : false;
                event_1.evt.emit("Loading.Login", true);
                _this.nextScene();
            }).catch(function (e) {
                console.error(e);
                _this.progress = 0;
                _this.label.string = "\u767B\u5F55\u5931\u8D25\uFF0C\u70B9\u51FB\u5C4F\u5E55\u91CD\u8BD5\uFF01(" + e + ")";
            });
            // jsb.reflection.callStaticMethod("GDTsdk", "applicationDidBecomeActive");
        }
        else {
            this.loadNextScene();
            this.canRetry = true;
        }
    };
    LoadingScene = __decorate([
        ccclass
    ], LoadingScene);
    return LoadingScene;
}(LoadingSceneBase_1.default));
exports.default = LoadingScene;

cc._RF.pop();