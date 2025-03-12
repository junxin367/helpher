"use strict";
cc._RF.push(module, '17eba1jqutBlKt36AWl2l0q', 'KeyToggle');
// Game/Scripts/KeyToggle.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyShape = exports.KeyDir = void 0;
var event_1 = require("../../framework/core/event");
var ccUtil_1 = require("../../framework/utils/ccUtil");
var Device_1 = require("../../framework/misc/Device");
var Signal_1 = require("../../framework/core/Signal");
var UserInfo_1 = require("../../framework/extension/weak_net_game/UserInfo");
var Game_1 = require("./Game");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var KeyDir;
(function (KeyDir) {
    KeyDir[KeyDir["Left_To_Right"] = 0] = "Left_To_Right";
    KeyDir[KeyDir["Right_To_Left"] = 1] = "Right_To_Left";
    KeyDir[KeyDir["Top_To_Bottom"] = 2] = "Top_To_Bottom";
    KeyDir[KeyDir["Bottom_To_Top"] = 3] = "Bottom_To_Top";
})(KeyDir = exports.KeyDir || (exports.KeyDir = {}));
var KeyShape;
(function (KeyShape) {
    KeyShape[KeyShape["UNKNOWN"] = 0] = "UNKNOWN";
    KeyShape[KeyShape["H"] = 1] = "H";
    KeyShape[KeyShape["V"] = 2] = "V";
    KeyShape[KeyShape["DOOR"] = 3] = "DOOR";
    KeyShape[KeyShape["LEFTDOOR"] = 4] = "LEFTDOOR";
    KeyShape[KeyShape["RIGHTDOOR"] = 5] = "RIGHTDOOR";
})(KeyShape = exports.KeyShape || (exports.KeyShape = {}));
var KeyToggle = /** @class */ (function (_super) {
    __extends(KeyToggle, _super);
    function KeyToggle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.joint = null;
        _this.keyDir = KeyDir.Bottom_To_Top;
        _this.shape = KeyShape.UNKNOWN;
        _this.originPos = cc.v3();
        _this.openPos = cc.v3();
        _this.body = null;
        _this.handler = null;
        _this.collider = null;
        _this.strongArea = false;
        _this.onToggleSwitched = new Signal_1.default();
        _this.stopSign = null;
        _this._isOpen = false;
        _this.curDir = cc.v2();
        _this._canceled = false;
        return _this;
    }
    KeyToggle.prototype.onLoad = function () {
        if (this.joint == null) {
            this.joint = this.node.getComponentInChildren(cc.PrismaticJoint);
        }
        this.body = this.getComponent(cc.RigidBody);
        this.body.type = cc.RigidBodyType.Static;
        this.originPos = this.node.position;
        this.openPos = this.node.position;
        if (this.keyDir == KeyDir.Bottom_To_Top) {
            this.openPos.y += this.joint.upperLimit;
        }
        else if (this.keyDir == KeyDir.Left_To_Right) {
            this.openPos.x += this.joint.upperLimit;
        }
        else if (this.keyDir == KeyDir.Top_To_Bottom) {
            this.openPos.y -= this.joint.upperLimit;
        }
        else if (this.keyDir == KeyDir.Right_To_Left) {
            this.openPos.x -= this.joint.upperLimit;
        }
        this.handler.on(cc.Node.EventType.TOUCH_START, this.click, this);
        //destroy all collider in [handler]
        var collider = this.handler.getComponent(cc.PhysicsCollider);
        if (collider) {
            collider.destroy();
        }
        var body = this.handler.getComponent(cc.RigidBody);
        if (body) {
            body.destroy();
        }
        this.collider = this.getComponent(cc.PhysicsCollider);
        this.collider.friction = 0.2;
        // this.addComponent(OneWayPlatform);
        //create stop collider 
        // this.createStopSign();
        if (this.shape == KeyShape.UNKNOWN) {
            if (this.node.angle == 0) {
                var ratio = this.node.width / this.node.height;
                if (ratio < 2 && ratio > 1) {
                    this.shape = KeyShape.DOOR;
                }
                else if (ratio > 2) {
                    this.shape = KeyShape.H;
                    this.node.height = 13;
                }
                else {
                    this.shape = KeyShape.V;
                }
            }
            else if (this.node.angle == 90) {
                var ratio = this.node.width / this.node.height;
                if (ratio < 2) {
                    this.shape = KeyShape.H;
                    this.node.width = 13;
                }
                else {
                    this.shape = KeyShape.V;
                }
            }
        }
        console.log(KeyShape[this.shape]);
        if (this.shape == KeyShape.H) {
            // this.createStopSign();
            this.getInvisibleHandler();
        }
        else if (this.shape == KeyShape.V) {
            this.getInvisibleHandler();
            this.node.height = 13;
        }
        else if (this.shape == KeyShape.DOOR) {
            this.createEdge(cc.v2(0, 1));
            this.createEdge(cc.v2(-1, 0));
            this.createEdge(cc.v2(1, 0));
        }
        else if (this.shape == KeyShape.LEFTDOOR) {
            this.createEdge(cc.v2(0, 1));
            this.createEdge(cc.v2(-1, 0));
            this.createEdge(cc.v2(1, 0));
        }
        else if (this.shape == KeyShape.RIGHTDOOR) {
            this.createEdge(cc.v2(0, 1));
            this.createEdge(cc.v2(-1, 0));
            this.createEdge(cc.v2(1, 0));
        }
        // if (PlayerInfo.isPlayingDaily) {
        var sprites = this.getComponentsInChildren(cc.Sprite);
        for (var i = 0; i < sprites.length; i++) {
            ccUtil_1.default.setDisplay(sprites[i], "Img/level/" + sprites[i].spriteFrame.name + UserInfo_1.UserInfo.theme_key);
        }
        // }
    };
    KeyToggle.prototype.createEdge = function (dir) {
        var node = new cc.Node();
        node.parent = this.node;
        if (dir.y != 0) {
            node.width = this.node.width;
            node.height = 50;
        }
        else if (dir.x != 0) {
            node.width = 50;
            node.height = this.node.height;
        }
        var pos = node.getPosition();
        pos.addSelf(dir.multiply(cc.v2(this.node.width / 2, this.node.height / 2)));
        node.setPosition(pos);
        node.on(cc.Node.EventType.TOUCH_START, this.click, this);
    };
    KeyToggle.prototype.createStopSign = function () {
        return __awaiter(this, void 0, void 0, function () {
            var prefab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ccUtil_1.default.getRes("Prefabs/misc/stop", cc.Prefab)];
                    case 1:
                        prefab = _a.sent();
                        this.stopSign = cc.instantiate(prefab);
                        this.node.addChild(this.stopSign);
                        return [2 /*return*/];
                }
            });
        });
    };
    KeyToggle.prototype.start = function () {
    };
    Object.defineProperty(KeyToggle.prototype, "isOpen", {
        get: function () {
            return this._isOpen;
        },
        enumerable: false,
        configurable: true
    });
    KeyToggle.prototype._switch = function () {
        if (this._isOpen) {
            cc.tween(this.node).to(0.5, { position: this.openPos }, { easing: "sineInOut" }).call(this.onFinish.bind(this)).start();
            this.curDir.y = this.openPos.y - this.node.y;
        }
        else {
            cc.tween(this.node).to(0.5, { position: this.originPos }, { easing: "sineInOut" }).call(this.onFinish.bind(this)).start();
            this.curDir.y = this.originPos.y - this.node.y;
        }
    };
    KeyToggle.prototype.getInvisibleHandler = function () {
        if (this._invisibleHandler == null) {
            var invisible = new cc.Node();
            invisible.width = this.node.width;
            invisible.height = this.node.height;
            if (this.node.width < this.node.height) {
                invisible.width = 50;
            }
            else {
                invisible.height = 50;
            }
            invisible.parent = this.node;
            invisible.on(cc.Node.EventType.TOUCH_START, this.click, this);
            this._invisibleHandler = invisible;
        }
        return this._invisibleHandler;
    };
    KeyToggle.prototype.checkNeedMoveBack = function () {
        // if (this.strongArea) {
        // this.getInvisibleHandler();
        if (this._invisibleHandler) {
            this._invisibleHandler.active = true;
        }
        return;
        // }
        if (!cc.Camera.main.canSee(this.handler)) {
            this.getInvisibleHandler();
            if (this._invisibleHandler) {
                this._invisibleHandler.active = true;
            }
        }
        else {
            if (this._invisibleHandler) {
                this._invisibleHandler.active = false;
            }
        }
    };
    KeyToggle.prototype.toggle = function () {
        this._canceled = false;
        this._isOpen = !this._isOpen;
        this._switch();
    };
    KeyToggle.prototype.cancel = function () {
        this._canceled = true;
        this._switch();
    };
    KeyToggle.prototype.onFinish = function () {
        if (this._canceled)
            return;
        this.checkNeedMoveBack();
        this.curDir.y = 0;
        event_1.evt.emit("Game.keyMoved", this);
        this.onToggleSwitched.fire(this);
    };
    KeyToggle.prototype.click = function () {
        Game_1.default.instance.activeGame();
        Device_1.default.playSfx("key");
        event_1.evt.emit("Game.keyClick");
        this.toggle();
    };
    __decorate([
        property(cc.PrismaticJoint)
    ], KeyToggle.prototype, "joint", void 0);
    __decorate([
        property({ type: cc.Enum(KeyDir), displayName: "移动方向" })
    ], KeyToggle.prototype, "keyDir", void 0);
    __decorate([
        property({ type: cc.Enum(KeyShape), displayName: "水平/垂直" })
    ], KeyToggle.prototype, "shape", void 0);
    __decorate([
        property(cc.RigidBody)
    ], KeyToggle.prototype, "body", void 0);
    __decorate([
        property(cc.Node)
    ], KeyToggle.prototype, "handler", void 0);
    __decorate([
        property({ displayName: "增强热区" })
    ], KeyToggle.prototype, "strongArea", void 0);
    KeyToggle = __decorate([
        ccclass
    ], KeyToggle);
    return KeyToggle;
}(cc.Component));
exports.default = KeyToggle;

cc._RF.pop();