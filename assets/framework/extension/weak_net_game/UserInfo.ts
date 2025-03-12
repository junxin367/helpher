import DataCenter, { dc, field } from "../../core/DataCenter";
import WeakNetGame from "./WeakNetGame";
import gameUtil from "../../utils/gameUtil";
import Platform, { AuthUserInfo } from "../Platform";
let firstEnterHome = true
@dc("UserInfo")
export default class UserInfoDC extends DataCenter {
    // @field()
    // ip_cname: string = ""

    // @field()
    // ip_addr: string = ""

    // @field()
    // ip_s: number = 0;

    @field()
    lastLoginTime: number = 0

    @field()
    isFirstLoginToday: boolean = false;

    /**需要在进入后置为false */
    @field()
    isFirstEnterGame: boolean = true;

    //================-----------------------
    /**每日分享录屏次数 */
    @field()
    sharecount: number = 0;
    @field()
    nickName: string = '';
    /**每日展示开屏次数 */
    @field()
    kaipingcount: number = 0;
    @field()
    userId: string = '';

    @field()
    avatarUrl: string = '';

    //累计失败次数
    @field()
    lose_num: number = 1;

    //================-----------------------

    @field()
    firstLoginTime: number = 0;

    /**最后一次退出游戏 的时间 ,秒为单位  */
    @field()
    lastExitTime: number = 0;

    @field()
    gender: number = 0;

    // （新玩家）当天退出游戏再进也算 
    isNew = false;

    //当天第一次结算
    isFirstGameOver = true;

    /**第一次游戏结算时间 */
    @field()
    FirstGameOverTime: number = 0;

    /**是否订阅 */
    @field()
    isDy: boolean = false;


    /**是否客服会话*/
    @field()
    isKf: boolean = false;

    /**是否刚才打开客服*/
    tmpIskf: boolean = false;

    /**是否刚才打开收藏*/
    tmpIsSc: boolean = false;

    /**是否领取过客服奖励 */
    @field()
    isGetKf: boolean = false;

    /**进入客服会话的时间 */
    @field()
    kfTime: number = 0;

    /**是否添加到我的小程序 */
    @field()
    isSc: boolean = false;

    /**是否领取过收藏奖励 */
    @field()
    isGetSc: boolean = false;

    /**是否使用过体力 */
    @field()
    isUse: boolean = false;

    //枪的数量
    @field()
    gun_num: number = 0;

    //雪球的数量
    @field()
    snowball_num: number = 0;

    //磁铁的数量
    @field()
    magnet_num: number = 0;


    //是否从开始按钮领取
    @field()
    isGetGunStart: boolean = false;

    //是否从结算界面领取
    @field()
    isGetGunEnd: boolean = false;

    //领取枪的时间
    @field()
    getGunTime: number = 0;

    //累计重试次数
    @field()
    return_num: number = 1;

    //累计重试次数的关卡
    @field()
    return_level: number = 0;

    record_path: string = '';

    start_time: number = 0;
    record_time: number = 0;

    //免费转盘次数
    @field()
    freedrawTime: number = 0;


    @field()
    auth: boolean = false;

    //领取枪弹窗的总数量
    @field()
    gunView: number = 0;

    //领取枪弹窗的每日
    @field()
    gunViewDay: number = 0;

    //游戏主题
    @field()
    theme: number = 1;

    //女孩皮肤是否有尚未领取
    @field()
    isunlock_girl: number = 0;
    @field()
    isunlock_girl1: number = 0;
    @field()
    isunlock_girl2: number = 0;
    @field()
    isunlock_girl3: number = 0;
    @field()
    isunlock_girl4: number = 0;
    @field()
    isunlock_girl5: number = 0;


    //老头皮肤是否有尚未领取
    @field()
    isunlock_men: number = 0;
    @field()
    isunlock_men1: number = 0;
    @field()
    isunlock_men2: number = 0;
    @field()
    isunlock_men3: number = 0;
    @field()
    isunlock_men4: number = 0;
    @field()
    isunlock_men5: number = 0;

    //游戏主题是否有尚未领取
    @field()
    isunlock_theme: number = 0;

    //钥匙主题
    @field()
    theme_key: number = 1;

    // //首次提示皮肤强制引导
    // @field()
    // skin_guide: number = 0;

    get userType() {
        return this.isNew ? "(新玩家)" : "(老玩家)"
    }

    exitGame() {
        this.lastExitTime = Date.now() / 1000;
        this.save("lastExitTime")
    }

    onLoadAll() {
        if (this.firstLoginTime == 0) {
            this.firstLoginTime = Date.now()
        }
        if (gameUtil.isNextDay(this.firstLoginTime)) {
            this.isNew = false;
        } else {
            this.isNew = true;
        }
        if (gameUtil.isNextDay(this.lastLoginTime)) {
            this.lastLoginTime = Date.now();
            this.isFirstLoginToday = true;
            this.isUse = false;
            this.isGetGunStart = false;
            this.isGetGunEnd = false;
            this.sharecount = 0;
            this.kaipingcount = 0;
            this.lose_num = 1
            this.return_num = 1;
            this.gunViewDay = 0;
        } else {
            this.isFirstLoginToday = false;
        }
        // if (gameUtil.isNextDay(this.DyTime)) {
        //     this.isDy = false;
        // } else {
        //     this.isDy = true;
        //     this.isGetDy = false;
        // }
        if (gameUtil.isNextDay(this.kfTime)) {
            this.isKf = false;
        }
        if (gameUtil.isNextDay(this.FirstGameOverTime)) {
            this.isFirstGameOver = true;
        } else {
            this.isFirstGameOver = false;
        }
        if (isEmpty(this.userId)) {
            this.userId = g.uuid(32, 16)
            // Platform.userId = this.userId;
        }
        this.save()
    }

    /**
     * 上传用户数据 
     * @param kvs 
     */
    async uploadUserInfo(kvs: Object) {
        //仅对授权过的用户进行提交数据
        if (isEmpty(UserInfo.userId)) {
            return -1;
        }
        //开始上传
        try {
            let d = {
                // userId: UserInfo.userId,
                // nickName: UserInfo.nickName,
                // avatarUrl: UserInfo.avatarUrl,
                // gender: UserInfo.gender,
                // channel: channel,
            }
            for (var k in kvs) {
                d[k] = kvs[k];
            }
            //上传授权信息
            await WeakNetGame.syncData(JSON.stringify(d))
        } catch (e) {
            console.error("上传数据失败" + e);
            return -2;
        }
        return 0;
    }
    /**
     *  在 WxgetInfoButton 的按钮回调里执行
     * @param kvs 需要上传的key-value 对 数据
     * @param authInfo 从WxgetInfoButton 按钮回调里获取的参数
     * @returns 0 表示成功上传 ,- 1玩家 未授权， -2  上传过程失败
     */
    async openRankAndUpload(kvs: Object, authInfo: AuthUserInfo) {
        if (UserInfo.auth == false) {
            if (!authInfo) {
                authInfo = await Platform.checkAuth()
            }
            //update user info 
            if (authInfo == null) {
                //玩家未授权
                return -1;
            } else {
                //已授权 
                UserInfo.nickName = authInfo.nickName;
                if (isEmpty(UserInfo.userId)) {
                    UserInfo.userId = g.uuid(32, 16);
                }
                UserInfo.gender = authInfo.gender;
                UserInfo.avatarUrl = authInfo.avatarUrl;
                UserInfo.auth = true;
                //保存授权信息
                UserInfo.save();
                let channel = '';
                if (CC_WECHATGAME) {
                    if (window.tt) {
                        channel = 'tt'
                    } else if (window.qq) {
                        channel = 'qq'
                    } else {
                        channel = 'wx'
                    }
                } else {
                    channel = 'sim'
                }
                if (kvs == null) { kvs = {} }
                kvs["nickName"] = UserInfo.nickName;
                kvs["avatarUrl"] = UserInfo.avatarUrl;
                kvs["gender"] = UserInfo.gender;
                kvs['channel'] = channel;
                kvs['auth'] = true;
                //开始上传
                return this.uploadUserInfo(kvs);
            }
        }
    }

    isAuthOk() {
        return !isEmpty(UserInfo.nickName)
    }
    /**检查是否有离线收益 
     * @returns 离线时间  (s)
    */
    checkOffline() {
        if (firstEnterHome) {
            firstEnterHome = false;
            let offset = Date.now() / 1000 - UserInfo.lastExitTime;
            if (offset > 60) {
                return offset;
            }
            return 0
        }
    }


}



export let UserInfo: UserInfoDC = DataCenter.register(UserInfoDC);
