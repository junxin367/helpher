"use strict";
cc._RF.push(module, '6aa9eOCPdZJqYbbqXGDQ8Fm', 'SpecialLevel');
// Game/Scripts/Levels/SpecialLevel.ts

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
exports.RoleType = void 0;
var event_1 = require("../../../framework/core/event");
var ToastManager_1 = require("../../../framework/ui/ToastManager");
var Device_1 = require("../../../framework/misc/Device");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RoleType;
(function (RoleType) {
    RoleType[RoleType["Balloon"] = 0] = "Balloon";
    RoleType[RoleType["Enemy"] = 1] = "Enemy";
    RoleType[RoleType["Star"] = 2] = "Star";
    RoleType[RoleType["Box"] = 3] = "Box";
    RoleType[RoleType["Bomb"] = 4] = "Bomb";
})(RoleType = exports.RoleType || (exports.RoleType = {}));
var SpecialLevel = /** @class */ (function (_super) {
    __extends(SpecialLevel, _super);
    function SpecialLevel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._type = RoleType.Balloon;
        _this.nodes = null;
        _this.count = 0;
        _this.node_Counts = 0;
        return _this;
        // update (dt) {}
    }
    SpecialLevel_1 = SpecialLevel;
    Object.defineProperty(SpecialLevel.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    SpecialLevel.prototype.onLoad = function () {
        SpecialLevel_1.instance = this;
    };
    SpecialLevel.prototype.gameOver = function () {
        event_1.evt.off(this);
    };
    SpecialLevel.prototype.start = function () {
        if (this.type == RoleType.Enemy) {
            event_1.evt.on("Game.enemyDead", this.check_enemy, this);
        }
        else if (this.type == RoleType.Balloon) {
            event_1.evt.on("Game.boollonDes", this.check_enemy, this);
        }
        else if (this.type == RoleType.Star) {
            event_1.evt.on("Game.getstar", this.check_enemy, this);
        }
        else if (this.type == RoleType.Box) {
            return;
            // evt.on("Game.getstar", this.check_enemy, this);
        }
        else if (this.type == RoleType.Bomb) {
            console.log('sd');
            event_1.evt.on("Game.bombDes", this.check_enemy, this);
        }
        this.node_Counts = this.nodes.childrenCount;
    };
    SpecialLevel.prototype.check_enemy = function () {
        console.log('sd');
        if (!this.enabledInHierarchy)
            return;
        this.count += 1;
        if (this.node_Counts <= this.count) {
            ToastManager_1.Toast.make("任务完成");
            Device_1.default.playSfx("finish-mission");
            event_1.evt.emit("Game.win");
        }
    };
    SpecialLevel.prototype.onDestroy = function () {
        event_1.evt.off(this);
        SpecialLevel_1.instance = null;
    };
    var SpecialLevel_1;
    SpecialLevel.instance = null;
    __decorate([
        property({ type: cc.Enum(RoleType) })
    ], SpecialLevel.prototype, "_type", void 0);
    __decorate([
        property({ type: cc.Enum(RoleType) })
    ], SpecialLevel.prototype, "type", null);
    __decorate([
        property(cc.Node)
    ], SpecialLevel.prototype, "nodes", void 0);
    SpecialLevel = SpecialLevel_1 = __decorate([
        ccclass
    ], SpecialLevel);
    return SpecialLevel;
}(cc.Component));
exports.default = SpecialLevel;

cc._RF.pop();