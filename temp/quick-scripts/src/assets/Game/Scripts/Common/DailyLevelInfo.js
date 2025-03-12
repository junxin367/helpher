"use strict";
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