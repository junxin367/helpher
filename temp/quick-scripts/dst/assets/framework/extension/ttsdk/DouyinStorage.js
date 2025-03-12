
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/ttsdk/DouyinStorage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHR0c2RrXFxEb3V5aW5TdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUE4RDtBQUc5RDtJQUE0QixpQ0FBVTtJQUF0QztRQUFBLHFFQVNDO1FBUEcsbUJBQWEsR0FBRyxLQUFLLENBQUM7UUFFdEIsc0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBR3pCLDBCQUFvQixHQUFHLEtBQUssQ0FBQzs7SUFFakMsQ0FBQztJQUZHO1FBREMsa0JBQUssRUFBRTsrREFDcUI7SUFQM0IsYUFBYTtRQURsQixlQUFFLENBQUMsSUFBSSxDQUFDO09BQ0gsYUFBYSxDQVNsQjtJQUFELG9CQUFDO0NBVEQsQUFTQyxDQVQyQixvQkFBVSxHQVNyQztBQUVELGtCQUFlLG9CQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGFDZW50ZXIsIHsgZGMsIGZpZWxkIH0gZnJvbSBcIi4uLy4uL2NvcmUvRGF0YUNlbnRlclwiO1xuXG5AZGMoXCJkeVwiKVxuY2xhc3MgRG91eWluU3RvcmFnZSBleHRlbmRzIERhdGFDZW50ZXIge1xuXG4gICAgaXNGcm9tU2lkZWJhciA9IGZhbHNlO1xuXG4gICAgc2lkZWJhckF2YWlsYWJsZSA9IGZhbHNlO1xuXG4gICAgQGZpZWxkKClcbiAgICBzaWRlYmFyUmV3YXJkQ2xhaW1lZCA9IGZhbHNlO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFDZW50ZXIucmVnaXN0ZXIoRG91eWluU3RvcmFnZSkiXX0=