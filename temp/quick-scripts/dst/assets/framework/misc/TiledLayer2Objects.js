
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/TiledLayer2Objects.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ba77gH8QZHvZusJPKNyE8e', 'TiledLayer2Objects');
// framework/misc/TiledLayer2Objects.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var TiledLayer2Objects = /** @class */ (function (_super) {
    __extends(TiledLayer2Objects, _super);
    function TiledLayer2Objects() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mw = 0;
        _this.mh = 0;
        _this.tw = 0;
        _this.th = 0;
        return _this;
    }
    TiledLayer2Objects.prototype.onLoad = function () {
        this.tiledmap = this.getComponent(cc.TiledMap);
        var size = this.tiledmap.getMapSize();
        this.mw = size.width;
        this.mh = size.height;
        var tilesize = this.tiledmap.getTileSize();
        this.tw = tilesize.width;
        this.th = tilesize.height;
        this.ht = cc.v2(this.tw / 2, this.th / 2);
    };
    TiledLayer2Objects.prototype.start = function () {
    };
    TiledLayer2Objects.prototype.IDX = function (x, y) {
        if (x instanceof cc.Vec2) {
            y = x.y;
            x = x.x;
        }
        var idx = y * this.mw + x;
        return idx;
    };
    TiledLayer2Objects.prototype.createObjects = function (layerName, onProgress) {
        if (this._objectFactory == null) {
            console.log("[Tiledlayer2object] no factory provided!");
            return Promise.reject("no factory provided!");
        }
        this.objectLayer = this.tiledmap.getLayer(layerName);
        this.objectLayer.enabled = false;
        //从上到下，从左到右
        var sum = 0;
        var promises = [];
        var i = 0;
        for (var col = 0; col < this.mw; col++) {
            for (var row = 0; row < this.mh; row++) {
                var tilexy = cc.v2(col, row);
                var gid = this.objectLayer.getTileGIDAt(tilexy);
                if (gid != 0) {
                    //create obj of gid at xy 
                    var r = this.createObj(gid, tilexy);
                    if (r) {
                        r.then(function (v) { return onProgress && onProgress(++i, sum); }).catch(function (e) { return console.log(e); });
                        promises.push(r);
                    }
                }
            }
        }
        sum = promises.length;
        return Promise.all(promises);
    };
    TiledLayer2Objects.prototype.setFactory = function (factory) {
        this._objectFactory = factory;
    };
    TiledLayer2Objects.prototype.createObj = function (gid, tilexy) {
        var properties = this.tiledmap.getPropertiesForGID(gid);
        if (!gid) {
            // console.warn(`gid :${gid} has no properties`)
            return;
        }
        var pos = this.objectLayer.getPositionAt(tilexy);
        pos.addSelf(cc.v2(this.ht.x, this.ht.y));
        var attrs = {
            pos: pos, gid: gid,
            tileId: this.IDX(tilexy),
            properties: properties, tilexy: tilexy
        };
        return this._objectFactory.createObject(this.objectLayer, attrs);
    };
    TiledLayer2Objects = __decorate([
        ccclass,
        menu("Tiledmap工具/TiledLayer2Objects")
    ], TiledLayer2Objects);
    return TiledLayer2Objects;
}(cc.Component));
exports.default = TiledLayer2Objects;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxUaWxlZExheWVyMk9iamVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUE4QixFQUFFLENBQUMsVUFBVSxFQUF6QyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxJQUFJLFVBQWtCLENBQUM7QUFpQmxEO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBd0ZDO1FBcEZHLFFBQUUsR0FBVyxDQUFDLENBQUM7UUFDZixRQUFFLEdBQVcsQ0FBQyxDQUFBO1FBQ2QsUUFBRSxHQUFXLENBQUMsQ0FBQztRQUNmLFFBQUUsR0FBVyxDQUFDLENBQUM7O0lBaUZuQixDQUFDO0lBN0VHLG1DQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN0QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDMUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFOUMsQ0FBQztJQUVELGtDQUFLLEdBQUw7SUFFQSxDQUFDO0lB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LENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN4QyxJQUFJLEtBQUssR0FBRztZQUNSLEdBQUcsS0FBQSxFQUFFLEdBQUcsS0FBQTtZQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUFFLFVBQVUsWUFBQSxFQUFFLE1BQU0sUUFBQTtTQUN6RCxDQUFBO1FBQ0QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFyRmdCLGtCQUFrQjtRQUZ0QyxPQUFPO1FBQ1AsSUFBSSxDQUFDLCtCQUErQixDQUFDO09BQ2pCLGtCQUFrQixDQXdGdEM7SUFBRCx5QkFBQztDQXhGRCxBQXdGQyxDQXhGK0MsRUFBRSxDQUFDLFNBQVMsR0F3RjNEO2tCQXhGb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgbWVudSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVBdHRycyB7XHJcbiAgICBwb3M6IGNjLlZlYzJcclxuICAgIGdpZDogbnVtYmVyXHJcbiAgICB0aWxlSWQ6IG51bWJlclxyXG4gICAgcHJvcGVydGllcyxcclxuICAgIHRpbGV4eTogY2MuVmVjMlxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVPYmplY3RGYWN0b3J5SW50ZXJmYWNlIHtcclxuICAgIGNyZWF0ZU9iamVjdChvYmplY3RMYXllcjogY2MuVGlsZWRMYXllciwgYXR0cnM6IFRpbGVBdHRycyk7XHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbkBtZW51KFwiVGlsZWRtYXDlt6XlhbcvVGlsZWRMYXllcjJPYmplY3RzXCIpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGVkTGF5ZXIyT2JqZWN0cyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgdGlsZWRtYXA6IGNjLlRpbGVkTWFwO1xyXG4gICAgb2JqZWN0TGF5ZXI6IGNjLlRpbGVkTGF5ZXI7XHJcbiAgICBtdzogbnVtYmVyID0gMDtcclxuICAgIG1oOiBudW1iZXIgPSAwXHJcbiAgICB0dzogbnVtYmVyID0gMDtcclxuICAgIHRoOiBudW1iZXIgPSAwO1xyXG4gICAgaHQ6IGNjLlZlYzI7XHJcblxyXG4gICAgX29iamVjdEZhY3Rvcnk6IGFueTtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnRpbGVkbWFwID0gdGhpcy5nZXRDb21wb25lbnQoY2MuVGlsZWRNYXApO1xyXG4gICAgICAgIGxldCBzaXplID0gdGhpcy50aWxlZG1hcC5nZXRNYXBTaXplKCk7XHJcbiAgICAgICAgdGhpcy5tdyA9IHNpemUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5taCA9IHNpemUuaGVpZ2h0O1xyXG4gICAgICAgIGxldCB0aWxlc2l6ZSA9IHRoaXMudGlsZWRtYXAuZ2V0VGlsZVNpemUoKTtcclxuICAgICAgICB0aGlzLnR3ID0gdGlsZXNpemUud2lkdGg7XHJcbiAgICAgICAgdGhpcy50aCA9IHRpbGVzaXplLmhlaWdodDtcclxuICAgICAgICB0aGlzLmh0ID0gY2MudjIodGhpcy50dyAvIDIsIHRoaXMudGggLyAyKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBJRFgoeDogY2MuVmVjMiB8IG51bWJlciwgeT8pIHtcclxuICAgICAgICBpZiAoeCBpbnN0YW5jZW9mIGNjLlZlYzIpIHtcclxuICAgICAgICAgICAgeSA9IHgueTtcclxuICAgICAgICAgICAgeCA9IHgueDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGlkeCA9IHkgKiB0aGlzLm13ICsgeFxyXG4gICAgICAgIHJldHVybiBpZHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNyZWF0ZU9iamVjdHMobGF5ZXJOYW1lLCBvblByb2dyZXNzPyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX29iamVjdEZhY3RvcnkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltUaWxlZGxheWVyMm9iamVjdF0gbm8gZmFjdG9yeSBwcm92aWRlZCFcIilcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwibm8gZmFjdG9yeSBwcm92aWRlZCFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub2JqZWN0TGF5ZXIgPSB0aGlzLnRpbGVkbWFwLmdldExheWVyKGxheWVyTmFtZSlcclxuICAgICAgICB0aGlzLm9iamVjdExheWVyLmVuYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy/ku47kuIrliLDkuIvvvIzku47lt6bliLDlj7NcclxuICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICBsZXQgcHJvbWlzZXMgPSBbXVxyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCB0aGlzLm13OyBjb2wrKykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCB0aGlzLm1oOyByb3crKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRpbGV4eSA9IGNjLnYyKGNvbCwgcm93KVxyXG4gICAgICAgICAgICAgICAgbGV0IGdpZCA9IHRoaXMub2JqZWN0TGF5ZXIuZ2V0VGlsZUdJREF0KHRpbGV4eSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2lkICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NyZWF0ZSBvYmogb2YgZ2lkIGF0IHh5IFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByID0gdGhpcy5jcmVhdGVPYmooZ2lkLCB0aWxleHkpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgci50aGVuKHYgPT4gb25Qcm9ncmVzcyAmJiBvblByb2dyZXNzKCsraSwgc3VtKSkuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2gocik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1bSA9IHByb21pc2VzLmxlbmd0aDtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXRGYWN0b3J5KGZhY3Rvcnk6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX29iamVjdEZhY3RvcnkgPSBmYWN0b3J5O1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU9iaihnaWQ6IG51bWJlciwgdGlsZXh5OiBjYy5WZWMyKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgcHJvcGVydGllcyA9IHRoaXMudGlsZWRtYXAuZ2V0UHJvcGVydGllc0ZvckdJRChnaWQpXHJcbiAgICAgICAgaWYgKCFnaWQpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKGBnaWQgOiR7Z2lkfSBoYXMgbm8gcHJvcGVydGllc2ApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMub2JqZWN0TGF5ZXIuZ2V0UG9zaXRpb25BdCh0aWxleHkpO1xyXG4gICAgICAgIHBvcy5hZGRTZWxmKGNjLnYyKHRoaXMuaHQueCwgdGhpcy5odC55KSlcclxuICAgICAgICBsZXQgYXR0cnMgPSB7XHJcbiAgICAgICAgICAgIHBvcywgZ2lkLCB0aWxlSWQ6IHRoaXMuSURYKHRpbGV4eSksIHByb3BlcnRpZXMsIHRpbGV4eVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fb2JqZWN0RmFjdG9yeS5jcmVhdGVPYmplY3QodGhpcy5vYmplY3RMYXllciwgYXR0cnMpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=