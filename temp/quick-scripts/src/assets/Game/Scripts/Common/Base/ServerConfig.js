"use strict";
cc._RF.push(module, '105e1Oqtb1OtbPhRmZfoTX8', 'ServerConfig');
// Game/Scripts/Common/Base/ServerConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = exports.ServerConfig = void 0;
var UIRank_1 = require("../../UI/UIRank");
exports.ServerConfig = {
    version: "apk2.0.0",
    // root_url: `http://192.168.124.39:8888`,
    root_url: "",
    force_url: "",
    cdn_url: "",
    ip_api: "https://pv.sohu.com/cityjson?ie=utf-8",
    ip_query: "",
    config_url: "config.json",
    is_local_game: true,
    openId: "111",
    /**是否正常登陆流程  */
    is_normal_login: false,
};
if (cc.sys.isNative) {
    exports.ServerConfig.is_normal_login = false;
}
else {
    if (window.tt) {
        exports.ServerConfig.root_url = "";
        exports.ServerConfig.is_normal_login = false;
    }
    else {
        if (window.qq) {
            exports.ServerConfig.root_url = "";
            exports.ServerConfig.is_normal_login = false;
        }
        else {
            exports.ServerConfig.root_url = "";
            exports.ServerConfig.is_normal_login = true;
        }
    }
}
if (CC_DEBUG) {
    //  ServerConfig.is_local_game = true;
}
exports.ServerConfig.cdn_url = exports.ServerConfig.cdn_url + "/" + exports.ServerConfig.version + "/";
exports.ServerConfig.config_url = exports.ServerConfig.cdn_url + exports.ServerConfig.config_url;
// tmxLoader.baseUrl = ServerConfig.cdn_url + "cloud-levels/"
UIRank_1.default.rankUrl = exports.ServerConfig.root_url + "/game/rank";
function Api(apiname) {
    return exports.ServerConfig.root_url + "/" + apiname;
}
exports.Api = Api;
Api.invite_get = Api("invite/get");
Api.invite_claim_day = Api("invite/claim_day");
Api.invite_claim_new = Api("invite/claim_new");
Api.subscribe = Api("subscribe");
Api.claimReward = Api("free_energy/claim");
Api.subscribeState = Api("subscribe/status");
// window.Api = Api;

cc._RF.pop();