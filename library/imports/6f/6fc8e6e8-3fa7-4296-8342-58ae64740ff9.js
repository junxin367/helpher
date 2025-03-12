"use strict";
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