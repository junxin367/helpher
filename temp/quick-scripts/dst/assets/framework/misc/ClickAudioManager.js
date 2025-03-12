
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/ClickAudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '07370C2pxVARaAQdaoGGWKa', 'ClickAudioManager');
// framework/misc/ClickAudioManager.ts

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
var ClickAudio_1 = require("./ClickAudio");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, disallowMultiple = _a.disallowMultiple, menu = _a.menu;
var ClickAudioManager = /** @class */ (function (_super) {
    __extends(ClickAudioManager, _super);
    function ClickAudioManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audio = null;
        _this.audio_down = null;
        _this.withSiblings = true;
        _this.withChildren = true;
        return _this;
        // update (dt) {}
    }
    ClickAudioManager.prototype.onLoad = function () {
        if (this.withSiblings) {
            this.make(this.node.parent);
        }
        if (this.withChildren) {
            this.make(this.node);
        }
    };
    ClickAudioManager.prototype.make = function (node) {
        node.walk(this.each.bind(this), function (_) { return 0; });
        node.on(cc.Node.EventType.CHILD_ADDED, this.onChildAdd, this);
    };
    ClickAudioManager.prototype.onChildAdd = function (node) {
        node.walk(this.each.bind(this), function (_) { return 0; });
    };
    ClickAudioManager.prototype.onDestroy = function () {
        this.node.parent.off(cc.Node.EventType.CHILD_ADDED, this.onChildAdd, this);
        this.node.off(cc.Node.EventType.CHILD_ADDED, this.onChildAdd, this);
    };
    ClickAudioManager.prototype.each = function (item) {
        //if button 
        if (!item.getComponent(cc.Button))
            return;
        var comp = item.getComponent(ClickAudio_1.default);
        if (comp == null) {
            comp = item.addComponent(ClickAudio_1.default);
            comp.audio = this.audio;
            comp.audio_down = this.audio_down;
        }
    };
    ClickAudioManager.prototype.start = function () {
    };
    __decorate([
        property(cc.AudioClip)
    ], ClickAudioManager.prototype, "audio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], ClickAudioManager.prototype, "audio_down", void 0);
    __decorate([
        property
    ], ClickAudioManager.prototype, "withSiblings", void 0);
    __decorate([
        property
    ], ClickAudioManager.prototype, "withChildren", void 0);
    ClickAudioManager = __decorate([
        ccclass,
        disallowMultiple,
        menu("gamelib/ClickAudioManager")
    ], ClickAudioManager);
    return ClickAudioManager;
}(cc.Component));
exports.default = ClickAudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxDbGlja0F1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFDaEMsSUFBQSxLQUFnRCxFQUFFLENBQUMsVUFBVSxFQUEzRCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxJQUFJLFVBQWtCLENBQUM7QUFLcEU7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUFxREM7UUFsREcsV0FBSyxHQUFpQixJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBR2hDLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLGtCQUFZLEdBQVksSUFBSSxDQUFDOztRQXdDN0IsaUJBQWlCO0lBQ3JCLENBQUM7SUF0Q0csa0NBQU0sR0FBTjtRQUNJLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0I7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEI7SUFDTCxDQUFDO0lBRUQsZ0NBQUksR0FBSixVQUFLLElBQUk7UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxFQUFELENBQUMsQ0FBQyxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELHNDQUFVLEdBQVYsVUFBVyxJQUFJO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsRUFBRCxDQUFDLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBRUQscUNBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsZ0NBQUksR0FBSixVQUFLLElBQWE7UUFDZCxZQUFZO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUFFLE9BQU87UUFDMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBVSxDQUFDLENBQUE7UUFDeEMsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2QsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQVUsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDckM7SUFDTCxDQUFDO0lBQ0QsaUNBQUssR0FBTDtJQUVBLENBQUM7SUEvQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztvREFDSTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3lEQUNTO0lBR2hDO1FBREMsUUFBUTsyREFDb0I7SUFHN0I7UUFEQyxRQUFROzJEQUNvQjtJQVpaLGlCQUFpQjtRQUhyQyxPQUFPO1FBQ1AsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQywyQkFBMkIsQ0FBQztPQUNiLGlCQUFpQixDQXFEckM7SUFBRCx3QkFBQztDQXJERCxBQXFEQyxDQXJEOEMsRUFBRSxDQUFDLFNBQVMsR0FxRDFEO2tCQXJEb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsaWNrQXVkaW8gZnJvbSBcIi4vQ2xpY2tBdWRpb1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBkaXNhbGxvd011bHRpcGxlLCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuQGRpc2FsbG93TXVsdGlwbGVcclxuQG1lbnUoXCJnYW1lbGliL0NsaWNrQXVkaW9NYW5hZ2VyXCIpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWNrQXVkaW9NYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgYXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGF1ZGlvX2Rvd246IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB3aXRoU2libGluZ3M6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgd2l0aENoaWxkcmVuOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLndpdGhTaWJsaW5ncykge1xyXG4gICAgICAgICAgICB0aGlzLm1ha2UodGhpcy5ub2RlLnBhcmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLndpdGhDaGlsZHJlbikge1xyXG4gICAgICAgICAgICB0aGlzLm1ha2UodGhpcy5ub2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZShub2RlKSB7XHJcbiAgICAgICAgbm9kZS53YWxrKHRoaXMuZWFjaC5iaW5kKHRoaXMpLCBfID0+IDApXHJcbiAgICAgICAgbm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5DSElMRF9BRERFRCwgdGhpcy5vbkNoaWxkQWRkLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoaWxkQWRkKG5vZGUpIHtcclxuICAgICAgICBub2RlLndhbGsodGhpcy5lYWNoLmJpbmQodGhpcyksIF8gPT4gMClcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuQ0hJTERfQURERUQsIHRoaXMub25DaGlsZEFkZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5DSElMRF9BRERFRCwgdGhpcy5vbkNoaWxkQWRkLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBlYWNoKGl0ZW06IGNjLk5vZGUpIHtcclxuICAgICAgICAvL2lmIGJ1dHRvbiBcclxuICAgICAgICBpZiAoIWl0ZW0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikpIHJldHVybjtcclxuICAgICAgICBsZXQgY29tcCA9IGl0ZW0uZ2V0Q29tcG9uZW50KENsaWNrQXVkaW8pXHJcbiAgICAgICAgaWYgKGNvbXAgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb21wID0gaXRlbS5hZGRDb21wb25lbnQoQ2xpY2tBdWRpbyk7XHJcbiAgICAgICAgICAgIGNvbXAuYXVkaW8gPSB0aGlzLmF1ZGlvO1xyXG4gICAgICAgICAgICBjb21wLmF1ZGlvX2Rvd24gPSB0aGlzLmF1ZGlvX2Rvd247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19