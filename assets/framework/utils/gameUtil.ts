export default class gameUtil {
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
    static calcOfflineReward(cur, remainTime, offlineTime, max, maxTime) {
        if (cur > max) return [];
        let final = cur;
        let finalRemainTime = 0;
        let left = remainTime - offlineTime;
        if (left < 0) {
            let offline_reward = Math.floor(offlineTime / maxTime)
            if (offline_reward <= 0) offline_reward = 1;
            final += Math.min(offline_reward, max - final);
            if (final >= max) {
                finalRemainTime = 0
            } else {
                let left_sec = remainTime - offlineTime % maxTime;
                if (left_sec < 0) left_sec = maxTime + left_sec;
                finalRemainTime = left_sec
            }
        } else {
            finalRemainTime = left;
        }

        return [final, finalRemainTime]
    }


    static isNextDay(timeSec) {
        return this.isGreaterDate(new Date(), new Date(timeSec));
    };

    static isGreaterDate(now, before) {
        var diff = now.getTime() - before.getTime();
        if (diff > 86400000) {
            // 24*60*60*1000
            return true;
        } else {
            if (diff > 0) return now.getDate() != before.getDate();
            else return false;
        }
    };

    static formatSeconds(time) {
        var h = Math.floor(time / 3600);
        var m = Math.floor(time / 60 - h * 60);
        var s = Math.floor(time - m * 60 - h * 3600);
        var start = h > 0 ? (h < 10 ? "0" + h : h) + ":" : "";
        var end = m + ":" + (s < 10 ? "0" + s : s);
        return start + end;
    }

}