"use strict";
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