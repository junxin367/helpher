
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIRank.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJUmFuay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5REFBb0Q7QUFDcEQsMkNBQXNDO0FBQ3RDLDBEQUFxRDtBQUNyRCxpRUFBNEQ7QUFDNUQsZ0ZBQStFO0FBQy9FLHdEQUF1RDtBQUN2RCxzRkFBaUY7QUFDakYsbURBQThDO0FBRTlDLHlEQUFvRDtBQUNwRCxrRUFBNkQ7QUFFdkQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFlNUM7SUFBb0MsMEJBQU87SUFBM0M7UUFBQSxxRUE4TUM7UUEzTUcsWUFBTSxHQUFjLElBQUksQ0FBQztRQUd6QixnQkFBVSxHQUF1QixJQUFJLENBQUM7UUFHdEMsZ0JBQVUsR0FBdUIsSUFBSSxDQUFDO1FBR3RDLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBRy9CLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLFlBQU0sR0FBYSxFQUFjLENBQUM7UUFFbEMsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixvQkFBYyxHQUFZLEtBQUssQ0FBQzs7UUF3TGhDLGlCQUFpQjtJQUNyQixDQUFDO2VBOU1vQixNQUFNO0lBc0J2Qix1QkFBTSxHQUFOO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxFQUFiLENBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsbUJBQVEsQ0FBQyxTQUFTLENBQUMsQ0FB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QUUsQ0FBQTtTQUN0QjthQUFNO1lBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQzs7SUEzTE0sY0FBTyxHQUFHLEVBQUUsQ0FBQztJQWRwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBDQUNLO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUM7OENBQ1M7SUFHdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQzs4Q0FDUztJQUd0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNhO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1M7SUFmVixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBOE0xQjtJQUFELGFBQUM7Q0E5TUQsQUE4TUMsQ0E5TW1DLGlCQUFPLEdBOE0xQztrQkE5TW9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBtdmNWaWV3IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvbXZjVmlld1wiO1xuaW1wb3J0IHd4UmFua0xpc3QgZnJvbSBcIi4vd3hSYW5rTGlzdFwiO1xuaW1wb3J0IGNjVXRpbCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3V0aWxzL2NjVXRpbFwiO1xuaW1wb3J0IFVJRnVuY3Rpb25zIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvVUlGdW5jdGlvbnNcIjtcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9Vc2VySW5mb1wiO1xuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuLi9Db21tb24vQmFzZS9QbGF5ZXJJbmZvXCI7XG5pbXBvcnQgV2Vha05ldEdhbWUgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9XZWFrTmV0R2FtZVwiO1xuaW1wb3J0IE5ldCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21pc2MvTmV0XCI7XG5pbXBvcnQgeyBTZXR0aW5nSW5mbyB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvU2V0dGluZ0luZm9cIjtcbmltcG9ydCBEZXZpY2UgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9taXNjL0RldmljZVwiO1xuaW1wb3J0IFBsYXRmb3JtIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL1BsYXRmb3JtXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmFua0l0ZW0ge1xuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIG5pY2tOYW1lOiBzdHJpbmcsXG4gICAgYXZhdGFyVXJsOiBzdHJpbmcsXG4gICAgZ2VuZGVyOiBudW1iZXIsXG4gICAgaGlnaFNjb3JlOiBudW1iZXIsXG4gICAgbGV2ZWw6IG51bWJlcixcbiAgICBvcGVuSWQ6IHN0cmluZyxcbiAgICBfaWQ6IHN0cmluZyxcbiAgICBjaGFsbGVuZ2VsZXZlbDogbnVtYmVyLFxufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlSYW5rIGV4dGVuZHMgbXZjVmlldyB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGF5b3V0KVxuICAgIGxheW91dDogY2MuTGF5b3V0ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGVDb250YWluZXIpXG4gICAgcmFkaW9Hcm91cDogY2MuVG9nZ2xlQ29udGFpbmVyID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGVDb250YWluZXIpXG4gICAgbW9kZWxHcm91cDogY2MuVG9nZ2xlQ29udGFpbmVyID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVfd29ybGRSYW5rOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHN1YkNvbnRleHQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgc3RhdGljIHJhbmtVcmwgPSBcIlwiO1xuICAgIG15UmFuazogUmFua0l0ZW0gPSB7fSBhcyBSYW5rSXRlbTtcbiAgICByYW5rbGlzdDogUmFua0l0ZW1bXTtcbiAgICBsdlJhbms6IG51bWJlciA9IDA7XG4gICAgaXNQbGF5aW5nRGFpbHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIodGhpcy5sYXlvdXQsIF8gPT4gdGhpcy5yYW5rbGlzdCwgdGhpcy5pdGVtQXRJbmRleC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlcihcInBhbmVsL215L2hlYWRcIiwgXyA9PiBVc2VySW5mby5hdmF0YXJVcmwgPyBVc2VySW5mby5hdmF0YXJVcmwgOiBcIkltZy9yYW5rL21vcmVuXCIpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKFwicGFuZWwvbXkvcmFua0ljb25cIiwgXyA9PiB0aGlzLmx2UmFuayA9PSAwID8gXCJJbWcvcmFuay9tb3JlblwiIDogXCJJbWcvcmFuay9cIiArICh0aGlzLmx2UmFuaykpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKFwicGFuZWwvbXkvc2NvcmVcIiwgXyA9PiAoKHRoaXMuaXNQbGF5aW5nRGFpbHkgPyBQbGF5ZXJJbmZvLmRhaWx5bGV2ZWwgOiBQbGF5ZXJJbmZvLmxldmVsKSB8fCAwKSArIFwi5YWzXCIpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKFwicGFuZWwvbXkvbmFtZVwiLCBfID0+IChVc2VySW5mby5uaWNrTmFtZSA/IChVc2VySW5mby5uaWNrTmFtZS5sZW5ndGggPD0gMTAgPyBVc2VySW5mby5uaWNrTmFtZSA6IFVzZXJJbmZvLm5pY2tOYW1lLnN1YnN0cigwLCAxMCkpIDogXCLoh6rlt7JcIikpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKFwicGFuZWwvbXkvcmFua1wiLCBfID0+IHRoaXMubHZSYW5rID09IDAgPyBcIuacquS4iuamnFwiIDogKHRoaXMubHZSYW5rKSk7XG4gICAgICAgIHRoaXMub25WaXNpYmxlKFwicGFuZWwvbXkvcmFua0ljb25cIiwgXyA9PiB0aGlzLmx2UmFuayA8IDQgJiYgdGhpcy5sdlJhbmsgIT0gMCk7XG4gICAgICAgIHRoaXMub25WaXNpYmxlKFwicGFuZWwvbXkvcmFua1wiLCBfID0+IHRoaXMubHZSYW5rID4gMyB8fCB0aGlzLmx2UmFuayA9PSAwKTtcblxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgb25TaG93KCkge1xuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLm1vZGVsR3JvdXAudG9nZ2xlSXRlbXMuZmluZCh2ID0+IHYuaXNDaGVja2VkKVxuICAgICAgICBpZiAoVUlGdW5jdGlvbnMuZ2V0VG9nZ2xlSW5kZXgobW9kZWwpID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nRGFpbHkgPSBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmdEYWlseSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBsZXQgdG9nZ2xlID0gdGhpcy5yYWRpb0dyb3VwLnRvZ2dsZUl0ZW1zLmZpbmQodiA9PiB2LmlzQ2hlY2tlZClcbiAgICAgICAgaWYgKFVJRnVuY3Rpb25zLmdldFRvZ2dsZUluZGV4KHRvZ2dsZSkgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jbGlja19mcmllbmQoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGlja193b3JsZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xpY2tfY2xvc2UoKSB7XG5cbiAgICAgICAgd3hSYW5rTGlzdC5pbnN0YW5jZS5vbkNsb3NlKCk7XG4gICAgICAgIHZtLmhpZGUodGhpcyk7XG4gICAgfVxuXG4gICAgY2xpY2tfZnJpZW5kKCkge1xuXG4gICAgICAgIC8vIHRoaXMubm9kZV93b3JsZFJhbmsuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm9kZV93b3JsZFJhbmsuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmlzUGxheWluZ0RhaWx5KSB7XG4gICAgICAgICAgICB3eFJhbmtMaXN0Lmluc3RhbmNlLmxvYWRDaGFsbGVuZ0xldmVsT3BlblJhbmsoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHd4UmFua0xpc3QuaW5zdGFuY2UubG9hZExldmVsT3BlblJhbmsoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1YkNvbnRleHQuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjbGlja193b3JsZCgpIHtcbiAgICAgICAgd3hSYW5rTGlzdC5pbnN0YW5jZS5vbkNsb3NlKCk7XG4gICAgICAgIHRoaXMuY2xpY2tfd29ybGRfd3goKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqICAvL+W+ruS/oSDmjInpkq7lm57osINcbiAgICAgKiBAcGFyYW0gdXNlckluZm8g5b6u5L+h6I635Y+W5Yiw55qE55So5oi35L+h5oGv77yMXG4gICAgICogQHBhcmFtIGlzTmV3IOW8ueahhui/lOWbniB0cnVlIOihqOekuuaOiOadgyDvvIwg5YW25a6DIOihqOekuuW3suaOiOadg+i/h1xuICAgICAqL1xuICAgIGFzeW5jIGNsaWNrX3dvcmxkX3d4KHVzZXJJbmZvPywgaXNOZXc/KSB7XG4gICAgICAgIGlmIChpc05ldykge1xuICAgICAgICAgICAgVUlGdW5jdGlvbnMuc2VsZWN0VG9nZ2xlSW5kZXgodGhpcy5yYWRpb0dyb3VwLm5vZGUsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZV93b3JsZFJhbmsuYWN0aXZlID0gdHJ1ZVxuICAgICAgICBpZiAodXNlckluZm8pIHtcbiAgICAgICAgICAgIGF3YWl0IFVzZXJJbmZvLm9wZW5SYW5rQW5kVXBsb2FkKHsgbGV2ZWw6IFBsYXllckluZm8ubGV2ZWwsIGNoYWxsZW5nZWxldmVsOiBQbGF5ZXJJbmZvLmRhaWx5bGV2ZWwgfSwgdXNlckluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5yYW5rbGlzdClcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdFJhbmsoKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy5zdWJDb250ZXh0LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuXG4gICAgcmVxdWVzdFJhbmsoKSB7XG4gICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBvcmRlckJ5OiB0aGlzLmlzUGxheWluZ0RhaWx5ID8gXCJjaGFsbGVuZ2VsZXZlbFwiIDogXCJsZXZlbFwiLFxuICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICAgIHJvdzogMjBcbiAgICAgICAgfVxuICAgICAgICBXZWFrTmV0R2FtZS5jbGllbnQuaHR0cEdldChVSVJhbmsucmFua1VybCwgcGFyYW1zKS50aGVuKHYgPT4ge1xuICAgICAgICAgICAgaWYgKHYgPT0gTmV0LkNvZGUuVGltZW91dCkge1xuICAgICAgICAgICAgICAgIC8vIFRvYXN0Lm1ha2UoXCLor7fmsYLotoXml7ZcIilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codilcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJldCA9IEpTT04ucGFyc2Uodik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmV0LmRhdGFcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmFua2xpc3QgPSBkYXRhLmxpc3QgYXMgUmFua0l0ZW1bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5saXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGlzdFtpXS5hdmF0YXJVcmwgPT0gVXNlckluZm8uYXZhdGFyVXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlSYW5rID0gZGF0YS5saXN0W2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmx2UmFuayA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1VzZXJSYW5rKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA2MCBzIOWQjua4hemZpOe8k+WtmCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKF8gPT4gdGhpcy5yYW5rbGlzdCA9IG51bGwsIDYwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zdGF0dXMgPSB0aGlzLlJhbmtfTG9hZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnN0YXR1cyA9IHRoaXMuUmFua19sb2FkX0Vycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVG9hc3QubWFrZShcIuWKoOi9veWksei0pe+8gVwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGl0ZW1BdEluZGV4KG5vZGU6IGNjLk5vZGUsIGRhdGE6IFJhbmtJdGVtLCBpKSB7XG4gICAgICAgIGxldCBuaWNrbmFtZSA9IGRhdGEubmlja05hbWUgfHwgZGF0YS5faWQgfHwgXCLmnKrmjojmnYPnjqnlrrZcIjtcbiAgICAgICAgdmFyIG5pY2sgPSBuaWNrbmFtZS5sZW5ndGggPD0gNSA/IG5pY2tuYW1lIDogbmlja25hbWUuc3Vic3RyKDAsIDEwKTtcbiAgICAgICAgbGV0IGhlYWQgPSBjY1V0aWwuZmluZChcImhlYWRcIiwgbm9kZSwgY2MuU3ByaXRlKTtcbiAgICAgICAgbGV0IG5pY2tMYWJlbCA9IGNjVXRpbC5maW5kKFwibmFtZVwiLCBub2RlLCBjYy5MYWJlbCk7XG4gICAgICAgIGxldCByYW5rTGFiZWwgPSBjY1V0aWwuZmluZChcInJhbmtcIiwgbm9kZSwgY2MuTGFiZWwpO1xuICAgICAgICBsZXQgc2NvcmVMYWJlbCA9IGNjVXRpbC5maW5kKFwic2NvcmVcIiwgbm9kZSwgY2MuTGFiZWwpO1xuICAgICAgICBsZXQgcmFua0ljb24gPSBjY1V0aWwuZmluZChcInJhbmtJY29uXCIsIG5vZGUsIGNjLlNwcml0ZSk7XG5cblxuICAgICAgICByYW5rSWNvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICByYW5rTGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKGkgPCAzKSB7XG4gICAgICAgICAgICBjY1V0aWwuc2V0RGlzcGxheShyYW5rSWNvbiwgXCJJbWcvcmFuay9cIiArIChpICsgMSkpO1xuICAgICAgICAgICAgcmFua0ljb24ubm9kZS5hY3RpdmUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByYW5rTGFiZWwuc3RyaW5nID0gaSArIDE7XG4gICAgICAgICAgICByYW5rTGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEuYXZhdGFyVXJsKSB7XG4gICAgICAgICAgICBjY1V0aWwuc2V0RGlzcGxheShoZWFkLCBkYXRhLmF2YXRhclVybCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjY1V0aWwuc2V0RGlzcGxheShoZWFkLCBcIkltZy9yYW5rL21vcmVuXCIpO1xuICAgICAgICB9XG4gICAgICAgIG5pY2tMYWJlbC5zdHJpbmcgPSBuaWNrO1xuICAgICAgICBzY29yZUxhYmVsLnN0cmluZyA9ICh0aGlzLmlzUGxheWluZ0RhaWx5ID8gZGF0YS5jaGFsbGVuZ2VsZXZlbCA6IGRhdGEubGV2ZWwgfHwgMCkgKyBcIuWFs1wiO1xuICAgIH1cblxuICAgIGNoZWNrVXNlclJhbmsoKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnJhbmtsaXN0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yYW5rbGlzdFtrZXldLm9wZW5JZCA9PSBQbGF5ZXJJbmZvLm9wZW5JZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubHZSYW5rID0gcGFyc2VJbnQoa2V5KSArIDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sdlJhbmsgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNsaWNrX3NoYXJlKHYpIHtcbiAgICAgICAgRGV2aWNlLnBsYXlTZngoXCJidXR0b25cIilcbiAgICAgICAgUGxhdGZvcm0uc2hhcmUoKTtcbiAgICB9XG5cbiAgICBjbGlja19jaGFsbGVuZ2UoKSB7XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nRGFpbHkgPSB0cnVlO1xuICAgICAgICBsZXQgdG9nZ2xlID0gdGhpcy5yYWRpb0dyb3VwLnRvZ2dsZUl0ZW1zLmZpbmQodiA9PiB2LmlzQ2hlY2tlZClcbiAgICAgICAgaWYgKFVJRnVuY3Rpb25zLmdldFRvZ2dsZUluZGV4KHRvZ2dsZSkgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jbGlja19mcmllbmQoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yYW5rbGlzdCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmNsaWNrX3dvcmxkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGlja19ub3JtYWwoKSB7XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nRGFpbHkgPSBmYWxzZTtcbiAgICAgICAgbGV0IHRvZ2dsZSA9IHRoaXMucmFkaW9Hcm91cC50b2dnbGVJdGVtcy5maW5kKHYgPT4gdi5pc0NoZWNrZWQpXG4gICAgICAgIGlmIChVSUZ1bmN0aW9ucy5nZXRUb2dnbGVJbmRleCh0b2dnbGUpID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tfZnJpZW5kKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmFua2xpc3QgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5jbGlja193b3JsZCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=