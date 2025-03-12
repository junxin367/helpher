
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Common/PropInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fc20a6uBPlL0Zp4JJDm+6o1', 'PropInfo');
// Game/Scripts/Common/PropInfo.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropInfo = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PropInfo = /** @class */ (function () {
    function PropInfo(id) {
        this.id = 0;
        this.icon = "";
        this.desc = "";
        this.name = "";
        var data = csv.Prop.get(id);
        if (!data)
            return;
        this.id = data.id;
        this.icon = data.icon;
        this.desc = data.desc;
        this.name = data.name;
    }
    PropInfo = __decorate([
        ccclass
    ], PropInfo);
    return PropInfo;
}());
exports.PropInfo = PropInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcQ29tbW9uXFxQcm9wSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQU9JLGtCQUFZLEVBQUU7UUFOZCxPQUFFLEdBQVcsQ0FBQyxDQUFDO1FBQ2YsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFJZCxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDbEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFkUSxRQUFRO1FBRHBCLE9BQU87T0FDSyxRQUFRLENBZXBCO0lBQUQsZUFBQztDQWZELEFBZUMsSUFBQTtBQWZZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgUHJvcEluZm8ge1xuICAgIGlkOiBudW1iZXIgPSAwO1xuICAgIGljb246IHN0cmluZyA9IFwiXCI7XG4gICAgZGVzYzogc3RyaW5nID0gXCJcIjtcbiAgICBuYW1lOiBzdHJpbmcgPSBcIlwiO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihpZCkge1xuICAgICAgICBsZXQgZGF0YSA9IGNzdi5Qcm9wLmdldChpZCk7XG4gICAgICAgIGlmICghZGF0YSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmlkID0gZGF0YS5pZDtcbiAgICAgICAgdGhpcy5pY29uID0gZGF0YS5pY29uO1xuICAgICAgICB0aGlzLmRlc2MgPSBkYXRhLmRlc2M7XG4gICAgICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZTtcbiAgICB9XG59Il19