
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/aldsdk/umeng.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXGFsZHNka1xcdW1lbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7SUFBQTtJQWlDQSxDQUFDO0lBL0JVLGdCQUFVLEdBQWpCLFVBQWtCLEtBQWE7UUFDM0IsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUMvQyxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN6RTthQUFNLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUU7WUFDMUQsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM5RztJQUNMLENBQUM7SUFFTSxpQkFBVyxHQUFsQixVQUFtQixLQUFhO1FBQzVCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDL0MsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDMUU7YUFBTSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO1lBQzFELE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDL0c7SUFDTCxDQUFDO0lBRU0sZUFBUyxHQUFoQixVQUFpQixLQUFhO1FBQzFCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDL0MsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDeEU7YUFBTSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO1lBQzFELE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsRUFBRSxXQUFXLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDN0c7SUFDTCxDQUFDO0lBRU0sYUFBTyxHQUFkLFVBQWUsU0FBaUIsRUFBRSxNQUFjO1FBQzVDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDL0MsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDekY7YUFBTSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO1lBQzFELE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsRUFBRSxTQUFTLEVBQUUseUNBQXlDLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3pJO0lBQ0wsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQWpDQSxBQWlDQyxJQUFBO0FBakNZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjbGFzcyB1bWVuZyB7XHJcblxyXG4gICAgc3RhdGljIHN0YXJ0TGV2ZWwobGV2ZWw6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJVbWVuZ1wiLCBcInN0YXJ0TGV2ZWw6XCIsIGxldmVsKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoJ2NvbS9nYW1lL3Nkay9VbWVuZycsICdzdGFydExldmVsJywgJyhMamF2YS9sYW5nL1N0cmluZzspVicsIGxldmVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZpbmlzaExldmVsKGxldmVsOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiVW1lbmdcIiwgXCJmaW5pc2hMZXZlbDpcIiwgbGV2ZWwpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCkge1xyXG4gICAgICAgICAgICByZXR1cm4ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCgnY29tL2dhbWUvc2RrL1VtZW5nJywgJ2ZpbmlzaExldmVsJywgJyhMamF2YS9sYW5nL1N0cmluZzspVicsIGxldmVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZhaWxMZXZlbChsZXZlbDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUykge1xyXG4gICAgICAgICAgICByZXR1cm4ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIlVtZW5nXCIsIFwiZmFpbExldmVsOlwiLCBsZXZlbCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKCdjb20vZ2FtZS9zZGsvVW1lbmcnLCAnZmFpbExldmVsJywgJyhMamF2YS9sYW5nL1N0cmluZzspVicsIGxldmVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG9uRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIHN0YXR1czogU3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUykge1xyXG4gICAgICAgICAgICByZXR1cm4ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIlVtZW5nXCIsIFwib25FdmVudDpzdGF0dXM6XCIsIGV2ZW50TmFtZSwgc3RhdHVzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoJ2NvbS9nYW1lL3Nkay9VbWVuZycsICdvbkV2ZW50JywgJyhMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZzspVicsIGV2ZW50TmFtZSwgc3RhdHVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=