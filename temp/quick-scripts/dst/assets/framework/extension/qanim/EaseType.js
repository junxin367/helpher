
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/qanim/EaseType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92165U/0DtL2ISOJsM2RL4i', 'EaseType');
// framework/extension/qanim/EaseType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EaseType = void 0;
var EaseType;
(function (EaseType) {
    EaseType[EaseType["constant"] = 0] = "constant";
    EaseType[EaseType["linear"] = 1] = "linear";
    EaseType[EaseType["quadIn"] = 2] = "quadIn";
    EaseType[EaseType["quadOut"] = 3] = "quadOut";
    EaseType[EaseType["quadInOut"] = 4] = "quadInOut";
    EaseType[EaseType["cubicIn"] = 5] = "cubicIn";
    EaseType[EaseType["cubicOut"] = 6] = "cubicOut";
    EaseType[EaseType["cubicInOut"] = 7] = "cubicInOut";
    EaseType[EaseType["quartIn"] = 8] = "quartIn";
    EaseType[EaseType["quartOut"] = 9] = "quartOut";
    EaseType[EaseType["quartInOut"] = 10] = "quartInOut";
    EaseType[EaseType["quintIn"] = 11] = "quintIn";
    EaseType[EaseType["quintOut"] = 12] = "quintOut";
    EaseType[EaseType["quintInOut"] = 13] = "quintInOut";
    EaseType[EaseType["sineIn"] = 14] = "sineIn";
    EaseType[EaseType["sineOut"] = 15] = "sineOut";
    EaseType[EaseType["sineInOut"] = 16] = "sineInOut";
    EaseType[EaseType["expoIn"] = 17] = "expoIn";
    EaseType[EaseType["expoOut"] = 18] = "expoOut";
    EaseType[EaseType["expoInOut"] = 19] = "expoInOut";
    EaseType[EaseType["circIn"] = 20] = "circIn";
    EaseType[EaseType["circOut"] = 21] = "circOut";
    EaseType[EaseType["circInOut"] = 22] = "circInOut";
    EaseType[EaseType["elasticIn"] = 23] = "elasticIn";
    EaseType[EaseType["elasticOut"] = 24] = "elasticOut";
    EaseType[EaseType["elasticInOut"] = 25] = "elasticInOut";
    EaseType[EaseType["backIn"] = 26] = "backIn";
    EaseType[EaseType["backOut"] = 27] = "backOut";
    EaseType[EaseType["backInOut"] = 28] = "backInOut";
    EaseType[EaseType["bounceIn"] = 29] = "bounceIn";
    EaseType[EaseType["bounceOut"] = 30] = "bounceOut";
    EaseType[EaseType["bounceInOut"] = 31] = "bounceInOut";
    EaseType[EaseType["smooth"] = 32] = "smooth";
    EaseType[EaseType["fade"] = 33] = "fade";
    EaseType[EaseType["quadOutIn"] = 34] = "quadOutIn";
    EaseType[EaseType["cubicOutIn"] = 35] = "cubicOutIn";
    EaseType[EaseType["quartOutIn"] = 36] = "quartOutIn";
    EaseType[EaseType["quintOutIn"] = 37] = "quintOutIn";
    EaseType[EaseType["sineOutIn"] = 38] = "sineOutIn";
    EaseType[EaseType["expoOutIn"] = 39] = "expoOutIn";
    EaseType[EaseType["circOutIn"] = 40] = "circOutIn";
    EaseType[EaseType["backOutIn"] = 41] = "backOutIn";
    EaseType[EaseType["bounceOutIn"] = 42] = "bounceOutIn";
})(EaseType = exports.EaseType || (exports.EaseType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHFhbmltXFxFYXNlVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFZLFFBNENYO0FBNUNELFdBQVksUUFBUTtJQUNoQiwrQ0FBUSxDQUFBO0lBQ1IsMkNBQU0sQ0FBQTtJQUNOLDJDQUFNLENBQUE7SUFDTiw2Q0FBTyxDQUFBO0lBQ1AsaURBQVMsQ0FBQTtJQUNULDZDQUFPLENBQUE7SUFDUCwrQ0FBUSxDQUFBO0lBQ1IsbURBQVUsQ0FBQTtJQUNWLDZDQUFPLENBQUE7SUFDUCwrQ0FBUSxDQUFBO0lBQ1Isb0RBQVUsQ0FBQTtJQUNWLDhDQUFPLENBQUE7SUFDUCxnREFBUSxDQUFBO0lBQ1Isb0RBQVUsQ0FBQTtJQUNWLDRDQUFNLENBQUE7SUFDTiw4Q0FBTyxDQUFBO0lBQ1Asa0RBQVMsQ0FBQTtJQUNULDRDQUFNLENBQUE7SUFDTiw4Q0FBTyxDQUFBO0lBQ1Asa0RBQVMsQ0FBQTtJQUNULDRDQUFNLENBQUE7SUFDTiw4Q0FBTyxDQUFBO0lBQ1Asa0RBQVMsQ0FBQTtJQUNULGtEQUFTLENBQUE7SUFDVCxvREFBVSxDQUFBO0lBQ1Ysd0RBQVksQ0FBQTtJQUNaLDRDQUFNLENBQUE7SUFDTiw4Q0FBTyxDQUFBO0lBQ1Asa0RBQVMsQ0FBQTtJQUNULGdEQUFRLENBQUE7SUFDUixrREFBUyxDQUFBO0lBQ1Qsc0RBQVcsQ0FBQTtJQUNYLDRDQUFNLENBQUE7SUFDTix3Q0FBSSxDQUFBO0lBQ0osa0RBQVMsQ0FBQTtJQUNULG9EQUFVLENBQUE7SUFDVixvREFBVSxDQUFBO0lBQ1Ysb0RBQVUsQ0FBQTtJQUNWLGtEQUFTLENBQUE7SUFDVCxrREFBUyxDQUFBO0lBQ1Qsa0RBQVMsQ0FBQTtJQUNULGtEQUFTLENBQUE7SUFDVCxzREFBVyxDQUFBO0FBQ2YsQ0FBQyxFQTVDVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQTRDbkIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGVudW0gRWFzZVR5cGUge1xyXG4gICAgY29uc3RhbnQsXHJcbiAgICBsaW5lYXIsXHJcbiAgICBxdWFkSW4sXHJcbiAgICBxdWFkT3V0LFxyXG4gICAgcXVhZEluT3V0LFxyXG4gICAgY3ViaWNJbixcclxuICAgIGN1YmljT3V0LFxyXG4gICAgY3ViaWNJbk91dCxcclxuICAgIHF1YXJ0SW4sXHJcbiAgICBxdWFydE91dCxcclxuICAgIHF1YXJ0SW5PdXQsXHJcbiAgICBxdWludEluLFxyXG4gICAgcXVpbnRPdXQsXHJcbiAgICBxdWludEluT3V0LFxyXG4gICAgc2luZUluLFxyXG4gICAgc2luZU91dCxcclxuICAgIHNpbmVJbk91dCxcclxuICAgIGV4cG9JbixcclxuICAgIGV4cG9PdXQsXHJcbiAgICBleHBvSW5PdXQsXHJcbiAgICBjaXJjSW4sXHJcbiAgICBjaXJjT3V0LFxyXG4gICAgY2lyY0luT3V0LFxyXG4gICAgZWxhc3RpY0luLFxyXG4gICAgZWxhc3RpY091dCxcclxuICAgIGVsYXN0aWNJbk91dCxcclxuICAgIGJhY2tJbixcclxuICAgIGJhY2tPdXQsXHJcbiAgICBiYWNrSW5PdXQsXHJcbiAgICBib3VuY2VJbixcclxuICAgIGJvdW5jZU91dCxcclxuICAgIGJvdW5jZUluT3V0LFxyXG4gICAgc21vb3RoLFxyXG4gICAgZmFkZSxcclxuICAgIHF1YWRPdXRJbixcclxuICAgIGN1YmljT3V0SW4sXHJcbiAgICBxdWFydE91dEluLFxyXG4gICAgcXVpbnRPdXRJbixcclxuICAgIHNpbmVPdXRJbixcclxuICAgIGV4cG9PdXRJbixcclxuICAgIGNpcmNPdXRJbixcclxuICAgIGJhY2tPdXRJbixcclxuICAgIGJvdW5jZU91dEluXHJcbn0iXX0=