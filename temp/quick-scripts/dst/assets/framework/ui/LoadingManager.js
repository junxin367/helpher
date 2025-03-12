
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/ui/LoadingManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '48049jD6zJMmoi+cPkRhX7D', 'LoadingManager');
// framework/ui/LoadingManager.ts

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
exports.Loading = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
exports.Loading = null;
var LoadingManager = /** @class */ (function (_super) {
    __extends(LoadingManager, _super);
    function LoadingManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prefab = null;
        _this.loadingNode = null;
        _this.loadingSprite = null;
        _this.loadingText = null;
        _this.blockEventComp = null;
        _this._callback = null;
        _this._target = null;
        return _this;
        // update (dt) {}
    }
    LoadingManager.prototype.onLoad = function () {
        this.loadingNode = cc.instantiate(this.prefab);
        this.blockEventComp = this.loadingNode.getComponent(cc.BlockInputEvents);
        this.loadingNode.parent = this.node;
        this.loadingNode.zIndex = 9999;
        this.loadingSprite = this.loadingNode.getComponentInChildren(cc.Sprite);
        this.loadingText = this.loadingNode.getComponentInChildren(cc.Label);
        this.hide();
        exports.Loading = this;
    };
    LoadingManager.prototype.start = function () {
        this.loadingSprite.node.runAction(cc.rotateBy(4, 360).repeatForever());
    };
    LoadingManager.prototype.dealyClose = function () {
        this.hide();
        if (this._callback) {
            this._callback.call(this._target);
        }
    };
    LoadingManager.prototype.show = function (timeout, text, modal, callback, target) {
        if (text === void 0) { text = null; }
        if (modal === void 0) { modal = true; }
        if (callback === void 0) { callback = null; }
        if (target === void 0) { target = null; }
        if (!this.loadingNode)
            return;
        this.loadingNode.active = true;
        this.loadingNode.resumeAllActions();
        this.blockEventComp.enabled = modal;
        this._callback = callback;
        this._target = target;
        if (text)
            this.loadingText.string = text;
        if (timeout > 0) {
            this.unschedule(this.dealyClose);
            this.scheduleOnce(this.dealyClose, timeout);
        }
    };
    LoadingManager.prototype.hide = function () {
        this.loadingNode.active = false;
        this.loadingNode.pauseAllActions();
    };
    __decorate([
        property(cc.Prefab)
    ], LoadingManager.prototype, "prefab", void 0);
    LoadingManager = __decorate([
        ccclass
    ], LoadingManager);
    return LoadingManager;
}(cc.Component));
exports.default = LoadingManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx1aVxcTG9hZGluZ01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBQzFDLDhCQUE4QjtBQUM5Qiw0Q0FBNEM7QUFDNUMsNEJBQTRCO0FBQzVCLDBDQUEwQztBQUMvQixRQUFBLE9BQU8sR0FBa0IsSUFBSSxDQUFDO0FBR3pDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBNkRDO1FBMURHLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsaUJBQVcsR0FBVyxJQUFJLENBQUM7UUFDM0IsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFDL0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsb0JBQWMsR0FBdUIsSUFBSSxDQUFDO1FBRTFDLGVBQVMsR0FBTyxJQUFJLENBQUM7UUFDckIsYUFBTyxHQUFPLElBQUksQ0FBQzs7UUFpRG5CLGlCQUFpQjtJQUNyQixDQUFDO0lBakRHLCtCQUFNLEdBQU47UUFFSSxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLGVBQU8sR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsbUNBQVUsR0FBVjtRQUVJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUcsSUFBSSxDQUFDLFNBQVMsRUFDakI7WUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDcEM7SUFDTCxDQUFDO0lBRUQsNkJBQUksR0FBSixVQUFLLE9BQU8sRUFBQyxJQUFTLEVBQUMsS0FBWSxFQUFDLFFBQWUsRUFBQyxNQUFhO1FBQXBELHFCQUFBLEVBQUEsV0FBUztRQUFDLHNCQUFBLEVBQUEsWUFBWTtRQUFDLHlCQUFBLEVBQUEsZUFBZTtRQUFDLHVCQUFBLEVBQUEsYUFBYTtRQUU3RCxJQUFHLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFNO1FBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFBO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFBO1FBQ3JCLElBQUcsSUFBSTtZQUNILElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFHLE9BQU8sR0FBRyxDQUFDLEVBQ2Q7WUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsT0FBTyxDQUFDLENBQUE7U0FDN0M7SUFDTCxDQUFDO0lBRUQsNkJBQUksR0FBSjtRQUVJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUF2REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDSTtJQUhQLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0E2RGxDO0lBQUQscUJBQUM7Q0E3REQsQUE2REMsQ0E3RDJDLEVBQUUsQ0FBQyxTQUFTLEdBNkR2RDtrQkE3RG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuLy/nlLXlrZDpgq7ku7ZwdWhhbHNraWpzZW1lbkBnbWFpbC5jb21cclxuLy/mupDnoIHnvZHnq5kg5byAdnBu5YWo5bGA5qih5byP5omT5byAIGh0dHA6Ly93ZWIzaW5jdWJhdG9ycy5jb20vXHJcbi8v55S15oqlaHR0cHM6Ly90Lm1lL2dhbWVjb2RlOTk5XHJcbi8v572R6aG15a6i5pyNIGh0dHA6Ly93ZWIzaW5jdWJhdG9ycy5jb20va2VmdS5odG1sXHJcbmV4cG9ydCB2YXIgTG9hZGluZzpMb2FkaW5nTWFuYWdlciA9IG51bGw7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZWZhYjpjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIGxvYWRpbmdOb2RlOmNjLk5vZGUgPSBudWxsO1xyXG4gICAgbG9hZGluZ1Nwcml0ZTpjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgbG9hZGluZ1RleHQ6Y2MuTGFiZWwgPSBudWxsO1xyXG4gICAgYmxvY2tFdmVudENvbXA6Y2MuQmxvY2tJbnB1dEV2ZW50cyA9IG51bGw7XHJcblxyXG4gICAgX2NhbGxiYWNrOmFueSA9IG51bGw7XHJcbiAgICBfdGFyZ2V0OmFueSA9IG51bGw7XHJcbiAgICBvbkxvYWQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubG9hZGluZ05vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYik7XHJcbiAgICAgICAgdGhpcy5ibG9ja0V2ZW50Q29tcCA9IHRoaXMubG9hZGluZ05vZGUuZ2V0Q29tcG9uZW50KGNjLkJsb2NrSW5wdXRFdmVudHMpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ05vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ05vZGUuekluZGV4ID0gOTk5OTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdTcHJpdGUgPSB0aGlzLmxvYWRpbmdOb2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuU3ByaXRlKTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdUZXh0ID0gdGhpcy5sb2FkaW5nTm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICBMb2FkaW5nID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nU3ByaXRlLm5vZGUucnVuQWN0aW9uKGNjLnJvdGF0ZUJ5KDQsMzYwKS5yZXBlYXRGb3JldmVyKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlYWx5Q2xvc2UoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgIGlmKHRoaXMuX2NhbGxiYWNrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2suY2FsbCh0aGlzLl90YXJnZXQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3codGltZW91dCx0ZXh0PW51bGwsbW9kYWwgPSB0cnVlLGNhbGxiYWNrID0gbnVsbCx0YXJnZXQgPSBudWxsKVxyXG4gICAge1xyXG4gICAgICAgIGlmKCF0aGlzLmxvYWRpbmdOb2RlKSByZXR1cm5cclxuICAgICAgICB0aGlzLmxvYWRpbmdOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nTm9kZS5yZXN1bWVBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5ibG9ja0V2ZW50Q29tcC5lbmFibGVkID0gbW9kYWxcclxuICAgICAgICB0aGlzLl9jYWxsYmFjayA9IGNhbGxiYWNrIFxyXG4gICAgICAgIHRoaXMuX3RhcmdldCA9IHRhcmdldFxyXG4gICAgICAgIGlmKHRleHQpXHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ1RleHQuc3RyaW5nID0gdGV4dDtcclxuICAgICAgICBpZih0aW1lb3V0ID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmRlYWx5Q2xvc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmRlYWx5Q2xvc2UsdGltZW91dClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdOb2RlLnBhdXNlQWxsQWN0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19