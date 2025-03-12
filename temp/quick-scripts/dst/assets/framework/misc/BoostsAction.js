
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/BoostsAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '47da3PXgqdE55aSvY0ox9B4', 'BoostsAction');
// framework/misc/BoostsAction.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeTo = exports.Shake = exports.V2ChangeAction = exports.ValueChangeAction = void 0;
var ValueChangeAction = /** @class */ (function (_super) {
    __extends(ValueChangeAction, _super);
    function ValueChangeAction(duration, from, to, callback, target) {
        var _this = _super.call(this) || this;
        _this.delta = _this.sub(to, from);
        _this.setDuration(duration);
        _this.callback = callback;
        _this.start = from;
        _this.end = to;
        _this.callbackTarget = target;
        return _this;
    }
    ValueChangeAction.prototype.sub = function (x, y) {
        return (x - y);
    };
    ValueChangeAction.prototype.add = function (x, y) {
        return x + y;
    };
    ValueChangeAction.prototype.mul = function (x, y) {
        return x * y;
    };
    ValueChangeAction.prototype.update = function (dt) {
        dt = this._computeEaseTime(dt);
        var v = this.add(this.start, this.mul(this.delta, dt));
        this.callback.call(this.callbackTarget, v);
    };
    ValueChangeAction.create = function (duration, from, to, callback, target) {
        return new ValueChangeAction(duration, from, to, callback, target);
    };
    return ValueChangeAction;
}(cc.ActionInterval));
exports.ValueChangeAction = ValueChangeAction;
var V2ChangeAction = /** @class */ (function (_super) {
    __extends(V2ChangeAction, _super);
    function V2ChangeAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    V2ChangeAction.prototype.sub = function (x, y) {
        return x.sub(x, y);
    };
    V2ChangeAction.prototype.add = function (x, y) {
        return x.add(x, y);
    };
    V2ChangeAction.prototype.mul = function (x, y) {
        return x.mul(x, y);
    };
    return V2ChangeAction;
}(ValueChangeAction));
exports.V2ChangeAction = V2ChangeAction;
var Shake = /** @class */ (function (_super) {
    __extends(Shake, _super);
    function Shake() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._initial_x = 0;
        _this._initial_y = 0;
        _this._strength_x = 0;
        _this._strength_y = 0;
        return _this;
    }
    /**
     *  创建抖动动画
     * @param {number} duration     动画持续时长
     * @param {number} strength_x   抖动幅度： x方向
     * @param {number} strength_y   抖动幅度： y方向
     * @returns {Shake}
     */
    Shake.create = function (duration, strength_x, strength_y) {
        var act = new Shake();
        act.initWithDuration(duration, strength_x, strength_y);
        return act;
    };
    Shake.prototype.initWithDuration = function (duration, strength_x, strength_y) {
        cc.ActionInterval.prototype['initWithDuration'].apply(this, arguments);
        this._strength_x = strength_x;
        this._strength_y = strength_y;
        return true;
    };
    Shake.prototype.fgRangeRand = function (min, max) {
        var rnd = Math.random();
        return rnd * (max - min) + min;
    };
    Shake.prototype.update = function (time) {
        var randx = this.fgRangeRand(-this._strength_x, this._strength_x);
        var randy = this.fgRangeRand(-this._strength_y, this._strength_y);
        this.getTarget().setPosition(randx + this._initial_x, randy + this._initial_y);
    };
    Shake.prototype.startWithTarget = function (target) {
        cc.ActionInterval.prototype['startWithTarget'].apply(this, arguments);
        this._initial_x = target.x;
        this._initial_y = target.y;
    };
    Shake.prototype.stop = function () {
        this.getTarget().setPosition(new cc.Vec2(this._initial_x, this._initial_y));
        cc.ActionInterval.prototype['stop'].apply(this);
    };
    return Shake;
}(cc.ActionInterval));
exports.Shake = Shake;
var changeTo = function (d, v, v2, f) { return ValueChangeAction.create(d, v, v2, function (_) { return f(_); }); };
exports.changeTo = changeTo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxCb29zdHNBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBQXVDLHFDQUFpQjtJQXdCcEQsMkJBQVksUUFBUSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsUUFBUSxFQUFDLE1BQU87UUFBN0MsWUFFSSxpQkFBTyxTQU9WO1FBTkcsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRyxJQUFJLENBQUMsQ0FBQztRQUNqQyxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLEtBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2QsS0FBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7O0lBQ2pDLENBQUM7SUF4QkQsK0JBQUcsR0FBSCxVQUFJLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxDQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsK0JBQUcsR0FBSCxVQUFJLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLEdBQUUsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFFRCwrQkFBRyxHQUFILFVBQUksQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsR0FBQyxDQUFDLENBQUM7SUFDZixDQUFDO0lBWUQsa0NBQU0sR0FBTixVQUFPLEVBQUU7UUFFTCxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFL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QyxVQUFVLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRU0sK0JBQWUsR0FBdEIsVUFBdUIsTUFBYztRQUVqQyxFQUFFLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUMsU0FBUyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0sb0JBQUksR0FBWDtRQUVJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFFM0UsRUFBRSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDTCxZQUFDO0FBQUQsQ0F4REEsQUF3REMsQ0F4RDJCLEVBQUUsQ0FBQyxjQUFjLEdBd0Q1QztBQXhEYSxzQkFBSztBQXlEWixJQUFJLFFBQVEsR0FBRyxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSyxPQUFBLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBSixDQUFJLENBQUMsRUFBN0MsQ0FBNkMsQ0FBQTtBQUF6RSxRQUFBLFFBQVEsWUFBaUUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmV4cG9ydCBjbGFzcyBWYWx1ZUNoYW5nZUFjdGlvbiBleHRlbmRzIGNjLkFjdGlvbkludGVydmFsXHJcbntcclxuICAgIFt4OiBzdHJpbmddOiBhbnk7XHJcbiAgICBzdGFydDphbnk7XHJcbiAgICBlbmQ6YW55O1xyXG4gICAgZGVsdGE6YW55O1xyXG4gICAgY2FsbGJhY2s6RnVuY3Rpb247XHJcbiAgICBjYWxsYmFja1RhcmdldCA6YW55O1xyXG5cclxuICAgIHN1Yih4LHkpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICggeCAtIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCh4LHkpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHggK3k7XHJcbiAgICB9XHJcblxyXG4gICAgbXVsKHgseSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4geCp5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGR1cmF0aW9uLGZyb20sdG8sY2FsbGJhY2ssdGFyZ2V0PylcclxuICAgIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZGVsdGEgPSB0aGlzLnN1Yih0byAsIGZyb20pO1xyXG4gICAgICAgIHRoaXMuc2V0RHVyYXRpb24oZHVyYXRpb24pO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICB0aGlzLnN0YXJ0ID0gZnJvbTtcclxuICAgICAgICB0aGlzLmVuZCA9IHRvO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tUYXJnZXQgPSB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpXHJcbiAgICB7XHJcbiAgICAgICAgZHQgPSB0aGlzLl9jb21wdXRlRWFzZVRpbWUoZHQpO1xyXG4gICAgICAgIGxldCB2ID0gdGhpcy5hZGQodGhpcy5zdGFydCx0aGlzLm11bCh0aGlzLmRlbHRhLGR0KSlcclxuICAgICAgICB0aGlzLmNhbGxiYWNrLmNhbGwodGhpcy5jYWxsYmFja1RhcmdldCx2KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZShkdXJhdGlvbixmcm9tLHRvLGNhbGxiYWNrLHRhcmdldD8pOlZhbHVlQ2hhbmdlQWN0aW9uXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWYWx1ZUNoYW5nZUFjdGlvbihkdXJhdGlvbixmcm9tLHRvLGNhbGxiYWNrLHRhcmdldCk7XHJcbiAgICB9XHJcbiAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFYyQ2hhbmdlQWN0aW9uIGV4dGVuZHMgVmFsdWVDaGFuZ2VBY3Rpb25cclxue1xyXG4gICAgc3ViKHgseSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4geC5zdWIoeCx5KVxyXG4gICAgfVxyXG5cclxuICAgIGFkZCh4LHkpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHguYWRkKHgseSlcclxuICAgIH1cclxuXHJcbiAgICBtdWwoeCx5KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB4Lm11bCh4LHkpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgIGNsYXNzIFNoYWtlIGV4dGVuZHMgY2MuQWN0aW9uSW50ZXJ2YWxcclxue1xyXG4gXHJcbiAgICBwcml2YXRlIF9pbml0aWFsX3g6bnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX2luaXRpYWxfeTpudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfc3RyZW5ndGhfeDpudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfc3RyZW5ndGhfeTpudW1iZXIgPSAwO1xyXG4gXHJcbiAgICAvKipcclxuICAgICAqICDliJvlu7rmipbliqjliqjnlLtcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiAgICAg5Yqo55S75oyB57ut5pe26ZW/XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RyZW5ndGhfeCAgIOaKluWKqOW5heW6pu+8miB45pa55ZCRXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RyZW5ndGhfeSAgIOaKluWKqOW5heW6pu+8miB55pa55ZCRXHJcbiAgICAgKiBAcmV0dXJucyB7U2hha2V9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKGR1cmF0aW9uOm51bWJlcixzdHJlbmd0aF94Om51bWJlcixzdHJlbmd0aF95Om51bWJlcik6U2hha2VcclxuICAgIHtcclxuICAgICAgICBsZXQgYWN0OlNoYWtlID0gbmV3IFNoYWtlKCk7XHJcbiAgICAgICAgYWN0LmluaXRXaXRoRHVyYXRpb24oIGR1cmF0aW9uLHN0cmVuZ3RoX3gsc3RyZW5ndGhfeSApO1xyXG4gICAgICAgIHJldHVybiBhY3Q7XHJcbiAgICB9XHJcbiBcclxuICAgIHB1YmxpYyBpbml0V2l0aER1cmF0aW9uKGR1cmF0aW9uOm51bWJlcixzdHJlbmd0aF94Om51bWJlcixzdHJlbmd0aF95Om51bWJlcik6Ym9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGNjLkFjdGlvbkludGVydmFsLnByb3RvdHlwZVsnaW5pdFdpdGhEdXJhdGlvbiddLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLl9zdHJlbmd0aF94ID0gc3RyZW5ndGhfeDtcclxuICAgICAgICB0aGlzLl9zdHJlbmd0aF95ID0gc3RyZW5ndGhfeTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuIFxyXG4gICAgcHVibGljIGZnUmFuZ2VSYW5kKG1pbjpudW1iZXIsbWF4Om51bWJlcik6bnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJuZDpudW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIHJldHVybiBybmQgKiAobWF4IC0gbWluKSArIG1pbjtcclxuICAgIH1cclxuIFxyXG4gICAgcHVibGljIHVwZGF0ZSh0aW1lOm51bWJlcik6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCByYW5keCA9IHRoaXMuZmdSYW5nZVJhbmQoLXRoaXMuX3N0cmVuZ3RoX3gsdGhpcy5fc3RyZW5ndGhfeCk7XHJcbiAgICAgICAgbGV0IHJhbmR5ID0gdGhpcy5mZ1JhbmdlUmFuZCgtdGhpcy5fc3RyZW5ndGhfeSx0aGlzLl9zdHJlbmd0aF95KTtcclxuICAgICAgICB0aGlzLmdldFRhcmdldCgpLnNldFBvc2l0aW9uKHJhbmR4ICsgdGhpcy5faW5pdGlhbF94LHJhbmR5ICsgdGhpcy5faW5pdGlhbF95KTtcclxuICAgIH1cclxuIFxyXG4gICAgcHVibGljIHN0YXJ0V2l0aFRhcmdldCh0YXJnZXQ6Y2MuTm9kZSk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNjLkFjdGlvbkludGVydmFsLnByb3RvdHlwZVsnc3RhcnRXaXRoVGFyZ2V0J10uYXBwbHkodGhpcyxhcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMuX2luaXRpYWxfeCA9IHRhcmdldC54O1xyXG4gICAgICAgIHRoaXMuX2luaXRpYWxfeSA9IHRhcmdldC55O1xyXG4gICAgfVxyXG4gXHJcbiAgICBwdWJsaWMgc3RvcCgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmdldFRhcmdldCgpLnNldFBvc2l0aW9uKG5ldyBjYy5WZWMyKHRoaXMuX2luaXRpYWxfeCx0aGlzLl9pbml0aWFsX3kpKTtcclxuIFxyXG4gICAgICAgIGNjLkFjdGlvbkludGVydmFsLnByb3RvdHlwZVsnc3RvcCddLmFwcGx5KHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBsZXQgY2hhbmdlVG8gPSAoZCwgdiwgdjIsIGYpID0+IFZhbHVlQ2hhbmdlQWN0aW9uLmNyZWF0ZShkLCB2LCB2MiwgXyA9PiBmKF8pKSJdfQ==