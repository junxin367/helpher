"use strict";
cc._RF.push(module, '3b8f1hzBQ5C761ZuzaFRz7h', 'LabelPlayer');
// framework/misc/LabelPlayer.ts

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
var LabelPlayer = /** @class */ (function (_super) {
    __extends(LabelPlayer, _super);
    function LabelPlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.framePerSec = 15;
        _this.cursor = 0;
        _this.end = 0;
        _this.isLoop = false;
        _this._start = 0;
        _this.isPlaying = false;
        _this.animations = [];
        _this.index2Frames = [];
        _this.currentFrames = [];
        _this.playOnLoad = false;
        return _this;
    }
    LabelPlayer.prototype.onLoad = function () {
        var _this = this;
        this.label = this.getComponent(cc.Label);
        this.animations.forEach(function (v, i) {
            var _a = v.split("-"), start = _a[0], end = _a[1];
            var frames = null;
            if (end) {
                frames = range(start, end);
            }
            else {
                frames = v.split(",").map(function (v) { return Number(v); });
            }
            _this.index2Frames.push(frames);
        });
    };
    Object.defineProperty(LabelPlayer.prototype, "interval", {
        get: function () {
            return 1 / this.framePerSec;
        },
        enumerable: false,
        configurable: true
    });
    LabelPlayer.prototype.start = function () {
        if (this.playOnLoad) {
            this.playWithIndex(0, true);
        }
    };
    LabelPlayer.prototype._play = function (start, end, loop) {
        if (loop === void 0) { loop = false; }
        this.isPlaying = true;
        this._start = start;
        this.cursor = start;
        this.end = end;
        this.isLoop = loop;
    };
    LabelPlayer.prototype.play = function (start, end, loop) {
        if (loop === void 0) { loop = false; }
        var currentFrames = range(start, end);
        this.playArray(currentFrames, loop);
    };
    LabelPlayer.prototype.playIndexLoop = function (idx) {
        this.playArray(this.index2Frames[idx], true);
    };
    LabelPlayer.prototype.playIndex = function (idx) {
        this.playArray(this.index2Frames[idx], false);
    };
    LabelPlayer.prototype.playWithIndex = function (idx, loop) {
        if (loop === void 0) { loop = false; }
        this.playArray(this.index2Frames[idx], loop);
    };
    LabelPlayer.prototype.setInterval = function (interval) {
        this.unschedule(this.step);
        this.schedule(this.step, this.interval);
    };
    LabelPlayer.prototype.playArray = function (frames, loop) {
        if (loop === void 0) { loop = false; }
        this.currentFrames = frames;
        this._play(0, frames.length - 1, loop);
    };
    LabelPlayer.prototype.onEnable = function () {
        this.schedule(this.step, this.interval);
    };
    LabelPlayer.prototype.onDisable = function () {
        this.unschedule(this.step);
    };
    LabelPlayer.prototype.step = function () {
        if (this.isPlaying) {
            var frame = this.currentFrames[this.cursor];
            this.label.string = frame.toString();
            this.cursor++;
            if (this.cursor > this.end) {
                if (this.isLoop)
                    this.cursor = this._start;
                else
                    this.isPlaying = false;
            }
        }
    };
    __decorate([
        property({ slide: true, range: [1, 60], step: 1 })
    ], LabelPlayer.prototype, "framePerSec", void 0);
    __decorate([
        property({ type: [cc.String] })
    ], LabelPlayer.prototype, "animations", void 0);
    __decorate([
        property
    ], LabelPlayer.prototype, "playOnLoad", void 0);
    LabelPlayer = __decorate([
        ccclass,
        menu("gamelib/LabelPlayer")
    ], LabelPlayer);
    return LabelPlayer;
}(cc.Component));
exports.default = LabelPlayer;

cc._RF.pop();