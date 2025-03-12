"use strict";
cc._RF.push(module, '34270jeq1hAaJ89PC+A7ClS', 'DataCenter');
// framework/core/DataCenter.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.field = exports.dc = void 0;
var event_1 = require("./event");
var all_class_fields = {};
var all_registed_class = {};
function dc(name, serializable) {
    if (serializable === void 0) { serializable = true; }
    return function (target) {
        // target.endRegister(name);
        // let proto: any = target['prototype'].constructor;
        // let cls = all_class_properties[proto]
        all_registed_class[target] = { name: name, serializable: serializable };
    };
}
exports.dc = dc;
function field(obj) {
    return function (target, propertyName) {
        // target.register(propertyName,target[propertyName])
        var constructor = target.constructor;
        var fields = all_class_fields[constructor];
        if (fields == null) {
            fields = [];
            all_class_fields[constructor] = fields;
        }
        obj = obj || {};
        if (obj) {
            //set default properties
            obj.persistent = obj.persistent == null ? true : obj.persistent;
            obj.enumerable = obj.enumerable == null ? true : obj.enumerable;
            obj.readonly = obj.readonly || false;
            if (obj.default)
                target[propertyName] = obj.default;
        }
        var filed = { propertyName: propertyName, persistent: obj.persistent, enumerable: obj.enumerable, readonly: obj.readonly };
        fields.push(filed);
    };
}
exports.field = field;
var DataCenter = /** @class */ (function () {
    function DataCenter() {
        this.__namespace = "DataCenter";
        this.kvs = {};
        this.kts = {};
        this.defaultKvs = {};
        this.kOptions = {};
        ///保存时间
        this.save_timestamps = 0;
        this.kvs = {};
        this.kts = {};
    }
    DataCenter.prototype.toFormData = function () {
        var _this = this;
        var postData = this.allkeys.map(function (key) { return key + "=" + _this.kvs[key]; }).join("&");
        return postData;
    };
    Object.defineProperty(DataCenter.prototype, "allkeys", {
        get: function () {
            return Object.keys(this.kvs);
        },
        enumerable: false,
        configurable: true
    });
    DataCenter.prototype.defaultValue = function (key) {
        return this.defaultKvs[key];
    };
    DataCenter.prototype.resetValue = function (key) {
        // this.kvs[k] = a[k]
        this.setData(key, this.defaultKvs[key]);
    };
    DataCenter.prototype.registerFields = function (namespace) {
        var target = this["__proto__"].constructor;
        var fields = all_class_fields[target];
        var cfg = all_registed_class[target];
        // let proto:any = target['prototype'];
        for (var i in fields) {
            var f = fields[i];
            var k = f.propertyName;
            this.kOptions[k] = f;
            if (typeof (k) == "function")
                continue;
            this.register(k, this[k]);
            delete this[k]; //删除默认属性 ,否则设置 setter getter 会失效
        }
        this.kOptions['save_timestamps'] = { propertyName: 'save_timestamps', persistent: true, enumerable: true, readonly: false };
        this.register('save_timestamps', 0);
        delete this['save_timestamps'];
        namespace = namespace || cfg.name;
        this.endRegister(namespace, cfg.serializable);
    };
    DataCenter.prototype.register = function (k, defaultValue) {
        var proto = this.constructor["prototype"];
        var self = this;
        proto.__defineGetter__(k, function () {
            return self.getData(k);
        });
        proto.__defineSetter__(k, function (s) {
            self.setData(k, s);
        });
        this.defaultKvs[k] = defaultValue;
        var option = this.kOptions[k];
        Object.defineProperty(this.kvs, k, {
            value: defaultValue,
            enumerable: option.enumerable,
            writable: true,
        });
        var type = "";
        type = typeof (defaultValue);
        if (type == 'object') {
            if (Array.isArray(defaultValue)) {
                type = 'array';
            }
        }
        this.kts[k] = type;
        console.log("[DataCenter] register :" + k + ":" + defaultValue + "(" + type + ")");
    };
    /**
     * setData 会发消息
     * setValue 强制改变该字段 值
     */
    DataCenter.prototype.setValue = function (k, v) {
        this.kvs[k] = v;
    };
    DataCenter.prototype.setData = function (k, nv) {
        var v = this.kvs[k];
        if (v == nv)
            return;
        var kOption = this.kOptions[k];
        if (kOption.readonly)
            return;
        var type = this.kts[k];
        var kk = this._field_(k);
        if (type != typeof (nv)) {
            if (type == "number") {
                console.warn("[DataCenter] wrong type <" + typeof (nv) + "> for :" + kk + "<" + type + "> ,converting...");
                if (nv == null) {
                    nv = 0;
                }
                else {
                    nv = Number(nv);
                }
            }
            else if (type == "boolean") {
                console.warn("[DataCenter] wrong type <" + typeof (nv) + "> for :" + kk + "<" + type + "> ,converting...");
                nv = (nv == "true") ? true : false;
            }
            else if (type == "object") {
                console.warn("[DataCenter] wrong type <" + typeof (nv) + "> for :" + kk + "<" + type + "> ,converting...");
                nv = nv && this.parseJson(nv) || {};
            }
            else if (type == 'array' && Array.isArray(nv)) {
                nv = nv;
            }
        }
        this.kvs[k] = nv;
        // if (!cc.sys.isMobile) console.log("[DataCenter] onValueChanged", kk, nv);
        event_1.evt.emit(kk, nv, v);
    };
    DataCenter.prototype._field_ = function (k) {
        return this.__namespace + "." + k;
    };
    DataCenter.prototype.getData = function (k) {
        return this.kvs[k];
    };
    DataCenter.prototype.limit = function (v, min, max) {
        if (v > max) {
            return max;
        }
        else if (v < min) {
            return 0;
        }
        else {
            return v;
        }
    };
    DataCenter.prototype.addData = function (k, c, autosave) {
        if (autosave === void 0) { autosave = false; }
        c = Number(c);
        if (c == null)
            return;
        var v = this.kvs[k];
        var nv = Number(v) + c;
        this.kvs[k] = nv;
        event_1.evt.emit(this._field_(k), nv, v);
        if (autosave)
            this.save(k);
    };
    DataCenter.prototype.onLoad = function (field_name) { };
    DataCenter.prototype.onLoadAll = function () { };
    DataCenter.prototype.onBeforeSave = function (field_name) { };
    DataCenter.prototype.onAfterSave = function (field_name) { };
    DataCenter.prototype.onBeforeSaveAll = function () { };
    DataCenter.prototype.onAfterSaveAll = function () { };
    DataCenter.prototype.load = function () {
        for (var k in this.kvs) {
            var fromstroage = localStorage.getItem(this._field_(k));
            var v = fromstroage;
            if (fromstroage) {
                var type = this.kts[k];
                if (type == "number") {
                    v = Number(fromstroage);
                }
                else if (type == "boolean") {
                    v = fromstroage == "true" ? true : false;
                }
                else if (type == "object" || type == 'array') {
                    v = this.parseJson(fromstroage);
                }
            }
            else {
                v = this.getData(k);
            }
            this.kvs[k] = v;
            this.onLoad(k);
        }
        this.onLoadAll();
    };
    DataCenter.prototype._saveAll = function () {
        this.save_timestamps = Date.now();
        for (var k in this.kvs) {
            var option = this.kOptions[k];
            //此字段不支持序列化
            if (option.persistent == false || option.readonly == true) {
                continue;
            }
            var v = this.kvs[k];
            var t = this.kts[k];
            var kk = this._field_(k);
            this.onBeforeSave(k);
            if (v != null) {
                if (t == "object" || t == 'array') {
                    localStorage.setItem(kk, JSON.stringify(v));
                }
                else {
                    localStorage.setItem(kk, v.toString());
                }
            }
            this.onAfterSave(k);
            console.log(kk, v);
        }
    };
    /**
     * 保存数据
     * @param keys 需要保存的key[list]，如果为空 ，则保存全部字段
     */
    DataCenter.prototype.save = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        console.log("[DataCenter] save :==================================");
        if (keys.length == 0) {
            this.onBeforeSaveAll();
            this._saveAll();
            this.onAfterSaveAll();
        }
        else {
            for (var i in keys) {
                var k = keys[i];
                var option = this.kOptions[k];
                if (option == null) {
                    return console.warn("[DataCenter]: can't find the key :" + k);
                }
                //此字段不支持序列化
                if (option.persistent == false || option.readonly == true) {
                    continue;
                }
                var v = this.kvs[k];
                var t = this.kts[k];
                var kk = this._field_(k);
                this.onBeforeSave(k);
                if (t == "object" || t == 'array') {
                    localStorage.setItem(kk, JSON.stringify(v));
                }
                else {
                    if (v != null) {
                        localStorage.setItem(kk, v.toString());
                    }
                    else {
                        console.warn("[DataCenter] " + kk + " 保存失败");
                    }
                }
                this.onAfterSave(k);
                console.log(kk, v);
            }
        }
        console.log("[DataCenter] save succ :==================================");
        // localStorage.setItem("#1_coin",this.getData("coin"));
    };
    DataCenter.prototype.toString = function () {
        var s = JSON.stringify(this.kvs, function (key, value) {
            if (typeof value == 'string') {
                var c = value.replace(/\\?\"/g, "'");
                return c;
            }
            return value;
        });
        console.log('dc.tostring:', s);
        return s;
    };
    DataCenter.prototype.loadFromJsonObject = function (a) {
        for (var k in this.kvs) {
            var v = a[k];
            if (v != null) {
                // this.setData(k, v)
                this.setValue(k, v);
                this.onLoad(k);
            }
        }
        this.onLoadAll();
    };
    DataCenter.prototype.loadFromString = function (s) {
        var a = JSON.parse(s);
        this.loadFromJsonObject(a);
    };
    DataCenter.prototype.resetAndSave = function (initValues) {
        this.reset();
        for (var k in initValues) {
            this.setValue(k, initValues[k]);
        }
        this.save();
        return true;
    };
    DataCenter.prototype.reset = function () {
        for (var k in this.kvs) {
            // this.kvs[k] = a[k]
            this.setValue(k, this.defaultKvs[k]);
            this.onLoad(k);
        }
        this.onLoadAll();
    };
    DataCenter.prototype.parseJson = function (s) {
        try {
            var obj = JSON.parse(s.replace(/\\?\'/g, '"'));
            return obj;
        }
        catch (e) {
            return null;
        }
    };
    DataCenter.prototype.endRegister = function (s, serializable) {
        if (serializable === void 0) { serializable = true; }
        this.__namespace = s;
        DataCenter.alldata[s] = this;
        if (serializable) {
            this.load();
            // this.save();
        }
    };
    DataCenter.off = function (k, callback, target) {
        event_1.evt.off(k, callback, target);
    };
    DataCenter.on = function (k, callback, target) {
        event_1.evt.on(k, callback, target);
        this.set(k, this.get(k));
    };
    DataCenter.get = function (k) {
        var strs = k.split(".");
        var namespace = strs[0];
        var name = strs[1];
        var target = DataCenter.alldata[namespace];
        if (target)
            return target[name];
        else
            return null;
    };
    DataCenter.set = function (k, v) {
        var strs = k.split(".");
        var namespace = strs[0];
        var name = strs[1];
        var target = DataCenter.alldata[namespace];
        if (target) {
            target[name] = v;
        }
    };
    DataCenter.register = function (cls) {
        if (CC_EDITOR)
            return;
        var v = new cls();
        var d = all_registed_class[cls];
        // g.setGlobalInstance(v, d.name)
        window[d.name] = v;
        v.registerFields();
        return v;
    };
    DataCenter.alldata = {};
    return DataCenter;
}());
exports.default = DataCenter;

cc._RF.pop();