"use strict";
cc._RF.push(module, '3b1021yBMtAYo3JPepa8CDD', 'UIProgressReward');
// Game/Scripts/UI/UIProgressReward.ts

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
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BoxConfig = {
    Skin: { percent: 45 },
    Energy: { percent: 30, num: 3 },
    Prop: { percent: 25 } //1,2,3
};
var UIProgressReward = /** @class */ (function (_super) {
    __extends(UIProgressReward, _super);
    function UIProgressReward() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layout = null;
        _this.pool = [];
        _this.once = true;
        return _this;
    }
    UIProgressReward.prototype.onLoad = function () {
    };
    UIProgressReward.prototype.onShown = function () {
        this.once = true;
        this.layout.children.forEach(function (v) { return v.getChildByName("box").active = false; });
        this.pool.splice(0);
        if (!PlayerInfo_1.PlayerInfo.isAllSkinUnlocked()) {
            for (var k in BoxConfig) {
                var v = BoxConfig[k];
                for (var i = 0; i < v.percent; i++) {
                    this.pool.push(k);
                }
            }
        }
    };
    UIProgressReward.prototype.click_box = function (sender, msg) {
        if (!this.once)
            return;
        this.once = false;
        var id = parseInt(msg);
        var box = this.layout.children[id];
        var fx = box.getChildByName("box");
        fx.active = true;
        var display = fx.getComponent(dragonBones.ArmatureDisplay);
        display.playAnimation("open", 1);
        // open box 
        this.scheduleOnce(this.openBox, 0.5);
    };
    UIProgressReward.prototype.openBox = function () {
        var k = 'Energy';
        if (this.pool.length > 0) {
            k = g.getRandom(this.pool);
        }
        else {
            if (Math.random() > 0.5) {
                k = 'Prop';
            }
        }
        var cfg = BoxConfig[k];
        vm.show("Prefabs/UI/UIProgressRewardGet", k, cfg);
        this.scheduleOnce(this.hide, 1);
    };
    UIProgressReward.prototype.hide = function () {
        vm.hide(this);
    };
    __decorate([
        property(cc.Node)
    ], UIProgressReward.prototype, "layout", void 0);
    UIProgressReward = __decorate([
        ccclass
    ], UIProgressReward);
    return UIProgressReward;
}(cc.Component));
exports.default = UIProgressReward;

cc._RF.pop();