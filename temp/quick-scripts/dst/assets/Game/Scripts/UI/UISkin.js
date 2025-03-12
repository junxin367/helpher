
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UISkin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJU2tpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHlEQUFvRDtBQUNwRCwwREFBcUQ7QUFDckQsdURBQW9EO0FBQ3BELHdEQUF1RDtBQUN2RCxtRUFBMkQ7QUFDM0QsZ0ZBQStFO0FBQy9FLGtFQUE2RDtBQUV2RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFLLE9BSUo7QUFKRCxXQUFLLE9BQU87SUFDUix5Q0FBVSxDQUFBO0lBQ1YscUNBQUksQ0FBQTtJQUNKLHVDQUFLLENBQUE7QUFDVCxDQUFDLEVBSkksT0FBTyxLQUFQLE9BQU8sUUFJWDtBQUVELElBQVksUUFRWDtBQVJELFdBQVksUUFBUTtJQUNoQix1Q0FBUSxDQUFBO0lBQ1IscUNBQU8sQ0FBQTtJQUNQLG1DQUFFLENBQUE7SUFDRix1Q0FBSSxDQUFBO0lBQ0osdUNBQUksQ0FBQTtJQUNKLHlDQUFLLENBQUE7SUFDTCxxQ0FBRyxDQUFBO0FBQ1AsQ0FBQyxFQVJXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBUW5CO0FBRUQsSUFBSSxZQUFZO0lBQ1osR0FBQyxRQUFRLENBQUMsSUFBSSxJQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO0lBQ2pELEdBQUMsUUFBUSxDQUFDLEdBQUcsSUFBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtJQUNoRCxHQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDL0MsR0FBQyxRQUFRLENBQUMsSUFBSSxJQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO0lBQ2pELEdBQUMsUUFBUSxDQUFDLElBQUksSUFBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtJQUNqRCxHQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDcEQsR0FBQyxRQUFRLENBQUMsR0FBRyxJQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO09BQ25ELENBQUE7QUFHRDtJQUFvQywwQkFBTztJQUEzQztRQUFBLHFFQStKQztRQTVKRyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFJN0IscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFFakMsNEJBQTRCO1FBRXBCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFjekIsaUJBQVcsR0FBTyxFQUFFLENBQUM7UUFHckIsWUFBWTtRQUNaLGFBQU8sR0FBOEQsRUFBRSxDQUFDO1FBRXhFLFlBQU0sR0FBRyxJQUFJLENBQUM7O0lBMEhsQixDQUFDO0lBN0lHLHNCQUFXLDRCQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7YUFDRCxVQUFvQixLQUFhO1lBQzdCLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUNiLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQ3pCO1lBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssRUFBRTtnQkFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7YUFDeEI7UUFDTCxDQUFDOzs7T0FUQTtJQW9CRCx1QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLGNBQU0sT0FBQSxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBdEMsQ0FBc0MsQ0FBQyxDQUFBO1FBQ2pGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsV0FBRyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUMxQyxrQkFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCwwQkFBUyxHQUFUO1FBQ0ksV0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUMvQyxDQUFDO0lBR0QseUJBQVEsR0FBUixVQUFTLElBQWtCO1FBQ3ZCLGdCQUFnQjtRQUNoQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDOUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN2QixvQkFBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzlCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQ2hDLG1CQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDOUI7YUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUNyQyxtQkFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xDO1FBQ0QsbUJBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkIsbUJBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELHdCQUFPLEdBQVA7UUFDSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQUVELDBCQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ1gsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBRUQsMEJBQVMsR0FBVDtRQUFVLGtCQUFXO2FBQVgsVUFBVyxFQUFYLHFCQUFXLEVBQVgsSUFBVztZQUFYLDZCQUFXOztRQUNqQixLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDeEIsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFFRCwwQkFBUyxHQUFULFVBQVUsS0FBSztRQUNYLElBQUksS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUM1QyxzQ0FBc0M7WUFDdEMsK0VBQStFO1NBQ2xGO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ3pGO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELEVBQUU7SUFDRiwwQkFBUyxHQUFULFVBQVUsSUFBSTtRQUNWLElBQUksR0FBRyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxLQUFLLEdBQUcsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDaEQsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksR0FBRyxDQUFDLEtBQUssRUFBRTtZQUNYLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUNqRDtRQUNELElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUN6RCxDQUFDO0lBRUQsNkJBQVksR0FBWixVQUFhLElBQUk7UUFBakIsaUJBS0M7UUFKRyxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELHlCQUFRLEdBQVIsVUFBUyxNQUFpQixFQUFFLEtBQUs7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELDBEQUEwRDtJQUMxRCxnREFBZ0Q7SUFDaEQsSUFBSTtJQUVKLHVCQUFNLEdBQU47UUFDSSxXQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCw0QkFBVyxHQUFYO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNkLGdCQUFnQjtJQUNwQixDQUFDO0lBRUQsOEJBQWEsR0FBYjtRQUNJLGtCQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDbkQsQ0FBQztJQUVELCtCQUFjLEdBQWQ7UUFDSSx1QkFBVSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLG9CQUFvQixJQUFJLENBQUMsQ0FBQztRQUN4RCx1QkFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBMUpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0s7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNTO0lBSTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ2M7SUFiaEIsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQStKMUI7SUFBRCxhQUFDO0NBL0pELEFBK0pDLENBL0ptQyxpQkFBTyxHQStKMUM7a0JBL0pvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCBtdmNWaWV3IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvbXZjVmlld1wiO1xuaW1wb3J0IGNjVXRpbCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3V0aWxzL2NjVXRpbFwiO1xuaW1wb3J0IHsgZXZ0IH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9jb3JlL2V2ZW50XCI7XG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL0NvbW1vbi9CYXNlL1BsYXllckluZm9cIjtcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9Ub2FzdE1hbmFnZXJcIjtcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9Vc2VySW5mb1wiO1xuaW1wb3J0IFBsYXRmb3JtIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL1BsYXRmb3JtXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmVudW0gVGFiVHlwZSB7XG4gICAgRmVtYWxlID0gMSxcbiAgICBNYWxlLFxuICAgIFRoZW1lLFxufVxuXG5leHBvcnQgZW51bSBTa2luVHlwZSB7XG4gICAgSGFpciA9IDAsXG4gICAgSGF0ID0gMSxcbiAgICBVcCxcbiAgICBEb3duLFxuICAgIE1pc2MsXG4gICAgVGhlbWUsXG4gICAgS2V5XG59XG5cbmxldCBTa2luVHlwZVByb3AgPSB7XG4gICAgW1NraW5UeXBlLkhhaXJdOiB7IG5hbWU6IFwi5aS05Y+RXCIsIGNvbG9yOiBcIiNGQThGNEFcIiB9LFxuICAgIFtTa2luVHlwZS5IYXRdOiB7IG5hbWU6IFwi5bi95a2QXCIsIGNvbG9yOiBcIiNGQThGNEFcIiB9LFxuICAgIFtTa2luVHlwZS5VcF06IHsgbmFtZTogXCLkuIrouqtcIiwgY29sb3I6IFwiI0ZBOEY0QVwiIH0sXG4gICAgW1NraW5UeXBlLkRvd25dOiB7IG5hbWU6IFwi5LiL6LqrXCIsIGNvbG9yOiBcIiNGQThGNEFcIiB9LFxuICAgIFtTa2luVHlwZS5NaXNjXTogeyBuYW1lOiBcIumZhOS7tlwiLCBjb2xvcjogXCIjMDBEODkzXCIgfSxcbiAgICBbU2tpblR5cGUuVGhlbWVdOiB7IG5hbWU6IFwi5Li76aKY6IOM5pmvXCIsIGNvbG9yOiBcIiMwQjg4RkZcIiB9LFxuICAgIFtTa2luVHlwZS5LZXldOiB7IG5hbWU6IFwi6ZKl5YyZXCIsIGNvbG9yOiBcIiMwMEQ4OTNcIiB9LFxufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlTa2luIGV4dGVuZHMgbXZjVmlldyB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGF5b3V0KVxuICAgIGxheW91dDogY2MuTGF5b3V0ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRpdGxlTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGF5b3V0KVxuICAgIGxpc3RMYXlvdXQ6IGNjLkxheW91dCA9IG51bGw7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbF9zdGFyX2ZyZWU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIC8vIGxheW91dHM6IGNjLkxheW91dCA9IG51bGxcblxuICAgIHByaXZhdGUgX3RhYjogbnVtYmVyID0gMjtcbiAgICBwdWJsaWMgZ2V0IHRhYkluZGV4KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl90YWI7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgdGFiSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodmFsdWUgPT0gLTEpIHtcbiAgICAgICAgICAgIHZhbHVlID0gVGFiVHlwZS5UaGVtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fdGFiICE9IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl90YWIgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0VGFiKHZhbHVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGFic19sb2FkZWQ6IFtdID0gW107XG5cblxuICAgIC8vQHRzLWlnbm9yZVxuICAgIGFsbF9jbHM6IHsgW2luZGV4OiBudW1iZXJdOiB7IHRpdGxlOiBjYy5Ob2RlLCBjb250ZW50OiBjYy5Ob2RlIH0gfSA9IHt9O1xuXG4gICAgX2ZpcnN0ID0gdHJ1ZTtcblxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKHRoaXMubGFiZWxfc3Rhcl9mcmVlLCAoKSA9PiBcIuiOt+WPllwiICsgY3N2LkNvbmZpZy5za2luX3N0b3JlX2ZyZWVfc3RhcilcbiAgICAgICAgdGhpcy5sb2FkVGFiKCk7XG4gICAgICAgIHRoaXMuX3RhYiA9IDM7XG4gICAgICAgIHRoaXMudXBkYXRlVGFiKHRoaXMuX3RhYik7XG4gICAgICAgIGV2dC5vbihcIlNraW4uc2VsZWN0XCIsIHRoaXMub25TZWxlY3QsIHRoaXMpXG4gICAgICAgIFBsYXRmb3JtLmhpZGVCYW5uZXJBZCgpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgZXZ0Lm9mZihcIlNraW4uc2VsZWN0XCIsIHRoaXMub25TZWxlY3QsIHRoaXMpXG4gICAgfVxuXG5cbiAgICBvblNlbGVjdChkYXRhOiBjc3YuU2tpbl9Sb3cpIHtcbiAgICAgICAgLy9yZWZyZXNoIG90aGVyIFxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuYWxsX2Nsc1tkYXRhLnN1YlR5cGVdLmNvbnRlbnQ7XG4gICAgICAgIGxldCBsaXN0ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcbiAgICAgICAgdGhpcy5yZW5kZXJMYXlvdXQobGlzdClcbiAgICAgICAgVG9hc3QubWFrZShcIuW3sumAieaLqTpcIiArIGRhdGEubmFtZSlcbiAgICAgICAgaWYgKGRhdGEuc3ViVHlwZSA9PSBTa2luVHlwZS5UaGVtZSkge1xuICAgICAgICAgICAgVXNlckluZm8udGhlbWUgPSBkYXRhLmRhdGE7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5zdWJUeXBlID09IFNraW5UeXBlLktleSkge1xuICAgICAgICAgICAgVXNlckluZm8udGhlbWVfa2V5ID0gZGF0YS5kYXRhO1xuICAgICAgICB9XG4gICAgICAgIFVzZXJJbmZvLnNhdmUoJ3RoZW1lJyk7XG4gICAgICAgIFVzZXJJbmZvLnNhdmUoJ3RoZW1lX2tleScpO1xuICAgIH1cblxuICAgIGxvYWRUYWIoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IFNraW5UeXBlLktleTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRDbGFzcyhpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpdGxlTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saXN0TGF5b3V0Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2VsZWN0VGFiKGluZGV4KSB7XG4gICAgICAgIHRoaXMudGFiSW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy51cGRhdGVUYWIoaW5kZXgpXG4gICAgfVxuXG4gICAgZW5hYmxlQ2xzKC4uLmNsc1R5cGVzKSB7XG4gICAgICAgIGZvciAobGV0IGsgaW4gdGhpcy5hbGxfY2xzKSB7XG4gICAgICAgICAgICBsZXQgdGsgPSBwYXJzZUludChrKTtcbiAgICAgICAgICAgIGxldCB0diA9IHRoaXMuYWxsX2Nsc1trXTtcbiAgICAgICAgICAgIGxldCBiID0gY2xzVHlwZXMuaW5kZXhPZih0aykgPj0gMDtcbiAgICAgICAgICAgIHR2LnRpdGxlLmFjdGl2ZSA9IGI7XG4gICAgICAgICAgICB0di5jb250ZW50LmFjdGl2ZSA9IGI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVUYWIoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID09IFRhYlR5cGUuVGhlbWUpIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlQ2xzKFNraW5UeXBlLlRoZW1lLCBTa2luVHlwZS5LZXkpXG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKGluZGV4ID09IFRhYlR5cGUuTWFsZSkge1xuICAgICAgICAgICAgLy8gICAgIHRoaXMuZW5hYmxlQ2xzKFNraW5UeXBlLkhhaXIsIFNraW5UeXBlLlVwLCBTa2luVHlwZS5Eb3duLCBTa2luVHlwZS5NaXNjKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVDbHMoU2tpblR5cGUuSGFpciwgU2tpblR5cGUuSGF0LCBTa2luVHlwZS5VcCwgU2tpblR5cGUuRG93biwgU2tpblR5cGUuTWlzYylcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZmlyc3QgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZmlyc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIC8vXG4gICAgaW5pdENsYXNzKHR5cGUpIHtcbiAgICAgICAgbGV0IGNmZyA9IFNraW5UeXBlUHJvcFt0eXBlXTtcbiAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRpdGxlTm9kZSlcbiAgICAgICAgdGhpcy5sYXlvdXQubm9kZS5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgbGV0IGxhYmVsID0gY2NVdGlsLmZpbmQoXCJsYWJlbFwiLCBub2RlLCBjYy5MYWJlbClcbiAgICAgICAgbGFiZWwuc3RyaW5nID0gY2ZnLm5hbWU7XG4gICAgICAgIGlmIChjZmcuY29sb3IpIHtcbiAgICAgICAgICAgIG5vZGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKGNmZy5jb2xvcilcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGlzdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdExheW91dC5ub2RlKVxuICAgICAgICB0aGlzLmxheW91dC5ub2RlLmFkZENoaWxkKGxpc3QpO1xuICAgICAgICBsZXQgbGF5b3V0ID0gbGlzdC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcblxuICAgICAgICB0aGlzLnJlZ2lzdGVyKGxheW91dCwgdGhpcy5za2luc0ZvclR5cGUuYmluZCh0aGlzLCB0eXBlKSk7XG4gICAgICAgIHRoaXMuYWxsX2Nsc1t0eXBlXSA9ICh7IHRpdGxlOiBub2RlLCBjb250ZW50OiBsaXN0IH0pXG4gICAgfVxuXG4gICAgc2tpbnNGb3JUeXBlKHR5cGUpIHtcbiAgICAgICAgbGV0IHNraW5zID0gY3N2LlNraW4uc2VhcmNoKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdi50eXBlID09IHRoaXMudGFiSW5kZXggJiYgdi5zdWJUeXBlID09IHR5cGU7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBza2lucztcbiAgICB9XG5cbiAgICBvblRvZ2dsZSh0b2dnbGU6IGNjLlRvZ2dsZSwgaW5kZXgpIHtcbiAgICAgICAgdGhpcy50YWJJbmRleCA9IHBhcnNlSW50KGluZGV4KTtcbiAgICB9XG5cbiAgICAvLyBza2luSXRlbUF0SW5kZXgobm9kZTogY2MuTm9kZSwgZGF0YTogY3N2LlNraW5fUm93LCBpKSB7XG4gICAgLy8gICAgIC8vIG5vZGUuZ2V0Q29tcG9uZW50KFVJU0tJbkl0ZW0pLnJlbmRlcigpXG4gICAgLy8gfVxuXG4gICAgb25TaG93KCkge1xuICAgICAgICBldnQuZW1pdCgnVUlTa2luLmNoZWNrTG9jaycpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIGNsaWNrX2Nsb3NlKCkge1xuICAgICAgICB2bS5oaWRlKHRoaXMpO1xuICAgICAgICAvL3NhdmUgc29tdHRoaW5nXG4gICAgfVxuXG4gICAgY2xpY2tfZ2V0c3RhcigpIHtcbiAgICAgICAgUGxhdGZvcm0ud2F0Y2hfdmlkZW8odGhpcy52aWRlb19jYWxsYmFjaywgdGhpcylcbiAgICB9XG5cbiAgICB2aWRlb19jYWxsYmFjaygpIHtcbiAgICAgICAgUGxheWVySW5mby5zdGFyICs9IGNzdi5Db25maWcuc2tpbl9zdG9yZV9mcmVlX3N0YXIgfHwgMztcbiAgICAgICAgUGxheWVySW5mby5zYXZlKCdzdGFyJyk7XG4gICAgfVxuXG59XG4iXX0=