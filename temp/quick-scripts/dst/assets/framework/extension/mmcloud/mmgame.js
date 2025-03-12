
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/mmcloud/mmgame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c89d2F9doxIWJBTiiRe+voV', 'mmgame');
// framework/extension/mmcloud/mmgame.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Platform_1 = require("../Platform");
var cheatInfoDC_1 = require("./cheatInfoDC");
var Cloud_1 = require("./Cloud");
var mmgame = /** @class */ (function () {
    function mmgame() {
    }
    mmgame.init = function (comp) {
        this.comp = comp;
    };
    /**骗点
     * comp  view绑定的脚本
     * normal 正常的节点
     * fake 骗点的节点
     * timeout 真节点出来的延迟时间
    */
    mmgame.enableFakeForAdClick = function (normal, fake, timeout, errorCallback) {
        try {
            normal.active = false;
            fake.active = true;
            // Platform.hideBannerAd();
            var scene_1 = cc.director.getScene().name;
            var recovery = function () {
                var lastscene = cc.director.getScene().name;
                if (lastscene == scene_1) {
                    console.log("*************banner---------5");
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
    mmgame.clear = function () {
        // comp.unscheduleAllCallbacks();
        clearTimeout(this.timer_fake);
    };
    // static scheduleOnce(func, timeout) {
    //     this.comp.scheduleOnce(func, timeout);
    // }
    // static unschedule(func) {
    //     this.comp.unschedule(func);
    // }
    mmgame.getStatus = function (feature_id) {
        if (Cloud_1.default.config.globalSwitch == 0) {
            return 0;
        }
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
    mmgame.isCheatOpen = function (feature_id) {
        if (Cloud_1.default.config.globalSwitch == 0) {
            return false;
        }
        if (Cloud_1.default.funcs == null) {
            return false;
        }
        var feature = Cloud_1.default.funcs[feature_id];
        if (!feature)
            return false;
        if (feature.status == 1) {
            var num = parseInt(feature.max);
            if (!isNaN(num)) {
                if (cheatInfoDC_1.CheatInfo.getCount(feature_id) < num) {
                    // 次数未达最大次数
                    var rate = parseFloat(feature.ratio);
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
                console.log("[wegame]屏蔽id:" + feature_id + "次数已民达上限" + cheatInfoDC_1.CheatInfo.getCount(feature_id));
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
    mmgame.markOpen = function (feature_id) {
        cheatInfoDC_1.CheatInfo.markOpen(feature_id);
    };
    mmgame.registerUI = function (feature_id, viewpath) {
        this.view_paths[feature_id] = viewpath;
    };
    /**打开普通功能（受次数限制)  ，不受屏蔽接口控制 */
    mmgame.openFeature = function (feature_id, max, data, callback, target) {
        var c = cheatInfoDC_1.CheatInfo.getCount(feature_id);
        if (c < max) {
            var viewpath = this.view_paths[feature_id];
            if (viewpath) {
                vm.show(viewpath, data, callback, target);
            }
            cheatInfoDC_1.CheatInfo.markOpen(feature_id);
            return true;
        }
        console.log("[wegame]打开功能失败: [" + feature_id + "]，已超过今天使用次数！(" + c + "/" + max + ")");
        return false;
    };
    mmgame.tryOpenFeature = function (feature_id, max, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var b = _this.openFeature(feature_id, max, data, resolve);
            if (!b) {
                Promise.reject(false);
            }
        });
    };
    /** 尝试打开屏蔽接口的ui ：红包雨功能 ， 疯狂点击 功能等等 */
    mmgame.openCheat = function (feature_id, data, callback, target) {
        if (this.isCheatOpen(feature_id)) {
            var viewpath = this.view_paths[feature_id];
            if (viewpath) {
                vm.show(viewpath, data, callback, target);
                cheatInfoDC_1.CheatInfo.markOpen(feature_id);
                return true;
            }
        }
        console.log("[wegame]打开屏蔽功能失败: [" + feature_id + "]，未开启，或者超过使用次数，或者概率");
        return false;
    };
    mmgame.tryOpenCheat = function (feature_id, data, callback, target) {
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
    mmgame.comp = null;
    mmgame.timer_fake = 0;
    mmgame.view_paths = {};
    return mmgame;
}());
exports.default = mmgame;
window["mmgame"] = mmgame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXG1tY2xvdWRcXG1tZ2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHdDQUFtQztBQUNuQyw2Q0FBMEM7QUFDMUMsaUNBQTRCO0FBRTVCO0lBQUE7SUFvS0EsQ0FBQztJQWhLVSxXQUFJLEdBQVgsVUFBWSxJQUFrQjtRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBSUQ7Ozs7O01BS0U7SUFDSywyQkFBb0IsR0FBM0IsVUFBNEIsTUFBZSxFQUFFLElBQWEsRUFBRSxPQUFlLEVBQUUsYUFBYztRQUN2RixJQUFJO1lBQ0EsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsMkJBQTJCO1lBQzNCLElBQUksT0FBSyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ3hDLElBQUksUUFBUSxHQUFHO2dCQUNYLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUM1QyxJQUFJLFNBQVMsSUFBSSxPQUFLLEVBQUU7b0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQTtvQkFDNUMsa0JBQVEsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNwQixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztpQkFDeEI7WUFDTCxDQUFDLENBQUE7WUFDRCx1Q0FBdUM7WUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFFLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQztZQUN2RCxPQUFPLFFBQVEsQ0FBQztTQUNuQjtRQUFD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IFBsYXRmb3JtIGZyb20gXCIuLi9QbGF0Zm9ybVwiO1xuaW1wb3J0IHsgQ2hlYXRJbmZvIH0gZnJvbSBcIi4vY2hlYXRJbmZvRENcIjtcbmltcG9ydCBDbG91ZCBmcm9tIFwiLi9DbG91ZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtbWdhbWUge1xuICAgIC8vIG5vdCBkZXN0cm95IG5vZGVcbiAgICBzdGF0aWMgY29tcDogY2MuQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIHN0YXRpYyBpbml0KGNvbXA6IGNjLkNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmNvbXAgPSBjb21wO1xuICAgIH1cblxuICAgIHN0YXRpYyB0aW1lcl9mYWtlOiBudW1iZXIgPSAwO1xuXG4gICAgLyoq6aqX54K5IFxuICAgICAqIGNvbXAgIHZpZXfnu5HlrprnmoTohJrmnKxcbiAgICAgKiBub3JtYWwg5q2j5bi455qE6IqC54K5XG4gICAgICogZmFrZSDpqpfngrnnmoToioLngrlcbiAgICAgKiB0aW1lb3V0IOecn+iKgueCueWHuuadpeeahOW7tui/n+aXtumXtCBcbiAgICAqL1xuICAgIHN0YXRpYyBlbmFibGVGYWtlRm9yQWRDbGljayhub3JtYWw6IGNjLk5vZGUsIGZha2U6IGNjLk5vZGUsIHRpbWVvdXQ6IG51bWJlciwgZXJyb3JDYWxsYmFjaz8pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG5vcm1hbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGZha2UuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIFBsYXRmb3JtLmhpZGVCYW5uZXJBZCgpO1xuICAgICAgICAgICAgbGV0IHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lO1xuICAgICAgICAgICAgbGV0IHJlY292ZXJ5ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsYXN0c2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RzY2VuZSA9PSBzY2VuZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKipiYW5uZXItLS0tLS0tLS01XCIpXG4gICAgICAgICAgICAgICAgICAgIFBsYXRmb3JtLnNob3dCYW5uZXJBZChlcnJvckNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgZmFrZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29tcC5zY2hlZHVsZU9uY2UocmVjb3ZlcnksIHRpbWVvdXQpXG4gICAgICAgICAgICB0aGlzLnRpbWVyX2Zha2UgPSBzZXRUaW1lb3V0KHJlY292ZXJ5LCB0aW1lb3V0ICogMTAwMCk7XG4gICAgICAgICAgICByZXR1cm4gcmVjb3Zlcnk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjbGVhcigpIHtcbiAgICAgICAgLy8gY29tcC51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyX2Zha2UpO1xuICAgIH1cblxuICAgIC8vIHN0YXRpYyBzY2hlZHVsZU9uY2UoZnVuYywgdGltZW91dCkge1xuICAgIC8vICAgICB0aGlzLmNvbXAuc2NoZWR1bGVPbmNlKGZ1bmMsIHRpbWVvdXQpO1xuICAgIC8vIH1cblxuXG4gICAgLy8gc3RhdGljIHVuc2NoZWR1bGUoZnVuYykge1xuICAgIC8vICAgICB0aGlzLmNvbXAudW5zY2hlZHVsZShmdW5jKTtcbiAgICAvLyB9XG4gICAgc3RhdGljIGdldFN0YXR1cyhmZWF0dXJlX2lkOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKENsb3VkLmNvbmZpZy5nbG9iYWxTd2l0Y2ggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKENsb3VkLmZ1bmNzID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZmVhdHVyZSA9IENsb3VkLmZ1bmNzW2ZlYXR1cmVfaWRdXG4gICAgICAgIGlmIChmZWF0dXJlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmVhdHVyZS5zdGF0dXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgaXNDaGVhdE9wZW4oZmVhdHVyZV9pZDogc3RyaW5nKSB7XG4gICAgICAgIGlmIChDbG91ZC5jb25maWcuZ2xvYmFsU3dpdGNoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQ2xvdWQuZnVuY3MgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmZWF0dXJlID0gQ2xvdWQuZnVuY3NbZmVhdHVyZV9pZF1cbiAgICAgICAgaWYgKCFmZWF0dXJlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChmZWF0dXJlLnN0YXR1cyA9PSAxKSB7XG4gICAgICAgICAgICBsZXQgbnVtID0gcGFyc2VJbnQoZmVhdHVyZS5tYXgpO1xuICAgICAgICAgICAgaWYgKCFpc05hTihudW0pKSB7XG4gICAgICAgICAgICAgICAgaWYgKENoZWF0SW5mby5nZXRDb3VudChmZWF0dXJlX2lkKSA8IG51bSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDmrKHmlbDmnKrovr7mnIDlpKfmrKHmlbBcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhdGUgPSBwYXJzZUZsb2F0KGZlYXR1cmUucmF0aW8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKG51bSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgcmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlt3ZWdhbWVd5bGP6JS9aWQ6XCIgKyBmZWF0dXJlX2lkICsgXCLmnKrov4fmpoLnjodcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW3dlZ2FtZV3lsY/olL1pZDpcIiArIGZlYXR1cmVfaWQgKyBcIuasoeaVsOW3suawkei+vuS4iumZkFwiICsgQ2hlYXRJbmZvLmdldENvdW50KGZlYXR1cmVfaWQpKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIlt3ZWdhbWVd5bGP6JS9aWQ6XCIgKyBmZWF0dXJlX2lkICsgXCLmnKrlvIDlkK9cIilcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKuagh+iusOW3suaJk+W8gCAqL1xuICAgIHN0YXRpYyBtYXJrT3BlbihmZWF0dXJlX2lkKSB7XG4gICAgICAgIENoZWF0SW5mby5tYXJrT3BlbihmZWF0dXJlX2lkKVxuICAgIH1cblxuICAgIHN0YXRpYyB2aWV3X3BhdGhzOiB7fSA9IHt9XG5cbiAgICBzdGF0aWMgcmVnaXN0ZXJVSShmZWF0dXJlX2lkLCB2aWV3cGF0aCkge1xuICAgICAgICB0aGlzLnZpZXdfcGF0aHNbZmVhdHVyZV9pZF0gPSB2aWV3cGF0aDtcbiAgICB9XG5cbiAgICAvKirmiZPlvIDmma7pgJrlip/og73vvIjlj5fmrKHmlbDpmZDliLYpICDvvIzkuI3lj5flsY/olL3mjqXlj6PmjqfliLYgKi9cbiAgICBzdGF0aWMgb3BlbkZlYXR1cmUoZmVhdHVyZV9pZCwgbWF4LCBkYXRhLCBjYWxsYmFjaz8sIHRhcmdldD8pIHtcbiAgICAgICAgbGV0IGMgPSBDaGVhdEluZm8uZ2V0Q291bnQoZmVhdHVyZV9pZCk7XG4gICAgICAgIGlmIChjIDwgbWF4KSB7XG4gICAgICAgICAgICBsZXQgdmlld3BhdGggPSB0aGlzLnZpZXdfcGF0aHNbZmVhdHVyZV9pZF1cbiAgICAgICAgICAgIGlmICh2aWV3cGF0aCkge1xuICAgICAgICAgICAgICAgIHZtLnNob3codmlld3BhdGgsIGRhdGEsIGNhbGxiYWNrLCB0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQ2hlYXRJbmZvLm1hcmtPcGVuKGZlYXR1cmVfaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIlt3ZWdhbWVd5omT5byA5Yqf6IO95aSx6LSlOiBbXCIgKyBmZWF0dXJlX2lkICsgXCJd77yM5bey6LaF6L+H5LuK5aSp5L2/55So5qyh5pWw77yBKFwiICsgYyArIFwiL1wiICsgbWF4ICsgXCIpXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc3RhdGljIHRyeU9wZW5GZWF0dXJlKGZlYXR1cmVfaWQsIG1heCwgZGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IGIgPSB0aGlzLm9wZW5GZWF0dXJlKGZlYXR1cmVfaWQsIG1heCwgZGF0YSwgcmVzb2x2ZSlcbiAgICAgICAgICAgIGlmICghYikge1xuICAgICAgICAgICAgICAgIFByb21pc2UucmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cblxuXG4gICAgLyoqIOWwneivleaJk+W8gOWxj+iUveaOpeWPo+eahHVpIO+8mue6ouWMhembqOWKn+iDvSDvvIwg55av54uC54K55Ye7IOWKn+iDveetieetiSAqL1xuICAgIHN0YXRpYyBvcGVuQ2hlYXQoZmVhdHVyZV9pZCwgZGF0YT8sIGNhbGxiYWNrPywgdGFyZ2V0Pykge1xuICAgICAgICBpZiAodGhpcy5pc0NoZWF0T3BlbihmZWF0dXJlX2lkKSkge1xuICAgICAgICAgICAgbGV0IHZpZXdwYXRoID0gdGhpcy52aWV3X3BhdGhzW2ZlYXR1cmVfaWRdXG4gICAgICAgICAgICBpZiAodmlld3BhdGgpIHtcbiAgICAgICAgICAgICAgICB2bS5zaG93KHZpZXdwYXRoLCBkYXRhLCBjYWxsYmFjaywgdGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBDaGVhdEluZm8ubWFya09wZW4oZmVhdHVyZV9pZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJbd2VnYW1lXeaJk+W8gOWxj+iUveWKn+iDveWksei0pTogW1wiICsgZmVhdHVyZV9pZCArIFwiXe+8jOacquW8gOWQr++8jOaIluiAhei2hei/h+S9v+eUqOasoeaVsO+8jOaIluiAheamgueOh1wiKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc3RhdGljIHRyeU9wZW5DaGVhdChmZWF0dXJlX2lkLCBkYXRhPywgY2FsbGJhY2s/LCB0YXJnZXQ/KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgYiA9IHRoaXMub3BlbkNoZWF0KGZlYXR1cmVfaWQsIGRhdGEsIGNhbGxiYWNrLCB0YXJnZXQpXG4gICAgICAgICAgICBpZiAoIWIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxufVxud2luZG93W1wibW1nYW1lXCJdID0gbW1nYW1lOyJdfQ==