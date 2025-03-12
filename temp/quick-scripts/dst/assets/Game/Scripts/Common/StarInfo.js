
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Common/StarInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aff5aemZVpFG7J/a8OBLsoH', 'StarInfo');
// Game/Scripts/Common/StarInfo.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarInfo = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StarInfo = /** @class */ (function () {
    function StarInfo(id) {
        this.id = 0;
        this.type = 0;
        this.chapter = 0;
        this.demand = 0;
        this.reward = 0;
        var data = csv.star.get(id);
        if (!data)
            return;
        this.id = data.id;
        this.type = data.type;
        this.chapter = data.chapter;
        this.demand = data.demand;
        this.reward = data.reward;
    }
    StarInfo = __decorate([
        ccclass
    ], StarInfo);
    return StarInfo;
}());
exports.StarInfo = StarInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcQ29tbW9uXFxTdGFySW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQU9JLGtCQUFZLEVBQUU7UUFOZCxPQUFFLEdBQVUsQ0FBQyxDQUFDO1FBQ2QsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLFdBQU0sR0FBVSxDQUFDLENBQUM7UUFDbEIsV0FBTSxHQUFVLENBQUMsQ0FBQztRQUdkLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLElBQUcsQ0FBQyxJQUFJO1lBQUMsT0FBTztRQUNoQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFmUyxRQUFRO1FBRHJCLE9BQU87T0FDTSxRQUFRLENBaUJyQjtJQUFELGVBQUM7Q0FqQkQsQUFpQkMsSUFBQTtBQWpCYSw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCAgY2xhc3MgU3RhckluZm8gIHtcbiAgICBpZDpudW1iZXIgPSAwO1xuICAgIHR5cGU6IG51bWJlciA9IDA7XG4gICAgY2hhcHRlcjogbnVtYmVyID0gMDtcbiAgICBkZW1hbmQ6bnVtYmVyID0gMDtcbiAgICByZXdhcmQ6bnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKGlkKXtcbiAgICAgICAgbGV0IGRhdGEgPSBjc3Yuc3Rhci5nZXQoaWQpO1xuICAgICAgICBpZighZGF0YSlyZXR1cm47XG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xuICAgICAgICB0aGlzLnR5cGUgPSBkYXRhLnR5cGU7XG4gICAgICAgIHRoaXMuY2hhcHRlciA9IGRhdGEuY2hhcHRlcjsgXG4gICAgICAgIHRoaXMuZGVtYW5kID0gZGF0YS5kZW1hbmQ7XG4gICAgICAgIHRoaXMucmV3YXJkID0gZGF0YS5yZXdhcmQ7XG4gICAgfVxuXG59Il19