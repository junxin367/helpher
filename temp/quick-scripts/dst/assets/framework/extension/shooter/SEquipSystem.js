
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/shooter/SEquipSystem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa221tK42VAnbWR7mYHwCkT', 'SEquipSystem');
// framework/extension/shooter/SEquipSystem.ts

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
var SWeapon_1 = require("./SWeapon");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SEquipSystem = /** @class */ (function (_super) {
    __extends(SEquipSystem, _super);
    function SEquipSystem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.weaponPrefab = null;
        _this.weapon = null;
        _this.weapons = {};
        return _this;
        // update (dt) {}
    }
    SEquipSystem.prototype.start = function () {
        //mainweapon
        this.switchWeapon(this.weaponPrefab);
    };
    SEquipSystem.prototype.onDisable = function () {
        this.removeMainWeapon();
    };
    SEquipSystem.prototype.createWeapon = function (weaponPrefab) {
        var weaponNode = cc.instantiate(weaponPrefab);
        weaponNode.setParent(this.node);
        weaponNode.setPosition(0, 0);
        var weapon = weaponNode.getComponent(SWeapon_1.default);
        if (!weapon) {
            console.log("[SEquipSystem] target node is not a SWeapon");
            weapon = weaponNode.addComponent(SWeapon_1.default);
        }
        return weapon;
    };
    SEquipSystem.prototype.addWeapon = function (k, weaponPrefab) {
        this.removeWeapon(k);
        var weapon = this.createWeapon(weaponPrefab);
        this.weapons[k] = weapon;
    };
    SEquipSystem.prototype.removeMainWeapon = function () {
        if (this.weapon) {
            this.weapon.node.destroy();
        }
    };
    SEquipSystem.prototype.removeWeapon = function (k) {
        var weapon = this.weapons[k];
        if (weapon)
            weapon.node.destroy();
        this.weapons[k] = null;
    };
    SEquipSystem.prototype.switchWeapon = function (weaponPrefab) {
        if (weaponPrefab == null)
            return;
        if (this.weapon) {
            this.weapon.node.destroy();
        }
        this.weapon = this.createWeapon(weaponPrefab);
    };
    __decorate([
        property(cc.Prefab)
    ], SEquipSystem.prototype, "weaponPrefab", void 0);
    SEquipSystem = __decorate([
        ccclass
    ], SEquipSystem);
    return SEquipSystem;
}(cc.Component));
exports.default = SEquipSystem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHNob290ZXJcXFNFcXVpcFN5c3RlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBZ0M7QUFDMUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFtRUM7UUFoRUcsa0JBQVksR0FBYSxJQUFJLENBQUE7UUFFN0IsWUFBTSxHQUFXLElBQUksQ0FBQztRQUV0QixhQUFPLEdBQTRCLEVBQUUsQ0FBQTs7UUEyRHJDLGlCQUFpQjtJQUNyQixDQUFDO0lBMURHLDRCQUFLLEdBQUw7UUFDSSxZQUFZO1FBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGdDQUFTLEdBQVQ7UUFFSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtJQUMzQixDQUFDO0lBRU8sbUNBQVksR0FBcEIsVUFBcUIsWUFBc0I7UUFFdkMsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5QyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLGlCQUFPLENBQUMsQ0FBQztRQUM5QyxJQUFHLENBQUMsTUFBTSxFQUFDO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFBO1lBQzFELE1BQU0sR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLGlCQUFPLENBQUMsQ0FBQztTQUM3QztRQUNELE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7SUFFRCxnQ0FBUyxHQUFULFVBQVUsQ0FBQyxFQUFDLFlBQXNCO1FBRTlCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUM3QixDQUFDO0lBRUQsdUNBQWdCLEdBQWhCO1FBRUksSUFBRyxJQUFJLENBQUMsTUFBTSxFQUNkO1lBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBRUQsbUNBQVksR0FBWixVQUFhLENBQUM7UUFFVixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzVCLElBQUcsTUFBTTtZQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVELG1DQUFZLEdBQVosVUFBYSxZQUFzQjtRQUUvQixJQUFHLFlBQVksSUFBSSxJQUFJO1lBQ25CLE9BQU87UUFDWCxJQUFHLElBQUksQ0FBQyxNQUFNLEVBQ2Q7WUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM5QjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBN0REO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ1M7SUFIWixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBbUVoQztJQUFELG1CQUFDO0NBbkVELEFBbUVDLENBbkV5QyxFQUFFLENBQUMsU0FBUyxHQW1FckQ7a0JBbkVvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNXZWFwb24gZnJvbSBcIi4vU1dlYXBvblwiO1xyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNFcXVpcFN5c3RlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHdlYXBvblByZWZhYjpjYy5QcmVmYWIgPSBudWxsXHJcblxyXG4gICAgd2VhcG9uOlNXZWFwb24gPSBudWxsO1xyXG5cclxuICAgIHdlYXBvbnM6e1tpbmRleDpzdHJpbmddOlNXZWFwb259ID0ge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy9tYWlud2VhcG9uXHJcbiAgICAgICAgdGhpcy5zd2l0Y2hXZWFwb24odGhpcy53ZWFwb25QcmVmYWIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVNYWluV2VhcG9uKClcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVdlYXBvbih3ZWFwb25QcmVmYWI6Y2MuUHJlZmFiKTpTV2VhcG9uXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHdlYXBvbk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh3ZWFwb25QcmVmYWIpO1xyXG4gICAgICAgIHdlYXBvbk5vZGUuc2V0UGFyZW50KHRoaXMubm9kZSk7XHJcbiAgICAgICAgd2VhcG9uTm9kZS5zZXRQb3NpdGlvbigwLDApO1xyXG4gICAgICAgIGxldCB3ZWFwb24gPSB3ZWFwb25Ob2RlLmdldENvbXBvbmVudChTV2VhcG9uKTtcclxuICAgICAgICBpZighd2VhcG9uKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbU0VxdWlwU3lzdGVtXSB0YXJnZXQgbm9kZSBpcyBub3QgYSBTV2VhcG9uXCIpXHJcbiAgICAgICAgICAgIHdlYXBvbiA9IHdlYXBvbk5vZGUuYWRkQ29tcG9uZW50KFNXZWFwb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2VhcG9uXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFkZFdlYXBvbihrLHdlYXBvblByZWZhYjpjYy5QcmVmYWIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVXZWFwb24oaylcclxuICAgICAgICBsZXQgd2VhcG9uID0gdGhpcy5jcmVhdGVXZWFwb24od2VhcG9uUHJlZmFiKVxyXG4gICAgICAgIHRoaXMud2VhcG9uc1trXSA9IHdlYXBvbjtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVNYWluV2VhcG9uKClcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLndlYXBvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMud2VhcG9uLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVXZWFwb24oaylcclxuICAgIHtcclxuICAgICAgICBsZXQgd2VhcG9uID0gdGhpcy53ZWFwb25zW2tdXHJcbiAgICAgICAgaWYod2VhcG9uKVxyXG4gICAgICAgICAgICB3ZWFwb24ubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy53ZWFwb25zW2tdID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2hXZWFwb24od2VhcG9uUHJlZmFiOmNjLlByZWZhYilcclxuICAgIHtcclxuICAgICAgICBpZih3ZWFwb25QcmVmYWIgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmKHRoaXMud2VhcG9uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy53ZWFwb24ubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud2VhcG9uID0gdGhpcy5jcmVhdGVXZWFwb24od2VhcG9uUHJlZmFiKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19