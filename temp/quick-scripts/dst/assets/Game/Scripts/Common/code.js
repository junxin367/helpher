
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Common/code.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c90c4SggIxEkY3ed9GUZWY/', 'code');
// Game/Scripts/Common/code.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Code = void 0;
var Code;
(function (Code) {
    Code[Code["Succ"] = 0] = "Succ";
    //已领取
    Code[Code["Claimed"] = 1] = "Claimed";
    Code[Code["NoRecord"] = 1001] = "NoRecord";
    Code[Code["ParamError"] = 1002] = "ParamError";
    Code[Code["DayInvite_Claim_EmptyIndex"] = 2000] = "DayInvite_Claim_EmptyIndex";
    Code[Code["DayInvite_Claim_IndexError"] = 2001] = "DayInvite_Claim_IndexError";
    Code[Code["DayInvite_Claim_Claimed"] = 2002] = "DayInvite_Claim_Claimed";
    Code[Code["DayInvite_Claim_ParamError"] = 2003] = "DayInvite_Claim_ParamError";
    Code[Code["SumInvite_Claim_Empty"] = 2004] = "SumInvite_Claim_Empty";
    Code[Code["SumInvite_Claim_Claimed"] = 2005] = "SumInvite_Claim_Claimed";
    Code[Code["FreeEnergy_NoEntry"] = 2100] = "FreeEnergy_NoEntry";
    Code[Code["FreeEnergy_Claimed"] = 2101] = "FreeEnergy_Claimed";
    Code[Code["Subscribe_ERROR"] = 2200] = "Subscribe_ERROR";
})(Code = exports.Code || (exports.Code = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcQ29tbW9uXFxjb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVksSUFzQlg7QUF0QkQsV0FBWSxJQUFJO0lBQ1osK0JBQVEsQ0FBQTtJQUNSLEtBQUs7SUFDTCxxQ0FBVyxDQUFBO0lBQ1gsMENBQWUsQ0FBQTtJQUVmLDhDQUFpQixDQUFBO0lBRWpCLDhFQUFpQyxDQUFBO0lBQ2pDLDhFQUFpQyxDQUFBO0lBRWpDLHdFQUE4QixDQUFBO0lBQzlCLDhFQUFpQyxDQUFBO0lBQ2pDLG9FQUE0QixDQUFBO0lBQzVCLHdFQUE4QixDQUFBO0lBRzlCLDhEQUF5QixDQUFBO0lBQ3pCLDhEQUF5QixDQUFBO0lBR3pCLHdEQUFzQixDQUFBO0FBQzFCLENBQUMsRUF0QlcsSUFBSSxHQUFKLFlBQUksS0FBSixZQUFJLFFBc0JmIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gQ29kZSB7XG4gICAgU3VjYyA9IDAsXG4gICAgLy/lt7Lpooblj5ZcbiAgICBDbGFpbWVkID0gMSxcbiAgICBOb1JlY29yZCA9IDEwMDEsXG5cbiAgICBQYXJhbUVycm9yID0gMTAwMixcblxuICAgIERheUludml0ZV9DbGFpbV9FbXB0eUluZGV4ID0gMjAwMCxcbiAgICBEYXlJbnZpdGVfQ2xhaW1fSW5kZXhFcnJvciA9IDIwMDEsXG5cbiAgICBEYXlJbnZpdGVfQ2xhaW1fQ2xhaW1lZCA9IDIwMDIsLy/lt7Lpooblj5blroxcbiAgICBEYXlJbnZpdGVfQ2xhaW1fUGFyYW1FcnJvciA9IDIwMDMsIC8v5Y+C5pWw6ZSZ6K+vXG4gICAgU3VtSW52aXRlX0NsYWltX0VtcHR5ID0gMjAwNCwvL+ayoeaciemCgOivt+aVsOaNrlxuICAgIFN1bUludml0ZV9DbGFpbV9DbGFpbWVkID0gMjAwNSwvL+W3sumihuWPluWujFxuXG5cbiAgICBGcmVlRW5lcmd5X05vRW50cnkgPSAyMTAwLCAvL+ayoeacieiusOW9lVxuICAgIEZyZWVFbmVyZ3lfQ2xhaW1lZCA9IDIxMDEsLy/lt7Lpooblj5ZcblxuXG4gICAgU3Vic2NyaWJlX0VSUk9SID0gMjIwMCwvLy8g6K6i6ZiFXG59Il19