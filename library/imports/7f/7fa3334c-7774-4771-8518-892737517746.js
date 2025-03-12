"use strict";
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