
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/shooter/ShootManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHNob290ZXJcXFNob290TWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBaUQ7QUFHM0MsSUFBQSxLQUE4QixFQUFFLENBQUMsVUFBVSxFQUF6QyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxJQUFJLFVBQWtCLENBQUM7QUFFbEQsSUFBSyxVQUdKO0FBSEQsV0FBSyxVQUFVO0lBQ1gsMkRBQVksQ0FBQTtJQUNaLCtDQUFNLENBQUE7QUFDVixDQUFDLEVBSEksVUFBVSxLQUFWLFVBQVUsUUFHZDtBQUlEO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBd0dDO1FBckdHLFlBQU0sR0FBYyxJQUFJLENBQUE7UUFHeEIsWUFBTSxHQUFZLElBQUksQ0FBQTtRQUt0QixjQUFRLEdBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFbEMsYUFBTyxHQUFHLEVBQUUsQ0FBQTtRQUdaLGdCQUFVLEdBQWUsVUFBVSxDQUFDLFlBQVksQ0FBQztRQUVqRCxrQkFBa0I7UUFDbEIsZ0JBQVUsR0FBYyxFQUFFLENBQUE7UUFDMUIsY0FBUSxHQUFjLEVBQUUsQ0FBQTs7SUFvRjVCLENBQUM7cUJBeEdvQixZQUFZO0lBc0I3Qiw2QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUVqQyxjQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUkscUJBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDdkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJ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R0FBRyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsRUFBRTtnQkFDeEUsWUFBWTtnQkFDWixPQUFPLEtBQUssQ0FBQzthQUNoQjtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2Y7YUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRTtZQUM3QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ2xDO1FBQ0QsaUpBQWlKO0lBRXJKLENBQUM7O0lBbkdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ0k7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDSTtJQVV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7b0RBQ1M7SUFoQmhDLFlBQVk7UUFGaEMsT0FBTztRQUNQLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztPQUNSLFlBQVksQ0F3R2hDO0lBQUQsbUJBQUM7Q0F4R0QsQUF3R0MsQ0F4R3lDLEVBQUUsQ0FBQyxTQUFTLEdBd0dyRDtrQkF4R29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9vbE1hbmFnZXIgZnJvbSBcIi4uLy4uL2NvcmUvUG9vbE1hbmFnZXJcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZW51bSBDYW5zZWVUeXBlIHtcclxuICAgIFNlbGZCb3VuZGluZyxcclxuICAgIENhbWVyYSxcclxufVxyXG5cclxuQGNjY2xhc3NcclxuQG1lbnUoXCJzaG9vdGVyL1Nob290TWFuYWdlclwiKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9vdE1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBsYXllcjogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBzdGF0aWMgaW5zdGFuY2U6IFNob290TWFuYWdlcjtcclxuICAgIGJ1bGxldFBvb2w6IFBvb2xNYW5hZ2VyO1xyXG5cclxuICAgIGhhbGZTaXplOiBjYy5TaXplID0gY2Muc2l6ZSgwLCAwKTtcclxuXHJcbiAgICBwcmVmYWJzID0ge31cclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5FbnVtKENhbnNlZVR5cGUpIH0pXHJcbiAgICBjYW5zZWVUeXBlOiBDYW5zZWVUeXBlID0gQ2Fuc2VlVHlwZS5TZWxmQm91bmRpbmc7XHJcblxyXG4gICAgLy8gYWxsQnVsbGV0cyA9IFtdXHJcbiAgICBhbGxFbmVtaWVzOiBjYy5Ob2RlW10gPSBbXVxyXG4gICAgYWxsSXRlbXM6IGNjLk5vZGVbXSA9IFtdXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW1lcmEpXHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhID0gY2MuQ2FtZXJhLm1haW47XHJcblxyXG4gICAgICAgIFNob290TWFuYWdlci5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5idWxsZXRQb29sID0gbmV3IFBvb2xNYW5hZ2VyKHRoaXMubm9kZSwgdGhpcy5vbkNyZWF0ZU9iamVjdCwgdGhpcylcclxuICAgICAgICB0aGlzLmJ1bGxldFBvb2wubmFtZSA9IFwiU2hvb3RNYW5hZ2VyXCJcclxuICAgICAgICBnLnNldEdsb2JhbEluc3RhbmNlKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmhhbGZTaXplLndpZHRoID0gY2MudmlzaWJsZVJlY3Qud2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMuaGFsZlNpemUuaGVpZ2h0ID0gY2MudmlzaWJsZVJlY3QuaGVpZ2h0IC8gMjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgdGhpcy5idWxsZXRQb29sLmRlc3Ryb3koKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBidWxsZXRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUuY2hpbGRyZW47XHJcbiAgICB9XHJcblxyXG4gICAgLy9lbmVteSBub2RlXHJcbiAgICByZW1vdmVFbmVteShlbmVteTogY2MuTm9kZSkge1xyXG4gICAgICAgIHRoaXMuYWxsRW5lbWllcy5zcGxpY2UodGhpcy5hbGxFbmVtaWVzLmluZGV4T2YoZW5lbXkpLCAxKVxyXG4gICAgfVxyXG5cclxuICAgIGFkZEVuZW15KGVuZW15OiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgdGhpcy5hbGxFbmVtaWVzLnB1c2goZW5lbXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEl0ZW0oaXRlbTogY2MuTm9kZSkge1xyXG4gICAgICAgIHRoaXMuYWxsSXRlbXMucHVzaChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVJdGVtKGl0ZW06IGNjLk5vZGUpIHtcclxuICAgICAgICB0aGlzLmFsbEl0ZW1zLnNwbGljZSh0aGlzLmFsbEl0ZW1zLmluZGV4T2YoaXRlbSksIDEpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uQ3JlYXRlT2JqZWN0KHV1aWQpIHtcclxuICAgICAgICAvL3R5cGVcclxuICAgICAgICBsZXQgcHJlZmFiID0gdGhpcy5wcmVmYWJzW3V1aWRdXHJcbiAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpXHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQnVsbGV0KGJ1bGxldFByZWZhYiwgd29ybGRwb3MpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2V0KGJ1bGxldFByZWZhYik7XHJcbiAgICAgICAgd29ybGRwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRwb3MpO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24od29ybGRwb3MpO1xyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldChwcmVmYWIpOiBjYy5Ob2RlIHtcclxuICAgICAgICB0aGlzLnByZWZhYnNbcHJlZmFiLl91dWlkXSA9IHByZWZhYlxyXG4gICAgICAgIGxldCBidWxsZXQgPSB0aGlzLmJ1bGxldFBvb2wuZ2V0KHByZWZhYi5fdXVpZClcclxuICAgICAgICByZXR1cm4gYnVsbGV0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKiogbm9kZSDlv4XpobvkuLpzaG9vdG1hbmFnZXIg55qE5a2Q6IqC54K5ICovXHJcbiAgICBjYW5TZWUobm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhbnNlZVR5cGUgPT0gQ2Fuc2VlVHlwZS5TZWxmQm91bmRpbmcpIHtcclxuICAgICAgICAgICAgbGV0IHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQm94KCk7XHJcbiAgICAgICAgICAgIGxldCBodyA9IHRoaXMubm9kZS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgIGxldCBoaCA9IHRoaXMubm9kZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICBpZiAocmVjdC54TWF4IDwgLWh3IHx8IHJlY3QueE1pbiA+IGh3IHx8IHJlY3QueU1heCA8IC1oaCB8fCByZWN0LnlNaW4gPiBoaCkge1xyXG4gICAgICAgICAgICAgICAgLy9pbnZpc2libGUgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNhbnNlZVR5cGUgPT0gQ2Fuc2VlVHlwZS5DYW1lcmEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FtZXJhLmNhblNlZShub2RlKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZXR1cm4gdGhpcy5ub2RlLmdldEJvdW5kaW5nQm94KCkuY29udGFpbnNSZWN0KHRoaXMubm9kZS5nZXRCb3VuZGluZ0JveCgpKSB8fHRoaXMubm9kZS5nZXRCb3VuZGluZ0JveCgpLmludGVyc2VjdHModGhpcy5ub2RlLmdldEJvdW5kaW5nQm94KCkpXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=