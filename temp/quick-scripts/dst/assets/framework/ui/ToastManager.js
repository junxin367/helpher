
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/ui/ToastManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '129ed5o6uNHDKhz6KoueBpN', 'ToastManager');
// framework/ui/ToastManager.ts

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
exports.Toast = void 0;
var ToastComponent_1 = require("./ToastComponent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
exports.Toast = null;
var ToastManager = /** @class */ (function (_super) {
    __extends(ToastManager, _super);
    function ToastManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.offset = cc.v2();
        return _this;
        // update (dt) {}
    }
    ToastManager.prototype.onLoad = function () {
        exports.Toast = this;
    };
    ToastManager.prototype.start = function () {
        this.toastPool = new cc.NodePool();
    };
    ToastManager.prototype.onDestroy = function () {
        this.toastPool.clear();
    };
    ToastManager.prototype.make = function (text, dur) {
        if (dur === void 0) { dur = 2; }
        //show toast 
        var node = this.toastPool.get();
        var toastComp = null;
        if (node == null) {
            node = cc.instantiate(this.prefab);
            toastComp = node.getComponent(ToastComponent_1.default);
            if (toastComp == null) {
                console.warn("Toast.make : Toast Prefab must contains ToastComponent");
            }
            // ToastManager.toastPool.put(node);
            // node = ToastManager.toastPool.get();
            node.setPosition(node.x + this.offset.x, node.y + this.offset.y);
        }
        else {
            toastComp = node.getComponent(ToastComponent_1.default);
        }
        if (node.parent == null)
            this.node.addChild(node, 99999);
        this.show(toastComp, text, dur);
        return toastComp;
    };
    ToastManager.prototype.show = function (toastComp, text, dur) {
        var _this = this;
        toastComp.show(text);
        this.scheduleOnce(function (_) {
            toastComp.hide(function (_) {
                _this.toastPool.put(toastComp.node);
                console.log("Toast.hide toastpool size:", _this.toastPool.size());
            });
        }, dur);
    };
    __decorate([
        property(cc.Prefab)
    ], ToastManager.prototype, "prefab", void 0);
    __decorate([
        property(cc.Vec2)
    ], ToastManager.prototype, "offset", void 0);
    ToastManager = __decorate([
        ccclass
    ], ToastManager);
    return ToastManager;
}(cc.Component));
exports.default = ToastManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx1aVxcVG9hc3RNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFHeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFakMsUUFBQSxLQUFLLEdBQWlCLElBQUksQ0FBQztBQUd0QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQXVEQztRQWpERyxZQUFNLEdBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDOztRQWdEMUIsaUJBQWlCO0lBQ3JCLENBQUM7SUEvQ0csNkJBQU0sR0FBTjtRQUNJLGFBQUssR0FBRyxJQUFJLENBQUM7SUFDakIsQ0FBQztJQUVELDRCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRXZDLENBQUM7SUFFRCxnQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsMkJBQUksR0FBSixVQUFLLElBQUksRUFBRSxHQUFPO1FBQVAsb0JBQUEsRUFBQSxPQUFPO1FBQ2QsYUFBYTtRQUNiLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUNkLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyx3QkFBYyxDQUFDLENBQUM7WUFDOUMsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO2dCQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLHdEQUF3RCxDQUFDLENBQUE7YUFDekU7WUFDRCxvQ0FBb0M7WUFDcEMsdUNBQXVDO1lBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDbkU7YUFBTTtZQUNILFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLHdCQUFjLENBQUMsQ0FBQztTQUNqRDtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDL0IsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVPLDJCQUFJLEdBQVosVUFBYSxTQUF5QixFQUFFLElBQUksRUFBRSxHQUFHO1FBQWpELGlCQVFDO1FBUEcsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQUEsQ0FBQztZQUNmLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO2dCQUNaLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7WUFDcEUsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDWCxDQUFDO0lBakREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ0g7SUFHakI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUTtJQU5ULFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0F1RGhDO0lBQUQsbUJBQUM7Q0F2REQsQUF1REMsQ0F2RHlDLEVBQUUsQ0FBQyxTQUFTLEdBdURyRDtrQkF2RG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9hc3RDb21wb25lbnQgZnJvbSBcIi4vVG9hc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVjJDaGFuZ2VBY3Rpb24gfSBmcm9tIFwiLi4vbWlzYy9Cb29zdHNBY3Rpb25cIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5leHBvcnQgdmFyIFRvYXN0OiBUb2FzdE1hbmFnZXIgPSBudWxsO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9hc3RNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHRvYXN0UG9vbDogY2MuTm9kZVBvb2w7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlZmFiOiBjYy5QcmVmYWJcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuVmVjMilcclxuICAgIG9mZnNldDogY2MuVmVjMiA9IGNjLnYyKCk7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIFRvYXN0ID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnRvYXN0UG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy50b2FzdFBvb2wuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlKHRleHQsIGR1ciA9IDIpIHtcclxuICAgICAgICAvL3Nob3cgdG9hc3QgXHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnRvYXN0UG9vbC5nZXQoKTtcclxuICAgICAgICBsZXQgdG9hc3RDb21wID0gbnVsbDtcclxuICAgICAgICBpZiAobm9kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYik7XHJcbiAgICAgICAgICAgIHRvYXN0Q29tcCA9IG5vZGUuZ2V0Q29tcG9uZW50KFRvYXN0Q29tcG9uZW50KTtcclxuICAgICAgICAgICAgaWYgKHRvYXN0Q29tcCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJUb2FzdC5tYWtlIDogVG9hc3QgUHJlZmFiIG11c3QgY29udGFpbnMgVG9hc3RDb21wb25lbnRcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBUb2FzdE1hbmFnZXIudG9hc3RQb29sLnB1dChub2RlKTtcclxuICAgICAgICAgICAgLy8gbm9kZSA9IFRvYXN0TWFuYWdlci50b2FzdFBvb2wuZ2V0KCk7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24obm9kZS54ICsgdGhpcy5vZmZzZXQueCwgbm9kZS55ICsgdGhpcy5vZmZzZXQueSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0b2FzdENvbXAgPSBub2RlLmdldENvbXBvbmVudChUb2FzdENvbXBvbmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChub2RlLnBhcmVudCA9PSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSwgOTk5OTkpO1xyXG5cclxuICAgICAgICB0aGlzLnNob3codG9hc3RDb21wLCB0ZXh0LCBkdXIpXHJcbiAgICAgICAgcmV0dXJuIHRvYXN0Q29tcDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3codG9hc3RDb21wOiBUb2FzdENvbXBvbmVudCwgdGV4dCwgZHVyKSB7XHJcbiAgICAgICAgdG9hc3RDb21wLnNob3codGV4dClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShfID0+IHtcclxuICAgICAgICAgICAgdG9hc3RDb21wLmhpZGUoXyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvYXN0UG9vbC5wdXQodG9hc3RDb21wLm5vZGUpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRvYXN0LmhpZGUgdG9hc3Rwb29sIHNpemU6XCIsIHRoaXMudG9hc3RQb29sLnNpemUoKSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgZHVyKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19