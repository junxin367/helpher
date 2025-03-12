
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Ballon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '358f1qIG4JC3oIJ6SV8FVQO', 'Ballon');
// Game/Scripts/Ballon.ts

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
var SkeletonBase_1 = require("./SkeletonBase");
var RemoveOutOfView_1 = require("./RemoveOutOfView");
var Device_1 = require("../../framework/misc/Device");
var event_1 = require("../../framework/core/event");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Ballon = /** @class */ (function (_super) {
    __extends(Ballon, _super);
    function Ballon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._fly = false;
        _this._dead = false;
        return _this;
    }
    Ballon.prototype.start = function () {
        this.armature.animation.timeScale = 0.5;
        this.collider = this.getComponent(cc.PhysicsCollider);
        this.addComponent(RemoveOutOfView_1.default);
    };
    Ballon.prototype.flyAway = function (frompos) {
        var _this = this;
        Device_1.default.playSfx("ballon_flyaway");
        this.node.active = true;
        this.collider.enabled = false;
        if (frompos) {
            this.scheduleOnce(function (_) {
                _this.node.position = frompos;
            }, 0);
        }
        this.skeleton.playAnimation("up", 0);
        this._fly = true;
    };
    Ballon.prototype.update = function () {
        if (this._fly) {
            this.body.linearVelocity = cc.v2(0, 180);
        }
    };
    Ballon.prototype.onDestroy = function () {
        event_1.evt.emit("Game.boollonDes");
    };
    Ballon.prototype.isDead = function () {
        return this._dead;
    };
    Ballon.prototype.goDead = function () {
        if (this._dead)
            return;
        this._dead = true;
        Device_1.default.playSfx("ballon_bomb");
        this.skeleton.timeScale = 1;
        this.stopAnim();
        this.playAnim("dead", 1);
        this.scheduleOnce(this.dispose, 1);
        // evt.emit("Game.boollonDes")
    };
    Ballon.prototype.dispose = function () {
        this.node.destroy();
    };
    Ballon = __decorate([
        ccclass
    ], Ballon);
    return Ballon;
}(SkeletonBase_1.default));
exports.default = Ballon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcQmFsbG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEwQztBQUMxQyxxREFBZ0Q7QUFDaEQsc0RBQWlEO0FBQ2pELG9EQUFpRDtBQUM3QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQTtBQUV6QztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQXlEQztRQXRERyxVQUFJLEdBQVksS0FBSyxDQUFDO1FBZ0N0QixXQUFLLEdBQUcsS0FBSyxDQUFDOztJQXNCbEIsQ0FBQztJQXBERyxzQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxZQUFZLENBQUMseUJBQWUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx3QkFBTyxHQUFQLFVBQVEsT0FBUTtRQUFoQixpQkFZQztRQVhHLGdCQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLE9BQU8sRUFBRTtZQUNULElBQUksQ0FBQyxZQUFZLENBQUMsVUFBQSxDQUFDO2dCQUNmLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztZQUNqQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7U0FDUjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsdUJBQU0sR0FBTjtRQUNJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzVDO0lBQ0wsQ0FBQztJQUVELDBCQUFTLEdBQVQ7UUFDSSxXQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUlELHVCQUFNLEdBQU47UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELHVCQUFNLEdBQU47UUFDSSxJQUFJLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixnQkFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNsQyw4QkFBOEI7SUFDbEMsQ0FBQztJQUVELHdCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBRXhCLENBQUM7SUF2RGdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0F5RDFCO0lBQUQsYUFBQztDQXpERCxBQXlEQyxDQXpEbUMsc0JBQVksR0F5RC9DO2tCQXpEb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTa2VsZXRvbkJhc2UgZnJvbSBcIi4vU2tlbGV0b25CYXNlXCI7XHJcbmltcG9ydCBSZW1vdmVPdXRPZlZpZXcgZnJvbSBcIi4vUmVtb3ZlT3V0T2ZWaWV3XCI7XHJcbmltcG9ydCBEZXZpY2UgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9taXNjL0RldmljZVwiO1xyXG5pbXBvcnQgeyBldnQgfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL2NvcmUvZXZlbnRcIjtcclxubGV0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3JcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbG9uIGV4dGVuZHMgU2tlbGV0b25CYXNlIHtcclxuXHJcbiAgICBjb2xsaWRlcjogY2MuUGh5c2ljc0NvbGxpZGVyO1xyXG4gICAgX2ZseTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuYXJtYXR1cmUuYW5pbWF0aW9uLnRpbWVTY2FsZSA9IDAuNTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NvbGxpZGVyKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudChSZW1vdmVPdXRPZlZpZXcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZseUF3YXkoZnJvbXBvcz8pIHtcclxuICAgICAgICBEZXZpY2UucGxheVNmeChcImJhbGxvbl9mbHlhd2F5XCIpXHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlci5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGZyb21wb3MpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoXyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBmcm9tcG9zO1xyXG4gICAgICAgICAgICB9LCAwKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5za2VsZXRvbi5wbGF5QW5pbWF0aW9uKFwidXBcIiwgMCk7XHJcbiAgICAgICAgdGhpcy5fZmx5ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2ZseSkge1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAxODApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgZXZ0LmVtaXQoXCJHYW1lLmJvb2xsb25EZXNcIilcclxuICAgIH1cclxuXHJcbiAgICBfZGVhZCA9IGZhbHNlO1xyXG5cclxuICAgIGlzRGVhZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVhZDtcclxuICAgIH1cclxuXHJcbiAgICBnb0RlYWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RlYWQpIHJldHVybjtcclxuICAgICAgICB0aGlzLl9kZWFkID0gdHJ1ZTtcclxuICAgICAgICBEZXZpY2UucGxheVNmeChcImJhbGxvbl9ib21iXCIpXHJcbiAgICAgICAgdGhpcy5za2VsZXRvbi50aW1lU2NhbGUgPSAxO1xyXG4gICAgICAgIHRoaXMuc3RvcEFuaW0oKTtcclxuICAgICAgICB0aGlzLnBsYXlBbmltKFwiZGVhZFwiLCAxKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuZGlzcG9zZSwgMSlcclxuICAgICAgICAvLyBldnQuZW1pdChcIkdhbWUuYm9vbGxvbkRlc1wiKVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuXHJcbiAgICB9XHJcblxyXG59Il19