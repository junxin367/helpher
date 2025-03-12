
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIConfirm.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d511lA/mZOVoM0CptHQELT', 'UIConfirm');
// Game/Scripts/UI/UIConfirm.ts

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
exports.ConfirmOption = void 0;
var Signal_1 = require("../../../framework/core/Signal");
var mvcView_1 = require("../../../framework/ui/mvcView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ConfirmOption;
(function (ConfirmOption) {
    ConfirmOption[ConfirmOption["Default"] = 0] = "Default";
    ConfirmOption[ConfirmOption["No"] = 1] = "No";
    ConfirmOption[ConfirmOption["Yes"] = 2] = "Yes";
})(ConfirmOption = exports.ConfirmOption || (exports.ConfirmOption = {}));
var UIConfirm = /** @class */ (function (_super) {
    __extends(UIConfirm, _super);
    function UIConfirm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labelContent = null;
        _this.btn_yes = null;
        _this.btn_no = null;
        _this.btn_close = null;
        _this.onConfirm = new Signal_1.default();
        _this.option = ConfirmOption.Default;
        return _this;
    }
    UIConfirm.prototype.onLoad = function () {
        this.register(this.btn_yes, this.click_yes);
        this.register(this.btn_no, this.click_no);
        this.register(this.btn_close, this.click_close);
    };
    UIConfirm.prototype.onShown = function (text, callback, target) {
        this.labelContent.string = text;
        this.onConfirm.on(callback, target);
    };
    UIConfirm.prototype.click_yes = function () {
        this.option = ConfirmOption.Yes;
        vm.hide(this);
    };
    UIConfirm.prototype.click_no = function () {
        this.option = ConfirmOption.No;
        vm.hide(this);
    };
    UIConfirm.prototype.click_close = function () {
        this.option = ConfirmOption.Default;
        vm.hide(this);
    };
    UIConfirm.prototype.onHidden = function () {
        this.onConfirm.fire(this.option);
    };
    __decorate([
        property(cc.Label)
    ], UIConfirm.prototype, "labelContent", void 0);
    __decorate([
        property(cc.Button)
    ], UIConfirm.prototype, "btn_yes", void 0);
    __decorate([
        property(cc.Button)
    ], UIConfirm.prototype, "btn_no", void 0);
    __decorate([
        property(cc.Button)
    ], UIConfirm.prototype, "btn_close", void 0);
    UIConfirm = __decorate([
        ccclass
    ], UIConfirm);
    return UIConfirm;
}(mvcView_1.default));
exports.default = UIConfirm;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJQ29uZmlybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW9EO0FBQ3BELHlEQUFvRDtBQUVoRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQTtBQUV6QyxJQUFZLGFBSVg7QUFKRCxXQUFZLGFBQWE7SUFDckIsdURBQU8sQ0FBQTtJQUNQLDZDQUFFLENBQUE7SUFDRiwrQ0FBRyxDQUFBO0FBQ1AsQ0FBQyxFQUpXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBSXhCO0FBSUQ7SUFBdUMsNkJBQU87SUFBOUM7UUFBQSxxRUFnREM7UUE3Q0csa0JBQVksR0FBYSxJQUFJLENBQUM7UUFHOUIsYUFBTyxHQUFjLElBQUksQ0FBQTtRQUd6QixZQUFNLEdBQWMsSUFBSSxDQUFBO1FBR3hCLGVBQVMsR0FBYyxJQUFJLENBQUE7UUFDM0IsZUFBUyxHQUFXLElBQUksZ0JBQU0sRUFBRSxDQUFDO1FBY2pDLFlBQU0sR0FBa0IsYUFBYSxDQUFDLE9BQU8sQ0FBQzs7SUFxQmxELENBQUM7SUFoQ0csMEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ25ELENBQUM7SUFFRCwyQkFBTyxHQUFQLFVBQVEsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNO1FBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUlELDZCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUM7UUFDaEMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNqQixDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLEVBQUUsQ0FBQztRQUMvQixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2pCLENBQUM7SUFFRCwrQkFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFBO1FBQ25DLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDakIsQ0FBQztJQUVELDRCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDcEMsQ0FBQztJQTNDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNXO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ0s7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDSTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNPO0lBWlYsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQWdEN0I7SUFBRCxnQkFBQztDQWhERCxBQWdEQyxDQWhEc0MsaUJBQU8sR0FnRDdDO2tCQWhEb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaWduYWwgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9jb3JlL1NpZ25hbFwiO1xyXG5pbXBvcnQgbXZjVmlldyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL212Y1ZpZXdcIjtcclxuXHJcbmxldCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yXHJcblxyXG5leHBvcnQgZW51bSBDb25maXJtT3B0aW9uIHtcclxuICAgIERlZmF1bHQsXHJcbiAgICBObyxcclxuICAgIFllcyxcclxufVxyXG5cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQ29uZmlybSBleHRlbmRzIG12Y1ZpZXcge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsQ29udGVudDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBidG5feWVzOiBjYy5CdXR0b24gPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJ0bl9ubzogY2MuQnV0dG9uID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBidG5fY2xvc2U6IGNjLkJ1dHRvbiA9IG51bGxcclxuICAgIG9uQ29uZmlybTogU2lnbmFsID0gbmV3IFNpZ25hbCgpO1xyXG5cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcih0aGlzLmJ0bl95ZXMsIHRoaXMuY2xpY2tfeWVzKVxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIodGhpcy5idG5fbm8sIHRoaXMuY2xpY2tfbm8pXHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcih0aGlzLmJ0bl9jbG9zZSwgdGhpcy5jbGlja19jbG9zZSlcclxuICAgIH1cclxuXHJcbiAgICBvblNob3duKHRleHQsIGNhbGxiYWNrLCB0YXJnZXQpIHtcclxuICAgICAgICB0aGlzLmxhYmVsQ29udGVudC5zdHJpbmcgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMub25Db25maXJtLm9uKGNhbGxiYWNrLCB0YXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wdGlvbjogQ29uZmlybU9wdGlvbiA9IENvbmZpcm1PcHRpb24uRGVmYXVsdDtcclxuXHJcbiAgICBjbGlja195ZXMoKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb24gPSBDb25maXJtT3B0aW9uLlllcztcclxuICAgICAgICB2bS5oaWRlKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tfbm8oKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb24gPSBDb25maXJtT3B0aW9uLk5vO1xyXG4gICAgICAgIHZtLmhpZGUodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBjbGlja19jbG9zZSgpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbiA9IENvbmZpcm1PcHRpb24uRGVmYXVsdFxyXG4gICAgICAgIHZtLmhpZGUodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBvbkhpZGRlbigpIHtcclxuICAgICAgICB0aGlzLm9uQ29uZmlybS5maXJlKHRoaXMub3B0aW9uKVxyXG4gICAgfVxyXG5cclxufSJdfQ==