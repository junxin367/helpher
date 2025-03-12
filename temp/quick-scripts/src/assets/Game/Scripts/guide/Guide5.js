"use strict";
cc._RF.push(module, '7053bfBiddBja/kjGOrXKC8', 'Guide5');
// Game/Scripts/guide/Guide5.ts

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
var event_1 = require("../../../framework/core/event");
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Guide5 = /** @class */ (function (_super) {
    __extends(Guide5, _super);
    function Guide5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Guide5.prototype.onLoad = function () {
        event_1.evt.on("Game.onStarted", this.onGameStarted, this);
    };
    Guide5.prototype.onDestroy = function () {
        event_1.evt.off(this);
    };
    Guide5.prototype.close = function () {
        this.node.active = false;
    };
    Guide5.prototype.onGameStarted = function () {
        if (PlayerInfo_1.PlayerInfo.isguided_badman) {
            return;
        }
        PlayerInfo_1.PlayerInfo.isguided_badman = true;
        this.node.active = true;
    };
    Guide5.prototype.start = function () {
        this.node.active = false;
    };
    Guide5 = __decorate([
        ccclass
    ], Guide5);
    return Guide5;
}(cc.Component));
exports.default = Guide5;

cc._RF.pop();