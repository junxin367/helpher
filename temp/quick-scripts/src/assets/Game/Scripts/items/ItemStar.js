"use strict";
cc._RF.push(module, '4d846r9p4NIy6Weroi0pEoG', 'ItemStar');
// Game/Scripts/items/ItemStar.ts

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
var PoolManager_1 = require("../../../framework/core/PoolManager");
var Device_1 = require("../../../framework/misc/Device");
var event_1 = require("../../../framework/core/event");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemStar = /** @class */ (function (_super) {
    __extends(ItemStar, _super);
    function ItemStar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isOffTime = false;
        return _this;
    }
    ItemStar.prototype.onLoad = function () {
    };
    ItemStar.prototype.start = function () {
    };
    ItemStar.prototype.playFx = function (node) {
        Device_1.default.playSfx("star");
        var star = PoolManager_1.default.get("Pool").get("get-star");
        star.position = node.position;
    };
    ItemStar.prototype.onBeginContact = function (contact) {
        var _this = this;
        //add a star 
        //or fly to top 
        this.playFx(this.node);
        this.node.destroy();
        this.scheduleOnce(function (_) {
            _this.isOffTime = false;
        }, 0.6);
        if (!this.isOffTime) {
            event_1.evt.emit("Game.getstar", this.node);
        }
        this.isOffTime = true;
    };
    ItemStar = __decorate([
        ccclass
    ], ItemStar);
    return ItemStar;
}(cc.Component));
exports.default = ItemStar;

cc._RF.pop();