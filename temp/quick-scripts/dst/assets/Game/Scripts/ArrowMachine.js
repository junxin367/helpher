
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/ArrowMachine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2cd9nhkCtFw5Q8WNck+sNk', 'ArrowMachine');
// Game/Scripts/ArrowMachine.ts

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
var KeyToggle_1 = require("./KeyToggle");
var Arrow_1 = require("./Arrow");
var Device_1 = require("../../framework/misc/Device");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ArrowMachine = /** @class */ (function (_super) {
    __extends(ArrowMachine, _super);
    function ArrowMachine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keyActivator = null;
        _this.wood = null;
        _this.arrows = [];
        _this._activated = false;
        return _this;
    }
    ArrowMachine.prototype.onLoad = function () {
        this.arrows = this.getComponentsInChildren(Arrow_1.default);
        this.wood = this.node.getChildByName("wood");
    };
    ArrowMachine.prototype.start = function () {
        this.keyActivator.onToggleSwitched.add(this.onToggleSwitched, this);
    };
    ArrowMachine.prototype.onDestroy = function () {
        if (this.keyActivator.onToggleSwitched)
            this.keyActivator.onToggleSwitched.off(this.onToggleSwitched, this);
    };
    ArrowMachine.prototype.onToggleSwitched = function () {
        var b = this.keyActivator.isOpen;
        if (b) {
            this.activate();
        }
    };
    ArrowMachine.prototype.activate = function () {
        if (this._activated)
            return;
        this._activated = true;
        this.arrows.forEach(function (v) { return v.go(); });
        Device_1.default.playSfx("arrow_launch");
        cc.tween(this.wood).to(1.0, { opacity: 0 }).start();
    };
    __decorate([
        property({ type: KeyToggle_1.default, displayName: "触发的钥匙" })
    ], ArrowMachine.prototype, "keyActivator", void 0);
    ArrowMachine = __decorate([
        ccclass
    ], ArrowMachine);
    return ArrowMachine;
}(cc.Component));
exports.default = ArrowMachine;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcQXJyb3dNYWNoaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUNwQyxpQ0FBNEI7QUFDNUIsc0RBQWlEO0FBRzdDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFBO0FBRXpDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBMkNDO1FBeENHLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRy9CLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsWUFBTSxHQUFZLEVBQUUsQ0FBQTtRQXVCcEIsZ0JBQVUsR0FBRyxLQUFLLENBQUM7O0lBV3ZCLENBQUM7SUFoQ0csNkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGVBQUssQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQUVELDRCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDdkUsQ0FBQztJQUVELGdDQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCO1lBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUMzRSxDQUFDO0lBR0QsdUNBQWdCLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUE7UUFDaEMsSUFBSSxDQUFDLEVBQUU7WUFDSCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7U0FDbEI7SUFDTCxDQUFDO0lBSUQsK0JBQVEsR0FBUjtRQUNJLElBQUksSUFBSSxDQUFDLFVBQVU7WUFBRSxPQUFPO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFOLENBQU0sQ0FBQyxDQUFBO1FBQ2hDLGdCQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQzlCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN2RCxDQUFDO0lBdENEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLG1CQUFTLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxDQUFDO3NEQUNyQjtJQUhkLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0EyQ2hDO0lBQUQsbUJBQUM7Q0EzQ0QsQUEyQ0MsQ0EzQ3lDLEVBQUUsQ0FBQyxTQUFTLEdBMkNyRDtrQkEzQ29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgS2V5VG9nZ2xlIGZyb20gXCIuL0tleVRvZ2dsZVwiO1xyXG5pbXBvcnQgQXJyb3cgZnJvbSBcIi4vQXJyb3dcIjtcclxuaW1wb3J0IERldmljZSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL21pc2MvRGV2aWNlXCI7XHJcbmltcG9ydCB7IGV2dCB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvY29yZS9ldmVudFwiO1xyXG5cclxubGV0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3JcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJyb3dNYWNoaW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBLZXlUb2dnbGUsIGRpc3BsYXlOYW1lOiBcIuinpuWPkeeahOmSpeWMmVwiIH0pXHJcbiAgICBrZXlBY3RpdmF0b3I6IEtleVRvZ2dsZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHdvb2Q6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBhcnJvd3M6IEFycm93W10gPSBbXVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmFycm93cyA9IHRoaXMuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oQXJyb3cpO1xyXG4gICAgICAgIHRoaXMud29vZCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIndvb2RcIilcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmtleUFjdGl2YXRvci5vblRvZ2dsZVN3aXRjaGVkLmFkZCh0aGlzLm9uVG9nZ2xlU3dpdGNoZWQsIHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmtleUFjdGl2YXRvci5vblRvZ2dsZVN3aXRjaGVkKVxyXG4gICAgICAgICAgICB0aGlzLmtleUFjdGl2YXRvci5vblRvZ2dsZVN3aXRjaGVkLm9mZih0aGlzLm9uVG9nZ2xlU3dpdGNoZWQsIHRoaXMpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uVG9nZ2xlU3dpdGNoZWQoKSB7XHJcbiAgICAgICAgbGV0IGIgPSB0aGlzLmtleUFjdGl2YXRvci5pc09wZW5cclxuICAgICAgICBpZiAoYikge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfYWN0aXZhdGVkID0gZmFsc2U7XHJcblxyXG5cclxuICAgIGFjdGl2YXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmF0ZWQpIHJldHVybjtcclxuICAgICAgICB0aGlzLl9hY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYXJyb3dzLmZvckVhY2godiA9PiB2LmdvKCkpXHJcbiAgICAgICAgRGV2aWNlLnBsYXlTZngoXCJhcnJvd19sYXVuY2hcIilcclxuICAgICAgICBjYy50d2Vlbih0aGlzLndvb2QpLnRvKDEuMCwgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KClcclxuICAgIH1cclxuXHJcbn0iXX0=