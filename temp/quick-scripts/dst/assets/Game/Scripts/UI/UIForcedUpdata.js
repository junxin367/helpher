
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UIForcedUpdata.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c4bf8utPgxD67UVIghBwuDe', 'UIForcedUpdata');
// Game/Scripts/UI/UIForcedUpdata.ts

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
var UIForcedUpdata = /** @class */ (function (_super) {
    __extends(UIForcedUpdata, _super);
    function UIForcedUpdata() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labelContent = null;
        _this.btn_yes = null;
        _this.btn_no = null;
        _this.btn_close = null;
        _this.onConfirm = new Signal_1.default();
        _this.option = ConfirmOption.Default;
        return _this;
    }
    UIForcedUpdata.prototype.onLoad = function () {
        this.register(this.btn_yes, this.click_yes);
        this.register(this.btn_no, this.click_no);
        this.register(this.btn_close, this.click_close);
    };
    UIForcedUpdata.prototype.onShown = function (text, callback, target) {
        this.labelContent.string = text;
        this.onConfirm.on(callback, target);
    };
    UIForcedUpdata.prototype.click_yes = function () {
        this.option = ConfirmOption.Yes;
        vm.hide(this);
    };
    UIForcedUpdata.prototype.click_no = function () {
        this.option = ConfirmOption.No;
        vm.hide(this);
    };
    UIForcedUpdata.prototype.click_close = function () {
        this.option = ConfirmOption.Default;
        vm.hide(this);
    };
    UIForcedUpdata.prototype.onHidden = function () {
        this.onConfirm.fire(this.option);
    };
    __decorate([
        property(cc.Label)
    ], UIForcedUpdata.prototype, "labelContent", void 0);
    __decorate([
        property(cc.Button)
    ], UIForcedUpdata.prototype, "btn_yes", void 0);
    __decorate([
        property(cc.Button)
    ], UIForcedUpdata.prototype, "btn_no", void 0);
    __decorate([
        property(cc.Button)
    ], UIForcedUpdata.prototype, "btn_close", void 0);
    UIForcedUpdata = __decorate([
        ccclass
    ], UIForcedUpdata);
    return UIForcedUpdata;
}(mvcView_1.default));
exports.default = UIForcedUpdata;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJRm9yY2VkVXBkYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBb0Q7QUFDcEQseURBQW9EO0FBRWhELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFBO0FBRXpDLElBQVksYUFJWDtBQUpELFdBQVksYUFBYTtJQUNyQix1REFBTyxDQUFBO0lBQ1AsNkNBQUUsQ0FBQTtJQUNGLCtDQUFHLENBQUE7QUFDUCxDQUFDLEVBSlcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFJeEI7QUFJRDtJQUE0QyxrQ0FBTztJQUFuRDtRQUFBLHFFQWdEQztRQTdDRyxrQkFBWSxHQUFhLElBQUksQ0FBQztRQUc5QixhQUFPLEdBQWMsSUFBSSxDQUFBO1FBR3pCLFlBQU0sR0FBYyxJQUFJLENBQUE7UUFHeEIsZUFBUyxHQUFjLElBQUksQ0FBQTtRQUMzQixlQUFTLEdBQVcsSUFBSSxnQkFBTSxFQUFFLENBQUM7UUFjakMsWUFBTSxHQUFrQixhQUFhLENBQUMsT0FBTyxDQUFDOztJQXFCbEQsQ0FBQztJQWhDRywrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDbkQsQ0FBQztJQUVELGdDQUFPLEdBQVAsVUFBUSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU07UUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBSUQsa0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQztRQUNoQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2pCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsRUFBRSxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDakIsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUE7UUFDbkMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNqQixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNwQyxDQUFDO0lBM0NEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0RBQ1c7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDSztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNJO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ087SUFaVixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBZ0RsQztJQUFELHFCQUFDO0NBaERELEFBZ0RDLENBaEQyQyxpQkFBTyxHQWdEbEQ7a0JBaERvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpZ25hbCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2NvcmUvU2lnbmFsXCI7XHJcbmltcG9ydCBtdmNWaWV3IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvbXZjVmlld1wiO1xyXG5cclxubGV0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3JcclxuXHJcbmV4cG9ydCBlbnVtIENvbmZpcm1PcHRpb24ge1xyXG4gICAgRGVmYXVsdCxcclxuICAgIE5vLFxyXG4gICAgWWVzLFxyXG59XHJcblxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlGb3JjZWRVcGRhdGEgZXh0ZW5kcyBtdmNWaWV3IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbENvbnRlbnQ6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgYnRuX3llczogY2MuQnV0dG9uID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBidG5fbm86IGNjLkJ1dHRvbiA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgYnRuX2Nsb3NlOiBjYy5CdXR0b24gPSBudWxsXHJcbiAgICBvbkNvbmZpcm06IFNpZ25hbCA9IG5ldyBTaWduYWwoKTtcclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIodGhpcy5idG5feWVzLCB0aGlzLmNsaWNrX3llcylcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKHRoaXMuYnRuX25vLCB0aGlzLmNsaWNrX25vKVxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIodGhpcy5idG5fY2xvc2UsIHRoaXMuY2xpY2tfY2xvc2UpXHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93bih0ZXh0LCBjYWxsYmFjaywgdGFyZ2V0KSB7XHJcbiAgICAgICAgdGhpcy5sYWJlbENvbnRlbnQuc3RyaW5nID0gdGV4dDtcclxuICAgICAgICB0aGlzLm9uQ29uZmlybS5vbihjYWxsYmFjaywgdGFyZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBvcHRpb246IENvbmZpcm1PcHRpb24gPSBDb25maXJtT3B0aW9uLkRlZmF1bHQ7XHJcblxyXG4gICAgY2xpY2tfeWVzKCkge1xyXG4gICAgICAgIHRoaXMub3B0aW9uID0gQ29uZmlybU9wdGlvbi5ZZXM7XHJcbiAgICAgICAgdm0uaGlkZSh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrX25vKCkge1xyXG4gICAgICAgIHRoaXMub3B0aW9uID0gQ29uZmlybU9wdGlvbi5ObztcclxuICAgICAgICB2bS5oaWRlKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tfY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb24gPSBDb25maXJtT3B0aW9uLkRlZmF1bHRcclxuICAgICAgICB2bS5oaWRlKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgb25IaWRkZW4oKSB7XHJcbiAgICAgICAgdGhpcy5vbkNvbmZpcm0uZmlyZSh0aGlzLm9wdGlvbilcclxuICAgIH1cclxuXHJcbn0iXX0=