
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/KeyToggle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcS2V5VG9nZ2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBaUQ7QUFDakQsdURBQWtEO0FBQ2xELHNEQUFpRDtBQUVqRCxzREFBaUQ7QUFFakQsNkVBQTRFO0FBQzVFLCtCQUEwQjtBQUVwQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFZLE1BS1g7QUFMRCxXQUFZLE1BQU07SUFDZCxxREFBYSxDQUFBO0lBQ2IscURBQWEsQ0FBQTtJQUNiLHFEQUFhLENBQUE7SUFDYixxREFBYSxDQUFBO0FBQ2pCLENBQUMsRUFMVyxNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFLakI7QUFFRCxJQUFZLFFBT1g7QUFQRCxXQUFZLFFBQVE7SUFDaEIsNkNBQU8sQ0FBQTtJQUNQLGlDQUFDLENBQUE7SUFDRCxpQ0FBQyxDQUFBO0lBQ0QsdUNBQUksQ0FBQTtJQUNKLCtDQUFRLENBQUE7SUFDUixpREFBUyxDQUFBO0FBQ2IsQ0FBQyxFQVBXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBT25CO0FBR0Q7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUEyT0M7UUF4T0csV0FBSyxHQUFzQixJQUFJLENBQUM7UUFHaEMsWUFBTSxHQUFXLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFJdEMsV0FBSyxHQUFhLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFFbkMsZUFBUyxHQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUM3QixhQUFPLEdBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRzNCLFVBQUksR0FBaUIsSUFBSSxDQUFDO1FBRzFCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsY0FB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LENBQUMsQ0FBQztRQUNsQixXQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUMvQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFFRCx5QkFBSyxHQUFMO1FBQ0ksY0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMzQixnQkFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixXQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBdE9EO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUM7NENBQ0k7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7NkNBQ25CO0lBSXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxDQUFDOzRDQUN6QjtJQU1uQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzJDQUNHO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ007SUFLeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7aURBQ047SUF4QlgsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTJPN0I7SUFBRCxnQkFBQztDQTNPRCxBQTJPQyxDQTNPc0MsRUFBRSxDQUFDLFNBQVMsR0EyT2xEO2tCQTNPb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV2dCB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvY29yZS9ldmVudFwiO1xyXG5pbXBvcnQgY2NVdGlsIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdXRpbHMvY2NVdGlsXCI7XHJcbmltcG9ydCBEZXZpY2UgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9taXNjL0RldmljZVwiO1xyXG5pbXBvcnQgeyBTZXR0aW5nSW5mbyB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3dlYWtfbmV0X2dhbWUvU2V0dGluZ0luZm9cIjtcclxuaW1wb3J0IFNpZ25hbCBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL2NvcmUvU2lnbmFsXCI7XHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9Db21tb24vQmFzZS9QbGF5ZXJJbmZvXCI7XHJcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9leHRlbnNpb24vd2Vha19uZXRfZ2FtZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZXhwb3J0IGVudW0gS2V5RGlyIHtcclxuICAgIExlZnRfVG9fUmlnaHQsXHJcbiAgICBSaWdodF9Ub19MZWZ0LFxyXG4gICAgVG9wX1RvX0JvdHRvbSxcclxuICAgIEJvdHRvbV9Ub19Ub3AsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEtleVNoYXBlIHtcclxuICAgIFVOS05PV04sXHJcbiAgICBILFxyXG4gICAgVixcclxuICAgIERPT1IsXHJcbiAgICBMRUZURE9PUixcclxuICAgIFJJR0hURE9PUlxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlUb2dnbGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmlzbWF0aWNKb2ludClcclxuICAgIGpvaW50OiBjYy5QcmlzbWF0aWNKb2ludCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRW51bShLZXlEaXIpLCBkaXNwbGF5TmFtZTogXCLnp7vliqjmlrnlkJFcIiB9KVxyXG4gICAga2V5RGlyOiBLZXlEaXIgPSBLZXlEaXIuQm90dG9tX1RvX1RvcDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRW51bShLZXlTaGFwZSksIGRpc3BsYXlOYW1lOiBcIuawtOW5sy/lnoLnm7RcIiB9KVxyXG4gICAgc2hhcGU6IEtleVNoYXBlID0gS2V5U2hhcGUuVU5LTk9XTjtcclxuXHJcbiAgICBvcmlnaW5Qb3M6IGNjLlZlYzMgPSBjYy52MygpO1xyXG4gICAgb3BlblBvczogY2MuVmVjMyA9IGNjLnYzKCk7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlJpZ2lkQm9keSlcclxuICAgIGJvZHk6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kbGVyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBjb2xsaWRlcjogY2MuUGh5c2ljc0NvbGxpZGVyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLlop7lvLrng63ljLpcIiB9KVxyXG4gICAgc3Ryb25nQXJlYTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uVG9nZ2xlU3dpdGNoZWQ6IFNpZ25hbCA9IG5ldyBTaWduYWwoKTtcclxuXHJcblxyXG4gICAgc3RvcFNpZ246IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5qb2ludCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuam9pbnQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5QcmlzbWF0aWNKb2ludCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYm9keSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSlcclxuICAgICAgICB0aGlzLmJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuU3RhdGljXHJcblxyXG4gICAgICAgIHRoaXMub3JpZ2luUG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMub3BlblBvcyA9IHRoaXMubm9kZS5wb3NpdGlvbjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMua2V5RGlyID09IEtleURpci5Cb3R0b21fVG9fVG9wKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlblBvcy55ICs9IHRoaXMuam9pbnQudXBwZXJMaW1pdDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMua2V5RGlyID09IEtleURpci5MZWZ0X1RvX1JpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlblBvcy54ICs9IHRoaXMuam9pbnQudXBwZXJMaW1pdDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMua2V5RGlyID09IEtleURpci5Ub3BfVG9fQm90dG9tKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlblBvcy55IC09IHRoaXMuam9pbnQudXBwZXJMaW1pdDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMua2V5RGlyID09IEtleURpci5SaWdodF9Ub19MZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlblBvcy54IC09IHRoaXMuam9pbnQudXBwZXJMaW1pdDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZXIub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuY2xpY2ssIHRoaXMpO1xyXG5cclxuICAgICAgICAvL2Rlc3Ryb3kgYWxsIGNvbGxpZGVyIGluIFtoYW5kbGVyXVxyXG4gICAgICAgIGxldCBjb2xsaWRlciA9IHRoaXMuaGFuZGxlci5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NvbGxpZGVyKVxyXG4gICAgICAgIGlmIChjb2xsaWRlcikge1xyXG4gICAgICAgICAgICBjb2xsaWRlci5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBib2R5ID0gdGhpcy5oYW5kbGVyLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgIGJvZHkuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NDb2xsaWRlcik7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlci5mcmljdGlvbiA9IDAuMjtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5hZGRDb21wb25lbnQoT25lV2F5UGxhdGZvcm0pO1xyXG5cclxuXHJcbiAgICAgICAgLy9jcmVhdGUgc3RvcCBjb2xsaWRlciBcclxuICAgICAgICAvLyB0aGlzLmNyZWF0ZVN0b3BTaWduKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hhcGUgPT0gS2V5U2hhcGUuVU5LTk9XTikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLmFuZ2xlID09IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCByYXRpbyA9IHRoaXMubm9kZS53aWR0aCAvIHRoaXMubm9kZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAocmF0aW8gPCAyICYmIHJhdGlvID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hhcGUgPSBLZXlTaGFwZS5ET09SO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyYXRpbyA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYXBlID0gS2V5U2hhcGUuSDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gMTNcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFwZSA9IEtleVNoYXBlLlY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlLmFuZ2xlID09IDkwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmF0aW8gPSB0aGlzLm5vZGUud2lkdGggLyB0aGlzLm5vZGUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhdGlvIDwgMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hhcGUgPSBLZXlTaGFwZS5IXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gMTNcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFwZSA9IEtleVNoYXBlLlY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coS2V5U2hhcGVbdGhpcy5zaGFwZV0pXHJcbiAgICAgICAgaWYgKHRoaXMuc2hhcGUgPT0gS2V5U2hhcGUuSCkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmNyZWF0ZVN0b3BTaWduKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0SW52aXNpYmxlSGFuZGxlcigpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2hhcGUgPT0gS2V5U2hhcGUuVikge1xyXG4gICAgICAgICAgICB0aGlzLmdldEludmlzaWJsZUhhbmRsZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IDEzXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNoYXBlID09IEtleVNoYXBlLkRPT1IpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVFZGdlKGNjLnYyKDAsIDEpKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVFZGdlKGNjLnYyKC0xLCAwKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRWRnZShjYy52MigxLCAwKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNoYXBlID09IEtleVNoYXBlLkxFRlRET09SKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRWRnZShjYy52MigwLCAxKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRWRnZShjYy52MigtMSwgMCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUVkZ2UoY2MudjIoMSwgMCkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaGFwZSA9PSBLZXlTaGFwZS5SSUdIVERPT1IpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVFZGdlKGNjLnYyKDAsIDEpKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVFZGdlKGNjLnYyKC0xLCAwKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRWRnZShjYy52MigxLCAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmIChQbGF5ZXJJbmZvLmlzUGxheWluZ0RhaWx5KSB7XHJcbiAgICAgICAgbGV0IHNwcml0ZXMgPSB0aGlzLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKGNjLlNwcml0ZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcHJpdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNjVXRpbC5zZXREaXNwbGF5KHNwcml0ZXNbaV0sIFwiSW1nL2xldmVsL1wiICsgc3ByaXRlc1tpXS5zcHJpdGVGcmFtZS5uYW1lICsgVXNlckluZm8udGhlbWVfa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUVkZ2UoZGlyOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGlmIChkaXIueSAhPSAwKSB7XHJcbiAgICAgICAgICAgIG5vZGUud2lkdGggPSB0aGlzLm5vZGUud2lkdGg7XHJcbiAgICAgICAgICAgIG5vZGUuaGVpZ2h0ID0gNTA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkaXIueCAhPSAwKSB7XHJcbiAgICAgICAgICAgIG5vZGUud2lkdGggPSA1MDtcclxuICAgICAgICAgICAgbm9kZS5oZWlnaHQgPSB0aGlzLm5vZGUuaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBvcyA9IG5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBwb3MuYWRkU2VsZihkaXIubXVsdGlwbHkoY2MudjIodGhpcy5ub2RlLndpZHRoIC8gMiwgdGhpcy5ub2RlLmhlaWdodCAvIDIpKSlcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgbm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5jbGljaywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY3JlYXRlU3RvcFNpZ24oKSB7XHJcbiAgICAgICAgbGV0IHByZWZhYiA9IGF3YWl0IGNjVXRpbC5nZXRSZXMoXCJQcmVmYWJzL21pc2Mvc3RvcFwiLCBjYy5QcmVmYWIpXHJcbiAgICAgICAgdGhpcy5zdG9wU2lnbiA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikgYXMgY2MuTm9kZTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGhpcy5zdG9wU2lnbilcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9pc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGN1ckRpcjogY2MuVmVjMiA9IGNjLnYyKCk7XHJcblxyXG4gICAgZ2V0IGlzT3BlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNPcGVuO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3N3aXRjaCgpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNPcGVuKSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC41LCB7IHBvc2l0aW9uOiB0aGlzLm9wZW5Qb3MgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuY2FsbCh0aGlzLm9uRmluaXNoLmJpbmQodGhpcykpLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy5jdXJEaXIueSA9IHRoaXMub3BlblBvcy55IC0gdGhpcy5ub2RlLnk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjUsIHsgcG9zaXRpb246IHRoaXMub3JpZ2luUG9zIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLmNhbGwodGhpcy5vbkZpbmlzaC5iaW5kKHRoaXMpKS5zdGFydCgpXHJcbiAgICAgICAgICAgIHRoaXMuY3VyRGlyLnkgPSB0aGlzLm9yaWdpblBvcy55IC0gdGhpcy5ub2RlLnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBfaW52aXNpYmxlSGFuZGxlcjogY2MuTm9kZTtcclxuXHJcbiAgICBnZXRJbnZpc2libGVIYW5kbGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pbnZpc2libGVIYW5kbGVyID09IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IGludmlzaWJsZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgICAgIGludmlzaWJsZS53aWR0aCA9IHRoaXMubm9kZS53aWR0aDtcclxuICAgICAgICAgICAgaW52aXNpYmxlLmhlaWdodCA9IHRoaXMubm9kZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUud2lkdGggPCB0aGlzLm5vZGUuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBpbnZpc2libGUud2lkdGggPSA1MDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGludmlzaWJsZS5oZWlnaHQgPSA1MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnZpc2libGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICBpbnZpc2libGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuY2xpY2ssIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl9pbnZpc2libGVIYW5kbGVyID0gaW52aXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW52aXNpYmxlSGFuZGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja05lZWRNb3ZlQmFjaygpIHtcclxuICAgICAgICAvLyBpZiAodGhpcy5zdHJvbmdBcmVhKSB7XHJcbiAgICAgICAgLy8gdGhpcy5nZXRJbnZpc2libGVIYW5kbGVyKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2ludmlzaWJsZUhhbmRsZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5faW52aXNpYmxlSGFuZGxlci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmICghY2MuQ2FtZXJhLm1haW4uY2FuU2VlKHRoaXMuaGFuZGxlcikpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRJbnZpc2libGVIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbnZpc2libGVIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnZpc2libGVIYW5kbGVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faW52aXNpYmxlSGFuZGxlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW52aXNpYmxlSGFuZGxlci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGUoKSB7XHJcbiAgICAgICAgdGhpcy5fY2FuY2VsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9pc09wZW4gPSAhdGhpcy5faXNPcGVuXHJcbiAgICAgICAgdGhpcy5fc3dpdGNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NhbmNlbGVkID0gZmFsc2U7XHJcblxyXG4gICAgY2FuY2VsKCkge1xyXG4gICAgICAgIHRoaXMuX2NhbmNlbGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9zd2l0Y2goKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkZpbmlzaCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fY2FuY2VsZWQpIHJldHVybjtcclxuICAgICAgICB0aGlzLmNoZWNrTmVlZE1vdmVCYWNrKCk7XHJcbiAgICAgICAgdGhpcy5jdXJEaXIueSA9IDA7XHJcbiAgICAgICAgZXZ0LmVtaXQoXCJHYW1lLmtleU1vdmVkXCIsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5vblRvZ2dsZVN3aXRjaGVkLmZpcmUodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBjbGljaygpIHtcclxuICAgICAgICBHYW1lLmluc3RhbmNlLmFjdGl2ZUdhbWUoKTtcclxuICAgICAgICBEZXZpY2UucGxheVNmeChcImtleVwiKTtcclxuICAgICAgICBldnQuZW1pdChcIkdhbWUua2V5Q2xpY2tcIilcclxuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==