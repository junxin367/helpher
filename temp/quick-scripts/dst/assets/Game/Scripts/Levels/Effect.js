
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Levels/Effect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a07baB3hTdNoI94e+/5sX7q', 'Effect');
// Game/Scripts/Levels/Effect.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PoolManager_1 = require("../../../framework/core/PoolManager");
var Role_1 = require("../Role");
var event_1 = require("../../../framework/core/event");
var AIEnemy_1 = require("../AIEnemy");
var SnowBall_1 = require("../items/SnowBall");
var ItemStar_1 = require("../items/ItemStar");
var FlyToMagnet_1 = require("../items/FlyToMagnet");
var Game_1 = require("../Game");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var Effect = /** @class */ (function () {
    function Effect() {
    }
    Effect.showMagnet = function (delay) {
        if (delay === void 0) { delay = 1.0; }
        // add a megnet over the head of the girl 
        var mag = PoolManager_1.default.get("Pool").get("magnet-indicator");
        mag.position = cc.v3(0, 200, 0);
        mag.parent = Role_1.default.self.node;
        var anim = mag.getComponent(cc.Animation);
        anim.play();
        event_1.evt.sleep(delay).then(function (v) {
            PoolManager_1.default.get("Pool").put(mag);
        });
        // anim.on('finished', () => {
        // })
    };
    Effect.do_magnet = function () {
        //find all stars
        var stars = cc.director.getScene().getComponentsInChildren(ItemStar_1.default);
        Effect.showMagnet();
        stars.forEach(function (v) {
            v.getOrAddComponent(FlyToMagnet_1.default);
        });
    };
    Effect.throw_snowballs = function () {
        var parent = Game_1.default.instance.node;
        // play throw animation 
        if (AIEnemy_1.default.allEnemies.length <= 0) {
            ToastManager_1.Toast.make("未发现敌人");
            return false;
        }
        for (var i = 0; i < AIEnemy_1.default.allEnemies.length; i++) {
            var e = AIEnemy_1.default.allEnemies[i];
            this.addTargetBall(e, parent);
        }
        return true;
    };
    Effect.addTargetBall = function (enemey, parent) {
        var pos = Role_1.default.self.node.position;
        cc.resources.load("Prefabs/effect/snowball", cc.Prefab, function (err, res) {
            var node = cc.instantiate(res);
            var skill = node.getComponent(SnowBall_1.default);
            skill.target = enemey.node;
            node.parent = parent;
            pos.addSelf(cc.v3(0, 80, 0));
            node.position = pos;
        });
    };
    return Effect;
}());
exports.default = Effect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcTGV2ZWxzXFxFZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBOEQ7QUFDOUQsZ0NBQTJCO0FBQzNCLHVEQUFvRDtBQUNwRCxzQ0FBaUM7QUFDakMsOENBQXlDO0FBQ3pDLDhDQUF5QztBQUN6QyxvREFBK0M7QUFDL0MsZ0NBQTJCO0FBQzNCLG1FQUEyRDtBQUczRDtJQUFBO0lBbURBLENBQUM7SUFsRFUsaUJBQVUsR0FBakIsVUFBa0IsS0FBVztRQUFYLHNCQUFBLEVBQUEsV0FBVztRQUN6QiwwQ0FBMEM7UUFDMUMsSUFBSSxHQUFHLEdBQUcscUJBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFDekQsR0FBRyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsR0FBRyxDQUFDLE1BQU0sR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN6QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixXQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7WUFDbkIscUJBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsOEJBQThCO1FBQzlCLEtBQUs7SUFDVCxDQUFDO0lBRU0sZ0JBQVMsR0FBaEI7UUFDSSxnQkFBZ0I7UUFDaEIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxrQkFBUSxDQUFDLENBQUE7UUFDcEUsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLHFCQUFXLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSxzQkFBZSxHQUF0QjtRQUNJLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ2hDLHdCQUF3QjtRQUN4QixJQUFJLGlCQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDaEMsb0JBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEIsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsaUJBQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hELElBQUksQ0FBQyxHQUFHLGlCQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVjLG9CQUFhLEdBQTVCLFVBQTZCLE1BQWUsRUFBRSxNQUFNO1FBQ2hELElBQUksR0FBRyxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7WUFDN0QsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQVksQ0FBQTtZQUN6QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQztZQUN4QyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQTtRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTCxhQUFDO0FBQUQsQ0FuREEsQUFtREMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb29sTWFuYWdlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2NvcmUvUG9vbE1hbmFnZXJcIjtcclxuaW1wb3J0IFJvbGUgZnJvbSBcIi4uL1JvbGVcIjtcclxuaW1wb3J0IHsgZXZ0IH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9jb3JlL2V2ZW50XCI7XHJcbmltcG9ydCBBSUVuZW15IGZyb20gXCIuLi9BSUVuZW15XCI7XHJcbmltcG9ydCBTbm93QmFsbCBmcm9tIFwiLi4vaXRlbXMvU25vd0JhbGxcIjtcclxuaW1wb3J0IEl0ZW1TdGFyIGZyb20gXCIuLi9pdGVtcy9JdGVtU3RhclwiO1xyXG5pbXBvcnQgRmx5VG9NYWduZXQgZnJvbSBcIi4uL2l0ZW1zL0ZseVRvTWFnbmV0XCI7XHJcbmltcG9ydCBHYW1lIGZyb20gXCIuLi9HYW1lXCI7XHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9Ub2FzdE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi93ZWFrX25ldF9nYW1lL1VzZXJJbmZvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZmZlY3Qge1xyXG4gICAgc3RhdGljIHNob3dNYWduZXQoZGVsYXkgPSAxLjApIHtcclxuICAgICAgICAvLyBhZGQgYSBtZWduZXQgb3ZlciB0aGUgaGVhZCBvZiB0aGUgZ2lybCBcclxuICAgICAgICBsZXQgbWFnID0gUG9vbE1hbmFnZXIuZ2V0KFwiUG9vbFwiKS5nZXQoXCJtYWduZXQtaW5kaWNhdG9yXCIpXHJcbiAgICAgICAgbWFnLnBvc2l0aW9uID0gY2MudjMoMCwgMjAwLCAwKTtcclxuICAgICAgICBtYWcucGFyZW50ID0gUm9sZS5zZWxmLm5vZGU7XHJcbiAgICAgICAgbGV0IGFuaW0gPSBtYWcuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICBhbmltLnBsYXkoKTtcclxuICAgICAgICBldnQuc2xlZXAoZGVsYXkpLnRoZW4odiA9PiB7XHJcbiAgICAgICAgICAgIFBvb2xNYW5hZ2VyLmdldChcIlBvb2xcIikucHV0KG1hZyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBhbmltLm9uKCdmaW5pc2hlZCcsICgpID0+IHtcclxuICAgICAgICAvLyB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkb19tYWduZXQoKSB7XHJcbiAgICAgICAgLy9maW5kIGFsbCBzdGFyc1xyXG4gICAgICAgIGxldCBzdGFycyA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oSXRlbVN0YXIpXHJcbiAgICAgICAgRWZmZWN0LnNob3dNYWduZXQoKTtcclxuICAgICAgICBzdGFycy5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICB2LmdldE9yQWRkQ29tcG9uZW50KEZseVRvTWFnbmV0KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0aHJvd19zbm93YmFsbHMoKSB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IEdhbWUuaW5zdGFuY2Uubm9kZTtcclxuICAgICAgICAvLyBwbGF5IHRocm93IGFuaW1hdGlvbiBcclxuICAgICAgICBpZiAoQUlFbmVteS5hbGxFbmVtaWVzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIFRvYXN0Lm1ha2UoXCLmnKrlj5HnjrDmlYzkurpcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgQUlFbmVteS5hbGxFbmVtaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBlID0gQUlFbmVteS5hbGxFbmVtaWVzW2ldO1xyXG4gICAgICAgICAgICB0aGlzLmFkZFRhcmdldEJhbGwoZSwgcGFyZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYWRkVGFyZ2V0QmFsbChlbmVtZXk6IEFJRW5lbXksIHBhcmVudCkge1xyXG4gICAgICAgIGxldCBwb3MgPSBSb2xlLnNlbGYubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcIlByZWZhYnMvZWZmZWN0L3Nub3diYWxsXCIsIGNjLlByZWZhYiwgKGVyciwgcmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocmVzKSBhcyBjYy5Ob2RlXHJcbiAgICAgICAgICAgIGxldCBza2lsbCA9IG5vZGUuZ2V0Q29tcG9uZW50KFNub3dCYWxsKTtcclxuICAgICAgICAgICAgc2tpbGwudGFyZ2V0ID0gZW5lbWV5Lm5vZGU7XHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgICAgICBwb3MuYWRkU2VsZihjYy52MygwLCA4MCwgMCkpXHJcbiAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSBwb3NcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufSJdfQ==