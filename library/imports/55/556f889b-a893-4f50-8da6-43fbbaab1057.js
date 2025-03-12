"use strict";
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