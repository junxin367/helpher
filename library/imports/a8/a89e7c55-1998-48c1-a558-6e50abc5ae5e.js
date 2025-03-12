"use strict";
cc._RF.push(module, 'a89e7xVGZhIwaVYblCrxa5e', 'PrefabLoader');
// framework/ui/controller/PrefabLoader.ts

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
var Signal_1 = require("../../core/Signal");
var ccUtil_1 = require("../../utils/ccUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, executeInEditMode = _a.executeInEditMode;
var ResListEnum = cc.Enum({});
var PrefabLoader = /** @class */ (function (_super) {
    __extends(PrefabLoader, _super);
    function PrefabLoader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property({ serializable: true })
        // public _maxLevel: number = 0;
        // @property
        // get maxLevel() {
        //     if (this.assets == null) {
        //         return this._maxLevel;
        //     }
        //     return this.assets.length;
        // }
        // set maxLevel(v) {
        //     this._maxLevel = v;
        // }
        _this.prefix = "Lv";
        _this._resIndex = 1;
        _this._delegate = null;
        _this.onLevelLoaded = new Signal_1.default();
        return _this;
    }
    PrefabLoader_1 = PrefabLoader;
    Object.defineProperty(PrefabLoader.prototype, "level", {
        get: function () {
            return this._resIndex;
        },
        set: function (v) {
            // if (this._resIndex == v) return;
            this._resIndex = v;
            this._resIndex = this._resIndex < 0 ? 0 : this._resIndex;
            // if (this.maxLevel > 0) {
            // this._resIndex = this._resIndex > this.maxLevel - 1 ? this.maxLevel - 1 : this._resIndex;
            // }
            this.reloadLevel();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrefabLoader.prototype, "delegate", {
        set: function (v) {
            this._delegate = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrefabLoader.prototype, "assets", {
        get: function () {
            if (PrefabLoader_1.path_assets == null) {
                return;
            }
            var derivedClass = this["__proto__"].constructor;
            var assets = PrefabLoader_1.path_assets[derivedClass.path];
            return assets;
        },
        enumerable: false,
        configurable: true
    });
    PrefabLoader.prototype.loadLevelInstance = function (levelPrefab) {
        var node = cc.instantiate(levelPrefab);
        node.setParent(this.node);
        try {
            this.onLevelLoaded.fire(node, this._resIndex);
        }
        catch (e) {
            console.error(e);
        }
    };
    /** 一般用于测试 */
    PrefabLoader.prototype.loadPrefab = function (path) {
        var _this = this;
        this.node.destroyAllChildren();
        cc.resources.release(path);
        ccUtil_1.default.getRes(path, cc.Prefab).then(function (v) {
            _this.loadLevelInstance(v);
        });
    };
    PrefabLoader.prototype.reloadLevel = function () {
        this.node.destroyAllChildren();
        if (CC_EDITOR) {
            this.loadLevel();
        }
        else {
            this.scheduleOnce(this.loadLevel);
        }
    };
    PrefabLoader.prototype.loadLevel = function () {
        var _this = this;
        if (this.assets) {
            var levelPrefab = this.assets[this._resIndex];
            this.loadLevelInstance(levelPrefab);
        }
        else {
            var derivedClass = this["__proto__"].constructor;
            if (this._delegate) {
                var res = this._delegate.onLoadPrefab(this._resIndex, derivedClass.path);
                if (res instanceof Promise) {
                    res.then(function (v) {
                        _this.loadLevelInstance(v);
                    });
                }
                else {
                    this.loadLevelInstance(res);
                }
            }
            else {
                // if no delegate  prefab-create using prefix + index  as a path
                cc.resources.loadDir(derivedClass.path + "/" + this.prefix + (this._resIndex), cc.Prefab, function (error, res) {
                    if (error) {
                        console.error(error);
                        return;
                    }
                    console.log(res);
                    _this.loadLevelInstance(res);
                });
            }
        }
    };
    PrefabLoader.prototype.nextLevel = function () {
        this.level++;
    };
    PrefabLoader.prototype.prevLevel = function () {
        this.level--;
    };
    PrefabLoader.loadPrefabList = function (path) {
        var _this = this;
        cc.resources.loadDir(path, cc.Prefab, function (error, res) {
            _this.path_assets[path] = res;
            var array = res.map(function (item, i) {
                return { name: item.name, value: i };
            });
            //@ts-ignore
            cc.Class.Attr.setClassAttr(_this, 'level', 'enumList', array);
        });
    };
    PrefabLoader.register = function (cls, path, debug) {
        //TODO: 真机上优化
        cls.path = path;
        cc.game.on(cc.game.EVENT_ENGINE_INITED, function () {
            if (CC_EDITOR || debug) {
                //cls.loadPrefabList(path)
            }
        });
    };
    var PrefabLoader_1;
    PrefabLoader.path_assets = {};
    PrefabLoader.path = "";
    __decorate([
        property
    ], PrefabLoader.prototype, "prefix", void 0);
    __decorate([
        property
    ], PrefabLoader.prototype, "_resIndex", void 0);
    __decorate([
        property({ type: ResListEnum })
    ], PrefabLoader.prototype, "level", null);
    PrefabLoader = PrefabLoader_1 = __decorate([
        ccclass,
        executeInEditMode()
    ], PrefabLoader);
    return PrefabLoader;
}(cc.Component));
exports.default = PrefabLoader;

cc._RF.pop();