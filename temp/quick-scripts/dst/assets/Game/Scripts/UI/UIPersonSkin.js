
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIPersonSkin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1b17carlihPO5d0gz69nKHV', 'UIPersonSkin');
// Game/Scripts/UI/UIPersonSkin.ts

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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecorateType = exports.SkinType = exports.TwoType = void 0;
var mvcView_1 = require("../../../framework/ui/mvcView");
var event_1 = require("../../../framework/core/event");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var UserInfo_1 = require("../../../framework/extension/weak_net_game/UserInfo");
var Platform_1 = require("../../../framework/extension/Platform");
var Unity_1 = require("../Common/Unity");
var LoadingScene_1 = require("../Common/Base/LoadingScene");
var _b = cc._decorator, ccclass = _b.ccclass, property = _b.property;
var TabType;
(function (TabType) {
    TabType[TabType["Female"] = 1] = "Female";
    TabType[TabType["Male"] = 2] = "Male";
})(TabType || (TabType = {}));
var TwoType;
(function (TwoType) {
    TwoType[TwoType["Skin"] = 0] = "Skin";
    TwoType[TwoType["Collection"] = 1] = "Collection";
})(TwoType = exports.TwoType || (exports.TwoType = {}));
var SkinType;
(function (SkinType) {
    SkinType[SkinType["Hair"] = 0] = "Hair";
    SkinType[SkinType["Hat"] = 1] = "Hat";
    SkinType[SkinType["Up"] = 2] = "Up";
    SkinType[SkinType["Down"] = 3] = "Down";
    SkinType[SkinType["Misc"] = 4] = "Misc";
    SkinType[SkinType["Theme"] = 5] = "Theme";
    SkinType[SkinType["Key"] = 6] = "Key";
})(SkinType = exports.SkinType || (exports.SkinType = {}));
var SkinTypeProp = (_a = {},
    _a[SkinType.Hair] = { name: "头发", color: "#FA8F4A" },
    _a[SkinType.Hat] = { name: "帽子", color: "#FA8F4A" },
    _a[SkinType.Up] = { name: "上身", color: "#FA8F4A" },
    _a[SkinType.Down] = { name: "下身", color: "#FA8F4A" },
    _a[SkinType.Misc] = { name: "附件", color: "#00D893" },
    _a[SkinType.Theme] = { name: "主题背景", color: "#0B88FF" },
    _a[SkinType.Key] = { name: "钥匙", color: "#00D893" },
    _a);
var DecorateType;
(function (DecorateType) {
    DecorateType[DecorateType["BaiJian"] = 1] = "BaiJian";
    DecorateType[DecorateType["DiBan"] = 2] = "DiBan";
    DecorateType[DecorateType["QiangZhi"] = 3] = "QiangZhi";
    DecorateType[DecorateType["DiTan"] = 4] = "DiTan";
    DecorateType[DecorateType["GuiZhi"] = 5] = "GuiZhi";
    DecorateType[DecorateType["ChuangLian"] = 6] = "ChuangLian";
    DecorateType[DecorateType["ShaFa"] = 7] = "ShaFa";
})(DecorateType = exports.DecorateType || (exports.DecorateType = {}));
var UIPersonSkin = /** @class */ (function (_super) {
    __extends(UIPersonSkin, _super);
    function UIPersonSkin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listLayout = null;
        _this.decorateListLayout = null;
        _this.layout = null;
        _this.label_star_free = null;
        _this.skeleton_1 = null;
        _this.skeleton_2 = null;
        _this.qiangzhi = null;
        _this.diban = null;
        _this.guizhi = null;
        _this.baijians = [];
        _this.chuanglian = null;
        _this.shafa = null;
        _this.ditan = null;
        _this.zhezhao = null;
        // layouts: cc.Layout = null
        _this._tab = -1;
        _this.tabs_loaded = [];
        //@ts-ignore
        _this.all_cls = {};
        _this._first = true;
        _this._skins = [];
        _this._decorates = [];
        _this.path = 'Img/decorate';
        return _this;
    }
    Object.defineProperty(UIPersonSkin.prototype, "tabIndex", {
        get: function () {
            return this._tab;
        },
        set: function (value) {
            if (value == -1) {
                value = TabType.Female;
            }
            if (this._tab != value) {
                this._tab = value;
                this.selectTab(value);
            }
        },
        enumerable: false,
        configurable: true
    });
    UIPersonSkin.prototype.onLoad = function () {
        var _this = this;
        this.register(this.label_star_free, function () { return "获取" + csv.Config.skin_store_free_star; });
        if (LoadingScene_1.default.param == TwoType.Collection) {
            this.initDecorateClass(1);
        }
        else {
            this.initClass(0);
        }
        this._tab = 1;
        this.updateTab(this._tab);
        event_1.evt.on("Skin.select", this.onSelect, this);
        event_1.evt.on("Decorate.select", this.onDecorateSelect, this);
        event_1.evt.on("UISkin.checkLock", this.check_lockSkin, this);
        // this.layout.children.forEach((_, i) => {
        //     _.opacity = (i === 0 ? 255 : 120);
        // });
        this._skins = this.skinsForType(0);
        this.register(this.listLayout, function (_) { return _this._skins; });
        this.register(this.decorateListLayout, function (_) { return _this._decorates; });
        // 墙纸
        this.register(this.qiangzhi, function (_) { return _this.decoratePathForType(DecorateType.QiangZhi, _this.path + "/qiangzhi/"); });
        // 地板
        this.register(this.diban, function (_) { return _this.decoratePathForType(DecorateType.DiBan, _this.path + "/diban/"); });
        // 柜子
        this.register(this.guizhi, function (_) { return _this.decoratePathForType(DecorateType.GuiZhi, _this.path + "/guizi/"); });
        // 摆件
        this.baijians.forEach(function (_, i) {
            _this.onVisible(_.node, function (_) { return PlayerInfo_1.PlayerInfo.isDecorateUsing(i + 1); });
        });
        // 窗帘
        this.register(this.chuanglian, function (_) { return _this.decoratePathForType(DecorateType.ChuangLian, _this.path + "/chuanglian/"); });
        // 沙发
        this.register(this.shafa, function (_) { return _this.decoratePathForType(DecorateType.ShaFa, _this.path + "/shafa/"); });
        // 地毯
        this.register(this.ditan, function (_) { return _this.decoratePathForType(DecorateType.DiTan, _this.path + "/ditan/"); });
    };
    UIPersonSkin.prototype.start = function () {
        Unity_1.default.loadSkins(this["skeleton_" + this.tabIndex], this.tabIndex);
        this.selectTab(this.tabIndex);
        this.layout.children.forEach(function (v, i) {
            if (LoadingScene_1.default.param == TwoType.Collection) {
                i < 12 && (v.active = false);
            }
            else {
                i >= 12 && (v.active = false);
            }
        });
    };
    UIPersonSkin.prototype.onEnable = function () {
        // 引导
        // if (UserInfo.skin_guide === 0 && PlayerInfo.level === 5 && !PlayerInfo.skins[20]) {
        //     this.initClass(4);
        //     this.zhezhao.active = true;
        //     let txt = this.zhezhao.getComponentInChildren(cc.Label);
        //     if (txt) {
        //         txt.string = !PlayerInfo.skins[20] ? `点击按钮解锁新获得的皮肤` : `再次点击选择可使用该皮肤`;
        //     }
        // }
    };
    UIPersonSkin.prototype.onDestroy = function () {
        event_1.evt.off(this);
    };
    UIPersonSkin.prototype.onSelect = function (data) {
        ToastManager_1.Toast.make("已选择:" + data.name);
        Unity_1.default.loadSkins(this["skeleton_" + this.tabIndex], this.tabIndex);
        // this.selectTab(this.tabIndex);
        this.render();
    };
    UIPersonSkin.prototype.onDecorateSelect = function () {
        this.render();
    };
    UIPersonSkin.prototype.selectTab = function (index) {
        this.tabIndex = index;
        this.updateTab(index);
    };
    UIPersonSkin.prototype.enableCls = function () {
        var clsTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            clsTypes[_i] = arguments[_i];
        }
        for (var k in this.all_cls) {
            var tk = parseInt(k);
            var tv = this.all_cls[k];
            var b = clsTypes.indexOf(tk) >= 0;
            tv.title.active = b;
            tv.content.active = b;
        }
    };
    UIPersonSkin.prototype.updateTab = function (index) {
        this.enableCls(SkinType.Hair, SkinType.Hat, SkinType.Up, SkinType.Down, SkinType.Misc);
        if (this._first == true) {
            this._first = false;
            return;
        }
        this.render();
    };
    // 女孩  老人
    UIPersonSkin.prototype.initClass = function (type) {
        this.listLayout.node.parent.parent.active = true;
        this.decorateListLayout.node.parent.parent.active = false;
        this._skins = this.skinsForType(type);
    };
    // 装饰
    UIPersonSkin.prototype.initDecorateClass = function (type) {
        this.listLayout.node.parent.parent.active = false;
        this.decorateListLayout.node.parent.parent.active = true;
        this._decorates = this.decoratesForType(type);
    };
    UIPersonSkin.prototype.skinsForType = function (type) {
        var _this = this;
        var skins = csv.Skin.search(function (v, i) {
            return v.type == _this.tabIndex && v.subType == type;
        });
        return skins;
    };
    UIPersonSkin.prototype.decoratesForType = function (type) {
        var decorates = csv.Collection.search(function (v, i) {
            return v.type == type;
        });
        return decorates;
    };
    /**
     * 根据装饰类型找正在使用的资源
     * @param type 装饰类型
     */
    UIPersonSkin.prototype.decoratePathForType = function (type, path) {
        var data = this.decoratesForType(type).find(function (v) { return PlayerInfo_1.PlayerInfo.isDecorateUsing(v.id); });
        return data && data.res ? "" + path + data.res : '';
    };
    UIPersonSkin.prototype.onToggle = function (toggle, index) {
        index = parseInt(index);
        if (index < 10) {
            if (index < 5) {
                this.tabIndex = 1;
                this.initClass(index);
                this.selectTab(1);
            }
            else {
                this.tabIndex = 2;
                this.initClass(index - 5);
                this.selectTab(2);
            }
            Unity_1.default.loadSkins(this["skeleton_" + this.tabIndex], this.tabIndex);
        }
        else {
            this.initDecorateClass(index - 9);
            this.render();
        }
        // this.layout.children.forEach((_, i) => {
        //     _.opacity = (i === index ? 255 : 120);
        // });
    };
    UIPersonSkin.prototype.onShow = function () {
        event_1.evt.emit('UISkin.checkLock');
        this.render();
    };
    UIPersonSkin.prototype.onHidden = function () {
        UserInfo_1.UserInfo.save();
        PlayerInfo_1.PlayerInfo.save();
    };
    UIPersonSkin.prototype.click_guideBtn = function () {
        if (!PlayerInfo_1.PlayerInfo.skins[20]) {
            event_1.evt.emit('Guide.unlockSkin');
            var txt = this.zhezhao.getComponentInChildren(cc.Label);
            txt && (txt.string = "\u518D\u6B21\u70B9\u51FB\u9009\u62E9\u53EF\u4F7F\u7528\u8BE5\u76AE\u80A4");
        }
        else {
            event_1.evt.emit('Guide.useSkin');
            this.zhezhao.active = false;
        }
    };
    UIPersonSkin.prototype.click_close = function () {
        LoadingScene_1.default.goto("Main");
        //save somtthing
    };
    UIPersonSkin.prototype.click_getstar = function () {
        Platform_1.default.watch_video(this.video_callback, this);
    };
    UIPersonSkin.prototype.video_callback = function () {
        PlayerInfo_1.PlayerInfo.star += csv.Config.skin_store_free_star || 3;
        PlayerInfo_1.PlayerInfo.save('star');
    };
    UIPersonSkin.prototype.check_lockSkin = function () {
        UserInfo_1.UserInfo.isunlock_men = 0;
        UserInfo_1.UserInfo.isunlock_girl = 0;
        for (var i = 1; i <= 5; i++) {
            UserInfo_1.UserInfo["isunlock_girl" + i] = 0;
            UserInfo_1.UserInfo["isunlock_men" + i] = 0;
        }
        for (var i = 1; i <= csv.Skin.values.length; i++) {
            var data = csv.Skin.get(i);
            if (((PlayerInfo_1.PlayerInfo.level >= data.unlock1 && data.unlockType == 1) || (data.unlockType == 2 && PlayerInfo_1.PlayerInfo.star >= data.unlock2))
                && !PlayerInfo_1.PlayerInfo.isSkinUnlocked(data.id)) {
                if (data.type == 1) {
                    UserInfo_1.UserInfo.isunlock_girl = 1;
                }
                else if (data.type == 2) {
                    UserInfo_1.UserInfo.isunlock_men = 1;
                }
                if (data.subType < 5) {
                    if (data.type == 1) {
                        UserInfo_1.UserInfo["isunlock_girl" + (data.subType + 1)] = 1;
                    }
                    else if (data.type == 2) {
                        UserInfo_1.UserInfo["isunlock_men" + (data.subType + 1)] = 1;
                    }
                }
            }
        }
    };
    __decorate([
        property(cc.Layout)
    ], UIPersonSkin.prototype, "listLayout", void 0);
    __decorate([
        property(cc.Layout)
    ], UIPersonSkin.prototype, "decorateListLayout", void 0);
    __decorate([
        property(cc.Node)
    ], UIPersonSkin.prototype, "layout", void 0);
    __decorate([
        property(cc.Label)
    ], UIPersonSkin.prototype, "label_star_free", void 0);
    __decorate([
        property(dragonBones.ArmatureDisplay)
    ], UIPersonSkin.prototype, "skeleton_1", void 0);
    __decorate([
        property(dragonBones.ArmatureDisplay)
    ], UIPersonSkin.prototype, "skeleton_2", void 0);
    __decorate([
        property(cc.Sprite)
    ], UIPersonSkin.prototype, "qiangzhi", void 0);
    __decorate([
        property(cc.Sprite)
    ], UIPersonSkin.prototype, "diban", void 0);
    __decorate([
        property(cc.Sprite)
    ], UIPersonSkin.prototype, "guizhi", void 0);
    __decorate([
        property({ type: cc.Sprite })
    ], UIPersonSkin.prototype, "baijians", void 0);
    __decorate([
        property(cc.Sprite)
    ], UIPersonSkin.prototype, "chuanglian", void 0);
    __decorate([
        property(cc.Sprite)
    ], UIPersonSkin.prototype, "shafa", void 0);
    __decorate([
        property(cc.Sprite)
    ], UIPersonSkin.prototype, "ditan", void 0);
    __decorate([
        property(cc.Node)
    ], UIPersonSkin.prototype, "zhezhao", void 0);
    UIPersonSkin = __decorate([
        ccclass
    ], UIPersonSkin);
    return UIPersonSkin;
}(mvcView_1.default));
exports.default = UIPersonSkin;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJUGVyc29uU2tpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHlEQUFvRDtBQUNwRCx1REFBb0Q7QUFDcEQsd0RBQXVEO0FBQ3ZELG1FQUEyRDtBQUMzRCxnRkFBK0U7QUFDL0Usa0VBQTZEO0FBQzdELHlDQUFvQztBQUNwQyw0REFBdUQ7QUFFakQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxPQUdKO0FBSEQsV0FBSyxPQUFPO0lBQ1IseUNBQVUsQ0FBQTtJQUNWLHFDQUFJLENBQUE7QUFDUixDQUFDLEVBSEksT0FBTyxLQUFQLE9BQU8sUUFHWDtBQUVELElBQVksT0FHWDtBQUhELFdBQVksT0FBTztJQUNmLHFDQUFRLENBQUE7SUFDUixpREFBYyxDQUFBO0FBQ2xCLENBQUMsRUFIVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFHbEI7QUFFRCxJQUFZLFFBUVg7QUFSRCxXQUFZLFFBQVE7SUFDaEIsdUNBQVEsQ0FBQTtJQUNSLHFDQUFPLENBQUE7SUFDUCxtQ0FBRSxDQUFBO0lBQ0YsdUNBQUksQ0FBQTtJQUNKLHVDQUFJLENBQUE7SUFDSix5Q0FBSyxDQUFBO0lBQ0wscUNBQUcsQ0FBQTtBQUNQLENBQUMsRUFSVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQVFuQjtBQUVELElBQUksWUFBWTtJQUNaLEdBQUMsUUFBUSxDQUFDLElBQUksSUFBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtJQUNqRCxHQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDaEQsR0FBQyxRQUFRLENBQUMsRUFBRSxJQUFHLEVB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RSxDQUFDLE1BQU0sQ0FBQzsrQ0FDSTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNNO0lBM0NQLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0E4U2hDO0lBQUQsbUJBQUM7Q0E5U0QsQUE4U0MsQ0E5U3lDLGlCQUFPLEdBOFNoRDtrQkE5U29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IG12Y1ZpZXcgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9tdmNWaWV3XCI7XG5pbXBvcnQgeyBldnQgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2NvcmUvZXZlbnRcIjtcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi4vQ29tbW9uL0Jhc2UvUGxheWVySW5mb1wiO1xuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL1RvYXN0TWFuYWdlclwiO1xuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi93ZWFrX25ldF9nYW1lL1VzZXJJbmZvXCI7XG5pbXBvcnQgUGxhdGZvcm0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vUGxhdGZvcm1cIjtcbmltcG9ydCBVbml0eSBmcm9tIFwiLi4vQ29tbW9uL1VuaXR5XCI7XG5pbXBvcnQgTG9hZGluZ1NjZW5lIGZyb20gXCIuLi9Db21tb24vQmFzZS9Mb2FkaW5nU2NlbmVcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuZW51bSBUYWJUeXBlIHtcbiAgICBGZW1hbGUgPSAxLFxuICAgIE1hbGUsXG59XG5cbmV4cG9ydCBlbnVtIFR3b1R5cGUge1xuICAgIFNraW4gPSAwLFxuICAgIENvbGxlY3Rpb24gPSAxLFxufVxuXG5leHBvcnQgZW51bSBTa2luVHlwZSB7XG4gICAgSGFpciA9IDAsXG4gICAgSGF0ID0gMSxcbiAgICBVcCxcbiAgICBEb3duLFxuICAgIE1pc2MsXG4gICAgVGhlbWUsXG4gICAgS2V5XG59XG5cbmxldCBTa2luVHlwZVByb3AgPSB7XG4gICAgW1NraW5UeXBlLkhhaXJdOiB7IG5hbWU6IFwi5aS05Y+RXCIsIGNvbG9yOiBcIiNGQThGNEFcIiB9LFxuICAgIFtTa2luVHlwZS5IYXRdOiB7IG5hbWU6IFwi5bi95a2QXCIsIGNvbG9yOiBcIiNGQThGNEFcIiB9LFxuICAgIFtTa2luVHlwZS5VcF06IHsgbmFtZTogXCLkuIrouqtcIiwgY29sb3I6IFwiI0ZBOEY0QVwiIH0sXG4gICAgW1NraW5UeXBlLkRvd25dOiB7IG5hbWU6IFwi5LiL6LqrXCIsIGNvbG9yOiBcIiNGQThGNEFcIiB9LFxuICAgIFtTa2luVHlwZS5NaXNjXTogeyBuYW1lOiBcIumZhOS7tlwiLCBjb2xvcjogXCIjMDBEODkzXCIgfSxcbiAgICBbU2tpblR5cGUuVGhlbWVdOiB7IG5hbWU6IFwi5Li76aKY6IOM5pmvXCIsIGNvbG9yOiBcIiMwQjg4RkZcIiB9LFxuICAgIFtTa2luVHlwZS5LZXldOiB7IG5hbWU6IFwi6ZKl5YyZXCIsIGNvbG9yOiBcIiMwMEQ4OTNcIiB9LFxufVxuXG5leHBvcnQgZW51bSBEZWNvcmF0ZVR5cGUge1xuICAgIEJhaUppYW4gPSAxLFxuICAgIERpQmFuID0gMixcbiAgICBRaWFuZ1poaSxcbiAgICBEaVRhbixcbiAgICBHdWlaaGksXG4gICAgQ2h1YW5nTGlhbixcbiAgICBTaGFGYSxcbn1cblxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlQZXJzb25Ta2luIGV4dGVuZHMgbXZjVmlldyB7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5MYXlvdXQpXG4gICAgbGlzdExheW91dDogY2MuTGF5b3V0ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYXlvdXQpXG4gICAgZGVjb3JhdGVMaXN0TGF5b3V0OiBjYy5MYXlvdXQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGF5b3V0OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbF9zdGFyX2ZyZWU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkpXG4gICAgc2tlbGV0b25fMTogZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkpXG4gICAgc2tlbGV0b25fMjogZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgcWlhbmd6aGk6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGRpYmFuOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBndWl6aGk6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5TcHJpdGUgfSlcbiAgICBiYWlqaWFuczogY2MuU3ByaXRlW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgY2h1YW5nbGlhbjogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgc2hhZmE6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGRpdGFuOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgemhlemhhbzogY2MuTm9kZSA9IG51bGw7XG5cblxuICAgIC8vIGxheW91dHM6IGNjLkxheW91dCA9IG51bGxcblxuICAgIHByaXZhdGUgX3RhYjogbnVtYmVyID0gLTE7XG4gICAgcHVibGljIGdldCB0YWJJbmRleCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGFiO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHRhYkluZGV4KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHZhbHVlID09IC0xKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IFRhYlR5cGUuRmVtYWxlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl90YWIgIT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3RhYiA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RUYWIodmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0YWJzX2xvYWRlZDogW10gPSBbXTtcblxuXG4gICAgLy9AdHMtaWdub3JlXG4gICAgYWxsX2NsczogeyBbaW5kZXg6IG51bWJlcl06IHsgdGl0bGU6IGNjLk5vZGUsIGNvbnRlbnQ6IGNjLk5vZGUgfSB9ID0ge307XG5cbiAgICBfZmlyc3QgPSB0cnVlO1xuXG4gICAgX3NraW5zID0gW107XG4gICAgX2RlY29yYXRlcyA9IFtdO1xuXG4gICAgcGF0aCA9ICdJbWcvZGVjb3JhdGUnO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKHRoaXMubGFiZWxfc3Rhcl9mcmVlLCAoKSA9PiBcIuiOt+WPllwiICsgY3N2LkNvbmZpZy5za2luX3N0b3JlX2ZyZWVfc3RhcilcbiAgICAgICAgaWYgKExvYWRpbmdTY2VuZS5wYXJhbSA9PSBUd29UeXBlLkNvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdERlY29yYXRlQ2xhc3MoMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluaXRDbGFzcygwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90YWIgPSAxO1xuICAgICAgICB0aGlzLnVwZGF0ZVRhYih0aGlzLl90YWIpO1xuICAgICAgICBldnQub24oXCJTa2luLnNlbGVjdFwiLCB0aGlzLm9uU2VsZWN0LCB0aGlzKTtcbiAgICAgICAgZXZ0Lm9uKFwiRGVjb3JhdGUuc2VsZWN0XCIsIHRoaXMub25EZWNvcmF0ZVNlbGVjdCwgdGhpcyk7XG4gICAgICAgIGV2dC5vbihcIlVJU2tpbi5jaGVja0xvY2tcIiwgdGhpcy5jaGVja19sb2NrU2tpbiwgdGhpcyk7XG5cbiAgICAgICAgLy8gdGhpcy5sYXlvdXQuY2hpbGRyZW4uZm9yRWFjaCgoXywgaSkgPT4ge1xuICAgICAgICAvLyAgICAgXy5vcGFjaXR5ID0gKGkgPT09IDAgPyAyNTUgOiAxMjApO1xuICAgICAgICAvLyB9KTtcblxuICAgICAgICB0aGlzLl9za2lucyA9IHRoaXMuc2tpbnNGb3JUeXBlKDApO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKHRoaXMubGlzdExheW91dCwgXyA9PiB0aGlzLl9za2lucyk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIodGhpcy5kZWNvcmF0ZUxpc3RMYXlvdXQsIF8gPT4gdGhpcy5fZGVjb3JhdGVzKTtcblxuICAgICAgICAvLyDlopnnurhcbiAgICAgICAgdGhpcy5yZWdpc3Rlcih0aGlzLnFpYW5nemhpLCBfID0+IHRoaXMuZGVjb3JhdGVQYXRoRm9yVHlwZShEZWNvcmF0ZVR5cGUuUWlhbmdaaGksIGAke3RoaXMucGF0aH0vcWlhbmd6aGkvYCkpO1xuICAgICAgICAvLyDlnLDmnb9cbiAgICAgICAgdGhpcy5yZWdpc3Rlcih0aGlzLmRpYmFuLCBfID0+IHRoaXMuZGVjb3JhdGVQYXRoRm9yVHlwZShEZWNvcmF0ZVR5cGUuRGlCYW4sIGAke3RoaXMucGF0aH0vZGliYW4vYCkpO1xuICAgICAgICAvLyDmn5zlrZBcbiAgICAgICAgdGhpcy5yZWdpc3Rlcih0aGlzLmd1aXpoaSwgXyA9PiB0aGlzLmRlY29yYXRlUGF0aEZvclR5cGUoRGVjb3JhdGVUeXBlLkd1aVpoaSwgYCR7dGhpcy5wYXRofS9ndWl6aS9gKSk7XG4gICAgICAgIC8vIOaRhuS7tlxuICAgICAgICB0aGlzLmJhaWppYW5zLmZvckVhY2goKF8sIGkpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25WaXNpYmxlKF8ubm9kZSwgXyA9PiBQbGF5ZXJJbmZvLmlzRGVjb3JhdGVVc2luZyhpICsgMSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g56qX5biYXG4gICAgICAgIHRoaXMucmVnaXN0ZXIodGhpcy5jaHVhbmdsaWFuLCBfID0+IHRoaXMuZGVjb3JhdGVQYXRoRm9yVHlwZShEZWNvcmF0ZVR5cGUuQ2h1YW5nTGlhbiwgYCR7dGhpcy5wYXRofS9jaHVhbmdsaWFuL2ApKTtcbiAgICAgICAgLy8g5rKZ5Y+RXG4gICAgICAgIHRoaXMucmVnaXN0ZXIodGhpcy5zaGFmYSwgXyA9PiB0aGlzLmRlY29yYXRlUGF0aEZvclR5cGUoRGVjb3JhdGVUeXBlLlNoYUZhLCBgJHt0aGlzLnBhdGh9L3NoYWZhL2ApKTtcbiAgICAgICAgLy8g5Zyw5q+vXG4gICAgICAgIHRoaXMucmVnaXN0ZXIodGhpcy5kaXRhbiwgXyA9PiB0aGlzLmRlY29yYXRlUGF0aEZvclR5cGUoRGVjb3JhdGVUeXBlLkRpVGFuLCBgJHt0aGlzLnBhdGh9L2RpdGFuL2ApKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgVW5pdHkubG9hZFNraW5zKHRoaXNbXCJza2VsZXRvbl9cIiArIHRoaXMudGFiSW5kZXhdLCB0aGlzLnRhYkluZGV4KTtcbiAgICAgICAgdGhpcy5zZWxlY3RUYWIodGhpcy50YWJJbmRleCk7XG5cbiAgICAgICAgdGhpcy5sYXlvdXQuY2hpbGRyZW4uZm9yRWFjaCgodiwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKExvYWRpbmdTY2VuZS5wYXJhbSA9PSBUd29UeXBlLkNvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpIDwgMTIgJiYgKHYuYWN0aXZlID0gZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpID49IDEyICYmICh2LmFjdGl2ZSA9IGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIC8vIOW8leWvvFxuICAgICAgICAvLyBpZiAoVXNlckluZm8uc2tpbl9ndWlkZSA9PT0gMCAmJiBQbGF5ZXJJbmZvLmxldmVsID09PSA1ICYmICFQbGF5ZXJJbmZvLnNraW5zWzIwXSkge1xuICAgICAgICAvLyAgICAgdGhpcy5pbml0Q2xhc3MoNCk7XG4gICAgICAgIC8vICAgICB0aGlzLnpoZXpoYW8uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgIGxldCB0eHQgPSB0aGlzLnpoZXpoYW8uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCk7XG4gICAgICAgIC8vICAgICBpZiAodHh0KSB7XG4gICAgICAgIC8vICAgICAgICAgdHh0LnN0cmluZyA9ICFQbGF5ZXJJbmZvLnNraW5zWzIwXSA/IGDngrnlh7vmjInpkq7op6PplIHmlrDojrflvpfnmoTnmq7ogqRgIDogYOWGjeasoeeCueWHu+mAieaLqeWPr+S9v+eUqOivpeearuiCpGA7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIGV2dC5vZmYodGhpcyk7XG4gICAgfVxuXG5cbiAgICBvblNlbGVjdChkYXRhOiBjc3YuU2tpbl9Sb3cpIHtcbiAgICAgICAgVG9hc3QubWFrZShcIuW3sumAieaLqTpcIiArIGRhdGEubmFtZSlcbiAgICAgICAgVW5pdHkubG9hZFNraW5zKHRoaXNbXCJza2VsZXRvbl9cIiArIHRoaXMudGFiSW5kZXhdLCB0aGlzLnRhYkluZGV4KTtcbiAgICAgICAgLy8gdGhpcy5zZWxlY3RUYWIodGhpcy50YWJJbmRleCk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgb25EZWNvcmF0ZVNlbGVjdCgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBzZWxlY3RUYWIoaW5kZXgpIHtcbiAgICAgICAgdGhpcy50YWJJbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLnVwZGF0ZVRhYihpbmRleCk7XG4gICAgfVxuXG4gICAgZW5hYmxlQ2xzKC4uLmNsc1R5cGVzKSB7XG4gICAgICAgIGZvciAobGV0IGsgaW4gdGhpcy5hbGxfY2xzKSB7XG4gICAgICAgICAgICBsZXQgdGsgPSBwYXJzZUludChrKTtcbiAgICAgICAgICAgIGxldCB0diA9IHRoaXMuYWxsX2Nsc1trXTtcbiAgICAgICAgICAgIGxldCBiID0gY2xzVHlwZXMuaW5kZXhPZih0aykgPj0gMDtcbiAgICAgICAgICAgIHR2LnRpdGxlLmFjdGl2ZSA9IGI7XG4gICAgICAgICAgICB0di5jb250ZW50LmFjdGl2ZSA9IGI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVUYWIoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5lbmFibGVDbHMoU2tpblR5cGUuSGFpciwgU2tpblR5cGUuSGF0LCBTa2luVHlwZS5VcCwgU2tpblR5cGUuRG93biwgU2tpblR5cGUuTWlzYylcbiAgICAgICAgaWYgKHRoaXMuX2ZpcnN0ID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpcnN0ID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICAvLyDlpbPlrakgIOiAgeS6ulxuICAgIGluaXRDbGFzcyh0eXBlKSB7XG4gICAgICAgIHRoaXMubGlzdExheW91dC5ub2RlLnBhcmVudC5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kZWNvcmF0ZUxpc3RMYXlvdXQubm9kZS5wYXJlbnQucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9za2lucyA9IHRoaXMuc2tpbnNGb3JUeXBlKHR5cGUpO1xuICAgIH1cblxuICAgIC8vIOijhemlsFxuICAgIGluaXREZWNvcmF0ZUNsYXNzKHR5cGUpIHtcbiAgICAgICAgdGhpcy5saXN0TGF5b3V0Lm5vZGUucGFyZW50LnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kZWNvcmF0ZUxpc3RMYXlvdXQubm9kZS5wYXJlbnQucGFyZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX2RlY29yYXRlcyA9IHRoaXMuZGVjb3JhdGVzRm9yVHlwZSh0eXBlKTtcbiAgICB9XG5cbiAgICBza2luc0ZvclR5cGUodHlwZSkge1xuICAgICAgICBsZXQgc2tpbnMgPSBjc3YuU2tpbi5zZWFyY2goKHYsIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2LnR5cGUgPT0gdGhpcy50YWJJbmRleCAmJiB2LnN1YlR5cGUgPT0gdHlwZTtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHNraW5zO1xuICAgIH1cblxuICAgIGRlY29yYXRlc0ZvclR5cGUodHlwZSkge1xuICAgICAgICBsZXQgZGVjb3JhdGVzID0gY3N2LkNvbGxlY3Rpb24uc2VhcmNoKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdi50eXBlID09IHR5cGU7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBkZWNvcmF0ZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5qC55o2u6KOF6aWw57G75Z6L5om+5q2j5Zyo5L2/55So55qE6LWE5rqQXG4gICAgICogQHBhcmFtIHR5cGUg6KOF6aWw57G75Z6LXG4gICAgICovXG4gICAgZGVjb3JhdGVQYXRoRm9yVHlwZSh0eXBlLCBwYXRoKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5kZWNvcmF0ZXNGb3JUeXBlKHR5cGUpLmZpbmQodiA9PiBQbGF5ZXJJbmZvLmlzRGVjb3JhdGVVc2luZyh2LmlkKSk7XG4gICAgICAgIHJldHVybiBkYXRhICYmIGRhdGEucmVzID8gYCR7cGF0aH0ke2RhdGEucmVzfWAgOiAnJztcbiAgICB9XG5cbiAgICBvblRvZ2dsZSh0b2dnbGU6IGNjLlRvZ2dsZSwgaW5kZXgpIHtcbiAgICAgICAgaW5kZXggPSBwYXJzZUludChpbmRleCk7XG4gICAgICAgIGlmIChpbmRleCA8IDEwKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPCA1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJJbmRleCA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0Q2xhc3MoaW5kZXgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VGFiKDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYkluZGV4ID0gMjtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRDbGFzcyhpbmRleCAtIDUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VGFiKDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgVW5pdHkubG9hZFNraW5zKHRoaXNbXCJza2VsZXRvbl9cIiArIHRoaXMudGFiSW5kZXhdLCB0aGlzLnRhYkluZGV4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdERlY29yYXRlQ2xhc3MoaW5kZXggLSA5KTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzLmxheW91dC5jaGlsZHJlbi5mb3JFYWNoKChfLCBpKSA9PiB7XG4gICAgICAgIC8vICAgICBfLm9wYWNpdHkgPSAoaSA9PT0gaW5kZXggPyAyNTUgOiAxMjApO1xuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBvblNob3coKSB7XG4gICAgICAgIGV2dC5lbWl0KCdVSVNraW4uY2hlY2tMb2NrJyk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgb25IaWRkZW4oKSB7XG4gICAgICAgIFVzZXJJbmZvLnNhdmUoKTtcbiAgICAgICAgUGxheWVySW5mby5zYXZlKCk7XG4gICAgfVxuXG4gICAgY2xpY2tfZ3VpZGVCdG4oKSB7XG4gICAgICAgIGlmICghUGxheWVySW5mby5za2luc1syMF0pIHtcbiAgICAgICAgICAgIGV2dC5lbWl0KCdHdWlkZS51bmxvY2tTa2luJyk7XG4gICAgICAgICAgICBsZXQgdHh0ID0gdGhpcy56aGV6aGFvLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpO1xuICAgICAgICAgICAgdHh0ICYmICh0eHQuc3RyaW5nID0gYOWGjeasoeeCueWHu+mAieaLqeWPr+S9v+eUqOivpeearuiCpGApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXZ0LmVtaXQoJ0d1aWRlLnVzZVNraW4nKTtcbiAgICAgICAgICAgIHRoaXMuemhlemhhby5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsaWNrX2Nsb3NlKCkge1xuICAgICAgICBMb2FkaW5nU2NlbmUuZ290byhcIk1haW5cIik7XG4gICAgICAgIC8vc2F2ZSBzb210dGhpbmdcbiAgICB9XG5cbiAgICBjbGlja19nZXRzdGFyKCkge1xuICAgICAgICBQbGF0Zm9ybS53YXRjaF92aWRlbyh0aGlzLnZpZGVvX2NhbGxiYWNrLCB0aGlzKVxuICAgIH1cblxuICAgIHZpZGVvX2NhbGxiYWNrKCkge1xuICAgICAgICBQbGF5ZXJJbmZvLnN0YXIgKz0gY3N2LkNvbmZpZy5za2luX3N0b3JlX2ZyZWVfc3RhciB8fCAzO1xuICAgICAgICBQbGF5ZXJJbmZvLnNhdmUoJ3N0YXInKTtcbiAgICB9XG5cbiAgICBjaGVja19sb2NrU2tpbigpIHtcbiAgICAgICAgVXNlckluZm8uaXN1bmxvY2tfbWVuID0gMDtcbiAgICAgICAgVXNlckluZm8uaXN1bmxvY2tfZ2lybCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDU7IGkrKykge1xuICAgICAgICAgICAgVXNlckluZm9bYGlzdW5sb2NrX2dpcmwke2l9YF0gPSAwO1xuICAgICAgICAgICAgVXNlckluZm9bYGlzdW5sb2NrX21lbiR7aX1gXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBjc3YuU2tpbi52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gY3N2LlNraW4uZ2V0KGkpO1xuICAgICAgICAgICAgaWYgKCgoUGxheWVySW5mby5sZXZlbCA+PSBkYXRhLnVubG9jazEgJiYgZGF0YS51bmxvY2tUeXBlID09IDEpIHx8IChkYXRhLnVubG9ja1R5cGUgPT0gMiAmJiBQbGF5ZXJJbmZvLnN0YXIgPj0gZGF0YS51bmxvY2syKSlcbiAgICAgICAgICAgICAgICAmJiAhUGxheWVySW5mby5pc1NraW5VbmxvY2tlZChkYXRhLmlkKSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5pc3VubG9ja19naXJsID0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudHlwZSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLmlzdW5sb2NrX21lbiA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnN1YlR5cGUgPCA1KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm9bYGlzdW5sb2NrX2dpcmwke2RhdGEuc3ViVHlwZSArIDF9YF0gPSAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudHlwZSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mb1tgaXN1bmxvY2tfbWVuJHtkYXRhLnN1YlR5cGUgKyAxfWBdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19