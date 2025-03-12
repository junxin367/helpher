
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/shooter/SBullet2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b7dd8ihOSxNFqJGAlsmqCjA', 'SBullet2');
// framework/extension/shooter/SBullet2.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, requireComponent = _a.requireComponent;
var SBulletWithEntity = /** @class */ (function (_super) {
    __extends(SBulletWithEntity, _super);
    function SBulletWithEntity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 5;
        _this.tails = [];
        _this.def_opacity = 155;
        _this.entity = null;
        return _this;
    }
    Object.defineProperty(SBulletWithEntity.prototype, "damage", {
        set: function (v) {
            this.entity.damage = v;
        },
        enumerable: false,
        configurable: true
    });
    SBulletWithEntity.prototype.onLoad = function () {
        var _this = this;
        this.entity = this.getComponent(SGameEntity_1.default);
        this.entity.on(SGameEntity_1.default.Event.Dead, this.onDead, this);
        if (this.tails.length == 0) {
            this.tails = this.getComponentsInChildren(cc.Sprite);
            this.tails = this.tails.filter(function (v) { return v.node != _this.node; });
        }
    };
    SBulletWithEntity.prototype.onDestroy = function () {
        this.entity.off(SGameEntity_1.default.Event.Dead, this.onDead, this);
    };
    SBulletWithEntity.prototype.onEnable = function () {
        var _this = this;
        this.tails.forEach(function (v) {
            v.node.width = 0;
            v.node.opacity = _this.def_opacity;
        });
    };
    SBulletWithEntity.prototype.onDead = function () {
        this.tails.forEach(function (v) {
            v.node.runAction(cc.fadeOut(0.2));
        });
    };
    SBulletWithEntity.prototype.onCollisionEnter = function (other, self) {
        var entity = other.getComponent(SGameEntity_1.default);
        if (entity == null) {
            entity = other.getComponentInParent(SGameEntity_1.default);
        }
        if (entity.isActive && this.entity.isActive) {
            entity.decreaseHp(this.entity.damage);
            this.entity.decreaseHp(entity.damage);
            this.onHitEntity(entity, other);
        }
    };
    SBulletWithEntity.prototype.onHitEntity = function (entity, collider) {
    };
    SBulletWithEntity.prototype.fire = function (v) {
        if (this.entity.moveEngine) {
            this.entity.moveEngine.velocity = v;
        }
        this.entity.run();
    };
    SBulletWithEntity.prototype.update = function (dt) {
        var _this = this;
        this.tails.forEach(function (v) {
            v.node.width += _this.speed;
        });
    };
    __decorate([
        property
    ], SBulletWithEntity.prototype, "speed", void 0);
    __decorate([
        property([cc.Sprite])
    ], SBulletWithEntity.prototype, "tails", void 0);
    __decorate([
        property
    ], SBulletWithEntity.prototype, "def_opacity", void 0);
    SBulletWithEntity = __decorate([
        ccclass,
        menu("shooter/BulletWithEntity"),
        requireComponent(SGameEntity_1.default)
    ], SBulletWithEntity);
    return SBulletWithEntity;
}(cc.Component));
exports.default = SBulletWithEntity;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHNob290ZXJcXFNCdWxsZXQyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF3RDtBQUdsRCxJQUFBLEtBQWdELEVBQUUsQ0FBQyxVQUFVLEVBQTNELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBQSxFQUFFLGdCQUFnQixzQkFBa0IsQ0FBQztBQUtwRTtJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQXlFQztRQXRFRyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBR2xCLFdBQUssR0FBZ0IsRUFBRSxDQUFBO1FBR3ZCLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBRTFCLFlBQU0sR0FBZSxJQUFJLENBQUM7O0lBOEQ5QixDQUFDO0lBNURHLHNCQUFJLHFDQUFNO2FBQVYsVUFBVyxDQUFDO1lBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsa0NBQU0sR0FBTjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFVLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxxQkFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN4RCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSSxDQUFDLElBQUksRUFBbkIsQ0FBbUIsQ0FBQyxDQUFBO1NBQzNEO0lBQ0wsQ0FBQztJQUVELHFDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxxQkFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUM3RCxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtZQUNoQixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELGtDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7WUFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELDRDQUFnQixHQUFoQixVQUFpQixLQUFrQixFQUFFLElBQUk7UUFFckMsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxxQkFBVSxDQUFDLENBQUE7UUFDM0MsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2hCLE1BQU0sR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUMscUJBQVUsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3pDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUE7U0FDbEM7SUFDTCxDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLE1BQWtCLEVBQUUsUUFBcUI7SUFFckQsQ0FBQztJQUVELGdDQUFJLEdBQUosVUFBSyxDQUFDO1FBQ0YsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFBO1NBQ3RDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBR0Qsa0NBQU0sR0FBTixVQUFPLEVBQUU7UUFBVCxpQkFJQztRQUhHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUNoQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQXJFRDtRQURDLFFBQVE7b0RBQ1M7SUFHbEI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7b0RBQ0M7SUFHdkI7UUFEQyxRQUFROzBEQUNpQjtJQVRULGlCQUFpQjtRQUhyQyxPQUFPO1FBQ1AsSUFBSSxDQUFDLDBCQUEwQixDQUFDO1FBQ2hDLGdCQUFnQixDQUFDLHFCQUFVLENBQUM7T0FDUixpQkFBaUIsQ0F5RXJDO0lBQUQsd0JBQUM7Q0F6RUQsQUF5RUMsQ0F6RThDLEVBQUUsQ0FBQyxTQUFTLEdBeUUxRDtrQkF6RW9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lRW50aXR5LCB7IEVudGl0eVN0YXRlIH0gZnJvbSBcIi4vU0dhbWVFbnRpdHlcIjtcclxuaW1wb3J0IHsgQnVsbGV0SW50ZXJmYWNlIH0gZnJvbSBcIi4vU0ZpcmVBZ2VudFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgbWVudSwgcmVxdWlyZUNvbXBvbmVudCB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbkBtZW51KFwic2hvb3Rlci9CdWxsZXRXaXRoRW50aXR5XCIpXHJcbkByZXF1aXJlQ29tcG9uZW50KEdhbWVFbnRpdHkpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNCdWxsZXRXaXRoRW50aXR5IGV4dGVuZHMgY2MuQ29tcG9uZW50IGltcGxlbWVudHMgQnVsbGV0SW50ZXJmYWNlIHtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNwZWVkOiBudW1iZXIgPSA1O1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlXSlcclxuICAgIHRhaWxzOiBjYy5TcHJpdGVbXSA9IFtdXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBkZWZfb3BhY2l0eTogbnVtYmVyID0gMTU1O1xyXG5cclxuICAgIGVudGl0eTogR2FtZUVudGl0eSA9IG51bGw7XHJcblxyXG4gICAgc2V0IGRhbWFnZSh2KSB7XHJcbiAgICAgICAgdGhpcy5lbnRpdHkuZGFtYWdlID0gdjtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbnRpdHkgPSB0aGlzLmdldENvbXBvbmVudChHYW1lRW50aXR5KTtcclxuICAgICAgICB0aGlzLmVudGl0eS5vbihHYW1lRW50aXR5LkV2ZW50LkRlYWQsIHRoaXMub25EZWFkLCB0aGlzKVxyXG4gICAgICAgIGlmICh0aGlzLnRhaWxzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFpbHMgPSB0aGlzLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgIHRoaXMudGFpbHMgPSB0aGlzLnRhaWxzLmZpbHRlcih2ID0+IHYubm9kZSAhPSB0aGlzLm5vZGUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmVudGl0eS5vZmYoR2FtZUVudGl0eS5FdmVudC5EZWFkLCB0aGlzLm9uRGVhZCwgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnRhaWxzLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICAgIHYubm9kZS53aWR0aCA9IDBcclxuICAgICAgICAgICAgdi5ub2RlLm9wYWNpdHkgPSB0aGlzLmRlZl9vcGFjaXR5O1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25EZWFkKCkge1xyXG4gICAgICAgIHRoaXMudGFpbHMuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgICAgdi5ub2RlLnJ1bkFjdGlvbihjYy5mYWRlT3V0KDAuMikpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlcjogY2MuQ29sbGlkZXIsIHNlbGYpIHtcclxuXHJcbiAgICAgICAgbGV0IGVudGl0eSA9IG90aGVyLmdldENvbXBvbmVudChHYW1lRW50aXR5KVxyXG4gICAgICAgIGlmIChlbnRpdHkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBlbnRpdHkgPSBvdGhlci5nZXRDb21wb25lbnRJblBhcmVudChHYW1lRW50aXR5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVudGl0eS5pc0FjdGl2ZSAmJiB0aGlzLmVudGl0eS5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICBlbnRpdHkuZGVjcmVhc2VIcCh0aGlzLmVudGl0eS5kYW1hZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLmVudGl0eS5kZWNyZWFzZUhwKGVudGl0eS5kYW1hZ2UpXHJcbiAgICAgICAgICAgIHRoaXMub25IaXRFbnRpdHkoZW50aXR5LCBvdGhlcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IaXRFbnRpdHkoZW50aXR5OiBHYW1lRW50aXR5LCBjb2xsaWRlcjogY2MuQ29sbGlkZXIpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZmlyZSh2KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW50aXR5Lm1vdmVFbmdpbmUpIHtcclxuICAgICAgICAgICAgdGhpcy5lbnRpdHkubW92ZUVuZ2luZS52ZWxvY2l0eSA9IHZcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbnRpdHkucnVuKClcclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy50YWlscy5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICB2Lm5vZGUud2lkdGggKz0gdGhpcy5zcGVlZDtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiJdfQ==