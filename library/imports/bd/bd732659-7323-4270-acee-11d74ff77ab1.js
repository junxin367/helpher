"use strict";
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