export default class Signal {
    allReceivers: { c, t }[] = []

    constructor(c?, t?) {
    }
//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
    add(c: Function, t?) {
        let receiver = this.allReceivers.find(v => v.c == c && v.t == t)
        if (!receiver)
            this.allReceivers.push({ c, t })
    }

    remove(c: Function, t?) {
        this.allReceivers = this.allReceivers.filter(v => v.c != c && v.t != t)
    }

    fire(...ps) {
        for (var i = 0; i < this.allReceivers.length; i++) {
            let v = this.allReceivers[i];
            if (v.c)
                v.c.call(v.t, ...ps);
            else
                console.warn("not found callback ", v.c, v.t)
        }

    }

    on(c: Function, t?) {
        this.remove(c, t);
        this.add(c, t);
    }
    off(c: Function, t?) {
        this.remove(c, t);
    }

    clear() {
        this.allReceivers.splice(0);
        this.rejectCallback = null

    }

    once(callback, rejectCallback) {
        let h = () => {
            this.remove(h);
            callback && callback();
        }
        this.rejectCallback = rejectCallback;
        this.add(h);
    }

    rejectCallback: any = null;

    cancel() {
        if (this.rejectCallback) {
            this.rejectCallback("canceled")
            this.rejectCallback = null;
        }
    }

    wait() {
        return new Promise((resolve, reject) => {
            this.once(resolve, reject);
        })
    }
}