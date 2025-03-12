"use strict";
cc._RF.push(module, '335d579hzlCrqUGnN6tZ5Zx', 'UIRank');
// Game/Scripts/UI/UIRank.ts

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
var mvcView_1 = require("../../../framework/ui/mvcView");
var wxRankList_1 = require("./wxRankList");
var ccUtil_1 = require("../../../framework/utils/ccUtil");
var UIFunctions_1 = require("../../../framework/ui/UIFunctions");
var UserInfo_1 = require("../../../framework/extension/weak_net_game/UserInfo");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var WeakNetGame_1 = require("../../../framework/extension/weak_net_game/WeakNetGame");
var Net_1 = require("../../../framework/misc/Net");
var Device_1 = require("../../../framework/misc/Device");
var Platform_1 = require("../../../framework/extension/Platform");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIRank = /** @class */ (function (_super) {
    __extends(UIRank, _super);
    function UIRank() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layout = null;
        _this.radioGroup = null;
        _this.modelGroup = null;
        _this.node_worldRank = null;
        _this.subContext = null;
        _this.myRank = {};
        _this.lvRank = 0;
        _this.isPlayingDaily = false;
        return _this;
        // update (dt) {}
    }
    UIRank_1 = UIRank;
    UIRank.prototype.onLoad = function () {
        var _this = this;
        this.register(this.layout, function (_) { return _this.ranklist; }, this.itemAtIndex.bind(this));
        this.register("panel/my/head", function (_) { return UserInfo_1.UserInfo.avatarUrl ? UserInfo_1.UserInfo.avatarUrl : "Img/rank/moren"; });
        this.register("panel/my/rankIcon", function (_) { return _this.lvRank == 0 ? "Img/rank/moren" : "Img/rank/" + (_this.lvRank); });
        this.register("panel/my/score", function (_) { return ((_this.isPlayingDaily ? PlayerInfo_1.PlayerInfo.dailylevel : PlayerInfo_1.PlayerInfo.level) || 0) + "关"; });
        this.register("panel/my/name", function (_) { return (UserInfo_1.UserInfo.nickName ? (UserInfo_1.UserInfo.nickName.length <= 10 ? UserInfo_1.UserInfo.nickName : UserInfo_1.UserInfo.nickName.substr(0, 10)) : "自已"); });
        this.register("panel/my/rank", function (_) { return _this.lvRank == 0 ? "未上榜" : (_this.lvRank); });
        this.onVisible("panel/my/rankIcon", function (_) { return _this.lvRank < 4 && _this.lvRank != 0; });
        this.onVisible("panel/my/rank", function (_) { return _this.lvRank > 3 || _this.lvRank == 0; });
    };
    UIRank.prototype.start = function () {
    };
    UIRank.prototype.onShow = function () {
        var model = this.modelGroup.toggleItems.find(function (v) { return v.isChecked; });
        if (UIFunctions_1.default.getToggleIndex(model) == 0) {
            this.isPlayingDaily = false;
        }
        else {
            this.isPlayingDaily = true;
        }
        var toggle = this.radioGroup.toggleItems.find(function (v) { return v.isChecked; });
        if (UIFunctions_1.default.getToggleIndex(toggle) == 0) {
            this.click_friend();
        }
        else {
            this.click_world();
        }
    };
    UIRank.prototype.click_close = function () {
        wxRankList_1.default.instance.onClose();
        vm.hide(this);
    };
    UIRank.prototype.click_friend = function () {
        // this.node_worldRank.active = false;
        this.node_worldRank.active = false;
        if (this.isPlayingDaily) {
            wxRankList_1.default.instance.loadChallengLevelOpenRank();
        }
        else {
            wxRankList_1.default.instance.loadLevelOpenRank();
        }
        this.subContext.active = true;
    };
    UIRank.prototype.click_world = function () {
        wxRankList_1.default.instance.onClose();
        this.click_world_wx();
    };
    /**
     *  //微信 按钮回调
     * @param userInfo 微信获取到的用户信息，
     * @param isNew 弹框返回 true 表示授权 ， 其它 表示已授权过
     */
    UIRank.prototype.click_world_wx = function (userInfo, isNew) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (isNew) {
                            UIFunctions_1.default.selectToggleIndex(this.radioGroup.node, 1);
                        }
                        this.node_worldRank.active = true;
                        if (!userInfo) return [3 /*break*/, 2];
                        return [4 /*yield*/, UserInfo_1.UserInfo.openRankAndUpload({ level: PlayerInfo_1.PlayerInfo.level, challengelevel: PlayerInfo_1.PlayerInfo.dailylevel }, userInfo)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.ranklist)
                            this.requestRank();
                        this.render();
                        this.subContext.active = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    UIRank.prototype.requestRank = function () {
        var _this = this;
        var params = {
            orderBy: this.isPlayingDaily ? "challengelevel" : "level",
            page: 1,
            row: 20
        };
        WeakNetGame_1.default.client.httpGet(UIRank_1.rankUrl, params).then(function (v) {
            if (v == Net_1.default.Code.Timeout) {
                // Toast.make("请求超时")
            }
            else {
                if (v) {
                    console.log(v);
                    var ret = JSON.parse(v);
                    var data = ret.data;
                    if (data) {
                        _this.ranklist = data.list;
                        for (var i = 0; i < data.list.length; i++) {
                            if (data.list[i].avatarUrl == UserInfo_1.UserInfo.avatarUrl) {
                                _this.myRank = data.list[i];
                                _this.lvRank = i;
                            }
                        }
                        _this.checkUserRank();
                        // 60 s 后清除缓存 
                        _this.scheduleOnce(function (_) { return _this.ranklist = null; }, 60);
                        console.log(data);
                        // this.status = this.Rank_Loaded
                        if (data) {
                            _this.render();
                        }
                    }
                    else {
                        // this.status = this.Rank_load_Error
                        // this.render();
                        // Toast.make("加载失败！")
                    }
                }
            }
        });
    };
    UIRank.prototype.itemAtIndex = function (node, data, i) {
        var nickname = data.nickName || data._id || "未授权玩家";
        var nick = nickname.length <= 5 ? nickname : nickname.substr(0, 10);
        var head = ccUtil_1.default.find("head", node, cc.Sprite);
        var nickLabel = ccUtil_1.default.find("name", node, cc.Label);
        var rankLabel = ccUtil_1.default.find("rank", node, cc.Label);
        var scoreLabel = ccUtil_1.default.find("score", node, cc.Label);
        var rankIcon = ccUtil_1.default.find("rankIcon", node, cc.Sprite);
        rankIcon.node.active = false;
        rankLabel.node.active = false;
        if (i < 3) {
            ccUtil_1.default.setDisplay(rankIcon, "Img/rank/" + (i + 1));
            rankIcon.node.active = true;
        }
        else {
            rankLabel.string = i + 1;
            rankLabel.node.active = true;
        }
        if (data.avatarUrl) {
            ccUtil_1.default.setDisplay(head, data.avatarUrl);
        }
        else {
            ccUtil_1.default.setDisplay(head, "Img/rank/moren");
        }
        nickLabel.string = nick;
        scoreLabel.string = (this.isPlayingDaily ? data.challengelevel : data.level || 0) + "关";
    };
    UIRank.prototype.checkUserRank = function () {
        for (var key in this.ranklist) {
            if (this.ranklist[key].openId == PlayerInfo_1.PlayerInfo.openId) {
                this.lvRank = parseInt(key) + 1;
                return;
            }
            else {
                this.lvRank = 0;
            }
        }
    };
    UIRank.prototype.click_share = function (v) {
        Device_1.default.playSfx("button");
        Platform_1.default.share();
    };
    UIRank.prototype.click_challenge = function () {
        this.isPlayingDaily = true;
        var toggle = this.radioGroup.toggleItems.find(function (v) { return v.isChecked; });
        if (UIFunctions_1.default.getToggleIndex(toggle) == 0) {
            this.click_friend();
        }
        else {
            this.ranklist = null;
            this.click_world();
        }
    };
    UIRank.prototype.click_normal = function () {
        this.isPlayingDaily = false;
        var toggle = this.radioGroup.toggleItems.find(function (v) { return v.isChecked; });
        if (UIFunctions_1.default.getToggleIndex(toggle) == 0) {
            this.click_friend();
        }
        else {
            this.ranklist = null;
            this.click_world();
        }
    };
    var UIRank_1;
    UIRank.rankUrl = "";
    __decorate([
        property(cc.Layout)
    ], UIRank.prototype, "layout", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], UIRank.prototype, "radioGroup", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], UIRank.prototype, "modelGroup", void 0);
    __decorate([
        property(cc.Node)
    ], UIRank.prototype, "node_worldRank", void 0);
    __decorate([
        property(cc.Node)
    ], UIRank.prototype, "subContext", void 0);
    UIRank = UIRank_1 = __decorate([
        ccclass
    ], UIRank);
    return UIRank;
}(mvcView_1.default));
exports.default = UIRank;

cc._RF.pop();