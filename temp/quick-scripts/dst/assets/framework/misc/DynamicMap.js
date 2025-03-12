
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/DynamicMap.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '23eb46/5IRC34xGYDEq3IH4', 'DynamicMap');
// framework/misc/DynamicMap.ts

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
var Signal_1 = require("../core/Signal");
var ccUtil_1 = require("../utils/ccUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var Direction;
(function (Direction) {
    Direction[Direction["Horizontal"] = 0] = "Horizontal";
    Direction[Direction["Vertical"] = 1] = "Vertical"; // bottom to top
})(Direction || (Direction = {}));
var DynamicMap = /** @class */ (function (_super) {
    __extends(DynamicMap, _super);
    function DynamicMap() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nextSeg = null;
        _this.segIdx = -1;
        _this.segments = [];
        // 从哪里开始创建 
        _this.cursor = -1;
        //是否是无尽
        _this.isInfinite = false;
        _this.dir = Direction.Horizontal;
        _this.signal = new Signal_1.default();
        _this.isEnd = false;
        _this.running = false;
        _this.isLoadOnce = false;
        return _this;
    }
    DynamicMap.prototype.onLoad = function () { };
    DynamicMap.prototype.onDestroy = function () {
        this.signal.clear();
    };
    DynamicMap.prototype.start = function () {
        if (this.dir == Direction.Horizontal) {
            if (this.cursor < 0) {
                this.cursor = cc.visibleRect.width;
            }
        }
        else {
            if (this.cursor < 0)
                this.cursor = cc.visibleRect.height;
        }
    };
    /**bLoadAll 是否一次性加载地图 */
    DynamicMap.prototype.begin = function (bLoadAll) {
        this.running = true;
        this.isLoadOnce = bLoadAll;
        //开始生成关卡
        console.warn("开始生成关卡");
        var segcount = this.segments.length;
        if (bLoadAll) {
            for (var i = 0; i < segcount + 1; i++) {
                this.curSeg = this.createNextSeg();
            }
        }
        else {
            if (this.curSeg == null) {
                this.curSeg = this.createNextSeg();
            }
        }
    };
    DynamicMap.prototype.addSements = function () {
        var _a;
        var prefabs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            prefabs[_i] = arguments[_i];
        }
        (_a = this.segments).push.apply(_a, prefabs);
    };
    DynamicMap.prototype._addToSeg = function () {
        //get random prefab
        // this.levels.push(prefab);
    };
    DynamicMap.prototype.next = function () {
        // this._addToSeg();
    };
    DynamicMap.prototype.createNextSeg = function () {
        var idx = this.segIdx + 1;
        if (idx > this.segments.length - 1) {
            if (this.isInfinite) {
                this.next();
            }
            else {
                //没有关卡了
                console.log("没有关卡段了");
                this.isEnd = true;
                this.signal.fire("end", this.cursor);
                return;
            }
        }
        this.segIdx = cc.misc.clampf(idx, 0, this.segments.length - 1);
        var prefab = this.segments[this.segIdx];
        console.warn("create next level:", prefab.name);
        var node = cc.instantiate(prefab);
        // let roadType = this.levels_roadAvatar[this.levelIndex]
        if (node == null) {
            console.error("create segment failed:", this.segments, this.segIdx);
            return null;
        }
        if (this.dir == Direction.Horizontal) {
            node.setPosition(this.cursor, 0);
            this.cursor += node.width - 8;
        }
        else {
            node.setPosition(0, this.cursor);
            this.cursor += node.height - 8;
        }
        this.signal.fire("newSegCreated", node);
        //删除
        this.segments.shift();
        this.segIdx -= 1;
        node.name = prefab.name;
        node.setParent(this.node);
        return node;
    };
    /**在camera 左边 */
    DynamicMap.prototype.isOutOfCameraLeft = function (node) {
        var camera = cc.Camera.main;
        // var rect = node.getBoundingBoxToWorld();
        var rect = ccUtil_1.default.getWorldBoundingBox(node);
        var p = camera.getWorldToCameraPoint(cc.v2(rect.xMax, 0), cc.Vec2.ZERO);
        if (p.x < 0) {
            return true;
        }
        return false;
    };
    ;
    DynamicMap.prototype.update = function () {
        if (this.isLoadOnce)
            return;
        if (!this.running)
            return;
        for (var i = 0; i < this.node.childrenCount; i++) {
            var child = this.node.children[i];
            if (this.curSeg == child)
                continue;
            if (this.nextSeg == child)
                continue;
            var b = this.isOutOfCameraLeft(child);
            if (b) {
                console.warn("remove segment");
                this.signal.fire('removeSeg', child);
                child.destroy();
            }
        }
        if (this.isEnd)
            return;
        //vertical  check 
        // let h = cc.visibleRect.height;
        // let p = cc.Camera.main.getCameraToWorldPoint(cc.v2(0, h), cc.Vec2.ZERO);
        //horizentl check
        var end;
        var segEnd;
        if (this.dir == Direction.Horizontal) {
            var w = cc.visibleRect.width;
            end = cc.Camera.main.getCameraToWorldPoint(cc.v2(w, 0), cc.Vec2.ZERO).x;
            // segEnd = this.curSeg.getBoundingBoxToWorld().xMax;
            segEnd = ccUtil_1.default.getWorldBoundingBox(this.curSeg).xMax;
        }
        else {
            var h = cc.visibleRect.height;
            end = cc.Camera.main.getCameraToWorldPoint(cc.v2(0, h), cc.Vec2.ZERO).y;
            // segEnd = this.curSeg.getBoundingBoxToWorld().yMax;
            segEnd = ccUtil_1.default.getWorldBoundingBox(this.curSeg).yMax;
        }
        if (segEnd - end <= 10) {
            if (this.nextSeg == null) {
                //create next 
                this.nextSeg = this.createNextSeg();
            }
        }
        if (segEnd - end <= 0) {
            //enter next 
            // console.log("enter next level");
            this.curSeg = this.nextSeg;
            this.nextSeg = null;
        }
        // check bounding
    };
    __decorate([
        property(cc.Prefab)
    ], DynamicMap.prototype, "segments", void 0);
    __decorate([
        property({ displayName: 'start' })
    ], DynamicMap.prototype, "cursor", void 0);
    __decorate([
        property({ type: cc.Enum(Direction) })
    ], DynamicMap.prototype, "dir", void 0);
    DynamicMap = __decorate([
        ccclass,
        menu("gamelib/DynamicMap")
    ], DynamicMap);
    return DynamicMap;
}(cc.Component));
exports.default = DynamicMap;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxEeW5hbWljTWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUNwQywwQ0FBcUM7QUFFL0IsSUFBQSxLQUE4QixFQUFFLENBQUMsVUFBVSxFQUF6QyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxJQUFJLFVBQWtCLENBQUM7QUFFbEQsSUFBSyxTQUdKO0FBSEQsV0FBSyxTQUFTO0lBQ1YscURBQVUsQ0FBQTtJQUNWLGlEQUFRLENBQUEsQ0FBQyxnQkFBZ0I7QUFDN0IsQ0FBQyxFQUhJLFNBQVMsS0FBVCxTQUFTLFFBR2I7QUFJRDtJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTZLQztRQTFLRyxhQUFPLEdBQVksSUFBSSxDQUFBO1FBQ3ZCLFlBQU0sR0FBVyxDQUFDLENBQUMsQ0FBQztRQUVwQixjQUFRLEdBQWdCLEVBQUUsQ0FBQTtRQUMxQixXQUFXO1FBRVgsWUFBTSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBRXBCLE9BQU87UUFDUCxnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUc1QixTQUFHLEdBQWMsU0FBUyxDQUFDLFVBQVUsQ0FBQztRQUV0QyxZQUFNLEdBQVcsSUFBSSxnQkFBTSxFQUFFLENBQUM7UUFFOUIsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUV2QixhQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLGdCQUFVLEdBQVksS0FBSyxDQUFDOztJQXNKaEMsQ0FBQztJQXBKRywyQkFBTSxHQUFOLGNBQVcsQ0FBQztJQUNaLDhCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ3ZCLENBQUM7SUFDRCwwQkFBSyxHQUFMO1FBQ0ksSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDbEMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENB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QUFFLENBQUM7OENBQ2Y7SUFNcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDOzJDQUNEO0lBZnJCLFVBQVU7UUFGOUIsT0FBTztRQUNQLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztPQUNOLFVBQVUsQ0E2SzlCO0lBQUQsaUJBQUM7Q0E3S0QsQUE2S0MsQ0E3S3VDLEVBQUUsQ0FBQyxTQUFTLEdBNktuRDtrQkE3S29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2lnbmFsIGZyb20gXCIuLi9jb3JlL1NpZ25hbFwiO1xyXG5pbXBvcnQgY2NVdGlsIGZyb20gXCIuLi91dGlscy9jY1V0aWxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIG1lbnUgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5lbnVtIERpcmVjdGlvbiB7XHJcbiAgICBIb3Jpem9udGFsLC8vbGVmdCB0byByaWdodFxyXG4gICAgVmVydGljYWwgLy8gYm90dG9tIHRvIHRvcFxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5AbWVudShcImdhbWVsaWIvRHluYW1pY01hcFwiKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljTWFwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjdXJTZWc6IGNjLk5vZGU7XHJcbiAgICBuZXh0U2VnOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgc2VnSWR4OiBudW1iZXIgPSAtMTtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWdtZW50czogY2MuUHJlZmFiW10gPSBbXVxyXG4gICAgLy8g5LuO5ZOq6YeM5byA5aeL5Yib5bu6IFxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6ICdzdGFydCcgfSlcclxuICAgIGN1cnNvcjogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgLy/mmK/lkKbmmK/ml6DlsL1cclxuICAgIGlzSW5maW5pdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5FbnVtKERpcmVjdGlvbikgfSlcclxuICAgIGRpcjogRGlyZWN0aW9uID0gRGlyZWN0aW9uLkhvcml6b250YWw7XHJcblxyXG4gICAgc2lnbmFsOiBTaWduYWwgPSBuZXcgU2lnbmFsKCk7XHJcblxyXG4gICAgaXNFbmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBydW5uaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgaXNMb2FkT25jZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uTG9hZCgpIHsgfVxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc2lnbmFsLmNsZWFyKClcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpciA9PSBEaXJlY3Rpb24uSG9yaXpvbnRhbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJzb3IgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnNvciA9IGNjLnZpc2libGVSZWN0LndpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3Vyc29yIDwgMClcclxuICAgICAgICAgICAgICAgIHRoaXMuY3Vyc29yID0gY2MudmlzaWJsZVJlY3QuaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipiTG9hZEFsbCDmmK/lkKbkuIDmrKHmgKfliqDovb3lnLDlm74gKi9cclxuICAgIGJlZ2luKGJMb2FkQWxsKSB7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzTG9hZE9uY2UgPSBiTG9hZEFsbDtcclxuICAgICAgICAvL+W8gOWni+eUn+aIkOWFs+WNoVxyXG4gICAgICAgIGNvbnNvbGUud2FybihcIuW8gOWni+eUn+aIkOWFs+WNoVwiKVxyXG4gICAgICAgIGxldCBzZWdjb3VudCA9IHRoaXMuc2VnbWVudHMubGVuZ3RoO1xyXG4gICAgICAgIGlmIChiTG9hZEFsbCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlZ2NvdW50ICsgMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1clNlZyA9IHRoaXMuY3JlYXRlTmV4dFNlZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VyU2VnID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyU2VnID0gdGhpcy5jcmVhdGVOZXh0U2VnKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU2VtZW50cyguLi5wcmVmYWJzOiBjYy5QcmVmYWJbXSkge1xyXG4gICAgICAgIHRoaXMuc2VnbWVudHMucHVzaCguLi5wcmVmYWJzKTtcclxuICAgIH1cclxuXHJcbiAgICBfYWRkVG9TZWcoKSB7XHJcbiAgICAgICAgLy9nZXQgcmFuZG9tIHByZWZhYlxyXG4gICAgICAgIC8vIHRoaXMubGV2ZWxzLnB1c2gocHJlZmFiKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KCkge1xyXG4gICAgICAgIC8vIHRoaXMuX2FkZFRvU2VnKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTmV4dFNlZygpIHtcclxuXHJcbiAgICAgICAgbGV0IGlkeCA9IHRoaXMuc2VnSWR4ICsgMVxyXG4gICAgICAgIGlmIChpZHggPiB0aGlzLnNlZ21lbnRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbmZpbml0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL+ayoeacieWFs+WNoeS6hlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmsqHmnInlhbPljaHmrrXkuoZcIilcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNFbmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaWduYWwuZmlyZShcImVuZFwiLCB0aGlzLmN1cnNvcilcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZWdJZHggPSBjYy5taXNjLmNsYW1wZihpZHgsIDAsIHRoaXMuc2VnbWVudHMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgbGV0IHByZWZhYiA9IHRoaXMuc2VnbWVudHNbdGhpcy5zZWdJZHhdXHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiY3JlYXRlIG5leHQgbGV2ZWw6XCIsIHByZWZhYi5uYW1lKTtcclxuICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYilcclxuICAgICAgICAvLyBsZXQgcm9hZFR5cGUgPSB0aGlzLmxldmVsc19yb2FkQXZhdGFyW3RoaXMubGV2ZWxJbmRleF1cclxuICAgICAgICBpZiAobm9kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJjcmVhdGUgc2VnbWVudCBmYWlsZWQ6XCIsIHRoaXMuc2VnbWVudHMsIHRoaXMuc2VnSWR4KVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGlyID09IERpcmVjdGlvbi5Ib3Jpem9udGFsKSB7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24odGhpcy5jdXJzb3IsIDApO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnNvciArPSBub2RlLndpZHRoIC0gODtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIHRoaXMuY3Vyc29yKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJzb3IgKz0gbm9kZS5oZWlnaHQgLSA4O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNpZ25hbC5maXJlKFwibmV3U2VnQ3JlYXRlZFwiLCBub2RlKTtcclxuICAgICAgICAvL+WIoOmZpFxyXG4gICAgICAgIHRoaXMuc2VnbWVudHMuc2hpZnQoKTtcclxuICAgICAgICB0aGlzLnNlZ0lkeCAtPSAxXHJcbiAgICAgICAgbm9kZS5uYW1lID0gcHJlZmFiLm5hbWU7XHJcbiAgICAgICAgbm9kZS5zZXRQYXJlbnQodGhpcy5ub2RlKTtcclxuICAgICAgICByZXR1cm4gbm9kZVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuWcqGNhbWVyYSDlt6bovrkgKi9cclxuICAgIGlzT3V0T2ZDYW1lcmFMZWZ0KG5vZGUpIHtcclxuICAgICAgICBsZXQgY2FtZXJhID0gY2MuQ2FtZXJhLm1haW47XHJcbiAgICAgICAgLy8gdmFyIHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpO1xyXG4gICAgICAgIHZhciByZWN0ID0gY2NVdGlsLmdldFdvcmxkQm91bmRpbmdCb3gobm9kZSk7XHJcbiAgICAgICAgdmFyIHAgPSBjYW1lcmEuZ2V0V29ybGRUb0NhbWVyYVBvaW50KGNjLnYyKHJlY3QueE1heCwgMCksIGNjLlZlYzIuWkVSTyk7XHJcbiAgICAgICAgaWYgKHAueCA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0xvYWRPbmNlKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHJldHVybjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLm5vZGUuY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VyU2VnID09IGNoaWxkKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubmV4dFNlZyA9PSBjaGlsZCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGxldCBiID0gdGhpcy5pc091dE9mQ2FtZXJhTGVmdChjaGlsZCk7XHJcbiAgICAgICAgICAgIGlmIChiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJyZW1vdmUgc2VnbWVudFwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaWduYWwuZmlyZSgncmVtb3ZlU2VnJywgY2hpbGQpXHJcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmQpIHJldHVybjtcclxuICAgICAgICAvL3ZlcnRpY2FsICBjaGVjayBcclxuICAgICAgICAvLyBsZXQgaCA9IGNjLnZpc2libGVSZWN0LmhlaWdodDtcclxuICAgICAgICAvLyBsZXQgcCA9IGNjLkNhbWVyYS5tYWluLmdldENhbWVyYVRvV29ybGRQb2ludChjYy52MigwLCBoKSwgY2MuVmVjMi5aRVJPKTtcclxuXHJcbiAgICAgICAgLy9ob3JpemVudGwgY2hlY2tcclxuXHJcbiAgICAgICAgbGV0IGVuZFxyXG4gICAgICAgIGxldCBzZWdFbmRcclxuICAgICAgICBpZiAodGhpcy5kaXIgPT0gRGlyZWN0aW9uLkhvcml6b250YWwpIHtcclxuICAgICAgICAgICAgbGV0IHcgPSBjYy52aXNpYmxlUmVjdC53aWR0aDtcclxuICAgICAgICAgICAgZW5kID0gY2MuQ2FtZXJhLm1haW4uZ2V0Q2FtZXJhVG9Xb3JsZFBvaW50KGNjLnYyKHcsIDApLCBjYy5WZWMyLlpFUk8pLnhcclxuICAgICAgICAgICAgLy8gc2VnRW5kID0gdGhpcy5jdXJTZWcuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueE1heDtcclxuICAgICAgICAgICAgc2VnRW5kID0gY2NVdGlsLmdldFdvcmxkQm91bmRpbmdCb3godGhpcy5jdXJTZWcpLnhNYXg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGggPSBjYy52aXNpYmxlUmVjdC5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGVuZCA9IGNjLkNhbWVyYS5tYWluLmdldENhbWVyYVRvV29ybGRQb2ludChjYy52MigwLCBoKSwgY2MuVmVjMi5aRVJPKS55O1xyXG4gICAgICAgICAgICAvLyBzZWdFbmQgPSB0aGlzLmN1clNlZy5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55TWF4O1xyXG4gICAgICAgICAgICBzZWdFbmQgPSBjY1V0aWwuZ2V0V29ybGRCb3VuZGluZ0JveCh0aGlzLmN1clNlZykueU1heDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZWdFbmQgLSBlbmQgPD0gMTApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubmV4dFNlZyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NyZWF0ZSBuZXh0IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0U2VnID0gdGhpcy5jcmVhdGVOZXh0U2VnKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VnRW5kIC0gZW5kIDw9IDApIHtcclxuICAgICAgICAgICAgLy9lbnRlciBuZXh0IFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVudGVyIG5leHQgbGV2ZWxcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY3VyU2VnID0gdGhpcy5uZXh0U2VnXHJcbiAgICAgICAgICAgIHRoaXMubmV4dFNlZyA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNoZWNrIGJvdW5kaW5nXHJcblxyXG4gICAgfVxyXG59Il19