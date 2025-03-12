"use strict";
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