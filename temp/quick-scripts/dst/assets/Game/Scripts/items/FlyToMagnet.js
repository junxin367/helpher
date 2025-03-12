
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/items/FlyToMagnet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b62dd4Yqn9N25kPcL9wVfsH', 'FlyToMagnet');
// Game/Scripts/items/FlyToMagnet.ts

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
var MoveEngine_1 = require("../../../framework/extension/movement/MoveEngine");
var Role_1 = require("../Role");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FlyToMagnet = /** @class */ (function (_super) {
    __extends(FlyToMagnet, _super);
    function FlyToMagnet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moveEngine = null;
        return _this;
    }
    FlyToMagnet.prototype.onLoad = function () {
        this.moveEngine = this.getOrAddComponent(MoveEngine_1.default);
    };
    FlyToMagnet.prototype.onEnable = function () {
        this.moveEngine.changeBeheavior(MoveEngine_1.Behavior.Arrive);
    };
    FlyToMagnet.prototype.onDisable = function () {
        this.moveEngine.changeBeheavior(MoveEngine_1.Behavior.Simple);
    };
    FlyToMagnet.prototype.update = function () {
        var pos = Role_1.default.self.node.getPosition();
        pos.y += 100;
        this.moveEngine.target = pos;
    };
    FlyToMagnet = __decorate([
        ccclass
    ], FlyToMagnet);
    return FlyToMagnet;
}(cc.Component));
exports.default = FlyToMagnet;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcaXRlbXNcXEZseVRvTWFnbmV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtFQUF1RjtBQUN2RixnQ0FBMkI7QUFHdkIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUE7QUFFekM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUF1QkM7UUF0QkcsZ0JBQVUsR0FBZSxJQUFJLENBQUM7O0lBc0JsQyxDQUFDO0lBcEJHLDRCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBVSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxxQkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCwrQkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMscUJBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNJLElBQUksR0FBRyxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO1FBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ2pDLENBQUM7SUFuQmdCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0F1Qi9CO0lBQUQsa0JBQUM7Q0F2QkQsQUF1QkMsQ0F2QndDLEVBQUUsQ0FBQyxTQUFTLEdBdUJwRDtrQkF2Qm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92ZUVuZ2luZSwgeyBCZWhhdmlvciB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL21vdmVtZW50L01vdmVFbmdpbmVcIlxyXG5pbXBvcnQgUm9sZSBmcm9tIFwiLi4vUm9sZVwiO1xyXG5pbXBvcnQgeyBSb2xlVHlwZSB9IGZyb20gXCIuLi9Sb2xlTG9hZGVyXCI7XHJcblxyXG5sZXQgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvclxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbHlUb01hZ25ldCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBtb3ZlRW5naW5lOiBNb3ZlRW5naW5lID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlRW5naW5lID0gdGhpcy5nZXRPckFkZENvbXBvbmVudChNb3ZlRW5naW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm1vdmVFbmdpbmUuY2hhbmdlQmVoZWF2aW9yKEJlaGF2aW9yLkFycml2ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMubW92ZUVuZ2luZS5jaGFuZ2VCZWhlYXZpb3IoQmVoYXZpb3IuU2ltcGxlKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IFJvbGUuc2VsZi5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgcG9zLnkgKz0gMTAwO1xyXG4gICAgICAgIHRoaXMubW92ZUVuZ2luZS50YXJnZXQgPSBwb3M7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0iXX0=