
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIGetLuckyItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c72aejnUD1OCJFpwwrfl/bT', 'UIGetLuckyItem');
// Game/Scripts/UI/UIGetLuckyItem.ts

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
var mvcView_1 = require("../../../framework/ui/mvcView");
var ccUtil_1 = require("../../../framework/utils/ccUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIGetLuckyItem = /** @class */ (function (_super) {
    __extends(UIGetLuckyItem, _super);
    function UIGetLuckyItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tiliLabel = null;
        _this.icon = null;
        return _this;
    }
    UIGetLuckyItem.prototype.onLaterRender = function () {
        var data = this.getData();
        this.tiliLabel.string = data.content + "x" + data.num;
        ccUtil_1.default.setDisplay(this.icon, data.path);
    };
    __decorate([
        property(cc.Label)
    ], UIGetLuckyItem.prototype, "tiliLabel", void 0);
    __decorate([
        property(cc.Sprite)
    ], UIGetLuckyItem.prototype, "icon", void 0);
    UIGetLuckyItem = __decorate([
        ccclass
    ], UIGetLuckyItem);
    return UIGetLuckyItem;
}(mvcView_1.default));
exports.default = UIGetLuckyItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJR2V0THVja3lJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlEQUFvRDtBQUVwRCwwREFBcUQ7QUFHL0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFJNUM7SUFBNEMsa0NBQU87SUFBbkQ7UUFBQSxxRUFnQkM7UUFiRyxlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRzNCLFVBQUksR0FBYyxJQUFJLENBQUM7O0lBVTNCLENBQUM7SUFQRyxzQ0FBYSxHQUFiO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBbUIsQ0FBQztRQUUzQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBTSxJQUFJLENBQUMsT0FBTyxTQUFJLElBQUksQ0FBQyxHQUFLLENBQUM7UUFDdEQsZ0JBQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQVhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ1E7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDRztJQU5OLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FnQmxDO0lBQUQscUJBQUM7Q0FoQkQsQUFnQkMsQ0FoQjJDLGlCQUFPLEdBZ0JsRDtrQkFoQm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBtdmNWaWV3IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvbXZjVmlld1wiO1xuaW1wb3J0IHsgVHVybnRhYmxlSW5mbyB9IGZyb20gXCIuLi9Db21tb24vVHVybnRhYmxlSW5mb1wiO1xuaW1wb3J0IGNjVXRpbCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3V0aWxzL2NjVXRpbFwiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJR2V0THVja3lJdGVtIGV4dGVuZHMgbXZjVmlldyB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdGlsaUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGljb246IGNjLlNwcml0ZSA9IG51bGw7XG5cblxuICAgIG9uTGF0ZXJSZW5kZXIoKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXREYXRhKCkgYXMgVHVybnRhYmxlSW5mbztcblxuICAgICAgICB0aGlzLnRpbGlMYWJlbC5zdHJpbmcgPSBgJHtkYXRhLmNvbnRlbnR9eCR7ZGF0YS5udW19YDtcbiAgICAgICAgY2NVdGlsLnNldERpc3BsYXkodGhpcy5pY29uLCBkYXRhLnBhdGgpO1xuICAgIH1cbiAgICBcbn1cbiJdfQ==