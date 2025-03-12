"use strict";
cc._RF.push(module, '6c55d3/OGBIep18yzuO93C7', 'actionUtil');
// framework/utils/actionUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actionUtil = /** @class */ (function () {
    function actionUtil() {
    }
    //电子邮件puhalskijsemen@gmail.com
    //源码网站 开vpn全局模式打开 http://web3incubators.com/
    //电报https://t.me/gamecode999
    //网页客服 http://web3incubators.com/kefu.html
    //弹性效果 果冻效果 
    actionUtil.jellyJump = function (node) {
        var spawn_action1 = cc.scaleTo(0.06, 1.6, 0.8);
        // let  spawn_action2 = this.generate_action({time : 0.12, scale_x : 1.3, scale_y  :1.3, scale_z :1})
        var spawn_action3 = cc.scaleTo(0.07, 1, 1.2);
        // let  spawn_action4 = this.generate_action({time : 0.07, scale_x : 1.3, scale_y  :1.3, scale_z: 1})
        // let  spawn_action5 = this.generate_action({time : 0.07, scale_x : 1.2, scale_y : 1.2, scale_z : 1})
        var spawn_action5 = cc.scaleTo(0.1, 1).easing(cc.easeElasticOut(0.3));
        var seq_actions = cc.sequence(spawn_action1, 
        //  spawn_action2,
        spawn_action3, 
        // spawn_action4,
        spawn_action5);
        node.runAction(seq_actions);
    };
    actionUtil.jellyJump2 = function (node, from, scale, duration) {
        if (from === void 0) { from = 0.9; }
        if (scale === void 0) { scale = 1.0; }
        if (duration === void 0) { duration = 0.8; }
        node.scale = from;
        var act = cc.scaleTo(duration, scale, scale).easing(cc.easeElasticOut(0.3));
        node.runAction(act);
    };
    actionUtil.moveToCenter = function (node) {
        if (node.parent) {
            var rect = node.parent.getBoundingBox();
            node.position = cc.v2(rect.width / 2, rect.height / 2);
        }
    };
    /** move and form as a circle ,then bezier move to target */
    actionUtil.flyNode = function (resNode, parentNode, targetpos, degree, len, flybeziercp, endCallback, speed1, speed2) {
        if (flybeziercp === void 0) { flybeziercp = cc.v2(0, 1); }
        if (endCallback === void 0) { endCallback = null; }
        if (speed1 === void 0) { speed1 = 600; }
        if (speed2 === void 0) { speed2 = 700; }
        var tar = cc.Vec2.RIGHT.rotate(cc.macro.RAD * degree);
        tar.mulSelf(len);
        var dur = len / speed1;
        var move = cc.moveBy(dur, tar).easing(cc.easeSineOut());
        var seq = cc.sequence(move, cc.callFunc(function (_) {
            var wpos = resNode.getBoundingBoxToWorld().center;
            var mag = targetpos.sub(wpos).mag();
            var d2 = mag / speed2;
            actionUtil.moveBezier2(resNode, wpos, targetpos, flybeziercp, function (node) {
                node.destroy();
                endCallback && endCallback();
            }, d2);
        }));
        resNode.parent = parentNode;
        resNode.runAction(seq);
    };
    actionUtil.moveBezier2 = function (node, from, to, cp, callback, dur, delay) {
        if (cp === void 0) { cp = cc.Vec2.RIGHT; }
        if (callback === void 0) { callback = null; }
        if (dur === void 0) { dur = 1; }
        if (delay === void 0) { delay = 0; }
        var bezier = [];
        var x = from.x, y = from.y;
        var ex = to.x, ey = to.y;
        bezier[0] = cc.v2(x, y);
        bezier[1] = cc.v2(x + (ex - x) * cp.x, y + (ey - y) * cp.y);
        bezier[2] = cc.v2(ex, ey);
        node.runAction(cc.sequence(cc.delayTime(delay), cc.bezierTo(dur, bezier).easing(cc.easeSineInOut()), cc.fadeOut(0.3), cc.callFunc(callback && callback.bind(node))));
    };
    actionUtil.moveBezier = function (prefab, from, to, callback, dur, delay) {
        if (callback === void 0) { callback = null; }
        if (dur === void 0) { dur = 1; }
        if (delay === void 0) { delay = 0; }
        var sprite = cc.instantiate(prefab);
        sprite.opacity = 255;
        sprite.setPosition(from);
        this.moveBezier2(sprite, from, to, cc.Vec2.RIGHT, callback, dur, delay);
        return sprite;
    };
    return actionUtil;
}());
exports.default = actionUtil;

cc._RF.pop();