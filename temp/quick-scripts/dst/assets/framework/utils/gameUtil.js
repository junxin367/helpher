
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/utils/gameUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fd3fbeRYElF2LD1BNBqy3uS', 'gameUtil');
// framework/utils/gameUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gameUtil = /** @class */ (function () {
    function gameUtil() {
    }
    //电子邮件puhalskijsemen@gmail.com
    //源码网站 开vpn全局模式打开 http://web3incubators.com/
    //电报https://t.me/gamecode999
    //网页客服 http://web3incubators.com/kefu.html
    /**
     * 离线奖励计算算法(所有时间均以秒为单位 )
     * 以体力为例
     * @param cur 当前（体力）
     * @param remainTime 剩余时间（恢复下一个(体力)）
     * @param max 最大恢复(体力)（最多能恢复多少(体力）)
     * @param maxTime 恢复一个(体力)使用的时间
     * @param offlineTime 离线了多长时间
     * 返回值 [奖励后的（体力）， 奖励后的剩余时间 ]
    */
    gameUtil.calcOfflineReward = function (cur, remainTime, offlineTime, max, maxTime) {
        if (cur > max)
            return [];
        var final = cur;
        var finalRemainTime = 0;
        var left = remainTime - offlineTime;
        if (left < 0) {
            var offline_reward = Math.floor(offlineTime / maxTime);
            if (offline_reward <= 0)
                offline_reward = 1;
            final += Math.min(offline_reward, max - final);
            if (final >= max) {
                finalRemainTime = 0;
            }
            else {
                var left_sec = remainTime - offlineTime % maxTime;
                if (left_sec < 0)
                    left_sec = maxTime + left_sec;
                finalRemainTime = left_sec;
            }
        }
        else {
            finalRemainTime = left;
        }
        return [final, finalRemainTime];
    };
    gameUtil.isNextDay = function (timeSec) {
        return this.isGreaterDate(new Date(), new Date(timeSec));
    };
    ;
    gameUtil.isGreaterDate = function (now, before) {
        var diff = now.getTime() - before.getTime();
        if (diff > 86400000) {
            // 24*60*60*1000
            return true;
        }
        else {
            if (diff > 0)
                return now.getDate() != before.getDate();
            else
                return false;
        }
    };
    ;
    gameUtil.formatSeconds = function (time) {
        var h = Math.floor(time / 3600);
        var m = Math.floor(time / 60 - h * 60);
        var s = Math.floor(time - m * 60 - h * 3600);
        var start = h > 0 ? (h < 10 ? "0" + h : h) + ":" : "";
        var end = m + ":" + (s < 10 ? "0" + s : s);
        return start + end;
    };
    return gameUtil;
}());
exports.default = gameUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx1dGlsc1xcZ2FtZVV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBK0RBLENBQUM7SUE5REQsOEJBQThCO0lBQzlCLDRDQUE0QztJQUM1Qyw0QkFBNEI7SUFDNUIsMENBQTBDO0lBQ3RDOzs7Ozs7Ozs7TUFTRTtJQUNLLDBCQUFpQixHQUF4QixVQUF5QixHQUFHLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsT0FBTztRQUMvRCxJQUFJLEdBQUcsR0FBRyxHQUFHO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFDekIsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLElBQUksR0FBRyxVQUFVLEdBQUcsV0FBVyxDQUFDO1FBQ3BDLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNWLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxDQUFBO1lBQ3RELElBQUksY0FBYyxJQUFJLENBQUM7Z0JBQUUsY0FBYyxHQUFHLENBQUMsQ0FBQztZQUM1QyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQy9DLElBQUksS0FBSyxJQUFJLEdBQUcsRUFBRTtnQkFDZCxlQUFlLEdBQUcsQ0FBQyxDQUFBO2FBQ3RCO2lCQUFNO2dCQUNILElBQUksUUFBUSxHQUFHLFVBQVUsR0FBRyxXQUFXLEdBQUcsT0FBTyxDQUFDO2dCQUNsRCxJQUFJLFFBQVEsR0FBRyxDQUFDO29CQUFFLFFBQVEsR0FBRyxPQUFPLEdBQUcsUUFBUSxDQUFDO2dCQUNoRCxlQUFlLEdBQUcsUUFBUSxDQUFBO2FBQzdCO1NBQ0o7YUFBTTtZQUNILGVBQWUsR0FBRyxJQUFJLENBQUM7U0FDMUI7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFHTSxrQkFBUyxHQUFoQixVQUFpQixPQUFPO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUFBLENBQUM7SUFFSyxzQkFBYSxHQUFwQixVQUFxQixHQUFHLEVBQUUsTUFBTTtRQUM1QixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVDLElBQUksSUFBSSxHQUFHLFFBQVEsRUFBRTtZQUNqQixnQkFBZ0I7WUFDaEIsT0FBTyxJQUFJLENBQUM7U0FDZjthQUFNO1lBQ0gsSUFBSSxJQUFJLEdBQUcsQ0FBQztnQkFBRSxPQUFPLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7O2dCQUNsRCxPQUFPLEtBQUssQ0FBQztTQUNyQjtJQUNMLENBQUM7SUFBQSxDQUFDO0lBRUssc0JBQWEsR0FBcEIsVUFBcUIsSUFBSTtRQUNyQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdEQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNDLE9BQU8sS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUN2QixDQUFDO0lBRUwsZUFBQztBQUFELENBL0RBLEFBK0RDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBnYW1lVXRpbCB7XHJcbi8v55S15a2Q6YKu5Lu2cHVoYWxza2lqc2VtZW5AZ21haWwuY29tXHJcbi8v5rqQ56CB572R56uZIOW8gHZwbuWFqOWxgOaooeW8j+aJk+W8gCBodHRwOi8vd2ViM2luY3ViYXRvcnMuY29tL1xyXG4vL+eUteaKpWh0dHBzOi8vdC5tZS9nYW1lY29kZTk5OVxyXG4vL+e9kemhteWuouacjSBodHRwOi8vd2ViM2luY3ViYXRvcnMuY29tL2tlZnUuaHRtbFxyXG4gICAgLyoqXHJcbiAgICAgKiDnprvnur/lpZblirHorqHnrpfnrpfms5Uo5omA5pyJ5pe26Ze05Z2H5Lul56eS5Li65Y2V5L2NIClcclxuICAgICAqIOS7peS9k+WKm+S4uuS+i1xyXG4gICAgICogQHBhcmFtIGN1ciDlvZPliY3vvIjkvZPlipvvvIlcclxuICAgICAqIEBwYXJhbSByZW1haW5UaW1lIOWJqeS9meaXtumXtO+8iOaBouWkjeS4i+S4gOS4qijkvZPlipsp77yJXHJcbiAgICAgKiBAcGFyYW0gbWF4IOacgOWkp+aBouWkjSjkvZPlipsp77yI5pyA5aSa6IO95oGi5aSN5aSa5bCRKOS9k+WKm++8iSlcclxuICAgICAqIEBwYXJhbSBtYXhUaW1lIOaBouWkjeS4gOS4qijkvZPlipsp5L2/55So55qE5pe26Ze0IFxyXG4gICAgICogQHBhcmFtIG9mZmxpbmVUaW1lIOemu+e6v+S6huWkmumVv+aXtumXtFxyXG4gICAgICog6L+U5Zue5YC8IFvlpZblirHlkI7nmoTvvIjkvZPlipvvvInvvIwg5aWW5Yqx5ZCO55qE5Ymp5L2Z5pe26Ze0IF1cclxuICAgICovXHJcbiAgICBzdGF0aWMgY2FsY09mZmxpbmVSZXdhcmQoY3VyLCByZW1haW5UaW1lLCBvZmZsaW5lVGltZSwgbWF4LCBtYXhUaW1lKSB7XHJcbiAgICAgICAgaWYgKGN1ciA+IG1heCkgcmV0dXJuIFtdO1xyXG4gICAgICAgIGxldCBmaW5hbCA9IGN1cjtcclxuICAgICAgICBsZXQgZmluYWxSZW1haW5UaW1lID0gMDtcclxuICAgICAgICBsZXQgbGVmdCA9IHJlbWFpblRpbWUgLSBvZmZsaW5lVGltZTtcclxuICAgICAgICBpZiAobGVmdCA8IDApIHtcclxuICAgICAgICAgICAgbGV0IG9mZmxpbmVfcmV3YXJkID0gTWF0aC5mbG9vcihvZmZsaW5lVGltZSAvIG1heFRpbWUpXHJcbiAgICAgICAgICAgIGlmIChvZmZsaW5lX3Jld2FyZCA8PSAwKSBvZmZsaW5lX3Jld2FyZCA9IDE7XHJcbiAgICAgICAgICAgIGZpbmFsICs9IE1hdGgubWluKG9mZmxpbmVfcmV3YXJkLCBtYXggLSBmaW5hbCk7XHJcbiAgICAgICAgICAgIGlmIChmaW5hbCA+PSBtYXgpIHtcclxuICAgICAgICAgICAgICAgIGZpbmFsUmVtYWluVGltZSA9IDBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBsZWZ0X3NlYyA9IHJlbWFpblRpbWUgLSBvZmZsaW5lVGltZSAlIG1heFRpbWU7XHJcbiAgICAgICAgICAgICAgICBpZiAobGVmdF9zZWMgPCAwKSBsZWZ0X3NlYyA9IG1heFRpbWUgKyBsZWZ0X3NlYztcclxuICAgICAgICAgICAgICAgIGZpbmFsUmVtYWluVGltZSA9IGxlZnRfc2VjXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmaW5hbFJlbWFpblRpbWUgPSBsZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtmaW5hbCwgZmluYWxSZW1haW5UaW1lXVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgaXNOZXh0RGF5KHRpbWVTZWMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0dyZWF0ZXJEYXRlKG5ldyBEYXRlKCksIG5ldyBEYXRlKHRpbWVTZWMpKTtcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGlzR3JlYXRlckRhdGUobm93LCBiZWZvcmUpIHtcclxuICAgICAgICB2YXIgZGlmZiA9IG5vdy5nZXRUaW1lKCkgLSBiZWZvcmUuZ2V0VGltZSgpO1xyXG4gICAgICAgIGlmIChkaWZmID4gODY0MDAwMDApIHtcclxuICAgICAgICAgICAgLy8gMjQqNjAqNjAqMTAwMFxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZGlmZiA+IDApIHJldHVybiBub3cuZ2V0RGF0ZSgpICE9IGJlZm9yZS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGZvcm1hdFNlY29uZHModGltZSkge1xyXG4gICAgICAgIHZhciBoID0gTWF0aC5mbG9vcih0aW1lIC8gMzYwMCk7XHJcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKHRpbWUgLyA2MCAtIGggKiA2MCk7XHJcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKHRpbWUgLSBtICogNjAgLSBoICogMzYwMCk7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gaCA+IDAgPyAoaCA8IDEwID8gXCIwXCIgKyBoIDogaCkgKyBcIjpcIiA6IFwiXCI7XHJcbiAgICAgICAgdmFyIGVuZCA9IG0gKyBcIjpcIiArIChzIDwgMTAgPyBcIjBcIiArIHMgOiBzKTtcclxuICAgICAgICByZXR1cm4gc3RhcnQgKyBlbmQ7XHJcbiAgICB9XHJcblxyXG59Il19