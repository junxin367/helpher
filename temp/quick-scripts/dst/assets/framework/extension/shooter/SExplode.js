
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/shooter/SExplode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f8697pU05hC1rwIAF4ytfNT', 'SExplode');
// framework/extension/shooter/SExplode.ts

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
var SExplode = /** @class */ (function (_super) {
    __extends(SExplode, _super);
    function SExplode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 5;
        _this.damage = 200;
        return _this;
        // update (dt) {}
    }
    SExplode.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SExplode.prototype.start = function () {
        _super.prototype.start.call(this);
        // ShootManager.instance.allBullets.push(this);
    };
    SExplode.prototype.onDead = function () {
    };
    SExplode.prototype.onCollisionEnter = function (other, self) {
        var entity = other.getComponent(SGameEntity_1.default);
        if (entity == null) {
            entity = other.getComponentInParent(SGameEntity_1.default);
        }
        if (entity.isActive && this.isActive) {
            // this.damage = Math.round( Math.pow(PlayerInfo.g_lv, 3)/3 +200 );
            entity.decreaseHp(this.damage);
            //this.decreaseHp(entity.damage)
            this.onHitEntity(entity, other);
        }
    };
    SExplode.prototype.onHitEntity = function (entity, collider) {
    };
    __decorate([
        property
    ], SExplode.prototype, "speed", void 0);
    __decorate([
        property
    ], SExplode.prototype, "damage", void 0);
    SExplode = __decorate([
        ccclass,
        menu("shooter/Explode")
    ], SExplode);
    return SExplode;
}(SGameEntity_1.default));
exports.default = SExplode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHNob290ZXJcXFNFeHBsb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF3RDtBQUVsRCxJQUFBLEtBQThCLEVBQUUsQ0FBQyxVQUFVLEVBQXpDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBa0IsQ0FBQztBQUlsRDtJQUFzQyw0QkFBVTtJQUFoRDtRQUFBLHFFQXdDQztRQXJDRyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBR2xCLFlBQU0sR0FBVyxHQUFHLENBQUM7O1FBaUNyQixpQkFBaUI7SUFDckIsQ0FBQztJQWhDRyx5QkFBTSxHQUFOO1FBQ0ksaUJBQU0sTUFBTSxXQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFDSSxpQkFBTSxLQUFLLFdBQUUsQ0FBQztRQUNkLCtDQUErQztJQUNuRCxDQUFDO0lBRUQseUJBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCxtQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBa0IsRUFBRSxJQUFJO1FBQ3JDLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMscUJBQVUsQ0FBQyxDQUFBO1FBQzNDLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUNoQixNQUFNLEdBQUcsS0FBSyxDQUFDLG9CQUFvQixDQUFDLHFCQUFVLENBQUMsQ0FBQztTQUNuRDtRQUNELElBQUksTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xDLG1FQUFtRTtZQUNuRSxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQixnQ0FBZ0M7WUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUMsS0FBSyxDQUFDLENBQUE7U0FDakM7SUFDTCxDQUFDO0lBRUQsOEJBQVcsR0FBWCxVQUFZLE1BQWtCLEVBQUMsUUFBb0I7SUFFbkQsQ0FBQztJQWpDRDtRQURDLFFBQVE7MkNBQ1M7SUFHbEI7UUFEQyxRQUFROzRDQUNZO0lBTkosUUFBUTtRQUY1QixPQUFPO1FBQ1AsSUFBSSxDQUFDLGlCQUFpQixDQUFDO09BQ0gsUUFBUSxDQXdDNUI7SUFBRCxlQUFDO0NBeENELEFBd0NDLENBeENxQyxxQkFBVSxHQXdDL0M7a0JBeENvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVFbnRpdHksIHsgRW50aXR5U3RhdGUgfSBmcm9tIFwiLi9TR2FtZUVudGl0eVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgbWVudSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbkBtZW51KFwic2hvb3Rlci9FeHBsb2RlXCIpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNFeHBsb2RlIGV4dGVuZHMgR2FtZUVudGl0eSB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzcGVlZDogbnVtYmVyID0gNTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGRhbWFnZTogbnVtYmVyID0gMjAwO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBzdXBlci5vbkxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBzdXBlci5zdGFydCgpO1xyXG4gICAgICAgIC8vIFNob290TWFuYWdlci5pbnN0YW5jZS5hbGxCdWxsZXRzLnB1c2godGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZWFkKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZikge1xyXG4gICAgICAgIGxldCBlbnRpdHkgPSBvdGhlci5nZXRDb21wb25lbnQoR2FtZUVudGl0eSlcclxuICAgICAgICBpZiAoZW50aXR5ID09IG51bGwpIHtcclxuICAgICAgICAgICAgZW50aXR5ID0gb3RoZXIuZ2V0Q29tcG9uZW50SW5QYXJlbnQoR2FtZUVudGl0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbnRpdHkuaXNBY3RpdmUgJiYgdGhpcy5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmRhbWFnZSA9IE1hdGgucm91bmQoIE1hdGgucG93KFBsYXllckluZm8uZ19sdiwgMykvMyArMjAwICk7XHJcbiAgICAgICAgICAgIGVudGl0eS5kZWNyZWFzZUhwKHRoaXMuZGFtYWdlKTtcclxuICAgICAgICAgICAgLy90aGlzLmRlY3JlYXNlSHAoZW50aXR5LmRhbWFnZSlcclxuICAgICAgICAgICAgdGhpcy5vbkhpdEVudGl0eShlbnRpdHksb3RoZXIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSGl0RW50aXR5KGVudGl0eTogR2FtZUVudGl0eSxjb2xsaWRlcjpjYy5Db2xsaWRlcikge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=