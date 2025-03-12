
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/UICollection.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e15c4lULtJElJBzayTDrBtU', 'UICollection');
// Game/Scripts/UI/UICollection.ts

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
var PlayerInfo_1 = require("../Common/Base/PlayerInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UICollection = /** @class */ (function (_super) {
    __extends(UICollection, _super);
    function UICollection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.btn_sidebar = null;
        return _this;
    }
    UICollection.prototype.onLoad = function () {
        var _this = this;
        this.onClick(this.btn_close, function (_) { return _this.click_close(); });
        this.onClick(this.btn_sidebar, function (_) { return _this.click_sidebar(); });
        this.onClick(this.btn_claim, function (_) { return _this.click_claim(); });
        this.onVisible(this.btn_claim, function () { return !PlayerInfo_1.PlayerInfo.isFavClaimed && _this.type == "claim"; });
        this.onVisible(this.btn_claim, function () { return _this.type == "sidebar"; });
    };
    UICollection.prototype.onShow = function (type) {
        this.type = type;
        this.render();
    };
    UICollection.prototype.click_close = function () {
        vm.hide(this);
    };
    UICollection.prototype.click_claim = function () {
        PlayerInfo_1.PlayerInfo.claimFav();
        this.render();
    };
    UICollection.prototype.click_sidebar = function () {
        tt.navigateToScene({
            scene: "sidebar",
            success: function (res) {
                console.log("navigate to scene success");
                // 跳转成功回调逻辑
            },
            fail: function (res) {
                console.log("navigate to scene fail: ", res);
                // 跳转失败回调逻辑
            },
        });
    };
    __decorate([
        property(cc.Node)
    ], UICollection.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Node)
    ], UICollection.prototype, "btn_claim", void 0);
    __decorate([
        property(cc.Node)
    ], UICollection.prototype, "btn_sidebar", void 0);
    UICollection = __decorate([
        ccclass
    ], UICollection);
    return UICollection;
}(mvcView_1.default));
exports.default = UICollection;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXFVJQ29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBb0Q7QUFFcEQsd0RBQXVEO0FBR2pELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFPO0lBQWpEO1FBQUEscUVBb0RDO1FBbERHLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFNMUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7O0lBNENoQyxDQUFDO0lBbkNHLDZCQUFNLEdBQU47UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxjQUFLLE9BQUEsQ0FBQyx1QkFBVSxDQUFDLFlBQVksSUFBSSxLQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sRUFBaEQsQ0FBZ0QsQ0FBQyxDQUFBO1FBQ3JGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxjQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksSUFBSSxTQUFTLEVBQXRCLENBQXNCLENBQUMsQ0FBQTtJQUMvRCxDQUFDO0lBQ0QsNkJBQU0sR0FBTixVQUFPLElBQVc7UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFHRCxrQ0FBVyxHQUFYO1FBQ0ksdUJBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELG9DQUFhLEdBQWI7UUFDSSxFQUFFLENBQUMsZUFBZSxDQUFDO1lBQ2YsS0FBSyxFQUFFLFNBQVM7WUFDaEIsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7Z0JBQ3pDLFdBQVc7WUFDZixDQUFDO1lBQ0QsSUFBSSxFQUFFLFVBQUMsR0FBRztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QyxXQUFXO1lBQ2YsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFqREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNDO0lBR25CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1U7SUFSWCxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBb0RoQztJQUFELG1CQUFDO0NBcERELEFBb0RDLENBcER5QyxpQkFBTyxHQW9EaEQ7a0JBcERvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG12Y1ZpZXcgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9tdmNWaWV3XCI7XG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvVXNlckluZm9cIjtcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi4vQ29tbW9uL0Jhc2UvUGxheWVySW5mb1wiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUNvbGxlY3Rpb24gZXh0ZW5kcyBtdmNWaWV3IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5fY2xvc2U6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuX2NsYWltOiBjYy5Ob2RlO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuX3NpZGViYXI6IGNjLk5vZGUgPSBudWxsO1xuXG5cblxuICAgIGNhbGxiYWNrOiBGdW5jdGlvbjtcblxuICAgIHR5cGU6c3RyaW5nO1xuXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMub25DbGljayh0aGlzLmJ0bl9jbG9zZSwgXyA9PiB0aGlzLmNsaWNrX2Nsb3NlKCkpO1xuICAgICAgICB0aGlzLm9uQ2xpY2sodGhpcy5idG5fc2lkZWJhciwgXyA9PiB0aGlzLmNsaWNrX3NpZGViYXIoKSk7XG4gICAgICAgIHRoaXMub25DbGljayh0aGlzLmJ0bl9jbGFpbSwgXyA9PiB0aGlzLmNsaWNrX2NsYWltKCkpO1xuICAgICAgICB0aGlzLm9uVmlzaWJsZSh0aGlzLmJ0bl9jbGFpbSwgKCk9PiAhUGxheWVySW5mby5pc0ZhdkNsYWltZWQgJiYgdGhpcy50eXBlID09IFwiY2xhaW1cIilcbiAgICAgICAgdGhpcy5vblZpc2libGUodGhpcy5idG5fY2xhaW0sICgpPT4gdGhpcy50eXBlID09IFwic2lkZWJhclwiKVxuICAgIH1cbiAgICBvblNob3codHlwZTpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBjbGlja19jbG9zZSgpIHtcbiAgICAgICAgdm0uaGlkZSh0aGlzKTtcbiAgICB9XG5cblxuICAgIGNsaWNrX2NsYWltKCkge1xuICAgICAgICBQbGF5ZXJJbmZvLmNsYWltRmF2KCk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgY2xpY2tfc2lkZWJhcigpe1xuICAgICAgICB0dC5uYXZpZ2F0ZVRvU2NlbmUoe1xuICAgICAgICAgICAgc2NlbmU6IFwic2lkZWJhclwiLFxuICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmF2aWdhdGUgdG8gc2NlbmUgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICAvLyDot7PovazmiJDlip/lm57osIPpgLvovpFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWlsOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJuYXZpZ2F0ZSB0byBzY2VuZSBmYWlsOiBcIiwgcmVzKTtcbiAgICAgICAgICAgICAgICAvLyDot7PovazlpLHotKXlm57osIPpgLvovpFcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==