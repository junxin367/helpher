"use strict";
cc._RF.push(module, '31f41YK4edMrqza0HFHytb8', 'ChapterlInfo');
// Game/Scripts/Common/ChapterlInfo.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChapterlInfo = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ChapterlInfo = /** @class */ (function () {
    function ChapterlInfo(id) {
        this.id = 0;
        this.name = "";
        this.chapter = "";
        this.title = "";
        var data = csv.Chapter.get(id);
        if (!data)
            return;
        this.id = data.id;
        this.name = data.name;
        var str = data.name.split(" ");
        this.chapter = str[0];
        this.title = str[1];
    }
    ChapterlInfo = __decorate([
        ccclass
    ], ChapterlInfo);
    return ChapterlInfo;
}());
exports.ChapterlInfo = ChapterlInfo;

cc._RF.pop();