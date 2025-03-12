"use strict";
cc._RF.push(module, '93f07uu37RHT4vqNhQtuSLc', 'SItem');
// framework/extension/shooter/SItem.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SGameEntity_1 = require("./SGameEntity");
var ShootManager_1 = require("./ShootManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SItem = /** @class */ (function (_super) {
    __extends(SItem, _super);
    function SItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SItem.prototype.onCollisionEnter = function (other, self) {
        console.log("eat item 11111111111");
        //player 
        this.fsm.changeState(SGameEntity_1.EntityState.Dead);
    };
    // update (dt) {}
    SItem.prototype.onActive = function () {
        ShootManager_1.default.instance.addItem(this.node);
    };
    SItem.prototype.onDelete = function () {
        _super.prototype.onDelete.call(this);
        ShootManager_1.default.instance.removeItem(this.node);
    };
    SItem = __decorate([
        ccclass
    ], SItem);
    return SItem;
}(SGameEntity_1.default));
exports.default = SItem;

cc._RF.pop();