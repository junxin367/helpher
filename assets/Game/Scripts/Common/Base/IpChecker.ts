
import { ServerConfig } from "./ServerConfig";
import Net, { net } from "../../../../framework/misc/Net";
import WeakNetGame from "../../../../framework/extension/weak_net_game/WeakNetGame";
import { PlayerInfo } from "./PlayerInfo";
import { UserInfo } from "../../../../framework/extension/weak_net_game/UserInfo";
//在Config.csv 配置 文件 里需要配置以下属性
//Scene_Forbid_Switch  屏蔽Scene开关
//Scene_Forbid_IDs     屏蔽scene id 
//IP_Forbid_Switch     屏蔽ip开关
//IP_Forbid_City       屏蔽ip的城市 
//IP_Refresh_Interval   ip请求频率(天)
//Safe_Mode             安全模式 
export default class IpChecker {
    static checkSceneFobidden(scene) {
        if (csv.Config.Scene_Forbid_Switch) {
            let b = csv.Config.Scene_Forbid_IDs.indexOf(scene + "")
            WeakNetGame.is_forbidden = b >= 0;
        } else {
            WeakNetGame.is_forbidden = false
        }
    }
    // check forbidden
    static checkForbidden(obj) {
        if (csv.Config.IP_Forbid_Switch) {
            let cities = csv.Config.IP_Forbid_City.split(",")
            let b = cities.some(v => {
                let i = obj.cname.indexOf(v)
                return i >= 0
            })
            if (b) {
                WeakNetGame.is_forbidden = true
            } else {
                this.checkSceneFobidden(obj.scene)
            }
        } else {
            this.checkSceneFobidden(obj.scene)
        }
        console.log("WeakNetGame.scene", obj.scene);
        console.warn("WeakNetGame.is_forbidden", WeakNetGame.is_forbidden)
        console.warn("WeakNetGame.is_safe_mode", WeakNetGame.is_safe_mode)
    }

    private static check_safe_mode() {
        //第一关, 为安全模式
        return (!!csv.Config.Safe_Mode) && PlayerInfo.playinglevel == 1
    }

    //请求ip
    static async checkIp() {
        WeakNetGame.set_safe_check_callback(this.check_safe_mode)
        // 检测 本地 保存的ip 
        let jobj = { cip: '', cname: '', scene: 0 }
        var diff = Date.now() - UserInfo.ip_s //86400000 一天
        console.log(UserInfo.ip_cname , UserInfo.ip_addr , diff,csv.Config.IP_Refresh_Interval)
        if (UserInfo.ip_cname == '' || UserInfo.ip_addr == "" || diff > 86400000 * csv.Config.IP_Refresh_Interval) {
            //是否是下一天
            let res = await net.httpGet(ServerConfig.ip_api);
            if (res == Net.Code.Timeout) {
                // jobj = await this.getIp2();
                return this.checkIp();
            } else {
                if (res) {
                    try {
                        let jstr = res.substring(res.indexOf("{"), res.indexOf("}") + 1);
                        jobj = JSON.parse(jstr);
                        UserInfo.ip_addr = jobj.cip;
                        UserInfo.save('ip_addr')
                        let detail_res = await net.httpGet(ServerConfig.ip_query + jobj.cip)
                        if (detail_res == Net.Code.Timeout) {
                            return this.checkIp();
                        } else {
                            if (detail_res) {
                                let detail = JSON.parse(detail_res)
                                if (detail.error_code == 0) {
                                    jobj.cname = detail.result.City;
                                    UserInfo.ip_cname = jobj.cname;
                                    UserInfo.ip_s = Date.now();
                                    UserInfo.save('ip_s')
                                    UserInfo.save('ip_cname')
                                }
                            } 
                        }
                    }
                    catch (e) {
                        
                    }
                } else {
                    
                }
            }
        } else {
            jobj.cip = UserInfo.ip_addr;
            jobj.cname = UserInfo.ip_cname;
        }
        if (CC_WECHATGAME)
            jobj['scene'] = wx.getLaunchOptionsSync().scene;
        else {
            jobj['scene'] = -1;
        }
        this.checkForbidden(jobj);
        // // 检查是否需要屏蔽
        // net.httpGet(ServerConfig.checkip_url, jobj).then(res => {
        //     if (res) {
        //         let obj = JSON.parse(res)
        //         if (obj) {
        //             UserInfo.is_forbidden = obj.forbidden
        //             WeakNetGame.is_forbidden = UserInfo.is_forbidden;
        //         }
        //     }
        // })
    }

}