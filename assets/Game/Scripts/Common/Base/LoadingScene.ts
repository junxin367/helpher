import LoadingSceneBase from "../../../../framework/misc/LoadingSceneBase";
import { ServerConfig } from "./ServerConfig";
import { evt } from "../../../../framework/core/event";
import { PlayerInfo } from "./PlayerInfo";
import WeakNetGame from "../../../../framework/extension/weak_net_game/WeakNetGame";
import { UserInfo } from "../../../../framework/extension/weak_net_game/UserInfo";
import StatHepler from "../../../../framework/extension/aldsdk/StatHelper";
import Platform from "../../../../framework/extension/Platform";

const { ccclass, property } = cc._decorator;

let inited = false;

@ccclass
export default class LoadingScene extends LoadingSceneBase {

    canRetry: boolean = false;


    onLoad() {
        super.onLoad();
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this)


    }

    async nextScene() {
        if (inited) {
            if (!window.tt) {
                // this.loadSubPackage("Audio", '加载资源')
                //await this.loadSubPackage("Img", "加载主场景资源");
                //await this.loadSubPackage("ImagePart", "加载图片");
                //await this.loadSubPackage("ui", "加载背景");
                //await this.loadSubPackage("ske", "加载动画");
            }
        }
        this.loadNextScene()
        evt.emit("Loading.Success")
        if (csv.Config.Forbid_Banner) {
            Platform._bannerEnabled = false;
        } else {
            Platform._bannerEnabled = true;
        }
        if (cc.sys.os == cc.sys.OS_IOS) {
            if (UserInfo.kaipingcount < csv.Config.Show_Kaiping_AD) {
                UserInfo.kaipingcount += 1;
                UserInfo.save("kaipingcount");
                // jsb.reflection.callStaticMethod("TXsdk", "showSplashAd");
            }
        }
    }


    //csv config share_config complete
    loginProgress(evt, ext) {
        switch (evt) {
            case 'login':
                this.label.string = "登录中"
                this.progress = 0.1;
                break;
            case 'config':
                this.label.string = "加载配置"
                this.progress = 0.2;
                break;
            case 'local_csv':
                this.label.string = "加载本地配置"
                this.progress = 0.3;
                break;
            // case 'local_csv_loaded':
            //     this.label.string = "已加载配置(" + ext + ")"
            //     this.progress = 0.5;
            case "csv":
                this.label.string = "加载网络配置"
                this.progress = 0.5;
                break;
            case 'share_config':
                this.label.string = "加载分享配置"
                this.progress = 0.7;
                break;
            case "complete":
                this.label.string = "进入游戏..."
                this.progress = 0.8;
                break;
        }
    }


    onClick() {
        if (this.canRetry) {
            this.startLogin();
            this.canRetry = false;
        }
    }

    start() {
        this.startLogin()

    }

    onDestroy() {
    }

    /**伪登录，仅用于记录是否点击卡片 */
    checkScene() {
        if (CC_WECHATGAME) {
            let options = wx.getLaunchOptionsSync();
            if (options.scene == 1008) {
                let share_cardid = options.query['id'];
                if (share_cardid) {
                    StatHepler.sendPath("分享卡片点击人数", share_cardid)
                }
            }
            // let params = {
            //     query: options.query,
            //     scene: options.scene,
            //     userId: UserInfo.userId
            // }
            // // 告知服务器点的是谁的分享
            // net.httpPost(ServerConfig.root_url + "/game/enter", params)
        } else {
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
    }

    startLogin() {
        //do init 
        if (!inited) {
            // if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.OS_ANDROID) {
            //     Platform.initSDK();
            // }
            WeakNetGame.initConfig(ServerConfig);
            this.checkScene()
            //第一进入游戏 的loading 界面 
            if (!ServerConfig.is_local_game) {
                WeakNetGame.downloadCsv("Config").then(v => {
                    console.log("加载Config成功！！")
                    csv.removeIndex("Config", "Key");
                    csv.createIndex("Config", "Key", "config_data")
                })

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
            console.log("loading init !!!!!")
            // login using wx code ,
            //使用openid 登陆可以记录数据 
            WeakNetGame.doLogin(this.loginProgress.bind(this)).then(data => {
                inited = true;
                // 后设置索引 
                csv.removeIndex("Config", "Key");
                csv.createIndex("Config", "Key", "config_data")
                // check save timestamps 
                if (!data) {
                    //登录失败，也进入
                    evt.emit("Loading.Login")
                    this.nextScene();
                    return;
                }
                let time = data.save_timestamps
                //是否同步过
                if (time != null) {
                    //上一次同步时间 大于本地保存时间 
                    if (time > PlayerInfo.save_timestamps) {
                        //使用服务器数据
                        PlayerInfo.loadFromJsonObject(data);
                    } else {
                        //使用本地数据
                        console.log("使用本地数据 ，服务器不是最新的")
                    }
                } else {
                    //同步本地数据 到服务器 
                    //如果还未初始化过,需要从服务器拉数据
                    if (PlayerInfo.inited == false) {
                        //新玩家使用服务器
                        PlayerInfo.loadFromJsonObject(data);
                    } else {
                        //老玩家使用之前的userId
                        PlayerInfo.openId = data.openId;
                    }
                    // UserInfo.save();
                    // PlayerInfo.save(null, true);
                }
                // 如果已经订阅 说明已经领取奖励
                UserInfo.isDy = data.isDy ? data.isDy : false;

                evt.emit("Loading.Login", true)
                this.nextScene();
            }).catch(e => {
                console.error(e)
                this.progress = 0;
                this.label.string = `登录失败，点击屏幕重试！(${e})`
            })
            // jsb.reflection.callStaticMethod("GDTsdk", "applicationDidBecomeActive");


        } else {
            this.loadNextScene();
            this.canRetry = true;
        }

    }

}