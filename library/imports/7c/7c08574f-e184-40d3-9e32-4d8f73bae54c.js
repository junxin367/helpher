"use strict";
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