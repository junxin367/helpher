"use strict";
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