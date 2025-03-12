
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/PasrTimer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bd732ZZcyNCcKzuEddP93qx', 'PasrTimer');
// framework/misc/PasrTimer.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasrTimer = void 0;
// PasrTimer
var PasrTimer = /** @class */ (function () {
    function PasrTimer(pause, attack, sustain, release) {
        if (pause === void 0) { pause = 0; }
        if (attack === void 0) { attack = 0; }
        if (sustain === void 0) { sustain = 0; }
        if (release === void 0) { release = 0; }
        this.stage = 0;
        this.stageTime = [];
        this.timer = 0;
        this.value = 0;
        this.queriedSustain = false;
        this.queriedRelease = false;
        this.queriedFinished = false;
        this.stageTime = new Array;
        this.stageTime[0] = pause;
        this.stageTime[1] = attack;
        this.stageTime[2] = sustain;
        this.stageTime[3] = release;
        this.stage = 4;
        this.queriedFinished = true;
    }
    Object.defineProperty(PasrTimer.prototype, "p", {
        get: function () {
            return this.stageTime[0];
        },
        set: function (v) {
            this.stageTime[0] = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PasrTimer.prototype, "a", {
        get: function () {
            return this.stageTime[1];
        },
        set: function (v) {
            this.stageTime[1] = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PasrTimer.prototype, "s", {
        get: function () {
            return this.stageTime[2];
        },
        set: function (v) {
            this.stageTime[2] = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PasrTimer.prototype, "r", {
        get: function () {
            return this.stageTime[3];
        },
        set: function (v) {
            this.stageTime[3] = v;
        },
        enumerable: false,
        configurable: true
    });
    PasrTimer.prototype.setStateTime = function (timeIndex, time) {
        this.stageTime[timeIndex] = time;
    };
    PasrTimer.prototype.Tick = function (deltaTime) {
        if (this.stage == 4) {
            this.value = 0;
            return 0;
        }
        while (this.stage < 4 && (this.timer >= 1 || this.stageTime[this.stage] == 0)) {
            this.timer = 0;
            this.stage++;
        }
        if (this.stage < 4) {
            this.timer += deltaTime / this.stageTime[this.stage];
            if (this.timer > 1) {
                this.timer = 1;
            }
        }
        if (this.stage == 0) {
            this.value = 0;
        }
        else if (this.stage == 1) {
            this.value = this.timer;
        }
        else if (this.stage == 2) {
            this.value = 1;
        }
        else if (this.stage == 3) {
            this.value = 1 - this.timer;
        }
        else {
            this.value = 0;
        }
        return this.value;
    };
    PasrTimer.prototype.GetValue = function () {
        return this.value;
    };
    PasrTimer.prototype.reachedSustain = function () {
        if (this.queriedSustain) {
            return false;
        }
        if (this.stage >= 2) {
            this.queriedSustain = true;
            return true;
        }
        return false;
    };
    PasrTimer.prototype.reachedRelease = function () {
        if (this.queriedRelease) {
            return false;
        }
        if (this.stage >= 3) {
            this.queriedRelease = true;
            return true;
        }
        return false;
    };
    PasrTimer.prototype.isFinished = function () {
        return this.stage == 4;
    };
    PasrTimer.prototype.reachedFinished = function () {
        if (this.stage == 4 && !this.queriedFinished) {
            this.queriedFinished = true;
            return true;
        }
        return false;
    };
    PasrTimer.prototype.reset = function () {
        this.stage = 0;
        this.timer = 0;
        this.value = 0;
        this.queriedSustain = false;
        this.queriedFinished = false;
    };
    PasrTimer.prototype.Stop = function () {
        this.stage = 4;
    };
    PasrTimer.prototype.GetStage = function () {
        return this.stage;
    };
    PasrTimer.prototype.SetStage = function (stage) {
        this.stage = stage;
        this.timer = 0;
    };
    PasrTimer.prototype.TotalTime = function () {
        return this.stageTime[0] + this.stageTime[1] + this.stageTime[2] + this.stageTime[3];
    };
    return PasrTimer;
}());
exports.PasrTimer = PasrTimer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxQYXNyVGltZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsWUFBWTtBQUNaO0lBZUksbUJBQW1CLEtBQWlCLEVBQUUsTUFBa0IsRUFBRSxPQUFtQixFQUFFLE9BQW1CO1FBQS9FLHNCQUFBLEVBQUEsU0FBaUI7UUFBRSx1QkFBQSxFQUFBLFVBQWtCO1FBQUUsd0JBQUEsRUFBQSxXQUFtQjtRQUFFLHdCQUFBLEVBQUEsV0FBbUI7UUFkMUYsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixjQUFTLEdBQWEsRUFBRSxDQUFDO1FBRXpCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUVoQyxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUVoQyxvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUdyQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxDQUFBO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVELHNCQUFJLHdCQUFDO2FBSUw7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDNUIsQ0FBQzthQU5ELFVBQU0sQ0FBQztZQUNILElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFD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SyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFTSw2QkFBUyxHQUFoQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQTlKQSxBQThKQyxJQUFBO0FBOUpZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUGFzclRpbWVyXHJcbmV4cG9ydCBjbGFzcyBQYXNyVGltZXIge1xyXG4gICAgcHJpdmF0ZSBzdGFnZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHN0YWdlVGltZTogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIHRpbWVyOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgdmFsdWU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBxdWVyaWVkU3VzdGFpbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgcXVlcmllZFJlbGVhc2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHF1ZXJpZWRGaW5pc2hlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXVzZTogbnVtYmVyID0gMCwgYXR0YWNrOiBudW1iZXIgPSAwLCBzdXN0YWluOiBudW1iZXIgPSAwLCByZWxlYXNlOiBudW1iZXIgPSAwKSB7XHJcbiAgICAgICAgdGhpcy5zdGFnZVRpbWUgPSBuZXcgQXJyYXlcclxuICAgICAgICB0aGlzLnN0YWdlVGltZVswXSA9IHBhdXNlO1xyXG4gICAgICAgIHRoaXMuc3RhZ2VUaW1lWzFdID0gYXR0YWNrO1xyXG4gICAgICAgIHRoaXMuc3RhZ2VUaW1lWzJdID0gc3VzdGFpbjtcclxuICAgICAgICB0aGlzLnN0YWdlVGltZVszXSA9IHJlbGVhc2U7XHJcbiAgICAgICAgdGhpcy5zdGFnZSA9IDQ7XHJcbiAgICAgICAgdGhpcy5xdWVyaWVkRmluaXNoZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBwKHYpIHtcclxuICAgICAgICB0aGlzLnN0YWdlVGltZVswXSA9IHY7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhZ2VUaW1lWzBdXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGEodikge1xyXG4gICAgICAgIHRoaXMuc3RhZ2VUaW1lWzFdID0gdjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGFnZVRpbWVbMV1cclxuICAgIH1cclxuXHJcbiAgICBzZXQgcyh2KSB7XHJcbiAgICAgICAgdGhpcy5zdGFnZVRpbWVbMl0gPSB2O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YWdlVGltZVsyXVxyXG4gICAgfVxyXG5cclxuICAgIHNldCByKHYpIHtcclxuICAgICAgICB0aGlzLnN0YWdlVGltZVszXSA9IHY7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhZ2VUaW1lWzNdXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgc2V0U3RhdGVUaW1lKHRpbWVJbmRleCwgdGltZSkge1xyXG4gICAgICAgIHRoaXMuc3RhZ2VUaW1lW3RpbWVJbmRleF0gPSB0aW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUaWNrKGRlbHRhVGltZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAodGhpcy5zdGFnZSA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSAwO1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuc3RhZ2UgPCA0ICYmICh0aGlzLnRpbWVyID49IDEgfHwgdGhpcy5zdGFnZVRpbWVbdGhpcy5zdGFnZV0gPT0gMCkpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhZ2UrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhZ2UgPCA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgKz0gZGVsdGFUaW1lIC8gdGhpcy5zdGFnZVRpbWVbdGhpcy5zdGFnZV07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyID4gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lciA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhZ2UgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGFnZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnRpbWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YWdlID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhZ2UgPT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gMSAtIHRoaXMudGltZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlYWNoZWRTdXN0YWluKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnF1ZXJpZWRTdXN0YWluKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhZ2UgPj0gMikge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXJpZWRTdXN0YWluID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVhY2hlZFJlbGVhc2UoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMucXVlcmllZFJlbGVhc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdGFnZSA+PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVlcmllZFJlbGVhc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0ZpbmlzaGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YWdlID09IDQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlYWNoZWRGaW5pc2hlZCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5zdGFnZSA9PSA0ICYmICF0aGlzLnF1ZXJpZWRGaW5pc2hlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXJpZWRGaW5pc2hlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RhZ2UgPSAwO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSAwO1xyXG4gICAgICAgIHRoaXMucXVlcmllZFN1c3RhaW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnF1ZXJpZWRGaW5pc2hlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RhZ2UgPSA0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRTdGFnZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTZXRTdGFnZShzdGFnZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGFnZSA9IHN0YWdlO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUb3RhbFRpbWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGFnZVRpbWVbMF0gKyB0aGlzLnN0YWdlVGltZVsxXSArIHRoaXMuc3RhZ2VUaW1lWzJdICsgdGhpcy5zdGFnZVRpbWVbM107XHJcbiAgICB9XHJcbn1cclxuIl19