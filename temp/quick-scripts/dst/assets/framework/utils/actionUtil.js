
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/utils/actionUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx1dGlsc1xcYWN0aW9uVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0lBQUE7SUEwRUEsQ0FBQztJQXhFRCw4QkFBOEI7SUFDOUIsNENBQTRDO0lBQzVDLDRCQUE0QjtJQUM1QiwwQ0FBMEM7SUFDdEMsWUFBWTtJQUNMLG9CQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFDakIsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQzlDLHFHQUFxRztRQUNyRyxJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDNUMscUdBQXFHO1FBQ3JHLHNHQUFzRztRQUN0RyxJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYTtRQUN2QyxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixhQUFhLENBQ2hCLENBQUE7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTSxxQkFBVSxHQUFqQixVQUFrQixJQUFJLEVBQUUsSUFBVSxFQUFFLEtBQVcsRUFBRSxRQUFjO1FBQXZDLHFCQUFBLEVBQUEsVUFBVTtRQUFFLHNCQUFBLEVBQUEsV0FBVztRQUFFLHlCQUFBLEVBQUEsY0FBYztRQUMzRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUs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O1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4RSxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUwsaUJBQUM7QUFBRCxDQTFFQSxBQTBFQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGFjdGlvblV0aWwge1xyXG5cclxuLy/nlLXlrZDpgq7ku7ZwdWhhbHNraWpzZW1lbkBnbWFpbC5jb21cclxuLy/mupDnoIHnvZHnq5kg5byAdnBu5YWo5bGA5qih5byP5omT5byAIGh0dHA6Ly93ZWIzaW5jdWJhdG9ycy5jb20vXHJcbi8v55S15oqlaHR0cHM6Ly90Lm1lL2dhbWVjb2RlOTk5XHJcbi8v572R6aG15a6i5pyNIGh0dHA6Ly93ZWIzaW5jdWJhdG9ycy5jb20va2VmdS5odG1sXHJcbiAgICAvL+W8ueaAp+aViOaenCDmnpzlhrvmlYjmnpwgXHJcbiAgICBzdGF0aWMgamVsbHlKdW1wKG5vZGUpIHtcclxuICAgICAgICBsZXQgc3Bhd25fYWN0aW9uMSA9IGNjLnNjYWxlVG8oMC4wNiwgMS42LCAwLjgpXHJcbiAgICAgICAgLy8gbGV0ICBzcGF3bl9hY3Rpb24yID0gdGhpcy5nZW5lcmF0ZV9hY3Rpb24oe3RpbWUgOiAwLjEyLCBzY2FsZV94IDogMS4zLCBzY2FsZV95ICA6MS4zLCBzY2FsZV96IDoxfSlcclxuICAgICAgICBsZXQgc3Bhd25fYWN0aW9uMyA9IGNjLnNjYWxlVG8oMC4wNywgMSwgMS4yKVxyXG4gICAgICAgIC8vIGxldCAgc3Bhd25fYWN0aW9uNCA9IHRoaXMuZ2VuZXJhdGVfYWN0aW9uKHt0aW1lIDogMC4wNywgc2NhbGVfeCA6IDEuMywgc2NhbGVfeSAgOjEuMywgc2NhbGVfejogMX0pXHJcbiAgICAgICAgLy8gbGV0ICBzcGF3bl9hY3Rpb241ID0gdGhpcy5nZW5lcmF0ZV9hY3Rpb24oe3RpbWUgOiAwLjA3LCBzY2FsZV94IDogMS4yLCBzY2FsZV95IDogMS4yLCBzY2FsZV96IDogMX0pXHJcbiAgICAgICAgbGV0IHNwYXduX2FjdGlvbjUgPSBjYy5zY2FsZVRvKDAuMSwgMSkuZWFzaW5nKGNjLmVhc2VFbGFzdGljT3V0KDAuMykpO1xyXG4gICAgICAgIGxldCBzZXFfYWN0aW9ucyA9IGNjLnNlcXVlbmNlKHNwYXduX2FjdGlvbjEsXHJcbiAgICAgICAgICAgIC8vICBzcGF3bl9hY3Rpb24yLFxyXG4gICAgICAgICAgICBzcGF3bl9hY3Rpb24zLFxyXG4gICAgICAgICAgICAvLyBzcGF3bl9hY3Rpb240LFxyXG4gICAgICAgICAgICBzcGF3bl9hY3Rpb241XHJcbiAgICAgICAgKVxyXG4gICAgICAgIG5vZGUucnVuQWN0aW9uKHNlcV9hY3Rpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgamVsbHlKdW1wMihub2RlLCBmcm9tID0gMC45LCBzY2FsZSA9IDEuMCwgZHVyYXRpb24gPSAwLjgpIHtcclxuICAgICAgICBub2RlLnNjYWxlID0gZnJvbTtcclxuICAgICAgICBsZXQgYWN0ID0gY2Muc2NhbGVUbyhkdXJhdGlvbiwgc2NhbGUsIHNjYWxlKS5lYXNpbmcoY2MuZWFzZUVsYXN0aWNPdXQoMC4zKSk7XHJcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oYWN0KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtb3ZlVG9DZW50ZXIobm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGlmIChub2RlLnBhcmVudCkge1xyXG4gICAgICAgICAgICBsZXQgcmVjdCA9IG5vZGUucGFyZW50LmdldEJvdW5kaW5nQm94KClcclxuICAgICAgICAgICAgbm9kZS5wb3NpdGlvbiA9IGNjLnYyKHJlY3Qud2lkdGggLyAyLCByZWN0LmhlaWdodCAvIDIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBtb3ZlIGFuZCBmb3JtIGFzIGEgY2lyY2xlICx0aGVuIGJlemllciBtb3ZlIHRvIHRhcmdldCAqL1xyXG4gICAgc3RhdGljIGZseU5vZGUocmVzTm9kZSwgcGFyZW50Tm9kZSwgdGFyZ2V0cG9zLCBkZWdyZWUsIGxlbiwgZmx5YmV6aWVyY3AgPSBjYy52MigwLCAxKSwgZW5kQ2FsbGJhY2sgPSBudWxsLCBzcGVlZDEgPSA2MDAsIHNwZWVkMiA9IDcwMCkge1xyXG4gICAgICAgIGxldCB0YXIgPSBjYy5WZWMyLlJJR0hULnJvdGF0ZShjYy5tYWNyby5SQUQgKiBkZWdyZWUpXHJcbiAgICAgICAgdGFyLm11bFNlbGYobGVuKVxyXG4gICAgICAgIGxldCBkdXIgPSBsZW4gLyBzcGVlZDE7XHJcbiAgICAgICAgbGV0IG1vdmUgPSBjYy5tb3ZlQnkoZHVyLCB0YXIpLmVhc2luZyhjYy5lYXNlU2luZU91dCgpKVxyXG4gICAgICAgIGxldCBzZXEgPSBjYy5zZXF1ZW5jZShtb3ZlLCBjYy5jYWxsRnVuYyhfID0+IHtcclxuICAgICAgICAgICAgbGV0IHdwb3MgPSByZXNOb2RlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNlbnRlcjtcclxuICAgICAgICAgICAgbGV0IG1hZyA9IHRhcmdldHBvcy5zdWIod3BvcykubWFnKCk7XHJcbiAgICAgICAgICAgIGxldCBkMiA9IG1hZyAvIHNwZWVkMjtcclxuICAgICAgICAgICAgYWN0aW9uVXRpbC5tb3ZlQmV6aWVyMihyZXNOb2RlLCB3cG9zLCB0YXJnZXRwb3MsIGZseWJlemllcmNwLCAobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgIGVuZENhbGxiYWNrICYmIGVuZENhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0sIGQyKVxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIHJlc05vZGUucGFyZW50ID0gcGFyZW50Tm9kZTtcclxuICAgICAgICByZXNOb2RlLnJ1bkFjdGlvbihzZXEpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBtb3ZlQmV6aWVyMihub2RlLCBmcm9tLCB0bywgY3AgPSBjYy5WZWMyLlJJR0hULCBjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsLCBkdXIgPSAxLCBkZWxheSA9IDApIHtcclxuICAgICAgICBsZXQgYmV6aWVyID0gW11cclxuICAgICAgICBsZXQgeCA9IGZyb20ueCwgeSA9IGZyb20ueVxyXG4gICAgICAgIGxldCBleCA9IHRvLngsIGV5ID0gdG8ueTtcclxuICAgICAgICBiZXppZXJbMF0gPSBjYy52Mih4LCB5KVxyXG4gICAgICAgIGJlemllclsxXSA9IGNjLnYyKHggKyAoZXggLSB4KSAqIGNwLngsIHkgKyAoZXkgLSB5KSAqIGNwLnkpO1xyXG4gICAgICAgIGJlemllclsyXSA9IGNjLnYyKGV4LCBleSlcclxuICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoZGVsYXkpLCBjYy5iZXppZXJUbyhkdXIsIGJlemllcikuZWFzaW5nKGNjLmVhc2VTaW5lSW5PdXQoKSksIGNjLmZhZGVPdXQoMC4zKSwgY2MuY2FsbEZ1bmMoY2FsbGJhY2sgJiYgY2FsbGJhY2suYmluZChub2RlKSkpKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtb3ZlQmV6aWVyKHByZWZhYiwgZnJvbSwgdG8sIGNhbGxiYWNrID0gbnVsbCwgZHVyID0gMSwgZGVsYXkgPSAwKTogY2MuTm9kZSB7XHJcbiAgICAgICAgbGV0IHNwcml0ZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYilcclxuICAgICAgICBzcHJpdGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICBzcHJpdGUuc2V0UG9zaXRpb24oZnJvbSlcclxuICAgICAgICB0aGlzLm1vdmVCZXppZXIyKHNwcml0ZSwgZnJvbSwgdG8sIGNjLlZlYzIuUklHSFQsIGNhbGxiYWNrLCBkdXIsIGRlbGF5KTtcclxuICAgICAgICByZXR1cm4gc3ByaXRlO1xyXG4gICAgfVxyXG5cclxufSJdfQ==