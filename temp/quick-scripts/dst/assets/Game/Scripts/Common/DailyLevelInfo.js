
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Common/DailyLevelInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7c7d3qZnXtO8ogQimsHNCS4', 'DailyLevelInfo');
// Game/Scripts/Common/DailyLevelInfo.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyLevelInfo = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DailyLevelInfo = /** @class */ (function () {
    function DailyLevelInfo(id) {
        this.id = 0;
        this.day = "";
        this.number = "";
        this.hint_video = "";
        var data = csv.daily_level.get(id);
        if (!data)
            return;
        this.id = data.id;
        this.day = data.day;
        this.number = data.number;
        this.hint_video = data.hint_video;
    }
    DailyLevelInfo = __decorate([
        ccclass
    ], DailyLevelInfo);
    return DailyLevelInfo;
}());
exports.DailyLevelInfo = DailyLevelInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcQ29tbW9uXFxEYWlseUxldmVsSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQU1JLHdCQUFZLEVBQUU7UUFMZCxPQUFFLEdBQVUsQ0FBQyxDQUFDO1FBQ2QsUUFBRyxHQUFTLEVBQUUsQ0FBQztRQUNmLFdBQU0sR0FBVSxFQUFFLENBQUM7UUFDbkIsZUFBVSxHQUFVLEVBQUUsQ0FBQztRQUduQixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQyxJQUFHLENBQUMsSUFBSTtZQUFDLE9BQU87UUFDaEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3RDLENBQUM7SUFiUyxjQUFjO1FBRDNCLE9BQU87T0FDTSxjQUFjLENBZTNCO0lBQUQscUJBQUM7Q0FmRCxBQWVDLElBQUE7QUFmYSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCAgY2xhc3MgRGFpbHlMZXZlbEluZm8gIHtcbiAgICBpZDpudW1iZXIgPSAwO1xuICAgIGRheTpzdHJpbmc9IFwiXCI7XG4gICAgbnVtYmVyOnN0cmluZyA9IFwiXCI7XG4gICAgaGludF92aWRlbzpzdHJpbmcgPSBcIlwiO1xuXG4gICAgY29uc3RydWN0b3IoaWQpe1xuICAgICAgICBsZXQgZGF0YSA9IGNzdi5kYWlseV9sZXZlbC5nZXQoaWQpO1xuICAgICAgICBpZighZGF0YSlyZXR1cm47XG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xuICAgICAgICB0aGlzLmRheSA9IGRhdGEuZGF5O1xuICAgICAgICB0aGlzLm51bWJlciA9IGRhdGEubnVtYmVyO1xuICAgICAgICB0aGlzLmhpbnRfdmlkZW8gPSBkYXRhLmhpbnRfdmlkZW87XG4gICAgfVxuXG59Il19