"use strict";
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