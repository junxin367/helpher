
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Target.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bd7b1tgUE5NurcrQniSYrVo', 'Target');
// Game/Scripts/Target.ts

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
var event_1 = require("../../framework/core/event");
var SkeletonBase_1 = require("./SkeletonBase");
var FSM_1 = require("../../framework/core/FSM");
var ccUtil_1 = require("../../framework/utils/ccUtil");
var Device_1 = require("../../framework/misc/Device");
var AIEnemy_1 = require("./AIEnemy");
var Role_1 = require("./Role");
var Unity_1 = require("./Common/Unity");
var Emotion;
(function (Emotion) {
    Emotion[Emotion["Normal"] = 0] = "Normal";
    Emotion[Emotion["Happy"] = 1] = "Happy";
    Emotion[Emotion["Frightened"] = 2] = "Frightened";
})(Emotion || (Emotion = {}));
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Target = /** @class */ (function (_super) {
    __extends(Target, _super);
    function Target() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //老头
        // fsm:FSM ;   
        _this.dir = -1;
        _this.cd = 0;
        _this._statusWin = false;
        _this._statusLose = false;
        _this.baseScale = 0;
        _this.shockedAnim = null;
        _this.timer = 0;
        _this.isDead = false;
        return _this;
    }
    Target.prototype.start = function () {
        event_1.evt.on("Game.beDected", this.onDetected, this);
        event_1.evt.on("Game.win", this.onWin, this);
        event_1.evt.on("Game.lose", this.onGameLose, this);
        event_1.evt.on("Game.bomb", this.goDead, this);
        event_1.evt.on("Game.catch", this.onCatched, this);
        event_1.evt.on("Game.loseTarget", this.onLoseTarget, this);
        event_1.evt.on("Game.enemyDead", this.onEnemyDead, this);
        // evt.on("Game.seeTarget", this.onSeeTarget, this)
        this.playAnim("idle");
        this.schedule(this.checkSight, 2);
        this.baseScale = Math.abs(this.node.scale);
        this.emotionState = this.addComponent(FSM_1.default);
        this.emotionState.init(this, Emotion);
        this.emotionState.enterState(Emotion.Normal);
        this.schedule(this.checkFace, 1);
        Unity_1.default.loadSkins(this.skeleton, 2);
    };
    Target.prototype.onEnable = function () {
    };
    Target.prototype.onDetected = function () {
        //被察觉
        this.shockedAnim = this.playAnim("shocked");
        this.scheduleOnce(this.checkEmotion, 4);
    };
    Target.prototype.checkEmotion = function () {
        if (AIEnemy_1.default.allEnemies.length <= 0) {
            this.stopAnim();
            this.playAnim("idle");
        }
    };
    Target.prototype.onCatched = function (t) {
        if (t == 'target') {
            // this.emotionState.changeState(Emotion.Frightened);
            this.playAnim("shocked");
        }
    };
    Target.prototype.onLoseTarget = function () {
        this.playAnim("idle");
    };
    Target.prototype.onEnemyDead = function () {
        this.stopAnim();
        this.playAnim("idle");
    };
    Target.prototype.onDestroy = function () {
        event_1.evt.off(this);
    };
    Target.prototype.onWin = function () {
        this.fadeIn('happy', 0);
        this._statusWin = true;
    };
    Target.prototype.onGameLose = function () {
        this._statusLose = true;
    };
    Target.prototype.checkSight = function () {
        if (this._statusWin || this._statusLose)
            return;
        this.timer += 2;
        if (this.timer < this.cd) {
            return;
        }
        this.timer = 0;
        //能否看到
        var pos = g.v2(ccUtil_1.default.getWorldPosition(this.node));
        pos.y += 60;
        var pos2 = pos.clone();
        pos2.x = this.dir * 250;
        var res = this._world.rayCast(pos, pos2, cc.RayCastType.Any);
        for (var k in res) {
            var r = res[k];
            var group = r.collider.node.group;
            if (group == 'role') {
                //看到主角
                this.sayHello();
                // 10s 后不在打招呼
                this.cd = 10;
                break;
            }
        }
    };
    Target.prototype.sayHello = function () {
        this.fadeIn("hello", 1);
        event_1.evt.emit("Game.hello", this);
    };
    Target.prototype.onEnter_Happy = function (state, param) {
        if (param) {
            this.fadeIn(param, 1);
        }
        else {
            this.fadeIn("happy", 1);
        }
    };
    Target.prototype.onEnter_Normal = function () {
        this.fadeIn("normal", 1);
    };
    Target.prototype.onEnter_Frightened = function () {
        this.fadeIn("frightened", 1);
    };
    Target.prototype.onUpdate_Frightened = function () {
        if (this.emotionState.timeElapsed > 2.0) {
            this.emotionState.changeState(Emotion.Normal);
        }
    };
    Target.prototype.onUpdate_Happy = function () {
        if (this.emotionState.timeElapsed > 4.0) {
            this.emotionState.changeState(Emotion.Normal);
        }
    };
    Target.prototype.goDead = function () {
        if (this.isDead)
            return;
        this.isDead = true;
        this.playAnim("shocked");
        Device_1.default.playSfx("ohoh");
        this.scheduleOnce(this.loseGame, 0.5);
    };
    Target.prototype.loseGame = function () {
        event_1.evt.emit("Game.lose");
    };
    Target.prototype.checkFace = function () {
        var role = Role_1.default.self;
        if (!role)
            return;
        if (Math.abs(role.node.y - this.node.y) > 200) {
            return;
        }
        if (role.node.x > this.node.x) {
            // 在右边
            this.node.scaleX = -1 * this.baseScale;
        }
        else {
            //左边
            this.node.scaleX = 1 * this.baseScale;
        }
    };
    __decorate([
        property
    ], Target.prototype, "dir", void 0);
    Target = __decorate([
        ccclass
    ], Target);
    return Target;
}(SkeletonBase_1.default));
exports.default = Target;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVGFyZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUFpRDtBQUNqRCwrQ0FBMEM7QUFDMUMsZ0RBQTJDO0FBQzNDLHVEQUFrRDtBQUNsRCxzREFBaUQ7QUFDakQscUNBQWdDO0FBQ2hDLCtCQUEwQjtBQUMxQix3Q0FBbUM7QUFDbkMsSUFBSyxPQUlKO0FBSkQsV0FBSyxPQUFPO0lBQ1IseUNBQU0sQ0FBQTtJQUNOLHVDQUFLLENBQUE7SUFDTCxpREFBVSxDQUFBO0FBQ2QsQ0FBQyxFQUpJLE9BQU8sS0FBUCxPQUFPLFFBSVg7QUFDRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQTtBQUV6QztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQThLQztRQTVLRyxJQUFJO1FBQ0osZUFBZTtRQUVmLFNBQUcsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUVqQixRQUFFLEdBQVcsQ0FBQyxDQUFDO1FBRWYsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFFN0IsZUFBUyxHQUFXLENBQUMsQ0FBQztRQTJCdEIsaUJBQVcsR0FBK0IsSUFBSSxDQUFDO1FBOEMvQyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBNkRsQixZQUFNLEdBQVksS0FBSyxDQUFDOztJQTRCNUIsQ0FBQztJQWhLRyxzQkFBSyxHQUFMO1FBQ0ksV0FBRyxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQyxXQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3BDLFdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFV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Q0FBQztJQUVELDBCQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUNsQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUU7WUFDM0MsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUMzQixNQUFNO1lBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUMxQzthQUFNO1lBQ0gsSUFBSTtZQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQztJQXZLRDtRQURDLFFBQVE7dUNBQ1E7SUFMQSxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBOEsxQjtJQUFELGFBQUM7Q0E5S0QsQUE4S0MsQ0E5S21DLHNCQUFZLEdBOEsvQztrQkE5S29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldnQgfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL2NvcmUvZXZlbnRcIjtcclxuaW1wb3J0IFNrZWxldG9uQmFzZSBmcm9tIFwiLi9Ta2VsZXRvbkJhc2VcIjtcclxuaW1wb3J0IEZTTSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL2NvcmUvRlNNXCI7XHJcbmltcG9ydCBjY1V0aWwgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay91dGlscy9jY1V0aWxcIjtcclxuaW1wb3J0IERldmljZSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL21pc2MvRGV2aWNlXCI7XHJcbmltcG9ydCBBSUVuZW15IGZyb20gXCIuL0FJRW5lbXlcIjtcclxuaW1wb3J0IFJvbGUgZnJvbSBcIi4vUm9sZVwiO1xyXG5pbXBvcnQgVW5pdHkgZnJvbSBcIi4vQ29tbW9uL1VuaXR5XCI7XHJcbmVudW0gRW1vdGlvbiB7XHJcbiAgICBOb3JtYWwsXHJcbiAgICBIYXBweSxcclxuICAgIEZyaWdodGVuZWRcclxufVxyXG5sZXQgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvclxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJnZXQgZXh0ZW5kcyBTa2VsZXRvbkJhc2Uge1xyXG5cclxuICAgIC8v6ICB5aS0XHJcbiAgICAvLyBmc206RlNNIDsgICBcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZGlyOiBudW1iZXIgPSAtMTtcclxuXHJcbiAgICBjZDogbnVtYmVyID0gMDtcclxuICAgIGVtb3Rpb25TdGF0ZTogRlNNO1xyXG4gICAgX3N0YXR1c1dpbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgX3N0YXR1c0xvc2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBiYXNlU2NhbGU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgZXZ0Lm9uKFwiR2FtZS5iZURlY3RlZFwiLCB0aGlzLm9uRGV0ZWN0ZWQsIHRoaXMpO1xyXG4gICAgICAgIGV2dC5vbihcIkdhbWUud2luXCIsIHRoaXMub25XaW4sIHRoaXMpXHJcbiAgICAgICAgZXZ0Lm9uKFwiR2FtZS5sb3NlXCIsIHRoaXMub25HYW1lTG9zZSwgdGhpcyk7XHJcbiAgICAgICAgZXZ0Lm9uKFwiR2FtZS5ib21iXCIsIHRoaXMuZ29EZWFkLCB0aGlzKTtcclxuICAgICAgICBldnQub24oXCJHYW1lLmNhdGNoXCIsIHRoaXMub25DYXRjaGVkLCB0aGlzKVxyXG4gICAgICAgIGV2dC5vbihcIkdhbWUubG9zZVRhcmdldFwiLCB0aGlzLm9uTG9zZVRhcmdldCwgdGhpcylcclxuICAgICAgICBldnQub24oXCJHYW1lLmVuZW15RGVhZFwiLCB0aGlzLm9uRW5lbXlEZWFkLCB0aGlzKTtcclxuICAgICAgICAvLyBldnQub24oXCJHYW1lLnNlZVRhcmdldFwiLCB0aGlzLm9uU2VlVGFyZ2V0LCB0aGlzKVxyXG4gICAgICAgIHRoaXMucGxheUFuaW0oXCJpZGxlXCIpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmNoZWNrU2lnaHQsIDIpXHJcblxyXG4gICAgICAgIHRoaXMuYmFzZVNjYWxlID0gTWF0aC5hYnModGhpcy5ub2RlLnNjYWxlKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbW90aW9uU3RhdGUgPSB0aGlzLmFkZENvbXBvbmVudChGU00pO1xyXG4gICAgICAgIHRoaXMuZW1vdGlvblN0YXRlLmluaXQodGhpcywgRW1vdGlvbilcclxuICAgICAgICB0aGlzLmVtb3Rpb25TdGF0ZS5lbnRlclN0YXRlKEVtb3Rpb24uTm9ybWFsKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5jaGVja0ZhY2UsIDEpO1xyXG5cclxuICAgICAgICBVbml0eS5sb2FkU2tpbnModGhpcy5za2VsZXRvbiwgMik7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvY2tlZEFuaW06IGRyYWdvbkJvbmVzLkFuaW1hdGlvblN0YXRlID0gbnVsbDtcclxuXHJcbiAgICBvbkRldGVjdGVkKCkge1xyXG4gICAgICAgIC8v6KKr5a+f6KeJXHJcbiAgICAgICAgdGhpcy5zaG9ja2VkQW5pbSA9IHRoaXMucGxheUFuaW0oXCJzaG9ja2VkXCIpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5jaGVja0Vtb3Rpb24sIDQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrRW1vdGlvbigpIHtcclxuICAgICAgICBpZiAoQUlFbmVteS5hbGxFbmVtaWVzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcEFuaW0oKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5QW5pbShcImlkbGVcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DYXRjaGVkKHQpIHtcclxuICAgICAgICBpZiAodCA9PSAndGFyZ2V0Jykge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmVtb3Rpb25TdGF0ZS5jaGFuZ2VTdGF0ZShFbW90aW9uLkZyaWdodGVuZWQpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlBbmltKFwic2hvY2tlZFwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb3NlVGFyZ2V0KCkge1xyXG4gICAgICAgIHRoaXMucGxheUFuaW0oXCJpZGxlXCIpXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmVteURlYWQoKSB7XHJcbiAgICAgICAgdGhpcy5zdG9wQW5pbSgpO1xyXG4gICAgICAgIHRoaXMucGxheUFuaW0oXCJpZGxlXCIpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBldnQub2ZmKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uV2luKCkge1xyXG4gICAgICAgIHRoaXMuZmFkZUluKCdoYXBweScsIDApXHJcbiAgICAgICAgdGhpcy5fc3RhdHVzV2luID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkdhbWVMb3NlKCkge1xyXG4gICAgICAgIHRoaXMuX3N0YXR1c0xvc2UgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRpbWVyOiBudW1iZXIgPSAwO1xyXG4gICAgY2hlY2tTaWdodCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhdHVzV2luIHx8IHRoaXMuX3N0YXR1c0xvc2UpIHJldHVybjtcclxuICAgICAgICB0aGlzLnRpbWVyICs9IDI7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPCB0aGlzLmNkKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICAvL+iDveWQpueci+WIsFxyXG4gICAgICAgIGxldCBwb3MgPSBnLnYyKGNjVXRpbC5nZXRXb3JsZFBvc2l0aW9uKHRoaXMubm9kZSkpXHJcbiAgICAgICAgcG9zLnkgKz0gNjA7XHJcbiAgICAgICAgbGV0IHBvczIgPSBwb3MuY2xvbmUoKVxyXG4gICAgICAgIHBvczIueCA9IHRoaXMuZGlyICogMjUwO1xyXG4gICAgICAgIGxldCByZXMgPSB0aGlzLl93b3JsZC5yYXlDYXN0KHBvcywgcG9zMiwgY2MuUmF5Q2FzdFR5cGUuQW55KVxyXG4gICAgICAgIGZvciAodmFyIGsgaW4gcmVzKSB7XHJcbiAgICAgICAgICAgIGxldCByID0gcmVzW2tdO1xyXG4gICAgICAgICAgICBsZXQgZ3JvdXAgPSByLmNvbGxpZGVyLm5vZGUuZ3JvdXA7XHJcbiAgICAgICAgICAgIGlmIChncm91cCA9PSAncm9sZScpIHtcclxuICAgICAgICAgICAgICAgIC8v55yL5Yiw5Li76KeSXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNheUhlbGxvKClcclxuICAgICAgICAgICAgICAgIC8vIDEwcyDlkI7kuI3lnKjmiZPmi5vlkbxcclxuICAgICAgICAgICAgICAgIHRoaXMuY2QgPSAxMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNheUhlbGxvKCkge1xyXG4gICAgICAgIHRoaXMuZmFkZUluKFwiaGVsbG9cIiwgMSlcclxuICAgICAgICBldnQuZW1pdChcIkdhbWUuaGVsbG9cIiwgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICBvbkVudGVyX0hhcHB5KHN0YXRlLCBwYXJhbSkge1xyXG4gICAgICAgIGlmIChwYXJhbSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mYWRlSW4ocGFyYW0sIDEpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mYWRlSW4oXCJoYXBweVwiLCAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkVudGVyX05vcm1hbCgpIHtcclxuICAgICAgICB0aGlzLmZhZGVJbihcIm5vcm1hbFwiLCAxKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW50ZXJfRnJpZ2h0ZW5lZCgpIHtcclxuICAgICAgICB0aGlzLmZhZGVJbihcImZyaWdodGVuZWRcIiwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGVfRnJpZ2h0ZW5lZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5lbW90aW9uU3RhdGUudGltZUVsYXBzZWQgPiAyLjApIHtcclxuICAgICAgICAgICAgdGhpcy5lbW90aW9uU3RhdGUuY2hhbmdlU3RhdGUoRW1vdGlvbi5Ob3JtYWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVXBkYXRlX0hhcHB5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVtb3Rpb25TdGF0ZS50aW1lRWxhcHNlZCA+IDQuMCkge1xyXG4gICAgICAgICAgICB0aGlzLmVtb3Rpb25TdGF0ZS5jaGFuZ2VTdGF0ZShFbW90aW9uLk5vcm1hbClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNEZWFkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBnb0RlYWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZWFkKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc0RlYWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGxheUFuaW0oXCJzaG9ja2VkXCIpXHJcbiAgICAgICAgRGV2aWNlLnBsYXlTZngoXCJvaG9oXCIpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5sb3NlR2FtZSwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICBsb3NlR2FtZSgpIHtcclxuICAgICAgICBldnQuZW1pdChcIkdhbWUubG9zZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0ZhY2UoKSB7XHJcbiAgICAgICAgbGV0IHJvbGUgPSBSb2xlLnNlbGZcclxuICAgICAgICBpZiAoIXJvbGUpIHJldHVybjtcclxuICAgICAgICBpZiAoTWF0aC5hYnMocm9sZS5ub2RlLnkgLSB0aGlzLm5vZGUueSkgPiAyMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocm9sZS5ub2RlLnggPiB0aGlzLm5vZGUueCkge1xyXG4gICAgICAgICAgICAvLyDlnKjlj7PovrlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xICogdGhpcy5iYXNlU2NhbGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/lt6bovrlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDEgKiB0aGlzLmJhc2VTY2FsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19