
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/RoleLoader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8cd51PJOu5O/ZXeqsKp9ma+', 'RoleLoader');
// Game/Scripts/RoleLoader.ts

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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleType = void 0;
var Bomb_1 = require("./Bomb");
var Portal_1 = require("./Portal");
var PlayerInfo_1 = require("./Common/Base/PlayerInfo");
var _c = cc._decorator, ccclass = _c.ccclass, property = _c.property, executeInEditMode = _c.executeInEditMode;
var RoleType;
(function (RoleType) {
    RoleType[RoleType["Girl"] = 0] = "Girl";
    RoleType[RoleType["Older"] = 1] = "Older";
    RoleType[RoleType["Badman"] = 2] = "Badman";
    RoleType[RoleType["Dog"] = 3] = "Dog";
    RoleType[RoleType["Bat"] = 4] = "Bat";
    RoleType[RoleType["Balloon"] = 5] = "Balloon";
    RoleType[RoleType["Bomb"] = 6] = "Bomb";
    RoleType[RoleType["Door"] = 7] = "Door";
    RoleType[RoleType["Box"] = 8] = "Box";
    RoleType[RoleType["Box_jia"] = 9] = "Box_jia";
})(RoleType = exports.RoleType || (exports.RoleType = {}));
var RolePrefabs = (_a = {},
    _a[RoleType.Girl] = "Prefabs/roles/girl",
    _a[RoleType.Older] = "Prefabs/roles/older",
    _a[RoleType.Badman] = "Prefabs/roles/badman",
    _a[RoleType.Dog] = "Prefabs/roles/dog",
    _a[RoleType.Bat] = "Prefabs/roles/bat",
    _a[RoleType.Balloon] = "Prefabs/roles/ballon",
    _a[RoleType.Bomb] = "Prefabs/roles/bomb",
    _a[RoleType.Door] = "Prefabs/roles/men",
    _a[RoleType.Box] = "Prefabs/roles/box",
    _a[RoleType.Box_jia] = "Prefabs/roles/box_jia",
    _a);
var Colors = (_b = {},
    _b[RoleType.Badman] = cc.Color.RED,
    _b[RoleType.Dog] = cc.Color.GRAY,
    _b[RoleType.Girl] = cc.Color.WHITE,
    _b[RoleType.Older] = cc.Color.GREEN,
    _b[RoleType.Bat] = cc.Color.BLACK,
    _b[RoleType.Balloon] = cc.Color.YELLOW,
    _b[RoleType.Bomb] = cc.Color.GRAY,
    _b[RoleType.Door] = cc.Color.CYAN,
    _b[RoleType.Box] = cc.Color.ORANGE,
    _b[RoleType.Box_jia] = cc.Color.BLUE,
    _b);
var RoleLoader = /** @class */ (function (_super) {
    __extends(RoleLoader, _super);
    function RoleLoader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._type = RoleType.Girl;
        _this.isClaim = false;
        _this.time = 15;
        return _this;
    }
    Object.defineProperty(RoleLoader.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
            this.updateIndicator();
        },
        enumerable: false,
        configurable: true
    });
    RoleLoader.prototype.onLoad = function () {
        this.indicator = this.getComponent(cc.Sprite);
    };
    RoleLoader.prototype.updateIndicator = function () {
        this.node.color = Colors[this.type];
        this.node.width = 50;
        this.node.height = 50;
    };
    Object.defineProperty(RoleLoader.prototype, "path", {
        get: function () {
            if (this.isClaim)
                return RolePrefabs[this.type];
            if (this.type == RoleType.Dog || this.type == RoleType.Badman) {
                this.type = g.getRandomInArray([RoleType.Dog, RoleType.Badman]);
            }
            else if (this.type == RoleType.Older) {
                if ((!PlayerInfo_1.PlayerInfo.isPlayingDaily && csv.level.get(PlayerInfo_1.PlayerInfo.playinglevel).treasure)
                    || (PlayerInfo_1.PlayerInfo.isPlayingDaily && csv.daily_level.get(PlayerInfo_1.PlayerInfo.playingDailyLevel).treasure)) {
                    this.type = RoleType.Box;
                }
            }
            return RolePrefabs[this.type];
        },
        enumerable: false,
        configurable: true
    });
    RoleLoader.prototype.start = function () {
        var _this = this;
        if (CC_EDITOR) {
            return this.updateIndicator();
        }
        cc.resources.load(this.path, cc.Prefab, function (err, res) {
            var node = cc.instantiate(res);
            node.parent = _this.node.parent;
            node.position = _this.node.position;
            node.scaleX = node.scaleX * _this.node.scaleX;
            if (node.name == "bomb") {
                console.log(node.name);
                node.getComponent(Bomb_1.default)._timeLeft = _this.time;
            }
            else if (node.name == "men") {
                _this.self_door = node;
                node.getComponent(Portal_1.default).anotherDoor = _this.another_door;
            }
        });
        this.indicator.enabled = false;
    };
    __decorate([
        property({ type: cc.Enum(RoleType) })
    ], RoleLoader.prototype, "_type", void 0);
    __decorate([
        property({ type: cc.Enum(RoleType) })
    ], RoleLoader.prototype, "type", null);
    __decorate([
        property({ displayName: "不随机" })
    ], RoleLoader.prototype, "isClaim", void 0);
    __decorate([
        property({ displayName: "炸弹剩余时间" })
    ], RoleLoader.prototype, "time", void 0);
    __decorate([
        property(cc.Node)
    ], RoleLoader.prototype, "another_door", void 0);
    RoleLoader = __decorate([
        ccclass,
        executeInEditMode
    ], RoleLoader);
    return RoleLoader;
}(cc.Component));
exports.default = RoleLoader;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcUm9sZUxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUEwQjtBQUMxQixtQ0FBa0M7QUFDbEMsdURBQXNEO0FBRWxELElBQUEsS0FBMkMsRUFBRSxDQUFDLFVBQVUsRUFBdEQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsaUJBQWlCLHVCQUFrQixDQUFBO0FBQzVELElBQVksUUFXWDtBQVhELFdBQVksUUFBUTtJQUNoQix1Q0FBSSxDQUFBO0lBQ0oseUNBQUssQ0FBQTtJQUNMLDJDQUFNLENBQUE7SUFDTixxQ0FBRyxDQUFBO0lBQ0gscUNBQUcsQ0FBQTtJQUNILDZDQUFPLENBQUE7SUFDUCx1Q0FBSSxDQUFBO0lBQ0osdUNBQUksQ0FBQTtJQUNKLHFDQUFHLENBQUE7SUFDSCw2Q0FBTyxDQUFBO0FBQ1gsQ0FBQyxFQVhXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBV25CO0FBRUQsSUFBTSxXQUFXO0lBQ2IsR0FBQyxRQUFRLENBQUMsSUFBSSxJQUFHLG9CQUFvQjtJQUNyQyxHQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUcscUJBQXFCO0lBQ3ZDLEdBQUMsUUFBUSxDQUFDLE1BQU0sSUFBRyxzQkFBc0I7SUFDekMsR0FBQyxRQUFRLENBQUMsR0FBRyxJQUFHLG1CQUFtQjtJQUNuQyxHQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUcsbUJBQW1CO0lBQ25DLEdBQUMsUUFBUSxDQUFDLE9BQU8sSUFBRyxzQkFBc0I7SUFDMUMsR0FBQyxRQUFRLENBQUMsSUFBSSxJQUFHLG9CQUFvQjtJQUNyQyxHQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUcsbUJBQW1CO0lBQ3BDLEdBQUMsUUFBUSxDQUFDLEdBQUcsSUFBRyxtQkFBbUI7SUFDbkMsR0FBQyxRQUFRLENBQUMsT0FBTyxJQUFHLHVCQUF1QjtPQUU5QyxDQUFBO0FBRUQs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QUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQzs2Q0FDRTtJQUd4QztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7MENBR3JDO0lBUUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUM7K0NBQ1I7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLENBQUM7NENBQ2xCO0lBR2xCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ0k7SUFyQkwsVUFBVTtRQUY5QixPQUFPO1FBQ1AsaUJBQWlCO09BQ0csVUFBVSxDQXVFOUI7SUFBRCxpQkFBQztDQXZFRCxBQXVFQyxDQXZFdUMsRUFBRSxDQUFDLFNBQVMsR0F1RW5EO2tCQXZFb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb21iIGZyb20gXCIuL0JvbWJcIjtcclxuaW1wb3J0IEl0ZW1Qb3J0YWwgZnJvbSBcIi4vUG9ydGFsXCI7XHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9Db21tb24vQmFzZS9QbGF5ZXJJbmZvXCI7XHJcblxyXG5sZXQgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUgfSA9IGNjLl9kZWNvcmF0b3JcclxuZXhwb3J0IGVudW0gUm9sZVR5cGUge1xyXG4gICAgR2lybCxcclxuICAgIE9sZGVyLFxyXG4gICAgQmFkbWFuLFxyXG4gICAgRG9nLFxyXG4gICAgQmF0LFxyXG4gICAgQmFsbG9vbixcclxuICAgIEJvbWIsXHJcbiAgICBEb29yLFxyXG4gICAgQm94LFxyXG4gICAgQm94X2ppYVxyXG59XHJcblxyXG5jb25zdCBSb2xlUHJlZmFicyA9IHtcclxuICAgIFtSb2xlVHlwZS5HaXJsXTogXCJQcmVmYWJzL3JvbGVzL2dpcmxcIixcclxuICAgIFtSb2xlVHlwZS5PbGRlcl06IFwiUHJlZmFicy9yb2xlcy9vbGRlclwiLFxyXG4gICAgW1JvbGVUeXBlLkJhZG1hbl06IFwiUHJlZmFicy9yb2xlcy9iYWRtYW5cIixcclxuICAgIFtSb2xlVHlwZS5Eb2ddOiBcIlByZWZhYnMvcm9sZXMvZG9nXCIsXHJcbiAgICBbUm9sZVR5cGUuQmF0XTogXCJQcmVmYWJzL3JvbGVzL2JhdFwiLFxyXG4gICAgW1JvbGVUeXBlLkJhbGxvb25dOiBcIlByZWZhYnMvcm9sZXMvYmFsbG9uXCIsXHJcbiAgICBbUm9sZVR5cGUuQm9tYl06IFwiUHJlZmFicy9yb2xlcy9ib21iXCIsXHJcbiAgICBbUm9sZVR5cGUuRG9vcl06IFwiUHJlZmFicy9yb2xlcy9tZW5cIixcclxuICAgIFtSb2xlVHlwZS5Cb3hdOiBcIlByZWZhYnMvcm9sZXMvYm94XCIsXHJcbiAgICBbUm9sZVR5cGUuQm94X2ppYV06IFwiUHJlZmFicy9yb2xlcy9ib3hfamlhXCIsXHJcblxyXG59XHJcblxyXG5jb25zdCBDb2xvcnMgPSB7XHJcbiAgICBbUm9sZVR5cGUuQmFkbWFuXTogY2MuQ29sb3IuUkVELFxyXG4gICAgW1JvbGVUeXBlLkRvZ106IGNjLkNvbG9yLkdSQVksXHJcbiAgICBbUm9sZVR5cGUuR2lybF06IGNjLkNvbG9yLldISVRFLFxyXG4gICAgW1JvbGVUeXBlLk9sZGVyXTogY2MuQ29sb3IuR1JFRU4sXHJcbiAgICBbUm9sZVR5cGUuQmF0XTogY2MuQ29sb3IuQkxBQ0ssXHJcbiAgICBbUm9sZVR5cGUuQmFsbG9vbl06IGNjLkNvbG9yLllFTExPVyxcclxuICAgIFtSb2xlVHlwZS5Cb21iXTogY2MuQ29sb3IuR1JBWSxcclxuICAgIFtSb2xlVHlwZS5Eb29yXTogY2MuQ29sb3IuQ1lBTixcclxuICAgIFtSb2xlVHlwZS5Cb3hdOiBjYy5Db2xvci5PUkFOR0UsXHJcbiAgICBbUm9sZVR5cGUuQm94X2ppYV06IGNjLkNvbG9yLkJMVUUsXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbkBleGVjdXRlSW5FZGl0TW9kZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb2xlTG9hZGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oUm9sZVR5cGUpIH0pXHJcbiAgICBwcml2YXRlIF90eXBlOiBSb2xlVHlwZSA9IFJvbGVUeXBlLkdpcmw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRW51bShSb2xlVHlwZSkgfSlcclxuICAgIHB1YmxpYyBnZXQgdHlwZSgpOiBSb2xlVHlwZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IHR5cGUodmFsdWU6IFJvbGVUeXBlKSB7XHJcbiAgICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSW5kaWNhdG9yKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuS4jemaj+aculwiIH0pXHJcbiAgICBpc0NsYWltOiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi54K45by55Ymp5L2Z5pe26Ze0XCIgfSlcclxuICAgIHRpbWU6IG51bWJlciA9IDE1O1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYW5vdGhlcl9kb29yOiBjYy5Ob2RlO1xyXG5cclxuICAgIHNlbGZfZG9vcjogY2MuTm9kZTtcclxuXHJcbiAgICBpbmRpY2F0b3I6IGNjLlNwcml0ZTtcclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuaW5kaWNhdG9yID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVJbmRpY2F0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gQ29sb3JzW3RoaXMudHlwZV07XHJcbiAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gNTA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IDUwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwYXRoKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ2xhaW0pIHJldHVybiBSb2xlUHJlZmFic1t0aGlzLnR5cGVdO1xyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gUm9sZVR5cGUuRG9nIHx8IHRoaXMudHlwZSA9PSBSb2xlVHlwZS5CYWRtYW4pIHtcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gZy5nZXRSYW5kb21JbkFycmF5KFtSb2xlVHlwZS5Eb2csIFJvbGVUeXBlLkJhZG1hbl0pXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gUm9sZVR5cGUuT2xkZXIpIHtcclxuICAgICAgICAgICAgaWYgKCghUGxheWVySW5mby5pc1BsYXlpbmdEYWlseSAmJiBjc3YubGV2ZWwuZ2V0KFBsYXllckluZm8ucGxheWluZ2xldmVsKS50cmVhc3VyZSlcclxuICAgICAgICAgICAgICAgIHx8IChQbGF5ZXJJbmZvLmlzUGxheWluZ0RhaWx5ICYmIGNzdi5kYWlseV9sZXZlbC5nZXQoUGxheWVySW5mby5wbGF5aW5nRGFpbHlMZXZlbCkudHJlYXN1cmUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPSBSb2xlVHlwZS5Cb3g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFJvbGVQcmVmYWJzW3RoaXMudHlwZV1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAoQ0NfRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUluZGljYXRvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCh0aGlzLnBhdGgsIGNjLlByZWZhYiwgKGVyciwgcmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocmVzKSBhcyBjYy5Ob2RlXHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHRoaXMubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgbm9kZS5zY2FsZVggPSBub2RlLnNjYWxlWCAqIHRoaXMubm9kZS5zY2FsZVg7XHJcbiAgICAgICAgICAgIGlmIChub2RlLm5hbWUgPT0gXCJib21iXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vZGUubmFtZSlcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KEJvbWIpLl90aW1lTGVmdCA9IHRoaXMudGltZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLm5hbWUgPT0gXCJtZW5cIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxmX2Rvb3IgPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoSXRlbVBvcnRhbCkuYW5vdGhlckRvb3IgPSB0aGlzLmFub3RoZXJfZG9vcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5pbmRpY2F0b3IuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG59Il19