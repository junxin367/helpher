
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/ui/DCSprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '82b09vMdyFCOb0NEdBTtZHy', 'DCSprite');
// framework/ui/DCSprite.ts

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
var DCUI_1 = require("./DCUI");
var SpriteFrameCache_1 = require("../misc/SpriteFrameCache");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, menu = _a.menu;
var DCSprite = /** @class */ (function (_super) {
    __extends(DCSprite, _super);
    function DCSprite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DCSprite.prototype.onLoad = function () {
        this.sprite = this.getComponent(cc.Sprite);
    };
    DCSprite.prototype.refreshSpriteFrame = function (v) {
        var _this = this;
        // this.sprite.spriteFrame = v;
        var spriteframe = SpriteFrameCache_1.default.instance.getSpriteFrame(v).then(function (sf) {
            _this.sprite.spriteFrame = sf;
        }).catch(function (_) { console.log("request imageUrl error :" + v); });
    };
    DCSprite.prototype.onValueChanged = function (v) {
        this.refreshSpriteFrame(v);
    };
    DCSprite = __decorate([
        ccclass,
        menu("DCUI/DCSprite"),
        requireComponent(cc.Sprite)
    ], DCSprite);
    return DCSprite;
}(DCUI_1.default));
exports.default = DCSprite;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx1aVxcRENTcHJpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTBCO0FBQzFCLDZEQUF3RDtBQUVsRCxJQUFBLEtBQTRDLEVBQUUsQ0FBQyxVQUFVLEVBQXhELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFDLGdCQUFnQixzQkFBQSxFQUFDLElBQUksVUFBaUIsQ0FBQztBQU1oRTtJQUFzQyw0QkFBSTtJQUExQzs7SUFzQkEsQ0FBQztJQW5CRyx5QkFBTSxHQUFOO1FBRUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQscUNBQWtCLEdBQWxCLFVBQW1CLENBQUM7UUFBcEIsaUJBTUM7UUFKRywrQkFBK0I7UUFDL0IsSUFBSSxXQUFXLEdBQUcsMEJBQWdCLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFO1lBQ2pFLEtBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxDQUFDLElBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFBO0lBQzlELENBQUM7SUFFRCxpQ0FBYyxHQUFkLFVBQWUsQ0FBQztRQUVaLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBbkJnQixRQUFRO1FBSDVCLE9BQU87UUFDUCxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ3JCLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7T0FDUCxRQUFRLENBc0I1QjtJQUFELGVBQUM7Q0F0QkQsQUFzQkMsQ0F0QnFDLGNBQUksR0FzQnpDO2tCQXRCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEQ1VJIGZyb20gXCIuL0RDVUlcIjtcclxuaW1wb3J0IFNwcml0ZUZyYW1lQ2FjaGUgZnJvbSBcIi4uL21pc2MvU3ByaXRlRnJhbWVDYWNoZVwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5LHJlcXVpcmVDb21wb25lbnQsbWVudX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuXHJcbkBjY2NsYXNzXHJcbkBtZW51KFwiRENVSS9EQ1Nwcml0ZVwiKVxyXG5AcmVxdWlyZUNvbXBvbmVudChjYy5TcHJpdGUpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERDU3ByaXRlIGV4dGVuZHMgRENVSSB7XHJcblxyXG4gICAgc3ByaXRlOmNjLlNwcml0ZTtcclxuICAgIG9uTG9hZCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUgPSB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hTcHJpdGVGcmFtZSh2KVxyXG4gICAge1xyXG4gICAgICAgIC8vIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gdjtcclxuICAgICAgICBsZXQgc3ByaXRlZnJhbWUgPSBTcHJpdGVGcmFtZUNhY2hlLmluc3RhbmNlLmdldFNwcml0ZUZyYW1lKHYpLnRoZW4oc2Y9PntcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSBzZjtcclxuICAgICAgICB9KS5jYXRjaChfPT57Y29uc29sZS5sb2coXCJyZXF1ZXN0IGltYWdlVXJsIGVycm9yIDpcIiArIHYpfSlcclxuICAgIH1cclxuXHJcbiAgICBvblZhbHVlQ2hhbmdlZCh2KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFNwcml0ZUZyYW1lKHYpO1xyXG4gICAgfVxyXG4gICBcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19