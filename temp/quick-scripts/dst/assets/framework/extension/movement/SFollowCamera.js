
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/movement/SFollowCamera.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab1bdx+TzJO9rfqJ75XWBg+', 'SFollowCamera');
// framework/extension/movement/SFollowCamera.ts

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
var BoostsAction_1 = require("../../misc/BoostsAction");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
var FollowCamera = /** @class */ (function (_super) {
    __extends(FollowCamera, _super);
    function FollowCamera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.target = null;
        _this.offset = cc.Vec2.ZERO;
        _this.velocity = cc.Vec2.ZERO;
        return _this;
        // update (dt) {}
    }
    FollowCamera.prototype.onLoad = function () {
        this.camera = this.getComponent(cc.Camera);
    };
    FollowCamera.prototype.start = function () {
    };
    FollowCamera.prototype.reset = function () {
        this.node.y = 0;
        this.offset = cc.Vec2.ZERO;
    };
    FollowCamera.prototype.startFollow = function (target) {
        this.target = target;
    };
    FollowCamera.prototype.animOffset = function (offset, dur) {
        var _this = this;
        if (dur === void 0) { dur = 1.0; }
        var action = BoostsAction_1.ValueChangeAction.create(dur, this.offset.y, offset, function (value) {
            _this.offset.y = value;
        }).easing(cc.easeSineInOut());
        this.node.runAction(action);
    };
    FollowCamera.prototype.canSee = function (node) {
        var top = node.position.add(cc.v3(0, node.height / 2));
        var pos = this.camera.getWorldToCameraPoint(top, cc.Vec2.ZERO);
        if (pos.y > -cc.visibleRect.height / 2) {
            return true;
        }
        return false;
    };
    FollowCamera.prototype.update = function () {
        if (!this.target)
            return;
        // this.camera.node.y = this.target.y + this.offset.y;
        this.camera.node.x = this.target.x + this.offset.x;
        // let pos = this.node.position; 
        // let vec = this.target.node.position.sub(pos);
        // vec.normalizeSelf().mulSelf(10).subSelf(this.velocity)
        // this.velocity.addSelf(vec);
        // this.camera.node.setPosition(pos.add(this.velocity));
    };
    __decorate([
        property(cc.Node)
    ], FollowCamera.prototype, "target", void 0);
    FollowCamera = __decorate([
        ccclass,
        requireComponent(cc.Camera)
    ], FollowCamera);
    return FollowCamera;
}(cc.Component));
exports.default = FollowCamera;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXG1vdmVtZW50XFxTRm9sbG93Q2FtZXJhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUE0RDtBQUV0RCxJQUFBLEtBQXVDLEVBQUUsQ0FBQyxVQUFVLEVBQW5ELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFDLGdCQUFnQixzQkFBaUIsQ0FBQztBQUkzRDtJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQTBEQztRQXRERyxZQUFNLEdBQVcsSUFBSSxDQUFDO1FBRXRCLFlBQU0sR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQW9CL0IsY0FBUSxHQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOztRQStCaEMsaUJBQWlCO0lBQ3JCLENBQUM7SUFsREcsNkJBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELDRCQUFLLEdBQUw7SUFDQSxDQUFDO0lBRUQsNEJBQUssR0FBTDtRQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQy9CLENBQUM7SUFFRCxrQ0FBVyxHQUFYLFVBQVksTUFBTztRQUVmLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFHRCxpQ0FBVSxHQUFWLFVBQVcsTUFBYyxFQUFDLEdBQVM7UUFBbkMsaUJBS0M7UUFMeUIsb0JBQUEsRUFBQSxTQUFTO1FBQy9CLElBQUksTUFBTSxHQUFHLGdDQUFpQixDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLFVBQUEsS0FBSztZQUNoRSxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFBO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQU8sSUFBWTtRQUVmLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNuRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsRUFBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlELElBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBQztZQUNoQyxPQUFPLElBQUksQ0FBQTtTQUNkO1FBQ0QsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQztJQUVELDZCQUFNLEdBQU47UUFFSSxJQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQ3hCLHNEQUFzRDtRQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDbkQsaUNBQWlDO1FBQ2pDLGdEQUFnRDtRQUNoRCx5REFBeUQ7UUFDekQsOEJBQThCO1FBQzlCLHdEQUF3RDtJQUM1RCxDQUFDO0lBbkREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0k7SUFKTCxZQUFZO1FBRmhDLE9BQU87UUFDUCxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO09BQ1AsWUFBWSxDQTBEaEM7SUFBRCxtQkFBQztDQTFERCxBQTBEQyxDQTFEeUMsRUFBRSxDQUFDLFNBQVMsR0EwRHJEO2tCQTFEb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbHVlQ2hhbmdlQWN0aW9uIH0gZnJvbSBcIi4uLy4uL21pc2MvQm9vc3RzQWN0aW9uXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHkscmVxdWlyZUNvbXBvbmVudH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuQHJlcXVpcmVDb21wb25lbnQoY2MuQ2FtZXJhKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb2xsb3dDYW1lcmEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgY2FtZXJhOmNjLkNhbWVyYTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRhcmdldDpjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBvZmZzZXQ6IGNjLlZlYzIgPSBjYy5WZWMyLlpFUk87XHJcblxyXG4gICAgb25Mb2FkKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNhbWVyYSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUueSA9IDA7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBjYy5WZWMyLlpFUk87XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRGb2xsb3codGFyZ2V0PylcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgIH1cclxuICAgIHZlbG9jaXR5OmNjLlZlYzIgPSBjYy5WZWMyLlpFUk87XHJcblxyXG4gICAgYW5pbU9mZnNldChvZmZzZXQ6IG51bWJlcixkdXIgPSAxLjApOiBhbnkge1xyXG4gICAgICAgIGxldCBhY3Rpb24gPSBWYWx1ZUNoYW5nZUFjdGlvbi5jcmVhdGUoZHVyLHRoaXMub2Zmc2V0Lnksb2Zmc2V0LHZhbHVlPT57XHJcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0LnkgPSB2YWx1ZTtcclxuICAgICAgICB9KS5lYXNpbmcoY2MuZWFzZVNpbmVJbk91dCgpKVxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oYWN0aW9uKVxyXG4gICAgfVxyXG5cclxuICAgIGNhblNlZShub2RlOmNjLk5vZGUpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRvcCA9IG5vZGUucG9zaXRpb24uYWRkKGNjLnYzKDAsbm9kZS5oZWlnaHQvMikpXHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuY2FtZXJhLmdldFdvcmxkVG9DYW1lcmFQb2ludCh0b3AsY2MuVmVjMi5aRVJPKTtcclxuICAgICAgICBpZihwb3MueSA+IC1jYy52aXNpYmxlUmVjdC5oZWlnaHQvMil7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIXRoaXMudGFyZ2V0KSByZXR1cm47XHJcbiAgICAgICAgLy8gdGhpcy5jYW1lcmEubm9kZS55ID0gdGhpcy50YXJnZXQueSArIHRoaXMub2Zmc2V0Lnk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEubm9kZS54ID0gdGhpcy50YXJnZXQueCArIHRoaXMub2Zmc2V0Lng7XHJcbiAgICAgICAgLy8gbGV0IHBvcyA9IHRoaXMubm9kZS5wb3NpdGlvbjsgXHJcbiAgICAgICAgLy8gbGV0IHZlYyA9IHRoaXMudGFyZ2V0Lm5vZGUucG9zaXRpb24uc3ViKHBvcyk7XHJcbiAgICAgICAgLy8gdmVjLm5vcm1hbGl6ZVNlbGYoKS5tdWxTZWxmKDEwKS5zdWJTZWxmKHRoaXMudmVsb2NpdHkpXHJcbiAgICAgICAgLy8gdGhpcy52ZWxvY2l0eS5hZGRTZWxmKHZlYyk7XHJcbiAgICAgICAgLy8gdGhpcy5jYW1lcmEubm9kZS5zZXRQb3NpdGlvbihwb3MuYWRkKHRoaXMudmVsb2NpdHkpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==