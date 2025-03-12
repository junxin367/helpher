
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Common/TurntableInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '75538dcMglHWrGRfjAabgdw', 'TurntableInfo');
// Game/Scripts/Common/TurntableInfo.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurntableInfo = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TurntableInfo = /** @class */ (function () {
    function TurntableInfo(id) {
        this.id = 0;
        this.type = 0;
        this.content = "";
        this.num = 0;
        this.text = "";
        this.chance = 0;
        this.path = "";
        var data = csv.turntable.get(id);
        if (!data)
            return;
        this.id = data.id;
        this.type = data.type;
        this.content = data.content;
        this.num = data.num;
        this.text = data.text;
        this.chance = data.chance;
        this.path = "Img/" + data.thumbnail;
    }
    TurntableInfo = __decorate([
        ccclass
    ], TurntableInfo);
    return TurntableInfo;
}());
exports.TurntableInfo = TurntableInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcQ29tbW9uXFxUdXJudGFibGVJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBU0ksdUJBQVksRUFBRTtRQVJkLE9BQUUsR0FBVyxDQUFDLENBQUM7UUFDZixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsUUFBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUdkLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUNsQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQU8sSUFBSSxDQUFDLFNBQVcsQ0FBQztJQUN4QyxDQUFDO0lBbkJRLGFBQWE7UUFEekIsT0FBTztPQUNLLGFBQWEsQ0FxQnpCO0lBQUQsb0JBQUM7Q0FyQkQsQUFxQkMsSUFBQTtBQXJCWSxzQ0FBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBUdXJudGFibGVJbmZvIHtcclxuICAgIGlkOiBudW1iZXIgPSAwO1xyXG4gICAgdHlwZTogbnVtYmVyID0gMDtcclxuICAgIGNvbnRlbnQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBudW06IG51bWJlciA9IDA7XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgY2hhbmNlOiBudW1iZXIgPSAwO1xyXG4gICAgcGF0aDogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZCkge1xyXG4gICAgICAgIGxldCBkYXRhID0gY3N2LnR1cm50YWJsZS5nZXQoaWQpO1xyXG4gICAgICAgIGlmICghZGF0YSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IGRhdGEudHlwZTtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBkYXRhLmNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5udW0gPSBkYXRhLm51bTtcclxuICAgICAgICB0aGlzLnRleHQgPSBkYXRhLnRleHQ7XHJcbiAgICAgICAgdGhpcy5jaGFuY2UgPSBkYXRhLmNoYW5jZTtcclxuICAgICAgICB0aGlzLnBhdGggPSBgSW1nLyR7ZGF0YS50aHVtYm5haWx9YDtcclxuICAgIH1cclxuXHJcbn0iXX0=