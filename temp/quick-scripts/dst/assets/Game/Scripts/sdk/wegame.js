
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/sdk/wegame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7fa33NMd3RHcYUYiSc3UXdG', 'wegame');
// Game/Scripts/sdk/wegame.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Platform_1 = require("../../../framework/extension/Platform");
var Cloud_1 = require("./Cloud");
var cheatInfo_1 = require("./cheatInfo");
var wegame = /** @class */ (function () {
    function wegame() {
    }
    wegame.init = function (comp) {
        this.comp = comp;
    };
    /**骗点
     * comp  view绑定的脚本
     * normal 正常的节点
     * fake 骗点的节点
     * timeout 真节点出来的延迟时间
    */
    wegame.enableFakeForAdClick = function (normal, fake, timeout, errorCallback) {
        try {
            normal.active = false;
            fake.active = true;
            Platform_1.default.hideBannerAd();
            var scene_1 = cc.director.getScene().name;
            var recovery = function () {
                var lastscene = cc.director.getScene().name;
                if (lastscene == scene_1) {
                    Platform_1.default.showBannerAd(errorCallback);
                    fake.active = false;
                    normal.active = true;
                }
            };
            // comp.scheduleOnce(recovery, timeout)
            this.timer_fake = setTimeout(recovery, timeout * 1000);
            return recovery;
        }
        catch (e) {
            console.warn(e);
        }
    };
    wegame.clear = function () {
        // comp.unscheduleAllCallbacks();
        clearTimeout(this.timer_fake);
    };
    // static scheduleOnce(func, timeout) {
    //     this.comp.scheduleOnce(func, timeout);
    // }
    // static unschedule(func) {
    //     this.comp.unschedule(func);
    // }
    wegame.getStatus = function (feature_id) {
        if (Cloud_1.default.funcs == null) {
            return -1;
        }
        var feature = Cloud_1.default.funcs[feature_id];
        if (feature) {
            return feature.status;
        }
        else {
            return -1;
        }
    };
    wegame.isCheatOpen = function (feature_id) {
        if (Cloud_1.default.funcs == null) {
            return false;
        }
        var feature = Cloud_1.default.funcs[feature_id];
        if (!feature)
            return false;
        if (feature.status == 1) {
            var num = parseInt(feature.show_num);
            if (!isNaN(num)) {
                if (cheatInfo_1.CheatInfo.getCount(feature_id) < num) {
                    // 次数未达最大次数
                    var rate = parseFloat(feature.show_per);
                    if (!isNaN(num)) {
                        if (Math.random() < rate) {
                            return true;
                        }
                        console.log("[wegame]屏蔽id:" + feature_id + "未过概率");
                        return false;
                    }
                    else {
                        return true;
                    }
                }
                console.log("[wegame]屏蔽id:" + feature_id + "次数已民达上限");
                return false;
            }
            else {
                return true;
            }
        }
        console.log("[wegame]屏蔽id:" + feature_id + "未开启");
        return false;
    };
    /**标记已打开 */
    wegame.markOpen = function (feature_id) {
        cheatInfo_1.CheatInfo.markOpen(feature_id);
    };
    wegame.registerUI = function (feature_id, viewpath) {
        this.view_paths[feature_id] = viewpath;
    };
    /**打开普通功能（受次数限制)  ，不受屏蔽接口控制 */
    wegame.openFeature = function (feature_id, max, data, callback, target) {
        var c = cheatInfo_1.CheatInfo.getCount(feature_id);
        if (c < max) {
            var viewpath = this.view_paths[feature_id];
            if (viewpath) {
                vm.show(viewpath, data, callback, target);
            }
            cheatInfo_1.CheatInfo.markOpen(feature_id);
            return true;
        }
        console.log("[wegame]打开功能失败: [" + feature_id + "]，已超过今天使用次数！(" + c + "/" + max + ")");
        return false;
    };
    wegame.tryOpenFeature = function (feature_id, max, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var b = _this.openFeature(feature_id, max, data, resolve);
            if (!b) {
                Promise.reject(false);
            }
        });
    };
    /** 尝试打开屏蔽接口的ui ：红包雨功能 ， 疯狂点击 功能等等 */
    wegame.openCheat = function (feature_id, data, callback, target) {
        if (this.isCheatOpen(feature_id)) {
            var viewpath = this.view_paths[feature_id];
            if (viewpath) {
                vm.show(viewpath, data, callback, target);
                cheatInfo_1.CheatInfo.markOpen(feature_id);
                return true;
            }
        }
        console.log("[wegame]打开屏蔽功能失败: [" + feature_id + "]，未开启，或者超过使用次数，或者概率");
        return false;
    };
    wegame.tryOpenCheat = function (feature_id, data, callback, target) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var b = _this.openCheat(feature_id, data, callback, target);
            if (!b) {
                reject(false);
            }
            else {
                resolve(true);
            }
        });
    };
    // not destroy node
    wegame.comp = null;
    wegame.timer_fake = 0;
    wegame.view_paths = {};
    return wegame;
}());
exports.default = wegame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcc2RrXFx3ZWdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBNkQ7QUFDN0QsaUNBQTRCO0FBQzVCLHlDQUF3QztBQUV4QztJQUFBO0lBNkpBLENBQUM7SUF6SlUsV0FBSSxHQUFYLFVBQVksSUFBa0I7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUlEOzs7OztNQUtFO0lBQ0ssMkJBQW9CLEdBQTNCLFVBQTRCLE1BQWUsRUFBRSxJQUFhLEVBQUUsT0FBZSxFQUFFLGFBQWM7UUFDdkYsSUFBSTtZQUNBLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLGtCQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDeEIsSUFBSSxPQUFLLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDeEMsSUFBSSxRQUFRLEdBQUc7Z0JBQ1gsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQzVDLElBQUksU0FBUyxJQUFJLE9BQUssRUFBRTtvQkFDcEIsa0JBQVEsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNwQixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztpQkFDeEI7WUFDTCxDQUFDLENBQUE7WUFDRCx1Q0FBdUM7WUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFFLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQztZQUN2RCxPQUFPLFFBQVEsQ0FBQztTQUNuQjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1IsT0FBTyxDQUFDLElBQUks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QUNmO1NBQ0o7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQVUsR0FBRyxxQkFBcUIsQ0FBQyxDQUFBO1FBQ3ZFLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxtQkFBWSxHQUFuQixVQUFvQixVQUFVLEVBQUUsSUFBSyxFQUFFLFFBQVMsRUFBRSxNQUFPO1FBQXpELGlCQVNDO1FBUkcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLElBQUksQ0FBQyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUE7WUFDMUQsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDSixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDakI7aUJBQU07Z0JBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pCO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBMUpELG1CQUFtQjtJQUNaLFdBQUksR0FBaUIsSUFBSSxDQUFDO0lBTTFCLGlCQUFVLEdBQVcsQ0FBQyxDQUFDO0lBNEZ2QixpQkFBVSxHQUFPLEVBQUUsQ0FBQTtJQXlEOUIsYUFBQztDQTdKRCxBQTZKQyxJQUFBO2tCQTdKb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2V4dGVuc2lvbi9QbGF0Zm9ybVwiO1xuaW1wb3J0IENsb3VkIGZyb20gXCIuL0Nsb3VkXCI7XG5pbXBvcnQgeyBDaGVhdEluZm8gfSBmcm9tIFwiLi9jaGVhdEluZm9cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgd2VnYW1lIHtcbiAgICAvLyBub3QgZGVzdHJveSBub2RlXG4gICAgc3RhdGljIGNvbXA6IGNjLkNvbXBvbmVudCA9IG51bGw7XG5cbiAgICBzdGF0aWMgaW5pdChjb21wOiBjYy5Db21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5jb21wID0gY29tcDtcbiAgICB9XG5cbiAgICBzdGF0aWMgdGltZXJfZmFrZTogbnVtYmVyID0gMDtcblxuICAgIC8qKumql+eCuSBcbiAgICAgKiBjb21wICB2aWV357uR5a6a55qE6ISa5pysXG4gICAgICogbm9ybWFsIOato+W4uOeahOiKgueCuVxuICAgICAqIGZha2Ug6aqX54K555qE6IqC54K5XG4gICAgICogdGltZW91dCDnnJ/oioLngrnlh7rmnaXnmoTlu7bov5/ml7bpl7QgXG4gICAgKi9cbiAgICBzdGF0aWMgZW5hYmxlRmFrZUZvckFkQ2xpY2sobm9ybWFsOiBjYy5Ob2RlLCBmYWtlOiBjYy5Ob2RlLCB0aW1lb3V0OiBudW1iZXIsIGVycm9yQ2FsbGJhY2s/KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBub3JtYWwuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBmYWtlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBQbGF0Zm9ybS5oaWRlQmFubmVyQWQoKTtcbiAgICAgICAgICAgIGxldCBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZTtcbiAgICAgICAgICAgIGxldCByZWNvdmVyeSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbGFzdHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lO1xuICAgICAgICAgICAgICAgIGlmIChsYXN0c2NlbmUgPT0gc2NlbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgUGxhdGZvcm0uc2hvd0Jhbm5lckFkKGVycm9yQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICBmYWtlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBub3JtYWwuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb21wLnNjaGVkdWxlT25jZShyZWNvdmVyeSwgdGltZW91dClcbiAgICAgICAgICAgIHRoaXMudGltZXJfZmFrZSA9IHNldFRpbWVvdXQocmVjb3ZlcnksIHRpbWVvdXQgKiAxMDAwKTtcbiAgICAgICAgICAgIHJldHVybiByZWNvdmVyeTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNsZWFyKCkge1xuICAgICAgICAvLyBjb21wLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXJfZmFrZSk7XG4gICAgfVxuXG4gICAgLy8gc3RhdGljIHNjaGVkdWxlT25jZShmdW5jLCB0aW1lb3V0KSB7XG4gICAgLy8gICAgIHRoaXMuY29tcC5zY2hlZHVsZU9uY2UoZnVuYywgdGltZW91dCk7XG4gICAgLy8gfVxuXG5cbiAgICAvLyBzdGF0aWMgdW5zY2hlZHVsZShmdW5jKSB7XG4gICAgLy8gICAgIHRoaXMuY29tcC51bnNjaGVkdWxlKGZ1bmMpO1xuICAgIC8vIH1cbiAgICBzdGF0aWMgZ2V0U3RhdHVzKGZlYXR1cmVfaWQ6IG51bWJlcikge1xuICAgICAgICBpZiAoQ2xvdWQuZnVuY3MgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmZWF0dXJlID0gQ2xvdWQuZnVuY3NbZmVhdHVyZV9pZF1cbiAgICAgICAgaWYgKGZlYXR1cmUpIHtcbiAgICAgICAgICAgIHJldHVybiBmZWF0dXJlLnN0YXR1cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBpc0NoZWF0T3BlbihmZWF0dXJlX2lkOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKENsb3VkLmZ1bmNzID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZmVhdHVyZSA9IENsb3VkLmZ1bmNzW2ZlYXR1cmVfaWRdXG4gICAgICAgIGlmICghZmVhdHVyZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoZmVhdHVyZS5zdGF0dXMgPT0gMSkge1xuICAgICAgICAgICAgbGV0IG51bSA9IHBhcnNlSW50KGZlYXR1cmUuc2hvd19udW0pO1xuICAgICAgICAgICAgaWYgKCFpc05hTihudW0pKSB7XG4gICAgICAgICAgICAgICAgaWYgKENoZWF0SW5mby5nZXRDb3VudChmZWF0dXJlX2lkKSA8IG51bSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDmrKHmlbDmnKrovr7mnIDlpKfmrKHmlbBcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhdGUgPSBwYXJzZUZsb2F0KGZlYXR1cmUuc2hvd19wZXIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKG51bSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgcmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlt3ZWdhbWVd5bGP6JS9aWQ6XCIgKyBmZWF0dXJlX2lkICsgXCLmnKrov4fmpoLnjodcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW3dlZ2FtZV3lsY/olL1pZDpcIiArIGZlYXR1cmVfaWQgKyBcIuasoeaVsOW3suawkei+vuS4iumZkFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIlt3ZWdhbWVd5bGP6JS9aWQ6XCIgKyBmZWF0dXJlX2lkICsgXCLmnKrlvIDlkK9cIilcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKuagh+iusOW3suaJk+W8gCAqL1xuICAgIHN0YXRpYyBtYXJrT3BlbihmZWF0dXJlX2lkKSB7XG4gICAgICAgIENoZWF0SW5mby5tYXJrT3BlbihmZWF0dXJlX2lkKVxuICAgIH1cblxuICAgIHN0YXRpYyB2aWV3X3BhdGhzOiB7fSA9IHt9XG5cbiAgICBzdGF0aWMgcmVnaXN0ZXJVSShmZWF0dXJlX2lkLCB2aWV3cGF0aCkge1xuICAgICAgICB0aGlzLnZpZXdfcGF0aHNbZmVhdHVyZV9pZF0gPSB2aWV3cGF0aDtcbiAgICB9XG5cbiAgICAvKirmiZPlvIDmma7pgJrlip/og73vvIjlj5fmrKHmlbDpmZDliLYpICDvvIzkuI3lj5flsY/olL3mjqXlj6PmjqfliLYgKi9cbiAgICBzdGF0aWMgb3BlbkZlYXR1cmUoZmVhdHVyZV9pZCwgbWF4LCBkYXRhLCBjYWxsYmFjaz8sIHRhcmdldD8pIHtcbiAgICAgICAgbGV0IGMgPSBDaGVhdEluZm8uZ2V0Q291bnQoZmVhdHVyZV9pZCk7XG4gICAgICAgIGlmIChjIDwgbWF4KSB7XG4gICAgICAgICAgICBsZXQgdmlld3BhdGggPSB0aGlzLnZpZXdfcGF0aHNbZmVhdHVyZV9pZF1cbiAgICAgICAgICAgIGlmICh2aWV3cGF0aCkge1xuICAgICAgICAgICAgICAgIHZtLnNob3codmlld3BhdGgsIGRhdGEsIGNhbGxiYWNrLCB0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQ2hlYXRJbmZvLm1hcmtPcGVuKGZlYXR1cmVfaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIlt3ZWdhbWVd5omT5byA5Yqf6IO95aSx6LSlOiBbXCIgKyBmZWF0dXJlX2lkICsgXCJd77yM5bey6LaF6L+H5LuK5aSp5L2/55So5qyh5pWw77yBKFwiICsgYyArIFwiL1wiICsgbWF4ICsgXCIpXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc3RhdGljIHRyeU9wZW5GZWF0dXJlKGZlYXR1cmVfaWQsIG1heCwgZGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IGIgPSB0aGlzLm9wZW5GZWF0dXJlKGZlYXR1cmVfaWQsIG1heCwgZGF0YSwgcmVzb2x2ZSlcbiAgICAgICAgICAgIGlmICghYikge1xuICAgICAgICAgICAgICAgIFByb21pc2UucmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cblxuXG4gICAgLyoqIOWwneivleaJk+W8gOWxj+iUveaOpeWPo+eahHVpIO+8mue6ouWMhembqOWKn+iDvSDvvIwg55av54uC54K55Ye7IOWKn+iDveetieetiSAqL1xuICAgIHN0YXRpYyBvcGVuQ2hlYXQoZmVhdHVyZV9pZCwgZGF0YT8sIGNhbGxiYWNrPywgdGFyZ2V0Pykge1xuICAgICAgICBpZiAodGhpcy5pc0NoZWF0T3BlbihmZWF0dXJlX2lkKSkge1xuICAgICAgICAgICAgbGV0IHZpZXdwYXRoID0gdGhpcy52aWV3X3BhdGhzW2ZlYXR1cmVfaWRdXG4gICAgICAgICAgICBpZiAodmlld3BhdGgpIHtcbiAgICAgICAgICAgICAgICB2bS5zaG93KHZpZXdwYXRoLCBkYXRhLCBjYWxsYmFjaywgdGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBDaGVhdEluZm8ubWFya09wZW4oZmVhdHVyZV9pZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJbd2VnYW1lXeaJk+W8gOWxj+iUveWKn+iDveWksei0pTogW1wiICsgZmVhdHVyZV9pZCArIFwiXe+8jOacquW8gOWQr++8jOaIluiAhei2hei/h+S9v+eUqOasoeaVsO+8jOaIluiAheamgueOh1wiKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc3RhdGljIHRyeU9wZW5DaGVhdChmZWF0dXJlX2lkLCBkYXRhPywgY2FsbGJhY2s/LCB0YXJnZXQ/KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgYiA9IHRoaXMub3BlbkNoZWF0KGZlYXR1cmVfaWQsIGRhdGEsIGNhbGxiYWNrLCB0YXJnZXQpXG4gICAgICAgICAgICBpZiAoIWIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxufSJdfQ==