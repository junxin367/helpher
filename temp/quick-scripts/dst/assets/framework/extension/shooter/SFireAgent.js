
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/shooter/SFireAgent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6fc8eboP6dCloNCWK5kdA/5', 'SFireAgent');
// framework/extension/shooter/SFireAgent.ts

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
var ShootManager_1 = require("./ShootManager");
var SGameEntity_1 = require("./SGameEntity");
var PsFxPlayer_1 = require("../../misc/PsFxPlayer");
var Signal_1 = require("../../core/Signal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var DirType;
(function (DirType) {
    DirType[DirType["FixDir"] = 0] = "FixDir";
    DirType[DirType["SelfRotation"] = 1] = "SelfRotation";
    DirType[DirType["ParentRotation"] = 2] = "ParentRotation";
    DirType[DirType["Target"] = 3] = "Target";
})(DirType || (DirType = {}));
var SFireAgent = /** @class */ (function (_super) {
    __extends(SFireAgent, _super);
    function SFireAgent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dirType = DirType.SelfRotation;
        /**跟据哪个节点决定rotation */
        _this.aimTarget = null;
        _this.rotation = -90;
        _this.auto_fire = true;
        _this.paused = false;
        _this.fireInterval = 0.1;
        _this.fireFx = null;
        _this.initSpeed = 5;
        _this.host = null;
        _this.fireTimestamp = 0;
        _this.bulletDamage = 10;
        /** 一次发射多少颗子弹 */
        _this.numOfFire = 1;
        /**每发子弹亲倾斜角度 */
        _this.anglePadding = 4;
        _this.reloadTimestamp = 0;
        /**容量 0/-1 : 代表无穷 */
        _this.bullet_capcity = -1;
        _this.bullets_left = 1;
        /**自动换弹 */
        _this.auto_reload = true;
        /** reload dur */
        _this.dur_reload = 0;
        //子弹声音
        _this.ran = 1;
        _this.fireSignal = new Signal_1.default();
        _this.reloadStartSignal = new Signal_1.default();
        _this.reloadEndSignal = new Signal_1.default();
        _this.bulletCompTypeName = null;
        return _this;
        // update (dt) {}
    }
    SFireAgent.prototype.onLoad = function () {
        if (!this.fireFx) {
            this.fireFx = this.getComponent(PsFxPlayer_1.default);
            if (this.fireFx)
                this.fireFx.preload();
        }
        if (this.host == null) {
            this.host = this.getComponentInParent(SGameEntity_1.default);
        }
        this.ran = Math.ceil(Math.random() * 4);
    };
    SFireAgent.prototype.setMuzzleFlash = function (prefab, scale) {
        if (scale === void 0) { scale = 1; }
        this.fireFx.clear();
        if (typeof (prefab) == "string")
            this.fireFx.prefabPath = prefab;
        else
            this.fireFx.prefab = prefab;
        this.fireFx.scale = scale;
    };
    SFireAgent.prototype.createBullet = function () {
        if (this.bulletPrefab == null)
            return null;
        var worldpos = this.node.getParent().convertToWorldSpaceAR(this.node.getPosition());
        var bulletNode = ShootManager_1.default.instance.createBullet(this.bulletPrefab, worldpos);
        if (this.bulletCompTypeName == null) {
            var bullet = bulletNode.getComponents(cc.Component).find(function (v) { return v['fire'] != null; });
            if (bullet) {
                this.bulletCompTypeName = bullet['__proto__']['__classname__'];
            }
        }
        return bulletNode;
    };
    SFireAgent.prototype.onDoFire = function () {
        // 3/2 = 1.5 = 1
        // 0 - 1 = -0.5
        // 1 - 1 = 0.5
        // 2 - 1 =  1.5
        var ci = 0;
        this.numOfFire > 1 && (ci = Math.floor(this.numOfFire / 2));
        var bullets = [];
        for (var i = 0; i < this.numOfFire; i++) {
            var node = this.createBullet();
            if (node) {
                var bullet = node.getComponent(this.bulletCompTypeName);
                if (bullet) {
                    bullet.damage = this.bulletDamage;
                    var rot = this.rotation + this.anglePadding * (i - ci);
                    var v = cc.Vec2.RIGHT;
                    v.rotateSelf(cc.macro.RAD * rot);
                    v.mulSelf(this.initSpeed);
                    bullet.fire(v);
                    node.angle = rot;
                    bullets.push(bullet);
                    if (this.bullet_capcity > 0)
                        this.bullets_left--;
                }
            }
            else
                console.warn("[SFireAgent ] create bullet failed, check prefab nil and prefab if has[SBullet] !");
        }
        this.fireSignal.fire(bullets);
        return bullets;
    };
    SFireAgent.prototype.fire = function (rotation) {
        if (this.paused)
            return [];
        if (this.bullets_left <= 0)
            return [];
        if (this.host && !this.host.isActive) {
            return [];
        }
        if (rotation != null) {
            this.rotation = rotation;
        }
        else {
            if (this.dirType == DirType.SelfRotation) {
                this.rotation = this.node.rotation;
            }
            else if (this.dirType == DirType.Target) {
                var toTarget = ccUtil.getWorldPosition(this.aimTarget).sub(ccUtil.getWorldPosition(this.node));
                this.rotation = Math.atan2(-toTarget.y, toTarget.x) * cc.macro.DEG;
                this.node.rotation = this.rotation;
            }
            else if (this.dirType == DirType.ParentRotation) {
                this.rotation = this.node.parent.rotation - this.node.rotation;
                if (this.node.parent.scaleX < 0) {
                    this.rotation += 180;
                }
            }
        }
        if (this.fireFx) {
            this.fireFx.play();
        }
        return this.onDoFire();
    };
    SFireAgent.prototype.start = function () {
    };
    SFireAgent.prototype.fillBullets = function () {
        this.bullets_left = this.bullet_capcity;
    };
    Object.defineProperty(SFireAgent.prototype, "autoFire", {
        set: function (b) {
            this.auto_fire = b;
        },
        enumerable: false,
        configurable: true
    });
    SFireAgent.prototype.reload_succ = function () {
        if (this.bullet_capcity <= 0)
            return;
        this.reloadTimestamp = 0;
        this.bullets_left = this.bullet_capcity;
        this.reloadEndSignal.fire(this);
    };
    /** 正在reload  */
    SFireAgent.prototype.isReloading = function () {
        return this.reloadTimestamp > 0;
    };
    //手动reload 
    SFireAgent.prototype.reloadManually = function () {
        if (this.bullet_capcity <= 0)
            return;
        this.onReloadStart();
        this.reloadTimestamp = 1;
        this.scheduleOnce(this.reload_succ, this.dur_reload);
    };
    SFireAgent.prototype.onReloadStart = function () {
        this.reloadStartSignal.fire(this);
    };
    SFireAgent.prototype.update = function (dt) {
        if (this.paused)
            return;
        if (this.auto_fire) {
            this.fireTimestamp += dt;
            if (this.fireTimestamp > this.fireInterval) {
                this.fireTimestamp = 0;
                this.fire();
            }
        }
        if (this.bullets_left <= 0) {
            if (this.auto_reload) {
                if (this.reloadTimestamp == 0) {
                    this.onReloadStart();
                }
                this.reloadTimestamp += dt;
                if (this.reloadTimestamp > this.dur_reload) {
                    this.reloadTimestamp = 0;
                    this.reload_succ();
                }
            }
        }
    };
    SFireAgent.prototype.onDisable = function () {
    };
    __decorate([
        property(cc.Prefab)
    ], SFireAgent.prototype, "bulletPrefab", void 0);
    __decorate([
        property({ type: cc.Enum(DirType) })
    ], SFireAgent.prototype, "dirType", void 0);
    __decorate([
        property({ type: cc.Node, visible: function () { return this.dirType == DirType.Target; } })
    ], SFireAgent.prototype, "aimTarget", void 0);
    __decorate([
        property({ visible: function () { return this.dirType == DirType.FixDir; } })
    ], SFireAgent.prototype, "rotation", void 0);
    __decorate([
        property
    ], SFireAgent.prototype, "auto_fire", void 0);
    __decorate([
        property({ visible: function () { return this.auto_fire; } })
    ], SFireAgent.prototype, "fireInterval", void 0);
    __decorate([
        property(PsFxPlayer_1.default)
    ], SFireAgent.prototype, "fireFx", void 0);
    __decorate([
        property
    ], SFireAgent.prototype, "initSpeed", void 0);
    __decorate([
        property
    ], SFireAgent.prototype, "bulletDamage", void 0);
    __decorate([
        property
    ], SFireAgent.prototype, "anglePadding", void 0);
    SFireAgent = __decorate([
        ccclass,
        menu("shooter/FireAgent")
    ], SFireAgent);
    return SFireAgent;
}(cc.Component));
exports.default = SFireAgent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHNob290ZXJcXFNGaXJlQWdlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQTBDO0FBRTFDLDZDQUF1QztBQUN2QyxvREFBK0M7QUFDL0MsNENBQXVDO0FBR2pDLElBQUEsS0FBOEIsRUFBRSxDQUFDLFVBQVUsRUFBekMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBRWxELElBQUssT0FLSjtBQUxELFdBQUssT0FBTztJQUNSLHlDQUFNLENBQUE7SUFDTixxREFBWSxDQUFBO0lBQ1oseURBQWMsQ0FBQTtJQUNkLHlDQUFNLENBQUE7QUFDVixDQUFDLEVBTEksT0FBTyxLQUFQLE9BQU8sUUFLWDtBQVNEO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBNE5DO1FBdE5HLGFBQU8sR0FBWSxPQUFPLENBQUMsWUFBWSxDQUFDO1FBRXhDLHNCQUFzQjtRQUV0QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGNBQVEsR0FBVyxDQUFDLEVBQUUsQ0FBQztRQUd2QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFHeEIsa0JBQVksR0FBVyxHQUFHLENBQUM7UUFHM0IsWUFBTSxHQUFlLElBQUksQ0FBQztRQUcxQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLFVBQUksR0FBZSxJQUFJLENBQUM7UUFFaEIsbUJBQWEsR0FBRyxDQUFDLENBQUM7UUFHMUIsa0JBQVksR0FBVyxFQUFFLENBQUM7UUFFMUIsZ0JBQWdCO1FBQ2hCLGVBQVMsR0FBVyxDQUFDLENBQUE7UUFDckIsZUFBZTtRQUVmLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBRWpCLHFCQUFlLEdBQUcsQ0FBQyxDQUFBO1FBQzNCLG9CQUFvQjtRQUNwQixvQkFBYyxHQUFXLENBQUMsQ0FBQyxD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QyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxjQUFjLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7aURBQ2xFO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLGNBQWMsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnREFDdEQ7SUFHdkI7UUFEQyxRQUFRO2lEQUNpQjtJQUsxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxjQUFjLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO29EQUNsQztJQUczQjtRQURDLFFBQVEsQ0FBQyxvQkFBVSxDQUFDOzhDQUNLO0lBRzFCO1FBREMsUUFBUTtpREFDYTtJQU90QjtRQURDLFFBQVE7b0RBQ2lCO0lBTTFCO1FBREMsUUFBUTtvREFDZ0I7SUF4Q1IsVUFBVTtRQUY5QixPQUFPO1FBQ1AsSUFBSSxDQUFDLG1CQUFtQixDQUFDO09BQ0wsVUFBVSxDQTROOUI7SUFBRCxpQkFBQztDQTVORCxBQTROQyxDQTVOdUMsRUFBRSxDQUFDLFNBQVMsR0E0Tm5EO2tCQTVOb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaG9vdE1hbmFnZXIgZnJvbSBcIi4vU2hvb3RNYW5hZ2VyXCI7XHJcbmltcG9ydCBTQnVsbGV0IGZyb20gXCIuL1NCdWxsZXRcIjtcclxuaW1wb3J0IEdhbWVFbnRpdHkgZnJvbSBcIi4vU0dhbWVFbnRpdHlcIjtcclxuaW1wb3J0IFBzRnhQbGF5ZXIgZnJvbSBcIi4uLy4uL21pc2MvUHNGeFBsYXllclwiO1xyXG5pbXBvcnQgU2lnbmFsIGZyb20gXCIuLi8uLi9jb3JlL1NpZ25hbFwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIG1lbnUgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5lbnVtIERpclR5cGUge1xyXG4gICAgRml4RGlyLFxyXG4gICAgU2VsZlJvdGF0aW9uLFxyXG4gICAgUGFyZW50Um90YXRpb24sXHJcbiAgICBUYXJnZXRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCdWxsZXRJbnRlcmZhY2Uge1xyXG4gICAgZGFtYWdlOiBudW1iZXIsXHJcbiAgICBmaXJlKHZlbDogY2MuVmVjMiksXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbkBtZW51KFwic2hvb3Rlci9GaXJlQWdlbnRcIilcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0ZpcmVBZ2VudCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGJ1bGxldFByZWZhYjogY2MuUHJlZmFiXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRW51bShEaXJUeXBlKSB9KVxyXG4gICAgZGlyVHlwZTogRGlyVHlwZSA9IERpclR5cGUuU2VsZlJvdGF0aW9uO1xyXG5cclxuICAgIC8qKui3n+aNruWTquS4quiKgueCueWGs+WumnJvdGF0aW9uICovXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmRpclR5cGUgPT0gRGlyVHlwZS5UYXJnZXQgfSB9KVxyXG4gICAgYWltVGFyZ2V0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmRpclR5cGUgPT0gRGlyVHlwZS5GaXhEaXIgfSB9KVxyXG4gICAgcm90YXRpb246IG51bWJlciA9IC05MDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGF1dG9fZmlyZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgcGF1c2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdmlzaWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5hdXRvX2ZpcmUgfSB9KVxyXG4gICAgZmlyZUludGVydmFsOiBudW1iZXIgPSAwLjE7XHJcblxyXG4gICAgQHByb3BlcnR5KFBzRnhQbGF5ZXIpXHJcbiAgICBmaXJlRng6IFBzRnhQbGF5ZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgaW5pdFNwZWVkOiBudW1iZXIgPSA1O1xyXG5cclxuICAgIGhvc3Q6IEdhbWVFbnRpdHkgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZmlyZVRpbWVzdGFtcCA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBidWxsZXREYW1hZ2U6IG51bWJlciA9IDEwO1xyXG5cclxuICAgIC8qKiDkuIDmrKHlj5HlsITlpJrlsJHpopflrZDlvLkgKi9cclxuICAgIG51bU9mRmlyZTogbnVtYmVyID0gMVxyXG4gICAgLyoq5q+P5Y+R5a2Q5by55Lqy5YC+5pac6KeS5bqmICovXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGFuZ2xlUGFkZGluZzogbnVtYmVyID0gNDtcclxuXHJcbiAgICBwcml2YXRlIHJlbG9hZFRpbWVzdGFtcCA9IDBcclxuICAgIC8qKuWuuemHjyAwLy0xIDog5Luj6KGo5peg56m3ICovXHJcbiAgICBidWxsZXRfY2FwY2l0eTogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgYnVsbGV0c19sZWZ0OiBudW1iZXIgPSAxO1xyXG5cclxuICAgIC8qKuiHquWKqOaNouW8uSAqL1xyXG4gICAgYXV0b19yZWxvYWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKiByZWxvYWQgZHVyICovXHJcbiAgICBkdXJfcmVsb2FkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8v5a2Q5by55aOw6Z+zXHJcbiAgICByYW46IG51bWJlciA9IDFcclxuXHJcbiAgICBmaXJlU2lnbmFsOiBTaWduYWwgPSBuZXcgU2lnbmFsKCk7XHJcbiAgICByZWxvYWRTdGFydFNpZ25hbDogU2lnbmFsID0gbmV3IFNpZ25hbCgpO1xyXG4gICAgcmVsb2FkRW5kU2lnbmFsOiBTaWduYWwgPSBuZXcgU2lnbmFsKCk7XHJcblxyXG4gICAgYnVsbGV0Q29tcFR5cGVOYW1lOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmlyZUZ4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZUZ4ID0gdGhpcy5nZXRDb21wb25lbnQoUHNGeFBsYXllcik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpcmVGeClcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyZUZ4LnByZWxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaG9zdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdCA9IHRoaXMuZ2V0Q29tcG9uZW50SW5QYXJlbnQoR2FtZUVudGl0eSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yYW4gPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSo0KVxyXG4gICAgfVxyXG5cclxuICAgIHNldE11enpsZUZsYXNoKHByZWZhYjogY2MuUHJlZmFiIHwgc3RyaW5nLCBzY2FsZSA9IDEpIHtcclxuICAgICAgICB0aGlzLmZpcmVGeC5jbGVhcigpXHJcbiAgICAgICAgaWYgKHR5cGVvZiAocHJlZmFiKSA9PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICB0aGlzLmZpcmVGeC5wcmVmYWJQYXRoID0gcHJlZmFiO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5maXJlRngucHJlZmFiID0gcHJlZmFiO1xyXG4gICAgICAgIHRoaXMuZmlyZUZ4LnNjYWxlID0gc2NhbGVcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVCdWxsZXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYnVsbGV0UHJlZmFiID09IG51bGwpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCB3b3JsZHBvcyA9IHRoaXMubm9kZS5nZXRQYXJlbnQoKS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIGxldCBidWxsZXROb2RlID0gU2hvb3RNYW5hZ2VyLmluc3RhbmNlLmNyZWF0ZUJ1bGxldCh0aGlzLmJ1bGxldFByZWZhYiwgd29ybGRwb3MpXHJcbiAgICAgICAgaWYgKHRoaXMuYnVsbGV0Q29tcFR5cGVOYW1lID09IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IGJ1bGxldCA9IGJ1bGxldE5vZGUuZ2V0Q29tcG9uZW50cyhjYy5Db21wb25lbnQpLmZpbmQodiA9PiB2WydmaXJlJ10gIT0gbnVsbClcclxuICAgICAgICAgICAgaWYgKGJ1bGxldCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWxsZXRDb21wVHlwZU5hbWUgPSBidWxsZXRbJ19fcHJvdG9fXyddWydfX2NsYXNzbmFtZV9fJ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJ1bGxldE5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgb25Eb0ZpcmUoKSB7XHJcbiAgICAgICAgLy8gMy8yID0gMS41ID0gMVxyXG4gICAgICAgIC8vIDAgLSAxID0gLTAuNVxyXG4gICAgICAgIC8vIDEgLSAxID0gMC41XHJcbiAgICAgICAgLy8gMiAtIDEgPSAgMS41XHJcbiAgICAgICAgbGV0IGNpID0gMFxyXG4gICAgICAgIHRoaXMubnVtT2ZGaXJlID4gMSAmJiAoY2kgPSBNYXRoLmZsb29yKHRoaXMubnVtT2ZGaXJlIC8gMikpXHJcbiAgICAgICAgbGV0IGJ1bGxldHMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtT2ZGaXJlOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmNyZWF0ZUJ1bGxldCgpO1xyXG4gICAgICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ1bGxldCA9IG5vZGUuZ2V0Q29tcG9uZW50KHRoaXMuYnVsbGV0Q29tcFR5cGVOYW1lKSBhcyBCdWxsZXRJbnRlcmZhY2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnVsbGV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVsbGV0LmRhbWFnZSA9IHRoaXMuYnVsbGV0RGFtYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByb3QgPSB0aGlzLnJvdGF0aW9uICsgdGhpcy5hbmdsZVBhZGRpbmcgKiAoaSAtIGNpKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2ID0gY2MuVmVjMi5SSUdIVDtcclxuICAgICAgICAgICAgICAgICAgICB2LnJvdGF0ZVNlbGYoY2MubWFjcm8uUkFEICogcm90KTtcclxuICAgICAgICAgICAgICAgICAgICB2Lm11bFNlbGYodGhpcy5pbml0U3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldC5maXJlKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYW5nbGUgPSByb3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVsbGV0cy5wdXNoKGJ1bGxldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYnVsbGV0X2NhcGNpdHkgPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1bGxldHNfbGVmdC0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltTRmlyZUFnZW50IF0gY3JlYXRlIGJ1bGxldCBmYWlsZWQsIGNoZWNrIHByZWZhYiBuaWwgYW5kIHByZWZhYiBpZiBoYXNbU0J1bGxldF0gIVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5maXJlU2lnbmFsLmZpcmUoYnVsbGV0cyk7XHJcbiAgICAgICAgcmV0dXJuIGJ1bGxldHNcclxuICAgIH1cclxuXHJcbiAgICBmaXJlKHJvdGF0aW9uPyk6IFNCdWxsZXRbXSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGF1c2VkKSByZXR1cm4gW11cclxuICAgICAgICBpZiAodGhpcy5idWxsZXRzX2xlZnQgPD0gMCkgcmV0dXJuIFtdXHJcbiAgICAgICAgaWYgKHRoaXMuaG9zdCAmJiAhdGhpcy5ob3N0LmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocm90YXRpb24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyVHlwZSA9PSBEaXJUeXBlLlNlbGZSb3RhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHRoaXMubm9kZS5yb3RhdGlvbjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRpclR5cGUgPT0gRGlyVHlwZS5UYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b1RhcmdldCA9IGNjVXRpbC5nZXRXb3JsZFBvc2l0aW9uKHRoaXMuYWltVGFyZ2V0KS5zdWIoY2NVdGlsLmdldFdvcmxkUG9zaXRpb24odGhpcy5ub2RlKSlcclxuICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24gPSBNYXRoLmF0YW4yKC10b1RhcmdldC55LCB0b1RhcmdldC54KSAqIGNjLm1hY3JvLkRFRztcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5yb3RhdGlvbiA9IHRoaXMucm90YXRpb247XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXJUeXBlID09IERpclR5cGUuUGFyZW50Um90YXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24gPSB0aGlzLm5vZGUucGFyZW50LnJvdGF0aW9uIC0gdGhpcy5ub2RlLnJvdGF0aW9uO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnQuc2NhbGVYIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24gKz0gMTgwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmZpcmVGeCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcmVGeC5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLm9uRG9GaXJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZpbGxCdWxsZXRzKCkge1xyXG4gICAgICAgIHRoaXMuYnVsbGV0c19sZWZ0ID0gdGhpcy5idWxsZXRfY2FwY2l0eVxyXG4gICAgfVxyXG5cclxuICAgIHNldCBhdXRvRmlyZShiKSB7XHJcbiAgICAgICAgdGhpcy5hdXRvX2ZpcmUgPSBiO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbG9hZF9zdWNjKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmJ1bGxldF9jYXBjaXR5IDw9IDApIHJldHVybjtcclxuICAgICAgICB0aGlzLnJlbG9hZFRpbWVzdGFtcCA9IDA7XHJcbiAgICAgICAgdGhpcy5idWxsZXRzX2xlZnQgPSB0aGlzLmJ1bGxldF9jYXBjaXR5O1xyXG4gICAgICAgIHRoaXMucmVsb2FkRW5kU2lnbmFsLmZpcmUodGhpcylcclxuICAgIH1cclxuXHJcbiAgICAvKiog5q2j5ZyocmVsb2FkICAqL1xyXG4gICAgaXNSZWxvYWRpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVsb2FkVGltZXN0YW1wID4gMFxyXG4gICAgfVxyXG5cclxuICAgIC8v5omL5YqocmVsb2FkIFxyXG4gICAgcmVsb2FkTWFudWFsbHkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYnVsbGV0X2NhcGNpdHkgPD0gMCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMub25SZWxvYWRTdGFydCgpO1xyXG4gICAgICAgIHRoaXMucmVsb2FkVGltZXN0YW1wID0gMTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLnJlbG9hZF9zdWNjLCB0aGlzLmR1cl9yZWxvYWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVsb2FkU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5yZWxvYWRTdGFydFNpZ25hbC5maXJlKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGF1c2VkKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b19maXJlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZVRpbWVzdGFtcCArPSBkdDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmlyZVRpbWVzdGFtcCA+IHRoaXMuZmlyZUludGVydmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmVUaW1lc3RhbXAgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYnVsbGV0c19sZWZ0IDw9IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXV0b19yZWxvYWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlbG9hZFRpbWVzdGFtcCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblJlbG9hZFN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbG9hZFRpbWVzdGFtcCArPSBkdDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlbG9hZFRpbWVzdGFtcCA+IHRoaXMuZHVyX3JlbG9hZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVsb2FkVGltZXN0YW1wID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbG9hZF9zdWNjKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19