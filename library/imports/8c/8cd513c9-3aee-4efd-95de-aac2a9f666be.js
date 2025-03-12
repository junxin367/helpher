"use strict";
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