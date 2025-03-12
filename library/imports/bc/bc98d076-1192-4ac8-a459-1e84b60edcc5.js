"use strict";
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