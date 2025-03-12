
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/LabelPlayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxMYWJlbFBsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQTZCLEVBQUUsQ0FBQyxVQUFVLEVBQXhDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBaUIsQ0FBQztBQUlqRDtJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQWlIQztRQS9HRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGlCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRXpCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsU0FBRyxHQUFXLENBQUMsQ0FBQztRQUVoQixZQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUczQixnQkFBVSxHQUFhLEVBQUUsQ0FBQTtRQUV6QixrQkFBWSxHQUFTLEVBQUUsQ0FBQztRQUV4QixtQkFBYSxHQUFHLEVBQUUsQ0FBQTtRQUdsQixnQkFBVSxHQUFXLEtBQUssQ0FBQzs7SUF3Ri9CLENBQUM7SUF0RkcsNEJBQU0sR0FBTjtRQUFBLGlCQWFDO1FBWkcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3BCLElBQUEsS0FBYyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUF6QixLQUFLLFFBQUEsRUFBQyxHQUFHLFFBQWdCLENBQUE7WUFDOUIsSUFBSSxNQUFNLEdBQVksSUFBSSxDQUFDO1lBQzNCLElBQUcsR0FBRyxFQUNOO2dCQUNJLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzdCO2lCQUFJ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QUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNkLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUN4QixJQUFJLElBQUksQ0FBQyxNQUFNO29CQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzs7b0JBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQy9CO1NBQ0o7SUFDTCxDQUFDO0lBdkdEO1FBREMsUUFBUSxDQUFDLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFDLENBQUMsRUFBQyxDQUFDO29EQUNwQjtJQWF6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO21EQUNQO0lBT3pCO1FBREMsUUFBUTttREFDa0I7SUF6QlYsV0FBVztRQUYvQixPQUFPO1FBQ1AsSUFBSSxDQUFDLHFCQUFxQixDQUFDO09BQ1AsV0FBVyxDQWlIL0I7SUFBRCxrQkFBQztDQWpIRCxBQWlIQyxDQWpId0MsRUFBRSxDQUFDLFNBQVMsR0FpSHBEO2tCQWpIb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgLG1lbnV9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbkBtZW51KFwiZ2FtZWxpYi9MYWJlbFBsYXllclwiKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbFBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3NsaWRlOnRydWUsIHJhbmdlOlsxLDYwXSAsc3RlcDoxfSlcclxuICAgIGZyYW1lUGVyU2VjOiBudW1iZXIgPSAxNTtcclxuXHJcbiAgICBjdXJzb3I6IG51bWJlciA9IDA7XHJcblxyXG4gICAgZW5kOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGlzTG9vcDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIF9zdGFydDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBpc1BsYXlpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuU3RyaW5nXSB9KVxyXG4gICAgYW5pbWF0aW9uczogc3RyaW5nW10gPSBbXVxyXG5cclxuICAgIGluZGV4MkZyYW1lczphbnlbXSA9IFtdO1xyXG5cclxuICAgIGN1cnJlbnRGcmFtZXMgPSBbXVxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcGxheU9uTG9hZDpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubGFiZWwgPSB0aGlzLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25zLmZvckVhY2goKHYsaSk9PntcclxuICAgICAgICAgICAgbGV0IFtzdGFydCxlbmRdID0gdi5zcGxpdChcIi1cIilcclxuICAgICAgICAgICAgbGV0IGZyYW1lczpudW1iZXJbXSA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmKGVuZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZnJhbWVzID0gcmFuZ2Uoc3RhcnQsZW5kKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBmcmFtZXMgPSB2LnNwbGl0KFwiLFwiKS5tYXAodj0+TnVtYmVyKHYpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXgyRnJhbWVzLnB1c2goZnJhbWVzKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBpbnRlcnZhbCgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIDEvdGhpcy5mcmFtZVBlclNlY1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmKHRoaXMucGxheU9uTG9hZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheVdpdGhJbmRleCgwLHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9wbGF5KHN0YXJ0LCBlbmQsIGxvb3AgPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9zdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgIHRoaXMuY3Vyc29yID0gc3RhcnQ7XHJcbiAgICAgICAgdGhpcy5lbmQgPSBlbmQ7XHJcbiAgICAgICAgdGhpcy5pc0xvb3AgPSBsb29wO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXkoc3RhcnQsIGVuZCwgbG9vcCA9IGZhbHNlKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRGcmFtZXMgPSByYW5nZShzdGFydCwgZW5kKVxyXG4gICAgICAgIHRoaXMucGxheUFycmF5KGN1cnJlbnRGcmFtZXMsIGxvb3ApXHJcbiAgICB9XHJcblxyXG4gICAgcGxheUluZGV4TG9vcChpZHg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucGxheUFycmF5KHRoaXMuaW5kZXgyRnJhbWVzW2lkeF0sdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUluZGV4KGlkeDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5QXJyYXkodGhpcy5pbmRleDJGcmFtZXNbaWR4XSxmYWxzZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHBsYXlXaXRoSW5kZXgoaWR4OiBudW1iZXIsIGxvb3AgPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMucGxheUFycmF5KHRoaXMuaW5kZXgyRnJhbWVzW2lkeF0sbG9vcCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpIHtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5zdGVwKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5zdGVwLCB0aGlzLmludGVydmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5QXJyYXkoZnJhbWVzOiBudW1iZXJbXSwgbG9vcDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RnJhbWVzID0gZnJhbWVzO1xyXG4gICAgICAgIHRoaXMuX3BsYXkoMCwgZnJhbWVzLmxlbmd0aCAtIDEsbG9vcClcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuc3RlcCwgdGhpcy5pbnRlcnZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnN0ZXApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0ZXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIGxldCBmcmFtZSA9IHRoaXMuY3VycmVudEZyYW1lc1t0aGlzLmN1cnNvcl1cclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBmcmFtZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnNvcisrO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJzb3IgPiB0aGlzLmVuZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNMb29wKSB0aGlzLmN1cnNvciA9IHRoaXMuX3N0YXJ0O1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxufSJdfQ==