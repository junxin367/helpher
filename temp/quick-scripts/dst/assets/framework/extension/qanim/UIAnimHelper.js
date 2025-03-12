
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/qanim/UIAnimHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8cfe68IQLBKK52W7zCfw20R', 'UIAnimHelper');
// framework/extension/qanim/UIAnimHelper.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIAnimType = void 0;
var ScaleAnim_1 = require("./ScaleAnim");
var EaseType_1 = require("./EaseType");
var UIAnimType;
(function (UIAnimType) {
    UIAnimType[UIAnimType["Position"] = 0] = "Position";
    UIAnimType[UIAnimType["Fade"] = 1] = "Fade";
    UIAnimType[UIAnimType["ScaleIn"] = 2] = "ScaleIn";
    UIAnimType[UIAnimType["ScaleOut"] = 3] = "ScaleOut";
})(UIAnimType = exports.UIAnimType || (exports.UIAnimType = {}));
var UIAnimHelper = /** @class */ (function () {
    function UIAnimHelper() {
    }
    UIAnimHelper.play = function (node, type, duration, delay) {
        if (type == UIAnimType.ScaleIn) {
            node.scale = 0;
            var comp = node.getComponent(ScaleAnim_1.default);
            if (comp == null) {
                comp = node.addComponent(ScaleAnim_1.default);
            }
            comp.pasr.p = delay;
            comp.pasr.a = duration;
            comp.pasr.s = 0;
            comp.from = cc.Vec3.ZERO;
            comp.to = cc.Vec3.ONE;
            comp.enabled = true;
            return comp;
        }
        else if (type == UIAnimType.ScaleOut) {
            node.scale = 1;
            var comp = node.getComponent(ScaleAnim_1.default);
            if (comp == null) {
                comp = node.addComponent(ScaleAnim_1.default);
            }
            comp.pasr.p = delay;
            comp.pasr.a = duration;
            comp.pasr.s = 0;
            comp.pasr.r = 0;
            comp.from = cc.Vec3.ONE;
            comp.to = cc.Vec3.ZERO;
            comp.enabled = true;
            return comp;
        }
    };
    UIAnimHelper.fadeIn = function (node) {
        node.children.forEach(function (v, i) {
            UIAnimHelper.play(v, UIAnimType.ScaleIn, 0.2, i * 0.06).easeType = EaseType_1.EaseType.backOut;
        });
    };
    UIAnimHelper.fadeOut = function (node) {
        var len = node.children.length;
        node.children.forEach(function (v, i) {
            UIAnimHelper.play(v, UIAnimType.ScaleOut, 0.2, (len - i) * 0.06).easeType = EaseType_1.EaseType.backIn;
        });
        return event.sleep(len * 0.06 + 0.2);
    };
    return UIAnimHelper;
}());
exports.default = UIAnimHelper;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHFhbmltXFxVSUFuaW1IZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBQ3BDLHVDQUFzQztBQUd0QyxJQUFZLFVBS1g7QUFMRCxXQUFZLFVBQVU7SUFDbEIsbURBQVEsQ0FBQTtJQUNSLDJDQUFJLENBQUE7SUFDSixpREFBTyxDQUFBO0lBQ1AsbURBQVEsQ0FBQTtBQUNaLENBQUMsRUFMVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUtyQjtBQUVEO0lBQUE7SUE4Q0EsQ0FBQztJQTdDaUIsaUJBQUksR0FBbEIsVUFBbUIsSUFBYSxFQUFFLElBQWdCLEVBQUUsUUFBZ0IsRUFBRSxLQUFhO1FBQy9FLElBQUksSUFBSSxJQUFJLFVBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFTLENBQUMsQ0FBQTtZQUN2QyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7Z0JBQ2QsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxDQUFDO2FBQ3ZDO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQztZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7YUFDSSxJQUFJLElBQUksSUFBSSxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUE7WUFDdkMsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUNkLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFTLENBQUMsQ0FBQzthQUN2QztZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUM7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7WUFDbkIsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUM7SUFFYSxtQkFBTSxHQUFwQixVQUFxQixJQUFhO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDdkIsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLFFBQVEsR0FBRyxtQkFBUSxDQUFDLE9BQU8sQ0FBQTtRQUN2RixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFYSxvQkFBTyxHQUFyQixVQUFzQixJQUFhO1FBQy9CLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDdkIsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsUUFBUSxHQUFHLG1CQUFRLENBQUMsTUFBTSxDQUFBO1FBQy9GLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0E5Q0EsQUE4Q0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTY2FsZUFuaW0gZnJvbSBcIi4vU2NhbGVBbmltXCI7XHJcbmltcG9ydCB7IEVhc2VUeXBlIH0gZnJvbSBcIi4vRWFzZVR5cGVcIjtcclxuaW1wb3J0IHsgZXZ0IH0gZnJvbSBcIi4uLy4uL2NvcmUvZXZlbnRcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFVJQW5pbVR5cGUge1xyXG4gICAgUG9zaXRpb24sXHJcbiAgICBGYWRlLFxyXG4gICAgU2NhbGVJbixcclxuICAgIFNjYWxlT3V0LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUFuaW1IZWxwZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBwbGF5KG5vZGU6IGNjLk5vZGUsIHR5cGU6IFVJQW5pbVR5cGUsIGR1cmF0aW9uOiBudW1iZXIsIGRlbGF5OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodHlwZSA9PSBVSUFuaW1UeXBlLlNjYWxlSW4pIHtcclxuICAgICAgICAgICAgbm9kZS5zY2FsZSA9IDA7XHJcbiAgICAgICAgICAgIHZhciBjb21wID0gbm9kZS5nZXRDb21wb25lbnQoU2NhbGVBbmltKVxyXG4gICAgICAgICAgICBpZiAoY29tcCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wID0gbm9kZS5hZGRDb21wb25lbnQoU2NhbGVBbmltKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb21wLnBhc3IucCA9IGRlbGF5O1xyXG4gICAgICAgICAgICBjb21wLnBhc3IuYSA9IGR1cmF0aW9uO1xyXG4gICAgICAgICAgICBjb21wLnBhc3IucyA9IDA7XHJcbiAgICAgICAgICAgIGNvbXAuZnJvbSA9IGNjLlZlYzMuWkVSTztcclxuICAgICAgICAgICAgY29tcC50byA9IGNjLlZlYzMuT05FO1xyXG4gICAgICAgICAgICBjb21wLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIHJldHVybiBjb21wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlID09IFVJQW5pbVR5cGUuU2NhbGVPdXQpIHtcclxuICAgICAgICAgICAgbm9kZS5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIHZhciBjb21wID0gbm9kZS5nZXRDb21wb25lbnQoU2NhbGVBbmltKVxyXG4gICAgICAgICAgICBpZiAoY29tcCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wID0gbm9kZS5hZGRDb21wb25lbnQoU2NhbGVBbmltKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb21wLnBhc3IucCA9IGRlbGF5O1xyXG4gICAgICAgICAgICBjb21wLnBhc3IuYSA9IGR1cmF0aW9uO1xyXG4gICAgICAgICAgICBjb21wLnBhc3IucyA9IDA7XHJcbiAgICAgICAgICAgIGNvbXAucGFzci5yID0gMDtcclxuICAgICAgICAgICAgY29tcC5mcm9tID0gY2MuVmVjMy5PTkU7XHJcbiAgICAgICAgICAgIGNvbXAudG8gPSBjYy5WZWMzLlpFUk87XHJcbiAgICAgICAgICAgIGNvbXAuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgcmV0dXJuIGNvbXA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZmFkZUluKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgVUlBbmltSGVscGVyLnBsYXkodiwgVUlBbmltVHlwZS5TY2FsZUluLCAwLjIsIGkgKiAwLjA2KS5lYXNlVHlwZSA9IEVhc2VUeXBlLmJhY2tPdXRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZmFkZU91dChub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IGxlbiA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgodiwgaSkgPT4ge1xyXG4gICAgICAgICAgICBVSUFuaW1IZWxwZXIucGxheSh2LCBVSUFuaW1UeXBlLlNjYWxlT3V0LCAwLjIsIChsZW4gLSBpKSAqIDAuMDYpLmVhc2VUeXBlID0gRWFzZVR5cGUuYmFja0luXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gZXZlbnQuc2xlZXAobGVuICogMC4wNiArIDAuMilcclxuICAgIH1cclxufSJdfQ==