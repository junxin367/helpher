"use strict";
cc._RF.push(module, '162c1rUSW1Pzogn/l0WTpO6', 'ShootManager');
// framework/extension/shooter/ShootManager.ts

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
var PoolManager_1 = require("../../core/PoolManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var CanseeType;
(function (CanseeType) {
    CanseeType[CanseeType["SelfBounding"] = 0] = "SelfBounding";
    CanseeType[CanseeType["Camera"] = 1] = "Camera";
})(CanseeType || (CanseeType = {}));
var ShootManager = /** @class */ (function (_super) {
    __extends(ShootManager, _super);
    function ShootManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.player = null;
        _this.halfSize = cc.size(0, 0);
        _this.prefabs = {};
        _this.canseeType = CanseeType.SelfBounding;
        // allBullets = []
        _this.allEnemies = [];
        _this.allItems = [];
        return _this;
    }
    ShootManager_1 = ShootManager;
    ShootManager.prototype.onLoad = function () {
        if (!this.camera)
            this.camera = cc.Camera.main;
        ShootManager_1.instance = this;
        this.bulletPool = new PoolManager_1.default(this.node, this.onCreateObject, this);
        this.bulletPool.name = "ShootManager";
        g.setGlobalInstance(this);
        this.halfSize.width = cc.visibleRect.width / 2;
        this.halfSize.height = cc.visibleRect.height / 2;
    };
    ShootManager.prototype.onDestroy = function () {
        this.bulletPool.destroy();
    };
    Object.defineProperty(ShootManager.prototype, "bullets", {
        get: function () {
            return this.node.children;
        },
        enumerable: false,
        configurable: true
    });
    //enemy node
    ShootManager.prototype.removeEnemy = function (enemy) {
        this.allEnemies.splice(this.allEnemies.indexOf(enemy), 1);
    };
    ShootManager.prototype.addEnemy = function (enemy) {
        this.allEnemies.push(enemy);
    };
    ShootManager.prototype.addItem = function (item) {
        this.allItems.push(item);
    };
    ShootManager.prototype.removeItem = function (item) {
        this.allItems.splice(this.allItems.indexOf(item), 1);
    };
    ShootManager.prototype.onCreateObject = function (uuid) {
        //type
        var prefab = this.prefabs[uuid];
        var node = cc.instantiate(prefab);
        return node;
    };
    ShootManager.prototype.createBullet = function (bulletPrefab, worldpos) {
        var node = this.get(bulletPrefab);
        worldpos = this.node.convertToNodeSpaceAR(worldpos);
        node.setPosition(worldpos);
        return node;
    };
    ShootManager.prototype.get = function (prefab) {
        this.prefabs[prefab._uuid] = prefab;
        var bullet = this.bulletPool.get(prefab._uuid);
        return bullet;
    };
    ShootManager.prototype.start = function () {
    };
    /** node 必须为shootmanager 的子节点 */
    ShootManager.prototype.canSee = function (node) {
        if (this.canseeType == CanseeType.SelfBounding) {
            var rect = node.getBoundingBox();
            var hw = this.node.width / 2;
            var hh = this.node.height / 2;
            if (rect.xMax < -hw || rect.xMin > hw || rect.yMax < -hh || rect.yMin > hh) {
                //invisible 
                return false;
            }
            return true;
        }
        else if (this.canseeType == CanseeType.Camera) {
            return this.camera.canSee(node);
        }
        // return this.node.getBoundingBox().containsRect(this.node.getBoundingBox()) ||this.node.getBoundingBox().intersects(this.node.getBoundingBox())
    };
    var ShootManager_1;
    __decorate([
        property(cc.Camera)
    ], ShootManager.prototype, "camera", void 0);
    __decorate([
        property(cc.Node)
    ], ShootManager.prototype, "player", void 0);
    __decorate([
        property({ type: cc.Enum(CanseeType) })
    ], ShootManager.prototype, "canseeType", void 0);
    ShootManager = ShootManager_1 = __decorate([
        ccclass,
        menu("shooter/ShootManager")
    ], ShootManager);
    return ShootManager;
}(cc.Component));
exports.default = ShootManager;

cc._RF.pop();