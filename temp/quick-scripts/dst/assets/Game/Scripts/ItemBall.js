
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/ItemBall.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '02da4XUgcpGwq7X1icaYL7h', 'ItemBall');
// Game/Scripts/ItemBall.ts

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
var AIEnemy_1 = require("./AIEnemy");
var BallSkill_1 = require("./BallSkill");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemBall = /** @class */ (function (_super) {
    __extends(ItemBall, _super);
    function ItemBall() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.light = null;
        _this.moveEngine = null;
        _this.once = true;
        return _this;
    }
    ItemBall.prototype.onLoad = function () {
        this.light = this.node.getChildByName("light");
    };
    ItemBall.prototype.start = function () {
    };
    ItemBall.prototype.go = function () {
        if (!this.once) {
            return;
        }
        for (var i = 0; i < AIEnemy_1.default.allEnemies.length; i++) {
            var e = AIEnemy_1.default.allEnemies[i];
            this.addBallSkill(e);
        }
        this.once = false;
        this.light.destroy();
        this.node.destroy();
        //play fx 
    };
    ItemBall.prototype.addBallSkill = function (enemey) {
        var parent = this.node.parent;
        var pos = this.node.position;
        cc.resources.load("Prefabs/effect/ball_skill", cc.Prefab, function (err, res) {
            var node = cc.instantiate(res);
            var skill = node.getComponent(BallSkill_1.default);
            skill.trigger(enemey.node);
            node.parent = parent;
            node.position = pos;
        });
    };
    ItemBall = __decorate([
        ccclass
    ], ItemBall);
    return ItemBall;
}(cc.Component));
exports.default = ItemBall;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcSXRlbUJhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQStCO0FBSS9CLHlDQUFvQztBQUVoQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQTtBQUd6QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXlDQztRQXZDRyxXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBQzlCLFVBQUksR0FBWSxJQUFJLENBQUM7O0lBcUN6QixDQUFDO0lBbkNHLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBRWxELENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHFCQUFFLEdBQUY7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLE9BQU87U0FDVjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEQsSUFBSSxDQUFDLEdBQUcsaUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixVQUFVO0lBQ2QsQ0FBQztJQUVELCtCQUFZLEdBQVosVUFBYSxNQUFlO1FBQ3hCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztZQUMvRCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBWSxDQUFBO1lBQ3pDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxDQUFDO1lBQ3pDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQXZDZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXlDNUI7SUFBRCxlQUFDO0NBekNELEFBeUNDLENBekNxQyxFQUFFLENBQUMsU0FBUyxHQXlDakQ7a0JBekNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFJRW5lbXkgZnJvbSBcIi4vQUlFbmVteVwiXHJcbmltcG9ydCBNb3ZlRW5naW5lIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL21vdmVtZW50L01vdmVFbmdpbmVcIjtcclxuaW1wb3J0IEZTTSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL2NvcmUvRlNNXCI7XHJcbmltcG9ydCBFbmVteUJhbGxVcCBmcm9tIFwiLi9FbmVteUJhbGxVcFwiO1xyXG5pbXBvcnQgQmFsbFNraWxsIGZyb20gXCIuL0JhbGxTa2lsbFwiO1xyXG5cclxubGV0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3JcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1CYWxsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBsaWdodDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBtb3ZlRW5naW5lOiBNb3ZlRW5naW5lID0gbnVsbDtcclxuICAgIG9uY2U6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmxpZ2h0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibGlnaHRcIilcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdvKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5vbmNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBBSUVuZW15LmFsbEVuZW1pZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGUgPSBBSUVuZW15LmFsbEVuZW1pZXNbaV07XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQmFsbFNraWxsKGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uY2UgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxpZ2h0LmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIC8vcGxheSBmeCBcclxuICAgIH1cclxuXHJcbiAgICBhZGRCYWxsU2tpbGwoZW5lbWV5OiBBSUVuZW15KSB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcIlByZWZhYnMvZWZmZWN0L2JhbGxfc2tpbGxcIiwgY2MuUHJlZmFiLCAoZXJyLCByZXMpID0+IHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShyZXMpIGFzIGNjLk5vZGVcclxuICAgICAgICAgICAgbGV0IHNraWxsID0gbm9kZS5nZXRDb21wb25lbnQoQmFsbFNraWxsKTtcclxuICAgICAgICAgICAgc2tpbGwudHJpZ2dlcihlbmVtZXkubm9kZSk7XHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gcG9zO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==