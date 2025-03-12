
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Common/LevelInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bc98dB2EZJKyKRZHoS2DtzF', 'LevelInfo');
// Game/Scripts/Common/LevelInfo.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelInfo = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelInfo = /** @class */ (function () {
    function LevelInfo(id) {
        this.id = 0;
        this.chapter = 0;
        this.isNew = false;
        var data = csv.level.get(id);
        if (!data)
            return;
        this.id = data.id;
        this.chapter = data.chapter;
        this.isNew = data.isNew == 1 ? true : false;
    }
    LevelInfo = __decorate([
        ccclass
    ], LevelInfo);
    return LevelInfo;
}());
exports.LevelInfo = LevelInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcQ29tbW9uXFxMZXZlbEluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUM7SUFJSSxtQkFBWSxFQUFFO1FBSGQsT0FBRSxHQUFVLENBQUMsQ0FBQztRQUNkLFlBQU8sR0FBVSxDQUFDLENBQUM7UUFDbkIsVUFBSyxHQUFXLEtBQUssQ0FBQztRQUVsQixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixJQUFHLENBQUMsSUFBSTtZQUFDLE9BQU87UUFDaEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFBLENBQUMsQ0FBQSxJQUFJLENBQUEsQ0FBQyxDQUFBLEtBQUssQ0FBQztJQUM1QyxDQUFDO0lBVlMsU0FBUztRQUR0QixPQUFPO09BQ00sU0FBUyxDQVl0QjtJQUFELGdCQUFDO0NBWkQsQUFZQyxJQUFBO0FBWmEsOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgIGNsYXNzIExldmVsSW5mbyAge1xuICAgIGlkOm51bWJlciA9IDA7XG4gICAgY2hhcHRlcjpudW1iZXIgPSAwO1xuICAgIGlzTmV3OmJvb2xlYW4gPSBmYWxzZTtcbiAgICBjb25zdHJ1Y3RvcihpZCl7XG4gICAgICAgIGxldCBkYXRhID0gY3N2LmxldmVsLmdldChpZCk7XG4gICAgICAgIGlmKCFkYXRhKXJldHVybjtcbiAgICAgICAgdGhpcy5pZCA9IGRhdGEuaWQ7XG4gICAgICAgIHRoaXMuY2hhcHRlciA9IGRhdGEuY2hhcHRlcjtcbiAgICAgICAgdGhpcy5pc05ldyA9IGRhdGEuaXNOZXcgPT0gMT90cnVlOmZhbHNlO1xuICAgIH1cblxufSJdfQ==