
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Common/Base/ServerConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcQ29tbW9uXFxCYXNlXFxTZXJ2ZXJDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQW9DO0FBRXpCLFFBQUEsWUFBWSxHQUFHO0lBQ3RCLE9BQU8sRUFBRSxVQUFVO0lBQ25CLDBDQUEwQztJQUMxQyxRQUFRLEVBQUUsRUFBRTtJQUNaLFNBQVMsRUFBRSxFQUFFO0lBQ2IsT0FBTyxFQUFFLEVBQUU7SUFDWCxNQUFNLEVBQUUsdUNBQXVDO0lBQy9DLFFBQVEsRUFBRSxFQUFFO0lBQ1osVUFBVSxFQUFFLGFBQWE7SUFDekIsYUFBYSxFQUFFLElBQUk7SUFDbkIsTUFBTSxFQUFFLEtBQUs7SUFDYixlQUFlO0lBQ2YsZUFBZSxFQUFFLEtBQUs7Q0FFVixDQUFBO0FBRWhCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7SUFDakIsb0JBQVksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0NBQ3hDO0tBQU07SUFDSCxJQUFJLE1BQU0sQ0FBQyxFQUFFLEVBQUU7UUFDWCxvQkFBWSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDM0Isb0JBQVksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0tBQ3hDO1NBQU07UUFDSCxJQUFJLE1BQU0sQ0FBQyxFQUFFLEVBQUU7WUFDWCxvQkFBWSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDM0Isb0JBQVksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1NBQ3hDO2FBQU07WUFDSCxvQkFBWSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDM0Isb0JBQVksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1NBQ3ZDO0tBQ0o7Q0FDSjtBQUdELElBQUksUUFBUSxFQUFFO0lBQ1Ysc0NBQXNDO0NBQ3pDO0FBRUQsb0JBQVksQ0FBQyxPQUFPLEdBQU0sb0JBQVksQ0FBQyxPQUFPLFNBQUksb0JBQVksQ0FBQyxPQUFPLE1BQUcsQ0FBQTtBQUN6RSxvQkFBWSxDQUFDLFVBQVUsR0FBRyxvQkFBWSxDQUFDLE9BQU8sR0FBRyxvQkFBWSxDQUFDLFVBQVUsQ0FBQTtBQUN4RSw2REFBNkQ7QUFDN0QsZ0JBQU0sQ0FBQyxPQUFPLEdBQUcsb0JBQVksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFBO0FBRXJELFNBQWdCLEdBQUcsQ0FBQyxPQUFPO0lBQ3ZCLE9BQU8sb0JBQVksQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQTtBQUNoRCxDQUFDO0FBRkQsa0JBRUM7QUFFRCxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUNsQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUE7QUFDOUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0FBQzlDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQ2hDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUE7QUFDMUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtBQUM1QyxvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlSYW5rIGZyb20gXCIuLi8uLi9VSS9VSVJhbmtcIlxyXG5cclxuZXhwb3J0IHZhciBTZXJ2ZXJDb25maWcgPSB7XHJcbiAgICB2ZXJzaW9uOiBcImFwazIuMC4wXCIsXHJcbiAgICAvLyByb290X3VybDogYGh0dHA6Ly8xOTIuMTY4LjEyNC4zOTo4ODg4YCxcclxuICAgIHJvb3RfdXJsOiBgYCxcclxuICAgIGZvcmNlX3VybDogYGAsXHJcbiAgICBjZG5fdXJsOiBgYCxcclxuICAgIGlwX2FwaTogYGh0dHBzOi8vcHYuc29odS5jb20vY2l0eWpzb24/aWU9dXRmLThgLFxyXG4gICAgaXBfcXVlcnk6IFwiXCIsXHJcbiAgICBjb25maWdfdXJsOiBgY29uZmlnLmpzb25gLFxyXG4gICAgaXNfbG9jYWxfZ2FtZTogdHJ1ZSxcclxuICAgIG9wZW5JZDogXCIxMTFcIixcclxuICAgIC8qKuaYr+WQpuato+W4uOeZu+mZhua1geeoiyAgKi9cclxuICAgIGlzX25vcm1hbF9sb2dpbjogZmFsc2UsXHJcblxyXG59IGFzIFdlYWtOZXRDb25mXHJcblxyXG5pZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICBTZXJ2ZXJDb25maWcuaXNfbm9ybWFsX2xvZ2luID0gZmFsc2U7XHJcbn0gZWxzZSB7XHJcbiAgICBpZiAod2luZG93LnR0KSB7XHJcbiAgICAgICAgU2VydmVyQ29uZmlnLnJvb3RfdXJsID0gYGA7XHJcbiAgICAgICAgU2VydmVyQ29uZmlnLmlzX25vcm1hbF9sb2dpbiA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAod2luZG93LnFxKSB7XHJcbiAgICAgICAgICAgIFNlcnZlckNvbmZpZy5yb290X3VybCA9IGBgO1xyXG4gICAgICAgICAgICBTZXJ2ZXJDb25maWcuaXNfbm9ybWFsX2xvZ2luID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgU2VydmVyQ29uZmlnLnJvb3RfdXJsID0gYGA7XHJcbiAgICAgICAgICAgIFNlcnZlckNvbmZpZy5pc19ub3JtYWxfbG9naW4gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmlmIChDQ19ERUJVRykge1xyXG4gICAgLy8gIFNlcnZlckNvbmZpZy5pc19sb2NhbF9nYW1lID0gdHJ1ZTtcclxufVxyXG5cclxuU2VydmVyQ29uZmlnLmNkbl91cmwgPSBgJHtTZXJ2ZXJDb25maWcuY2RuX3VybH0vJHtTZXJ2ZXJDb25maWcudmVyc2lvbn0vYFxyXG5TZXJ2ZXJDb25maWcuY29uZmlnX3VybCA9IFNlcnZlckNvbmZpZy5jZG5fdXJsICsgU2VydmVyQ29uZmlnLmNvbmZpZ191cmxcclxuLy8gdG14TG9hZGVyLmJhc2VVcmwgPSBTZXJ2ZXJDb25maWcuY2RuX3VybCArIFwiY2xvdWQtbGV2ZWxzL1wiXHJcblVJUmFuay5yYW5rVXJsID0gU2VydmVyQ29uZmlnLnJvb3RfdXJsICsgXCIvZ2FtZS9yYW5rXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBcGkoYXBpbmFtZSkge1xyXG4gICAgcmV0dXJuIFNlcnZlckNvbmZpZy5yb290X3VybCArIFwiL1wiICsgYXBpbmFtZVxyXG59XHJcblxyXG5BcGkuaW52aXRlX2dldCA9IEFwaShcImludml0ZS9nZXRcIilcclxuQXBpLmludml0ZV9jbGFpbV9kYXkgPSBBcGkoXCJpbnZpdGUvY2xhaW1fZGF5XCIpXHJcbkFwaS5pbnZpdGVfY2xhaW1fbmV3ID0gQXBpKFwiaW52aXRlL2NsYWltX25ld1wiKVxyXG5BcGkuc3Vic2NyaWJlID0gQXBpKFwic3Vic2NyaWJlXCIpXHJcbkFwaS5jbGFpbVJld2FyZCA9IEFwaShcImZyZWVfZW5lcmd5L2NsYWltXCIpXHJcbkFwaS5zdWJzY3JpYmVTdGF0ZSA9IEFwaShcInN1YnNjcmliZS9zdGF0dXNcIilcclxuLy8gd2luZG93LkFwaSA9IEFwaTsiXX0=