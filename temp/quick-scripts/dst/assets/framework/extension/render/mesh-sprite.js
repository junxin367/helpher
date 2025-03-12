
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/render/mesh-sprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHJlbmRlclxcbWVzaC1zcHJpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVCQUF1QjtBQUN2QixzQ0FBc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDO0FBRWYsSUFBQSxLQUEyQyxFQUFFLENBQUMsVUFBVSxFQUF0RCxpQkFBaUIsdUJBQUEsRUFBRSxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUE7QUFHNUQ7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUEwUEM7UUF2UEcsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFXOUIsYUFBTyxHQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQWtCM0Isa0JBQVksR0FBbUIsSUFBSSxDQUFDO1FBbUJwQyxlQUFTLEdBQWM7WUFDbkIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNqQixFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNoQixFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDZixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztTQUNuQixDQUFBO1FBb0JELGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBRzlCLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBVzVCLFlBQU0sR0FBYSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDOztRQXdKaEQsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQ0FBbUM7UUFDbkMsd0NBQXdDO1FBQ3hDLFlBQVk7UUFDWixRQUFRO1FBQ1IsSUFBSTtJQUVSLENBQUM7SUFyUEcsc0JBQUksb0NBQVk7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QUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixRQUFRLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ3hEO0lBQ0wsQ0FBQztJQTNPRDtRQURDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQztxREFDRjtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQztrREFHL0I7SUFPRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNTO0lBUTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs0Q0FHM0I7SUFRRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO29EQUNXO0lBVXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztpREFHbEM7SUFPRDtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztpREFNbkI7SUFRRDtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDOzhDQUc3QjtJQVVEO1FBREMsUUFBUTtvREFDcUI7SUFHOUI7UUFEQyxRQUFRO2tEQUNtQjtJQVc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUM2QjtJQTFGL0IsVUFBVTtRQUY5QixPQUFPO1FBQ1AsaUJBQWlCO09BQ0csVUFBVSxDQTBQOUI7SUFBRCxpQkFBQztDQTFQRCxBQTBQQyxDQTFQdUMsRUFBRSxDQUFDLFNBQVMsR0EwUG5EO2tCQTFQb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGF1dGhvcjogbGFteW91bmcuY29tXG4vLyBtb2RpZmllZCA6IHJ3KG1pbWdhbWUuY29tKSAyMDIwLzQvNlxuXG5jb25zdCBnZnggPSBjYy5nZng7XG5cbmxldCB7IGV4ZWN1dGVJbkVkaXRNb2RlLCBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvclxuQGNjY2xhc3NcbkBleGVjdXRlSW5FZGl0TW9kZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzaFNwcml0ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLliLfmlrBcIiB9KVxuICAgIF90ZW1wX3JlZnJlc2g6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuWIt+aWsFwiIH0pXG4gICAgZ2V0IHRlbXBfcmVmcmVzaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RlbXBfcmVmcmVzaDtcbiAgICB9XG4gICAgc2V0IHRlbXBfcmVmcmVzaCh2KSB7XG4gICAgICAgIHRoaXMuX3RlbXBfcmVmcmVzaCA9IHY7XG4gICAgICAgIHRoaXMuX2FwcGx5VmVydGV4ZXMoKTtcbiAgICB9XG5cbiAgICBAcHJvcGVydHkoY2MuVmVjMilcbiAgICBfb2Zmc2V0OiBjYy5WZWMyID0gY2MudjIoKTtcbiAgICAvKipcbiAgICAgKiAhI2VuIFBvc2l0aW9uIG9mZnNldFxuICAgICAqICEjemgg5L2N572u5YGP56e76YePXG4gICAgICogQHByb3BlcnR5IG9mZnNldFxuICAgICAqIEB0eXBlIHtWZWMyfVxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlZlYzIgfSlcbiAgICBnZXQgb2Zmc2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb2Zmc2V0O1xuICAgIH1cblxuICAgIHNldCBvZmZzZXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fb2Zmc2V0ID0gdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLnRlbXBfcmVmcmVzaCB8fCAhQ0NfRURJVE9SKVxuICAgICAgICAgICAgdGhpcy5fYXBwbHlWZXJ0ZXhlcygpO1xuICAgIH1cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgX3Nwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgLyoqXG4gICAgICogISNlbiBUaGUgc3ByaXRlIGZyYW1lIG9mIHRoZSBzcHJpdGUuXG4gICAgICogISN6aCDnsr7ngbXnmoTnsr7ngbXluKdcbiAgICAgKiBAcHJvcGVydHkgc3ByaXRlRnJhbWVcbiAgICAgKiBAdHlwZSB7U3ByaXRlRnJhbWV9XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBzcHJpdGUuc3ByaXRlRnJhbWUgPSBuZXdTcHJpdGVGcmFtZTtcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5TcHJpdGVGcmFtZSB9KVxuICAgIGdldCBzcHJpdGVGcmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZUZyYW1lO1xuICAgIH1cblxuICAgIHNldCBzcHJpdGVGcmFtZSh2KSB7XG4gICAgICAgIHRoaXMuX3Nwcml0ZUZyYW1lID0gdjtcbiAgICAgICAgdGhpcy5fYXBwbHlTcHJpdGVGcmFtZSgpO1xuICAgIH1cbiAgICBAcHJvcGVydHkoW2NjLlZlYzJdKVxuICAgIF92ZXJ0ZXhlczogY2MuVmVjMltdID0gW1xuICAgICAgICBjYy52MigtMTAwLCAtMTAwKSxcbiAgICAgICAgY2MudjIoMTAwLCAtMTAwKSxcbiAgICAgICAgY2MudjIoMTAwLCAxMDApLFxuICAgICAgICBjYy52MigtMTAwLCAxMDApXG4gICAgXVxuICAgIC8qKlxuICAgICAqICEjZW4gUG9seWdvbiBwb2ludHNcbiAgICAgKiAhI3poIOWkmui+ueW9oumhtueCueaVsOe7hFxuICAgICAqIEBwcm9wZXJ0eSBwb2ludHNcbiAgICAgKiBAdHlwZSB7VmVjMltdfVxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5WZWMyXSB9KVxuICAgIGdldCB2ZXJ0ZXhlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZlcnRleGVzO1xuICAgIH1cbiAgICBzZXQgdmVydGV4ZXModmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdmVydGV4ZXMgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fdXBkYXRlTWVzaCgpO1xuICAgICAgICBpZiAodGhpcy50ZW1wX3JlZnJlc2ggfHwgIUNDX0VESVRPUikge1xuICAgICAgICAgICAgdGhpcy5fYXBwbHlWZXJ0ZXhlcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQHByb3BlcnR5XG4gICAgY3VzdG9tU2hhZGVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHlcbiAgICBkZWxldGVNb2RlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICByZW5kZXJlcjogY2MuTWVzaFJlbmRlcmVyO1xuXG4gICAgX21lc2hDYWNoZTogYW55O1xuXG4gICAgbWVzaDogY2MuTWVzaDtcblxuICAgIHRleHR1cmU6IGNjLlRleHR1cmUyRDtcblxuICAgIEBwcm9wZXJ0eShjYy5Db2xvcilcbiAgICBfY29sb3I6IGNjLkNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcblxuICAgIHNldCBkaWZmdXNlQ29sb3Iodikge1xuICAgICAgICBpZiAodiA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlcjtcbiAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKHJlbmRlcmVyKSkgcmV0dXJuXG4gICAgICAgIGxldCBtYXRlcmlhbCA9IHJlbmRlcmVyLmdldE1hdGVyaWFsKDApO1xuICAgICAgICBpZiAoIWNjLmlzVmFsaWQobWF0ZXJpYWwpKSByZXR1cm47XG4gICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwiZGlmZnVzZUNvbG9yXCIsIHYpXG4gICAgICAgIHRoaXMuX2NvbG9yID0gdjtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuX21lc2hDYWNoZSA9IHt9O1xuICAgICAgICB0aGlzLl91cGRhdGVNZXNoKCk7XG5cbiAgICAgICAgbGV0IHJlbmRlcmVyID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5NZXNoUmVuZGVyZXIpO1xuICAgICAgICBpZiAoIXJlbmRlcmVyKSB7XG4gICAgICAgICAgICByZW5kZXJlciA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuTWVzaFJlbmRlcmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlcmVyLm1lc2ggPSBudWxsO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG5cbiAgICAgICAgaWYgKCF0aGlzLmN1c3RvbVNoYWRlcikge1xuICAgICAgICAgICAgbGV0IGJ1aWx0aW5NYXRlcmlhbCA9IG5ldyBjYy5NYXRlcmlhbCgpO1xuICAgICAgICAgICAgYnVpbHRpbk1hdGVyaWFsLmNvcHkoY2MuTWF0ZXJpYWwuZ2V0SW5zdGFudGlhdGVkQnVpbHRpbk1hdGVyaWFsKFwidW5saXRcIiwgdGhpcykpOyAgIC8vZ2V0QnVpbHRpbk1hdGVyaWFsXG4gICAgICAgICAgICByZW5kZXJlci5zZXRNYXRlcmlhbCgwLCBidWlsdGluTWF0ZXJpYWwpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlbmRlcmVyLmdldE1hdGVyaWFsKDApLnNldFByb3BlcnR5KFwibWFpbk9mZnNldFwiLCBjYy52MigwLjEsIDAuMikpXG4gICAgICAgIHRoaXMuX2FwcGx5U3ByaXRlRnJhbWUoKTtcbiAgICAgICAgdGhpcy5fYXBwbHlWZXJ0ZXhlcygpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5tZXNoLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBfdXBkYXRlTWVzaCgpIHtcbiAgICAgICAgbGV0IG1lc2ggPSB0aGlzLl9tZXNoQ2FjaGVbdGhpcy52ZXJ0ZXhlcy5sZW5ndGhdO1xuICAgICAgICBpZiAoIW1lc2gpIHtcbiAgICAgICAgICAgIG1lc2ggPSBuZXcgY2MuTWVzaCgpO1xuICAgICAgICAgICAgbWVzaC5pbml0KG5ldyBnZnguVmVydGV4Rm9ybWF0KFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6IGdmeC5BVFRSX1BPU0lUSU9OLCB0eXBlOiBnZnguQVRUUl9UWVBFX0ZMT0FUMzIsIG51bTogMiB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogZ2Z4LkFUVFJfVVYwLCB0eXBlOiBnZnguQVRUUl9UWVBFX0ZMT0FUMzIsIG51bTogMiB9LFxuICAgICAgICAgICAgXSksIHRoaXMudmVydGV4ZXMubGVuZ3RoLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuX21lc2hDYWNoZVt0aGlzLnZlcnRleGVzLmxlbmd0aF0gPSBtZXNoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWVzaCA9IG1lc2g7XG4gICAgICAgIC8vIGNjLmxvZygnX3VwZGF0ZU1lc2gnKTtcbiAgICB9XG5cbiAgICAvLyDmm7TmlrDpobbngrlcbiAgICBfYXBwbHlWZXJ0ZXhlcygpIHtcbiAgICAgICAgLy8gY2MubG9nKCdfYXBwbHlWZXJ0ZXhlcycpO1xuXG4gICAgICAgIC8vIOiuvue9ruWdkOagh1xuICAgICAgICBjb25zdCBtZXNoID0gdGhpcy5tZXNoO1xuICAgICAgICBtZXNoLnNldFZlcnRpY2VzKGdmeC5BVFRSX1BPU0lUSU9OLCB0aGlzLnZlcnRleGVzKTtcblxuICAgICAgICBpZiAodGhpcy50ZXh0dXJlKSB7XG4gICAgICAgICAgICBsZXQgdXZzID0gW107XG4gICAgICAgICAgICAvLyDorqHnrpd1dlxuICAgICAgICAgICAgZm9yIChjb25zdCBwdCBvZiB0aGlzLnZlcnRleGVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdnggPSAocHQueCArIHRoaXMudGV4dHVyZS53aWR0aCAvIDIgKyB0aGlzLm9mZnNldC54KSAvIHRoaXMudGV4dHVyZS53aWR0aDtcbiAgICAgICAgICAgICAgICBjb25zdCB2eSA9IDEuMCAtIChwdC55ICsgdGhpcy50ZXh0dXJlLmhlaWdodCAvIDIgKyB0aGlzLm9mZnNldC55KSAvIHRoaXMudGV4dHVyZS5oZWlnaHRcbiAgICAgICAgICAgICAgICB1dnMucHVzaChjYy52Mih2eCwgdnkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lc2guc2V0VmVydGljZXMoZ2Z4LkFUVFJfVVYwLCB1dnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudmVydGV4ZXMubGVuZ3RoID49IDMpIHtcbiAgICAgICAgICAgIC8vIOiuoeeul+mhtueCuee0ouW8lSBcbiAgICAgICAgICAgIGxldCBpZHMgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleGVzID0gW10uY29uY2F0KHRoaXMudmVydGV4ZXMpO1xuXG4gICAgICAgICAgICAvLyDlpJrovrnlvaLliIflibLvvIzmnKrlrp7njrDnm7jkuqTnmoTlpI3mnYLlpJrovrnlvaLvvIznoa7kv53pobbngrnmjInpobrluo/kuJTlm7TmiJDnmoTnur/kuI3nm7jkuqRcbiAgICAgICAgICAgIGxldCBpbmRleCA9IDAsIHJvb3RJbmRleCA9IC0xO1xuICAgICAgICAgICAgd2hpbGUgKHZlcnRleGVzLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwMSA9IHZlcnRleGVzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBjb25zdCBwMiA9IHZlcnRleGVzWyhpbmRleCArIDEpICUgdmVydGV4ZXMubGVuZ3RoXTtcbiAgICAgICAgICAgICAgICBjb25zdCBwMyA9IHZlcnRleGVzWyhpbmRleCArIDIpICUgdmVydGV4ZXMubGVuZ3RoXTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHYxID0gcDIuc3ViKHAxKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2MiA9IHAzLnN1YihwMik7XG4gICAgICAgICAgICAgICAgaWYgKHYxLmNyb3NzKHYyKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOaYr+WHuOeCuVxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNJbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBfdCBvZiB2ZXJ0ZXhlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBfdCAhPT0gcDEgJiYgcF90ICE9PSBwMiAmJiBwX3QgIT09IHAzICYmIHRoaXMuX3Rlc3RJblRyaWFuZ2xlKHBfdCwgcDEsIHAyLCBwMykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlhbbku5bngrnlnKjkuInop5LlvaLlhoVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0luID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzSW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWIh+iAs+acte+8jOaYr+WHuOeCue+8jOS4lOayoeacieWFtuS7lueCueWcqOS4ieinkuW9ouWGhVxuICAgICAgICAgICAgICAgICAgICAgICAgaWRzID0gaWRzLmNvbmNhdChbdGhpcy52ZXJ0ZXhlcy5pbmRleE9mKHAxKSwgdGhpcy52ZXJ0ZXhlcy5pbmRleE9mKHAyKSwgdGhpcy52ZXJ0ZXhlcy5pbmRleE9mKHAzKV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4ZXMuc3BsaWNlKHZlcnRleGVzLmluZGV4T2YocDIpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3RJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSAoaW5kZXggKyAxKSAlIHZlcnRleGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gcm9vdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKCflvqrnjq/kuIDlnIjmnKrlj5HnjrAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gKGluZGV4ICsgMSkgJSB2ZXJ0ZXhlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gcm9vdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coJ+W+queOr+S4gOWciOacquWPkeeOsCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZHMgPSBpZHMuY29uY2F0KHZlcnRleGVzLm1hcCh2ID0+IHsgcmV0dXJuIHRoaXMudmVydGV4ZXMuaW5kZXhPZih2KSB9KSk7XG4gICAgICAgICAgICBtZXNoLnNldEluZGljZXMoaWRzKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyZXIubWVzaCAhPSBtZXNoKSB7XG4gICAgICAgICAgICAgICAgLy8gbWVzaCDlrozmiJDlkI7lho3otYvlgLznu5kgTWVzaFJlbmRlcmVyICwg5ZCm5YiZ5qih5ouf5ZmoKG1hYynkvJrot7Plh7pcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLm1lc2ggPSBtZXNoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDliKTmlq3kuIDkuKrngrnmmK/lkKblnKjkuInop5LlvaLlhoVcbiAgICBfdGVzdEluVHJpYW5nbGUocG9pbnQsIHRyaUEsIHRyaUIsIHRyaUMpIHtcbiAgICAgICAgbGV0IEFCID0gdHJpQi5zdWIodHJpQSksIEFDID0gdHJpQy5zdWIodHJpQSksIEJDID0gdHJpQy5zdWIodHJpQiksIEFEID0gcG9pbnQuc3ViKHRyaUEpLCBCRCA9IHBvaW50LnN1Yih0cmlCKTtcbiAgICAgICAgcmV0dXJuIChBQi5jcm9zcyhBQykgPj0gMCBeIEFCLmNyb3NzKEFEKSA8IDApICAvLyBELEMg5ZyoQULlkIzlkIzmlrnlkJFcbiAgICAgICAgICAgICYmIChBQi5jcm9zcyhBQykgPj0gMCBeIEFDLmNyb3NzKEFEKSA+PSAwKSAvLyBELEIg5ZyoQUPlkIzlkIzmlrnlkJFcbiAgICAgICAgICAgICYmIChCQy5jcm9zcyhBQikgPiAwIF4gQkMuY3Jvc3MoQkQpID49IDApOyAvLyBELEEg5ZyoQkPlkIzlkIzmlrnlkJFcbiAgICB9XG5cbiAgICAvLyDmm7TmlrDlm77niYdcbiAgICBfYXBwbHlTcHJpdGVGcmFtZSgpIHtcbiAgICAgICAgLy8gY2MubG9nKCdfYXBwbHlTcHJpdGVGcmFtZScpO1xuICAgICAgICBpZiAodGhpcy5zcHJpdGVGcmFtZSkge1xuICAgICAgICAgICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyO1xuICAgICAgICAgICAgbGV0IG1hdGVyaWFsID0gcmVuZGVyZXIuZ2V0TWF0ZXJpYWwoMCk7XG4gICAgICAgICAgICAvLyBSZXNldCBtYXRlcmlhbFxuICAgICAgICAgICAgbGV0IHRleHR1cmUgPSB0aGlzLnNwcml0ZUZyYW1lLmdldFRleHR1cmUoKTtcbiAgICAgICAgICAgIG1hdGVyaWFsLmRlZmluZShcIlVTRV9ESUZGVVNFX1RFWFRVUkVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eSgnZGlmZnVzZVRleHR1cmUnLCB0ZXh0dXJlKTtcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmU7XG4gICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eShcImRpZmZ1c2VDb2xvclwiLCB0aGlzLm5vZGUuY29sb3IpXG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgLy8gdXBkYXRlKCkge1xuICAgIC8vICAgICBpZiAoQ0NfRURJVE9SKSB7XG4gICAgLy8gICAgICAgICBpZiAodGhpcy50ZW1wX3JlZnJlc2gpIHtcbiAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLl9hcHBseVZlcnRleGVzKCk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbn0iXX0=