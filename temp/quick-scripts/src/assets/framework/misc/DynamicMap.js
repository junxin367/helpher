"use strict";
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