"use strict";
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