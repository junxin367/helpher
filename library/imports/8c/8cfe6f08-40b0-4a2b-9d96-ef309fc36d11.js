"use strict";
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