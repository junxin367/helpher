
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Common/LayerRenderToTexture.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '632eeBT909AKJLQqhX9Jmtg', 'LayerRenderToTexture');
// Game/Scripts/Common/LayerRenderToTexture.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LayerRenderToTexutre = /** @class */ (function (_super) {
    __extends(LayerRenderToTexutre, _super);
    function LayerRenderToTexutre() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.display = null;
        return _this;
    }
    LayerRenderToTexutre.prototype.onLoad = function () {
        var texture = new cc.RenderTexture();
        texture.initWithSize(cc.winSize.width, cc.winSize.height);
        this.display.node.width = cc.winSize.width;
        this.display.node.height = cc.winSize.height;
        var spriteFrame = new cc.SpriteFrame();
        spriteFrame.setTexture(texture);
        this.camera.targetTexture = texture;
        this.display.spriteFrame = spriteFrame;
        this.display.node.scaleY = -1;
    };
    __decorate([
        property(cc.Camera)
    ], LayerRenderToTexutre.prototype, "camera", void 0);
    __decorate([
        property(cc.Sprite)
    ], LayerRenderToTexutre.prototype, "display", void 0);
    LayerRenderToTexutre = __decorate([
        ccclass
    ], LayerRenderToTexutre);
    return LayerRenderToTexutre;
}(cc.Component));
exports.default = LayerRenderToTexutre;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcQ29tbW9uXFxMYXllclJlbmRlclRvVGV4dHVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFrRCx3Q0FBWTtJQUE5RDtRQUFBLHFFQXFCQztRQWxCRyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLGFBQU8sR0FBYyxJQUFJLENBQUM7O0lBZTlCLENBQUM7SUFaRyxxQ0FBTSxHQUFOO1FBQ0ksSUFBTSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDN0MsSUFBTSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBaEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0RBQ0s7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDTTtJQU5ULG9CQUFvQjtRQUR4QyxPQUFPO09BQ2Esb0JBQW9CLENBcUJ4QztJQUFELDJCQUFDO0NBckJELEFBcUJDLENBckJpRCxFQUFFLENBQUMsU0FBUyxHQXFCN0Q7a0JBckJvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXllclJlbmRlclRvVGV4dXRyZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgZGlzcGxheTogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgY2MuUmVuZGVyVGV4dHVyZSgpO1xyXG4gICAgICAgIHRleHR1cmUuaW5pdFdpdGhTaXplKGNjLndpblNpemUud2lkdGgsIGNjLndpblNpemUuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmRpc3BsYXkubm9kZS53aWR0aCA9IGNjLndpblNpemUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5Lm5vZGUuaGVpZ2h0ID0gY2Mud2luU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUoKTtcclxuICAgICAgICBzcHJpdGVGcmFtZS5zZXRUZXh0dXJlKHRleHR1cmUpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnRhcmdldFRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheS5ub2RlLnNjYWxlWSA9IC0xO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=