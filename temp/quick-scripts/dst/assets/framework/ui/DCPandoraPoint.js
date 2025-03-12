
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/ui/DCPandoraPoint.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7213alSGlhOObvGLLyQvhtZ', 'DCPandoraPoint');
// framework/ui/DCPandoraPoint.ts

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
var PandoraPoint_1 = require("./controller/PandoraPoint");
// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, menu = _a.menu;
var DCPandoraPoint = /** @class */ (function (_super) {
    __extends(DCPandoraPoint, _super);
    function DCPandoraPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DCPandoraPoint.prototype.onLoad = function () {
        this.point = this.getComponent(PandoraPoint_1.default);
    };
    DCPandoraPoint.prototype.onValueChanged = function (v) {
        this.point.setNumber(v);
    };
    DCPandoraPoint = __decorate([
        ccclass,
        menu("DCUI/DCPandoraPoint"),
        requireComponent(PandoraPoint_1.default)
    ], DCPandoraPoint);
    return DCPandoraPoint;
}(DCUI_1.default));
exports.default = DCPandoraPoint;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx1aVxcRENQYW5kb3JhUG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTBCO0FBQzFCLDBEQUFxRDtBQUVyRCxvQkFBb0I7QUFDcEIsaUZBQWlGO0FBQ2pGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsMkZBQTJGO0FBQzNGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsMkZBQTJGO0FBQzNGLG1HQUFtRztBQUU3RixJQUFBLEtBQTZDLEVBQUUsQ0FBQyxVQUFVLEVBQXpELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFDLGdCQUFnQixzQkFBQSxFQUFFLElBQUksVUFBaUIsQ0FBQztBQUtqRTtJQUE0QyxrQ0FBSTtJQUFoRDs7SUFlQSxDQUFDO0lBWkcsK0JBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBWSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZSxDQUFDO1FBRVosSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQVhnQixjQUFjO1FBSGxDLE9BQU87UUFDUCxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDM0IsZ0JBQWdCLENBQUMsc0JBQVksQ0FBQztPQUNWLGNBQWMsQ0FlbEM7SUFBRCxxQkFBQztDQWZELEFBZUMsQ0FmMkMsY0FBSSxHQWUvQztrQkFmb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEQ1VJIGZyb20gXCIuL0RDVUlcIjtcclxuaW1wb3J0IFBhbmRvcmFQb2ludCBmcm9tIFwiLi9jb250cm9sbGVyL1BhbmRvcmFQb2ludFwiO1xyXG5cclxuLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHkscmVxdWlyZUNvbXBvbmVudCwgbWVudX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuQG1lbnUoXCJEQ1VJL0RDUGFuZG9yYVBvaW50XCIpXHJcbkByZXF1aXJlQ29tcG9uZW50KFBhbmRvcmFQb2ludClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRENQYW5kb3JhUG9pbnQgZXh0ZW5kcyBEQ1VJIHtcclxuXHJcbiAgICBwb2ludDpQYW5kb3JhUG9pbnQ7XHJcbiAgICBvbkxvYWQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucG9pbnQgPSB0aGlzLmdldENvbXBvbmVudChQYW5kb3JhUG9pbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVmFsdWVDaGFuZ2VkKHYpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5wb2ludC5zZXROdW1iZXIodik7XHJcbiAgICB9XHJcbiAgIFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19