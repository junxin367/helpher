"use strict";
cc._RF.push(module, '5c88ahIRmdIHrRKH74EDr/t', 'umeng');
// framework/extension/aldsdk/umeng.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.umeng = void 0;
var umeng = /** @class */ (function () {
    function umeng() {
    }
    umeng.startLevel = function (level) {
        if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) {
            return jsb.reflection.callStaticMethod("Umeng", "startLevel:", level);
        }
        else if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) {
            return jsb.reflection.callStaticMethod('com/game/sdk/Umeng', 'startLevel', '(Ljava/lang/String;)V', level);
        }
    };
    umeng.finishLevel = function (level) {
        if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) {
            return jsb.reflection.callStaticMethod("Umeng", "finishLevel:", level);
        }
        else if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) {
            return jsb.reflection.callStaticMethod('com/game/sdk/Umeng', 'finishLevel', '(Ljava/lang/String;)V', level);
        }
    };
    umeng.failLevel = function (level) {
        if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) {
            return jsb.reflection.callStaticMethod("Umeng", "failLevel:", level);
        }
        else if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) {
            return jsb.reflection.callStaticMethod('com/game/sdk/Umeng', 'failLevel', '(Ljava/lang/String;)V', level);
        }
    };
    umeng.onEvent = function (eventName, status) {
        if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) {
            return jsb.reflection.callStaticMethod("Umeng", "onEvent:status:", eventName, status);
        }
        else if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) {
            return jsb.reflection.callStaticMethod('com/game/sdk/Umeng', 'onEvent', '(Ljava/lang/String;Ljava/lang/String;)V', eventName, status);
        }
    };
    return umeng;
}());
exports.umeng = umeng;

cc._RF.pop();