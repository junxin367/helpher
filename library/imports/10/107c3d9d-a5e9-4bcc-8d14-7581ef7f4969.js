"use strict";
cc._RF.push(module, '107c32dpelLzI0UdYHvf0lp', 'GuideProp');
// Game/Scripts/guide/GuideProp.ts

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
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GuideProp = /** @class */ (function (_super) {
    __extends(GuideProp, _super);
    function GuideProp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        return _this;
    }
    GuideProp.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
    };
    GuideProp.prototype.start = function () {
        if (PlayerInfo_1.PlayerInfo.playinglevel == PlayerInfo_1.PlayerInfo.level) {
            this.node.zIndex = 10000;
            this.node.opacity = 0;
            this.content.width = 100;
            cc.tween(this.node).to(0.5, { opacity: 255 }).start();
            cc.tween(this.content).to(0.5, { width: 1000 }).start();
        }
        else {
            this.node.active = false;
        }
    };
    GuideProp.prototype.onClick = function () {
        this.node.active = false;
    };
    __decorate([
        property(cc.Node)
    ], GuideProp.prototype, "content", void 0);
    GuideProp = __decorate([
        ccclass
    ], GuideProp);
    return GuideProp;
}(cc.Component));
exports.default = GuideProp;

cc._RF.pop();