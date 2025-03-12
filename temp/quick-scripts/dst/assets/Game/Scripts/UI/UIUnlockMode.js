
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIUnlockMode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ae375vdSw9CYaa3R4KPbiQl', 'UIUnlockMode');
// Game/Scripts/UI/UIUnlockMode.ts

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
var LoadingScene_1 = require("../Common/Base/LoadingScene");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIUnlockMode = /** @class */ (function (_super) {
    __extends(UIUnlockMode, _super);
    function UIUnlockMode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIUnlockMode.prototype.onLoad = function () {
    };
    UIUnlockMode.prototype.start = function () {
    };
    UIUnlockMode.prototype.onShown = function () {
    };
    UIUnlockMode.prototype.click_enterChallenge = function () {
        LoadingScene_1.default.goto("Main", "Prefabs/UI/UIChallengeChapter");
    };
    UIUnlockMode.prototype.click_exit = function () {
        vm.hide(this);
    };
    UIUnlockMode = __decorate([
        ccclass
    ], UIUnlockMode);
    return UIUnlockMode;
}(cc.Component));
exports.default = UIUnlockMode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJVW5sb2NrTW9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBc0Q7QUFFbEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUE7QUFFekM7SUFBMEMsZ0NBQVk7SUFBdEQ7O0lBb0JBLENBQUM7SUFsQkcsNkJBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCw0QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDhCQUFPLEdBQVA7SUFFQSxDQUFDO0lBRUQsMkNBQW9CLEdBQXBCO1FBQ0ksc0JBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLCtCQUErQixDQUFDLENBQUE7SUFDOUQsQ0FBQztJQUNELGlDQUFVLEdBQVY7UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFuQmdCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FvQmhDO0lBQUQsbUJBQUM7Q0FwQkQsQUFvQkMsQ0FwQnlDLEVBQUUsQ0FBQyxTQUFTLEdBb0JyRDtrQkFwQm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9hZGluZ1NjZW5lIGZyb20gXCIuLi9Db21tb24vQmFzZS9Mb2FkaW5nU2NlbmVcIlxyXG5cclxubGV0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3JcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlVbmxvY2tNb2RlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblNob3duKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbGlja19lbnRlckNoYWxsZW5nZSgpIHtcclxuICAgICAgICBMb2FkaW5nU2NlbmUuZ290byhcIk1haW5cIiwgXCJQcmVmYWJzL1VJL1VJQ2hhbGxlbmdlQ2hhcHRlclwiKVxyXG4gICAgfVxyXG4gICAgY2xpY2tfZXhpdCgpIHtcclxuICAgICAgICB2bS5oaWRlKHRoaXMpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=