
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/core/DataCenter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxjb3JlXFxEYXRhQ2VudGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUE4QjtBQVU5QixJQUFNLGdCQUFnQixHQUF1QyxFQUFFLENBQUE7QUFFL0QsSUFBTSxrQkFBa0IsR0FBRyxFQUFFLENBQUE7QUFDN0IsU0FBZ0IsRUFBRSxDQUFDLElBQUksRUFBRSxZQUFtQjtJQUFuQiw2QkFBQSxFQUFBLG1CQUFtQjtJQUN4QyxPQUFPLFVBQVUsTUFBVztRQUN4Qiw0QkFBNEI7UUFDNUIsb0RBQW9EO1FBQ3BELHdDQUF3QztRQUN4QyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksTUFBQSxFQUFFLFlBQVksY0FBQSxFQUFFLENBQUM7SUFDeEQsQ0FBQyxDQUFBO0FBQ0wsQ0FBQztBQVBELGdCQU9DO0FBQ0QsU0FBZ0IsS0FBSyxDQUFDLEdBQXVGO0lBQ3pHLE9BQU8sVUFBVSxNQUFXLEVBQUUsWUFBb0I7UUFDOUMscURBQXFEO1FBQ3JELElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUE7UUFDcEMsSUFBSSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDMUMsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2hCLE1BQU0sR0FBRyxFQUFFLENBQUE7WUFDWCxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsR0FBRyxNQUFNLENBQUM7U0FDMUM7UUFDRCxHQUFHLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQTtRQUNmLElBQUksR0FBRyxFQUFFO1lBQ0wsd0JBQXdCO1lBQ3hCLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUNoRSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLElB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QyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN2QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDMUMsSUFBSSxNQUFNLEVBQUU7WUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQztJQUVNLG1CQUFRLEdBQWYsVUFBZ0IsR0FBRztRQUNmLElBQUksU0FBUztZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMvQixpQ0FBaUM7UUFDakMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBQ2xCLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQTlWTSxrQkFBTyxHQUFHLEVBQUUsQ0FBQTtJQStWdkIsaUJBQUM7Q0FqV0QsQUFpV0MsSUFBQTtrQkFqV29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldnQgfSBmcm9tIFwiLi9ldmVudFwiO1xyXG5cclxuXHJcbmludGVyZmFjZSBGaWVsZE9wdGlvbiB7XHJcbiAgICBwcm9wZXJ0eU5hbWU6IGFueSwgLy8g5a2X5q615ZCNXHJcbiAgICBwZXJzaXN0ZW50OiBib29sZWFuLCAgLy/mmK/lkKbmjIHkuYXljJbvvIxcclxuICAgIGVudW1lcmFibGU6IGFueSwvL+aYr+WQpuWPr+mBjeWOhu+8jGZhbHNl5pe2ICB0b1N0cmluZygp5LiN5Lya6L6T5Ye66K+l5a2X5q615YiwSlNPTlxyXG4gICAgcmVhZG9ubHk6IGJvb2xlYW4sLy/kuI3lj6/ku6Xnu5nor6XlrZfmrrXorr7nva7lgLzvvIzlj6rlj6/or7vlj5ZcclxufVxyXG5cclxuY29uc3QgYWxsX2NsYXNzX2ZpZWxkczogeyBbaW5kZXg6IHN0cmluZ106IEZpZWxkT3B0aW9uW10gfSA9IHt9XHJcblxyXG5jb25zdCBhbGxfcmVnaXN0ZWRfY2xhc3MgPSB7fVxyXG5leHBvcnQgZnVuY3Rpb24gZGMobmFtZSwgc2VyaWFsaXphYmxlID0gdHJ1ZSk6IEZ1bmN0aW9uIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnkpIHtcclxuICAgICAgICAvLyB0YXJnZXQuZW5kUmVnaXN0ZXIobmFtZSk7XHJcbiAgICAgICAgLy8gbGV0IHByb3RvOiBhbnkgPSB0YXJnZXRbJ3Byb3RvdHlwZSddLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgIC8vIGxldCBjbHMgPSBhbGxfY2xhc3NfcHJvcGVydGllc1twcm90b11cclxuICAgICAgICBhbGxfcmVnaXN0ZWRfY2xhc3NbdGFyZ2V0XSA9IHsgbmFtZSwgc2VyaWFsaXphYmxlIH07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZpZWxkKG9iaj86IHsgZGVmYXVsdD86IGFueSwgcGVyc2lzdGVudD86IGJvb2xlYW4sIGVudW1lcmFibGU/OiBib29sZWFuLCByZWFkb25seT86IGJvb2xlYW4gfSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyB0YXJnZXQucmVnaXN0ZXIocHJvcGVydHlOYW1lLHRhcmdldFtwcm9wZXJ0eU5hbWVdKVxyXG4gICAgICAgIGxldCBjb25zdHJ1Y3RvciA9IHRhcmdldC5jb25zdHJ1Y3RvclxyXG4gICAgICAgIGxldCBmaWVsZHMgPSBhbGxfY2xhc3NfZmllbGRzW2NvbnN0cnVjdG9yXVxyXG4gICAgICAgIGlmIChmaWVsZHMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBmaWVsZHMgPSBbXVxyXG4gICAgICAgICAgICBhbGxfY2xhc3NfZmllbGRzW2NvbnN0cnVjdG9yXSA9IGZpZWxkcztcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JqID0gb2JqIHx8IHt9XHJcbiAgICAgICAgaWYgKG9iaikge1xyXG4gICAgICAgICAgICAvL3NldCBkZWZhdWx0IHByb3BlcnRpZXNcclxuICAgICAgICAgICAgb2JqLnBlcnNpc3RlbnQgPSBvYmoucGVyc2lzdGVudCA9PSBudWxsID8gdHJ1ZSA6IG9iai5wZXJzaXN0ZW50O1xyXG4gICAgICAgICAgICBvYmouZW51bWVyYWJsZSA9IG9iai5lbnVtZXJhYmxlID09IG51bGwgPyB0cnVlIDogb2JqLmVudW1lcmFibGU7XHJcbiAgICAgICAgICAgIG9iai5yZWFkb25seSA9IG9iai5yZWFkb25seSB8fCBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKG9iai5kZWZhdWx0KVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5TmFtZV0gPSBvYmouZGVmYXVsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGZpbGVkID0geyBwcm9wZXJ0eU5hbWUsIHBlcnNpc3RlbnQ6IG9iai5wZXJzaXN0ZW50LCBlbnVtZXJhYmxlOiBvYmouZW51bWVyYWJsZSwgcmVhZG9ubHk6IG9iai5yZWFkb25seSB9IGFzIEZpZWxkT3B0aW9uO1xyXG4gICAgICAgIGZpZWxkcy5wdXNoKGZpbGVkKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFDZW50ZXIge1xyXG4gICAgcHJpdmF0ZSBfX25hbWVzcGFjZTogc3RyaW5nID0gXCJEYXRhQ2VudGVyXCJcclxuICAgIHN0YXRpYyBhbGxkYXRhID0ge31cclxuICAgIHByaXZhdGUga3ZzID0ge31cclxuICAgIHByaXZhdGUga3RzID0ge31cclxuICAgIHByaXZhdGUgZGVmYXVsdEt2cyA9IHt9XHJcbiAgICBwcml2YXRlIGtPcHRpb25zOiB7IFtpbmRleDogc3RyaW5nXTogRmllbGRPcHRpb24gfSA9IHt9XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmt2cyA9IHt9XHJcbiAgICAgICAgdGhpcy5rdHMgPSB7fVxyXG4gICAgfVxyXG4gICAgLy8v5L+d5a2Y5pe26Ze0XHJcbiAgICBzYXZlX3RpbWVzdGFtcHM6IG51bWJlciA9IDA7XHJcblxyXG4gICAgdG9Gb3JtRGF0YSgpIHtcclxuICAgICAgICBsZXQgcG9zdERhdGEgPSB0aGlzLmFsbGtleXMubWFwKGtleSA9PiBgJHtrZXl9PSR7dGhpcy5rdnNba2V5XX1gKS5qb2luKFwiJlwiKVxyXG4gICAgICAgIHJldHVybiBwb3N0RGF0YVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXQgYWxsa2V5cygpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5rdnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWZhdWx0VmFsdWUoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdEt2c1trZXldXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0VmFsdWUoa2V5KSB7XHJcbiAgICAgICAgLy8gdGhpcy5rdnNba10gPSBhW2tdXHJcbiAgICAgICAgdGhpcy5zZXREYXRhKGtleSwgdGhpcy5kZWZhdWx0S3ZzW2tleV0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJGaWVsZHMobmFtZXNwYWNlPykge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSB0aGlzW1wiX19wcm90b19fXCJdLmNvbnN0cnVjdG9yXHJcbiAgICAgICAgbGV0IGZpZWxkcyA9IGFsbF9jbGFzc19maWVsZHNbdGFyZ2V0XVxyXG4gICAgICAgIGxldCBjZmcgPSBhbGxfcmVnaXN0ZWRfY2xhc3NbdGFyZ2V0XVxyXG4gICAgICAgIC8vIGxldCBwcm90bzphbnkgPSB0YXJnZXRbJ3Byb3RvdHlwZSddO1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gZmllbGRzKSB7XHJcbiAgICAgICAgICAgIGxldCBmID0gZmllbGRzW2ldO1xyXG4gICAgICAgICAgICBsZXQgayA9IGYucHJvcGVydHlOYW1lXHJcbiAgICAgICAgICAgIHRoaXMua09wdGlvbnNba10gPSBmO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIChrKSA9PSBcImZ1bmN0aW9uXCIpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKGssIHRoaXNba10pXHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzW2tdOyAvL+WIoOmZpOm7mOiupOWxnuaApyAs5ZCm5YiZ6K6+572uIHNldHRlciBnZXR0ZXIg5Lya5aSx5pWIXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmtPcHRpb25zWydzYXZlX3RpbWVzdGFtcHMnXSA9IHsgcHJvcGVydHlOYW1lOiAnc2F2ZV90aW1lc3RhbXBzJywgcGVyc2lzdGVudDogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgcmVhZG9ubHk6IGZhbHNlIH07XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcignc2F2ZV90aW1lc3RhbXBzJywgMCk7XHJcbiAgICAgICAgZGVsZXRlIHRoaXNbJ3NhdmVfdGltZXN0YW1wcyddXHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSA9IG5hbWVzcGFjZSB8fCBjZmcubmFtZTtcclxuICAgICAgICB0aGlzLmVuZFJlZ2lzdGVyKG5hbWVzcGFjZSwgY2ZnLnNlcmlhbGl6YWJsZSlcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlcihrLCBkZWZhdWx0VmFsdWUpIHtcclxuICAgICAgICBsZXQgcHJvdG86IGFueSA9IHRoaXMuY29uc3RydWN0b3JbXCJwcm90b3R5cGVcIl1cclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcHJvdG8uX19kZWZpbmVHZXR0ZXJfXyhrLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxmLmdldERhdGEoayk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBwcm90by5fX2RlZmluZVNldHRlcl9fKGssIGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgIHNlbGYuc2V0RGF0YShrLCBzKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0S3ZzW2tdID0gZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmtPcHRpb25zW2tdXHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMua3ZzLCBrLCB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBkZWZhdWx0VmFsdWUsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IG9wdGlvbi5lbnVtZXJhYmxlLFxyXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCB0eXBlID0gXCJcIlxyXG4gICAgICAgIHR5cGUgPSB0eXBlb2YgKGRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgaWYgKHR5cGUgPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGVmYXVsdFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdhcnJheSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmt0c1trXSA9IHR5cGU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJbRGF0YUNlbnRlcl0gcmVnaXN0ZXIgOlwiICsgayArIFwiOlwiICsgZGVmYXVsdFZhbHVlICsgXCIoXCIgKyB0eXBlICsgXCIpXCIpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXREYXRhIOS8muWPkea2iOaBryBcclxuICAgICAqIHNldFZhbHVlIOW8uuWItuaUueWPmOivpeWtl+autSDlgLwgXHJcbiAgICAgKi9cclxuICAgIHNldFZhbHVlKGssIHYpIHtcclxuICAgICAgICB0aGlzLmt2c1trXSA9IHY7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGF0YShrLCBudikge1xyXG4gICAgICAgIGxldCB2ID0gdGhpcy5rdnNba11cclxuICAgICAgICBpZiAodiA9PSBudikgcmV0dXJuO1xyXG4gICAgICAgIGxldCBrT3B0aW9uID0gdGhpcy5rT3B0aW9uc1trXVxyXG4gICAgICAgIGlmIChrT3B0aW9uLnJlYWRvbmx5KSByZXR1cm47XHJcbiAgICAgICAgbGV0IHR5cGUgPSB0aGlzLmt0c1trXVxyXG4gICAgICAgIGxldCBrayA9IHRoaXMuX2ZpZWxkXyhrKVxyXG4gICAgICAgIGlmICh0eXBlICE9IHR5cGVvZiAobnYpKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltEYXRhQ2VudGVyXSB3cm9uZyB0eXBlIDxcIiArIHR5cGVvZiAobnYpICsgXCI+IGZvciA6XCIgKyBrayArIFwiPFwiICsgdHlwZSArIFwiPiAsY29udmVydGluZy4uLlwiKVxyXG4gICAgICAgICAgICAgICAgaWYgKG52ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBudiA9IDBcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnYgPSBOdW1iZXIobnYpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW0RhdGFDZW50ZXJdIHdyb25nIHR5cGUgPFwiICsgdHlwZW9mIChudikgKyBcIj4gZm9yIDpcIiArIGtrICsgXCI8XCIgKyB0eXBlICsgXCI+ICxjb252ZXJ0aW5nLi4uXCIpXHJcbiAgICAgICAgICAgICAgICBudiA9IChudiA9PSBcInRydWVcIikgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltEYXRhQ2VudGVyXSB3cm9uZyB0eXBlIDxcIiArIHR5cGVvZiAobnYpICsgXCI+IGZvciA6XCIgKyBrayArIFwiPFwiICsgdHlwZSArIFwiPiAsY29udmVydGluZy4uLlwiKVxyXG4gICAgICAgICAgICAgICAgbnYgPSBudiAmJiB0aGlzLnBhcnNlSnNvbihudikgfHwge307XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSAnYXJyYXknICYmIEFycmF5LmlzQXJyYXkobnYpKSB7XHJcbiAgICAgICAgICAgICAgICBudiA9IG52XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5rdnNba10gPSBudjtcclxuICAgICAgICAvLyBpZiAoIWNjLnN5cy5pc01vYmlsZSkgY29uc29sZS5sb2coXCJbRGF0YUNlbnRlcl0gb25WYWx1ZUNoYW5nZWRcIiwga2ssIG52KTtcclxuICAgICAgICBldnQuZW1pdChraywgbnYsIHYpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZmllbGRfKGspIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fX25hbWVzcGFjZSArIFwiLlwiICsga1xyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGEoaykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmt2c1trXTtcclxuICAgIH1cclxuXHJcbiAgICBsaW1pdCh2LCBtaW4sIG1heCkge1xyXG4gICAgICAgIGlmICh2ID4gbWF4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXg7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2IDwgbWluKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGREYXRhKGssIGMsIGF1dG9zYXZlID0gZmFsc2UpIHtcclxuICAgICAgICBjID0gTnVtYmVyKGMpXHJcbiAgICAgICAgaWYgKGMgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCB2ID0gdGhpcy5rdnNba11cclxuICAgICAgICBsZXQgbnYgPSBOdW1iZXIodikgKyBjXHJcbiAgICAgICAgdGhpcy5rdnNba10gPSBudlxyXG4gICAgICAgIGV2dC5lbWl0KHRoaXMuX2ZpZWxkXyhrKSwgbnYsIHYpXHJcbiAgICAgICAgaWYgKGF1dG9zYXZlKVxyXG4gICAgICAgICAgICB0aGlzLnNhdmUoayk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKGZpZWxkX25hbWUpIHsgfVxyXG4gICAgb25Mb2FkQWxsKCkgeyB9XHJcbiAgICBvbkJlZm9yZVNhdmUoZmllbGRfbmFtZSkgeyB9XHJcbiAgICBvbkFmdGVyU2F2ZShmaWVsZF9uYW1lKSB7IH1cclxuICAgIG9uQmVmb3JlU2F2ZUFsbCgpIHsgfVxyXG4gICAgb25BZnRlclNhdmVBbGwoKSB7IH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWQoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgayBpbiB0aGlzLmt2cykge1xyXG4gICAgICAgICAgICBsZXQgZnJvbXN0cm9hZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLl9maWVsZF8oaykpXHJcbiAgICAgICAgICAgIGxldCB2OiBhbnkgPSBmcm9tc3Ryb2FnZVxyXG4gICAgICAgICAgICBpZiAoZnJvbXN0cm9hZ2UpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0eXBlID0gdGhpcy5rdHNba11cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2ID0gTnVtYmVyKGZyb21zdHJvYWdlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHYgPSBmcm9tc3Ryb2FnZSA9PSBcInRydWVcIiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcIm9iamVjdFwiIHx8IHR5cGUgPT0gJ2FycmF5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLnBhcnNlSnNvbihmcm9tc3Ryb2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2ID0gdGhpcy5nZXREYXRhKGspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMua3ZzW2tdID0gdjtcclxuICAgICAgICAgICAgdGhpcy5vbkxvYWQoayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25Mb2FkQWxsKCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBfc2F2ZUFsbCgpIHtcclxuICAgICAgICB0aGlzLnNhdmVfdGltZXN0YW1wcyA9IERhdGUubm93KCk7XHJcbiAgICAgICAgZm9yICh2YXIgayBpbiB0aGlzLmt2cykge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5rT3B0aW9uc1trXVxyXG4gICAgICAgICAgICAvL+atpOWtl+auteS4jeaUr+aMgeW6j+WIl+WMllxyXG4gICAgICAgICAgICBpZiAob3B0aW9uLnBlcnNpc3RlbnQgPT0gZmFsc2UgfHwgb3B0aW9uLnJlYWRvbmx5ID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB2ID0gdGhpcy5rdnNba11cclxuICAgICAgICAgICAgbGV0IHQgPSB0aGlzLmt0c1trXVxyXG4gICAgICAgICAgICBsZXQga2sgPSB0aGlzLl9maWVsZF8oaylcclxuICAgICAgICAgICAgdGhpcy5vbkJlZm9yZVNhdmUoayk7XHJcbiAgICAgICAgICAgIGlmICh2ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0ID09IFwib2JqZWN0XCIgfHwgdCA9PSAnYXJyYXknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2ssIEpTT04uc3RyaW5naWZ5KHYpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2ssIHYudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vbkFmdGVyU2F2ZShrKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coa2ssIHYpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5L+d5a2Y5pWw5o2uIFxyXG4gICAgICogQHBhcmFtIGtleXMg6ZyA6KaB5L+d5a2Y55qEa2V5W2xpc3Rd77yM5aaC5p6c5Li656m6IO+8jOWImeS/neWtmOWFqOmDqOWtl+autVxyXG4gICAgICovXHJcbiAgICBzYXZlKC4uLmtleXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIltEYXRhQ2VudGVyXSBzYXZlIDo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XCIpXHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5vbkJlZm9yZVNhdmVBbGwoKVxyXG4gICAgICAgICAgICB0aGlzLl9zYXZlQWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMub25BZnRlclNhdmVBbGwoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4ga2V5cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGsgPSBrZXlzW2ldXHJcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5rT3B0aW9uc1trXVxyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihcIltEYXRhQ2VudGVyXTogY2FuJ3QgZmluZCB0aGUga2V5IDpcIiArIGspXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL+atpOWtl+auteS4jeaUr+aMgeW6j+WIl+WMllxyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbi5wZXJzaXN0ZW50ID09IGZhbHNlIHx8IG9wdGlvbi5yZWFkb25seSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IHRoaXMua3ZzW2tdXHJcbiAgICAgICAgICAgICAgICBsZXQgdCA9IHRoaXMua3RzW2tdXHJcbiAgICAgICAgICAgICAgICBsZXQga2sgPSB0aGlzLl9maWVsZF8oaylcclxuICAgICAgICAgICAgICAgIHRoaXMub25CZWZvcmVTYXZlKGspO1xyXG4gICAgICAgICAgICAgICAgaWYgKHQgPT0gXCJvYmplY3RcIiB8fCB0ID09ICdhcnJheScpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShraywgSlNPTi5zdHJpbmdpZnkodikpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtrLCB2LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltEYXRhQ2VudGVyXSBcIiArIGtrICsgXCIg5L+d5a2Y5aSx6LSlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkFmdGVyU2F2ZShrKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtrLCB2KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0RhdGFDZW50ZXJdIHNhdmUgc3VjYyA6PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiKVxyXG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiIzFfY29pblwiLHRoaXMuZ2V0RGF0YShcImNvaW5cIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIGxldCBzID0gSlNPTi5zdHJpbmdpZnkodGhpcy5rdnMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjID0gdmFsdWUucmVwbGFjZSgvXFxcXD9cXFwiL2csIFwiJ1wiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZygnZGMudG9zdHJpbmc6Jywgcyk7XHJcbiAgICAgICAgcmV0dXJuIHNcclxuICAgIH1cclxuXHJcbiAgICBsb2FkRnJvbUpzb25PYmplY3QoYSkge1xyXG4gICAgICAgIGZvciAodmFyIGsgaW4gdGhpcy5rdnMpIHtcclxuICAgICAgICAgICAgbGV0IHYgPSBhW2tdXHJcbiAgICAgICAgICAgIGlmICh2ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2V0RGF0YShrLCB2KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShrLCB2KTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25Mb2FkKGspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25Mb2FkQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEZyb21TdHJpbmcocykge1xyXG4gICAgICAgIGxldCBhID0gSlNPTi5wYXJzZShzKTtcclxuICAgICAgICB0aGlzLmxvYWRGcm9tSnNvbk9iamVjdChhKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldEFuZFNhdmUoaW5pdFZhbHVlcz8pIHtcclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgZm9yICh2YXIgayBpbiBpbml0VmFsdWVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoaywgaW5pdFZhbHVlc1trXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zYXZlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgayBpbiB0aGlzLmt2cykge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmt2c1trXSA9IGFba11cclxuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShrLCB0aGlzLmRlZmF1bHRLdnNba10pXHJcbiAgICAgICAgICAgIHRoaXMub25Mb2FkKGspO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uTG9hZEFsbCgpXHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VKc29uKHMpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShzLnJlcGxhY2UoL1xcXFw/XFwnL2csICdcIicpKVxyXG4gICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlbmRSZWdpc3RlcihzLCBzZXJpYWxpemFibGUgPSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5fX25hbWVzcGFjZSA9IHM7XHJcbiAgICAgICAgRGF0YUNlbnRlci5hbGxkYXRhW3NdID0gdGhpcztcclxuICAgICAgICBpZiAoc2VyaWFsaXphYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZCgpXHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2F2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgb2ZmKGssIGNhbGxiYWNrLCB0YXJnZXQ/KSB7XHJcbiAgICAgICAgZXZ0Lm9mZihrLCBjYWxsYmFjaywgdGFyZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgb24oaywgY2FsbGJhY2ssIHRhcmdldD8pIHtcclxuICAgICAgICBldnQub24oaywgY2FsbGJhY2ssIHRhcmdldClcclxuICAgICAgICB0aGlzLnNldChrLCB0aGlzLmdldChrKSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0KGspIHtcclxuICAgICAgICBsZXQgc3RycyA9IGsuc3BsaXQoXCIuXCIpXHJcbiAgICAgICAgbGV0IG5hbWVzcGFjZSA9IHN0cnNbMF07XHJcbiAgICAgICAgbGV0IG5hbWUgPSBzdHJzWzFdO1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBEYXRhQ2VudGVyLmFsbGRhdGFbbmFtZXNwYWNlXVxyXG4gICAgICAgIGlmICh0YXJnZXQpXHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRbbmFtZV1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXQoaywgdikge1xyXG4gICAgICAgIGxldCBzdHJzID0gay5zcGxpdChcIi5cIilcclxuICAgICAgICBsZXQgbmFtZXNwYWNlID0gc3Ryc1swXTtcclxuICAgICAgICBsZXQgbmFtZSA9IHN0cnNbMV07XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IERhdGFDZW50ZXIuYWxsZGF0YVtuYW1lc3BhY2VdXHJcbiAgICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0YXJnZXRbbmFtZV0gPSB2O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVnaXN0ZXIoY2xzKSB7XHJcbiAgICAgICAgaWYgKENDX0VESVRPUikgcmV0dXJuO1xyXG4gICAgICAgIGxldCB2ID0gbmV3IGNscygpO1xyXG4gICAgICAgIGxldCBkID0gYWxsX3JlZ2lzdGVkX2NsYXNzW2Nsc11cclxuICAgICAgICAvLyBnLnNldEdsb2JhbEluc3RhbmNlKHYsIGQubmFtZSlcclxuICAgICAgICB3aW5kb3dbZC5uYW1lXSA9IHY7XHJcbiAgICAgICAgdi5yZWdpc3RlckZpZWxkcygpXHJcbiAgICAgICAgcmV0dXJuIHY7XHJcbiAgICB9XHJcbn0iXX0=