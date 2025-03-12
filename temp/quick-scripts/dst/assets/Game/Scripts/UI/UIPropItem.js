
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIPropItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'afdeeOTHcZAoo9wQLgzmKVQ', 'UIPropItem');
// Game/Scripts/UI/UIPropItem.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var WeakNetGame_1 = require("../../../framework/extension/weak_net_game/WeakNetGame");
var UserInfo_1 = require("../../../framework/extension/weak_net_game/UserInfo");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIPropItem = /** @class */ (function (_super) {
    __extends(UIPropItem, _super);
    function UIPropItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.desc_label = null;
        _this.count_label = null;
        _this.icon = null;
        _this.btn_get = null;
        // LIFE-CYCLE CALLBACKS:
        _this.data = null;
        _this.propList = {
            1: "gun_num",
            2: "snowball_num",
            3: "magnet_num"
        };
        return _this;
        // update (dt) {}
    }
    UIPropItem.prototype.onLoad = function () {
        this.register(this.desc_label, function (_) { return _.desc; });
        this.register(this.icon, function (_) { return _.icon; });
    };
    UIPropItem.prototype.start = function () {
        this.data = this.getData();
        this.count_label.string = UserInfo_1.UserInfo[this.propList[this.data.id]];
    };
    UIPropItem.prototype.click_get = function () {
        var _this = this;
        WeakNetGame_1.default.doChoice("SOV_GetPropItem", function (_) {
            UserInfo_1.UserInfo[_this.propList[_this.data.id]] += 2;
            ToastManager_1.Toast.make("已领取" + _this.data.name);
            _this.count_label.string = UserInfo_1.UserInfo[_this.propList[_this.data.id]];
            UserInfo_1.UserInfo.save();
        }, this);
    };
    __decorate([
        property(cc.Label)
    ], UIPropItem.prototype, "desc_label", void 0);
    __decorate([
        property(cc.Label)
    ], UIPropItem.prototype, "count_label", void 0);
    __decorate([
        property(cc.Sprite)
    ], UIPropItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Node)
    ], UIPropItem.prototype, "btn_get", void 0);
    UIPropItem = __decorate([
        ccclass
    ], UIPropItem);
    return UIPropItem;
}(mvcView_1.default));
exports.default = UIPropItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJUHJvcEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYseURBQW9EO0FBRXBELHNGQUFpRjtBQUNqRixnRkFBK0U7QUFDL0UsbUVBQTJEO0FBRXJELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFPO0lBQS9DO1FBQUEscUVBNENDO1FBekNHLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBSTdCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4Qix3QkFBd0I7UUFDeEIsVUFBSSxHQUFhLElBQUksQ0FBQztRQUV0QixjQUFRLEdBQVc7WUFDZixDQUFDLEVBQUUsU0FBUztZQUNaLENBQUMsRUFBRSxjQUFjO1lBQ2pCLENBQUMsRUFBRSxZQUFZO1NBQ2xCLENBQUE7O1FBcUJELGlCQUFpQjtJQUNyQixDQUFDO0lBcEJHLDJCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFXLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxRQUFRLENBQVcsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELDBCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQWMsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxtQkFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCw4QkFBUyxHQUFUO1FBQUEsaUJBT0M7UUFORyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxVQUFBLENBQUM7WUFDckMsbUJBQVEsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0Msb0JBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsbUJBQVEsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoRSxtQkFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNaLENBQUM7SUF0Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDUztJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNVO0lBSTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ0c7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTTtJQWJQLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0E0QzlCO0lBQUQsaUJBQUM7Q0E1Q0QsQUE0Q0MsQ0E1Q3VDLGlCQUFPLEdBNEM5QztrQkE1Q29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgbXZjVmlldyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL212Y1ZpZXdcIjtcclxuaW1wb3J0IHsgUHJvcEluZm8gfSBmcm9tIFwiLi4vQ29tbW9uL1Byb3BJbmZvXCI7XHJcbmltcG9ydCBXZWFrTmV0R2FtZSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi93ZWFrX25ldF9nYW1lL1dlYWtOZXRHYW1lXCI7XHJcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvVG9hc3RNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlQcm9wSXRlbSBleHRlbmRzIG12Y1ZpZXcge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGRlc2NfbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBjb3VudF9sYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgaWNvbjogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl9nZXQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgZGF0YTogUHJvcEluZm8gPSBudWxsO1xyXG5cclxuICAgIHByb3BMaXN0OiBvYmplY3QgPSB7XHJcbiAgICAgICAgMTogXCJndW5fbnVtXCIsXHJcbiAgICAgICAgMjogXCJzbm93YmFsbF9udW1cIixcclxuICAgICAgICAzOiBcIm1hZ25ldF9udW1cIlxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyPFByb3BJbmZvPih0aGlzLmRlc2NfbGFiZWwsIF8gPT4gXy5kZXNjKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyPFByb3BJbmZvPih0aGlzLmljb24sIF8gPT4gXy5pY29uKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmdldERhdGEoKSBhcyBQcm9wSW5mbztcclxuICAgICAgICB0aGlzLmNvdW50X2xhYmVsLnN0cmluZyA9IFVzZXJJbmZvW3RoaXMucHJvcExpc3RbdGhpcy5kYXRhLmlkXV07XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tfZ2V0KCkge1xyXG4gICAgICAgIFdlYWtOZXRHYW1lLmRvQ2hvaWNlKFwiU09WX0dldFByb3BJdGVtXCIsIF8gPT4ge1xyXG4gICAgICAgICAgICBVc2VySW5mb1t0aGlzLnByb3BMaXN0W3RoaXMuZGF0YS5pZF1dICs9IDI7XHJcbiAgICAgICAgICAgIFRvYXN0Lm1ha2UoXCLlt7Lpooblj5ZcIiArIHRoaXMuZGF0YS5uYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudF9sYWJlbC5zdHJpbmcgPSBVc2VySW5mb1t0aGlzLnByb3BMaXN0W3RoaXMuZGF0YS5pZF1dO1xyXG4gICAgICAgICAgICBVc2VySW5mby5zYXZlKCk7XHJcbiAgICAgICAgfSwgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==