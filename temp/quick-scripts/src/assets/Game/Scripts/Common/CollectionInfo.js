"use strict";
cc._RF.push(module, '6f75bjPjARDULt4zgs/pFxb', 'CollectionInfo');
// Game/Scripts/Common/CollectionInfo.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionInfo = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CollectionInfo = /** @class */ (function () {
    function CollectionInfo(id) {
        this.id = 0;
        this.name = "";
        this.type = 0;
        this.res = "";
        this.thumbnail = "";
        var data = csv.Collection.get(id);
        if (!data)
            return;
        this.id = data.id;
        this.type = data.type;
        this.name = data.name;
        this.res = data.res;
        this.thumbnail = "Img/decorate/thumbnail/" + data.thumbnail;
    }
    CollectionInfo = __decorate([
        ccclass
    ], CollectionInfo);
    return CollectionInfo;
}());
exports.CollectionInfo = CollectionInfo;

cc._RF.pop();