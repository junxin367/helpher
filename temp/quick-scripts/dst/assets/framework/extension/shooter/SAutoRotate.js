
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/shooter/SAutoRotate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4f0f8BSL8VHbKF2xS0xZF6k', 'SAutoRotate');
// framework/extension/shooter/SAutoRotate.ts

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
var SGameEntity_1 = require("./SGameEntity");
var ccUtil_1 = require("../../utils/ccUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var State;
(function (State) {
    State[State["Idle"] = 0] = "Idle";
    State[State["Rotate"] = 1] = "Rotate";
})(State || (State = {}));
var SAutoRotate = /** @class */ (function (_super) {
    __extends(SAutoRotate, _super);
    function SAutoRotate() {
        // seekPlayer:boolean = true;
        // seekNearest:boolean = true;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.target = null;
        // rotateRange:number = 10;
        _this.maxTurnRate = 0.02; //  360 s  
        // private targetAngle: number = 0;
        _this.heading = cc.v2(1, 0);
        _this.isRotating = false;
        /**可以旋转到后背 */
        _this.canRotateBack = false;
        return _this;
    }
    SAutoRotate.prototype.onLoad = function () {
        if (this.node.scaleX < 0) {
            this.heading = cc.v2(-1, 0);
        }
    };
    SAutoRotate.prototype.isBackRotate = function (toTarget) {
        if (!this.canRotateBack) {
            if (this.node.scaleX < 0) {
                if (toTarget.x > 0) {
                    return true;
                }
            }
            else {
                if (toTarget.x < 0) {
                    return true;
                }
            }
        }
        return false;
    };
    SAutoRotate.prototype.rotate = function () {
        if (!cc.isValid(this.target)) {
            this.rotateToVec();
            return 0;
        }
        if (this.target) {
            if (this.target.isDead()) {
                this.rotateToVec();
                return 0;
            }
        }
        var box = ccUtil_1.default.getWorldBoundingBox(this.node);
        var targetpos = ccUtil_1.default.getWorldPosition(this.target.node);
        var toTarget = targetpos.sub(box.center);
        if (this.isBackRotate(toTarget)) {
            this.rotateToVec();
            return;
        }
        toTarget.normalizeSelf();
        return this.rotateToVec(toTarget);
    };
    SAutoRotate.prototype.signVec2 = function (v1, v2) {
        if (v1.y * v2.x > v1.x * v2.y) {
            return -1;
        }
        else {
            return 1;
        }
    };
    SAutoRotate.prototype.rotateToVec = function (toTarget) {
        if (toTarget === void 0) { toTarget = null; }
        if (toTarget == null) {
            if (this.node.scaleX < 0) {
                toTarget = cc.v2(-1, 0);
            }
            else {
                toTarget = cc.Vec2.RIGHT;
            }
        }
        // let toTarget = cc.v2(1,0);
        var sign = this.signVec2(this.heading, toTarget);
        var angle = Math.acos(this.heading.dot(toTarget));
        if (angle < 0.0001) {
            return 0;
        }
        ;
        if (isNaN(angle)) {
            angle = 0;
        }
        if (angle > this.maxTurnRate) {
            angle = this.maxTurnRate;
        }
        this.heading.rotateSelf(sign * angle);
        var a = this.heading.signAngle(cc.Vec2.RIGHT);
        this.node.angle = cc.macro.DEG * a;
        if (this.node.scaleX < 0) {
            this.node.angle += 180;
        }
        return 1;
    };
    SAutoRotate.prototype.update = function (dt) {
        this.isRotating = !!this.rotate();
    };
    SAutoRotate.inaccuracyScalar = 3;
    __decorate([
        property(SGameEntity_1.default)
    ], SAutoRotate.prototype, "target", void 0);
    __decorate([
        property
    ], SAutoRotate.prototype, "maxTurnRate", void 0);
    SAutoRotate = __decorate([
        ccclass,
        menu("shooter/AutoRotate")
    ], SAutoRotate);
    return SAutoRotate;
}(cc.Component));
exports.default = SAutoRotate;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHNob290ZXJcXFNBdXRvUm90YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF1QztBQUN2Qyw2Q0FBd0M7QUFFbEMsSUFBQSxLQUE4QixFQUFFLENBQUMsVUFBVSxFQUF6QyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxJQUFJLFVBQWtCLENBQUM7QUFFbEQsSUFBSyxLQUdKO0FBSEQsV0FBSyxLQUFLO0lBQ04saUNBQUksQ0FBQTtJQUNKLHFDQUFNLENBQUE7QUFDVixDQUFDLEVBSEksS0FBSyxLQUFMLEtBQUssUUFHVDtBQUtEO0lBQXlDLCtCQUFZO0lBQXJEO1FBRUksNkJBQTZCO1FBQzdCLDhCQUE4QjtRQUhsQyxxRUFnSEM7UUExR0csWUFBTSxHQUFlLElBQUksQ0FBQztRQUUxQiwyQkFBMkI7UUFHM0IsaUJBQVcsR0FBVyxJQUFJLENBQUMsQ0FBQyxXQUFXO1FBSXZDLG1DQUFtQztRQUVuQyxhQUFPLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFL0IsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIsYUFBYTtRQUNiLG1CQUFhLEdBQVksS0FBSyxDQUFDOztJQTBGbkMsQ0FBQztJQXZGRyw0QkFBTSxHQUFOO1FBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxRQUFpQjtRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDdEIsSUFBSSxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDaEIsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7YUFDSjtpQkFBTTtnQkFDSCxJQUFJLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNoQixPQUFPLElBQUksQ0FBQztpQkFDZjthQUNKO1NBQ0o7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7WUFDbEIsT0FBTyxDQUFDLENBQUE7U0FDWDtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO2dCQUNsQixPQUFPLENBQUMsQ0FBQzthQUNaO1NBQ0o7UUFDRCxJQUFJLEdBQUcsR0FBRyxnQkFBTSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLFNBQVMsR0FBRyxnQkFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUQsSUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtZQUNsQixPQUFPO1NBQ1Y7UUFDRCxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCw4QkFBUSxHQUFSLFVBQVMsRUFBRSxFQUFFLEVBQUU7UUFDWCxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxDQUFDLENBQUMsQ0FBQTtTQUNaO2FBQ0k7WUFDRCxPQUFPLENBQUMsQ0FBQztTQUNaO0lBQ0wsQ0FBQztJQUVELGlDQUFXLEdBQVgsVUFBWSxRQUF3QjtRQUF4Qix5QkFBQSxFQUFBLGVBQXdCO1FBQ2hDLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUNsQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDdEIsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7YUFDMUI7aUJBQU07Z0JBQ0gsUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQzVCO1NBQ0o7UUFDRCw2QkFBNkI7UUFDN0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUNqRCxJQUFJLEtBQUssR0FBRyxNQUFNLEVBQUU7WUFDaEIsT0FBTyxDQUFDLENBQUE7U0FDWDtRQUFBLENBQUM7UUFDRixJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNkLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDYjtRQUNELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDMUIsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDbkMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBR0QsNEJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDckMsQ0FBQztJQWhHTSw0QkFBZ0IsR0FBRyxDQUFDLENBQUM7SUFQNUI7UUFEQyxRQUFRLENBQUMscUJBQVUsQ0FBQzsrQ0FDSztJQUsxQjtRQURDLFFBQVE7b0RBQ2tCO0lBWFYsV0FBVztRQUYvQixPQUFPO1FBQ1AsSUFBSSxDQUFDLG9CQUFvQixDQUFDO09BQ04sV0FBVyxDQWdIL0I7SUFBRCxrQkFBQztDQWhIRCxBQWdIQyxDQWhId0MsRUFBRSxDQUFDLFNBQVMsR0FnSHBEO2tCQWhIb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lRW50aXR5IGZyb20gXCIuL1NHYW1lRW50aXR5XCI7XHJcbmltcG9ydCBjY1V0aWwgZnJvbSBcIi4uLy4uL3V0aWxzL2NjVXRpbFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgbWVudSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmVudW0gU3RhdGUge1xyXG4gICAgSWRsZSxcclxuICAgIFJvdGF0ZSxcclxufVxyXG5cclxuXHJcbkBjY2NsYXNzXHJcbkBtZW51KFwic2hvb3Rlci9BdXRvUm90YXRlXCIpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNBdXRvUm90YXRlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBzZWVrUGxheWVyOmJvb2xlYW4gPSB0cnVlO1xyXG4gICAgLy8gc2Vla05lYXJlc3Q6Ym9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQHByb3BlcnR5KEdhbWVFbnRpdHkpXHJcbiAgICB0YXJnZXQ6IEdhbWVFbnRpdHkgPSBudWxsO1xyXG5cclxuICAgIC8vIHJvdGF0ZVJhbmdlOm51bWJlciA9IDEwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbWF4VHVyblJhdGU6IG51bWJlciA9IDAuMDI7IC8vICAzNjAgcyAgXHJcblxyXG4gICAgc3RhdGljIGluYWNjdXJhY3lTY2FsYXIgPSAzO1xyXG5cclxuICAgIC8vIHByaXZhdGUgdGFyZ2V0QW5nbGU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgaGVhZGluZzogY2MuVmVjMiA9IGNjLnYyKDEsIDApO1xyXG5cclxuICAgIGlzUm90YXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKirlj6/ku6Xml4vovazliLDlkI7og4wgKi9cclxuICAgIGNhblJvdGF0ZUJhY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuc2NhbGVYIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRpbmcgPSBjYy52MigtMSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzQmFja1JvdGF0ZSh0b1RhcmdldDogY2MuVmVjMikge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5Sb3RhdGVCYWNrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuc2NhbGVYIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRvVGFyZ2V0LnggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodG9UYXJnZXQueCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcm90YXRlKCkge1xyXG4gICAgICAgIGlmICghY2MuaXNWYWxpZCh0aGlzLnRhcmdldCkpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGVUb1ZlYygpXHJcbiAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRhcmdldCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXQuaXNEZWFkKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm90YXRlVG9WZWMoKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJveCA9IGNjVXRpbC5nZXRXb3JsZEJvdW5kaW5nQm94KHRoaXMubm9kZSk7XHJcbiAgICAgICAgbGV0IHRhcmdldHBvcyA9IGNjVXRpbC5nZXRXb3JsZFBvc2l0aW9uKHRoaXMudGFyZ2V0Lm5vZGUpO1xyXG4gICAgICAgIGxldCB0b1RhcmdldCA9IHRhcmdldHBvcy5zdWIoYm94LmNlbnRlcik7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNCYWNrUm90YXRlKHRvVGFyZ2V0KSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0ZVRvVmVjKClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b1RhcmdldC5ub3JtYWxpemVTZWxmKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlVG9WZWModG9UYXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25WZWMyKHYxLCB2Mikge1xyXG4gICAgICAgIGlmICh2MS55ICogdjIueCA+IHYxLnggKiB2Mi55KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJvdGF0ZVRvVmVjKHRvVGFyZ2V0OiBjYy5WZWMyID0gbnVsbCkge1xyXG4gICAgICAgIGlmICh0b1RhcmdldCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuc2NhbGVYIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgdG9UYXJnZXQgPSBjYy52MigtMSwgMClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRvVGFyZ2V0ID0gY2MuVmVjMi5SSUdIVDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBsZXQgdG9UYXJnZXQgPSBjYy52MigxLDApO1xyXG4gICAgICAgIGxldCBzaWduID0gdGhpcy5zaWduVmVjMih0aGlzLmhlYWRpbmcsIHRvVGFyZ2V0KTtcclxuICAgICAgICBsZXQgYW5nbGUgPSBNYXRoLmFjb3ModGhpcy5oZWFkaW5nLmRvdCh0b1RhcmdldCkpXHJcbiAgICAgICAgaWYgKGFuZ2xlIDwgMC4wMDAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoaXNOYU4oYW5nbGUpKSB7XHJcbiAgICAgICAgICAgIGFuZ2xlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFuZ2xlID4gdGhpcy5tYXhUdXJuUmF0ZSkge1xyXG4gICAgICAgICAgICBhbmdsZSA9IHRoaXMubWF4VHVyblJhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGVhZGluZy5yb3RhdGVTZWxmKHNpZ24gKiBhbmdsZSk7XHJcbiAgICAgICAgbGV0IGEgPSB0aGlzLmhlYWRpbmcuc2lnbkFuZ2xlKGNjLlZlYzIuUklHSFQpXHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gY2MubWFjcm8uREVHICogYTtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLnNjYWxlWCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFuZ2xlICs9IDE4MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMuaXNSb3RhdGluZyA9ICEhdGhpcy5yb3RhdGUoKVxyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=