
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/shooter/STargetEnemies.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '605ae73CBxEz4HS7tGfUegA', 'STargetEnemies');
// framework/extension/shooter/STargetEnemies.ts

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
var SMoveBase_1 = require("../movement/SMoveBase");
var ShootManager_1 = require("./ShootManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
var STargetEnemies = /** @class */ (function (_super) {
    __extends(STargetEnemies, _super);
    function STargetEnemies() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.targetInterval = 0.2;
        return _this;
    }
    STargetEnemies.prototype.onLoad = function () {
        this.moveEntity = this.getComponent(SMoveBase_1.default);
    };
    Object.defineProperty(STargetEnemies.prototype, "interval", {
        set: function (v) {
            this.targetInterval = v;
            this.onDisable();
            this.onEnable();
        },
        enumerable: false,
        configurable: true
    });
    STargetEnemies.prototype.random = function (length) {
        return Math.floor(Math.random() * length);
    };
    STargetEnemies.prototype.seekTarget = function () {
        if (!this.moveEntity.target || !this.moveEntity.target.activeInHierarchy) {
            var enemies = ShootManager_1.default.instance.allEnemies;
            var idx = this.random(enemies.length);
            this.moveEntity.target = enemies[idx];
        }
        // all enemies
    };
    STargetEnemies.prototype.onEnable = function () {
        this.schedule(this.seekTarget, this.targetInterval);
    };
    STargetEnemies.prototype.onDisable = function () {
        this.unschedule(this.seekTarget);
    };
    __decorate([
        property
    ], STargetEnemies.prototype, "targetInterval", void 0);
    STargetEnemies = __decorate([
        ccclass
    ], STargetEnemies);
    return STargetEnemies;
}(cc.Component));
exports.default = STargetEnemies;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHNob290ZXJcXFNUYXJnZXRFbmVtaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE2QztBQUM3QywrQ0FBMEM7QUFFcEMsSUFBQSxLQUF3QyxFQUFFLENBQUMsVUFBVSxFQUFwRCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxnQkFBZ0Isc0JBQWlCLENBQUM7QUFHNUQ7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUE2Q0M7UUExQ0csb0JBQWMsR0FBVSxHQUFHLENBQUM7O0lBMENoQyxDQUFDO0lBdkNHLCtCQUFNLEdBQU47UUFFSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxzQkFBSSxvQ0FBUTthQUFaLFVBQWEsQ0FBQztZQUVWLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFBO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFFTywrQkFBTSxHQUFkLFVBQWUsTUFBTTtRQUVqQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFFRCxtQ0FBVSxHQUFWO1FBRUksSUFBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQ3ZFO1lBQ0ksSUFBSSxPQUFPLEdBQUcsc0JBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBRS9DLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QztRQUNELGNBQWM7SUFDbEIsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFFSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBQ3ZELENBQUM7SUFFRCxrQ0FBUyxHQUFUO1FBRUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQXhDRDtRQURDLFFBQVE7MERBQ21CO0lBSFgsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQTZDbEM7SUFBRCxxQkFBQztDQTdDRCxBQTZDQyxDQTdDMkMsRUFBRSxDQUFDLFNBQVMsR0E2Q3ZEO2tCQTdDb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZlQmFzZSBmcm9tIFwiLi4vbW92ZW1lbnQvU01vdmVCYXNlXCI7XHJcbmltcG9ydCBTaG9vdE1hbmFnZXIgZnJvbSBcIi4vU2hvb3RNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHkgLHJlcXVpcmVDb21wb25lbnR9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNUYXJnZXRFbmVtaWVzIGV4dGVuZHMgY2MuQ29tcG9uZW50XHJcbntcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGFyZ2V0SW50ZXJ2YWw6bnVtYmVyID0gMC4yO1xyXG5cclxuICAgIG1vdmVFbnRpdHk6TW92ZUJhc2U7XHJcbiAgICBvbkxvYWQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubW92ZUVudGl0eSA9IHRoaXMuZ2V0Q29tcG9uZW50KE1vdmVCYXNlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaW50ZXJ2YWwodilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRhcmdldEludGVydmFsID0gdlxyXG4gICAgICAgIHRoaXMub25EaXNhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5vbkVuYWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmFuZG9tKGxlbmd0aClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVuZ3RoKVxyXG4gICAgfVxyXG5cclxuICAgIHNlZWtUYXJnZXQoKVxyXG4gICAge1xyXG4gICAgICAgIGlmKCF0aGlzLm1vdmVFbnRpdHkudGFyZ2V0IHx8ICF0aGlzLm1vdmVFbnRpdHkudGFyZ2V0LmFjdGl2ZUluSGllcmFyY2h5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGVuZW1pZXMgPSBTaG9vdE1hbmFnZXIuaW5zdGFuY2UuYWxsRW5lbWllcztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBpZHggPSB0aGlzLnJhbmRvbShlbmVtaWVzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUVudGl0eS50YXJnZXQgPSBlbmVtaWVzW2lkeF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGFsbCBlbmVtaWVzXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5zZWVrVGFyZ2V0LCB0aGlzLnRhcmdldEludGVydmFsKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuc2Vla1RhcmdldCk7XHJcbiAgICB9XHJcblxyXG59Il19