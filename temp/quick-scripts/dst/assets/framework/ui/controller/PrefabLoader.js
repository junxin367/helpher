
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/ui/controller/PrefabLoader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx1aVxcY29udHJvbGxlclxcUHJlZmFiTG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUF1QztBQUN2Qyw2Q0FBd0M7QUFFbEMsSUFBQSxLQUFpRCxFQUFFLENBQUMsVUFBVSxFQUE1RCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxJQUFJLFVBQUEsRUFBRSxpQkFBaUIsdUJBQWtCLENBQUM7QUFDckUsSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQVFoQztJQUFtRCxnQ0FBWTtJQUEvRDtRQUFBLHFFQTZJQztRQXpJRyxvQ0FBb0M7UUFDcEMsZ0NBQWdDO1FBQ2hDLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsaUNBQWlDO1FBQ2pDLGlDQUFpQztRQUNqQyxRQUFRO1FBQ1IsaUNBQWlDO1FBQ2pDLElBQUk7UUFFSixvQkFBb0I7UUFDcEIsMEJBQTBCO1FBQzFCLElBQUk7UUFHRyxZQUFNLEdBQVcsSUFBSSxDQUFBO1FBRzVCLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFNZCxlQUFTLEdBQXlCLElBQUksQ0FBQztRQWV2QyxtQkFBYSxHQUFXLElBQUksZ0JBQU0sRUFBRSxDQUFDOztJQWtHekMsQ0FBQztxQkE3STZCLFlBQVk7SUF3QnRDLHNCQUFJLCtCQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQWtCRCxVQUFVLENBQUM7WUFDUCxtQ0FBbUM7WUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUE7WUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3pELDJCQUEyQjtZQUMzQiw0RkFB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USxHQUF0QixVQUF1QixHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQU07UUFDcEMsYUFBYTtRQUNiLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDcEMsSUFBSSxTQUFTLElBQUksS0FBSyxFQUFFO2dCQUNwQiwwQkFBMEI7YUFDN0I7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7O0lBM0lNLHdCQUFXLEdBQUcsRUFBRSxDQUFBO0lBQ2hCLGlCQUFJLEdBQUcsRUFBRSxDQUFDO0lBaUJqQjtRQURDLFFBQVE7Z0RBQ21CO0lBRzVCO1FBREMsUUFBUTttREFDSztJQUVkO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDOzZDQUcvQjtJQTFCeUIsWUFBWTtRQUZ6QyxPQUFPO1FBQ1AsaUJBQWlCLEVBQUU7T0FDVSxZQUFZLENBNkl6QztJQUFELG1CQUFDO0NBN0lELEFBNklDLENBN0lrRCxFQUFFLENBQUMsU0FBUyxHQTZJOUQ7a0JBN0k2QixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpZ25hbCBmcm9tIFwiLi4vLi4vY29yZS9TaWduYWxcIjtcclxuaW1wb3J0IGNjVXRpbCBmcm9tIFwiLi4vLi4vdXRpbHMvY2NVdGlsXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51LCBleGVjdXRlSW5FZGl0TW9kZSB9ID0gY2MuX2RlY29yYXRvcjtcclxuY29uc3QgUmVzTGlzdEVudW0gPSBjYy5FbnVtKHt9KTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJlZmFiTG9hZGVyRGVsZWdhdGUge1xyXG4gICAgb25Mb2FkUHJlZmFiKGx2SW5kZXgsIHBhdGgpO1xyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5AZXhlY3V0ZUluRWRpdE1vZGUoKVxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBQcmVmYWJMb2FkZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHBhdGhfYXNzZXRzID0ge31cclxuICAgIHN0YXRpYyBwYXRoID0gXCJcIjtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoeyBzZXJpYWxpemFibGU6IHRydWUgfSlcclxuICAgIC8vIHB1YmxpYyBfbWF4TGV2ZWw6IG51bWJlciA9IDA7XHJcbiAgICAvLyBAcHJvcGVydHlcclxuICAgIC8vIGdldCBtYXhMZXZlbCgpIHtcclxuICAgIC8vICAgICBpZiAodGhpcy5hc3NldHMgPT0gbnVsbCkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fbWF4TGV2ZWw7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmFzc2V0cy5sZW5ndGg7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gc2V0IG1heExldmVsKHYpIHtcclxuICAgIC8vICAgICB0aGlzLl9tYXhMZXZlbCA9IHY7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwdWJsaWMgcHJlZml4OiBzdHJpbmcgPSBcIkx2XCJcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIF9yZXNJbmRleCA9IDE7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBSZXNMaXN0RW51bSB9KVxyXG4gICAgZ2V0IGxldmVsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBfZGVsZWdhdGU6IFByZWZhYkxvYWRlckRlbGVnYXRlID0gbnVsbDtcclxuXHJcbiAgICBzZXQgZGVsZWdhdGUodjogUHJlZmFiTG9hZGVyRGVsZWdhdGUpIHtcclxuICAgICAgICB0aGlzLl9kZWxlZ2F0ZSA9IHY7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFzc2V0cygpOiBbXSB7XHJcbiAgICAgICAgaWYgKFByZWZhYkxvYWRlci5wYXRoX2Fzc2V0cyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGVyaXZlZENsYXNzID0gdGhpc1tcIl9fcHJvdG9fX1wiXS5jb25zdHJ1Y3RvclxyXG4gICAgICAgIHZhciBhc3NldHMgPSBQcmVmYWJMb2FkZXIucGF0aF9hc3NldHNbZGVyaXZlZENsYXNzLnBhdGhdO1xyXG4gICAgICAgIHJldHVybiBhc3NldHM7XHJcbiAgICB9XHJcblxyXG4gICAgb25MZXZlbExvYWRlZDogU2lnbmFsID0gbmV3IFNpZ25hbCgpO1xyXG4gICAgc2V0IGxldmVsKHYpIHtcclxuICAgICAgICAvLyBpZiAodGhpcy5fcmVzSW5kZXggPT0gdikgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuX3Jlc0luZGV4ID0gdlxyXG4gICAgICAgIHRoaXMuX3Jlc0luZGV4ID0gdGhpcy5fcmVzSW5kZXggPCAwID8gMCA6IHRoaXMuX3Jlc0luZGV4O1xyXG4gICAgICAgIC8vIGlmICh0aGlzLm1heExldmVsID4gMCkge1xyXG4gICAgICAgIC8vIHRoaXMuX3Jlc0luZGV4ID0gdGhpcy5fcmVzSW5kZXggPiB0aGlzLm1heExldmVsIC0gMSA/IHRoaXMubWF4TGV2ZWwgLSAxIDogdGhpcy5fcmVzSW5kZXg7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHRoaXMucmVsb2FkTGV2ZWwoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbG9hZExldmVsSW5zdGFuY2UobGV2ZWxQcmVmYWIpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IGNjLmluc3RhbnRpYXRlKGxldmVsUHJlZmFiKVxyXG4gICAgICAgIG5vZGUuc2V0UGFyZW50KHRoaXMubm9kZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5vbkxldmVsTG9hZGVkLmZpcmUobm9kZSwgdGhpcy5fcmVzSW5kZXgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog5LiA6Iis55So5LqO5rWL6K+VICovXHJcbiAgICBsb2FkUHJlZmFiKHBhdGgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLnJlbGVhc2UocGF0aCk7XHJcbiAgICAgICAgY2NVdGlsLmdldFJlcyhwYXRoLCBjYy5QcmVmYWIpLnRoZW4odiA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZExldmVsSW5zdGFuY2UodilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbG9hZExldmVsKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBpZiAoQ0NfRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZExldmVsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5sb2FkTGV2ZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkTGV2ZWwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXNzZXRzKSB7XHJcbiAgICAgICAgICAgIHZhciBsZXZlbFByZWZhYiA9IHRoaXMuYXNzZXRzW3RoaXMuX3Jlc0luZGV4XVxyXG4gICAgICAgICAgICB0aGlzLmxvYWRMZXZlbEluc3RhbmNlKGxldmVsUHJlZmFiKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBkZXJpdmVkQ2xhc3MgPSB0aGlzW1wiX19wcm90b19fXCJdLmNvbnN0cnVjdG9yXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kZWxlZ2F0ZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IHRoaXMuX2RlbGVnYXRlLm9uTG9hZFByZWZhYih0aGlzLl9yZXNJbmRleCwgZGVyaXZlZENsYXNzLnBhdGgpXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzIGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy50aGVuKHYgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRMZXZlbEluc3RhbmNlKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZExldmVsSW5zdGFuY2UocmVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIG5vIGRlbGVnYXRlICBwcmVmYWItY3JlYXRlIHVzaW5nIHByZWZpeCArIGluZGV4ICBhcyBhIHBhdGhcclxuICAgICAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkRGlyKGRlcml2ZWRDbGFzcy5wYXRoICsgXCIvXCIgKyB0aGlzLnByZWZpeCArICh0aGlzLl9yZXNJbmRleCksIGNjLlByZWZhYiwgKGVycm9yLCByZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRMZXZlbEluc3RhbmNlKHJlcylcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZXh0TGV2ZWwoKSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbCsrO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXZMZXZlbCgpIHtcclxuICAgICAgICB0aGlzLmxldmVsLS07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWRQcmVmYWJMaXN0KHBhdGgpIHtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZERpcihwYXRoLCBjYy5QcmVmYWIsIChlcnJvciwgcmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGF0aF9hc3NldHNbcGF0aF0gPSByZXM7XHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IHJlcy5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6IGl0ZW0ubmFtZSwgdmFsdWU6IGkgfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBjYy5DbGFzcy5BdHRyLnNldENsYXNzQXR0cih0aGlzLCAnbGV2ZWwnLCAnZW51bUxpc3QnLCBhcnJheSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlcihjbHMsIHBhdGgsIGRlYnVnPykge1xyXG4gICAgICAgIC8vVE9ETzog55yf5py65LiK5LyY5YyWXHJcbiAgICAgICAgY2xzLnBhdGggPSBwYXRoO1xyXG4gICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9FTkdJTkVfSU5JVEVELCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChDQ19FRElUT1IgfHwgZGVidWcpIHtcclxuICAgICAgICAgICAgICAgIC8vY2xzLmxvYWRQcmVmYWJMaXN0KHBhdGgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=