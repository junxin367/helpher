export default class Net {

    static Code = {
        Error: "__error__",
        Success: 1,
        Timeout: "__timeout__"
    }

    _timeout:number = 8000;

    setTimeout(v){
        this._timeout = v;
    }

    httpRequest(url, method, params?): Promise<string> {
        console.log('[' + method + ']: ' + url)
        return new Promise(_ => {
            var time = false;//是否超时
            var timer = setTimeout(function(){
                time = true;
                xhr.abort();//请求中止
                _(Net.Code.Timeout);
            },this._timeout);
            var xhr = new XMLHttpRequest;
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        var respone = xhr.responseText;
                        if(time) return;//请求已经超时，忽略中止请求
                        clearTimeout(timer);//取消等待的超时    
                        _(respone);
                    } else {
                        _(null);
                    }
                }
            };
            xhr.open(method, url, true);

            if (cc.sys.isNative) {
                xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
            }
            Object.keys(this.headers).forEach(k => {
                let v = this.headers[k];
                xhr.setRequestHeader(k, v);
            })

            // note: In Internet Explorer, the timeout property may be set only after calling the open()
            // method and before calling the send() method.
            xhr.timeout = this._timeout;// 8 seconds for timeout
            if (method == "POST" || method == "PUT") {
                //set params to body 
                xhr.setRequestHeader("Content-Type", "application/json")
                xhr.send(params);
            } else {
                xhr.send();
            }

        })

    }

    headers = {};

    setHeader(key, value) {
        this.headers[key] = value
    }


    httpGet(url, params?) {
        if (params && url.indexOf("?") == -1) {
            if (Object.keys(params).length > 0)
                url += "?"
        }
        if (params)
            url += Object.keys(params).map(k => `${k}=${params[k]}`).join("&")
        return this.httpRequest(url, 'GET')
    }

    httpPost(url, params?): Promise<string> {
        return this.httpRequest(url, "POST", params);
    }

    httpPut(url, params?) {
        return this.httpRequest(url, "PUT", params);
    }



}

export let net: Net = new Net();