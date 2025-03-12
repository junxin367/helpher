
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Levels/SpecialLevel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6aa9eOCPdZJqYbbqXGDQ8Fm', 'SpecialLevel');
// Game/Scripts/Levels/SpecialLevel.ts

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
exports.RoleType = void 0;
var event_1 = require("../../../framework/core/event");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var Device_1 = require("../../../framework/misc/Device");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RoleType;
(function (RoleType) {
    RoleType[RoleType["Balloon"] = 0] = "Balloon";
    RoleType[RoleType["Enemy"] = 1] = "Enemy";
    RoleType[RoleType["Star"] = 2] = "Star";
    RoleType[RoleType["Box"] = 3] = "Box";
    RoleType[RoleType["Bomb"] = 4] = "Bomb";
})(RoleType = exports.RoleType || (exports.RoleType = {}));
var SpecialLevel = /** @class */ (function (_super) {
    __extends(SpecialLevel, _super);
    function SpecialLevel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._type = RoleType.Balloon;
        _this.nodes = null;
        _this.count = 0;
        _this.node_Counts = 0;
        return _this;
        // update (dt) {}
    }
    SpecialLevel_1 = SpecialLevel;
    Object.defineProperty(SpecialLevel.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    SpecialLevel.prototype.onLoad = function () {
        SpecialLevel_1.instance = this;
    };
    SpecialLevel.prototype.gameOver = function () {
        event_1.evt.off(this);
    };
    SpecialLevel.prototype.start = function () {
        if (this.type == RoleType.Enemy) {
            event_1.evt.on("Game.enemyDead", this.check_enemy, this);
        }
        else if (this.type == RoleType.Balloon) {
            event_1.evt.on("Game.boollonDes", this.check_enemy, this);
        }
        else if (this.type == RoleType.Star) {
            event_1.evt.on("Game.getstar", this.check_enemy, this);
        }
        else if (this.type == RoleType.Box) {
            return;
            // evt.on("Game.getstar", this.check_enemy, this);
        }
        else if (this.type == RoleType.Bomb) {
            console.log('sd');
            event_1.evt.on("Game.bombDes", this.check_enemy, this);
        }
        this.node_Counts = this.nodes.childrenCount;
    };
    SpecialLevel.prototype.check_enemy = function () {
        console.log('sd');
        if (!this.enabledInHierarchy)
            return;
        this.count += 1;
        if (this.node_Counts <= this.count) {
            ToastManager_1.Toast.make("任务完成");
            Device_1.default.playSfx("finish-mission");
            event_1.evt.emit("Game.win");
        }
    };
    SpecialLevel.prototype.onDestroy = function () {
        event_1.evt.off(this);
        SpecialLevel_1.instance = null;
    };
    var SpecialLevel_1;
    SpecialLevel.instance = null;
    __decorate([
        property({ type: cc.Enum(RoleType) })
    ], SpecialLevel.prototype, "_type", void 0);
    __decorate([
        property({ type: cc.Enum(RoleType) })
    ], SpecialLevel.prototype, "type", null);
    __decorate([
        property(cc.Node)
    ], SpecialLevel.prototype, "nodes", void 0);
    SpecialLevel = SpecialLevel_1 = __decorate([
        ccclass
    ], SpecialLevel);
    return SpecialLevel;
}(cc.Component));
exports.default = SpecialLevel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcTGV2ZWxzXFxTcGVjaWFsTGV2ZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHVEQUFvRDtBQUNwRCxtRUFBMkQ7QUFDM0QseURBQW9EO0FBRTlDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQVksUUFNWDtBQU5ELFdBQVksUUFBUTtJQUNoQiw2Q0FBTyxDQUFBO0lBQ1AseUNBQUssQ0FBQTtJQUNMLHVDQUFJLENBQUE7SUFDSixxQ0FBRyxDQUFBO0lBQ0gsdUNBQUksQ0FBQTtBQUNSLENBQUMsRUFOVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQU1uQjtBQUdEO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBc0VDO1FBbkVXLFdBQUssR0FBYSxRQUFRLENBQUMsT0FBTyxDQUFDO1FBWTNDLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixpQkFBVyxHQUFXLENBQUMsQ0FBQzs7UUFtRHhCLGlCQUFpQjtJQUNyQixDQUFDO3FCQXRFb0IsWUFBWTtJQU03QixzQkFBVyw4QkFBSTthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7YUFFRCxVQUFnQixLQUFlO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUM7OztPQUpBO0lBY0QsNkJBQU0sR0FBTjtRQUNJLGNBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ0ksV0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsNEJBQUssR0FBTDtRQUNJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQzdCLFdBQUcsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNwRDthQUNJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ3BDLFdBQUcsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNyRDthQUNJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQ2pDLFdBQUcsQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDbEQ7YUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUNoQyxPQUFPO1lBQ1Asa0RBQWtEO1NBQ3JEO2FBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFFakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUVqQixXQUFHLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztJQUNoRCxDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0I7WUFBRSxPQUFPO1FBQ3JDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ2hCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2hDLG9CQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25CLGdCQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUE7WUFDaEMsV0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN4QjtJQUNMLENBQUM7SUFFRCxnQ0FBUyxHQUFUO1FBQ0ksV0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNkLGNBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7O0lBL0NNLHFCQUFRLEdBQWlCLElBQUksQ0FBQTtJQWpCcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDOytDQUNLO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQzs0Q0FHckM7SUFPRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNJO0lBZkwsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXNFaEM7SUFBRCxtQkFBQztDQXRFRCxBQXNFQyxDQXRFeUMsRUFBRSxDQUFDLFNBQVMsR0FzRXJEO2tCQXRFb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBldnQgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2NvcmUvZXZlbnRcIjtcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL1RvYXN0TWFuYWdlclwiO1xyXG5pbXBvcnQgRGV2aWNlIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWlzYy9EZXZpY2VcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5leHBvcnQgZW51bSBSb2xlVHlwZSB7XHJcbiAgICBCYWxsb29uLFxyXG4gICAgRW5lbXksXHJcbiAgICBTdGFyLFxyXG4gICAgQm94LFxyXG4gICAgQm9tYixcclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BlY2lhbExldmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5FbnVtKFJvbGVUeXBlKSB9KVxyXG4gICAgcHJpdmF0ZSBfdHlwZTogUm9sZVR5cGUgPSBSb2xlVHlwZS5CYWxsb29uO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oUm9sZVR5cGUpIH0pXHJcbiAgICBwdWJsaWMgZ2V0IHR5cGUoKTogUm9sZVR5cGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogUm9sZVR5cGUpIHtcclxuICAgICAgICB0aGlzLl90eXBlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBub2RlczogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgY291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBub2RlX0NvdW50czogbnVtYmVyID0gMDtcclxuXHJcbiAgICBzdGF0aWMgaW5zdGFuY2U6IFNwZWNpYWxMZXZlbCA9IG51bGxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgU3BlY2lhbExldmVsLmluc3RhbmNlID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnYW1lT3ZlcigpIHtcclxuICAgICAgICBldnQub2ZmKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gUm9sZVR5cGUuRW5lbXkpIHtcclxuICAgICAgICAgICAgZXZ0Lm9uKFwiR2FtZS5lbmVteURlYWRcIiwgdGhpcy5jaGVja19lbmVteSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBSb2xlVHlwZS5CYWxsb29uKSB7XHJcbiAgICAgICAgICAgIGV2dC5vbihcIkdhbWUuYm9vbGxvbkRlc1wiLCB0aGlzLmNoZWNrX2VuZW15LCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IFJvbGVUeXBlLlN0YXIpIHtcclxuICAgICAgICAgICAgZXZ0Lm9uKFwiR2FtZS5nZXRzdGFyXCIsIHRoaXMuY2hlY2tfZW5lbXksIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gUm9sZVR5cGUuQm94KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gZXZ0Lm9uKFwiR2FtZS5nZXRzdGFyXCIsIHRoaXMuY2hlY2tfZW5lbXksIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gUm9sZVR5cGUuQm9tYikge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NkJylcclxuXHJcbiAgICAgICAgICAgIGV2dC5vbihcIkdhbWUuYm9tYkRlc1wiLCB0aGlzLmNoZWNrX2VuZW15LCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlX0NvdW50cyA9IHRoaXMubm9kZXMuY2hpbGRyZW5Db3VudDtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja19lbmVteSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2QnKVxyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkSW5IaWVyYXJjaHkpIHJldHVybjtcclxuICAgICAgICB0aGlzLmNvdW50ICs9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZV9Db3VudHMgPD0gdGhpcy5jb3VudCkge1xyXG4gICAgICAgICAgICBUb2FzdC5tYWtlKFwi5Lu75Yqh5a6M5oiQXCIpO1xyXG4gICAgICAgICAgICBEZXZpY2UucGxheVNmeChcImZpbmlzaC1taXNzaW9uXCIpXHJcbiAgICAgICAgICAgIGV2dC5lbWl0KFwiR2FtZS53aW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBldnQub2ZmKHRoaXMpO1xyXG4gICAgICAgIFNwZWNpYWxMZXZlbC5pbnN0YW5jZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=