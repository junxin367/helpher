"use strict";
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