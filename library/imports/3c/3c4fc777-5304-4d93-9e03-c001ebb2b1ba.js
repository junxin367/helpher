"use strict";
cc._RF.push(module, '3c4fcd3UwRNk54DwAHrsrG6', 'UIChallengeLevel');
// Game/Scripts/UI/UIChallengeLevel.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var mvcView_1 = require("../../../framework/ui/mvcView");
var ccUtil_1 = require("../../../framework/utils/ccUtil");
var DailyLevelInfo_1 = require("../Common/DailyLevelInfo");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIChallengeLevel = /** @class */ (function (_super) {
    __extends(UIChallengeLevel, _super);
    function UIChallengeLevel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pageview = null;
        _this.layout = null;
        _this.num = 0;
        return _this;
        // update (dt) {}
    }
    UIChallengeLevel.prototype.onLoad = function () {
    };
    UIChallengeLevel.prototype.onShow = function () {
        var _this = this;
        var id = 0;
        var datas = [[]];
        csv.daily_level.values.map(function (e) {
            if (PlayerInfo_1.PlayerInfo.isGreaterDate(e.day)) {
                if (_this.num >= 20) {
                    id += 1;
                    _this.num = 0;
                    datas.push([]);
                }
                _this.num += 1;
                var data = ccUtil_1.default.get(DailyLevelInfo_1.DailyLevelInfo, e.id);
                datas[id].push(data);
            }
        });
        var _loop_1 = function (i) {
            var item = cc.instantiate(this_1.layout);
            item.active = true;
            this_1.pageview.addPage(item);
            this_1.register(item.getComponent(cc.Layout), function (_) { return datas[i]; });
        };
        var this_1 = this;
        for (var i = 0; i < datas.length; i++) {
            _loop_1(i);
        }
        this.pageview.setCurrentPageIndex(Math.floor(PlayerInfo_1.PlayerInfo.dailylevel / 20));
        this.render();
        if (PlayerInfo_1.PlayerInfo.isInGuide && !PlayerInfo_1.PlayerInfo.is_guide_15) {
            PlayerInfo_1.PlayerInfo.isInGuide = false;
            PlayerInfo_1.PlayerInfo.is_guide_15 = true;
            vm.show("Prefabs/UI/UIGetPresent");
        }
    };
    UIChallengeLevel.prototype.start = function () {
    };
    UIChallengeLevel.prototype.clic_close = function () {
        vm.hide(this);
    };
    UIChallengeLevel.prototype.onHidden = function () {
        this.pageview.removeAllPages();
        this.num = 0;
    };
    __decorate([
        property(cc.PageView)
    ], UIChallengeLevel.prototype, "pageview", void 0);
    __decorate([
        property(cc.Node)
    ], UIChallengeLevel.prototype, "layout", void 0);
    UIChallengeLevel = __decorate([
        ccclass
    ], UIChallengeLevel);
    return UIChallengeLevel;
}(mvcView_1.default));
exports.default = UIChallengeLevel;

cc._RF.pop();