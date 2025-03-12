
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Portal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fddcaRUintOTaigxk1Xrt0Q', 'Portal');
// Game/Scripts/Portal.ts

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
var RoleLoader_1 = require("./RoleLoader");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemPortal = /** @class */ (function (_super) {
    __extends(ItemPortal, _super);
    function ItemPortal() {
        // anim: cc.Animation = null
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // collider: cc.PhysicsCollider = null;
        _this.anotherDoor = null;
        _this.isTransfer = false;
        _this.targetDoorNode = null;
        _this.targetPortal = null;
        _this.targetPortalCollider = null;
        _this.self_collider = null;
        _this.isEndContact = true;
        _this.endContactNumber = 0;
        return _this;
    }
    ItemPortal_1 = ItemPortal;
    ItemPortal.prototype.onLoad = function () {
    };
    ItemPortal.prototype.start = function () {
        this.targetDoorNode = this.anotherDoor.getComponent(RoleLoader_1.default).self_door;
        this.fx = this.getComponentInChildren(cc.ParticleSystem);
        this.targetPortal = this.targetDoorNode.getComponent(ItemPortal_1);
        this.targetPortalCollider = this.targetPortal.getComponent(cc.Collider);
        this.self_collider = this.getComponent(cc.Collider);
    };
    ItemPortal.prototype.go = function (node) {
        var _this = this;
        this.scheduleOnce(function (_) {
            cc.tween(node).to(0.5, { opacity: 0 }).call(function () {
                var pos = _this.targetDoorNode.getPosition();
                node.setPosition(pos.x, pos.y);
            }).to(0.5, { opacity: 255 }).start();
        }, 0);
    };
    ItemPortal.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        if (this.isTransfer || !this.isEndContact)
            return;
        this.isTransfer = true;
        this.go(other.node);
        this.fx.resetSystem();
        this.targetPortal.isTransfer = true;
        this.targetPortal.fx.resetSystem();
        this.scheduleOnce(function () {
            _this.isTransfer = false;
            _this.targetPortal.isTransfer = false;
        }, 2);
        this.isEndContact = false;
    };
    ItemPortal.prototype.onEndContact = function (contact, self, other) {
        this.endContactNumber += 1;
        if (this.endContactNumber >= 3) {
            this.endContactNumber = 0;
            this.isEndContact = true;
        }
    };
    var ItemPortal_1;
    __decorate([
        property(cc.Node)
    ], ItemPortal.prototype, "anotherDoor", void 0);
    ItemPortal = ItemPortal_1 = __decorate([
        ccclass
    ], ItemPortal);
    return ItemPortal;
}(cc.Component));
exports.default = ItemPortal;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcUG9ydGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFzQztBQUVsQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQTtBQUV6QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUVJLDRCQUE0QjtRQUZoQyxxRUFrRUM7UUE5REcsdUNBQXVDO1FBR3ZDLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBRTVCLG9CQUFjLEdBQVksSUFBSSxDQUFBO1FBRTlCLGtCQUFZLEdBQWUsSUFBSSxDQUFDO1FBRWhDLDBCQUFvQixHQUFnQixJQUFJLENBQUM7UUFDekMsbUJBQWEsR0FBZ0IsSUFBSSxDQUFDO1FBQ2xDLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBSTdCLHNCQUFnQixHQUFXLENBQUMsQ0FBQzs7SUE2Q2pDLENBQUM7bUJBbEVvQixVQUFVO0lBdUIzQiwyQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELDBCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLG9CQUFVLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDMUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsWUFBVSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCx1QkFBRSxHQUFGLFVBQUcsSUFBYTtRQUFoQixpQkFPQztRQU5HLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBQSxDQUFDO1lBQ2YsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN4QyxJQUFJLEdBQUcsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBR0QsbUNBQWMsR0FBZCxVQUFlLE9BQTBCLEVBQUUsSUFBSSxFQUFFLEtBQXlCO1FBQTFFLGlCQVlDO1FBWEcsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFBRSxPQUFPO1FBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixLQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDekMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUVELGlDQUFZLEdBQVosVUFBYSxPQUEwQixFQUFFLElBQUksRUFBRSxLQUF5QjtRQUNwRSxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQzVCO0lBQ0wsQ0FBQzs7SUExREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDVTtJQVBYLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FrRTlCO0lBQUQsaUJBQUM7Q0FsRUQsQUFrRUMsQ0FsRXVDLEVBQUUsQ0FBQyxTQUFTLEdBa0VuRDtrQkFsRW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm9sZUxvYWRlciBmcm9tIFwiLi9Sb2xlTG9hZGVyXCI7XG5cbmxldCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbVBvcnRhbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7IC8vIOS8oOmAgemXqFxuXG4gICAgLy8gYW5pbTogY2MuQW5pbWF0aW9uID0gbnVsbFxuXG4gICAgLy8gY29sbGlkZXI6IGNjLlBoeXNpY3NDb2xsaWRlciA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBhbm90aGVyRG9vcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBpc1RyYW5zZmVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICB0YXJnZXREb29yTm9kZTogY2MuTm9kZSA9IG51bGxcblxuICAgIHRhcmdldFBvcnRhbDogSXRlbVBvcnRhbCA9IG51bGw7XG5cbiAgICB0YXJnZXRQb3J0YWxDb2xsaWRlcjogY2MuQ29sbGlkZXIgPSBudWxsO1xuICAgIHNlbGZfY29sbGlkZXI6IGNjLkNvbGxpZGVyID0gbnVsbDtcbiAgICBpc0VuZENvbnRhY3Q6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgZng6IGNjLlBhcnRpY2xlU3lzdGVtO1xuXG4gICAgZW5kQ29udGFjdE51bWJlcjogbnVtYmVyID0gMDtcblxuICAgIG9uTG9hZCgpIHtcblxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnRhcmdldERvb3JOb2RlID0gdGhpcy5hbm90aGVyRG9vci5nZXRDb21wb25lbnQoUm9sZUxvYWRlcikuc2VsZl9kb29yO1xuICAgICAgICB0aGlzLmZ4ID0gdGhpcy5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLlBhcnRpY2xlU3lzdGVtKTtcbiAgICAgICAgdGhpcy50YXJnZXRQb3J0YWwgPSB0aGlzLnRhcmdldERvb3JOb2RlLmdldENvbXBvbmVudChJdGVtUG9ydGFsKTtcbiAgICAgICAgdGhpcy50YXJnZXRQb3J0YWxDb2xsaWRlciA9IHRoaXMudGFyZ2V0UG9ydGFsLmdldENvbXBvbmVudChjYy5Db2xsaWRlcik7XG4gICAgICAgIHRoaXMuc2VsZl9jb2xsaWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkNvbGxpZGVyKTtcbiAgICB9XG5cbiAgICBnbyhub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKF8gPT4ge1xuICAgICAgICAgICAgY2MudHdlZW4obm9kZSkudG8oMC41LCB7IG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMudGFyZ2V0RG9vck5vZGUuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHBvcy54LCBwb3MueSk7XG4gICAgICAgICAgICB9KS50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0pLnN0YXJ0KCk7XG4gICAgICAgIH0sIDApO1xuICAgIH1cblxuXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdDogY2MuUGh5c2ljc0NvbnRhY3QsIHNlbGYsIG90aGVyOiBjYy5QaHlzaWNzQ29sbGlkZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNUcmFuc2ZlciB8fCAhdGhpcy5pc0VuZENvbnRhY3QpIHJldHVybjtcbiAgICAgICAgdGhpcy5pc1RyYW5zZmVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nbyhvdGhlci5ub2RlKTtcbiAgICAgICAgdGhpcy5meC5yZXNldFN5c3RlbSgpO1xuICAgICAgICB0aGlzLnRhcmdldFBvcnRhbC5pc1RyYW5zZmVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50YXJnZXRQb3J0YWwuZngucmVzZXRTeXN0ZW0oKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1RyYW5zZmVyID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRhcmdldFBvcnRhbC5pc1RyYW5zZmVyID0gZmFsc2U7XG4gICAgICAgIH0sIDIpXG4gICAgICAgIHRoaXMuaXNFbmRDb250YWN0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25FbmRDb250YWN0KGNvbnRhY3Q6IGNjLlBoeXNpY3NDb250YWN0LCBzZWxmLCBvdGhlcjogY2MuUGh5c2ljc0NvbGxpZGVyKSB7XG4gICAgICAgIHRoaXMuZW5kQ29udGFjdE51bWJlciArPSAxO1xuICAgICAgICBpZiAodGhpcy5lbmRDb250YWN0TnVtYmVyID49IDMpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kQ29udGFjdE51bWJlciA9IDA7XG4gICAgICAgICAgICB0aGlzLmlzRW5kQ29udGFjdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59Il19