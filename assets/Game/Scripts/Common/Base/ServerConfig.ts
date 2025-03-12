import UIRank from "../../UI/UIRank"

export var ServerConfig = {
    version: "apk2.0.0",
    // root_url: `http://192.168.124.39:8888`,
    root_url: ``,
    force_url: ``,
    cdn_url: ``,
    ip_api: `https://pv.sohu.com/cityjson?ie=utf-8`,
    ip_query: "",
    config_url: `config.json`,
    is_local_game: true,
    openId: "111",
    /**是否正常登陆流程  */
    is_normal_login: false,

} as WeakNetConf

if (cc.sys.isNative) {
    ServerConfig.is_normal_login = false;
} else {
    if (window.tt) {
        ServerConfig.root_url = ``;
        ServerConfig.is_normal_login = false;
    } else {
        if (window.qq) {
            ServerConfig.root_url = ``;
            ServerConfig.is_normal_login = false;
        } else {
            ServerConfig.root_url = ``;
            ServerConfig.is_normal_login = true;
        }
    }
}


if (CC_DEBUG) {
    //  ServerConfig.is_local_game = true;
}

ServerConfig.cdn_url = `${ServerConfig.cdn_url}/${ServerConfig.version}/`
ServerConfig.config_url = ServerConfig.cdn_url + ServerConfig.config_url
// tmxLoader.baseUrl = ServerConfig.cdn_url + "cloud-levels/"
UIRank.rankUrl = ServerConfig.root_url + "/game/rank"

export function Api(apiname) {
    return ServerConfig.root_url + "/" + apiname
}

Api.invite_get = Api("invite/get")
Api.invite_claim_day = Api("invite/claim_day")
Api.invite_claim_new = Api("invite/claim_new")
Api.subscribe = Api("subscribe")
Api.claimReward = Api("free_energy/claim")
Api.subscribeState = Api("subscribe/status")
// window.Api = Api;