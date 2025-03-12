
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Common/Base/IpChecker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ff07iYVWhNhamOtohW6ykB', 'IpChecker');
// Game/Scripts/Common/Base/IpChecker.ts

"use strict";
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
var ServerConfig_1 = require("./ServerConfig");
var Net_1 = require("../../../../framework/misc/Net");
var WeakNetGame_1 = require("../../../../framework/extension/weak_net_game/WeakNetGame");
var PlayerInfo_1 = require("./PlayerInfo");
var UserInfo_1 = require("../../../../framework/extension/weak_net_game/UserInfo");
//在Config.csv 配置 文件 里需要配置以下属性
//Scene_Forbid_Switch  屏蔽Scene开关
//Scene_Forbid_IDs     屏蔽scene id 
//IP_Forbid_Switch     屏蔽ip开关
//IP_Forbid_City       屏蔽ip的城市 
//IP_Refresh_Interval   ip请求频率(天)
//Safe_Mode             安全模式 
var IpChecker = /** @class */ (function () {
    function IpChecker() {
    }
    IpChecker.checkSceneFobidden = function (scene) {
        if (csv.Config.Scene_Forbid_Switch) {
            var b = csv.Config.Scene_Forbid_IDs.indexOf(scene + "");
            WeakNetGame_1.default.is_forbidden = b >= 0;
        }
        else {
            WeakNetGame_1.default.is_forbidden = false;
        }
    };
    // check forbidden
    IpChecker.checkForbidden = function (obj) {
        if (csv.Config.IP_Forbid_Switch) {
            var cities = csv.Config.IP_Forbid_City.split(",");
            var b = cities.some(function (v) {
                var i = obj.cname.indexOf(v);
                return i >= 0;
            });
            if (b) {
                WeakNetGame_1.default.is_forbidden = true;
            }
            else {
                this.checkSceneFobidden(obj.scene);
            }
        }
        else {
            this.checkSceneFobidden(obj.scene);
        }
        console.log("WeakNetGame.scene", obj.scene);
        console.warn("WeakNetGame.is_forbidden", WeakNetGame_1.default.is_forbidden);
        console.warn("WeakNetGame.is_safe_mode", WeakNetGame_1.default.is_safe_mode);
    };
    IpChecker.check_safe_mode = function () {
        //第一关, 为安全模式
        return (!!csv.Config.Safe_Mode) && PlayerInfo_1.PlayerInfo.playinglevel == 1;
    };
    //请求ip
    IpChecker.checkIp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var jobj, diff, res, jstr, detail_res, detail, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        WeakNetGame_1.default.set_safe_check_callback(this.check_safe_mode);
                        jobj = { cip: '', cname: '', scene: 0 };
                        diff = Date.now() - UserInfo_1.UserInfo.ip_s //86400000 一天
                        ;
                        console.log(UserInfo_1.UserInfo.ip_cname, UserInfo_1.UserInfo.ip_addr, diff, csv.Config.IP_Refresh_Interval);
                        if (!(UserInfo_1.UserInfo.ip_cname == '' || UserInfo_1.UserInfo.ip_addr == "" || diff > 86400000 * csv.Config.IP_Refresh_Interval)) return [3 /*break*/, 8];
                        return [4 /*yield*/, Net_1.net.httpGet(ServerConfig_1.ServerConfig.ip_api)];
                    case 1:
                        res = _a.sent();
                        if (!(res == Net_1.default.Code.Timeout)) return [3 /*break*/, 2];
                        // jobj = await this.getIp2();
                        return [2 /*return*/, this.checkIp()];
                    case 2:
                        if (!res) return [3 /*break*/, 7];
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        jstr = res.substring(res.indexOf("{"), res.indexOf("}") + 1);
                        jobj = JSON.parse(jstr);
                        UserInfo_1.UserInfo.ip_addr = jobj.cip;
                        UserInfo_1.UserInfo.save('ip_addr');
                        return [4 /*yield*/, Net_1.net.httpGet(ServerConfig_1.ServerConfig.ip_query + jobj.cip)];
                    case 4:
                        detail_res = _a.sent();
                        if (detail_res == Net_1.default.Code.Timeout) {
                            return [2 /*return*/, this.checkIp()];
                        }
                        else {
                            if (detail_res) {
                                detail = JSON.parse(detail_res);
                                if (detail.error_code == 0) {
                                    jobj.cname = detail.result.City;
                                    UserInfo_1.UserInfo.ip_cname = jobj.cname;
                                    UserInfo_1.UserInfo.ip_s = Date.now();
                                    UserInfo_1.UserInfo.save('ip_s');
                                    UserInfo_1.UserInfo.save('ip_cname');
                                }
                            }
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        return [3 /*break*/, 6];
                    case 6: return [3 /*break*/, 7];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        jobj.cip = UserInfo_1.UserInfo.ip_addr;
                        jobj.cname = UserInfo_1.UserInfo.ip_cname;
                        _a.label = 9;
                    case 9:
                        if (CC_WECHATGAME)
                            jobj['scene'] = wx.getLaunchOptionsSync().scene;
                        else {
                            jobj['scene'] = -1;
                        }
                        this.checkForbidden(jobj);
                        return [2 /*return*/];
                }
            });
        });
    };
    return IpChecker;
}());
exports.default = IpChecker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcQ29tbW9uXFxCYXNlXFxJcENoZWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBOEM7QUFDOUMsc0RBQTBEO0FBQzFELHlGQUFvRjtBQUNwRiwyQ0FBMEM7QUFDMUMsbUZBQWtGO0FBQ2xGLDZCQUE2QjtBQUM3QixnQ0FBZ0M7QUFDaEMsa0NBQWtDO0FBQ2xDLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0IsaUNBQWlDO0FBQ2pDLDZCQUE2QjtBQUM3QjtJQUFBO0lBb0dBLENBQUM7SUFuR1UsNEJBQWtCLEdBQXpCLFVBQTBCLEtBQUs7UUFDM0IsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFO1lBQ2hDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQTtZQUN2RCxxQkFBVyxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JDO2FBQU07WUFDSCxxQkFBVyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUE7U0FDbkM7SUFDTCxDQUFDO0lBQ0Qsa0JBQWtCO0lBQ1gsd0JBQWMsR0FBckIsVUFBc0IsR0FBRztRQUNyQixJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUU7WUFDN0IsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2pELElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO2dCQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDNUIsT0FBTyxDQUFDLElBQUks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SSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQTtnQ0FDbkMsSUFBSSxNQUFNLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtvQ0FDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztvQ0FDaEMsbUJBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztvQ0FDL0IsbUJBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO29DQUMzQixtQkFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtvQ0FDckIsbUJBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7aUNBQzVCOzZCQUNKO3lCQUNKOzs7Ozs7Ozt3QkFVYixJQUFJLENBQUMsR0FBRyxHQUFHLG1CQUFRLENBQUMsT0FBTyxDQUFDO3dCQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFRLENBQUMsUUFBUSxDQUFDOzs7d0JBRW5DLElBQUksYUFBYTs0QkFDYixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixFQUFFLENBQUMsS0FBSyxDQUFDOzZCQUMvQzs0QkFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7eUJBQ3RCO3dCQUNELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7O0tBVzdCO0lBRUwsZ0JBQUM7QUFBRCxDQXBHQSxBQW9HQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IFNlcnZlckNvbmZpZyB9IGZyb20gXCIuL1NlcnZlckNvbmZpZ1wiO1xyXG5pbXBvcnQgTmV0LCB7IG5ldCB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZXdvcmsvbWlzYy9OZXRcIjtcclxuaW1wb3J0IFdlYWtOZXRHYW1lIGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvV2Vha05ldEdhbWVcIjtcclxuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuL1BsYXllckluZm9cIjtcclxuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi93ZWFrX25ldF9nYW1lL1VzZXJJbmZvXCI7XHJcbi8v5ZyoQ29uZmlnLmNzdiDphY3nva4g5paH5Lu2IOmHjOmcgOimgemFjee9ruS7peS4i+WxnuaAp1xyXG4vL1NjZW5lX0ZvcmJpZF9Td2l0Y2ggIOWxj+iUvVNjZW5l5byA5YWzXHJcbi8vU2NlbmVfRm9yYmlkX0lEcyAgICAg5bGP6JS9c2NlbmUgaWQgXHJcbi8vSVBfRm9yYmlkX1N3aXRjaCAgICAg5bGP6JS9aXDlvIDlhbNcclxuLy9JUF9Gb3JiaWRfQ2l0eSAgICAgICDlsY/olL1pcOeahOWfjuW4giBcclxuLy9JUF9SZWZyZXNoX0ludGVydmFsICAgaXDor7fmsYLpopHnjoco5aSpKVxyXG4vL1NhZmVfTW9kZSAgICAgICAgICAgICDlronlhajmqKHlvI8gXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElwQ2hlY2tlciB7XHJcbiAgICBzdGF0aWMgY2hlY2tTY2VuZUZvYmlkZGVuKHNjZW5lKSB7XHJcbiAgICAgICAgaWYgKGNzdi5Db25maWcuU2NlbmVfRm9yYmlkX1N3aXRjaCkge1xyXG4gICAgICAgICAgICBsZXQgYiA9IGNzdi5Db25maWcuU2NlbmVfRm9yYmlkX0lEcy5pbmRleE9mKHNjZW5lICsgXCJcIilcclxuICAgICAgICAgICAgV2Vha05ldEdhbWUuaXNfZm9yYmlkZGVuID0gYiA+PSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFdlYWtOZXRHYW1lLmlzX2ZvcmJpZGRlbiA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY2hlY2sgZm9yYmlkZGVuXHJcbiAgICBzdGF0aWMgY2hlY2tGb3JiaWRkZW4ob2JqKSB7XHJcbiAgICAgICAgaWYgKGNzdi5Db25maWcuSVBfRm9yYmlkX1N3aXRjaCkge1xyXG4gICAgICAgICAgICBsZXQgY2l0aWVzID0gY3N2LkNvbmZpZy5JUF9Gb3JiaWRfQ2l0eS5zcGxpdChcIixcIilcclxuICAgICAgICAgICAgbGV0IGIgPSBjaXRpZXMuc29tZSh2ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBpID0gb2JqLmNuYW1lLmluZGV4T2YodilcclxuICAgICAgICAgICAgICAgIHJldHVybiBpID49IDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWYgKGIpIHtcclxuICAgICAgICAgICAgICAgIFdlYWtOZXRHYW1lLmlzX2ZvcmJpZGRlbiA9IHRydWVcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTY2VuZUZvYmlkZGVuKG9iai5zY2VuZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tTY2VuZUZvYmlkZGVuKG9iai5zY2VuZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJXZWFrTmV0R2FtZS5zY2VuZVwiLCBvYmouc2NlbmUpO1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIldlYWtOZXRHYW1lLmlzX2ZvcmJpZGRlblwiLCBXZWFrTmV0R2FtZS5pc19mb3JiaWRkZW4pXHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiV2Vha05ldEdhbWUuaXNfc2FmZV9tb2RlXCIsIFdlYWtOZXRHYW1lLmlzX3NhZmVfbW9kZSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBjaGVja19zYWZlX21vZGUoKSB7XHJcbiAgICAgICAgLy/nrKzkuIDlhbMsIOS4uuWuieWFqOaooeW8j1xyXG4gICAgICAgIHJldHVybiAoISFjc3YuQ29uZmlnLlNhZmVfTW9kZSkgJiYgUGxheWVySW5mby5wbGF5aW5nbGV2ZWwgPT0gMVxyXG4gICAgfVxyXG5cclxuICAgIC8v6K+35rGCaXBcclxuICAgIHN0YXRpYyBhc3luYyBjaGVja0lwKCkge1xyXG4gICAgICAgIFdlYWtOZXRHYW1lLnNldF9zYWZlX2NoZWNrX2NhbGxiYWNrKHRoaXMuY2hlY2tfc2FmZV9tb2RlKVxyXG4gICAgICAgIC8vIOajgOa1iyDmnKzlnLAg5L+d5a2Y55qEaXAgXHJcbiAgICAgICAgbGV0IGpvYmogPSB7IGNpcDogJycsIGNuYW1lOiAnJywgc2NlbmU6IDAgfVxyXG4gICAgICAgIHZhciBkaWZmID0gRGF0ZS5ub3coKSAtIFVzZXJJbmZvLmlwX3MgLy84NjQwMDAwMCDkuIDlpKlcclxuICAgICAgICBjb25zb2xlLmxvZyhVc2VySW5mby5pcF9jbmFtZSAsIFVzZXJJbmZvLmlwX2FkZHIgLCBkaWZmLGNzdi5Db25maWcuSVBfUmVmcmVzaF9JbnRlcnZhbClcclxuICAgICAgICBpZiAoVXNlckluZm8uaXBfY25hbWUgPT0gJycgfHwgVXNlckluZm8uaXBfYWRkciA9PSBcIlwiIHx8IGRpZmYgPiA4NjQwMDAwMCAqIGNzdi5Db25maWcuSVBfUmVmcmVzaF9JbnRlcnZhbCkge1xyXG4gICAgICAgICAgICAvL+aYr+WQpuaYr+S4i+S4gOWkqVxyXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgbmV0Lmh0dHBHZXQoU2VydmVyQ29uZmlnLmlwX2FwaSk7XHJcbiAgICAgICAgICAgIGlmIChyZXMgPT0gTmV0LkNvZGUuVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgLy8gam9iaiA9IGF3YWl0IHRoaXMuZ2V0SXAyKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGVja0lwKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpzdHIgPSByZXMuc3Vic3RyaW5nKHJlcy5pbmRleE9mKFwie1wiKSwgcmVzLmluZGV4T2YoXCJ9XCIpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvYmogPSBKU09OLnBhcnNlKGpzdHIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5pcF9hZGRyID0gam9iai5jaXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLnNhdmUoJ2lwX2FkZHInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGV0YWlsX3JlcyA9IGF3YWl0IG5ldC5odHRwR2V0KFNlcnZlckNvbmZpZy5pcF9xdWVyeSArIGpvYmouY2lwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGV0YWlsX3JlcyA9PSBOZXQuQ29kZS5UaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGVja0lwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGV0YWlsX3Jlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZXRhaWwgPSBKU09OLnBhcnNlKGRldGFpbF9yZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRldGFpbC5lcnJvcl9jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgam9iai5jbmFtZSA9IGRldGFpbC5yZXN1bHQuQ2l0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uaXBfY25hbWUgPSBqb2JqLmNuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5pcF9zID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uc2F2ZSgnaXBfcycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLnNhdmUoJ2lwX2NuYW1lJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBqb2JqLmNpcCA9IFVzZXJJbmZvLmlwX2FkZHI7XHJcbiAgICAgICAgICAgIGpvYmouY25hbWUgPSBVc2VySW5mby5pcF9jbmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKENDX1dFQ0hBVEdBTUUpXHJcbiAgICAgICAgICAgIGpvYmpbJ3NjZW5lJ10gPSB3eC5nZXRMYXVuY2hPcHRpb25zU3luYygpLnNjZW5lO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBqb2JqWydzY2VuZSddID0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hlY2tGb3JiaWRkZW4oam9iaik7XHJcbiAgICAgICAgLy8gLy8g5qOA5p+l5piv5ZCm6ZyA6KaB5bGP6JS9XHJcbiAgICAgICAgLy8gbmV0Lmh0dHBHZXQoU2VydmVyQ29uZmlnLmNoZWNraXBfdXJsLCBqb2JqKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmIChyZXMpIHtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBvYmogPSBKU09OLnBhcnNlKHJlcylcclxuICAgICAgICAvLyAgICAgICAgIGlmIChvYmopIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBVc2VySW5mby5pc19mb3JiaWRkZW4gPSBvYmouZm9yYmlkZGVuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgV2Vha05ldEdhbWUuaXNfZm9yYmlkZGVuID0gVXNlckluZm8uaXNfZm9yYmlkZGVuO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSlcclxuICAgIH1cclxuXHJcbn0iXX0=