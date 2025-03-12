"use strict";
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