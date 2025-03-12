
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/core/PoolManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '556f8ibqJNPUI2mQ/u6qxBX', 'PoolManager');
// framework/core/PoolManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Signal_1 = require("./Signal");
var PoolManager = /** @class */ (function () {
    function PoolManager(root, onCreateObject, target) {
        this.nodePool = {};
        this.nodes = {};
        this.managed = false;
        this.aliveObjects = [];
        this.onRecycleSignal = new Signal_1.default();
        this._id = '0';
        this._autoRecycle = false;
        this.onCreateObject = onCreateObject;
        this.target = target;
        this.root = root;
        this._id = PoolManager._idInc++ + "";
        PoolManager._instances[this._id] = this;
        // this.autoRecycle = this._autoRecycle;
    }
    Object.defineProperty(PoolManager.prototype, "autoRecycle", {
        set: function (v) {
            if (v) {
                this.root && this.root.on(cc.Node.EventType.CHILD_REMOVED, this.onNodeRemove, this);
            }
            else {
                this.root && this.root.off(cc.Node.EventType.CHILD_REMOVED, this.onNodeRemove, this);
            }
            this._autoRecycle = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PoolManager.prototype, "name", {
        set: function (v) {
            delete PoolManager._instances[this._id];
            this._id = v;
            PoolManager._instances[this._id] = this;
        },
        enumerable: false,
        configurable: true
    });
    PoolManager.get = function (name) {
        return PoolManager._instances[name];
    };
    PoolManager.prototype.destroy = function () {
        this.clear();
        delete PoolManager._instances[this._id];
    };
    PoolManager.prototype.onNodeRemove = function (node) {
        this.put(node);
        this.onRecycleSignal.fire(node);
    };
    PoolManager.prototype.objects = function () {
        return this.aliveObjects;
    };
    PoolManager.prototype.clearAlives = function () {
        for (var i = 0; i < this.aliveObjects.length;) {
            var obj = this.aliveObjects[i];
            obj.destroy();
            obj.destroyAllChildren();
            delete this.aliveObjects[i];
        }
    };
    PoolManager.prototype.getPool = function (type) {
        if (typeof (type) == "object") {
            type = type._uuid || type.name;
        }
        var pool = this.nodePool[type];
        if (pool == null) {
            pool = new cc.NodePool();
            this.nodePool[type] = pool;
        }
        return pool;
    };
    PoolManager.prototype.getAsync = function (type, url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var node = _this.getPool(type).get();
            if (_this.onCreateObject) {
                if (node == null) {
                    cc.resources.load(url, cc.Prefab, function (err, res) {
                        if (err)
                            return reject(err);
                        node = cc.instantiate(res);
                        if (_this.root)
                            node.setParent(_this.root);
                        if (_this.managed)
                            _this.aliveObjects.push(node);
                        _this.nodes[node.uuid] = type;
                        resolve(node);
                    });
                }
            }
            if (_this.root) {
                node.active = true;
                node.setParent(_this.root);
            }
            if (_this.managed)
                _this.aliveObjects.push(node);
            resolve(node);
        });
    };
    PoolManager.prototype.get = function (type) {
        var node = this.getPool(type).get();
        if (this.onCreateObject) {
            if (node == null) {
                node = this.onCreateObject.call(this.target, type);
                if (this.root)
                    node.parent = this.root;
                if (!node)
                    console.warn(node, "onCreateObject must return an object");
                if (this.managed)
                    this.aliveObjects.push(node);
                this.nodes[node.uuid] = type;
                return node;
            }
        }
        if (this.root) {
            node.active = true;
            node.parent = this.root;
        }
        if (this.managed)
            this.aliveObjects.push(node);
        return node;
    };
    PoolManager.prototype.tag = function (node, type) {
        this.nodes[node.uuid] = type;
    };
    PoolManager.prototype.put = function (node, type) {
        if (type === void 0) { type = null; }
        if (type == null)
            type = this.nodes[node.uuid];
        this.getPool(type).put(node);
        if (this.managed)
            this.aliveObjects.splice(this.aliveObjects.indexOf(node), 1);
    };
    PoolManager.prototype.clear = function (type) {
        if (this.managed) {
            this.clearAlives();
        }
        if (type)
            this.getPool(type).clear();
        else {
            // this.root.off(SystemEventType.CHILD_REMOVED, this.onNodeRemove, this)
            for (var t in this.nodePool) {
                var pool = this.nodePool[t];
                pool.clear();
                delete this.nodePool[t];
            }
            for (var k in this.nodes) {
                delete this.nodes[k];
            }
        }
    };
    PoolManager.prototype.size = function (type) {
        return this.getPool(type).size();
    };
    PoolManager._instances = {};
    PoolManager._idInc = 0;
    return PoolManager;
}());
exports.default = PoolManager;
window['PoolManager'] = PoolManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxjb3JlXFxQb29sTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUE4QjtBQUU5QjtJQXFCSSxxQkFBWSxJQUF5QixFQUFFLGNBQWUsRUFBRSxNQUFPO1FBcEIvRCxhQUFRLEdBQVEsRUFBRSxDQUFBO1FBRWxCLFVBQUssR0FBRyxFQUFFLENBQUE7UUFNVixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGlCQUFZLEdBQWMsRUFBRSxDQUFBO1FBRTVCLG9CQUFlLEdBQUcsSUFBSSxnQkFBTSxFQUFFLENBQUM7UUFLdkIsUUFBRyxHQUFXLEdBQUcsQ0FBQztRQUUxQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUdqQixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDckMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3hDLHdDQUF3QztJQUM1QyxDQUFDO0lBRUQsc0JBQUksb0NBQVc7YUFBZixVQUFnQixDQUFDO1lBQ2IsSUFBSSxDQUFDLEVBQUU7Z0JBQ0gsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQTthQUN0RjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEs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QUksSUFBSTtZQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDMUI7WUFDRCx3RUFBd0U7WUFDeEUsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBZ0IsQ0FBQTtnQkFDMUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNiLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUMxQjtZQUNELEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3hCO1NBQ0o7SUFFTCxDQUFDO0lBRUQsMEJBQUksR0FBSixVQUFLLElBQUk7UUFDTCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQTNKYyxzQkFBVSxHQUFxQyxFQUFFLENBQUE7SUFFakQsa0JBQU0sR0FBVyxDQUFDLENBQUM7SUEwSnRDLGtCQUFDO0NBMUtELEFBMEtDLElBQUE7a0JBMUtvQixXQUFXO0FBNEtoQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsV0FBVyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpZ25hbCBmcm9tIFwiLi9TaWduYWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvb2xNYW5hZ2VyIHtcclxuICAgIG5vZGVQb29sOiBhbnkgPSB7fVxyXG5cclxuICAgIG5vZGVzID0ge31cclxuXHJcbiAgICBvbkNyZWF0ZU9iamVjdDogRnVuY3Rpb247XHJcbiAgICB0YXJnZXQ6IGFueTtcclxuICAgIHJvb3Q6IGFueTtcclxuXHJcbiAgICBtYW5hZ2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBhbGl2ZU9iamVjdHM6IGNjLk5vZGVbXSA9IFtdXHJcblxyXG4gICAgb25SZWN5Y2xlU2lnbmFsID0gbmV3IFNpZ25hbCgpO1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZXM6IHsgW2luZGV4OiBzdHJpbmddOiBQb29sTWFuYWdlciB9ID0ge31cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaWRJbmM6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9pZDogc3RyaW5nID0gJzAnO1xyXG5cclxuICAgIF9hdXRvUmVjeWNsZSA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJvb3Q/OiBjYy5Ob2RlIHwgY2MuU2NlbmUsIG9uQ3JlYXRlT2JqZWN0PywgdGFyZ2V0Pykge1xyXG4gICAgICAgIHRoaXMub25DcmVhdGVPYmplY3QgPSBvbkNyZWF0ZU9iamVjdDtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xyXG4gICAgICAgIHRoaXMuX2lkID0gUG9vbE1hbmFnZXIuX2lkSW5jKysgKyBcIlwiO1xyXG4gICAgICAgIFBvb2xNYW5hZ2VyLl9pbnN0YW5jZXNbdGhpcy5faWRdID0gdGhpcztcclxuICAgICAgICAvLyB0aGlzLmF1dG9SZWN5Y2xlID0gdGhpcy5fYXV0b1JlY3ljbGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGF1dG9SZWN5Y2xlKHYpIHtcclxuICAgICAgICBpZiAodikge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3QgJiYgdGhpcy5yb290Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLkNISUxEX1JFTU9WRUQsIHRoaXMub25Ob2RlUmVtb3ZlLCB0aGlzKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdCAmJiB0aGlzLnJvb3Qub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLkNISUxEX1JFTU9WRUQsIHRoaXMub25Ob2RlUmVtb3ZlLCB0aGlzKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9hdXRvUmVjeWNsZSA9IHZcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbmFtZSh2KSB7XHJcbiAgICAgICAgZGVsZXRlIFBvb2xNYW5hZ2VyLl9pbnN0YW5jZXNbdGhpcy5faWRdXHJcbiAgICAgICAgdGhpcy5faWQgPSB2O1xyXG4gICAgICAgIFBvb2xNYW5hZ2VyLl9pbnN0YW5jZXNbdGhpcy5faWRdID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIFBvb2xNYW5hZ2VyLl9pbnN0YW5jZXNbbmFtZV1cclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICBkZWxldGUgUG9vbE1hbmFnZXIuX2luc3RhbmNlc1t0aGlzLl9pZF07XHJcbiAgICB9XHJcblxyXG4gICAgb25Ob2RlUmVtb3ZlKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICB0aGlzLnB1dChub2RlKTtcclxuICAgICAgICB0aGlzLm9uUmVjeWNsZVNpZ25hbC5maXJlKG5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9iamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxpdmVPYmplY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyQWxpdmVzKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hbGl2ZU9iamVjdHMubGVuZ3RoOykge1xyXG4gICAgICAgICAgICBsZXQgb2JqID0gdGhpcy5hbGl2ZU9iamVjdHNbaV1cclxuICAgICAgICAgICAgb2JqLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICBvYmouZGVzdHJveUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmFsaXZlT2JqZWN0c1tpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9vbCh0eXBlKTogY2MuTm9kZVBvb2wge1xyXG4gICAgICAgIGlmICh0eXBlb2YgKHR5cGUpID09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgdHlwZSA9IHR5cGUuX3V1aWQgfHwgdHlwZS5uYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcG9vbCA9IHRoaXMubm9kZVBvb2xbdHlwZV07XHJcbiAgICAgICAgaWYgKHBvb2wgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBwb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZVBvb2xbdHlwZV0gPSBwb29sO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9vbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBc3luYyh0eXBlLCB1cmwpOiBQcm9taXNlPGNjLk5vZGU+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2V0UG9vbCh0eXBlKS5nZXQoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub25DcmVhdGVPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCh1cmwsIGNjLlByZWZhYiwgKGVyciwgcmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiByZWplY3QoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gY2MuaW5zdGFudGlhdGUocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucm9vdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0UGFyZW50KHRoaXMucm9vdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hbmFnZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsaXZlT2JqZWN0cy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVzW25vZGUudXVpZF0gPSB0eXBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMucm9vdCkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zZXRQYXJlbnQodGhpcy5yb290KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5tYW5hZ2VkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGl2ZU9iamVjdHMucHVzaChub2RlKTtcclxuICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldCh0eXBlKTogY2MuTm9kZSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdldFBvb2wodHlwZSkuZ2V0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMub25DcmVhdGVPYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbm9kZSA9IHRoaXMub25DcmVhdGVPYmplY3QuY2FsbCh0aGlzLnRhcmdldCwgdHlwZSlcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvb3QpXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLnJvb3RcclxuICAgICAgICAgICAgICAgIGlmICghbm9kZSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4obm9kZSwgXCJvbkNyZWF0ZU9iamVjdCBtdXN0IHJldHVybiBhbiBvYmplY3RcIilcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hbmFnZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGl2ZU9iamVjdHMucHVzaChub2RlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZXNbbm9kZS51dWlkXSA9IHR5cGU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5yb290KSB7XHJcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLnJvb3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hbmFnZWQpXHJcbiAgICAgICAgICAgIHRoaXMuYWxpdmVPYmplY3RzLnB1c2gobm9kZSk7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgdGFnKG5vZGUsIHR5cGUpIHtcclxuICAgICAgICB0aGlzLm5vZGVzW25vZGUudXVpZF0gPSB0eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1dChub2RlOiBjYy5Ob2RlLCB0eXBlID0gbnVsbCkge1xyXG4gICAgICAgIGlmICh0eXBlID09IG51bGwpXHJcbiAgICAgICAgICAgIHR5cGUgPSB0aGlzLm5vZGVzW25vZGUudXVpZF07XHJcbiAgICAgICAgdGhpcy5nZXRQb29sKHR5cGUpLnB1dChub2RlKTtcclxuICAgICAgICBpZiAodGhpcy5tYW5hZ2VkKVxyXG4gICAgICAgICAgICB0aGlzLmFsaXZlT2JqZWN0cy5zcGxpY2UodGhpcy5hbGl2ZU9iamVjdHMuaW5kZXhPZihub2RlKSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIodHlwZT8pIHtcclxuICAgICAgICBpZiAodGhpcy5tYW5hZ2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJBbGl2ZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUpXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UG9vbCh0eXBlKS5jbGVhcigpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnJvb3Qub2ZmKFN5c3RlbUV2ZW50VHlwZS5DSElMRF9SRU1PVkVELCB0aGlzLm9uTm9kZVJlbW92ZSwgdGhpcylcclxuICAgICAgICAgICAgZm9yICh2YXIgdCBpbiB0aGlzLm5vZGVQb29sKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9vbCA9IHRoaXMubm9kZVBvb2xbdF0gYXMgY2MuTm9kZVBvb2xcclxuICAgICAgICAgICAgICAgIHBvb2wuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm5vZGVQb29sW3RdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yICh2YXIgayBpbiB0aGlzLm5vZGVzKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5ub2Rlc1trXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2l6ZSh0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9vbCh0eXBlKS5zaXplKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvd1snUG9vbE1hbmFnZXInXSA9IFBvb2xNYW5hZ2VyOyJdfQ==