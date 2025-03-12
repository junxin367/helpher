
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/guide/Guide5.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcZ3VpZGVcXEd1aWRlNS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBbUQ7QUFDbkQsd0RBQXVEO0FBRW5ELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFBO0FBRXpDO0lBQW9DLDBCQUFZO0lBQWhEOztJQTJCQSxDQUFDO0lBekJHLHVCQUFNLEdBQU47UUFDSSxXQUFHLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDdEQsQ0FBQztJQUVELDBCQUFTLEdBQVQ7UUFDSSxXQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFHRCxzQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCw4QkFBYSxHQUFiO1FBQ0ksSUFBSSx1QkFBVSxDQUFDLGVBQWUsRUFBRTtZQUM1QixPQUFPO1NBQ1Y7UUFDRCx1QkFBVSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRCxzQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO0lBQzVCLENBQUM7SUF6QmdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0EyQjFCO0lBQUQsYUFBQztDQTNCRCxBQTJCQyxDQTNCbUMsRUFBRSxDQUFDLFNBQVMsR0EyQi9DO2tCQTNCb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV2dCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvY29yZS9ldmVudFwiXHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi4vQ29tbW9uL0Jhc2UvUGxheWVySW5mb1wiO1xyXG5cclxubGV0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3JcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3VpZGU1IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgZXZ0Lm9uKFwiR2FtZS5vblN0YXJ0ZWRcIiwgdGhpcy5vbkdhbWVTdGFydGVkLCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBldnQub2ZmKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25HYW1lU3RhcnRlZCgpIHtcclxuICAgICAgICBpZiAoUGxheWVySW5mby5pc2d1aWRlZF9iYWRtYW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBQbGF5ZXJJbmZvLmlzZ3VpZGVkX2JhZG1hbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG59Il19