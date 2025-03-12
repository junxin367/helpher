"use strict";
cc._RF.push(module, '1f339zSGzVJeKBnaWMjJbHU', 'UISkin');
// Game/Scripts/UI/UISkin.ts

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
exports.SkinType = void 0;
var mvcView_1 = require("../../../framework/ui/mvcView");
var ccUtil_1 = require("../../../framework/utils/ccUtil");
var event_1 = require("../../../framework/core/event");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var UserInfo_1 = require("../../../framework/extension/weak_net_game/UserInfo");
var Platform_1 = require("../../../framework/extension/Platform");
var _b = cc._decorator, ccclass = _b.ccclass, property = _b.property;
var TabType;
(function (TabType) {
    TabType[TabType["Female"] = 1] = "Female";
    TabType[TabType["Male"] = 2] = "Male";
    TabType[TabType["Theme"] = 3] = "Theme";
})(TabType || (TabType = {}));
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
var UISkin = /** @class */ (function (_super) {
    __extends(UISkin, _super);
    function UISkin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layout = null;
        _this.titleNode = null;
        _this.listLayout = null;
        _this.label_star_free = null;
        // layouts: cc.Layout = null
        _this._tab = 2;
        _this.tabs_loaded = [];
        //@ts-ignore
        _this.all_cls = {};
        _this._first = true;
        return _this;
    }
    Object.defineProperty(UISkin.prototype, "tabIndex", {
        get: function () {
            return this._tab;
        },
        set: function (value) {
            if (value == -1) {
                value = TabType.Theme;
            }
            if (this._tab != value) {
                this._tab = value;
                this.selectTab(value);
            }
        },
        enumerable: false,
        configurable: true
    });
    UISkin.prototype.onLoad = function () {
        this.register(this.label_star_free, function () { return "获取" + csv.Config.skin_store_free_star; });
        this.loadTab();
        this._tab = 3;
        this.updateTab(this._tab);
        event_1.evt.on("Skin.select", this.onSelect, this);
        Platform_1.default.hideBannerAd();
    };
    UISkin.prototype.onDestroy = function () {
        event_1.evt.off("Skin.select", this.onSelect, this);
    };
    UISkin.prototype.onSelect = function (data) {
        //refresh other 
        var node = this.all_cls[data.subType].content;
        var list = node.getComponent(cc.Layout);
        this.renderLayout(list);
        ToastManager_1.Toast.make("已选择:" + data.name);
        if (data.subType == SkinType.Theme) {
            UserInfo_1.UserInfo.theme = data.data;
        }
        else if (data.subType == SkinType.Key) {
            UserInfo_1.UserInfo.theme_key = data.data;
        }
        UserInfo_1.UserInfo.save('theme');
        UserInfo_1.UserInfo.save('theme_key');
    };
    UISkin.prototype.loadTab = function () {
        for (var i = 0; i <= SkinType.Key; i++) {
            this.initClass(i);
        }
        this.titleNode.active = false;
        this.listLayout.node.active = false;
    };
    UISkin.prototype.selectTab = function (index) {
        this.tabIndex = index;
        this.updateTab(index);
    };
    UISkin.prototype.enableCls = function () {
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
    UISkin.prototype.updateTab = function (index) {
        if (index == TabType.Theme) {
            this.enableCls(SkinType.Theme, SkinType.Key);
            // } else if (index == TabType.Male) {
            //     this.enableCls(SkinType.Hair, SkinType.Up, SkinType.Down, SkinType.Misc)
        }
        else {
            this.enableCls(SkinType.Hair, SkinType.Hat, SkinType.Up, SkinType.Down, SkinType.Misc);
        }
        if (this._first == true) {
            this._first = false;
            return;
        }
        this.render();
    };
    //
    UISkin.prototype.initClass = function (type) {
        var cfg = SkinTypeProp[type];
        var node = cc.instantiate(this.titleNode);
        this.layout.node.addChild(node);
        var label = ccUtil_1.default.find("label", node, cc.Label);
        label.string = cfg.name;
        if (cfg.color) {
            node.color = new cc.Color().fromHEX(cfg.color);
        }
        var list = cc.instantiate(this.listLayout.node);
        this.layout.node.addChild(list);
        var layout = list.getComponent(cc.Layout);
        this.register(layout, this.skinsForType.bind(this, type));
        this.all_cls[type] = ({ title: node, content: list });
    };
    UISkin.prototype.skinsForType = function (type) {
        var _this = this;
        var skins = csv.Skin.search(function (v, i) {
            return v.type == _this.tabIndex && v.subType == type;
        });
        return skins;
    };
    UISkin.prototype.onToggle = function (toggle, index) {
        this.tabIndex = parseInt(index);
    };
    // skinItemAtIndex(node: cc.Node, data: csv.Skin_Row, i) {
    //     // node.getComponent(UISKInItem).render()
    // }
    UISkin.prototype.onShow = function () {
        event_1.evt.emit('UISkin.checkLock');
        this.render();
    };
    UISkin.prototype.click_close = function () {
        vm.hide(this);
        //save somtthing
    };
    UISkin.prototype.click_getstar = function () {
        Platform_1.default.watch_video(this.video_callback, this);
    };
    UISkin.prototype.video_callback = function () {
        PlayerInfo_1.PlayerInfo.star += csv.Config.skin_store_free_star || 3;
        PlayerInfo_1.PlayerInfo.save('star');
    };
    __decorate([
        property(cc.Layout)
    ], UISkin.prototype, "layout", void 0);
    __decorate([
        property(cc.Node)
    ], UISkin.prototype, "titleNode", void 0);
    __decorate([
        property(cc.Layout)
    ], UISkin.prototype, "listLayout", void 0);
    __decorate([
        property(cc.Label)
    ], UISkin.prototype, "label_star_free", void 0);
    UISkin = __decorate([
        ccclass
    ], UISkin);
    return UISkin;
}(mvcView_1.default));
exports.default = UISkin;

cc._RF.pop();