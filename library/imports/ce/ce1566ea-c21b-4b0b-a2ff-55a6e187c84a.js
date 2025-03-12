"use strict";
cc._RF.push(module, 'ce156bqwhtLC6L/Vabhh8hK', 'FourComics');
// Game/Scripts/views/FourComics.ts

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
var EaseType_1 = require("../../../framework/extension/qanim/EaseType");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AnimationType;
(function (AnimationType) {
    AnimationType[AnimationType["Slide"] = 0] = "Slide";
    AnimationType[AnimationType["Scale"] = 1] = "Scale";
    AnimationType[AnimationType["Fade"] = 2] = "Fade";
})(AnimationType || (AnimationType = {}));
function prop(type) {
    if (type == AnimationType.Fade) {
        return 'opacity';
    }
    else if (type == AnimationType.Scale) {
        return 'scale';
    }
    return 'position';
}
var ShowConfig = /** @class */ (function () {
    function ShowConfig() {
        this.type = AnimationType.Fade;
        this.dur = 1;
        this.from = 0;
        this.to = 1;
        this.easeType = EaseType_1.EaseType.linear;
        this.slideBy = cc.v2();
    }
    __decorate([
        property({ type: cc.Enum(AnimationType) })
    ], ShowConfig.prototype, "type", void 0);
    __decorate([
        property()
    ], ShowConfig.prototype, "dur", void 0);
    __decorate([
        property()
    ], ShowConfig.prototype, "from", void 0);
    __decorate([
        property()
    ], ShowConfig.prototype, "to", void 0);
    __decorate([
        property({ type: cc.Enum(EaseType_1.EaseType) })
    ], ShowConfig.prototype, "easeType", void 0);
    __decorate([
        property({ type: cc.Vec2, visible: function () { return this.type == AnimationType.Slide; } })
    ], ShowConfig.prototype, "slideBy", void 0);
    ShowConfig = __decorate([
        ccclass("ShowConfig")
    ], ShowConfig);
    return ShowConfig;
}());
var FourComics = /** @class */ (function (_super) {
    __extends(FourComics, _super);
    function FourComics() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cells = [];
        _this.cursor = 0;
        _this.configs = [];
        _this.onFinishes = [];
        _this.interval = 3;
        return _this;
    }
    FourComics.prototype.onLoad = function () {
        this.cells = this.node.children;
        this.cursor = 0;
        this.node.on(cc.Node.EventType.TOUCH_END, this.next, this);
    };
    FourComics.prototype.start = function () {
        this.prepare();
        this.next();
        this.schedule(this.next, this.interval);
    };
    FourComics.prototype.next = function () {
        if (this.cursor >= this.configs.length) {
            return;
        }
        this.play();
        this.cursor++;
        if (this.cursor >= this.configs.length) {
            this.unschedule(this.next);
        }
    };
    FourComics.prototype.prepare = function () {
        var _this = this;
        this.cells.forEach(function (v, i) {
            var c = _this.configs[i];
            var pp = prop(c.type);
            v[pp] = c.from;
        });
    };
    FourComics.prototype.play = function () {
        var _a, _b;
        var _this = this;
        var c = this.cursor;
        var cell = this.cells[c];
        var config = this.configs[c];
        var t = null;
        if (config.type == AnimationType.Slide) {
            var pos = cell.getPosition();
            cell.setPosition(pos.x + config.slideBy.x, pos.y + config.slideBy.y);
            t = cc.tween(cell).to(config.dur, { position: pos }, { easing: EaseType_1.EaseType[config.easeType] });
        }
        else if (config.type == AnimationType.Fade) {
            t = cc.tween(cell).to(config.dur, (_a = {}, _a[prop(config.type)] = config.to * 255, _a), { easing: EaseType_1.EaseType[config.easeType] });
        }
        else if (config.type == AnimationType.Scale) {
            t = cc.tween(cell).to(config.dur, (_b = {}, _b[prop(config.type)] = config.to, _b), { easing: EaseType_1.EaseType[config.easeType] });
        }
        if (c == this.cells.length - 1) {
            t.delay(2.0).call(function () {
                _this.onFinishes.forEach(function (v) { return v.emit([_this]); });
            }).start();
        }
        else {
            t.start();
        }
    };
    __decorate([
        property([ShowConfig])
    ], FourComics.prototype, "configs", void 0);
    __decorate([
        property([cc.Component.EventHandler])
    ], FourComics.prototype, "onFinishes", void 0);
    __decorate([
        property
    ], FourComics.prototype, "interval", void 0);
    FourComics = __decorate([
        ccclass
    ], FourComics);
    return FourComics;
}(cc.Component));
exports.default = FourComics;

cc._RF.pop();