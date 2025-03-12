"use strict";
cc._RF.push(module, 'ac17aoDmSBFApIPkIySQQCb', 'UILevel');
// Game/Scripts/UI/UILevel.ts

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
var LevelInfo_1 = require("../Common/LevelInfo");
var ccUtil_1 = require("../../../framework/utils/ccUtil");
var DailyLevelInfo_1 = require("../Common/DailyLevelInfo");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var ChapterlInfo_1 = require("../Common/ChapterlInfo");
var Const_1 = require("../Common/Const");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UILevel = /** @class */ (function (_super) {
    __extends(UILevel, _super);
    function UILevel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layout = null;
        _this.title = null;
        _this.last_btn = null;
        _this.next_btn = null;
        _this.datas = [];
        _this.id = 0;
        return _this;
        // update (dt) {}
    }
    UILevel.prototype.onLoad = function () {
    };
    UILevel.prototype.onShow = function (id) {
        var _this = this;
        if (PlayerInfo_1.PlayerInfo.isPlayingDaily) {
            var datas_1 = [];
            csv.daily_level.values.map(function (e) {
                if (PlayerInfo_1.PlayerInfo.isGreaterDate(e.day)) {
                    var data = ccUtil_1.default.get(DailyLevelInfo_1.DailyLevelInfo, e.id);
                    datas_1.push(data);
                }
            });
            this.register(this.layout, function (_) { return datas_1; });
            this.title.string = "关卡挑战";
            this.last_btn.node.active = false;
            this.next_btn.node.active = false;
        }
        else {
            this.datas = [];
            this.id = id;
            csv.level.values.map(function (e) {
                var data = ccUtil_1.default.get(LevelInfo_1.LevelInfo, e.id);
                if (data.chapter == id)
                    _this.datas.push(data);
            });
            this.register(this.layout, function (_) { return _this.datas; });
            this.title.string = ccUtil_1.default.get(ChapterlInfo_1.ChapterlInfo, id).name;
            console.log(Math.ceil(PlayerInfo_1.PlayerInfo.level / 10), id);
            if (id == 1) {
                this.next_btn.interactable = true;
                this.last_btn.node.active = false;
            }
            else if (id == Const_1.default.Chapter_Unlock || (id >= Math.ceil(PlayerInfo_1.PlayerInfo.level / 10))) {
                this.last_btn.node.active = true;
                this.next_btn.interactable = false;
            }
            else {
                this.last_btn.node.active = true;
                this.next_btn.interactable = true;
            }
        }
        this.render();
    };
    UILevel.prototype.start = function () {
    };
    UILevel.prototype.clic_close = function () {
        vm.hide(this);
    };
    UILevel.prototype.click_last = function () {
        this.id -= 1;
        vm.show("Prefabs/UI/UILevel", this.id);
    };
    UILevel.prototype.click_next = function () {
        this.id += 1;
        vm.show("Prefabs/UI/UILevel", this.id);
    };
    __decorate([
        property(cc.Layout)
    ], UILevel.prototype, "layout", void 0);
    __decorate([
        property(cc.Label)
    ], UILevel.prototype, "title", void 0);
    __decorate([
        property(cc.Button)
    ], UILevel.prototype, "last_btn", void 0);
    __decorate([
        property(cc.Button)
    ], UILevel.prototype, "next_btn", void 0);
    UILevel = __decorate([
        ccclass
    ], UILevel);
    return UILevel;
}(mvcView_1.default));
exports.default = UILevel;

cc._RF.pop();