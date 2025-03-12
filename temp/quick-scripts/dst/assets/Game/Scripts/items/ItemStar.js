
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/items/ItemStar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcaXRlbXNcXEl0ZW1TdGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1FQUE4RDtBQUM5RCx5REFBb0Q7QUFDcEQsdURBQW9EO0FBRWhELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFBO0FBRXpDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUNDO1FBOUJHLGVBQVMsR0FBWSxLQUFLLENBQUM7O0lBOEIvQixDQUFDO0lBN0JHLHlCQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQU8sSUFBYTtRQUNoQixnQkFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN0QixJQUFJLElBQUksR0FBRyxxQkFBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxpQ0FBYyxHQUFkLFVBQWUsT0FBMEI7UUFBekMsaUJBWUM7UUFYRyxhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFBLENBQUM7WUFDZixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixXQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkM7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBOUJnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUM1QjtJQUFELGVBQUM7Q0FqQ0QsQUFpQ0MsQ0FqQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBaUNqRDtrQkFqQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9vbE1hbmFnZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9jb3JlL1Bvb2xNYW5hZ2VyXCI7XHJcbmltcG9ydCBEZXZpY2UgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9taXNjL0RldmljZVwiO1xyXG5pbXBvcnQgeyBldnQgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2NvcmUvZXZlbnRcIjtcclxuXHJcbmxldCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1TdGFyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcblxyXG4gICAgaXNPZmZUaW1lOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwbGF5Rngobm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIERldmljZS5wbGF5U2Z4KFwic3RhclwiKVxyXG4gICAgICAgIGxldCBzdGFyID0gUG9vbE1hbmFnZXIuZ2V0KFwiUG9vbFwiKS5nZXQoXCJnZXQtc3RhclwiKVxyXG4gICAgICAgIHN0YXIucG9zaXRpb24gPSBub2RlLnBvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3Q6IGNjLlBoeXNpY3NDb250YWN0KSB7XHJcbiAgICAgICAgLy9hZGQgYSBzdGFyIFxyXG4gICAgICAgIC8vb3IgZmx5IHRvIHRvcCBcclxuICAgICAgICB0aGlzLnBsYXlGeCh0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoXyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNPZmZUaW1lID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMC42KVxyXG4gICAgICAgIGlmICghdGhpcy5pc09mZlRpbWUpIHtcclxuICAgICAgICAgICAgZXZ0LmVtaXQoXCJHYW1lLmdldHN0YXJcIiwgdGhpcy5ub2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc09mZlRpbWUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=