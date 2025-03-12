
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/mmcloud/Cloud.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7c085dP4YRA054yTY9zuuVM', 'Cloud');
// framework/extension/mmcloud/Cloud.ts

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
var Net_1 = require("../../misc/Net");
var SDKInterafce_1 = require("../SDKInterafce");
var Cloud = /** @class */ (function () {
    function Cloud() {
    }
    Cloud.getCloudConfig = function () {
        var channel = "";
        var scene = 1001;
        var gc = SDKInterafce_1.SDKBase.gameConfig;
        if (CC_WECHATGAME) {
            // let a = tt.getLaunchOptionsSync();
            // scene = a.scene
            // channel = a.query['channel']
        }
        var client = new Net_1.default();
        if (CC_WECHATGAME) {
        }
        else {
            client.setHeader("Referer", "https://servicewechat.com/" + gc.appId + "/30/page-frame.html");
        }
        return new Promise((function (resolve, reject) {
            var dataTobesend = { scene: scene, version: gc.version, channel: channel, game: gc.gameId };
            client.httpGet(gc.cloudUrl, dataTobesend).then(function (res) {
                if (res) {
                    var s = JSON.parse(res);
                    if (s.errno != 0) {
                        reject(s.errmsg);
                        return;
                    }
                    if (CC_DEBUG) {
                        console.log("屏蔽接口返回", s);
                    }
                    resolve(s.data);
                }
                else if (res == Net_1.default.Code.Timeout) {
                    reject("timeout");
                }
            });
        }));
    };
    Cloud.reload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCloudConfig().catch(function (v) {
                            console.error(v);
                        })];
                    case 1:
                        res = _a.sent();
                        if (!res) {
                            res = JSON.parse(this.test).data;
                        }
                        else {
                            this.config = res;
                        }
                        this.process(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    Cloud.process = function (res) {
        this.funcs = res.disFunc;
    };
    Cloud.config = { globalSwitch: 1, disFunc: {} };
    Cloud.funcs = null;
    Cloud.appid = "";
    Cloud.test = "{\n    \"code\": 200,\n    \"msg\": \"\",\n    \"data\": {\n        \"disFunc\": {\n            \"1\": {\n                \"name\": \"banner\u4F4D\u79FB\",\n                \"status\": 1,\n                \"show_num\": \"100\",\n                \"show_per\": \"1\"\n            },\n            \"2\": {\n                \"name\": \"\u8FDE\u80DC\u5956\u52B1\",\n                \"status\": 1,\n                \"show_num\": \"100\",\n                \"show_per\": \"1\"\n            },\n            \"3\": {\n                \"name\": \"\u4F53\u529B\u5927\u793C\u5305\",\n                \"status\": 1,\n                \"show_num\": \"100\",\n                \"show_per\": \"1\"\n            },\n            \"4\": {\n                \"name\": \"\u6E38\u620F\u9875\u9762banner\",\n                \"status\": 1,\n                \"show_num\": \"1000\",\n                \"show_per\": \"1\"\n            },\n            \"5\": {\n                \"name\": \"\u5047\u5206\u4EAB\u5931\u8D25\u63A7\u5236\",\n                \"status\": 1,\n                \"show_num\": \"3\",\n                \"show_per\": \"1\"\n            },\n            \"6\": {\n                \"name\": \"banner\u5237\u65B0\",\n                \"status\": 1,\n                \"show_num\": \"3\",\n                \"show_per\": \"1\"\n            },\n            \"7\": {\n                \"name\": \"\u6295\u653E\u7528\u6237\u62C9\u62BD\u5C49\",\n                \"status\": 1,\n                \"show_num\": \"3\",\n                \"show_per\": \"1\"\n            },\n            \"8\": {\n                \"name\": \"\u6295\u653E\u7528\u6237\u7EE7\u7EED\u6E38\u620F\u62C9\u62BD\u5C49\",\n                \"status\": 1,\n                \"show_num\": \"3\",\n                \"show_per\": \"0.5\"\n            },\n            \"9\": {\n                \"name\": \"\u7535\u51FB\u67AA\u9886\u53D6\u5F39\u7A97\",\n                \"status\": 1,\n                \"show_num\": \"999\",\n                \"show_per\": \"1\"\n            },\n            \"10\": {\n                \"name\": \"\u5173\u95ED\u6309\u94AE\u5C55\u793A\",\n                \"status\": 1,\n                \"show_num\": \"3\",\n                \"show_per\": \"1\"\n            }\n        },\n        \"adSwitch\": 1,\n    }\n}";
    return Cloud;
}());
exports.default = Cloud;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXG1tY2xvdWRcXENsb3VkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlDO0FBQ2pDLGdEQUEwQztBQWMxQztJQUFBO0lBOEhBLENBQUM7SUF6SGlCLG9CQUFjLEdBQTVCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFBO1FBQ2hCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLEVBQUUsR0FBRyxzQkFBTyxDQUFDLFVBQVUsQ0FBQztRQUM1QixJQUFJLGFBQWEsRUFBRTtZQUNmLHFDQUFxQztZQUNyQyxrQkFBa0I7WUFDbEIsK0JBQStCO1NBQ2xDO1FBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxhQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLGFBQWEsRUFBRTtTQUNsQjthQUFNO1lBQ0gsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsNEJBQTRCLEdBQUcsRUFBRSxDQUFDLEtBQUssR0FBRyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ2hHO1FBQ0QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDaEMsSUFBSSxZQUFZLEdBQUcsRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLFNBQUEsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzVFLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO2dCQUM5QyxJQUFJLEdBQUcsRUFBRTtvQkFDTCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUN2QixJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFFO3dCQUNkLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUE7d0JBQ2hCLE9BQU07cUJBQ1Q7b0JBQ0QsSUFBSSxRQUFRLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQzVCO29CQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ25CO3FCQUFNLElBQUksR0FBRyxJQUFJLGFBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNoQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7aUJBQ3BCO1lBQ0wsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQyxDQUFBO0lBRVAsQ0FBQztJQUVZLFlBQU0sR0FBbkI7Ozs7OzRCQUVVLHFCQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBQSxDQUFDOzRCQUNyQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixDQUFDLENBQUMsRUFBQTs7d0JBRkYsR0FBRyxHQUFHLFNBRUosQ0FBQTt3QkFDRixJQUFJLENBQUMsR0FBRyxFQUFFOzRCQUNOLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7eUJBQ3BDOzZCQUFNOzRCQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO3lCQUNyQjt3QkFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7OztLQUNyQjtJQUVNLGFBQU8sR0FBZCxVQUFlLEdBQWdCO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUM3QixDQUFDO0lBdERNLFlBQU0sR0FBZ0IsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUN2RCxXQUFLLEdBQW1DLElBQUksQ0FBQztJQUM3QyxXQUFLLEdBQVcsRUFBRSxDQUFDO0lBc0RuQixVQUFJLEdBQVcsaXVFQW9FeEIsQ0FBQTtJQUNGLFlBQUM7Q0E5SEQsQUE4SEMsSUFBQTtrQkE5SG9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV0IGZyb20gXCIuLi8uLi9taXNjL05ldFwiO1xuaW1wb3J0IHsgU0RLQmFzZSB9IGZyb20gXCIuLi9TREtJbnRlcmFmY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZEZ1bmMge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICBzdGF0dXM6IG51bWJlciwgLy8gMCAsIDEgXG4gICAgbWF4OiBzdHJpbmcsXG4gICAgcmF0aW86IHN0cmluZyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZENvbmZpZyB7XG4gICAgZGlzRnVuYzogeyBbaW5kZXg6IHN0cmluZ106IENsb3VkRnVuYyB9LFxuICAgIGdsb2JhbFN3aXRjaDogbnVtYmVyLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG91ZCB7XG4gICAgc3RhdGljIGNvbmZpZzogQ2xvdWRDb25maWcgPSB7IGdsb2JhbFN3aXRjaDogMSwgZGlzRnVuYzoge30gfTtcbiAgICBzdGF0aWMgZnVuY3M6IHsgW2luZGV4OiBzdHJpbmddOiBDbG91ZEZ1bmMgfSA9IG51bGw7XG4gICAgc3RhdGljIGFwcGlkOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRDbG91ZENvbmZpZygpOiBQcm9taXNlPENsb3VkQ29uZmlnPiB7XG4gICAgICAgIGxldCBjaGFubmVsID0gXCJcIlxuICAgICAgICBsZXQgc2NlbmUgPSAxMDAxO1xuICAgICAgICBsZXQgZ2MgPSBTREtCYXNlLmdhbWVDb25maWc7XG4gICAgICAgIGlmIChDQ19XRUNIQVRHQU1FKSB7XG4gICAgICAgICAgICAvLyBsZXQgYSA9IHR0LmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XG4gICAgICAgICAgICAvLyBzY2VuZSA9IGEuc2NlbmVcbiAgICAgICAgICAgIC8vIGNoYW5uZWwgPSBhLnF1ZXJ5WydjaGFubmVsJ11cbiAgICAgICAgfVxuICAgICAgICBsZXQgY2xpZW50ID0gbmV3IE5ldCgpO1xuICAgICAgICBpZiAoQ0NfV0VDSEFUR0FNRSkge1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xpZW50LnNldEhlYWRlcihcIlJlZmVyZXJcIiwgXCJodHRwczovL3NlcnZpY2V3ZWNoYXQuY29tL1wiICsgZ2MuYXBwSWQgKyBcIi8zMC9wYWdlLWZyYW1lLmh0bWxcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0YVRvYmVzZW5kID0geyBzY2VuZSwgdmVyc2lvbjogZ2MudmVyc2lvbiwgY2hhbm5lbCwgZ2FtZTogZ2MuZ2FtZUlkIH07XG4gICAgICAgICAgICBjbGllbnQuaHR0cEdldChnYy5jbG91ZFVybCwgZGF0YVRvYmVzZW5kKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcyA9IEpTT04ucGFyc2UocmVzKVxuICAgICAgICAgICAgICAgICAgICBpZiAocy5lcnJubyAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qocy5lcnJtc2cpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoQ0NfREVCVUcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5bGP6JS95o6l5Y+j6L+U5ZueXCIsIHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocy5kYXRhKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcyA9PSBOZXQuQ29kZS5UaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcInRpbWVvdXRcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KSlcblxuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyByZWxvYWQoKSB7XG4gICAgICAgIGxldCByZXNcbiAgICAgICAgcmVzID0gYXdhaXQgdGhpcy5nZXRDbG91ZENvbmZpZygpLmNhdGNoKHYgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcih2KTtcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgICAgIHJlcyA9IEpTT04ucGFyc2UodGhpcy50ZXN0KS5kYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb25maWcgPSByZXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9jZXNzKHJlcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHByb2Nlc3MocmVzOiBDbG91ZENvbmZpZykge1xuICAgICAgICB0aGlzLmZ1bmNzID0gcmVzLmRpc0Z1bmM7XG4gICAgfVxuXG4gICAgc3RhdGljIHRlc3Q6IHN0cmluZyA9IGB7XG4gICAgXCJjb2RlXCI6IDIwMCxcbiAgICBcIm1zZ1wiOiBcIlwiLFxuICAgIFwiZGF0YVwiOiB7XG4gICAgICAgIFwiZGlzRnVuY1wiOiB7XG4gICAgICAgICAgICBcIjFcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImJhbm5lcuS9jeenu1wiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJzaG93X251bVwiOiBcIjEwMFwiLFxuICAgICAgICAgICAgICAgIFwic2hvd19wZXJcIjogXCIxXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIjJcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIui/nuiDnOWlluWKsVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJzaG93X251bVwiOiBcIjEwMFwiLFxuICAgICAgICAgICAgICAgIFwic2hvd19wZXJcIjogXCIxXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIjNcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIuS9k+WKm+Wkp+ekvOWMhVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJzaG93X251bVwiOiBcIjEwMFwiLFxuICAgICAgICAgICAgICAgIFwic2hvd19wZXJcIjogXCIxXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIjRcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIua4uOaIj+mhtemdomJhbm5lclwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJzaG93X251bVwiOiBcIjEwMDBcIixcbiAgICAgICAgICAgICAgICBcInNob3dfcGVyXCI6IFwiMVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCI1XCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCLlgYfliIbkuqvlpLHotKXmjqfliLZcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiAxLFxuICAgICAgICAgICAgICAgIFwic2hvd19udW1cIjogXCIzXCIsXG4gICAgICAgICAgICAgICAgXCJzaG93X3BlclwiOiBcIjFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiNlwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYmFubmVy5Yi35pawXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMSxcbiAgICAgICAgICAgICAgICBcInNob3dfbnVtXCI6IFwiM1wiLFxuICAgICAgICAgICAgICAgIFwic2hvd19wZXJcIjogXCIxXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIjdcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIuaKleaUvueUqOaIt+aLieaKveWxiVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJzaG93X251bVwiOiBcIjNcIixcbiAgICAgICAgICAgICAgICBcInNob3dfcGVyXCI6IFwiMVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCI4XCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCLmipXmlL7nlKjmiLfnu6fnu63muLjmiI/mi4nmir3lsYlcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiAxLFxuICAgICAgICAgICAgICAgIFwic2hvd19udW1cIjogXCIzXCIsXG4gICAgICAgICAgICAgICAgXCJzaG93X3BlclwiOiBcIjAuNVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCI5XCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCLnlLXlh7vmnqrpooblj5blvLnnqpdcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiAxLFxuICAgICAgICAgICAgICAgIFwic2hvd19udW1cIjogXCI5OTlcIixcbiAgICAgICAgICAgICAgICBcInNob3dfcGVyXCI6IFwiMVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIxMFwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwi5YWz6Zet5oyJ6ZKu5bGV56S6XCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMSxcbiAgICAgICAgICAgICAgICBcInNob3dfbnVtXCI6IFwiM1wiLFxuICAgICAgICAgICAgICAgIFwic2hvd19wZXJcIjogXCIxXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJhZFN3aXRjaFwiOiAxLFxuICAgIH1cbn1gXG59XG5cbiJdfQ==