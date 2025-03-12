
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/PoolSpawner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd13dd9reWlE1qv2Q1ip62WB', 'PoolSpawner');
// framework/misc/PoolSpawner.ts

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
exports.Spawner = void 0;
var PoolManager_1 = require("../core/PoolManager");
var ccUtil_1 = require("../utils/ccUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var Spawner = /** @class */ (function () {
    function Spawner() {
        this.spawnerName = "";
        this.template = null;
        this.prefab = null;
        this.usePrefab = true;
    }
    __decorate([
        property()
    ], Spawner.prototype, "spawnerName", void 0);
    __decorate([
        property({ type: cc.Node, visible: function () { return !this.usePrefab; } })
    ], Spawner.prototype, "template", void 0);
    __decorate([
        property({ type: cc.Prefab, visible: function () { return this.usePrefab; } })
    ], Spawner.prototype, "prefab", void 0);
    __decorate([
        property()
    ], Spawner.prototype, "usePrefab", void 0);
    Spawner = __decorate([
        ccclass("Spawner")
    ], Spawner);
    return Spawner;
}());
exports.Spawner = Spawner;
var PoolSpawner = /** @class */ (function (_super) {
    __extends(PoolSpawner, _super);
    function PoolSpawner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.poolManager = null;
        _this.target = null;
        _this.poolName = "";
        _this.spawners = [];
        _this.dynamicPrefabs = {};
        _this.dynamicPrefabs_loaded = {};
        _this._spawners = {};
        return _this;
    }
    PoolSpawner.prototype.addSpawner = function (key, prefab) {
        var spawner = this._spawners[key];
        if (spawner == null) {
            spawner = new Spawner();
            spawner.usePrefab = true;
            spawner.prefab = prefab;
            this._spawners[key] = spawner;
        }
    };
    PoolSpawner.prototype.hasSpawner = function (key) {
        return this._spawners[key] != null;
    };
    PoolSpawner.prototype.onLoad = function () {
        var _this = this;
        this.poolManager = new PoolManager_1.default(this.target || this.node, this.onCreateObject, this);
        this.poolManager.name = this.poolName;
        this.spawners.forEach(function (v) {
            _this._spawners[v.spawnerName] = v;
        });
    };
    //mark first,later load 
    PoolSpawner.prototype.preload = function (key, path) {
        this.dynamicPrefabs[key] = path;
        this.dynamicPrefabs_loaded[key] = false;
    };
    //preload prefab 
    PoolSpawner.prototype.preloadPrefabs = function () {
        var _this = this;
        var arr = [];
        var _loop_1 = function (k) {
            var v = this_1.dynamicPrefabs[k];
            var loaded = this_1.dynamicPrefabs_loaded[k];
            if (!loaded) {
                var promise = ccUtil_1.default.getRes(v, cc.Prefab).then(function (v) {
                    var spawner = new Spawner();
                    spawner.usePrefab = true;
                    spawner.prefab = v;
                    _this._spawners[k] = spawner;
                    _this.dynamicPrefabs_loaded[k] = true;
                });
                arr.push(promise);
            }
        };
        var this_1 = this;
        for (var k in this.dynamicPrefabs) {
            _loop_1(k);
        }
        return Promise.all(arr);
    };
    PoolSpawner.prototype.onDestroy = function () {
        this.poolManager.destroy();
    };
    PoolSpawner.prototype.onCreateObject = function (type) {
        var cfg = this._spawners[type];
        if (cfg == null) {
            return console.error("Cannot get node from [" + this.poolName + "] pool by " + type);
        }
        return cc.instantiate(cfg.usePrefab && cfg.prefab || cfg.template);
    };
    PoolSpawner.prototype.start = function () {
        this.preloadPrefabs();
    };
    PoolSpawner._instances = {};
    __decorate([
        property(cc.Node)
    ], PoolSpawner.prototype, "target", void 0);
    __decorate([
        property
    ], PoolSpawner.prototype, "poolName", void 0);
    __decorate([
        property([Spawner])
    ], PoolSpawner.prototype, "spawners", void 0);
    PoolSpawner = __decorate([
        ccclass,
        menu("mimgame/PoolSpawner")
    ], PoolSpawner);
    return PoolSpawner;
}(cc.Component));
exports.default = PoolSpawner;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxQb29sU3Bhd25lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLDBDQUFxQztBQUNqQyxJQUFBLEtBQThCLEVBQUUsQ0FBQyxVQUFVLEVBQXpDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBa0IsQ0FBQTtBQUUvQztJQUFBO1FBRUksZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFHekIsYUFBUSxHQUFZLElBQUksQ0FBQztRQUd6QixXQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLGNBQVMsR0FBWSxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQVZHO1FBREMsUUFBUSxFQUFFO2dEQUNjO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxnQkFBSyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDOzZDQUN6QztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sZ0JBQUssT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7MkNBQzFDO0lBR3pCO1FBREMsUUFBUSxFQUFFOzhDQUNlO0lBWGpCLE9BQU87UUFEbkIsT0FBTyxDQUFDLFNBQVMsQ0FBQztPQUNOLE9BQU8sQ0FZbkI7SUFBRCxjQUFDO0NBWkQsQUFZQyxJQUFBO0FBWlksMEJBQU87QUFnQnBCO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBbUZDO1FBbEZHLGlCQUFXLEdBQWdCLElBQUksQ0FBQztRQUVoQyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGNBQVEsR0FBVyxFQUFFLENBQUE7UUFHckIsY0FBUSxHQUFjLEVBQUUsQ0FBQTtRQUV4QixvQkFB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QUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDYixPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUE7U0FDdkY7UUFDRCxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsMkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBakVNLHNCQUFVLEdBQXFDLEVBQUUsQ0FBQTtJQWR4RDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNLO0lBR3ZCO1FBREMsUUFBUTtpREFDWTtJQUdyQjtRQURDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lEQUNJO0lBVFAsV0FBVztRQUYvQixPQUFPO1FBQ1AsSUFBSSxDQUFDLHFCQUFxQixDQUFDO09BQ1AsV0FBVyxDQW1GL0I7SUFBRCxrQkFBQztDQW5GRCxBQW1GQyxDQW5Gd0MsRUFBRSxDQUFDLFNBQVMsR0FtRnBEO2tCQW5Gb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb29sTWFuYWdlciBmcm9tIFwiLi4vY29yZS9Qb29sTWFuYWdlclwiO1xyXG5pbXBvcnQgY2NVdGlsIGZyb20gXCIuLi91dGlscy9jY1V0aWxcIjtcclxubGV0IHsgY2NjbGFzcywgcHJvcGVydHksIG1lbnUgfSA9IGNjLl9kZWNvcmF0b3JcclxuQGNjY2xhc3MoXCJTcGF3bmVyXCIpXHJcbmV4cG9ydCBjbGFzcyBTcGF3bmVyIHtcclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBzcGF3bmVyTmFtZTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB2aXNpYmxlKCkgeyByZXR1cm4gIXRoaXMudXNlUHJlZmFiIH0gfSlcclxuICAgIHRlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5QcmVmYWIsIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnVzZVByZWZhYiB9IH0pXHJcbiAgICBwcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KClcclxuICAgIHVzZVByZWZhYjogYm9vbGVhbiA9IHRydWU7XHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbkBtZW51KFwibWltZ2FtZS9Qb29sU3Bhd25lclwiKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb29sU3Bhd25lciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwb29sTWFuYWdlcjogUG9vbE1hbmFnZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0YXJnZXQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcG9vbE5hbWU6IHN0cmluZyA9IFwiXCJcclxuXHJcbiAgICBAcHJvcGVydHkoW1NwYXduZXJdKVxyXG4gICAgc3Bhd25lcnM6IFNwYXduZXJbXSA9IFtdXHJcblxyXG4gICAgZHluYW1pY1ByZWZhYnM6IHsgW2luZGV4OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG5cclxuICAgIHByaXZhdGUgZHluYW1pY1ByZWZhYnNfbG9hZGVkOiB7IFtpbmRleDogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcblxyXG4gICAgcHJpdmF0ZSBfc3Bhd25lcnM6IHsgW2luZGV4OiBzdHJpbmddOiBTcGF3bmVyIH0gPSB7fVxyXG5cclxuICAgIHN0YXRpYyBfaW5zdGFuY2VzOiB7IFtpbmRleDogc3RyaW5nXTogUG9vbFNwYXduZXIgfSA9IHt9XHJcblxyXG5cclxuICAgIGFkZFNwYXduZXIoa2V5LCBwcmVmYWI6IGNjLlByZWZhYikge1xyXG4gICAgICAgIGxldCBzcGF3bmVyID0gdGhpcy5fc3Bhd25lcnNba2V5XTtcclxuICAgICAgICBpZiAoc3Bhd25lciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHNwYXduZXIgPSBuZXcgU3Bhd25lcigpO1xyXG4gICAgICAgICAgICBzcGF3bmVyLnVzZVByZWZhYiA9IHRydWU7XHJcbiAgICAgICAgICAgIHNwYXduZXIucHJlZmFiID0gcHJlZmFiO1xyXG4gICAgICAgICAgICB0aGlzLl9zcGF3bmVyc1trZXldID0gc3Bhd25lcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFzU3Bhd25lcihrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3Bhd25lcnNba2V5XSAhPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnBvb2xNYW5hZ2VyID0gbmV3IFBvb2xNYW5hZ2VyKHRoaXMudGFyZ2V0IHx8IHRoaXMubm9kZSwgdGhpcy5vbkNyZWF0ZU9iamVjdCwgdGhpcylcclxuICAgICAgICB0aGlzLnBvb2xNYW5hZ2VyLm5hbWUgPSB0aGlzLnBvb2xOYW1lO1xyXG4gICAgICAgIHRoaXMuc3Bhd25lcnMuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fc3Bhd25lcnNbdi5zcGF3bmVyTmFtZV0gPSB2O1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy9tYXJrIGZpcnN0LGxhdGVyIGxvYWQgXHJcbiAgICBwcmVsb2FkKGtleTogc3RyaW5nIHwgbnVtYmVyLCBwYXRoOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmR5bmFtaWNQcmVmYWJzW2tleV0gPSBwYXRoO1xyXG4gICAgICAgIHRoaXMuZHluYW1pY1ByZWZhYnNfbG9hZGVkW2tleV0gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvL3ByZWxvYWQgcHJlZmFiIFxyXG4gICAgcHJlbG9hZFByZWZhYnMoKSB7XHJcbiAgICAgICAgbGV0IGFyciA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgayBpbiB0aGlzLmR5bmFtaWNQcmVmYWJzKSB7XHJcbiAgICAgICAgICAgIGxldCB2ID0gdGhpcy5keW5hbWljUHJlZmFic1trXTtcclxuICAgICAgICAgICAgbGV0IGxvYWRlZCA9IHRoaXMuZHluYW1pY1ByZWZhYnNfbG9hZGVkW2tdXHJcbiAgICAgICAgICAgIGlmICghbG9hZGVkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvbWlzZSA9IGNjVXRpbC5nZXRSZXModiwgY2MuUHJlZmFiKS50aGVuKHYgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcGF3bmVyID0gbmV3IFNwYXduZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBzcGF3bmVyLnVzZVByZWZhYiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Bhd25lci5wcmVmYWIgPSB2O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NwYXduZXJzW2tdID0gc3Bhd25lcjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmR5bmFtaWNQcmVmYWJzX2xvYWRlZFtrXSA9IHRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBhcnIucHVzaChwcm9taXNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChhcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnBvb2xNYW5hZ2VyLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNyZWF0ZU9iamVjdCh0eXBlKSB7XHJcbiAgICAgICAgbGV0IGNmZyA9IHRoaXMuX3NwYXduZXJzW3R5cGVdO1xyXG4gICAgICAgIGlmIChjZmcgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihcIkNhbm5vdCBnZXQgbm9kZSBmcm9tIFtcIiArIHRoaXMucG9vbE5hbWUgKyBcIl0gcG9vbCBieSBcIiArIHR5cGUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYy5pbnN0YW50aWF0ZShjZmcudXNlUHJlZmFiICYmIGNmZy5wcmVmYWIgfHwgY2ZnLnRlbXBsYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnByZWxvYWRQcmVmYWJzKCk7XHJcbiAgICB9XHJcbn0iXX0=