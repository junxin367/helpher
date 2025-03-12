"use strict";
cc._RF.push(module, 'b2499718ypLOra9FRRpHGRV', 'DouyinStorage');
// framework/extension/ttsdk/DouyinStorage.ts

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
var DataCenter_1 = require("../../core/DataCenter");
var DouyinStorage = /** @class */ (function (_super) {
    __extends(DouyinStorage, _super);
    function DouyinStorage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFromSidebar = false;
        _this.sidebarAvailable = false;
        _this.sidebarRewardClaimed = false;
        return _this;
    }
    __decorate([
        DataCenter_1.field()
    ], DouyinStorage.prototype, "sidebarRewardClaimed", void 0);
    DouyinStorage = __decorate([
        DataCenter_1.dc("dy")
    ], DouyinStorage);
    return DouyinStorage;
}(DataCenter_1.default));
exports.default = DataCenter_1.default.register(DouyinStorage);

cc._RF.pop();