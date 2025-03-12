
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIGetPersent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd19e0BatXFBtaE40FCr2Tnn', 'UIGetPersent');
// Game/Scripts/UI/UIGetPersent.ts

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
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var event_1 = require("../../../framework/core/event");
var display_1 = require("../../../framework/misc/display");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIGetPersent = /** @class */ (function (_super) {
    __extends(UIGetPersent, _super);
    function UIGetPersent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isclick = false;
        return _this;
    }
    UIGetPersent.prototype.onLoad = function () {
    };
    UIGetPersent.prototype.onShow = function () {
        this.isclick = false;
    };
    UIGetPersent.prototype.click_get = function () {
        if (this.isclick)
            return;
        this.isclick = true;
        PlayerInfo_1.PlayerInfo.labour += 3;
        event_1.evt.emit("Game.getTili", display_1.default.center, 3);
        vm.hide(this);
    };
    UIGetPersent = __decorate([
        ccclass
    ], UIGetPersent);
    return UIGetPersent;
}(mvcView_1.default));
exports.default = UIGetPersent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJR2V0UGVyc2VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBb0Q7QUFHcEQsd0RBQXVEO0FBQ3ZELHVEQUFvRDtBQUNwRCwyREFBc0Q7QUFHaEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQU87SUFBakQ7UUFBQSxxRUF1QkM7UUFuQkcsYUFBTyxHQUFZLEtBQUssQ0FBQzs7SUFtQjdCLENBQUM7SUFsQkcsNkJBQU0sR0FBTjtJQUVBLENBQUM7SUFDRCw2QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVELGdDQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQ1osT0FBTztRQUNYLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLHVCQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUN2QixXQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFuQmdCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0F1QmhDO0lBQUQsbUJBQUM7Q0F2QkQsQUF1QkMsQ0F2QnlDLGlCQUFPLEdBdUJoRDtrQkF2Qm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXZjVmlldyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL212Y1ZpZXdcIjtcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9Vc2VySW5mb1wiO1xuaW1wb3J0IExvYWRpbmdTY2VuZSBmcm9tIFwiLi4vQ29tbW9uL0Jhc2UvTG9hZGluZ1NjZW5lXCI7XG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL0NvbW1vbi9CYXNlL1BsYXllckluZm9cIjtcbmltcG9ydCB7IGV2dCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvY29yZS9ldmVudFwiO1xuaW1wb3J0IGRpc3BsYXkgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9taXNjL2Rpc3BsYXlcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlHZXRQZXJzZW50IGV4dGVuZHMgbXZjVmlldyB7XG5cblxuXG4gICAgaXNjbGljazogYm9vbGVhbiA9IGZhbHNlO1xuICAgIG9uTG9hZCgpIHtcblxuICAgIH1cbiAgICBvblNob3coKSB7XG4gICAgICAgIHRoaXMuaXNjbGljayA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNsaWNrX2dldCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNjbGljaylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5pc2NsaWNrID0gdHJ1ZTtcbiAgICAgICAgUGxheWVySW5mby5sYWJvdXIgKz0gMztcbiAgICAgICAgZXZ0LmVtaXQoXCJHYW1lLmdldFRpbGlcIiwgZGlzcGxheS5jZW50ZXIsIDMpO1xuICAgICAgICB2bS5oaWRlKHRoaXMpO1xuICAgIH1cblxuXG5cbn1cbiJdfQ==