
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/ui/DCUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e4171eQC3dMO4x8/Td1XV1Y', 'DCUI');
// framework/ui/DCUI.ts

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
var DataCenter_1 = require("../core/DataCenter");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DCUI = /** @class */ (function (_super) {
    __extends(DCUI, _super);
    function DCUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dataBind = "";
        return _this;
    }
    DCUI.prototype.onLoad = function () {
    };
    DCUI.prototype.setDCKey = function (k) {
        this.dataBind = k;
        this.setListener();
    };
    DCUI.prototype.setListener = function () {
        DataCenter_1.default.off(this.dataBind, this.dataChanged, this);
        DataCenter_1.default.on(this.dataBind, this.dataChanged, this);
    };
    DCUI.prototype.onValueChanged = function (v) {
    };
    DCUI.prototype.setDCValue = function (v) {
        DataCenter_1.default.set(this.dataBind, v);
    };
    DCUI.prototype.dataChanged = function (v, old) {
        this.onValueChanged(v);
    };
    DCUI.prototype.onEnable = function () {
        this.setListener();
        this.onValueChanged(DataCenter_1.default.get(this.dataBind));
    };
    DCUI.prototype.onDisable = function () {
        DataCenter_1.default.off(this.dataBind, this.dataChanged, this);
    };
    DCUI.prototype.onDestroy = function () {
        // DataCenter.off(this)
        evt.off(this);
    };
    __decorate([
        property()
    ], DCUI.prototype, "dataBind", void 0);
    DCUI = __decorate([
        ccclass
    ], DCUI);
    return DCUI;
}(cc.Component));
exports.default = DCUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx1aVxcRENVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFFdEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUErQ0M7UUE1Q0csY0FBUSxHQUFXLEVBQUUsQ0FBQzs7SUE0QzFCLENBQUM7SUEzQ0cscUJBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCx1QkFBUSxHQUFSLFVBQVMsQ0FBQztRQUVOLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUN0QixDQUFDO0lBR08sMEJBQVcsR0FBbkI7UUFFSSxvQkFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLENBQUE7UUFDbkQsb0JBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3RELENBQUM7SUFFRCw2QkFBYyxHQUFkLFVBQWUsQ0FBQztJQUVoQixDQUFDO0lBRUQseUJBQVUsR0FBVixVQUFXLENBQUM7UUFFUixvQkFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCwwQkFBVyxHQUFYLFVBQVksQ0FBQyxFQUFDLEdBQUc7UUFDYixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCx1QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELHdCQUFTLEdBQVQ7UUFFSSxvQkFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLENBQUE7SUFDdkQsQ0FBQztJQUNELHdCQUFTLEdBQVQ7UUFDSSx1QkFBdUI7UUFDdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBM0NEO1FBREMsUUFBUSxFQUFFOzBDQUNXO0lBSEwsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQStDeEI7SUFBRCxXQUFDO0NBL0NELEFBK0NDLENBL0NpQyxFQUFFLENBQUMsU0FBUyxHQStDN0M7a0JBL0NvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGFDZW50ZXIgZnJvbSBcIi4uL2NvcmUvRGF0YUNlbnRlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEQ1VJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgZGF0YUJpbmQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBvbkxvYWQoKVxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIHNldERDS2V5KGspXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kYXRhQmluZCA9IGs7XHJcbiAgICAgICAgdGhpcy5zZXRMaXN0ZW5lcigpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0TGlzdGVuZXIoKVxyXG4gICAge1xyXG4gICAgICAgIERhdGFDZW50ZXIub2ZmKHRoaXMuZGF0YUJpbmQsdGhpcy5kYXRhQ2hhbmdlZCx0aGlzKVxyXG4gICAgICAgIERhdGFDZW50ZXIub24odGhpcy5kYXRhQmluZCx0aGlzLmRhdGFDaGFuZ2VkLHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgb25WYWx1ZUNoYW5nZWQodilcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBzZXREQ1ZhbHVlKHYpXHJcbiAgICB7XHJcbiAgICAgICAgRGF0YUNlbnRlci5zZXQodGhpcy5kYXRhQmluZCwgdik7XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YUNoYW5nZWQodixvbGQpOiBhbnkge1xyXG4gICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZWQodik7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUgKCkge1xyXG4gICAgICAgIHRoaXMuc2V0TGlzdGVuZXIoKVxyXG4gICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZWQoRGF0YUNlbnRlci5nZXQodGhpcy5kYXRhQmluZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpXHJcbiAgICB7XHJcbiAgICAgICAgRGF0YUNlbnRlci5vZmYodGhpcy5kYXRhQmluZCx0aGlzLmRhdGFDaGFuZ2VkLHRoaXMpXHJcbiAgICB9XHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gRGF0YUNlbnRlci5vZmYodGhpcylcclxuICAgICAgICBldnQub2ZmKHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==