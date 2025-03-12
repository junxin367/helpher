"use strict";
cc._RF.push(module, '2d1a6xPlClHaZRixXbEU8jk', 'mesh-sprite');
// framework/extension/render/mesh-sprite.ts

"use strict";
// author: lamyoung.com
// modified : rw(mimgame.com) 2020/4/6
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
var gfx = cc.gfx;
var _a = cc._decorator, executeInEditMode = _a.executeInEditMode, ccclass = _a.ccclass, property = _a.property;
var MeshSprite = /** @class */ (function (_super) {
    __extends(MeshSprite, _super);
    function MeshSprite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._temp_refresh = true;
        _this._offset = cc.v2();
        _this._spriteFrame = null;
        _this._vertexes = [
            cc.v2(-100, -100),
            cc.v2(100, -100),
            cc.v2(100, 100),
            cc.v2(-100, 100)
        ];
        _this.customShader = false;
        _this.deleteMode = false;
        _this._color = cc.color(255, 255, 255, 255);
        return _this;
        // update() {
        //     if (CC_EDITOR) {
        //         if (this.temp_refresh) {
        //             // this._applyVertexes();
        //         }
        //     }
        // }
    }
    Object.defineProperty(MeshSprite.prototype, "temp_refresh", {
        get: function () {
            return this._temp_refresh;
        },
        set: function (v) {
            this._temp_refresh = v;
            this._applyVertexes();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeshSprite.prototype, "offset", {
        /**
         * !#en Position offset
         * !#zh 位置偏移量
         * @property offset
         * @type {Vec2}
         */
        get: function () {
            return this._offset;
        },
        set: function (value) {
            this._offset = value;
            if (this.temp_refresh || !CC_EDITOR)
                this._applyVertexes();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeshSprite.prototype, "spriteFrame", {
        /**
         * !#en The sprite frame of the sprite.
         * !#zh 精灵的精灵帧
         * @property spriteFrame
         * @type {SpriteFrame}
         * @example
         * sprite.spriteFrame = newSpriteFrame;
         */
        get: function () {
            return this._spriteFrame;
        },
        set: function (v) {
            this._spriteFrame = v;
            this._applySpriteFrame();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeshSprite.prototype, "vertexes", {
        /**
         * !#en Polygon points
         * !#zh 多边形顶点数组
         * @property points
         * @type {Vec2[]}
         */
        get: function () {
            return this._vertexes;
        },
        set: function (value) {
            this._vertexes = value;
            this._updateMesh();
            if (this.temp_refresh || !CC_EDITOR) {
                this._applyVertexes();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeshSprite.prototype, "diffuseColor", {
        set: function (v) {
            if (v == null)
                return;
            var renderer = this.renderer;
            if (!cc.isValid(renderer))
                return;
            var material = renderer.getMaterial(0);
            if (!cc.isValid(material))
                return;
            material.setProperty("diffuseColor", v);
            this._color = v;
        },
        enumerable: false,
        configurable: true
    });
    MeshSprite.prototype.onLoad = function () {
        this._meshCache = {};
        this._updateMesh();
        var renderer = this.node.getComponent(cc.MeshRenderer);
        if (!renderer) {
            renderer = this.node.addComponent(cc.MeshRenderer);
        }
        renderer.mesh = null;
        this.renderer = renderer;
        if (!this.customShader) {
            var builtinMaterial = new cc.Material();
            builtinMaterial.copy(cc.Material.getInstantiatedBuiltinMaterial("unlit", this)); //getBuiltinMaterial
            renderer.setMaterial(0, builtinMaterial);
        }
        // renderer.getMaterial(0).setProperty("mainOffset", cc.v2(0.1, 0.2))
        this._applySpriteFrame();
        this._applyVertexes();
    };
    MeshSprite.prototype.onDestroy = function () {
        this.mesh.destroy();
    };
    MeshSprite.prototype._updateMesh = function () {
        var mesh = this._meshCache[this.vertexes.length];
        if (!mesh) {
            mesh = new cc.Mesh();
            mesh.init(new gfx.VertexFormat([
                { name: gfx.ATTR_POSITION, type: gfx.ATTR_TYPE_FLOAT32, num: 2 },
                { name: gfx.ATTR_UV0, type: gfx.ATTR_TYPE_FLOAT32, num: 2 },
            ]), this.vertexes.length, true);
            this._meshCache[this.vertexes.length] = mesh;
        }
        this.mesh = mesh;
        // cc.log('_updateMesh');
    };
    // 更新顶点
    MeshSprite.prototype._applyVertexes = function () {
        // cc.log('_applyVertexes');
        var _this = this;
        // 设置坐标
        var mesh = this.mesh;
        mesh.setVertices(gfx.ATTR_POSITION, this.vertexes);
        if (this.texture) {
            var uvs = [];
            // 计算uv
            for (var _i = 0, _a = this.vertexes; _i < _a.length; _i++) {
                var pt = _a[_i];
                var vx = (pt.x + this.texture.width / 2 + this.offset.x) / this.texture.width;
                var vy = 1.0 - (pt.y + this.texture.height / 2 + this.offset.y) / this.texture.height;
                uvs.push(cc.v2(vx, vy));
            }
            mesh.setVertices(gfx.ATTR_UV0, uvs);
        }
        if (this.vertexes.length >= 3) {
            // 计算顶点索引 
            var ids = [];
            var vertexes = [].concat(this.vertexes);
            // 多边形切割，未实现相交的复杂多边形，确保顶点按顺序且围成的线不相交
            var index = 0, rootIndex = -1;
            while (vertexes.length > 3) {
                var p1 = vertexes[index];
                var p2 = vertexes[(index + 1) % vertexes.length];
                var p3 = vertexes[(index + 2) % vertexes.length];
                var v1 = p2.sub(p1);
                var v2 = p3.sub(p2);
                if (v1.cross(v2) >= 0) {
                    // 是凸点
                    var isIn = false;
                    for (var _b = 0, vertexes_1 = vertexes; _b < vertexes_1.length; _b++) {
                        var p_t = vertexes_1[_b];
                        if (p_t !== p1 && p_t !== p2 && p_t !== p3 && this._testInTriangle(p_t, p1, p2, p3)) {
                            // 其他点在三角形内
                            isIn = true;
                            break;
                        }
                    }
                    if (!isIn) {
                        // 切耳朵，是凸点，且没有其他点在三角形内
                        ids = ids.concat([this.vertexes.indexOf(p1), this.vertexes.indexOf(p2), this.vertexes.indexOf(p3)]);
                        vertexes.splice(vertexes.indexOf(p2), 1);
                        rootIndex = index;
                    }
                    else {
                        index = (index + 1) % vertexes.length;
                        if (index === rootIndex) {
                            cc.log('循环一圈未发现');
                            break;
                        }
                    }
                }
                else {
                    index = (index + 1) % vertexes.length;
                    if (index === rootIndex) {
                        cc.log('循环一圈未发现');
                        break;
                    }
                }
            }
            ids = ids.concat(vertexes.map(function (v) { return _this.vertexes.indexOf(v); }));
            mesh.setIndices(ids);
            if (this.renderer.mesh != mesh) {
                // mesh 完成后再赋值给 MeshRenderer , 否则模拟器(mac)会跳出
                this.renderer.mesh = mesh;
            }
        }
        else {
        }
    };
    // 判断一个点是否在三角形内
    MeshSprite.prototype._testInTriangle = function (point, triA, triB, triC) {
        var AB = triB.sub(triA), AC = triC.sub(triA), BC = triC.sub(triB), AD = point.sub(triA), BD = point.sub(triB);
        return (AB.cross(AC) >= 0 ^ AB.cross(AD) < 0) // D,C 在AB同同方向
            && (AB.cross(AC) >= 0 ^ AC.cross(AD) >= 0) // D,B 在AC同同方向
            && (BC.cross(AB) > 0 ^ BC.cross(BD) >= 0); // D,A 在BC同同方向
    };
    // 更新图片
    MeshSprite.prototype._applySpriteFrame = function () {
        // cc.log('_applySpriteFrame');
        if (this.spriteFrame) {
            var renderer = this.renderer;
            var material = renderer.getMaterial(0);
            // Reset material
            var texture = this.spriteFrame.getTexture();
            material.define("USE_DIFFUSE_TEXTURE", true);
            material.setProperty('diffuseTexture', texture);
            this.texture = texture;
            material.setProperty("diffuseColor", this.node.color);
        }
    };
    __decorate([
        property({ displayName: "刷新" })
    ], MeshSprite.prototype, "_temp_refresh", void 0);
    __decorate([
        property({ displayName: "刷新" })
    ], MeshSprite.prototype, "temp_refresh", null);
    __decorate([
        property(cc.Vec2)
    ], MeshSprite.prototype, "_offset", void 0);
    __decorate([
        property({ type: cc.Vec2 })
    ], MeshSprite.prototype, "offset", null);
    __decorate([
        property(cc.SpriteFrame)
    ], MeshSprite.prototype, "_spriteFrame", void 0);
    __decorate([
        property({ type: cc.SpriteFrame })
    ], MeshSprite.prototype, "spriteFrame", null);
    __decorate([
        property([cc.Vec2])
    ], MeshSprite.prototype, "_vertexes", void 0);
    __decorate([
        property({ type: [cc.Vec2] })
    ], MeshSprite.prototype, "vertexes", null);
    __decorate([
        property
    ], MeshSprite.prototype, "customShader", void 0);
    __decorate([
        property
    ], MeshSprite.prototype, "deleteMode", void 0);
    __decorate([
        property(cc.Color)
    ], MeshSprite.prototype, "_color", void 0);
    MeshSprite = __decorate([
        ccclass,
        executeInEditMode
    ], MeshSprite);
    return MeshSprite;
}(cc.Component));
exports.default = MeshSprite;

cc._RF.pop();