
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIFriendHelp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9549byzl1pK745kPIjVkTVK', 'UIFriendHelp');
// Game/Scripts/UI/UIFriendHelp.ts

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
var Net_1 = require("../../../framework/misc/Net");
var ServerConfig_1 = require("../Common/Base/ServerConfig");
var mvcView_1 = require("../../../framework/ui/mvcView");
var ListView_1 = require("../../../framework/ui/controller/ListView");
var UIFriendHelpItem_1 = require("./UIFriendHelpItem");
var WeakNetGame_1 = require("../../../framework/extension/weak_net_game/WeakNetGame");
var UIDayInviteItem_1 = require("./UIDayInviteItem");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIFriendHelp = /** @class */ (function (_super) {
    __extends(UIFriendHelp, _super);
    function UIFriendHelp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layout = null;
        _this.listview = null;
        return _this;
    }
    UIFriendHelp_1 = UIFriendHelp;
    UIFriendHelp.prototype.onLoad = function () {
        this.register(this.layout, function (v) { return UIFriendHelp_1.day_invite; }, this.setItem.bind(this));
    };
    UIFriendHelp.prototype.start = function () {
        this.listview.numItems = 0;
    };
    UIFriendHelp.prototype.setItem = function (node, data, i) {
        var item = node.getComponent(UIDayInviteItem_1.default);
        item.setData(data, i);
    };
    UIFriendHelp.prototype.onShown = function () {
        var _this = this;
        WeakNetGame_1.default.client.httpGet(ServerConfig_1.Api.invite_get).then(function (v) {
            if (v == Net_1.default.Code.Timeout) {
                ToastManager_1.Toast.make("邀请信息读取失败!");
            }
            else {
                if (v) {
                    var d = JSON.parse(v);
                    console.log(d);
                    _this.onRequested(d.data);
                }
                else {
                    ToastManager_1.Toast.make("服务器出错!");
                }
            }
        });
    };
    UIFriendHelp.prototype.onRequested = function (data) {
        UIFriendHelp_1.day_invite.splice(0);
        for (var i = 0; i < 3; i++) {
            var v = data.day_invite[i];
            UIFriendHelp_1.day_invite.push(v);
        }
        UIFriendHelp_1.sum_invite = data.sum_invite;
        if (UIFriendHelp_1.sum_invite.claimedCount == null) {
            UIFriendHelp_1.sum_invite.claimedCount = 0;
        }
        this.render(data.day_items);
        this.listview.numItems = 100;
    };
    UIFriendHelp.prototype.onRender = function (node, index) {
        var item = node.getComponent(UIFriendHelpItem_1.default);
        item.setData(UIFriendHelp_1.sum_invite, index);
    };
    UIFriendHelp.prototype.click_close = function () {
        vm.hide(this);
    };
    var UIFriendHelp_1;
    UIFriendHelp.sum_invite = null;
    UIFriendHelp.day_invite = [];
    __decorate([
        property(cc.Layout)
    ], UIFriendHelp.prototype, "layout", void 0);
    __decorate([
        property(ListView_1.default)
    ], UIFriendHelp.prototype, "listview", void 0);
    UIFriendHelp = UIFriendHelp_1 = __decorate([
        ccclass
    ], UIFriendHelp);
    return UIFriendHelp;
}(mvcView_1.default));
exports.default = UIFriendHelp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJRnJpZW5kSGVscC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBc0Q7QUFDdEQsNERBQStEO0FBRS9ELHlEQUFvRDtBQUNwRCxzRUFBaUU7QUFDakUsdURBQWtEO0FBQ2xELHNGQUFpRjtBQUNqRixxREFBZ0Q7QUFDaEQsbUVBQTJEO0FBRXZELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFBO0FBU3pDO0lBQTBDLGdDQUFPO0lBQWpEO1FBQUEscUVBa0VDO1FBL0RHLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFHekIsY0FBUSxHQUFhLElBQUksQ0FBQzs7SUE0RDlCLENBQUM7cUJBbEVvQixZQUFZO0lBVzdCLDZCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxjQUFZLENBQUMsVUFBVSxFQUF2QixDQUF1QixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDckYsQ0FBQztJQUVELDRCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUE7SUFDOUIsQ0FBQztJQUdELDhCQUFPLEdBQVAsVUFBUSxJQUFhLEVBQUUsSUFBZSxFQUFFLENBQUM7UUFDckMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyx5QkFBZSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELDhCQUFPLEdBQVA7UUFBQSxpQkFjQztRQWJHLHFCQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7WUFDN0MsSUFBSSxDQUFDLElBQUksYUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3ZCLG9CQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2FBQzFCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxFQUFFO29CQUNILElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2YsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7aUJBQzNCO3FCQUFNO29CQUNILG9CQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2lCQUN2QjthQUNKO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsa0NBQVcsR0FBWCxVQUFZLElBQVM7UUFDakIsY0FBWSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLGNBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ2xDO1FBQ0QsY0FBWSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzFDLElBQUksY0FBWSxDQUFDLFVBQVUsQ0FBQyxZQUFZLElBQUksSUFBSSxFQUFFO1lBQzlDLGNBQVksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUNqQyxDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFTLElBQWEsRUFBRSxLQUFhO1FBQ2pDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsMEJBQWdCLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQVksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUdELGtDQUFXLEdBQVg7UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLENBQUM7O0lBdkRNLHVCQUFVLEdBQWMsSUFBSSxDQUFDO0lBQzdCLHVCQUFVLEdBQWdCLEVBQUUsQ0FBQztJQU5wQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNLO0lBR3pCO1FBREMsUUFBUSxDQUFDLGtCQUFRLENBQUM7a0RBQ087SUFOVCxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBa0VoQztJQUFELG1CQUFDO0NBbEVELEFBa0VDLENBbEV5QyxpQkFBTyxHQWtFaEQ7a0JBbEVvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5ldCwgeyBuZXQgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21pc2MvTmV0XCJcclxuaW1wb3J0IHsgU2VydmVyQ29uZmlnLCBBcGkgfSBmcm9tIFwiLi4vQ29tbW9uL0Jhc2UvU2VydmVyQ29uZmlnXCJcclxuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi93ZWFrX25ldF9nYW1lL1VzZXJJbmZvXCJcclxuaW1wb3J0IG12Y1ZpZXcgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9tdmNWaWV3XCI7XHJcbmltcG9ydCBMaXN0VmlldyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL2NvbnRyb2xsZXIvTGlzdFZpZXdcIjtcclxuaW1wb3J0IFVJRnJpZW5kSGVscEl0ZW0gZnJvbSBcIi4vVUlGcmllbmRIZWxwSXRlbVwiO1xyXG5pbXBvcnQgV2Vha05ldEdhbWUgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9XZWFrTmV0R2FtZVwiO1xyXG5pbXBvcnQgVUlEYXlJbnZpdGVJdGVtIGZyb20gXCIuL1VJRGF5SW52aXRlSXRlbVwiO1xyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvVG9hc3RNYW5hZ2VyXCI7XHJcblxyXG5sZXQgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvclxyXG5leHBvcnQgaW50ZXJmYWNlIFN1bUludml0ZSB7XHJcbiAgICBvcGVuSWQsIGludml0ZWVDb3VudCwgY2xhaW1lZENvdW50XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBEYXlJbnZpdGUge1xyXG4gICAgX2lkLCBvcGVuSWQsIGludml0ZWUsIHN0YXR1cywgaW5kZXgsIG5pY2tOYW1lLCBhdmF0YXJVcmwsIGNvdW50XHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJRnJpZW5kSGVscCBleHRlbmRzIG12Y1ZpZXcge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYXlvdXQpXHJcbiAgICBsYXlvdXQ6IGNjLkxheW91dCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KExpc3RWaWV3KVxyXG4gICAgbGlzdHZpZXc6IExpc3RWaWV3ID0gbnVsbDtcclxuXHJcbiAgICBzdGF0aWMgc3VtX2ludml0ZTogU3VtSW52aXRlID0gbnVsbDtcclxuICAgIHN0YXRpYyBkYXlfaW52aXRlOiBEYXlJbnZpdGVbXSA9IFtdO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKHRoaXMubGF5b3V0LCB2ID0+IFVJRnJpZW5kSGVscC5kYXlfaW52aXRlLCB0aGlzLnNldEl0ZW0uYmluZCh0aGlzKSlcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmxpc3R2aWV3Lm51bUl0ZW1zID0gMFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXRJdGVtKG5vZGU6IGNjLk5vZGUsIGRhdGE6IERheUludml0ZSwgaSkge1xyXG4gICAgICAgIGxldCBpdGVtID0gbm9kZS5nZXRDb21wb25lbnQoVUlEYXlJbnZpdGVJdGVtKTtcclxuICAgICAgICBpdGVtLnNldERhdGEoZGF0YSwgaSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93bigpIHtcclxuICAgICAgICBXZWFrTmV0R2FtZS5jbGllbnQuaHR0cEdldChBcGkuaW52aXRlX2dldCkudGhlbih2ID0+IHtcclxuICAgICAgICAgICAgaWYgKHYgPT0gTmV0LkNvZGUuVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgVG9hc3QubWFrZShcIumCgOivt+S/oeaBr+ivu+WPluWksei0pSFcIilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGQgPSBKU09OLnBhcnNlKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25SZXF1ZXN0ZWQoZC5kYXRhKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdC5tYWtlKFwi5pyN5Yqh5Zmo5Ye66ZSZIVwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvblJlcXVlc3RlZChkYXRhOiBhbnkpIHtcclxuICAgICAgICBVSUZyaWVuZEhlbHAuZGF5X2ludml0ZS5zcGxpY2UoMClcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdiA9IGRhdGEuZGF5X2ludml0ZVtpXTtcclxuICAgICAgICAgICAgVUlGcmllbmRIZWxwLmRheV9pbnZpdGUucHVzaCh2KVxyXG4gICAgICAgIH1cclxuICAgICAgICBVSUZyaWVuZEhlbHAuc3VtX2ludml0ZSA9IGRhdGEuc3VtX2ludml0ZTtcclxuICAgICAgICBpZiAoVUlGcmllbmRIZWxwLnN1bV9pbnZpdGUuY2xhaW1lZENvdW50ID09IG51bGwpIHtcclxuICAgICAgICAgICAgVUlGcmllbmRIZWxwLnN1bV9pbnZpdGUuY2xhaW1lZENvdW50ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoZGF0YS5kYXlfaXRlbXMpXHJcbiAgICAgICAgdGhpcy5saXN0dmlldy5udW1JdGVtcyA9IDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBvblJlbmRlcihub2RlOiBjYy5Ob2RlLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBub2RlLmdldENvbXBvbmVudChVSUZyaWVuZEhlbHBJdGVtKTtcclxuICAgICAgICBpdGVtLnNldERhdGEoVUlGcmllbmRIZWxwLnN1bV9pbnZpdGUsIGluZGV4KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY2xpY2tfY2xvc2UoKSB7XHJcbiAgICAgICAgdm0uaGlkZSh0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG59Il19