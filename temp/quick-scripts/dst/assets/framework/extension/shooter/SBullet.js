
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/shooter/SBullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9c351+bI0tPqbc0vLxFTH7n', 'SBullet');
// framework/extension/shooter/SBullet.ts

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
var SGameEntity_1 = require("./SGameEntity");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var SBullet = /** @class */ (function (_super) {
    __extends(SBullet, _super);
    function SBullet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 5;
        _this.tails = [];
        _this.def_opacity = 155;
        return _this;
    }
    SBullet.prototype.onDead = function () {
        this.tails.forEach(function (v) {
            v.node.runAction(cc.fadeOut(0.2));
        });
    };
    SBullet.prototype.onLoad = function () {
        var _this = this;
        _super.prototype.onLoad.call(this);
        if (this.tails.length == 0) {
            this.tails = this.getComponentsInChildren(cc.Sprite);
            this.tails = this.tails.filter(function (v) { return v.node != _this.node; });
        }
    };
    SBullet.prototype.onEnable = function () {
        var _this = this;
        _super.prototype.onEnable.call(this);
        this.tails.forEach(function (v) {
            v.node.width = 0;
            v.node.opacity = _this.def_opacity;
        });
    };
    SBullet.prototype.onCollisionEnter = function (other, self) {
        var entity = other.getComponent(SGameEntity_1.default);
        if (entity == null) {
            entity = other.getComponentInParent(SGameEntity_1.default);
        }
        if (entity.isActive && this.isActive) {
            entity.decreaseHp(this.damage);
            this.decreaseHp(entity.damage);
            this.onHitEntity(entity, other);
        }
    };
    SBullet.prototype.onHitEntity = function (entity, collider) {
    };
    SBullet.prototype.fire = function (v) {
        this.moveEngine.velocity = v;
        this.run();
    };
    SBullet.prototype.update = function (dt) {
        var _this = this;
        this.tails.forEach(function (v) {
            v.node.width += _this.speed;
        });
    };
    __decorate([
        property
    ], SBullet.prototype, "speed", void 0);
    __decorate([
        property([cc.Sprite])
    ], SBullet.prototype, "tails", void 0);
    __decorate([
        property
    ], SBullet.prototype, "def_opacity", void 0);
    SBullet = __decorate([
        ccclass,
        menu("shooter/Bullet")
    ], SBullet);
    return SBullet;
}(SGameEntity_1.default));
exports.default = SBullet;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHNob290ZXJcXFNCdWxsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdEO0FBRWxELElBQUEsS0FBOEIsRUFBRSxDQUFDLFVBQVUsRUFBekMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBSWxEO0lBQXFDLDJCQUFVO0lBQS9DO1FBQUEscUVBNERDO1FBekRHLFdBQUssR0FBVyxDQUFDLENBQUM7UUFHbEIsV0FBSyxHQUFnQixFQUFFLENBQUE7UUFHdkIsaUJBQVcsR0FBVyxHQUFHLENBQUM7O0lBbUQ5QixDQUFDO0lBakRHLHdCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7WUFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHdCQUFNLEdBQU47UUFBQSxpQkFNQztRQUxHLGlCQUFNLE1BQU0sV0FBRSxDQUFDO1FBQ2YsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUksQ0FBQyxJQUFJLEVBQW5CLENBQW1CLENBQUMsQ0FBQTtTQUMzRDtJQUNMLENBQUM7SUFFRCwwQkFBUSxHQUFSO1FBQUEsaUJBTUM7UUFMRyxpQkFBTSxRQUFRLFdBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7WUFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO1lBQ2hCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsa0NBQWdCLEdBQWhCLFVBQWlCLEtBQWtCLEVBQUUsSUFBSTtRQUVyQyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLHFCQUFVLENBQUMsQ0FBQTtRQUMzQyxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDaEIsTUFBTSxHQUFHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBVSxDQUFDLENBQUM7U0FDbkQ7UUFDRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQTtTQUNsQztJQUNMLENBQUM7SUFFRCw2QkFBVyxHQUFYLFVBQVksTUFBa0IsRUFBRSxRQUFxQjtJQUVyRCxDQUFDO0lBRUQsc0JBQUksR0FBSixVQUFLLENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUE7UUFDNUIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFBO0lBQ2QsQ0FBQztJQUVELHdCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQVQsaUJBSUM7UUFIRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7WUFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUF4REQ7UUFEQyxRQUFROzBDQUNTO0lBR2xCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzBDQUNDO0lBR3ZCO1FBREMsUUFBUTtnREFDaUI7SUFUVCxPQUFPO1FBRjNCLE9BQU87UUFDUCxJQUFJLENBQUMsZ0JBQWdCLENBQUM7T0FDRixPQUFPLENBNEQzQjtJQUFELGNBQUM7Q0E1REQsQUE0REMsQ0E1RG9DLHFCQUFVLEdBNEQ5QztrQkE1RG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUVudGl0eSwgeyBFbnRpdHlTdGF0ZSB9IGZyb20gXCIuL1NHYW1lRW50aXR5XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuQG1lbnUoXCJzaG9vdGVyL0J1bGxldFwiKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTQnVsbGV0IGV4dGVuZHMgR2FtZUVudGl0eSB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzcGVlZDogbnVtYmVyID0gNTtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZV0pXHJcbiAgICB0YWlsczogY2MuU3ByaXRlW10gPSBbXVxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZGVmX29wYWNpdHk6IG51bWJlciA9IDE1NTtcclxuXHJcbiAgICBvbkRlYWQoKSB7XHJcbiAgICAgICAgdGhpcy50YWlscy5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICB2Lm5vZGUucnVuQWN0aW9uKGNjLmZhZGVPdXQoMC4yKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgc3VwZXIub25Mb2FkKCk7XHJcbiAgICAgICAgaWYgKHRoaXMudGFpbHMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy50YWlscyA9IHRoaXMuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgdGhpcy50YWlscyA9IHRoaXMudGFpbHMuZmlsdGVyKHYgPT4gdi5ub2RlICE9IHRoaXMubm9kZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgc3VwZXIub25FbmFibGUoKTtcclxuICAgICAgICB0aGlzLnRhaWxzLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICAgIHYubm9kZS53aWR0aCA9IDBcclxuICAgICAgICAgICAgdi5ub2RlLm9wYWNpdHkgPSB0aGlzLmRlZl9vcGFjaXR5O1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlcjogY2MuQ29sbGlkZXIsIHNlbGYpIHtcclxuXHJcbiAgICAgICAgbGV0IGVudGl0eSA9IG90aGVyLmdldENvbXBvbmVudChHYW1lRW50aXR5KVxyXG4gICAgICAgIGlmIChlbnRpdHkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBlbnRpdHkgPSBvdGhlci5nZXRDb21wb25lbnRJblBhcmVudChHYW1lRW50aXR5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVudGl0eS5pc0FjdGl2ZSAmJiB0aGlzLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGVudGl0eS5kZWNyZWFzZUhwKHRoaXMuZGFtYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5kZWNyZWFzZUhwKGVudGl0eS5kYW1hZ2UpXHJcbiAgICAgICAgICAgIHRoaXMub25IaXRFbnRpdHkoZW50aXR5LCBvdGhlcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IaXRFbnRpdHkoZW50aXR5OiBHYW1lRW50aXR5LCBjb2xsaWRlcjogY2MuQ29sbGlkZXIpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZmlyZSh2KSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlRW5naW5lLnZlbG9jaXR5ID0gdlxyXG4gICAgICAgIHRoaXMucnVuKClcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLnRhaWxzLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICAgIHYubm9kZS53aWR0aCArPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIl19