
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/LocalLifeSystem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '959459BZRhJIbg8xlNUWIJQ', 'LocalLifeSystem');
// framework/misc/LocalLifeSystem.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LifeSystem = exports.LocalLifeSystem = void 0;
var event_1 = require("../core/event");
var Signal_1 = require("../core/Signal");
var LocalLifeSystem = /** @class */ (function () {
    function LocalLifeSystem() {
        //生成一颗星需要的时间 
        this.sec_per_live = 60 * 5;
        //最多可得多少颗
        this.live_free_get = 5;
        this.max_freeLives_seconds = this.live_free_get * this.sec_per_live;
        this.livesSeconds = 0;
        this.isEnabledAutoRecovery = true;
        this.recoverySignal = new Signal_1.default();
    }
    LocalLifeSystem.prototype.init = function (liveSec, live_free) {
        if (liveSec === void 0) { liveSec = null; }
        if (live_free === void 0) { live_free = null; }
        this.sec_per_live = liveSec || this.sec_per_live;
        this.live_free_get = live_free || this.live_free_get;
        this.max_freeLives_seconds = this.sec_per_live * this.live_free_get;
        this.livesSeconds = 0;
        this.lastLifeSaveTime = Number(localStorage.getItem("sys_life_lastLifeSaveTime") || new Date().getTime());
        g.setGlobalInstance(exports.LifeSystem, "LocalLifeSystem");
        event_1.evt.on("onEnterForeground", this.onEnterForeground, this);
        this.onTimeRequested(new Date().getTime());
        console.log("体力系统初始化", this);
    };
    LocalLifeSystem.prototype.onEnterForeground = function () {
        this.onTimeRequested(new Date().getTime());
    };
    Object.defineProperty(LocalLifeSystem.prototype, "nextLifeTime", {
        get: function () {
            return (this.lives + 1) * this.sec_per_live - this.livesSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LocalLifeSystem.prototype, "lives", {
        get: function () {
            return Math.floor(this.livesSeconds / this.sec_per_live);
        },
        enumerable: false,
        configurable: true
    });
    LocalLifeSystem.prototype.save = function () {
        this.lastLifeSaveTime = new Date().getTime();
        localStorage.setItem("sys_life_lastLifeSaveTime", this.lastLifeSaveTime + "");
    };
    LocalLifeSystem.prototype.onTimeRequested = function (time) {
        if (this.lastLifeSaveTime) {
            var timeElapsed = Math.floor((time - this.lastLifeSaveTime) / 1000);
            this.livesSeconds = Math.min(this.max_freeLives_seconds, timeElapsed);
        }
    };
    LocalLifeSystem.prototype.startCheck = function (callback, target) {
        var _this = this;
        if (this.task_checkLives)
            return;
        var lastHeart = callback.call(target);
        this.task_checkLives = setInterval(function (_) {
            var heart = callback.call(target);
            if (lastHeart != heart && heart == _this.live_free_get - 1) {
                _this.livesSeconds = 0;
                _this.save();
            }
            if (heart < _this.live_free_get) {
                // this.checkForSpawnLives();
                _this.livesSeconds = _this.livesSeconds + 1;
                if (heart + _this.lives > heart) {
                    console.log("获得在线奖励一颗星", _this.lives);
                    _this.recoverySignal.fire(_this.lives);
                    _this.livesSeconds = 0;
                    _this.save();
                }
            }
            lastHeart = heart;
        }, 1000);
    };
    return LocalLifeSystem;
}());
exports.LocalLifeSystem = LocalLifeSystem;
exports.LifeSystem = new LocalLifeSystem();
// 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxMb2NhbExpZmVTeXN0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQW9DO0FBQ3BDLHlDQUFvQztBQUVwQztJQUFBO1FBRUMsYUFBYTtRQUNiLGlCQUFZLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBRTtRQUN2QixTQUFTO1FBQ1Qsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFFbEIsMEJBQXFCLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBTS9ELGlCQUFZLEdBQVUsQ0FBQyxDQUFBO1FBR3ZCLDBCQUFxQixHQUFHLElBQUksQ0FBQztRQUV0QixtQkFBYyxHQUFHLElBQUksZ0JBQU0sRUFBRSxDQUFDO0lBdUV0QyxDQUFDO0lBdEVBLDhCQUFJLEdBQUosVUFBSyxPQUFjLEVBQUMsU0FBZ0I7UUFBL0Isd0JBQUEsRUFBQSxjQUFjO1FBQUMsMEJBQUEsRUFBQSxnQkFBZ0I7UUFFbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQTtRQUNoRCxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFBO1FBQ3BELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDcEUsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUE7UUFDckIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLDJCQUEyQixDQUFDLElBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO1FBQ3hHLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBVSxFQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFbEQsV0FBRyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFB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LFFBQUEsVUFBVSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7QUFDOUMsR0FBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV2dCB9IGZyb20gXCIuLi9jb3JlL2V2ZW50XCI7XHJcbmltcG9ydCBTaWduYWwgZnJvbSBcIi4uL2NvcmUvU2lnbmFsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9jYWxMaWZlU3lzdGVtXHJcbntcclxuXHQvL+eUn+aIkOS4gOmil+aYn+mcgOimgeeahOaXtumXtCBcclxuXHRzZWNfcGVyX2xpdmUgPSA2MCAqIDUgO1xyXG5cdC8v5pyA5aSa5Y+v5b6X5aSa5bCR6aKXXHJcblx0bGl2ZV9mcmVlX2dldCA9IDU7XHJcblx0XHJcblx0bWF4X2ZyZWVMaXZlc19zZWNvbmRzID0gdGhpcy5saXZlX2ZyZWVfZ2V0ICogdGhpcy5zZWNfcGVyX2xpdmU7XHJcblxyXG5cdHRhc2tfcnVuU3Bhd25MaXZlczpudW1iZXI7XHJcblxyXG5cdHRhc2tfY2hlY2tMaXZlczpudW1iZXI7XHJcblxyXG5cdGxpdmVzU2Vjb25kczpudW1iZXIgPSAwXHJcblx0bGFzdExpZmVTYXZlVGltZTpudW1iZXI7XHJcblxyXG5cdGlzRW5hYmxlZEF1dG9SZWNvdmVyeSA9IHRydWU7XHJcblx0XHJcblx0cHVibGljIHJlY292ZXJ5U2lnbmFsID0gbmV3IFNpZ25hbCgpO1xyXG5cdGluaXQobGl2ZVNlYyA9IG51bGwsbGl2ZV9mcmVlID0gbnVsbClcclxuXHR7XHJcblx0XHR0aGlzLnNlY19wZXJfbGl2ZSA9IGxpdmVTZWMgfHwgdGhpcy5zZWNfcGVyX2xpdmVcclxuXHRcdHRoaXMubGl2ZV9mcmVlX2dldCA9IGxpdmVfZnJlZSB8fCB0aGlzLmxpdmVfZnJlZV9nZXRcclxuXHRcdHRoaXMubWF4X2ZyZWVMaXZlc19zZWNvbmRzID0gdGhpcy5zZWNfcGVyX2xpdmUgKiB0aGlzLmxpdmVfZnJlZV9nZXQ7XHJcblx0XHR0aGlzLmxpdmVzU2Vjb25kcyA9IDBcclxuXHRcdHRoaXMubGFzdExpZmVTYXZlVGltZSA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN5c19saWZlX2xhc3RMaWZlU2F2ZVRpbWVcIil8fCBuZXcgRGF0ZSgpLmdldFRpbWUoKSlcclxuXHRcdGcuc2V0R2xvYmFsSW5zdGFuY2UoTGlmZVN5c3RlbSxcIkxvY2FsTGlmZVN5c3RlbVwiKTtcclxuXHJcblx0XHRldnQub24oXCJvbkVudGVyRm9yZWdyb3VuZFwiLHRoaXMub25FbnRlckZvcmVncm91bmQsdGhpcylcclxuXHRcdHRoaXMub25UaW1lUmVxdWVzdGVkKG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcclxuXHRcdGNvbnNvbGUubG9nKFwi5L2T5Yqb57O757uf5Yid5aeL5YyWXCIsdGhpcyk7XHJcblx0fVxyXG5cclxuXHRvbkVudGVyRm9yZWdyb3VuZCgpXHJcblx0e1xyXG5cdFx0dGhpcy5vblRpbWVSZXF1ZXN0ZWQobmV3IERhdGUoKS5nZXRUaW1lKCkpO1xyXG5cdH1cclxuXHJcblx0Z2V0IG5leHRMaWZlVGltZSgpXHJcblx0e1xyXG5cdFx0cmV0dXJuICh0aGlzLmxpdmVzICsgMSkgKiB0aGlzLnNlY19wZXJfbGl2ZSAtIHRoaXMubGl2ZXNTZWNvbmRzO1xyXG5cdH1cclxuXHJcblx0Z2V0IGxpdmVzKClcclxuXHR7XHJcblx0XHRyZXR1cm4gTWF0aC5mbG9vcih0aGlzLmxpdmVzU2Vjb25kcyAvIHRoaXMuc2VjX3Blcl9saXZlKVxyXG5cdH1cclxuXHJcblx0c2F2ZSgpXHJcblx0e1xyXG5cdFx0dGhpcy5sYXN0TGlmZVNhdmVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN5c19saWZlX2xhc3RMaWZlU2F2ZVRpbWVcIix0aGlzLmxhc3RMaWZlU2F2ZVRpbWUrXCJcIilcclxuXHR9XHJcblxyXG5cdG9uVGltZVJlcXVlc3RlZCh0aW1lKVxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmxhc3RMaWZlU2F2ZVRpbWUpXHJcblx0XHR7XHJcblx0XHRcdGxldCB0aW1lRWxhcHNlZCA9IE1hdGguZmxvb3IoKHRpbWUgLSB0aGlzLmxhc3RMaWZlU2F2ZVRpbWUpLzEwMDApXHJcblx0XHRcdHRoaXMubGl2ZXNTZWNvbmRzID0gTWF0aC5taW4odGhpcy5tYXhfZnJlZUxpdmVzX3NlY29uZHMsIHRpbWVFbGFwc2VkKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3RhcnRDaGVjayhjYWxsYmFjayx0YXJnZXQpXHJcblx0e1xyXG5cdFx0aWYodGhpcy50YXNrX2NoZWNrTGl2ZXMpIHJldHVybjtcclxuXHRcdGxldCBsYXN0SGVhcnQgPSBjYWxsYmFjay5jYWxsKHRhcmdldCk7XHJcblx0XHR0aGlzLnRhc2tfY2hlY2tMaXZlcyA9IHNldEludGVydmFsKF89PntcclxuXHRcdFx0bGV0IGhlYXJ0ID0gY2FsbGJhY2suY2FsbCh0YXJnZXQpO1xyXG5cdFx0XHRpZihsYXN0SGVhcnQgIT0gaGVhcnQgJiYgaGVhcnQgPT0gdGhpcy5saXZlX2ZyZWVfZ2V0IC0gMSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMubGl2ZXNTZWNvbmRzID0gMDtcclxuXHRcdFx0XHR0aGlzLnNhdmUoKTtcclxuXHRcdFx0fSBcclxuXHRcdFx0aWYgKGhlYXJ0IDwgdGhpcy5saXZlX2ZyZWVfZ2V0KSB7IFxyXG5cdFx0XHRcdC8vIHRoaXMuY2hlY2tGb3JTcGF3bkxpdmVzKCk7XHJcblx0XHRcdFx0dGhpcy5saXZlc1NlY29uZHMgPSB0aGlzLmxpdmVzU2Vjb25kcyArIDE7XHJcblx0XHRcdFx0aWYgKCBoZWFydCArIHRoaXMubGl2ZXMgPiBoZWFydClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIuiOt+W+l+WcqOe6v+WlluWKseS4gOmil+aYn1wiLHRoaXMubGl2ZXMpXHJcblx0XHRcdFx0XHR0aGlzLnJlY292ZXJ5U2lnbmFsLmZpcmUodGhpcy5saXZlcyk7XHJcblx0XHRcdFx0XHR0aGlzLmxpdmVzU2Vjb25kcyA9IDA7XHJcblx0XHRcdFx0XHR0aGlzLnNhdmUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0bGFzdEhlYXJ0ID0gaGVhcnQ7XHJcblx0XHR9LDEwMDApXHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHZhciBMaWZlU3lzdGVtID0gbmV3IExvY2FsTGlmZVN5c3RlbSgpO1xyXG4vLyBcclxuIl19