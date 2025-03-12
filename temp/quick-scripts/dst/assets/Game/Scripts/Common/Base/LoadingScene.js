
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Common/Base/LoadingScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcQ29tbW9uXFxCYXNlXFxMb2FkaW5nU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0ZBQTJFO0FBQzNFLCtDQUE4QztBQUM5QywwREFBdUQ7QUFDdkQsMkNBQTBDO0FBQzFDLHlGQUFvRjtBQUNwRixtRkFBa0Y7QUFDbEYsZ0ZBQTJFO0FBQzNFLHFFQUFnRTtBQUUxRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFHbkI7SUFBMEMsZ0NBQWdCO0lBQTFEO1FBQUEscUVBZ05DO1FBOU1HLGNBQVEsR0FBWSxLQUFLLENBQUM7O0lBOE05QixDQUFDO0lBM01HLDZCQUFNLEdBQU47UUFDSSxpQkFBTSxNQUFNLFdBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBR2pFLENBQUM7SUFFSyxnQ0FBUyxHQUFmOzs7Z0JBQ0ksSUFBSSxNQUFNLEVBQUU7b0JBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7d0JBQ1osdUNBQXVDO3dCQUN2Qyw4Q0FBOEM7d0JBQzlDLGlEQUFpRDt3QkFDakQsMENBQTBDO3dCQUMxQywyQ0FBMkM7cUJBQzlDO2lCQUNKO2dCQUNELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtnQkFDcEIsV0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO2dCQUMzQixJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFO29CQUMxQixr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Q0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNyQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxDQUFDO2dCQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ2hCLEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyw4RUFBZ0IsQ0FBQyxNQUFHLENBQUE7WUFDNUMsQ0FBQyxDQUFDLENBQUE7WUFDRiwyRUFBMkU7U0FHOUU7YUFBTTtZQUNILElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN4QjtJQUVMLENBQUM7SUE5TWdCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FnTmhDO0lBQUQsbUJBQUM7Q0FoTkQsQUFnTkMsQ0FoTnlDLDBCQUFnQixHQWdOekQ7a0JBaE5vQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvYWRpbmdTY2VuZUJhc2UgZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1ld29yay9taXNjL0xvYWRpbmdTY2VuZUJhc2VcIjtcclxuaW1wb3J0IHsgU2VydmVyQ29uZmlnIH0gZnJvbSBcIi4vU2VydmVyQ29uZmlnXCI7XHJcbmltcG9ydCB7IGV2dCB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZXdvcmsvY29yZS9ldmVudFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4vUGxheWVySW5mb1wiO1xyXG5pbXBvcnQgV2Vha05ldEdhbWUgZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9XZWFrTmV0R2FtZVwiO1xyXG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvVXNlckluZm9cIjtcclxuaW1wb3J0IFN0YXRIZXBsZXIgZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vYWxkc2RrL1N0YXRIZWxwZXJcIjtcclxuaW1wb3J0IFBsYXRmb3JtIGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL1BsYXRmb3JtXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxubGV0IGluaXRlZCA9IGZhbHNlO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZ1NjZW5lIGV4dGVuZHMgTG9hZGluZ1NjZW5lQmFzZSB7XHJcblxyXG4gICAgY2FuUmV0cnk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHN1cGVyLm9uTG9hZCgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25DbGljaywgdGhpcylcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG5leHRTY2VuZSgpIHtcclxuICAgICAgICBpZiAoaW5pdGVkKSB7XHJcbiAgICAgICAgICAgIGlmICghd2luZG93LnR0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmxvYWRTdWJQYWNrYWdlKFwiQXVkaW9cIiwgJ+WKoOi9vei1hOa6kCcpXHJcbiAgICAgICAgICAgICAgICAvL2F3YWl0IHRoaXMubG9hZFN1YlBhY2thZ2UoXCJJbWdcIiwgXCLliqDovb3kuLvlnLrmma/otYTmupBcIik7XHJcbiAgICAgICAgICAgICAgICAvL2F3YWl0IHRoaXMubG9hZFN1YlBhY2thZ2UoXCJJbWFnZVBhcnRcIiwgXCLliqDovb3lm77niYdcIik7XHJcbiAgICAgICAgICAgICAgICAvL2F3YWl0IHRoaXMubG9hZFN1YlBhY2thZ2UoXCJ1aVwiLCBcIuWKoOi9veiDjOaZr1wiKTtcclxuICAgICAgICAgICAgICAgIC8vYXdhaXQgdGhpcy5sb2FkU3ViUGFja2FnZShcInNrZVwiLCBcIuWKoOi9veWKqOeUu1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvYWROZXh0U2NlbmUoKVxyXG4gICAgICAgIGV2dC5lbWl0KFwiTG9hZGluZy5TdWNjZXNzXCIpXHJcbiAgICAgICAgaWYgKGNzdi5Db25maWcuRm9yYmlkX0Jhbm5lcikge1xyXG4gICAgICAgICAgICBQbGF0Zm9ybS5fYmFubmVyRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFBsYXRmb3JtLl9iYW5uZXJFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKSB7XHJcbiAgICAgICAgICAgIGlmIChVc2VySW5mby5rYWlwaW5nY291bnQgPCBjc3YuQ29uZmlnLlNob3dfS2FpcGluZ19BRCkge1xyXG4gICAgICAgICAgICAgICAgVXNlckluZm8ua2FpcGluZ2NvdW50ICs9IDE7XHJcbiAgICAgICAgICAgICAgICBVc2VySW5mby5zYXZlKFwia2FpcGluZ2NvdW50XCIpO1xyXG4gICAgICAgICAgICAgICAgLy8ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIlRYc2RrXCIsIFwic2hvd1NwbGFzaEFkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL2NzdiBjb25maWcgc2hhcmVfY29uZmlnIGNvbXBsZXRlXHJcbiAgICBsb2dpblByb2dyZXNzKGV2dCwgZXh0KSB7XHJcbiAgICAgICAgc3dpdGNoIChldnQpIHtcclxuICAgICAgICAgICAgY2FzZSAnbG9naW4nOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIueZu+W9leS4rVwiXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gMC4xO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NvbmZpZyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IFwi5Yqg6L296YWN572uXCJcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwLjI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbG9jYWxfY3N2JzpcclxuICAgICAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gXCLliqDovb3mnKzlnLDphY3nva5cIlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDAuMztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyBjYXNlICdsb2NhbF9jc3ZfbG9hZGVkJzpcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMubGFiZWwuc3RyaW5nID0gXCLlt7LliqDovb3phY3nva4oXCIgKyBleHQgKyBcIilcIlxyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5wcm9ncmVzcyA9IDAuNTtcclxuICAgICAgICAgICAgY2FzZSBcImNzdlwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIuWKoOi9vee9kee7nOmFjee9rlwiXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gMC41O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NoYXJlX2NvbmZpZyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IFwi5Yqg6L295YiG5Lqr6YWN572uXCJcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwLjc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNvbXBsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IFwi6L+b5YWl5ri45oiPLi4uXCJcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwLjg7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FuUmV0cnkpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydExvZ2luKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUmV0cnkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydExvZ2luKClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuS8queZu+W9le+8jOS7heeUqOS6juiusOW9leaYr+WQpueCueWHu+WNoeeJhyAqL1xyXG4gICAgY2hlY2tTY2VuZSgpIHtcclxuICAgICAgICBpZiAoQ0NfV0VDSEFUR0FNRSkge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHd4LmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNjZW5lID09IDEwMDgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzaGFyZV9jYXJkaWQgPSBvcHRpb25zLnF1ZXJ5WydpZCddO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNoYXJlX2NhcmRpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIFN0YXRIZXBsZXIuc2VuZFBhdGgoXCLliIbkuqvljaHniYfngrnlh7vkurrmlbBcIiwgc2hhcmVfY2FyZGlkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIC8vICAgICBxdWVyeTogb3B0aW9ucy5xdWVyeSxcclxuICAgICAgICAgICAgLy8gICAgIHNjZW5lOiBvcHRpb25zLnNjZW5lLFxyXG4gICAgICAgICAgICAvLyAgICAgdXNlcklkOiBVc2VySW5mby51c2VySWRcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyAvLyDlkYrnn6XmnI3liqHlmajngrnnmoTmmK/osIHnmoTliIbkuqtcclxuICAgICAgICAgICAgLy8gbmV0Lmh0dHBQb3N0KFNlcnZlckNvbmZpZy5yb290X3VybCArIFwiL2dhbWUvZW50ZXJcIiwgcGFyYW1zKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vZm9yIHRlc3Qg5qih5ouf54K55Ye75YiG5Lqr5Y2h54mHXHJcbiAgICAgICAgICAgIC8vIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIC8vICAgICBxdWVyeTogeyBpZDogMSwgdXNlcklkOiBcIkQyQkZBRjA1MzBFNTNCNzRDNkZCM0I0ODdCNDc1RDc5XCIsIHRpbWU6IERhdGUubm93KCkgfSxcclxuICAgICAgICAgICAgLy8gICAgIHNjZW5lOiAxMDA4LFxyXG4gICAgICAgICAgICAvLyAgICAgdXNlcklkOiBVc2VySW5mby51c2VySWRcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgLy8gbGV0IGQgPSBKU09OLnN0cmluZ2lmeShwYXJhbXMpO1xyXG4gICAgICAgICAgICAvLyAvLyDlkYrnn6XmnI3liqHlmajngrnnmoTmmK/osIHnmoTliIbkuqtcclxuICAgICAgICAgICAgLy8gbmV0Lmh0dHBHZXQoU2VydmVyQ29uZmlnLnJvb3RfdXJsICsgXCIvZ2FtZS9lbnRlcj9kYXRhPVwiICsgZClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRMb2dpbigpIHtcclxuICAgICAgICAvL2RvIGluaXQgXHJcbiAgICAgICAgaWYgKCFpbml0ZWQpIHtcclxuICAgICAgICAgICAgLy8gaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TIHx8IGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCkge1xyXG4gICAgICAgICAgICAvLyAgICAgUGxhdGZvcm0uaW5pdFNESygpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIFdlYWtOZXRHYW1lLmluaXRDb25maWcoU2VydmVyQ29uZmlnKTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1NjZW5lKClcclxuICAgICAgICAgICAgLy/nrKzkuIDov5vlhaXmuLjmiI8g55qEbG9hZGluZyDnlYzpnaIgXHJcbiAgICAgICAgICAgIGlmICghU2VydmVyQ29uZmlnLmlzX2xvY2FsX2dhbWUpIHtcclxuICAgICAgICAgICAgICAgIFdlYWtOZXRHYW1lLmRvd25sb2FkQ3N2KFwiQ29uZmlnXCIpLnRoZW4odiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliqDovb1Db25maWfmiJDlip/vvIHvvIFcIilcclxuICAgICAgICAgICAgICAgICAgICBjc3YucmVtb3ZlSW5kZXgoXCJDb25maWdcIiwgXCJLZXlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY3N2LmNyZWF0ZUluZGV4KFwiQ29uZmlnXCIsIFwiS2V5XCIsIFwiY29uZmlnX2RhdGFcIilcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIChQbGF5ZXJJbmZvLmlzU2hvd1NESygpKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB3aW5kb3dbJ3p6c2RrdWknXS5pbml0U0RLKDAsICcxLjAuMCcsICdodHRwczovL3d4YS4zMzI4MzEuY29tL3hzbC93eDkyYjhmODM0ZWY4ZmRhNzEvdjEuMC4wL2NvbmZpZy5qc29uJywgJ3d4OTJiOGY4MzRlZjhmZGE3MScsICcnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ3Nka+WKoOi9veWujOaIkCcpXHJcbiAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgKGlzRW1wdHkoVXNlckluZm8udXNlcklkKSkge1xyXG4gICAgICAgIC8vICAgICBVc2VySW5mby51c2VySWQgPSBnLnV1aWQoMTYsIDE2KVxyXG4gICAgICAgIC8vICAgICBVc2VySW5mby5zYXZlKCk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBpZiAoIWluaXRlZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRpbmcgaW5pdCAhISEhIVwiKVxyXG4gICAgICAgICAgICAvLyBsb2dpbiB1c2luZyB3eCBjb2RlICxcclxuICAgICAgICAgICAgLy/kvb/nlKhvcGVuaWQg55m76ZmG5Y+v5Lul6K6w5b2V5pWw5o2uIFxyXG4gICAgICAgICAgICBXZWFrTmV0R2FtZS5kb0xvZ2luKHRoaXMubG9naW5Qcm9ncmVzcy5iaW5kKHRoaXMpKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaW5pdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIOWQjuiuvue9rue0ouW8lSBcclxuICAgICAgICAgICAgICAgIGNzdi5yZW1vdmVJbmRleChcIkNvbmZpZ1wiLCBcIktleVwiKTtcclxuICAgICAgICAgICAgICAgIGNzdi5jcmVhdGVJbmRleChcIkNvbmZpZ1wiLCBcIktleVwiLCBcImNvbmZpZ19kYXRhXCIpXHJcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBzYXZlIHRpbWVzdGFtcHMgXHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+eZu+W9leWksei0pe+8jOS5n+i/m+WFpVxyXG4gICAgICAgICAgICAgICAgICAgIGV2dC5lbWl0KFwiTG9hZGluZy5Mb2dpblwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dFNjZW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWUgPSBkYXRhLnNhdmVfdGltZXN0YW1wc1xyXG4gICAgICAgICAgICAgICAgLy/mmK/lkKblkIzmraXov4dcclxuICAgICAgICAgICAgICAgIGlmICh0aW1lICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+S4iuS4gOasoeWQjOatpeaXtumXtCDlpKfkuo7mnKzlnLDkv53lrZjml7bpl7QgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWUgPiBQbGF5ZXJJbmZvLnNhdmVfdGltZXN0YW1wcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+S9v+eUqOacjeWKoeWZqOaVsOaNrlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF5ZXJJbmZvLmxvYWRGcm9tSnNvbk9iamVjdChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+S9v+eUqOacrOWcsOaVsOaNrlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS9v+eUqOacrOWcsOaVsOaNriDvvIzmnI3liqHlmajkuI3mmK/mnIDmlrDnmoRcIilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5ZCM5q2l5pys5Zyw5pWw5o2uIOWIsOacjeWKoeWZqCBcclxuICAgICAgICAgICAgICAgICAgICAvL+WmguaenOi/mOacquWIneWni+WMlui/hyzpnIDopoHku47mnI3liqHlmajmi4nmlbDmja5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoUGxheWVySW5mby5pbml0ZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/mlrDnjqnlrrbkvb/nlKjmnI3liqHlmahcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGxheWVySW5mby5sb2FkRnJvbUpzb25PYmplY3QoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/ogIHnjqnlrrbkvb/nlKjkuYvliY3nmoR1c2VySWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGxheWVySW5mby5vcGVuSWQgPSBkYXRhLm9wZW5JZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVXNlckluZm8uc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFBsYXllckluZm8uc2F2ZShudWxsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIOWmguaenOW3sue7j+iuoumYhSDor7TmmI7lt7Lnu4/pooblj5blpZblirFcclxuICAgICAgICAgICAgICAgIFVzZXJJbmZvLmlzRHkgPSBkYXRhLmlzRHkgPyBkYXRhLmlzRHkgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBldnQuZW1pdChcIkxvYWRpbmcuTG9naW5cIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFNjZW5lKCk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IGDnmbvlvZXlpLHotKXvvIzngrnlh7vlsY/luZXph43or5XvvIEoJHtlfSlgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJHRFRzZGtcIiwgXCJhcHBsaWNhdGlvbkRpZEJlY29tZUFjdGl2ZVwiKTtcclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZE5leHRTY2VuZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNhblJldHJ5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufSJdfQ==